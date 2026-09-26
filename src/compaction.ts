/**
 * dsh-malko-prefs — tunable compaction backend.
 *
 * A thin wrapper around the official `BasicCompactionEngine`:
 *   - the whole official behaviour is inherited (threshold pressure,
 *     overflow recovery, tool-result pruning, durable transactions);
 *   - the effective policy is rebuilt from the live `malkoPrefs` service
 *     before every operation, so a settings edit applies without a restart;
 *   - `summarize()` is overridden to choose the summarization model
 *     (conversation model or a configured one) and to force a reasoning level
 *     (default / off / any level the chosen model declares);
 *   - an optional `agent/status` listener runs one more compaction when the
 *     agent goes idle at the end of a turn.
 *
 * Mounted by the bundle patch in place of the official `compaction-basic` row
 * inside each agent preset.
 */
import { BasicCompactionEngine } from '@deepseek-ai/dsh-compaction-basic'
import { BlockAssembler, createUserMessage } from '@deepseek-ai/dsh-llm'
import { DEFAULT_PREFS } from './prefs.ts'

/**
 * The summarization instruction. Copied from the official engine because it is
 * module-private there; kept verbatim so the checkpoint structure and the
 * prompt-cache-reusing call shape stay identical.
 */
const COMPACTION_INSTRUCTION = [
  'You are now acting as a compaction engine for this AI coding assistant. Condense the conversation ABOVE into a structured checkpoint that lets another model resume the work with no loss of essential context.',
  '',
  'Output EXACTLY the Markdown structure below: keep every section, in order. Use terse bullets, not prose paragraphs. Write "(none)" for an empty section — never drop a section.',
  '',
  '## Primary Request and Intent',
  "- [the user's original and evolving goals; quote verbatim where the exact wording matters]",
  '',
  '## Key Technical Concepts',
  '- [technologies, frameworks, patterns, and conventions in play]',
  '',
  '## Files and Code',
  '- [exact path: why it matters, key changes or snippets]',
  '',
  '## Errors and Fixes',
  '- [error: how it was resolved, plus any related user feedback]',
  '',
  '## Pending Jobs',
  '- [explicitly requested work not yet completed]',
  '',
  '## Current Work',
  '- [precisely what was in progress at this checkpoint]',
  '',
  '## Next Step',
  '- [the single next action, directly in line with the most recent request, or "(none)"]',
  '',
  '## Critical Context',
  '- [decisions and their rationale, constraints, user preferences, open questions, data needed to continue]',
  '',
  'Rules:',
  '- Write concise English engineering prose. Preserve exact file paths, commands, error strings, identifiers, numeric values, function signatures, and syntax fragments.',
  '- Capture user feedback and explicit instructions faithfully, especially corrections.',
  '- Do NOT mention this summarization request or that the context was compacted.',
  '- Output only the checkpoint text: do not call any tool or take any other action.',
].join('\n')

const BASE_ENGINE_INJECT = ['llm', 'tokenMeter', 'sessions']

/**
 * The conversation's routed provider/model, or undefined when the session has
 * no usable route yet.
 * @param {object} agent agent whose summary is being written.
 * @returns {{ provider: string, model: string } | undefined}
 */
function sessionTarget(agent) {
  try {
    const config = agent?.session?.requestHeader?.()?.config
    if (config?.provider && config?.model) return { provider: config.provider, model: config.model }
  } catch {
    /* fall through to agent options */
  }
  const options = agent?.options
  if (options?.provider && options?.model) return { provider: options.provider, model: options.model }
  return undefined
}

/**
 * Turn the user's preferences into the config shape the base engine reads.
 * `thresholdTokens` is expressed against `contextWindowTokens` (a ratio), so an
 * absolute token threshold works with the base's ratio/headroom formula.
 * @param {Record<string, unknown>} p resolved preferences.
 * @returns {object}
 */
function effectiveConfig(p) {
  let thresholdRatio = Number(p.thresholdRatio)
  let headroomTokens = Number(p.headroomTokens)
  const thresholdTokens = Number(p.thresholdTokens)
  const window = Number(p.contextWindowTokens)
  if (thresholdTokens > 0 && window > 0) {
    thresholdRatio = thresholdTokens / window
    headroomTokens = 0
  }
  const retention = Number(p.retainTokens) > 0
    ? { retainTokens: Number(p.retainTokens) }
    : { retainRatio: Number(p.retainRatio) }
  return {
    thresholdRatio,
    headroomTokens,
    ...retention,
    summarizationProvider: p.summarizationMode === 'custom' ? String(p.summarizationProvider ?? '') : '',
    summarizationModel: p.summarizationMode === 'custom' ? String(p.summarizationModel ?? '') : '',
    maxTokens: Number(p.maxTokens),
    compactionRetries: Number(p.compactionRetries),
    maxOverflowRetries: Number(p.maxOverflowRetries),
    modelPolicies: [],
    auto: true,
  }
}

/** Tunable backend: official engine behaviour plus user preferences. */
export default class MalkoCompactionEngine extends BasicCompactionEngine {
  static inject = [...BASE_ENGINE_INJECT, 'malkoPrefs']

