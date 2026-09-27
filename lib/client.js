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

// src/whale.ts
function whaleSvg(color) {
  return '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><path d="M48.8354 10.0479C48.3232 9.79199 48.1025 10.2798 47.8032 10.5278C47.7007 10.6079 47.6143 10.7119 47.5273 10.8076C46.7793 11.624 45.9048 12.1597 44.7622 12.0957C43.0923 12 41.666 12.5356 40.4058 13.8398C40.1377 12.2319 39.2476 11.272 37.8926 10.6558C37.1836 10.3359 36.4668 10.0156 35.9702 9.31982C35.6235 8.82373 35.5293 8.27197 35.356 7.72754C35.2456 7.3999 35.1353 7.06396 34.7651 7.00781C34.3633 6.94385 34.2056 7.2876 34.0479 7.57568C33.418 8.75195 33.1733 10.0479 33.1973 11.3599C33.2524 14.312 34.4736 16.6641 36.8999 18.3359C37.1758 18.5278 37.2466 18.7197 37.1597 19C36.9946 19.5757 36.7974 20.1357 36.624 20.7119C36.5137 21.0801 36.3486 21.1597 35.9624 21C34.6309 20.4321 33.481 19.5918 32.4644 18.5757C30.7393 16.8721 29.1792 14.9917 27.2334 13.52C26.7764 13.1758 26.3193 12.856 25.8467 12.5518C23.8618 10.584 26.1069 8.96777 26.627 8.77588C27.1704 8.57568 26.8159 7.8877 25.0591 7.896C23.3022 7.90381 21.6953 8.50391 19.647 9.30371C19.3477 9.42383 19.0322 9.51172 18.7095 9.58398C16.8501 9.22363 14.9199 9.14355 12.9033 9.37598C9.10596 9.80762 6.07275 11.6396 3.84326 14.7681C1.16455 18.5278 0.53418 22.7998 1.30664 27.2559C2.11768 31.9521 4.46582 35.8398 8.07373 38.8799C11.8159 42.0322 16.1255 43.5762 21.041 43.2803C24.0269 43.104 27.3516 42.6963 31.1016 39.4561C32.0469 39.936 33.0396 40.1279 34.686 40.272C35.9546 40.3921 37.1758 40.208 38.1211 40.0078C39.6021 39.688 39.4995 38.2881 38.9639 38.0322C34.623 35.9678 35.5762 36.8081 34.71 36.1279C36.9155 33.4639 40.2402 30.6958 41.54 21.728C41.6426 21.0161 41.5557 20.5679 41.54 19.9917C41.5322 19.6396 41.6108 19.5039 42.0049 19.4639C43.0923 19.3359 44.1479 19.0317 45.1167 18.4878C47.9292 16.9199 49.064 14.3438 49.3315 11.2559C49.3711 10.7837 49.3237 10.2959 48.8354 10.0479ZM24.3262 37.8398C20.1196 34.4639 18.0791 33.3521 17.2358 33.3999C16.4482 33.4482 16.5898 34.3682 16.7632 34.9678C16.9443 35.5601 17.1812 35.9683 17.5117 36.4878C17.7402 36.832 17.8979 37.3442 17.2832 37.728C15.9282 38.584 13.5728 37.4399 13.4624 37.3838C10.7207 35.7358 8.42822 33.5601 6.81348 30.584C5.25342 27.7197 4.34766 24.6479 4.19775 21.3677C4.1582 20.5757 4.38672 20.2959 5.15869 20.1519C6.17529 19.96 7.22314 19.9199 8.23926 20.0718C12.5327 20.7119 16.1885 22.6719 19.2529 25.7759C21.002 27.5439 22.3252 29.6558 23.6885 31.7202C25.1377 33.9121 26.6978 36 28.6831 37.7119C29.3843 38.312 29.9434 38.7681 30.479 39.104C28.8643 39.2881 26.1699 39.3281 24.3262 37.8398ZM26.3433 24.6001C26.3433 24.248 26.6191 23.9678 26.9658 23.9678C27.0444 23.9678 27.1152 23.9839 27.1782 24.0078C27.2651 24.04 27.3438 24.0879 27.4067 24.1602C27.5171 24.272 27.5801 24.4321 27.5801 24.6001C27.5801 24.9521 27.3042 25.2319 26.9575 25.2319C26.6108 25.2319 26.3433 24.9521 26.3433 24.6001ZM32.6064 27.8799C32.2046 28.0479 31.8027 28.1919 31.4165 28.208C30.8179 28.2397 30.1641 27.9922 29.8096 27.688C29.2583 27.2158 28.8643 26.9521 28.6987 26.1279C28.6279 25.7759 28.6675 25.2319 28.7305 24.9199C28.8721 24.248 28.7144 23.8159 28.2495 23.4238C27.8716 23.104 27.3911 23.0161 26.8633 23.0161C26.666 23.0161 26.4849 22.9277 26.3511 22.856C26.1304 22.7441 25.9492 22.4639 26.1226 22.1201C26.1777 22.0078 26.4458 21.7358 26.5088 21.688C27.2256 21.272 28.0527 21.4077 28.8169 21.7197C29.5259 22.0161 30.0615 22.5601 30.834 23.3281C31.6216 24.2559 31.7632 24.5117 32.2124 25.208C32.5669 25.752 32.8901 26.312 33.1104 26.9521C33.2446 27.3521 33.0713 27.6802 32.6064 27.8799Z" fill="' + color + '" fill-opacity="1" fill-rule="nonzero"/></svg>';
}

// src/notify.ts
var LOCALE_NS = "settings.malko-prefs";
var DEFAULT_HREF = "/favicon.svg";
var DEFAULT_GREEN = "#22C55E";
var DEFAULT_AMBER = "#F59E0B";
var HEX = /^#[0-9a-fA-F]{6}$/;
var TOOL_NAME_LIMIT = 32;
function notificationSupport() {
  try {
    if (typeof Notification === "undefined" || typeof Notification.permission !== "string") return "unsupported";
    return Notification.permission;
  } catch {
    return "unsupported";
  }
}
function requestNotificationPermission() {
  try {
    if (typeof Notification === "undefined") return Promise.resolve("unsupported");
    if (Notification.permission !== "default") return Promise.resolve(Notification.permission);
    const answer = Notification.requestPermission();
    return answer !== void 0 && typeof answer.then === "function" ? answer : Promise.resolve(Notification.permission);
  } catch {
    return Promise.resolve(notificationSupport());
  }
}
function currentNotificationPermission() {
  return notificationSupport();
}
function startStatusLight(ctx, form) {
  const list = ctx.sessions.list;
  const locale = () => ctx.locale.bind(LOCALE_NS);
  let statusSource;
  const notified = /* @__PURE__ */ new Set();
  const notifyQueue = /* @__PURE__ */ new Map();
  let notifyTimer;
  const prevCompleted = /* @__PURE__ */ new Map();
  const runStartedAt = /* @__PURE__ */ new Map();
  const lastRunMs = /* @__PURE__ */ new Map();
  let prevPending = /* @__PURE__ */ new Set();
  let pendingSeen = false;
  const isForeground = () => document.visibilityState === "visible" && document.hasFocus();
  function readConfig() {
    const value = form.getSnapshot().value ?? {};
    return {
      colorsEnabled: value.colorsEnabled !== false,
      green: HEX.test(value.green) ? value.green : DEFAULT_GREEN,
      amber: HEX.test(value.amber) ? value.amber : DEFAULT_AMBER,
      black: HEX.test(value.black) ? value.black : void 0,
      notifyEnabled: value.notifyEnabled === true,
      notifyForeground: value.notifyForeground === true,
      notifyAutoHide: value.notifyAutoHide !== false
    };
  }
  const iconLink = () => document.head.querySelector('link[rel~="icon"]');
  const setHref = (href) => {
    const link = iconLink();
    if (link) link.href = href;
  };
  const originalHref = iconLink()?.href ?? DEFAULT_HREF;
  let applied = null;
  const uri = (hex) => `data:image/svg+xml,${encodeURIComponent(whaleSvg(hex))}`;
  const restore = () => {
    if (applied !== null) {
      setHref(originalHref);
      applied = null;
    }
  };
  const PENDING_KIND_KEYS = {
    approval: "pendingKindApproval",
    question: "pendingKindQuestion",
    "plan-review": "pendingKindPlanReview"
  };
  function pendingTypeLabel(interaction) {
    const t = locale();
    const kind = interaction?.kind;
    if (kind === "approval") {
      const tool = interaction.toolName;
      if (typeof tool !== "string" || tool === "") return t("pendingKindApproval");
      const shown = tool.length > TOOL_NAME_LIMIT ? tool.slice(0, TOOL_NAME_LIMIT) + "\u2026" : tool;
      return t("pendingApprovalTool", { tool: shown });
    }
    if (kind === "question") {
      const questions = Array.isArray(interaction.questions) ? interaction.questions : [];
      if (questions.length > 1) return t("pendingQuestionBatch", { count: questions.length });
      const first = questions[0];
      if (first === null || typeof first !== "object") return t("pendingKindQuestion");
      const options = Array.isArray(first.options) ? first.options : [];
      if (options.length === 0) return t("pendingQuestionFill");
      return first.multiSelect === true ? t("pendingQuestionMulti") : t("pendingQuestionChoose");
    }
    const key = PENDING_KIND_KEYS[kind];
    return key === void 0 ? void 0 : t(key);
  }
  function queueNotification(kind, sessionId, label, typeLabel, durationMs) {
    if (!readConfig().notifyEnabled) return;
    const key = sessionId + ":" + kind;
    if (notified.has(key)) return;
    notified.add(key);
    notifyQueue.set(key, { kind, sessionId, label, typeLabel, durationMs });
    if (notifyTimer === void 0) notifyTimer = setTimeout(flushNotifications, 300);
  }
  function flushNotifications() {
    notifyTimer = void 0;
    const entries = [...notifyQueue.values()];
    notifyQueue.clear();
    if (entries.length === 0) return;
    if (notificationSupport() !== "granted") return;
    const config = readConfig();
    if (!config.notifyForeground && isForeground()) return;
    const t = locale();
    const grouped = /* @__PURE__ */ new Map();
    for (const entry of entries) {
      const bucket = grouped.get(entry.kind) ?? [];
      bucket.push(entry);
      grouped.set(entry.kind, bucket);
    }
    for (const [kind, bucket] of grouped) {
      const head = bucket[0];
      const extra = bucket.length - 1;
      let title = head.label ?? head.sessionId;
      if (extra > 0) title = title + " +" + String(extra);
      let body = kind === "done" ? t("notifyDoneTitle") : head.typeLabel ?? t("notifyPendingTitle");
      if (kind === "done" && extra === 0 && head.durationMs !== void 0) {
        body = body + " \xB7 " + t("notifyDuration", { duration: formatRunDuration(head.durationMs, t) });
      }
      try {
        const notification = new Notification(title, {
          body,
          icon: uri(kind === "done" ? config.green : config.amber),
          requireInteraction: !config.notifyAutoHide
        });
        notification.onclick = () => {
          try {
            window.focus();
          } catch {
          }
          try {
            const workspace = ctx.get("uiWorkspace");
            if (workspace !== void 0 && typeof workspace.openSession === "function") workspace.openSession(head.sessionId);
            else ctx.sessions.open(head.sessionId);
          } catch {
          }
          notification.close();
        };
      } catch (error) {
        console.warn("[malko-prefs] could not raise notification", error);
      }
    }
  }
  function formatRunDuration(ms, t) {
    const total = Math.max(0, Math.floor(ms / 1e3));
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return minutes > 0 ? t("durationMinutes", { minutes, seconds: String(seconds).padStart(2, "0") }) : t("durationSeconds", { seconds });
  }
  function detectTransitions(state) {
    for (const row of Object.values(state.byId)) {
      if (row.origin === "subagent") continue;
      const before = prevCompleted.get(row.id);
      const now = row.completed === true;
      if (before === false && now) queueNotification("done", row.id, row.displayTitle ?? row.title ?? row.id, void 0, lastRunMs.get(row.id));
      if (!now) notified.delete(row.id + ":done");
      prevCompleted.set(row.id, now);
    }
    for (const id of [...prevCompleted.keys()]) {
      if (!(id in state.byId)) {
        prevCompleted.delete(id);
        notified.delete(id + ":done");
      }
    }
    const current = /* @__PURE__ */ new Set();
    for (const row of Object.values(state.byId)) if (row.pendingInteraction !== void 0) current.add(row.id);
    if (pendingSeen) {
      for (const id of current) {
        if (prevPending.has(id)) continue;
        const row = state.byId[id];
        if (row !== void 0 && row.origin === "subagent") continue;
        const label = row?.displayTitle ?? row?.title ?? id;
        queueNotification("pending", id, label, pendingTypeLabel(row?.pendingInteraction));
      }
    }
    for (const id of prevPending) if (!current.has(id)) notified.delete(id + ":pending");
    prevPending = current;
    pendingSeen = true;
  }
  const prevRunning = /* @__PURE__ */ new Map();
  const finishedWhileHidden = /* @__PURE__ */ new Set();
  function trackEdges(state) {
    for (const row of Object.values(state.byId)) {
      if (row.origin === "subagent") continue;
      const prev = prevRunning.get(row.id);
      if (prev === void 0) {
        prevRunning.set(row.id, row.running);
        continue;
      }
      if (!prev && row.running) runStartedAt.set(row.id, Date.now());
      if (prev && !row.running) {
        const startedAt = runStartedAt.get(row.id);
        const elapsed = startedAt === void 0 ? void 0 : Date.now() - startedAt;
        runStartedAt.delete(row.id);
        if (elapsed !== void 0) lastRunMs.set(row.id, elapsed);
        if (row.id === state.current && !isForeground()) finishedWhileHidden.add(row.id);
        if (row.id === state.current) queueNotification("done", row.id, row.displayTitle ?? row.title ?? row.id, void 0, elapsed);
      } else if (row.running) finishedWhileHidden.delete(row.id);
      prevRunning.set(row.id, row.running);
    }
    for (const id of [...prevRunning.keys()]) {
      if (!(id in state.byId)) {
        prevRunning.delete(id);
        finishedWhileHidden.delete(id);
        runStartedAt.delete(id);
        lastRunMs.delete(id);
      }
    }
  }
  const onForeground = () => {
    if (!isForeground()) return;
    if (finishedWhileHidden.size > 0) {
      finishedWhileHidden.clear();
      sync();
    }
  };
  function targetOf(state) {
    if (!readConfig().colorsEnabled) return null;
    const config = readConfig();
    let green = false;
    for (const row of Object.values(state.byId)) {
      if (row.origin === "subagent") continue;
      if (row.pendingInteraction !== void 0) return uri(config.amber);
      if (row.completed === true || finishedWhileHidden.has(row.id)) green = true;
    }
    if (green) return uri(config.green);
    return config.black ? uri(config.black) : null;
  }
  function buildState() {
    const listState = list.getSnapshot();
    const status = statusSource?.getSnapshot();
    let current = listState.current;
    const byId = {};
    for (const row of Object.values(listState.byId)) {
      const s = status?.get(row.id);
      if ((row.retainedBy?.mainView ?? 0) > 0) current = row.id;
      byId[row.id] = {
        ...row,
        running: s?.running ?? row.running,
        completed: s?.completionUnread ?? row.completed === true,
        pendingInteraction: s?.pendingInteraction ?? row.pendingInteraction
      };
    }
    return { ...listState, byId, current };
  }
  function sync() {
    const state = buildState();
    trackEdges(state);
    detectTransitions(state);
    const next = targetOf(state);
    if (next === null) restore();
    else if (applied !== next) {
      setHref(next);
      applied = next;
    }
  }
  const unsubscribeList = list.subscribe(sync);
  const unsubscribeForm = form.subscribe(sync);
  document.addEventListener("visibilitychange", onForeground);
  window.addEventListener("focus", onForeground);
  sync();
  ctx.inject(["uiSession"], (uiCtx) => {
    statusSource = uiCtx.uiSession.sessionStatus;
    const unsubscribe = statusSource.subscribe(sync);
    sync();
    return () => {
      unsubscribe();
      statusSource = void 0;
      sync();
    };
  });
  return () => {
    if (notifyTimer !== void 0) clearTimeout(notifyTimer);
    notifyQueue.clear();
    unsubscribeList();
    unsubscribeForm();
    document.removeEventListener("visibilitychange", onForeground);
    window.removeEventListener("focus", onForeground);
    restore();
  };
}

