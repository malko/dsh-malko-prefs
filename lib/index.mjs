// src/index.ts
import { Service } from "@deepseek-ai/cordis";
import z from "@deepseek-ai/schemastery";

// src/prefs.ts
var DEFAULT_PREFS = {
  /** Absolute pressure threshold in tokens; 0 = derive from ratio/window. */
  thresholdTokens: 0,
  /** Context window the absolute threshold is expressed against; 0 = live model window. */
  contextWindowTokens: 0,
  /** Window fraction when `thresholdTokens` is 0. */
  thresholdRatio: 0.8,
  /** Extra headroom beyond the output reservation (official default is 65536). */
  headroomTokens: 32768,
  /** Absolute recent-context budget kept verbatim; 0 = use `retainRatio`. */
  retainTokens: 0,
  /** Recent-context fraction when `retainTokens` is 0. */
  retainRatio: 0.16,
  /** Official automatic compaction (between-step pressure + overflow recovery). */
  auto: true,
  /** Compact once more when the agent goes idle at the end of a turn. */
  turnEndCompactionEnabled: false,
  /** `session` = summarize with the conversation model; `custom` = a chosen one. */
  summarizationMode: "session",
  /** Summarization model provider (only when `summarizationMode === 'custom'`). */
  summarizationProvider: "",
  /** Summarization model id (only when `summarizationMode === 'custom'`). */
  summarizationModel: "",
  /** `default` = leave the level to the adapter; `off` = force thinking off; else a level id. */
  summarizationReasoning: "default",
  /** Output cap for the summarization call. */
  maxTokens: 32768,
  /** Official extra compaction attempts when pressure remains. */
  compactionRetries: 1,
  /** Official overflow-recovery attempts. */
  maxOverflowRetries: 1,
  /** Tab status light (favicon) master switch. */
  colorsEnabled: true,
  /** Colour shown when a main session finished unattended. */
  green: "#22C55E",
  /** Colour shown when a session awaits an interaction (wins over green). */
  amber: "#F59E0B",
  /** Colour (with a glow animation) shown while a session is generating. */
  working: "#3B82F6",
  /** Colour for the idle state; empty = keep the official favicon. */
  black: "",
  /** Browser notification master switch (opt-in). */
  notifyEnabled: false,
  /** Also notify while the page is in the foreground. */
  notifyForeground: false,
  /** Keep the notification on screen until dismissed (vs. auto-hide). */
  notifyAutoHide: true
};
var PREF_KEYS = Object.keys(DEFAULT_PREFS);
function readField(ref, fallback) {
  const value = ref !== null && typeof ref === "object" && typeof ref.get === "function" ? ref.get() : ref;
  return value === void 0 ? fallback : value;
}
function readPrefs(config) {
  const out = { ...DEFAULT_PREFS };
  if (config !== null && typeof config === "object") {
    for (const key of PREF_KEYS) out[key] = readField(config[key], out[key]);
  }
  return out;
}

