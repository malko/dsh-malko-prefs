/**
 * dsh-malko-prefs — browser half.
 *
 * A self-contained settings section for the personal compaction preferences:
 * threshold (absolute tokens or ratio), retention, automatic + turn-end
 * compaction, and the summarization model/reasoning. Reads and writes the
 * `malko-prefs` config form, and reads the `llm-pi-ai` form to populate the
 * model/reasoning pickers.
 */
import React from 'react'

export const name = 'dsh-malko-prefs'
export const inject = ['slots', 'locale', 'configForms', 'remote']

const NS = 'malko-prefs'
const MODEL_NS = 'llm-pi-ai'
const LOCALE_NS = 'settings.malko-prefs'
const SLOT = 'settings.section'

const el = React.createElement

const en = {
  title: 'Model & context (malko)',
  intro: 'Tunable companion to the official compaction engine.',
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
  modelsTitle: 'llama.cpp models',
  modelsIntro: 'Read context window and input modalities from the server and fill the model entries of a pi-ai provider.',
  enrich: 'Enrich from server',
  enriching: 'Enriching\u2026',
  noBaseUrl: 'No endpoint configured for this provider.',
  enriched: 'Enriched {count} model(s).',
  save: 'Save',
  saved: 'Saved.',
  invalidToken: 'Enter a number or a k/M suffix value (e.g. 130k).',
  errorPrefix: 'Error: ',
  unavailable: 'This setting is not available from this client.',
  loading: 'Loading\u2026',
}

