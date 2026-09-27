// src/compaction.ts
import { BasicCompactionEngine } from "@deepseek-ai/dsh-compaction-basic";
import { BlockAssembler, createUserMessage } from "@deepseek-ai/dsh-llm";

// src/prefs.ts
var DEFAULT_PREFS = {
  /** Absolute pressure threshold in tokens; 0 = derive from ratio/window. */
  thresholdTokens: 0,
  /** Context window the absolute threshold is expressed against; 0 = live model window. */
  contextWindowTokens: 0,
  /** Window fraction when `thresholdTokens` is 0. */
  thresholdRatio: 0.8,
  /** Extra headroom beyond the output reservation (official default is 65536). */
  headroomTokens: 32768,
  /** Absolute recent-context budget kept verbatim; 0 = use `retainRatio`. */
  retainTokens: 0,
  /** Recent-context fraction when `retainTokens` is 0. */
  retainRatio: 0.16,
  /** Official automatic compaction (between-step pressure + overflow recovery). */
  auto: true,
  /** Compact once more when the agent goes idle at the end of a turn. */
  turnEndCompactionEnabled: false,
  /** `session` = summarize with the conversation model; `custom` = a chosen one. */
  summarizationMode: "session",
  /** Summarization model provider (only when `summarizationMode === 'custom'`). */
  summarizationProvider: "",
  /** Summarization model id (only when `summarizationMode === 'custom'`). */
  summarizationModel: "",
  /** `default` = leave the level to the adapter; `off` = force thinking off; else a level id. */
  summarizationReasoning: "default",
  /** Output cap for the summarization call. */
  maxTokens: 32768,
  /** Official extra compaction attempts when pressure remains. */
  compactionRetries: 1,
  /** Official overflow-recovery attempts. */
  maxOverflowRetries: 1,
  /** Tab status light (favicon) master switch. */
  colorsEnabled: true,
  /** Colour shown when a main session finished unattended. */
  green: "#22C55E",
  /** Colour shown when a session awaits an interaction (wins over green). */
  amber: "#F59E0B",
  /** Colour (with a glow animation) shown while a session is generating. */
  working: "#3B82F6",
  /** Colour for the idle state; empty = keep the official favicon. */
  black: "",
  /** Browser notification master switch (opt-in). */
  notifyEnabled: false,
  /** Also notify while the page is in the foreground. */
  notifyForeground: false,
  /** Keep the notification on screen until dismissed (vs. auto-hide). */
  notifyAutoHide: true
};
var PREF_KEYS = Object.keys(DEFAULT_PREFS);

