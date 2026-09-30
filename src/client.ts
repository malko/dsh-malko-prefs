/**
 * dsh-malko-prefs — browser half.
 *
 * One settings section with three sub-panels: context compaction, llama.cpp
 * model enrichment, and notifications. Reads and writes the `malko-prefs`
 * config form, reads the `llm-pi-ai` form to populate the model pickers, and
 * runs the tab status light + browser notifications (see `./notify.ts`).
 */
import React from 'react'
import { Button, SegmentedControl, Switch } from '@deepseek-ai/dsh-client-ui-primitives'
import { probeInvocation } from './remote.ts'
import {
  BUILTIN_SOUNDS,
  LOCALE_NS,
  SOUND_NONE,
  SOUND_PACKS,
  currentNotificationPermission,
  packSoundIds,
  playSound,
  primeSound,
  requestNotificationPermission,
  startStatusLight,
} from './notify.ts'

export const name = 'dsh-malko-prefs'
export const inject = ['sessions', 'slots', 'locale', 'configForms', 'remote']

const NS = 'malko-prefs'
const MODEL_NS = 'llm-pi-ai'
const SLOT = 'settings.section'
const TABS_ID = 'malko-prefs-tabs'

/** `#RRGGBB` colour literal. */
const HEX = /^#[0-9a-fA-F]{6}$/

/** Strict-codec stub: the browser never decodes its own arguments. */
const identitySchema = () => ({ parse: (value) => value })

/** Browser contribution mounted through `ctx.remote.$mount()`. */
const PROBE_REMOTE = {
  package: 'dsh-malko-prefs',
  descriptors: [probeInvocation(identitySchema, identitySchema)],
}

const el = React.createElement

const en = {
  title: "Malko's prefs",
  intro: 'Tunable compaction, llama.cpp model enrichment and notifications.',
  tabCompaction: 'Context compaction',
  tabModels: 'llama.cpp models',
  tabNotifications: 'Notifications',
  // Compaction
  thresholdTitle: 'Compaction threshold',
  thresholdTokens: 'Threshold (tokens)',
  thresholdTokensHint: 'Absolute pressure in tokens, e.g. 130k or 130K. Empty/0 = use the ratio below.',
  contextWindow: 'Context window (tokens)',
  contextWindowHint: 'Window the absolute threshold is expressed against (e.g. 200k). 0 = derive nothing (ratio only).',
  thresholdRatio: 'Threshold ratio',
  thresholdRatioHint: 'Used when the absolute threshold is empty (0.8 = 80% of the window).',
  headroom: 'Headroom (tokens)',
  headroomHint: 'Reserved on top of the output cap. The official default (65536) caps the trigger well below 80%.',
  retentionTitle: 'Retention',
  retainTokens: 'Keep last (tokens)',
  retainTokensHint: 'Verbatim recent-context budget, e.g. 32k. Empty/0 = use the ratio below.',
  retainRatio: 'Keep ratio',
  behaviourTitle: 'Behaviour',
  auto: 'Automatic compaction',
  autoHint: 'Official between-step pressure compaction and context-overflow recovery.',
  turnEnd: 'Compact at end of turn',
  turnEndHint: 'Runs one more compaction when the agent goes idle.',
  summarizationTitle: 'Summarization',
  summarizationMode: 'Model',
  modeSession: 'Session model',
  modeCustom: 'Custom model',
  provider: 'Provider',
  model: 'Model',
  reasoning: 'Reasoning',
  reasoningDefault: 'Default',
  reasoningOff: 'Off',
  maxTokens: 'Summary output cap (tokens)',
  advancedTitle: 'Advanced',
  compactionRetries: 'Extra compaction attempts',
  maxOverflowRetries: 'Overflow recovery attempts',
  // Models
  modelsTitle: 'llama.cpp models',
  modelsIntro: 'Fetch the models a provider exposes, pick the ones to import and review the changes before applying.',
  enrich: 'Fetch from server',
  enriching: 'Fetching\u2026',
  noBaseUrl: 'No endpoint configured for this provider.',
  applied: 'Imported {count} model(s).',
  previewTitle: 'Review import',
  previewHint: 'Check the models to import from the server.',
  previewNew: 'new model',
  previewNoChange: 'no change',
  apply: 'Import ({count})',
  cancel: 'Cancel',
  noModels: 'The server returned no models.',
  // Notifications
  colorsGroup: 'Tab status light',
  colorsIntro: 'The browser tab icon reflects the session state: green = finished, amber = waiting for you.',
  colorsEnabled: 'Color the tab icon',
  colorsEnabledHint: 'Off keeps the official favicon at all times.',
  greenLabel: 'Finished',
  amberLabel: 'Waiting (question/approval)',
  workingLabel: 'Working',
  workingHint: 'Shown while a session is generating.',
  blackLabel: 'Idle color',
  blackHint: 'Leave empty to keep the official favicon when idle.',
  colorReset: 'Clear',
  colorUnset: 'official',
  notifyGroup: 'System notifications',
  notifyIntro: 'Raise a browser notification when a session finishes or a question/approval waits for you.',
  notifyEnabled: 'Enable notifications',
  notifyEnabledHint: 'The browser asks for permission the first time you enable this.',
  notifyForeground: 'Notify in the foreground',
  notifyForegroundHint: 'Also notify while the tab is visible and focused.',
  notifyDoneGroup: 'When a session finishes',
  notifyDoneEnabled: 'Notify',
  notifyDoneEnabledHint: 'Send a notification when a session finishes.',
  notifyPendingGroup: 'While waiting for you',
  notifyPendingEnabled: 'Notify',
  notifyPendingEnabledHint: 'Send a notification when a question or approval awaits you.',
  persistDone: 'Keep on screen',
  persistPending: 'Keep on screen',
  persistHint: 'On: the notification stays until you dismiss it (if the OS honors it).',
  sound: 'Sound',
  notifyVolume: 'Volume',
  soundDone: 'On session finished',
  soundPending: 'While waiting for you',
  soundNoSound: 'No sound',
  soundPackBuiltin: 'Built-in',
  soundBuiltinUp: 'Chime Up',
  soundBuiltinDown: 'Chime Down',
  permissionDenied: 'Blocked by the browser \u2014 re-enable notifications in the site settings.',
  permissionUnsupported: 'This browser does not support system notifications.',
  notifyDoneTitle: 'Session finished',
  notifyPendingTitle: 'Something awaits you',
  notifyDuration: 'turn took {duration}',
  durationSeconds: '{seconds}s',
  durationMinutes: '{minutes}m{seconds}s',
  pendingKindApproval: 'Approval needed',
  pendingKindQuestion: 'Question',
  pendingKindPlanReview: 'Plan review',
  pendingApprovalTool: 'Approval \u00b7 {tool}',
  pendingQuestionChoose: 'Choose an option',
  pendingQuestionMulti: 'Choose options',
  pendingQuestionFill: 'Type an answer',
  pendingQuestionBatch: '{count} questions',
  // Shared
  save: 'Save',
  saved: 'Saved.',
  invalidToken: 'Enter a number or a k/M suffix value (e.g. 130k).',
  invalidHex: 'Color must be #RRGGBB.',
  errorPrefix: 'Error: ',
  unavailable: 'This setting is not available from this client.',
  loading: 'Loading\u2026',
}

