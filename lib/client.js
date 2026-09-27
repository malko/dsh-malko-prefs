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
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

// src/remote.ts
var PROBE_IDENTITY = {
  id: "dsh-malko-prefs#malkoModels/probe",
  service: "malkoModels",
  namespace: "malkoModels",
  method: "probe",
  argsTypeSymbol: "dsh-malko-prefs#ProbeArgs",
  resultTypeSymbol: "dsh-malko-prefs#ProbeResult"
};
function probeInvocation(createArgs, createResult) {
  return {
    id: PROBE_IDENTITY.id,
    service: PROBE_IDENTITY.service,
    namespace: PROBE_IDENTITY.namespace,
    method: PROBE_IDENTITY.method,
    invocation: { kind: "direct" },
    parameters: [
      {
        name: "args",
        wire: "args",
        source: "json",
        codec: { mode: "strict", typeSymbol: PROBE_IDENTITY.argsTypeSymbol, create: createArgs }
      }
    ],
    result: { mode: "strict", typeSymbol: PROBE_IDENTITY.resultTypeSymbol, create: createResult }
  };
}

// src/client.ts
var name = "dsh-malko-prefs";
var inject = ["slots", "locale", "configForms", "remote"];
var NS = "malko-prefs";
var MODEL_NS = "llm-pi-ai";
var LOCALE_NS = "settings.malko-prefs";
var SLOT = "settings.section";
var identitySchema = () => ({ parse: (value) => value });
var PROBE_REMOTE = {
  package: "dsh-malko-prefs",
  descriptors: [probeInvocation(identitySchema, identitySchema)]
};
var el = import_react.default.createElement;
var en = {
  title: "Malko's prefs",
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
  title: "Malko \u504F\u597D",
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
  group: { marginTop: 10, paddingTop: 10, borderTop: "0.5px solid var(--dsw-alias-border-l3)" },
  groupTitle: { fontWeight: 600, marginBottom: 2 },
  label: { display: "block", fontWeight: 600, marginBottom: 6, color: "var(--dsw-alias-label-primary)" },
  hint: { color: "var(--dsw-alias-label-tertiary)", fontSize: 12, margin: "4px 0 12px" },
  input: {
    height: 32,
    padding: "0 8px",
    border: "0.5px solid var(--dsw-alias-border-l4)",
    borderRadius: 8,
    fontFamily: "inherit",
    fontSize: 14,
    background: "var(--dsw-alias-bg-layer-1)",
    color: "var(--dsw-alias-label-primary)",
    width: "100%",
    boxSizing: "border-box"
  },
  select: { cursor: "pointer" },
  rowTwo: { display: "flex", gap: 12 },
  col: { flex: 1, minWidth: 0 },
  toggle: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 },
  toggleText: { display: "flex", flexDirection: "column", gap: 2 },
  toggleLabel: { fontWeight: 600, color: "var(--dsw-alias-label-primary)" },
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
  const switchField = (labelKey, field, hintKey, fallback) => el(
    "div",
    { style: S.toggle, key: field },
    el(import_dsh_client_ui_primitives.Switch, {
      checked: value[field] !== void 0 ? !!value[field] : fallback,
      disabled,
      label: t(labelKey),
      onChange: (next) => write(field, next)
    }),
    el(
      "div",
      { style: S.toggleText },
      el("span", { style: S.toggleLabel }, t(labelKey)),
      hintKey ? el("span", { style: { color: "var(--dsw-alias-label-tertiary)", fontSize: 12 } }, t(hintKey)) : null
    )
  );
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
      baseURL ? el(import_dsh_client_ui_primitives.Button, {
        variant: "outline",
        size: "sm",
        disabled: busyRoute === routeId || disabled,
        onClick: () => {
          void enrichProvider(routeId, profile);
        }
      }, busyRoute === routeId ? t("enriching") : t("enrich")) : el("span", { style: { color: "var(--dsw-alias-label-tertiary)", fontSize: 12, flexShrink: 0 } }, t("noBaseUrl"))
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
        { style: { ...S.input, ...S.select }, disabled, value: mode, onChange: (e) => write("summarizationMode", e.target.value) },
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
        style: { ...S.input, ...S.select },
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
        style: { ...S.input, ...S.select },
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
      { style: { ...S.input, ...S.select }, disabled, value: levelSet.includes(reasoning) ? reasoning : "default", onChange: (e) => write("summarizationReasoning", e.target.value) },
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
      switchField("auto", "auto", "autoHint", true),
      switchField("turnEnd", "turnEndCompactionEnabled", "turnEndHint", false)
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
async function apply(ctx) {
  ctx.effect(() => ctx.locale.register(LOCALE_NS, { en, zh }), "malko-prefs: locale dictionaries");
  const t = ctx.locale.bind(LOCALE_NS);
  const form = ctx.configForms.get(NS);
  const modelForm = ctx.configForms.get(MODEL_NS);
  try {
    const disposeRemote = await ctx.remote.$mount(PROBE_REMOTE);
    ctx.effect(() => () => {
      void disposeRemote();
    }, "malko-prefs: malkoModels remote");
  } catch (error) {
    console.error("dsh-malko-prefs: could not mount the malkoModels remote \u2014", error);
  }
  const injected = () => ({
    hooks: { prefs: form, modelCatalog: modelForm },
    save: (field, value) => form.set(field, value),
    probe: (args) => {
      const remote = ctx.get("remote.malkoModels");
      if (remote === void 0) throw new Error("the malkoModels remote is not available");
      return remote.probe(args);
    },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC50cyIsICJzcmMvcmVtb3RlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgYnJvd3NlciBoYWxmLlxuICpcbiAqIEEgc2VsZi1jb250YWluZWQgc2V0dGluZ3Mgc2VjdGlvbiBmb3IgdGhlIHBlcnNvbmFsIGNvbXBhY3Rpb24gcHJlZmVyZW5jZXM6XG4gKiB0aHJlc2hvbGQgKGFic29sdXRlIHRva2VucyBvciByYXRpbyksIHJldGVudGlvbiwgYXV0b21hdGljICsgdHVybi1lbmRcbiAqIGNvbXBhY3Rpb24sIGFuZCB0aGUgc3VtbWFyaXphdGlvbiBtb2RlbC9yZWFzb25pbmcuIFJlYWRzIGFuZCB3cml0ZXMgdGhlXG4gKiBgbWFsa28tcHJlZnNgIGNvbmZpZyBmb3JtLCBhbmQgcmVhZHMgdGhlIGBsbG0tcGktYWlgIGZvcm0gdG8gcG9wdWxhdGUgdGhlXG4gKiBtb2RlbC9yZWFzb25pbmcgcGlja2Vycy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBTd2l0Y2ggfSBmcm9tICdAZGVlcHNlZWstYWkvZHNoLWNsaWVudC11aS1wcmltaXRpdmVzJ1xuaW1wb3J0IHsgcHJvYmVJbnZvY2F0aW9uIH0gZnJvbSAnLi9yZW1vdGUudHMnXG5cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2RzaC1tYWxrby1wcmVmcydcbmV4cG9ydCBjb25zdCBpbmplY3QgPSBbJ3Nsb3RzJywgJ2xvY2FsZScsICdjb25maWdGb3JtcycsICdyZW1vdGUnXVxuXG5jb25zdCBOUyA9ICdtYWxrby1wcmVmcydcbmNvbnN0IE1PREVMX05TID0gJ2xsbS1waS1haSdcbmNvbnN0IExPQ0FMRV9OUyA9ICdzZXR0aW5ncy5tYWxrby1wcmVmcydcbmNvbnN0IFNMT1QgPSAnc2V0dGluZ3Muc2VjdGlvbidcblxuLyoqIFN0cmljdC1jb2RlYyBzdHViOiB0aGUgYnJvd3NlciBuZXZlciBkZWNvZGVzIGl0cyBvd24gYXJndW1lbnRzLiAqL1xuY29uc3QgaWRlbnRpdHlTY2hlbWEgPSAoKSA9PiAoeyBwYXJzZTogKHZhbHVlKSA9PiB2YWx1ZSB9KVxuXG4vKiogQnJvd3NlciBjb250cmlidXRpb24gbW91bnRlZCB0aHJvdWdoIGBjdHgucmVtb3RlLiRtb3VudCgpYC4gKi9cbmNvbnN0IFBST0JFX1JFTU9URSA9IHtcbiAgcGFja2FnZTogJ2RzaC1tYWxrby1wcmVmcycsXG4gIGRlc2NyaXB0b3JzOiBbcHJvYmVJbnZvY2F0aW9uKGlkZW50aXR5U2NoZW1hLCBpZGVudGl0eVNjaGVtYSldLFxufVxuXG5jb25zdCBlbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnRcblxuY29uc3QgZW4gPSB7XG4gIHRpdGxlOiBcIk1hbGtvJ3MgcHJlZnNcIixcbiAgaW50cm86ICdUdW5hYmxlIGNvbXBhbmlvbiB0byB0aGUgb2ZmaWNpYWwgY29tcGFjdGlvbiBlbmdpbmUuJyxcbiAgdGhyZXNob2xkVGl0bGU6ICdDb21wYWN0aW9uIHRocmVzaG9sZCcsXG4gIHRocmVzaG9sZFRva2VuczogJ1RocmVzaG9sZCAodG9rZW5zKScsXG4gIHRocmVzaG9sZFRva2Vuc0hpbnQ6ICdBYnNvbHV0ZSBwcmVzc3VyZSBpbiB0b2tlbnMsIGUuZy4gMTMwayBvciAxMzBLLiBFbXB0eS8wID0gdXNlIHRoZSByYXRpbyBiZWxvdy4nLFxuICBjb250ZXh0V2luZG93OiAnQ29udGV4dCB3aW5kb3cgKHRva2VucyknLFxuICBjb250ZXh0V2luZG93SGludDogJ1dpbmRvdyB0aGUgYWJzb2x1dGUgdGhyZXNob2xkIGlzIGV4cHJlc3NlZCBhZ2FpbnN0IChlLmcuIDIwMGspLiAwID0gZGVyaXZlIG5vdGhpbmcgKHJhdGlvIG9ubHkpLicsXG4gIHRocmVzaG9sZFJhdGlvOiAnVGhyZXNob2xkIHJhdGlvJyxcbiAgdGhyZXNob2xkUmF0aW9IaW50OiAnVXNlZCB3aGVuIHRoZSBhYnNvbHV0ZSB0aHJlc2hvbGQgaXMgZW1wdHkgKDAuOCA9IDgwJSBvZiB0aGUgd2luZG93KS4nLFxuICBoZWFkcm9vbTogJ0hlYWRyb29tICh0b2tlbnMpJyxcbiAgaGVhZHJvb21IaW50OiAnUmVzZXJ2ZWQgb24gdG9wIG9mIHRoZSBvdXRwdXQgY2FwLiBUaGUgb2ZmaWNpYWwgZGVmYXVsdCAoNjU1MzYpIGNhcHMgdGhlIHRyaWdnZXIgd2VsbCBiZWxvdyA4MCUuJyxcbiAgcmV0ZW50aW9uVGl0bGU6ICdSZXRlbnRpb24nLFxuICByZXRhaW5Ub2tlbnM6ICdLZWVwIGxhc3QgKHRva2VucyknLFxuICByZXRhaW5Ub2tlbnNIaW50OiAnVmVyYmF0aW0gcmVjZW50LWNvbnRleHQgYnVkZ2V0LCBlLmcuIDMyay4gRW1wdHkvMCA9IHVzZSB0aGUgcmF0aW8gYmVsb3cuJyxcbiAgcmV0YWluUmF0aW86ICdLZWVwIHJhdGlvJyxcbiAgYmVoYXZpb3VyVGl0bGU6ICdCZWhhdmlvdXInLFxuICBhdXRvOiAnQXV0b21hdGljIGNvbXBhY3Rpb24nLFxuICBhdXRvSGludDogJ09mZmljaWFsIGJldHdlZW4tc3RlcCBwcmVzc3VyZSBjb21wYWN0aW9uIGFuZCBjb250ZXh0LW92ZXJmbG93IHJlY292ZXJ5LicsXG4gIHR1cm5FbmQ6ICdDb21wYWN0IGF0IGVuZCBvZiB0dXJuJyxcbiAgdHVybkVuZEhpbnQ6ICdSdW5zIG9uZSBtb3JlIGNvbXBhY3Rpb24gd2hlbiB0aGUgYWdlbnQgZ29lcyBpZGxlLicsXG4gIHN1bW1hcml6YXRpb25UaXRsZTogJ1N1bW1hcml6YXRpb24nLFxuICBzdW1tYXJpemF0aW9uTW9kZTogJ01vZGVsJyxcbiAgbW9kZVNlc3Npb246ICdTZXNzaW9uIG1vZGVsJyxcbiAgbW9kZUN1c3RvbTogJ0N1c3RvbSBtb2RlbCcsXG4gIHByb3ZpZGVyOiAnUHJvdmlkZXInLFxuICBtb2RlbDogJ01vZGVsJyxcbiAgcmVhc29uaW5nOiAnUmVhc29uaW5nJyxcbiAgcmVhc29uaW5nRGVmYXVsdDogJ0RlZmF1bHQnLFxuICByZWFzb25pbmdPZmY6ICdPZmYnLFxuICBtYXhUb2tlbnM6ICdTdW1tYXJ5IG91dHB1dCBjYXAgKHRva2VucyknLFxuICBhZHZhbmNlZFRpdGxlOiAnQWR2YW5jZWQnLFxuICBjb21wYWN0aW9uUmV0cmllczogJ0V4dHJhIGNvbXBhY3Rpb24gYXR0ZW1wdHMnLFxuICBtYXhPdmVyZmxvd1JldHJpZXM6ICdPdmVyZmxvdyByZWNvdmVyeSBhdHRlbXB0cycsXG4gIG1vZGVsc1RpdGxlOiAnbGxhbWEuY3BwIG1vZGVscycsXG4gIG1vZGVsc0ludHJvOiAnUmVhZCBjb250ZXh0IHdpbmRvdyBhbmQgaW5wdXQgbW9kYWxpdGllcyBmcm9tIHRoZSBzZXJ2ZXIgYW5kIGZpbGwgdGhlIG1vZGVsIGVudHJpZXMgb2YgYSBwaS1haSBwcm92aWRlci4nLFxuICBlbnJpY2g6ICdFbnJpY2ggZnJvbSBzZXJ2ZXInLFxuICBlbnJpY2hpbmc6ICdFbnJpY2hpbmdcXHUyMDI2JyxcbiAgbm9CYXNlVXJsOiAnTm8gZW5kcG9pbnQgY29uZmlndXJlZCBmb3IgdGhpcyBwcm92aWRlci4nLFxuICBlbnJpY2hlZDogJ0VucmljaGVkIHtjb3VudH0gbW9kZWwocykuJyxcbiAgc2F2ZTogJ1NhdmUnLFxuICBzYXZlZDogJ1NhdmVkLicsXG4gIGludmFsaWRUb2tlbjogJ0VudGVyIGEgbnVtYmVyIG9yIGEgay9NIHN1ZmZpeCB2YWx1ZSAoZS5nLiAxMzBrKS4nLFxuICBlcnJvclByZWZpeDogJ0Vycm9yOiAnLFxuICB1bmF2YWlsYWJsZTogJ1RoaXMgc2V0dGluZyBpcyBub3QgYXZhaWxhYmxlIGZyb20gdGhpcyBjbGllbnQuJyxcbiAgbG9hZGluZzogJ0xvYWRpbmdcXHUyMDI2Jyxcbn1cblxuY29uc3QgemggPSB7XG4gIHRpdGxlOiAnTWFsa28gXFx1NTA0ZlxcdTU5N2QnLFxuICBpbnRybzogJ1xcdTViOThcXHU2NWI5XFx1NTM4YlxcdTdmMjlcXHU1ZjE1XFx1NjRjZVxcdTc2ODRcXHU1M2VmXFx1OGMwM1xcdTRmMzRcXHU3NTFmXFx1MzAwMicsXG4gIHRocmVzaG9sZFRpdGxlOiAnXFx1NTM4YlxcdTdmMjlcXHU5NjAwXFx1NTAzYycsXG4gIHRocmVzaG9sZFRva2VuczogJ1xcdTk2MDBcXHU1MDNjXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICB0aHJlc2hvbGRUb2tlbnNIaW50OiAnXFx1N2VkZFxcdTViZjkgdG9rZW4gXFx1OTYwMFxcdTUwM2NcXHVmZjBjXFx1NTk4MiAxMzBrXFx1MzAwMlxcdTc1NTlcXHU3YTdhLzAgPSBcXHU3NTI4XFx1NGUwYlxcdTY1YjlcXHU2YmQ0XFx1NGY4YlxcdTMwMDInLFxuICBjb250ZXh0V2luZG93OiAnXFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1N2E5N1xcdTUzZTNcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIGNvbnRleHRXaW5kb3dIaW50OiAnXFx1N2VkZFxcdTViZjlcXHU5NjAwXFx1NTAzY1xcdTYyNDBcXHU0ZjlkXFx1NjM2ZVxcdTc2ODRcXHU3YTk3XFx1NTNlM1xcdWZmMDhcXHU1OTgyIDIwMGtcXHVmZjA5XFx1MzAwMjAgPSBcXHU1M2VhXFx1NzUyOFxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIHRocmVzaG9sZFJhdGlvOiAnXFx1OTYwMFxcdTUwM2NcXHU2YmQ0XFx1NGY4YicsXG4gIHRocmVzaG9sZFJhdGlvSGludDogJ1xcdTVmNTNcXHU3ZWRkXFx1NWJmOVxcdTk2MDBcXHU1MDNjXFx1NGUzYVxcdTdhN2FcXHU2NWY2XFx1NGY3ZlxcdTc1MjhcXHVmZjA4MC44ID0gXFx1N2E5N1xcdTUzZTNcXHU3Njg0IDgwJVxcdWZmMDlcXHUzMDAyJyxcbiAgaGVhZHJvb206ICdcXHU5ODg0XFx1NzU1OVxcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgaGVhZHJvb21IaW50OiAnXFx1NTcyOFxcdThmOTNcXHU1MWZhXFx1OTg4NFxcdTdiOTdcXHU0ZTRiXFx1NTkxNlxcdTUxOGRcXHU5ODg0XFx1NzU1OVxcdTc2ODRcXHU5MWNmXFx1MzAwMlxcdTViOThcXHU2NWI5XFx1OWVkOFxcdThiYTQgNjU1MzYgXFx1NGYxYVxcdTYyOGFcXHU4OWU2XFx1NTNkMVxcdTcwYjlcXHU2MmM5XFx1NTIzMCA4MCUgXFx1NGVlNVxcdTRlMGJcXHUzMDAyJyxcbiAgcmV0ZW50aW9uVGl0bGU6ICdcXHU0ZmRkXFx1NzU1OScsXG4gIHJldGFpblRva2VuczogJ1xcdTRmZGRcXHU3NTU5XFx1NjcwMFxcdThmZDFcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIHJldGFpblRva2Vuc0hpbnQ6ICdcXHU5MDEwXFx1NWI1N1xcdTRmZGRcXHU3NTU5XFx1NzY4NFxcdThmZDFcXHU2NzFmXFx1OTg4NFxcdTdiOTdcXHVmZjBjXFx1NTk4MiAzMmtcXHUzMDAyXFx1NzU1OVxcdTdhN2EvMCA9IFxcdTc1MjhcXHU0ZTBiXFx1NjViOVxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIHJldGFpblJhdGlvOiAnXFx1NGZkZFxcdTc1NTlcXHU2YmQ0XFx1NGY4YicsXG4gIGJlaGF2aW91clRpdGxlOiAnXFx1ODg0Y1xcdTRlM2EnLFxuICBhdXRvOiAnXFx1ODFlYVxcdTUyYThcXHU1MzhiXFx1N2YyOScsXG4gIGF1dG9IaW50OiAnXFx1NWI5OFxcdTY1YjlcXHU3Njg0XFx1NmI2NVxcdTk1ZjRcXHU1MzhiXFx1NTI5YlxcdTUzOGJcXHU3ZjI5XFx1NGUwZVxcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTZlYTJcXHU1MWZhXFx1NjA2MlxcdTU5MGRcXHUzMDAyJyxcbiAgdHVybkVuZDogJ1xcdThmNmVcXHU2NzJiXFx1NTM4YlxcdTdmMjknLFxuICB0dXJuRW5kSGludDogJ1xcdTRlZTNcXHU3NDA2XFx1OGY2Y1xcdTRlM2EgaWRsZSBcXHU2NWY2XFx1NTE4ZFxcdTUzOGJcXHU3ZjI5XFx1NGUwMFxcdTZiMjFcXHUzMDAyJyxcbiAgc3VtbWFyaXphdGlvblRpdGxlOiAnXFx1NjQ1OFxcdTg5ODEnLFxuICBzdW1tYXJpemF0aW9uTW9kZTogJ1xcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZVNlc3Npb246ICdcXHU0ZjFhXFx1OGJkZFxcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZUN1c3RvbTogJ1xcdTgxZWFcXHU1YjlhXFx1NGU0OVxcdTZhMjFcXHU1NzhiJyxcbiAgcHJvdmlkZXI6ICdcXHU2M2QwXFx1NGY5YlxcdTU1NDYnLFxuICBtb2RlbDogJ1xcdTZhMjFcXHU1NzhiJyxcbiAgcmVhc29uaW5nOiAnXFx1NjAxZFxcdTgwMDNcXHU3ZWE3XFx1NTIyYicsXG4gIHJlYXNvbmluZ0RlZmF1bHQ6ICdcXHU5ZWQ4XFx1OGJhNCcsXG4gIHJlYXNvbmluZ09mZjogJ1xcdTUxNzNcXHU5NWVkJyxcbiAgbWF4VG9rZW5zOiAnXFx1NjQ1OFxcdTg5ODFcXHU4ZjkzXFx1NTFmYVxcdTRlMGFcXHU5NjUwXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICBhZHZhbmNlZFRpdGxlOiAnXFx1OWFkOFxcdTdlYTcnLFxuICBjb21wYWN0aW9uUmV0cmllczogJ1xcdTk4OWRcXHU1OTE2XFx1NTM4YlxcdTdmMjlcXHU1YzFkXFx1OGJkNScsXG4gIG1heE92ZXJmbG93UmV0cmllczogJ1xcdTZlYTJcXHU1MWZhXFx1NjA2MlxcdTU5MGRcXHU1YzFkXFx1OGJkNScsXG4gIG1vZGVsc1RpdGxlOiAnbGxhbWEuY3BwIFxcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZWxzSW50cm86ICdcXHU0ZWNlXFx1NjcwZFxcdTUyYTFcXHU1NjY4XFx1OGJmYlxcdTUzZDZcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU3YTk3XFx1NTNlM1xcdTRlMGVcXHU4ZjkzXFx1NTE2NVxcdTZhMjFcXHU2MDAxXFx1ZmYwY1xcdTVlNzZcXHU1ODZiXFx1NTE0NSBwaS1haSBcXHU2M2QwXFx1NGY5YlxcdTU1NDZcXHU3Njg0XFx1NmEyMVxcdTU3OGJcXHU2NzYxXFx1NzZlZVxcdTMwMDInLFxuICBlbnJpY2g6ICdcXHU0ZWNlXFx1NjcwZFxcdTUyYTFcXHU1NjY4XFx1NWJjY1xcdTUzMTYnLFxuICBlbnJpY2hpbmc6ICdcXHU2YjYzXFx1NTcyOFxcdTViY2NcXHU1MzE2XFx1MjAyNicsXG4gIG5vQmFzZVVybDogJ1xcdThiZTVcXHU2M2QwXFx1NGY5YlxcdTU1NDZcXHU2NzJhXFx1OTE0ZFxcdTdmNmVcXHU3YWVmXFx1NzBiOVxcdTMwMDInLFxuICBlbnJpY2hlZDogJ1xcdTVkZjJcXHU1YmNjXFx1NTMxNiB7Y291bnR9IFxcdTRlMmFcXHU2YTIxXFx1NTc4YlxcdTMwMDInLFxuICBzYXZlOiAnXFx1NGZkZFxcdTViNTgnLFxuICBzYXZlZDogJ1xcdTVkZjJcXHU0ZmRkXFx1NWI1OFxcdTMwMDInLFxuICBpbnZhbGlkVG9rZW46ICdcXHU4YmY3XFx1OGY5M1xcdTUxNjVcXHU2NTcwXFx1NWI1N1xcdTYyMTZcXHU1ZTI2IGsvTSBcXHU1NDBlXFx1N2YwMFxcdTc2ODRcXHU1MDNjXFx1ZmYwOFxcdTU5ODIgMTMwa1xcdWZmMDlcXHUzMDAyJyxcbiAgZXJyb3JQcmVmaXg6ICdcXHU5NTE5XFx1OGJlZlxcdWZmMWEgJyxcbiAgdW5hdmFpbGFibGU6ICdcXHU2YjY0XFx1OGJiZVxcdTdmNmVcXHU1NzI4XFx1NWY1M1xcdTUyNGRcXHU1YmEyXFx1NjIzN1xcdTdhZWZcXHU0ZTBkXFx1NTNlZlxcdTc1MjhcXHUzMDAyJyxcbiAgbG9hZGluZzogJ1xcdTUyYTBcXHU4ZjdkXFx1NGUyZFxcdTIwMjYnLFxufVxuXG4vKiogUGFyc2UgYSBodW1hbiB0b2tlbiBjb3VudCAoYDEzMGtgLCBgMS41bWAsIGAxMzAwMDBgKS4gKi9cbmZ1bmN0aW9uIHBhcnNlVG9rZW5UZXh0KHRleHQpIHtcbiAgY29uc3QgcmF3ID0gU3RyaW5nKHRleHQgPz8gJycpLnRyaW0oKS5yZXBsYWNlKC9bXFxzX10vZywgJycpXG4gIGlmIChyYXcgPT09ICcnKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IG1hdGNoID0gL14oXFxkKyg/OlsuLF1cXGQrKT8pKFtrS21NXSk/JC8uZXhlYyhyYXcpXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBiYXNlID0gTnVtYmVyKG1hdGNoWzFdLnJlcGxhY2UoJywnLCAnLicpKVxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShiYXNlKSB8fCBiYXNlIDwgMCkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBzY2FsZSA9IG1hdGNoWzJdID09PSB1bmRlZmluZWQgPyAxIDogbWF0Y2hbMl0udG9Mb3dlckNhc2UoKSA9PT0gJ2snID8gMTAwMCA6IDEwMDAwMDBcbiAgcmV0dXJuIE1hdGgucm91bmQoYmFzZSAqIHNjYWxlKVxufVxuXG4vKiogQnVpbGQgYHsgcHJvdmlkZXIsIG1vZGVsLCBuYW1lLCBsZXZlbHMgfWAgcm93cyBmcm9tIHRoZSBwaS1haSBjb25maWcgdmFsdWUuICovXG5mdW5jdGlvbiBidWlsZENhdGFsb2cocHJvdmlkZXJzKSB7XG4gIGNvbnN0IHJvd3MgPSBbXVxuICBpZiAocHJvdmlkZXJzID09PSBudWxsIHx8IHR5cGVvZiBwcm92aWRlcnMgIT09ICdvYmplY3QnKSByZXR1cm4gcm93c1xuICBmb3IgKGNvbnN0IFtwcm92aWRlciwgcHJvZmlsZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzKSkge1xuICAgIGNvbnN0IG1vZGVscyA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkocHJvZmlsZS5tb2RlbHMpID8gcHJvZmlsZS5tb2RlbHMgOiBbXVxuICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgICBpZiAobW9kZWwgPT09IG51bGwgfHwgdHlwZW9mIG1vZGVsICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgbW9kZWwuaWQgIT09ICdzdHJpbmcnKSBjb250aW51ZVxuICAgICAgY29uc3QgZWZmb3J0cyA9IG1vZGVsLnJlYXNvbmluZ0VmZm9ydHNcbiAgICAgIGNvbnN0IGxldmVscyA9IGVmZm9ydHMgPT09IGZhbHNlID8gW10gOiAoZWZmb3J0cyAhPT0gbnVsbCAmJiB0eXBlb2YgZWZmb3J0cyA9PT0gJ29iamVjdCcgPyBPYmplY3Qua2V5cyhlZmZvcnRzKSA6IFtdKVxuICAgICAgcm93cy5wdXNoKHsgcHJvdmlkZXIsIG1vZGVsOiBtb2RlbC5pZCwgbmFtZTogdHlwZW9mIG1vZGVsLm5hbWUgPT09ICdzdHJpbmcnICYmIG1vZGVsLm5hbWUgIT09ICcnID8gbW9kZWwubmFtZSA6IG1vZGVsLmlkLCBsZXZlbHMgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJvd3Ncbn1cblxuY29uc3QgUyA9IHtcbiAgd3JhcDogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDQsIG1heFdpZHRoOiA2ODAsIHBhZGRpbmdUb3A6IDQgfSxcbiAgZ3JvdXA6IHsgbWFyZ2luVG9wOiAxMCwgcGFkZGluZ1RvcDogMTAsIGJvcmRlclRvcDogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDMpJyB9LFxuICBncm91cFRpdGxlOiB7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiAyIH0sXG4gIGxhYmVsOiB7IGRpc3BsYXk6ICdibG9jaycsIGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiA2LCBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScgfSxcbiAgaGludDogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIsIG1hcmdpbjogJzRweCAwIDEycHgnIH0sXG4gIGlucHV0OiB7XG4gICAgaGVpZ2h0OiAzMixcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGJvcmRlcjogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDQpJyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBiYWNrZ3JvdW5kOiAndmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTEpJyxcbiAgICBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgfSxcbiAgc2VsZWN0OiB7IGN1cnNvcjogJ3BvaW50ZXInIH0sXG4gIHJvd1R3bzogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMTIgfSxcbiAgY29sOiB7IGZsZXg6IDEsIG1pbldpZHRoOiAwIH0sXG4gIHRvZ2dsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEwLCBtYXJnaW5Cb3R0b206IDEyIH0sXG4gIHRvZ2dsZVRleHQ6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAyIH0sXG4gIHRvZ2dsZUxhYmVsOiB7IGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknIH0sXG4gIGVycm9yOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnksICNjMDApJywgZm9udFNpemU6IDEyLCBtYXJnaW5Ub3A6IDIgfSxcbn1cblxuZnVuY3Rpb24gUHJlZnNTZWN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHsgdCwgdXNlUHJlZnMsIHVzZU1vZGVsQ2F0YWxvZywgc2F2ZSwgcHJvYmUsIHdyaXRlTW9kZWxzIH0gPSBwcm9wc1xuICBjb25zdCBzbmFwID0gdXNlUHJlZnMoKHMpID0+IHMpXG4gIGNvbnN0IGNhdGFsb2dTbmFwID0gdXNlTW9kZWxDYXRhbG9nKChzKSA9PiBzKVxuICBjb25zdCB2YWx1ZSA9IHNuYXAgIT09IG51bGwgJiYgc25hcCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzbmFwLnZhbHVlID09PSAnb2JqZWN0JyAmJiBzbmFwLnZhbHVlICE9PSBudWxsID8gc25hcC52YWx1ZSA6IHt9XG4gIGNvbnN0IHByb3ZpZGVycyA9IGNhdGFsb2dTbmFwICE9PSBudWxsICYmIGNhdGFsb2dTbmFwICE9PSB1bmRlZmluZWQgJiYgY2F0YWxvZ1NuYXAudmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIGNhdGFsb2dTbmFwLnZhbHVlID09PSAnb2JqZWN0JyA/IGNhdGFsb2dTbmFwLnZhbHVlLnByb3ZpZGVycyA6IHVuZGVmaW5lZFxuICBjb25zdCBjYXRhbG9nID0gYnVpbGRDYXRhbG9nKHByb3ZpZGVycylcbiAgY29uc3Qgc3RhdHVzID0gc25hcCAhPT0gbnVsbCAmJiBzbmFwICE9PSB1bmRlZmluZWQgPyBzbmFwLnN0YXR1cyA6ICdsb2FkaW5nJ1xuICBjb25zdCB3cml0YWJsZSA9ICEhKHNuYXAgJiYgc25hcC53cml0YWJsZSlcblxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+ICh7XG4gICAgdGhyZXNob2xkVG9rZW5zOiB2YWx1ZS50aHJlc2hvbGRUb2tlbnMgPyBTdHJpbmcodmFsdWUudGhyZXNob2xkVG9rZW5zKSA6ICcnLFxuICAgIGNvbnRleHRXaW5kb3dUb2tlbnM6IHZhbHVlLmNvbnRleHRXaW5kb3dUb2tlbnMgPyBTdHJpbmcodmFsdWUuY29udGV4dFdpbmRvd1Rva2VucykgOiAnJyxcbiAgICByZXRhaW5Ub2tlbnM6IHZhbHVlLnJldGFpblRva2VucyA/IFN0cmluZyh2YWx1ZS5yZXRhaW5Ub2tlbnMpIDogJycsXG4gIH0pKVxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2VucmljaE5vdGUsIHNldEVucmljaE5vdGVdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFtidXN5Um91dGUsIHNldEJ1c3lSb3V0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgdmFsdWVSZWYgPSBzbmFwICYmIHNuYXAudmFsdWVcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREcmFmdCh7XG4gICAgICB0aHJlc2hvbGRUb2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLnRocmVzaG9sZFRva2VucyA/IFN0cmluZyh2YWx1ZVJlZi50aHJlc2hvbGRUb2tlbnMpIDogJycsXG4gICAgICBjb250ZXh0V2luZG93VG9rZW5zOiB2YWx1ZVJlZiAmJiB2YWx1ZVJlZi5jb250ZXh0V2luZG93VG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLmNvbnRleHRXaW5kb3dUb2tlbnMpIDogJycsXG4gICAgICByZXRhaW5Ub2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLnJldGFpblRva2VucyA/IFN0cmluZyh2YWx1ZVJlZi5yZXRhaW5Ub2tlbnMpIDogJycsXG4gICAgfSlcbiAgICBzZXROb3RlKCcnKVxuICB9LCBbdmFsdWVSZWZdKVxuXG4gIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJykgcmV0dXJuIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnbG9hZGluZycpKVxuICBpZiAoc3RhdHVzID09PSAndW5hdmFpbGFibGUnKSByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCd1bmF2YWlsYWJsZScpKVxuXG4gIGNvbnN0IGRpc2FibGVkID0gIXdyaXRhYmxlXG4gIGNvbnN0IHdyaXRlID0gKGZpZWxkLCB2KSA9PiB7XG4gICAgc2V0Tm90ZSgnJylcbiAgICBQcm9taXNlLnJlc29sdmUoc2F2ZShmaWVsZCwgdikpLmNhdGNoKChlcnJvcikgPT4gc2V0Tm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKSlcbiAgfVxuICBjb25zdCBjb21taXRUb2tlbnMgPSAoZmllbGQsIHRleHQpID0+IHtcbiAgICBpZiAodGV4dC50cmltKCkgPT09ICcnKSB7IHdyaXRlKGZpZWxkLCAwKTsgcmV0dXJuIH1cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVRva2VuVGV4dCh0ZXh0KVxuICAgIGlmIChwYXJzZWQgPT09IHVuZGVmaW5lZCkgeyBzZXROb3RlKHQoJ2ludmFsaWRUb2tlbicpKTsgcmV0dXJuIH1cbiAgICB3cml0ZShmaWVsZCwgcGFyc2VkKVxuICB9XG4gIGNvbnN0IG51bSA9IChmaWVsZCwgZmFsbGJhY2spID0+ICh7XG4gICAgdmFsdWU6IFN0cmluZyh2YWx1ZVtmaWVsZF0gIT09IHVuZGVmaW5lZCA/IHZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrKSxcbiAgICBkaXNhYmxlZCxcbiAgICBvbkNoYW5nZTogKGUpID0+IHsgY29uc3QgbiA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7IGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHdyaXRlKGZpZWxkLCBuKSB9LFxuICB9KVxuICBjb25zdCBzd2l0Y2hGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGUsIGtleTogZmllbGQgfSxcbiAgICBlbChTd2l0Y2gsIHtcbiAgICAgIGNoZWNrZWQ6IHZhbHVlW2ZpZWxkXSAhPT0gdW5kZWZpbmVkID8gISF2YWx1ZVtmaWVsZF0gOiBmYWxsYmFjayxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFiZWw6IHQobGFiZWxLZXkpLFxuICAgICAgb25DaGFuZ2U6IChuZXh0KSA9PiB3cml0ZShmaWVsZCwgbmV4dCksXG4gICAgfSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudG9nZ2xlVGV4dCB9LFxuICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiBTLnRvZ2dsZUxhYmVsIH0sIHQobGFiZWxLZXkpKSxcbiAgICAgIGhpbnRLZXkgPyBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyIH0gfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICAgICksXG4gIClcbiAgY29uc3QgdGV4dEZpZWxkID0gKGxhYmVsS2V5LCBmaWVsZCwgaGludEtleSkgPT4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6IGZpZWxkIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgIHR5cGU6ICd0ZXh0Jywgc3R5bGU6IFMuaW5wdXQsIGRpc2FibGVkLFxuICAgICAgdmFsdWU6IGRyYWZ0W2ZpZWxkXSxcbiAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gc2V0RHJhZnQoKGQpID0+ICh7IC4uLmQsIFtmaWVsZF06IGUudGFyZ2V0LnZhbHVlIH0pKSxcbiAgICAgIG9uQmx1cjogKCkgPT4gY29tbWl0VG9rZW5zKGZpZWxkLCBkcmFmdFtmaWVsZF0pLFxuICAgICAgb25LZXlEb3duOiAoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGNvbW1pdFRva2VucyhmaWVsZCwgZHJhZnRbZmllbGRdKSB9LFxuICAgIH0pLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdChoaW50S2V5KSksXG4gIClcbiAgY29uc3QgbnVtYmVyRmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBoaW50S2V5LCBmYWxsYmFjaykgPT4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6IGZpZWxkIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgIGVsKCdpbnB1dCcsIHsgdHlwZTogJ251bWJlcicsIHN0ZXA6ICdhbnknLCBzdHlsZTogUy5pbnB1dCwgLi4ubnVtKGZpZWxkLCBmYWxsYmFjaykgfSksXG4gICAgaGludEtleSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICApXG5cbiAgY29uc3QgZW5yaWNoUHJvdmlkZXIgPSBhc3luYyAocm91dGVJZCwgcHJvZmlsZSkgPT4ge1xuICAgIHNldEJ1c3lSb3V0ZShyb3V0ZUlkKVxuICAgIHNldEVucmljaE5vdGUoJycpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvYmUoeyBhcmdzOiB7IGJhc2VVUkw6IHByb2ZpbGUuYmFzZVVSTCB9IH0pXG4gICAgICBjb25zdCBmb3VuZCA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2U/Lm1vZGVscykgPyByZXNwb25zZS5tb2RlbHMgOiBbXVxuICAgICAgY29uc3QgYnlJZCA9IG5ldyBNYXAoZm91bmQubWFwKChtKSA9PiBbbS5pZCwgbV0pKVxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBBcnJheS5pc0FycmF5KHByb2ZpbGUubW9kZWxzKSA/IHByb2ZpbGUubW9kZWxzIDogW11cbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nLmxlbmd0aCA9PT0gMFxuICAgICAgICA/IGZvdW5kLm1hcCgobSkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBtLmlkLFxuICAgICAgICAgICAgbmFtZTogbS5uYW1lLFxuICAgICAgICAgICAgLi4uKG0uY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGNvbnRleHRXaW5kb3c6IG0uY29udGV4dFdpbmRvdyB9KSxcbiAgICAgICAgICAgIC4uLihtLm1heFRva2VucyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IG1heFRva2VuczogbS5tYXhUb2tlbnMgfSksXG4gICAgICAgICAgICAuLi4obS5pbnB1dCA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGlucHV0OiBtLmlucHV0IH0pLFxuICAgICAgICAgIH0pKVxuICAgICAgICA6IGV4aXN0aW5nLm1hcCgobSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gYnlJZC5nZXQobS5pZClcbiAgICAgICAgICAgIGlmIChoaXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG1cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB7IC4uLm0gfVxuICAgICAgICAgICAgaWYgKG5leHQuY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkICYmIGhpdC5jb250ZXh0V2luZG93ICE9PSB1bmRlZmluZWQpIG5leHQuY29udGV4dFdpbmRvdyA9IGhpdC5jb250ZXh0V2luZG93XG4gICAgICAgICAgICBpZiAobmV4dC5pbnB1dCA9PT0gdW5kZWZpbmVkICYmIGhpdC5pbnB1dCAhPT0gdW5kZWZpbmVkKSBuZXh0LmlucHV0ID0gaGl0LmlucHV0XG4gICAgICAgICAgICByZXR1cm4gbmV4dFxuICAgICAgICAgIH0pXG4gICAgICBhd2FpdCB3cml0ZU1vZGVscyhyb3V0ZUlkLCBtZXJnZWQpXG4gICAgICBzZXRFbnJpY2hOb3RlKHQoJ2VucmljaGVkJywgeyBjb3VudDogbWVyZ2VkLmxlbmd0aCB9KSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RW5yaWNoTm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRCdXN5Um91dGUoJycpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJvdmlkZXJSb3dzID0gT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzICE9PSBudWxsICYmIHR5cGVvZiBwcm92aWRlcnMgPT09ICdvYmplY3QnID8gcHJvdmlkZXJzIDoge30pLm1hcCgoW3JvdXRlSWQsIHByb2ZpbGVdKSA9PiB7XG4gICAgY29uc3QgYmFzZVVSTCA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9maWxlLmJhc2VVUkwgPT09ICdzdHJpbmcnID8gcHJvZmlsZS5iYXNlVVJMIDogJydcbiAgICByZXR1cm4gZWwoJ2RpdicsIHsga2V5OiByb3V0ZUlkLCBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogNiB9IH0sXG4gICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgZmxleDogMSwgbWluV2lkdGg6IDAsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sIGAke3JvdXRlSWR9JHtiYXNlVVJMID8gYCBcdTIwMTQgJHtiYXNlVVJMfWAgOiAnJ31gKSxcbiAgICAgIGJhc2VVUkxcbiAgICAgICAgPyBlbChCdXR0b24sIHtcbiAgICAgICAgICAgIHZhcmlhbnQ6ICdvdXRsaW5lJyxcbiAgICAgICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgICAgICBkaXNhYmxlZDogYnVzeVJvdXRlID09PSByb3V0ZUlkIHx8IGRpc2FibGVkLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4geyB2b2lkIGVucmljaFByb3ZpZGVyKHJvdXRlSWQsIHByb2ZpbGUpIH0sXG4gICAgICAgICAgfSwgYnVzeVJvdXRlID09PSByb3V0ZUlkID8gdCgnZW5yaWNoaW5nJykgOiB0KCdlbnJpY2gnKSlcbiAgICAgICAgOiBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBmbGV4U2hyaW5rOiAwIH0gfSwgdCgnbm9CYXNlVXJsJykpLFxuICAgIClcbiAgfSlcblxuICAvLyBTdW1tYXJpemF0aW9uIG1vZGVsL3JlYXNvbmluZyBwaWNrZXJzLlxuICBjb25zdCBtb2RlID0gdmFsdWUuc3VtbWFyaXphdGlvbk1vZGUgPT09ICdjdXN0b20nID8gJ2N1c3RvbScgOiAnc2Vzc2lvbidcbiAgY29uc3QgcHJvdmlkZXJOYW1lcyA9IFsuLi5uZXcgU2V0KGNhdGFsb2cubWFwKChyKSA9PiByLnByb3ZpZGVyKSldXG4gIGNvbnN0IHNlbGVjdGVkUHJvdmlkZXIgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUHJvdmlkZXIgfHwgcHJvdmlkZXJOYW1lc1swXSB8fCAnJ1xuICBjb25zdCBtb2RlbHNGb3JQcm92aWRlciA9IGNhdGFsb2cuZmlsdGVyKChyKSA9PiByLnByb3ZpZGVyID09PSBzZWxlY3RlZFByb3ZpZGVyKVxuICBjb25zdCBzZWxlY3RlZFJvdyA9IG1vZGVsc0ZvclByb3ZpZGVyLmZpbmQoKHIpID0+IHIubW9kZWwgPT09IHZhbHVlLnN1bW1hcml6YXRpb25Nb2RlbCkgfHwgbW9kZWxzRm9yUHJvdmlkZXJbMF1cbiAgY29uc3QgbGV2ZWxTZXQgPSBbJ2RlZmF1bHQnLCAnb2ZmJywgLi4uKHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRSb3cubGV2ZWxzIDogW10pXVxuICBjb25zdCByZWFzb25pbmcgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUmVhc29uaW5nIHx8ICdkZWZhdWx0J1xuICBjb25zdCBvcHRpb25zID0gKHBhaXJzLCBzZWxlY3RlZCkgPT4gcGFpcnMubWFwKChbdiwgbGFiZWxdKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHYsIHZhbHVlOiB2IH0sIGxhYmVsKSlcblxuICBjb25zdCBzdW1tYXJpemF0aW9uID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAnbW9kZScgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ3N1bW1hcml6YXRpb25Nb2RlJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHsgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBtb2RlLCBvbkNoYW5nZTogKGUpID0+IHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZScsIGUudGFyZ2V0LnZhbHVlKSB9LFxuICAgICAgICBvcHRpb25zKFtbJ3Nlc3Npb24nLCB0KCdtb2RlU2Vzc2lvbicpXSwgWydjdXN0b20nLCB0KCdtb2RlQ3VzdG9tJyldXSwgbW9kZSkpLFxuICAgICksXG4gIF1cbiAgaWYgKG1vZGUgPT09ICdjdXN0b20nKSB7XG4gICAgc3VtbWFyaXphdGlvbi5wdXNoKGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAncHJvdmlkZXInIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdwcm92aWRlcicpKSxcbiAgICAgIGVsKCdzZWxlY3QnLCB7XG4gICAgICAgIHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLCB2YWx1ZTogc2VsZWN0ZWRQcm92aWRlcixcbiAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV4dCA9IGNhdGFsb2cuZmluZCgocikgPT4gci5wcm92aWRlciA9PT0gZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgd3JpdGUoJ3N1bW1hcml6YXRpb25Qcm92aWRlcicsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIGlmIChuZXh0KSB3cml0ZSgnc3VtbWFyaXphdGlvbk1vZGVsJywgbmV4dC5tb2RlbClcbiAgICAgICAgICB3cml0ZSgnc3VtbWFyaXphdGlvblJlYXNvbmluZycsICdkZWZhdWx0JylcbiAgICAgICAgfSxcbiAgICAgIH0sIHByb3ZpZGVyTmFtZXMubWFwKChwKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHAsIHZhbHVlOiBwIH0sIHApKSksXG4gICAgKSlcbiAgICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdtb2RlbCcgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ21vZGVsJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHtcbiAgICAgICAgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsXG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZFJvdyA/IHNlbGVjdGVkUm93Lm1vZGVsIDogJycsXG4gICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4geyB3cml0ZSgnc3VtbWFyaXphdGlvbk1vZGVsJywgZS50YXJnZXQudmFsdWUpOyB3cml0ZSgnc3VtbWFyaXphdGlvblJlYXNvbmluZycsICdkZWZhdWx0JykgfSxcbiAgICAgIH0sIG1vZGVsc0ZvclByb3ZpZGVyLm1hcCgocikgPT4gZWwoJ29wdGlvbicsIHsga2V5OiByLm1vZGVsLCB2YWx1ZTogci5tb2RlbCB9LCByLm5hbWUpKSksXG4gICAgKSlcbiAgfVxuICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdyZWFzb25pbmcnIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgncmVhc29uaW5nJykpLFxuICAgIGVsKCdzZWxlY3QnLCB7IHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLCB2YWx1ZTogbGV2ZWxTZXQuaW5jbHVkZXMocmVhc29uaW5nKSA/IHJlYXNvbmluZyA6ICdkZWZhdWx0Jywgb25DaGFuZ2U6IChlKSA9PiB3cml0ZSgnc3VtbWFyaXphdGlvblJlYXNvbmluZycsIGUudGFyZ2V0LnZhbHVlKSB9LFxuICAgICAgbGV2ZWxTZXQubWFwKChsdikgPT4gZWwoJ29wdGlvbicsIHsga2V5OiBsdiwgdmFsdWU6IGx2IH0sIGx2ID09PSAnZGVmYXVsdCcgPyB0KCdyZWFzb25pbmdEZWZhdWx0JykgOiBsdiA9PT0gJ29mZicgPyB0KCdyZWFzb25pbmdPZmYnKSA6IGx2KSkpLFxuICApKVxuXG4gIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogUy53cmFwIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCd0aXRsZScpKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ2ludHJvJykpLFxuXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgndGhyZXNob2xkVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgdGV4dEZpZWxkKCd0aHJlc2hvbGRUb2tlbnMnLCAndGhyZXNob2xkVG9rZW5zJywgJ3RocmVzaG9sZFRva2Vuc0hpbnQnKSxcbiAgICAgICAgdGV4dEZpZWxkKCdjb250ZXh0V2luZG93JywgJ2NvbnRleHRXaW5kb3dUb2tlbnMnLCAnY29udGV4dFdpbmRvd0hpbnQnKSxcbiAgICAgICksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ3RocmVzaG9sZFJhdGlvJywgJ3RocmVzaG9sZFJhdGlvJywgJ3RocmVzaG9sZFJhdGlvSGludCcsIDAuOCksXG4gICAgICAgIG51bWJlckZpZWxkKCdoZWFkcm9vbScsICdoZWFkcm9vbVRva2VucycsICdoZWFkcm9vbUhpbnQnLCAzMjc2OCksXG4gICAgICApLFxuICAgICksXG5cbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdyZXRlbnRpb25UaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LFxuICAgICAgICB0ZXh0RmllbGQoJ3JldGFpblRva2VucycsICdyZXRhaW5Ub2tlbnMnLCAncmV0YWluVG9rZW5zSGludCcpLFxuICAgICAgICBudW1iZXJGaWVsZCgncmV0YWluUmF0aW8nLCAncmV0YWluUmF0aW8nLCBudWxsLCAwLjE2KSxcbiAgICAgICksXG4gICAgKSxcblxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ2JlaGF2aW91clRpdGxlJykpLFxuICAgICAgc3dpdGNoRmllbGQoJ2F1dG8nLCAnYXV0bycsICdhdXRvSGludCcsIHRydWUpLFxuICAgICAgc3dpdGNoRmllbGQoJ3R1cm5FbmQnLCAndHVybkVuZENvbXBhY3Rpb25FbmFibGVkJywgJ3R1cm5FbmRIaW50JywgZmFsc2UpLFxuICAgICksXG5cbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdzdW1tYXJpemF0aW9uVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSwgc3VtbWFyaXphdGlvbiksXG4gICAgICBudW1iZXJGaWVsZCgnbWF4VG9rZW5zJywgJ21heFRva2VucycsIG51bGwsIDMyNzY4KSxcbiAgICApLFxuXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnYWR2YW5jZWRUaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LFxuICAgICAgICBudW1iZXJGaWVsZCgnY29tcGFjdGlvblJldHJpZXMnLCAnY29tcGFjdGlvblJldHJpZXMnLCBudWxsLCAxKSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ21heE92ZXJmbG93UmV0cmllcycsICdtYXhPdmVyZmxvd1JldHJpZXMnLCBudWxsLCAxKSxcbiAgICAgICksXG4gICAgKSxcblxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ21vZGVsc1RpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdtb2RlbHNJbnRybycpKSxcbiAgICAgIC4uLnByb3ZpZGVyUm93cyxcbiAgICAgIGVucmljaE5vdGUgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIGVucmljaE5vdGUpIDogbnVsbCxcbiAgICApLFxuXG4gICAgbm90ZSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmVycm9yIH0sIG5vdGUpIDogbnVsbCxcbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwbHkoY3R4KSB7XG4gIGN0eC5lZmZlY3QoKCkgPT4gY3R4LmxvY2FsZS5yZWdpc3RlcihMT0NBTEVfTlMsIHsgZW4sIHpoIH0pLCAnbWFsa28tcHJlZnM6IGxvY2FsZSBkaWN0aW9uYXJpZXMnKVxuICBjb25zdCB0ID0gY3R4LmxvY2FsZS5iaW5kKExPQ0FMRV9OUylcbiAgY29uc3QgZm9ybSA9IGN0eC5jb25maWdGb3Jtcy5nZXQoTlMpXG4gIGNvbnN0IG1vZGVsRm9ybSA9IGN0eC5jb25maWdGb3Jtcy5nZXQoTU9ERUxfTlMpXG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBvbmx5IGF1dG8tbW91bnRzIGl0cyBvd24gUmVtb3RlIHNlbGVjdGlvbiwgc28gYSBwbHVnaW5cbiAgLy8gc2hpcHMgYW5kIG1vdW50cyBpdHMgb3duIGNvbnRyaWJ1dGlvbi5cbiAgdHJ5IHtcbiAgICBjb25zdCBkaXNwb3NlUmVtb3RlID0gYXdhaXQgY3R4LnJlbW90ZS4kbW91bnQoUFJPQkVfUkVNT1RFKVxuICAgIGN0eC5lZmZlY3QoKCkgPT4gKCkgPT4geyB2b2lkIGRpc3Bvc2VSZW1vdGUoKSB9LCAnbWFsa28tcHJlZnM6IG1hbGtvTW9kZWxzIHJlbW90ZScpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignZHNoLW1hbGtvLXByZWZzOiBjb3VsZCBub3QgbW91bnQgdGhlIG1hbGtvTW9kZWxzIHJlbW90ZSBcdTIwMTQnLCBlcnJvcilcbiAgfVxuICBjb25zdCBpbmplY3RlZCA9ICgpID0+ICh7XG4gICAgaG9va3M6IHsgcHJlZnM6IGZvcm0sIG1vZGVsQ2F0YWxvZzogbW9kZWxGb3JtIH0sXG4gICAgc2F2ZTogKGZpZWxkLCB2YWx1ZSkgPT4gZm9ybS5zZXQoZmllbGQsIHZhbHVlKSxcbiAgICBwcm9iZTogKGFyZ3MpID0+IHtcbiAgICAgIC8vIEEgbmFtZXNwYWNlIHNlcnZpY2UgaXMgcmVzb2x2ZWQgYnkgaXRzIGZ1bGwga2V5OyByZWFkaW5nIGl0IG9mZlxuICAgICAgLy8gYGN0eC5yZW1vdGVgIHdvdWxkIHJlcXVpcmUgYW4gYGluamVjdGAgdGhpcyBwbHVnaW4gY2Fubm90IGRlY2xhcmVcbiAgICAgIC8vIGJlZm9yZSB0aGUgY29udHJpYnV0aW9uIGlzIG1vdW50ZWQuXG4gICAgICBjb25zdCByZW1vdGUgPSBjdHguZ2V0KCdyZW1vdGUubWFsa29Nb2RlbHMnKVxuICAgICAgaWYgKHJlbW90ZSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBtYWxrb01vZGVscyByZW1vdGUgaXMgbm90IGF2YWlsYWJsZScpXG4gICAgICByZXR1cm4gcmVtb3RlLnByb2JlKGFyZ3MpXG4gICAgfSxcbiAgICB3cml0ZU1vZGVsczogKHJvdXRlSWQsIG1vZGVscykgPT4gbW9kZWxGb3JtLm11dGF0ZShbeyBvcDogJ3NldCcsIHBhdGg6IFsncHJvdmlkZXJzJywgcm91dGVJZCwgJ21vZGVscyddLCB2YWx1ZTogbW9kZWxzIH1dKSxcbiAgfSlcbiAgY3R4LnNsb3RzLmluamVjdChTTE9ULCAoKSA9PiBjdHguc2xvdHMucmVnaXN0ZXIoe1xuICAgIG5hbWU6IFNMT1QsXG4gICAgaWQ6IE5TLFxuICAgIG9yZGVyOiA0NSxcbiAgICBsYWJlbDogKCkgPT4gdCgndGl0bGUnKSxcbiAgICBsb2NhbGU6IExPQ0FMRV9OUyxcbiAgICBpbmplY3Q6IGluamVjdGVkLFxuICB9LCBQcmVmc1NlY3Rpb24pKVxufVxuIiwgIi8qKlxuICogZHNoLW1hbGtvLXByZWZzIFx1MjAxNCBzaGFyZWQgUmVtb3RlIHdpcmUgaWRlbnRpdHkuXG4gKlxuICogVGhlIHNhbWUgaW52b2NhdGlvbiBpcyByZWdpc3RlcmVkIG9uIHRoZSBIb3N0IChgdHlwZXJ0LnJlZ2lzdGVyYCkgYW5kIG1vdW50ZWRcbiAqIGluIHRoZSBicm93c2VyIChgY3R4LnJlbW90ZS4kbW91bnRgKSwgc28gYm90aCBoYWx2ZXMgYnVpbGQgaXQgZnJvbSBoZXJlLiBUaGVcbiAqIG9ubHkgZGlmZmVyZW5jZSBpcyB0aGUgc2NoZW1hIGZhY3RvcnkgZWFjaCBzaWRlIHN1cHBsaWVzOiB0aGUgSG9zdCBkZWNvZGVzXG4gKiBhcmd1bWVudHMgd2l0aCB6b2QsIHdoaWxlIHRoZSBDbGllbnQgbmV2ZXIgZGVjb2RlcyBpdHMgb3duIGFyZ3VtZW50cyBhbmQgb25seVxuICogbmVlZHMgYSBmYWN0b3J5IHRvIHNhdGlzZnkgdGhlIHN0cmljdC1jb2RlYyBjb250cmFjdC5cbiAqL1xuXG4vKiogV2lyZSBpZGVudGl0eSBzaGFyZWQgYnkgdGhlIEhvc3QgbWFuaWZlc3QgYW5kIHRoZSBDbGllbnQgY29udHJpYnV0aW9uLiAqL1xuZXhwb3J0IGNvbnN0IFBST0JFX0lERU5USVRZID0ge1xuICBpZDogJ2RzaC1tYWxrby1wcmVmcyNtYWxrb01vZGVscy9wcm9iZScsXG4gIHNlcnZpY2U6ICdtYWxrb01vZGVscycsXG4gIG5hbWVzcGFjZTogJ21hbGtvTW9kZWxzJyxcbiAgbWV0aG9kOiAncHJvYmUnLFxuICBhcmdzVHlwZVN5bWJvbDogJ2RzaC1tYWxrby1wcmVmcyNQcm9iZUFyZ3MnLFxuICByZXN1bHRUeXBlU3ltYm9sOiAnZHNoLW1hbGtvLXByZWZzI1Byb2JlUmVzdWx0Jyxcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgYG1hbGtvTW9kZWxzL3Byb2JlKGFyZ3MpYCBkaXJlY3QgaW52b2NhdGlvbi5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZUFyZ3Mgc2NoZW1hIGZhY3RvcnkgZm9yIHRoZSBzaW5nbGUgYGFyZ3NgIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZVJlc3VsdCBzY2hlbWEgZmFjdG9yeSBmb3IgdGhlIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBpbnZvY2F0aW9uIGRlc2NyaXB0b3IsIGlkZW50aWNhbCBvbiBib3RoIGZhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvYmVJbnZvY2F0aW9uKGNyZWF0ZUFyZ3MsIGNyZWF0ZVJlc3VsdCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBQUk9CRV9JREVOVElUWS5pZCxcbiAgICBzZXJ2aWNlOiBQUk9CRV9JREVOVElUWS5zZXJ2aWNlLFxuICAgIG5hbWVzcGFjZTogUFJPQkVfSURFTlRJVFkubmFtZXNwYWNlLFxuICAgIG1ldGhvZDogUFJPQkVfSURFTlRJVFkubWV0aG9kLFxuICAgIGludm9jYXRpb246IHsga2luZDogJ2RpcmVjdCcgfSxcbiAgICBwYXJhbWV0ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhcmdzJyxcbiAgICAgICAgd2lyZTogJ2FyZ3MnLFxuICAgICAgICBzb3VyY2U6ICdqc29uJyxcbiAgICAgICAgY29kZWM6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLmFyZ3NUeXBlU3ltYm9sLCBjcmVhdGU6IGNyZWF0ZUFyZ3MgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICByZXN1bHQ6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLnJlc3VsdFR5cGVTeW1ib2wsIGNyZWF0ZTogY3JlYXRlUmVzdWx0IH0sXG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0EsbUJBQWtCO0FBQ2xCLHNDQUErQjs7O0FDQ3hCLElBQU0saUJBQWlCO0FBQUEsRUFDNUIsSUFBSTtBQUFBLEVBQ0osU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQ3BCO0FBUU8sU0FBUyxnQkFBZ0IsWUFBWSxjQUFjO0FBQ3hELFNBQU87QUFBQSxJQUNMLElBQUksZUFBZTtBQUFBLElBQ25CLFNBQVMsZUFBZTtBQUFBLElBQ3hCLFdBQVcsZUFBZTtBQUFBLElBQzFCLFFBQVEsZUFBZTtBQUFBLElBQ3ZCLFlBQVksRUFBRSxNQUFNLFNBQVM7QUFBQSxJQUM3QixZQUFZO0FBQUEsTUFDVjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsT0FBTyxFQUFFLE1BQU0sVUFBVSxZQUFZLGVBQWUsZ0JBQWdCLFFBQVEsV0FBVztBQUFBLE1BQ3pGO0FBQUEsSUFDRjtBQUFBLElBQ0Es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RCxHQUFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHLEVBQUUsYUFBYSxDQUFDO0FBQUEsTUFDN0MsR0FBRztBQUFBLE1BQ0gsYUFBYSxHQUFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHLFVBQVUsSUFBSTtBQUFBLElBQzFEO0FBQUEsSUFFQSxPQUFPLEdBQUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEdBQUcsSUFBSSxJQUFJO0FBQUEsRUFDL0M7QUFDRjtBQUVBLGVBQXNCLE1BQU0sS0FBSztBQUMvQixNQUFJLE9BQU8sTUFBTSxJQUFJLE9BQU8sU0FBUyxXQUFXLEVBQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxrQ0FBa0M7QUFDL0YsUUFBTSxJQUFJLElBQUksT0FBTyxLQUFLLFNBQVM7QUFDbkMsUUFBTSxPQUFPLElBQUksWUFBWSxJQUFJLEVBQUU7QUFDbkMsUUFBTSxZQUFZLElBQUksWUFBWSxJQUFJLFFBQVE7QUFHOUMsTUFBSTtBQUNGLFVBQU0sZ0JBQWdCLE1BQU0sSUFBSSxPQUFPLE9BQU8sWUFBWTtBQUMxRCxRQUFJLE9BQU8sTUFBTSxNQUFNO0FBQUUsV0FBSyxjQUFjO0FBQUEsSUFBRSxHQUFHLGlDQUFpQztBQUFBLEVBQ3BGLFNBQVMsT0FBTztBQUNkLFlBQVEsTUFBTSxrRUFBNkQsS0FBSztBQUFBLEVBQ2xGO0FBQ0EsUUFBTSxXQUFXLE9BQU87QUFBQSxJQUN0QixPQUFPLEVBQUUsT0FBTyxNQUFNLGNBQWMsVUFBVTtBQUFBLElBQzlDLE1BQU0sQ0FBQyxPQUFPLFVBQVUsS0FBSyxJQUFJLE9BQU8sS0FBSztBQUFBLElBQzdDLE9BQU8sQ0FBQyxTQUFTO0FBSWYsWUFBTSxTQUFTLElBQUksSUFBSSxvQkFBb0I7QUFDM0MsVUFBSSxXQUFXLE9BQVcsT0FBTSxJQUFJLE1BQU0seUNBQXlDO0FBQ25GLGFBQU8sT0FBTyxNQUFNLElBQUk7QUFBQSxJQUMxQjtBQUFBLElBQ0EsYUFBYSxDQUFDLFNBQVMsV0FBVyxVQUFVLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxTQUFTLFFBQVEsR0FBRyxPQUFPLE9BQU8sQ0FBQyxDQUFDO0FBQUEsRUFDM0g7QUFDQSxNQUFJLE1BQU0sT0FBTyxNQUFNLE1BQU0sSUFBSSxNQUFNLFNBQVM7QUFBQSxJQUM5QyxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxPQUFPLE1BQU0sRUFBRSxPQUFPO0FBQUEsSUFDdEIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1YsR0FBRyxZQUFZLENBQUM7QUFDbEI7IiwKICAibmFtZXMiOiBbIlJlYWN0Il0KfQo=
    return module.exports;
  },
});
