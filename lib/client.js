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
var DEFAULT_GREEN = "#22C55E";
var DEFAULT_AMBER = "#F59E0B";
var DEFAULT_WORKING = "#3B82F6";
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
var SOUND_ROUTE = "/malko-prefs-sounds";
var SOUND_NONE = "none";
var BUILTIN_SOUNDS = [
  { id: "builtin-up", labelKey: "soundBuiltinUp" },
  { id: "builtin-down", labelKey: "soundBuiltinDown" }
];
var SOUND_PACKS = [
  { name: "Alert", prefix: "alert", count: 10 },
  { name: "Bip-bop", prefix: "bip-bop", count: 10 },
  { name: "Staplebops", prefix: "staplebops", count: 7 },
  { name: "Nope", prefix: "nope", count: 12 },
  { name: "Yup", prefix: "yup", count: 6 }
];
function packSoundIds(pack) {
  return Array.from({ length: pack.count }, (_, i) => `${pack.prefix}-${String(i + 1).padStart(2, "0")}`);
}
function normalizeVolume(volume) {
  if (typeof volume !== "number" || !Number.isFinite(volume)) return 0.6;
  return Math.min(Math.max(volume, 0), 1);
}
var chimeContext;
function chimeAudioContext() {
  if (chimeContext !== void 0) return chimeContext;
  try {
    const Ctor = window.AudioContext ?? window.webkitAudioContext;
    chimeContext = Ctor === void 0 ? null : new Ctor();
  } catch {
    chimeContext = null;
  }
  return chimeContext;
}
function primeSound() {
  try {
    const audio = chimeAudioContext();
    if (audio !== null && audio.state === "suspended") audio.resume?.();
  } catch {
  }
}
function playChime(kind, volume) {
  try {
    const level = normalizeVolume(volume);
    if (level <= 0) return;
    const audio = chimeAudioContext();
    if (audio === null) return;
    if (audio.state === "suspended") audio.resume?.();
    const notes = kind === "done" ? [660, 990] : [880, 587];
    const base = audio.currentTime;
    notes.forEach((frequency, index) => {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      const start = base + index * 0.14;
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(1e-4, start);
      gain.gain.exponentialRampToValueAtTime(0.12 * level, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(1e-4, start + 0.18);
      oscillator.connect(gain);
      gain.connect(audio.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.2);
    });
  } catch {
  }
}
var activeSound = null;
function stopSound() {
  const audio = activeSound;
  activeSound = null;
  if (audio === null) return;
  try {
    audio.pause();
    audio.currentTime = 0;
  } catch {
  }
}
function playSound(id, volume, kind) {
  const level = normalizeVolume(volume);
  if (level <= 0) return;
  const name2 = typeof id === "string" ? id : "";
  if (name2 === "" || name2 === SOUND_NONE) return;
  stopSound();
  if (name2.startsWith("builtin-")) {
    playChime(name2 === "builtin-up" ? "done" : name2 === "builtin-down" ? "pending" : kind, level);
    return;
  }
  try {
    const audio = new Audio(SOUND_ROUTE + "/" + name2 + ".mp3");
    audio.volume = level;
    activeSound = audio;
    const played = audio.play();
    if (played !== void 0 && typeof played.catch === "function") {
      played.catch(() => {
        if (activeSound === audio) activeSound = null;
        playChime(kind, level);
      });
    }
  } catch {
    playChime(kind, level);
  }
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
      persistent: value.notifyPersistent === true,
      volume: normalizeVolume(value.notifyVolume ?? 0.6),
      doneSound: typeof value.notifyDoneSound === "string" ? value.notifyDoneSound : SOUND_NONE,
      pendingSound: typeof value.notifyPendingSound === "string" ? value.notifyPendingSound : SOUND_NONE
    };
  }
  const iconLinks = () => [...document.head.querySelectorAll('link[rel~="icon"]')];
  const originalHrefs = /* @__PURE__ */ new Map();
  const rememberLinks = () => {
    for (const link of iconLinks()) if (!originalHrefs.has(link)) originalHrefs.set(link, link.href);
  };
  rememberLinks();
  const paint = (href) => {
    for (const link of originalHrefs.keys()) link.href = href;
  };
  let applied = null;
  const uri = (hex) => `data:image/svg+xml,${encodeURIComponent(whaleSvg(hex))}`;
  const restore = () => {
    if (applied === null) return;
    for (const [link, href] of originalHrefs) link.href = href;
    applied = null;
  };
  const iconObserver = new MutationObserver(() => {
    const before = originalHrefs.size;
    rememberLinks();
    if (originalHrefs.size !== before) sync();
  });
  iconObserver.observe(document.head, { childList: true, subtree: true });
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
          requireInteraction: config.persistent
        });
        playSound(kind === "done" ? config.doneSound : config.pendingSound, config.volume, kind);
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
      restore();
      return;
    }
    const href = kind === "amber" ? uri(config.amber) : kind === "working" ? uri(config.working) : kind === "green" ? uri(config.green) : config.black ? uri(config.black) : null;
    if (href === null) restore();
    else if (applied !== href) {
      paint(href);
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
    stopSound();
    iconObserver.disconnect();
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
  workingHint: "Shown while a session is generating.",
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
  notifyPersistent: "Keep on screen",
  notifyPersistentHint: "On: the notification stays until you dismiss it (if the OS honors it).",
  soundGroup: "Sound",
  soundIntro: "Optional notification sound. Default is silent.",
  notifyVolume: "Volume",
  soundDone: "On session finished",
  soundPending: "While waiting for you",
  soundNoSound: "No sound",
  soundPackBuiltin: "Built-in",
  soundBuiltinUp: "Chime Up",
  soundBuiltinDown: "Chime Down",
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
  workingHint: "\u4F1A\u8BDD\u751F\u6210\u65F6\u663E\u793A\u3002",
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
  notifyPersistent: "\u5E38\u9A7B\u5C4F\u5E55",
  notifyPersistentHint: "\u5F00\u542F\u540E\u9700\u624B\u52A8\u5173\u95ED\u624D\u4F1A\u6D88\u5931\uFF08\u53D7\u7CFB\u7EDF\u652F\u6301\u9650\u5236\uFF09\u3002",
  soundGroup: "\u63D0\u793A\u97F3",
  soundIntro: "\u53EF\u9009\u7684\u901A\u77E5\u63D0\u793A\u97F3\uFF0C\u9ED8\u8BA4\u65E0\u58F0\u3002",
  notifyVolume: "\u97F3\u91CF",
  soundDone: "\u4F1A\u8BDD\u5B8C\u6210\u65F6",
  soundPending: "\u7B49\u4F60\u5904\u7406\u65F6",
  soundNoSound: "\u65E0\u58F0",
  soundPackBuiltin: "\u5185\u7F6E",
  soundBuiltinUp: "Chime Up",
  soundBuiltinDown: "Chime Down",
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
    primeSound();
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
  const volumeNow = typeof value.notifyVolume === "number" ? value.notifyVolume : 0.6;
  const soundSelectOptions = () => [
    el("option", { key: SOUND_NONE, value: SOUND_NONE }, t("soundNoSound")),
    el(
      "optgroup",
      { key: "builtin", label: t("soundPackBuiltin") },
      BUILTIN_SOUNDS.map((sound) => el("option", { key: sound.id, value: sound.id }, t(sound.labelKey)))
    ),
    ...SOUND_PACKS.map((pack) => el(
      "optgroup",
      { key: pack.prefix, label: pack.name },
      packSoundIds(pack).map((id, index) => el("option", { key: id, value: id }, `${pack.name} ${String(index + 1).padStart(2, "0")}`))
    ))
  ];
  const soundSelect = (labelKey, field, kind) => el(
    "div",
    { style: { ...S.col, marginBottom: 10 }, key: field },
    el("div", { style: S.label }, t(labelKey)),
    el("select", {
      style: { ...S.input, ...S.select },
      disabled,
      value: typeof value[field] === "string" ? value[field] : SOUND_NONE,
      onChange: (e) => {
        const id = e.target.value;
        write(field, id);
        primeSound();
        if (id !== SOUND_NONE) playSound(id, volumeNow, kind);
      }
    }, soundSelectOptions())
  );
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
      switchField("notifyPersistent", "notifyPersistent", "notifyPersistentHint", false)
    ),
    el(
      "div",
      { style: S.group, key: "sound" },
      el("div", { style: S.groupTitle }, t("soundGroup")),
      el("div", { style: S.hint }, t("soundIntro")),
      el(
        "div",
        { style: S.toggle, key: "volume" },
        el("span", { style: S.toggleLabel }, t("notifyVolume")),
        el("input", {
          type: "range",
          min: 0,
          max: 100,
          step: 5,
          disabled,
          value: Math.round(volumeNow * 100),
          "aria-label": t("notifyVolume"),
          style: { flex: "0 0 auto", width: 140, accentColor: "var(--dsw-alias-brand-primary)", cursor: "pointer" },
          onChange: (e) => write("notifyVolume", Number(e.target.value) / 100)
        }),
        el("span", { style: { color: "var(--dsw-alias-label-tertiary)", fontSize: 12, minWidth: 36, textAlign: "right" } }, `${Math.round(volumeNow * 100)}%`)
      ),
      soundSelect("soundDone", "notifyDoneSound", "done"),
      soundSelect("soundPending", "notifyPendingSound", "pending")
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC50cyIsICJzcmMvcmVtb3RlLnRzIiwgInNyYy93aGFsZS50cyIsICJzcmMvbm90aWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgYnJvd3NlciBoYWxmLlxuICpcbiAqIE9uZSBzZXR0aW5ncyBzZWN0aW9uIHdpdGggdGhyZWUgc3ViLXBhbmVsczogY29udGV4dCBjb21wYWN0aW9uLCBsbGFtYS5jcHBcbiAqIG1vZGVsIGVucmljaG1lbnQsIGFuZCBub3RpZmljYXRpb25zLiBSZWFkcyBhbmQgd3JpdGVzIHRoZSBgbWFsa28tcHJlZnNgXG4gKiBjb25maWcgZm9ybSwgcmVhZHMgdGhlIGBsbG0tcGktYWlgIGZvcm0gdG8gcG9wdWxhdGUgdGhlIG1vZGVsIHBpY2tlcnMsIGFuZFxuICogcnVucyB0aGUgdGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoc2VlIGAuL25vdGlmeS50c2ApLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnRlZENvbnRyb2wsIFN3aXRjaCB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXByaW1pdGl2ZXMnXG5pbXBvcnQgeyBwcm9iZUludm9jYXRpb24gfSBmcm9tICcuL3JlbW90ZS50cydcbmltcG9ydCB7XG4gIEJVSUxUSU5fU09VTkRTLFxuICBMT0NBTEVfTlMsXG4gIFNPVU5EX05PTkUsXG4gIFNPVU5EX1BBQ0tTLFxuICBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbixcbiAgcGFja1NvdW5kSWRzLFxuICBwbGF5U291bmQsXG4gIHByaW1lU291bmQsXG4gIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uLFxuICBzdGFydFN0YXR1c0xpZ2h0LFxufSBmcm9tICcuL25vdGlmeS50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZHNoLW1hbGtvLXByZWZzJ1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsnc2Vzc2lvbnMnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2NvbmZpZ0Zvcm1zJywgJ3JlbW90ZSddXG5cbmNvbnN0IE5TID0gJ21hbGtvLXByZWZzJ1xuY29uc3QgTU9ERUxfTlMgPSAnbGxtLXBpLWFpJ1xuY29uc3QgU0xPVCA9ICdzZXR0aW5ncy5zZWN0aW9uJ1xuY29uc3QgVEFCU19JRCA9ICdtYWxrby1wcmVmcy10YWJzJ1xuXG4vKiogYCNSUkdHQkJgIGNvbG91ciBsaXRlcmFsLiAqL1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuXG4vKiogU3RyaWN0LWNvZGVjIHN0dWI6IHRoZSBicm93c2VyIG5ldmVyIGRlY29kZXMgaXRzIG93biBhcmd1bWVudHMuICovXG5jb25zdCBpZGVudGl0eVNjaGVtYSA9ICgpID0+ICh7IHBhcnNlOiAodmFsdWUpID0+IHZhbHVlIH0pXG5cbi8qKiBCcm93c2VyIGNvbnRyaWJ1dGlvbiBtb3VudGVkIHRocm91Z2ggYGN0eC5yZW1vdGUuJG1vdW50KClgLiAqL1xuY29uc3QgUFJPQkVfUkVNT1RFID0ge1xuICBwYWNrYWdlOiAnZHNoLW1hbGtvLXByZWZzJyxcbiAgZGVzY3JpcHRvcnM6IFtwcm9iZUludm9jYXRpb24oaWRlbnRpdHlTY2hlbWEsIGlkZW50aXR5U2NoZW1hKV0sXG59XG5cbmNvbnN0IGVsID0gUmVhY3QuY3JlYXRlRWxlbWVudFxuXG5jb25zdCBlbiA9IHtcbiAgdGl0bGU6IFwiTWFsa28ncyBwcmVmc1wiLFxuICBpbnRybzogJ1R1bmFibGUgY29tcGFuaW9uIHRvIHRoZSBvZmZpY2lhbCBjb21wYWN0aW9uIGVuZ2luZS4nLFxuICB0YWJDb21wYWN0aW9uOiAnQ29udGV4dCBjb21wYWN0aW9uJyxcbiAgdGFiTW9kZWxzOiAnbGxhbWEuY3BwIG1vZGVscycsXG4gIHRhYk5vdGlmaWNhdGlvbnM6ICdOb3RpZmljYXRpb25zJyxcbiAgLy8gQ29tcGFjdGlvblxuICB0aHJlc2hvbGRUaXRsZTogJ0NvbXBhY3Rpb24gdGhyZXNob2xkJyxcbiAgdGhyZXNob2xkVG9rZW5zOiAnVGhyZXNob2xkICh0b2tlbnMpJyxcbiAgdGhyZXNob2xkVG9rZW5zSGludDogJ0Fic29sdXRlIHByZXNzdXJlIGluIHRva2VucywgZS5nLiAxMzBrIG9yIDEzMEsuIEVtcHR5LzAgPSB1c2UgdGhlIHJhdGlvIGJlbG93LicsXG4gIGNvbnRleHRXaW5kb3c6ICdDb250ZXh0IHdpbmRvdyAodG9rZW5zKScsXG4gIGNvbnRleHRXaW5kb3dIaW50OiAnV2luZG93IHRoZSBhYnNvbHV0ZSB0aHJlc2hvbGQgaXMgZXhwcmVzc2VkIGFnYWluc3QgKGUuZy4gMjAwaykuIDAgPSBkZXJpdmUgbm90aGluZyAocmF0aW8gb25seSkuJyxcbiAgdGhyZXNob2xkUmF0aW86ICdUaHJlc2hvbGQgcmF0aW8nLFxuICB0aHJlc2hvbGRSYXRpb0hpbnQ6ICdVc2VkIHdoZW4gdGhlIGFic29sdXRlIHRocmVzaG9sZCBpcyBlbXB0eSAoMC44ID0gODAlIG9mIHRoZSB3aW5kb3cpLicsXG4gIGhlYWRyb29tOiAnSGVhZHJvb20gKHRva2VucyknLFxuICBoZWFkcm9vbUhpbnQ6ICdSZXNlcnZlZCBvbiB0b3Agb2YgdGhlIG91dHB1dCBjYXAuIFRoZSBvZmZpY2lhbCBkZWZhdWx0ICg2NTUzNikgY2FwcyB0aGUgdHJpZ2dlciB3ZWxsIGJlbG93IDgwJS4nLFxuICByZXRlbnRpb25UaXRsZTogJ1JldGVudGlvbicsXG4gIHJldGFpblRva2VuczogJ0tlZXAgbGFzdCAodG9rZW5zKScsXG4gIHJldGFpblRva2Vuc0hpbnQ6ICdWZXJiYXRpbSByZWNlbnQtY29udGV4dCBidWRnZXQsIGUuZy4gMzJrLiBFbXB0eS8wID0gdXNlIHRoZSByYXRpbyBiZWxvdy4nLFxuICByZXRhaW5SYXRpbzogJ0tlZXAgcmF0aW8nLFxuICBiZWhhdmlvdXJUaXRsZTogJ0JlaGF2aW91cicsXG4gIGF1dG86ICdBdXRvbWF0aWMgY29tcGFjdGlvbicsXG4gIGF1dG9IaW50OiAnT2ZmaWNpYWwgYmV0d2Vlbi1zdGVwIHByZXNzdXJlIGNvbXBhY3Rpb24gYW5kIGNvbnRleHQtb3ZlcmZsb3cgcmVjb3ZlcnkuJyxcbiAgdHVybkVuZDogJ0NvbXBhY3QgYXQgZW5kIG9mIHR1cm4nLFxuICB0dXJuRW5kSGludDogJ1J1bnMgb25lIG1vcmUgY29tcGFjdGlvbiB3aGVuIHRoZSBhZ2VudCBnb2VzIGlkbGUuJyxcbiAgc3VtbWFyaXphdGlvblRpdGxlOiAnU3VtbWFyaXphdGlvbicsXG4gIHN1bW1hcml6YXRpb25Nb2RlOiAnTW9kZWwnLFxuICBtb2RlU2Vzc2lvbjogJ1Nlc3Npb24gbW9kZWwnLFxuICBtb2RlQ3VzdG9tOiAnQ3VzdG9tIG1vZGVsJyxcbiAgcHJvdmlkZXI6ICdQcm92aWRlcicsXG4gIG1vZGVsOiAnTW9kZWwnLFxuICByZWFzb25pbmc6ICdSZWFzb25pbmcnLFxuICByZWFzb25pbmdEZWZhdWx0OiAnRGVmYXVsdCcsXG4gIHJlYXNvbmluZ09mZjogJ09mZicsXG4gIG1heFRva2VuczogJ1N1bW1hcnkgb3V0cHV0IGNhcCAodG9rZW5zKScsXG4gIGFkdmFuY2VkVGl0bGU6ICdBZHZhbmNlZCcsXG4gIGNvbXBhY3Rpb25SZXRyaWVzOiAnRXh0cmEgY29tcGFjdGlvbiBhdHRlbXB0cycsXG4gIG1heE92ZXJmbG93UmV0cmllczogJ092ZXJmbG93IHJlY292ZXJ5IGF0dGVtcHRzJyxcbiAgLy8gTW9kZWxzXG4gIG1vZGVsc1RpdGxlOiAnbGxhbWEuY3BwIG1vZGVscycsXG4gIG1vZGVsc0ludHJvOiAnUmVhZCBjb250ZXh0IHdpbmRvdyBhbmQgaW5wdXQgbW9kYWxpdGllcyBmcm9tIHRoZSBzZXJ2ZXIgYW5kIGZpbGwgdGhlIG1vZGVsIGVudHJpZXMgb2YgYSBwaS1haSBwcm92aWRlci4nLFxuICBlbnJpY2g6ICdFbnJpY2ggZnJvbSBzZXJ2ZXInLFxuICBlbnJpY2hpbmc6ICdFbnJpY2hpbmdcXHUyMDI2JyxcbiAgbm9CYXNlVXJsOiAnTm8gZW5kcG9pbnQgY29uZmlndXJlZCBmb3IgdGhpcyBwcm92aWRlci4nLFxuICBlbnJpY2hlZDogJ0VucmljaGVkIHtjb3VudH0gbW9kZWwocykuJyxcbiAgLy8gTm90aWZpY2F0aW9uc1xuICBjb2xvcnNHcm91cDogJ1RhYiBzdGF0dXMgbGlnaHQnLFxuICBjb2xvcnNJbnRybzogJ1RoZSBicm93c2VyIHRhYiBpY29uIHJlZmxlY3RzIHRoZSBzZXNzaW9uIHN0YXRlOiBncmVlbiA9IGZpbmlzaGVkLCBhbWJlciA9IHdhaXRpbmcgZm9yIHlvdS4nLFxuICBjb2xvcnNFbmFibGVkOiAnQ29sb3IgdGhlIHRhYiBpY29uJyxcbiAgY29sb3JzRW5hYmxlZEhpbnQ6ICdPZmYga2VlcHMgdGhlIG9mZmljaWFsIGZhdmljb24gYXQgYWxsIHRpbWVzLicsXG4gIGdyZWVuTGFiZWw6ICdGaW5pc2hlZCcsXG4gIGFtYmVyTGFiZWw6ICdXYWl0aW5nIChxdWVzdGlvbi9hcHByb3ZhbCknLFxuICB3b3JraW5nTGFiZWw6ICdXb3JraW5nJyxcbiAgd29ya2luZ0hpbnQ6ICdTaG93biB3aGlsZSBhIHNlc3Npb24gaXMgZ2VuZXJhdGluZy4nLFxuICBibGFja0xhYmVsOiAnSWRsZSBjb2xvcicsXG4gIGJsYWNrSGludDogJ0xlYXZlIGVtcHR5IHRvIGtlZXAgdGhlIG9mZmljaWFsIGZhdmljb24gd2hlbiBpZGxlLicsXG4gIGNvbG9yUmVzZXQ6ICdDbGVhcicsXG4gIGNvbG9yVW5zZXQ6ICdvZmZpY2lhbCcsXG4gIG5vdGlmeUdyb3VwOiAnU3lzdGVtIG5vdGlmaWNhdGlvbnMnLFxuICBub3RpZnlJbnRybzogJ1JhaXNlIGEgYnJvd3NlciBub3RpZmljYXRpb24gd2hlbiBhIHNlc3Npb24gZmluaXNoZXMgb3IgYSBxdWVzdGlvbi9hcHByb3ZhbCB3YWl0cyBmb3IgeW91LicsXG4gIG5vdGlmeUVuYWJsZWQ6ICdFbmFibGUgbm90aWZpY2F0aW9ucycsXG4gIG5vdGlmeUVuYWJsZWRIaW50OiAnVGhlIGJyb3dzZXIgYXNrcyBmb3IgcGVybWlzc2lvbiB0aGUgZmlyc3QgdGltZSB5b3UgZW5hYmxlIHRoaXMuJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZDogJ05vdGlmeSBpbiB0aGUgZm9yZWdyb3VuZCcsXG4gIG5vdGlmeUZvcmVncm91bmRIaW50OiAnQWxzbyBub3RpZnkgd2hpbGUgdGhlIHRhYiBpcyB2aXNpYmxlIGFuZCBmb2N1c2VkLicsXG4gIG5vdGlmeVBlcnNpc3RlbnQ6ICdLZWVwIG9uIHNjcmVlbicsXG4gIG5vdGlmeVBlcnNpc3RlbnRIaW50OiAnT246IHRoZSBub3RpZmljYXRpb24gc3RheXMgdW50aWwgeW91IGRpc21pc3MgaXQgKGlmIHRoZSBPUyBob25vcnMgaXQpLicsXG4gIHNvdW5kR3JvdXA6ICdTb3VuZCcsXG4gIHNvdW5kSW50cm86ICdPcHRpb25hbCBub3RpZmljYXRpb24gc291bmQuIERlZmF1bHQgaXMgc2lsZW50LicsXG4gIG5vdGlmeVZvbHVtZTogJ1ZvbHVtZScsXG4gIHNvdW5kRG9uZTogJ09uIHNlc3Npb24gZmluaXNoZWQnLFxuICBzb3VuZFBlbmRpbmc6ICdXaGlsZSB3YWl0aW5nIGZvciB5b3UnLFxuICBzb3VuZE5vU291bmQ6ICdObyBzb3VuZCcsXG4gIHNvdW5kUGFja0J1aWx0aW46ICdCdWlsdC1pbicsXG4gIHNvdW5kQnVpbHRpblVwOiAnQ2hpbWUgVXAnLFxuICBzb3VuZEJ1aWx0aW5Eb3duOiAnQ2hpbWUgRG93bicsXG4gIHBlcm1pc3Npb25EZW5pZWQ6ICdCbG9ja2VkIGJ5IHRoZSBicm93c2VyIFxcdTIwMTQgcmUtZW5hYmxlIG5vdGlmaWNhdGlvbnMgaW4gdGhlIHNpdGUgc2V0dGluZ3MuJyxcbiAgcGVybWlzc2lvblVuc3VwcG9ydGVkOiAnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgc3lzdGVtIG5vdGlmaWNhdGlvbnMuJyxcbiAgbm90aWZ5RG9uZVRpdGxlOiAnU2Vzc2lvbiBmaW5pc2hlZCcsXG4gIG5vdGlmeVBlbmRpbmdUaXRsZTogJ1NvbWV0aGluZyBhd2FpdHMgeW91JyxcbiAgbm90aWZ5RHVyYXRpb246ICd0dXJuIHRvb2sge2R1cmF0aW9ufScsXG4gIGR1cmF0aW9uU2Vjb25kczogJ3tzZWNvbmRzfXMnLFxuICBkdXJhdGlvbk1pbnV0ZXM6ICd7bWludXRlc31te3NlY29uZHN9cycsXG4gIHBlbmRpbmdLaW5kQXBwcm92YWw6ICdBcHByb3ZhbCBuZWVkZWQnLFxuICBwZW5kaW5nS2luZFF1ZXN0aW9uOiAnUXVlc3Rpb24nLFxuICBwZW5kaW5nS2luZFBsYW5SZXZpZXc6ICdQbGFuIHJldmlldycsXG4gIHBlbmRpbmdBcHByb3ZhbFRvb2w6ICdBcHByb3ZhbCBcXHUwMGI3IHt0b29sfScsXG4gIHBlbmRpbmdRdWVzdGlvbkNob29zZTogJ0Nob29zZSBhbiBvcHRpb24nLFxuICBwZW5kaW5nUXVlc3Rpb25NdWx0aTogJ0Nob29zZSBvcHRpb25zJyxcbiAgcGVuZGluZ1F1ZXN0aW9uRmlsbDogJ1R5cGUgYW4gYW5zd2VyJyxcbiAgcGVuZGluZ1F1ZXN0aW9uQmF0Y2g6ICd7Y291bnR9IHF1ZXN0aW9ucycsXG4gIC8vIFNoYXJlZFxuICBzYXZlOiAnU2F2ZScsXG4gIHNhdmVkOiAnU2F2ZWQuJyxcbiAgaW52YWxpZFRva2VuOiAnRW50ZXIgYSBudW1iZXIgb3IgYSBrL00gc3VmZml4IHZhbHVlIChlLmcuIDEzMGspLicsXG4gIGludmFsaWRIZXg6ICdDb2xvciBtdXN0IGJlICNSUkdHQkIuJyxcbiAgZXJyb3JQcmVmaXg6ICdFcnJvcjogJyxcbiAgdW5hdmFpbGFibGU6ICdUaGlzIHNldHRpbmcgaXMgbm90IGF2YWlsYWJsZSBmcm9tIHRoaXMgY2xpZW50LicsXG4gIGxvYWRpbmc6ICdMb2FkaW5nXFx1MjAyNicsXG59XG5cbmNvbnN0IHpoID0ge1xuICB0aXRsZTogJ01hbGtvIFxcdTUwNGZcXHU1OTdkJyxcbiAgaW50cm86ICdcXHU1Yjk4XFx1NjViOVxcdTUzOGJcXHU3ZjI5XFx1NWYxNVxcdTY0Y2VcXHU3Njg0XFx1NTNlZlxcdThjMDNcXHU0ZjM0XFx1NzUxZlxcdTMwMDInLFxuICB0YWJDb21wYWN0aW9uOiAnXFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1NTM4YlxcdTdmMjknLFxuICB0YWJNb2RlbHM6ICdsbGFtYS5jcHAgXFx1NmEyMVxcdTU3OGInLFxuICB0YWJOb3RpZmljYXRpb25zOiAnXFx1OTAxYVxcdTc3ZTUnLFxuICB0aHJlc2hvbGRUaXRsZTogJ1xcdTUzOGJcXHU3ZjI5XFx1OTYwMFxcdTUwM2MnLFxuICB0aHJlc2hvbGRUb2tlbnM6ICdcXHU5NjAwXFx1NTAzY1xcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgdGhyZXNob2xkVG9rZW5zSGludDogJ1xcdTdlZGRcXHU1YmY5IHRva2VuIFxcdTk2MDBcXHU1MDNjXFx1ZmYwY1xcdTU5ODIgMTMwa1xcdTMwMDJcXHU3NTU5XFx1N2E3YS8wID0gXFx1NzUyOFxcdTRlMGJcXHU2NWI5XFx1NmJkNFxcdTRmOGJcXHUzMDAyJyxcbiAgY29udGV4dFdpbmRvdzogJ1xcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTdhOTdcXHU1M2UzXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICBjb250ZXh0V2luZG93SGludDogJ1xcdTdlZGRcXHU1YmY5XFx1OTYwMFxcdTUwM2NcXHU2MjQwXFx1NGY5ZFxcdTYzNmVcXHU3Njg0XFx1N2E5N1xcdTUzZTNcXHVmZjA4XFx1NTk4MiAyMDBrXFx1ZmYwOVxcdTMwMDIwID0gXFx1NTNlYVxcdTc1MjhcXHU2YmQ0XFx1NGY4YlxcdTMwMDInLFxuICB0aHJlc2hvbGRSYXRpbzogJ1xcdTk2MDBcXHU1MDNjXFx1NmJkNFxcdTRmOGInLFxuICB0aHJlc2hvbGRSYXRpb0hpbnQ6ICdcXHU1ZjUzXFx1N2VkZFxcdTViZjlcXHU5NjAwXFx1NTAzY1xcdTRlM2FcXHU3YTdhXFx1NjVmNlxcdTRmN2ZcXHU3NTI4XFx1ZmYwODAuOCA9IFxcdTdhOTdcXHU1M2UzXFx1NzY4NCA4MCVcXHVmZjA5XFx1MzAwMicsXG4gIGhlYWRyb29tOiAnXFx1OTg4NFxcdTc1NTlcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIGhlYWRyb29tSGludDogJ1xcdTU3MjhcXHU4ZjkzXFx1NTFmYVxcdTk4ODRcXHU3Yjk3XFx1NGU0YlxcdTU5MTZcXHU1MThkXFx1OTg4NFxcdTc1NTlcXHU3Njg0XFx1OTFjZlxcdTMwMDJcXHU1Yjk4XFx1NjViOVxcdTllZDhcXHU4YmE0IDY1NTM2IFxcdTRmMWFcXHU2MjhhXFx1ODllNlxcdTUzZDFcXHU3MGI5XFx1NjJjOVxcdTUyMzAgODAlIFxcdTRlZTVcXHU0ZTBiXFx1MzAwMicsXG4gIHJldGVudGlvblRpdGxlOiAnXFx1NGZkZFxcdTc1NTknLFxuICByZXRhaW5Ub2tlbnM6ICdcXHU0ZmRkXFx1NzU1OVxcdTY3MDBcXHU4ZmQxXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICByZXRhaW5Ub2tlbnNIaW50OiAnXFx1OTAxMFxcdTViNTdcXHU0ZmRkXFx1NzU1OVxcdTc2ODRcXHU4ZmQxXFx1NjcxZlxcdTk4ODRcXHU3Yjk3XFx1ZmYwY1xcdTU5ODIgMzJrXFx1MzAwMlxcdTc1NTlcXHU3YTdhLzAgPSBcXHU3NTI4XFx1NGUwYlxcdTY1YjlcXHU2YmQ0XFx1NGY4YlxcdTMwMDInLFxuICByZXRhaW5SYXRpbzogJ1xcdTRmZGRcXHU3NTU5XFx1NmJkNFxcdTRmOGInLFxuICBiZWhhdmlvdXJUaXRsZTogJ1xcdTg4NGNcXHU0ZTNhJyxcbiAgYXV0bzogJ1xcdTgxZWFcXHU1MmE4XFx1NTM4YlxcdTdmMjknLFxuICBhdXRvSGludDogJ1xcdTViOThcXHU2NWI5XFx1NzY4NFxcdTZiNjVcXHU5NWY0XFx1NTM4YlxcdTUyOWJcXHU1MzhiXFx1N2YyOVxcdTRlMGVcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU2ZWEyXFx1NTFmYVxcdTYwNjJcXHU1OTBkXFx1MzAwMicsXG4gIHR1cm5FbmQ6ICdcXHU4ZjZlXFx1NjcyYlxcdTUzOGJcXHU3ZjI5JyxcbiAgdHVybkVuZEhpbnQ6ICdcXHU0ZWUzXFx1NzQwNlxcdThmNmNcXHU0ZTNhIGlkbGUgXFx1NjVmNlxcdTUxOGRcXHU1MzhiXFx1N2YyOVxcdTRlMDBcXHU2YjIxXFx1MzAwMicsXG4gIHN1bW1hcml6YXRpb25UaXRsZTogJ1xcdTY0NThcXHU4OTgxJyxcbiAgc3VtbWFyaXphdGlvbk1vZGU6ICdcXHU2YTIxXFx1NTc4YicsXG4gIG1vZGVTZXNzaW9uOiAnXFx1NGYxYVxcdThiZGRcXHU2YTIxXFx1NTc4YicsXG4gIG1vZGVDdXN0b206ICdcXHU4MWVhXFx1NWI5YVxcdTRlNDlcXHU2YTIxXFx1NTc4YicsXG4gIHByb3ZpZGVyOiAnXFx1NjNkMFxcdTRmOWJcXHU1NTQ2JyxcbiAgbW9kZWw6ICdcXHU2YTIxXFx1NTc4YicsXG4gIHJlYXNvbmluZzogJ1xcdTYwMWRcXHU4MDAzXFx1N2VhN1xcdTUyMmInLFxuICByZWFzb25pbmdEZWZhdWx0OiAnXFx1OWVkOFxcdThiYTQnLFxuICByZWFzb25pbmdPZmY6ICdcXHU1MTczXFx1OTVlZCcsXG4gIG1heFRva2VuczogJ1xcdTY0NThcXHU4OTgxXFx1OGY5M1xcdTUxZmFcXHU0ZTBhXFx1OTY1MFxcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgYWR2YW5jZWRUaXRsZTogJ1xcdTlhZDhcXHU3ZWE3JyxcbiAgY29tcGFjdGlvblJldHJpZXM6ICdcXHU5ODlkXFx1NTkxNlxcdTUzOGJcXHU3ZjI5XFx1NWMxZFxcdThiZDUnLFxuICBtYXhPdmVyZmxvd1JldHJpZXM6ICdcXHU2ZWEyXFx1NTFmYVxcdTYwNjJcXHU1OTBkXFx1NWMxZFxcdThiZDUnLFxuICBtb2RlbHNUaXRsZTogJ2xsYW1hLmNwcCBcXHU2YTIxXFx1NTc4YicsXG4gIG1vZGVsc0ludHJvOiAnXFx1NGVjZVxcdTY3MGRcXHU1MmExXFx1NTY2OFxcdThiZmJcXHU1M2Q2XFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1N2E5N1xcdTUzZTNcXHU0ZTBlXFx1OGY5M1xcdTUxNjVcXHU2YTIxXFx1NjAwMVxcdWZmMGNcXHU1ZTc2XFx1NTg2YlxcdTUxNDUgcGktYWkgXFx1NjNkMFxcdTRmOWJcXHU1NTQ2XFx1NzY4NFxcdTZhMjFcXHU1NzhiXFx1Njc2MVxcdTc2ZWVcXHUzMDAyJyxcbiAgZW5yaWNoOiAnXFx1NGVjZVxcdTY3MGRcXHU1MmExXFx1NTY2OFxcdTViY2NcXHU1MzE2JyxcbiAgZW5yaWNoaW5nOiAnXFx1NmI2M1xcdTU3MjhcXHU1YmNjXFx1NTMxNlxcdTIwMjYnLFxuICBub0Jhc2VVcmw6ICdcXHU4YmU1XFx1NjNkMFxcdTRmOWJcXHU1NTQ2XFx1NjcyYVxcdTkxNGRcXHU3ZjZlXFx1N2FlZlxcdTcwYjlcXHUzMDAyJyxcbiAgZW5yaWNoZWQ6ICdcXHU1ZGYyXFx1NWJjY1xcdTUzMTYge2NvdW50fSBcXHU0ZTJhXFx1NmEyMVxcdTU3OGJcXHUzMDAyJyxcbiAgY29sb3JzR3JvdXA6ICdcXHU2ODA3XFx1N2I3ZVxcdTk4NzVcXHU3MmI2XFx1NjAwMVxcdTcwNmYnLFxuICBjb2xvcnNJbnRybzogJ1xcdTY4MDdcXHU3YjdlXFx1OTg3NVxcdTU2ZmVcXHU2ODA3XFx1OTY4ZlxcdTRmMWFcXHU4YmRkXFx1NzJiNlxcdTYwMDFcXHU1M2Q4XFx1ODI3MlxcdWZmMWFcXHU3ZWZmID0gXFx1NWRmMlxcdTViOGNcXHU2MjEwXFx1ZmYwY1xcdTc0MjVcXHU3M2MwID0gXFx1N2I0OVxcdTRmNjBcXHU1OTA0XFx1NzQwNlxcdTMwMDInLFxuICBjb2xvcnNFbmFibGVkOiAnXFx1NTQyZlxcdTc1MjhcXHU1NmZlXFx1NjgwN1xcdTUzZDhcXHU4MjcyJyxcbiAgY29sb3JzRW5hYmxlZEhpbnQ6ICdcXHU1MTczXFx1OTVlZFxcdTU0MGVcXHU1OWNiXFx1N2VjOFxcdTRmN2ZcXHU3NTI4XFx1NWI5OFxcdTY1YjlcXHU1NmZlXFx1NjgwN1xcdTMwMDInLFxuICBncmVlbkxhYmVsOiAnXFx1NWRmMlxcdTViOGNcXHU2MjEwJyxcbiAgYW1iZXJMYWJlbDogJ1xcdTVmODVcXHU1OTA0XFx1NzQwNlxcdWZmMDhcXHU2M2QwXFx1OTVlZS9cXHU1YmExXFx1NjI3OVxcdWZmMDknLFxuICB3b3JraW5nTGFiZWw6ICdcXHU3NTFmXFx1NjIxMFxcdTRlMmQnLFxuICB3b3JraW5nSGludDogJ1xcdTRmMWFcXHU4YmRkXFx1NzUxZlxcdTYyMTBcXHU2NWY2XFx1NjYzZVxcdTc5M2FcXHUzMDAyJyxcbiAgYmxhY2tMYWJlbDogJ1xcdTllZDhcXHU4YmE0XFx1ODI3MicsXG4gIGJsYWNrSGludDogJ1xcdTc1NTlcXHU3YTdhXFx1NTIxOVxcdTdhN2FcXHU5NWYyXFx1NjVmNlxcdTRmN2ZcXHU3NTI4XFx1NWI5OFxcdTY1YjlcXHU1NmZlXFx1NjgwN1xcdTMwMDInLFxuICBjb2xvclJlc2V0OiAnXFx1NmUwNVxcdTk2NjQnLFxuICBjb2xvclVuc2V0OiAnXFx1NWI5OFxcdTY1YjknLFxuICBub3RpZnlHcm91cDogJ1xcdTdjZmJcXHU3ZWRmXFx1OTAxYVxcdTc3ZTUnLFxuICBub3RpZnlJbnRybzogJ1xcdTRmMWFcXHU4YmRkXFx1NWI4Y1xcdTYyMTBcXHU2MjE2XFx1NjcwOVxcdTYzZDBcXHU5NWVlL1xcdTViYTFcXHU2Mjc5XFx1N2I0OVxcdTRmNjBcXHU1OTA0XFx1NzQwNlxcdTY1ZjZcXHU1M2QxXFx1OTAwMVxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTkwMWFcXHU3N2U1XFx1MzAwMicsXG4gIG5vdGlmeUVuYWJsZWQ6ICdcXHU1NDJmXFx1NzUyOFxcdTkwMWFcXHU3N2U1JyxcbiAgbm90aWZ5RW5hYmxlZEhpbnQ6ICdcXHU5OTk2XFx1NmIyMVxcdTVmMDBcXHU1NDJmXFx1NjVmNlxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTRmMWFcXHU4YmUyXFx1OTVlZVxcdTYzODhcXHU2NzQzXFx1MzAwMicsXG4gIG5vdGlmeUZvcmVncm91bmQ6ICdcXHU1MjRkXFx1NTNmMFxcdTYzZDBcXHU5MTkyJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZEhpbnQ6ICdcXHU2ODA3XFx1N2I3ZVxcdTk4NzVcXHU1M2VmXFx1ODljMVxcdTRlMTRcXHU2NzA5XFx1NzEyNlxcdTcwYjlcXHU2NWY2XFx1NGU1ZlxcdTYzZDBcXHU5MTkyXFx1MzAwMicsXG4gIG5vdGlmeVBlcnNpc3RlbnQ6ICdcXHU1ZTM4XFx1OWE3YlxcdTVjNGZcXHU1ZTU1JyxcbiAgbm90aWZ5UGVyc2lzdGVudEhpbnQ6ICdcXHU1ZjAwXFx1NTQyZlxcdTU0MGVcXHU5NzAwXFx1NjI0YlxcdTUyYThcXHU1MTczXFx1OTVlZFxcdTYyNGRcXHU0ZjFhXFx1NmQ4OFxcdTU5MzFcXHVmZjA4XFx1NTNkN1xcdTdjZmJcXHU3ZWRmXFx1NjUyZlxcdTYzMDFcXHU5NjUwXFx1NTIzNlxcdWZmMDlcXHUzMDAyJyxcbiAgc291bmRHcm91cDogJ1xcdTYzZDBcXHU3OTNhXFx1OTdmMycsXG4gIHNvdW5kSW50cm86ICdcXHU1M2VmXFx1OTAwOVxcdTc2ODRcXHU5MDFhXFx1NzdlNVxcdTYzZDBcXHU3OTNhXFx1OTdmM1xcdWZmMGNcXHU5ZWQ4XFx1OGJhNFxcdTY1ZTBcXHU1OGYwXFx1MzAwMicsXG4gIG5vdGlmeVZvbHVtZTogJ1xcdTk3ZjNcXHU5MWNmJyxcbiAgc291bmREb25lOiAnXFx1NGYxYVxcdThiZGRcXHU1YjhjXFx1NjIxMFxcdTY1ZjYnLFxuICBzb3VuZFBlbmRpbmc6ICdcXHU3YjQ5XFx1NGY2MFxcdTU5MDRcXHU3NDA2XFx1NjVmNicsXG4gIHNvdW5kTm9Tb3VuZDogJ1xcdTY1ZTBcXHU1OGYwJyxcbiAgc291bmRQYWNrQnVpbHRpbjogJ1xcdTUxODVcXHU3ZjZlJyxcbiAgc291bmRCdWlsdGluVXA6ICdDaGltZSBVcCcsXG4gIHNvdW5kQnVpbHRpbkRvd246ICdDaGltZSBEb3duJyxcbiAgcGVybWlzc2lvbkRlbmllZDogJ1xcdTVkZjJcXHU4OGFiXFx1NmQ0ZlxcdTg5YzhcXHU1NjY4XFx1NjJkMlxcdTdlZGRcXHVmZjBjXFx1OGJmN1xcdTU3MjhcXHU3YWQ5XFx1NzBiOVxcdThiYmVcXHU3ZjZlXFx1NGUyZFxcdTYwNjJcXHU1OTBkXFx1OTAxYVxcdTc3ZTVcXHU2NzQzXFx1OTY1MFxcdTMwMDInLFxuICBwZXJtaXNzaW9uVW5zdXBwb3J0ZWQ6ICdcXHU1ZjUzXFx1NTI0ZFxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTRlMGRcXHU2NTJmXFx1NjMwMVxcdTdjZmJcXHU3ZWRmXFx1OTAxYVxcdTc3ZTVcXHUzMDAyJyxcbiAgbm90aWZ5RG9uZVRpdGxlOiAnXFx1NGYxYVxcdThiZGRcXHU1ZGYyXFx1NWI4Y1xcdTYyMTAnLFxuICBub3RpZnlQZW5kaW5nVGl0bGU6ICdcXHU2NzA5XFx1NGVhNFxcdTRlOTJcXHU3YjQ5XFx1NWY4NVxcdTU5MDRcXHU3NDA2JyxcbiAgbm90aWZ5RHVyYXRpb246ICdcXHU2NzJjXFx1OGY2ZVxcdTYwM2JcXHU3NTI4XFx1NjVmNiB7ZHVyYXRpb259JyxcbiAgZHVyYXRpb25TZWNvbmRzOiAne3NlY29uZHN9XFx1NzlkMicsXG4gIGR1cmF0aW9uTWludXRlczogJ3ttaW51dGVzfVxcdTUyMDZ7c2Vjb25kc31cXHU3OWQyJyxcbiAgcGVuZGluZ0tpbmRBcHByb3ZhbDogJ1xcdTVmODVcXHU1YmExXFx1NjI3OScsXG4gIHBlbmRpbmdLaW5kUXVlc3Rpb246ICdcXHU1NDExXFx1NGY2MFxcdTYzZDBcXHU5NWVlJyxcbiAgcGVuZGluZ0tpbmRQbGFuUmV2aWV3OiAnXFx1OGJhMVxcdTUyMTJcXHU1Zjg1XFx1NWJhMVxcdTY4MzgnLFxuICBwZW5kaW5nQXBwcm92YWxUb29sOiAnXFx1NWY4NVxcdTViYTFcXHU2Mjc5IFxcdTAwYjcge3Rvb2x9JyxcbiAgcGVuZGluZ1F1ZXN0aW9uQ2hvb3NlOiAnXFx1OGJmN1xcdTRmNjBcXHU5MDA5XFx1NjJlOScsXG4gIHBlbmRpbmdRdWVzdGlvbk11bHRpOiAnXFx1OGJmN1xcdTRmNjBcXHU1OTFhXFx1OTAwOScsXG4gIHBlbmRpbmdRdWVzdGlvbkZpbGw6ICdcXHU4YmY3XFx1NGY2MFxcdTU4NmJcXHU1MTk5JyxcbiAgcGVuZGluZ1F1ZXN0aW9uQmF0Y2g6ICdcXHU1NDExXFx1NGY2MFxcdTYzZDBcXHU5NWVlXFx1ZmYwOHtjb3VudH0gXFx1NGUyYVxcdWZmMDknLFxuICBzYXZlOiAnXFx1NGZkZFxcdTViNTgnLFxuICBzYXZlZDogJ1xcdTVkZjJcXHU0ZmRkXFx1NWI1OFxcdTMwMDInLFxuICBpbnZhbGlkVG9rZW46ICdcXHU4YmY3XFx1OGY5M1xcdTUxNjVcXHU2NTcwXFx1NWI1N1xcdTYyMTZcXHU1ZTI2IGsvTSBcXHU1NDBlXFx1N2YwMFxcdTc2ODRcXHU1MDNjXFx1ZmYwOFxcdTU5ODIgMTMwa1xcdWZmMDlcXHUzMDAyJyxcbiAgaW52YWxpZEhleDogJ1xcdTk4OWNcXHU4MjcyXFx1NjgzY1xcdTVmMGZcXHU1ZTk0XFx1NGUzYSAjUlJHR0JCXFx1MzAwMicsXG4gIGVycm9yUHJlZml4OiAnXFx1OTUxOVxcdThiZWZcXHVmZjFhICcsXG4gIHVuYXZhaWxhYmxlOiAnXFx1NmI2NFxcdThiYmVcXHU3ZjZlXFx1NTcyOFxcdTVmNTNcXHU1MjRkXFx1NWJhMlxcdTYyMzdcXHU3YWVmXFx1NGUwZFxcdTUzZWZcXHU3NTI4XFx1MzAwMicsXG4gIGxvYWRpbmc6ICdcXHU1MmEwXFx1OGY3ZFxcdTRlMmRcXHUyMDI2Jyxcbn1cblxuLyoqIFBhcnNlIGEgaHVtYW4gdG9rZW4gY291bnQgKGAxMzBrYCwgYDEuNW1gLCBgMTMwMDAwYCkuICovXG5mdW5jdGlvbiBwYXJzZVRva2VuVGV4dCh0ZXh0KSB7XG4gIGNvbnN0IHJhdyA9IFN0cmluZyh0ZXh0ID8/ICcnKS50cmltKCkucmVwbGFjZSgvW1xcc19dL2csICcnKVxuICBpZiAocmF3ID09PSAnJykgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBtYXRjaCA9IC9eKFxcZCsoPzpbLixdXFxkKyk/KShba0ttTV0pPyQvLmV4ZWMocmF3KVxuICBpZiAobWF0Y2ggPT09IG51bGwpIHJldHVybiB1bmRlZmluZWRcbiAgY29uc3QgYmFzZSA9IE51bWJlcihtYXRjaFsxXS5yZXBsYWNlKCcsJywgJy4nKSlcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoYmFzZSkgfHwgYmFzZSA8IDApIHJldHVybiB1bmRlZmluZWRcbiAgY29uc3Qgc2NhbGUgPSBtYXRjaFsyXSA9PT0gdW5kZWZpbmVkID8gMSA6IG1hdGNoWzJdLnRvTG93ZXJDYXNlKCkgPT09ICdrJyA/IDEwMDAgOiAxMDAwMDAwXG4gIHJldHVybiBNYXRoLnJvdW5kKGJhc2UgKiBzY2FsZSlcbn1cblxuLyoqIEJ1aWxkIGB7IHByb3ZpZGVyLCBtb2RlbCwgbmFtZSwgbGV2ZWxzIH1gIHJvd3MgZnJvbSB0aGUgcGktYWkgY29uZmlnIHZhbHVlLiAqL1xuZnVuY3Rpb24gYnVpbGRDYXRhbG9nKHByb3ZpZGVycykge1xuICBjb25zdCByb3dzID0gW11cbiAgaWYgKHByb3ZpZGVycyA9PT0gbnVsbCB8fCB0eXBlb2YgcHJvdmlkZXJzICE9PSAnb2JqZWN0JykgcmV0dXJuIHJvd3NcbiAgZm9yIChjb25zdCBbcHJvdmlkZXIsIHByb2ZpbGVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3ZpZGVycykpIHtcbiAgICBjb25zdCBtb2RlbHMgPSBwcm9maWxlICE9PSBudWxsICYmIHR5cGVvZiBwcm9maWxlID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHByb2ZpbGUubW9kZWxzKSA/IHByb2ZpbGUubW9kZWxzIDogW11cbiAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscykge1xuICAgICAgaWYgKG1vZGVsID09PSBudWxsIHx8IHR5cGVvZiBtb2RlbCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG1vZGVsLmlkICE9PSAnc3RyaW5nJykgY29udGludWVcbiAgICAgIGNvbnN0IGVmZm9ydHMgPSBtb2RlbC5yZWFzb25pbmdFZmZvcnRzXG4gICAgICBjb25zdCBsZXZlbHMgPSBlZmZvcnRzID09PSBmYWxzZSA/IFtdIDogKGVmZm9ydHMgIT09IG51bGwgJiYgdHlwZW9mIGVmZm9ydHMgPT09ICdvYmplY3QnID8gT2JqZWN0LmtleXMoZWZmb3J0cykgOiBbXSlcbiAgICAgIHJvd3MucHVzaCh7IHByb3ZpZGVyLCBtb2RlbDogbW9kZWwuaWQsIG5hbWU6IHR5cGVvZiBtb2RlbC5uYW1lID09PSAnc3RyaW5nJyAmJiBtb2RlbC5uYW1lICE9PSAnJyA/IG1vZGVsLm5hbWUgOiBtb2RlbC5pZCwgbGV2ZWxzIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiByb3dzXG59XG5cbmNvbnN0IFMgPSB7XG4gIHdyYXA6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiA0LCBtYXhXaWR0aDogNjgwLCBwYWRkaW5nVG9wOiA0IH0sXG4gIHRhYnM6IHsgbWFyZ2luVG9wOiA0IH0sXG4gIGdyb3VwOiB7IG1hcmdpblRvcDogMTAsIHBhZGRpbmdUb3A6IDEwLCBib3JkZXJUb3A6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwzKScgfSxcbiAgZ3JvdXBGaXJzdDogeyBtYXJnaW5Ub3A6IDEwIH0sXG4gIGdyb3VwVGl0bGU6IHsgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDIgfSxcbiAgbGFiZWw6IHsgZGlzcGxheTogJ2Jsb2NrJywgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDYsIGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpJyB9LFxuICBoaW50OiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiwgbWFyZ2luOiAnNHB4IDAgMTJweCcgfSxcbiAgaW5wdXQ6IHtcbiAgICBoZWlnaHQ6IDMyLFxuICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sNCknLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGJhY2tncm91bmQ6ICd2YXIoLS1kc3ctYWxpYXMtYmctbGF5ZXItMSknLFxuICAgIGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICB9LFxuICBzZWxlY3Q6IHsgY3Vyc29yOiAncG9pbnRlcicgfSxcbiAgaGV4OiB7IGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLCB3aWR0aDogMTEwLCBmbGV4OiAnMCAwIGF1dG8nIH0sXG4gIGNvbG9yOiB7XG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICB3aWR0aDogMzIsXG4gICAgaGVpZ2h0OiAzMixcbiAgICBwYWRkaW5nOiAyLFxuICAgIGJvcmRlcjogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDQpJyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgYmFja2dyb3VuZDogJ3ZhcigtLWRzdy1hbGlhcy1iZy1sYXllci0xKScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gIH0sXG4gIHJvd1R3bzogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMTIgfSxcbiAgcm93RmxleDogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogOCwgYWxpZ25JdGVtczogJ2NlbnRlcicgfSxcbiAgY29sOiB7IGZsZXg6IDEsIG1pbldpZHRoOiAwIH0sXG4gIHRvZ2dsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEwLCBtYXJnaW5Cb3R0b206IDEyIH0sXG4gIHRvZ2dsZVRleHQ6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAyIH0sXG4gIHRvZ2dsZUxhYmVsOiB7IGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknIH0sXG4gIGVycm9yOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnksICNjMDApJywgZm9udFNpemU6IDEyLCBtYXJnaW5Ub3A6IDIgfSxcbn1cblxuZnVuY3Rpb24gUHJlZnNTZWN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHsgdCwgdXNlUHJlZnMsIHVzZU1vZGVsQ2F0YWxvZywgc2F2ZSwgcHJvYmUsIHdyaXRlTW9kZWxzIH0gPSBwcm9wc1xuICBjb25zdCBzbmFwID0gdXNlUHJlZnMoKHMpID0+IHMpXG4gIGNvbnN0IGNhdGFsb2dTbmFwID0gdXNlTW9kZWxDYXRhbG9nKChzKSA9PiBzKVxuICBjb25zdCB2YWx1ZSA9IHNuYXAgIT09IG51bGwgJiYgc25hcCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzbmFwLnZhbHVlID09PSAnb2JqZWN0JyAmJiBzbmFwLnZhbHVlICE9PSBudWxsID8gc25hcC52YWx1ZSA6IHt9XG4gIGNvbnN0IHByb3ZpZGVycyA9IGNhdGFsb2dTbmFwICE9PSBudWxsICYmIGNhdGFsb2dTbmFwICE9PSB1bmRlZmluZWQgJiYgY2F0YWxvZ1NuYXAudmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIGNhdGFsb2dTbmFwLnZhbHVlID09PSAnb2JqZWN0JyA/IGNhdGFsb2dTbmFwLnZhbHVlLnByb3ZpZGVycyA6IHVuZGVmaW5lZFxuICBjb25zdCBjYXRhbG9nID0gYnVpbGRDYXRhbG9nKHByb3ZpZGVycylcbiAgY29uc3Qgc3RhdHVzID0gc25hcCAhPT0gbnVsbCAmJiBzbmFwICE9PSB1bmRlZmluZWQgPyBzbmFwLnN0YXR1cyA6ICdsb2FkaW5nJ1xuICBjb25zdCB3cml0YWJsZSA9ICEhKHNuYXAgJiYgc25hcC53cml0YWJsZSlcblxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gUmVhY3QudXNlU3RhdGUoJ2NvbXBhY3Rpb24nKVxuICBjb25zdCBbcGVybWlzc2lvbiwgc2V0UGVybWlzc2lvbl0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpKVxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+ICh7XG4gICAgdGhyZXNob2xkVG9rZW5zOiB2YWx1ZS50aHJlc2hvbGRUb2tlbnMgPyBTdHJpbmcodmFsdWUudGhyZXNob2xkVG9rZW5zKSA6ICcnLFxuICAgIGNvbnRleHRXaW5kb3dUb2tlbnM6IHZhbHVlLmNvbnRleHRXaW5kb3dUb2tlbnMgPyBTdHJpbmcodmFsdWUuY29udGV4dFdpbmRvd1Rva2VucykgOiAnJyxcbiAgICByZXRhaW5Ub2tlbnM6IHZhbHVlLnJldGFpblRva2VucyA/IFN0cmluZyh2YWx1ZS5yZXRhaW5Ub2tlbnMpIDogJycsXG4gIH0pKVxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2VucmljaE5vdGUsIHNldEVucmljaE5vdGVdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFtidXN5Um91dGUsIHNldEJ1c3lSb3V0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgdmFsdWVSZWYgPSBzbmFwICYmIHNuYXAudmFsdWVcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREcmFmdCh7XG4gICAgICB0aHJlc2hvbGRUb2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLnRocmVzaG9sZFRva2VucyA/IFN0cmluZyh2YWx1ZVJlZi50aHJlc2hvbGRUb2tlbnMpIDogJycsXG4gICAgICBjb250ZXh0V2luZG93VG9rZW5zOiB2YWx1ZVJlZiAmJiB2YWx1ZVJlZi5jb250ZXh0V2luZG93VG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLmNvbnRleHRXaW5kb3dUb2tlbnMpIDogJycsXG4gICAgICByZXRhaW5Ub2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLnJldGFpblRva2VucyA/IFN0cmluZyh2YWx1ZVJlZi5yZXRhaW5Ub2tlbnMpIDogJycsXG4gICAgfSlcbiAgICBzZXROb3RlKCcnKVxuICB9LCBbdmFsdWVSZWZdKVxuXG4gIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJykgcmV0dXJuIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnbG9hZGluZycpKVxuICBpZiAoc3RhdHVzID09PSAndW5hdmFpbGFibGUnKSByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCd1bmF2YWlsYWJsZScpKVxuXG4gIGNvbnN0IGRpc2FibGVkID0gIXdyaXRhYmxlXG4gIGNvbnN0IHdyaXRlID0gKGZpZWxkLCB2KSA9PiB7XG4gICAgc2V0Tm90ZSgnJylcbiAgICBQcm9taXNlLnJlc29sdmUoc2F2ZShmaWVsZCwgdikpLmNhdGNoKChlcnJvcikgPT4gc2V0Tm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKSlcbiAgfVxuICBjb25zdCBjb21taXRUb2tlbnMgPSAoZmllbGQsIHRleHQpID0+IHtcbiAgICBpZiAodGV4dC50cmltKCkgPT09ICcnKSB7IHdyaXRlKGZpZWxkLCAwKTsgcmV0dXJuIH1cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVRva2VuVGV4dCh0ZXh0KVxuICAgIGlmIChwYXJzZWQgPT09IHVuZGVmaW5lZCkgeyBzZXROb3RlKHQoJ2ludmFsaWRUb2tlbicpKTsgcmV0dXJuIH1cbiAgICB3cml0ZShmaWVsZCwgcGFyc2VkKVxuICB9XG4gIGNvbnN0IG51bSA9IChmaWVsZCwgZmFsbGJhY2spID0+ICh7XG4gICAgdmFsdWU6IFN0cmluZyh2YWx1ZVtmaWVsZF0gIT09IHVuZGVmaW5lZCA/IHZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrKSxcbiAgICBkaXNhYmxlZCxcbiAgICBvbkNoYW5nZTogKGUpID0+IHsgY29uc3QgbiA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7IGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHdyaXRlKGZpZWxkLCBuKSB9LFxuICB9KVxuICBjb25zdCBzd2l0Y2hGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGUsIGtleTogZmllbGQgfSxcbiAgICBlbChTd2l0Y2gsIHtcbiAgICAgIGNoZWNrZWQ6IHZhbHVlW2ZpZWxkXSAhPT0gdW5kZWZpbmVkID8gISF2YWx1ZVtmaWVsZF0gOiBmYWxsYmFjayxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFiZWw6IHQobGFiZWxLZXkpLFxuICAgICAgb25DaGFuZ2U6IChuZXh0KSA9PiB3cml0ZShmaWVsZCwgbmV4dCksXG4gICAgfSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudG9nZ2xlVGV4dCB9LFxuICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiBTLnRvZ2dsZUxhYmVsIH0sIHQobGFiZWxLZXkpKSxcbiAgICAgIGhpbnRLZXkgPyBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyIH0gfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICAgICksXG4gIClcbiAgY29uc3QgdGV4dEZpZWxkID0gKGxhYmVsS2V5LCBmaWVsZCwgaGludEtleSkgPT4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6IGZpZWxkIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgIHR5cGU6ICd0ZXh0Jywgc3R5bGU6IFMuaW5wdXQsIGRpc2FibGVkLFxuICAgICAgdmFsdWU6IGRyYWZ0W2ZpZWxkXSxcbiAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gc2V0RHJhZnQoKGQpID0+ICh7IC4uLmQsIFtmaWVsZF06IGUudGFyZ2V0LnZhbHVlIH0pKSxcbiAgICAgIG9uQmx1cjogKCkgPT4gY29tbWl0VG9rZW5zKGZpZWxkLCBkcmFmdFtmaWVsZF0pLFxuICAgICAgb25LZXlEb3duOiAoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGNvbW1pdFRva2VucyhmaWVsZCwgZHJhZnRbZmllbGRdKSB9LFxuICAgIH0pLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdChoaW50S2V5KSksXG4gIClcbiAgY29uc3QgbnVtYmVyRmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBoaW50S2V5LCBmYWxsYmFjaykgPT4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6IGZpZWxkIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgIGVsKCdpbnB1dCcsIHsgdHlwZTogJ251bWJlcicsIHN0ZXA6ICdhbnknLCBzdHlsZTogUy5pbnB1dCwgLi4ubnVtKGZpZWxkLCBmYWxsYmFjaykgfSksXG4gICAgaGludEtleSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICApXG4gIC8qKiBDb2xvdXIgcm93OiBuYXRpdmUgcGlja2VyICsgZWRpdGFibGUgaGV4LCBvcHRpb25hbCBjbGVhciAoZW1wdHkgPSBvZmZpY2lhbCkuICovXG4gIGNvbnN0IGNvbG9yRmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBmYWxsYmFja0hleCwgb3B0aW9uYWwsIGhpbnRLZXkpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gdHlwZW9mIHZhbHVlW2ZpZWxkXSA9PT0gJ3N0cmluZycgPyB2YWx1ZVtmaWVsZF0gOiAnJ1xuICAgIGNvbnN0IHNob3duID0gY3VycmVudCAhPT0gJycgPyBjdXJyZW50IDogKGZhbGxiYWNrSGV4ID8/ICcjMDAwMDAwJylcbiAgICByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IHsgLi4uUy5jb2wsIG1hcmdpbkJvdHRvbTogMTAgfSwga2V5OiBmaWVsZCB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93RmxleCB9LFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ2NvbG9yJywgdmFsdWU6IHNob3duLCBkaXNhYmxlZCwgc3R5bGU6IFMuY29sb3IsXG4gICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB3cml0ZShmaWVsZCwgZS50YXJnZXQudmFsdWUpLFxuICAgICAgICB9KSxcbiAgICAgICAgZWwoJ2lucHV0Jywge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0Jywgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5oZXggfSwgZGlzYWJsZWQsXG4gICAgICAgICAgdmFsdWU6IGN1cnJlbnQsIHBsYWNlaG9sZGVyOiBvcHRpb25hbCA/IHQoJ2NvbG9yVW5zZXQnKSA6ICcnLFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgICAgICAgaWYgKG5leHQgPT09ICcnICYmIG9wdGlvbmFsKSB3cml0ZShmaWVsZCwgJycpXG4gICAgICAgICAgICBlbHNlIGlmIChIRVgudGVzdChuZXh0KSkgd3JpdGUoZmllbGQsIG5leHQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIG9wdGlvbmFsICYmIGN1cnJlbnQgIT09ICcnXG4gICAgICAgICAgPyBlbChCdXR0b24sIHsgdmFyaWFudDogJ2dob3N0Jywgc2l6ZTogJ3NtJywgZGlzYWJsZWQsIG9uQ2xpY2s6ICgpID0+IHdyaXRlKGZpZWxkLCAnJykgfSwgdCgnY29sb3JSZXNldCcpKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICksXG4gICAgICBoaW50S2V5ID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gICAgKVxuICB9XG4gIGNvbnN0IGVuYWJsZU5vdGlmaWNhdGlvbnMgPSAobmV4dCkgPT4ge1xuICAgIGlmICghbmV4dCkgeyB3cml0ZSgnbm90aWZ5RW5hYmxlZCcsIGZhbHNlKTsgcmV0dXJuIH1cbiAgICB3cml0ZSgnbm90aWZ5RW5hYmxlZCcsIHRydWUpXG4gICAgcHJpbWVTb3VuZCgpXG4gICAgdm9pZCByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpLnRoZW4oc2V0UGVybWlzc2lvbilcbiAgfVxuXG4gIGNvbnN0IGVucmljaFByb3ZpZGVyID0gYXN5bmMgKHJvdXRlSWQsIHByb2ZpbGUpID0+IHtcbiAgICBzZXRCdXN5Um91dGUocm91dGVJZClcbiAgICBzZXRFbnJpY2hOb3RlKCcnKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByb2JlKHsgYXJnczogeyBiYXNlVVJMOiBwcm9maWxlLmJhc2VVUkwgfSB9KVxuICAgICAgY29uc3QgZm91bmQgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlPy5tb2RlbHMpID8gcmVzcG9uc2UubW9kZWxzIDogW11cbiAgICAgIGNvbnN0IGJ5SWQgPSBuZXcgTWFwKGZvdW5kLm1hcCgobSkgPT4gW20uaWQsIG1dKSlcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gQXJyYXkuaXNBcnJheShwcm9maWxlLm1vZGVscykgPyBwcm9maWxlLm1vZGVscyA6IFtdXG4gICAgICBjb25zdCBtZXJnZWQgPSBleGlzdGluZy5sZW5ndGggPT09IDBcbiAgICAgICAgPyBmb3VuZC5tYXAoKG0pID0+ICh7XG4gICAgICAgICAgICBpZDogbS5pZCxcbiAgICAgICAgICAgIG5hbWU6IG0ubmFtZSxcbiAgICAgICAgICAgIC4uLihtLmNvbnRleHRXaW5kb3cgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBjb250ZXh0V2luZG93OiBtLmNvbnRleHRXaW5kb3cgfSksXG4gICAgICAgICAgICAuLi4obS5tYXhUb2tlbnMgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBtYXhUb2tlbnM6IG0ubWF4VG9rZW5zIH0pLFxuICAgICAgICAgICAgLi4uKG0uaW5wdXQgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBpbnB1dDogbS5pbnB1dCB9KSxcbiAgICAgICAgICB9KSlcbiAgICAgICAgOiBleGlzdGluZy5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhpdCA9IGJ5SWQuZ2V0KG0uaWQpXG4gICAgICAgICAgICBpZiAoaGl0ID09PSB1bmRlZmluZWQpIHJldHVybiBtXG4gICAgICAgICAgICBjb25zdCBuZXh0ID0geyAuLi5tIH1cbiAgICAgICAgICAgIGlmIChuZXh0LmNvbnRleHRXaW5kb3cgPT09IHVuZGVmaW5lZCAmJiBoaXQuY29udGV4dFdpbmRvdyAhPT0gdW5kZWZpbmVkKSBuZXh0LmNvbnRleHRXaW5kb3cgPSBoaXQuY29udGV4dFdpbmRvd1xuICAgICAgICAgICAgaWYgKG5leHQuaW5wdXQgPT09IHVuZGVmaW5lZCAmJiBoaXQuaW5wdXQgIT09IHVuZGVmaW5lZCkgbmV4dC5pbnB1dCA9IGhpdC5pbnB1dFxuICAgICAgICAgICAgcmV0dXJuIG5leHRcbiAgICAgICAgICB9KVxuICAgICAgYXdhaXQgd3JpdGVNb2RlbHMocm91dGVJZCwgbWVyZ2VkKVxuICAgICAgc2V0RW5yaWNoTm90ZSh0KCdlbnJpY2hlZCcsIHsgY291bnQ6IG1lcmdlZC5sZW5ndGggfSkpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVucmljaE5vdGUodCgnZXJyb3JQcmVmaXgnKSArIFN0cmluZyhlcnJvciAmJiBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yKSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0QnVzeVJvdXRlKCcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByb3ZpZGVyUm93cyA9IE9iamVjdC5lbnRyaWVzKHByb3ZpZGVycyAhPT0gbnVsbCAmJiB0eXBlb2YgcHJvdmlkZXJzID09PSAnb2JqZWN0JyA/IHByb3ZpZGVycyA6IHt9KS5tYXAoKFtyb3V0ZUlkLCBwcm9maWxlXSkgPT4ge1xuICAgIGNvbnN0IGJhc2VVUkwgPSBwcm9maWxlICE9PSBudWxsICYmIHR5cGVvZiBwcm9maWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcHJvZmlsZS5iYXNlVVJMID09PSAnc3RyaW5nJyA/IHByb2ZpbGUuYmFzZVVSTCA6ICcnXG4gICAgcmV0dXJuIGVsKCdkaXYnLCB7IGtleTogcm91dGVJZCwgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA4LCBtYXJnaW5Cb3R0b206IDYgfSB9LFxuICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGZsZXg6IDEsIG1pbldpZHRoOiAwLCBvdmVyZmxvdzogJ2hpZGRlbicsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfSB9LCBgJHtyb3V0ZUlkfSR7YmFzZVVSTCA/IGAgXHUyMDE0ICR7YmFzZVVSTH1gIDogJyd9YCksXG4gICAgICBiYXNlVVJMXG4gICAgICAgID8gZWwoQnV0dG9uLCB7XG4gICAgICAgICAgICB2YXJpYW50OiAnb3V0bGluZScsXG4gICAgICAgICAgICBzaXplOiAnc20nLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGJ1c3lSb3V0ZSA9PT0gcm91dGVJZCB8fCBkaXNhYmxlZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHsgdm9pZCBlbnJpY2hQcm92aWRlcihyb3V0ZUlkLCBwcm9maWxlKSB9LFxuICAgICAgICAgIH0sIGJ1c3lSb3V0ZSA9PT0gcm91dGVJZCA/IHQoJ2VucmljaGluZycpIDogdCgnZW5yaWNoJykpXG4gICAgICAgIDogZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiwgZmxleFNocmluazogMCB9IH0sIHQoJ25vQmFzZVVybCcpKSxcbiAgICApXG4gIH0pXG5cbiAgLy8gU3VtbWFyaXphdGlvbiBtb2RlbC9yZWFzb25pbmcgcGlja2Vycy5cbiAgY29uc3QgbW9kZSA9IHZhbHVlLnN1bW1hcml6YXRpb25Nb2RlID09PSAnY3VzdG9tJyA/ICdjdXN0b20nIDogJ3Nlc3Npb24nXG4gIGNvbnN0IHByb3ZpZGVyTmFtZXMgPSBbLi4ubmV3IFNldChjYXRhbG9nLm1hcCgocikgPT4gci5wcm92aWRlcikpXVxuICBjb25zdCBzZWxlY3RlZFByb3ZpZGVyID0gdmFsdWUuc3VtbWFyaXphdGlvblByb3ZpZGVyIHx8IHByb3ZpZGVyTmFtZXNbMF0gfHwgJydcbiAgY29uc3QgbW9kZWxzRm9yUHJvdmlkZXIgPSBjYXRhbG9nLmZpbHRlcigocikgPT4gci5wcm92aWRlciA9PT0gc2VsZWN0ZWRQcm92aWRlcilcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBtb2RlbHNGb3JQcm92aWRlci5maW5kKChyKSA9PiByLm1vZGVsID09PSB2YWx1ZS5zdW1tYXJpemF0aW9uTW9kZWwpIHx8IG1vZGVsc0ZvclByb3ZpZGVyWzBdXG4gIGNvbnN0IGxldmVsU2V0ID0gWydkZWZhdWx0JywgJ29mZicsIC4uLihzZWxlY3RlZFJvdyA/IHNlbGVjdGVkUm93LmxldmVscyA6IFtdKV1cbiAgY29uc3QgcmVhc29uaW5nID0gdmFsdWUuc3VtbWFyaXphdGlvblJlYXNvbmluZyB8fCAnZGVmYXVsdCdcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IChwYWlycykgPT4gcGFpcnMubWFwKChbdiwgbGFiZWxdKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHYsIHZhbHVlOiB2IH0sIGxhYmVsKSlcblxuICBjb25zdCBzdW1tYXJpemF0aW9uID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAnbW9kZScgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ3N1bW1hcml6YXRpb25Nb2RlJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHsgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBtb2RlLCBvbkNoYW5nZTogKGUpID0+IHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZScsIGUudGFyZ2V0LnZhbHVlKSB9LFxuICAgICAgICBzZWxlY3RPcHRpb25zKFtbJ3Nlc3Npb24nLCB0KCdtb2RlU2Vzc2lvbicpXSwgWydjdXN0b20nLCB0KCdtb2RlQ3VzdG9tJyldXSkpLFxuICAgICksXG4gIF1cbiAgaWYgKG1vZGUgPT09ICdjdXN0b20nKSB7XG4gICAgc3VtbWFyaXphdGlvbi5wdXNoKGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAncHJvdmlkZXInIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdwcm92aWRlcicpKSxcbiAgICAgIGVsKCdzZWxlY3QnLCB7XG4gICAgICAgIHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLCB2YWx1ZTogc2VsZWN0ZWRQcm92aWRlcixcbiAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV4dCA9IGNhdGFsb2cuZmluZCgocikgPT4gci5wcm92aWRlciA9PT0gZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgd3JpdGUoJ3N1bW1hcml6YXRpb25Qcm92aWRlcicsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIGlmIChuZXh0KSB3cml0ZSgnc3VtbWFyaXphdGlvbk1vZGVsJywgbmV4dC5tb2RlbClcbiAgICAgICAgICB3cml0ZSgnc3VtbWFyaXphdGlvblJlYXNvbmluZycsICdkZWZhdWx0JylcbiAgICAgICAgfSxcbiAgICAgIH0sIHByb3ZpZGVyTmFtZXMubWFwKChwKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHAsIHZhbHVlOiBwIH0sIHApKSksXG4gICAgKSlcbiAgICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdtb2RlbCcgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ21vZGVsJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHtcbiAgICAgICAgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsXG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZFJvdyA/IHNlbGVjdGVkUm93Lm1vZGVsIDogJycsXG4gICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4geyB3cml0ZSgnc3VtbWFyaXphdGlvbk1vZGVsJywgZS50YXJnZXQudmFsdWUpOyB3cml0ZSgnc3VtbWFyaXphdGlvblJlYXNvbmluZycsICdkZWZhdWx0JykgfSxcbiAgICAgIH0sIG1vZGVsc0ZvclByb3ZpZGVyLm1hcCgocikgPT4gZWwoJ29wdGlvbicsIHsga2V5OiByLm1vZGVsLCB2YWx1ZTogci5tb2RlbCB9LCByLm5hbWUpKSksXG4gICAgKSlcbiAgfVxuICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdyZWFzb25pbmcnIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgncmVhc29uaW5nJykpLFxuICAgIGVsKCdzZWxlY3QnLCB7IHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLCB2YWx1ZTogbGV2ZWxTZXQuaW5jbHVkZXMocmVhc29uaW5nKSA/IHJlYXNvbmluZyA6ICdkZWZhdWx0Jywgb25DaGFuZ2U6IChlKSA9PiB3cml0ZSgnc3VtbWFyaXphdGlvblJlYXNvbmluZycsIGUudGFyZ2V0LnZhbHVlKSB9LFxuICAgICAgbGV2ZWxTZXQubWFwKChsdikgPT4gZWwoJ29wdGlvbicsIHsga2V5OiBsdiwgdmFsdWU6IGx2IH0sIGx2ID09PSAnZGVmYXVsdCcgPyB0KCdyZWFzb25pbmdEZWZhdWx0JykgOiBsdiA9PT0gJ29mZicgPyB0KCdyZWFzb25pbmdPZmYnKSA6IGx2KSkpLFxuICApKVxuXG4gIGNvbnN0IGNvbXBhY3Rpb25QYW5lbCA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cEZpcnN0LCBrZXk6ICd0aHJlc2hvbGQnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3RocmVzaG9sZFRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIHRleHRGaWVsZCgndGhyZXNob2xkVG9rZW5zJywgJ3RocmVzaG9sZFRva2VucycsICd0aHJlc2hvbGRUb2tlbnNIaW50JyksXG4gICAgICAgIHRleHRGaWVsZCgnY29udGV4dFdpbmRvdycsICdjb250ZXh0V2luZG93VG9rZW5zJywgJ2NvbnRleHRXaW5kb3dIaW50JyksXG4gICAgICApLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIG51bWJlckZpZWxkKCd0aHJlc2hvbGRSYXRpbycsICd0aHJlc2hvbGRSYXRpbycsICd0aHJlc2hvbGRSYXRpb0hpbnQnLCAwLjgpLFxuICAgICAgICBudW1iZXJGaWVsZCgnaGVhZHJvb20nLCAnaGVhZHJvb21Ub2tlbnMnLCAnaGVhZHJvb21IaW50JywgMzI3NjgpLFxuICAgICAgKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdyZXRlbnRpb24nIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3JldGVudGlvblRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIHRleHRGaWVsZCgncmV0YWluVG9rZW5zJywgJ3JldGFpblRva2VucycsICdyZXRhaW5Ub2tlbnNIaW50JyksXG4gICAgICAgIG51bWJlckZpZWxkKCdyZXRhaW5SYXRpbycsICdyZXRhaW5SYXRpbycsIG51bGwsIDAuMTYpLFxuICAgICAgKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdiZWhhdmlvdXInIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ2JlaGF2aW91clRpdGxlJykpLFxuICAgICAgc3dpdGNoRmllbGQoJ2F1dG8nLCAnYXV0bycsICdhdXRvSGludCcsIHRydWUpLFxuICAgICAgc3dpdGNoRmllbGQoJ3R1cm5FbmQnLCAndHVybkVuZENvbXBhY3Rpb25FbmFibGVkJywgJ3R1cm5FbmRIaW50JywgZmFsc2UpLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ3N1bW1hcml6YXRpb24nIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3N1bW1hcml6YXRpb25UaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LCBzdW1tYXJpemF0aW9uKSxcbiAgICAgIG51bWJlckZpZWxkKCdtYXhUb2tlbnMnLCAnbWF4VG9rZW5zJywgbnVsbCwgMzI3NjgpLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ2FkdmFuY2VkJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdhZHZhbmNlZFRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIG51bWJlckZpZWxkKCdjb21wYWN0aW9uUmV0cmllcycsICdjb21wYWN0aW9uUmV0cmllcycsIG51bGwsIDEpLFxuICAgICAgICBudW1iZXJGaWVsZCgnbWF4T3ZlcmZsb3dSZXRyaWVzJywgJ21heE92ZXJmbG93UmV0cmllcycsIG51bGwsIDEpLFxuICAgICAgKSxcbiAgICApLFxuICBdXG5cbiAgY29uc3QgbW9kZWxzUGFuZWwgPSBbXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBGaXJzdCwga2V5OiAnbW9kZWxzJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdtb2RlbHNUaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnbW9kZWxzSW50cm8nKSksXG4gICAgICAuLi5wcm92aWRlclJvd3MsXG4gICAgICBlbnJpY2hOb3RlID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCBlbnJpY2hOb3RlKSA6IG51bGwsXG4gICAgKSxcbiAgXVxuXG4gIGNvbnN0IHZvbHVtZU5vdyA9IHR5cGVvZiB2YWx1ZS5ub3RpZnlWb2x1bWUgPT09ICdudW1iZXInID8gdmFsdWUubm90aWZ5Vm9sdW1lIDogMC42XG4gIGNvbnN0IHNvdW5kU2VsZWN0T3B0aW9ucyA9ICgpID0+IFtcbiAgICBlbCgnb3B0aW9uJywgeyBrZXk6IFNPVU5EX05PTkUsIHZhbHVlOiBTT1VORF9OT05FIH0sIHQoJ3NvdW5kTm9Tb3VuZCcpKSxcbiAgICBlbCgnb3B0Z3JvdXAnLCB7IGtleTogJ2J1aWx0aW4nLCBsYWJlbDogdCgnc291bmRQYWNrQnVpbHRpbicpIH0sXG4gICAgICBCVUlMVElOX1NPVU5EUy5tYXAoKHNvdW5kKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHNvdW5kLmlkLCB2YWx1ZTogc291bmQuaWQgfSwgdChzb3VuZC5sYWJlbEtleSkpKSksXG4gICAgLi4uU09VTkRfUEFDS1MubWFwKChwYWNrKSA9PiBlbCgnb3B0Z3JvdXAnLCB7IGtleTogcGFjay5wcmVmaXgsIGxhYmVsOiBwYWNrLm5hbWUgfSxcbiAgICAgIHBhY2tTb3VuZElkcyhwYWNrKS5tYXAoKGlkLCBpbmRleCkgPT4gZWwoJ29wdGlvbicsIHsga2V5OiBpZCwgdmFsdWU6IGlkIH0sIGAke3BhY2submFtZX0gJHtTdHJpbmcoaW5kZXggKyAxKS5wYWRTdGFydCgyLCAnMCcpfWApKSkpLFxuICBdXG4gIC8qKiBTb3VuZCBzZWxlY3RvcjsgcGlja2luZyBvbmUgcHJldmlld3MgaXQgKGFuZCB1bmxvY2tzIGF1ZGlvIGluIHRoZSBnZXN0dXJlKS4gKi9cbiAgY29uc3Qgc291bmRTZWxlY3QgPSAobGFiZWxLZXksIGZpZWxkLCBraW5kKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogeyAuLi5TLmNvbCwgbWFyZ2luQm90dG9tOiAxMCB9LCBrZXk6IGZpZWxkIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgIGVsKCdzZWxlY3QnLCB7XG4gICAgICBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCxcbiAgICAgIHZhbHVlOiB0eXBlb2YgdmFsdWVbZmllbGRdID09PSAnc3RyaW5nJyA/IHZhbHVlW2ZpZWxkXSA6IFNPVU5EX05PTkUsXG4gICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICB3cml0ZShmaWVsZCwgaWQpXG4gICAgICAgIHByaW1lU291bmQoKVxuICAgICAgICBpZiAoaWQgIT09IFNPVU5EX05PTkUpIHBsYXlTb3VuZChpZCwgdm9sdW1lTm93LCBraW5kKVxuICAgICAgfSxcbiAgICB9LCBzb3VuZFNlbGVjdE9wdGlvbnMoKSksXG4gIClcblxuICBjb25zdCBub3RpZmljYXRpb25zRW5hYmxlZCA9IHZhbHVlLm5vdGlmeUVuYWJsZWQgIT09IHVuZGVmaW5lZCA/ICEhdmFsdWUubm90aWZ5RW5hYmxlZCA6IGZhbHNlXG4gIGNvbnN0IG5vdGlmaWNhdGlvbnNQYW5lbCA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cEZpcnN0LCBrZXk6ICdjb2xvcnMnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ2NvbG9yc0dyb3VwJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdjb2xvcnNJbnRybycpKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdjb2xvcnNFbmFibGVkJywgJ2NvbG9yc0VuYWJsZWQnLCAnY29sb3JzRW5hYmxlZEhpbnQnLCB0cnVlKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3bywga2V5OiAnY29sb3JzMScgfSxcbiAgICAgICAgY29sb3JGaWVsZCgnZ3JlZW5MYWJlbCcsICdncmVlbicsICcjMjJDNTVFJywgZmFsc2UsIG51bGwpLFxuICAgICAgICBjb2xvckZpZWxkKCdhbWJlckxhYmVsJywgJ2FtYmVyJywgJyNGNTlFMEInLCBmYWxzZSwgbnVsbCksXG4gICAgICApLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvLCBrZXk6ICdjb2xvcnMyJyB9LFxuICAgICAgICBjb2xvckZpZWxkKCd3b3JraW5nTGFiZWwnLCAnd29ya2luZycsICcjM0I4MkY2JywgZmFsc2UsICd3b3JraW5nSGludCcpLFxuICAgICAgICBjb2xvckZpZWxkKCdibGFja0xhYmVsJywgJ2JsYWNrJywgJyMwMDAwMDAnLCB0cnVlLCAnYmxhY2tIaW50JyksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ25vdGlmeScgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnbm90aWZ5R3JvdXAnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ25vdGlmeUludHJvJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudG9nZ2xlLCBrZXk6ICdub3RpZnlFbmFibGVkJyB9LFxuICAgICAgICBlbChTd2l0Y2gsIHtcbiAgICAgICAgICBjaGVja2VkOiBub3RpZmljYXRpb25zRW5hYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICBsYWJlbDogdCgnbm90aWZ5RW5hYmxlZCcpLFxuICAgICAgICAgIG9uQ2hhbmdlOiBlbmFibGVOb3RpZmljYXRpb25zLFxuICAgICAgICB9KSxcbiAgICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudG9nZ2xlVGV4dCB9LFxuICAgICAgICAgIGVsKCdzcGFuJywgeyBzdHlsZTogUy50b2dnbGVMYWJlbCB9LCB0KCdub3RpZnlFbmFibGVkJykpLFxuICAgICAgICAgIGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIgfSB9LCB0KCdub3RpZnlFbmFibGVkSGludCcpKSxcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgICBub3RpZmljYXRpb25zRW5hYmxlZCAmJiBwZXJtaXNzaW9uID09PSAnZGVuaWVkJyA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmVycm9yIH0sIHQoJ3Blcm1pc3Npb25EZW5pZWQnKSkgOiBudWxsLFxuICAgICAgbm90aWZpY2F0aW9uc0VuYWJsZWQgJiYgcGVybWlzc2lvbiA9PT0gJ3Vuc3VwcG9ydGVkJyA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmVycm9yIH0sIHQoJ3Blcm1pc3Npb25VbnN1cHBvcnRlZCcpKSA6IG51bGwsXG4gICAgICBzd2l0Y2hGaWVsZCgnbm90aWZ5Rm9yZWdyb3VuZCcsICdub3RpZnlGb3JlZ3JvdW5kJywgJ25vdGlmeUZvcmVncm91bmRIaW50JywgZmFsc2UpLFxuICAgICAgc3dpdGNoRmllbGQoJ25vdGlmeVBlcnNpc3RlbnQnLCAnbm90aWZ5UGVyc2lzdGVudCcsICdub3RpZnlQZXJzaXN0ZW50SGludCcsIGZhbHNlKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdzb3VuZCcgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnc291bmRHcm91cCcpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnc291bmRJbnRybycpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZSwga2V5OiAndm9sdW1lJyB9LFxuICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IFMudG9nZ2xlTGFiZWwgfSwgdCgnbm90aWZ5Vm9sdW1lJykpLFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ3JhbmdlJywgbWluOiAwLCBtYXg6IDEwMCwgc3RlcDogNSwgZGlzYWJsZWQsXG4gICAgICAgICAgdmFsdWU6IE1hdGgucm91bmQodm9sdW1lTm93ICogMTAwKSwgJ2FyaWEtbGFiZWwnOiB0KCdub3RpZnlWb2x1bWUnKSxcbiAgICAgICAgICBzdHlsZTogeyBmbGV4OiAnMCAwIGF1dG8nLCB3aWR0aDogMTQwLCBhY2NlbnRDb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1icmFuZC1wcmltYXJ5KScsIGN1cnNvcjogJ3BvaW50ZXInIH0sXG4gICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB3cml0ZSgnbm90aWZ5Vm9sdW1lJywgTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAvIDEwMCksXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBtaW5XaWR0aDogMzYsIHRleHRBbGlnbjogJ3JpZ2h0JyB9IH0sIGAke01hdGgucm91bmQodm9sdW1lTm93ICogMTAwKX0lYCksXG4gICAgICApLFxuICAgICAgc291bmRTZWxlY3QoJ3NvdW5kRG9uZScsICdub3RpZnlEb25lU291bmQnLCAnZG9uZScpLFxuICAgICAgc291bmRTZWxlY3QoJ3NvdW5kUGVuZGluZycsICdub3RpZnlQZW5kaW5nU291bmQnLCAncGVuZGluZycpLFxuICAgICksXG4gIF1cblxuICBjb25zdCBwYW5lbHMgPSB7IGNvbXBhY3Rpb246IGNvbXBhY3Rpb25QYW5lbCwgbW9kZWxzOiBtb2RlbHNQYW5lbCwgbm90aWZpY2F0aW9uczogbm90aWZpY2F0aW9uc1BhbmVsIH1cblxuICByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMud3JhcCB9LFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgndGl0bGUnKSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdpbnRybycpKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50YWJzIH0sXG4gICAgICBlbChTZWdtZW50ZWRDb250cm9sLCB7XG4gICAgICAgIGlkOiBUQUJTX0lELFxuICAgICAgICB2YWx1ZTogdGFiLFxuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgeyB2YWx1ZTogJ2NvbXBhY3Rpb24nLCBsYWJlbDogdCgndGFiQ29tcGFjdGlvbicpIH0sXG4gICAgICAgICAgeyB2YWx1ZTogJ21vZGVscycsIGxhYmVsOiB0KCd0YWJNb2RlbHMnKSB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdub3RpZmljYXRpb25zJywgbGFiZWw6IHQoJ3RhYk5vdGlmaWNhdGlvbnMnKSB9LFxuICAgICAgICBdLFxuICAgICAgICBvbkNoYW5nZTogc2V0VGFiLFxuICAgICAgICBsYWJlbDogdCgndGl0bGUnKSxcbiAgICAgIH0pLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgaWQ6IGAke1RBQlNfSUR9LSR7dGFifS1wYW5lbGAsIHJvbGU6ICd0YWJwYW5lbCcgfSwgLi4uKHBhbmVsc1t0YWJdID8/IGNvbXBhY3Rpb25QYW5lbCkpLFxuICAgIG5vdGUgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5lcnJvciB9LCBub3RlKSA6IG51bGwsXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcGx5KGN0eCkge1xuICBjdHguZWZmZWN0KCgpID0+IGN0eC5sb2NhbGUucmVnaXN0ZXIoTE9DQUxFX05TLCB7IGVuLCB6aCB9KSwgJ21hbGtvLXByZWZzOiBsb2NhbGUgZGljdGlvbmFyaWVzJylcbiAgY29uc3QgdCA9IGN0eC5sb2NhbGUuYmluZChMT0NBTEVfTlMpXG4gIGNvbnN0IGZvcm0gPSBjdHguY29uZmlnRm9ybXMuZ2V0KE5TKVxuICBjb25zdCBtb2RlbEZvcm0gPSBjdHguY29uZmlnRm9ybXMuZ2V0KE1PREVMX05TKVxuICAvLyBUaGUgYXBwbGljYXRpb24gb25seSBhdXRvLW1vdW50cyBpdHMgb3duIFJlbW90ZSBzZWxlY3Rpb24sIHNvIGEgcGx1Z2luXG4gIC8vIHNoaXBzIGFuZCBtb3VudHMgaXRzIG93biBjb250cmlidXRpb24uXG4gIHRyeSB7XG4gICAgY29uc3QgZGlzcG9zZVJlbW90ZSA9IGF3YWl0IGN0eC5yZW1vdGUuJG1vdW50KFBST0JFX1JFTU9URSlcbiAgICBjdHguZWZmZWN0KCgpID0+ICgpID0+IHsgdm9pZCBkaXNwb3NlUmVtb3RlKCkgfSwgJ21hbGtvLXByZWZzOiBtYWxrb01vZGVscyByZW1vdGUnKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2RzaC1tYWxrby1wcmVmczogY291bGQgbm90IG1vdW50IHRoZSBtYWxrb01vZGVscyByZW1vdGUgXHUyMDE0JywgZXJyb3IpXG4gIH1cbiAgLy8gVGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoaW5kZXBlbmRlbnQgb2YgdGhlIHNldHRpbmdzIHBhZ2UpLlxuICBjdHguZWZmZWN0KCgpID0+IHN0YXJ0U3RhdHVzTGlnaHQoY3R4LCBmb3JtKSwgJ21hbGtvLXByZWZzOiB0YWIgc3RhdHVzIGxpZ2h0JylcbiAgY29uc3QgaW5qZWN0ZWQgPSAoKSA9PiAoe1xuICAgIGhvb2tzOiB7IHByZWZzOiBmb3JtLCBtb2RlbENhdGFsb2c6IG1vZGVsRm9ybSB9LFxuICAgIHNhdmU6IChmaWVsZCwgdmFsdWUpID0+IGZvcm0uc2V0KGZpZWxkLCB2YWx1ZSksXG4gICAgcHJvYmU6IChhcmdzKSA9PiB7XG4gICAgICAvLyBBIG5hbWVzcGFjZSBzZXJ2aWNlIGlzIHJlc29sdmVkIGJ5IGl0cyBmdWxsIGtleTsgcmVhZGluZyBpdCBvZmZcbiAgICAgIC8vIGBjdHgucmVtb3RlYCB3b3VsZCByZXF1aXJlIGFuIGBpbmplY3RgIHRoaXMgcGx1Z2luIGNhbm5vdCBkZWNsYXJlXG4gICAgICAvLyBiZWZvcmUgdGhlIGNvbnRyaWJ1dGlvbiBpcyBtb3VudGVkLlxuICAgICAgY29uc3QgcmVtb3RlID0gY3R4LmdldCgncmVtb3RlLm1hbGtvTW9kZWxzJylcbiAgICAgIGlmIChyZW1vdGUgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKCd0aGUgbWFsa29Nb2RlbHMgcmVtb3RlIGlzIG5vdCBhdmFpbGFibGUnKVxuICAgICAgcmV0dXJuIHJlbW90ZS5wcm9iZShhcmdzKVxuICAgIH0sXG4gICAgd3JpdGVNb2RlbHM6IChyb3V0ZUlkLCBtb2RlbHMpID0+IG1vZGVsRm9ybS5tdXRhdGUoW3sgb3A6ICdzZXQnLCBwYXRoOiBbJ3Byb3ZpZGVycycsIHJvdXRlSWQsICdtb2RlbHMnXSwgdmFsdWU6IG1vZGVscyB9XSksXG4gIH0pXG4gIGN0eC5zbG90cy5pbmplY3QoU0xPVCwgKCkgPT4gY3R4LnNsb3RzLnJlZ2lzdGVyKHtcbiAgICBuYW1lOiBTTE9ULFxuICAgIGlkOiBOUyxcbiAgICBvcmRlcjogNDUsXG4gICAgbGFiZWw6ICgpID0+IHQoJ3RpdGxlJyksXG4gICAgbG9jYWxlOiBMT0NBTEVfTlMsXG4gICAgaW5qZWN0OiBpbmplY3RlZCxcbiAgfSwgUHJlZnNTZWN0aW9uKSlcbn0iLCAiLyoqXG4gKiBkc2gtbWFsa28tcHJlZnMgXHUyMDE0IHNoYXJlZCBSZW1vdGUgd2lyZSBpZGVudGl0eS5cbiAqXG4gKiBUaGUgc2FtZSBpbnZvY2F0aW9uIGlzIHJlZ2lzdGVyZWQgb24gdGhlIEhvc3QgKGB0eXBlcnQucmVnaXN0ZXJgKSBhbmQgbW91bnRlZFxuICogaW4gdGhlIGJyb3dzZXIgKGBjdHgucmVtb3RlLiRtb3VudGApLCBzbyBib3RoIGhhbHZlcyBidWlsZCBpdCBmcm9tIGhlcmUuIFRoZVxuICogb25seSBkaWZmZXJlbmNlIGlzIHRoZSBzY2hlbWEgZmFjdG9yeSBlYWNoIHNpZGUgc3VwcGxpZXM6IHRoZSBIb3N0IGRlY29kZXNcbiAqIGFyZ3VtZW50cyB3aXRoIHpvZCwgd2hpbGUgdGhlIENsaWVudCBuZXZlciBkZWNvZGVzIGl0cyBvd24gYXJndW1lbnRzIGFuZCBvbmx5XG4gKiBuZWVkcyBhIGZhY3RvcnkgdG8gc2F0aXNmeSB0aGUgc3RyaWN0LWNvZGVjIGNvbnRyYWN0LlxuICovXG5cbi8qKiBXaXJlIGlkZW50aXR5IHNoYXJlZCBieSB0aGUgSG9zdCBtYW5pZmVzdCBhbmQgdGhlIENsaWVudCBjb250cmlidXRpb24uICovXG5leHBvcnQgY29uc3QgUFJPQkVfSURFTlRJVFkgPSB7XG4gIGlkOiAnZHNoLW1hbGtvLXByZWZzI21hbGtvTW9kZWxzL3Byb2JlJyxcbiAgc2VydmljZTogJ21hbGtvTW9kZWxzJyxcbiAgbmFtZXNwYWNlOiAnbWFsa29Nb2RlbHMnLFxuICBtZXRob2Q6ICdwcm9iZScsXG4gIGFyZ3NUeXBlU3ltYm9sOiAnZHNoLW1hbGtvLXByZWZzI1Byb2JlQXJncycsXG4gIHJlc3VsdFR5cGVTeW1ib2w6ICdkc2gtbWFsa28tcHJlZnMjUHJvYmVSZXN1bHQnLFxufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBgbWFsa29Nb2RlbHMvcHJvYmUoYXJncylgIGRpcmVjdCBpbnZvY2F0aW9uLlxuICogQHBhcmFtIHsoKSA9PiB7IHBhcnNlOiAodmFsdWU6IHVua25vd24pID0+IHVua25vd24gfX0gY3JlYXRlQXJncyBzY2hlbWEgZmFjdG9yeSBmb3IgdGhlIHNpbmdsZSBgYXJnc2AgcGFyYW1ldGVyLlxuICogQHBhcmFtIHsoKSA9PiB7IHBhcnNlOiAodmFsdWU6IHVua25vd24pID0+IHVua25vd24gfX0gY3JlYXRlUmVzdWx0IHNjaGVtYSBmYWN0b3J5IGZvciB0aGUgcmVzdWx0LlxuICogQHJldHVybnMge29iamVjdH0gdGhlIGludm9jYXRpb24gZGVzY3JpcHRvciwgaWRlbnRpY2FsIG9uIGJvdGggZmFjZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9iZUludm9jYXRpb24oY3JlYXRlQXJncywgY3JlYXRlUmVzdWx0KSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IFBST0JFX0lERU5USVRZLmlkLFxuICAgIHNlcnZpY2U6IFBST0JFX0lERU5USVRZLnNlcnZpY2UsXG4gICAgbmFtZXNwYWNlOiBQUk9CRV9JREVOVElUWS5uYW1lc3BhY2UsXG4gICAgbWV0aG9kOiBQUk9CRV9JREVOVElUWS5tZXRob2QsXG4gICAgaW52b2NhdGlvbjogeyBraW5kOiAnZGlyZWN0JyB9LFxuICAgIHBhcmFtZXRlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2FyZ3MnLFxuICAgICAgICB3aXJlOiAnYXJncycsXG4gICAgICAgIHNvdXJjZTogJ2pzb24nLFxuICAgICAgICBjb2RlYzogeyBtb2RlOiAnc3RyaWN0JywgdHlwZVN5bWJvbDogUFJPQkVfSURFTlRJVFkuYXJnc1R5cGVTeW1ib2wsIGNyZWF0ZTogY3JlYXRlQXJncyB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHJlc3VsdDogeyBtb2RlOiAnc3RyaWN0JywgdHlwZVN5bWJvbDogUFJPQkVfSURFTlRJVFkucmVzdWx0VHlwZVN5bWJvbCwgY3JlYXRlOiBjcmVhdGVSZXN1bHQgfSxcbiAgfVxufSIsICIvKipcbiAqIFRoZSBvZmZpY2lhbCBEZWVwU2VlayB3aGFsZSBtYXJrLCByZWNvbG9yZWQuXG4gKlxuICogU2hhcGUgdGFrZW4gZnJvbSB0aGUgb2ZmaWNpYWwgZmF2aWNvbiBhcyB1c2VkIGJ5IGRzaC1ub3RpY2UtY2VudGVyIChNSVQpO1xuICogb25seSB0aGUgZmlsbCBjb2xvciBpcyBvdXJzLiBLZXB0IGhlcmUgc28gdGhlIHRhYiBpY29uIHJlZmxlY3RzIHRoZSBzZXNzaW9uXG4gKiBzdGF0ZSB3aXRob3V0IGZldGNoaW5nIGFuZCBtdXRhdGluZyB0aGUgc2VydmVkIC9mYXZpY29uLnN2Zy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciBDU1MgY29sb3IgZm9yIHRoZSBmaWxsLlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdGFuZGFsb25lIFNWRyBkb2N1bWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoYWxlU3ZnKGNvbG9yKSB7XG4gIHJldHVybiBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiNTBcXFwiIGhlaWdodD1cXFwiNTBcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MCA1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PHBhdGggZD1cXFwiTTQ4LjgzNTQgMTAuMDQ3OUM0OC4zMjMyIDkuNzkxOTkgNDguMTAyNSAxMC4yNzk4IDQ3LjgwMzIgMTAuNTI3OEM0Ny43MDA3IDEwLjYwNzkgNDcuNjE0MyAxMC43MTE5IDQ3LjUyNzMgMTAuODA3NkM0Ni43NzkzIDExLjYyNCA0NS45MDQ4IDEyLjE1OTcgNDQuNzYyMiAxMi4wOTU3QzQzLjA5MjMgMTIgNDEuNjY2IDEyLjUzNTYgNDAuNDA1OCAxMy44Mzk4QzQwLjEzNzcgMTIuMjMxOSAzOS4yNDc2IDExLjI3MiAzNy44OTI2IDEwLjY1NThDMzcuMTgzNiAxMC4zMzU5IDM2LjQ2NjggMTAuMDE1NiAzNS45NzAyIDkuMzE5ODJDMzUuNjIzNSA4LjgyMzczIDM1LjUyOTMgOC4yNzE5NyAzNS4zNTYgNy43Mjc1NEMzNS4yNDU2IDcuMzk5OSAzNS4xMzUzIDcuMDYzOTYgMzQuNzY1MSA3LjAwNzgxQzM0LjM2MzMgNi45NDM4NSAzNC4yMDU2IDcuMjg3NiAzNC4wNDc5IDcuNTc1NjhDMzMuNDE4IDguNzUxOTUgMzMuMTczMyAxMC4wNDc5IDMzLjE5NzMgMTEuMzU5OUMzMy4yNTI0IDE0LjMxMiAzNC40NzM2IDE2LjY2NDEgMzYuODk5OSAxOC4zMzU5QzM3LjE3NTggMTguNTI3OCAzNy4yNDY2IDE4LjcxOTcgMzcuMTU5NyAxOUMzNi45OTQ2IDE5LjU3NTcgMzYuNzk3NCAyMC4xMzU3IDM2LjYyNCAyMC43MTE5QzM2LjUxMzcgMjEuMDgwMSAzNi4zNDg2IDIxLjE1OTcgMzUuOTYyNCAyMUMzNC42MzA5IDIwLjQzMjEgMzMuNDgxIDE5LjU5MTggMzIuNDY0NCAxOC41NzU3QzMwLjczOTMgMTYuODcyMSAyOS4xNzkyIDE0Ljk5MTcgMjcuMjMzNCAxMy41MkMyNi43NzY0IDEzLjE3NTggMjYuMzE5MyAxMi44NTYgMjUuODQ2NyAxMi41NTE4QzIzLjg2MTggMTAuNTg0IDI2LjEwNjkgOC45Njc3NyAyNi42MjcgOC43NzU4OEMyNy4xNzA0IDguNTc1NjggMjYuODE1OSA3Ljg4NzcgMjUuMDU5MSA3Ljg5NkMyMy4zMDIyIDcuOTAzODEgMjEuNjk1MyA4LjUwMzkxIDE5LjY0NyA5LjMwMzcxQzE5LjM0NzcgOS40MjM4MyAxOS4wMzIyIDkuNTExNzIgMTguNzA5NSA5LjU4Mzk4QzE2Ljg1MDEgOS4yMjM2MyAxNC45MTk5IDkuMTQzNTUgMTIuOTAzMyA5LjM3NTk4QzkuMTA1OTYgOS44MDc2MiA2LjA3Mjc1IDExLjYzOTYgMy44NDMyNiAxNC43NjgxQzEuMTY0NTUgMTguNTI3OCAwLjUzNDE4IDIyLjc5OTggMS4zMDY2NCAyNy4yNTU5QzIuMTE3NjggMzEuOTUyMSA0LjQ2NTgyIDM1LjgzOTggOC4wNzM3MyAzOC44Nzk5QzExLjgxNTkgNDIuMDMyMiAxNi4xMjU1IDQzLjU3NjIgMjEuMDQxIDQzLjI4MDNDMjQuMDI2OSA0My4xMDQgMjcuMzUxNiA0Mi42OTYzIDMxLjEwMTYgMzkuNDU2MUMzMi4wNDY5IDM5LjkzNiAzMy4wMzk2IDQwLjEyNzkgMzQuNjg2IDQwLjI3MkMzNS45NTQ2IDQwLjM5MjEgMzcuMTc1OCA0MC4yMDggMzguMTIxMSA0MC4wMDc4QzM5LjYwMjEgMzkuNjg4IDM5LjQ5OTUgMzguMjg4MSAzOC45NjM5IDM4LjAzMjJDMzQuNjIzIDM1Ljk2NzggMzUuNTc2MiAzNi44MDgxIDM0LjcxIDM2LjEyNzlDMzYuOTE1NSAzMy40NjM5IDQwLjI0MDIgMzAuNjk1OCA0MS41NCAyMS43MjhDNDEuNjQyNiAyMS4wMTYxIDQxLjU1NTcgMjAuNTY3OSA0MS41NCAxOS45OTE3QzQxLjUzMjIgMTkuNjM5NiA0MS42MTA4IDE5LjUwMzkgNDIuMDA0OSAxOS40NjM5QzQzLjA5MjMgMTkuMzM1OSA0NC4xNDc5IDE5LjAzMTcgNDUuMTE2NyAxOC40ODc4QzQ3LjkyOTIgMTYuOTE5OSA0OS4wNjQgMTQuMzQzOCA0OS4zMzE1IDExLjI1NTlDNDkuMzcxMSAxMC43ODM3IDQ5LjMyMzcgMTAuMjk1OSA0OC44MzU0IDEwLjA0NzlaTTI0LjMyNjIgMzcuODM5OEMyMC4xMTk2IDM0LjQ2MzkgMTguMDc5MSAzMy4zNTIxIDE3LjIzNTggMzMuMzk5OUMxNi40NDgyIDMzLjQ0ODIgMTYuNTg5OCAzNC4zNjgyIDE2Ljc2MzIgMzQuOTY3OEMxNi45NDQzIDM1LjU2MDEgMTcuMTgxMiAzNS45NjgzIDE3LjUxMTcgMzYuNDg3OEMxNy43NDAyIDM2LjgzMiAxNy44OTc5IDM3LjM0NDIgMTcuMjgzMiAzNy43MjhDMTUuOTI4MiAzOC41ODQgMTMuNTcyOCAzNy40Mzk5IDEzLjQ2MjQgMzcuMzgzOEMxMC43MjA3IDM1LjczNTggOC40MjgyMiAzMy41NjAxIDYuODEzNDggMzAuNTg0QzUuMjUzNDIgMjcuNzE5NyA0LjM0NzY2IDI0LjY0NzkgNC4xOTc3NSAyMS4zNjc3QzQuMTU4MiAyMC41NzU3IDQuMzg2NzIgMjAuMjk1OSA1LjE1ODY5IDIwLjE1MTlDNi4xNzUyOSAxOS45NiA3LjIyMzE0IDE5LjkxOTkgOC4yMzkyNiAyMC4wNzE4QzEyLjUzMjcgMjAuNzExOSAxNi4xODg1IDIyLjY3MTkgMTkuMjUyOSAyNS43NzU5QzIxLjAwMiAyNy41NDM5IDIyLjMyNTIgMjkuNjU1OCAyMy42ODg1IDMxLjcyMDJDMjUuMTM3NyAzMy45MTIxIDI2LjY5NzggMzYgMjguNjgzMSAzNy43MTE5QzI5LjM4NDMgMzguMzEyIDI5Ljk0MzQgMzguNzY4MSAzMC40NzkgMzkuMTA0QzI4Ljg2NDMgMzkuMjg4MSAyNi4xNjk5IDM5LjMyODEgMjQuMzI2MiAzNy44Mzk4Wk0yNi4zNDMzIDI0LjYwMDFDMjYuMzQzMyAyNC4yNDggMjYuNjE5MSAyMy45Njc4IDI2Ljk2NTggMjMuOTY3OEMyNy4wNDQ0IDIzLjk2NzggMjcuMTE1MiAyMy45ODM5IDI3LjE3ODIgMjQuMDA3OEMyNy4yNjUxIDI0LjA0IDI3LjM0MzggMjQuMDg3OSAyNy40MDY3IDI0LjE2MDJDMjcuNTE3MSAyNC4yNzIgMjcuNTgwMSAyNC40MzIxIDI3LjU4MDEgMjQuNjAwMUMyNy41ODAxIDI0Ljk1MjEgMjcuMzA0MiAyNS4yMzE5IDI2Ljk1NzUgMjUuMjMxOUMyNi42MTA4IDI1LjIzMTkgMjYuMzQzMyAyNC45NTIxIDI2LjM0MzMgMjQuNjAwMVpNMzIuNjA2NCAyNy44Nzk5QzMyLjIwNDYgMjguMDQ3OSAzMS44MDI3IDI4LjE5MTkgMzEuNDE2NSAyOC4yMDhDMzAuODE3OSAyOC4yMzk3IDMwLjE2NDEgMjcuOTkyMiAyOS44MDk2IDI3LjY4OEMyOS4yNTgzIDI3LjIxNTggMjguODY0MyAyNi45NTIxIDI4LjY5ODcgMjYuMTI3OUMyOC42Mjc5IDI1Ljc3NTkgMjguNjY3NSAyNS4yMzE5IDI4LjczMDUgMjQuOTE5OUMyOC44NzIxIDI0LjI0OCAyOC43MTQ0IDIzLjgxNTkgMjguMjQ5NSAyMy40MjM4QzI3Ljg3MTYgMjMuMTA0IDI3LjM5MTEgMjMuMDE2MSAyNi44NjMzIDIzLjAxNjFDMjYuNjY2IDIzLjAxNjEgMjYuNDg0OSAyMi45Mjc3IDI2LjM1MTEgMjIuODU2QzI2LjEzMDQgMjIuNzQ0MSAyNS45NDkyIDIyLjQ2MzkgMjYuMTIyNiAyMi4xMjAxQzI2LjE3NzcgMjIuMDA3OCAyNi40NDU4IDIxLjczNTggMjYuNTA4OCAyMS42ODhDMjcuMjI1NiAyMS4yNzIgMjguMDUyNyAyMS40MDc3IDI4LjgxNjkgMjEuNzE5N0MyOS41MjU5IDIyLjAxNjEgMzAuMDYxNSAyMi41NjAxIDMwLjgzNCAyMy4zMjgxQzMxLjYyMTYgMjQuMjU1OSAzMS43NjMyIDI0LjUxMTcgMzIuMjEyNCAyNS4yMDhDMzIuNTY2OSAyNS43NTIgMzIuODkwMSAyNi4zMTIgMzMuMTEwNCAyNi45NTIxQzMzLjI0NDYgMjcuMzUyMSAzMy4wNzEzIDI3LjY4MDIgMzIuNjA2NCAyNy44Nzk5WlxcXCIgZmlsbD1cXFwiXCIgKyBjb2xvciArIFwiXFxcIiBmaWxsLW9wYWNpdHk9XFxcIjFcXFwiIGZpbGwtcnVsZT1cXFwibm9uemVyb1xcXCIvPjwvc3ZnPlwiXG59XG4iLCAiLyoqXG4gKiBkc2gtbWFsa28tcHJlZnMgXHUyMDE0IHRhYiBzdGF0dXMgbGlnaHQgKyBicm93c2VyIG5vdGlmaWNhdGlvbnMgKGJyb3dzZXIgaGFsZikuXG4gKlxuICogUG9ydGVkIGZyb20gZHNoLW5vdGljZS1jZW50ZXIgKE1JVCkuIFRoZSB0YWIgZmF2aWNvbiB0dXJucyBncmVlbiB3aGVuIGEgbWFpblxuICogc2Vzc2lvbiBmaW5pc2hlZCB3aGlsZSB5b3Ugd2VyZSBhd2F5IGFuZCBhbWJlciB3aGlsZSBhIHNlc3Npb24gYXdhaXRzIGFuXG4gKiBpbnRlcmFjdGlvbiAoYW1iZXIgd2lucyksIGFuZCB0aGUgYnJvd3NlciByYWlzZXMgYSBub3RpZmljYXRpb24gb24gY29tcGxldGlvblxuICogb3Igb24gYSBuZXcgcGVuZGluZyBxdWVzdGlvbiAvIGFwcHJvdmFsIC8gcGxhbiByZXZpZXcuXG4gKlxuICogSXQgcmVhZHMgdGhlIG9mZmljaWFsIGNsaWVudCBzaWduYWxzIFx1MjAxNCBgc2Vzc2lvbnNgIHJvd3MgcGx1cyB0aGUgb3B0aW9uYWxcbiAqIGB1aVNlc3Npb24uc2Vzc2lvblN0YXR1c2Agc3RvcmUgXHUyMDE0IGFuZCB0aGUgYG1hbGtvLXByZWZzYCBjb25maWcgZm9ybS4gSXQgb3duc1xuICogbm8gc3RhdGUgYmV5b25kIGluLW1lbW9yeSBib29ra2VlcGluZyBhbmQgcmVzdG9yZXMgdGhlIG9yaWdpbmFsIGZhdmljb24gb25cbiAqIHRlYXJkb3duLlxuICovXG5pbXBvcnQgeyB3aGFsZVN2ZyB9IGZyb20gJy4vd2hhbGUudHMnXG5cbi8qKiBTZXR0aW5ncy9sb2NhbGUgbmFtZXNwYWNlIHNoYXJlZCB3aXRoIHRoZSBzZXR0aW5ncyBwYWdlLiAqL1xuZXhwb3J0IGNvbnN0IExPQ0FMRV9OUyA9ICdzZXR0aW5ncy5tYWxrby1wcmVmcydcblxuY29uc3QgREVGQVVMVF9IUkVGID0gJy9mYXZpY29uLnN2ZydcbmNvbnN0IERFRkFVTFRfR1JFRU4gPSAnIzIyQzU1RSdcbmNvbnN0IERFRkFVTFRfQU1CRVIgPSAnI0Y1OUUwQidcbmNvbnN0IERFRkFVTFRfV09SS0lORyA9ICcjM0I4MkY2J1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuLyoqIFRvb2wtbmFtZSBjYXA6IGxvbmdlciBuYW1lcyB3b3VsZCBibG93IHRoZSBub3RpZmljYXRpb24gYm9keSdzIHNpbmdsZSBsaW5lLiAqL1xuY29uc3QgVE9PTF9OQU1FX0xJTUlUID0gMzJcblxuLyoqXG4gKiBCcm93c2VyIG5vdGlmaWNhdGlvbiBhdmFpbGFiaWxpdHkuXG4gKiBAcmV0dXJucyB7J2dyYW50ZWQnIHwgJ2RlbmllZCcgfCAnZGVmYXVsdCcgfCAndW5zdXBwb3J0ZWQnfVxuICovXG5mdW5jdGlvbiBub3RpZmljYXRpb25TdXBwb3J0KCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdzdHJpbmcnKSByZXR1cm4gJ3Vuc3VwcG9ydGVkJ1xuICAgIHJldHVybiBOb3RpZmljYXRpb24ucGVybWlzc2lvblxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gJ3Vuc3VwcG9ydGVkJ1xuICB9XG59XG5cbi8qKiBBc2sgZm9yIHBlcm1pc3Npb24gKG9ubHkgd2hlbiB0aGUgYnJvd3NlciBoYXMgbm90IGRlY2lkZWQgeWV0KS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ3Vuc3VwcG9ydGVkJylcbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdkZWZhdWx0JykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShOb3RpZmljYXRpb24ucGVybWlzc2lvbilcbiAgICBjb25zdCBhbnN3ZXIgPSBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKVxuICAgIHJldHVybiBhbnN3ZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYW5zd2VyLnRoZW4gPT09ICdmdW5jdGlvbicgPyBhbnN3ZXIgOiBQcm9taXNlLnJlc29sdmUoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24pXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm90aWZpY2F0aW9uU3VwcG9ydCgpKVxuICB9XG59XG5cbi8qKiBDdXJyZW50IHBlcm1pc3Npb24gc3RyaW5nLCBmb3IgdGhlIHNldHRpbmdzIHBhZ2UuICovXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudE5vdGlmaWNhdGlvblBlcm1pc3Npb24oKSB7XG4gIHJldHVybiBub3RpZmljYXRpb25TdXBwb3J0KClcbn1cblxuLyoqIFN0YXRpYyByb3V0ZSB0aGUgSG9zdCBzZXJ2ZXMgdGhlIGJ1bmRsZWQgc291bmRzIGZyb20uICovXG5leHBvcnQgY29uc3QgU09VTkRfUk9VVEUgPSAnL21hbGtvLXByZWZzLXNvdW5kcydcbi8qKiBTZW50aW5lbCBtZWFuaW5nIFwicGxheSBub3RoaW5nXCIuICovXG5leHBvcnQgY29uc3QgU09VTkRfTk9ORSA9ICdub25lJ1xuLyoqIEJ1aWx0LWluIHN5bnRoZXNpemVkIGNoaW1lcyAobm8gYXNzZXQgZmlsZSBuZWVkZWQpLiAqL1xuZXhwb3J0IGNvbnN0IEJVSUxUSU5fU09VTkRTID0gW1xuICB7IGlkOiAnYnVpbHRpbi11cCcsIGxhYmVsS2V5OiAnc291bmRCdWlsdGluVXAnIH0sXG4gIHsgaWQ6ICdidWlsdGluLWRvd24nLCBsYWJlbEtleTogJ3NvdW5kQnVpbHRpbkRvd24nIH0sXG5dXG4vKiogb3BlbmNvZGUgc291bmQgcGFja3MgYnVuZGxlZCB1bmRlciBgYXNzZXRzL2F1ZGlvYCAoTUlUKS4gKi9cbmV4cG9ydCBjb25zdCBTT1VORF9QQUNLUyA9IFtcbiAgeyBuYW1lOiAnQWxlcnQnLCBwcmVmaXg6ICdhbGVydCcsIGNvdW50OiAxMCB9LFxuICB7IG5hbWU6ICdCaXAtYm9wJywgcHJlZml4OiAnYmlwLWJvcCcsIGNvdW50OiAxMCB9LFxuICB7IG5hbWU6ICdTdGFwbGVib3BzJywgcHJlZml4OiAnc3RhcGxlYm9wcycsIGNvdW50OiA3IH0sXG4gIHsgbmFtZTogJ05vcGUnLCBwcmVmaXg6ICdub3BlJywgY291bnQ6IDEyIH0sXG4gIHsgbmFtZTogJ1l1cCcsIHByZWZpeDogJ3l1cCcsIGNvdW50OiA2IH0sXG5dXG5cbi8qKiBTb3VuZCBpZHMgb2Ygb25lIHBhY2ssIGluIGRpc3BsYXkgb3JkZXIuICovXG5leHBvcnQgZnVuY3Rpb24gcGFja1NvdW5kSWRzKHBhY2spIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHBhY2suY291bnQgfSwgKF8sIGkpID0+IGAke3BhY2sucHJlZml4fS0ke1N0cmluZyhpICsgMSkucGFkU3RhcnQoMiwgJzAnKX1gKVxufVxuXG4vKiogQ2xhbXAgYW4gYXJiaXRyYXJ5IHZvbHVtZSB0byAwXHUyMDEzMSAoZGVmYXVsdCAwLjYpLiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVm9sdW1lKHZvbHVtZSkge1xuICBpZiAodHlwZW9mIHZvbHVtZSAhPT0gJ251bWJlcicgfHwgIU51bWJlci5pc0Zpbml0ZSh2b2x1bWUpKSByZXR1cm4gMC42XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2b2x1bWUsIDApLCAxKVxufVxuXG4vKiogU2hhcmVkIEF1ZGlvQ29udGV4dCBmb3IgdGhlIHN5bnRoZXNpemVkIGNoaW1lcy4gKi9cbmxldCBjaGltZUNvbnRleHRcbmZ1bmN0aW9uIGNoaW1lQXVkaW9Db250ZXh0KCkge1xuICBpZiAoY2hpbWVDb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiBjaGltZUNvbnRleHRcbiAgdHJ5IHtcbiAgICBjb25zdCBDdG9yID0gd2luZG93LkF1ZGlvQ29udGV4dCA/PyB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG4gICAgY2hpbWVDb250ZXh0ID0gQ3RvciA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG5ldyBDdG9yKClcbiAgfSBjYXRjaCB7XG4gICAgY2hpbWVDb250ZXh0ID0gbnVsbFxuICB9XG4gIHJldHVybiBjaGltZUNvbnRleHRcbn1cblxuLyoqIFJlc3VtZSB0aGUgYXVkaW8gY29udGV4dCBpbnNpZGUgYSB1c2VyIGdlc3R1cmUgKGF1dG9wbGF5IHBvbGljeSkuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbWVTb3VuZCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhdWRpbyA9IGNoaW1lQXVkaW9Db250ZXh0KClcbiAgICBpZiAoYXVkaW8gIT09IG51bGwgJiYgYXVkaW8uc3RhdGUgPT09ICdzdXNwZW5kZWQnKSBhdWRpby5yZXN1bWU/LigpXG4gIH0gY2F0Y2ggeyAvKiBpZ25vcmUgKi8gfVxufVxuXG4vKiogU3ludGhlc2l6ZWQgY2hpbWU6IHVwIChkb25lKSBvciBkb3duIChwZW5kaW5nKS4gKi9cbmZ1bmN0aW9uIHBsYXlDaGltZShraW5kLCB2b2x1bWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsZXZlbCA9IG5vcm1hbGl6ZVZvbHVtZSh2b2x1bWUpXG4gICAgaWYgKGxldmVsIDw9IDApIHJldHVyblxuICAgIGNvbnN0IGF1ZGlvID0gY2hpbWVBdWRpb0NvbnRleHQoKVxuICAgIGlmIChhdWRpbyA9PT0gbnVsbCkgcmV0dXJuXG4gICAgaWYgKGF1ZGlvLnN0YXRlID09PSAnc3VzcGVuZGVkJykgYXVkaW8ucmVzdW1lPy4oKVxuICAgIGNvbnN0IG5vdGVzID0ga2luZCA9PT0gJ2RvbmUnID8gWzY2MCwgOTkwXSA6IFs4ODAsIDU4N11cbiAgICBjb25zdCBiYXNlID0gYXVkaW8uY3VycmVudFRpbWVcbiAgICBub3Rlcy5mb3JFYWNoKChmcmVxdWVuY3ksIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvc2NpbGxhdG9yID0gYXVkaW8uY3JlYXRlT3NjaWxsYXRvcigpXG4gICAgICBjb25zdCBnYWluID0gYXVkaW8uY3JlYXRlR2FpbigpXG4gICAgICBjb25zdCBzdGFydCA9IGJhc2UgKyBpbmRleCAqIDAuMTRcbiAgICAgIG9zY2lsbGF0b3IudHlwZSA9ICdzaW5lJ1xuICAgICAgb3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSBmcmVxdWVuY3lcbiAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjAwMDEsIHN0YXJ0KVxuICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4xMiAqIGxldmVsLCBzdGFydCArIDAuMDIpXG4gICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMDEsIHN0YXJ0ICsgMC4xOClcbiAgICAgIG9zY2lsbGF0b3IuY29ubmVjdChnYWluKVxuICAgICAgZ2Fpbi5jb25uZWN0KGF1ZGlvLmRlc3RpbmF0aW9uKVxuICAgICAgb3NjaWxsYXRvci5zdGFydChzdGFydClcbiAgICAgIG9zY2lsbGF0b3Iuc3RvcChzdGFydCArIDAuMilcbiAgICB9KVxuICB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbn1cblxuLyoqIEVsZW1lbnQgY3VycmVudGx5IHBsYXlpbmcsIHNvIG92ZXJsYXBwaW5nIHNvdW5kcyBkbyBub3Qgc3RhY2suICovXG5sZXQgYWN0aXZlU291bmQgPSBudWxsXG5mdW5jdGlvbiBzdG9wU291bmQoKSB7XG4gIGNvbnN0IGF1ZGlvID0gYWN0aXZlU291bmRcbiAgYWN0aXZlU291bmQgPSBudWxsXG4gIGlmIChhdWRpbyA9PT0gbnVsbCkgcmV0dXJuXG4gIHRyeSB7IGF1ZGlvLnBhdXNlKCk7IGF1ZGlvLmN1cnJlbnRUaW1lID0gMCB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbn1cblxuLyoqXG4gKiBQbGF5IGEgc291bmQgaWQ6IGBidWlsdGluLSpgIGlzIHN5bnRoZXNpemVkLCBhIHBhY2sgaWQgc3RyZWFtcyB0aGUgSG9zdCdzXG4gKiBidW5kbGVkIG1wMyBhbmQgZmFsbHMgYmFjayB0byB0aGUgc3ludGhlc2l6ZWQgY2hpbWUgd2hlbiB1bmF2YWlsYWJsZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBzb3VuZCBpZCAoYG5vbmVgID0gc2lsZW5jZSkuXG4gKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lIDBcdTIwMTMxLlxuICogQHBhcmFtIHsnZG9uZScgfCAncGVuZGluZyd9IGtpbmQgZHJpdmVzIHRoZSBmYWxsYmFjayBjaGltZSdzIHBpdGNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGxheVNvdW5kKGlkLCB2b2x1bWUsIGtpbmQpIHtcbiAgY29uc3QgbGV2ZWwgPSBub3JtYWxpemVWb2x1bWUodm9sdW1lKVxuICBpZiAobGV2ZWwgPD0gMCkgcmV0dXJuXG4gIGNvbnN0IG5hbWUgPSB0eXBlb2YgaWQgPT09ICdzdHJpbmcnID8gaWQgOiAnJ1xuICBpZiAobmFtZSA9PT0gJycgfHwgbmFtZSA9PT0gU09VTkRfTk9ORSkgcmV0dXJuXG4gIHN0b3BTb3VuZCgpXG4gIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ2J1aWx0aW4tJykpIHtcbiAgICBwbGF5Q2hpbWUobmFtZSA9PT0gJ2J1aWx0aW4tdXAnID8gJ2RvbmUnIDogbmFtZSA9PT0gJ2J1aWx0aW4tZG93bicgPyAncGVuZGluZycgOiBraW5kLCBsZXZlbClcbiAgICByZXR1cm5cbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKFNPVU5EX1JPVVRFICsgJy8nICsgbmFtZSArICcubXAzJylcbiAgICBhdWRpby52b2x1bWUgPSBsZXZlbFxuICAgIGFjdGl2ZVNvdW5kID0gYXVkaW9cbiAgICBjb25zdCBwbGF5ZWQgPSBhdWRpby5wbGF5KClcbiAgICBpZiAocGxheWVkICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBsYXllZC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGxheWVkLmNhdGNoKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVNvdW5kID09PSBhdWRpbykgYWN0aXZlU291bmQgPSBudWxsXG4gICAgICAgIHBsYXlDaGltZShraW5kLCBsZXZlbClcbiAgICAgIH0pXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICBwbGF5Q2hpbWUoa2luZCwgbGV2ZWwpXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCB0aGUgc2Vzc2lvbiBzaWduYWxzIGFuZCBkcml2ZSB0aGUgdGFiIGljb24gKyBub3RpZmljYXRpb25zLlxuICogQHBhcmFtIHtvYmplY3R9IGN0eCBjbGllbnQgcGx1Z2luIGNvbnRleHQgKG5lZWRzIGBzZXNzaW9uc2AsIGBsb2NhbGVgKS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmb3JtIHRoZSBgbWFsa28tcHJlZnNgIGNvbmZpZyBmb3JtIChzbmFwc2hvdCArIHN1YnNjcmliZSkuXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH0gZGlzcG9zZXIgcmVzdG9yaW5nIHRoZSBmYXZpY29uIGFuZCByZW1vdmluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0YXR1c0xpZ2h0KGN0eCwgZm9ybSkge1xuICBjb25zdCBsaXN0ID0gY3R4LnNlc3Npb25zLmxpc3RcbiAgY29uc3QgbG9jYWxlID0gKCkgPT4gY3R4LmxvY2FsZS5iaW5kKExPQ0FMRV9OUylcbiAgLyoqIE9wdGlvbmFsIG9mZmljaWFsIHN0YXR1cyBzb3VyY2UgKDAuMS43Kyk7IHJvd3Mga2VlcCB0aGVpciBsZWdhY3kgZmllbGRzIG90aGVyd2lzZS4gKi9cbiAgbGV0IHN0YXR1c1NvdXJjZVxuICAvKiogRGVkdXBlIGtleXMgKGBzZXNzaW9uSWQ6a2luZGApIGFscmVhZHkgcXVldWVkLiAqL1xuICBjb25zdCBub3RpZmllZCA9IG5ldyBTZXQoKVxuICAvKiogQWdncmVnYXRpb24gd2luZG93IHNvIGEgYnVyc3Qgb2YgdHJhbnNpdGlvbnMgYmVjb21lcyBvbmUgbm90aWZpY2F0aW9uLiAqL1xuICBjb25zdCBub3RpZnlRdWV1ZSA9IG5ldyBNYXAoKVxuICBsZXQgbm90aWZ5VGltZXJcbiAgLyoqIExhc3Qgb2JzZXJ2ZWQgY29tcGxldGlvbiBzdGF0ZSBwZXIgc2Vzc2lvbiAoZmFsc2UgXHUyMTkyIHRydWUgZWRnZSBkZXRlY3Rpb24pLiAqL1xuICBjb25zdCBwcmV2Q29tcGxldGVkID0gbmV3IE1hcCgpXG4gIC8qKiBSdW4gc3RhcnQgcGVyIHNlc3Npb24sIHRoZW4gdGhlIGxhc3QgcnVuIGR1cmF0aW9uIChtcykuICovXG4gIGNvbnN0IHJ1blN0YXJ0ZWRBdCA9IG5ldyBNYXAoKVxuICBjb25zdCBsYXN0UnVuTXMgPSBuZXcgTWFwKClcbiAgbGV0IHByZXZQZW5kaW5nID0gbmV3IFNldCgpXG4gIGxldCBwZW5kaW5nU2VlbiA9IGZhbHNlXG5cbiAgLyoqIFJlYWxseSBpbiB0aGUgZm9yZWdyb3VuZDogdGFiIHZpc2libGUgQU5EIHdpbmRvdyBmb2N1c2VkLiAqL1xuICBjb25zdCBpc0ZvcmVncm91bmQgPSAoKSA9PiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJyAmJiBkb2N1bWVudC5oYXNGb2N1cygpXG5cbiAgLyoqIFJlYWQgdGhlIG5vdGlmaWNhdGlvbi9jb2xvciBwcmVmZXJlbmNlcyAodW5zZXQgZmFsbHMgYmFjayB0byBkZWZhdWx0cykuICovXG4gIGZ1bmN0aW9uIHJlYWRDb25maWcoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBmb3JtLmdldFNuYXBzaG90KCkudmFsdWUgPz8ge31cbiAgICByZXR1cm4ge1xuICAgICAgY29sb3JzRW5hYmxlZDogdmFsdWUuY29sb3JzRW5hYmxlZCAhPT0gZmFsc2UsXG4gICAgICBncmVlbjogSEVYLnRlc3QodmFsdWUuZ3JlZW4pID8gdmFsdWUuZ3JlZW4gOiBERUZBVUxUX0dSRUVOLFxuICAgICAgYW1iZXI6IEhFWC50ZXN0KHZhbHVlLmFtYmVyKSA/IHZhbHVlLmFtYmVyIDogREVGQVVMVF9BTUJFUixcbiAgICAgIHdvcmtpbmc6IEhFWC50ZXN0KHZhbHVlLndvcmtpbmcpID8gdmFsdWUud29ya2luZyA6IERFRkFVTFRfV09SS0lORyxcbiAgICAgIGJsYWNrOiBIRVgudGVzdCh2YWx1ZS5ibGFjaykgPyB2YWx1ZS5ibGFjayA6IHVuZGVmaW5lZCxcbiAgICAgIG5vdGlmeUVuYWJsZWQ6IHZhbHVlLm5vdGlmeUVuYWJsZWQgPT09IHRydWUsXG4gICAgICBub3RpZnlGb3JlZ3JvdW5kOiB2YWx1ZS5ub3RpZnlGb3JlZ3JvdW5kID09PSB0cnVlLFxuICAgICAgcGVyc2lzdGVudDogdmFsdWUubm90aWZ5UGVyc2lzdGVudCA9PT0gdHJ1ZSxcbiAgICAgIHZvbHVtZTogbm9ybWFsaXplVm9sdW1lKHZhbHVlLm5vdGlmeVZvbHVtZSA/PyAwLjYpLFxuICAgICAgZG9uZVNvdW5kOiB0eXBlb2YgdmFsdWUubm90aWZ5RG9uZVNvdW5kID09PSAnc3RyaW5nJyA/IHZhbHVlLm5vdGlmeURvbmVTb3VuZCA6IFNPVU5EX05PTkUsXG4gICAgICBwZW5kaW5nU291bmQ6IHR5cGVvZiB2YWx1ZS5ub3RpZnlQZW5kaW5nU291bmQgPT09ICdzdHJpbmcnID8gdmFsdWUubm90aWZ5UGVuZGluZ1NvdW5kIDogU09VTkRfTk9ORSxcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gZmF2aWNvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRFNIIHNoaXBzIHR3byBpY29uIGxpbmtzIChkYXJrL2xpZ2h0IHZpYSBgbWVkaWFgKTsgdGhlIGJyb3dzZXIgcGlja3Mgb25lIGJ5XG4gIC8vIHRoZSBPUyBjb2xvciBzY2hlbWUsIHNvIGV2ZXJ5IGxpbmsgbXVzdCBiZSBwYWludGVkIGFuZCByZXN0b3JlZCB0b2dldGhlci5cbiAgY29uc3QgaWNvbkxpbmtzID0gKCkgPT4gWy4uLmRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWx+PVwiaWNvblwiXScpXVxuICAvKiogT3JpZ2luYWwgaHJlZiBvZiBlYWNoIGxpbmsgd2UgaGF2ZSB0b3VjaGVkIChyZXN0b3JlIHRhcmdldCkuICovXG4gIGNvbnN0IG9yaWdpbmFsSHJlZnMgPSBuZXcgTWFwKClcbiAgY29uc3QgcmVtZW1iZXJMaW5rcyA9ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgaWNvbkxpbmtzKCkpIGlmICghb3JpZ2luYWxIcmVmcy5oYXMobGluaykpIG9yaWdpbmFsSHJlZnMuc2V0KGxpbmssIGxpbmsuaHJlZilcbiAgfVxuICByZW1lbWJlckxpbmtzKClcbiAgY29uc3QgcGFpbnQgPSAoaHJlZikgPT4geyBmb3IgKGNvbnN0IGxpbmsgb2Ygb3JpZ2luYWxIcmVmcy5rZXlzKCkpIGxpbmsuaHJlZiA9IGhyZWYgfVxuICAvKiogTGFzdCBocmVmIHdlIHNldDsgbnVsbCA9IG9mZmljaWFsIGljb25zLiAqL1xuICBsZXQgYXBwbGllZCA9IG51bGxcbiAgY29uc3QgdXJpID0gKGhleCkgPT4gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudCh3aGFsZVN2ZyhoZXgpKX1gXG4gIGNvbnN0IHJlc3RvcmUgPSAoKSA9PiB7XG4gICAgaWYgKGFwcGxpZWQgPT09IG51bGwpIHJldHVyblxuICAgIGZvciAoY29uc3QgW2xpbmssIGhyZWZdIG9mIG9yaWdpbmFsSHJlZnMpIGxpbmsuaHJlZiA9IGhyZWZcbiAgICBhcHBsaWVkID0gbnVsbFxuICB9XG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBtYXkgcmUtY3JlYXRlIHRoZSBpY29uIGxpbmtzOyBwaWNrIG5ldyBvbmVzIHVwLlxuICBjb25zdCBpY29uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgY29uc3QgYmVmb3JlID0gb3JpZ2luYWxIcmVmcy5zaXplXG4gICAgcmVtZW1iZXJMaW5rcygpXG4gICAgaWYgKG9yaWdpbmFsSHJlZnMuc2l6ZSAhPT0gYmVmb3JlKSBzeW5jKClcbiAgfSlcbiAgaWNvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcblxuICAvLyAtLS0gbm90aWZpY2F0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgUEVORElOR19LSU5EX0tFWVMgPSB7XG4gICAgYXBwcm92YWw6ICdwZW5kaW5nS2luZEFwcHJvdmFsJyxcbiAgICBxdWVzdGlvbjogJ3BlbmRpbmdLaW5kUXVlc3Rpb24nLFxuICAgICdwbGFuLXJldmlldyc6ICdwZW5kaW5nS2luZFBsYW5SZXZpZXcnLFxuICB9XG5cbiAgLyoqIFBlbmRpbmcgaW50ZXJhY3Rpb24gXHUyMTkyIG5vdGlmaWNhdGlvbiBib2R5IHRleHQgKGRlZmVuc2l2ZSByZWFkcykuICovXG4gIGZ1bmN0aW9uIHBlbmRpbmdUeXBlTGFiZWwoaW50ZXJhY3Rpb24pIHtcbiAgICBjb25zdCB0ID0gbG9jYWxlKClcbiAgICBjb25zdCBraW5kID0gaW50ZXJhY3Rpb24/LmtpbmRcbiAgICBpZiAoa2luZCA9PT0gJ2FwcHJvdmFsJykge1xuICAgICAgY29uc3QgdG9vbCA9IGludGVyYWN0aW9uLnRvb2xOYW1lXG4gICAgICBpZiAodHlwZW9mIHRvb2wgIT09ICdzdHJpbmcnIHx8IHRvb2wgPT09ICcnKSByZXR1cm4gdCgncGVuZGluZ0tpbmRBcHByb3ZhbCcpXG4gICAgICBjb25zdCBzaG93biA9IHRvb2wubGVuZ3RoID4gVE9PTF9OQU1FX0xJTUlUID8gdG9vbC5zbGljZSgwLCBUT09MX05BTUVfTElNSVQpICsgJ1x1MjAyNicgOiB0b29sXG4gICAgICByZXR1cm4gdCgncGVuZGluZ0FwcHJvdmFsVG9vbCcsIHsgdG9vbDogc2hvd24gfSlcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09ICdxdWVzdGlvbicpIHtcbiAgICAgIGNvbnN0IHF1ZXN0aW9ucyA9IEFycmF5LmlzQXJyYXkoaW50ZXJhY3Rpb24ucXVlc3Rpb25zKSA/IGludGVyYWN0aW9uLnF1ZXN0aW9ucyA6IFtdXG4gICAgICBpZiAocXVlc3Rpb25zLmxlbmd0aCA+IDEpIHJldHVybiB0KCdwZW5kaW5nUXVlc3Rpb25CYXRjaCcsIHsgY291bnQ6IHF1ZXN0aW9ucy5sZW5ndGggfSlcbiAgICAgIGNvbnN0IGZpcnN0ID0gcXVlc3Rpb25zWzBdXG4gICAgICBpZiAoZmlyc3QgPT09IG51bGwgfHwgdHlwZW9mIGZpcnN0ICE9PSAnb2JqZWN0JykgcmV0dXJuIHQoJ3BlbmRpbmdLaW5kUXVlc3Rpb24nKVxuICAgICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmlzQXJyYXkoZmlyc3Qub3B0aW9ucykgPyBmaXJzdC5vcHRpb25zIDogW11cbiAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHQoJ3BlbmRpbmdRdWVzdGlvbkZpbGwnKVxuICAgICAgcmV0dXJuIGZpcnN0Lm11bHRpU2VsZWN0ID09PSB0cnVlID8gdCgncGVuZGluZ1F1ZXN0aW9uTXVsdGknKSA6IHQoJ3BlbmRpbmdRdWVzdGlvbkNob29zZScpXG4gICAgfVxuICAgIGNvbnN0IGtleSA9IFBFTkRJTkdfS0lORF9LRVlTW2tpbmRdXG4gICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogdChrZXkpXG4gIH1cblxuICAvKiogUXVldWUgb25lIG5vdGlmaWNhdGlvbiAoc2tpcHBlZCB3aGlsZSBkaXNhYmxlZDsgZGVkdXBlZDsgMzAwIG1zIHdpbmRvdykuICovXG4gIGZ1bmN0aW9uIHF1ZXVlTm90aWZpY2F0aW9uKGtpbmQsIHNlc3Npb25JZCwgbGFiZWwsIHR5cGVMYWJlbCwgZHVyYXRpb25Ncykge1xuICAgIGlmICghcmVhZENvbmZpZygpLm5vdGlmeUVuYWJsZWQpIHJldHVyblxuICAgIGNvbnN0IGtleSA9IHNlc3Npb25JZCArICc6JyArIGtpbmRcbiAgICBpZiAobm90aWZpZWQuaGFzKGtleSkpIHJldHVyblxuICAgIG5vdGlmaWVkLmFkZChrZXkpXG4gICAgbm90aWZ5UXVldWUuc2V0KGtleSwgeyBraW5kLCBzZXNzaW9uSWQsIGxhYmVsLCB0eXBlTGFiZWwsIGR1cmF0aW9uTXMgfSlcbiAgICBpZiAobm90aWZ5VGltZXIgPT09IHVuZGVmaW5lZCkgbm90aWZ5VGltZXIgPSBzZXRUaW1lb3V0KGZsdXNoTm90aWZpY2F0aW9ucywgMzAwKVxuICB9XG5cbiAgLyoqIEZsdXNoIHRoZSBhZ2dyZWdhdGlvbiB3aW5kb3cgaW50byBicm93c2VyIG5vdGlmaWNhdGlvbnMuICovXG4gIGZ1bmN0aW9uIGZsdXNoTm90aWZpY2F0aW9ucygpIHtcbiAgICBub3RpZnlUaW1lciA9IHVuZGVmaW5lZFxuICAgIGNvbnN0IGVudHJpZXMgPSBbLi4ubm90aWZ5UXVldWUudmFsdWVzKCldXG4gICAgbm90aWZ5UXVldWUuY2xlYXIoKVxuICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgaWYgKG5vdGlmaWNhdGlvblN1cHBvcnQoKSAhPT0gJ2dyYW50ZWQnKSByZXR1cm5cbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKClcbiAgICBpZiAoIWNvbmZpZy5ub3RpZnlGb3JlZ3JvdW5kICYmIGlzRm9yZWdyb3VuZCgpKSByZXR1cm5cbiAgICBjb25zdCB0ID0gbG9jYWxlKClcbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcCgpXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCBidWNrZXQgPSBncm91cGVkLmdldChlbnRyeS5raW5kKSA/PyBbXVxuICAgICAgYnVja2V0LnB1c2goZW50cnkpXG4gICAgICBncm91cGVkLnNldChlbnRyeS5raW5kLCBidWNrZXQpXG4gICAgfVxuICAgIGZvciAoY29uc3QgW2tpbmQsIGJ1Y2tldF0gb2YgZ3JvdXBlZCkge1xuICAgICAgY29uc3QgaGVhZCA9IGJ1Y2tldFswXVxuICAgICAgY29uc3QgZXh0cmEgPSBidWNrZXQubGVuZ3RoIC0gMVxuICAgICAgbGV0IHRpdGxlID0gaGVhZC5sYWJlbCA/PyBoZWFkLnNlc3Npb25JZFxuICAgICAgaWYgKGV4dHJhID4gMCkgdGl0bGUgPSB0aXRsZSArICcgKycgKyBTdHJpbmcoZXh0cmEpXG4gICAgICBsZXQgYm9keSA9IGtpbmQgPT09ICdkb25lJyA/IHQoJ25vdGlmeURvbmVUaXRsZScpIDogKGhlYWQudHlwZUxhYmVsID8/IHQoJ25vdGlmeVBlbmRpbmdUaXRsZScpKVxuICAgICAgaWYgKGtpbmQgPT09ICdkb25lJyAmJiBleHRyYSA9PT0gMCAmJiBoZWFkLmR1cmF0aW9uTXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBib2R5ID0gYm9keSArICcgXHUwMEI3ICcgKyB0KCdub3RpZnlEdXJhdGlvbicsIHsgZHVyYXRpb246IGZvcm1hdFJ1bkR1cmF0aW9uKGhlYWQuZHVyYXRpb25NcywgdCkgfSlcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBubyBgdGFnYDogcmV1c2luZyBvbmUgbWFrZXMgc29tZSBwbGF0Zm9ybXMgc2lsZW50bHlcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgcHJldmlvdXMgYmFubmVyIGluc3RlYWQgb2YgcmFpc2luZyBhIG5ldyBvbmUuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24odGl0bGUsIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGljb246IHVyaShraW5kID09PSAnZG9uZScgPyBjb25maWcuZ3JlZW4gOiBjb25maWcuYW1iZXIpLFxuICAgICAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjogY29uZmlnLnBlcnNpc3RlbnQsXG4gICAgICAgIH0pXG4gICAgICAgIHBsYXlTb3VuZChraW5kID09PSAnZG9uZScgPyBjb25maWcuZG9uZVNvdW5kIDogY29uZmlnLnBlbmRpbmdTb3VuZCwgY29uZmlnLnZvbHVtZSwga2luZClcbiAgICAgICAgbm90aWZpY2F0aW9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHsgd2luZG93LmZvY3VzKCkgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdvcmtzcGFjZSA9IGN0eC5nZXQoJ3VpV29ya3NwYWNlJylcbiAgICAgICAgICAgIGlmICh3b3Jrc3BhY2UgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd29ya3NwYWNlLm9wZW5TZXNzaW9uID09PSAnZnVuY3Rpb24nKSB3b3Jrc3BhY2Uub3BlblNlc3Npb24oaGVhZC5zZXNzaW9uSWQpXG4gICAgICAgICAgICBlbHNlIGN0eC5zZXNzaW9ucy5vcGVuKGhlYWQuc2Vzc2lvbklkKVxuICAgICAgICAgIH0gY2F0Y2ggeyAvKiBpZ25vcmUgKi8gfVxuICAgICAgICAgIG5vdGlmaWNhdGlvbi5jbG9zZSgpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW21hbGtvLXByZWZzXSBjb3VsZCBub3QgcmFpc2Ugbm90aWZpY2F0aW9uJywgZXJyb3IpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIDYwIHMgcm9sbHMgaW50byBtaW51dGVzLCBzZWNvbmRzIHplcm8tcGFkZGVkIChtYXRjaGVzIHRoZSBvZmZpY2lhbCBmb3JtYXQpLiAqL1xuICBmdW5jdGlvbiBmb3JtYXRSdW5EdXJhdGlvbihtcywgdCkge1xuICAgIGNvbnN0IHRvdGFsID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihtcyAvIDEwMDApKVxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRvdGFsIC8gNjApXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsICUgNjBcbiAgICByZXR1cm4gbWludXRlcyA+IDBcbiAgICAgID8gdCgnZHVyYXRpb25NaW51dGVzJywgeyBtaW51dGVzLCBzZWNvbmRzOiBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgJzAnKSB9KVxuICAgICAgOiB0KCdkdXJhdGlvblNlY29uZHMnLCB7IHNlY29uZHMgfSlcbiAgfVxuXG4gIC8qKiBDb21wbGV0aW9uIC8gcGVuZGluZyB0cmFuc2l0aW9ucyBmcm9tIHRoZSBzZXNzaW9uIHN0YXRlLiAqL1xuICBmdW5jdGlvbiBkZXRlY3RUcmFuc2l0aW9ucyhzdGF0ZSkge1xuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoc3RhdGUuYnlJZCkpIHtcbiAgICAgIGlmIChyb3cub3JpZ2luID09PSAnc3ViYWdlbnQnKSBjb250aW51ZVxuICAgICAgY29uc3QgYmVmb3JlID0gcHJldkNvbXBsZXRlZC5nZXQocm93LmlkKVxuICAgICAgY29uc3Qgbm93ID0gcm93LmNvbXBsZXRlZCA9PT0gdHJ1ZVxuICAgICAgaWYgKGJlZm9yZSA9PT0gZmFsc2UgJiYgbm93KSBxdWV1ZU5vdGlmaWNhdGlvbignZG9uZScsIHJvdy5pZCwgcm93LmRpc3BsYXlUaXRsZSA/PyByb3cudGl0bGUgPz8gcm93LmlkLCB1bmRlZmluZWQsIGxhc3RSdW5Ncy5nZXQocm93LmlkKSlcbiAgICAgIGlmICghbm93KSBub3RpZmllZC5kZWxldGUocm93LmlkICsgJzpkb25lJylcbiAgICAgIHByZXZDb21wbGV0ZWQuc2V0KHJvdy5pZCwgbm93KVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIFsuLi5wcmV2Q29tcGxldGVkLmtleXMoKV0pIHtcbiAgICAgIGlmICghKGlkIGluIHN0YXRlLmJ5SWQpKSB7IHByZXZDb21wbGV0ZWQuZGVsZXRlKGlkKTsgbm90aWZpZWQuZGVsZXRlKGlkICsgJzpkb25lJykgfVxuICAgIH1cbiAgICBjb25zdCBjdXJyZW50ID0gbmV3IFNldCgpXG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkgaWYgKHJvdy5wZW5kaW5nSW50ZXJhY3Rpb24gIT09IHVuZGVmaW5lZCkgY3VycmVudC5hZGQocm93LmlkKVxuICAgIGlmIChwZW5kaW5nU2Vlbikge1xuICAgICAgZm9yIChjb25zdCBpZCBvZiBjdXJyZW50KSB7XG4gICAgICAgIGlmIChwcmV2UGVuZGluZy5oYXMoaWQpKSBjb250aW51ZVxuICAgICAgICBjb25zdCByb3cgPSBzdGF0ZS5ieUlkW2lkXVxuICAgICAgICBpZiAocm93ICE9PSB1bmRlZmluZWQgJiYgcm93Lm9yaWdpbiA9PT0gJ3N1YmFnZW50JykgY29udGludWVcbiAgICAgICAgY29uc3QgbGFiZWwgPSByb3c/LmRpc3BsYXlUaXRsZSA/PyByb3c/LnRpdGxlID8/IGlkXG4gICAgICAgIHF1ZXVlTm90aWZpY2F0aW9uKCdwZW5kaW5nJywgaWQsIGxhYmVsLCBwZW5kaW5nVHlwZUxhYmVsKHJvdz8ucGVuZGluZ0ludGVyYWN0aW9uKSlcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBpZCBvZiBwcmV2UGVuZGluZykgaWYgKCFjdXJyZW50LmhhcyhpZCkpIG5vdGlmaWVkLmRlbGV0ZShpZCArICc6cGVuZGluZycpXG4gICAgcHJldlBlbmRpbmcgPSBjdXJyZW50XG4gICAgcGVuZGluZ1NlZW4gPSB0cnVlXG4gIH1cblxuICAvKiogU2VsZi10cmFja2VkIHJ1bm5pbmcgZWRnZTogZmlsbHMgdGhlIGdhcCBmb3IgdGhlIHNlc3Npb24gYmVpbmcgdmlld2VkLiAqL1xuICBjb25zdCBwcmV2UnVubmluZyA9IG5ldyBNYXAoKVxuICBjb25zdCBmaW5pc2hlZFdoaWxlSGlkZGVuID0gbmV3IFNldCgpXG4gIGZ1bmN0aW9uIHRyYWNrRWRnZXMoc3RhdGUpIHtcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKHN0YXRlLmJ5SWQpKSB7XG4gICAgICBpZiAocm93Lm9yaWdpbiA9PT0gJ3N1YmFnZW50JykgY29udGludWVcbiAgICAgIGNvbnN0IHByZXYgPSBwcmV2UnVubmluZy5nZXQocm93LmlkKVxuICAgICAgaWYgKHByZXYgPT09IHVuZGVmaW5lZCkgeyBwcmV2UnVubmluZy5zZXQocm93LmlkLCByb3cucnVubmluZyk7IGNvbnRpbnVlIH1cbiAgICAgIGlmICghcHJldiAmJiByb3cucnVubmluZykgcnVuU3RhcnRlZEF0LnNldChyb3cuaWQsIERhdGUubm93KCkpXG4gICAgICBpZiAocHJldiAmJiAhcm93LnJ1bm5pbmcpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRlZEF0ID0gcnVuU3RhcnRlZEF0LmdldChyb3cuaWQpXG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSBzdGFydGVkQXQgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IERhdGUubm93KCkgLSBzdGFydGVkQXRcbiAgICAgICAgcnVuU3RhcnRlZEF0LmRlbGV0ZShyb3cuaWQpXG4gICAgICAgIGlmIChlbGFwc2VkICE9PSB1bmRlZmluZWQpIGxhc3RSdW5Ncy5zZXQocm93LmlkLCBlbGFwc2VkKVxuICAgICAgICBpZiAocm93LmlkID09PSBzdGF0ZS5jdXJyZW50ICYmICFpc0ZvcmVncm91bmQoKSkgZmluaXNoZWRXaGlsZUhpZGRlbi5hZGQocm93LmlkKVxuICAgICAgICBpZiAocm93LmlkID09PSBzdGF0ZS5jdXJyZW50KSBxdWV1ZU5vdGlmaWNhdGlvbignZG9uZScsIHJvdy5pZCwgcm93LmRpc3BsYXlUaXRsZSA/PyByb3cudGl0bGUgPz8gcm93LmlkLCB1bmRlZmluZWQsIGVsYXBzZWQpXG4gICAgICB9IGVsc2UgaWYgKHJvdy5ydW5uaW5nKSBmaW5pc2hlZFdoaWxlSGlkZGVuLmRlbGV0ZShyb3cuaWQpXG4gICAgICBwcmV2UnVubmluZy5zZXQocm93LmlkLCByb3cucnVubmluZylcbiAgICB9XG4gICAgZm9yIChjb25zdCBpZCBvZiBbLi4ucHJldlJ1bm5pbmcua2V5cygpXSkge1xuICAgICAgaWYgKCEoaWQgaW4gc3RhdGUuYnlJZCkpIHsgcHJldlJ1bm5pbmcuZGVsZXRlKGlkKTsgZmluaXNoZWRXaGlsZUhpZGRlbi5kZWxldGUoaWQpOyBydW5TdGFydGVkQXQuZGVsZXRlKGlkKTsgbGFzdFJ1bk1zLmRlbGV0ZShpZCkgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBCYWNrIGluIHRoZSBmb3JlZ3JvdW5kOiB0aGUgdmlld2VkIHNlc3Npb24ncyBncmVlbiBsaWdodCBjbGVhcnMuICovXG4gIGNvbnN0IG9uRm9yZWdyb3VuZCA9ICgpID0+IHtcbiAgICBpZiAoIWlzRm9yZWdyb3VuZCgpKSByZXR1cm5cbiAgICBpZiAoZmluaXNoZWRXaGlsZUhpZGRlbi5zaXplID4gMCkgeyBmaW5pc2hlZFdoaWxlSGlkZGVuLmNsZWFyKCk7IHN5bmMoKSB9XG4gIH1cblxuICAvKipcbiAgICogQWdncmVnYXRlIHRhYiBzdGF0ZSBvdmVyIG1haW4gc2Vzc2lvbnMuIFByaW9yaXR5OiBhbWJlciAoc29tZXRoaW5nIHdhaXRzXG4gICAqIGZvciB5b3UpID4gd29ya2luZyAoYSBzZXNzaW9uIGlzIGdlbmVyYXRpbmcpID4gZ3JlZW4gKHVuc2VlbiBjb21wbGV0aW9uKVxuICAgKiA+IGlkbGUuIFJldHVybnMgYCdvZmYnYCB3aGVuIHRoZSBzdGF0dXMgbGlnaHQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBmdW5jdGlvbiBjdXJyZW50S2luZChzdGF0ZSkge1xuICAgIGlmICghcmVhZENvbmZpZygpLmNvbG9yc0VuYWJsZWQpIHJldHVybiAnb2ZmJ1xuICAgIGxldCBncmVlbiA9IGZhbHNlXG4gICAgbGV0IHdvcmtpbmcgPSBmYWxzZVxuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoc3RhdGUuYnlJZCkpIHtcbiAgICAgIGlmIChyb3cub3JpZ2luID09PSAnc3ViYWdlbnQnKSBjb250aW51ZVxuICAgICAgaWYgKHJvdy5wZW5kaW5nSW50ZXJhY3Rpb24gIT09IHVuZGVmaW5lZCkgcmV0dXJuICdhbWJlcidcbiAgICAgIGlmIChyb3cucnVubmluZyA9PT0gdHJ1ZSkgd29ya2luZyA9IHRydWVcbiAgICAgIGlmIChyb3cuY29tcGxldGVkID09PSB0cnVlIHx8IGZpbmlzaGVkV2hpbGVIaWRkZW4uaGFzKHJvdy5pZCkpIGdyZWVuID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAod29ya2luZykgcmV0dXJuICd3b3JraW5nJ1xuICAgIGlmIChncmVlbikgcmV0dXJuICdncmVlbidcbiAgICByZXR1cm4gJ2lkbGUnXG4gIH1cblxuICAvKiogQXBwbHkgb25lIHRhYiBzdGF0ZSB0byB0aGUgZmF2aWNvbi4gKi9cbiAgZnVuY3Rpb24gYXBwbHlLaW5kKGtpbmQpIHtcbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKClcbiAgICBpZiAoa2luZCA9PT0gJ29mZicpIHsgcmVzdG9yZSgpOyByZXR1cm4gfVxuICAgIGNvbnN0IGhyZWYgPSBraW5kID09PSAnYW1iZXInXG4gICAgICA/IHVyaShjb25maWcuYW1iZXIpXG4gICAgICA6IGtpbmQgPT09ICd3b3JraW5nJ1xuICAgICAgICA/IHVyaShjb25maWcud29ya2luZylcbiAgICAgICAgOiBraW5kID09PSAnZ3JlZW4nXG4gICAgICAgICAgPyB1cmkoY29uZmlnLmdyZWVuKVxuICAgICAgICAgIDogKGNvbmZpZy5ibGFjayA/IHVyaShjb25maWcuYmxhY2spIDogbnVsbClcbiAgICBpZiAoaHJlZiA9PT0gbnVsbCkgcmVzdG9yZSgpXG4gICAgZWxzZSBpZiAoYXBwbGllZCAhPT0gaHJlZikgeyBwYWludChocmVmKTsgYXBwbGllZCA9IGhyZWYgfVxuICB9XG5cbiAgLyoqIE1lcmdlIHRoZSBzZXNzaW9uIHJvd3Mgd2l0aCB0aGUgb2ZmaWNpYWwgc3RhdHVzIHN0b3JlIHdoZW4gYXZhaWxhYmxlLiAqL1xuICBmdW5jdGlvbiBidWlsZFN0YXRlKCkge1xuICAgIGNvbnN0IGxpc3RTdGF0ZSA9IGxpc3QuZ2V0U25hcHNob3QoKVxuICAgIGNvbnN0IHN0YXR1cyA9IHN0YXR1c1NvdXJjZT8uZ2V0U25hcHNob3QoKVxuICAgIGxldCBjdXJyZW50ID0gbGlzdFN0YXRlLmN1cnJlbnRcbiAgICBjb25zdCBieUlkID0ge31cbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKGxpc3RTdGF0ZS5ieUlkKSkge1xuICAgICAgY29uc3QgcyA9IHN0YXR1cz8uZ2V0KHJvdy5pZClcbiAgICAgIGlmICgocm93LnJldGFpbmVkQnk/Lm1haW5WaWV3ID8/IDApID4gMCkgY3VycmVudCA9IHJvdy5pZFxuICAgICAgYnlJZFtyb3cuaWRdID0ge1xuICAgICAgICAuLi5yb3csXG4gICAgICAgIHJ1bm5pbmc6IHM/LnJ1bm5pbmcgPz8gcm93LnJ1bm5pbmcsXG4gICAgICAgIGNvbXBsZXRlZDogcz8uY29tcGxldGlvblVucmVhZCA/PyByb3cuY29tcGxldGVkID09PSB0cnVlLFxuICAgICAgICBwZW5kaW5nSW50ZXJhY3Rpb246IHM/LnBlbmRpbmdJbnRlcmFjdGlvbiA/PyByb3cucGVuZGluZ0ludGVyYWN0aW9uLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyAuLi5saXN0U3RhdGUsIGJ5SWQsIGN1cnJlbnQgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3luYygpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGJ1aWxkU3RhdGUoKVxuICAgIHRyYWNrRWRnZXMoc3RhdGUpXG4gICAgZGV0ZWN0VHJhbnNpdGlvbnMoc3RhdGUpXG4gICAgYXBwbHlLaW5kKGN1cnJlbnRLaW5kKHN0YXRlKSlcbiAgfVxuXG4gIGNvbnN0IHVuc3Vic2NyaWJlTGlzdCA9IGxpc3Quc3Vic2NyaWJlKHN5bmMpXG4gIGNvbnN0IHVuc3Vic2NyaWJlRm9ybSA9IGZvcm0uc3Vic2NyaWJlKHN5bmMpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvbkZvcmVncm91bmQpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9yZWdyb3VuZClcbiAgc3luYygpXG5cbiAgLy8gT3B0aW9uYWwgY2hhbm5lbDogdGhlIG9mZmljaWFsIHN0YXR1cyBzdG9yZSAocHJlc2VudCBvbiAwLjEuNyspLlxuICBjdHguaW5qZWN0KFsndWlTZXNzaW9uJ10sICh1aUN0eCkgPT4ge1xuICAgIHN0YXR1c1NvdXJjZSA9IHVpQ3R4LnVpU2Vzc2lvbi5zZXNzaW9uU3RhdHVzXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdGF0dXNTb3VyY2Uuc3Vic2NyaWJlKHN5bmMpXG4gICAgc3luYygpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKClcbiAgICAgIHN0YXR1c1NvdXJjZSA9IHVuZGVmaW5lZFxuICAgICAgc3luYygpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKG5vdGlmeVRpbWVyICE9PSB1bmRlZmluZWQpIGNsZWFyVGltZW91dChub3RpZnlUaW1lcilcbiAgICBub3RpZnlRdWV1ZS5jbGVhcigpXG4gICAgc3RvcFNvdW5kKClcbiAgICBpY29uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgdW5zdWJzY3JpYmVMaXN0KClcbiAgICB1bnN1YnNjcmliZUZvcm0oKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvbkZvcmVncm91bmQpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb3JlZ3JvdW5kKVxuICAgIHJlc3RvcmUoKVxuICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLG1CQUFrQjtBQUNsQixzQ0FBaUQ7OztBQ0UxQyxJQUFNLGlCQUFpQjtBQUFBLEVBQzVCLElBQUk7QUFBQSxFQUNKLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLGdCQUFnQjtBQUFBLEVBQ2hCLGtCQUFrQjtBQUNwQjtBQVFPLFNBQVMsZ0JBQWdCLFlBQVksY0FBYztBQUN4RCxTQUFPO0FBQUEsSUFDTCxJQUFJLGVBQWU7QUFBQSxJQUNuQixTQUFTLGVBQWU7QUFBQSxJQUN4QixXQUFXLGVBQWU7QUFBQSxJQUMxQixRQUFRLGVBQWU7QUFBQSxJQUN2QixZQUFZLEVBQUUsTUFBTSxTQUFTO0FBQUEsSUFDN0IsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLE9BQU8sRUFBRSxNQUFNLFVBQVUsWUFBWSxlQUFlLGdCQUFnQixRQUFRLFdBQVc7QUFBQSxNQUN6RjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVEsRUFBRSxNQUFNLFVBQVUsWUFBWSxlQUFlLGtCQUFrQixRQUFRLGFBQWE7QUFBQSxFQUM5RjtBQUNGOzs7QUNsQ08sU0FBUyxTQUFTLE9BQU87QUFDOUIsU0FBTyx1N0dBQW84RyxRQUFRO0FBQ3I5Rzs7O0FDS08sSUFBTSxZQUFZO0FBR3pCLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sTUFBTTtBQUVa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S0FBSztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsT0FBTztBQUFBLEVBQ1AsZUFBZTtBQUFBLEVBQ2YsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIsZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsZ0JBQWdCO0FBQUEsRUFDaEIsb0JBQW9CO0FBQUEsRUFDcEIsVUFBVTtBQUFBLEVBQ1YsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCO0FBQUEsRUFDaEIsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsU0FBUztBQUFBLEVBQ1QsYUFBYTtBQUFBLEVBQ2Isb0JBQW9CO0FBQUEsRUFDcEIsbUJBQW1CO0FBQUEsRUFDbkIsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osVUFBVTtBQUFBLEVBQ1YsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsa0JBQWtCO0FBQUEsRUFDbEIsY0FBYztBQUFBLEVBQ2QsV0FBVztBQUFBLEVBQ1gsZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsb0JBQW9CO0FBQUEsRUFDcEIsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVB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LGVBQWdCO0FBQUEsSUFDbEcsT0FBTyxHQUFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxHQUFHLElBQUksSUFBSTtBQUFBLEVBQy9DO0FBQ0Y7QUFFQSxlQUFzQixNQUFNLEtBQUs7QUFDL0IsTUFBSSxPQUFPLE1BQU0sSUFBSSxPQUFPLFNBQVMsV0FBVyxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsa0NBQWtDO0FBQy9GLFFBQU0sSUFBSSxJQUFJLE9BQU8sS0FBSyxTQUFTO0FBQ25DLFFBQU0sT0FBTyxJQUFJLFlBQVksSUFBSSxFQUFFO0FBQ25DLFFBQU0sWUFBWSxJQUFJLFlBQVksSUFBSSxRQUFRO0FBRzlDLE1BQUk7QUFDRixVQUFNLGdCQUFnQixNQUFNLElBQUksT0FBTyxPQUFPLFlBQVk7QUFDMUQsUUFBSSxPQUFPLE1BQU0sTUFBTTtBQUFFLFdBQUssY0FBYztBQUFBLElBQUUsR0FBRyxpQ0FBaUM7QUFBQSxFQUNwRixTQUFTLE9BQU87QUFDZCxZQUFRLE1BQU0sa0VBQTZELEtBQUs7QUFBQSxFQUNsRjtBQUVBLE1BQUksT0FBTyxNQUFNLGlCQUFpQixLQUFLLElBQUksR0FBRywrQkFBK0I7QUFDN0UsUUFBTSxXQUFXLE9BQU87QUFBQSxJQUN0QixPQUFPLEVBQUUsT0FBTyxNQUFNLGNBQWMsVUFBVTtBQUFBLElBQzlDLE1BQU0sQ0FBQyxPQUFPLFVBQVUsS0FBSyxJQUFJLE9BQU8sS0FBSztBQUFBLElBQzdDLE9BQU8sQ0FBQyxTQUFTO0FBSWYsWUFBTSxTQUFTLElBQUksSUFBSSxvQkFBb0I7QUFDM0MsVUFBSSxXQUFXLE9BQVcsT0FBTSxJQUFJLE1BQU0seUNBQXlDO0FBQ25GLGFBQU8sT0FBTyxNQUFNLElBQUk7QUFBQSxJQUMxQjtBQUFBLElBQ0EsYUFBYSxDQUFDLFNBQVMsV0FBVyxVQUFVLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxTQUFTLFFBQVEsR0FBRyxPQUFPLE9BQU8sQ0FBQyxDQUFDO0FBQUEsRUFDM0g7QUFDQSxNQUFJLE1BQU0sT0FBTyxNQUFNLE1BQU0sSUFBSSxNQUFNLFNBQVM7QUFBQSxJQUM5QyxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxPQUFPLE1BQU0sRUFBRSxPQUFPO0FBQUEsSUFDdEIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1YsR0FBRyxZQUFZLENBQUM7QUFDbEI7IiwKICAibmFtZXMiOiBbIm5hbWUiLCAiSEVYIiwgIlJlYWN0Il0KfQo=
    return module.exports;
  },
});
