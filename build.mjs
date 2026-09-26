// Build script: host halves as ESM with @deepseek-ai/* left external (served by
// dsh's runtime resolution), client half as a CJS bundle wrapped in the
// window.__ModuleLoader__ shell.
import { build } from 'esbuild'
import { mkdirSync, writeFileSync } from 'node:fs'

mkdirSync('lib', { recursive: true })

async function hostBundle(entry, outfile) {
  await build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node20',
    external: ['@deepseek-ai/*', 'zod'],
    sourcemap: true,
  })
}

await hostBundle('src/index.ts', 'lib/index.mjs')
await hostBundle('src/compaction.ts', 'lib/compaction.mjs')

const clientBuild = await build({
  entryPoints: ['src/client.ts'],
  bundle: true,
  platform: 'browser',
  format: 'cjs',
  external: ['react', 'react/jsx-runtime'],
  sourcemap: 'inline',
  write: false,
})
const clientCode = clientBuild.outputFiles[0].text
writeFileSync(
  'lib/client.js',
  [
    'window.__ModuleLoader__.load({',
    '  id: "dsh-malko-prefs",',
    '  factory: function (require) {',
    '    var module = { exports: {} };',
    '    var exports = module.exports;',
    clientCode.trimEnd(),
    '    return module.exports;',
    '  },',
    '});',
    '',
  ].join('\n'),
)

console.log('built dsh-malko-prefs (lib/index.mjs + lib/compaction.mjs + lib/client.js)')
