/**
 * Static conformance checks for this bundle (no dsh boot required).
 * Run: node scripts/check.mjs
 */
import { existsSync, readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
let failed = 0
const check = (name, ok, detail = '') => {
  console.log(`${ok ? '[OK]  ' : '[FAIL]'} ${name}${detail === '' ? '' : ` — ${detail}`}`)
  if (!ok) failed += 1
}

check('package name', pkg.name === 'dsh-malko-prefs', pkg.name)
check('exports ./compaction', typeof (pkg.exports?.['./compaction']?.default) === 'string')
check('exports ./client', typeof (pkg.exports?.['./client']?.default) === 'string')
check('exports ./package.json', pkg.exports?.['./package.json'] !== undefined)
check('dsh.bundle.patch', pkg.dsh?.bundle?.patch === './cordis.patch.yml')
check('dsh.client.platform web', pkg.dsh?.client?.platform === 'web')

for (const file of ['lib/index.mjs', 'lib/compaction.mjs', 'lib/client.js', 'cordis.patch.yml']) {
  check(`built: ${file}`, existsSync(file))
}

const client = readFileSync('lib/client.js', 'utf8')
const idMatch = /window\.__ModuleLoader__\.load\(\{\s*id:\s*"([^"]+)"/.exec(client)
check('client bundle id = package name', idMatch?.[1] === pkg.name, String(idMatch?.[1]))
const requires = [...new Set([...client.matchAll(/require\("([^"]+)"\)/g)].map((m) => m[1]))]
const allowed = new Set(['react', 'react/jsx-runtime'])
check('client requires only react', requires.every((r) => allowed.has(r)), requires.join(', '))

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
// cordis binds service methods to a proxy; JS private members (#x) then throw
// "Receiver must be an instance of class ...". Service classes must use plain members.
check('no JS private members in service classes', !/this\.#/.test(compaction) && !/this\.#/.test(index))

console.log(failed === 0 ? '\nall checks passed' : `\n${failed} check(s) failed`)
process.exitCode = failed === 0 ? 0 : 1
