/**
 * dsh-malko-prefs — llama.cpp model probe (host service).
 *
 * The official `llm-pi-ai` discovery only reads generic fields
 * (`id`/`name`/`contextWindow`/`maxTokens`); llama.cpp publishes richer model
 * entries (`meta.n_ctx`, `meta.n_ctx_train`, `architecture.input_modalities`,
 * `aliases`) that it ignores. This Service backs the `malkoModels/probe`
 * Typert remote (declared in `./typert.ts`) so the browser can ask the Host to
 * read those and hand back candidates the Models UI can adopt.
 */
import { TypertRemoteService } from '@deepseek-ai/dsh-typert-protocol'

/** First finite positive integer among the candidates. */
function pickInt(...values) {
  for (const value of values) {
    const n = typeof value === 'string' ? Number(value) : value
    if (typeof n === 'number' && Number.isFinite(n) && n > 0) return Math.round(n)
  }
  return undefined
}

/** Normalize a reported input-modality list to `text`/`image`. */
function normalizeInput(modalities) {
  if (!Array.isArray(modalities)) return undefined
  const kept = modalities.filter((value) => value === 'text' || value === 'image')
  return kept.length > 0 ? kept : undefined
}

/**
 * Map one raw `/models` entry (llama.cpp or generic) to a candidate.
 * @param {unknown} entry raw listing entry.
 * @returns {object | undefined}
 */
function toCandidate(entry) {
  if (entry === null || typeof entry !== 'object') return undefined
  const id = typeof entry.id === 'string' && entry.id !== '' ? entry.id : undefined
  if (id === undefined) return undefined
  const meta = entry.meta !== null && typeof entry.meta === 'object' ? entry.meta : {}
  const architecture = entry.architecture !== null && typeof entry.architecture === 'object' ? entry.architecture : {}
  const contextWindow = pickInt(meta.n_ctx, meta.n_ctx_train, entry.contextWindow, entry.context_window, entry.context_length, entry.max_input_tokens, entry.limit?.context)
  const maxTokens = pickInt(entry.maxTokens, entry.max_tokens, entry.max_output_tokens, entry.limit?.output)
  const input = normalizeInput(architecture.input_modalities ?? entry.input_modalities ?? entry.input)
  const name = Array.isArray(entry.aliases) && typeof entry.aliases[0] === 'string' && entry.aliases[0] !== ''
    ? entry.aliases[0]
    : (typeof entry.name === 'string' && entry.name !== '' ? entry.name : id)
  return {
    id,
    name,
    ...(contextWindow === undefined ? {} : { contextWindow }),
    ...(maxTokens === undefined ? {} : { maxTokens }),
    ...(input === undefined ? {} : { input }),
  }
}

/** Remote service: enrich a provider's model list from its endpoint. */
export class MalkoModelsRuntime extends TypertRemoteService {
  /**
   * @param {import('@deepseek-ai/cordis').Context} ctx providing context.
   */
  constructor(ctx) {
    super(ctx, 'malkoModels')
  }

  /**
   * Read `GET {baseURL}/models` and return the models with llama.cpp metadata.
   * @param {{ baseURL?: string }} args endpoint to interrogate.
   * @returns {Promise<{ models: object[] }>}
   */
  async probe(args) {
    const base = String(args?.baseURL ?? '').trim().replace(/\/+$/, '')
    if (base === '') throw new Error('probe: baseURL is required')
    let parsed
    try {
      parsed = new URL(base)
    } catch {
      throw new Error('probe: baseURL is not a valid URL')
    }
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') throw new Error('probe: baseURL must be http(s)')
    const endpoint = `${base}/models`
    let response
    try {
      response = await fetch(endpoint, { headers: { accept: 'application/json' }, signal: AbortSignal.timeout(15000) })
    } catch (error) {
      throw new Error(`probe: could not reach ${endpoint} (${error?.message ?? error})`)
    }
    if (!response.ok) throw new Error(`probe: ${endpoint} answered ${response.status}`)
    let body
    try {
      body = await response.json()
    } catch {
      throw new Error(`probe: ${endpoint} did not answer JSON`)
    }
    const list = Array.isArray(body)
      ? body
      : Array.isArray(body?.data)
        ? body.data
        : Array.isArray(body?.models)
          ? body.models
          : []
    const models = []
    for (const entry of list) {
      const candidate = toCandidate(entry)
      if (candidate !== undefined) models.push(candidate)
    }
    return { models }
  }
}
