/**
 * Drop-in replacement for `@deepseek-ai/dsh-agent-preset`.
 *
 * The upstream row is an `EntryGroup`, so the Loader deliberately does **not**
 * interpolate its `config` — child expressions are preserved until the preset
 * tree mounts. That makes a `config: !!js ...` expression impossible on the
 * upstream plugin. This wrapper is an ordinary plugin: the Loader evaluates
 * its config, `cordis.patch.yml` hands it a preset body computed from the
 * installed dsh, and it registers that body with the preset registry exactly
 * like the upstream row does.
 *
 * @module dsh-malko-prefs/preset
 */
import { Service } from '@deepseek-ai/cordis'
import z from '@deepseek-ai/schemastery'

/** Cordis plugin name used by loader diagnostics. */
export const name = 'dsh-malko-prefs-preset'

/** The preset registry this row contributes to. */
export const inject = ['agentPresets']

/** Runtime schema for one computed preset definition. */
export const Config = z.object({
  id: z.string().required(),
  name: z.string(),
  description: z.string(),
  order: z.number(),
  plugins: z.array(z.any()).required(),
})

/**
 * Register the computed preset definition with the registry.
 *
 * Mirrors `@deepseek-ai/dsh-agent-preset`: the registry eagerly mounts the
 * definition and returns its unregister function.
 */
export default class MalkoAgentPreset {
  static inject = inject
  static Config = Config

  ctx: any
  config: any

  constructor(ctx: any, config: any) {
    this.ctx = ctx
    this.config = config
  }

  async *[Service.init]() {
    yield await this.ctx.agentPresets.register(this.config)
  }
}
