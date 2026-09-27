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
function whaleSvg(color, glow) {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><path d="M48.8354 10.0479C48.3232 9.79199 48.1025 10.2798 47.8032 10.5278C47.7007 10.6079 47.6143 10.7119 47.5273 10.8076C46.7793 11.624 45.9048 12.1597 44.7622 12.0957C43.0923 12 41.666 12.5356 40.4058 13.8398C40.1377 12.2319 39.2476 11.272 37.8926 10.6558C37.1836 10.3359 36.4668 10.0156 35.9702 9.31982C35.6235 8.82373 35.5293 8.27197 35.356 7.72754C35.2456 7.3999 35.1353 7.06396 34.7651 7.00781C34.3633 6.94385 34.2056 7.2876 34.0479 7.57568C33.418 8.75195 33.1733 10.0479 33.1973 11.3599C33.2524 14.312 34.4736 16.6641 36.8999 18.3359C37.1758 18.5278 37.2466 18.7197 37.1597 19C36.9946 19.5757 36.7974 20.1357 36.624 20.7119C36.5137 21.0801 36.3486 21.1597 35.9624 21C34.6309 20.4321 33.481 19.5918 32.4644 18.5757C30.7393 16.8721 29.1792 14.9917 27.2334 13.52C26.7764 13.1758 26.3193 12.856 25.8467 12.5518C23.8618 10.584 26.1069 8.96777 26.627 8.77588C27.1704 8.57568 26.8159 7.8877 25.0591 7.896C23.3022 7.90381 21.6953 8.50391 19.647 9.30371C19.3477 9.42383 19.0322 9.51172 18.7095 9.58398C16.8501 9.22363 14.9199 9.14355 12.9033 9.37598C9.10596 9.80762 6.07275 11.6396 3.84326 14.7681C1.16455 18.5278 0.53418 22.7998 1.30664 27.2559C2.11768 31.9521 4.46582 35.8398 8.07373 38.8799C11.8159 42.0322 16.1255 43.5762 21.041 43.2803C24.0269 43.104 27.3516 42.6963 31.1016 39.4561C32.0469 39.936 33.0396 40.1279 34.686 40.272C35.9546 40.3921 37.1758 40.208 38.1211 40.0078C39.6021 39.688 39.4995 38.2881 38.9639 38.0322C34.623 35.9678 35.5762 36.8081 34.71 36.1279C36.9155 33.4639 40.2402 30.6958 41.54 21.728C41.6426 21.0161 41.5557 20.5679 41.54 19.9917C41.5322 19.6396 41.6108 19.5039 42.0049 19.4639C43.0923 19.3359 44.1479 19.0317 45.1167 18.4878C47.9292 16.9199 49.064 14.3438 49.3315 11.2559C49.3711 10.7837 49.3237 10.2959 48.8354 10.0479ZM24.3262 37.8398C20.1196 34.4639 18.0791 33.3521 17.2358 33.3999C16.4482 33.4482 16.5898 34.3682 16.7632 34.9678C16.9443 35.5601 17.1812 35.9683 17.5117 36.4878C17.7402 36.832 17.8979 37.3442 17.2832 37.728C15.9282 38.584 13.5728 37.4399 13.4624 37.3838C10.7207 35.7358 8.42822 33.5601 6.81348 30.584C5.25342 27.7197 4.34766 24.6479 4.19775 21.3677C4.1582 20.5757 4.38672 20.2959 5.15869 20.1519C6.17529 19.96 7.22314 19.9199 8.23926 20.0718C12.5327 20.7119 16.1885 22.6719 19.2529 25.7759C21.002 27.5439 22.3252 29.6558 23.6885 31.7202C25.1377 33.9121 26.6978 36 28.6831 37.7119C29.3843 38.312 29.9434 38.7681 30.479 39.104C28.8643 39.2881 26.1699 39.3281 24.3262 37.8398ZM26.3433 24.6001C26.3433 24.248 26.6191 23.9678 26.9658 23.9678C27.0444 23.9678 27.1152 23.9839 27.1782 24.0078C27.2651 24.04 27.3438 24.0879 27.4067 24.1602C27.5171 24.272 27.5801 24.4321 27.5801 24.6001C27.5801 24.9521 27.3042 25.2319 26.9575 25.2319C26.6108 25.2319 26.3433 24.9521 26.3433 24.6001ZM32.6064 27.8799C32.2046 28.0479 31.8027 28.1919 31.4165 28.208C30.8179 28.2397 30.1641 27.9922 29.8096 27.688C29.2583 27.2158 28.8643 26.9521 28.6987 26.1279C28.6279 25.7759 28.6675 25.2319 28.7305 24.9199C28.8721 24.248 28.7144 23.8159 28.2495 23.4238C27.8716 23.104 27.3911 23.0161 26.8633 23.0161C26.666 23.0161 26.4849 22.9277 26.3511 22.856C26.1304 22.7441 25.9492 22.4639 26.1226 22.1201C26.1777 22.0078 26.4458 21.7358 26.5088 21.688C27.2256 21.272 28.0527 21.4077 28.8169 21.7197C29.5259 22.0161 30.0615 22.5601 30.834 23.3281C31.6216 24.2559 31.7632 24.5117 32.2124 25.208C32.5669 25.752 32.8901 26.312 33.1104 26.9521C33.2446 27.3521 33.0713 27.6802 32.6064 27.8799Z" fill="' + color + '" fill-opacity="1" fill-rule="nonzero"/></svg>';
  if (glow === void 0) return svg;
  const filter = '<defs><filter id="malko-glow" x="-60%" y="-60%" width="220%" height="220%"><feDropShadow dx="0" dy="0" stdDeviation="' + glow.blur.toFixed(2) + '" flood-color="' + color + '" flood-opacity="' + glow.opacity.toFixed(2) + '"/></filter></defs>';
  return svg.replace("><path", ">" + filter + "<path").replace("<path", '<path filter="url(#malko-glow)"');
}