// src/probe.ts
import { TypertRemoteService } from "@deepseek-ai/dsh-typert-protocol";
function pickInt(...values) {
  for (const value of values) {
    const n = typeof value === "string" ? Number(value) : value;
    if (typeof n === "number" && Number.isFinite(n) && n > 0) return Math.round(n);
  }
  return void 0;
}
function normalizeInput(modalities) {
  if (!Array.isArray(modalities)) return void 0;
  const kept = modalities.filter((value) => value === "text" || value === "image");
  return kept.length > 0 ? kept : void 0;
}
function toCandidate(entry) {
  if (entry === null || typeof entry !== "object") return void 0;
  const id = typeof entry.id === "string" && entry.id !== "" ? entry.id : void 0;
  if (id === void 0) return void 0;
  const meta = entry.meta !== null && typeof entry.meta === "object" ? entry.meta : {};
  const architecture = entry.architecture !== null && typeof entry.architecture === "object" ? entry.architecture : {};
  const contextWindow = pickInt(meta.n_ctx, meta.n_ctx_train, entry.contextWindow, entry.context_window, entry.context_length, entry.max_input_tokens, entry.limit?.context);
  const maxTokens = pickInt(entry.maxTokens, entry.max_tokens, entry.max_output_tokens, entry.limit?.output);
  const input = normalizeInput(architecture.input_modalities ?? entry.input_modalities ?? entry.input);
  const name2 = Array.isArray(entry.aliases) && typeof entry.aliases[0] === "string" && entry.aliases[0] !== "" ? entry.aliases[0] : typeof entry.name === "string" && entry.name !== "" ? entry.name : id;
  return {
    id,
    name: name2,
    ...contextWindow === void 0 ? {} : { contextWindow },
    ...maxTokens === void 0 ? {} : { maxTokens },
    ...input === void 0 ? {} : { input }
  };
}
var MalkoModelsRuntime = class extends TypertRemoteService {
  /**
   * @param {import('@deepseek-ai/cordis').Context} ctx providing context.
   */
  constructor(ctx) {
    super(ctx, "malkoModels");
  }
  /**
   * Read `GET {baseURL}/models` and return the models with llama.cpp metadata.
   * @param {{ baseURL?: string }} args endpoint to interrogate.
   * @returns {Promise<{ models: object[] }>}
   */
  async probe(args) {
    const base = String(args?.baseURL ?? "").trim().replace(/\/+$/, "");
    if (base === "") throw new Error("probe: baseURL is required");
    let parsed;
    try {
      parsed = new URL(base);
    } catch {
      throw new Error("probe: baseURL is not a valid URL");
    }
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new Error("probe: baseURL must be http(s)");
    const endpoint = `${base}/models`;
    let response;
    try {
      response = await fetch(endpoint, { headers: { accept: "application/json" }, signal: AbortSignal.timeout(15e3) });
    } catch (error) {
      throw new Error(`probe: could not reach ${endpoint} (${error?.message ?? error})`);
    }
    if (!response.ok) throw new Error(`probe: ${endpoint} answered ${response.status}`);
    let body;
    try {
      body = await response.json();
    } catch {
      throw new Error(`probe: ${endpoint} did not answer JSON`);
    }
    const list = Array.isArray(body) ? body : Array.isArray(body?.data) ? body.data : Array.isArray(body?.models) ? body.models : [];
    const models = [];
    for (const entry of list) {
      const candidate = toCandidate(entry);
      if (candidate !== void 0) models.push(candidate);
    }
    return { models };
  }
};