// src/compaction.ts
var COMPACTION_INSTRUCTION = [
  "You are now acting as a compaction engine for this AI coding assistant. Condense the conversation ABOVE into a structured checkpoint that lets another model resume the work with no loss of essential context.",
  "",
  'Output EXACTLY the Markdown structure below: keep every section, in order. Use terse bullets, not prose paragraphs. Write "(none)" for an empty section \u2014 never drop a section.',
  "",
  "## Primary Request and Intent",
  "- [the user's original and evolving goals; quote verbatim where the exact wording matters]",
  "",
  "## Key Technical Concepts",
  "- [technologies, frameworks, patterns, and conventions in play]",
  "",
  "## Files and Code",
  "- [exact path: why it matters, key changes or snippets]",
  "",
  "## Errors and Fixes",
  "- [error: how it was resolved, plus any related user feedback]",
  "",
  "## Pending Jobs",
  "- [explicitly requested work not yet completed]",
  "",
  "## Current Work",
  "- [precisely what was in progress at this checkpoint]",
  "",
  "## Next Step",
  '- [the single next action, directly in line with the most recent request, or "(none)"]',
  "",
  "## Critical Context",
  "- [decisions and their rationale, constraints, user preferences, open questions, data needed to continue]",
  "",
  "Rules:",
  "- Write concise English engineering prose. Preserve exact file paths, commands, error strings, identifiers, numeric values, function signatures, and syntax fragments.",
  "- Capture user feedback and explicit instructions faithfully, especially corrections.",
  "- Do NOT mention this summarization request or that the context was compacted.",
  "- Output only the checkpoint text: do not call any tool or take any other action."
].join("\n");
var BASE_ENGINE_INJECT = ["llm", "tokenMeter", "sessions"];
function sessionTarget(agent) {
  try {
    const config = agent?.session?.requestHeader?.()?.config;
    if (config?.provider && config?.model) return { provider: config.provider, model: config.model };
  } catch {
  }
  const options = agent?.options;
  if (options?.provider && options?.model) return { provider: options.provider, model: options.model };
  return void 0;
}
function effectiveConfig(p) {
  let thresholdRatio = Number(p.thresholdRatio);
  let headroomTokens = Number(p.headroomTokens);
  const thresholdTokens = Number(p.thresholdTokens);
  const window = Number(p.contextWindowTokens);
  if (thresholdTokens > 0 && window > 0) {
    thresholdRatio = thresholdTokens / window;
    headroomTokens = 0;
  }
  const retention = Number(p.retainTokens) > 0 ? { retainTokens: Number(p.retainTokens) } : { retainRatio: Number(p.retainRatio) };
  return {
    thresholdRatio,
    headroomTokens,
    ...retention,
    summarizationProvider: p.summarizationMode === "custom" ? String(p.summarizationProvider ?? "") : "",
    summarizationModel: p.summarizationMode === "custom" ? String(p.summarizationModel ?? "") : "",
    maxTokens: Number(p.maxTokens),
    compactionRetries: Number(p.compactionRetries),
    maxOverflowRetries: Number(p.maxOverflowRetries),
    modelPolicies: [],
    auto: true
  };
}
var MalkoCompactionEngine = class extends BasicCompactionEngine {
  static inject = [...BASE_ENGINE_INJECT, "malkoPrefs"];
  /**
   * @param {import('@deepseek-ai/cordis').Context} ctx providing context.
   * @param {object} config row config (unused: preferences come from the service).
   */
  constructor(ctx, config) {
    super(ctx, {});
    void config;
    this.prefs = ctx.get("malkoPrefs");
    ctx.on("agent/status", ({ agent, status }) => {
      if (status !== "idle" || agent === void 0) return;
      if (this.enginePrefs().turnEndCompactionEnabled !== true) return;
      const controller = new AbortController();
      void Promise.resolve().then(() => this.compactNow(agent, controller.signal)).catch((error) => {
        try {
          ctx.logger?.warn?.(`[malko-prefs] turn-end compaction failed: ${error?.message ?? error}`);
        } catch {
        }
      });
    });
  }
  /** @returns the live preferences (defaults when the service is absent). */
  enginePrefs() {
    try {
      return this.prefs?.get?.() ?? { ...DEFAULT_PREFS };
    } catch {
      return { ...DEFAULT_PREFS };
    }
  }
  /** Consume a pending `/force-compact` for this agent, if any. */
  consumeForce(agent) {
    try {
      return this.prefs?.takeForce?.(agent?.session?.id);
    } catch {
      return void 0;
    }
  }
  /** Rebuild the effective policy from the live preferences. */
  rebuildConfig() {
    this.config = effectiveConfig(this.enginePrefs());
  }
  /**
   * Forced compaction: the engine's context-overflow entry bypasses the
   * pressure threshold and compacts the maximal safe head range. Used by the
   * `/force-compact` command when the agent is mid-turn.
   */
  async forcedCompact(agent, signal) {
    try {
      return await super.compactIfNeeded(agent, "context-overflow", signal);
    } catch (error) {
      try {
        this.ctx.logger?.warn?.(`[malko-prefs] forced compaction failed: ${error?.message ?? error}`);
      } catch {
      }
      return null;
    }
  }
  /**
   * Official automatic pressure/overflow compaction, gated by `auto` and
   * driven by the current preferences. A pending `/force-compact` (queued while
   * the agent was busy) takes precedence and bypasses the threshold.
   */
  async compactIfNeeded(agent, trigger, signal) {
    const forced = this.consumeForce(agent);
    this.rebuildConfig();
    if (forced !== void 0) return this.forcedCompact(agent, signal);
    if (this.enginePrefs().auto !== true) return null;
    return super.compactIfNeeded(agent, trigger, signal);
  }
  /** Manual `/compact` and turn-end compaction, driven by the current preferences. */
  async compactNow(agent, signal, sourceCommandId) {
    this.consumeForce(agent);
    this.rebuildConfig();
    return super.compactNow(agent, signal, sourceCommandId);
  }
  /**
   * Summarization call with explicit model and reasoning control. Reuses the
   * engine's replayed prefix (`input`) so the provider's warm cache is kept.
   */
  async summarize(input, agent, signal) {
    const p = this.enginePrefs();
    const target = p.summarizationMode === "custom" && p.summarizationProvider && p.summarizationModel ? { provider: String(p.summarizationProvider), model: String(p.summarizationModel) } : sessionTarget(agent);
    if (target === void 0) {
      throw new Error("malko-prefs: no provider/model available for summarization; route a request or pick a summarization model");
    }
    const assembler = new BlockAssembler();
    const messages = [
      ...input.messages,
      createUserMessage({ content: [{ type: "text", text: COMPACTION_INSTRUCTION }] })
    ];
    const reasoning = String(p.summarizationReasoning ?? "default");
    const options = {
      provider: target.provider,
      model: target.model,
      messages,
      ...input.tools === void 0 ? {} : { tools: [...input.tools] },
      maxTokens: Number(p.maxTokens),
      sessionId: agent.session.id,
      purpose: "compaction",
      ...reasoning === "" || reasoning === "default" ? {} : { reasoningEffort: reasoning },
      ...signal === void 0 ? {} : { signal }
    };
    for await (const chunk of this.ctx.llm.stream(options)) assembler.push(chunk);
    const finish = assembler.finish;
    if (finish !== void 0 && finish !== null) {
      if (finish.kind === "error" || finish.kind === "aborted") {
        throw new Error(finish.failure?.message ?? "summarization failed");
      }
      if (finish.kind === "max-tokens") {
        throw new Error("summarization truncated at the token cap (incomplete checkpoint)");
      }
    }
    const rawOutput = assembler.blocks();
    const summary = rawOutput.filter((block) => block.type === "text");
    if (!summary.some((block) => block.text.trim().length > 0)) {
      throw new Error("summarization produced no text summary content");
    }
    return {
      summary,
      rawOutput,
      llmStreamCall: true,
      provider: target.provider,
      model: target.model,
      maxTokens: Number(p.maxTokens),
      ...assembler.usage === void 0 ? {} : { usage: assembler.usage }
    };
  }
};
export {
  MalkoCompactionEngine as default
};
//# sourceMappingURL=compaction.mjs.map