const zh = {
  title: 'Malko \u504f\u597d',
  intro: '\u538b\u7f29\u3001llama.cpp \u6a21\u578b\u8865\u5168\u4e0e\u901a\u77e5\u3002',
  tabCompaction: '\u4e0a\u4e0b\u6587\u538b\u7f29',
  tabModels: 'llama.cpp \u6a21\u578b',
  tabNotifications: '\u901a\u77e5',
  thresholdTitle: '\u538b\u7f29\u9600\u503c',
  thresholdTokens: '\u9600\u503c\uff08tokens\uff09',
  thresholdTokensHint: '\u7edd\u5bf9 token \u9600\u503c\uff0c\u5982 130k\u3002\u7559\u7a7a/0 = \u7528\u4e0b\u65b9\u6bd4\u4f8b\u3002',
  contextWindow: '\u4e0a\u4e0b\u6587\u7a97\u53e3\uff08tokens\uff09',
  contextWindowHint: '\u7edd\u5bf9\u9600\u503c\u6240\u4f9d\u636e\u7684\u7a97\u53e3\uff08\u5982 200k\uff09\u30020 = \u53ea\u7528\u6bd4\u4f8b\u3002',
  thresholdRatio: '\u9600\u503c\u6bd4\u4f8b',
  thresholdRatioHint: '\u5f53\u7edd\u5bf9\u9600\u503c\u4e3a\u7a7a\u65f6\u4f7f\u7528\uff080.8 = \u7a97\u53e3\u7684 80%\uff09\u3002',
  headroom: '\u9884\u7559\uff08tokens\uff09',
  headroomHint: '\u5728\u8f93\u51fa\u9884\u7b97\u4e4b\u5916\u518d\u9884\u7559\u7684\u91cf\u3002\u5b98\u65b9\u9ed8\u8ba4 65536 \u4f1a\u628a\u89e6\u53d1\u70b9\u62c9\u5230 80% \u4ee5\u4e0b\u3002',
  retentionTitle: '\u4fdd\u7559',
  retainTokens: '\u4fdd\u7559\u6700\u8fd1\uff08tokens\uff09',
  retainTokensHint: '\u9010\u5b57\u4fdd\u7559\u7684\u8fd1\u671f\u9884\u7b97\uff0c\u5982 32k\u3002\u7559\u7a7a/0 = \u7528\u4e0b\u65b9\u6bd4\u4f8b\u3002',
  retainRatio: '\u4fdd\u7559\u6bd4\u4f8b',
  behaviourTitle: '\u884c\u4e3a',
  auto: '\u81ea\u52a8\u538b\u7f29',
  autoHint: '\u5b98\u65b9\u7684\u6b65\u95f4\u538b\u529b\u538b\u7f29\u4e0e\u4e0a\u4e0b\u6587\u6ea2\u51fa\u6062\u590d\u3002',
  turnEnd: '\u8f6e\u672b\u538b\u7f29',
  turnEndHint: '\u4ee3\u7406\u8f6c\u4e3a idle \u65f6\u518d\u538b\u7f29\u4e00\u6b21\u3002',
  summarizationTitle: '\u6458\u8981',
  summarizationMode: '\u6a21\u578b',
  modeSession: '\u4f1a\u8bdd\u6a21\u578b',
  modeCustom: '\u81ea\u5b9a\u4e49\u6a21\u578b',
  provider: '\u63d0\u4f9b\u5546',
  model: '\u6a21\u578b',
  reasoning: '\u601d\u8003\u7ea7\u522b',
  reasoningDefault: '\u9ed8\u8ba4',
  reasoningOff: '\u5173\u95ed',
  maxTokens: '\u6458\u8981\u8f93\u51fa\u4e0a\u9650\uff08tokens\uff09',
  advancedTitle: '\u9ad8\u7ea7',
  compactionRetries: '\u989d\u5916\u538b\u7f29\u5c1d\u8bd5',
  maxOverflowRetries: '\u6ea2\u51fa\u6062\u590d\u5c1d\u8bd5',
  modelsTitle: 'llama.cpp \u6a21\u578b',
  modelsIntro: '\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u6a21\u578b\u5217\u8868\uff0c\u52fe\u9009\u8981\u5bfc\u5165\u7684\u6a21\u578b\uff0c\u786e\u8ba4\u53d8\u66f4\u540e\u5e94\u7528\u3002',
  enrich: '\u4ece\u670d\u52a1\u5668\u83b7\u53d6',
  enriching: '\u6b63\u5728\u83b7\u53d6\u2026',
  noBaseUrl: '\u8be5\u63d0\u4f9b\u5546\u672a\u914d\u7f6e\u7aef\u70b9\u3002',
  applied: '\u5df2\u5bfc\u5165 {count} \u4e2a\u6a21\u578b\u3002',
  previewTitle: '\u786e\u8ba4\u5bfc\u5165',
  previewHint: '\u52fe\u9009\u8981\u4ece\u670d\u52a1\u5668\u5bfc\u5165\u7684\u6a21\u578b\u3002',
  previewNew: '\u65b0\u6a21\u578b',
  previewNoChange: '\u65e0\u53d8\u5316',
  apply: '\u5bfc\u5165\uff08{count}\uff09',
  cancel: '\u53d6\u6d88',
  noModels: '\u670d\u52a1\u5668\u672a\u8fd4\u56de\u4efb\u4f55\u6a21\u578b\u3002',
  colorsGroup: '\u6807\u7b7e\u9875\u72b6\u6001\u706f',
  colorsIntro: '\u6807\u7b7e\u9875\u56fe\u6807\u968f\u4f1a\u8bdd\u72b6\u6001\u53d8\u8272\uff1a\u7eff = \u5df2\u5b8c\u6210\uff0c\u7425\u73c0 = \u7b49\u4f60\u5904\u7406\u3002',
  colorsEnabled: '\u542f\u7528\u56fe\u6807\u53d8\u8272',
  colorsEnabledHint: '\u5173\u95ed\u540e\u59cb\u7ec8\u4f7f\u7528\u5b98\u65b9\u56fe\u6807\u3002',
  greenLabel: '\u5df2\u5b8c\u6210',
  amberLabel: '\u5f85\u5904\u7406\uff08\u63d0\u95ee/\u5ba1\u6279\uff09',
  workingLabel: '\u751f\u6210\u4e2d',
  workingHint: '\u4f1a\u8bdd\u751f\u6210\u65f6\u663e\u793a\u3002',
  blackLabel: '\u9ed8\u8ba4\u8272',
  blackHint: '\u7559\u7a7a\u5219\u7a7a\u95f2\u65f6\u4f7f\u7528\u5b98\u65b9\u56fe\u6807\u3002',
  colorReset: '\u6e05\u9664',
  colorUnset: '\u5b98\u65b9',
  notifyGroup: '\u7cfb\u7edf\u901a\u77e5',
  notifyIntro: '\u4f1a\u8bdd\u5b8c\u6210\u6216\u6709\u63d0\u95ee/\u5ba1\u6279\u7b49\u4f60\u5904\u7406\u65f6\u53d1\u9001\u6d4f\u89c8\u5668\u901a\u77e5\u3002',
  notifyEnabled: '\u542f\u7528\u901a\u77e5',
  notifyEnabledHint: '\u9996\u6b21\u5f00\u542f\u65f6\u6d4f\u89c8\u5668\u4f1a\u8be2\u95ee\u6388\u6743\u3002',
  notifyForeground: '\u524d\u53f0\u63d0\u9192',
  notifyForegroundHint: '\u6807\u7b7e\u9875\u53ef\u89c1\u4e14\u6709\u7126\u70b9\u65f6\u4e5f\u63d0\u9192\u3002',
  notifyDoneGroup: '\u4f1a\u8bdd\u5b8c\u6210\u65f6',
  notifyDoneEnabled: '\u901a\u77e5',
  notifyDoneEnabledHint: '\u4f1a\u8bdd\u5b8c\u6210\u65f6\u53d1\u9001\u901a\u77e5\u3002',
  notifyPendingGroup: '\u7b49\u5f85\u5904\u7406\u65f6',
  notifyPendingEnabled: '\u901a\u77e5',
  notifyPendingEnabledHint: '\u6709\u63d0\u95ee\u6216\u5ba1\u6279\u7b49\u5f85\u5904\u7406\u65f6\u53d1\u9001\u901a\u77e5\u3002',
  persistDone: '\u5e38\u9a7b\u5c4f\u5e55',
  persistPending: '\u5e38\u9a7b\u5c4f\u5e55',
  persistHint: '\u5f00\u542f\u540e\u9700\u624b\u52a8\u5173\u95ed\u624d\u4f1a\u6d88\u5931\uff08\u53d7\u7cfb\u7edf\u652f\u6301\u9650\u5236\uff09\u3002',
  sound: '\u63d0\u793a\u97f3',
  notifyVolume: '\u97f3\u91cf',
  soundDone: '\u4f1a\u8bdd\u5b8c\u6210\u65f6',
  soundPending: '\u7b49\u4f60\u5904\u7406\u65f6',
  soundNoSound: '\u65e0\u58f0',
  soundPackBuiltin: '\u5185\u7f6e',
  soundBuiltinUp: 'Chime Up',
  soundBuiltinDown: 'Chime Down',
  permissionDenied: '\u5df2\u88ab\u6d4f\u89c8\u5668\u62d2\u7edd\uff0c\u8bf7\u5728\u7ad9\u70b9\u8bbe\u7f6e\u4e2d\u6062\u590d\u901a\u77e5\u6743\u9650\u3002',
  permissionUnsupported: '\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u7cfb\u7edf\u901a\u77e5\u3002',
  notifyDoneTitle: '\u4f1a\u8bdd\u5df2\u5b8c\u6210',
  notifyPendingTitle: '\u6709\u4ea4\u4e92\u7b49\u5f85\u5904\u7406',
  notifyDuration: '\u672c\u8f6e\u603b\u7528\u65f6 {duration}',
  durationSeconds: '{seconds}\u79d2',
  durationMinutes: '{minutes}\u5206{seconds}\u79d2',
  pendingKindApproval: '\u5f85\u5ba1\u6279',
  pendingKindQuestion: '\u5411\u4f60\u63d0\u95ee',
  pendingKindPlanReview: '\u8ba1\u5212\u5f85\u5ba1\u6838',
  pendingApprovalTool: '\u5f85\u5ba1\u6279 \u00b7 {tool}',
  pendingQuestionChoose: '\u8bf7\u4f60\u9009\u62e9',
  pendingQuestionMulti: '\u8bf7\u4f60\u591a\u9009',
  pendingQuestionFill: '\u8bf7\u4f60\u586b\u5199',
  pendingQuestionBatch: '\u5411\u4f60\u63d0\u95ee\uff08{count} \u4e2a\uff09',
  save: '\u4fdd\u5b58',
  saved: '\u5df2\u4fdd\u5b58\u3002',
  invalidToken: '\u8bf7\u8f93\u5165\u6570\u5b57\u6216\u5e26 k/M \u540e\u7f00\u7684\u503c\uff08\u5982 130k\uff09\u3002',
  invalidHex: '\u989c\u8272\u683c\u5f0f\u5e94\u4e3a #RRGGBB\u3002',
  errorPrefix: '\u9519\u8bef\uff1a ',
  unavailable: '\u6b64\u8bbe\u7f6e\u5728\u5f53\u524d\u5ba2\u6237\u7aef\u4e0d\u53ef\u7528\u3002',
  loading: '\u52a0\u8f7d\u4e2d\u2026',
}