  /**
   * @param {import('@deepseek-ai/cordis').Context} ctx providing context.
   * @param {object} config row config (unused: preferences come from the service).
   */
  constructor(ctx, config) {
    // The base validates and freezes this; defaults are fine because the real
    // policy is rebuilt from `malkoPrefs` before every operation.
    super(ctx, {})
    void config
    this.prefs = ctx.get('malkoPrefs')

    // Turn-end compaction: always registered, gated live by the preference.
    ctx.on('agent/status', ({ agent, status }) => {
      if (status !== 'idle' || agent === undefined) return
      if (this.enginePrefs().turnEndCompactionEnabled !== true) return
      const controller = new AbortController()
      void Promise.resolve()
        .then(() => this.compactNow(agent, controller.signal))
        .catch((error) => {
          try { ctx.logger?.warn?.(`[malko-prefs] turn-end compaction failed: ${error?.message ?? error}`) } catch { /* ignore */ }
        })
    })
  }

  /** @returns the live preferences (defaults when the service is absent). */
  enginePrefs() {
    try {
      return this.prefs?.get?.() ?? { ...DEFAULT_PREFS }
    } catch {
      return { ...DEFAULT_PREFS }
    }
  }

  /** Consume a pending `/force-compact` for this agent, if any. */
  consumeForce(agent) {
    try {
      return this.prefs?.takeForce?.(agent?.session?.id)
    } catch {
      return undefined
    }
  }

  /** Rebuild the effective policy from the live preferences. */
  rebuildConfig() {
    this.config = effectiveConfig(this.enginePrefs())
  }

  /**
   * Forced compaction: the engine's context-overflow entry bypasses the
   * pressure threshold and compacts the maximal safe head range. Used by the
   * `/force-compact` command when the agent is mid-turn.
   */
  async forcedCompact(agent, signal) {
    try {
      return await super.compactIfNeeded(agent, 'context-overflow', signal)
    } catch (error) {
      try {
        this.ctx.logger?.warn?.(`[malko-prefs] forced compaction failed: ${error?.message ?? error}`)
      } catch { /* ignore */ }
      return null
    }
  }

  /**
   * Official automatic pressure/overflow compaction, gated by `auto` and
   * driven by the current preferences. A pending `/force-compact` (queued while
   * the agent was busy) takes precedence and bypasses the threshold.
   */
  async compactIfNeeded(agent, trigger, signal) {
    const forced = this.consumeForce(agent)
    this.rebuildConfig()
    if (forced !== undefined) return this.forcedCompact(agent, signal)
    if (this.enginePrefs().auto !== true) return null
    return super.compactIfNeeded(agent, trigger, signal)
  }

  /** Manual `/compact` and turn-end compaction, driven by the current preferences. */
  async compactNow(agent, signal, sourceCommandId) {
    this.consumeForce(agent)
    this.rebuildConfig()
    return super.compactNow(agent, signal, sourceCommandId)
  }

  /**
   * Summarization call with explicit model and reasoning control. Reuses the
   * engine's replayed prefix (`input`) so the provider's warm cache is kept.
   */
  async summarize(input, agent, signal) {
    const p = this.enginePrefs()
    const target = p.summarizationMode === 'custom' && p.summarizationProvider && p.summarizationModel
      ? { provider: String(p.summarizationProvider), model: String(p.summarizationModel) }
      : sessionTarget(agent)
    if (target === undefined) {
      throw new Error('malko-prefs: no provider/model available for summarization; route a request or pick a summarization model')
    }
    const assembler = new BlockAssembler()
    const messages = [
      ...input.messages,
      createUserMessage({ content: [{ type: 'text', text: COMPACTION_INSTRUCTION }] }),
    ]
    const reasoning = String(p.summarizationReasoning ?? 'default')
    const options = {
      provider: target.provider,
      model: target.model,
      messages,
      ...(input.tools === undefined ? {} : { tools: [...input.tools] }),
      maxTokens: Number(p.maxTokens),
      sessionId: agent.session.id,
      purpose: 'compaction',
      ...(reasoning === '' || reasoning === 'default' ? {} : { reasoningEffort: reasoning }),
      ...(signal === undefined ? {} : { signal }),
    }
    for await (const chunk of this.ctx.llm.stream(options)) assembler.push(chunk)

    const finish = assembler.finish
    if (finish !== undefined && finish !== null) {
      if (finish.kind === 'error' || finish.kind === 'aborted') {
        throw new Error(finish.failure?.message ?? 'summarization failed')
      }
      if (finish.kind === 'max-tokens') {
        throw new Error('summarization truncated at the token cap (incomplete checkpoint)')
      }
    }
    const rawOutput = assembler.blocks()
    const summary = rawOutput.filter((block) => block.type === 'text')
    if (!summary.some((block) => block.text.trim().length > 0)) {
      throw new Error('summarization produced no text summary content')
    }
    return {
      summary,
      rawOutput,
      llmStreamCall: true,
      provider: target.provider,
      model: target.model,
      maxTokens: Number(p.maxTokens),
      ...(assembler.usage === undefined ? {} : { usage: assembler.usage }),
    }
  }
}