const zh = {
  title: '\u6a21\u578b\u4e0e\u4e0a\u4e0b\u6587\uff08malko\uff09',
  intro: '\u5b98\u65b9\u538b\u7f29\u5f15\u64ce\u7684\u53ef\u8c03\u4f34\u751f\u3002',
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
  modelsIntro: '\u4ece\u670d\u52a1\u5668\u8bfb\u53d6\u4e0a\u4e0b\u6587\u7a97\u53e3\u4e0e\u8f93\u5165\u6a21\u6001\uff0c\u5e76\u586b\u5145 pi-ai \u63d0\u4f9b\u5546\u7684\u6a21\u578b\u6761\u76ee\u3002',
  enrich: '\u4ece\u670d\u52a1\u5668\u5bcc\u5316',
  enriching: '\u6b63\u5728\u5bcc\u5316\u2026',
  noBaseUrl: '\u8be5\u63d0\u4f9b\u5546\u672a\u914d\u7f6e\u7aef\u70b9\u3002',
  enriched: '\u5df2\u5bcc\u5316 {count} \u4e2a\u6a21\u578b\u3002',
  save: '\u4fdd\u5b58',
  saved: '\u5df2\u4fdd\u5b58\u3002',
  invalidToken: '\u8bf7\u8f93\u5165\u6570\u5b57\u6216\u5e26 k/M \u540e\u7f00\u7684\u503c\uff08\u5982 130k\uff09\u3002',
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
  group: { marginTop: 10, paddingTop: 10, borderTop: '0.5px solid var(--dsw-alias-border-l2, #ddd)' },
  groupTitle: { fontWeight: 600, marginBottom: 2 },
  label: { display: 'block', fontWeight: 600, marginBottom: 6 },
  hint: { opacity: 0.7, fontSize: 12, margin: '4px 0 12px' },
  input: { padding: '6px 8px', border: '1px solid var(--dsw-alias-border-l2, #ccc)', borderRadius: 4, fontFamily: 'inherit', background: 'var(--dsw-alias-bg-base, #fff)', color: 'var(--dsw-alias-label-primary, #111)', width: '100%', boxSizing: 'border-box' },
  rowTwo: { display: 'flex', gap: 12 },
  col: { flex: 1, minWidth: 0 },
  inline: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 },
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

  const [draft, setDraft] = React.useState(() => ({
    thresholdTokens: value.thresholdTokens ? String(value.thresholdTokens) : '',
    contextWindowTokens: value.contextWindowTokens ? String(value.contextWindowTokens) : '',
    retainTokens: value.retainTokens ? String(value.retainTokens) : '',
  }))
  const [note, setNote] = React.useState('')
  const [enrichNote, setEnrichNote] = React.useState('')
  const [busyRoute, setBusyRoute] = React.useState('')
  const valueRef = snap && snap.value
  React.useEffect(() => {
    setDraft({
      thresholdTokens: valueRef && valueRef.thresholdTokens ? String(valueRef.thresholdTokens) : '',
      contextWindowTokens: valueRef && valueRef.contextWindowTokens ? String(valueRef.contextWindowTokens) : '',
      retainTokens: valueRef && valueRef.retainTokens ? String(valueRef.retainTokens) : '',
    })
    setNote('')
  }, [valueRef])

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
  const checkbox = (field, fallback) => ({
    checked: value[field] !== undefined ? !!value[field] : fallback,
    disabled,
    onChange: (e) => write(field, e.target.checked),
  })
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
  const checkField = (labelKey, field, hintKey, fallback) => el('label', { style: S.inline, key: field },
    el('input', { type: 'checkbox', ...checkbox(field, fallback) }),
    el('span', null, t(labelKey)),
    hintKey ? el('span', { style: { opacity: 0.7, fontSize: 12 } }, t(hintKey)) : null,
  )

  const enrichProvider = async (routeId, profile) => {
    setBusyRoute(routeId)
    setEnrichNote('')
    try {
      const response = await probe({ args: { baseURL: profile.baseURL } })
      const found = Array.isArray(response?.models) ? response.models : []
      const byId = new Map(found.map((m) => [m.id, m]))
      const existing = Array.isArray(profile.models) ? profile.models : []
      const merged = existing.length === 0
        ? found.map((m) => ({
            id: m.id,
            name: m.name,
            ...(m.contextWindow === undefined ? {} : { contextWindow: m.contextWindow }),
            ...(m.maxTokens === undefined ? {} : { maxTokens: m.maxTokens }),
            ...(m.input === undefined ? {} : { input: m.input }),
          }))
        : existing.map((m) => {
            const hit = byId.get(m.id)
            if (hit === undefined) return m
            const next = { ...m }
            if (next.contextWindow === undefined && hit.contextWindow !== undefined) next.contextWindow = hit.contextWindow
            if (next.input === undefined && hit.input !== undefined) next.input = hit.input
            return next
          })
      await writeModels(routeId, merged)
      setEnrichNote(t('enriched', { count: merged.length }))
    } catch (error) {
      setEnrichNote(t('errorPrefix') + String(error && error.message ? error.message : error))
    } finally {
      setBusyRoute('')
    }
  }

  const providerRows = Object.entries(providers !== null && typeof providers === 'object' ? providers : {}).map(([routeId, profile]) => {
    const baseURL = profile !== null && typeof profile === 'object' && typeof profile.baseURL === 'string' ? profile.baseURL : ''
    return el('div', { key: routeId, style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 } },
      el('span', { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, `${routeId}${baseURL ? ` — ${baseURL}` : ''}`),
      baseURL
        ? el('button', {
            type: 'button',
            style: { ...S.input, width: 'auto', cursor: busyRoute === routeId || disabled ? 'default' : 'pointer', flexShrink: 0 },
            disabled: busyRoute === routeId || disabled,
            onClick: () => { void enrichProvider(routeId, profile) },
          }, busyRoute === routeId ? t('enriching') : t('enrich'))
        : el('span', { style: { opacity: 0.6, fontSize: 12, flexShrink: 0 } }, t('noBaseUrl')),
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
  const options = (pairs, selected) => pairs.map(([v, label]) => el('option', { key: v, value: v }, label))

  const summarization = [
    el('div', { style: S.col, key: 'mode' },
      el('div', { style: S.label }, t('summarizationMode')),
      el('select', { style: S.input, disabled, value: mode, onChange: (e) => write('summarizationMode', e.target.value) },
        options([['session', t('modeSession')], ['custom', t('modeCustom')]], mode)),
    ),
  ]
  if (mode === 'custom') {
    summarization.push(el('div', { style: S.col, key: 'provider' },
      el('div', { style: S.label }, t('provider')),
      el('select', {
        style: S.input, disabled, value: selectedProvider,
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
        style: S.input, disabled,
        value: selectedRow ? selectedRow.model : '',
        onChange: (e) => { write('summarizationModel', e.target.value); write('summarizationReasoning', 'default') },
      }, modelsForProvider.map((r) => el('option', { key: r.model, value: r.model }, r.name))),
    ))
  }
  summarization.push(el('div', { style: S.col, key: 'reasoning' },
    el('div', { style: S.label }, t('reasoning')),
    el('select', { style: S.input, disabled, value: levelSet.includes(reasoning) ? reasoning : 'default', onChange: (e) => write('summarizationReasoning', e.target.value) },
      levelSet.map((lv) => el('option', { key: lv, value: lv }, lv === 'default' ? t('reasoningDefault') : lv === 'off' ? t('reasoningOff') : lv))),
  ))

  return el('div', { style: S.wrap },
    el('div', { style: S.groupTitle }, t('title')),
    el('div', { style: S.hint }, t('intro')),

    el('div', { style: S.group },
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

    el('div', { style: S.group },
      el('div', { style: S.groupTitle }, t('retentionTitle')),
      el('div', { style: S.rowTwo },
        textField('retainTokens', 'retainTokens', 'retainTokensHint'),
        numberField('retainRatio', 'retainRatio', null, 0.16),
      ),
    ),

    el('div', { style: S.group },
      el('div', { style: S.groupTitle }, t('behaviourTitle')),
      checkField('auto', 'auto', 'autoHint', true),
      checkField('turnEnd', 'turnEndCompactionEnabled', 'turnEndHint', false),
    ),

    el('div', { style: S.group },
      el('div', { style: S.groupTitle }, t('summarizationTitle')),
      el('div', { style: S.rowTwo }, summarization),
      numberField('maxTokens', 'maxTokens', null, 32768),
    ),

    el('div', { style: S.group },
      el('div', { style: S.groupTitle }, t('advancedTitle')),
      el('div', { style: S.rowTwo },
        numberField('compactionRetries', 'compactionRetries', null, 1),
        numberField('maxOverflowRetries', 'maxOverflowRetries', null, 1),
      ),
    ),

    el('div', { style: S.group },
      el('div', { style: S.groupTitle }, t('modelsTitle')),
      el('div', { style: S.hint }, t('modelsIntro')),
      ...providerRows,
      enrichNote ? el('div', { style: S.hint }, enrichNote) : null,
    ),

    note ? el('div', { style: S.error }, note) : null,
  )
}

export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(LOCALE_NS, { en, zh }), 'malko-prefs: locale dictionaries')
  const t = ctx.locale.bind(LOCALE_NS)
  const form = ctx.configForms.get(NS)
  const modelForm = ctx.configForms.get(MODEL_NS)
  const injected = () => ({
    hooks: { prefs: form, modelCatalog: modelForm },
    save: (field, value) => form.set(field, value),
    probe: (args) => ctx.remote.malkoModels.probe(args),
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
