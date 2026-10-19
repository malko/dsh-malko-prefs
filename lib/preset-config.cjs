'use strict'

/**
 * Build one agent-preset config from the presets shipped by the RUNNING dsh.
 *
 * `cordis.patch.yml` cannot patch the `compaction-basic` row nested inside a
 * preset (a patch replaces the preset's whole `config`), so this bundle used
 * to restate every preset verbatim. That froze a snapshot of dsh and broke as
 * soon as upstream changed a preset (for example, `{{cwd}}` was removed in
 * dsh 0.2.1-rc.1).
 *
 * Instead, the patch asks this module for the preset body at load time. We read
 * `@deepseek-ai/dsh-web-app/presets/<id>.patch.yml` from the installed dsh,
 * parse it with the Loader's YAML dialect (so `!!js` nodes survive), and swap
 * the official compaction backend for `dsh-malko-prefs/compaction`.
 *
 * The function is called from a `!!js` expression in `cordis.patch.yml`:
 *
 *   config: !!js process.getBuiltinModule('node:module')
 *     .createRequire(baseUrl)('dsh-malko-prefs/preset-config')('standard', baseUrl, ctx)
 *
 * `baseUrl` is the profile root; `ctx` is the Loader context. The running dsh
 * packages are resolved from `ctx.get('profileContext').installAnchor`, then
 * from `baseUrl` and the process entry.
 */

const { createRequire } = require('node:module')
const { readFileSync } = require('node:fs')
const { dirname, join } = require('node:path')

const BASE_ENGINE = '@deepseek-ai/dsh-compaction-basic'
const ENGINE = 'dsh-malko-prefs/compaction'
const PRESET_IDS = ['cordis', 'minimal', 'ptc', 'standard']

/** Resolve a package's `package.json`, tolerating an exports map without it. */
function resolvePackageJson(req, name) {
  try {
    return req.resolve(`${name}/package.json`)
  } catch {
    return join(dirname(req.resolve(name)), 'package.json')
  }
}

/** The Loader's YAML dialect: `!!js` scalars stay as `{ __jsExpr }` nodes. */
function loaderSchema(yaml) {
  const JsExpr = new yaml.Type('tag:yaml.org,2002:js', {
    kind: 'scalar',
    resolve: (data) => typeof data === 'string',
    construct: (data) => ({ __jsExpr: data }),
    represent: (data) => data.__jsExpr,
  })
  return yaml.JSON_SCHEMA.extend(JsExpr)
}

/** Resolve js-yaml from the running dsh, or from one of its dependencies. */
function loadYaml(req) {
  const anchors = ['js-yaml']
  try {
    anchors.push(join(dirname(resolvePackageJson(req, '@deepseek-ai/dsh-app-boot')), 'package.json'))
  } catch { /* not every surface ships app-boot */ }
  let lastError
  for (const anchor of anchors) {
    try {
      const anchorReq = anchor === 'js-yaml' ? req : createRequire(anchor)
      return anchorReq('js-yaml')
    } catch (error) {
      lastError = error
    }
  }
  throw new Error(`dsh-malko-prefs: cannot resolve js-yaml from ${req.resolve('.')}: ${lastError?.message ?? 'unknown error'}`)
}

/** Replace every official compaction backend in a preset plugin tree. */
function retarget(plugin) {
  if (plugin === null || typeof plugin !== 'object') return
  if (plugin.name === BASE_ENGINE) plugin.name = ENGINE
  if (Array.isArray(plugin.config)) plugin.config.forEach(retarget)
}

/**
 * Resolve the running dsh's packages.
 *
 * A fresh dsh profile does not link `@deepseek-ai/dsh-web-app` into its own
 * `node_modules`; the profile context's `installAnchor` (the dsh app's
 * `package.json`) is the reliable base. Fall back to the profile root and the
 * process entry for direct calls and older profiles.
 * @param {string | URL} baseUrl - profile root.
 * @param {Record<string, unknown>} [context] - Loader context.
 * @returns {NodeRequire} a require resolved from the running dsh.
 */
function dshRequire(baseUrl, context) {
  const anchors = []
  try {
    anchors.push(context?.get?.('profileContext')?.installAnchor)
  } catch { /* no profile service in direct callers */ }
  anchors.push(baseUrl, process.argv[1], process.execPath)
  let lastError
  for (const anchor of anchors) {
    if (anchor === undefined || anchor === null || anchor === '') continue
    try {
      const req = createRequire(anchor)
      resolvePackageJson(req, '@deepseek-ai/dsh-web-app')
      return req
    } catch (error) {
      lastError = error
    }
  }
  throw new Error(`dsh-malko-prefs: cannot resolve the running dsh from ${String(baseUrl)}: ${lastError?.message ?? 'no candidate base'}`)
}

