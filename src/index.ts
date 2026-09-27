/**
 * dsh-malko-prefs — host half.
 *
 * Owns the user's compaction preferences as a volatile `Config`, so the dsh
 * settings domain derives the `malko-prefs` namespace/page from it, and
 * exposes them live to the tunable compaction engine (mounted inside the agent
 * preset) through the `malkoPrefs` service.
 *
 * The engine itself (`./compaction`) is a separate entry in this same package:
 * a patch replaces a row's config wholesale and the compaction backend lives
 * nested inside the preset, so swapping it requires restating the preset —
 * see `scripts/gen-preset-override.mjs`.
 */
import { Service } from '@deepseek-ai/cordis'
import z from '@deepseek-ai/schemastery'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DEFAULT_PREFS, readPrefs } from './prefs.ts'
import { MalkoModelsRuntime } from './probe.ts'

// Re-exported so the Typert manifest's `exportName` resolves against this entry.
export { MalkoModelsRuntime } from './probe.ts'

/** Cordis plugin name used by loader diagnostics. */
export const name = 'dsh-malko-prefs'

/** No required host service: the settings/probe halves are optional. */
export const inject = []

/** `#RRGGBB` colour literal. */
const HEX = /^#[0-9a-fA-F]{6}$/
/** `#RRGGBB` or empty (empty = keep the official favicon). */
const HEX_OR_EMPTY = /^(#[0-9a-fA-F]{6})?$/

/** Static route prefix the browser half reads sounds from. */
export const SOUND_ROUTE = '/malko-prefs-sounds'
/** Bundled sound library (see `assets/audio/README.md` for provenance). */
const SOUND_DIR = fileURLToPath(new URL('../assets/audio/', import.meta.url))
/** Only the library's file-name shape is served — no path traversal. */
const SOUND_FILE = /^[a-z0-9-]+\.mp3$/

/**
 * Build the sound static route (plain objects, so it can be tested on a bare
 * `node:http` server too). Anything but `<id>.mp3` is a 404.
 * @returns {object[]} routes for `ctx.webServer.register`.
 */
export function buildSoundRoutes() {
  return [{
    kind: 'prefix',
    path: SOUND_ROUTE,
    handler: async (req, res) => {
      const name = decodeURIComponent(String(req.url ?? '').slice(SOUND_ROUTE.length)).replace(/^\/+/, '')
      const headers = { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' }
      if (!SOUND_FILE.test(name)) {
        res.writeHead(404, headers)
        res.end('Not Found')
        return
      }
      try {
        const data = await readFile(join(SOUND_DIR, name))
        res.writeHead(200, {
          'content-type': 'audio/mpeg',
          'content-length': String(data.length),
          'cache-control': 'public, max-age=31536000, immutable',
        })
        res.end(data)
      } catch {
        res.writeHead(404, headers)
        res.end('Not Found')
      }
    },
  }]
}

/**
 * The user's preferences. Every field is volatile so the settings domain
 * serves the `malko-prefs` namespace and the browser page can read/write it.
 */
export const Config = z.object({
  thresholdTokens: z.number().step(1).min(0).default(DEFAULT_PREFS.thresholdTokens).volatile(),
  contextWindowTokens: z.number().step(1).min(0).default(DEFAULT_PREFS.contextWindowTokens).volatile(),
  thresholdRatio: z.number().default(DEFAULT_PREFS.thresholdRatio).volatile(),
  headroomTokens: z.number().step(1).min(0).default(DEFAULT_PREFS.headroomTokens).volatile(),
  retainTokens: z.number().step(1).min(0).default(DEFAULT_PREFS.retainTokens).volatile(),
  retainRatio: z.number().default(DEFAULT_PREFS.retainRatio).volatile(),
  auto: z.boolean().default(DEFAULT_PREFS.auto).volatile(),
  turnEndCompactionEnabled: z.boolean().default(DEFAULT_PREFS.turnEndCompactionEnabled).volatile(),
  summarizationMode: z.union(['session', 'custom']).default(DEFAULT_PREFS.summarizationMode).volatile(),
  summarizationProvider: z.string().default(DEFAULT_PREFS.summarizationProvider).volatile(),
  summarizationModel: z.string().default(DEFAULT_PREFS.summarizationModel).volatile(),
  summarizationReasoning: z.string().default(DEFAULT_PREFS.summarizationReasoning).volatile(),
  maxTokens: z.number().step(1).min(1).default(DEFAULT_PREFS.maxTokens).volatile(),
  compactionRetries: z.number().step(1).min(0).default(DEFAULT_PREFS.compactionRetries).volatile(),
  maxOverflowRetries: z.number().step(1).min(0).default(DEFAULT_PREFS.maxOverflowRetries).volatile(),
  colorsEnabled: z.boolean().default(DEFAULT_PREFS.colorsEnabled).volatile(),
  green: z.string().pattern(HEX).default(DEFAULT_PREFS.green).volatile(),
  amber: z.string().pattern(HEX).default(DEFAULT_PREFS.amber).volatile(),
  working: z.string().pattern(HEX).default(DEFAULT_PREFS.working).volatile(),
  black: z.string().pattern(HEX_OR_EMPTY).default(DEFAULT_PREFS.black).volatile(),
  notifyEnabled: z.boolean().default(DEFAULT_PREFS.notifyEnabled).volatile(),
  notifyForeground: z.boolean().default(DEFAULT_PREFS.notifyForeground).volatile(),
  notifyAutoHide: z.boolean().default(DEFAULT_PREFS.notifyAutoHide).volatile(),
  notifyVolume: z.number().min(0).max(1).default(DEFAULT_PREFS.notifyVolume).volatile(),
  notifyDoneSound: z.string().default(DEFAULT_PREFS.notifyDoneSound).volatile(),
  notifyPendingSound: z.string().default(DEFAULT_PREFS.notifyPendingSound).volatile(),
})

/**
 * Live preference reader. Constructing it registers the `malkoPrefs` service
 * (the `Service` base owns the registration and its teardown with the fiber).
 */
export class MalkoPrefs extends Service {
  /**
   * @param ctx providing context.
   * @param config resolved volatile Config.
   */
  constructor(ctx, config) {
    super(ctx, 'malkoPrefs')
    this.config = config
    /** @type {Map<string, {commandId: string|undefined}>} */
    this.force = new Map()
  }

  /** @returns the current resolved preferences. */
  get() {
    return readPrefs(this.config)
  }

  /**
   * Queue a forced compaction for one session (consumed by the engine at the
   * next `agent/pre-step`).
   * @param {string} sessionId target session.
   * @param {string} [commandId] originating command id for presentation.
   */
  requestForce(sessionId, commandId) {
    if (typeof sessionId === 'string' && sessionId !== '') this.force.set(sessionId, { commandId })
  }

  /**
   * Consume (and clear) a pending forced compaction for one session.
   * @param {string} sessionId target session.
   * @returns {{ commandId?: string } | undefined}
   */
  takeForce(sessionId) {
    if (typeof sessionId !== 'string' || sessionId === '') return undefined
    const pending = this.force.get(sessionId)
    if (pending !== undefined) this.force.delete(sessionId)
    return pending
  }
}

/**
 * Register the global `/force-compact` command: compact the current session
 * immediately when the agent is idle, otherwise queue a force consumed by the
 * engine at the next model step. A no-op until the `commands` service mounts.
 * @param ctx plugin context.
 */
function registerForceCommand(ctx) {
  ctx.inject(['commands'], (child) => {
    const dispose = child.commands.register({
      name: 'force-compact',
      description: 'Force a context compaction now (immediately when idle, otherwise at the next model step).',
      recordInput: false,
      handler: async (invocation) => {
        try {
          const agent = invocation?.agent
          const session = agent?.session
          if (agent === undefined || agent === null || session === undefined || session === null || typeof session.id !== 'string') {
            return { kind: 'error', text: 'no usable agent session for this command' }
          }
          const prefs = ctx.get('malkoPrefs')
          const engine = agent.ctx?.get?.('compaction') ?? ctx.get('compaction')
          if (engine !== undefined && typeof engine.compactNow === 'function') {
            try {
              const result = await engine.compactNow(agent, invocation.signal, invocation.commandId)
              if (result !== undefined && result !== null) {
                return { kind: 'success', text: `compacted ~${result.shadowedTokenCount ?? '?'} tokens` }
              }
              return { kind: 'success', text: 'nothing to compact (context is already minimal)' }
            } catch {
              // Busy (or otherwise unable): defer to the next model step.
              prefs?.requestForce?.(session.id, invocation.commandId)
              return { kind: 'success', text: 'agent is busy — will force-compact at the next model step' }
            }
          }
          prefs?.requestForce?.(session.id, invocation.commandId)
          return { kind: 'success', text: 'force-compact queued; it will run as soon as possible' }
        } catch (error) {
          return { kind: 'error', text: `force-compact failed: ${error?.message ?? error}` }
        }
      },
    })
    if (typeof dispose === 'function') {
      ctx.effect(() => dispose, 'dsh-malko-prefs: /force-compact command')
    }
  })
}

/**
 * Mount the preference service. We ship our own browser page, so tell the
 * settings domain not to auto-generate one for this namespace.
 * @param ctx plugin context.
 * @param config resolved volatile Config.
 */
export function apply(ctx, config) {
  void new MalkoPrefs(ctx, config)
  registerForceCommand(ctx)
  // llama.cpp probe service. Its strict wire definition is contributed through
  // the package `./typert` export, which @deepseek-ai/dsh-typert-loader
  // registers automatically when this entry mounts.
  void new MalkoModelsRuntime(ctx)
  // Sound library static route (optional: absent webServer → the browser half
  // silently falls back to the built-in synthesized chimes).
  ctx.inject(['webServer'], (webCtx) => {
    for (const route of buildSoundRoutes()) {
      const dispose = webCtx.webServer.register(route)
      if (typeof dispose === 'function') ctx.effect(() => dispose, 'dsh-malko-prefs: sound route')
    }
  })
  try {
    ctx.inject(['settings'], (child) => {
      child.effect(() => child.settings.configure({ auto: false }, ctx.fiber))
    })
  } catch {
    /* settings service absent or policy already set — cosmetic only */
  }
}