// src/index.ts
var name = "dsh-malko-prefs";
var inject = [];
var HEX = /^#[0-9a-fA-F]{6}$/;
var HEX_OR_EMPTY = /^(#[0-9a-fA-F]{6})?$/;
var Config = z.object({
  thresholdTokens: z.number().step(1).min(0).default(DEFAULT_PREFS.thresholdTokens).volatile(),
  contextWindowTokens: z.number().step(1).min(0).default(DEFAULT_PREFS.contextWindowTokens).volatile(),
  thresholdRatio: z.number().default(DEFAULT_PREFS.thresholdRatio).volatile(),
  headroomTokens: z.number().step(1).min(0).default(DEFAULT_PREFS.headroomTokens).volatile(),
  retainTokens: z.number().step(1).min(0).default(DEFAULT_PREFS.retainTokens).volatile(),
  retainRatio: z.number().default(DEFAULT_PREFS.retainRatio).volatile(),
  auto: z.boolean().default(DEFAULT_PREFS.auto).volatile(),
  turnEndCompactionEnabled: z.boolean().default(DEFAULT_PREFS.turnEndCompactionEnabled).volatile(),
  summarizationMode: z.union(["session", "custom"]).default(DEFAULT_PREFS.summarizationMode).volatile(),
  summarizationProvider: z.string().default(DEFAULT_PREFS.summarizationProvider).volatile(),
  summarizationModel: z.string().default(DEFAULT_PREFS.summarizationModel).volatile(),
  summarizationReasoning: z.string().default(DEFAULT_PREFS.summarizationReasoning).volatile(),
  maxTokens: z.number().step(1).min(1).default(DEFAULT_PREFS.maxTokens).volatile(),
  compactionRetries: z.number().step(1).min(0).default(DEFAULT_PREFS.compactionRetries).volatile(),
  maxOverflowRetries: z.number().step(1).min(0).default(DEFAULT_PREFS.maxOverflowRetries).volatile(),
  colorsEnabled: z.boolean().default(DEFAULT_PREFS.colorsEnabled).volatile(),
  green: z.string().pattern(HEX).default(DEFAULT_PREFS.green).volatile(),
  amber: z.string().pattern(HEX).default(DEFAULT_PREFS.amber).volatile(),
  working: z.string().pattern(HEX).default(DEFAULT_PREFS.working).volatile(),
  black: z.string().pattern(HEX_OR_EMPTY).default(DEFAULT_PREFS.black).volatile(),
  notifyEnabled: z.boolean().default(DEFAULT_PREFS.notifyEnabled).volatile(),
  notifyForeground: z.boolean().default(DEFAULT_PREFS.notifyForeground).volatile(),
  notifyAutoHide: z.boolean().default(DEFAULT_PREFS.notifyAutoHide).volatile()
});
var MalkoPrefs = class extends Service {
  /**
   * @param ctx providing context.
   * @param config resolved volatile Config.
   */
  constructor(ctx, config) {
    super(ctx, "malkoPrefs");
    this.config = config;
    this.force = /* @__PURE__ */ new Map();
  }
  /** @returns the current resolved preferences. */
  get() {
    return readPrefs(this.config);
  }
  /**
   * Queue a forced compaction for one session (consumed by the engine at the
   * next `agent/pre-step`).
   * @param {string} sessionId target session.
   * @param {string} [commandId] originating command id for presentation.
   */
  requestForce(sessionId, commandId) {
    if (typeof sessionId === "string" && sessionId !== "") this.force.set(sessionId, { commandId });
  }
  /**
   * Consume (and clear) a pending forced compaction for one session.
   * @param {string} sessionId target session.
   * @returns {{ commandId?: string } | undefined}
   */
  takeForce(sessionId) {
    if (typeof sessionId !== "string" || sessionId === "") return void 0;
    const pending = this.force.get(sessionId);
    if (pending !== void 0) this.force.delete(sessionId);
    return pending;
  }
};
function registerForceCommand(ctx) {
  ctx.inject(["commands"], (child) => {
    const dispose = child.commands.register({
      name: "force-compact",
      description: "Force a context compaction now (immediately when idle, otherwise at the next model step).",
      recordInput: false,
      handler: async (invocation) => {
        try {
          const agent = invocation?.agent;
          const session = agent?.session;
          if (agent === void 0 || agent === null || session === void 0 || session === null || typeof session.id !== "string") {
            return { kind: "error", text: "no usable agent session for this command" };
          }
          const prefs = ctx.get("malkoPrefs");
          const engine = agent.ctx?.get?.("compaction") ?? ctx.get("compaction");
          if (engine !== void 0 && typeof engine.compactNow === "function") {
            try {
              const result = await engine.compactNow(agent, invocation.signal, invocation.commandId);
              if (result !== void 0 && result !== null) {
                return { kind: "success", text: `compacted ~${result.shadowedTokenCount ?? "?"} tokens` };
              }
              return { kind: "success", text: "nothing to compact (context is already minimal)" };
            } catch {
              prefs?.requestForce?.(session.id, invocation.commandId);
              return { kind: "success", text: "agent is busy \u2014 will force-compact at the next model step" };
            }
          }
          prefs?.requestForce?.(session.id, invocation.commandId);
          return { kind: "success", text: "force-compact queued; it will run as soon as possible" };
        } catch (error) {
          return { kind: "error", text: `force-compact failed: ${error?.message ?? error}` };
        }
      }
    });
    if (typeof dispose === "function") {
      ctx.effect(() => dispose, "dsh-malko-prefs: /force-compact command");
    }
  });
}
function apply(ctx, config) {
  void new MalkoPrefs(ctx, config);
  registerForceCommand(ctx);
  void new MalkoModelsRuntime(ctx);
  try {
    ctx.inject(["settings"], (child) => {
      child.effect(() => child.settings.configure({ auto: false }, ctx.fiber));
    });
  } catch {
  }
}
export {
  Config,
  MalkoModelsRuntime,
  MalkoPrefs,
  apply,
  inject,
  name
};
//# sourceMappingURL=index.mjs.map
