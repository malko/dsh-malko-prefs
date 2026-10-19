// src/preset.ts
import { Service } from "@deepseek-ai/cordis";
import z from "@deepseek-ai/schemastery";
var name = "dsh-malko-prefs-preset";
var inject = ["agentPresets"];
var Config = z.object({
  id: z.string().required(),
  name: z.string(),
  description: z.string(),
  order: z.number(),
  plugins: z.array(z.any()).required()
});
var MalkoAgentPreset = class {
  static inject = inject;
  static Config = Config;
  ctx;
  config;
  constructor(ctx, config) {
    this.ctx = ctx;
    this.config = config;
  }
  async *[Service.init]() {
    yield await this.ctx.agentPresets.register(this.config);
  }
};
export {
  Config,
  MalkoAgentPreset as default,
  inject,
  name
};
//# sourceMappingURL=preset.mjs.map