// src/notify.ts
var LOCALE_NS = "settings.malko-prefs";
var DEFAULT_HREF = "/favicon.svg";
var DEFAULT_GREEN = "#22C55E";
var DEFAULT_AMBER = "#F59E0B";
var DEFAULT_WORKING = "#3B82F6";
var HEX = /^#[0-9a-fA-F]{6}$/;
var GLOW_FRAMES = 10;
var GLOW_FRAME_MS = 110;
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
      working: HEX.test(value.working) ? value.working : DEFAULT_WORKING,
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
  let animTimer;
  let animColor;
  const uriGlow = (hex, blur, opacity) => `data:image/svg+xml,${encodeURIComponent(whaleSvg(hex, { blur, opacity }))}`;
  function glowFrames(hex) {
    const frames = [];
    for (let i = 0; i < GLOW_FRAMES; i += 1) {
      const phase = (1 - Math.cos(i / GLOW_FRAMES * Math.PI * 2)) / 2;
      frames.push(uriGlow(hex, 0.8 + phase * 3.2, 0.15 + phase * 0.85));
    }
    return frames;
  }
  function stopAnimation() {
    if (animTimer !== void 0) {
      clearInterval(animTimer);
      animTimer = void 0;
    }
    animColor = void 0;
  }
  function startAnimation(hex) {
    if (animTimer !== void 0 && animColor === hex) return;
    stopAnimation();
    const frames = glowFrames(hex);
    let index = 0;
    setHref(frames[0]);
    applied = "glow";
    animColor = hex;
    animTimer = setInterval(() => {
      index = (index + 1) % frames.length;
      setHref(frames[index]);
    }, GLOW_FRAME_MS);
  }
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
  function currentKind(state) {
    if (!readConfig().colorsEnabled) return "off";
    let green = false;
    let working = false;
    for (const row of Object.values(state.byId)) {
      if (row.origin === "subagent") continue;
      if (row.pendingInteraction !== void 0) return "amber";
      if (row.running === true) working = true;
      if (row.completed === true || finishedWhileHidden.has(row.id)) green = true;
    }
    if (working) return "working";
    if (green) return "green";
    return "idle";
  }
  function applyKind(kind) {
    const config = readConfig();
    if (kind === "off") {
      stopAnimation();
      restore();
      return;
    }
    if (kind === "working") {
      startAnimation(config.working);
      return;
    }
    stopAnimation();
    const href = kind === "amber" ? uri(config.amber) : kind === "green" ? uri(config.green) : config.black ? uri(config.black) : null;
    if (href === null) restore();
    else if (applied !== href) {
      setHref(href);
      applied = href;
    }
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
    applyKind(currentKind(state));
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
    stopAnimation();
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
  workingLabel: "Working",
  workingHint: "Pulses while a session is generating.",
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
  workingLabel: "\u751F\u6210\u4E2D",
  workingHint: "\u4F1A\u8BDD\u751F\u6210\u65F6\u56FE\u6807\u547C\u5438\u53D1\u5149\u3002",
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
      { style: { ...S.col, marginBottom: 10 }, key: field },
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
        { style: S.rowTwo, key: "colors1" },
        colorField("greenLabel", "green", "#22C55E", false, null),
        colorField("amberLabel", "amber", "#F59E0B", false, null)
      ),
      el(
        "div",
        { style: S.rowTwo, key: "colors2" },
        colorField("workingLabel", "working", "#3B82F6", false, "workingHint"),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC50cyIsICJzcmMvcmVtb3RlLnRzIiwgInNyYy93aGFsZS50cyIsICJzcmMvbm90aWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgYnJvd3NlciBoYWxmLlxuICpcbiAqIE9uZSBzZXR0aW5ncyBzZWN0aW9uIHdpdGggdGhyZWUgc3ViLXBhbmVsczogY29udGV4dCBjb21wYWN0aW9uLCBsbGFtYS5jcHBcbiAqIG1vZGVsIGVucmljaG1lbnQsIGFuZCBub3RpZmljYXRpb25zLiBSZWFkcyBhbmQgd3JpdGVzIHRoZSBgbWFsa28tcHJlZnNgXG4gKiBjb25maWcgZm9ybSwgcmVhZHMgdGhlIGBsbG0tcGktYWlgIGZvcm0gdG8gcG9wdWxhdGUgdGhlIG1vZGVsIHBpY2tlcnMsIGFuZFxuICogcnVucyB0aGUgdGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoc2VlIGAuL25vdGlmeS50c2ApLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnRlZENvbnRyb2wsIFN3aXRjaCB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXByaW1pdGl2ZXMnXG5pbXBvcnQgeyBwcm9iZUludm9jYXRpb24gfSBmcm9tICcuL3JlbW90ZS50cydcbmltcG9ydCB7XG4gIExPQ0FMRV9OUyxcbiAgY3VycmVudE5vdGlmaWNhdGlvblBlcm1pc3Npb24sXG4gIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uLFxuICBzdGFydFN0YXR1c0xpZ2h0LFxufSBmcm9tICcuL25vdGlmeS50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZHNoLW1hbGtvLXByZWZzJ1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsnc2Vzc2lvbnMnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2NvbmZpZ0Zvcm1zJywgJ3JlbW90ZSddXG5cbmNvbnN0IE5TID0gJ21hbGtvLXByZWZzJ1xuY29uc3QgTU9ERUxfTlMgPSAnbGxtLXBpLWFpJ1xuY29uc3QgU0xPVCA9ICdzZXR0aW5ncy5zZWN0aW9uJ1xuY29uc3QgVEFCU19JRCA9ICdtYWxrby1wcmVmcy10YWJzJ1xuXG4vKiogYCNSUkdHQkJgIGNvbG91ciBsaXRlcmFsLiAqL1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuXG4vKiogU3RyaWN0LWNvZGVjIHN0dWI6IHRoZSBicm93c2VyIG5ldmVyIGRlY29kZXMgaXRzIG93biBhcmd1bWVudHMuICovXG5jb25zdCBpZGVudGl0eVNjaGVtYSA9ICgpID0+ICh7IHBhcnNlOiAodmFsdWUpID0+IHZhbHVlIH0pXG5cbi8qKiBCcm93c2VyIGNvbnRyaWJ1dGlvbiBtb3VudGVkIHRocm91Z2ggYGN0eC5yZW1vdGUuJG1vdW50KClgLiAqL1xuY29uc3QgUFJPQkVfUkVNT1RFID0ge1xuICBwYWNrYWdlOiAnZHNoLW1hbGtvLXByZWZzJyxcbiAgZGVzY3JpcHRvcnM6IFtwcm9iZUludm9jYXRpb24oaWRlbnRpdHlTY2hlbWEsIGlkZW50aXR5U2NoZW1hKV0sXG59XG5cbmNvbnN0IGVsID0gUmVhY3QuY3JlYXRlRWxlbWVudFxuXG5jb25zdCBlbiA9IHtcbiAgdGl0bGU6IFwiTWFsa28ncyBwcmVmc1wiLFxuICBpbnRybzogJ1R1bmFibGUgY29tcGFuaW9uIHRvIHRoZSBvZmZpY2lhbCBjb21wYWN0aW9uIGVuZ2luZS4nLFxuICB0YWJDb21wYWN0aW9uOiAnQ29udGV4dCBjb21wYWN0aW9uJyxcbiAgdGFiTW9kZWxzOiAnbGxhbWEuY3BwIG1vZGVscycsXG4gIHRhYk5vdGlmaWNhdGlvbnM6ICdOb3RpZmljYXRpb25zJyxcbiAgLy8gQ29tcGFjdGlvblxuICB0aHJlc2hvbGRUaXRsZTogJ0NvbXBhY3Rpb24gdGhyZXNob2xkJyxcbiAgdGhyZXNob2xkVG9rZW5zOiAnVGhyZXNob2xkICh0b2tlbnMpJyxcbiAgdGhyZXNob2xkVG9rZW5zSGludDogJ0Fic29sdXRlIHByZXNzdXJlIGluIHRva2VucywgZS5nLiAxMzBrIG9yIDEzMEsuIEVtcHR5LzAgPSB1c2UgdGhlIHJhdGlvIGJlbG93LicsXG4gIGNvbnRleHRXaW5kb3c6ICdDb250ZXh0IHdpbmRvdyAodG9rZW5zKScsXG4gIGNvbnRleHRXaW5kb3dIaW50OiAnV2luZG93IHRoZSBhYnNvbHV0ZSB0aHJlc2hvbGQgaXMgZXhwcmVzc2VkIGFnYWluc3QgKGUuZy4gMjAwaykuIDAgPSBkZXJpdmUgbm90aGluZyAocmF0aW8gb25seSkuJyxcbiAgdGhyZXNob2xkUmF0aW86ICdUaHJlc2hvbGQgcmF0aW8nLFxuICB0aHJlc2hvbGRSYXRpb0hpbnQ6ICdVc2VkIHdoZW4gdGhlIGFic29sdXRlIHRocmVzaG9sZCBpcyBlbXB0eSAoMC44ID0gODAlIG9mIHRoZSB3aW5kb3cpLicsXG4gIGhlYWRyb29tOiAnSGVhZHJvb20gKHRva2VucyknLFxuICBoZWFkcm9vbUhpbnQ6ICdSZXNlcnZlZCBvbiB0b3Agb2YgdGhlIG91dHB1dCBjYXAuIFRoZSBvZmZpY2lhbCBkZWZhdWx0ICg2NTUzNikgY2FwcyB0aGUgdHJpZ2dlciB3ZWxsIGJlbG93IDgwJS4nLFxuICByZXRlbnRpb25UaXRsZTogJ1JldGVudGlvbicsXG4gIHJldGFpblRva2VuczogJ0tlZXAgbGFzdCAodG9rZW5zKScsXG4gIHJldGFpblRva2Vuc0hpbnQ6ICdWZXJiYXRpbSByZWNlbnQtY29udGV4dCBidWRnZXQsIGUuZy4gMzJrLiBFbXB0eS8wID0gdXNlIHRoZSByYXRpbyBiZWxvdy4nLFxuICByZXRhaW5SYXRpbzogJ0tlZXAgcmF0aW8nLFxuICBiZWhhdmlvdXJUaXRsZTogJ0JlaGF2aW91cicsXG4gIGF1dG86ICdBdXRvbWF0aWMgY29tcGFjdGlvbicsXG4gIGF1dG9IaW50OiAnT2ZmaWNpYWwgYmV0d2Vlbi1zdGVwIHByZXNzdXJlIGNvbXBhY3Rpb24gYW5kIGNvbnRleHQtb3ZlcmZsb3cgcmVjb3ZlcnkuJyxcbiAgdHVybkVuZDogJ0NvbXBhY3QgYXQgZW5kIG9mIHR1cm4nLFxuICB0dXJuRW5kSGludDogJ1J1bnMgb25lIG1vcmUgY29tcGFjdGlvbiB3aGVuIHRoZSBhZ2VudCBnb2VzIGlkbGUuJyxcbiAgc3VtbWFyaXphdGlvblRpdGxlOiAnU3VtbWFyaXphdGlvbicsXG4gIHN1bW1hcml6YXRpb25Nb2RlOiAnTW9kZWwnLFxuICBtb2RlU2Vzc2lvbjogJ1Nlc3Npb24gbW9kZWwnLFxuICBtb2RlQ3VzdG9tOiAnQ3VzdG9tIG1vZGVsJyxcbiAgcHJvdmlkZXI6ICdQcm92aWRlcicsXG4gIG1vZGVsOiAnTW9kZWwnLFxuICByZWFzb25pbmc6ICdSZWFzb25pbmcnLFxuICByZWFzb25pbmdEZWZhdWx0OiAnRGVmYXVsdCcsXG4gIHJlYXNvbmluZ09mZjogJ09mZicsXG4gIG1heFRva2VuczogJ1N1bW1hcnkgb3V0cHV0IGNhcCAodG9rZW5zKScsXG4gIGFkdmFuY2VkVGl0bGU6ICdBZHZhbmNlZCcsXG4gIGNvbXBhY3Rpb25SZXRyaWVzOiAnRXh0cmEgY29tcGFjdGlvbiBhdHRlbXB0cycsXG4gIG1heE92ZXJmbG93UmV0cmllczogJ092ZXJmbG93IHJlY292ZXJ5IGF0dGVtcHRzJyxcbiAgLy8gTW9kZWxzXG4gIG1vZGVsc1RpdGxlOiAnbGxhbWEuY3BwIG1vZGVscycsXG4gIG1vZGVsc0ludHJvOiAnUmVhZCBjb250ZXh0IHdpbmRvdyBhbmQgaW5wdXQgbW9kYWxpdGllcyBmcm9tIHRoZSBzZXJ2ZXIgYW5kIGZpbGwgdGhlIG1vZGVsIGVudHJpZXMgb2YgYSBwaS1haSBwcm92aWRlci4nLFxuICBlbnJpY2g6ICdFbnJpY2ggZnJvbSBzZXJ2ZXInLFxuICBlbnJpY2hpbmc6ICdFbnJpY2hpbmdcXHUyMDI2JyxcbiAgbm9CYXNlVXJsOiAnTm8gZW5kcG9pbnQgY29uZmlndXJlZCBmb3IgdGhpcyBwcm92aWRlci4nLFxuICBlbnJpY2hlZDogJ0VucmljaGVkIHtjb3VudH0gbW9kZWwocykuJyxcbiAgLy8gTm90aWZpY2F0aW9uc1xuICBjb2xvcnNHcm91cDogJ1RhYiBzdGF0dXMgbGlnaHQnLFxuICBjb2xvcnNJbnRybzogJ1RoZSBicm93c2VyIHRhYiBpY29uIHJlZmxlY3RzIHRoZSBzZXNzaW9uIHN0YXRlOiBncmVlbiA9IGZpbmlzaGVkLCBhbWJlciA9IHdhaXRpbmcgZm9yIHlvdS4nLFxuICBjb2xvcnNFbmFibGVkOiAnQ29sb3IgdGhlIHRhYiBpY29uJyxcbiAgY29sb3JzRW5hYmxlZEhpbnQ6ICdPZmYga2VlcHMgdGhlIG9mZmljaWFsIGZhdmljb24gYXQgYWxsIHRpbWVzLicsXG4gIGdyZWVuTGFiZWw6ICdGaW5pc2hlZCcsXG4gIGFtYmVyTGFiZWw6ICdXYWl0aW5nIChxdWVzdGlvbi9hcHByb3ZhbCknLFxuICB3b3JraW5nTGFiZWw6ICdXb3JraW5nJyxcbiAgd29ya2luZ0hpbnQ6ICdQdWxzZXMgd2hpbGUgYSBzZXNzaW9uIGlzIGdlbmVyYXRpbmcuJyxcbiAgYmxhY2tMYWJlbDogJ0lkbGUgY29sb3InLFxuICBibGFja0hpbnQ6ICdMZWF2ZSBlbXB0eSB0byBrZWVwIHRoZSBvZmZpY2lhbCBmYXZpY29uIHdoZW4gaWRsZS4nLFxuICBjb2xvclJlc2V0OiAnQ2xlYXInLFxuICBjb2xvclVuc2V0OiAnb2ZmaWNpYWwnLFxuICBub3RpZnlHcm91cDogJ1N5c3RlbSBub3RpZmljYXRpb25zJyxcbiAgbm90aWZ5SW50cm86ICdSYWlzZSBhIGJyb3dzZXIgbm90aWZpY2F0aW9uIHdoZW4gYSBzZXNzaW9uIGZpbmlzaGVzIG9yIGEgcXVlc3Rpb24vYXBwcm92YWwgd2FpdHMgZm9yIHlvdS4nLFxuICBub3RpZnlFbmFibGVkOiAnRW5hYmxlIG5vdGlmaWNhdGlvbnMnLFxuICBub3RpZnlFbmFibGVkSGludDogJ1RoZSBicm93c2VyIGFza3MgZm9yIHBlcm1pc3Npb24gdGhlIGZpcnN0IHRpbWUgeW91IGVuYWJsZSB0aGlzLicsXG4gIG5vdGlmeUZvcmVncm91bmQ6ICdOb3RpZnkgaW4gdGhlIGZvcmVncm91bmQnLFxuICBub3RpZnlGb3JlZ3JvdW5kSGludDogJ0Fsc28gbm90aWZ5IHdoaWxlIHRoZSB0YWIgaXMgdmlzaWJsZSBhbmQgZm9jdXNlZC4nLFxuICBub3RpZnlBdXRvSGlkZTogJ0tlZXAgb24gc2NyZWVuJyxcbiAgbm90aWZ5QXV0b0hpZGVIaW50OiAnT246IHRoZSBub3RpZmljYXRpb24gc3RheXMgdW50aWwgeW91IGRpc21pc3MgaXQuJyxcbiAgcGVybWlzc2lvbkRlbmllZDogJ0Jsb2NrZWQgYnkgdGhlIGJyb3dzZXIgXFx1MjAxNCByZS1lbmFibGUgbm90aWZpY2F0aW9ucyBpbiB0aGUgc2l0ZSBzZXR0aW5ncy4nLFxuICBwZXJtaXNzaW9uVW5zdXBwb3J0ZWQ6ICdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBzeXN0ZW0gbm90aWZpY2F0aW9ucy4nLFxuICBub3RpZnlEb25lVGl0bGU6ICdTZXNzaW9uIGZpbmlzaGVkJyxcbiAgbm90aWZ5UGVuZGluZ1RpdGxlOiAnU29tZXRoaW5nIGF3YWl0cyB5b3UnLFxuICBub3RpZnlEdXJhdGlvbjogJ3R1cm4gdG9vayB7ZHVyYXRpb259JyxcbiAgZHVyYXRpb25TZWNvbmRzOiAne3NlY29uZHN9cycsXG4gIGR1cmF0aW9uTWludXRlczogJ3ttaW51dGVzfW17c2Vjb25kc31zJyxcbiAgcGVuZGluZ0tpbmRBcHByb3ZhbDogJ0FwcHJvdmFsIG5lZWRlZCcsXG4gIHBlbmRpbmdLaW5kUXVlc3Rpb246ICdRdWVzdGlvbicsXG4gIHBlbmRpbmdLaW5kUGxhblJldmlldzogJ1BsYW4gcmV2aWV3JyxcbiAgcGVuZGluZ0FwcHJvdmFsVG9vbDogJ0FwcHJvdmFsIFxcdTAwYjcge3Rvb2x9JyxcbiAgcGVuZGluZ1F1ZXN0aW9uQ2hvb3NlOiAnQ2hvb3NlIGFuIG9wdGlvbicsXG4gIHBlbmRpbmdRdWVzdGlvbk11bHRpOiAnQ2hvb3NlIG9wdGlvbnMnLFxuICBwZW5kaW5nUXVlc3Rpb25GaWxsOiAnVHlwZSBhbiBhbnN3ZXInLFxuICBwZW5kaW5nUXVlc3Rpb25CYXRjaDogJ3tjb3VudH0gcXVlc3Rpb25zJyxcbiAgLy8gU2hhcmVkXG4gIHNhdmU6ICdTYXZlJyxcbiAgc2F2ZWQ6ICdTYXZlZC4nLFxuICBpbnZhbGlkVG9rZW46ICdFbnRlciBhIG51bWJlciBvciBhIGsvTSBzdWZmaXggdmFsdWUgKGUuZy4gMTMwaykuJyxcbiAgaW52YWxpZEhleDogJ0NvbG9yIG11c3QgYmUgI1JSR0dCQi4nLFxuICBlcnJvclByZWZpeDogJ0Vycm9yOiAnLFxuICB1bmF2YWlsYWJsZTogJ1RoaXMgc2V0dGluZyBpcyBub3QgYXZhaWxhYmxlIGZyb20gdGhpcyBjbGllbnQuJyxcbiAgbG9hZGluZzogJ0xvYWRpbmdcXHUyMDI2Jyxcbn1cblxuY29uc3QgemggPSB7XG4gIHRpdGxlOiAnTWFsa28gXFx1NTA0ZlxcdTU5N2QnLFxuICBpbnRybzogJ1xcdTViOThcXHU2NWI5XFx1NTM4YlxcdTdmMjlcXHU1ZjE1XFx1NjRjZVxcdTc2ODRcXHU1M2VmXFx1OGMwM1xcdTRmMzRcXHU3NTFmXFx1MzAwMicsXG4gIHRhYkNvbXBhY3Rpb246ICdcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU1MzhiXFx1N2YyOScsXG4gIHRhYk1vZGVsczogJ2xsYW1hLmNwcCBcXHU2YTIxXFx1NTc4YicsXG4gIHRhYk5vdGlmaWNhdGlvbnM6ICdcXHU5MDFhXFx1NzdlNScsXG4gIHRocmVzaG9sZFRpdGxlOiAnXFx1NTM4YlxcdTdmMjlcXHU5NjAwXFx1NTAzYycsXG4gIHRocmVzaG9sZFRva2VuczogJ1xcdTk2MDBcXHU1MDNjXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICB0aHJlc2hvbGRUb2tlbnNIaW50OiAnXFx1N2VkZFxcdTViZjkgdG9rZW4gXFx1OTYwMFxcdTUwM2NcXHVmZjBjXFx1NTk4MiAxMzBrXFx1MzAwMlxcdTc1NTlcXHU3YTdhLzAgPSBcXHU3NTI4XFx1NGUwYlxcdTY1YjlcXHU2YmQ0XFx1NGY4YlxcdTMwMDInLFxuICBjb250ZXh0V2luZG93OiAnXFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1N2E5N1xcdTUzZTNcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIGNvbnRleHRXaW5kb3dIaW50OiAnXFx1N2VkZFxcdTViZjlcXHU5NjAwXFx1NTAzY1xcdTYyNDBcXHU0ZjlkXFx1NjM2ZVxcdTc2ODRcXHU3YTk3XFx1NTNlM1xcdWZmMDhcXHU1OTgyIDIwMGtcXHVmZjA5XFx1MzAwMjAgPSBcXHU1M2VhXFx1NzUyOFxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIHRocmVzaG9sZFJhdGlvOiAnXFx1OTYwMFxcdTUwM2NcXHU2YmQ0XFx1NGY4YicsXG4gIHRocmVzaG9sZFJhdGlvSGludDogJ1xcdTVmNTNcXHU3ZWRkXFx1NWJmOVxcdTk2MDBcXHU1MDNjXFx1NGUzYVxcdTdhN2FcXHU2NWY2XFx1NGY3ZlxcdTc1MjhcXHVmZjA4MC44ID0gXFx1N2E5N1xcdTUzZTNcXHU3Njg0IDgwJVxcdWZmMDlcXHUzMDAyJyxcbiAgaGVhZHJvb206ICdcXHU5ODg0XFx1NzU1OVxcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgaGVhZHJvb21IaW50OiAnXFx1NTcyOFxcdThmOTNcXHU1MWZhXFx1OTg4NFxcdTdiOTdcXHU0ZTRiXFx1NTkxNlxcdTUxOGRcXHU5ODg0XFx1NzU1OVxcdTc2ODRcXHU5MWNmXFx1MzAwMlxcdTViOThcXHU2NWI5XFx1OWVkOFxcdThiYTQgNjU1MzYgXFx1NGYxYVxcdTYyOGFcXHU4OWU2XFx1NTNkMVxcdTcwYjlcXHU2MmM5XFx1NTIzMCA4MCUgXFx1NGVlNVxcdTRlMGJcXHUzMDAyJyxcbiAgcmV0ZW50aW9uVGl0bGU6ICdcXHU0ZmRkXFx1NzU1OScsXG4gIHJldGFpblRva2VuczogJ1xcdTRmZGRcXHU3NTU5XFx1NjcwMFxcdThmZDFcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIHJldGFpblRva2Vuc0hpbnQ6ICdcXHU5MDEwXFx1NWI1N1xcdTRmZGRcXHU3NTU5XFx1NzY4NFxcdThmZDFcXHU2NzFmXFx1OTg4NFxcdTdiOTdcXHVmZjBjXFx1NTk4MiAzMmtcXHUzMDAyXFx1NzU1OVxcdTdhN2EvMCA9IFxcdTc1MjhcXHU0ZTBiXFx1NjViOVxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIHJldGFpblJhdGlvOiAnXFx1NGZkZFxcdTc1NTlcXHU2YmQ0XFx1NGY4YicsXG4gIGJlaGF2aW91clRpdGxlOiAnXFx1ODg0Y1xcdTRlM2EnLFxuICBhdXRvOiAnXFx1ODFlYVxcdTUyYThcXHU1MzhiXFx1N2YyOScsXG4gIGF1dG9IaW50OiAnXFx1NWI5OFxcdTY1YjlcXHU3Njg0XFx1NmI2NVxcdTk1ZjRcXHU1MzhiXFx1NTI5YlxcdTUzOGJcXHU3ZjI5XFx1NGUwZVxcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTZlYTJcXHU1MWZhXFx1NjA2MlxcdTU5MGRcXHUzMDAyJyxcbiAgdHVybkVuZDogJ1xcdThmNmVcXHU2NzJiXFx1NTM4YlxcdTdmMjknLFxuICB0dXJuRW5kSGludDogJ1xcdTRlZTNcXHU3NDA2XFx1OGY2Y1xcdTRlM2EgaWRsZSBcXHU2NWY2XFx1NTE4ZFxcdTUzOGJcXHU3ZjI5XFx1NGUwMFxcdTZiMjFcXHUzMDAyJyxcbiAgc3VtbWFyaXphdGlvblRpdGxlOiAnXFx1NjQ1OFxcdTg5ODEnLFxuICBzdW1tYXJpemF0aW9uTW9kZTogJ1xcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZVNlc3Npb246ICdcXHU0ZjFhXFx1OGJkZFxcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZUN1c3RvbTogJ1xcdTgxZWFcXHU1YjlhXFx1NGU0OVxcdTZhMjFcXHU1NzhiJyxcbiAgcHJvdmlkZXI6ICdcXHU2M2QwXFx1NGY5YlxcdTU1NDYnLFxuICBtb2RlbDogJ1xcdTZhMjFcXHU1NzhiJyxcbiAgcmVhc29uaW5nOiAnXFx1NjAxZFxcdTgwMDNcXHU3ZWE3XFx1NTIyYicsXG4gIHJlYXNvbmluZ0RlZmF1bHQ6ICdcXHU5ZWQ4XFx1OGJhNCcsXG4gIHJlYXNvbmluZ09mZjogJ1xcdTUxNzNcXHU5NWVkJyxcbiAgbWF4VG9rZW5zOiAnXFx1NjQ1OFxcdTg5ODFcXHU4ZjkzXFx1NTFmYVxcdTRlMGFcXHU5NjUwXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICBhZHZhbmNlZFRpdGxlOiAnXFx1OWFkOFxcdTdlYTcnLFxuICBjb21wYWN0aW9uUmV0cmllczogJ1xcdTk4OWRcXHU1OTE2XFx1NTM4YlxcdTdmMjlcXHU1YzFkXFx1OGJkNScsXG4gIG1heE92ZXJmbG93UmV0cmllczogJ1xcdTZlYTJcXHU1MWZhXFx1NjA2MlxcdTU5MGRcXHU1YzFkXFx1OGJkNScsXG4gIG1vZGVsc1RpdGxlOiAnbGxhbWEuY3BwIFxcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZWxzSW50cm86ICdcXHU0ZWNlXFx1NjcwZFxcdTUyYTFcXHU1NjY4XFx1OGJmYlxcdTUzZDZcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU3YTk3XFx1NTNlM1xcdTRlMGVcXHU4ZjkzXFx1NTE2NVxcdTZhMjFcXHU2MDAxXFx1ZmYwY1xcdTVlNzZcXHU1ODZiXFx1NTE0NSBwaS1haSBcXHU2M2QwXFx1NGY5YlxcdTU1NDZcXHU3Njg0XFx1NmEyMVxcdTU3OGJcXHU2NzYxXFx1NzZlZVxcdTMwMDInLFxuICBlbnJpY2g6ICdcXHU0ZWNlXFx1NjcwZFxcdTUyYTFcXHU1NjY4XFx1NWJjY1xcdTUzMTYnLFxuICBlbnJpY2hpbmc6ICdcXHU2YjYzXFx1NTcyOFxcdTViY2NcXHU1MzE2XFx1MjAyNicsXG4gIG5vQmFzZVVybDogJ1xcdThiZTVcXHU2M2QwXFx1NGY5YlxcdTU1NDZcXHU2NzJhXFx1OTE0ZFxcdTdmNmVcXHU3YWVmXFx1NzBiOVxcdTMwMDInLFxuICBlbnJpY2hlZDogJ1xcdTVkZjJcXHU1YmNjXFx1NTMxNiB7Y291bnR9IFxcdTRlMmFcXHU2YTIxXFx1NTc4YlxcdTMwMDInLFxuICBjb2xvcnNHcm91cDogJ1xcdTY4MDdcXHU3YjdlXFx1OTg3NVxcdTcyYjZcXHU2MDAxXFx1NzA2ZicsXG4gIGNvbG9yc0ludHJvOiAnXFx1NjgwN1xcdTdiN2VcXHU5ODc1XFx1NTZmZVxcdTY4MDdcXHU5NjhmXFx1NGYxYVxcdThiZGRcXHU3MmI2XFx1NjAwMVxcdTUzZDhcXHU4MjcyXFx1ZmYxYVxcdTdlZmYgPSBcXHU1ZGYyXFx1NWI4Y1xcdTYyMTBcXHVmZjBjXFx1NzQyNVxcdTczYzAgPSBcXHU3YjQ5XFx1NGY2MFxcdTU5MDRcXHU3NDA2XFx1MzAwMicsXG4gIGNvbG9yc0VuYWJsZWQ6ICdcXHU1NDJmXFx1NzUyOFxcdTU2ZmVcXHU2ODA3XFx1NTNkOFxcdTgyNzInLFxuICBjb2xvcnNFbmFibGVkSGludDogJ1xcdTUxNzNcXHU5NWVkXFx1NTQwZVxcdTU5Y2JcXHU3ZWM4XFx1NGY3ZlxcdTc1MjhcXHU1Yjk4XFx1NjViOVxcdTU2ZmVcXHU2ODA3XFx1MzAwMicsXG4gIGdyZWVuTGFiZWw6ICdcXHU1ZGYyXFx1NWI4Y1xcdTYyMTAnLFxuICBhbWJlckxhYmVsOiAnXFx1NWY4NVxcdTU5MDRcXHU3NDA2XFx1ZmYwOFxcdTYzZDBcXHU5NWVlL1xcdTViYTFcXHU2Mjc5XFx1ZmYwOScsXG4gIHdvcmtpbmdMYWJlbDogJ1xcdTc1MWZcXHU2MjEwXFx1NGUyZCcsXG4gIHdvcmtpbmdIaW50OiAnXFx1NGYxYVxcdThiZGRcXHU3NTFmXFx1NjIxMFxcdTY1ZjZcXHU1NmZlXFx1NjgwN1xcdTU0N2NcXHU1NDM4XFx1NTNkMVxcdTUxNDlcXHUzMDAyJyxcbiAgYmxhY2tMYWJlbDogJ1xcdTllZDhcXHU4YmE0XFx1ODI3MicsXG4gIGJsYWNrSGludDogJ1xcdTc1NTlcXHU3YTdhXFx1NTIxOVxcdTdhN2FcXHU5NWYyXFx1NjVmNlxcdTRmN2ZcXHU3NTI4XFx1NWI5OFxcdTY1YjlcXHU1NmZlXFx1NjgwN1xcdTMwMDInLFxuICBjb2xvclJlc2V0OiAnXFx1NmUwNVxcdTk2NjQnLFxuICBjb2xvclVuc2V0OiAnXFx1NWI5OFxcdTY1YjknLFxuICBub3RpZnlHcm91cDogJ1xcdTdjZmJcXHU3ZWRmXFx1OTAxYVxcdTc3ZTUnLFxuICBub3RpZnlJbnRybzogJ1xcdTRmMWFcXHU4YmRkXFx1NWI4Y1xcdTYyMTBcXHU2MjE2XFx1NjcwOVxcdTYzZDBcXHU5NWVlL1xcdTViYTFcXHU2Mjc5XFx1N2I0OVxcdTRmNjBcXHU1OTA0XFx1NzQwNlxcdTY1ZjZcXHU1M2QxXFx1OTAwMVxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTkwMWFcXHU3N2U1XFx1MzAwMicsXG4gIG5vdGlmeUVuYWJsZWQ6ICdcXHU1NDJmXFx1NzUyOFxcdTkwMWFcXHU3N2U1JyxcbiAgbm90aWZ5RW5hYmxlZEhpbnQ6ICdcXHU5OTk2XFx1NmIyMVxcdTVmMDBcXHU1NDJmXFx1NjVmNlxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTRmMWFcXHU4YmUyXFx1OTVlZVxcdTYzODhcXHU2NzQzXFx1MzAwMicsXG4gIG5vdGlmeUZvcmVncm91bmQ6ICdcXHU1MjRkXFx1NTNmMFxcdTYzZDBcXHU5MTkyJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZEhpbnQ6ICdcXHU2ODA3XFx1N2I3ZVxcdTk4NzVcXHU1M2VmXFx1ODljMVxcdTRlMTRcXHU2NzA5XFx1NzEyNlxcdTcwYjlcXHU2NWY2XFx1NGU1ZlxcdTYzZDBcXHU5MTkyXFx1MzAwMicsXG4gIG5vdGlmeUF1dG9IaWRlOiAnXFx1NWUzOFxcdTlhN2JcXHU1YzRmXFx1NWU1NScsXG4gIG5vdGlmeUF1dG9IaWRlSGludDogJ1xcdTVmMDBcXHU1NDJmXFx1NTQwZVxcdTk3MDBcXHU2MjRiXFx1NTJhOFxcdTUxNzNcXHU5NWVkXFx1NjI0ZFxcdTRmMWFcXHU2ZDg4XFx1NTkzMVxcdTMwMDInLFxuICBwZXJtaXNzaW9uRGVuaWVkOiAnXFx1NWRmMlxcdTg4YWJcXHU2ZDRmXFx1ODljOFxcdTU2NjhcXHU2MmQyXFx1N2VkZFxcdWZmMGNcXHU4YmY3XFx1NTcyOFxcdTdhZDlcXHU3MGI5XFx1OGJiZVxcdTdmNmVcXHU0ZTJkXFx1NjA2MlxcdTU5MGRcXHU5MDFhXFx1NzdlNVxcdTY3NDNcXHU5NjUwXFx1MzAwMicsXG4gIHBlcm1pc3Npb25VbnN1cHBvcnRlZDogJ1xcdTVmNTNcXHU1MjRkXFx1NmQ0ZlxcdTg5YzhcXHU1NjY4XFx1NGUwZFxcdTY1MmZcXHU2MzAxXFx1N2NmYlxcdTdlZGZcXHU5MDFhXFx1NzdlNVxcdTMwMDInLFxuICBub3RpZnlEb25lVGl0bGU6ICdcXHU0ZjFhXFx1OGJkZFxcdTVkZjJcXHU1YjhjXFx1NjIxMCcsXG4gIG5vdGlmeVBlbmRpbmdUaXRsZTogJ1xcdTY3MDlcXHU0ZWE0XFx1NGU5MlxcdTdiNDlcXHU1Zjg1XFx1NTkwNFxcdTc0MDYnLFxuICBub3RpZnlEdXJhdGlvbjogJ1xcdTY3MmNcXHU4ZjZlXFx1NjAzYlxcdTc1MjhcXHU2NWY2IHtkdXJhdGlvbn0nLFxuICBkdXJhdGlvblNlY29uZHM6ICd7c2Vjb25kc31cXHU3OWQyJyxcbiAgZHVyYXRpb25NaW51dGVzOiAne21pbnV0ZXN9XFx1NTIwNntzZWNvbmRzfVxcdTc5ZDInLFxuICBwZW5kaW5nS2luZEFwcHJvdmFsOiAnXFx1NWY4NVxcdTViYTFcXHU2Mjc5JyxcbiAgcGVuZGluZ0tpbmRRdWVzdGlvbjogJ1xcdTU0MTFcXHU0ZjYwXFx1NjNkMFxcdTk1ZWUnLFxuICBwZW5kaW5nS2luZFBsYW5SZXZpZXc6ICdcXHU4YmExXFx1NTIxMlxcdTVmODVcXHU1YmExXFx1NjgzOCcsXG4gIHBlbmRpbmdBcHByb3ZhbFRvb2w6ICdcXHU1Zjg1XFx1NWJhMVxcdTYyNzkgXFx1MDBiNyB7dG9vbH0nLFxuICBwZW5kaW5nUXVlc3Rpb25DaG9vc2U6ICdcXHU4YmY3XFx1NGY2MFxcdTkwMDlcXHU2MmU5JyxcbiAgcGVuZGluZ1F1ZXN0aW9uTXVsdGk6ICdcXHU4YmY3XFx1NGY2MFxcdTU5MWFcXHU5MDA5JyxcbiAgcGVuZGluZ1F1ZXN0aW9uRmlsbDogJ1xcdThiZjdcXHU0ZjYwXFx1NTg2YlxcdTUxOTknLFxuICBwZW5kaW5nUXVlc3Rpb25CYXRjaDogJ1xcdTU0MTFcXHU0ZjYwXFx1NjNkMFxcdTk1ZWVcXHVmZjA4e2NvdW50fSBcXHU0ZTJhXFx1ZmYwOScsXG4gIHNhdmU6ICdcXHU0ZmRkXFx1NWI1OCcsXG4gIHNhdmVkOiAnXFx1NWRmMlxcdTRmZGRcXHU1YjU4XFx1MzAwMicsXG4gIGludmFsaWRUb2tlbjogJ1xcdThiZjdcXHU4ZjkzXFx1NTE2NVxcdTY1NzBcXHU1YjU3XFx1NjIxNlxcdTVlMjYgay9NIFxcdTU0MGVcXHU3ZjAwXFx1NzY4NFxcdTUwM2NcXHVmZjA4XFx1NTk4MiAxMzBrXFx1ZmYwOVxcdTMwMDInLFxuICBpbnZhbGlkSGV4OiAnXFx1OTg5Y1xcdTgyNzJcXHU2ODNjXFx1NWYwZlxcdTVlOTRcXHU0ZTNhICNSUkdHQkJcXHUzMDAyJyxcbiAgZXJyb3JQcmVmaXg6ICdcXHU5NTE5XFx1OGJlZlxcdWZmMWEgJyxcbiAgdW5hdmFpbGFibGU6ICdcXHU2YjY0XFx1OGJiZVxcdTdmNmVcXHU1NzI4XFx1NWY1M1xcdTUyNGRcXHU1YmEyXFx1NjIzN1xcdTdhZWZcXHU0ZTBkXFx1NTNlZlxcdTc1MjhcXHUzMDAyJyxcbiAgbG9hZGluZzogJ1xcdTUyYTBcXHU4ZjdkXFx1NGUyZFxcdTIwMjYnLFxufVxuXG4vKiogUGFyc2UgYSBodW1hbiB0b2tlbiBjb3VudCAoYDEzMGtgLCBgMS41bWAsIGAxMzAwMDBgKS4gKi9cbmZ1bmN0aW9uIHBhcnNlVG9rZW5UZXh0KHRleHQpIHtcbiAgY29uc3QgcmF3ID0gU3RyaW5nKHRleHQgPz8gJycpLnRyaW0oKS5yZXBsYWNlKC9bXFxzX10vZywgJycpXG4gIGlmIChyYXcgPT09ICcnKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IG1hdGNoID0gL14oXFxkKyg/OlsuLF1cXGQrKT8pKFtrS21NXSk/JC8uZXhlYyhyYXcpXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBiYXNlID0gTnVtYmVyKG1hdGNoWzFdLnJlcGxhY2UoJywnLCAnLicpKVxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShiYXNlKSB8fCBiYXNlIDwgMCkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBzY2FsZSA9IG1hdGNoWzJdID09PSB1bmRlZmluZWQgPyAxIDogbWF0Y2hbMl0udG9Mb3dlckNhc2UoKSA9PT0gJ2snID8gMTAwMCA6IDEwMDAwMDBcbiAgcmV0dXJuIE1hdGgucm91bmQoYmFzZSAqIHNjYWxlKVxufVxuXG4vKiogQnVpbGQgYHsgcHJvdmlkZXIsIG1vZGVsLCBuYW1lLCBsZXZlbHMgfWAgcm93cyBmcm9tIHRoZSBwaS1haSBjb25maWcgdmFsdWUuICovXG5mdW5jdGlvbiBidWlsZENhdGFsb2cocHJvdmlkZXJzKSB7XG4gIGNvbnN0IHJvd3MgPSBbXVxuICBpZiAocHJvdmlkZXJzID09PSBudWxsIHx8IHR5cGVvZiBwcm92aWRlcnMgIT09ICdvYmplY3QnKSByZXR1cm4gcm93c1xuICBmb3IgKGNvbnN0IFtwcm92aWRlciwgcHJvZmlsZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzKSkge1xuICAgIGNvbnN0IG1vZGVscyA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkocHJvZmlsZS5tb2RlbHMpID8gcHJvZmlsZS5tb2RlbHMgOiBbXVxuICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgICBpZiAobW9kZWwgPT09IG51bGwgfHwgdHlwZW9mIG1vZGVsICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgbW9kZWwuaWQgIT09ICdzdHJpbmcnKSBjb250aW51ZVxuICAgICAgY29uc3QgZWZmb3J0cyA9IG1vZGVsLnJlYXNvbmluZ0VmZm9ydHNcbiAgICAgIGNvbnN0IGxldmVscyA9IGVmZm9ydHMgPT09IGZhbHNlID8gW10gOiAoZWZmb3J0cyAhPT0gbnVsbCAmJiB0eXBlb2YgZWZmb3J0cyA9PT0gJ29iamVjdCcgPyBPYmplY3Qua2V5cyhlZmZvcnRzKSA6IFtdKVxuICAgICAgcm93cy5wdXNoKHsgcHJvdmlkZXIsIG1vZGVsOiBtb2RlbC5pZCwgbmFtZTogdHlwZW9mIG1vZGVsLm5hbWUgPT09ICdzdHJpbmcnICYmIG1vZGVsLm5hbWUgIT09ICcnID8gbW9kZWwubmFtZSA6IG1vZGVsLmlkLCBsZXZlbHMgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJvd3Ncbn1cblxuY29uc3QgUyA9IHtcbiAgd3JhcDogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDQsIG1heFdpZHRoOiA2ODAsIHBhZGRpbmdUb3A6IDQgfSxcbiAgdGFiczogeyBtYXJnaW5Ub3A6IDQgfSxcbiAgZ3JvdXA6IHsgbWFyZ2luVG9wOiAxMCwgcGFkZGluZ1RvcDogMTAsIGJvcmRlclRvcDogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDMpJyB9LFxuICBncm91cEZpcnN0OiB7IG1hcmdpblRvcDogMTAgfSxcbiAgZ3JvdXBUaXRsZTogeyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogMiB9LFxuICBsYWJlbDogeyBkaXNwbGF5OiAnYmxvY2snLCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogNiwgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknIH0sXG4gIGhpbnQ6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBtYXJnaW46ICc0cHggMCAxMnB4JyB9LFxuICBpbnB1dDoge1xuICAgIGhlaWdodDogMzIsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBib3JkZXI6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWw0KScsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogMTQsXG4gICAgYmFja2dyb3VuZDogJ3ZhcigtLWRzdy1hbGlhcy1iZy1sYXllci0xKScsXG4gICAgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIH0sXG4gIHNlbGVjdDogeyBjdXJzb3I6ICdwb2ludGVyJyB9LFxuICBoZXg6IHsgZm9udEZhbWlseTogJ21vbm9zcGFjZScsIHdpZHRoOiAxMTAsIGZsZXg6ICcwIDAgYXV0bycgfSxcbiAgY29sb3I6IHtcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgIHdpZHRoOiAzMixcbiAgICBoZWlnaHQ6IDMyLFxuICAgIHBhZGRpbmc6IDIsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sNCknLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBiYWNrZ3JvdW5kOiAndmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTEpJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgfSxcbiAgcm93VHdvOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxMiB9LFxuICByb3dGbGV4OiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA4LCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9LFxuICBjb2w6IHsgZmxleDogMSwgbWluV2lkdGg6IDAgfSxcbiAgdG9nZ2xlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTAsIG1hcmdpbkJvdHRvbTogMTIgfSxcbiAgdG9nZ2xlVGV4dDogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDIgfSxcbiAgdG9nZ2xlTGFiZWw6IHsgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScgfSxcbiAgZXJyb3I6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtc3RhdGUtZXJyb3ItcHJpbWFyeSwgI2MwMCknLCBmb250U2l6ZTogMTIsIG1hcmdpblRvcDogMiB9LFxufVxuXG5mdW5jdGlvbiBQcmVmc1NlY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgeyB0LCB1c2VQcmVmcywgdXNlTW9kZWxDYXRhbG9nLCBzYXZlLCBwcm9iZSwgd3JpdGVNb2RlbHMgfSA9IHByb3BzXG4gIGNvbnN0IHNuYXAgPSB1c2VQcmVmcygocykgPT4gcylcbiAgY29uc3QgY2F0YWxvZ1NuYXAgPSB1c2VNb2RlbENhdGFsb2coKHMpID0+IHMpXG4gIGNvbnN0IHZhbHVlID0gc25hcCAhPT0gbnVsbCAmJiBzbmFwICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHNuYXAudmFsdWUgPT09ICdvYmplY3QnICYmIHNuYXAudmFsdWUgIT09IG51bGwgPyBzbmFwLnZhbHVlIDoge31cbiAgY29uc3QgcHJvdmlkZXJzID0gY2F0YWxvZ1NuYXAgIT09IG51bGwgJiYgY2F0YWxvZ1NuYXAgIT09IHVuZGVmaW5lZCAmJiBjYXRhbG9nU25hcC52YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgY2F0YWxvZ1NuYXAudmFsdWUgPT09ICdvYmplY3QnID8gY2F0YWxvZ1NuYXAudmFsdWUucHJvdmlkZXJzIDogdW5kZWZpbmVkXG4gIGNvbnN0IGNhdGFsb2cgPSBidWlsZENhdGFsb2cocHJvdmlkZXJzKVxuICBjb25zdCBzdGF0dXMgPSBzbmFwICE9PSBudWxsICYmIHNuYXAgIT09IHVuZGVmaW5lZCA/IHNuYXAuc3RhdHVzIDogJ2xvYWRpbmcnXG4gIGNvbnN0IHdyaXRhYmxlID0gISEoc25hcCAmJiBzbmFwLndyaXRhYmxlKVxuXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZSgnY29tcGFjdGlvbicpXG4gIGNvbnN0IFtwZXJtaXNzaW9uLCBzZXRQZXJtaXNzaW9uXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IGN1cnJlbnROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkpXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gKHtcbiAgICB0aHJlc2hvbGRUb2tlbnM6IHZhbHVlLnRocmVzaG9sZFRva2VucyA/IFN0cmluZyh2YWx1ZS50aHJlc2hvbGRUb2tlbnMpIDogJycsXG4gICAgY29udGV4dFdpbmRvd1Rva2VuczogdmFsdWUuY29udGV4dFdpbmRvd1Rva2VucyA/IFN0cmluZyh2YWx1ZS5jb250ZXh0V2luZG93VG9rZW5zKSA6ICcnLFxuICAgIHJldGFpblRva2VuczogdmFsdWUucmV0YWluVG9rZW5zID8gU3RyaW5nKHZhbHVlLnJldGFpblRva2VucykgOiAnJyxcbiAgfSkpXG4gIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW5yaWNoTm90ZSwgc2V0RW5yaWNoTm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2J1c3lSb3V0ZSwgc2V0QnVzeVJvdXRlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCB2YWx1ZVJlZiA9IHNuYXAgJiYgc25hcC52YWx1ZVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERyYWZ0KHtcbiAgICAgIHRocmVzaG9sZFRva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYudGhyZXNob2xkVG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLnRocmVzaG9sZFRva2VucykgOiAnJyxcbiAgICAgIGNvbnRleHRXaW5kb3dUb2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLmNvbnRleHRXaW5kb3dUb2tlbnMgPyBTdHJpbmcodmFsdWVSZWYuY29udGV4dFdpbmRvd1Rva2VucykgOiAnJyxcbiAgICAgIHJldGFpblRva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYucmV0YWluVG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLnJldGFpblRva2VucykgOiAnJyxcbiAgICB9KVxuICAgIHNldE5vdGUoJycpXG4gIH0sIFt2YWx1ZVJlZl0pXG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdsb2FkaW5nJykpXG4gIGlmIChzdGF0dXMgPT09ICd1bmF2YWlsYWJsZScpIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ3VuYXZhaWxhYmxlJykpXG5cbiAgY29uc3QgZGlzYWJsZWQgPSAhd3JpdGFibGVcbiAgY29uc3Qgd3JpdGUgPSAoZmllbGQsIHYpID0+IHtcbiAgICBzZXROb3RlKCcnKVxuICAgIFByb21pc2UucmVzb2x2ZShzYXZlKGZpZWxkLCB2KSkuY2F0Y2goKGVycm9yKSA9PiBzZXROb3RlKHQoJ2Vycm9yUHJlZml4JykgKyBTdHJpbmcoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcikpKVxuICB9XG4gIGNvbnN0IGNvbW1pdFRva2VucyA9IChmaWVsZCwgdGV4dCkgPT4ge1xuICAgIGlmICh0ZXh0LnRyaW0oKSA9PT0gJycpIHsgd3JpdGUoZmllbGQsIDApOyByZXR1cm4gfVxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlVG9rZW5UZXh0KHRleHQpXG4gICAgaWYgKHBhcnNlZCA9PT0gdW5kZWZpbmVkKSB7IHNldE5vdGUodCgnaW52YWxpZFRva2VuJykpOyByZXR1cm4gfVxuICAgIHdyaXRlKGZpZWxkLCBwYXJzZWQpXG4gIH1cbiAgY29uc3QgbnVtID0gKGZpZWxkLCBmYWxsYmFjaykgPT4gKHtcbiAgICB2YWx1ZTogU3RyaW5nKHZhbHVlW2ZpZWxkXSAhPT0gdW5kZWZpbmVkID8gdmFsdWVbZmllbGRdIDogZmFsbGJhY2spLFxuICAgIGRpc2FibGVkLFxuICAgIG9uQ2hhbmdlOiAoZSkgPT4geyBjb25zdCBuID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTsgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkgd3JpdGUoZmllbGQsIG4pIH0sXG4gIH0pXG4gIGNvbnN0IHN3aXRjaEZpZWxkID0gKGxhYmVsS2V5LCBmaWVsZCwgaGludEtleSwgZmFsbGJhY2spID0+IGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZSwga2V5OiBmaWVsZCB9LFxuICAgIGVsKFN3aXRjaCwge1xuICAgICAgY2hlY2tlZDogdmFsdWVbZmllbGRdICE9PSB1bmRlZmluZWQgPyAhIXZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBsYWJlbDogdChsYWJlbEtleSksXG4gICAgICBvbkNoYW5nZTogKG5leHQpID0+IHdyaXRlKGZpZWxkLCBuZXh0KSxcbiAgICB9KSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGVUZXh0IH0sXG4gICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IFMudG9nZ2xlTGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgICAgaGludEtleSA/IGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIgfSB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gICAgKSxcbiAgKVxuICBjb25zdCB0ZXh0RmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBoaW50S2V5KSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogUy5pbnB1dCwgZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogZHJhZnRbZmllbGRdLFxuICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXREcmFmdCgoZCkgPT4gKHsgLi4uZCwgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUgfSkpLFxuICAgICAgb25CbHVyOiAoKSA9PiBjb21taXRUb2tlbnMoZmllbGQsIGRyYWZ0W2ZpZWxkXSksXG4gICAgICBvbktleURvd246IChlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgY29tbWl0VG9rZW5zKGZpZWxkLCBkcmFmdFtmaWVsZF0pIH0sXG4gICAgfSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSxcbiAgKVxuICBjb25zdCBudW1iZXJGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0JywgeyB0eXBlOiAnbnVtYmVyJywgc3RlcDogJ2FueScsIHN0eWxlOiBTLmlucHV0LCAuLi5udW0oZmllbGQsIGZhbGxiYWNrKSB9KSxcbiAgICBoaW50S2V5ID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gIClcbiAgLyoqIENvbG91ciByb3c6IG5hdGl2ZSBwaWNrZXIgKyBlZGl0YWJsZSBoZXgsIG9wdGlvbmFsIGNsZWFyIChlbXB0eSA9IG9mZmljaWFsKS4gKi9cbiAgY29uc3QgY29sb3JGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGZhbGxiYWNrSGV4LCBvcHRpb25hbCwgaGludEtleSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0eXBlb2YgdmFsdWVbZmllbGRdID09PSAnc3RyaW5nJyA/IHZhbHVlW2ZpZWxkXSA6ICcnXG4gICAgY29uc3Qgc2hvd24gPSBjdXJyZW50ICE9PSAnJyA/IGN1cnJlbnQgOiAoZmFsbGJhY2tIZXggPz8gJyMwMDAwMDAnKVxuICAgIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogeyAuLi5TLmNvbCwgbWFyZ2luQm90dG9tOiAxMCB9LCBrZXk6IGZpZWxkIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dGbGV4IH0sXG4gICAgICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgICAgICB0eXBlOiAnY29sb3InLCB2YWx1ZTogc2hvd24sIGRpc2FibGVkLCBzdHlsZTogUy5jb2xvcixcbiAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHdyaXRlKGZpZWxkLCBlLnRhcmdldC52YWx1ZSksXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLmhleCB9LCBkaXNhYmxlZCxcbiAgICAgICAgICB2YWx1ZTogY3VycmVudCwgcGxhY2Vob2xkZXI6IG9wdGlvbmFsID8gdCgnY29sb3JVbnNldCcpIDogJycsXG4gICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gJycgJiYgb3B0aW9uYWwpIHdyaXRlKGZpZWxkLCAnJylcbiAgICAgICAgICAgIGVsc2UgaWYgKEhFWC50ZXN0KG5leHQpKSB3cml0ZShmaWVsZCwgbmV4dClcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgb3B0aW9uYWwgJiYgY3VycmVudCAhPT0gJydcbiAgICAgICAgICA/IGVsKEJ1dHRvbiwgeyB2YXJpYW50OiAnZ2hvc3QnLCBzaXplOiAnc20nLCBkaXNhYmxlZCwgb25DbGljazogKCkgPT4gd3JpdGUoZmllbGQsICcnKSB9LCB0KCdjb2xvclJlc2V0JykpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgKSxcbiAgICAgIGhpbnRLZXkgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoaGludEtleSkpIDogbnVsbCxcbiAgICApXG4gIH1cbiAgY29uc3QgZW5hYmxlTm90aWZpY2F0aW9ucyA9IChuZXh0KSA9PiB7XG4gICAgaWYgKCFuZXh0KSB7IHdyaXRlKCdub3RpZnlFbmFibGVkJywgZmFsc2UpOyByZXR1cm4gfVxuICAgIHdyaXRlKCdub3RpZnlFbmFibGVkJywgdHJ1ZSlcbiAgICB2b2lkIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkudGhlbihzZXRQZXJtaXNzaW9uKVxuICB9XG5cbiAgY29uc3QgZW5yaWNoUHJvdmlkZXIgPSBhc3luYyAocm91dGVJZCwgcHJvZmlsZSkgPT4ge1xuICAgIHNldEJ1c3lSb3V0ZShyb3V0ZUlkKVxuICAgIHNldEVucmljaE5vdGUoJycpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvYmUoeyBhcmdzOiB7IGJhc2VVUkw6IHByb2ZpbGUuYmFzZVVSTCB9IH0pXG4gICAgICBjb25zdCBmb3VuZCA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2U/Lm1vZGVscykgPyByZXNwb25zZS5tb2RlbHMgOiBbXVxuICAgICAgY29uc3QgYnlJZCA9IG5ldyBNYXAoZm91bmQubWFwKChtKSA9PiBbbS5pZCwgbV0pKVxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBBcnJheS5pc0FycmF5KHByb2ZpbGUubW9kZWxzKSA/IHByb2ZpbGUubW9kZWxzIDogW11cbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nLmxlbmd0aCA9PT0gMFxuICAgICAgICA/IGZvdW5kLm1hcCgobSkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBtLmlkLFxuICAgICAgICAgICAgbmFtZTogbS5uYW1lLFxuICAgICAgICAgICAgLi4uKG0uY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGNvbnRleHRXaW5kb3c6IG0uY29udGV4dFdpbmRvdyB9KSxcbiAgICAgICAgICAgIC4uLihtLm1heFRva2VucyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IG1heFRva2VuczogbS5tYXhUb2tlbnMgfSksXG4gICAgICAgICAgICAuLi4obS5pbnB1dCA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGlucHV0OiBtLmlucHV0IH0pLFxuICAgICAgICAgIH0pKVxuICAgICAgICA6IGV4aXN0aW5nLm1hcCgobSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gYnlJZC5nZXQobS5pZClcbiAgICAgICAgICAgIGlmIChoaXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG1cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB7IC4uLm0gfVxuICAgICAgICAgICAgaWYgKG5leHQuY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkICYmIGhpdC5jb250ZXh0V2luZG93ICE9PSB1bmRlZmluZWQpIG5leHQuY29udGV4dFdpbmRvdyA9IGhpdC5jb250ZXh0V2luZG93XG4gICAgICAgICAgICBpZiAobmV4dC5pbnB1dCA9PT0gdW5kZWZpbmVkICYmIGhpdC5pbnB1dCAhPT0gdW5kZWZpbmVkKSBuZXh0LmlucHV0ID0gaGl0LmlucHV0XG4gICAgICAgICAgICByZXR1cm4gbmV4dFxuICAgICAgICAgIH0pXG4gICAgICBhd2FpdCB3cml0ZU1vZGVscyhyb3V0ZUlkLCBtZXJnZWQpXG4gICAgICBzZXRFbnJpY2hOb3RlKHQoJ2VucmljaGVkJywgeyBjb3VudDogbWVyZ2VkLmxlbmd0aCB9KSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RW5yaWNoTm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRCdXN5Um91dGUoJycpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJvdmlkZXJSb3dzID0gT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzICE9PSBudWxsICYmIHR5cGVvZiBwcm92aWRlcnMgPT09ICdvYmplY3QnID8gcHJvdmlkZXJzIDoge30pLm1hcCgoW3JvdXRlSWQsIHByb2ZpbGVdKSA9PiB7XG4gICAgY29uc3QgYmFzZVVSTCA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9maWxlLmJhc2VVUkwgPT09ICdzdHJpbmcnID8gcHJvZmlsZS5iYXNlVVJMIDogJydcbiAgICByZXR1cm4gZWwoJ2RpdicsIHsga2V5OiByb3V0ZUlkLCBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogNiB9IH0sXG4gICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgZmxleDogMSwgbWluV2lkdGg6IDAsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sIGAke3JvdXRlSWR9JHtiYXNlVVJMID8gYCBcdTIwMTQgJHtiYXNlVVJMfWAgOiAnJ31gKSxcbiAgICAgIGJhc2VVUkxcbiAgICAgICAgPyBlbChCdXR0b24sIHtcbiAgICAgICAgICAgIHZhcmlhbnQ6ICdvdXRsaW5lJyxcbiAgICAgICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgICAgICBkaXNhYmxlZDogYnVzeVJvdXRlID09PSByb3V0ZUlkIHx8IGRpc2FibGVkLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4geyB2b2lkIGVucmljaFByb3ZpZGVyKHJvdXRlSWQsIHByb2ZpbGUpIH0sXG4gICAgICAgICAgfSwgYnVzeVJvdXRlID09PSByb3V0ZUlkID8gdCgnZW5yaWNoaW5nJykgOiB0KCdlbnJpY2gnKSlcbiAgICAgICAgOiBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBmbGV4U2hyaW5rOiAwIH0gfSwgdCgnbm9CYXNlVXJsJykpLFxuICAgIClcbiAgfSlcblxuICAvLyBTdW1tYXJpemF0aW9uIG1vZGVsL3JlYXNvbmluZyBwaWNrZXJzLlxuICBjb25zdCBtb2RlID0gdmFsdWUuc3VtbWFyaXphdGlvbk1vZGUgPT09ICdjdXN0b20nID8gJ2N1c3RvbScgOiAnc2Vzc2lvbidcbiAgY29uc3QgcHJvdmlkZXJOYW1lcyA9IFsuLi5uZXcgU2V0KGNhdGFsb2cubWFwKChyKSA9PiByLnByb3ZpZGVyKSldXG4gIGNvbnN0IHNlbGVjdGVkUHJvdmlkZXIgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUHJvdmlkZXIgfHwgcHJvdmlkZXJOYW1lc1swXSB8fCAnJ1xuICBjb25zdCBtb2RlbHNGb3JQcm92aWRlciA9IGNhdGFsb2cuZmlsdGVyKChyKSA9PiByLnByb3ZpZGVyID09PSBzZWxlY3RlZFByb3ZpZGVyKVxuICBjb25zdCBzZWxlY3RlZFJvdyA9IG1vZGVsc0ZvclByb3ZpZGVyLmZpbmQoKHIpID0+IHIubW9kZWwgPT09IHZhbHVlLnN1bW1hcml6YXRpb25Nb2RlbCkgfHwgbW9kZWxzRm9yUHJvdmlkZXJbMF1cbiAgY29uc3QgbGV2ZWxTZXQgPSBbJ2RlZmF1bHQnLCAnb2ZmJywgLi4uKHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRSb3cubGV2ZWxzIDogW10pXVxuICBjb25zdCByZWFzb25pbmcgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUmVhc29uaW5nIHx8ICdkZWZhdWx0J1xuICBjb25zdCBzZWxlY3RPcHRpb25zID0gKHBhaXJzKSA9PiBwYWlycy5tYXAoKFt2LCBsYWJlbF0pID0+IGVsKCdvcHRpb24nLCB7IGtleTogdiwgdmFsdWU6IHYgfSwgbGFiZWwpKVxuXG4gIGNvbnN0IHN1bW1hcml6YXRpb24gPSBbXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdtb2RlJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgnc3VtbWFyaXphdGlvbk1vZGUnKSksXG4gICAgICBlbCgnc2VsZWN0JywgeyBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCwgdmFsdWU6IG1vZGUsIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoJ3N1bW1hcml6YXRpb25Nb2RlJywgZS50YXJnZXQudmFsdWUpIH0sXG4gICAgICAgIHNlbGVjdE9wdGlvbnMoW1snc2Vzc2lvbicsIHQoJ21vZGVTZXNzaW9uJyldLCBbJ2N1c3RvbScsIHQoJ21vZGVDdXN0b20nKV1dKSksXG4gICAgKSxcbiAgXVxuICBpZiAobW9kZSA9PT0gJ2N1c3RvbScpIHtcbiAgICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdwcm92aWRlcicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ3Byb3ZpZGVyJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHtcbiAgICAgICAgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBzZWxlY3RlZFByb3ZpZGVyLFxuICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gY2F0YWxvZy5maW5kKChyKSA9PiByLnByb3ZpZGVyID09PSBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB3cml0ZSgnc3VtbWFyaXphdGlvblByb3ZpZGVyJywgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgaWYgKG5leHQpIHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZWwnLCBuZXh0Lm1vZGVsKVxuICAgICAgICAgIHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgJ2RlZmF1bHQnKVxuICAgICAgICB9LFxuICAgICAgfSwgcHJvdmlkZXJOYW1lcy5tYXAoKHApID0+IGVsKCdvcHRpb24nLCB7IGtleTogcCwgdmFsdWU6IHAgfSwgcCkpKSxcbiAgICApKVxuICAgIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ21vZGVsJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgnbW9kZWwnKSksXG4gICAgICBlbCgnc2VsZWN0Jywge1xuICAgICAgICBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCxcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRSb3cubW9kZWwgOiAnJyxcbiAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7IHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZWwnLCBlLnRhcmdldC52YWx1ZSk7IHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgJ2RlZmF1bHQnKSB9LFxuICAgICAgfSwgbW9kZWxzRm9yUHJvdmlkZXIubWFwKChyKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHIubW9kZWwsIHZhbHVlOiByLm1vZGVsIH0sIHIubmFtZSkpKSxcbiAgICApKVxuICB9XG4gIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ3JlYXNvbmluZycgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdyZWFzb25pbmcnKSksXG4gICAgZWwoJ3NlbGVjdCcsIHsgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBsZXZlbFNldC5pbmNsdWRlcyhyZWFzb25pbmcpID8gcmVhc29uaW5nIDogJ2RlZmF1bHQnLCBvbkNoYW5nZTogKGUpID0+IHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgZS50YXJnZXQudmFsdWUpIH0sXG4gICAgICBsZXZlbFNldC5tYXAoKGx2KSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IGx2LCB2YWx1ZTogbHYgfSwgbHYgPT09ICdkZWZhdWx0JyA/IHQoJ3JlYXNvbmluZ0RlZmF1bHQnKSA6IGx2ID09PSAnb2ZmJyA/IHQoJ3JlYXNvbmluZ09mZicpIDogbHYpKSksXG4gICkpXG5cbiAgY29uc3QgY29tcGFjdGlvblBhbmVsID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwRmlyc3QsIGtleTogJ3RocmVzaG9sZCcgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgndGhyZXNob2xkVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgdGV4dEZpZWxkKCd0aHJlc2hvbGRUb2tlbnMnLCAndGhyZXNob2xkVG9rZW5zJywgJ3RocmVzaG9sZFRva2Vuc0hpbnQnKSxcbiAgICAgICAgdGV4dEZpZWxkKCdjb250ZXh0V2luZG93JywgJ2NvbnRleHRXaW5kb3dUb2tlbnMnLCAnY29udGV4dFdpbmRvd0hpbnQnKSxcbiAgICAgICksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ3RocmVzaG9sZFJhdGlvJywgJ3RocmVzaG9sZFJhdGlvJywgJ3RocmVzaG9sZFJhdGlvSGludCcsIDAuOCksXG4gICAgICAgIG51bWJlckZpZWxkKCdoZWFkcm9vbScsICdoZWFkcm9vbVRva2VucycsICdoZWFkcm9vbUhpbnQnLCAzMjc2OCksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ3JldGVudGlvbicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgncmV0ZW50aW9uVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgdGV4dEZpZWxkKCdyZXRhaW5Ub2tlbnMnLCAncmV0YWluVG9rZW5zJywgJ3JldGFpblRva2Vuc0hpbnQnKSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ3JldGFpblJhdGlvJywgJ3JldGFpblJhdGlvJywgbnVsbCwgMC4xNiksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ2JlaGF2aW91cicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnYmVoYXZpb3VyVGl0bGUnKSksXG4gICAgICBzd2l0Y2hGaWVsZCgnYXV0bycsICdhdXRvJywgJ2F1dG9IaW50JywgdHJ1ZSksXG4gICAgICBzd2l0Y2hGaWVsZCgndHVybkVuZCcsICd0dXJuRW5kQ29tcGFjdGlvbkVuYWJsZWQnLCAndHVybkVuZEhpbnQnLCBmYWxzZSksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnc3VtbWFyaXphdGlvbicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnc3VtbWFyaXphdGlvblRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sIHN1bW1hcml6YXRpb24pLFxuICAgICAgbnVtYmVyRmllbGQoJ21heFRva2VucycsICdtYXhUb2tlbnMnLCBudWxsLCAzMjc2OCksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnYWR2YW5jZWQnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ2FkdmFuY2VkVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ2NvbXBhY3Rpb25SZXRyaWVzJywgJ2NvbXBhY3Rpb25SZXRyaWVzJywgbnVsbCwgMSksXG4gICAgICAgIG51bWJlckZpZWxkKCdtYXhPdmVyZmxvd1JldHJpZXMnLCAnbWF4T3ZlcmZsb3dSZXRyaWVzJywgbnVsbCwgMSksXG4gICAgICApLFxuICAgICksXG4gIF1cblxuICBjb25zdCBtb2RlbHNQYW5lbCA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cEZpcnN0LCBrZXk6ICdtb2RlbHMnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ21vZGVsc1RpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdtb2RlbHNJbnRybycpKSxcbiAgICAgIC4uLnByb3ZpZGVyUm93cyxcbiAgICAgIGVucmljaE5vdGUgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIGVucmljaE5vdGUpIDogbnVsbCxcbiAgICApLFxuICBdXG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uc0VuYWJsZWQgPSB2YWx1ZS5ub3RpZnlFbmFibGVkICE9PSB1bmRlZmluZWQgPyAhIXZhbHVlLm5vdGlmeUVuYWJsZWQgOiBmYWxzZVxuICBjb25zdCBub3RpZmljYXRpb25zUGFuZWwgPSBbXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBGaXJzdCwga2V5OiAnY29sb3JzJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdjb2xvcnNHcm91cCcpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnY29sb3JzSW50cm8nKSksXG4gICAgICBzd2l0Y2hGaWVsZCgnY29sb3JzRW5hYmxlZCcsICdjb2xvcnNFbmFibGVkJywgJ2NvbG9yc0VuYWJsZWRIaW50JywgdHJ1ZSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28sIGtleTogJ2NvbG9yczEnIH0sXG4gICAgICAgIGNvbG9yRmllbGQoJ2dyZWVuTGFiZWwnLCAnZ3JlZW4nLCAnIzIyQzU1RScsIGZhbHNlLCBudWxsKSxcbiAgICAgICAgY29sb3JGaWVsZCgnYW1iZXJMYWJlbCcsICdhbWJlcicsICcjRjU5RTBCJywgZmFsc2UsIG51bGwpLFxuICAgICAgKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3bywga2V5OiAnY29sb3JzMicgfSxcbiAgICAgICAgY29sb3JGaWVsZCgnd29ya2luZ0xhYmVsJywgJ3dvcmtpbmcnLCAnIzNCODJGNicsIGZhbHNlLCAnd29ya2luZ0hpbnQnKSxcbiAgICAgICAgY29sb3JGaWVsZCgnYmxhY2tMYWJlbCcsICdibGFjaycsICcjMDAwMDAwJywgdHJ1ZSwgJ2JsYWNrSGludCcpLFxuICAgICAgKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdub3RpZnknIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ25vdGlmeUdyb3VwJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdub3RpZnlJbnRybycpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZSwga2V5OiAnbm90aWZ5RW5hYmxlZCcgfSxcbiAgICAgICAgZWwoU3dpdGNoLCB7XG4gICAgICAgICAgY2hlY2tlZDogbm90aWZpY2F0aW9uc0VuYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgbGFiZWw6IHQoJ25vdGlmeUVuYWJsZWQnKSxcbiAgICAgICAgICBvbkNoYW5nZTogZW5hYmxlTm90aWZpY2F0aW9ucyxcbiAgICAgICAgfSksXG4gICAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZVRleHQgfSxcbiAgICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IFMudG9nZ2xlTGFiZWwgfSwgdCgnbm90aWZ5RW5hYmxlZCcpKSxcbiAgICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyIH0gfSwgdCgnbm90aWZ5RW5hYmxlZEhpbnQnKSksXG4gICAgICAgICksXG4gICAgICApLFxuICAgICAgbm90aWZpY2F0aW9uc0VuYWJsZWQgJiYgcGVybWlzc2lvbiA9PT0gJ2RlbmllZCcgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5lcnJvciB9LCB0KCdwZXJtaXNzaW9uRGVuaWVkJykpIDogbnVsbCxcbiAgICAgIG5vdGlmaWNhdGlvbnNFbmFibGVkICYmIHBlcm1pc3Npb24gPT09ICd1bnN1cHBvcnRlZCcgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5lcnJvciB9LCB0KCdwZXJtaXNzaW9uVW5zdXBwb3J0ZWQnKSkgOiBudWxsLFxuICAgICAgc3dpdGNoRmllbGQoJ25vdGlmeUZvcmVncm91bmQnLCAnbm90aWZ5Rm9yZWdyb3VuZCcsICdub3RpZnlGb3JlZ3JvdW5kSGludCcsIGZhbHNlKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdub3RpZnlBdXRvSGlkZScsICdub3RpZnlBdXRvSGlkZScsICdub3RpZnlBdXRvSGlkZUhpbnQnLCB0cnVlKSxcbiAgICApLFxuICBdXG5cbiAgY29uc3QgcGFuZWxzID0geyBjb21wYWN0aW9uOiBjb21wYWN0aW9uUGFuZWwsIG1vZGVsczogbW9kZWxzUGFuZWwsIG5vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbnNQYW5lbCB9XG5cbiAgcmV0dXJuIGVsKCdkaXYnLCB7IHN0eWxlOiBTLndyYXAgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3RpdGxlJykpLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnaW50cm8nKSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudGFicyB9LFxuICAgICAgZWwoU2VnbWVudGVkQ29udHJvbCwge1xuICAgICAgICBpZDogVEFCU19JRCxcbiAgICAgICAgdmFsdWU6IHRhYixcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgdmFsdWU6ICdjb21wYWN0aW9uJywgbGFiZWw6IHQoJ3RhYkNvbXBhY3Rpb24nKSB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdtb2RlbHMnLCBsYWJlbDogdCgndGFiTW9kZWxzJykgfSxcbiAgICAgICAgICB7IHZhbHVlOiAnbm90aWZpY2F0aW9ucycsIGxhYmVsOiB0KCd0YWJOb3RpZmljYXRpb25zJykgfSxcbiAgICAgICAgXSxcbiAgICAgICAgb25DaGFuZ2U6IHNldFRhYixcbiAgICAgICAgbGFiZWw6IHQoJ3RpdGxlJyksXG4gICAgICB9KSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IGlkOiBgJHtUQUJTX0lEfS0ke3RhYn0tcGFuZWxgLCByb2xlOiAndGFicGFuZWwnIH0sIC4uLihwYW5lbHNbdGFiXSA/PyBjb21wYWN0aW9uUGFuZWwpKSxcbiAgICBub3RlID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgbm90ZSkgOiBudWxsLFxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBseShjdHgpIHtcbiAgY3R4LmVmZmVjdCgoKSA9PiBjdHgubG9jYWxlLnJlZ2lzdGVyKExPQ0FMRV9OUywgeyBlbiwgemggfSksICdtYWxrby1wcmVmczogbG9jYWxlIGRpY3Rpb25hcmllcycpXG4gIGNvbnN0IHQgPSBjdHgubG9jYWxlLmJpbmQoTE9DQUxFX05TKVxuICBjb25zdCBmb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChOUylcbiAgY29uc3QgbW9kZWxGb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChNT0RFTF9OUylcbiAgLy8gVGhlIGFwcGxpY2F0aW9uIG9ubHkgYXV0by1tb3VudHMgaXRzIG93biBSZW1vdGUgc2VsZWN0aW9uLCBzbyBhIHBsdWdpblxuICAvLyBzaGlwcyBhbmQgbW91bnRzIGl0cyBvd24gY29udHJpYnV0aW9uLlxuICB0cnkge1xuICAgIGNvbnN0IGRpc3Bvc2VSZW1vdGUgPSBhd2FpdCBjdHgucmVtb3RlLiRtb3VudChQUk9CRV9SRU1PVEUpXG4gICAgY3R4LmVmZmVjdCgoKSA9PiAoKSA9PiB7IHZvaWQgZGlzcG9zZVJlbW90ZSgpIH0sICdtYWxrby1wcmVmczogbWFsa29Nb2RlbHMgcmVtb3RlJylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdkc2gtbWFsa28tcHJlZnM6IGNvdWxkIG5vdCBtb3VudCB0aGUgbWFsa29Nb2RlbHMgcmVtb3RlIFx1MjAxNCcsIGVycm9yKVxuICB9XG4gIC8vIFRhYiBzdGF0dXMgbGlnaHQgKyBicm93c2VyIG5vdGlmaWNhdGlvbnMgKGluZGVwZW5kZW50IG9mIHRoZSBzZXR0aW5ncyBwYWdlKS5cbiAgY3R4LmVmZmVjdCgoKSA9PiBzdGFydFN0YXR1c0xpZ2h0KGN0eCwgZm9ybSksICdtYWxrby1wcmVmczogdGFiIHN0YXR1cyBsaWdodCcpXG4gIGNvbnN0IGluamVjdGVkID0gKCkgPT4gKHtcbiAgICBob29rczogeyBwcmVmczogZm9ybSwgbW9kZWxDYXRhbG9nOiBtb2RlbEZvcm0gfSxcbiAgICBzYXZlOiAoZmllbGQsIHZhbHVlKSA9PiBmb3JtLnNldChmaWVsZCwgdmFsdWUpLFxuICAgIHByb2JlOiAoYXJncykgPT4ge1xuICAgICAgLy8gQSBuYW1lc3BhY2Ugc2VydmljZSBpcyByZXNvbHZlZCBieSBpdHMgZnVsbCBrZXk7IHJlYWRpbmcgaXQgb2ZmXG4gICAgICAvLyBgY3R4LnJlbW90ZWAgd291bGQgcmVxdWlyZSBhbiBgaW5qZWN0YCB0aGlzIHBsdWdpbiBjYW5ub3QgZGVjbGFyZVxuICAgICAgLy8gYmVmb3JlIHRoZSBjb250cmlidXRpb24gaXMgbW91bnRlZC5cbiAgICAgIGNvbnN0IHJlbW90ZSA9IGN0eC5nZXQoJ3JlbW90ZS5tYWxrb01vZGVscycpXG4gICAgICBpZiAocmVtb3RlID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcigndGhlIG1hbGtvTW9kZWxzIHJlbW90ZSBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgIHJldHVybiByZW1vdGUucHJvYmUoYXJncylcbiAgICB9LFxuICAgIHdyaXRlTW9kZWxzOiAocm91dGVJZCwgbW9kZWxzKSA9PiBtb2RlbEZvcm0ubXV0YXRlKFt7IG9wOiAnc2V0JywgcGF0aDogWydwcm92aWRlcnMnLCByb3V0ZUlkLCAnbW9kZWxzJ10sIHZhbHVlOiBtb2RlbHMgfV0pLFxuICB9KVxuICBjdHguc2xvdHMuaW5qZWN0KFNMT1QsICgpID0+IGN0eC5zbG90cy5yZWdpc3Rlcih7XG4gICAgbmFtZTogU0xPVCxcbiAgICBpZDogTlMsXG4gICAgb3JkZXI6IDQ1LFxuICAgIGxhYmVsOiAoKSA9PiB0KCd0aXRsZScpLFxuICAgIGxvY2FsZTogTE9DQUxFX05TLFxuICAgIGluamVjdDogaW5qZWN0ZWQsXG4gIH0sIFByZWZzU2VjdGlvbikpXG59IiwgIi8qKlxuICogZHNoLW1hbGtvLXByZWZzIFx1MjAxNCBzaGFyZWQgUmVtb3RlIHdpcmUgaWRlbnRpdHkuXG4gKlxuICogVGhlIHNhbWUgaW52b2NhdGlvbiBpcyByZWdpc3RlcmVkIG9uIHRoZSBIb3N0IChgdHlwZXJ0LnJlZ2lzdGVyYCkgYW5kIG1vdW50ZWRcbiAqIGluIHRoZSBicm93c2VyIChgY3R4LnJlbW90ZS4kbW91bnRgKSwgc28gYm90aCBoYWx2ZXMgYnVpbGQgaXQgZnJvbSBoZXJlLiBUaGVcbiAqIG9ubHkgZGlmZmVyZW5jZSBpcyB0aGUgc2NoZW1hIGZhY3RvcnkgZWFjaCBzaWRlIHN1cHBsaWVzOiB0aGUgSG9zdCBkZWNvZGVzXG4gKiBhcmd1bWVudHMgd2l0aCB6b2QsIHdoaWxlIHRoZSBDbGllbnQgbmV2ZXIgZGVjb2RlcyBpdHMgb3duIGFyZ3VtZW50cyBhbmQgb25seVxuICogbmVlZHMgYSBmYWN0b3J5IHRvIHNhdGlzZnkgdGhlIHN0cmljdC1jb2RlYyBjb250cmFjdC5cbiAqL1xuXG4vKiogV2lyZSBpZGVudGl0eSBzaGFyZWQgYnkgdGhlIEhvc3QgbWFuaWZlc3QgYW5kIHRoZSBDbGllbnQgY29udHJpYnV0aW9uLiAqL1xuZXhwb3J0IGNvbnN0IFBST0JFX0lERU5USVRZID0ge1xuICBpZDogJ2RzaC1tYWxrby1wcmVmcyNtYWxrb01vZGVscy9wcm9iZScsXG4gIHNlcnZpY2U6ICdtYWxrb01vZGVscycsXG4gIG5hbWVzcGFjZTogJ21hbGtvTW9kZWxzJyxcbiAgbWV0aG9kOiAncHJvYmUnLFxuICBhcmdzVHlwZVN5bWJvbDogJ2RzaC1tYWxrby1wcmVmcyNQcm9iZUFyZ3MnLFxuICByZXN1bHRUeXBlU3ltYm9sOiAnZHNoLW1hbGtvLXByZWZzI1Byb2JlUmVzdWx0Jyxcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgYG1hbGtvTW9kZWxzL3Byb2JlKGFyZ3MpYCBkaXJlY3QgaW52b2NhdGlvbi5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZUFyZ3Mgc2NoZW1hIGZhY3RvcnkgZm9yIHRoZSBzaW5nbGUgYGFyZ3NgIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZVJlc3VsdCBzY2hlbWEgZmFjdG9yeSBmb3IgdGhlIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBpbnZvY2F0aW9uIGRlc2NyaXB0b3IsIGlkZW50aWNhbCBvbiBib3RoIGZhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvYmVJbnZvY2F0aW9uKGNyZWF0ZUFyZ3MsIGNyZWF0ZVJlc3VsdCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBQUk9CRV9JREVOVElUWS5pZCxcbiAgICBzZXJ2aWNlOiBQUk9CRV9JREVOVElUWS5zZXJ2aWNlLFxuICAgIG5hbWVzcGFjZTogUFJPQkVfSURFTlRJVFkubmFtZXNwYWNlLFxuICAgIG1ldGhvZDogUFJPQkVfSURFTlRJVFkubWV0aG9kLFxuICAgIGludm9jYXRpb246IHsga2luZDogJ2RpcmVjdCcgfSxcbiAgICBwYXJhbWV0ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhcmdzJyxcbiAgICAgICAgd2lyZTogJ2FyZ3MnLFxuICAgICAgICBzb3VyY2U6ICdqc29uJyxcbiAgICAgICAgY29kZWM6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLmFyZ3NUeXBlU3ltYm9sLCBjcmVhdGU6IGNyZWF0ZUFyZ3MgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICByZXN1bHQ6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLnJlc3VsdFR5cGVTeW1ib2wsIGNyZWF0ZTogY3JlYXRlUmVzdWx0IH0sXG4gIH1cbn0iLCAiLyoqXG4gKiBUaGUgb2ZmaWNpYWwgRGVlcFNlZWsgd2hhbGUgbWFyaywgcmVjb2xvcmVkLlxuICpcbiAqIFNoYXBlIHRha2VuIGZyb20gdGhlIG9mZmljaWFsIGZhdmljb24gYXMgdXNlZCBieSBkc2gtbm90aWNlLWNlbnRlciAoTUlUKTtcbiAqIG9ubHkgdGhlIGZpbGwgY29sb3IgaXMgb3Vycy4gS2VwdCBoZXJlIHNvIHRoZSB0YWIgaWNvbiByZWZsZWN0cyB0aGUgc2Vzc2lvblxuICogc3RhdGUgd2l0aG91dCBmZXRjaGluZyBhbmQgbXV0YXRpbmcgdGhlIHNlcnZlZCAvZmF2aWNvbi5zdmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgQ1NTIGNvbG9yIGZvciB0aGUgZmlsbC5cbiAqIEBwYXJhbSB7eyBibHVyOiBudW1iZXIsIG9wYWNpdHk6IG51bWJlciB9fSBbZ2xvd10gb3B0aW9uYWwgZ2xvdyAoZHJvcCBzaGFkb3cpXG4gKiAgIHVzZWQgdG8gYW5pbWF0ZSB0aGUgXCJ3b3JraW5nXCIgc3RhdGUgZnJhbWUgYnkgZnJhbWUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0YW5kYWxvbmUgU1ZHIGRvY3VtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2hhbGVTdmcoY29sb3IsIGdsb3cpIHtcbiAgY29uc3Qgc3ZnID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjUwXFxcIiBoZWlnaHQ9XFxcIjUwXFxcIiB2aWV3Qm94PVxcXCIwIDAgNTAgNTBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjxwYXRoIGQ9XFxcIk00OC44MzU0IDEwLjA0NzlDNDguMzIzMiA5Ljc5MTk5IDQ4LjEwMjUgMTAuMjc5OCA0Ny44MDMyIDEwLjUyNzhDNDcuNzAwNyAxMC42MDc5IDQ3LjYxNDMgMTAuNzExOSA0Ny41MjczIDEwLjgwNzZDNDYuNzc5MyAxMS42MjQgNDUuOTA0OCAxMi4xNTk3IDQ0Ljc2MjIgMTIuMDk1N0M0My4wOTIzIDEyIDQxLjY2NiAxMi41MzU2IDQwLjQwNTggMTMuODM5OEM0MC4xMzc3IDEyLjIzMTkgMzkuMjQ3NiAxMS4yNzIgMzcuODkyNiAxMC42NTU4QzM3LjE4MzYgMTAuMzM1OSAzNi40NjY4IDEwLjAxNTYgMzUuOTcwMiA5LjMxOTgyQzM1LjYyMzUgOC44MjM3MyAzNS41MjkzIDguMjcxOTcgMzUuMzU2IDcuNzI3NTRDMzUuMjQ1NiA3LjM5OTkgMzUuMTM1MyA3LjA2Mzk2IDM0Ljc2NTEgNy4wMDc4MUMzNC4zNjMzIDYuOTQzODUgMzQuMjA1NiA3LjI4NzYgMzQuMDQ3OSA3LjU3NTY4QzMzLjQxOCA4Ljc1MTk1IDMzLjE3MzMgMTAuMDQ3OSAzMy4xOTczIDExLjM1OTlDMzMuMjUyNCAxNC4zMTIgMzQuNDczNiAxNi42NjQxIDM2Ljg5OTkgMTguMzM1OUMzNy4xNzU4IDE4LjUyNzggMzcuMjQ2NiAxOC43MTk3IDM3LjE1OTcgMTlDMzYuOTk0NiAxOS41NzU3IDM2Ljc5NzQgMjAuMTM1NyAzNi42MjQgMjAuNzExOUMzNi41MTM3IDIxLjA4MDEgMzYuMzQ4NiAyMS4xNTk3IDM1Ljk2MjQgMjFDMzQuNjMwOSAyMC40MzIxIDMzLjQ4MSAxOS41OTE4IDMyLjQ2NDQgMTguNTc1N0MzMC43MzkzIDE2Ljg3MjEgMjkuMTc5MiAxNC45OTE3IDI3LjIzMzQgMTMuNTJDMjYuNzc2NCAxMy4xNzU4IDI2LjMxOTMgMTIuODU2IDI1Ljg0NjcgMTIuNTUxOEMyMy44NjE4IDEwLjU4NCAyNi4xMDY5IDguOTY3NzcgMjYuNjI3IDguNzc1ODhDMjcuMTcwNCA4LjU3NTY4IDI2LjgxNTkgNy44ODc3IDI1LjA1OTEgNy44OTZDMjMuMzAyMiA3LjkwMzgxIDIxLjY5NTMgOC41MDM5MSAxOS42NDcgOS4zMDM3MUMxOS4zNDc3IDkuNDIzODMgMTkuMDMyMiA5LjUxMTcyIDE4LjcwOTUgOS41ODM5OEMxNi44NTAxIDkuMjIzNjMgMTQuOTE5OSA5LjE0MzU1IDEyLjkwMzMgOS4zNzU5OEM5LjEwNTk2IDkuODA3NjIgNi4wNzI3NSAxMS42Mzk2IDMuODQzMjYgMTQuNzY4MUMxLjE2NDU1IDE4LjUyNzggMC41MzQxOCAyMi43OTk4IDEuMzA2NjQgMjcuMjU1OUMyLjExNzY4IDMxLjk1MjEgNC40NjU4MiAzNS44Mzk4IDguMDczNzMgMzguODc5OUMxMS44MTU5IDQyLjAzMjIgMTYuMTI1NSA0My41NzYyIDIxLjA0MSA0My4yODAzQzI0LjAyNjkgNDMuMTA0IDI3LjM1MTYgNDIuNjk2MyAzMS4xMDE2IDM5LjQ1NjFDMzIuMDQ2OSAzOS45MzYgMzMuMDM5NiA0MC4xMjc5IDM0LjY4NiA0MC4yNzJDMzUuOTU0NiA0MC4zOTIxIDM3LjE3NTggNDAuMjA4IDM4LjEyMTEgNDAuMDA3OEMzOS42MDIxIDM5LjY4OCAzOS40OTk1IDM4LjI4ODEgMzguOTYzOSAzOC4wMzIyQzM0LjYyMyAzNS45Njc4IDM1LjU3NjIgMzYuODA4MSAzNC43MSAzNi4xMjc5QzM2LjkxNTUgMzMuNDYzOSA0MC4yNDAyIDMwLjY5NTggNDEuNTQgMjEuNzI4QzQxLjY0MjYgMjEuMDE2MSA0MS41NTU3IDIwLjU2NzkgNDEuNTQgMTkuOTkxN0M0MS41MzIyIDE5LjYzOTYgNDEuNjEwOCAxOS41MDM5IDQyLjAwNDkgMTkuNDYzOUM0My4wOTIzIDE5LjMzNTkgNDQuMTQ3OSAxOS4wMzE3IDQ1LjExNjcgMTguNDg3OEM0Ny45MjkyIDE2LjkxOTkgNDkuMDY0IDE0LjM0MzggNDkuMzMxNSAxMS4yNTU5QzQ5LjM3MTEgMTAuNzgzNyA0OS4zMjM3IDEwLjI5NTkgNDguODM1NCAxMC4wNDc5Wk0yNC4zMjYyIDM3LjgzOThDMjAuMTE5NiAzNC40NjM5IDE4LjA3OTEgMzMuMzUyMSAxNy4yMzU4IDMzLjM5OTlDMTYuNDQ4MiAzMy40NDgyIDE2LjU4OTggMzQuMzY4MiAxNi43NjMyIDM0Ljk2NzhDMTYuOTQ0MyAzNS41NjAxIDE3LjE4MTIgMzUuOTY4MyAxNy41MTE3IDM2LjQ4NzhDMTcuNzQwMiAzNi44MzIgMTcuODk3OSAzNy4zNDQyIDE3LjI4MzIgMzcuNzI4QzE1LjkyODIgMzguNTg0IDEzLjU3MjggMzcuNDM5OSAxMy40NjI0IDM3LjM4MzhDMTAuNzIwNyAzNS43MzU4IDguNDI4MjIgMzMuNTYwMSA2LjgxMzQ4IDMwLjU4NEM1LjI1MzQyIDI3LjcxOTcgNC4zNDc2NiAyNC42NDc5IDQuMTk3NzUgMjEuMzY3N0M0LjE1ODIgMjAuNTc1NyA0LjM4NjcyIDIwLjI5NTkgNS4xNTg2OSAyMC4xNTE5QzYuMTc1MjkgMTkuOTYgNy4yMjMxNCAxOS45MTk5IDguMjM5MjYgMjAuMDcxOEMxMi41MzI3IDIwLjcxMTkgMTYuMTg4NSAyMi42NzE5IDE5LjI1MjkgMjUuNzc1OUMyMS4wMDIgMjcuNTQzOSAyMi4zMjUyIDI5LjY1NTggMjMuNjg4NSAzMS43MjAyQzI1LjEzNzcgMzMuOTEyMSAyNi42OTc4IDM2IDI4LjY4MzEgMzcuNzExOUMyOS4zODQzIDM4LjMxMiAyOS45NDM0IDM4Ljc2ODEgMzAuNDc5IDM5LjEwNEMyOC44NjQzIDM5LjI4ODEgMjYuMTY5OSAzOS4zMjgxIDI0LjMyNjIgMzcuODM5OFpNMjYuMzQzMyAyNC42MDAxQzI2LjM0MzMgMjQuMjQ4IDI2LjYxOTEgMjMuOTY3OCAyNi45NjU4IDIzLjk2NzhDMjcuMDQ0NCAyMy45Njc4IDI3LjExNTIgMjMuOTgzOSAyNy4xNzgyIDI0LjAwNzhDMjcuMjY1MSAyNC4wNCAyNy4zNDM4IDI0LjA4NzkgMjcuNDA2NyAyNC4xNjAyQzI3LjUxNzEgMjQuMjcyIDI3LjU4MDEgMjQuNDMyMSAyNy41ODAxIDI0LjYwMDFDMjcuNTgwMSAyNC45NTIxIDI3LjMwNDIgMjUuMjMxOSAyNi45NTc1IDI1LjIzMTlDMjYuNjEwOCAyNS4yMzE5IDI2LjM0MzMgMjQuOTUyMSAyNi4zNDMzIDI0LjYwMDFaTTMyLjYwNjQgMjcuODc5OUMzMi4yMDQ2IDI4LjA0NzkgMzEuODAyNyAyOC4xOTE5IDMxLjQxNjUgMjguMjA4QzMwLjgxNzkgMjguMjM5NyAzMC4xNjQxIDI3Ljk5MjIgMjkuODA5NiAyNy42ODhDMjkuMjU4MyAyNy4yMTU4IDI4Ljg2NDMgMjYuOTUyMSAyOC42OTg3IDI2LjEyNzlDMjguNjI3OSAyNS43NzU5IDI4LjY2NzUgMjUuMjMxOSAyOC43MzA1IDI0LjkxOTlDMjguODcyMSAyNC4yNDggMjguNzE0NCAyMy44MTU5IDI4LjI0OTUgMjMuNDIzOEMyNy44NzE2IDIzLjEwNCAyNy4zOTExIDIzLjAxNjEgMjYuODYzMyAyMy4wMTYxQzI2LjY2NiAyMy4wMTYxIDI2LjQ4NDkgMjIuOTI3NyAyNi4zNTExIDIyLjg1NkMyNi4xMzA0IDIyLjc0NDEgMjUuOTQ5MiAyMi40NjM5IDI2LjEyMjYgMjIuMTIwMUMyNi4xNzc3IDIyLjAwNzggMjYuNDQ1OCAyMS43MzU4IDI2LjUwODggMjEuNjg4QzI3LjIyNTYgMjEuMjcyIDI4LjA1MjcgMjEuNDA3NyAyOC44MTY5IDIxLjcxOTdDMjkuNTI1OSAyMi4wMTYxIDMwLjA2MTUgMjIuNTYwMSAzMC44MzQgMjMuMzI4MUMzMS42MjE2IDI0LjI1NTkgMzEuNzYzMiAyNC41MTE3IDMyLjIxMjQgMjUuMjA4QzMyLjU2NjkgMjUuNzUyIDMyLjg5MDEgMjYuMzEyIDMzLjExMDQgMjYuOTUyMUMzMy4yNDQ2IDI3LjM1MjEgMzMuMDcxMyAyNy42ODAyIDMyLjYwNjQgMjcuODc5OVpcXFwiIGZpbGw9XFxcIlwiICsgY29sb3IgKyBcIlxcXCIgZmlsbC1vcGFjaXR5PVxcXCIxXFxcIiBmaWxsLXJ1bGU9XFxcIm5vbnplcm9cXFwiLz48L3N2Zz5cIlxuICBpZiAoZ2xvdyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc3ZnXG4gIGNvbnN0IGZpbHRlciA9ICc8ZGVmcz48ZmlsdGVyIGlkPVwibWFsa28tZ2xvd1wiIHg9XCItNjAlXCIgeT1cIi02MCVcIiB3aWR0aD1cIjIyMCVcIiBoZWlnaHQ9XCIyMjAlXCI+J1xuICAgICsgJzxmZURyb3BTaGFkb3cgZHg9XCIwXCIgZHk9XCIwXCIgc3RkRGV2aWF0aW9uPVwiJyArIGdsb3cuYmx1ci50b0ZpeGVkKDIpICsgJ1wiJ1xuICAgICsgJyBmbG9vZC1jb2xvcj1cIicgKyBjb2xvciArICdcIiBmbG9vZC1vcGFjaXR5PVwiJyArIGdsb3cub3BhY2l0eS50b0ZpeGVkKDIpICsgJ1wiLz48L2ZpbHRlcj48L2RlZnM+J1xuICByZXR1cm4gc3ZnLnJlcGxhY2UoJz48cGF0aCcsICc+JyArIGZpbHRlciArICc8cGF0aCcpLnJlcGxhY2UoJzxwYXRoJywgJzxwYXRoIGZpbHRlcj1cInVybCgjbWFsa28tZ2xvdylcIicpXG59XG4iLCAiLyoqXG4gKiBkc2gtbWFsa28tcHJlZnMgXHUyMDE0IHRhYiBzdGF0dXMgbGlnaHQgKyBicm93c2VyIG5vdGlmaWNhdGlvbnMgKGJyb3dzZXIgaGFsZikuXG4gKlxuICogUG9ydGVkIGZyb20gZHNoLW5vdGljZS1jZW50ZXIgKE1JVCkuIFRoZSB0YWIgZmF2aWNvbiB0dXJucyBncmVlbiB3aGVuIGEgbWFpblxuICogc2Vzc2lvbiBmaW5pc2hlZCB3aGlsZSB5b3Ugd2VyZSBhd2F5IGFuZCBhbWJlciB3aGlsZSBhIHNlc3Npb24gYXdhaXRzIGFuXG4gKiBpbnRlcmFjdGlvbiAoYW1iZXIgd2lucyksIGFuZCB0aGUgYnJvd3NlciByYWlzZXMgYSBub3RpZmljYXRpb24gb24gY29tcGxldGlvblxuICogb3Igb24gYSBuZXcgcGVuZGluZyBxdWVzdGlvbiAvIGFwcHJvdmFsIC8gcGxhbiByZXZpZXcuXG4gKlxuICogSXQgcmVhZHMgdGhlIG9mZmljaWFsIGNsaWVudCBzaWduYWxzIFx1MjAxNCBgc2Vzc2lvbnNgIHJvd3MgcGx1cyB0aGUgb3B0aW9uYWxcbiAqIGB1aVNlc3Npb24uc2Vzc2lvblN0YXR1c2Agc3RvcmUgXHUyMDE0IGFuZCB0aGUgYG1hbGtvLXByZWZzYCBjb25maWcgZm9ybS4gSXQgb3duc1xuICogbm8gc3RhdGUgYmV5b25kIGluLW1lbW9yeSBib29ra2VlcGluZyBhbmQgcmVzdG9yZXMgdGhlIG9yaWdpbmFsIGZhdmljb24gb25cbiAqIHRlYXJkb3duLlxuICovXG5pbXBvcnQgeyB3aGFsZVN2ZyB9IGZyb20gJy4vd2hhbGUudHMnXG5cbi8qKiBTZXR0aW5ncy9sb2NhbGUgbmFtZXNwYWNlIHNoYXJlZCB3aXRoIHRoZSBzZXR0aW5ncyBwYWdlLiAqL1xuZXhwb3J0IGNvbnN0IExPQ0FMRV9OUyA9ICdzZXR0aW5ncy5tYWxrby1wcmVmcydcblxuY29uc3QgREVGQVVMVF9IUkVGID0gJy9mYXZpY29uLnN2ZydcbmNvbnN0IERFRkFVTFRfR1JFRU4gPSAnIzIyQzU1RSdcbmNvbnN0IERFRkFVTFRfQU1CRVIgPSAnI0Y1OUUwQidcbmNvbnN0IERFRkFVTFRfV09SS0lORyA9ICcjM0I4MkY2J1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuLyoqIEdsb3cgYW5pbWF0aW9uOiBmcmFtZSBjb3VudCBhbmQgcGVyLWZyYW1lIGRlbGF5IHdoaWxlIGEgc2Vzc2lvbiBpcyB3b3JraW5nLiAqL1xuY29uc3QgR0xPV19GUkFNRVMgPSAxMFxuY29uc3QgR0xPV19GUkFNRV9NUyA9IDExMFxuLyoqIFRvb2wtbmFtZSBjYXA6IGxvbmdlciBuYW1lcyB3b3VsZCBibG93IHRoZSBub3RpZmljYXRpb24gYm9keSdzIHNpbmdsZSBsaW5lLiAqL1xuY29uc3QgVE9PTF9OQU1FX0xJTUlUID0gMzJcblxuLyoqXG4gKiBCcm93c2VyIG5vdGlmaWNhdGlvbiBhdmFpbGFiaWxpdHkuXG4gKiBAcmV0dXJucyB7J2dyYW50ZWQnIHwgJ2RlbmllZCcgfCAnZGVmYXVsdCcgfCAndW5zdXBwb3J0ZWQnfVxuICovXG5mdW5jdGlvbiBub3RpZmljYXRpb25TdXBwb3J0KCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdzdHJpbmcnKSByZXR1cm4gJ3Vuc3VwcG9ydGVkJ1xuICAgIHJldHVybiBOb3RpZmljYXRpb24ucGVybWlzc2lvblxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gJ3Vuc3VwcG9ydGVkJ1xuICB9XG59XG5cbi8qKiBBc2sgZm9yIHBlcm1pc3Npb24gKG9ubHkgd2hlbiB0aGUgYnJvd3NlciBoYXMgbm90IGRlY2lkZWQgeWV0KS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ3Vuc3VwcG9ydGVkJylcbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdkZWZhdWx0JykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShOb3RpZmljYXRpb24ucGVybWlzc2lvbilcbiAgICBjb25zdCBhbnN3ZXIgPSBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKVxuICAgIHJldHVybiBhbnN3ZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYW5zd2VyLnRoZW4gPT09ICdmdW5jdGlvbicgPyBhbnN3ZXIgOiBQcm9taXNlLnJlc29sdmUoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24pXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm90aWZpY2F0aW9uU3VwcG9ydCgpKVxuICB9XG59XG5cbi8qKiBDdXJyZW50IHBlcm1pc3Npb24gc3RyaW5nLCBmb3IgdGhlIHNldHRpbmdzIHBhZ2UuICovXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudE5vdGlmaWNhdGlvblBlcm1pc3Npb24oKSB7XG4gIHJldHVybiBub3RpZmljYXRpb25TdXBwb3J0KClcbn1cblxuLyoqXG4gKiBXYXRjaCB0aGUgc2Vzc2lvbiBzaWduYWxzIGFuZCBkcml2ZSB0aGUgdGFiIGljb24gKyBub3RpZmljYXRpb25zLlxuICogQHBhcmFtIHtvYmplY3R9IGN0eCBjbGllbnQgcGx1Z2luIGNvbnRleHQgKG5lZWRzIGBzZXNzaW9uc2AsIGBsb2NhbGVgKS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmb3JtIHRoZSBgbWFsa28tcHJlZnNgIGNvbmZpZyBmb3JtIChzbmFwc2hvdCArIHN1YnNjcmliZSkuXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH0gZGlzcG9zZXIgcmVzdG9yaW5nIHRoZSBmYXZpY29uIGFuZCByZW1vdmluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0YXR1c0xpZ2h0KGN0eCwgZm9ybSkge1xuICBjb25zdCBsaXN0ID0gY3R4LnNlc3Npb25zLmxpc3RcbiAgY29uc3QgbG9jYWxlID0gKCkgPT4gY3R4LmxvY2FsZS5iaW5kKExPQ0FMRV9OUylcbiAgLyoqIE9wdGlvbmFsIG9mZmljaWFsIHN0YXR1cyBzb3VyY2UgKDAuMS43Kyk7IHJvd3Mga2VlcCB0aGVpciBsZWdhY3kgZmllbGRzIG90aGVyd2lzZS4gKi9cbiAgbGV0IHN0YXR1c1NvdXJjZVxuICAvKiogRGVkdXBlIGtleXMgKGBzZXNzaW9uSWQ6a2luZGApIGFscmVhZHkgcXVldWVkLiAqL1xuICBjb25zdCBub3RpZmllZCA9IG5ldyBTZXQoKVxuICAvKiogQWdncmVnYXRpb24gd2luZG93IHNvIGEgYnVyc3Qgb2YgdHJhbnNpdGlvbnMgYmVjb21lcyBvbmUgbm90aWZpY2F0aW9uLiAqL1xuICBjb25zdCBub3RpZnlRdWV1ZSA9IG5ldyBNYXAoKVxuICBsZXQgbm90aWZ5VGltZXJcbiAgLyoqIExhc3Qgb2JzZXJ2ZWQgY29tcGxldGlvbiBzdGF0ZSBwZXIgc2Vzc2lvbiAoZmFsc2UgXHUyMTkyIHRydWUgZWRnZSBkZXRlY3Rpb24pLiAqL1xuICBjb25zdCBwcmV2Q29tcGxldGVkID0gbmV3IE1hcCgpXG4gIC8qKiBSdW4gc3RhcnQgcGVyIHNlc3Npb24sIHRoZW4gdGhlIGxhc3QgcnVuIGR1cmF0aW9uIChtcykuICovXG4gIGNvbnN0IHJ1blN0YXJ0ZWRBdCA9IG5ldyBNYXAoKVxuICBjb25zdCBsYXN0UnVuTXMgPSBuZXcgTWFwKClcbiAgbGV0IHByZXZQZW5kaW5nID0gbmV3IFNldCgpXG4gIGxldCBwZW5kaW5nU2VlbiA9IGZhbHNlXG5cbiAgLyoqIFJlYWxseSBpbiB0aGUgZm9yZWdyb3VuZDogdGFiIHZpc2libGUgQU5EIHdpbmRvdyBmb2N1c2VkLiAqL1xuICBjb25zdCBpc0ZvcmVncm91bmQgPSAoKSA9PiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJyAmJiBkb2N1bWVudC5oYXNGb2N1cygpXG5cbiAgLyoqIFJlYWQgdGhlIG5vdGlmaWNhdGlvbi9jb2xvciBwcmVmZXJlbmNlcyAodW5zZXQgZmFsbHMgYmFjayB0byBkZWZhdWx0cykuICovXG4gIGZ1bmN0aW9uIHJlYWRDb25maWcoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBmb3JtLmdldFNuYXBzaG90KCkudmFsdWUgPz8ge31cbiAgICByZXR1cm4ge1xuICAgICAgY29sb3JzRW5hYmxlZDogdmFsdWUuY29sb3JzRW5hYmxlZCAhPT0gZmFsc2UsXG4gICAgICBncmVlbjogSEVYLnRlc3QodmFsdWUuZ3JlZW4pID8gdmFsdWUuZ3JlZW4gOiBERUZBVUxUX0dSRUVOLFxuICAgICAgYW1iZXI6IEhFWC50ZXN0KHZhbHVlLmFtYmVyKSA/IHZhbHVlLmFtYmVyIDogREVGQVVMVF9BTUJFUixcbiAgICAgIHdvcmtpbmc6IEhFWC50ZXN0KHZhbHVlLndvcmtpbmcpID8gdmFsdWUud29ya2luZyA6IERFRkFVTFRfV09SS0lORyxcbiAgICAgIGJsYWNrOiBIRVgudGVzdCh2YWx1ZS5ibGFjaykgPyB2YWx1ZS5ibGFjayA6IHVuZGVmaW5lZCxcbiAgICAgIG5vdGlmeUVuYWJsZWQ6IHZhbHVlLm5vdGlmeUVuYWJsZWQgPT09IHRydWUsXG4gICAgICBub3RpZnlGb3JlZ3JvdW5kOiB2YWx1ZS5ub3RpZnlGb3JlZ3JvdW5kID09PSB0cnVlLFxuICAgICAgbm90aWZ5QXV0b0hpZGU6IHZhbHVlLm5vdGlmeUF1dG9IaWRlICE9PSBmYWxzZSxcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gZmF2aWNvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgaWNvbkxpbmsgPSAoKSA9PiBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsfj1cImljb25cIl0nKVxuICBjb25zdCBzZXRIcmVmID0gKGhyZWYpID0+IHsgY29uc3QgbGluayA9IGljb25MaW5rKCk7IGlmIChsaW5rKSBsaW5rLmhyZWYgPSBocmVmIH1cbiAgLyoqIE9yaWdpbmFsIGhyZWYgYXQgc3RhcnQtdXA7IHJlc3RvcmluZyBpdCBiZWF0cyBoYXJkY29kaW5nIGEgcGF0aC4gKi9cbiAgY29uc3Qgb3JpZ2luYWxIcmVmID0gaWNvbkxpbmsoKT8uaHJlZiA/PyBERUZBVUxUX0hSRUZcbiAgLyoqIExhc3QgaHJlZiB3ZSBzZXQ7IGAnZ2xvdydgIHdoaWxlIGFuaW1hdGluZzsgbnVsbCA9IG9mZmljaWFsIGljb24uICovXG4gIGxldCBhcHBsaWVkID0gbnVsbFxuICBjb25zdCB1cmkgPSAoaGV4KSA9PiBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHdoYWxlU3ZnKGhleCkpfWBcbiAgY29uc3QgcmVzdG9yZSA9ICgpID0+IHsgaWYgKGFwcGxpZWQgIT09IG51bGwpIHsgc2V0SHJlZihvcmlnaW5hbEhyZWYpOyBhcHBsaWVkID0gbnVsbCB9IH1cblxuICAvLyBXb3JraW5nIHN0YXRlOiB0aGUgZmF2aWNvbiBjYW5ub3QgYW5pbWF0ZSBvbiBpdHMgb3duIChicm93c2VycyBkbyBub3QgcnVuXG4gIC8vIFNWRyBhbmltYXRpb24gaW4gdGhlIHRhYiksIHNvIHdlIHN3YXAgcHJlLXJlbmRlcmVkIGdsb3cgZnJhbWVzIG9uIGEgdGltZXIuXG4gIGxldCBhbmltVGltZXJcbiAgbGV0IGFuaW1Db2xvclxuICBjb25zdCB1cmlHbG93ID0gKGhleCwgYmx1ciwgb3BhY2l0eSkgPT4gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudCh3aGFsZVN2ZyhoZXgsIHsgYmx1ciwgb3BhY2l0eSB9KSl9YFxuICAvKiogT25lIHB1bHNpbmcgZ2xvdyBjeWNsZSBmb3IgYGhleGAsIGFzIGRhdGEtVVJJIGZyYW1lcy4gKi9cbiAgZnVuY3Rpb24gZ2xvd0ZyYW1lcyhoZXgpIHtcbiAgICBjb25zdCBmcmFtZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR0xPV19GUkFNRVM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcGhhc2UgPSAoMSAtIE1hdGguY29zKChpIC8gR0xPV19GUkFNRVMpICogTWF0aC5QSSAqIDIpKSAvIDJcbiAgICAgIGZyYW1lcy5wdXNoKHVyaUdsb3coaGV4LCAwLjggKyBwaGFzZSAqIDMuMiwgMC4xNSArIHBoYXNlICogMC44NSkpXG4gICAgfVxuICAgIHJldHVybiBmcmFtZXNcbiAgfVxuICBmdW5jdGlvbiBzdG9wQW5pbWF0aW9uKCkge1xuICAgIGlmIChhbmltVGltZXIgIT09IHVuZGVmaW5lZCkgeyBjbGVhckludGVydmFsKGFuaW1UaW1lcik7IGFuaW1UaW1lciA9IHVuZGVmaW5lZCB9XG4gICAgYW5pbUNvbG9yID0gdW5kZWZpbmVkXG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oaGV4KSB7XG4gICAgaWYgKGFuaW1UaW1lciAhPT0gdW5kZWZpbmVkICYmIGFuaW1Db2xvciA9PT0gaGV4KSByZXR1cm5cbiAgICBzdG9wQW5pbWF0aW9uKClcbiAgICBjb25zdCBmcmFtZXMgPSBnbG93RnJhbWVzKGhleClcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgc2V0SHJlZihmcmFtZXNbMF0pXG4gICAgYXBwbGllZCA9ICdnbG93J1xuICAgIGFuaW1Db2xvciA9IGhleFxuICAgIGFuaW1UaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGluZGV4ID0gKGluZGV4ICsgMSkgJSBmcmFtZXMubGVuZ3RoXG4gICAgICBzZXRIcmVmKGZyYW1lc1tpbmRleF0pXG4gICAgfSwgR0xPV19GUkFNRV9NUylcbiAgfVxuXG4gIC8vIC0tLSBub3RpZmljYXRpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBQRU5ESU5HX0tJTkRfS0VZUyA9IHtcbiAgICBhcHByb3ZhbDogJ3BlbmRpbmdLaW5kQXBwcm92YWwnLFxuICAgIHF1ZXN0aW9uOiAncGVuZGluZ0tpbmRRdWVzdGlvbicsXG4gICAgJ3BsYW4tcmV2aWV3JzogJ3BlbmRpbmdLaW5kUGxhblJldmlldycsXG4gIH1cblxuICAvKiogUGVuZGluZyBpbnRlcmFjdGlvbiBcdTIxOTIgbm90aWZpY2F0aW9uIGJvZHkgdGV4dCAoZGVmZW5zaXZlIHJlYWRzKS4gKi9cbiAgZnVuY3Rpb24gcGVuZGluZ1R5cGVMYWJlbChpbnRlcmFjdGlvbikge1xuICAgIGNvbnN0IHQgPSBsb2NhbGUoKVxuICAgIGNvbnN0IGtpbmQgPSBpbnRlcmFjdGlvbj8ua2luZFxuICAgIGlmIChraW5kID09PSAnYXBwcm92YWwnKSB7XG4gICAgICBjb25zdCB0b29sID0gaW50ZXJhY3Rpb24udG9vbE5hbWVcbiAgICAgIGlmICh0eXBlb2YgdG9vbCAhPT0gJ3N0cmluZycgfHwgdG9vbCA9PT0gJycpIHJldHVybiB0KCdwZW5kaW5nS2luZEFwcHJvdmFsJylcbiAgICAgIGNvbnN0IHNob3duID0gdG9vbC5sZW5ndGggPiBUT09MX05BTUVfTElNSVQgPyB0b29sLnNsaWNlKDAsIFRPT0xfTkFNRV9MSU1JVCkgKyAnXHUyMDI2JyA6IHRvb2xcbiAgICAgIHJldHVybiB0KCdwZW5kaW5nQXBwcm92YWxUb29sJywgeyB0b29sOiBzaG93biB9KVxuICAgIH1cbiAgICBpZiAoa2luZCA9PT0gJ3F1ZXN0aW9uJykge1xuICAgICAgY29uc3QgcXVlc3Rpb25zID0gQXJyYXkuaXNBcnJheShpbnRlcmFjdGlvbi5xdWVzdGlvbnMpID8gaW50ZXJhY3Rpb24ucXVlc3Rpb25zIDogW11cbiAgICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID4gMSkgcmV0dXJuIHQoJ3BlbmRpbmdRdWVzdGlvbkJhdGNoJywgeyBjb3VudDogcXVlc3Rpb25zLmxlbmd0aCB9KVxuICAgICAgY29uc3QgZmlyc3QgPSBxdWVzdGlvbnNbMF1cbiAgICAgIGlmIChmaXJzdCA9PT0gbnVsbCB8fCB0eXBlb2YgZmlyc3QgIT09ICdvYmplY3QnKSByZXR1cm4gdCgncGVuZGluZ0tpbmRRdWVzdGlvbicpXG4gICAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuaXNBcnJheShmaXJzdC5vcHRpb25zKSA/IGZpcnN0Lm9wdGlvbnMgOiBbXVxuICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSByZXR1cm4gdCgncGVuZGluZ1F1ZXN0aW9uRmlsbCcpXG4gICAgICByZXR1cm4gZmlyc3QubXVsdGlTZWxlY3QgPT09IHRydWUgPyB0KCdwZW5kaW5nUXVlc3Rpb25NdWx0aScpIDogdCgncGVuZGluZ1F1ZXN0aW9uQ2hvb3NlJylcbiAgICB9XG4gICAgY29uc3Qga2V5ID0gUEVORElOR19LSU5EX0tFWVNba2luZF1cbiAgICByZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB0KGtleSlcbiAgfVxuXG4gIC8qKiBRdWV1ZSBvbmUgbm90aWZpY2F0aW9uIChza2lwcGVkIHdoaWxlIGRpc2FibGVkOyBkZWR1cGVkOyAzMDAgbXMgd2luZG93KS4gKi9cbiAgZnVuY3Rpb24gcXVldWVOb3RpZmljYXRpb24oa2luZCwgc2Vzc2lvbklkLCBsYWJlbCwgdHlwZUxhYmVsLCBkdXJhdGlvbk1zKSB7XG4gICAgaWYgKCFyZWFkQ29uZmlnKCkubm90aWZ5RW5hYmxlZCkgcmV0dXJuXG4gICAgY29uc3Qga2V5ID0gc2Vzc2lvbklkICsgJzonICsga2luZFxuICAgIGlmIChub3RpZmllZC5oYXMoa2V5KSkgcmV0dXJuXG4gICAgbm90aWZpZWQuYWRkKGtleSlcbiAgICBub3RpZnlRdWV1ZS5zZXQoa2V5LCB7IGtpbmQsIHNlc3Npb25JZCwgbGFiZWwsIHR5cGVMYWJlbCwgZHVyYXRpb25NcyB9KVxuICAgIGlmIChub3RpZnlUaW1lciA9PT0gdW5kZWZpbmVkKSBub3RpZnlUaW1lciA9IHNldFRpbWVvdXQoZmx1c2hOb3RpZmljYXRpb25zLCAzMDApXG4gIH1cblxuICAvKiogRmx1c2ggdGhlIGFnZ3JlZ2F0aW9uIHdpbmRvdyBpbnRvIGJyb3dzZXIgbm90aWZpY2F0aW9ucy4gKi9cbiAgZnVuY3Rpb24gZmx1c2hOb3RpZmljYXRpb25zKCkge1xuICAgIG5vdGlmeVRpbWVyID0gdW5kZWZpbmVkXG4gICAgY29uc3QgZW50cmllcyA9IFsuLi5ub3RpZnlRdWV1ZS52YWx1ZXMoKV1cbiAgICBub3RpZnlRdWV1ZS5jbGVhcigpXG4gICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSByZXR1cm5cbiAgICBpZiAobm90aWZpY2F0aW9uU3VwcG9ydCgpICE9PSAnZ3JhbnRlZCcpIHJldHVyblxuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKVxuICAgIGlmICghY29uZmlnLm5vdGlmeUZvcmVncm91bmQgJiYgaXNGb3JlZ3JvdW5kKCkpIHJldHVyblxuICAgIGNvbnN0IHQgPSBsb2NhbGUoKVxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwKClcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IGJ1Y2tldCA9IGdyb3VwZWQuZ2V0KGVudHJ5LmtpbmQpID8/IFtdXG4gICAgICBidWNrZXQucHVzaChlbnRyeSlcbiAgICAgIGdyb3VwZWQuc2V0KGVudHJ5LmtpbmQsIGJ1Y2tldClcbiAgICB9XG4gICAgZm9yIChjb25zdCBba2luZCwgYnVja2V0XSBvZiBncm91cGVkKSB7XG4gICAgICBjb25zdCBoZWFkID0gYnVja2V0WzBdXG4gICAgICBjb25zdCBleHRyYSA9IGJ1Y2tldC5sZW5ndGggLSAxXG4gICAgICBsZXQgdGl0bGUgPSBoZWFkLmxhYmVsID8/IGhlYWQuc2Vzc2lvbklkXG4gICAgICBpZiAoZXh0cmEgPiAwKSB0aXRsZSA9IHRpdGxlICsgJyArJyArIFN0cmluZyhleHRyYSlcbiAgICAgIGxldCBib2R5ID0ga2luZCA9PT0gJ2RvbmUnID8gdCgnbm90aWZ5RG9uZVRpdGxlJykgOiAoaGVhZC50eXBlTGFiZWwgPz8gdCgnbm90aWZ5UGVuZGluZ1RpdGxlJykpXG4gICAgICBpZiAoa2luZCA9PT0gJ2RvbmUnICYmIGV4dHJhID09PSAwICYmIGhlYWQuZHVyYXRpb25NcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJvZHkgPSBib2R5ICsgJyBcdTAwQjcgJyArIHQoJ25vdGlmeUR1cmF0aW9uJywgeyBkdXJhdGlvbjogZm9ybWF0UnVuRHVyYXRpb24oaGVhZC5kdXJhdGlvbk1zLCB0KSB9KVxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IG5vIGB0YWdgOiByZXVzaW5nIG9uZSBtYWtlcyBzb21lIHBsYXRmb3JtcyBzaWxlbnRseVxuICAgICAgICAvLyByZXBsYWNlIHRoZSBwcmV2aW91cyBiYW5uZXIgaW5zdGVhZCBvZiByYWlzaW5nIGEgbmV3IG9uZS5cbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbih0aXRsZSwge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgaWNvbjogdXJpKGtpbmQgPT09ICdkb25lJyA/IGNvbmZpZy5ncmVlbiA6IGNvbmZpZy5hbWJlciksXG4gICAgICAgICAgcmVxdWlyZUludGVyYWN0aW9uOiAhY29uZmlnLm5vdGlmeUF1dG9IaWRlLFxuICAgICAgICB9KVxuICAgICAgICBub3RpZmljYXRpb24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICB0cnkgeyB3aW5kb3cuZm9jdXMoKSB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd29ya3NwYWNlID0gY3R4LmdldCgndWlXb3Jrc3BhY2UnKVxuICAgICAgICAgICAgaWYgKHdvcmtzcGFjZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3b3Jrc3BhY2Uub3BlblNlc3Npb24gPT09ICdmdW5jdGlvbicpIHdvcmtzcGFjZS5vcGVuU2Vzc2lvbihoZWFkLnNlc3Npb25JZClcbiAgICAgICAgICAgIGVsc2UgY3R4LnNlc3Npb25zLm9wZW4oaGVhZC5zZXNzaW9uSWQpXG4gICAgICAgICAgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG4gICAgICAgICAgbm90aWZpY2F0aW9uLmNsb3NlKClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbbWFsa28tcHJlZnNdIGNvdWxkIG5vdCByYWlzZSBub3RpZmljYXRpb24nLCBlcnJvcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogNjAgcyByb2xscyBpbnRvIG1pbnV0ZXMsIHNlY29uZHMgemVyby1wYWRkZWQgKG1hdGNoZXMgdGhlIG9mZmljaWFsIGZvcm1hdCkuICovXG4gIGZ1bmN0aW9uIGZvcm1hdFJ1bkR1cmF0aW9uKG1zLCB0KSB7XG4gICAgY29uc3QgdG90YWwgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKG1zIC8gMTAwMCkpXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodG90YWwgLyA2MClcbiAgICBjb25zdCBzZWNvbmRzID0gdG90YWwgJSA2MFxuICAgIHJldHVybiBtaW51dGVzID4gMFxuICAgICAgPyB0KCdkdXJhdGlvbk1pbnV0ZXMnLCB7IG1pbnV0ZXMsIHNlY29uZHM6IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpIH0pXG4gICAgICA6IHQoJ2R1cmF0aW9uU2Vjb25kcycsIHsgc2Vjb25kcyB9KVxuICB9XG5cbiAgLyoqIENvbXBsZXRpb24gLyBwZW5kaW5nIHRyYW5zaXRpb25zIGZyb20gdGhlIHNlc3Npb24gc3RhdGUuICovXG4gIGZ1bmN0aW9uIGRldGVjdFRyYW5zaXRpb25zKHN0YXRlKSB7XG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBjb25zdCBiZWZvcmUgPSBwcmV2Q29tcGxldGVkLmdldChyb3cuaWQpXG4gICAgICBjb25zdCBub3cgPSByb3cuY29tcGxldGVkID09PSB0cnVlXG4gICAgICBpZiAoYmVmb3JlID09PSBmYWxzZSAmJiBub3cpIHF1ZXVlTm90aWZpY2F0aW9uKCdkb25lJywgcm93LmlkLCByb3cuZGlzcGxheVRpdGxlID8/IHJvdy50aXRsZSA/PyByb3cuaWQsIHVuZGVmaW5lZCwgbGFzdFJ1bk1zLmdldChyb3cuaWQpKVxuICAgICAgaWYgKCFub3cpIG5vdGlmaWVkLmRlbGV0ZShyb3cuaWQgKyAnOmRvbmUnKVxuICAgICAgcHJldkNvbXBsZXRlZC5zZXQocm93LmlkLCBub3cpXG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgWy4uLnByZXZDb21wbGV0ZWQua2V5cygpXSkge1xuICAgICAgaWYgKCEoaWQgaW4gc3RhdGUuYnlJZCkpIHsgcHJldkNvbXBsZXRlZC5kZWxldGUoaWQpOyBub3RpZmllZC5kZWxldGUoaWQgKyAnOmRvbmUnKSB9XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnQgPSBuZXcgU2V0KClcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKHN0YXRlLmJ5SWQpKSBpZiAocm93LnBlbmRpbmdJbnRlcmFjdGlvbiAhPT0gdW5kZWZpbmVkKSBjdXJyZW50LmFkZChyb3cuaWQpXG4gICAgaWYgKHBlbmRpbmdTZWVuKSB7XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGN1cnJlbnQpIHtcbiAgICAgICAgaWYgKHByZXZQZW5kaW5nLmhhcyhpZCkpIGNvbnRpbnVlXG4gICAgICAgIGNvbnN0IHJvdyA9IHN0YXRlLmJ5SWRbaWRdXG4gICAgICAgIGlmIChyb3cgIT09IHVuZGVmaW5lZCAmJiByb3cub3JpZ2luID09PSAnc3ViYWdlbnQnKSBjb250aW51ZVxuICAgICAgICBjb25zdCBsYWJlbCA9IHJvdz8uZGlzcGxheVRpdGxlID8/IHJvdz8udGl0bGUgPz8gaWRcbiAgICAgICAgcXVldWVOb3RpZmljYXRpb24oJ3BlbmRpbmcnLCBpZCwgbGFiZWwsIHBlbmRpbmdUeXBlTGFiZWwocm93Py5wZW5kaW5nSW50ZXJhY3Rpb24pKVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIHByZXZQZW5kaW5nKSBpZiAoIWN1cnJlbnQuaGFzKGlkKSkgbm90aWZpZWQuZGVsZXRlKGlkICsgJzpwZW5kaW5nJylcbiAgICBwcmV2UGVuZGluZyA9IGN1cnJlbnRcbiAgICBwZW5kaW5nU2VlbiA9IHRydWVcbiAgfVxuXG4gIC8qKiBTZWxmLXRyYWNrZWQgcnVubmluZyBlZGdlOiBmaWxscyB0aGUgZ2FwIGZvciB0aGUgc2Vzc2lvbiBiZWluZyB2aWV3ZWQuICovXG4gIGNvbnN0IHByZXZSdW5uaW5nID0gbmV3IE1hcCgpXG4gIGNvbnN0IGZpbmlzaGVkV2hpbGVIaWRkZW4gPSBuZXcgU2V0KClcbiAgZnVuY3Rpb24gdHJhY2tFZGdlcyhzdGF0ZSkge1xuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoc3RhdGUuYnlJZCkpIHtcbiAgICAgIGlmIChyb3cub3JpZ2luID09PSAnc3ViYWdlbnQnKSBjb250aW51ZVxuICAgICAgY29uc3QgcHJldiA9IHByZXZSdW5uaW5nLmdldChyb3cuaWQpXG4gICAgICBpZiAocHJldiA9PT0gdW5kZWZpbmVkKSB7IHByZXZSdW5uaW5nLnNldChyb3cuaWQsIHJvdy5ydW5uaW5nKTsgY29udGludWUgfVxuICAgICAgaWYgKCFwcmV2ICYmIHJvdy5ydW5uaW5nKSBydW5TdGFydGVkQXQuc2V0KHJvdy5pZCwgRGF0ZS5ub3coKSlcbiAgICAgIGlmIChwcmV2ICYmICFyb3cucnVubmluZykge1xuICAgICAgICBjb25zdCBzdGFydGVkQXQgPSBydW5TdGFydGVkQXQuZ2V0KHJvdy5pZClcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IHN0YXJ0ZWRBdCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogRGF0ZS5ub3coKSAtIHN0YXJ0ZWRBdFxuICAgICAgICBydW5TdGFydGVkQXQuZGVsZXRlKHJvdy5pZClcbiAgICAgICAgaWYgKGVsYXBzZWQgIT09IHVuZGVmaW5lZCkgbGFzdFJ1bk1zLnNldChyb3cuaWQsIGVsYXBzZWQpXG4gICAgICAgIGlmIChyb3cuaWQgPT09IHN0YXRlLmN1cnJlbnQgJiYgIWlzRm9yZWdyb3VuZCgpKSBmaW5pc2hlZFdoaWxlSGlkZGVuLmFkZChyb3cuaWQpXG4gICAgICAgIGlmIChyb3cuaWQgPT09IHN0YXRlLmN1cnJlbnQpIHF1ZXVlTm90aWZpY2F0aW9uKCdkb25lJywgcm93LmlkLCByb3cuZGlzcGxheVRpdGxlID8/IHJvdy50aXRsZSA/PyByb3cuaWQsIHVuZGVmaW5lZCwgZWxhcHNlZClcbiAgICAgIH0gZWxzZSBpZiAocm93LnJ1bm5pbmcpIGZpbmlzaGVkV2hpbGVIaWRkZW4uZGVsZXRlKHJvdy5pZClcbiAgICAgIHByZXZSdW5uaW5nLnNldChyb3cuaWQsIHJvdy5ydW5uaW5nKVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIFsuLi5wcmV2UnVubmluZy5rZXlzKCldKSB7XG4gICAgICBpZiAoIShpZCBpbiBzdGF0ZS5ieUlkKSkgeyBwcmV2UnVubmluZy5kZWxldGUoaWQpOyBmaW5pc2hlZFdoaWxlSGlkZGVuLmRlbGV0ZShpZCk7IHJ1blN0YXJ0ZWRBdC5kZWxldGUoaWQpOyBsYXN0UnVuTXMuZGVsZXRlKGlkKSB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEJhY2sgaW4gdGhlIGZvcmVncm91bmQ6IHRoZSB2aWV3ZWQgc2Vzc2lvbidzIGdyZWVuIGxpZ2h0IGNsZWFycy4gKi9cbiAgY29uc3Qgb25Gb3JlZ3JvdW5kID0gKCkgPT4ge1xuICAgIGlmICghaXNGb3JlZ3JvdW5kKCkpIHJldHVyblxuICAgIGlmIChmaW5pc2hlZFdoaWxlSGlkZGVuLnNpemUgPiAwKSB7IGZpbmlzaGVkV2hpbGVIaWRkZW4uY2xlYXIoKTsgc3luYygpIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgdGFiIHN0YXRlIG92ZXIgbWFpbiBzZXNzaW9ucy4gUHJpb3JpdHk6IGFtYmVyIChzb21ldGhpbmcgd2FpdHNcbiAgICogZm9yIHlvdSkgPiB3b3JraW5nIChhIHNlc3Npb24gaXMgZ2VuZXJhdGluZykgPiBncmVlbiAodW5zZWVuIGNvbXBsZXRpb24pXG4gICAqID4gaWRsZS4gUmV0dXJucyBgJ29mZidgIHdoZW4gdGhlIHN0YXR1cyBsaWdodCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGN1cnJlbnRLaW5kKHN0YXRlKSB7XG4gICAgaWYgKCFyZWFkQ29uZmlnKCkuY29sb3JzRW5hYmxlZCkgcmV0dXJuICdvZmYnXG4gICAgbGV0IGdyZWVuID0gZmFsc2VcbiAgICBsZXQgd29ya2luZyA9IGZhbHNlXG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBpZiAocm93LnBlbmRpbmdJbnRlcmFjdGlvbiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gJ2FtYmVyJ1xuICAgICAgaWYgKHJvdy5ydW5uaW5nID09PSB0cnVlKSB3b3JraW5nID0gdHJ1ZVxuICAgICAgaWYgKHJvdy5jb21wbGV0ZWQgPT09IHRydWUgfHwgZmluaXNoZWRXaGlsZUhpZGRlbi5oYXMocm93LmlkKSkgZ3JlZW4gPSB0cnVlXG4gICAgfVxuICAgIGlmICh3b3JraW5nKSByZXR1cm4gJ3dvcmtpbmcnXG4gICAgaWYgKGdyZWVuKSByZXR1cm4gJ2dyZWVuJ1xuICAgIHJldHVybiAnaWRsZSdcbiAgfVxuXG4gIC8qKiBBcHBseSBvbmUgdGFiIHN0YXRlIHRvIHRoZSBmYXZpY29uIChzdGF0aWMgcmVjb2xvciBvciBnbG93IGFuaW1hdGlvbikuICovXG4gIGZ1bmN0aW9uIGFwcGx5S2luZChraW5kKSB7XG4gICAgY29uc3QgY29uZmlnID0gcmVhZENvbmZpZygpXG4gICAgaWYgKGtpbmQgPT09ICdvZmYnKSB7IHN0b3BBbmltYXRpb24oKTsgcmVzdG9yZSgpOyByZXR1cm4gfVxuICAgIGlmIChraW5kID09PSAnd29ya2luZycpIHsgc3RhcnRBbmltYXRpb24oY29uZmlnLndvcmtpbmcpOyByZXR1cm4gfVxuICAgIHN0b3BBbmltYXRpb24oKVxuICAgIGNvbnN0IGhyZWYgPSBraW5kID09PSAnYW1iZXInXG4gICAgICA/IHVyaShjb25maWcuYW1iZXIpXG4gICAgICA6IGtpbmQgPT09ICdncmVlbidcbiAgICAgICAgPyB1cmkoY29uZmlnLmdyZWVuKVxuICAgICAgICA6IChjb25maWcuYmxhY2sgPyB1cmkoY29uZmlnLmJsYWNrKSA6IG51bGwpXG4gICAgaWYgKGhyZWYgPT09IG51bGwpIHJlc3RvcmUoKVxuICAgIGVsc2UgaWYgKGFwcGxpZWQgIT09IGhyZWYpIHsgc2V0SHJlZihocmVmKTsgYXBwbGllZCA9IGhyZWYgfVxuICB9XG5cbiAgLyoqIE1lcmdlIHRoZSBzZXNzaW9uIHJvd3Mgd2l0aCB0aGUgb2ZmaWNpYWwgc3RhdHVzIHN0b3JlIHdoZW4gYXZhaWxhYmxlLiAqL1xuICBmdW5jdGlvbiBidWlsZFN0YXRlKCkge1xuICAgIGNvbnN0IGxpc3RTdGF0ZSA9IGxpc3QuZ2V0U25hcHNob3QoKVxuICAgIGNvbnN0IHN0YXR1cyA9IHN0YXR1c1NvdXJjZT8uZ2V0U25hcHNob3QoKVxuICAgIGxldCBjdXJyZW50ID0gbGlzdFN0YXRlLmN1cnJlbnRcbiAgICBjb25zdCBieUlkID0ge31cbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKGxpc3RTdGF0ZS5ieUlkKSkge1xuICAgICAgY29uc3QgcyA9IHN0YXR1cz8uZ2V0KHJvdy5pZClcbiAgICAgIGlmICgocm93LnJldGFpbmVkQnk/Lm1haW5WaWV3ID8/IDApID4gMCkgY3VycmVudCA9IHJvdy5pZFxuICAgICAgYnlJZFtyb3cuaWRdID0ge1xuICAgICAgICAuLi5yb3csXG4gICAgICAgIHJ1bm5pbmc6IHM/LnJ1bm5pbmcgPz8gcm93LnJ1bm5pbmcsXG4gICAgICAgIGNvbXBsZXRlZDogcz8uY29tcGxldGlvblVucmVhZCA/PyByb3cuY29tcGxldGVkID09PSB0cnVlLFxuICAgICAgICBwZW5kaW5nSW50ZXJhY3Rpb246IHM/LnBlbmRpbmdJbnRlcmFjdGlvbiA/PyByb3cucGVuZGluZ0ludGVyYWN0aW9uLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyAuLi5saXN0U3RhdGUsIGJ5SWQsIGN1cnJlbnQgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3luYygpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGJ1aWxkU3RhdGUoKVxuICAgIHRyYWNrRWRnZXMoc3RhdGUpXG4gICAgZGV0ZWN0VHJhbnNpdGlvbnMoc3RhdGUpXG4gICAgYXBwbHlLaW5kKGN1cnJlbnRLaW5kKHN0YXRlKSlcbiAgfVxuXG4gIGNvbnN0IHVuc3Vic2NyaWJlTGlzdCA9IGxpc3Quc3Vic2NyaWJlKHN5bmMpXG4gIGNvbnN0IHVuc3Vic2NyaWJlRm9ybSA9IGZvcm0uc3Vic2NyaWJlKHN5bmMpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvbkZvcmVncm91bmQpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9yZWdyb3VuZClcbiAgc3luYygpXG5cbiAgLy8gT3B0aW9uYWwgY2hhbm5lbDogdGhlIG9mZmljaWFsIHN0YXR1cyBzdG9yZSAocHJlc2VudCBvbiAwLjEuNyspLlxuICBjdHguaW5qZWN0KFsndWlTZXNzaW9uJ10sICh1aUN0eCkgPT4ge1xuICAgIHN0YXR1c1NvdXJjZSA9IHVpQ3R4LnVpU2Vzc2lvbi5zZXNzaW9uU3RhdHVzXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdGF0dXNTb3VyY2Uuc3Vic2NyaWJlKHN5bmMpXG4gICAgc3luYygpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKClcbiAgICAgIHN0YXR1c1NvdXJjZSA9IHVuZGVmaW5lZFxuICAgICAgc3luYygpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKG5vdGlmeVRpbWVyICE9PSB1bmRlZmluZWQpIGNsZWFyVGltZW91dChub3RpZnlUaW1lcilcbiAgICBub3RpZnlRdWV1ZS5jbGVhcigpXG4gICAgc3RvcEFuaW1hdGlvbigpXG4gICAgdW5zdWJzY3JpYmVMaXN0KClcbiAgICB1bnN1YnNjcmliZUZvcm0oKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvbkZvcmVncm91bmQpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb3JlZ3JvdW5kKVxuICAgIHJlc3RvcmUoKVxuICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLG1CQUFrQjtBQUNsQixzQ0FBaUQ7OztBQ0UxQyxJQUFNLGlCQUFpQjtBQUFBLEVBQzVCLElBQUk7QUFBQSxFQUNKLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUNwQjtBQVFPLFNBQVMsZ0JBQWdCLFlBQVksY0FBYztBQUN4RCxTQUFPO0FBQUEsSUFDTCxJQUFJLGVBQWU7QUFBQSxJQUNuQixTQUFTLGVBQWU7QUFBQSxJQUN4QixXQUFXLGVBQWU7QUFBQSxJQUMxQixRQUFRLGVBQWU7QUFBQSxJQUN2QixZQUFZLEVBQUUsTUFBTSxTQUFTO0FBQUEsSUFDN0IsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLE9BQU8sRUFBRSxNQUFNLFVBQVUsWUFBWSxlQUFlLGdCQUFnQixRQUFRLFdBQVc7QUFBQSxNQUN6RjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVEsRUFBRSxNQUFNLFVBQVUsWUFBWSxlQUFlLGtCQUFrQixRQUFRLGFBQWE7QUFBQSxFQUM5RjtBQUNGOzs7QUNoQ08sU0FBUyxTQUFTLE9BQU8sTUFBTTtBQUNwQyxRQUFNLE1BQU0sdTdHQUFvOEcsUUFBUTtBQUN4OUcsTUFBSSxTQUFTLE9BQVcsUUFBTztBQUMvQixRQUFNLFNBQVMsMEhBQ29DLEtBQUssS0FBSyxRQUFRLENBQUMsSUFBSSxvQkFDbkQsUUFBUSxzQkFBc0IsS0FBSyxRQUFRLFFBQVEsQ0FBQyxJQUFJO0FBQy9FLFNBQU8sSUFBSSxRQUFRLFVBQVUsTUFBTSxTQUFTLE9BQU8sRUFBRSxRQUFRLFNB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
    return module.exports;
  },
});
