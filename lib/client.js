window.__ModuleLoader__.load({
  id: "dsh-malko-prefs",
  factory: function (require) {
    var module = { exports: {} };
    var exports = module.exports;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.ts
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(client_exports);
var import_react = __toESM(require("react"), 1);
var name = "dsh-malko-prefs";
var inject = ["slots", "locale", "configForms", "remote"];
var NS = "malko-prefs";
var MODEL_NS = "llm-pi-ai";
var LOCALE_NS = "settings.malko-prefs";
var SLOT = "settings.section";
var el = import_react.default.createElement;
var en = {
  title: "Model & context (malko)",
  intro: "Tunable companion to the official compaction engine.",
  thresholdTitle: "Compaction threshold",
  thresholdTokens: "Threshold (tokens)",
  thresholdTokensHint: "Absolute pressure in tokens, e.g. 130k or 130K. Empty/0 = use the ratio below.",
  contextWindow: "Context window (tokens)",
  contextWindowHint: "Window the absolute threshold is expressed against (e.g. 200k). 0 = derive nothing (ratio only).",
  thresholdRatio: "Threshold ratio",
  thresholdRatioHint: "Used when the absolute threshold is empty (0.8 = 80% of the window).",
  headroom: "Headroom (tokens)",
  headroomHint: "Reserved on top of the output cap. The official default (65536) caps the trigger well below 80%.",
  retentionTitle: "Retention",
  retainTokens: "Keep last (tokens)",
  retainTokensHint: "Verbatim recent-context budget, e.g. 32k. Empty/0 = use the ratio below.",
  retainRatio: "Keep ratio",
  behaviourTitle: "Behaviour",
  auto: "Automatic compaction",
  autoHint: "Official between-step pressure compaction and context-overflow recovery.",
  turnEnd: "Compact at end of turn",
  turnEndHint: "Runs one more compaction when the agent goes idle.",
  summarizationTitle: "Summarization",
  summarizationMode: "Model",
  modeSession: "Session model",
  modeCustom: "Custom model",
  provider: "Provider",
  model: "Model",
  reasoning: "Reasoning",
  reasoningDefault: "Default",
  reasoningOff: "Off",
  maxTokens: "Summary output cap (tokens)",
  advancedTitle: "Advanced",
  compactionRetries: "Extra compaction attempts",
  maxOverflowRetries: "Overflow recovery attempts",
  modelsTitle: "llama.cpp models",
  modelsIntro: "Read context window and input modalities from the server and fill the model entries of a pi-ai provider.",
  enrich: "Enrich from server",
  enriching: "Enriching\u2026",
  noBaseUrl: "No endpoint configured for this provider.",
  enriched: "Enriched {count} model(s).",
  save: "Save",
  saved: "Saved.",
  invalidToken: "Enter a number or a k/M suffix value (e.g. 130k).",
  errorPrefix: "Error: ",
  unavailable: "This setting is not available from this client.",
  loading: "Loading\u2026"
};
var zh = {
  title: "\u6A21\u578B\u4E0E\u4E0A\u4E0B\u6587\uFF08malko\uFF09",
  intro: "\u5B98\u65B9\u538B\u7F29\u5F15\u64CE\u7684\u53EF\u8C03\u4F34\u751F\u3002",
  thresholdTitle: "\u538B\u7F29\u9600\u503C",
  thresholdTokens: "\u9600\u503C\uFF08tokens\uFF09",
  thresholdTokensHint: "\u7EDD\u5BF9 token \u9600\u503C\uFF0C\u5982 130k\u3002\u7559\u7A7A/0 = \u7528\u4E0B\u65B9\u6BD4\u4F8B\u3002",
  contextWindow: "\u4E0A\u4E0B\u6587\u7A97\u53E3\uFF08tokens\uFF09",
  contextWindowHint: "\u7EDD\u5BF9\u9600\u503C\u6240\u4F9D\u636E\u7684\u7A97\u53E3\uFF08\u5982 200k\uFF09\u30020 = \u53EA\u7528\u6BD4\u4F8B\u3002",
  thresholdRatio: "\u9600\u503C\u6BD4\u4F8B",
  thresholdRatioHint: "\u5F53\u7EDD\u5BF9\u9600\u503C\u4E3A\u7A7A\u65F6\u4F7F\u7528\uFF080.8 = \u7A97\u53E3\u7684 80%\uFF09\u3002",
  headroom: "\u9884\u7559\uFF08tokens\uFF09",
  headroomHint: "\u5728\u8F93\u51FA\u9884\u7B97\u4E4B\u5916\u518D\u9884\u7559\u7684\u91CF\u3002\u5B98\u65B9\u9ED8\u8BA4 65536 \u4F1A\u628A\u89E6\u53D1\u70B9\u62C9\u5230 80% \u4EE5\u4E0B\u3002",
  retentionTitle: "\u4FDD\u7559",
  retainTokens: "\u4FDD\u7559\u6700\u8FD1\uFF08tokens\uFF09",
  retainTokensHint: "\u9010\u5B57\u4FDD\u7559\u7684\u8FD1\u671F\u9884\u7B97\uFF0C\u5982 32k\u3002\u7559\u7A7A/0 = \u7528\u4E0B\u65B9\u6BD4\u4F8B\u3002",
  retainRatio: "\u4FDD\u7559\u6BD4\u4F8B",
  behaviourTitle: "\u884C\u4E3A",
  auto: "\u81EA\u52A8\u538B\u7F29",
  autoHint: "\u5B98\u65B9\u7684\u6B65\u95F4\u538B\u529B\u538B\u7F29\u4E0E\u4E0A\u4E0B\u6587\u6EA2\u51FA\u6062\u590D\u3002",
  turnEnd: "\u8F6E\u672B\u538B\u7F29",
  turnEndHint: "\u4EE3\u7406\u8F6C\u4E3A idle \u65F6\u518D\u538B\u7F29\u4E00\u6B21\u3002",
  summarizationTitle: "\u6458\u8981",
  summarizationMode: "\u6A21\u578B",
  modeSession: "\u4F1A\u8BDD\u6A21\u578B",
  modeCustom: "\u81EA\u5B9A\u4E49\u6A21\u578B",
  provider: "\u63D0\u4F9B\u5546",
  model: "\u6A21\u578B",
  reasoning: "\u601D\u8003\u7EA7\u522B",
  reasoningDefault: "\u9ED8\u8BA4",
  reasoningOff: "\u5173\u95ED",
  maxTokens: "\u6458\u8981\u8F93\u51FA\u4E0A\u9650\uFF08tokens\uFF09",
  advancedTitle: "\u9AD8\u7EA7",
  compactionRetries: "\u989D\u5916\u538B\u7F29\u5C1D\u8BD5",
  maxOverflowRetries: "\u6EA2\u51FA\u6062\u590D\u5C1D\u8BD5",
  modelsTitle: "llama.cpp \u6A21\u578B",
  modelsIntro: "\u4ECE\u670D\u52A1\u5668\u8BFB\u53D6\u4E0A\u4E0B\u6587\u7A97\u53E3\u4E0E\u8F93\u5165\u6A21\u6001\uFF0C\u5E76\u586B\u5145 pi-ai \u63D0\u4F9B\u5546\u7684\u6A21\u578B\u6761\u76EE\u3002",
  enrich: "\u4ECE\u670D\u52A1\u5668\u5BCC\u5316",
  enriching: "\u6B63\u5728\u5BCC\u5316\u2026",
  noBaseUrl: "\u8BE5\u63D0\u4F9B\u5546\u672A\u914D\u7F6E\u7AEF\u70B9\u3002",
  enriched: "\u5DF2\u5BCC\u5316 {count} \u4E2A\u6A21\u578B\u3002",
  save: "\u4FDD\u5B58",
  saved: "\u5DF2\u4FDD\u5B58\u3002",
  invalidToken: "\u8BF7\u8F93\u5165\u6570\u5B57\u6216\u5E26 k/M \u540E\u7F00\u7684\u503C\uFF08\u5982 130k\uFF09\u3002",
  errorPrefix: "\u9519\u8BEF\uFF1A ",
  unavailable: "\u6B64\u8BBE\u7F6E\u5728\u5F53\u524D\u5BA2\u6237\u7AEF\u4E0D\u53EF\u7528\u3002",
  loading: "\u52A0\u8F7D\u4E2D\u2026"
};
function parseTokenText(text) {
  const raw = String(text ?? "").trim().replace(/[\s_]/g, "");
  if (raw === "") return void 0;
  const match = /^(\d+(?:[.,]\d+)?)([kKmM])?$/.exec(raw);
  if (match === null) return void 0;
  const base = Number(match[1].replace(",", "."));
  if (!Number.isFinite(base) || base < 0) return void 0;
  const scale = match[2] === void 0 ? 1 : match[2].toLowerCase() === "k" ? 1e3 : 1e6;
  return Math.round(base * scale);
}
function buildCatalog(providers) {
  const rows = [];
  if (providers === null || typeof providers !== "object") return rows;
  for (const [provider, profile] of Object.entries(providers)) {
    const models = profile !== null && typeof profile === "object" && Array.isArray(profile.models) ? profile.models : [];
    for (const model of models) {
      if (model === null || typeof model !== "object" || typeof model.id !== "string") continue;
      const efforts = model.reasoningEfforts;
      const levels = efforts === false ? [] : efforts !== null && typeof efforts === "object" ? Object.keys(efforts) : [];
      rows.push({ provider, model: model.id, name: typeof model.name === "string" && model.name !== "" ? model.name : model.id, levels });
    }
  }
  return rows;
}
var S = {
  wrap: { display: "flex", flexDirection: "column", gap: 4, maxWidth: 680, paddingTop: 4 },
  group: { marginTop: 10, paddingTop: 10, borderTop: "0.5px solid var(--dsw-alias-border-l2, #ddd)" },
  groupTitle: { fontWeight: 600, marginBottom: 2 },
  label: { display: "block", fontWeight: 600, marginBottom: 6 },
  hint: { opacity: 0.7, fontSize: 12, margin: "4px 0 12px" },
  input: { padding: "6px 8px", border: "1px solid var(--dsw-alias-border-l2, #ccc)", borderRadius: 4, fontFamily: "inherit", background: "var(--dsw-alias-bg-base, #fff)", color: "var(--dsw-alias-label-primary, #111)", width: "100%", boxSizing: "border-box" },
  rowTwo: { display: "flex", gap: 12 },
  col: { flex: 1, minWidth: 0 },
  inline: { display: "flex", alignItems: "center", gap: 8, marginBottom: 10 },
  error: { color: "var(--dsw-alias-state-error-primary, #c00)", fontSize: 12, marginTop: 2 }
};
function PrefsSection(props) {
  const { t, usePrefs, useModelCatalog, save, probe, writeModels } = props;
  const snap = usePrefs((s) => s);
  const catalogSnap = useModelCatalog((s) => s);
  const value = snap !== null && snap !== void 0 && typeof snap.value === "object" && snap.value !== null ? snap.value : {};
  const providers = catalogSnap !== null && catalogSnap !== void 0 && catalogSnap.value !== null && typeof catalogSnap.value === "object" ? catalogSnap.value.providers : void 0;
  const catalog = buildCatalog(providers);
  const status = snap !== null && snap !== void 0 ? snap.status : "loading";
  const writable = !!(snap && snap.writable);
  const [draft, setDraft] = import_react.default.useState(() => ({
    thresholdTokens: value.thresholdTokens ? String(value.thresholdTokens) : "",
    contextWindowTokens: value.contextWindowTokens ? String(value.contextWindowTokens) : "",
    retainTokens: value.retainTokens ? String(value.retainTokens) : ""
  }));
  const [note, setNote] = import_react.default.useState("");
  const [enrichNote, setEnrichNote] = import_react.default.useState("");
  const [busyRoute, setBusyRoute] = import_react.default.useState("");
  const valueRef = snap && snap.value;
  import_react.default.useEffect(() => {
    setDraft({
      thresholdTokens: valueRef && valueRef.thresholdTokens ? String(valueRef.thresholdTokens) : "",
      contextWindowTokens: valueRef && valueRef.contextWindowTokens ? String(valueRef.contextWindowTokens) : "",
      retainTokens: valueRef && valueRef.retainTokens ? String(valueRef.retainTokens) : ""
    });
    setNote("");
  }, [valueRef]);
  if (status === "loading") return el("div", { style: S.hint }, t("loading"));
  if (status === "unavailable") return el("div", { style: S.hint }, t("unavailable"));
  const disabled = !writable;
  const write = (field, v) => {
    setNote("");
    Promise.resolve(save(field, v)).catch((error) => setNote(t("errorPrefix") + String(error && error.message ? error.message : error)));
  };
  const commitTokens = (field, text) => {
    if (text.trim() === "") {
      write(field, 0);
      return;
    }
    const parsed = parseTokenText(text);
    if (parsed === void 0) {
      setNote(t("invalidToken"));
      return;
    }
    write(field, parsed);
  };
  const num = (field, fallback) => ({
    value: String(value[field] !== void 0 ? value[field] : fallback),
    disabled,
    onChange: (e) => {
      const n = Number(e.target.value);
      if (Number.isFinite(n)) write(field, n);
    }
  });
  const checkbox = (field, fallback) => ({
    checked: value[field] !== void 0 ? !!value[field] : fallback,
    disabled,
    onChange: (e) => write(field, e.target.checked)
  });
  const textField = (labelKey, field, hintKey) => el(
    "div",
    { style: S.col, key: field },
    el("div", { style: S.label }, t(labelKey)),
    el("input", {
      type: "text",
      style: S.input,
      disabled,
      value: draft[field],
      onChange: (e) => setDraft((d) => ({ ...d, [field]: e.target.value })),
      onBlur: () => commitTokens(field, draft[field]),
      onKeyDown: (e) => {
        if (e.key === "Enter") commitTokens(field, draft[field]);
      }
    }),
    el("div", { style: S.hint }, t(hintKey))
  );
  const numberField = (labelKey, field, hintKey, fallback) => el(
    "div",
    { style: S.col, key: field },
    el("div", { style: S.label }, t(labelKey)),
    el("input", { type: "number", step: "any", style: S.input, ...num(field, fallback) }),
    hintKey ? el("div", { style: S.hint }, t(hintKey)) : null
  );
  const checkField = (labelKey, field, hintKey, fallback) => el(
    "label",
    { style: S.inline, key: field },
    el("input", { type: "checkbox", ...checkbox(field, fallback) }),
    el("span", null, t(labelKey)),
    hintKey ? el("span", { style: { opacity: 0.7, fontSize: 12 } }, t(hintKey)) : null
  );
  const enrichProvider = async (routeId, profile) => {
    setBusyRoute(routeId);
    setEnrichNote("");
    try {
      const response = await probe({ args: { baseURL: profile.baseURL } });
      const found = Array.isArray(response?.models) ? response.models : [];
      const byId = new Map(found.map((m) => [m.id, m]));
      const existing = Array.isArray(profile.models) ? profile.models : [];
      const merged = existing.length === 0 ? found.map((m) => ({
        id: m.id,
        name: m.name,
        ...m.contextWindow === void 0 ? {} : { contextWindow: m.contextWindow },
        ...m.maxTokens === void 0 ? {} : { maxTokens: m.maxTokens },
        ...m.input === void 0 ? {} : { input: m.input }
      })) : existing.map((m) => {
        const hit = byId.get(m.id);
        if (hit === void 0) return m;
        const next = { ...m };
        if (next.contextWindow === void 0 && hit.contextWindow !== void 0) next.contextWindow = hit.contextWindow;
        if (next.input === void 0 && hit.input !== void 0) next.input = hit.input;
        return next;
      });
      await writeModels(routeId, merged);
      setEnrichNote(t("enriched", { count: merged.length }));
    } catch (error) {
      setEnrichNote(t("errorPrefix") + String(error && error.message ? error.message : error));
    } finally {
      setBusyRoute("");
    }
  };
  const providerRows = Object.entries(providers !== null && typeof providers === "object" ? providers : {}).map(([routeId, profile]) => {
    const baseURL = profile !== null && typeof profile === "object" && typeof profile.baseURL === "string" ? profile.baseURL : "";
    return el(
      "div",
      { key: routeId, style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 } },
      el("span", { style: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, `${routeId}${baseURL ? ` \u2014 ${baseURL}` : ""}`),
      baseURL ? el("button", {
        type: "button",
        style: { ...S.input, width: "auto", cursor: busyRoute === routeId || disabled ? "default" : "pointer", flexShrink: 0 },
        disabled: busyRoute === routeId || disabled,
        onClick: () => {
          void enrichProvider(routeId, profile);
        }
      }, busyRoute === routeId ? t("enriching") : t("enrich")) : el("span", { style: { opacity: 0.6, fontSize: 12, flexShrink: 0 } }, t("noBaseUrl"))
    );
  });
  const mode = value.summarizationMode === "custom" ? "custom" : "session";
  const providerNames = [...new Set(catalog.map((r) => r.provider))];
  const selectedProvider = value.summarizationProvider || providerNames[0] || "";
  const modelsForProvider = catalog.filter((r) => r.provider === selectedProvider);
  const selectedRow = modelsForProvider.find((r) => r.model === value.summarizationModel) || modelsForProvider[0];
  const levelSet = ["default", "off", ...selectedRow ? selectedRow.levels : []];
  const reasoning = value.summarizationReasoning || "default";
  const options = (pairs, selected) => pairs.map(([v, label]) => el("option", { key: v, value: v }, label));
  const summarization = [
    el(
      "div",
      { style: S.col, key: "mode" },
      el("div", { style: S.label }, t("summarizationMode")),
      el(
        "select",
        { style: S.input, disabled, value: mode, onChange: (e) => write("summarizationMode", e.target.value) },
        options([["session", t("modeSession")], ["custom", t("modeCustom")]], mode)
      )
    )
  ];
  if (mode === "custom") {
    summarization.push(el(
      "div",
      { style: S.col, key: "provider" },
      el("div", { style: S.label }, t("provider")),
      el("select", {
        style: S.input,
        disabled,
        value: selectedProvider,
        onChange: (e) => {
          const next = catalog.find((r) => r.provider === e.target.value);
          write("summarizationProvider", e.target.value);
          if (next) write("summarizationModel", next.model);
          write("summarizationReasoning", "default");
        }
      }, providerNames.map((p) => el("option", { key: p, value: p }, p)))
    ));
    summarization.push(el(
      "div",
      { style: S.col, key: "model" },
      el("div", { style: S.label }, t("model")),
      el("select", {
        style: S.input,
        disabled,
        value: selectedRow ? selectedRow.model : "",
        onChange: (e) => {
          write("summarizationModel", e.target.value);
          write("summarizationReasoning", "default");
        }
      }, modelsForProvider.map((r) => el("option", { key: r.model, value: r.model }, r.name)))
    ));
  }
  summarization.push(el(
    "div",
    { style: S.col, key: "reasoning" },
    el("div", { style: S.label }, t("reasoning")),
    el(
      "select",
      { style: S.input, disabled, value: levelSet.includes(reasoning) ? reasoning : "default", onChange: (e) => write("summarizationReasoning", e.target.value) },
      levelSet.map((lv) => el("option", { key: lv, value: lv }, lv === "default" ? t("reasoningDefault") : lv === "off" ? t("reasoningOff") : lv))
    )
  ));
  return el(
    "div",
    { style: S.wrap },
    el("div", { style: S.groupTitle }, t("title")),
    el("div", { style: S.hint }, t("intro")),
    el(
      "div",
      { style: S.group },
      el("div", { style: S.groupTitle }, t("thresholdTitle")),
      el(
        "div",
        { style: S.rowTwo },
        textField("thresholdTokens", "thresholdTokens", "thresholdTokensHint"),
        textField("contextWindow", "contextWindowTokens", "contextWindowHint")
      ),
      el(
        "div",
        { style: S.rowTwo },
        numberField("thresholdRatio", "thresholdRatio", "thresholdRatioHint", 0.8),
        numberField("headroom", "headroomTokens", "headroomHint", 32768)
      )
    ),
    el(
      "div",
      { style: S.group },
      el("div", { style: S.groupTitle }, t("retentionTitle")),
      el(
        "div",
        { style: S.rowTwo },
        textField("retainTokens", "retainTokens", "retainTokensHint"),
        numberField("retainRatio", "retainRatio", null, 0.16)
      )
    ),
    el(
      "div",
      { style: S.group },
      el("div", { style: S.groupTitle }, t("behaviourTitle")),
      checkField("auto", "auto", "autoHint", true),
      checkField("turnEnd", "turnEndCompactionEnabled", "turnEndHint", false)
    ),
    el(
      "div",
      { style: S.group },
      el("div", { style: S.groupTitle }, t("summarizationTitle")),
      el("div", { style: S.rowTwo }, summarization),
      numberField("maxTokens", "maxTokens", null, 32768)
    ),
    el(
      "div",
      { style: S.group },
      el("div", { style: S.groupTitle }, t("advancedTitle")),
      el(
        "div",
        { style: S.rowTwo },
        numberField("compactionRetries", "compactionRetries", null, 1),
        numberField("maxOverflowRetries", "maxOverflowRetries", null, 1)
      )
    ),
    el(
      "div",
      { style: S.group },
      el("div", { style: S.groupTitle }, t("modelsTitle")),
      el("div", { style: S.hint }, t("modelsIntro")),
      ...providerRows,
      enrichNote ? el("div", { style: S.hint }, enrichNote) : null
    ),
    note ? el("div", { style: S.error }, note) : null
  );
}
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(LOCALE_NS, { en, zh }), "malko-prefs: locale dictionaries");
  const t = ctx.locale.bind(LOCALE_NS);
  const form = ctx.configForms.get(NS);
  const modelForm = ctx.configForms.get(MODEL_NS);
  const injected = () => ({
    hooks: { prefs: form, modelCatalog: modelForm },
    save: (field, value) => form.set(field, value),
    probe: (args) => ctx.remote.malkoModels.probe(args),
    writeModels: (routeId, models) => modelForm.mutate([{ op: "set", path: ["providers", routeId, "models"], value: models }])
  });
  ctx.slots.inject(SLOT, () => ctx.slots.register({
    name: SLOT,
    id: NS,
    order: 45,
    label: () => t("title"),
    locale: LOCALE_NS,
    inject: injected
  }, PrefsSection));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBkc2gtbWFsa28tcHJlZnMgXHUyMDE0IGJyb3dzZXIgaGFsZi5cbiAqXG4gKiBBIHNlbGYtY29udGFpbmVkIHNldHRpbmdzIHNlY3Rpb24gZm9yIHRoZSBwZXJzb25hbCBjb21wYWN0aW9uIHByZWZlcmVuY2VzOlxuICogdGhyZXNob2xkIChhYnNvbHV0ZSB0b2tlbnMgb3IgcmF0aW8pLCByZXRlbnRpb24sIGF1dG9tYXRpYyArIHR1cm4tZW5kXG4gKiBjb21wYWN0aW9uLCBhbmQgdGhlIHN1bW1hcml6YXRpb24gbW9kZWwvcmVhc29uaW5nLiBSZWFkcyBhbmQgd3JpdGVzIHRoZVxuICogYG1hbGtvLXByZWZzYCBjb25maWcgZm9ybSwgYW5kIHJlYWRzIHRoZSBgbGxtLXBpLWFpYCBmb3JtIHRvIHBvcHVsYXRlIHRoZVxuICogbW9kZWwvcmVhc29uaW5nIHBpY2tlcnMuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZHNoLW1hbGtvLXByZWZzJ1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsnc2xvdHMnLCAnbG9jYWxlJywgJ2NvbmZpZ0Zvcm1zJywgJ3JlbW90ZSddXG5cbmNvbnN0IE5TID0gJ21hbGtvLXByZWZzJ1xuY29uc3QgTU9ERUxfTlMgPSAnbGxtLXBpLWFpJ1xuY29uc3QgTE9DQUxFX05TID0gJ3NldHRpbmdzLm1hbGtvLXByZWZzJ1xuY29uc3QgU0xPVCA9ICdzZXR0aW5ncy5zZWN0aW9uJ1xuXG5jb25zdCBlbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnRcblxuY29uc3QgZW4gPSB7XG4gIHRpdGxlOiAnTW9kZWwgJiBjb250ZXh0IChtYWxrbyknLFxuICBpbnRybzogJ1R1bmFibGUgY29tcGFuaW9uIHRvIHRoZSBvZmZpY2lhbCBjb21wYWN0aW9uIGVuZ2luZS4nLFxuICB0aHJlc2hvbGRUaXRsZTogJ0NvbXBhY3Rpb24gdGhyZXNob2xkJyxcbiAgdGhyZXNob2xkVG9rZW5zOiAnVGhyZXNob2xkICh0b2tlbnMpJyxcbiAgdGhyZXNob2xkVG9rZW5zSGludDogJ0Fic29sdXRlIHByZXNzdXJlIGluIHRva2VucywgZS5nLiAxMzBrIG9yIDEzMEsuIEVtcHR5LzAgPSB1c2UgdGhlIHJhdGlvIGJlbG93LicsXG4gIGNvbnRleHRXaW5kb3c6ICdDb250ZXh0IHdpbmRvdyAodG9rZW5zKScsXG4gIGNvbnRleHRXaW5kb3dIaW50OiAnV2luZG93IHRoZSBhYnNvbHV0ZSB0aHJlc2hvbGQgaXMgZXhwcmVzc2VkIGFnYWluc3QgKGUuZy4gMjAwaykuIDAgPSBkZXJpdmUgbm90aGluZyAocmF0aW8gb25seSkuJyxcbiAgdGhyZXNob2xkUmF0aW86ICdUaHJlc2hvbGQgcmF0aW8nLFxuICB0aHJlc2hvbGRSYXRpb0hpbnQ6ICdVc2VkIHdoZW4gdGhlIGFic29sdXRlIHRocmVzaG9sZCBpcyBlbXB0eSAoMC44ID0gODAlIG9mIHRoZSB3aW5kb3cpLicsXG4gIGhlYWRyb29tOiAnSGVhZHJvb20gKHRva2VucyknLFxuICBoZWFkcm9vbUhpbnQ6ICdSZXNlcnZlZCBvbiB0b3Agb2YgdGhlIG91dHB1dCBjYXAuIFRoZSBvZmZpY2lhbCBkZWZhdWx0ICg2NTUzNikgY2FwcyB0aGUgdHJpZ2dlciB3ZWxsIGJlbG93IDgwJS4nLFxuICByZXRlbnRpb25UaXRsZTogJ1JldGVudGlvbicsXG4gIHJldGFpblRva2VuczogJ0tlZXAgbGFzdCAodG9rZW5zKScsXG4gIHJldGFpblRva2Vuc0hpbnQ6ICdWZXJiYXRpbSByZWNlbnQtY29udGV4dCBidWRnZXQsIGUuZy4gMzJrLiBFbXB0eS8wID0gdXNlIHRoZSByYXRpbyBiZWxvdy4nLFxuICByZXRhaW5SYXRpbzogJ0tlZXAgcmF0aW8nLFxuICBiZWhhdmlvdXJUaXRsZTogJ0JlaGF2aW91cicsXG4gIGF1dG86ICdBdXRvbWF0aWMgY29tcGFjdGlvbicsXG4gIGF1dG9IaW50OiAnT2ZmaWNpYWwgYmV0d2Vlbi1zdGVwIHByZXNzdXJlIGNvbXBhY3Rpb24gYW5kIGNvbnRleHQtb3ZlcmZsb3cgcmVjb3ZlcnkuJyxcbiAgdHVybkVuZDogJ0NvbXBhY3QgYXQgZW5kIG9mIHR1cm4nLFxuICB0dXJuRW5kSGludDogJ1J1bnMgb25lIG1vcmUgY29tcGFjdGlvbiB3aGVuIHRoZSBhZ2VudCBnb2VzIGlkbGUuJyxcbiAgc3VtbWFyaXphdGlvblRpdGxlOiAnU3VtbWFyaXphdGlvbicsXG4gIHN1bW1hcml6YXRpb25Nb2RlOiAnTW9kZWwnLFxuICBtb2RlU2Vzc2lvbjogJ1Nlc3Npb24gbW9kZWwnLFxuICBtb2RlQ3VzdG9tOiAnQ3VzdG9tIG1vZGVsJyxcbiAgcHJvdmlkZXI6ICdQcm92aWRlcicsXG4gIG1vZGVsOiAnTW9kZWwnLFxuICByZWFzb25pbmc6ICdSZWFzb25pbmcnLFxuICByZWFzb25pbmdEZWZhdWx0OiAnRGVmYXVsdCcsXG4gIHJlYXNvbmluZ09mZjogJ09mZicsXG4gIG1heFRva2VuczogJ1N1bW1hcnkgb3V0cHV0IGNhcCAodG9rZW5zKScsXG4gIGFkdmFuY2VkVGl0bGU6ICdBZHZhbmNlZCcsXG4gIGNvbXBhY3Rpb25SZXRyaWVzOiAnRXh0cmEgY29tcGFjdGlvbiBhdHRlbXB0cycsXG4gIG1heE92ZXJmbG93UmV0cmllczogJ092ZXJmbG93IHJlY292ZXJ5IGF0dGVtcHRzJyxcbiAgbW9kZWxzVGl0bGU6ICdsbGFtYS5jcHAgbW9kZWxzJyxcbiAgbW9kZWxzSW50cm86ICdSZWFkIGNvbnRleHQgd2luZG93IGFuZCBpbnB1dCBtb2RhbGl0aWVzIGZyb20gdGhlIHNlcnZlciBhbmQgZmlsbCB0aGUgbW9kZWwgZW50cmllcyBvZiBhIHBpLWFpIHByb3ZpZGVyLicsXG4gIGVucmljaDogJ0VucmljaCBmcm9tIHNlcnZlcicsXG4gIGVucmljaGluZzogJ0VucmljaGluZ1xcdTIwMjYnLFxuICBub0Jhc2VVcmw6ICdObyBlbmRwb2ludCBjb25maWd1cmVkIGZvciB0aGlzIHByb3ZpZGVyLicsXG4gIGVucmljaGVkOiAnRW5yaWNoZWQge2NvdW50fSBtb2RlbChzKS4nLFxuICBzYXZlOiAnU2F2ZScsXG4gIHNhdmVkOiAnU2F2ZWQuJyxcbiAgaW52YWxpZFRva2VuOiAnRW50ZXIgYSBudW1iZXIgb3IgYSBrL00gc3VmZml4IHZhbHVlIChlLmcuIDEzMGspLicsXG4gIGVycm9yUHJlZml4OiAnRXJyb3I6ICcsXG4gIHVuYXZhaWxhYmxlOiAnVGhpcyBzZXR0aW5nIGlzIG5vdCBhdmFpbGFibGUgZnJvbSB0aGlzIGNsaWVudC4nLFxuICBsb2FkaW5nOiAnTG9hZGluZ1xcdTIwMjYnLFxufVxuXG5jb25zdCB6aCA9IHtcbiAgdGl0bGU6ICdcXHU2YTIxXFx1NTc4YlxcdTRlMGVcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHVmZjA4bWFsa29cXHVmZjA5JyxcbiAgaW50cm86ICdcXHU1Yjk4XFx1NjViOVxcdTUzOGJcXHU3ZjI5XFx1NWYxNVxcdTY0Y2VcXHU3Njg0XFx1NTNlZlxcdThjMDNcXHU0ZjM0XFx1NzUxZlxcdTMwMDInLFxuICB0aHJlc2hvbGRUaXRsZTogJ1xcdTUzOGJcXHU3ZjI5XFx1OTYwMFxcdTUwM2MnLFxuICB0aHJlc2hvbGRUb2tlbnM6ICdcXHU5NjAwXFx1NTAzY1xcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgdGhyZXNob2xkVG9rZW5zSGludDogJ1xcdTdlZGRcXHU1YmY5IHRva2VuIFxcdTk2MDBcXHU1MDNjXFx1ZmYwY1xcdTU5ODIgMTMwa1xcdTMwMDJcXHU3NTU5XFx1N2E3YS8wID0gXFx1NzUyOFxcdTRlMGJcXHU2NWI5XFx1NmJkNFxcdTRmOGJcXHUzMDAyJyxcbiAgY29udGV4dFdpbmRvdzogJ1xcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTdhOTdcXHU1M2UzXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICBjb250ZXh0V2luZG93SGludDogJ1xcdTdlZGRcXHU1YmY5XFx1OTYwMFxcdTUwM2NcXHU2MjQwXFx1NGY5ZFxcdTYzNmVcXHU3Njg0XFx1N2E5N1xcdTUzZTNcXHVmZjA4XFx1NTk4MiAyMDBrXFx1ZmYwOVxcdTMwMDIwID0gXFx1NTNlYVxcdTc1MjhcXHU2YmQ0XFx1NGY4YlxcdTMwMDInLFxuICB0aHJlc2hvbGRSYXRpbzogJ1xcdTk2MDBcXHU1MDNjXFx1NmJkNFxcdTRmOGInLFxuICB0aHJlc2hvbGRSYXRpb0hpbnQ6ICdcXHU1ZjUzXFx1N2VkZFxcdTViZjlcXHU5NjAwXFx1NTAzY1xcdTRlM2FcXHU3YTdhXFx1NjVmNlxcdTRmN2ZcXHU3NTI4XFx1ZmYwODAuOCA9IFxcdTdhOTdcXHU1M2UzXFx1NzY4NCA4MCVcXHVmZjA5XFx1MzAwMicsXG4gIGhlYWRyb29tOiAnXFx1OTg4NFxcdTc1NTlcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIGhlYWRyb29tSGludDogJ1xcdTU3MjhcXHU4ZjkzXFx1NTFmYVxcdTk4ODRcXHU3Yjk3XFx1NGU0YlxcdTU5MTZcXHU1MThkXFx1OTg4NFxcdTc1NTlcXHU3Njg0XFx1OTFjZlxcdTMwMDJcXHU1Yjk4XFx1NjViOVxcdTllZDhcXHU4YmE0IDY1NTM2IFxcdTRmMWFcXHU2MjhhXFx1ODllNlxcdTUzZDFcXHU3MGI5XFx1NjJjOVxcdTUyMzAgODAlIFxcdTRlZTVcXHU0ZTBiXFx1MzAwMicsXG4gIHJldGVudGlvblRpdGxlOiAnXFx1NGZkZFxcdTc1NTknLFxuICByZXRhaW5Ub2tlbnM6ICdcXHU0ZmRkXFx1NzU1OVxcdTY3MDBcXHU4ZmQxXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICByZXRhaW5Ub2tlbnNIaW50OiAnXFx1OTAxMFxcdTViNTdcXHU0ZmRkXFx1NzU1OVxcdTc2ODRcXHU4ZmQxXFx1NjcxZlxcdTk4ODRcXHU3Yjk3XFx1ZmYwY1xcdTU5ODIgMzJrXFx1MzAwMlxcdTc1NTlcXHU3YTdhLzAgPSBcXHU3NTI4XFx1NGUwYlxcdTY1YjlcXHU2YmQ0XFx1NGY4YlxcdTMwMDInLFxuICByZXRhaW5SYXRpbzogJ1xcdTRmZGRcXHU3NTU5XFx1NmJkNFxcdTRmOGInLFxuICBiZWhhdmlvdXJUaXRsZTogJ1xcdTg4NGNcXHU0ZTNhJyxcbiAgYXV0bzogJ1xcdTgxZWFcXHU1MmE4XFx1NTM4YlxcdTdmMjknLFxuICBhdXRvSGludDogJ1xcdTViOThcXHU2NWI5XFx1NzY4NFxcdTZiNjVcXHU5NWY0XFx1NTM4YlxcdTUyOWJcXHU1MzhiXFx1N2YyOVxcdTRlMGVcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU2ZWEyXFx1NTFmYVxcdTYwNjJcXHU1OTBkXFx1MzAwMicsXG4gIHR1cm5FbmQ6ICdcXHU4ZjZlXFx1NjcyYlxcdTUzOGJcXHU3ZjI5JyxcbiAgdHVybkVuZEhpbnQ6ICdcXHU0ZWUzXFx1NzQwNlxcdThmNmNcXHU0ZTNhIGlkbGUgXFx1NjVmNlxcdTUxOGRcXHU1MzhiXFx1N2YyOVxcdTRlMDBcXHU2YjIxXFx1MzAwMicsXG4gIHN1bW1hcml6YXRpb25UaXRsZTogJ1xcdTY0NThcXHU4OTgxJyxcbiAgc3VtbWFyaXphdGlvbk1vZGU6ICdcXHU2YTIxXFx1NTc4YicsXG4gIG1vZGVTZXNzaW9uOiAnXFx1NGYxYVxcdThiZGRcXHU2YTIxXFx1NTc4YicsXG4gIG1vZGVDdXN0b206ICdcXHU4MWVhXFx1NWI5YVxcdTRlNDlcXHU2YTIxXFx1NTc4YicsXG4gIHByb3ZpZGVyOiAnXFx1NjNkMFxcdTRmOWJcXHU1NTQ2JyxcbiAgbW9kZWw6ICdcXHU2YTIxXFx1NTc4YicsXG4gIHJlYXNvbmluZzogJ1xcdTYwMWRcXHU4MDAzXFx1N2VhN1xcdTUyMmInLFxuICByZWFzb25pbmdEZWZhdWx0OiAnXFx1OWVkOFxcdThiYTQnLFxuICByZWFzb25pbmdPZmY6ICdcXHU1MTczXFx1OTVlZCcsXG4gIG1heFRva2VuczogJ1xcdTY0NThcXHU4OTgxXFx1OGY5M1xcdTUxZmFcXHU0ZTBhXFx1OTY1MFxcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgYWR2YW5jZWRUaXRsZTogJ1xcdTlhZDhcXHU3ZWE3JyxcbiAgY29tcGFjdGlvblJldHJpZXM6ICdcXHU5ODlkXFx1NTkxNlxcdTUzOGJcXHU3ZjI5XFx1NWMxZFxcdThiZDUnLFxuICBtYXhPdmVyZmxvd1JldHJpZXM6ICdcXHU2ZWEyXFx1NTFmYVxcdTYwNjJcXHU1OTBkXFx1NWMxZFxcdThiZDUnLFxuICBtb2RlbHNUaXRsZTogJ2xsYW1hLmNwcCBcXHU2YTIxXFx1NTc4YicsXG4gIG1vZGVsc0ludHJvOiAnXFx1NGVjZVxcdTY3MGRcXHU1MmExXFx1NTY2OFxcdThiZmJcXHU1M2Q2XFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1N2E5N1xcdTUzZTNcXHU0ZTBlXFx1OGY5M1xcdTUxNjVcXHU2YTIxXFx1NjAwMVxcdWZmMGNcXHU1ZTc2XFx1NTg2YlxcdTUxNDUgcGktYWkgXFx1NjNkMFxcdTRmOWJcXHU1NTQ2XFx1NzY4NFxcdTZhMjFcXHU1NzhiXFx1Njc2MVxcdTc2ZWVcXHUzMDAyJyxcbiAgZW5yaWNoOiAnXFx1NGVjZVxcdTY3MGRcXHU1MmExXFx1NTY2OFxcdTViY2NcXHU1MzE2JyxcbiAgZW5yaWNoaW5nOiAnXFx1NmI2M1xcdTU3MjhcXHU1YmNjXFx1NTMxNlxcdTIwMjYnLFxuICBub0Jhc2VVcmw6ICdcXHU4YmU1XFx1NjNkMFxcdTRmOWJcXHU1NTQ2XFx1NjcyYVxcdTkxNGRcXHU3ZjZlXFx1N2FlZlxcdTcwYjlcXHUzMDAyJyxcbiAgZW5yaWNoZWQ6ICdcXHU1ZGYyXFx1NWJjY1xcdTUzMTYge2NvdW50fSBcXHU0ZTJhXFx1NmEyMVxcdTU3OGJcXHUzMDAyJyxcbiAgc2F2ZTogJ1xcdTRmZGRcXHU1YjU4JyxcbiAgc2F2ZWQ6ICdcXHU1ZGYyXFx1NGZkZFxcdTViNThcXHUzMDAyJyxcbiAgaW52YWxpZFRva2VuOiAnXFx1OGJmN1xcdThmOTNcXHU1MTY1XFx1NjU3MFxcdTViNTdcXHU2MjE2XFx1NWUyNiBrL00gXFx1NTQwZVxcdTdmMDBcXHU3Njg0XFx1NTAzY1xcdWZmMDhcXHU1OTgyIDEzMGtcXHVmZjA5XFx1MzAwMicsXG4gIGVycm9yUHJlZml4OiAnXFx1OTUxOVxcdThiZWZcXHVmZjFhICcsXG4gIHVuYXZhaWxhYmxlOiAnXFx1NmI2NFxcdThiYmVcXHU3ZjZlXFx1NTcyOFxcdTVmNTNcXHU1MjRkXFx1NWJhMlxcdTYyMzdcXHU3YWVmXFx1NGUwZFxcdTUzZWZcXHU3NTI4XFx1MzAwMicsXG4gIGxvYWRpbmc6ICdcXHU1MmEwXFx1OGY3ZFxcdTRlMmRcXHUyMDI2Jyxcbn1cblxuLyoqIFBhcnNlIGEgaHVtYW4gdG9rZW4gY291bnQgKGAxMzBrYCwgYDEuNW1gLCBgMTMwMDAwYCkuICovXG5mdW5jdGlvbiBwYXJzZVRva2VuVGV4dCh0ZXh0KSB7XG4gIGNvbnN0IHJhdyA9IFN0cmluZyh0ZXh0ID8/ICcnKS50cmltKCkucmVwbGFjZSgvW1xcc19dL2csICcnKVxuICBpZiAocmF3ID09PSAnJykgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBtYXRjaCA9IC9eKFxcZCsoPzpbLixdXFxkKyk/KShba0ttTV0pPyQvLmV4ZWMocmF3KVxuICBpZiAobWF0Y2ggPT09IG51bGwpIHJldHVybiB1bmRlZmluZWRcbiAgY29uc3QgYmFzZSA9IE51bWJlcihtYXRjaFsxXS5yZXBsYWNlKCcsJywgJy4nKSlcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoYmFzZSkgfHwgYmFzZSA8IDApIHJldHVybiB1bmRlZmluZWRcbiAgY29uc3Qgc2NhbGUgPSBtYXRjaFsyXSA9PT0gdW5kZWZpbmVkID8gMSA6IG1hdGNoWzJdLnRvTG93ZXJDYXNlKCkgPT09ICdrJyA/IDEwMDAgOiAxMDAwMDAwXG4gIHJldHVybiBNYXRoLnJvdW5kKGJhc2UgKiBzY2FsZSlcbn1cblxuLyoqIEJ1aWxkIGB7IHByb3ZpZGVyLCBtb2RlbCwgbmFtZSwgbGV2ZWxzIH1gIHJvd3MgZnJvbSB0aGUgcGktYWkgY29uZmlnIHZhbHVlLiAqL1xuZnVuY3Rpb24gYnVpbGRDYXRhbG9nKHByb3ZpZGVycykge1xuICBjb25zdCByb3dzID0gW11cbiAgaWYgKHByb3ZpZGVycyA9PT0gbnVsbCB8fCB0eXBlb2YgcHJvdmlkZXJzICE9PSAnb2JqZWN0JykgcmV0dXJuIHJvd3NcbiAgZm9yIChjb25zdCBbcHJvdmlkZXIsIHByb2ZpbGVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3ZpZGVycykpIHtcbiAgICBjb25zdCBtb2RlbHMgPSBwcm9maWxlICE9PSBudWxsICYmIHR5cGVvZiBwcm9maWxlID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHByb2ZpbGUubW9kZWxzKSA/IHByb2ZpbGUubW9kZWxzIDogW11cbiAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscykge1xuICAgICAgaWYgKG1vZGVsID09PSBudWxsIHx8IHR5cGVvZiBtb2RlbCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG1vZGVsLmlkICE9PSAnc3RyaW5nJykgY29udGludWVcbiAgICAgIGNvbnN0IGVmZm9ydHMgPSBtb2RlbC5yZWFzb25pbmdFZmZvcnRzXG4gICAgICBjb25zdCBsZXZlbHMgPSBlZmZvcnRzID09PSBmYWxzZSA/IFtdIDogKGVmZm9ydHMgIT09IG51bGwgJiYgdHlwZW9mIGVmZm9ydHMgPT09ICdvYmplY3QnID8gT2JqZWN0LmtleXMoZWZmb3J0cykgOiBbXSlcbiAgICAgIHJvd3MucHVzaCh7IHByb3ZpZGVyLCBtb2RlbDogbW9kZWwuaWQsIG5hbWU6IHR5cGVvZiBtb2RlbC5uYW1lID09PSAnc3RyaW5nJyAmJiBtb2RlbC5uYW1lICE9PSAnJyA/IG1vZGVsLm5hbWUgOiBtb2RlbC5pZCwgbGV2ZWxzIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiByb3dzXG59XG5cbmNvbnN0IFMgPSB7XG4gIHdyYXA6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiA0LCBtYXhXaWR0aDogNjgwLCBwYWRkaW5nVG9wOiA0IH0sXG4gIGdyb3VwOiB7IG1hcmdpblRvcDogMTAsIHBhZGRpbmdUb3A6IDEwLCBib3JkZXJUb3A6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyLCAjZGRkKScgfSxcbiAgZ3JvdXBUaXRsZTogeyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogMiB9LFxuICBsYWJlbDogeyBkaXNwbGF5OiAnYmxvY2snLCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogNiB9LFxuICBoaW50OiB7IG9wYWNpdHk6IDAuNywgZm9udFNpemU6IDEyLCBtYXJnaW46ICc0cHggMCAxMnB4JyB9LFxuICBpbnB1dDogeyBwYWRkaW5nOiAnNnB4IDhweCcsIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwyLCAjY2NjKScsIGJvcmRlclJhZGl1czogNCwgZm9udEZhbWlseTogJ2luaGVyaXQnLCBiYWNrZ3JvdW5kOiAndmFyKC0tZHN3LWFsaWFzLWJnLWJhc2UsICNmZmYpJywgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSwgIzExMSknLCB3aWR0aDogJzEwMCUnLCBib3hTaXppbmc6ICdib3JkZXItYm94JyB9LFxuICByb3dUd286IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEyIH0sXG4gIGNvbDogeyBmbGV4OiAxLCBtaW5XaWR0aDogMCB9LFxuICBpbmxpbmU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA4LCBtYXJnaW5Cb3R0b206IDEwIH0sXG4gIGVycm9yOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnksICNjMDApJywgZm9udFNpemU6IDEyLCBtYXJnaW5Ub3A6IDIgfSxcbn1cblxuZnVuY3Rpb24gUHJlZnNTZWN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHsgdCwgdXNlUHJlZnMsIHVzZU1vZGVsQ2F0YWxvZywgc2F2ZSwgcHJvYmUsIHdyaXRlTW9kZWxzIH0gPSBwcm9wc1xuICBjb25zdCBzbmFwID0gdXNlUHJlZnMoKHMpID0+IHMpXG4gIGNvbnN0IGNhdGFsb2dTbmFwID0gdXNlTW9kZWxDYXRhbG9nKChzKSA9PiBzKVxuICBjb25zdCB2YWx1ZSA9IHNuYXAgIT09IG51bGwgJiYgc25hcCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzbmFwLnZhbHVlID09PSAnb2JqZWN0JyAmJiBzbmFwLnZhbHVlICE9PSBudWxsID8gc25hcC52YWx1ZSA6IHt9XG4gIGNvbnN0IHByb3ZpZGVycyA9IGNhdGFsb2dTbmFwICE9PSBudWxsICYmIGNhdGFsb2dTbmFwICE9PSB1bmRlZmluZWQgJiYgY2F0YWxvZ1NuYXAudmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIGNhdGFsb2dTbmFwLnZhbHVlID09PSAnb2JqZWN0JyA/IGNhdGFsb2dTbmFwLnZhbHVlLnByb3ZpZGVycyA6IHVuZGVmaW5lZFxuICBjb25zdCBjYXRhbG9nID0gYnVpbGRDYXRhbG9nKHByb3ZpZGVycylcbiAgY29uc3Qgc3RhdHVzID0gc25hcCAhPT0gbnVsbCAmJiBzbmFwICE9PSB1bmRlZmluZWQgPyBzbmFwLnN0YXR1cyA6ICdsb2FkaW5nJ1xuICBjb25zdCB3cml0YWJsZSA9ICEhKHNuYXAgJiYgc25hcC53cml0YWJsZSlcblxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+ICh7XG4gICAgdGhyZXNob2xkVG9rZW5zOiB2YWx1ZS50aHJlc2hvbGRUb2tlbnMgPyBTdHJpbmcodmFsdWUudGhyZXNob2xkVG9rZW5zKSA6ICcnLFxuICAgIGNvbnRleHRXaW5kb3dUb2tlbnM6IHZhbHVlLmNvbnRleHRXaW5kb3dUb2tlbnMgPyBTdHJpbmcodmFsdWUuY29udGV4dFdpbmRvd1Rva2VucykgOiAnJyxcbiAgICByZXRhaW5Ub2tlbnM6IHZhbHVlLnJldGFpblRva2VucyA/IFN0cmluZyh2YWx1ZS5yZXRhaW5Ub2tlbnMpIDogJycsXG4gIH0pKVxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2VucmljaE5vdGUsIHNldEVucmljaE5vdGVdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFtidXN5Um91dGUsIHNldEJ1c3lSb3V0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgdmFsdWVSZWYgPSBzbmFwICYmIHNuYXAudmFsdWVcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREcmFmdCh7XG4gICAgICB0aHJlc2hvbGRUb2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLnRocmVzaG9sZFRva2VucyA/IFN0cmluZyh2YWx1ZVJlZi50aHJlc2hvbGRUb2tlbnMpIDogJycsXG4gICAgICBjb250ZXh0V2luZG93VG9rZW5zOiB2YWx1ZVJlZiAmJiB2YWx1ZVJlZi5jb250ZXh0V2luZG93VG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLmNvbnRleHRXaW5kb3dUb2tlbnMpIDogJycsXG4gICAgICByZXRhaW5Ub2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLnJldGFpblRva2VucyA/IFN0cmluZyh2YWx1ZVJlZi5yZXRhaW5Ub2tlbnMpIDogJycsXG4gICAgfSlcbiAgICBzZXROb3RlKCcnKVxuICB9LCBbdmFsdWVSZWZdKVxuXG4gIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJykgcmV0dXJuIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnbG9hZGluZycpKVxuICBpZiAoc3RhdHVzID09PSAndW5hdmFpbGFibGUnKSByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCd1bmF2YWlsYWJsZScpKVxuXG4gIGNvbnN0IGRpc2FibGVkID0gIXdyaXRhYmxlXG4gIGNvbnN0IHdyaXRlID0gKGZpZWxkLCB2KSA9PiB7XG4gICAgc2V0Tm90ZSgnJylcbiAgICBQcm9taXNlLnJlc29sdmUoc2F2ZShmaWVsZCwgdikpLmNhdGNoKChlcnJvcikgPT4gc2V0Tm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKSlcbiAgfVxuICBjb25zdCBjb21taXRUb2tlbnMgPSAoZmllbGQsIHRleHQpID0+IHtcbiAgICBpZiAodGV4dC50cmltKCkgPT09ICcnKSB7IHdyaXRlKGZpZWxkLCAwKTsgcmV0dXJuIH1cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVRva2VuVGV4dCh0ZXh0KVxuICAgIGlmIChwYXJzZWQgPT09IHVuZGVmaW5lZCkgeyBzZXROb3RlKHQoJ2ludmFsaWRUb2tlbicpKTsgcmV0dXJuIH1cbiAgICB3cml0ZShmaWVsZCwgcGFyc2VkKVxuICB9XG4gIGNvbnN0IG51bSA9IChmaWVsZCwgZmFsbGJhY2spID0+ICh7XG4gICAgdmFsdWU6IFN0cmluZyh2YWx1ZVtmaWVsZF0gIT09IHVuZGVmaW5lZCA/IHZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrKSxcbiAgICBkaXNhYmxlZCxcbiAgICBvbkNoYW5nZTogKGUpID0+IHsgY29uc3QgbiA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7IGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHdyaXRlKGZpZWxkLCBuKSB9LFxuICB9KVxuICBjb25zdCBjaGVja2JveCA9IChmaWVsZCwgZmFsbGJhY2spID0+ICh7XG4gICAgY2hlY2tlZDogdmFsdWVbZmllbGRdICE9PSB1bmRlZmluZWQgPyAhIXZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrLFxuICAgIGRpc2FibGVkLFxuICAgIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoZmllbGQsIGUudGFyZ2V0LmNoZWNrZWQpLFxuICB9KVxuICBjb25zdCB0ZXh0RmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBoaW50S2V5KSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogUy5pbnB1dCwgZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogZHJhZnRbZmllbGRdLFxuICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXREcmFmdCgoZCkgPT4gKHsgLi4uZCwgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUgfSkpLFxuICAgICAgb25CbHVyOiAoKSA9PiBjb21taXRUb2tlbnMoZmllbGQsIGRyYWZ0W2ZpZWxkXSksXG4gICAgICBvbktleURvd246IChlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgY29tbWl0VG9rZW5zKGZpZWxkLCBkcmFmdFtmaWVsZF0pIH0sXG4gICAgfSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSxcbiAgKVxuICBjb25zdCBudW1iZXJGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0JywgeyB0eXBlOiAnbnVtYmVyJywgc3RlcDogJ2FueScsIHN0eWxlOiBTLmlucHV0LCAuLi5udW0oZmllbGQsIGZhbGxiYWNrKSB9KSxcbiAgICBoaW50S2V5ID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gIClcbiAgY29uc3QgY2hlY2tGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnbGFiZWwnLCB7IHN0eWxlOiBTLmlubGluZSwga2V5OiBmaWVsZCB9LFxuICAgIGVsKCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JywgLi4uY2hlY2tib3goZmllbGQsIGZhbGxiYWNrKSB9KSxcbiAgICBlbCgnc3BhbicsIG51bGwsIHQobGFiZWxLZXkpKSxcbiAgICBoaW50S2V5ID8gZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IG9wYWNpdHk6IDAuNywgZm9udFNpemU6IDEyIH0gfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICApXG5cbiAgY29uc3QgZW5yaWNoUHJvdmlkZXIgPSBhc3luYyAocm91dGVJZCwgcHJvZmlsZSkgPT4ge1xuICAgIHNldEJ1c3lSb3V0ZShyb3V0ZUlkKVxuICAgIHNldEVucmljaE5vdGUoJycpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvYmUoeyBhcmdzOiB7IGJhc2VVUkw6IHByb2ZpbGUuYmFzZVVSTCB9IH0pXG4gICAgICBjb25zdCBmb3VuZCA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2U/Lm1vZGVscykgPyByZXNwb25zZS5tb2RlbHMgOiBbXVxuICAgICAgY29uc3QgYnlJZCA9IG5ldyBNYXAoZm91bmQubWFwKChtKSA9PiBbbS5pZCwgbV0pKVxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBBcnJheS5pc0FycmF5KHByb2ZpbGUubW9kZWxzKSA/IHByb2ZpbGUubW9kZWxzIDogW11cbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nLmxlbmd0aCA9PT0gMFxuICAgICAgICA/IGZvdW5kLm1hcCgobSkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBtLmlkLFxuICAgICAgICAgICAgbmFtZTogbS5uYW1lLFxuICAgICAgICAgICAgLi4uKG0uY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGNvbnRleHRXaW5kb3c6IG0uY29udGV4dFdpbmRvdyB9KSxcbiAgICAgICAgICAgIC4uLihtLm1heFRva2VucyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IG1heFRva2VuczogbS5tYXhUb2tlbnMgfSksXG4gICAgICAgICAgICAuLi4obS5pbnB1dCA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGlucHV0OiBtLmlucHV0IH0pLFxuICAgICAgICAgIH0pKVxuICAgICAgICA6IGV4aXN0aW5nLm1hcCgobSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gYnlJZC5nZXQobS5pZClcbiAgICAgICAgICAgIGlmIChoaXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG1cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB7IC4uLm0gfVxuICAgICAgICAgICAgaWYgKG5leHQuY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkICYmIGhpdC5jb250ZXh0V2luZG93ICE9PSB1bmRlZmluZWQpIG5leHQuY29udGV4dFdpbmRvdyA9IGhpdC5jb250ZXh0V2luZG93XG4gICAgICAgICAgICBpZiAobmV4dC5pbnB1dCA9PT0gdW5kZWZpbmVkICYmIGhpdC5pbnB1dCAhPT0gdW5kZWZpbmVkKSBuZXh0LmlucHV0ID0gaGl0LmlucHV0XG4gICAgICAgICAgICByZXR1cm4gbmV4dFxuICAgICAgICAgIH0pXG4gICAgICBhd2FpdCB3cml0ZU1vZGVscyhyb3V0ZUlkLCBtZXJnZWQpXG4gICAgICBzZXRFbnJpY2hOb3RlKHQoJ2VucmljaGVkJywgeyBjb3VudDogbWVyZ2VkLmxlbmd0aCB9KSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RW5yaWNoTm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRCdXN5Um91dGUoJycpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJvdmlkZXJSb3dzID0gT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzICE9PSBudWxsICYmIHR5cGVvZiBwcm92aWRlcnMgPT09ICdvYmplY3QnID8gcHJvdmlkZXJzIDoge30pLm1hcCgoW3JvdXRlSWQsIHByb2ZpbGVdKSA9PiB7XG4gICAgY29uc3QgYmFzZVVSTCA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9maWxlLmJhc2VVUkwgPT09ICdzdHJpbmcnID8gcHJvZmlsZS5iYXNlVVJMIDogJydcbiAgICByZXR1cm4gZWwoJ2RpdicsIHsga2V5OiByb3V0ZUlkLCBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogNiB9IH0sXG4gICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgZmxleDogMSwgbWluV2lkdGg6IDAsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sIGAke3JvdXRlSWR9JHtiYXNlVVJMID8gYCBcdTIwMTQgJHtiYXNlVVJMfWAgOiAnJ31gKSxcbiAgICAgIGJhc2VVUkxcbiAgICAgICAgPyBlbCgnYnV0dG9uJywge1xuICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICBzdHlsZTogeyAuLi5TLmlucHV0LCB3aWR0aDogJ2F1dG8nLCBjdXJzb3I6IGJ1c3lSb3V0ZSA9PT0gcm91dGVJZCB8fCBkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJywgZmxleFNocmluazogMCB9LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGJ1c3lSb3V0ZSA9PT0gcm91dGVJZCB8fCBkaXNhYmxlZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHsgdm9pZCBlbnJpY2hQcm92aWRlcihyb3V0ZUlkLCBwcm9maWxlKSB9LFxuICAgICAgICAgIH0sIGJ1c3lSb3V0ZSA9PT0gcm91dGVJZCA/IHQoJ2VucmljaGluZycpIDogdCgnZW5yaWNoJykpXG4gICAgICAgIDogZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IG9wYWNpdHk6IDAuNiwgZm9udFNpemU6IDEyLCBmbGV4U2hyaW5rOiAwIH0gfSwgdCgnbm9CYXNlVXJsJykpLFxuICAgIClcbiAgfSlcblxuICAvLyBTdW1tYXJpemF0aW9uIG1vZGVsL3JlYXNvbmluZyBwaWNrZXJzLlxuICBjb25zdCBtb2RlID0gdmFsdWUuc3VtbWFyaXphdGlvbk1vZGUgPT09ICdjdXN0b20nID8gJ2N1c3RvbScgOiAnc2Vzc2lvbidcbiAgY29uc3QgcHJvdmlkZXJOYW1lcyA9IFsuLi5uZXcgU2V0KGNhdGFsb2cubWFwKChyKSA9PiByLnByb3ZpZGVyKSldXG4gIGNvbnN0IHNlbGVjdGVkUHJvdmlkZXIgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUHJvdmlkZXIgfHwgcHJvdmlkZXJOYW1lc1swXSB8fCAnJ1xuICBjb25zdCBtb2RlbHNGb3JQcm92aWRlciA9IGNhdGFsb2cuZmlsdGVyKChyKSA9PiByLnByb3ZpZGVyID09PSBzZWxlY3RlZFByb3ZpZGVyKVxuICBjb25zdCBzZWxlY3RlZFJvdyA9IG1vZGVsc0ZvclByb3ZpZGVyLmZpbmQoKHIpID0+IHIubW9kZWwgPT09IHZhbHVlLnN1bW1hcml6YXRpb25Nb2RlbCkgfHwgbW9kZWxzRm9yUHJvdmlkZXJbMF1cbiAgY29uc3QgbGV2ZWxTZXQgPSBbJ2RlZmF1bHQnLCAnb2ZmJywgLi4uKHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRSb3cubGV2ZWxzIDogW10pXVxuICBjb25zdCByZWFzb25pbmcgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUmVhc29uaW5nIHx8ICdkZWZhdWx0J1xuICBjb25zdCBvcHRpb25zID0gKHBhaXJzLCBzZWxlY3RlZCkgPT4gcGFpcnMubWFwKChbdiwgbGFiZWxdKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHYsIHZhbHVlOiB2IH0sIGxhYmVsKSlcblxuICBjb25zdCBzdW1tYXJpemF0aW9uID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAnbW9kZScgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ3N1bW1hcml6YXRpb25Nb2RlJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHsgc3R5bGU6IFMuaW5wdXQsIGRpc2FibGVkLCB2YWx1ZTogbW9kZSwgb25DaGFuZ2U6IChlKSA9PiB3cml0ZSgnc3VtbWFyaXphdGlvbk1vZGUnLCBlLnRhcmdldC52YWx1ZSkgfSxcbiAgICAgICAgb3B0aW9ucyhbWydzZXNzaW9uJywgdCgnbW9kZVNlc3Npb24nKV0sIFsnY3VzdG9tJywgdCgnbW9kZUN1c3RvbScpXV0sIG1vZGUpKSxcbiAgICApLFxuICBdXG4gIGlmIChtb2RlID09PSAnY3VzdG9tJykge1xuICAgIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ3Byb3ZpZGVyJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgncHJvdmlkZXInKSksXG4gICAgICBlbCgnc2VsZWN0Jywge1xuICAgICAgICBzdHlsZTogUy5pbnB1dCwgZGlzYWJsZWQsIHZhbHVlOiBzZWxlY3RlZFByb3ZpZGVyLFxuICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gY2F0YWxvZy5maW5kKChyKSA9PiByLnByb3ZpZGVyID09PSBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB3cml0ZSgnc3VtbWFyaXphdGlvblByb3ZpZGVyJywgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgaWYgKG5leHQpIHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZWwnLCBuZXh0Lm1vZGVsKVxuICAgICAgICAgIHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgJ2RlZmF1bHQnKVxuICAgICAgICB9LFxuICAgICAgfSwgcHJvdmlkZXJOYW1lcy5tYXAoKHApID0+IGVsKCdvcHRpb24nLCB7IGtleTogcCwgdmFsdWU6IHAgfSwgcCkpKSxcbiAgICApKVxuICAgIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ21vZGVsJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgnbW9kZWwnKSksXG4gICAgICBlbCgnc2VsZWN0Jywge1xuICAgICAgICBzdHlsZTogUy5pbnB1dCwgZGlzYWJsZWQsXG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZFJvdyA/IHNlbGVjdGVkUm93Lm1vZGVsIDogJycsXG4gICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4geyB3cml0ZSgnc3VtbWFyaXphdGlvbk1vZGVsJywgZS50YXJnZXQudmFsdWUpOyB3cml0ZSgnc3VtbWFyaXphdGlvblJlYXNvbmluZycsICdkZWZhdWx0JykgfSxcbiAgICAgIH0sIG1vZGVsc0ZvclByb3ZpZGVyLm1hcCgocikgPT4gZWwoJ29wdGlvbicsIHsga2V5OiByLm1vZGVsLCB2YWx1ZTogci5tb2RlbCB9LCByLm5hbWUpKSksXG4gICAgKSlcbiAgfVxuICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdyZWFzb25pbmcnIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgncmVhc29uaW5nJykpLFxuICAgIGVsKCdzZWxlY3QnLCB7IHN0eWxlOiBTLmlucHV0LCBkaXNhYmxlZCwgdmFsdWU6IGxldmVsU2V0LmluY2x1ZGVzKHJlYXNvbmluZykgPyByZWFzb25pbmcgOiAnZGVmYXVsdCcsIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoJ3N1bW1hcml6YXRpb25SZWFzb25pbmcnLCBlLnRhcmdldC52YWx1ZSkgfSxcbiAgICAgIGxldmVsU2V0Lm1hcCgobHYpID0+IGVsKCdvcHRpb24nLCB7IGtleTogbHYsIHZhbHVlOiBsdiB9LCBsdiA9PT0gJ2RlZmF1bHQnID8gdCgncmVhc29uaW5nRGVmYXVsdCcpIDogbHYgPT09ICdvZmYnID8gdCgncmVhc29uaW5nT2ZmJykgOiBsdikpKSxcbiAgKSlcblxuICByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMud3JhcCB9LFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgndGl0bGUnKSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdpbnRybycpKSxcblxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3RocmVzaG9sZFRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIHRleHRGaWVsZCgndGhyZXNob2xkVG9rZW5zJywgJ3RocmVzaG9sZFRva2VucycsICd0aHJlc2hvbGRUb2tlbnNIaW50JyksXG4gICAgICAgIHRleHRGaWVsZCgnY29udGV4dFdpbmRvdycsICdjb250ZXh0V2luZG93VG9rZW5zJywgJ2NvbnRleHRXaW5kb3dIaW50JyksXG4gICAgICApLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIG51bWJlckZpZWxkKCd0aHJlc2hvbGRSYXRpbycsICd0aHJlc2hvbGRSYXRpbycsICd0aHJlc2hvbGRSYXRpb0hpbnQnLCAwLjgpLFxuICAgICAgICBudW1iZXJGaWVsZCgnaGVhZHJvb20nLCAnaGVhZHJvb21Ub2tlbnMnLCAnaGVhZHJvb21IaW50JywgMzI3NjgpLFxuICAgICAgKSxcbiAgICApLFxuXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgncmV0ZW50aW9uVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgdGV4dEZpZWxkKCdyZXRhaW5Ub2tlbnMnLCAncmV0YWluVG9rZW5zJywgJ3JldGFpblRva2Vuc0hpbnQnKSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ3JldGFpblJhdGlvJywgJ3JldGFpblJhdGlvJywgbnVsbCwgMC4xNiksXG4gICAgICApLFxuICAgICksXG5cbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdiZWhhdmlvdXJUaXRsZScpKSxcbiAgICAgIGNoZWNrRmllbGQoJ2F1dG8nLCAnYXV0bycsICdhdXRvSGludCcsIHRydWUpLFxuICAgICAgY2hlY2tGaWVsZCgndHVybkVuZCcsICd0dXJuRW5kQ29tcGFjdGlvbkVuYWJsZWQnLCAndHVybkVuZEhpbnQnLCBmYWxzZSksXG4gICAgKSxcblxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3N1bW1hcml6YXRpb25UaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LCBzdW1tYXJpemF0aW9uKSxcbiAgICAgIG51bWJlckZpZWxkKCdtYXhUb2tlbnMnLCAnbWF4VG9rZW5zJywgbnVsbCwgMzI3NjgpLFxuICAgICksXG5cbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdhZHZhbmNlZFRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIG51bWJlckZpZWxkKCdjb21wYWN0aW9uUmV0cmllcycsICdjb21wYWN0aW9uUmV0cmllcycsIG51bGwsIDEpLFxuICAgICAgICBudW1iZXJGaWVsZCgnbWF4T3ZlcmZsb3dSZXRyaWVzJywgJ21heE92ZXJmbG93UmV0cmllcycsIG51bGwsIDEpLFxuICAgICAgKSxcbiAgICApLFxuXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnbW9kZWxzVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ21vZGVsc0ludHJvJykpLFxuICAgICAgLi4ucHJvdmlkZXJSb3dzLFxuICAgICAgZW5yaWNoTm90ZSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgZW5yaWNoTm90ZSkgOiBudWxsLFxuICAgICksXG5cbiAgICBub3RlID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgbm90ZSkgOiBudWxsLFxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseShjdHgpIHtcbiAgY3R4LmVmZmVjdCgoKSA9PiBjdHgubG9jYWxlLnJlZ2lzdGVyKExPQ0FMRV9OUywgeyBlbiwgemggfSksICdtYWxrby1wcmVmczogbG9jYWxlIGRpY3Rpb25hcmllcycpXG4gIGNvbnN0IHQgPSBjdHgubG9jYWxlLmJpbmQoTE9DQUxFX05TKVxuICBjb25zdCBmb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChOUylcbiAgY29uc3QgbW9kZWxGb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChNT0RFTF9OUylcbiAgY29uc3QgaW5qZWN0ZWQgPSAoKSA9PiAoe1xuICAgIGhvb2tzOiB7IHByZWZzOiBmb3JtLCBtb2RlbENhdGFsb2c6IG1vZGVsRm9ybSB9LFxuICAgIHNhdmU6IChmaWVsZCwgdmFsdWUpID0+IGZvcm0uc2V0KGZpZWxkLCB2YWx1ZSksXG4gICAgcHJvYmU6IChhcmdzKSA9PiBjdHgucmVtb3RlLm1hbGtvTW9kZWxzLnByb2JlKGFyZ3MpLFxuICAgIHdyaXRlTW9kZWxzOiAocm91dGVJZCwgbW9kZWxzKSA9PiBtb2RlbEZvcm0ubXV0YXRlKFt7IG9wOiAnc2V0JywgcGF0aDogWydwcm92aWRlcnMnLCByb3V0ZUlkLCAnbW9kZWxzJ10sIHZhbHVlOiBtb2RlbHMgfV0pLFxuICB9KVxuICBjdHguc2xvdHMuaW5qZWN0KFNMT1QsICgpID0+IGN0eC5zbG90cy5yZWdpc3Rlcih7XG4gICAgbmFtZTogU0xPVCxcbiAgICBpZDogTlMsXG4gICAgb3JkZXI6IDQ1LFxuICAgIGxhYmVsOiAoKSA9PiB0KCd0aXRsZScpLFxuICAgIGxvY2FsZTogTE9DQUxFX05TLFxuICAgIGluamVjdDogaW5qZWN0ZWQsXG4gIH0sIFByZWZzU2VjdGlvbikpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0EsbUJBQWtCO0FBRVgsSUFBTSxPQUFPO0FBQ2IsSUFBTSxTQUFTLENBQUMsU0FBUyxVQUFVLGVBQWUsUUFBUTtBQUVqRSxJQUFNLEtBQUs7QUFDWCxJQUFNLFdBQVc7QUFDakIsSUFB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
    return module.exports;
  },
});
