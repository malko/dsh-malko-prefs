# Notification sound library

The 45 `*.mp3` files in this directory are **not original to this project**:

- Upstream: [anomalyco/opencode](https://github.com/anomalyco/opencode)
- Path: `packages/ui/src/assets/audio/`
- License: MIT (same as this package)
- Taken from opencode's web build; the file name is the sound id.

| Pack | Entries | Count |
|---|---|---|
| alert | `alert-01` … `alert-10` | 10 |
| bip-bop | `bip-bop-01` … `bip-bop-10` | 10 |
| staplebops | `staplebops-01` … `staplebops-07` | 7 |
| nope | `nope-01` … `nope-12` | 12 |
| yup | `yup-01` … `yup-06` | 6 |

The browser half lists them in the sound selectors; the Host half serves them at
`/malko-prefs-sounds/<file>.mp3` (see `src/index.ts`). The two built-in chimes
(`builtin-up`, `builtin-down`) are synthesized with the Web Audio API and need no
file.

To add or replace a sound, drop the mp3 here and update `SOUND_PACKS` in
`src/notify.ts` (it drives both the selectors and playback).