/** Parse a human token count (`130k`, `1.5m`, `130000`). */
function parseTokenText(text) {
  const raw = String(text ?? '').trim().replace(/[\s_]/g, '')
  if (raw === '') return undefined
  const match = /^(\d+(?:[.,]\d+)?)([kKmM])?$/.exec(raw)
  if (match === null) return undefined
  const base = Number(match[1].replace(',', '.'))
  if (!Number.isFinite(base) || base < 0) return undefined
  const scale = match[2] === undefined ? 1 : match[2].toLowerCase() === 'k' ? 1000 : 1000000
  return Math.round(base * scale)
}

/** Build `{ provider, model, name, levels }` rows from the pi-ai config value. */
function buildCatalog(providers) {
  const rows = []
  if (providers === null || typeof providers !== 'object') return rows
  for (const [provider, profile] of Object.entries(providers)) {
    const models = profile !== null && typeof profile === 'object' && Array.isArray(profile.models) ? profile.models : []
    for (const model of models) {
      if (model === null || typeof model !== 'object' || typeof model.id !== 'string') continue
      const efforts = model.reasoningEfforts
      const levels = efforts === false ? [] : (efforts !== null && typeof efforts === 'object' ? Object.keys(efforts) : [])
      rows.push({ provider, model: model.id, name: typeof model.name === 'string' && model.name !== '' ? model.name : model.id, levels })
    }
  }
  return rows
}

