/**
 * Shared preference vocabulary for dsh-malko-prefs.
 *
 * The host plugin owns these as a volatile `Config` (so the settings domain
 * derives a page); the tunable compaction engine reads them live through the
 * `malkoPrefs` service. Both halves must agree on the defaults and the
 * field list, so they live here and are inlined into each bundle.
 */

/** Every preference field with its resolved default. */
export const DEFAULT_PREFS = {
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
  summarizationMode: 'session',
  /** Summarization model provider (only when `summarizationMode === 'custom'`). */
  summarizationProvider: '',
  /** Summarization model id (only when `summarizationMode === 'custom'`). */
  summarizationModel: '',
  /** `default` = leave the level to the adapter; `off` = force thinking off; else a level id. */
  summarizationReasoning: 'default',
  /** Output cap for the summarization call. */
  maxTokens: 32768,
  /** Official extra compaction attempts when pressure remains. */
  compactionRetries: 1,
  /** Official overflow-recovery attempts. */
  maxOverflowRetries: 1,
  /** Tab status light (favicon) master switch. */
  colorsEnabled: true,
  /** Colour shown when a main session finished unattended. */
  green: '#22C55E',
  /** Colour shown when a session awaits an interaction (wins over green). */
  amber: '#F59E0B',
  /** Colour (with a glow animation) shown while a session is generating. */
  working: '#3B82F6',
  /** Colour for the idle state; empty = keep the official favicon. */
  black: '',
  /** Browser notification master switch (opt-in). */
  notifyEnabled: false,
  /** Also notify while the page is in the foreground. */
  notifyForeground: false,
  /** Keep the notification on screen until dismissed (vs. auto-hide). */
  notifyAutoHide: true,
}

/** Preference keys, in declaration order. */
export const PREF_KEYS = Object.keys(DEFAULT_PREFS)

/**
 * Read one preference field from a volatile Config or a plain object.
 * @param {unknown} ref volatile reference or plain value.
 * @param {unknown} fallback used when the field resolves to undefined.
 * @returns {unknown}
 */
function readField(ref, fallback) {
  const value = ref !== null && typeof ref === 'object' && typeof ref.get === 'function' ? ref.get() : ref
  return value === undefined ? fallback : value
}

/**
 * Resolve every preference from a volatile Config (host) or a plain object.
 * Unknown/missing fields fall back to {@link DEFAULT_PREFS}.
 * @param {object} config resolved config (volatile refs or plain values).
 * @returns {Record<string, unknown>}
 */
export function readPrefs(config) {
  const out = { ...DEFAULT_PREFS }
  if (config !== null && typeof config === 'object') {
    for (const key of PREF_KEYS) out[key] = readField(config[key], out[key])
  }
  return out
}

/**
 * Parse a human token count: a plain number, or a `k`/`K`/`m`/`M` suffix
 * (`130k` → 130000, `1.5m` → 1500000). Returns undefined on anything else.
 * @param {string} text raw user input.
 * @returns {number | undefined}
 */
export function parseTokenText(text) {
  const raw = String(text ?? '').trim().replace(/[\s_]/g, '')
  if (raw === '') return undefined
  const match = /^(\d+(?:[.,]\d+)?)([kKmM])?$/.exec(raw)
  if (match === null) return undefined
  const base = Number(match[1].replace(',', '.'))
  if (!Number.isFinite(base) || base < 0) return undefined
  const scale = match[2] === undefined ? 1 : match[2].toLowerCase() === 'k' ? 1_000 : 1_000_000
  return Math.round(base * scale)
}