/** Locate one shipped preset file in the running dsh. */
function presetFile(presetId, baseUrl, context) {
  if (typeof presetId !== 'string' || presetId === '') {
    throw new Error('dsh-malko-prefs: preset id must be a non-empty string')
  }
  const req = dshRequire(baseUrl, context)
  const webApp = dirname(resolvePackageJson(req, '@deepseek-ai/dsh-web-app'))
  return join(webApp, 'presets', `${presetId}.patch.yml`)
}

/**
 * Read one shipped preset exactly as dsh declares it.
 * @param {string} presetId - `cordis`, `minimal`, `ptc`, or `standard`.
 * @param {string | URL} baseUrl - profile root, used to resolve the running dsh.
 * @param {Record<string, unknown>} [context] - Loader context.
 * @returns {unknown} the preset config before the engine swap.
 */
function loadPreset(presetId, baseUrl, context) {
  const file = presetFile(presetId, baseUrl, context)
  const req = dshRequire(baseUrl, context)
  const yaml = loadYaml(req)

  let document
  try {
    document = yaml.load(readFileSync(file, 'utf8'), { schema: loaderSchema(yaml) })
  } catch (error) {
    throw new Error(`dsh-malko-prefs: cannot read dsh preset "${presetId}" from ${file}: ${error.message}`)
  }

  const rows = (Array.isArray(document) ? document : []).flatMap((patch) =>
    patch !== null && typeof patch === 'object' && Array.isArray(patch.insert) ? patch.insert : [],
  )
  const row = rows.find(
    (candidate) => candidate !== null && typeof candidate === 'object' && candidate.id === `preset-${presetId}`,
  )
  if (row === undefined) {
    throw new Error(`dsh-malko-prefs: preset "${presetId}" not found in ${file}`)
  }

  const config = structuredClone(row.config)
  if (config === null || typeof config !== 'object' || !Array.isArray(config.plugins)) {
    throw new Error(`dsh-malko-prefs: preset "${presetId}" has no plugins list in ${file}`)
  }
  return config
}

/** The Loader's expression evaluator: `with (ctx) { return eval(expr) }`. */
const evaluate = new Function('ctx', 'expr', `
  with (ctx) {
    return eval(expr)
  }
`)

/**
 * Evaluate the `!!js` nodes inside a preset body.
 *
 * The Loader evaluates the patch's `config: !!js ...` expression once and does
 * NOT rescan the value it returns, so the preset's own expressions (the
 * `disabled` rows and `customSkillDirs`, for example) would otherwise reach the
 * plugin schemas as `{ __jsExpr: ... }` objects.
 * @param {Record<string, unknown>} context - the Loader context of the preset row.
 * @param {unknown} value - parsed preset value.
 * @returns {unknown} the same shape with its expressions evaluated.
 */
function interpolate(context, value) {
  if (value !== null && typeof value === 'object' && '__jsExpr' in value) return evaluate(context, value.__jsExpr)
  if (value === null || typeof value !== 'object') return value
  if (Array.isArray(value)) return value.map((item) => interpolate(context, item))
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, interpolate(context, item)]))
}

/**
 * A Loader-context view whose `baseUrl` points at the preset directory.
 *
 * The shipped expressions resolve sibling dsh packages relative to the preset
 * file (e.g. `@deepseek-ai/dsh-agent-preset/package.json`), not relative to
 * the profile root. Methods keep the original context as `this`.
 * @param {Record<string, unknown>} context - the Loader context of the preset row.
 * @param {string} baseUrl - the preset directory.
 * @returns {Record<string, unknown>} the evaluation scope.
 */
function presetScope(context, baseUrl) {
  return new Proxy(context, {
    get(target, property) {
      if (property === 'baseUrl') return baseUrl
      const value = Reflect.get(target, property, target)
      return typeof value === 'function' ? value.bind(target) : value
    },
    has(target, property) {
      return property === 'baseUrl' || Reflect.has(target, property)
    },
  })
}

/**
 * Read one shipped preset and return its config with our engine.
 * @param {string} presetId - `cordis`, `minimal`, `ptc`, or `standard`.
 * @param {string | URL} baseUrl - profile root, used to resolve the running dsh.
 * @param {Record<string, unknown>} [context] - the Loader context; expressions
 *   in the shipped preset (notably `disabled` and `customSkillDirs`) need it.
 * @returns {unknown} the preset config the Loader will mount.
 */
function presetConfig(presetId, baseUrl, context) {
  const file = presetFile(presetId, baseUrl, context)
  const config = loadPreset(presetId, baseUrl, context)
  config.plugins.forEach(retarget)
  // Direct callers (checks, debugging) have no Loader context; the shipped
  // expressions only need `ctx.get()`.
  const scope = presetScope(context ?? { get: () => undefined }, dirname(file))
  return interpolate(scope, config)
}

module.exports = presetConfig
module.exports.PRESET_IDS = PRESET_IDS
module.exports.loadPreset = loadPreset
module.exports.retarget = retarget