const S = {
  wrap: { display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 680, paddingTop: 4 },
  tabs: { marginTop: 4 },
  group: { marginTop: 10, paddingTop: 10, borderTop: '0.5px solid var(--dsw-alias-border-l3)' },
  groupFirst: { marginTop: 10 },
  groupTitle: { fontWeight: 600, marginBottom: 2 },
  label: { display: 'block', fontWeight: 600, marginBottom: 6, color: 'var(--dsw-alias-label-primary)' },
  hint: { color: 'var(--dsw-alias-label-tertiary)', fontSize: 12, margin: '4px 0 12px' },
  input: {
    height: 32,
    padding: '0 8px',
    border: '0.5px solid var(--dsw-alias-border-l4)',
    borderRadius: 8,
    fontFamily: 'inherit',
    fontSize: 14,
    background: 'var(--dsw-alias-bg-layer-1)',
    color: 'var(--dsw-alias-label-primary)',
    width: '100%',
    boxSizing: 'border-box',
  },
  select: { cursor: 'pointer' },
  hex: { fontFamily: 'monospace', width: 110, flex: '0 0 auto' },
  color: {
    flex: '0 0 auto',
    width: 32,
    height: 32,
    padding: 2,
    border: '0.5px solid var(--dsw-alias-border-l4)',
    borderRadius: 8,
    background: 'var(--dsw-alias-bg-layer-1)',
    cursor: 'pointer',
  },
  rowTwo: { display: 'flex', gap: 12 },
  rowFlex: { display: 'flex', gap: 8, alignItems: 'center' },
  col: { flex: 1, minWidth: 0 },
  providerBlock: { marginBottom: 12 },
  preview: { marginTop: 8, padding: 10, border: '0.5px solid var(--dsw-alias-border-l4)', borderRadius: 8, background: 'var(--dsw-alias-bg-layer-1)' },
  previewRow: { display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', cursor: 'pointer' },
  toggle: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 },
  toggleText: { display: 'flex', flexDirection: 'column', gap: 2 },
  toggleLabel: { fontWeight: 600, color: 'var(--dsw-alias-label-primary)' },
  error: { color: 'var(--dsw-alias-state-error-primary, #c00)', fontSize: 12, marginTop: 2 },
}