// src/client.ts
var name = "dsh-malko-prefs";
var inject = ["sessions", "slots", "locale", "configForms", "remote"];
var NS = "malko-prefs";
var MODEL_NS = "llm-pi-ai";
var SLOT = "settings.section";
var TABS_ID = "malko-prefs-tabs";
var HEX2 = /^#[0-9a-fA-F]{6}$/;
var identitySchema = () => ({ parse: (value) => value });
var PROBE_REMOTE = {
  package: "dsh-malko-prefs",
  descriptors: [probeInvocation(identitySchema, identitySchema)]
};
var el = import_react.default.createElement;
var en = {
  title: "Malko's prefs",
  intro: "Tunable companion to the official compaction engine.",
  tabCompaction: "Context compaction",
  tabModels: "llama.cpp models",
  tabNotifications: "Notifications",
  // Compaction
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
  // Models
  modelsTitle: "llama.cpp models",
  modelsIntro: "Read context window and input modalities from the server and fill the model entries of a pi-ai provider.",
  enrich: "Enrich from server",
  enriching: "Enriching\u2026",
  noBaseUrl: "No endpoint configured for this provider.",
  enriched: "Enriched {count} model(s).",
  // Notifications
  colorsGroup: "Tab status light",
  colorsIntro: "The browser tab icon reflects the session state: green = finished, amber = waiting for you.",
  colorsEnabled: "Color the tab icon",
  colorsEnabledHint: "Off keeps the official favicon at all times.",
  greenLabel: "Finished",
  amberLabel: "Waiting (question/approval)",
  blackLabel: "Idle color",
  blackHint: "Leave empty to keep the official favicon when idle.",
  colorReset: "Clear",
  colorUnset: "official",
  notifyGroup: "System notifications",
  notifyIntro: "Raise a browser notification when a session finishes or a question/approval waits for you.",
  notifyEnabled: "Enable notifications",
  notifyEnabledHint: "The browser asks for permission the first time you enable this.",
  notifyForeground: "Notify in the foreground",
  notifyForegroundHint: "Also notify while the tab is visible and focused.",
  notifyAutoHide: "Keep on screen",
  notifyAutoHideHint: "On: the notification stays until you dismiss it.",
  permissionDenied: "Blocked by the browser \u2014 re-enable notifications in the site settings.",
  permissionUnsupported: "This browser does not support system notifications.",
  notifyDoneTitle: "Session finished",
  notifyPendingTitle: "Something awaits you",
  notifyDuration: "turn took {duration}",
  durationSeconds: "{seconds}s",
  durationMinutes: "{minutes}m{seconds}s",
  pendingKindApproval: "Approval needed",
  pendingKindQuestion: "Question",
  pendingKindPlanReview: "Plan review",
  pendingApprovalTool: "Approval \xB7 {tool}",
  pendingQuestionChoose: "Choose an option",
  pendingQuestionMulti: "Choose options",
  pendingQuestionFill: "Type an answer",
  pendingQuestionBatch: "{count} questions",
  // Shared
  save: "Save",
  saved: "Saved.",
  invalidToken: "Enter a number or a k/M suffix value (e.g. 130k).",
  invalidHex: "Color must be #RRGGBB.",
  errorPrefix: "Error: ",
  unavailable: "This setting is not available from this client.",
  loading: "Loading\u2026"
};
var zh = {
  title: "Malko \u504F\u597D",
  intro: "\u5B98\u65B9\u538B\u7F29\u5F15\u64CE\u7684\u53EF\u8C03\u4F34\u751F\u3002",
  tabCompaction: "\u4E0A\u4E0B\u6587\u538B\u7F29",
  tabModels: "llama.cpp \u6A21\u578B",
  tabNotifications: "\u901A\u77E5",
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
  colorsGroup: "\u6807\u7B7E\u9875\u72B6\u6001\u706F",
  colorsIntro: "\u6807\u7B7E\u9875\u56FE\u6807\u968F\u4F1A\u8BDD\u72B6\u6001\u53D8\u8272\uFF1A\u7EFF = \u5DF2\u5B8C\u6210\uFF0C\u7425\u73C0 = \u7B49\u4F60\u5904\u7406\u3002",
  colorsEnabled: "\u542F\u7528\u56FE\u6807\u53D8\u8272",
  colorsEnabledHint: "\u5173\u95ED\u540E\u59CB\u7EC8\u4F7F\u7528\u5B98\u65B9\u56FE\u6807\u3002",
  greenLabel: "\u5DF2\u5B8C\u6210",
  amberLabel: "\u5F85\u5904\u7406\uFF08\u63D0\u95EE/\u5BA1\u6279\uFF09",
  blackLabel: "\u9ED8\u8BA4\u8272",
  blackHint: "\u7559\u7A7A\u5219\u7A7A\u95F2\u65F6\u4F7F\u7528\u5B98\u65B9\u56FE\u6807\u3002",
  colorReset: "\u6E05\u9664",
  colorUnset: "\u5B98\u65B9",
  notifyGroup: "\u7CFB\u7EDF\u901A\u77E5",
  notifyIntro: "\u4F1A\u8BDD\u5B8C\u6210\u6216\u6709\u63D0\u95EE/\u5BA1\u6279\u7B49\u4F60\u5904\u7406\u65F6\u53D1\u9001\u6D4F\u89C8\u5668\u901A\u77E5\u3002",
  notifyEnabled: "\u542F\u7528\u901A\u77E5",
  notifyEnabledHint: "\u9996\u6B21\u5F00\u542F\u65F6\u6D4F\u89C8\u5668\u4F1A\u8BE2\u95EE\u6388\u6743\u3002",
  notifyForeground: "\u524D\u53F0\u63D0\u9192",
  notifyForegroundHint: "\u6807\u7B7E\u9875\u53EF\u89C1\u4E14\u6709\u7126\u70B9\u65F6\u4E5F\u63D0\u9192\u3002",
  notifyAutoHide: "\u5E38\u9A7B\u5C4F\u5E55",
  notifyAutoHideHint: "\u5F00\u542F\u540E\u9700\u624B\u52A8\u5173\u95ED\u624D\u4F1A\u6D88\u5931\u3002",
  permissionDenied: "\u5DF2\u88AB\u6D4F\u89C8\u5668\u62D2\u7EDD\uFF0C\u8BF7\u5728\u7AD9\u70B9\u8BBE\u7F6E\u4E2D\u6062\u590D\u901A\u77E5\u6743\u9650\u3002",
  permissionUnsupported: "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u7CFB\u7EDF\u901A\u77E5\u3002",
  notifyDoneTitle: "\u4F1A\u8BDD\u5DF2\u5B8C\u6210",
  notifyPendingTitle: "\u6709\u4EA4\u4E92\u7B49\u5F85\u5904\u7406",
  notifyDuration: "\u672C\u8F6E\u603B\u7528\u65F6 {duration}",
  durationSeconds: "{seconds}\u79D2",
  durationMinutes: "{minutes}\u5206{seconds}\u79D2",
  pendingKindApproval: "\u5F85\u5BA1\u6279",
  pendingKindQuestion: "\u5411\u4F60\u63D0\u95EE",
  pendingKindPlanReview: "\u8BA1\u5212\u5F85\u5BA1\u6838",
  pendingApprovalTool: "\u5F85\u5BA1\u6279 \xB7 {tool}",
  pendingQuestionChoose: "\u8BF7\u4F60\u9009\u62E9",
  pendingQuestionMulti: "\u8BF7\u4F60\u591A\u9009",
  pendingQuestionFill: "\u8BF7\u4F60\u586B\u5199",
  pendingQuestionBatch: "\u5411\u4F60\u63D0\u95EE\uFF08{count} \u4E2A\uFF09",
  save: "\u4FDD\u5B58",
  saved: "\u5DF2\u4FDD\u5B58\u3002",
  invalidToken: "\u8BF7\u8F93\u5165\u6570\u5B57\u6216\u5E26 k/M \u540E\u7F00\u7684\u503C\uFF08\u5982 130k\uFF09\u3002",
  invalidHex: "\u989C\u8272\u683C\u5F0F\u5E94\u4E3A #RRGGBB\u3002",
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
  tabs: { marginTop: 4 },
  group: { marginTop: 10, paddingTop: 10, borderTop: "0.5px solid var(--dsw-alias-border-l3)" },
  groupFirst: { marginTop: 10 },
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
  hex: { fontFamily: "monospace", width: 110, flex: "0 0 auto" },
  color: {
    flex: "0 0 auto",
    width: 32,
    height: 32,
    padding: 2,
    border: "0.5px solid var(--dsw-alias-border-l4)",
    borderRadius: 8,
    background: "var(--dsw-alias-bg-layer-1)",
    cursor: "pointer"
  },
  rowTwo: { display: "flex", gap: 12 },
  rowFlex: { display: "flex", gap: 8, alignItems: "center" },
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
  const [tab, setTab] = import_react.default.useState("compaction");
  const [permission, setPermission] = import_react.default.useState(() => currentNotificationPermission());
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
  const colorField = (labelKey, field, fallbackHex, optional, hintKey) => {
    const current = typeof value[field] === "string" ? value[field] : "";
    const shown = current !== "" ? current : fallbackHex ?? "#000000";
    return el(
      "div",
      { style: S.col, key: field },
      el("div", { style: S.label }, t(labelKey)),
      el(
        "div",
        { style: S.rowFlex },
        el("input", {
          type: "color",
          value: shown,
          disabled,
          style: S.color,
          onChange: (e) => write(field, e.target.value)
        }),
        el("input", {
          type: "text",
          style: { ...S.input, ...S.hex },
          disabled,
          value: current,
          placeholder: optional ? t("colorUnset") : "",
          onChange: (e) => {
            const next = e.target.value.trim();
            if (next === "" && optional) write(field, "");
            else if (HEX2.test(next)) write(field, next);
          }
        }),
        optional && current !== "" ? el(import_dsh_client_ui_primitives.Button, { variant: "ghost", size: "sm", disabled, onClick: () => write(field, "") }, t("colorReset")) : null
      ),
      hintKey ? el("div", { style: S.hint }, t(hintKey)) : null
    );
  };
  const enableNotifications = (next) => {
    if (!next) {
      write("notifyEnabled", false);
      return;
    }
    write("notifyEnabled", true);
    void requestNotificationPermission().then(setPermission);
  };
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
  const selectOptions = (pairs) => pairs.map(([v, label]) => el("option", { key: v, value: v }, label));
  const summarization = [
    el(
      "div",
      { style: S.col, key: "mode" },
      el("div", { style: S.label }, t("summarizationMode")),
      el(
        "select",
        { style: { ...S.input, ...S.select }, disabled, value: mode, onChange: (e) => write("summarizationMode", e.target.value) },
        selectOptions([["session", t("modeSession")], ["custom", t("modeCustom")]])
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
  const compactionPanel = [
    el(
      "div",
      { style: S.groupFirst, key: "threshold" },
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
      { style: S.group, key: "retention" },
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
      { style: S.group, key: "behaviour" },
      el("div", { style: S.groupTitle }, t("behaviourTitle")),
      switchField("auto", "auto", "autoHint", true),
      switchField("turnEnd", "turnEndCompactionEnabled", "turnEndHint", false)
    ),
    el(
      "div",
      { style: S.group, key: "summarization" },
      el("div", { style: S.groupTitle }, t("summarizationTitle")),
      el("div", { style: S.rowTwo }, summarization),
      numberField("maxTokens", "maxTokens", null, 32768)
    ),
    el(
      "div",
      { style: S.group, key: "advanced" },
      el("div", { style: S.groupTitle }, t("advancedTitle")),
      el(
        "div",
        { style: S.rowTwo },
        numberField("compactionRetries", "compactionRetries", null, 1),
        numberField("maxOverflowRetries", "maxOverflowRetries", null, 1)
      )
    )
  ];
  const modelsPanel = [
    el(
      "div",
      { style: S.groupFirst, key: "models" },
      el("div", { style: S.groupTitle }, t("modelsTitle")),
      el("div", { style: S.hint }, t("modelsIntro")),
      ...providerRows,
      enrichNote ? el("div", { style: S.hint }, enrichNote) : null
    )
  ];
  const notificationsEnabled = value.notifyEnabled !== void 0 ? !!value.notifyEnabled : false;
  const notificationsPanel = [
    el(
      "div",
      { style: S.groupFirst, key: "colors" },
      el("div", { style: S.groupTitle }, t("colorsGroup")),
      el("div", { style: S.hint }, t("colorsIntro")),
      switchField("colorsEnabled", "colorsEnabled", "colorsEnabledHint", true),
      el(
        "div",
        { style: S.rowTwo, key: "colors" },
        colorField("greenLabel", "green", "#22C55E", false, null),
        colorField("amberLabel", "amber", "#F59E0B", false, null),
        colorField("blackLabel", "black", "#000000", true, "blackHint")
      )
    ),
    el(
      "div",
      { style: S.group, key: "notify" },
      el("div", { style: S.groupTitle }, t("notifyGroup")),
      el("div", { style: S.hint }, t("notifyIntro")),
      el(
        "div",
        { style: S.toggle, key: "notifyEnabled" },
        el(import_dsh_client_ui_primitives.Switch, {
          checked: notificationsEnabled,
          disabled,
          label: t("notifyEnabled"),
          onChange: enableNotifications
        }),
        el(
          "div",
          { style: S.toggleText },
          el("span", { style: S.toggleLabel }, t("notifyEnabled")),
          el("span", { style: { color: "var(--dsw-alias-label-tertiary)", fontSize: 12 } }, t("notifyEnabledHint"))
        )
      ),
      notificationsEnabled && permission === "denied" ? el("div", { style: S.error }, t("permissionDenied")) : null,
      notificationsEnabled && permission === "unsupported" ? el("div", { style: S.error }, t("permissionUnsupported")) : null,
      switchField("notifyForeground", "notifyForeground", "notifyForegroundHint", false),
      switchField("notifyAutoHide", "notifyAutoHide", "notifyAutoHideHint", true)
    )
  ];
  const panels = { compaction: compactionPanel, models: modelsPanel, notifications: notificationsPanel };
  return el(
    "div",
    { style: S.wrap },
    el("div", { style: S.groupTitle }, t("title")),
    el("div", { style: S.hint }, t("intro")),
    el(
      "div",
      { style: S.tabs },
      el(import_dsh_client_ui_primitives.SegmentedControl, {
        id: TABS_ID,
        value: tab,
        options: [
          { value: "compaction", label: t("tabCompaction") },
          { value: "models", label: t("tabModels") },
          { value: "notifications", label: t("tabNotifications") }
        ],
        onChange: setTab,
        label: t("title")
      })
    ),
    el("div", { id: `${TABS_ID}-${tab}-panel`, role: "tabpanel" }, ...panels[tab] ?? compactionPanel),
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
  ctx.effect(() => startStatusLight(ctx, form), "malko-prefs: tab status light");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC50cyIsICJzcmMvcmVtb3RlLnRzIiwgInNyYy93aGFsZS50cyIsICJzcmMvbm90aWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgYnJvd3NlciBoYWxmLlxuICpcbiAqIE9uZSBzZXR0aW5ncyBzZWN0aW9uIHdpdGggdGhyZWUgc3ViLXBhbmVsczogY29udGV4dCBjb21wYWN0aW9uLCBsbGFtYS5jcHBcbiAqIG1vZGVsIGVucmljaG1lbnQsIGFuZCBub3RpZmljYXRpb25zLiBSZWFkcyBhbmQgd3JpdGVzIHRoZSBgbWFsa28tcHJlZnNgXG4gKiBjb25maWcgZm9ybSwgcmVhZHMgdGhlIGBsbG0tcGktYWlgIGZvcm0gdG8gcG9wdWxhdGUgdGhlIG1vZGVsIHBpY2tlcnMsIGFuZFxuICogcnVucyB0aGUgdGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoc2VlIGAuL25vdGlmeS50c2ApLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnRlZENvbnRyb2wsIFN3aXRjaCB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXByaW1pdGl2ZXMnXG5pbXBvcnQgeyBwcm9iZUludm9jYXRpb24gfSBmcm9tICcuL3JlbW90ZS50cydcbmltcG9ydCB7XG4gIExPQ0FMRV9OUyxcbiAgY3VycmVudE5vdGlmaWNhdGlvblBlcm1pc3Npb24sXG4gIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uLFxuICBzdGFydFN0YXR1c0xpZ2h0LFxufSBmcm9tICcuL25vdGlmeS50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZHNoLW1hbGtvLXByZWZzJ1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsnc2Vzc2lvbnMnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2NvbmZpZ0Zvcm1zJywgJ3JlbW90ZSddXG5cbmNvbnN0IE5TID0gJ21hbGtvLXByZWZzJ1xuY29uc3QgTU9ERUxfTlMgPSAnbGxtLXBpLWFpJ1xuY29uc3QgU0xPVCA9ICdzZXR0aW5ncy5zZWN0aW9uJ1xuY29uc3QgVEFCU19JRCA9ICdtYWxrby1wcmVmcy10YWJzJ1xuXG4vKiogYCNSUkdHQkJgIGNvbG91ciBsaXRlcmFsLiAqL1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuXG4vKiogU3RyaWN0LWNvZGVjIHN0dWI6IHRoZSBicm93c2VyIG5ldmVyIGRlY29kZXMgaXRzIG93biBhcmd1bWVudHMuICovXG5jb25zdCBpZGVudGl0eVNjaGVtYSA9ICgpID0+ICh7IHBhcnNlOiAodmFsdWUpID0+IHZhbHVlIH0pXG5cbi8qKiBCcm93c2VyIGNvbnRyaWJ1dGlvbiBtb3VudGVkIHRocm91Z2ggYGN0eC5yZW1vdGUuJG1vdW50KClgLiAqL1xuY29uc3QgUFJPQkVfUkVNT1RFID0ge1xuICBwYWNrYWdlOiAnZHNoLW1hbGtvLXByZWZzJyxcbiAgZGVzY3JpcHRvcnM6IFtwcm9iZUludm9jYXRpb24oaWRlbnRpdHlTY2hlbWEsIGlkZW50aXR5U2NoZW1hKV0sXG59XG5cbmNvbnN0IGVsID0gUmVhY3QuY3JlYXRlRWxlbWVudFxuXG5jb25zdCBlbiA9IHtcbiAgdGl0bGU6IFwiTWFsa28ncyBwcmVmc1wiLFxuICBpbnRybzogJ1R1bmFibGUgY29tcGFuaW9uIHRvIHRoZSBvZmZpY2lhbCBjb21wYWN0aW9uIGVuZ2luZS4nLFxuICB0YWJDb21wYWN0aW9uOiAnQ29udGV4dCBjb21wYWN0aW9uJyxcbiAgdGFiTW9kZWxzOiAnbGxhbWEuY3BwIG1vZGVscycsXG4gIHRhYk5vdGlmaWNhdGlvbnM6ICdOb3RpZmljYXRpb25zJyxcbiAgLy8gQ29tcGFjdGlvblxuICB0aHJlc2hvbGRUaXRsZTogJ0NvbXBhY3Rpb24gdGhyZXNob2xkJyxcbiAgdGhyZXNob2xkVG9rZW5zOiAnVGhyZXNob2xkICh0b2tlbnMpJyxcbiAgdGhyZXNob2xkVG9rZW5zSGludDogJ0Fic29sdXRlIHByZXNzdXJlIGluIHRva2VucywgZS5nLiAxMzBrIG9yIDEzMEsuIEVtcHR5LzAgPSB1c2UgdGhlIHJhdGlvIGJlbG93LicsXG4gIGNvbnRleHRXaW5kb3c6ICdDb250ZXh0IHdpbmRvdyAodG9rZW5zKScsXG4gIGNvbnRleHRXaW5kb3dIaW50OiAnV2luZG93IHRoZSBhYnNvbHV0ZSB0aHJlc2hvbGQgaXMgZXhwcmVzc2VkIGFnYWluc3QgKGUuZy4gMjAwaykuIDAgPSBkZXJpdmUgbm90aGluZyAocmF0aW8gb25seSkuJyxcbiAgdGhyZXNob2xkUmF0aW86ICdUaHJlc2hvbGQgcmF0aW8nLFxuICB0aHJlc2hvbGRSYXRpb0hpbnQ6ICdVc2VkIHdoZW4gdGhlIGFic29sdXRlIHRocmVzaG9sZCBpcyBlbXB0eSAoMC44ID0gODAlIG9mIHRoZSB3aW5kb3cpLicsXG4gIGhlYWRyb29tOiAnSGVhZHJvb20gKHRva2VucyknLFxuICBoZWFkcm9vbUhpbnQ6ICdSZXNlcnZlZCBvbiB0b3Agb2YgdGhlIG91dHB1dCBjYXAuIFRoZSBvZmZpY2lhbCBkZWZhdWx0ICg2NTUzNikgY2FwcyB0aGUgdHJpZ2dlciB3ZWxsIGJlbG93IDgwJS4nLFxuICByZXRlbnRpb25UaXRsZTogJ1JldGVudGlvbicsXG4gIHJldGFpblRva2VuczogJ0tlZXAgbGFzdCAodG9rZW5zKScsXG4gIHJldGFpblRva2Vuc0hpbnQ6ICdWZXJiYXRpbSByZWNlbnQtY29udGV4dCBidWRnZXQsIGUuZy4gMzJrLiBFbXB0eS8wID0gdXNlIHRoZSByYXRpbyBiZWxvdy4nLFxuICByZXRhaW5SYXRpbzogJ0tlZXAgcmF0aW8nLFxuICBiZWhhdmlvdXJUaXRsZTogJ0JlaGF2aW91cicsXG4gIGF1dG86ICdBdXRvbWF0aWMgY29tcGFjdGlvbicsXG4gIGF1dG9IaW50OiAnT2ZmaWNpYWwgYmV0d2Vlbi1zdGVwIHByZXNzdXJlIGNvbXBhY3Rpb24gYW5kIGNvbnRleHQtb3ZlcmZsb3cgcmVjb3ZlcnkuJyxcbiAgdHVybkVuZDogJ0NvbXBhY3QgYXQgZW5kIG9mIHR1cm4nLFxuICB0dXJuRW5kSGludDogJ1J1bnMgb25lIG1vcmUgY29tcGFjdGlvbiB3aGVuIHRoZSBhZ2VudCBnb2VzIGlkbGUuJyxcbiAgc3VtbWFyaXphdGlvblRpdGxlOiAnU3VtbWFyaXphdGlvbicsXG4gIHN1bW1hcml6YXRpb25Nb2RlOiAnTW9kZWwnLFxuICBtb2RlU2Vzc2lvbjogJ1Nlc3Npb24gbW9kZWwnLFxuICBtb2RlQ3VzdG9tOiAnQ3VzdG9tIG1vZGVsJyxcbiAgcHJvdmlkZXI6ICdQcm92aWRlcicsXG4gIG1vZGVsOiAnTW9kZWwnLFxuICByZWFzb25pbmc6ICdSZWFzb25pbmcnLFxuICByZWFzb25pbmdEZWZhdWx0OiAnRGVmYXVsdCcsXG4gIHJlYXNvbmluZ09mZjogJ09mZicsXG4gIG1heFRva2VuczogJ1N1bW1hcnkgb3V0cHV0IGNhcCAodG9rZW5zKScsXG4gIGFkdmFuY2VkVGl0bGU6ICdBZHZhbmNlZCcsXG4gIGNvbXBhY3Rpb25SZXRyaWVzOiAnRXh0cmEgY29tcGFjdGlvbiBhdHRlbXB0cycsXG4gIG1heE92ZXJmbG93UmV0cmllczogJ092ZXJmbG93IHJlY292ZXJ5IGF0dGVtcHRzJyxcbiAgLy8gTW9kZWxzXG4gIG1vZGVsc1RpdGxlOiAnbGxhbWEuY3BwIG1vZGVscycsXG4gIG1vZGVsc0ludHJvOiAnUmVhZCBjb250ZXh0IHdpbmRvdyBhbmQgaW5wdXQgbW9kYWxpdGllcyBmcm9tIHRoZSBzZXJ2ZXIgYW5kIGZpbGwgdGhlIG1vZGVsIGVudHJpZXMgb2YgYSBwaS1haSBwcm92aWRlci4nLFxuICBlbnJpY2g6ICdFbnJpY2ggZnJvbSBzZXJ2ZXInLFxuICBlbnJpY2hpbmc6ICdFbnJpY2hpbmdcXHUyMDI2JyxcbiAgbm9CYXNlVXJsOiAnTm8gZW5kcG9pbnQgY29uZmlndXJlZCBmb3IgdGhpcyBwcm92aWRlci4nLFxuICBlbnJpY2hlZDogJ0VucmljaGVkIHtjb3VudH0gbW9kZWwocykuJyxcbiAgLy8gTm90aWZpY2F0aW9uc1xuICBjb2xvcnNHcm91cDogJ1RhYiBzdGF0dXMgbGlnaHQnLFxuICBjb2xvcnNJbnRybzogJ1RoZSBicm93c2VyIHRhYiBpY29uIHJlZmxlY3RzIHRoZSBzZXNzaW9uIHN0YXRlOiBncmVlbiA9IGZpbmlzaGVkLCBhbWJlciA9IHdhaXRpbmcgZm9yIHlvdS4nLFxuICBjb2xvcnNFbmFibGVkOiAnQ29sb3IgdGhlIHRhYiBpY29uJyxcbiAgY29sb3JzRW5hYmxlZEhpbnQ6ICdPZmYga2VlcHMgdGhlIG9mZmljaWFsIGZhdmljb24gYXQgYWxsIHRpbWVzLicsXG4gIGdyZWVuTGFiZWw6ICdGaW5pc2hlZCcsXG4gIGFtYmVyTGFiZWw6ICdXYWl0aW5nIChxdWVzdGlvbi9hcHByb3ZhbCknLFxuICBibGFja0xhYmVsOiAnSWRsZSBjb2xvcicsXG4gIGJsYWNrSGludDogJ0xlYXZlIGVtcHR5IHRvIGtlZXAgdGhlIG9mZmljaWFsIGZhdmljb24gd2hlbiBpZGxlLicsXG4gIGNvbG9yUmVzZXQ6ICdDbGVhcicsXG4gIGNvbG9yVW5zZXQ6ICdvZmZpY2lhbCcsXG4gIG5vdGlmeUdyb3VwOiAnU3lzdGVtIG5vdGlmaWNhdGlvbnMnLFxuICBub3RpZnlJbnRybzogJ1JhaXNlIGEgYnJvd3NlciBub3RpZmljYXRpb24gd2hlbiBhIHNlc3Npb24gZmluaXNoZXMgb3IgYSBxdWVzdGlvbi9hcHByb3ZhbCB3YWl0cyBmb3IgeW91LicsXG4gIG5vdGlmeUVuYWJsZWQ6ICdFbmFibGUgbm90aWZpY2F0aW9ucycsXG4gIG5vdGlmeUVuYWJsZWRIaW50OiAnVGhlIGJyb3dzZXIgYXNrcyBmb3IgcGVybWlzc2lvbiB0aGUgZmlyc3QgdGltZSB5b3UgZW5hYmxlIHRoaXMuJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZDogJ05vdGlmeSBpbiB0aGUgZm9yZWdyb3VuZCcsXG4gIG5vdGlmeUZvcmVncm91bmRIaW50OiAnQWxzbyBub3RpZnkgd2hpbGUgdGhlIHRhYiBpcyB2aXNpYmxlIGFuZCBmb2N1c2VkLicsXG4gIG5vdGlmeUF1dG9IaWRlOiAnS2VlcCBvbiBzY3JlZW4nLFxuICBub3RpZnlBdXRvSGlkZUhpbnQ6ICdPbjogdGhlIG5vdGlmaWNhdGlvbiBzdGF5cyB1bnRpbCB5b3UgZGlzbWlzcyBpdC4nLFxuICBwZXJtaXNzaW9uRGVuaWVkOiAnQmxvY2tlZCBieSB0aGUgYnJvd3NlciBcXHUyMDE0IHJlLWVuYWJsZSBub3RpZmljYXRpb25zIGluIHRoZSBzaXRlIHNldHRpbmdzLicsXG4gIHBlcm1pc3Npb25VbnN1cHBvcnRlZDogJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHN5c3RlbSBub3RpZmljYXRpb25zLicsXG4gIG5vdGlmeURvbmVUaXRsZTogJ1Nlc3Npb24gZmluaXNoZWQnLFxuICBub3RpZnlQZW5kaW5nVGl0bGU6ICdTb21ldGhpbmcgYXdhaXRzIHlvdScsXG4gIG5vdGlmeUR1cmF0aW9uOiAndHVybiB0b29rIHtkdXJhdGlvbn0nLFxuICBkdXJhdGlvblNlY29uZHM6ICd7c2Vjb25kc31zJyxcbiAgZHVyYXRpb25NaW51dGVzOiAne21pbnV0ZXN9bXtzZWNvbmRzfXMnLFxuICBwZW5kaW5nS2luZEFwcHJvdmFsOiAnQXBwcm92YWwgbmVlZGVkJyxcbiAgcGVuZGluZ0tpbmRRdWVzdGlvbjogJ1F1ZXN0aW9uJyxcbiAgcGVuZGluZ0tpbmRQbGFuUmV2aWV3OiAnUGxhbiByZXZpZXcnLFxuICBwZW5kaW5nQXBwcm92YWxUb29sOiAnQXBwcm92YWwgXFx1MDBiNyB7dG9vbH0nLFxuICBwZW5kaW5nUXVlc3Rpb25DaG9vc2U6ICdDaG9vc2UgYW4gb3B0aW9uJyxcbiAgcGVuZGluZ1F1ZXN0aW9uTXVsdGk6ICdDaG9vc2Ugb3B0aW9ucycsXG4gIHBlbmRpbmdRdWVzdGlvbkZpbGw6ICdUeXBlIGFuIGFuc3dlcicsXG4gIHBlbmRpbmdRdWVzdGlvbkJhdGNoOiAne2NvdW50fSBxdWVzdGlvbnMnLFxuICAvLyBTaGFyZWRcbiAgc2F2ZTogJ1NhdmUnLFxuICBzYXZlZDogJ1NhdmVkLicsXG4gIGludmFsaWRUb2tlbjogJ0VudGVyIGEgbnVtYmVyIG9yIGEgay9NIHN1ZmZpeCB2YWx1ZSAoZS5nLiAxMzBrKS4nLFxuICBpbnZhbGlkSGV4OiAnQ29sb3IgbXVzdCBiZSAjUlJHR0JCLicsXG4gIGVycm9yUHJlZml4OiAnRXJyb3I6ICcsXG4gIHVuYXZhaWxhYmxlOiAnVGhpcyBzZXR0aW5nIGlzIG5vdCBhdmFpbGFibGUgZnJvbSB0aGlzIGNsaWVudC4nLFxuICBsb2FkaW5nOiAnTG9hZGluZ1xcdTIwMjYnLFxufVxuXG5jb25zdCB6aCA9IHtcbiAgdGl0bGU6ICdNYWxrbyBcXHU1MDRmXFx1NTk3ZCcsXG4gIGludHJvOiAnXFx1NWI5OFxcdTY1YjlcXHU1MzhiXFx1N2YyOVxcdTVmMTVcXHU2NGNlXFx1NzY4NFxcdTUzZWZcXHU4YzAzXFx1NGYzNFxcdTc1MWZcXHUzMDAyJyxcbiAgdGFiQ29tcGFjdGlvbjogJ1xcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTUzOGJcXHU3ZjI5JyxcbiAgdGFiTW9kZWxzOiAnbGxhbWEuY3BwIFxcdTZhMjFcXHU1NzhiJyxcbiAgdGFiTm90aWZpY2F0aW9uczogJ1xcdTkwMWFcXHU3N2U1JyxcbiAgdGhyZXNob2xkVGl0bGU6ICdcXHU1MzhiXFx1N2YyOVxcdTk2MDBcXHU1MDNjJyxcbiAgdGhyZXNob2xkVG9rZW5zOiAnXFx1OTYwMFxcdTUwM2NcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIHRocmVzaG9sZFRva2Vuc0hpbnQ6ICdcXHU3ZWRkXFx1NWJmOSB0b2tlbiBcXHU5NjAwXFx1NTAzY1xcdWZmMGNcXHU1OTgyIDEzMGtcXHUzMDAyXFx1NzU1OVxcdTdhN2EvMCA9IFxcdTc1MjhcXHU0ZTBiXFx1NjViOVxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIGNvbnRleHRXaW5kb3c6ICdcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU3YTk3XFx1NTNlM1xcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgY29udGV4dFdpbmRvd0hpbnQ6ICdcXHU3ZWRkXFx1NWJmOVxcdTk2MDBcXHU1MDNjXFx1NjI0MFxcdTRmOWRcXHU2MzZlXFx1NzY4NFxcdTdhOTdcXHU1M2UzXFx1ZmYwOFxcdTU5ODIgMjAwa1xcdWZmMDlcXHUzMDAyMCA9IFxcdTUzZWFcXHU3NTI4XFx1NmJkNFxcdTRmOGJcXHUzMDAyJyxcbiAgdGhyZXNob2xkUmF0aW86ICdcXHU5NjAwXFx1NTAzY1xcdTZiZDRcXHU0ZjhiJyxcbiAgdGhyZXNob2xkUmF0aW9IaW50OiAnXFx1NWY1M1xcdTdlZGRcXHU1YmY5XFx1OTYwMFxcdTUwM2NcXHU0ZTNhXFx1N2E3YVxcdTY1ZjZcXHU0ZjdmXFx1NzUyOFxcdWZmMDgwLjggPSBcXHU3YTk3XFx1NTNlM1xcdTc2ODQgODAlXFx1ZmYwOVxcdTMwMDInLFxuICBoZWFkcm9vbTogJ1xcdTk4ODRcXHU3NTU5XFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICBoZWFkcm9vbUhpbnQ6ICdcXHU1NzI4XFx1OGY5M1xcdTUxZmFcXHU5ODg0XFx1N2I5N1xcdTRlNGJcXHU1OTE2XFx1NTE4ZFxcdTk4ODRcXHU3NTU5XFx1NzY4NFxcdTkxY2ZcXHUzMDAyXFx1NWI5OFxcdTY1YjlcXHU5ZWQ4XFx1OGJhNCA2NTUzNiBcXHU0ZjFhXFx1NjI4YVxcdTg5ZTZcXHU1M2QxXFx1NzBiOVxcdTYyYzlcXHU1MjMwIDgwJSBcXHU0ZWU1XFx1NGUwYlxcdTMwMDInLFxuICByZXRlbnRpb25UaXRsZTogJ1xcdTRmZGRcXHU3NTU5JyxcbiAgcmV0YWluVG9rZW5zOiAnXFx1NGZkZFxcdTc1NTlcXHU2NzAwXFx1OGZkMVxcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgcmV0YWluVG9rZW5zSGludDogJ1xcdTkwMTBcXHU1YjU3XFx1NGZkZFxcdTc1NTlcXHU3Njg0XFx1OGZkMVxcdTY3MWZcXHU5ODg0XFx1N2I5N1xcdWZmMGNcXHU1OTgyIDMya1xcdTMwMDJcXHU3NTU5XFx1N2E3YS8wID0gXFx1NzUyOFxcdTRlMGJcXHU2NWI5XFx1NmJkNFxcdTRmOGJcXHUzMDAyJyxcbiAgcmV0YWluUmF0aW86ICdcXHU0ZmRkXFx1NzU1OVxcdTZiZDRcXHU0ZjhiJyxcbiAgYmVoYXZpb3VyVGl0bGU6ICdcXHU4ODRjXFx1NGUzYScsXG4gIGF1dG86ICdcXHU4MWVhXFx1NTJhOFxcdTUzOGJcXHU3ZjI5JyxcbiAgYXV0b0hpbnQ6ICdcXHU1Yjk4XFx1NjViOVxcdTc2ODRcXHU2YjY1XFx1OTVmNFxcdTUzOGJcXHU1MjliXFx1NTM4YlxcdTdmMjlcXHU0ZTBlXFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1NmVhMlxcdTUxZmFcXHU2MDYyXFx1NTkwZFxcdTMwMDInLFxuICB0dXJuRW5kOiAnXFx1OGY2ZVxcdTY3MmJcXHU1MzhiXFx1N2YyOScsXG4gIHR1cm5FbmRIaW50OiAnXFx1NGVlM1xcdTc0MDZcXHU4ZjZjXFx1NGUzYSBpZGxlIFxcdTY1ZjZcXHU1MThkXFx1NTM4YlxcdTdmMjlcXHU0ZTAwXFx1NmIyMVxcdTMwMDInLFxuICBzdW1tYXJpemF0aW9uVGl0bGU6ICdcXHU2NDU4XFx1ODk4MScsXG4gIHN1bW1hcml6YXRpb25Nb2RlOiAnXFx1NmEyMVxcdTU3OGInLFxuICBtb2RlU2Vzc2lvbjogJ1xcdTRmMWFcXHU4YmRkXFx1NmEyMVxcdTU3OGInLFxuICBtb2RlQ3VzdG9tOiAnXFx1ODFlYVxcdTViOWFcXHU0ZTQ5XFx1NmEyMVxcdTU3OGInLFxuICBwcm92aWRlcjogJ1xcdTYzZDBcXHU0ZjliXFx1NTU0NicsXG4gIG1vZGVsOiAnXFx1NmEyMVxcdTU3OGInLFxuICByZWFzb25pbmc6ICdcXHU2MDFkXFx1ODAwM1xcdTdlYTdcXHU1MjJiJyxcbiAgcmVhc29uaW5nRGVmYXVsdDogJ1xcdTllZDhcXHU4YmE0JyxcbiAgcmVhc29uaW5nT2ZmOiAnXFx1NTE3M1xcdTk1ZWQnLFxuICBtYXhUb2tlbnM6ICdcXHU2NDU4XFx1ODk4MVxcdThmOTNcXHU1MWZhXFx1NGUwYVxcdTk2NTBcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIGFkdmFuY2VkVGl0bGU6ICdcXHU5YWQ4XFx1N2VhNycsXG4gIGNvbXBhY3Rpb25SZXRyaWVzOiAnXFx1OTg5ZFxcdTU5MTZcXHU1MzhiXFx1N2YyOVxcdTVjMWRcXHU4YmQ1JyxcbiAgbWF4T3ZlcmZsb3dSZXRyaWVzOiAnXFx1NmVhMlxcdTUxZmFcXHU2MDYyXFx1NTkwZFxcdTVjMWRcXHU4YmQ1JyxcbiAgbW9kZWxzVGl0bGU6ICdsbGFtYS5jcHAgXFx1NmEyMVxcdTU3OGInLFxuICBtb2RlbHNJbnRybzogJ1xcdTRlY2VcXHU2NzBkXFx1NTJhMVxcdTU2NjhcXHU4YmZiXFx1NTNkNlxcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTdhOTdcXHU1M2UzXFx1NGUwZVxcdThmOTNcXHU1MTY1XFx1NmEyMVxcdTYwMDFcXHVmZjBjXFx1NWU3NlxcdTU4NmJcXHU1MTQ1IHBpLWFpIFxcdTYzZDBcXHU0ZjliXFx1NTU0NlxcdTc2ODRcXHU2YTIxXFx1NTc4YlxcdTY3NjFcXHU3NmVlXFx1MzAwMicsXG4gIGVucmljaDogJ1xcdTRlY2VcXHU2NzBkXFx1NTJhMVxcdTU2NjhcXHU1YmNjXFx1NTMxNicsXG4gIGVucmljaGluZzogJ1xcdTZiNjNcXHU1NzI4XFx1NWJjY1xcdTUzMTZcXHUyMDI2JyxcbiAgbm9CYXNlVXJsOiAnXFx1OGJlNVxcdTYzZDBcXHU0ZjliXFx1NTU0NlxcdTY3MmFcXHU5MTRkXFx1N2Y2ZVxcdTdhZWZcXHU3MGI5XFx1MzAwMicsXG4gIGVucmljaGVkOiAnXFx1NWRmMlxcdTViY2NcXHU1MzE2IHtjb3VudH0gXFx1NGUyYVxcdTZhMjFcXHU1NzhiXFx1MzAwMicsXG4gIGNvbG9yc0dyb3VwOiAnXFx1NjgwN1xcdTdiN2VcXHU5ODc1XFx1NzJiNlxcdTYwMDFcXHU3MDZmJyxcbiAgY29sb3JzSW50cm86ICdcXHU2ODA3XFx1N2I3ZVxcdTk4NzVcXHU1NmZlXFx1NjgwN1xcdTk2OGZcXHU0ZjFhXFx1OGJkZFxcdTcyYjZcXHU2MDAxXFx1NTNkOFxcdTgyNzJcXHVmZjFhXFx1N2VmZiA9IFxcdTVkZjJcXHU1YjhjXFx1NjIxMFxcdWZmMGNcXHU3NDI1XFx1NzNjMCA9IFxcdTdiNDlcXHU0ZjYwXFx1NTkwNFxcdTc0MDZcXHUzMDAyJyxcbiAgY29sb3JzRW5hYmxlZDogJ1xcdTU0MmZcXHU3NTI4XFx1NTZmZVxcdTY4MDdcXHU1M2Q4XFx1ODI3MicsXG4gIGNvbG9yc0VuYWJsZWRIaW50OiAnXFx1NTE3M1xcdTk1ZWRcXHU1NDBlXFx1NTljYlxcdTdlYzhcXHU0ZjdmXFx1NzUyOFxcdTViOThcXHU2NWI5XFx1NTZmZVxcdTY4MDdcXHUzMDAyJyxcbiAgZ3JlZW5MYWJlbDogJ1xcdTVkZjJcXHU1YjhjXFx1NjIxMCcsXG4gIGFtYmVyTGFiZWw6ICdcXHU1Zjg1XFx1NTkwNFxcdTc0MDZcXHVmZjA4XFx1NjNkMFxcdTk1ZWUvXFx1NWJhMVxcdTYyNzlcXHVmZjA5JyxcbiAgYmxhY2tMYWJlbDogJ1xcdTllZDhcXHU4YmE0XFx1ODI3MicsXG4gIGJsYWNrSGludDogJ1xcdTc1NTlcXHU3YTdhXFx1NTIxOVxcdTdhN2FcXHU5NWYyXFx1NjVmNlxcdTRmN2ZcXHU3NTI4XFx1NWI5OFxcdTY1YjlcXHU1NmZlXFx1NjgwN1xcdTMwMDInLFxuICBjb2xvclJlc2V0OiAnXFx1NmUwNVxcdTk2NjQnLFxuICBjb2xvclVuc2V0OiAnXFx1NWI5OFxcdTY1YjknLFxuICBub3RpZnlHcm91cDogJ1xcdTdjZmJcXHU3ZWRmXFx1OTAxYVxcdTc3ZTUnLFxuICBub3RpZnlJbnRybzogJ1xcdTRmMWFcXHU4YmRkXFx1NWI4Y1xcdTYyMTBcXHU2MjE2XFx1NjcwOVxcdTYzZDBcXHU5NWVlL1xcdTViYTFcXHU2Mjc5XFx1N2I0OVxcdTRmNjBcXHU1OTA0XFx1NzQwNlxcdTY1ZjZcXHU1M2QxXFx1OTAwMVxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTkwMWFcXHU3N2U1XFx1MzAwMicsXG4gIG5vdGlmeUVuYWJsZWQ6ICdcXHU1NDJmXFx1NzUyOFxcdTkwMWFcXHU3N2U1JyxcbiAgbm90aWZ5RW5hYmxlZEhpbnQ6ICdcXHU5OTk2XFx1NmIyMVxcdTVmMDBcXHU1NDJmXFx1NjVmNlxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTRmMWFcXHU4YmUyXFx1OTVlZVxcdTYzODhcXHU2NzQzXFx1MzAwMicsXG4gIG5vdGlmeUZvcmVncm91bmQ6ICdcXHU1MjRkXFx1NTNmMFxcdTYzZDBcXHU5MTkyJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZEhpbnQ6ICdcXHU2ODA3XFx1N2I3ZVxcdTk4NzVcXHU1M2VmXFx1ODljMVxcdTRlMTRcXHU2NzA5XFx1NzEyNlxcdTcwYjlcXHU2NWY2XFx1NGU1ZlxcdTYzZDBcXHU5MTkyXFx1MzAwMicsXG4gIG5vdGlmeUF1dG9IaWRlOiAnXFx1NWUzOFxcdTlhN2JcXHU1YzRmXFx1NWU1NScsXG4gIG5vdGlmeUF1dG9IaWRlSGludDogJ1xcdTVmMDBcXHU1NDJmXFx1NTQwZVxcdTk3MDBcXHU2MjRiXFx1NTJhOFxcdTUxNzNcXHU5NWVkXFx1NjI0ZFxcdTRmMWFcXHU2ZDg4XFx1NTkzMVxcdTMwMDInLFxuICBwZXJtaXNzaW9uRGVuaWVkOiAnXFx1NWRmMlxcdTg4YWJcXHU2ZDRmXFx1ODljOFxcdTU2NjhcXHU2MmQyXFx1N2VkZFxcdWZmMGNcXHU4YmY3XFx1NTcyOFxcdTdhZDlcXHU3MGI5XFx1OGJiZVxcdTdmNmVcXHU0ZTJkXFx1NjA2MlxcdTU5MGRcXHU5MDFhXFx1NzdlNVxcdTY3NDNcXHU5NjUwXFx1MzAwMicsXG4gIHBlcm1pc3Npb25VbnN1cHBvcnRlZDogJ1xcdTVmNTNcXHU1MjRkXFx1NmQ0ZlxcdTg5YzhcXHU1NjY4XFx1NGUwZFxcdTY1MmZcXHU2MzAxXFx1N2NmYlxcdTdlZGZcXHU5MDFhXFx1NzdlNVxcdTMwMDInLFxuICBub3RpZnlEb25lVGl0bGU6ICdcXHU0ZjFhXFx1OGJkZFxcdTVkZjJcXHU1YjhjXFx1NjIxMCcsXG4gIG5vdGlmeVBlbmRpbmdUaXRsZTogJ1xcdTY3MDlcXHU0ZWE0XFx1NGU5MlxcdTdiNDlcXHU1Zjg1XFx1NTkwNFxcdTc0MDYnLFxuICBub3RpZnlEdXJhdGlvbjogJ1xcdTY3MmNcXHU4ZjZlXFx1NjAzYlxcdTc1MjhcXHU2NWY2IHtkdXJhdGlvbn0nLFxuICBkdXJhdGlvblNlY29uZHM6ICd7c2Vjb25kc31cXHU3OWQyJyxcbiAgZHVyYXRpb25NaW51dGVzOiAne21pbnV0ZXN9XFx1NTIwNntzZWNvbmRzfVxcdTc5ZDInLFxuICBwZW5kaW5nS2luZEFwcHJvdmFsOiAnXFx1NWY4NVxcdTViYTFcXHU2Mjc5JyxcbiAgcGVuZGluZ0tpbmRRdWVzdGlvbjogJ1xcdTU0MTFcXHU0ZjYwXFx1NjNkMFxcdTk1ZWUnLFxuICBwZW5kaW5nS2luZFBsYW5SZXZpZXc6ICdcXHU4YmExXFx1NTIxMlxcdTVmODVcXHU1YmExXFx1NjgzOCcsXG4gIHBlbmRpbmdBcHByb3ZhbFRvb2w6ICdcXHU1Zjg1XFx1NWJhMVxcdTYyNzkgXFx1MDBiNyB7dG9vbH0nLFxuICBwZW5kaW5nUXVlc3Rpb25DaG9vc2U6ICdcXHU4YmY3XFx1NGY2MFxcdTkwMDlcXHU2MmU5JyxcbiAgcGVuZGluZ1F1ZXN0aW9uTXVsdGk6ICdcXHU4YmY3XFx1NGY2MFxcdTU5MWFcXHU5MDA5JyxcbiAgcGVuZGluZ1F1ZXN0aW9uRmlsbDogJ1xcdThiZjdcXHU0ZjYwXFx1NTg2YlxcdTUxOTknLFxuICBwZW5kaW5nUXVlc3Rpb25CYXRjaDogJ1xcdTU0MTFcXHU0ZjYwXFx1NjNkMFxcdTk1ZWVcXHVmZjA4e2NvdW50fSBcXHU0ZTJhXFx1ZmYwOScsXG4gIHNhdmU6ICdcXHU0ZmRkXFx1NWI1OCcsXG4gIHNhdmVkOiAnXFx1NWRmMlxcdTRmZGRcXHU1YjU4XFx1MzAwMicsXG4gIGludmFsaWRUb2tlbjogJ1xcdThiZjdcXHU4ZjkzXFx1NTE2NVxcdTY1NzBcXHU1YjU3XFx1NjIxNlxcdTVlMjYgay9NIFxcdTU0MGVcXHU3ZjAwXFx1NzY4NFxcdTUwM2NcXHVmZjA4XFx1NTk4MiAxMzBrXFx1ZmYwOVxcdTMwMDInLFxuICBpbnZhbGlkSGV4OiAnXFx1OTg5Y1xcdTgyNzJcXHU2ODNjXFx1NWYwZlxcdTVlOTRcXHU0ZTNhICNSUkdHQkJcXHUzMDAyJyxcbiAgZXJyb3JQcmVmaXg6ICdcXHU5NTE5XFx1OGJlZlxcdWZmMWEgJyxcbiAgdW5hdmFpbGFibGU6ICdcXHU2YjY0XFx1OGJiZVxcdTdmNmVcXHU1NzI4XFx1NWY1M1xcdTUyNGRcXHU1YmEyXFx1NjIzN1xcdTdhZWZcXHU0ZTBkXFx1NTNlZlxcdTc1MjhcXHUzMDAyJyxcbiAgbG9hZGluZzogJ1xcdTUyYTBcXHU4ZjdkXFx1NGUyZFxcdTIwMjYnLFxufVxuXG4vKiogUGFyc2UgYSBodW1hbiB0b2tlbiBjb3VudCAoYDEzMGtgLCBgMS41bWAsIGAxMzAwMDBgKS4gKi9cbmZ1bmN0aW9uIHBhcnNlVG9rZW5UZXh0KHRleHQpIHtcbiAgY29uc3QgcmF3ID0gU3RyaW5nKHRleHQgPz8gJycpLnRyaW0oKS5yZXBsYWNlKC9bXFxzX10vZywgJycpXG4gIGlmIChyYXcgPT09ICcnKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IG1hdGNoID0gL14oXFxkKyg/OlsuLF1cXGQrKT8pKFtrS21NXSk/JC8uZXhlYyhyYXcpXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBiYXNlID0gTnVtYmVyKG1hdGNoWzFdLnJlcGxhY2UoJywnLCAnLicpKVxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShiYXNlKSB8fCBiYXNlIDwgMCkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBzY2FsZSA9IG1hdGNoWzJdID09PSB1bmRlZmluZWQgPyAxIDogbWF0Y2hbMl0udG9Mb3dlckNhc2UoKSA9PT0gJ2snID8gMTAwMCA6IDEwMDAwMDBcbiAgcmV0dXJuIE1hdGgucm91bmQoYmFzZSAqIHNjYWxlKVxufVxuXG4vKiogQnVpbGQgYHsgcHJvdmlkZXIsIG1vZGVsLCBuYW1lLCBsZXZlbHMgfWAgcm93cyBmcm9tIHRoZSBwaS1haSBjb25maWcgdmFsdWUuICovXG5mdW5jdGlvbiBidWlsZENhdGFsb2cocHJvdmlkZXJzKSB7XG4gIGNvbnN0IHJvd3MgPSBbXVxuICBpZiAocHJvdmlkZXJzID09PSBudWxsIHx8IHR5cGVvZiBwcm92aWRlcnMgIT09ICdvYmplY3QnKSByZXR1cm4gcm93c1xuICBmb3IgKGNvbnN0IFtwcm92aWRlciwgcHJvZmlsZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzKSkge1xuICAgIGNvbnN0IG1vZGVscyA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkocHJvZmlsZS5tb2RlbHMpID8gcHJvZmlsZS5tb2RlbHMgOiBbXVxuICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgICBpZiAobW9kZWwgPT09IG51bGwgfHwgdHlwZW9mIG1vZGVsICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgbW9kZWwuaWQgIT09ICdzdHJpbmcnKSBjb250aW51ZVxuICAgICAgY29uc3QgZWZmb3J0cyA9IG1vZGVsLnJlYXNvbmluZ0VmZm9ydHNcbiAgICAgIGNvbnN0IGxldmVscyA9IGVmZm9ydHMgPT09IGZhbHNlID8gW10gOiAoZWZmb3J0cyAhPT0gbnVsbCAmJiB0eXBlb2YgZWZmb3J0cyA9PT0gJ29iamVjdCcgPyBPYmplY3Qua2V5cyhlZmZvcnRzKSA6IFtdKVxuICAgICAgcm93cy5wdXNoKHsgcHJvdmlkZXIsIG1vZGVsOiBtb2RlbC5pZCwgbmFtZTogdHlwZW9mIG1vZGVsLm5hbWUgPT09ICdzdHJpbmcnICYmIG1vZGVsLm5hbWUgIT09ICcnID8gbW9kZWwubmFtZSA6IG1vZGVsLmlkLCBsZXZlbHMgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJvd3Ncbn1cblxuY29uc3QgUyA9IHtcbiAgd3JhcDogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDQsIG1heFdpZHRoOiA2ODAsIHBhZGRpbmdUb3A6IDQgfSxcbiAgdGFiczogeyBtYXJnaW5Ub3A6IDQgfSxcbiAgZ3JvdXA6IHsgbWFyZ2luVG9wOiAxMCwgcGFkZGluZ1RvcDogMTAsIGJvcmRlclRvcDogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDMpJyB9LFxuICBncm91cEZpcnN0OiB7IG1hcmdpblRvcDogMTAgfSxcbiAgZ3JvdXBUaXRsZTogeyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogMiB9LFxuICBsYWJlbDogeyBkaXNwbGF5OiAnYmxvY2snLCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogNiwgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknIH0sXG4gIGhpbnQ6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBtYXJnaW46ICc0cHggMCAxMnB4JyB9LFxuICBpbnB1dDoge1xuICAgIGhlaWdodDogMzIsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBib3JkZXI6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWw0KScsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogMTQsXG4gICAgYmFja2dyb3VuZDogJ3ZhcigtLWRzdy1hbGlhcy1iZy1sYXllci0xKScsXG4gICAgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIH0sXG4gIHNlbGVjdDogeyBjdXJzb3I6ICdwb2ludGVyJyB9LFxuICBoZXg6IHsgZm9udEZhbWlseTogJ21vbm9zcGFjZScsIHdpZHRoOiAxMTAsIGZsZXg6ICcwIDAgYXV0bycgfSxcbiAgY29sb3I6IHtcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgIHdpZHRoOiAzMixcbiAgICBoZWlnaHQ6IDMyLFxuICAgIHBhZGRpbmc6IDIsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sNCknLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBiYWNrZ3JvdW5kOiAndmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTEpJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgfSxcbiAgcm93VHdvOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxMiB9LFxuICByb3dGbGV4OiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA4LCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9LFxuICBjb2w6IHsgZmxleDogMSwgbWluV2lkdGg6IDAgfSxcbiAgdG9nZ2xlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTAsIG1hcmdpbkJvdHRvbTogMTIgfSxcbiAgdG9nZ2xlVGV4dDogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDIgfSxcbiAgdG9nZ2xlTGFiZWw6IHsgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScgfSxcbiAgZXJyb3I6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtc3RhdGUtZXJyb3ItcHJpbWFyeSwgI2MwMCknLCBmb250U2l6ZTogMTIsIG1hcmdpblRvcDogMiB9LFxufVxuXG5mdW5jdGlvbiBQcmVmc1NlY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgeyB0LCB1c2VQcmVmcywgdXNlTW9kZWxDYXRhbG9nLCBzYXZlLCBwcm9iZSwgd3JpdGVNb2RlbHMgfSA9IHByb3BzXG4gIGNvbnN0IHNuYXAgPSB1c2VQcmVmcygocykgPT4gcylcbiAgY29uc3QgY2F0YWxvZ1NuYXAgPSB1c2VNb2RlbENhdGFsb2coKHMpID0+IHMpXG4gIGNvbnN0IHZhbHVlID0gc25hcCAhPT0gbnVsbCAmJiBzbmFwICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHNuYXAudmFsdWUgPT09ICdvYmplY3QnICYmIHNuYXAudmFsdWUgIT09IG51bGwgPyBzbmFwLnZhbHVlIDoge31cbiAgY29uc3QgcHJvdmlkZXJzID0gY2F0YWxvZ1NuYXAgIT09IG51bGwgJiYgY2F0YWxvZ1NuYXAgIT09IHVuZGVmaW5lZCAmJiBjYXRhbG9nU25hcC52YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgY2F0YWxvZ1NuYXAudmFsdWUgPT09ICdvYmplY3QnID8gY2F0YWxvZ1NuYXAudmFsdWUucHJvdmlkZXJzIDogdW5kZWZpbmVkXG4gIGNvbnN0IGNhdGFsb2cgPSBidWlsZENhdGFsb2cocHJvdmlkZXJzKVxuICBjb25zdCBzdGF0dXMgPSBzbmFwICE9PSBudWxsICYmIHNuYXAgIT09IHVuZGVmaW5lZCA/IHNuYXAuc3RhdHVzIDogJ2xvYWRpbmcnXG4gIGNvbnN0IHdyaXRhYmxlID0gISEoc25hcCAmJiBzbmFwLndyaXRhYmxlKVxuXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZSgnY29tcGFjdGlvbicpXG4gIGNvbnN0IFtwZXJtaXNzaW9uLCBzZXRQZXJtaXNzaW9uXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IGN1cnJlbnROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkpXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gKHtcbiAgICB0aHJlc2hvbGRUb2tlbnM6IHZhbHVlLnRocmVzaG9sZFRva2VucyA/IFN0cmluZyh2YWx1ZS50aHJlc2hvbGRUb2tlbnMpIDogJycsXG4gICAgY29udGV4dFdpbmRvd1Rva2VuczogdmFsdWUuY29udGV4dFdpbmRvd1Rva2VucyA/IFN0cmluZyh2YWx1ZS5jb250ZXh0V2luZG93VG9rZW5zKSA6ICcnLFxuICAgIHJldGFpblRva2VuczogdmFsdWUucmV0YWluVG9rZW5zID8gU3RyaW5nKHZhbHVlLnJldGFpblRva2VucykgOiAnJyxcbiAgfSkpXG4gIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW5yaWNoTm90ZSwgc2V0RW5yaWNoTm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2J1c3lSb3V0ZSwgc2V0QnVzeVJvdXRlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCB2YWx1ZVJlZiA9IHNuYXAgJiYgc25hcC52YWx1ZVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERyYWZ0KHtcbiAgICAgIHRocmVzaG9sZFRva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYudGhyZXNob2xkVG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLnRocmVzaG9sZFRva2VucykgOiAnJyxcbiAgICAgIGNvbnRleHRXaW5kb3dUb2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLmNvbnRleHRXaW5kb3dUb2tlbnMgPyBTdHJpbmcodmFsdWVSZWYuY29udGV4dFdpbmRvd1Rva2VucykgOiAnJyxcbiAgICAgIHJldGFpblRva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYucmV0YWluVG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLnJldGFpblRva2VucykgOiAnJyxcbiAgICB9KVxuICAgIHNldE5vdGUoJycpXG4gIH0sIFt2YWx1ZVJlZl0pXG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdsb2FkaW5nJykpXG4gIGlmIChzdGF0dXMgPT09ICd1bmF2YWlsYWJsZScpIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ3VuYXZhaWxhYmxlJykpXG5cbiAgY29uc3QgZGlzYWJsZWQgPSAhd3JpdGFibGVcbiAgY29uc3Qgd3JpdGUgPSAoZmllbGQsIHYpID0+IHtcbiAgICBzZXROb3RlKCcnKVxuICAgIFByb21pc2UucmVzb2x2ZShzYXZlKGZpZWxkLCB2KSkuY2F0Y2goKGVycm9yKSA9PiBzZXROb3RlKHQoJ2Vycm9yUHJlZml4JykgKyBTdHJpbmcoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcikpKVxuICB9XG4gIGNvbnN0IGNvbW1pdFRva2VucyA9IChmaWVsZCwgdGV4dCkgPT4ge1xuICAgIGlmICh0ZXh0LnRyaW0oKSA9PT0gJycpIHsgd3JpdGUoZmllbGQsIDApOyByZXR1cm4gfVxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlVG9rZW5UZXh0KHRleHQpXG4gICAgaWYgKHBhcnNlZCA9PT0gdW5kZWZpbmVkKSB7IHNldE5vdGUodCgnaW52YWxpZFRva2VuJykpOyByZXR1cm4gfVxuICAgIHdyaXRlKGZpZWxkLCBwYXJzZWQpXG4gIH1cbiAgY29uc3QgbnVtID0gKGZpZWxkLCBmYWxsYmFjaykgPT4gKHtcbiAgICB2YWx1ZTogU3RyaW5nKHZhbHVlW2ZpZWxkXSAhPT0gdW5kZWZpbmVkID8gdmFsdWVbZmllbGRdIDogZmFsbGJhY2spLFxuICAgIGRpc2FibGVkLFxuICAgIG9uQ2hhbmdlOiAoZSkgPT4geyBjb25zdCBuID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTsgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkgd3JpdGUoZmllbGQsIG4pIH0sXG4gIH0pXG4gIGNvbnN0IHN3aXRjaEZpZWxkID0gKGxhYmVsS2V5LCBmaWVsZCwgaGludEtleSwgZmFsbGJhY2spID0+IGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZSwga2V5OiBmaWVsZCB9LFxuICAgIGVsKFN3aXRjaCwge1xuICAgICAgY2hlY2tlZDogdmFsdWVbZmllbGRdICE9PSB1bmRlZmluZWQgPyAhIXZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBsYWJlbDogdChsYWJlbEtleSksXG4gICAgICBvbkNoYW5nZTogKG5leHQpID0+IHdyaXRlKGZpZWxkLCBuZXh0KSxcbiAgICB9KSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGVUZXh0IH0sXG4gICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IFMudG9nZ2xlTGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgICAgaGludEtleSA/IGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIgfSB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gICAgKSxcbiAgKVxuICBjb25zdCB0ZXh0RmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBoaW50S2V5KSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogUy5pbnB1dCwgZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogZHJhZnRbZmllbGRdLFxuICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXREcmFmdCgoZCkgPT4gKHsgLi4uZCwgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUgfSkpLFxuICAgICAgb25CbHVyOiAoKSA9PiBjb21taXRUb2tlbnMoZmllbGQsIGRyYWZ0W2ZpZWxkXSksXG4gICAgICBvbktleURvd246IChlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgY29tbWl0VG9rZW5zKGZpZWxkLCBkcmFmdFtmaWVsZF0pIH0sXG4gICAgfSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSxcbiAgKVxuICBjb25zdCBudW1iZXJGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0JywgeyB0eXBlOiAnbnVtYmVyJywgc3RlcDogJ2FueScsIHN0eWxlOiBTLmlucHV0LCAuLi5udW0oZmllbGQsIGZhbGxiYWNrKSB9KSxcbiAgICBoaW50S2V5ID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gIClcbiAgLyoqIENvbG91ciByb3c6IG5hdGl2ZSBwaWNrZXIgKyBlZGl0YWJsZSBoZXgsIG9wdGlvbmFsIGNsZWFyIChlbXB0eSA9IG9mZmljaWFsKS4gKi9cbiAgY29uc3QgY29sb3JGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGZhbGxiYWNrSGV4LCBvcHRpb25hbCwgaGludEtleSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0eXBlb2YgdmFsdWVbZmllbGRdID09PSAnc3RyaW5nJyA/IHZhbHVlW2ZpZWxkXSA6ICcnXG4gICAgY29uc3Qgc2hvd24gPSBjdXJyZW50ICE9PSAnJyA/IGN1cnJlbnQgOiAoZmFsbGJhY2tIZXggPz8gJyMwMDAwMDAnKVxuICAgIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQobGFiZWxLZXkpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd0ZsZXggfSxcbiAgICAgICAgZWwoJ2lucHV0Jywge1xuICAgICAgICAgIHR5cGU6ICdjb2xvcicsIHZhbHVlOiBzaG93biwgZGlzYWJsZWQsIHN0eWxlOiBTLmNvbG9yLFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoZmllbGQsIGUudGFyZ2V0LnZhbHVlKSxcbiAgICAgICAgfSksXG4gICAgICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsIHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuaGV4IH0sIGRpc2FibGVkLFxuICAgICAgICAgIHZhbHVlOiBjdXJyZW50LCBwbGFjZWhvbGRlcjogb3B0aW9uYWwgPyB0KCdjb2xvclVuc2V0JykgOiAnJyxcbiAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBlLnRhcmdldC52YWx1ZS50cmltKClcbiAgICAgICAgICAgIGlmIChuZXh0ID09PSAnJyAmJiBvcHRpb25hbCkgd3JpdGUoZmllbGQsICcnKVxuICAgICAgICAgICAgZWxzZSBpZiAoSEVYLnRlc3QobmV4dCkpIHdyaXRlKGZpZWxkLCBuZXh0KVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBvcHRpb25hbCAmJiBjdXJyZW50ICE9PSAnJ1xuICAgICAgICAgID8gZWwoQnV0dG9uLCB7IHZhcmlhbnQ6ICdnaG9zdCcsIHNpemU6ICdzbScsIGRpc2FibGVkLCBvbkNsaWNrOiAoKSA9PiB3cml0ZShmaWVsZCwgJycpIH0sIHQoJ2NvbG9yUmVzZXQnKSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICApLFxuICAgICAgaGludEtleSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICAgIClcbiAgfVxuICBjb25zdCBlbmFibGVOb3RpZmljYXRpb25zID0gKG5leHQpID0+IHtcbiAgICBpZiAoIW5leHQpIHsgd3JpdGUoJ25vdGlmeUVuYWJsZWQnLCBmYWxzZSk7IHJldHVybiB9XG4gICAgd3JpdGUoJ25vdGlmeUVuYWJsZWQnLCB0cnVlKVxuICAgIHZvaWQgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oKS50aGVuKHNldFBlcm1pc3Npb24pXG4gIH1cblxuICBjb25zdCBlbnJpY2hQcm92aWRlciA9IGFzeW5jIChyb3V0ZUlkLCBwcm9maWxlKSA9PiB7XG4gICAgc2V0QnVzeVJvdXRlKHJvdXRlSWQpXG4gICAgc2V0RW5yaWNoTm90ZSgnJylcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm9iZSh7IGFyZ3M6IHsgYmFzZVVSTDogcHJvZmlsZS5iYXNlVVJMIH0gfSlcbiAgICAgIGNvbnN0IGZvdW5kID0gQXJyYXkuaXNBcnJheShyZXNwb25zZT8ubW9kZWxzKSA/IHJlc3BvbnNlLm1vZGVscyA6IFtdXG4gICAgICBjb25zdCBieUlkID0gbmV3IE1hcChmb3VuZC5tYXAoKG0pID0+IFttLmlkLCBtXSkpXG4gICAgICBjb25zdCBleGlzdGluZyA9IEFycmF5LmlzQXJyYXkocHJvZmlsZS5tb2RlbHMpID8gcHJvZmlsZS5tb2RlbHMgOiBbXVxuICAgICAgY29uc3QgbWVyZ2VkID0gZXhpc3RpbmcubGVuZ3RoID09PSAwXG4gICAgICAgID8gZm91bmQubWFwKChtKSA9PiAoe1xuICAgICAgICAgICAgaWQ6IG0uaWQsXG4gICAgICAgICAgICBuYW1lOiBtLm5hbWUsXG4gICAgICAgICAgICAuLi4obS5jb250ZXh0V2luZG93ID09PSB1bmRlZmluZWQgPyB7fSA6IHsgY29udGV4dFdpbmRvdzogbS5jb250ZXh0V2luZG93IH0pLFxuICAgICAgICAgICAgLi4uKG0ubWF4VG9rZW5zID09PSB1bmRlZmluZWQgPyB7fSA6IHsgbWF4VG9rZW5zOiBtLm1heFRva2VucyB9KSxcbiAgICAgICAgICAgIC4uLihtLmlucHV0ID09PSB1bmRlZmluZWQgPyB7fSA6IHsgaW5wdXQ6IG0uaW5wdXQgfSksXG4gICAgICAgICAgfSkpXG4gICAgICAgIDogZXhpc3RpbmcubWFwKChtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaXQgPSBieUlkLmdldChtLmlkKVxuICAgICAgICAgICAgaWYgKGhpdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbVxuICAgICAgICAgICAgY29uc3QgbmV4dCA9IHsgLi4ubSB9XG4gICAgICAgICAgICBpZiAobmV4dC5jb250ZXh0V2luZG93ID09PSB1bmRlZmluZWQgJiYgaGl0LmNvbnRleHRXaW5kb3cgIT09IHVuZGVmaW5lZCkgbmV4dC5jb250ZXh0V2luZG93ID0gaGl0LmNvbnRleHRXaW5kb3dcbiAgICAgICAgICAgIGlmIChuZXh0LmlucHV0ID09PSB1bmRlZmluZWQgJiYgaGl0LmlucHV0ICE9PSB1bmRlZmluZWQpIG5leHQuaW5wdXQgPSBoaXQuaW5wdXRcbiAgICAgICAgICAgIHJldHVybiBuZXh0XG4gICAgICAgICAgfSlcbiAgICAgIGF3YWl0IHdyaXRlTW9kZWxzKHJvdXRlSWQsIG1lcmdlZClcbiAgICAgIHNldEVucmljaE5vdGUodCgnZW5yaWNoZWQnLCB7IGNvdW50OiBtZXJnZWQubGVuZ3RoIH0pKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFbnJpY2hOb3RlKHQoJ2Vycm9yUHJlZml4JykgKyBTdHJpbmcoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcikpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldEJ1c3lSb3V0ZSgnJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBwcm92aWRlclJvd3MgPSBPYmplY3QuZW50cmllcyhwcm92aWRlcnMgIT09IG51bGwgJiYgdHlwZW9mIHByb3ZpZGVycyA9PT0gJ29iamVjdCcgPyBwcm92aWRlcnMgOiB7fSkubWFwKChbcm91dGVJZCwgcHJvZmlsZV0pID0+IHtcbiAgICBjb25zdCBiYXNlVVJMID0gcHJvZmlsZSAhPT0gbnVsbCAmJiB0eXBlb2YgcHJvZmlsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHByb2ZpbGUuYmFzZVVSTCA9PT0gJ3N0cmluZycgPyBwcm9maWxlLmJhc2VVUkwgOiAnJ1xuICAgIHJldHVybiBlbCgnZGl2JywgeyBrZXk6IHJvdXRlSWQsIHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgbWFyZ2luQm90dG9tOiA2IH0gfSxcbiAgICAgIGVsKCdzcGFuJywgeyBzdHlsZTogeyBmbGV4OiAxLCBtaW5XaWR0aDogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH0gfSwgYCR7cm91dGVJZH0ke2Jhc2VVUkwgPyBgIFx1MjAxNCAke2Jhc2VVUkx9YCA6ICcnfWApLFxuICAgICAgYmFzZVVSTFxuICAgICAgICA/IGVsKEJ1dHRvbiwge1xuICAgICAgICAgICAgdmFyaWFudDogJ291dGxpbmUnLFxuICAgICAgICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBidXN5Um91dGUgPT09IHJvdXRlSWQgfHwgZGlzYWJsZWQsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IHZvaWQgZW5yaWNoUHJvdmlkZXIocm91dGVJZCwgcHJvZmlsZSkgfSxcbiAgICAgICAgICB9LCBidXN5Um91dGUgPT09IHJvdXRlSWQgPyB0KCdlbnJpY2hpbmcnKSA6IHQoJ2VucmljaCcpKVxuICAgICAgICA6IGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIsIGZsZXhTaHJpbms6IDAgfSB9LCB0KCdub0Jhc2VVcmwnKSksXG4gICAgKVxuICB9KVxuXG4gIC8vIFN1bW1hcml6YXRpb24gbW9kZWwvcmVhc29uaW5nIHBpY2tlcnMuXG4gIGNvbnN0IG1vZGUgPSB2YWx1ZS5zdW1tYXJpemF0aW9uTW9kZSA9PT0gJ2N1c3RvbScgPyAnY3VzdG9tJyA6ICdzZXNzaW9uJ1xuICBjb25zdCBwcm92aWRlck5hbWVzID0gWy4uLm5ldyBTZXQoY2F0YWxvZy5tYXAoKHIpID0+IHIucHJvdmlkZXIpKV1cbiAgY29uc3Qgc2VsZWN0ZWRQcm92aWRlciA9IHZhbHVlLnN1bW1hcml6YXRpb25Qcm92aWRlciB8fCBwcm92aWRlck5hbWVzWzBdIHx8ICcnXG4gIGNvbnN0IG1vZGVsc0ZvclByb3ZpZGVyID0gY2F0YWxvZy5maWx0ZXIoKHIpID0+IHIucHJvdmlkZXIgPT09IHNlbGVjdGVkUHJvdmlkZXIpXG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gbW9kZWxzRm9yUHJvdmlkZXIuZmluZCgocikgPT4gci5tb2RlbCA9PT0gdmFsdWUuc3VtbWFyaXphdGlvbk1vZGVsKSB8fCBtb2RlbHNGb3JQcm92aWRlclswXVxuICBjb25zdCBsZXZlbFNldCA9IFsnZGVmYXVsdCcsICdvZmYnLCAuLi4oc2VsZWN0ZWRSb3cgPyBzZWxlY3RlZFJvdy5sZXZlbHMgOiBbXSldXG4gIGNvbnN0IHJlYXNvbmluZyA9IHZhbHVlLnN1bW1hcml6YXRpb25SZWFzb25pbmcgfHwgJ2RlZmF1bHQnXG4gIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSAocGFpcnMpID0+IHBhaXJzLm1hcCgoW3YsIGxhYmVsXSkgPT4gZWwoJ29wdGlvbicsIHsga2V5OiB2LCB2YWx1ZTogdiB9LCBsYWJlbCkpXG5cbiAgY29uc3Qgc3VtbWFyaXphdGlvbiA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ21vZGUnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdzdW1tYXJpemF0aW9uTW9kZScpKSxcbiAgICAgIGVsKCdzZWxlY3QnLCB7IHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLCB2YWx1ZTogbW9kZSwgb25DaGFuZ2U6IChlKSA9PiB3cml0ZSgnc3VtbWFyaXphdGlvbk1vZGUnLCBlLnRhcmdldC52YWx1ZSkgfSxcbiAgICAgICAgc2VsZWN0T3B0aW9ucyhbWydzZXNzaW9uJywgdCgnbW9kZVNlc3Npb24nKV0sIFsnY3VzdG9tJywgdCgnbW9kZUN1c3RvbScpXV0pKSxcbiAgICApLFxuICBdXG4gIGlmIChtb2RlID09PSAnY3VzdG9tJykge1xuICAgIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ3Byb3ZpZGVyJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgncHJvdmlkZXInKSksXG4gICAgICBlbCgnc2VsZWN0Jywge1xuICAgICAgICBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCwgdmFsdWU6IHNlbGVjdGVkUHJvdmlkZXIsXG4gICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5leHQgPSBjYXRhbG9nLmZpbmQoKHIpID0+IHIucHJvdmlkZXIgPT09IGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIHdyaXRlKCdzdW1tYXJpemF0aW9uUHJvdmlkZXInLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICBpZiAobmV4dCkgd3JpdGUoJ3N1bW1hcml6YXRpb25Nb2RlbCcsIG5leHQubW9kZWwpXG4gICAgICAgICAgd3JpdGUoJ3N1bW1hcml6YXRpb25SZWFzb25pbmcnLCAnZGVmYXVsdCcpXG4gICAgICAgIH0sXG4gICAgICB9LCBwcm92aWRlck5hbWVzLm1hcCgocCkgPT4gZWwoJ29wdGlvbicsIHsga2V5OiBwLCB2YWx1ZTogcCB9LCBwKSkpLFxuICAgICkpXG4gICAgc3VtbWFyaXphdGlvbi5wdXNoKGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAnbW9kZWwnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdtb2RlbCcpKSxcbiAgICAgIGVsKCdzZWxlY3QnLCB7XG4gICAgICAgIHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ZWRSb3cgPyBzZWxlY3RlZFJvdy5tb2RlbCA6ICcnLFxuICAgICAgICBvbkNoYW5nZTogKGUpID0+IHsgd3JpdGUoJ3N1bW1hcml6YXRpb25Nb2RlbCcsIGUudGFyZ2V0LnZhbHVlKTsgd3JpdGUoJ3N1bW1hcml6YXRpb25SZWFzb25pbmcnLCAnZGVmYXVsdCcpIH0sXG4gICAgICB9LCBtb2RlbHNGb3JQcm92aWRlci5tYXAoKHIpID0+IGVsKCdvcHRpb24nLCB7IGtleTogci5tb2RlbCwgdmFsdWU6IHIubW9kZWwgfSwgci5uYW1lKSkpLFxuICAgICkpXG4gIH1cbiAgc3VtbWFyaXphdGlvbi5wdXNoKGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAncmVhc29uaW5nJyB9LFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ3JlYXNvbmluZycpKSxcbiAgICBlbCgnc2VsZWN0JywgeyBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCwgdmFsdWU6IGxldmVsU2V0LmluY2x1ZGVzKHJlYXNvbmluZykgPyByZWFzb25pbmcgOiAnZGVmYXVsdCcsIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoJ3N1bW1hcml6YXRpb25SZWFzb25pbmcnLCBlLnRhcmdldC52YWx1ZSkgfSxcbiAgICAgIGxldmVsU2V0Lm1hcCgobHYpID0+IGVsKCdvcHRpb24nLCB7IGtleTogbHYsIHZhbHVlOiBsdiB9LCBsdiA9PT0gJ2RlZmF1bHQnID8gdCgncmVhc29uaW5nRGVmYXVsdCcpIDogbHYgPT09ICdvZmYnID8gdCgncmVhc29uaW5nT2ZmJykgOiBsdikpKSxcbiAgKSlcblxuICBjb25zdCBjb21wYWN0aW9uUGFuZWwgPSBbXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBGaXJzdCwga2V5OiAndGhyZXNob2xkJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCd0aHJlc2hvbGRUaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LFxuICAgICAgICB0ZXh0RmllbGQoJ3RocmVzaG9sZFRva2VucycsICd0aHJlc2hvbGRUb2tlbnMnLCAndGhyZXNob2xkVG9rZW5zSGludCcpLFxuICAgICAgICB0ZXh0RmllbGQoJ2NvbnRleHRXaW5kb3cnLCAnY29udGV4dFdpbmRvd1Rva2VucycsICdjb250ZXh0V2luZG93SGludCcpLFxuICAgICAgKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LFxuICAgICAgICBudW1iZXJGaWVsZCgndGhyZXNob2xkUmF0aW8nLCAndGhyZXNob2xkUmF0aW8nLCAndGhyZXNob2xkUmF0aW9IaW50JywgMC44KSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ2hlYWRyb29tJywgJ2hlYWRyb29tVG9rZW5zJywgJ2hlYWRyb29tSGludCcsIDMyNzY4KSxcbiAgICAgICksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAncmV0ZW50aW9uJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdyZXRlbnRpb25UaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LFxuICAgICAgICB0ZXh0RmllbGQoJ3JldGFpblRva2VucycsICdyZXRhaW5Ub2tlbnMnLCAncmV0YWluVG9rZW5zSGludCcpLFxuICAgICAgICBudW1iZXJGaWVsZCgncmV0YWluUmF0aW8nLCAncmV0YWluUmF0aW8nLCBudWxsLCAwLjE2KSxcbiAgICAgICksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnYmVoYXZpb3VyJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdiZWhhdmlvdXJUaXRsZScpKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdhdXRvJywgJ2F1dG8nLCAnYXV0b0hpbnQnLCB0cnVlKSxcbiAgICAgIHN3aXRjaEZpZWxkKCd0dXJuRW5kJywgJ3R1cm5FbmRDb21wYWN0aW9uRW5hYmxlZCcsICd0dXJuRW5kSGludCcsIGZhbHNlKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdzdW1tYXJpemF0aW9uJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdzdW1tYXJpemF0aW9uVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSwgc3VtbWFyaXphdGlvbiksXG4gICAgICBudW1iZXJGaWVsZCgnbWF4VG9rZW5zJywgJ21heFRva2VucycsIG51bGwsIDMyNzY4KSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdhZHZhbmNlZCcgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnYWR2YW5jZWRUaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LFxuICAgICAgICBudW1iZXJGaWVsZCgnY29tcGFjdGlvblJldHJpZXMnLCAnY29tcGFjdGlvblJldHJpZXMnLCBudWxsLCAxKSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ21heE92ZXJmbG93UmV0cmllcycsICdtYXhPdmVyZmxvd1JldHJpZXMnLCBudWxsLCAxKSxcbiAgICAgICksXG4gICAgKSxcbiAgXVxuXG4gIGNvbnN0IG1vZGVsc1BhbmVsID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwRmlyc3QsIGtleTogJ21vZGVscycgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnbW9kZWxzVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ21vZGVsc0ludHJvJykpLFxuICAgICAgLi4ucHJvdmlkZXJSb3dzLFxuICAgICAgZW5yaWNoTm90ZSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgZW5yaWNoTm90ZSkgOiBudWxsLFxuICAgICksXG4gIF1cblxuICBjb25zdCBub3RpZmljYXRpb25zRW5hYmxlZCA9IHZhbHVlLm5vdGlmeUVuYWJsZWQgIT09IHVuZGVmaW5lZCA/ICEhdmFsdWUubm90aWZ5RW5hYmxlZCA6IGZhbHNlXG4gIGNvbnN0IG5vdGlmaWNhdGlvbnNQYW5lbCA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cEZpcnN0LCBrZXk6ICdjb2xvcnMnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ2NvbG9yc0dyb3VwJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdjb2xvcnNJbnRybycpKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdjb2xvcnNFbmFibGVkJywgJ2NvbG9yc0VuYWJsZWQnLCAnY29sb3JzRW5hYmxlZEhpbnQnLCB0cnVlKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3bywga2V5OiAnY29sb3JzJyB9LFxuICAgICAgICBjb2xvckZpZWxkKCdncmVlbkxhYmVsJywgJ2dyZWVuJywgJyMyMkM1NUUnLCBmYWxzZSwgbnVsbCksXG4gICAgICAgIGNvbG9yRmllbGQoJ2FtYmVyTGFiZWwnLCAnYW1iZXInLCAnI0Y1OUUwQicsIGZhbHNlLCBudWxsKSxcbiAgICAgICAgY29sb3JGaWVsZCgnYmxhY2tMYWJlbCcsICdibGFjaycsICcjMDAwMDAwJywgdHJ1ZSwgJ2JsYWNrSGludCcpLFxuICAgICAgKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdub3RpZnknIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ25vdGlmeUdyb3VwJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdub3RpZnlJbnRybycpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZSwga2V5OiAnbm90aWZ5RW5hYmxlZCcgfSxcbiAgICAgICAgZWwoU3dpdGNoLCB7XG4gICAgICAgICAgY2hlY2tlZDogbm90aWZpY2F0aW9uc0VuYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgbGFiZWw6IHQoJ25vdGlmeUVuYWJsZWQnKSxcbiAgICAgICAgICBvbkNoYW5nZTogZW5hYmxlTm90aWZpY2F0aW9ucyxcbiAgICAgICAgfSksXG4gICAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZVRleHQgfSxcbiAgICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IFMudG9nZ2xlTGFiZWwgfSwgdCgnbm90aWZ5RW5hYmxlZCcpKSxcbiAgICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyIH0gfSwgdCgnbm90aWZ5RW5hYmxlZEhpbnQnKSksXG4gICAgICAgICksXG4gICAgICApLFxuICAgICAgbm90aWZpY2F0aW9uc0VuYWJsZWQgJiYgcGVybWlzc2lvbiA9PT0gJ2RlbmllZCcgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5lcnJvciB9LCB0KCdwZXJtaXNzaW9uRGVuaWVkJykpIDogbnVsbCxcbiAgICAgIG5vdGlmaWNhdGlvbnNFbmFibGVkICYmIHBlcm1pc3Npb24gPT09ICd1bnN1cHBvcnRlZCcgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5lcnJvciB9LCB0KCdwZXJtaXNzaW9uVW5zdXBwb3J0ZWQnKSkgOiBudWxsLFxuICAgICAgc3dpdGNoRmllbGQoJ25vdGlmeUZvcmVncm91bmQnLCAnbm90aWZ5Rm9yZWdyb3VuZCcsICdub3RpZnlGb3JlZ3JvdW5kSGludCcsIGZhbHNlKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdub3RpZnlBdXRvSGlkZScsICdub3RpZnlBdXRvSGlkZScsICdub3RpZnlBdXRvSGlkZUhpbnQnLCB0cnVlKSxcbiAgICApLFxuICBdXG5cbiAgY29uc3QgcGFuZWxzID0geyBjb21wYWN0aW9uOiBjb21wYWN0aW9uUGFuZWwsIG1vZGVsczogbW9kZWxzUGFuZWwsIG5vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbnNQYW5lbCB9XG5cbiAgcmV0dXJuIGVsKCdkaXYnLCB7IHN0eWxlOiBTLndyYXAgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3RpdGxlJykpLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnaW50cm8nKSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudGFicyB9LFxuICAgICAgZWwoU2VnbWVudGVkQ29udHJvbCwge1xuICAgICAgICBpZDogVEFCU19JRCxcbiAgICAgICAgdmFsdWU6IHRhYixcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgdmFsdWU6ICdjb21wYWN0aW9uJywgbGFiZWw6IHQoJ3RhYkNvbXBhY3Rpb24nKSB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdtb2RlbHMnLCBsYWJlbDogdCgndGFiTW9kZWxzJykgfSxcbiAgICAgICAgICB7IHZhbHVlOiAnbm90aWZpY2F0aW9ucycsIGxhYmVsOiB0KCd0YWJOb3RpZmljYXRpb25zJykgfSxcbiAgICAgICAgXSxcbiAgICAgICAgb25DaGFuZ2U6IHNldFRhYixcbiAgICAgICAgbGFiZWw6IHQoJ3RpdGxlJyksXG4gICAgICB9KSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IGlkOiBgJHtUQUJTX0lEfS0ke3RhYn0tcGFuZWxgLCByb2xlOiAndGFicGFuZWwnIH0sIC4uLihwYW5lbHNbdGFiXSA/PyBjb21wYWN0aW9uUGFuZWwpKSxcbiAgICBub3RlID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgbm90ZSkgOiBudWxsLFxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBseShjdHgpIHtcbiAgY3R4LmVmZmVjdCgoKSA9PiBjdHgubG9jYWxlLnJlZ2lzdGVyKExPQ0FMRV9OUywgeyBlbiwgemggfSksICdtYWxrby1wcmVmczogbG9jYWxlIGRpY3Rpb25hcmllcycpXG4gIGNvbnN0IHQgPSBjdHgubG9jYWxlLmJpbmQoTE9DQUxFX05TKVxuICBjb25zdCBmb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChOUylcbiAgY29uc3QgbW9kZWxGb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChNT0RFTF9OUylcbiAgLy8gVGhlIGFwcGxpY2F0aW9uIG9ubHkgYXV0by1tb3VudHMgaXRzIG93biBSZW1vdGUgc2VsZWN0aW9uLCBzbyBhIHBsdWdpblxuICAvLyBzaGlwcyBhbmQgbW91bnRzIGl0cyBvd24gY29udHJpYnV0aW9uLlxuICB0cnkge1xuICAgIGNvbnN0IGRpc3Bvc2VSZW1vdGUgPSBhd2FpdCBjdHgucmVtb3RlLiRtb3VudChQUk9CRV9SRU1PVEUpXG4gICAgY3R4LmVmZmVjdCgoKSA9PiAoKSA9PiB7IHZvaWQgZGlzcG9zZVJlbW90ZSgpIH0sICdtYWxrby1wcmVmczogbWFsa29Nb2RlbHMgcmVtb3RlJylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdkc2gtbWFsa28tcHJlZnM6IGNvdWxkIG5vdCBtb3VudCB0aGUgbWFsa29Nb2RlbHMgcmVtb3RlIFx1MjAxNCcsIGVycm9yKVxuICB9XG4gIC8vIFRhYiBzdGF0dXMgbGlnaHQgKyBicm93c2VyIG5vdGlmaWNhdGlvbnMgKGluZGVwZW5kZW50IG9mIHRoZSBzZXR0aW5ncyBwYWdlKS5cbiAgY3R4LmVmZmVjdCgoKSA9PiBzdGFydFN0YXR1c0xpZ2h0KGN0eCwgZm9ybSksICdtYWxrby1wcmVmczogdGFiIHN0YXR1cyBsaWdodCcpXG4gIGNvbnN0IGluamVjdGVkID0gKCkgPT4gKHtcbiAgICBob29rczogeyBwcmVmczogZm9ybSwgbW9kZWxDYXRhbG9nOiBtb2RlbEZvcm0gfSxcbiAgICBzYXZlOiAoZmllbGQsIHZhbHVlKSA9PiBmb3JtLnNldChmaWVsZCwgdmFsdWUpLFxuICAgIHByb2JlOiAoYXJncykgPT4ge1xuICAgICAgLy8gQSBuYW1lc3BhY2Ugc2VydmljZSBpcyByZXNvbHZlZCBieSBpdHMgZnVsbCBrZXk7IHJlYWRpbmcgaXQgb2ZmXG4gICAgICAvLyBgY3R4LnJlbW90ZWAgd291bGQgcmVxdWlyZSBhbiBgaW5qZWN0YCB0aGlzIHBsdWdpbiBjYW5ub3QgZGVjbGFyZVxuICAgICAgLy8gYmVmb3JlIHRoZSBjb250cmlidXRpb24gaXMgbW91bnRlZC5cbiAgICAgIGNvbnN0IHJlbW90ZSA9IGN0eC5nZXQoJ3JlbW90ZS5tYWxrb01vZGVscycpXG4gICAgICBpZiAocmVtb3RlID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcigndGhlIG1hbGtvTW9kZWxzIHJlbW90ZSBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgIHJldHVybiByZW1vdGUucHJvYmUoYXJncylcbiAgICB9LFxuICAgIHdyaXRlTW9kZWxzOiAocm91dGVJZCwgbW9kZWxzKSA9PiBtb2RlbEZvcm0ubXV0YXRlKFt7IG9wOiAnc2V0JywgcGF0aDogWydwcm92aWRlcnMnLCByb3V0ZUlkLCAnbW9kZWxzJ10sIHZhbHVlOiBtb2RlbHMgfV0pLFxuICB9KVxuICBjdHguc2xvdHMuaW5qZWN0KFNMT1QsICgpID0+IGN0eC5zbG90cy5yZWdpc3Rlcih7XG4gICAgbmFtZTogU0xPVCxcbiAgICBpZDogTlMsXG4gICAgb3JkZXI6IDQ1LFxuICAgIGxhYmVsOiAoKSA9PiB0KCd0aXRsZScpLFxuICAgIGxvY2FsZTogTE9DQUxFX05TLFxuICAgIGluamVjdDogaW5qZWN0ZWQsXG4gIH0sIFByZWZzU2VjdGlvbikpXG59IiwgIi8qKlxuICogZHNoLW1hbGtvLXByZWZzIFx1MjAxNCBzaGFyZWQgUmVtb3RlIHdpcmUgaWRlbnRpdHkuXG4gKlxuICogVGhlIHNhbWUgaW52b2NhdGlvbiBpcyByZWdpc3RlcmVkIG9uIHRoZSBIb3N0IChgdHlwZXJ0LnJlZ2lzdGVyYCkgYW5kIG1vdW50ZWRcbiAqIGluIHRoZSBicm93c2VyIChgY3R4LnJlbW90ZS4kbW91bnRgKSwgc28gYm90aCBoYWx2ZXMgYnVpbGQgaXQgZnJvbSBoZXJlLiBUaGVcbiAqIG9ubHkgZGlmZmVyZW5jZSBpcyB0aGUgc2NoZW1hIGZhY3RvcnkgZWFjaCBzaWRlIHN1cHBsaWVzOiB0aGUgSG9zdCBkZWNvZGVzXG4gKiBhcmd1bWVudHMgd2l0aCB6b2QsIHdoaWxlIHRoZSBDbGllbnQgbmV2ZXIgZGVjb2RlcyBpdHMgb3duIGFyZ3VtZW50cyBhbmQgb25seVxuICogbmVlZHMgYSBmYWN0b3J5IHRvIHNhdGlzZnkgdGhlIHN0cmljdC1jb2RlYyBjb250cmFjdC5cbiAqL1xuXG4vKiogV2lyZSBpZGVudGl0eSBzaGFyZWQgYnkgdGhlIEhvc3QgbWFuaWZlc3QgYW5kIHRoZSBDbGllbnQgY29udHJpYnV0aW9uLiAqL1xuZXhwb3J0IGNvbnN0IFBST0JFX0lERU5USVRZID0ge1xuICBpZDogJ2RzaC1tYWxrby1wcmVmcyNtYWxrb01vZGVscy9wcm9iZScsXG4gIHNlcnZpY2U6ICdtYWxrb01vZGVscycsXG4gIG5hbWVzcGFjZTogJ21hbGtvTW9kZWxzJyxcbiAgbWV0aG9kOiAncHJvYmUnLFxuICBhcmdzVHlwZVN5bWJvbDogJ2RzaC1tYWxrby1wcmVmcyNQcm9iZUFyZ3MnLFxuICByZXN1bHRUeXBlU3ltYm9sOiAnZHNoLW1hbGtvLXByZWZzI1Byb2JlUmVzdWx0Jyxcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgYG1hbGtvTW9kZWxzL3Byb2JlKGFyZ3MpYCBkaXJlY3QgaW52b2NhdGlvbi5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZUFyZ3Mgc2NoZW1hIGZhY3RvcnkgZm9yIHRoZSBzaW5nbGUgYGFyZ3NgIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZVJlc3VsdCBzY2hlbWEgZmFjdG9yeSBmb3IgdGhlIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBpbnZvY2F0aW9uIGRlc2NyaXB0b3IsIGlkZW50aWNhbCBvbiBib3RoIGZhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvYmVJbnZvY2F0aW9uKGNyZWF0ZUFyZ3MsIGNyZWF0ZVJlc3VsdCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBQUk9CRV9JREVOVElUWS5pZCxcbiAgICBzZXJ2aWNlOiBQUk9CRV9JREVOVElUWS5zZXJ2aWNlLFxuICAgIG5hbWVzcGFjZTogUFJPQkVfSURFTlRJVFkubmFtZXNwYWNlLFxuICAgIG1ldGhvZDogUFJPQkVfSURFTlRJVFkubWV0aG9kLFxuICAgIGludm9jYXRpb246IHsga2luZDogJ2RpcmVjdCcgfSxcbiAgICBwYXJhbWV0ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhcmdzJyxcbiAgICAgICAgd2lyZTogJ2FyZ3MnLFxuICAgICAgICBzb3VyY2U6ICdqc29uJyxcbiAgICAgICAgY29kZWM6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLmFyZ3NUeXBlU3ltYm9sLCBjcmVhdGU6IGNyZWF0ZUFyZ3MgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICByZXN1bHQ6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLnJlc3VsdFR5cGVTeW1ib2wsIGNyZWF0ZTogY3JlYXRlUmVzdWx0IH0sXG4gIH1cbn0iLCAiLyoqXG4gKiBUaGUgb2ZmaWNpYWwgRGVlcFNlZWsgd2hhbGUgbWFyaywgcmVjb2xvcmVkLlxuICpcbiAqIFNoYXBlIHRha2VuIGZyb20gdGhlIG9mZmljaWFsIGZhdmljb24gYXMgdXNlZCBieSBkc2gtbm90aWNlLWNlbnRlciAoTUlUKTtcbiAqIG9ubHkgdGhlIGZpbGwgY29sb3IgaXMgb3Vycy4gS2VwdCBoZXJlIHNvIHRoZSB0YWIgaWNvbiByZWZsZWN0cyB0aGUgc2Vzc2lvblxuICogc3RhdGUgd2l0aG91dCBmZXRjaGluZyBhbmQgbXV0YXRpbmcgdGhlIHNlcnZlZCAvZmF2aWNvbi5zdmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgQ1NTIGNvbG9yIGZvciB0aGUgZmlsbC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RhbmRhbG9uZSBTVkcgZG9jdW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aGFsZVN2Zyhjb2xvcikge1xuICByZXR1cm4gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjUwXFxcIiBoZWlnaHQ9XFxcIjUwXFxcIiB2aWV3Qm94PVxcXCIwIDAgNTAgNTBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjxwYXRoIGQ9XFxcIk00OC44MzU0IDEwLjA0NzlDNDguMzIzMiA5Ljc5MTk5IDQ4LjEwMjUgMTAuMjc5OCA0Ny44MDMyIDEwLjUyNzhDNDcuNzAwNyAxMC42MDc5IDQ3LjYxNDMgMTAuNzExOSA0Ny41MjczIDEwLjgwNzZDNDYuNzc5MyAxMS42MjQgNDUuOTA0OCAxMi4xNTk3IDQ0Ljc2MjIgMTIuMDk1N0M0My4wOTIzIDEyIDQxLjY2NiAxMi41MzU2IDQwLjQwNTggMTMuODM5OEM0MC4xMzc3IDEyLjIzMTkgMzkuMjQ3NiAxMS4yNzIgMzcuODkyNiAxMC42NTU4QzM3LjE4MzYgMTAuMzM1OSAzNi40NjY4IDEwLjAxNTYgMzUuOTcwMiA5LjMxOTgyQzM1LjYyMzUgOC44MjM3MyAzNS41MjkzIDguMjcxOTcgMzUuMzU2IDcuNzI3NTRDMzUuMjQ1NiA3LjM5OTkgMzUuMTM1MyA3LjA2Mzk2IDM0Ljc2NTEgNy4wMDc4MUMzNC4zNjMzIDYuOTQzODUgMzQuMjA1NiA3LjI4NzYgMzQuMDQ3OSA3LjU3NTY4QzMzLjQxOCA4Ljc1MTk1IDMzLjE3MzMgMTAuMDQ3OSAzMy4xOTczIDExLjM1OTlDMzMuMjUyNCAxNC4zMTIgMzQuNDczNiAxNi42NjQxIDM2Ljg5OTkgMTguMzM1OUMzNy4xNzU4IDE4LjUyNzggMzcuMjQ2NiAxOC43MTk3IDM3LjE1OTcgMTlDMzYuOTk0NiAxOS41NzU3IDM2Ljc5NzQgMjAuMTM1NyAzNi42MjQgMjAuNzExOUMzNi41MTM3IDIxLjA4MDEgMzYuMzQ4NiAyMS4xNTk3IDM1Ljk2MjQgMjFDMzQuNjMwOSAyMC40MzIxIDMzLjQ4MSAxOS41OTE4IDMyLjQ2NDQgMTguNTc1N0MzMC43MzkzIDE2Ljg3MjEgMjkuMTc5MiAxNC45OTE3IDI3LjIzMzQgMTMuNTJDMjYuNzc2NCAxMy4xNzU4IDI2LjMxOTMgMTIuODU2IDI1Ljg0NjcgMTIuNTUxOEMyMy44NjE4IDEwLjU4NCAyNi4xMDY5IDguOTY3NzcgMjYuNjI3IDguNzc1ODhDMjcuMTcwNCA4LjU3NTY4IDI2LjgxNTkgNy44ODc3IDI1LjA1OTEgNy44OTZDMjMuMzAyMiA3LjkwMzgxIDIxLjY5NTMgOC41MDM5MSAxOS42NDcgOS4zMDM3MUMxOS4zNDc3IDkuNDIzODMgMTkuMDMyMiA5LjUxMTcyIDE4LjcwOTUgOS41ODM5OEMxNi44NTAxIDkuMjIzNjMgMTQuOTE5OSA5LjE0MzU1IDEyLjkwMzMgOS4zNzU5OEM5LjEwNTk2IDkuODA3NjIgNi4wNzI3NSAxMS42Mzk2IDMuODQzMjYgMTQuNzY4MUMxLjE2NDU1IDE4LjUyNzggMC41MzQxOCAyMi43OTk4IDEuMzA2NjQgMjcuMjU1OUMyLjExNzY4IDMxLjk1MjEgNC40NjU4MiAzNS44Mzk4IDguMDczNzMgMzguODc5OUMxMS44MTU5IDQyLjAzMjIgMTYuMTI1NSA0My41NzYyIDIxLjA0MSA0My4yODAzQzI0LjAyNjkgNDMuMTA0IDI3LjM1MTYgNDIuNjk2MyAzMS4xMDE2IDM5LjQ1NjFDMzIuMDQ2OSAzOS45MzYgMzMuMDM5NiA0MC4xMjc5IDM0LjY4NiA0MC4yNzJDMzUuOTU0NiA0MC4zOTIxIDM3LjE3NTggNDAuMjA4IDM4LjEyMTEgNDAuMDA3OEMzOS42MDIxIDM5LjY4OCAzOS40OTk1IDM4LjI4ODEgMzguOTYzOSAzOC4wMzIyQzM0LjYyMyAzNS45Njc4IDM1LjU3NjIgMzYuODA4MSAzNC43MSAzNi4xMjc5QzM2LjkxNTUgMzMuNDYzOSA0MC4yNDAyIDMwLjY5NTggNDEuNTQgMjEuNzI4QzQxLjY0MjYgMjEuMDE2MSA0MS41NTU3IDIwLjU2NzkgNDEuNTQgMTkuOTkxN0M0MS41MzIyIDE5LjYzOTYgNDEuNjEwOCAxOS41MDM5IDQyLjAwNDkgMTkuNDYzOUM0My4wOTIzIDE5LjMzNTkgNDQuMTQ3OSAxOS4wMzE3IDQ1LjExNjcgMTguNDg3OEM0Ny45MjkyIDE2LjkxOTkgNDkuMDY0IDE0LjM0MzggNDkuMzMxNSAxMS4yNTU5QzQ5LjM3MTEgMTAuNzgzNyA0OS4zMjM3IDEwLjI5NTkgNDguODM1NCAxMC4wNDc5Wk0yNC4zMjYyIDM3LjgzOThDMjAuMTE5NiAzNC40NjM5IDE4LjA3OTEgMzMuMzUyMSAxNy4yMzU4IDMzLjM5OTlDMTYuNDQ4MiAzMy40NDgyIDE2LjU4OTggMzQuMzY4MiAxNi43NjMyIDM0Ljk2NzhDMTYuOTQ0MyAzNS41NjAxIDE3LjE4MTIgMzUuOTY4MyAxNy41MTE3IDM2LjQ4NzhDMTcuNzQwMiAzNi44MzIgMTcuODk3OSAzNy4zNDQyIDE3LjI4MzIgMzcuNzI4QzE1LjkyODIgMzguNTg0IDEzLjU3MjggMzcuNDM5OSAxMy40NjI0IDM3LjM4MzhDMTAuNzIwNyAzNS43MzU4IDguNDI4MjIgMzMuNTYwMSA2LjgxMzQ4IDMwLjU4NEM1LjI1MzQyIDI3LjcxOTcgNC4zNDc2NiAyNC42NDc5IDQuMTk3NzUgMjEuMzY3N0M0LjE1ODIgMjAuNTc1NyA0LjM4NjcyIDIwLjI5NTkgNS4xNTg2OSAyMC4xNTE5QzYuMTc1MjkgMTkuOTYgNy4yMjMxNCAxOS45MTk5IDguMjM5MjYgMjAuMDcxOEMxMi41MzI3IDIwLjcxMTkgMTYuMTg4NSAyMi42NzE5IDE5LjI1MjkgMjUuNzc1OUMyMS4wMDIgMjcuNTQzOSAyMi4zMjUyIDI5LjY1NTggMjMuNjg4NSAzMS43MjAyQzI1LjEzNzcgMzMuOTEyMSAyNi42OTc4IDM2IDI4LjY4MzEgMzcuNzExOUMyOS4zODQzIDM4LjMxMiAyOS45NDM0IDM4Ljc2ODEgMzAuNDc5IDM5LjEwNEMyOC44NjQzIDM5LjI4ODEgMjYuMTY5OSAzOS4zMjgxIDI0LjMyNjIgMzcuODM5OFpNMjYuMzQzMyAyNC42MDAxQzI2LjM0MzMgMjQuMjQ4IDI2LjYxOTEgMjMuOTY3OCAyNi45NjU4IDIzLjk2NzhDMjcuMDQ0NCAyMy45Njc4IDI3LjExNTIgMjMuOTgzOSAyNy4xNzgyIDI0LjAwNzhDMjcuMjY1MSAyNC4wNCAyNy4zNDM4IDI0LjA4NzkgMjcuNDA2NyAyNC4xNjAyQzI3LjUxNzEgMjQuMjcyIDI3LjU4MDEgMjQuNDMyMSAyNy41ODAxIDI0LjYwMDFDMjcuNTgwMSAyNC45NTIxIDI3LjMwNDIgMjUuMjMxOSAyNi45NTc1IDI1LjIzMTlDMjYuNjEwOCAyNS4yMzE5IDI2LjM0MzMgMjQuOTUyMSAyNi4zNDMzIDI0LjYwMDFaTTMyLjYwNjQgMjcuODc5OUMzMi4yMDQ2IDI4LjA0NzkgMzEuODAyNyAyOC4xOTE5IDMxLjQxNjUgMjguMjA4QzMwLjgxNzkgMjguMjM5NyAzMC4xNjQxIDI3Ljk5MjIgMjkuODA5NiAyNy42ODhDMjkuMjU4MyAyNy4yMTU4IDI4Ljg2NDMgMjYuOTUyMSAyOC42OTg3IDI2LjEyNzlDMjguNjI3OSAyNS43NzU5IDI4LjY2NzUgMjUuMjMxOSAyOC43MzA1IDI0LjkxOTlDMjguODcyMSAyNC4yNDggMjguNzE0NCAyMy44MTU5IDI4LjI0OTUgMjMuNDIzOEMyNy44NzE2IDIzLjEwNCAyNy4zOTExIDIzLjAxNjEgMjYuODYzMyAyMy4wMTYxQzI2LjY2NiAyMy4wMTYxIDI2LjQ4NDkgMjIuOTI3NyAyNi4zNTExIDIyLjg1NkMyNi4xMzA0IDIyLjc0NDEgMjUuOTQ5MiAyMi40NjM5IDI2LjEyMjYgMjIuMTIwMUMyNi4xNzc3IDIyLjAwNzggMjYuNDQ1OCAyMS43MzU4IDI2LjUwODggMjEuNjg4QzI3LjIyNTYgMjEuMjcyIDI4LjA1MjcgMjEuNDA3NyAyOC44MTY5IDIxLjcxOTdDMjkuNTI1OSAyMi4wMTYxIDMwLjA2MTUgMjIuNTYwMSAzMC44MzQgMjMuMzI4MUMzMS42MjE2IDI0LjI1NTkgMzEuNzYzMiAyNC41MTE3IDMyLjIxMjQgMjUuMjA4QzMyLjU2NjkgMjUuNzUyIDMyLjg5MDEgMjYuMzEyIDMzLjExMDQgMjYuOTUyMUMzMy4yNDQ2IDI3LjM1MjEgMzMuMDcxMyAyNy42ODAyIDMyLjYwNjQgMjcuODc5OVpcXFwiIGZpbGw9XFxcIlwiICsgY29sb3IgKyBcIlxcXCIgZmlsbC1vcGFjaXR5PVxcXCIxXFxcIiBmaWxsLXJ1bGU9XFxcIm5vbnplcm9cXFwiLz48L3N2Zz5cIlxufVxuIiwgIi8qKlxuICogZHNoLW1hbGtvLXByZWZzIFx1MjAxNCB0YWIgc3RhdHVzIGxpZ2h0ICsgYnJvd3NlciBub3RpZmljYXRpb25zIChicm93c2VyIGhhbGYpLlxuICpcbiAqIFBvcnRlZCBmcm9tIGRzaC1ub3RpY2UtY2VudGVyIChNSVQpLiBUaGUgdGFiIGZhdmljb24gdHVybnMgZ3JlZW4gd2hlbiBhIG1haW5cbiAqIHNlc3Npb24gZmluaXNoZWQgd2hpbGUgeW91IHdlcmUgYXdheSBhbmQgYW1iZXIgd2hpbGUgYSBzZXNzaW9uIGF3YWl0cyBhblxuICogaW50ZXJhY3Rpb24gKGFtYmVyIHdpbnMpLCBhbmQgdGhlIGJyb3dzZXIgcmFpc2VzIGEgbm90aWZpY2F0aW9uIG9uIGNvbXBsZXRpb25cbiAqIG9yIG9uIGEgbmV3IHBlbmRpbmcgcXVlc3Rpb24gLyBhcHByb3ZhbCAvIHBsYW4gcmV2aWV3LlxuICpcbiAqIEl0IHJlYWRzIHRoZSBvZmZpY2lhbCBjbGllbnQgc2lnbmFscyBcdTIwMTQgYHNlc3Npb25zYCByb3dzIHBsdXMgdGhlIG9wdGlvbmFsXG4gKiBgdWlTZXNzaW9uLnNlc3Npb25TdGF0dXNgIHN0b3JlIFx1MjAxNCBhbmQgdGhlIGBtYWxrby1wcmVmc2AgY29uZmlnIGZvcm0uIEl0IG93bnNcbiAqIG5vIHN0YXRlIGJleW9uZCBpbi1tZW1vcnkgYm9va2tlZXBpbmcgYW5kIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBmYXZpY29uIG9uXG4gKiB0ZWFyZG93bi5cbiAqL1xuaW1wb3J0IHsgd2hhbGVTdmcgfSBmcm9tICcuL3doYWxlLnRzJ1xuXG4vKiogU2V0dGluZ3MvbG9jYWxlIG5hbWVzcGFjZSBzaGFyZWQgd2l0aCB0aGUgc2V0dGluZ3MgcGFnZS4gKi9cbmV4cG9ydCBjb25zdCBMT0NBTEVfTlMgPSAnc2V0dGluZ3MubWFsa28tcHJlZnMnXG5cbmNvbnN0IERFRkFVTFRfSFJFRiA9ICcvZmF2aWNvbi5zdmcnXG5jb25zdCBERUZBVUxUX0dSRUVOID0gJyMyMkM1NUUnXG5jb25zdCBERUZBVUxUX0FNQkVSID0gJyNGNTlFMEInXG5jb25zdCBIRVggPSAvXiNbMC05YS1mQS1GXXs2fSQvXG4vKiogVG9vbC1uYW1lIGNhcDogbG9uZ2VyIG5hbWVzIHdvdWxkIGJsb3cgdGhlIG5vdGlmaWNhdGlvbiBib2R5J3Mgc2luZ2xlIGxpbmUuICovXG5jb25zdCBUT09MX05BTUVfTElNSVQgPSAzMlxuXG4vKipcbiAqIEJyb3dzZXIgbm90aWZpY2F0aW9uIGF2YWlsYWJpbGl0eS5cbiAqIEByZXR1cm5zIHsnZ3JhbnRlZCcgfCAnZGVuaWVkJyB8ICdkZWZhdWx0JyB8ICd1bnN1cHBvcnRlZCd9XG4gKi9cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvblN1cHBvcnQoKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBOb3RpZmljYXRpb24gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gJ3N0cmluZycpIHJldHVybiAndW5zdXBwb3J0ZWQnXG4gICAgcmV0dXJuIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAndW5zdXBwb3J0ZWQnXG4gIH1cbn1cblxuLyoqIEFzayBmb3IgcGVybWlzc2lvbiAob25seSB3aGVuIHRoZSBicm93c2VyIGhhcyBub3QgZGVjaWRlZCB5ZXQpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgndW5zdXBwb3J0ZWQnKVxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gJ2RlZmF1bHQnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKVxuICAgIGNvbnN0IGFuc3dlciA9IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpXG4gICAgcmV0dXJuIGFuc3dlciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBhbnN3ZXIudGhlbiA9PT0gJ2Z1bmN0aW9uJyA/IGFuc3dlciA6IFByb21pc2UucmVzb2x2ZShOb3RpZmljYXRpb24ucGVybWlzc2lvbilcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub3RpZmljYXRpb25TdXBwb3J0KCkpXG4gIH1cbn1cblxuLyoqIEN1cnJlbnQgcGVybWlzc2lvbiBzdHJpbmcsIGZvciB0aGUgc2V0dGluZ3MgcGFnZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpIHtcbiAgcmV0dXJuIG5vdGlmaWNhdGlvblN1cHBvcnQoKVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBzZXNzaW9uIHNpZ25hbHMgYW5kIGRyaXZlIHRoZSB0YWIgaWNvbiArIG5vdGlmaWNhdGlvbnMuXG4gKiBAcGFyYW0ge29iamVjdH0gY3R4IGNsaWVudCBwbHVnaW4gY29udGV4dCAobmVlZHMgYHNlc3Npb25zYCwgYGxvY2FsZWApLlxuICogQHBhcmFtIHtvYmplY3R9IGZvcm0gdGhlIGBtYWxrby1wcmVmc2AgY29uZmlnIGZvcm0gKHNuYXBzaG90ICsgc3Vic2NyaWJlKS5cbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfSBkaXNwb3NlciByZXN0b3JpbmcgdGhlIGZhdmljb24gYW5kIHJlbW92aW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RhdHVzTGlnaHQoY3R4LCBmb3JtKSB7XG4gIGNvbnN0IGxpc3QgPSBjdHguc2Vzc2lvbnMubGlzdFxuICBjb25zdCBsb2NhbGUgPSAoKSA9PiBjdHgubG9jYWxlLmJpbmQoTE9DQUxFX05TKVxuICAvKiogT3B0aW9uYWwgb2ZmaWNpYWwgc3RhdHVzIHNvdXJjZSAoMC4xLjcrKTsgcm93cyBrZWVwIHRoZWlyIGxlZ2FjeSBmaWVsZHMgb3RoZXJ3aXNlLiAqL1xuICBsZXQgc3RhdHVzU291cmNlXG4gIC8qKiBEZWR1cGUga2V5cyAoYHNlc3Npb25JZDpraW5kYCkgYWxyZWFkeSBxdWV1ZWQuICovXG4gIGNvbnN0IG5vdGlmaWVkID0gbmV3IFNldCgpXG4gIC8qKiBBZ2dyZWdhdGlvbiB3aW5kb3cgc28gYSBidXJzdCBvZiB0cmFuc2l0aW9ucyBiZWNvbWVzIG9uZSBub3RpZmljYXRpb24uICovXG4gIGNvbnN0IG5vdGlmeVF1ZXVlID0gbmV3IE1hcCgpXG4gIGxldCBub3RpZnlUaW1lclxuICAvKiogTGFzdCBvYnNlcnZlZCBjb21wbGV0aW9uIHN0YXRlIHBlciBzZXNzaW9uIChmYWxzZSBcdTIxOTIgdHJ1ZSBlZGdlIGRldGVjdGlvbikuICovXG4gIGNvbnN0IHByZXZDb21wbGV0ZWQgPSBuZXcgTWFwKClcbiAgLyoqIFJ1biBzdGFydCBwZXIgc2Vzc2lvbiwgdGhlbiB0aGUgbGFzdCBydW4gZHVyYXRpb24gKG1zKS4gKi9cbiAgY29uc3QgcnVuU3RhcnRlZEF0ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxhc3RSdW5NcyA9IG5ldyBNYXAoKVxuICBsZXQgcHJldlBlbmRpbmcgPSBuZXcgU2V0KClcbiAgbGV0IHBlbmRpbmdTZWVuID0gZmFsc2VcblxuICAvKiogUmVhbGx5IGluIHRoZSBmb3JlZ3JvdW5kOiB0YWIgdmlzaWJsZSBBTkQgd2luZG93IGZvY3VzZWQuICovXG4gIGNvbnN0IGlzRm9yZWdyb3VuZCA9ICgpID0+IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ3Zpc2libGUnICYmIGRvY3VtZW50Lmhhc0ZvY3VzKClcblxuICAvKiogUmVhZCB0aGUgbm90aWZpY2F0aW9uL2NvbG9yIHByZWZlcmVuY2VzICh1bnNldCBmYWxscyBiYWNrIHRvIGRlZmF1bHRzKS4gKi9cbiAgZnVuY3Rpb24gcmVhZENvbmZpZygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGZvcm0uZ2V0U25hcHNob3QoKS52YWx1ZSA/PyB7fVxuICAgIHJldHVybiB7XG4gICAgICBjb2xvcnNFbmFibGVkOiB2YWx1ZS5jb2xvcnNFbmFibGVkICE9PSBmYWxzZSxcbiAgICAgIGdyZWVuOiBIRVgudGVzdCh2YWx1ZS5ncmVlbikgPyB2YWx1ZS5ncmVlbiA6IERFRkFVTFRfR1JFRU4sXG4gICAgICBhbWJlcjogSEVYLnRlc3QodmFsdWUuYW1iZXIpID8gdmFsdWUuYW1iZXIgOiBERUZBVUxUX0FNQkVSLFxuICAgICAgYmxhY2s6IEhFWC50ZXN0KHZhbHVlLmJsYWNrKSA/IHZhbHVlLmJsYWNrIDogdW5kZWZpbmVkLFxuICAgICAgbm90aWZ5RW5hYmxlZDogdmFsdWUubm90aWZ5RW5hYmxlZCA9PT0gdHJ1ZSxcbiAgICAgIG5vdGlmeUZvcmVncm91bmQ6IHZhbHVlLm5vdGlmeUZvcmVncm91bmQgPT09IHRydWUsXG4gICAgICBub3RpZnlBdXRvSGlkZTogdmFsdWUubm90aWZ5QXV0b0hpZGUgIT09IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBmYXZpY29uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBpY29uTGluayA9ICgpID0+IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbGlua1tyZWx+PVwiaWNvblwiXScpXG4gIGNvbnN0IHNldEhyZWYgPSAoaHJlZikgPT4geyBjb25zdCBsaW5rID0gaWNvbkxpbmsoKTsgaWYgKGxpbmspIGxpbmsuaHJlZiA9IGhyZWYgfVxuICAvKiogT3JpZ2luYWwgaHJlZiBhdCBzdGFydC11cDsgcmVzdG9yaW5nIGl0IGJlYXRzIGhhcmRjb2RpbmcgYSBwYXRoLiAqL1xuICBjb25zdCBvcmlnaW5hbEhyZWYgPSBpY29uTGluaygpPy5ocmVmID8/IERFRkFVTFRfSFJFRlxuICAvKiogTGFzdCBocmVmIHdlIHNldDsgbnVsbCA9IG9mZmljaWFsIGljb24gaW4gcGxhY2UuICovXG4gIGxldCBhcHBsaWVkID0gbnVsbFxuICBjb25zdCB1cmkgPSAoaGV4KSA9PiBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHdoYWxlU3ZnKGhleCkpfWBcbiAgY29uc3QgcmVzdG9yZSA9ICgpID0+IHsgaWYgKGFwcGxpZWQgIT09IG51bGwpIHsgc2V0SHJlZihvcmlnaW5hbEhyZWYpOyBhcHBsaWVkID0gbnVsbCB9IH1cblxuICAvLyAtLS0gbm90aWZpY2F0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgUEVORElOR19LSU5EX0tFWVMgPSB7XG4gICAgYXBwcm92YWw6ICdwZW5kaW5nS2luZEFwcHJvdmFsJyxcbiAgICBxdWVzdGlvbjogJ3BlbmRpbmdLaW5kUXVlc3Rpb24nLFxuICAgICdwbGFuLXJldmlldyc6ICdwZW5kaW5nS2luZFBsYW5SZXZpZXcnLFxuICB9XG5cbiAgLyoqIFBlbmRpbmcgaW50ZXJhY3Rpb24gXHUyMTkyIG5vdGlmaWNhdGlvbiBib2R5IHRleHQgKGRlZmVuc2l2ZSByZWFkcykuICovXG4gIGZ1bmN0aW9uIHBlbmRpbmdUeXBlTGFiZWwoaW50ZXJhY3Rpb24pIHtcbiAgICBjb25zdCB0ID0gbG9jYWxlKClcbiAgICBjb25zdCBraW5kID0gaW50ZXJhY3Rpb24/LmtpbmRcbiAgICBpZiAoa2luZCA9PT0gJ2FwcHJvdmFsJykge1xuICAgICAgY29uc3QgdG9vbCA9IGludGVyYWN0aW9uLnRvb2xOYW1lXG4gICAgICBpZiAodHlwZW9mIHRvb2wgIT09ICdzdHJpbmcnIHx8IHRvb2wgPT09ICcnKSByZXR1cm4gdCgncGVuZGluZ0tpbmRBcHByb3ZhbCcpXG4gICAgICBjb25zdCBzaG93biA9IHRvb2wubGVuZ3RoID4gVE9PTF9OQU1FX0xJTUlUID8gdG9vbC5zbGljZSgwLCBUT09MX05BTUVfTElNSVQpICsgJ1x1MjAyNicgOiB0b29sXG4gICAgICByZXR1cm4gdCgncGVuZGluZ0FwcHJvdmFsVG9vbCcsIHsgdG9vbDogc2hvd24gfSlcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09ICdxdWVzdGlvbicpIHtcbiAgICAgIGNvbnN0IHF1ZXN0aW9ucyA9IEFycmF5LmlzQXJyYXkoaW50ZXJhY3Rpb24ucXVlc3Rpb25zKSA/IGludGVyYWN0aW9uLnF1ZXN0aW9ucyA6IFtdXG4gICAgICBpZiAocXVlc3Rpb25zLmxlbmd0aCA+IDEpIHJldHVybiB0KCdwZW5kaW5nUXVlc3Rpb25CYXRjaCcsIHsgY291bnQ6IHF1ZXN0aW9ucy5sZW5ndGggfSlcbiAgICAgIGNvbnN0IGZpcnN0ID0gcXVlc3Rpb25zWzBdXG4gICAgICBpZiAoZmlyc3QgPT09IG51bGwgfHwgdHlwZW9mIGZpcnN0ICE9PSAnb2JqZWN0JykgcmV0dXJuIHQoJ3BlbmRpbmdLaW5kUXVlc3Rpb24nKVxuICAgICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmlzQXJyYXkoZmlyc3Qub3B0aW9ucykgPyBmaXJzdC5vcHRpb25zIDogW11cbiAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHQoJ3BlbmRpbmdRdWVzdGlvbkZpbGwnKVxuICAgICAgcmV0dXJuIGZpcnN0Lm11bHRpU2VsZWN0ID09PSB0cnVlID8gdCgncGVuZGluZ1F1ZXN0aW9uTXVsdGknKSA6IHQoJ3BlbmRpbmdRdWVzdGlvbkNob29zZScpXG4gICAgfVxuICAgIGNvbnN0IGtleSA9IFBFTkRJTkdfS0lORF9LRVlTW2tpbmRdXG4gICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogdChrZXkpXG4gIH1cblxuICAvKiogUXVldWUgb25lIG5vdGlmaWNhdGlvbiAoc2tpcHBlZCB3aGlsZSBkaXNhYmxlZDsgZGVkdXBlZDsgMzAwIG1zIHdpbmRvdykuICovXG4gIGZ1bmN0aW9uIHF1ZXVlTm90aWZpY2F0aW9uKGtpbmQsIHNlc3Npb25JZCwgbGFiZWwsIHR5cGVMYWJlbCwgZHVyYXRpb25Ncykge1xuICAgIGlmICghcmVhZENvbmZpZygpLm5vdGlmeUVuYWJsZWQpIHJldHVyblxuICAgIGNvbnN0IGtleSA9IHNlc3Npb25JZCArICc6JyArIGtpbmRcbiAgICBpZiAobm90aWZpZWQuaGFzKGtleSkpIHJldHVyblxuICAgIG5vdGlmaWVkLmFkZChrZXkpXG4gICAgbm90aWZ5UXVldWUuc2V0KGtleSwgeyBraW5kLCBzZXNzaW9uSWQsIGxhYmVsLCB0eXBlTGFiZWwsIGR1cmF0aW9uTXMgfSlcbiAgICBpZiAobm90aWZ5VGltZXIgPT09IHVuZGVmaW5lZCkgbm90aWZ5VGltZXIgPSBzZXRUaW1lb3V0KGZsdXNoTm90aWZpY2F0aW9ucywgMzAwKVxuICB9XG5cbiAgLyoqIEZsdXNoIHRoZSBhZ2dyZWdhdGlvbiB3aW5kb3cgaW50byBicm93c2VyIG5vdGlmaWNhdGlvbnMuICovXG4gIGZ1bmN0aW9uIGZsdXNoTm90aWZpY2F0aW9ucygpIHtcbiAgICBub3RpZnlUaW1lciA9IHVuZGVmaW5lZFxuICAgIGNvbnN0IGVudHJpZXMgPSBbLi4ubm90aWZ5UXVldWUudmFsdWVzKCldXG4gICAgbm90aWZ5UXVldWUuY2xlYXIoKVxuICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgaWYgKG5vdGlmaWNhdGlvblN1cHBvcnQoKSAhPT0gJ2dyYW50ZWQnKSByZXR1cm5cbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKClcbiAgICBpZiAoIWNvbmZpZy5ub3RpZnlGb3JlZ3JvdW5kICYmIGlzRm9yZWdyb3VuZCgpKSByZXR1cm5cbiAgICBjb25zdCB0ID0gbG9jYWxlKClcbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcCgpXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCBidWNrZXQgPSBncm91cGVkLmdldChlbnRyeS5raW5kKSA/PyBbXVxuICAgICAgYnVja2V0LnB1c2goZW50cnkpXG4gICAgICBncm91cGVkLnNldChlbnRyeS5raW5kLCBidWNrZXQpXG4gICAgfVxuICAgIGZvciAoY29uc3QgW2tpbmQsIGJ1Y2tldF0gb2YgZ3JvdXBlZCkge1xuICAgICAgY29uc3QgaGVhZCA9IGJ1Y2tldFswXVxuICAgICAgY29uc3QgZXh0cmEgPSBidWNrZXQubGVuZ3RoIC0gMVxuICAgICAgbGV0IHRpdGxlID0gaGVhZC5sYWJlbCA/PyBoZWFkLnNlc3Npb25JZFxuICAgICAgaWYgKGV4dHJhID4gMCkgdGl0bGUgPSB0aXRsZSArICcgKycgKyBTdHJpbmcoZXh0cmEpXG4gICAgICBsZXQgYm9keSA9IGtpbmQgPT09ICdkb25lJyA/IHQoJ25vdGlmeURvbmVUaXRsZScpIDogKGhlYWQudHlwZUxhYmVsID8/IHQoJ25vdGlmeVBlbmRpbmdUaXRsZScpKVxuICAgICAgaWYgKGtpbmQgPT09ICdkb25lJyAmJiBleHRyYSA9PT0gMCAmJiBoZWFkLmR1cmF0aW9uTXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBib2R5ID0gYm9keSArICcgXHUwMEI3ICcgKyB0KCdub3RpZnlEdXJhdGlvbicsIHsgZHVyYXRpb246IGZvcm1hdFJ1bkR1cmF0aW9uKGhlYWQuZHVyYXRpb25NcywgdCkgfSlcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBubyBgdGFnYDogcmV1c2luZyBvbmUgbWFrZXMgc29tZSBwbGF0Zm9ybXMgc2lsZW50bHlcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgcHJldmlvdXMgYmFubmVyIGluc3RlYWQgb2YgcmFpc2luZyBhIG5ldyBvbmUuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24odGl0bGUsIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGljb246IHVyaShraW5kID09PSAnZG9uZScgPyBjb25maWcuZ3JlZW4gOiBjb25maWcuYW1iZXIpLFxuICAgICAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjogIWNvbmZpZy5ub3RpZnlBdXRvSGlkZSxcbiAgICAgICAgfSlcbiAgICAgICAgbm90aWZpY2F0aW9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHsgd2luZG93LmZvY3VzKCkgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdvcmtzcGFjZSA9IGN0eC5nZXQoJ3VpV29ya3NwYWNlJylcbiAgICAgICAgICAgIGlmICh3b3Jrc3BhY2UgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd29ya3NwYWNlLm9wZW5TZXNzaW9uID09PSAnZnVuY3Rpb24nKSB3b3Jrc3BhY2Uub3BlblNlc3Npb24oaGVhZC5zZXNzaW9uSWQpXG4gICAgICAgICAgICBlbHNlIGN0eC5zZXNzaW9ucy5vcGVuKGhlYWQuc2Vzc2lvbklkKVxuICAgICAgICAgIH0gY2F0Y2ggeyAvKiBpZ25vcmUgKi8gfVxuICAgICAgICAgIG5vdGlmaWNhdGlvbi5jbG9zZSgpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW21hbGtvLXByZWZzXSBjb3VsZCBub3QgcmFpc2Ugbm90aWZpY2F0aW9uJywgZXJyb3IpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIDYwIHMgcm9sbHMgaW50byBtaW51dGVzLCBzZWNvbmRzIHplcm8tcGFkZGVkIChtYXRjaGVzIHRoZSBvZmZpY2lhbCBmb3JtYXQpLiAqL1xuICBmdW5jdGlvbiBmb3JtYXRSdW5EdXJhdGlvbihtcywgdCkge1xuICAgIGNvbnN0IHRvdGFsID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihtcyAvIDEwMDApKVxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRvdGFsIC8gNjApXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsICUgNjBcbiAgICByZXR1cm4gbWludXRlcyA+IDBcbiAgICAgID8gdCgnZHVyYXRpb25NaW51dGVzJywgeyBtaW51dGVzLCBzZWNvbmRzOiBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgJzAnKSB9KVxuICAgICAgOiB0KCdkdXJhdGlvblNlY29uZHMnLCB7IHNlY29uZHMgfSlcbiAgfVxuXG4gIC8qKiBDb21wbGV0aW9uIC8gcGVuZGluZyB0cmFuc2l0aW9ucyBmcm9tIHRoZSBzZXNzaW9uIHN0YXRlLiAqL1xuICBmdW5jdGlvbiBkZXRlY3RUcmFuc2l0aW9ucyhzdGF0ZSkge1xuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoc3RhdGUuYnlJZCkpIHtcbiAgICAgIGlmIChyb3cub3JpZ2luID09PSAnc3ViYWdlbnQnKSBjb250aW51ZVxuICAgICAgY29uc3QgYmVmb3JlID0gcHJldkNvbXBsZXRlZC5nZXQocm93LmlkKVxuICAgICAgY29uc3Qgbm93ID0gcm93LmNvbXBsZXRlZCA9PT0gdHJ1ZVxuICAgICAgaWYgKGJlZm9yZSA9PT0gZmFsc2UgJiYgbm93KSBxdWV1ZU5vdGlmaWNhdGlvbignZG9uZScsIHJvdy5pZCwgcm93LmRpc3BsYXlUaXRsZSA/PyByb3cudGl0bGUgPz8gcm93LmlkLCB1bmRlZmluZWQsIGxhc3RSdW5Ncy5nZXQocm93LmlkKSlcbiAgICAgIGlmICghbm93KSBub3RpZmllZC5kZWxldGUocm93LmlkICsgJzpkb25lJylcbiAgICAgIHByZXZDb21wbGV0ZWQuc2V0KHJvdy5pZCwgbm93KVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIFsuLi5wcmV2Q29tcGxldGVkLmtleXMoKV0pIHtcbiAgICAgIGlmICghKGlkIGluIHN0YXRlLmJ5SWQpKSB7IHByZXZDb21wbGV0ZWQuZGVsZXRlKGlkKTsgbm90aWZpZWQuZGVsZXRlKGlkICsgJzpkb25lJykgfVxuICAgIH1cbiAgICBjb25zdCBjdXJyZW50ID0gbmV3IFNldCgpXG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkgaWYgKHJvdy5wZW5kaW5nSW50ZXJhY3Rpb24gIT09IHVuZGVmaW5lZCkgY3VycmVudC5hZGQocm93LmlkKVxuICAgIGlmIChwZW5kaW5nU2Vlbikge1xuICAgICAgZm9yIChjb25zdCBpZCBvZiBjdXJyZW50KSB7XG4gICAgICAgIGlmIChwcmV2UGVuZGluZy5oYXMoaWQpKSBjb250aW51ZVxuICAgICAgICBjb25zdCByb3cgPSBzdGF0ZS5ieUlkW2lkXVxuICAgICAgICBpZiAocm93ICE9PSB1bmRlZmluZWQgJiYgcm93Lm9yaWdpbiA9PT0gJ3N1YmFnZW50JykgY29udGludWVcbiAgICAgICAgY29uc3QgbGFiZWwgPSByb3c/LmRpc3BsYXlUaXRsZSA/PyByb3c/LnRpdGxlID8/IGlkXG4gICAgICAgIHF1ZXVlTm90aWZpY2F0aW9uKCdwZW5kaW5nJywgaWQsIGxhYmVsLCBwZW5kaW5nVHlwZUxhYmVsKHJvdz8ucGVuZGluZ0ludGVyYWN0aW9uKSlcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBpZCBvZiBwcmV2UGVuZGluZykgaWYgKCFjdXJyZW50LmhhcyhpZCkpIG5vdGlmaWVkLmRlbGV0ZShpZCArICc6cGVuZGluZycpXG4gICAgcHJldlBlbmRpbmcgPSBjdXJyZW50XG4gICAgcGVuZGluZ1NlZW4gPSB0cnVlXG4gIH1cblxuICAvKiogU2VsZi10cmFja2VkIHJ1bm5pbmcgZWRnZTogZmlsbHMgdGhlIGdhcCBmb3IgdGhlIHNlc3Npb24gYmVpbmcgdmlld2VkLiAqL1xuICBjb25zdCBwcmV2UnVubmluZyA9IG5ldyBNYXAoKVxuICBjb25zdCBmaW5pc2hlZFdoaWxlSGlkZGVuID0gbmV3IFNldCgpXG4gIGZ1bmN0aW9uIHRyYWNrRWRnZXMoc3RhdGUpIHtcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKHN0YXRlLmJ5SWQpKSB7XG4gICAgICBpZiAocm93Lm9yaWdpbiA9PT0gJ3N1YmFnZW50JykgY29udGludWVcbiAgICAgIGNvbnN0IHByZXYgPSBwcmV2UnVubmluZy5nZXQocm93LmlkKVxuICAgICAgaWYgKHByZXYgPT09IHVuZGVmaW5lZCkgeyBwcmV2UnVubmluZy5zZXQocm93LmlkLCByb3cucnVubmluZyk7IGNvbnRpbnVlIH1cbiAgICAgIGlmICghcHJldiAmJiByb3cucnVubmluZykgcnVuU3RhcnRlZEF0LnNldChyb3cuaWQsIERhdGUubm93KCkpXG4gICAgICBpZiAocHJldiAmJiAhcm93LnJ1bm5pbmcpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRlZEF0ID0gcnVuU3RhcnRlZEF0LmdldChyb3cuaWQpXG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSBzdGFydGVkQXQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IERhdGUubm93KCkgLSBzdGFydGVkQXRcbiAgICAgICAgcnVuU3RhcnRlZEF0LmRlbGV0ZShyb3cuaWQpXG4gICAgICAgIGlmIChlbGFwc2VkICE9PSB1bmRlZmluZWQpIGxhc3RSdW5Ncy5zZXQocm93LmlkLCBlbGFwc2VkKVxuICAgICAgICBpZiAocm93LmlkID09PSBzdGF0ZS5jdXJyZW50ICYmICFpc0ZvcmVncm91bmQoKSkgZmluaXNoZWRXaGlsZUhpZGRlbi5hZGQocm93LmlkKVxuICAgICAgICBpZiAocm93LmlkID09PSBzdGF0ZS5jdXJyZW50KSBxdWV1ZU5vdGlmaWNhdGlvbignZG9uZScsIHJvdy5pZCwgcm93LmRpc3BsYXlUaXRsZSA/PyByb3cudGl0bGUgPz8gcm93LmlkLCB1bmRlZmluZWQsIGVsYXBzZWQpXG4gICAgICB9IGVsc2UgaWYgKHJvdy5ydW5uaW5nKSBmaW5pc2hlZFdoaWxlSGlkZGVuLmRlbGV0ZShyb3cuaWQpXG4gICAgICBwcmV2UnVubmluZy5zZXQocm93LmlkLCByb3cucnVubmluZylcbiAgICB9XG4gICAgZm9yIChjb25zdCBpZCBvZiBbLi4ucHJldlJ1bm5pbmcua2V5cygpXSkge1xuICAgICAgaWYgKCEoaWQgaW4gc3RhdGUuYnlJZCkpIHsgcHJldlJ1bm5pbmcuZGVsZXRlKGlkKTsgZmluaXNoZWRXaGlsZUhpZGRlbi5kZWxldGUoaWQpOyBydW5TdGFydGVkQXQuZGVsZXRlKGlkKTsgbGFzdFJ1bk1zLmRlbGV0ZShpZCkgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBCYWNrIGluIHRoZSBmb3JlZ3JvdW5kOiB0aGUgdmlld2VkIHNlc3Npb24ncyBncmVlbiBsaWdodCBjbGVhcnMuICovXG4gIGNvbnN0IG9uRm9yZWdyb3VuZCA9ICgpID0+IHtcbiAgICBpZiAoIWlzRm9yZWdyb3VuZCgpKSByZXR1cm5cbiAgICBpZiAoZmluaXNoZWRXaGlsZUhpZGRlbi5zaXplID4gMCkgeyBmaW5pc2hlZFdoaWxlSGlkZGVuLmNsZWFyKCk7IHN5bmMoKSB9XG4gIH1cblxuICAvKiogR3JlZW4vYW1iZXIgdGFyZ2V0IChtYWluIHNlc3Npb25zIG9ubHk7IGFtYmVyIHdpbnMpOyBudWxsID0gb2ZmaWNpYWwgaWNvbi4gKi9cbiAgZnVuY3Rpb24gdGFyZ2V0T2Yoc3RhdGUpIHtcbiAgICBpZiAoIXJlYWRDb25maWcoKS5jb2xvcnNFbmFibGVkKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKVxuICAgIGxldCBncmVlbiA9IGZhbHNlXG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBpZiAocm93LnBlbmRpbmdJbnRlcmFjdGlvbiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdXJpKGNvbmZpZy5hbWJlcilcbiAgICAgIGlmIChyb3cuY29tcGxldGVkID09PSB0cnVlIHx8IGZpbmlzaGVkV2hpbGVIaWRkZW4uaGFzKHJvdy5pZCkpIGdyZWVuID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAoZ3JlZW4pIHJldHVybiB1cmkoY29uZmlnLmdyZWVuKVxuICAgIHJldHVybiBjb25maWcuYmxhY2sgPyB1cmkoY29uZmlnLmJsYWNrKSA6IG51bGxcbiAgfVxuXG4gIC8qKiBNZXJnZSB0aGUgc2Vzc2lvbiByb3dzIHdpdGggdGhlIG9mZmljaWFsIHN0YXR1cyBzdG9yZSB3aGVuIGF2YWlsYWJsZS4gKi9cbiAgZnVuY3Rpb24gYnVpbGRTdGF0ZSgpIHtcbiAgICBjb25zdCBsaXN0U3RhdGUgPSBsaXN0LmdldFNuYXBzaG90KClcbiAgICBjb25zdCBzdGF0dXMgPSBzdGF0dXNTb3VyY2U/LmdldFNuYXBzaG90KClcbiAgICBsZXQgY3VycmVudCA9IGxpc3RTdGF0ZS5jdXJyZW50XG4gICAgY29uc3QgYnlJZCA9IHt9XG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhsaXN0U3RhdGUuYnlJZCkpIHtcbiAgICAgIGNvbnN0IHMgPSBzdGF0dXM/LmdldChyb3cuaWQpXG4gICAgICBpZiAoKHJvdy5yZXRhaW5lZEJ5Py5tYWluVmlldyA/PyAwKSA+IDApIGN1cnJlbnQgPSByb3cuaWRcbiAgICAgIGJ5SWRbcm93LmlkXSA9IHtcbiAgICAgICAgLi4ucm93LFxuICAgICAgICBydW5uaW5nOiBzPy5ydW5uaW5nID8/IHJvdy5ydW5uaW5nLFxuICAgICAgICBjb21wbGV0ZWQ6IHM/LmNvbXBsZXRpb25VbnJlYWQgPz8gcm93LmNvbXBsZXRlZCA9PT0gdHJ1ZSxcbiAgICAgICAgcGVuZGluZ0ludGVyYWN0aW9uOiBzPy5wZW5kaW5nSW50ZXJhY3Rpb24gPz8gcm93LnBlbmRpbmdJbnRlcmFjdGlvbixcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgLi4ubGlzdFN0YXRlLCBieUlkLCBjdXJyZW50IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmMoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBidWlsZFN0YXRlKClcbiAgICB0cmFja0VkZ2VzKHN0YXRlKVxuICAgIGRldGVjdFRyYW5zaXRpb25zKHN0YXRlKVxuICAgIGNvbnN0IG5leHQgPSB0YXJnZXRPZihzdGF0ZSlcbiAgICBpZiAobmV4dCA9PT0gbnVsbCkgcmVzdG9yZSgpXG4gICAgZWxzZSBpZiAoYXBwbGllZCAhPT0gbmV4dCkgeyBzZXRIcmVmKG5leHQpOyBhcHBsaWVkID0gbmV4dCB9XG4gIH1cblxuICBjb25zdCB1bnN1YnNjcmliZUxpc3QgPSBsaXN0LnN1YnNjcmliZShzeW5jKVxuICBjb25zdCB1bnN1YnNjcmliZUZvcm0gPSBmb3JtLnN1YnNjcmliZShzeW5jKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25Gb3JlZ3JvdW5kKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvcmVncm91bmQpXG4gIHN5bmMoKVxuXG4gIC8vIE9wdGlvbmFsIGNoYW5uZWw6IHRoZSBvZmZpY2lhbCBzdGF0dXMgc3RvcmUgKHByZXNlbnQgb24gMC4xLjcrKS5cbiAgY3R4LmluamVjdChbJ3VpU2Vzc2lvbiddLCAodWlDdHgpID0+IHtcbiAgICBzdGF0dXNTb3VyY2UgPSB1aUN0eC51aVNlc3Npb24uc2Vzc2lvblN0YXR1c1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RhdHVzU291cmNlLnN1YnNjcmliZShzeW5jKVxuICAgIHN5bmMoKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZSgpXG4gICAgICBzdGF0dXNTb3VyY2UgPSB1bmRlZmluZWRcbiAgICAgIHN5bmMoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmIChub3RpZnlUaW1lciAhPT0gdW5kZWZpbmVkKSBjbGVhclRpbWVvdXQobm90aWZ5VGltZXIpXG4gICAgbm90aWZ5UXVldWUuY2xlYXIoKVxuICAgIHVuc3Vic2NyaWJlTGlzdCgpXG4gICAgdW5zdWJzY3JpYmVGb3JtKClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25Gb3JlZ3JvdW5kKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9yZWdyb3VuZClcbiAgICByZXN0b3JlKClcbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxtQkFBa0I7QUFDbEIsc0NBQWlEOzs7QUNFMUMsSUFBTSxpQkFBaUI7QUFBQSxFQUM1QixJQUFJO0FBQUEsRUFDSixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixnQkFBZ0I7QUFBQSxFQUNoQixrQkFBa0I7QUFDcEI7QUFRTyxTQUFTLGdCQUFnQixZQUFZLGNBQWM7QUFDeEQsU0FBTztBQUFBLElBQ0wsSUFBSSxlQUFlO0FBQUEsSUFDbkIsU0FBUyxlQUFlO0FBQUEsSUFDeEIsV0FBVyxlQUFlO0FBQUEsSUFDMUIsUUFBUSxlQUFlO0FBQUEsSUFDdkIs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
    return module.exports;
  },
});
