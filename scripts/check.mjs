/**
 * Static conformance checks for this bundle (no dsh boot required).
 * Run: node scripts/check.mjs
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs'

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
let failed = 0
const check = (name, ok, detail = '') => {
  console.log(`${ok ? '[OK]  ' : '[FAIL]'} ${name}${detail === '' ? '' : ` — ${detail}`}`)
  if (!ok) failed += 1
}

check('package name', pkg.name === 'dsh-malko-prefs', pkg.name)
check('exports ./compaction', typeof (pkg.exports?.['./compaction']?.default) === 'string')
check('exports ./client', typeof (pkg.exports?.['./client']?.default) === 'string')
check('exports ./typert', typeof (pkg.exports?.['./typert']?.default) === 'string')
check('exports ./package.json', pkg.exports?.['./package.json'] !== undefined)
check('dsh.bundle.patch', pkg.dsh?.bundle?.patch === './cordis.patch.yml')
check('dsh.client.platform web', pkg.dsh?.client?.platform === 'web')

for (const file of ['lib/index.mjs', 'lib/compaction.mjs', 'lib/typert.host.mjs', 'lib/client.js', 'cordis.patch.yml']) {
  check(`built: ${file}`, existsSync(file))
}

const client = readFileSync('lib/client.js', 'utf8')
const idMatch = /window\.__ModuleLoader__\.load\(\{\s*id:\s*"([^"]+)"/.exec(client)
check('client bundle id = package name', idMatch?.[1] === pkg.name, String(idMatch?.[1]))
const requires = [...new Set([...client.matchAll(/require\("([^"]+)"\)/g)].map((m) => m[1]))]
const allowed = new Set(['react', 'react/jsx-runtime', '@deepseek-ai/dsh-client-ui-primitives'])
check('client requires only baseline platform modules', requires.every((r) => allowed.has(r)), requires.join(', '))

// The Host strict wire definition is contributed through `./typert`, which
// dsh-typert-loader registers; verify the manifest it will import.
const { TYPERT } = await import('../lib/typert.host.mjs')
check('typert.ts manifest package/face', TYPERT.package === pkg.name && TYPERT.face === 'host')
const invocations = Array.isArray(TYPERT.invocations) ? TYPERT.invocations : []
const probe = invocations[0]
check(
  'probe invocation: direct, json args, strict codecs with create()',
  probe !== undefined
    && probe.namespace === 'malkoModels'
    && probe.method === 'probe'
    && probe.invocation?.kind === 'direct'
    && probe.parameters.length === 1
    && probe.parameters[0].wire === 'args'
    && probe.parameters[0].source === 'json'
    && [probe.result, ...probe.parameters.map((p) => p.codec)].every(
      (c) => c.mode === 'strict' && typeof c.typeSymbol === 'string' && typeof c.create === 'function',
    ),
)

const patch = readFileSync('cordis.patch.yml', 'utf8')
check('patch inserts host row', /- insert:\n {4}- id: malko-prefs\n {6}name: 'dsh-malko-prefs'/.test(patch))
const engineRefs = (patch.match(/name: 'dsh-malko-prefs\/compaction'/g) ?? []).length
const presetCount = (patch.match(/^- id: preset-/gm) ?? []).length
check('every preset swapped to our engine', engineRefs === presetCount && presetCount > 0, `engineRefs=${engineRefs} presets=${presetCount}`)
check('no official compaction-basic left in patch', !patch.includes(`name: '@deepseek-ai/dsh-compaction-basic'`))

// Cache safety: the summarization instruction must be appended AFTER the
// replayed prefix (system+tools+history), never before — otherwise the warm
// provider prefix cache is invalidated.
const compaction = readFileSync('lib/compaction.mjs', 'utf8')
check(
  'summarization instruction appended last (cache-safe)',
  /\.\.\.input\.messages,\s*createUserMessage\(/.test(compaction),
)

const index = readFileSync('lib/index.mjs', 'utf8')
check('host registers /force-compact command', /name:\s*"force-compact"/.test(index))
check('host exposes force queue (requestForce/takeForce)', /requestForce/.test(index) && /takeForce/.test(index))
check('engine consumes force queue', /takeForce/.test(compaction))

// Sound route: serves the bundled library, rejects anything else (no traversal).
const { buildSoundRoutes, SOUND_ROUTE } = await import('../lib/index.mjs')
const routes = buildSoundRoutes()
check('sound route is a prefix route', routes.length === 1 && routes[0].kind === 'prefix' && routes[0].path === SOUND_ROUTE)
const callRoute = async (url) => {
  const chunks = []
  const result = { status: 0, headers: {}, body: Buffer.alloc(0) }
  const res = {
    writeHead(status, headers) { result.status = status; result.headers = headers },
    end(data) { if (data !== undefined) chunks.push(Buffer.from(data)); result.body = Buffer.concat(chunks) },
  }
  await routes[0].handler({ url }, res)
  return result
}
const served = await callRoute(`${SOUND_ROUTE}/alert-01.mp3`)
check('sound route serves a library file', served.status === 200 && served.headers['content-type'] === 'audio/mpeg' && served.body.length > 0, `status=${served.status} bytes=${served.body.length}`)
const traversal = await callRoute(`${SOUND_ROUTE}/../package.json`)
check('sound route rejects traversal', traversal.status === 404)
const missing = await callRoute(`${SOUND_ROUTE}/nope-99.mp3`)
check('sound route 404s a missing file', missing.status === 404)
// Library files and SOUND_PACKS must agree one-for-one (kept in sync with
// SOUND_PACKS in src/notify.ts).
const SOUND_PACKS = [
  { prefix: 'alert', count: 10 },
  { prefix: 'bip-bop', count: 10 },
  { prefix: 'staplebops', count: 7 },
  { prefix: 'nope', count: 12 },
  { prefix: 'yup', count: 6 },
]
const expected = SOUND_PACKS
  .flatMap((pack) => Array.from({ length: pack.count }, (_, i) => `${pack.prefix}-${String(i + 1).padStart(2, '0')}`))
  .sort()
const present = readdirSync('assets/audio').filter((name) => name.endsWith('.mp3')).map((name) => name.replace(/\.mp3$/, '')).sort()
check('sound library matches assets/audio', JSON.stringify(expected) === JSON.stringify(present), `${expected.length} expected / ${present.length} present`)
// cordis binds service methods to a proxy; JS private members (#x) then throw
// "Receiver must be an instance of class ...". Service classes must use plain members.
check('no JS private members in service classes', !/this\.#/.test(compaction) && !/this\.#/.test(index))

console.log(failed === 0 ? '\nall checks passed' : `\n${failed} check(s) failed`)
process.exitCode = failed === 0 ? 0 : 1