function PrefsSection(props) {
  const { t, usePrefs, useModelCatalog, save, probe, writeModels } = props
  const snap = usePrefs((s) => s)
  const catalogSnap = useModelCatalog((s) => s)
  const value = snap !== null && snap !== undefined && typeof snap.value === 'object' && snap.value !== null ? snap.value : {}
  const providers = catalogSnap !== null && catalogSnap !== undefined && catalogSnap.value !== null && typeof catalogSnap.value === 'object' ? catalogSnap.value.providers : undefined
  const catalog = buildCatalog(providers)
  const status = snap !== null && snap !== undefined ? snap.status : 'loading'
  const writable = !!(snap && snap.writable)

  const [tab, setTab] = React.useState('compaction')
  const [permission, setPermission] = React.useState(() => currentNotificationPermission())
  const [draft, setDraft] = React.useState(() => ({
    thresholdTokens: value.thresholdTokens ? String(value.thresholdTokens) : '',
    contextWindowTokens: value.contextWindowTokens ? String(value.contextWindowTokens) : '',
    retainTokens: value.retainTokens ? String(value.retainTokens) : '',
  }))
  const [note, setNote] = React.useState('')
  const [enrichNote, setEnrichNote] = React.useState('')
  const [busyRoute, setBusyRoute] = React.useState('')
  const [preview, setPreview] = React.useState(null)
  const [stickyBg, setStickyBg] = React.useState('')
  const wrapRef = React.useRef(null)
  const valueRef = snap && snap.value
  React.useEffect(() => {
    setDraft({
      thresholdTokens: valueRef && valueRef.thresholdTokens ? String(valueRef.thresholdTokens) : '',
      contextWindowTokens: valueRef && valueRef.contextWindowTokens ? String(valueRef.contextWindowTokens) : '',
      retainTokens: valueRef && valueRef.retainTokens ? String(valueRef.retainTokens) : '',
    })
    setNote('')
  }, [valueRef])
  // The settings panel scrolls; pick its background so the sticky tab bar does
  // not show content scrolling underneath.
  React.useEffect(() => {
    let node = wrapRef.current?.parentElement ?? null
    while (node !== null && node !== document.body) {
      const bg = getComputedStyle(node).backgroundColor
      if (bg !== '' && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') { setStickyBg(bg); break }
      node = node.parentElement
    }
  }, [])

  if (status === 'loading') return el('div', { style: S.hint }, t('loading'))
  if (status === 'unavailable') return el('div', { style: S.hint }, t('unavailable'))

  const disabled = !writable
  const write = (field, v) => {
    setNote('')
    Promise.resolve(save(field, v)).catch((error) => setNote(t('errorPrefix') + String(error && error.message ? error.message : error)))
  }
  const commitTokens = (field, text) => {
    if (text.trim() === '') { write(field, 0); return }
    const parsed = parseTokenText(text)
    if (parsed === undefined) { setNote(t('invalidToken')); return }
    write(field, parsed)
  }
  const num = (field, fallback) => ({
    value: String(value[field] !== undefined ? value[field] : fallback),
    disabled,
    onChange: (e) => { const n = Number(e.target.value); if (Number.isFinite(n)) write(field, n) },
  })
  const switchField = (labelKey, field, hintKey, fallback) => el('div', { style: S.toggle, key: field },
    el(Switch, {
      checked: value[field] !== undefined ? !!value[field] : fallback,
      disabled,
      label: t(labelKey),
      onChange: (next) => write(field, next),
    }),
    el('div', { style: S.toggleText },
      el('span', { style: S.toggleLabel }, t(labelKey)),
      hintKey ? el('span', { style: { color: 'var(--dsw-alias-label-tertiary)', fontSize: 12 } }, t(hintKey)) : null,
    ),
  )
  const textField = (labelKey, field, hintKey) => el('div', { style: S.col, key: field },
    el('div', { style: S.label }, t(labelKey)),
    el('input', {
      type: 'text', style: S.input, disabled,
      value: draft[field],
      onChange: (e) => setDraft((d) => ({ ...d, [field]: e.target.value })),
      onBlur: () => commitTokens(field, draft[field]),
      onKeyDown: (e) => { if (e.key === 'Enter') commitTokens(field, draft[field]) },
    }),
    el('div', { style: S.hint }, t(hintKey)),
  )
  const numberField = (labelKey, field, hintKey, fallback) => el('div', { style: S.col, key: field },
    el('div', { style: S.label }, t(labelKey)),
    el('input', { type: 'number', step: 'any', style: S.input, ...num(field, fallback) }),
    hintKey ? el('div', { style: S.hint }, t(hintKey)) : null,
  )
  /** Colour row: native picker + editable hex, optional clear (empty = official). */
  const colorField = (labelKey, field, fallbackHex, optional, hintKey) => {
    const current = typeof value[field] === 'string' ? value[field] : ''
    const shown = current !== '' ? current : (fallbackHex ?? '#000000')
    return el('div', { style: { ...S.col, marginBottom: 10 }, key: field },
      el('div', { style: S.label }, t(labelKey)),
      el('div', { style: S.rowFlex },
        el('input', {
          type: 'color', value: shown, disabled, style: S.color,
          onChange: (e) => write(field, e.target.value),
        }),
        el('input', {
          type: 'text', style: { ...S.input, ...S.hex }, disabled,
          value: current, placeholder: optional ? t('colorUnset') : '',
          onChange: (e) => {
            const next = e.target.value.trim()
            if (next === '' && optional) write(field, '')
            else if (HEX.test(next)) write(field, next)
          },
        }),
        optional && current !== ''
          ? el(Button, { variant: 'ghost', size: 'sm', disabled, onClick: () => write(field, '') }, t('colorReset'))
          : null,
      ),
      hintKey ? el('div', { style: S.hint }, t(hintKey)) : null,
    )
  }
  const enableNotifications = (next) => {
    if (!next) { write('notifyEnabled', false); return }
    write('notifyEnabled', true)
    primeSound()
    void requestNotificationPermission().then(setPermission)
  }

  /** Fetch a provider's models and build a per-model review of what importing would change. */
  const fetchPreview = async (routeId, profile) => {
    setBusyRoute(routeId)
    setEnrichNote('')
    setPreview(null)
    try {
      const response = await probe({
        baseURL: profile.baseURL,
        ...(typeof profile.apiKeyEnv === 'string' && profile.apiKeyEnv !== '' ? { apiKeyEnv: profile.apiKeyEnv } : {}),
      })
      const found = Array.isArray(response?.models) ? response.models : []
      const existing = Array.isArray(profile.models) ? profile.models : []
      const byId = new Map(existing.map((m) => [m.id, m]))
      const rows = found.map((m) => {
        const cur = byId.get(m.id)
        if (cur === undefined) return { id: m.id, name: m.name, isNew: true, changes: [], value: m, selected: true }
        const changes = []
        if (m.contextWindow !== undefined && cur.contextWindow !== m.contextWindow) changes.push({ field: 'contextWindow', from: cur.contextWindow, to: m.contextWindow })
        if (m.maxTokens !== undefined && cur.maxTokens !== m.maxTokens) changes.push({ field: 'maxTokens', from: cur.maxTokens, to: m.maxTokens })
        const fromInput = Array.isArray(cur.input) ? cur.input.join('+') : undefined
        const toInput = Array.isArray(m.input) ? m.input.join('+') : undefined
        if (toInput !== undefined && toInput !== fromInput) changes.push({ field: 'input', from: fromInput, to: toInput })
        return { id: m.id, name: m.name, isNew: false, changes, value: m, selected: changes.length > 0 }
      })
      if (rows.length === 0) { setEnrichNote(t('noModels')); return }
      setPreview({ routeId, rows })
    } catch (error) {
      setEnrichNote(t('errorPrefix') + String(error && error.message ? error.message : error))
    } finally {
      setBusyRoute('')
    }
  }

  const togglePreview = (id) => setPreview((p) => (p === null ? p : { ...p, rows: p.rows.map((r) => (r.id === id ? { ...r, selected: !r.selected } : r)) }))

  /** Import the selected server values (update existing entries, append new ones). */
  const applyPreview = async () => {
    const p = preview
    if (p === null) return
    const profile = (providers !== null && typeof providers === 'object' ? providers[p.routeId] : undefined) ?? {}
    const existing = Array.isArray(profile.models) ? profile.models : []
    const selectedById = new Map(p.rows.filter((r) => r.selected).map((r) => [r.id, r]))
    const next = existing.map((m) => {
      const row = selectedById.get(m.id)
      if (row === undefined || row.isNew) return m
      const v = row.value
      return {
        ...m,
        ...(v.contextWindow === undefined ? {} : { contextWindow: v.contextWindow }),
        ...(v.maxTokens === undefined ? {} : { maxTokens: v.maxTokens }),
        ...(v.input === undefined ? {} : { input: [...v.input] }),
      }
    })
    for (const row of p.rows) {
      if (!row.isNew || !row.selected) continue
      const v = row.value
      next.push({
        id: v.id,
        name: v.name,
        ...(v.contextWindow === undefined ? {} : { contextWindow: v.contextWindow }),
        ...(v.maxTokens === undefined ? {} : { maxTokens: v.maxTokens }),
        ...(v.input === undefined ? {} : { input: [...v.input] }),
      })
    }
    try {
      await writeModels(p.routeId, next)
      setEnrichNote(t('applied', { count: selectedById.size }))
      setPreview(null)
    } catch (error) {
      setEnrichNote(t('errorPrefix') + String(error && error.message ? error.message : error))
    }
  }

  /** One row of the import review: checkbox, model name, and the pending changes. */
  const changeText = (row) => {
    const fmt = (v) => (v === undefined || v === null || v === '' ? '\u2014' : String(v))
    if (row.isNew) return t('previewNew')
    if (row.changes.length === 0) return t('previewNoChange')
    return row.changes.map((c) => `${c.field}: ${fmt(c.from)} \u2192 ${fmt(c.to)}`).join('  \u00b7  ')
  }

  const previewPanel = (p) => {
    const selected = p.rows.filter((r) => r.selected).length
    return el('div', { style: S.preview, key: 'preview' },
      el('div', { style: S.groupTitle }, t('previewTitle')),
      el('div', { style: S.hint }, t('previewHint')),
      ...p.rows.map((row) => el('label', { key: row.id, style: S.previewRow },
        el('input', { type: 'checkbox', checked: row.selected, disabled, onChange: () => togglePreview(row.id) }),
        el('span', { style: { fontWeight: 600, maxWidth: 200, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, row.name),
        el('span', { style: { color: 'var(--dsw-alias-label-tertiary)', fontSize: 12 } }, changeText(row)),
      )),
      el('div', { style: { ...S.rowFlex, marginTop: 8 } },
        el(Button, { variant: 'primary', size: 'sm', disabled: disabled || selected === 0, onClick: () => { void applyPreview() } }, t('apply', { count: selected })),
        el(Button, { variant: 'ghost', size: 'sm', disabled, onClick: () => setPreview(null) }, t('cancel')),
      ),
    )
  }

  const providerRows = Object.entries(providers !== null && typeof providers === 'object' ? providers : {}).map(([routeId, profile]) => {
    const baseURL = profile !== null && typeof profile === 'object' && typeof profile.baseURL === 'string' ? profile.baseURL : ''
    return el('div', { key: routeId, style: S.providerBlock },
      el('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
        el('span', { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, `${routeId}${baseURL ? ` — ${baseURL}` : ''}`),
        baseURL
          ? el(Button, { variant: 'outline', size: 'sm', disabled: busyRoute === routeId || disabled, onClick: () => { void fetchPreview(routeId, profile) } }, busyRoute === routeId ? t('enriching') : t('enrich'))
          : el('span', { style: { color: 'var(--dsw-alias-label-tertiary)', fontSize: 12, flexShrink: 0 } }, t('noBaseUrl')),
      ),
      preview !== null && preview.routeId === routeId ? previewPanel(preview) : null,
    )
  })

  // Summarization model/reasoning pickers.
  const mode = value.summarizationMode === 'custom' ? 'custom' : 'session'
  const providerNames = [...new Set(catalog.map((r) => r.provider))]
  const selectedProvider = value.summarizationProvider || providerNames[0] || ''
  const modelsForProvider = catalog.filter((r) => r.provider === selectedProvider)
  const selectedRow = modelsForProvider.find((r) => r.model === value.summarizationModel) || modelsForProvider[0]
  const levelSet = ['default', 'off', ...(selectedRow ? selectedRow.levels : [])]
  const reasoning = value.summarizationReasoning || 'default'
  const selectOptions = (pairs) => pairs.map(([v, label]) => el('option', { key: v, value: v }, label))

  const summarization = [
    el('div', { style: S.col, key: 'mode' },
      el('div', { style: S.label }, t('summarizationMode')),
      el('select', { style: { ...S.input, ...S.select }, disabled, value: mode, onChange: (e) => write('summarizationMode', e.target.value) },
        selectOptions([['session', t('modeSession')], ['custom', t('modeCustom')]])),
    ),
  ]
  if (mode === 'custom') {
    summarization.push(el('div', { style: S.col, key: 'provider' },
      el('div', { style: S.label }, t('provider')),
      el('select', {
        style: { ...S.input, ...S.select }, disabled, value: selectedProvider,
        onChange: (e) => {
          const next = catalog.find((r) => r.provider === e.target.value)
          write('summarizationProvider', e.target.value)
          if (next) write('summarizationModel', next.model)
          write('summarizationReasoning', 'default')
        },
      }, providerNames.map((p) => el('option', { key: p, value: p }, p))),
    ))
    summarization.push(el('div', { style: S.col, key: 'model' },
      el('div', { style: S.label }, t('model')),
      el('select', {
        style: { ...S.input, ...S.select }, disabled,
        value: selectedRow ? selectedRow.model : '',
        onChange: (e) => { write('summarizationModel', e.target.value); write('summarizationReasoning', 'default') },
      }, modelsForProvider.map((r) => el('option', { key: r.model, value: r.model }, r.name))),
    ))
  }
  summarization.push(el('div', { style: S.col, key: 'reasoning' },
    el('div', { style: S.label }, t('reasoning')),
    el('select', { style: { ...S.input, ...S.select }, disabled, value: levelSet.includes(reasoning) ? reasoning : 'default', onChange: (e) => write('summarizationReasoning', e.target.value) },
      levelSet.map((lv) => el('option', { key: lv, value: lv }, lv === 'default' ? t('reasoningDefault') : lv === 'off' ? t('reasoningOff') : lv))),
  ))

  const compactionPanel = [
    el('div', { style: S.groupFirst, key: 'threshold' },
      el('div', { style: S.groupTitle }, t('thresholdTitle')),
      el('div', { style: S.rowTwo },
        textField('thresholdTokens', 'thresholdTokens', 'thresholdTokensHint'),
        textField('contextWindow', 'contextWindowTokens', 'contextWindowHint'),
      ),
      el('div', { style: S.rowTwo },
        numberField('thresholdRatio', 'thresholdRatio', 'thresholdRatioHint', 0.8),
        numberField('headroom', 'headroomTokens', 'headroomHint', 32768),
      ),
    ),
    el('div', { style: S.group, key: 'retention' },
      el('div', { style: S.groupTitle }, t('retentionTitle')),
      el('div', { style: S.rowTwo },
        textField('retainTokens', 'retainTokens', 'retainTokensHint'),
        numberField('retainRatio', 'retainRatio', null, 0.16),
      ),
    ),
    el('div', { style: S.group, key: 'behaviour' },
      el('div', { style: S.groupTitle }, t('behaviourTitle')),
      switchField('auto', 'auto', 'autoHint', true),
      switchField('turnEnd', 'turnEndCompactionEnabled', 'turnEndHint', false),
    ),
    el('div', { style: S.group, key: 'summarization' },
      el('div', { style: S.groupTitle }, t('summarizationTitle')),
      el('div', { style: S.rowTwo }, summarization),
      numberField('maxTokens', 'maxTokens', null, 32768),
    ),
    el('div', { style: S.group, key: 'advanced' },
      el('div', { style: S.groupTitle }, t('advancedTitle')),
      el('div', { style: S.rowTwo },
        numberField('compactionRetries', 'compactionRetries', null, 1),
        numberField('maxOverflowRetries', 'maxOverflowRetries', null, 1),
      ),
    ),
  ]

  const modelsPanel = [
    el('div', { style: S.groupFirst, key: 'models' },
      el('div', { style: S.groupTitle }, t('modelsTitle')),
      el('div', { style: S.hint }, t('modelsIntro')),
      ...providerRows,
      enrichNote ? el('div', { style: S.hint }, enrichNote) : null,
    ),
  ]

  const volumeNow = typeof value.notifyVolume === 'number' ? value.notifyVolume : 0.6
  const soundSelectOptions = () => [
    el('option', { key: SOUND_NONE, value: SOUND_NONE }, t('soundNoSound')),
    el('optgroup', { key: 'builtin', label: t('soundPackBuiltin') },
      BUILTIN_SOUNDS.map((sound) => el('option', { key: sound.id, value: sound.id }, t(sound.labelKey)))),
    ...SOUND_PACKS.map((pack) => el('optgroup', { key: pack.prefix, label: pack.name },
      packSoundIds(pack).map((id, index) => el('option', { key: id, value: id }, `${pack.name} ${String(index + 1).padStart(2, '0')}`)))),
  ]
  /** Sound selector; picking one previews it (and unlocks audio in the gesture). */
  const soundSelect = (labelKey, field, kind) => el('div', { style: { ...S.col, marginBottom: 10 }, key: field },
    el('div', { style: S.label }, t(labelKey)),
    el('select', {
      style: { ...S.input, ...S.select }, disabled,
      value: typeof value[field] === 'string' ? value[field] : SOUND_NONE,
      onChange: (e) => {
        const id = e.target.value
        write(field, id)
        primeSound()
        if (id !== SOUND_NONE) playSound(id, volumeNow, kind)
      },
    }, soundSelectOptions()),
  )

  const notificationsEnabled = value.notifyEnabled !== undefined ? !!value.notifyEnabled : false
  const notificationsPanel = [
    el('div', { style: S.groupFirst, key: 'colors' },
      el('div', { style: S.groupTitle }, t('colorsGroup')),
      el('div', { style: S.hint }, t('colorsIntro')),
      switchField('colorsEnabled', 'colorsEnabled', 'colorsEnabledHint', true),
      el('div', { style: S.rowTwo, key: 'colors1' },
        colorField('greenLabel', 'green', '#22C55E', false, null),
        colorField('amberLabel', 'amber', '#F59E0B', false, null),
      ),
      el('div', { style: S.rowTwo, key: 'colors2' },
        colorField('workingLabel', 'working', '#3B82F6', false, 'workingHint'),
        colorField('blackLabel', 'black', '#000000', true, 'blackHint'),
      ),
    ),
    el('div', { style: S.group, key: 'notify' },
      el('div', { style: S.groupTitle }, t('notifyGroup')),
      el('div', { style: S.hint }, t('notifyIntro')),
      el('div', { style: S.toggle, key: 'notifyEnabled' },
        el(Switch, {
          checked: notificationsEnabled,
          disabled,
          label: t('notifyEnabled'),
          onChange: enableNotifications,
        }),
        el('div', { style: S.toggleText },
          el('span', { style: S.toggleLabel }, t('notifyEnabled')),
          el('span', { style: { color: 'var(--dsw-alias-label-tertiary)', fontSize: 12 } }, t('notifyEnabledHint')),
        ),
      ),
      notificationsEnabled && permission === 'denied' ? el('div', { style: S.error }, t('permissionDenied')) : null,
      notificationsEnabled && permission === 'unsupported' ? el('div', { style: S.error }, t('permissionUnsupported')) : null,
      switchField('notifyForeground', 'notifyForeground', 'notifyForegroundHint', false),
      el('div', { style: S.toggle, key: 'volume' },
        el('span', { style: S.toggleLabel }, t('notifyVolume')),
        el('input', {
          type: 'range', min: 0, max: 100, step: 5, disabled,
          value: Math.round(volumeNow * 100), 'aria-label': t('notifyVolume'),
          style: { flex: '0 0 auto', width: 140, accentColor: 'var(--dsw-alias-brand-primary)', cursor: 'pointer' },
          onChange: (e) => write('notifyVolume', Number(e.target.value) / 100),
        }),
        el('span', { style: { color: 'var(--dsw-alias-label-tertiary)', fontSize: 12, minWidth: 36, textAlign: 'right' } }, `${Math.round(volumeNow * 100)}%`),
      ),
    ),
    el('div', { style: S.group, key: 'done' },
      el('div', { style: S.groupTitle }, t('notifyDoneGroup')),
      switchField('notifyDoneEnabled', 'notifyDoneEnabled', 'notifyDoneEnabledHint', true),
      switchField('persistDone', 'notifyDonePersistent', 'persistHint', false),
      soundSelect('sound', 'notifyDoneSound', 'done'),
    ),
    el('div', { style: S.group, key: 'pending' },
      el('div', { style: S.groupTitle }, t('notifyPendingGroup')),
      switchField('notifyPendingEnabled', 'notifyPendingEnabled', 'notifyPendingEnabledHint', true),
      switchField('persistPending', 'notifyPendingPersistent', 'persistHint', false),
      soundSelect('sound', 'notifyPendingSound', 'pending'),
    ),
  ]

  const panels = { compaction: compactionPanel, models: modelsPanel, notifications: notificationsPanel }

  return el('div', { ref: wrapRef, style: S.wrap },
    el('div', { style: S.groupTitle }, t('title')),
    el('div', { style: { ...S.hint, marginBottom: 8 } }, t('intro')),
    el('div', {
      style: {
        ...S.tabs,
        position: 'sticky',
        top: 0,
        zIndex: 5,
        paddingTop: 4,
        paddingBottom: 8,
        background: stickyBg || 'var(--dsw-alias-bg-layer-3, #2c2c2e)',
      },
    },
      el(SegmentedControl, {
        id: TABS_ID,
        value: tab,
        options: [
          { value: 'compaction', label: t('tabCompaction') },
          { value: 'notifications', label: t('tabNotifications') },
          { value: 'models', label: t('tabModels') },
        ],
        onChange: setTab,
        label: t('title'),
      }),
    ),
    el('div', { id: `${TABS_ID}-${tab}-panel`, role: 'tabpanel' }, ...(panels[tab] ?? compactionPanel)),
    note ? el('div', { style: S.error }, note) : null,
  )
}

export async function apply(ctx) {
  ctx.effect(() => ctx.locale.register(LOCALE_NS, { en, zh }), 'malko-prefs: locale dictionaries')
  const t = ctx.locale.bind(LOCALE_NS)
  const form = ctx.configForms.get(NS)
  const modelForm = ctx.configForms.get(MODEL_NS)
  // The application only auto-mounts its own Remote selection, so a plugin
  // ships and mounts its own contribution.
  try {
    const disposeRemote = await ctx.remote.$mount(PROBE_REMOTE)
    ctx.effect(() => () => { void disposeRemote() }, 'malko-prefs: malkoModels remote')
  } catch (error) {
    console.error('dsh-malko-prefs: could not mount the malkoModels remote —', error)
  }
  // Tab status light + browser notifications (independent of the settings page).
  ctx.effect(() => startStatusLight(ctx, form), 'malko-prefs: tab status light')
  const injected = () => ({
    hooks: { prefs: form, modelCatalog: modelForm },
    save: (field, value) => form.set(field, value),
    probe: async (args) => {
      // A namespace service is resolved by its full key; reading it off
      // `ctx.remote` would require an `inject` this plugin cannot declare
      // before the contribution is mounted.
      const remote = ctx.get('remote.malkoModels')
      if (remote === undefined) throw new Error('the malkoModels remote is not available')
      const result = await remote.probe(args)
      // Remote methods resolve to a `{ ok, value }` / `{ ok, error }` envelope.
      if (result !== null && typeof result === 'object' && 'ok' in result) {
        if (result.ok !== true) throw result.error ?? new Error('the malkoModels probe failed')
        return result.value
      }
      return result
    },
    writeModels: (routeId, models) => modelForm.mutate([{ op: 'set', path: ['providers', routeId, 'models'], value: models }]),
  })
  ctx.slots.inject(SLOT, () => ctx.slots.register({
    name: SLOT,
    id: NS,
    order: 45,
    label: () => t('title'),
    locale: LOCALE_NS,
    inject: injected,
  }, PrefsSection))
}