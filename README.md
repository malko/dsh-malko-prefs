# dsh-malko-prefs

Personal preferences for DeepSeek Harness (dsh): a **tunable companion to the
official compaction engine** and a **llama.cpp model enrichment** for the Models
page, packaged as a single dsh bundle.

- **Compaction** — the official `@deepseek-ai/dsh-compaction-basic` engine is
  the reference behaviour; this plugin wraps it with a settings page so the
  threshold, the retention, the summarization model/reasoning and an optional
  end-of-turn compaction become user-configurable. It also adds a
  `/force-compact` command.
- **Model enrichment** — reads the richer model metadata a llama.cpp server
  exposes (`meta.n_ctx`, `architecture.input_modalities`, `aliases`) and fills
  the corresponding `llm-pi-ai` model entries (context window, text/image input).

## Requirements

- **dsh ≥ `0.1.7-rc.1`** — built on the current settings domain (`Config`
  fields marked `.volatile()` on the Host, `ctx.configForms` on the Client) and
  on `BasicCompactionEngine`.
- A working `llm-pi-ai` provider (e.g. your llama.cpp server) for the model
  enrichment.

## Install

```
dsh plugin --profile web add /home/aibox/git/dsh-home/dsh-malko-prefs
# then restart dsh web
```

The bundle layer does two things (see `cordis.patch.yml`):

1. inserts the Host half (settings service `malkoPrefs` + Typert remote
   `malkoModels`);
2. restates every shipped agent preset (`preset-cordis`, `preset-ptc`,
   `preset-standard`) with the official `compaction-basic` row retargeted at
   `dsh-malko-prefs/compaction`.

> This second point is why the file is **generated**, not hand-written: a patch
> replaces a row's `config` wholesale and the compaction backend lives nested
> inside the preset, so swapping it means copying the whole preset. Regenerate
> it after a dsh upgrade that touches the presets:
>
> ```
> node scripts/gen-preset-override.mjs            # default: global dsh install
> node scripts/gen-preset-override.mjs <presets-dir>
> ```

Rollback: `dsh plugin --profile web remove dsh-malko-prefs` (then restart).

## Settings — “Model & context (malko)”

Adds a section to Settings. All fields are applied **live** (no restart).

### Compaction threshold

| Field | Meaning |
|---|---|
| Threshold (tokens) | Absolute pressure in tokens, e.g. `130k` / `130K` / `1.5m`. Empty/0 = use the ratio below. |
| Context window (tokens) | Window the absolute threshold is expressed against (e.g. `200k`). 0 = ratio only. |
| Threshold ratio | Used when the absolute threshold is empty (0.8 = 80% of the window). |
| Headroom (tokens) | Reserved on top of the output cap. The official default (65536) caps the trigger well below 80%. |

Effective trigger: `min(window × ratio, window − output − headroom)`; when an
absolute threshold and a context window are set, it becomes exactly that
threshold. **Default: ratio 0.8 + headroom 32768 → compacts around 160k on a
200k window.**

### Retention

`Keep last (tokens)` (absolute, e.g. `32k`) or `Keep ratio` — the verbatim
recent-context budget.

### Behaviour

- **Automatic compaction** — the official between-step pressure compaction and
  context-overflow recovery.
- **Compact at end of turn** — runs one more compaction when the agent goes
  idle.

### Summarization

- **Model** — `Session model` (default) or `Custom model`.
- **Provider / Model** — shown when `Custom model`; populated from the
  `llm-pi-ai` catalog.
- **Reasoning** — `Default`, `Off`, or any level the selected model declares
  (session mode exposes only `Default` / `Off`). The instruction is appended
  **after** the replayed prefix, so the provider's prompt cache stays warm.

### Advanced

`Summary output cap`, `Extra compaction attempts`, `Overflow recovery attempts`.

### llama.cpp models

For every `llm-pi-ai` provider that declares a `baseURL`, an **Enrich from
server** button reads `GET {baseURL}/models` and completes the model entries
(context window from `meta.n_ctx`/`n_ctx_train`, input modalities from
`architecture.input_modalities`). Existing user values are never overwritten;
new providers adopt the whole list.

## Commands

- `/compact` — the official dsh command (idle manual compaction).
- `/force-compact` — compact **now**: immediately when the agent is idle,
  otherwise queued and consumed at the next model step (bypasses the threshold).

## How it works

```
host plugin  (lib/index.mjs)
  ├─ Config (volatile)  ──▶ settings page "malko-prefs"
  ├─ service malkoPrefs ──▶ live prefs + force queue
  ├─ Typert remote malkoModels (llama.cpp probe)
  └─ /force-compact command

preset plugin (lib/compaction.mjs)
  └─ MalkoCompactionEngine extends BasicCompactionEngine
       ├─ rebuilds its policy from malkoPrefs before each operation
       ├─ summarize() → model + reasoning control (cache-safe order)
       └─ agent/status idle → optional turn-end compaction
```

The engine reuses the official engine for everything else (durable
transactions, pruning, overflow recovery), so behaviour matches
`compaction-basic` unless a preference changes it.

Note: service classes avoid JS private members (`#x`) — cordis binds service
methods to a proxy, and private members would throw
`Receiver must be an instance of class ...`.

## Development

```
node build.mjs            # esbuild → lib/index.mjs, lib/compaction.mjs, lib/client.js
node scripts/check.mjs    # static conformance checks
```

| File | Role |
|---|---|
| `src/prefs.ts` | preference fields, defaults, `parseTokenText` |
| `src/index.ts` | host plugin: volatile Config, `malkoPrefs`, `/force-compact` |
| `src/compaction.ts` | `MalkoCompactionEngine` (extends the official engine) |
| `src/probe.ts` | Typert remote `malkoModels` (llama.cpp probe) |
| `src/client.ts` | settings page (compaction + model enrichment) |
| `scripts/gen-preset-override.mjs` | regenerates `cordis.patch.yml` from the installed presets |
| `scripts/check.mjs` | manifest / bundle / cache-safety checks |

## Limits

- The generated `cordis.patch.yml` copies the shipped presets; re-run
  `gen-preset-override.mjs` after a dsh upgrade.
- The `/force-compact` busy path uses the engine's context-overflow entry,
  which compacts the maximal safe head (retention 0).
- The model enrichment is host-side (the browser cannot reach a local
  llama.cpp server cross-origin).
