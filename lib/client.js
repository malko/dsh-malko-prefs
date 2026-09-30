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
      doneEnabled: value.notifyDoneEnabled !== false,
      donePersistent: value.notifyDonePersistent === true,
      pendingEnabled: value.notifyPendingEnabled !== false,
      pendingPersistent: value.notifyPendingPersistent === true,
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
    const config = readConfig();
    if (!config.notifyEnabled) return;
    if (kind === "done" && !config.doneEnabled) return;
    if (kind === "pending" && !config.pendingEnabled) return;
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
          requireInteraction: kind === "done" ? config.donePersistent : config.pendingPersistent
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
  intro: "Tunable compaction, llama.cpp model enrichment and notifications.",
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
  modelsIntro: "Fetch the models a provider exposes, pick the ones to import and review the changes before applying.",
  enrich: "Fetch from server",
  enriching: "Fetching\u2026",
  noBaseUrl: "No endpoint configured for this provider.",
  applied: "Imported {count} model(s).",
  previewTitle: "Review import",
  previewHint: "Check the models to import from the server.",
  previewNew: "new model",
  previewNoChange: "no change",
  selectAll: "Select all",
  apply: "Import ({count})",
  cancel: "Cancel",
  noModels: "The server returned no models.",
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
  notifyDoneGroup: "When a session finishes",
  notifyDoneEnabled: "Notify",
  notifyDoneEnabledHint: "Send a notification when a session finishes.",
  notifyPendingGroup: "While waiting for you",
  notifyPendingEnabled: "Notify",
  notifyPendingEnabledHint: "Send a notification when a question or approval awaits you.",
  persistDone: "Keep on screen",
  persistPending: "Keep on screen",
  persistHint: "On: the notification stays until you dismiss it (if the OS honors it).",
  sound: "Sound",
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
  intro: "\u538B\u7F29\u3001llama.cpp \u6A21\u578B\u8865\u5168\u4E0E\u901A\u77E5\u3002",
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
  modelsIntro: "\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u6A21\u578B\u5217\u8868\uFF0C\u52FE\u9009\u8981\u5BFC\u5165\u7684\u6A21\u578B\uFF0C\u786E\u8BA4\u53D8\u66F4\u540E\u5E94\u7528\u3002",
  enrich: "\u4ECE\u670D\u52A1\u5668\u83B7\u53D6",
  enriching: "\u6B63\u5728\u83B7\u53D6\u2026",
  noBaseUrl: "\u8BE5\u63D0\u4F9B\u5546\u672A\u914D\u7F6E\u7AEF\u70B9\u3002",
  applied: "\u5DF2\u5BFC\u5165 {count} \u4E2A\u6A21\u578B\u3002",
  previewTitle: "\u786E\u8BA4\u5BFC\u5165",
  previewHint: "\u52FE\u9009\u8981\u4ECE\u670D\u52A1\u5668\u5BFC\u5165\u7684\u6A21\u578B\u3002",
  previewNew: "\u65B0\u6A21\u578B",
  previewNoChange: "\u65E0\u53D8\u5316",
  selectAll: "\u5168\u9009",
  apply: "\u5BFC\u5165\uFF08{count}\uFF09",
  cancel: "\u53D6\u6D88",
  noModels: "\u670D\u52A1\u5668\u672A\u8FD4\u56DE\u4EFB\u4F55\u6A21\u578B\u3002",
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
  notifyDoneGroup: "\u4F1A\u8BDD\u5B8C\u6210\u65F6",
  notifyDoneEnabled: "\u901A\u77E5",
  notifyDoneEnabledHint: "\u4F1A\u8BDD\u5B8C\u6210\u65F6\u53D1\u9001\u901A\u77E5\u3002",
  notifyPendingGroup: "\u7B49\u5F85\u5904\u7406\u65F6",
  notifyPendingEnabled: "\u901A\u77E5",
  notifyPendingEnabledHint: "\u6709\u63D0\u95EE\u6216\u5BA1\u6279\u7B49\u5F85\u5904\u7406\u65F6\u53D1\u9001\u901A\u77E5\u3002",
  persistDone: "\u5E38\u9A7B\u5C4F\u5E55",
  persistPending: "\u5E38\u9A7B\u5C4F\u5E55",
  persistHint: "\u5F00\u542F\u540E\u9700\u624B\u52A8\u5173\u95ED\u624D\u4F1A\u6D88\u5931\uFF08\u53D7\u7CFB\u7EDF\u652F\u6301\u9650\u5236\uFF09\u3002",
  sound: "\u63D0\u793A\u97F3",
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
  providerBlock: { marginBottom: 12 },
  preview: { marginTop: 8, padding: 10, border: "0.5px solid var(--dsw-alias-border-l4)", borderRadius: 8, background: "var(--dsw-alias-bg-layer-1)" },
  previewRow: { display: "flex", alignItems: "center", gap: 8, padding: "4px 0", cursor: "pointer" },
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
  const [preview, setPreview] = import_react.default.useState(null);
  const [stickyBg, setStickyBg] = import_react.default.useState("");
  const wrapRef = import_react.default.useRef(null);
  const valueRef = snap && snap.value;
  import_react.default.useEffect(() => {
    setDraft({
      thresholdTokens: valueRef && valueRef.thresholdTokens ? String(valueRef.thresholdTokens) : "",
      contextWindowTokens: valueRef && valueRef.contextWindowTokens ? String(valueRef.contextWindowTokens) : "",
      retainTokens: valueRef && valueRef.retainTokens ? String(valueRef.retainTokens) : ""
    });
    setNote("");
  }, [valueRef]);
  import_react.default.useEffect(() => {
    let node = wrapRef.current?.parentElement ?? null;
    while (node !== null && node !== document.body) {
      const bg = getComputedStyle(node).backgroundColor;
      if (bg !== "" && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
        setStickyBg(bg);
        break;
      }
      node = node.parentElement;
    }
  }, []);
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
  const fetchPreview = async (routeId, profile) => {
    setBusyRoute(routeId);
    setEnrichNote("");
    setPreview(null);
    try {
      const response = await probe({
        baseURL: profile.baseURL,
        ...typeof profile.apiKeyEnv === "string" && profile.apiKeyEnv !== "" ? { apiKeyEnv: profile.apiKeyEnv } : {}
      });
      const found = Array.isArray(response?.models) ? response.models : [];
      const existing = Array.isArray(profile.models) ? profile.models : [];
      const byId = new Map(existing.map((m) => [m.id, m]));
      const rows = found.map((m) => {
        const cur = byId.get(m.id);
        if (cur === void 0) return { id: m.id, name: m.name, isNew: true, changes: [], value: m, selected: true };
        const changes = [];
        if (m.contextWindow !== void 0 && cur.contextWindow !== m.contextWindow) changes.push({ field: "contextWindow", from: cur.contextWindow, to: m.contextWindow });
        if (m.maxTokens !== void 0 && cur.maxTokens !== m.maxTokens) changes.push({ field: "maxTokens", from: cur.maxTokens, to: m.maxTokens });
        const fromInput = Array.isArray(cur.input) ? cur.input.join("+") : void 0;
        const toInput = Array.isArray(m.input) ? m.input.join("+") : void 0;
        if (toInput !== void 0 && toInput !== fromInput) changes.push({ field: "input", from: fromInput, to: toInput });
        return { id: m.id, name: m.name, isNew: false, changes, value: m, selected: changes.length > 0 };
      });
      if (rows.length === 0) {
        setEnrichNote(t("noModels"));
        return;
      }
      setPreview({ routeId, rows });
    } catch (error) {
      setEnrichNote(t("errorPrefix") + String(error && error.message ? error.message : error));
    } finally {
      setBusyRoute("");
    }
  };
  const togglePreview = (id) => setPreview((p) => p === null ? p : { ...p, rows: p.rows.map((r) => r.id === id ? { ...r, selected: !r.selected } : r) });
  const toggleAllPreview = (next) => setPreview((p) => p === null ? p : { ...p, rows: p.rows.map((r) => ({ ...r, selected: next })) });
  const applyPreview = async () => {
    const p = preview;
    if (p === null) return;
    const profile = (providers !== null && typeof providers === "object" ? providers[p.routeId] : void 0) ?? {};
    const existing = Array.isArray(profile.models) ? profile.models : [];
    const selectedById = new Map(p.rows.filter((r) => r.selected).map((r) => [r.id, r]));
    const next = existing.map((m) => {
      const row = selectedById.get(m.id);
      if (row === void 0 || row.isNew) return m;
      const v = row.value;
      return {
        ...m,
        ...v.contextWindow === void 0 ? {} : { contextWindow: v.contextWindow },
        ...v.maxTokens === void 0 ? {} : { maxTokens: v.maxTokens },
        ...v.input === void 0 ? {} : { input: [...v.input] }
      };
    });
    for (const row of p.rows) {
      if (!row.isNew || !row.selected) continue;
      const v = row.value;
      next.push({
        id: v.id,
        name: v.name,
        ...v.contextWindow === void 0 ? {} : { contextWindow: v.contextWindow },
        ...v.maxTokens === void 0 ? {} : { maxTokens: v.maxTokens },
        ...v.input === void 0 ? {} : { input: [...v.input] }
      });
    }
    try {
      await writeModels(p.routeId, next);
      setEnrichNote(t("applied", { count: selectedById.size }));
      setPreview(null);
    } catch (error) {
      setEnrichNote(t("errorPrefix") + String(error && error.message ? error.message : error));
    }
  };
  const changeText = (row) => {
    const fmt = (v) => v === void 0 || v === null || v === "" ? "\u2014" : String(v);
    if (row.isNew) return t("previewNew");
    if (row.changes.length === 0) return t("previewNoChange");
    return row.changes.map((c) => `${c.field}: ${fmt(c.from)} \u2192 ${fmt(c.to)}`).join("  \xB7  ");
  };
  const previewPanel = (p) => {
    const selected = p.rows.filter((r) => r.selected).length;
    const all = p.rows.length > 0 && selected === p.rows.length;
    return el(
      "div",
      { style: S.preview, key: "preview" },
      el("div", { style: S.groupTitle }, t("previewTitle")),
      el("div", { style: S.hint }, t("previewHint")),
      el(
        "label",
        { style: { ...S.previewRow, borderBottom: "0.5px solid var(--dsw-alias-border-l3)", fontWeight: 600 } },
        el("input", {
          type: "checkbox",
          checked: all,
          disabled,
          ref: (node) => {
            if (node) node.indeterminate = !all && selected > 0;
          },
          onChange: () => toggleAllPreview(!all),
          "aria-label": t("selectAll")
        }),
        el("span", null, t("selectAll"))
      ),
      ...p.rows.map((row) => el(
        "label",
        { key: row.id, style: S.previewRow },
        el("input", { type: "checkbox", checked: row.selected, disabled, onChange: () => togglePreview(row.id) }),
        el("span", { style: { fontWeight: 600, maxWidth: 200, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, row.name),
        el("span", { style: { color: "var(--dsw-alias-label-tertiary)", fontSize: 12 } }, changeText(row))
      )),
      el(
        "div",
        { style: { ...S.rowFlex, marginTop: 8 } },
        el(import_dsh_client_ui_primitives.Button, { variant: "primary", size: "sm", disabled: disabled || selected === 0, onClick: () => {
          void applyPreview();
        } }, t("apply", { count: selected })),
        el(import_dsh_client_ui_primitives.Button, { variant: "ghost", size: "sm", disabled, onClick: () => setPreview(null) }, t("cancel"))
      )
    );
  };
  const providerRows = Object.entries(providers !== null && typeof providers === "object" ? providers : {}).map(([routeId, profile]) => {
    const baseURL = profile !== null && typeof profile === "object" && typeof profile.baseURL === "string" ? profile.baseURL : "";
    return el(
      "div",
      { key: routeId, style: S.providerBlock },
      el(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 8 } },
        el("span", { style: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, `${routeId}${baseURL ? ` \u2014 ${baseURL}` : ""}`),
        baseURL ? el(import_dsh_client_ui_primitives.Button, { variant: "outline", size: "sm", disabled: busyRoute === routeId || disabled, onClick: () => {
          void fetchPreview(routeId, profile);
        } }, busyRoute === routeId ? t("enriching") : t("enrich")) : el("span", { style: { color: "var(--dsw-alias-label-tertiary)", fontSize: 12, flexShrink: 0 } }, t("noBaseUrl"))
      ),
      preview !== null && preview.routeId === routeId ? previewPanel(preview) : null
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
      )
    ),
    el(
      "div",
      { style: S.group, key: "done" },
      el("div", { style: S.groupTitle }, t("notifyDoneGroup")),
      switchField("notifyDoneEnabled", "notifyDoneEnabled", "notifyDoneEnabledHint", true),
      switchField("persistDone", "notifyDonePersistent", "persistHint", false),
      soundSelect("sound", "notifyDoneSound", "done")
    ),
    el(
      "div",
      { style: S.group, key: "pending" },
      el("div", { style: S.groupTitle }, t("notifyPendingGroup")),
      switchField("notifyPendingEnabled", "notifyPendingEnabled", "notifyPendingEnabledHint", true),
      switchField("persistPending", "notifyPendingPersistent", "persistHint", false),
      soundSelect("sound", "notifyPendingSound", "pending")
    )
  ];
  const panels = { compaction: compactionPanel, models: modelsPanel, notifications: notificationsPanel };
  return el(
    "div",
    { ref: wrapRef, style: S.wrap },
    el("div", { style: S.groupTitle }, t("title")),
    el("div", { style: { ...S.hint, marginBottom: 8 } }, t("intro")),
    el(
      "div",
      {
        style: {
          ...S.tabs,
          position: "sticky",
          top: 0,
          zIndex: 5,
          paddingTop: 4,
          paddingBottom: 8,
          background: stickyBg || "var(--dsw-alias-bg-layer-3, #2c2c2e)"
        }
      },
      el(import_dsh_client_ui_primitives.SegmentedControl, {
        id: TABS_ID,
        value: tab,
        options: [
          { value: "compaction", label: t("tabCompaction") },
          { value: "notifications", label: t("tabNotifications") },
          { value: "models", label: t("tabModels") }
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
    probe: async (args) => {
      const remote = ctx.get("remote.malkoModels");
      if (remote === void 0) throw new Error("the malkoModels remote is not available");
      const result = await remote.probe(args);
      if (result !== null && typeof result === "object" && "ok" in result) {
        if (result.ok !== true) throw result.error ?? new Error("the malkoModels probe failed");
        return result.value;
      }
      return result;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC50cyIsICJzcmMvcmVtb3RlLnRzIiwgInNyYy93aGFsZS50cyIsICJzcmMvbm90aWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgYnJvd3NlciBoYWxmLlxuICpcbiAqIE9uZSBzZXR0aW5ncyBzZWN0aW9uIHdpdGggdGhyZWUgc3ViLXBhbmVsczogY29udGV4dCBjb21wYWN0aW9uLCBsbGFtYS5jcHBcbiAqIG1vZGVsIGVucmljaG1lbnQsIGFuZCBub3RpZmljYXRpb25zLiBSZWFkcyBhbmQgd3JpdGVzIHRoZSBgbWFsa28tcHJlZnNgXG4gKiBjb25maWcgZm9ybSwgcmVhZHMgdGhlIGBsbG0tcGktYWlgIGZvcm0gdG8gcG9wdWxhdGUgdGhlIG1vZGVsIHBpY2tlcnMsIGFuZFxuICogcnVucyB0aGUgdGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoc2VlIGAuL25vdGlmeS50c2ApLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnRlZENvbnRyb2wsIFN3aXRjaCB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXByaW1pdGl2ZXMnXG5pbXBvcnQgeyBwcm9iZUludm9jYXRpb24gfSBmcm9tICcuL3JlbW90ZS50cydcbmltcG9ydCB7XG4gIEJVSUxUSU5fU09VTkRTLFxuICBMT0NBTEVfTlMsXG4gIFNPVU5EX05PTkUsXG4gIFNPVU5EX1BBQ0tTLFxuICBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbixcbiAgcGFja1NvdW5kSWRzLFxuICBwbGF5U291bmQsXG4gIHByaW1lU291bmQsXG4gIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uLFxuICBzdGFydFN0YXR1c0xpZ2h0LFxufSBmcm9tICcuL25vdGlmeS50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZHNoLW1hbGtvLXByZWZzJ1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsnc2Vzc2lvbnMnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2NvbmZpZ0Zvcm1zJywgJ3JlbW90ZSddXG5cbmNvbnN0IE5TID0gJ21hbGtvLXByZWZzJ1xuY29uc3QgTU9ERUxfTlMgPSAnbGxtLXBpLWFpJ1xuY29uc3QgU0xPVCA9ICdzZXR0aW5ncy5zZWN0aW9uJ1xuY29uc3QgVEFCU19JRCA9ICdtYWxrby1wcmVmcy10YWJzJ1xuXG4vKiogYCNSUkdHQkJgIGNvbG91ciBsaXRlcmFsLiAqL1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuXG4vKiogU3RyaWN0LWNvZGVjIHN0dWI6IHRoZSBicm93c2VyIG5ldmVyIGRlY29kZXMgaXRzIG93biBhcmd1bWVudHMuICovXG5jb25zdCBpZGVudGl0eVNjaGVtYSA9ICgpID0+ICh7IHBhcnNlOiAodmFsdWUpID0+IHZhbHVlIH0pXG5cbi8qKiBCcm93c2VyIGNvbnRyaWJ1dGlvbiBtb3VudGVkIHRocm91Z2ggYGN0eC5yZW1vdGUuJG1vdW50KClgLiAqL1xuY29uc3QgUFJPQkVfUkVNT1RFID0ge1xuICBwYWNrYWdlOiAnZHNoLW1hbGtvLXByZWZzJyxcbiAgZGVzY3JpcHRvcnM6IFtwcm9iZUludm9jYXRpb24oaWRlbnRpdHlTY2hlbWEsIGlkZW50aXR5U2NoZW1hKV0sXG59XG5cbmNvbnN0IGVsID0gUmVhY3QuY3JlYXRlRWxlbWVudFxuXG5jb25zdCBlbiA9IHtcbiAgdGl0bGU6IFwiTWFsa28ncyBwcmVmc1wiLFxuICBpbnRybzogJ1R1bmFibGUgY29tcGFjdGlvbiwgbGxhbWEuY3BwIG1vZGVsIGVucmljaG1lbnQgYW5kIG5vdGlmaWNhdGlvbnMuJyxcbiAgdGFiQ29tcGFjdGlvbjogJ0NvbnRleHQgY29tcGFjdGlvbicsXG4gIHRhYk1vZGVsczogJ2xsYW1hLmNwcCBtb2RlbHMnLFxuICB0YWJOb3RpZmljYXRpb25zOiAnTm90aWZpY2F0aW9ucycsXG4gIC8vIENvbXBhY3Rpb25cbiAgdGhyZXNob2xkVGl0bGU6ICdDb21wYWN0aW9uIHRocmVzaG9sZCcsXG4gIHRocmVzaG9sZFRva2VuczogJ1RocmVzaG9sZCAodG9rZW5zKScsXG4gIHRocmVzaG9sZFRva2Vuc0hpbnQ6ICdBYnNvbHV0ZSBwcmVzc3VyZSBpbiB0b2tlbnMsIGUuZy4gMTMwayBvciAxMzBLLiBFbXB0eS8wID0gdXNlIHRoZSByYXRpbyBiZWxvdy4nLFxuICBjb250ZXh0V2luZG93OiAnQ29udGV4dCB3aW5kb3cgKHRva2VucyknLFxuICBjb250ZXh0V2luZG93SGludDogJ1dpbmRvdyB0aGUgYWJzb2x1dGUgdGhyZXNob2xkIGlzIGV4cHJlc3NlZCBhZ2FpbnN0IChlLmcuIDIwMGspLiAwID0gZGVyaXZlIG5vdGhpbmcgKHJhdGlvIG9ubHkpLicsXG4gIHRocmVzaG9sZFJhdGlvOiAnVGhyZXNob2xkIHJhdGlvJyxcbiAgdGhyZXNob2xkUmF0aW9IaW50OiAnVXNlZCB3aGVuIHRoZSBhYnNvbHV0ZSB0aHJlc2hvbGQgaXMgZW1wdHkgKDAuOCA9IDgwJSBvZiB0aGUgd2luZG93KS4nLFxuICBoZWFkcm9vbTogJ0hlYWRyb29tICh0b2tlbnMpJyxcbiAgaGVhZHJvb21IaW50OiAnUmVzZXJ2ZWQgb24gdG9wIG9mIHRoZSBvdXRwdXQgY2FwLiBUaGUgb2ZmaWNpYWwgZGVmYXVsdCAoNjU1MzYpIGNhcHMgdGhlIHRyaWdnZXIgd2VsbCBiZWxvdyA4MCUuJyxcbiAgcmV0ZW50aW9uVGl0bGU6ICdSZXRlbnRpb24nLFxuICByZXRhaW5Ub2tlbnM6ICdLZWVwIGxhc3QgKHRva2VucyknLFxuICByZXRhaW5Ub2tlbnNIaW50OiAnVmVyYmF0aW0gcmVjZW50LWNvbnRleHQgYnVkZ2V0LCBlLmcuIDMyay4gRW1wdHkvMCA9IHVzZSB0aGUgcmF0aW8gYmVsb3cuJyxcbiAgcmV0YWluUmF0aW86ICdLZWVwIHJhdGlvJyxcbiAgYmVoYXZpb3VyVGl0bGU6ICdCZWhhdmlvdXInLFxuICBhdXRvOiAnQXV0b21hdGljIGNvbXBhY3Rpb24nLFxuICBhdXRvSGludDogJ09mZmljaWFsIGJldHdlZW4tc3RlcCBwcmVzc3VyZSBjb21wYWN0aW9uIGFuZCBjb250ZXh0LW92ZXJmbG93IHJlY292ZXJ5LicsXG4gIHR1cm5FbmQ6ICdDb21wYWN0IGF0IGVuZCBvZiB0dXJuJyxcbiAgdHVybkVuZEhpbnQ6ICdSdW5zIG9uZSBtb3JlIGNvbXBhY3Rpb24gd2hlbiB0aGUgYWdlbnQgZ29lcyBpZGxlLicsXG4gIHN1bW1hcml6YXRpb25UaXRsZTogJ1N1bW1hcml6YXRpb24nLFxuICBzdW1tYXJpemF0aW9uTW9kZTogJ01vZGVsJyxcbiAgbW9kZVNlc3Npb246ICdTZXNzaW9uIG1vZGVsJyxcbiAgbW9kZUN1c3RvbTogJ0N1c3RvbSBtb2RlbCcsXG4gIHByb3ZpZGVyOiAnUHJvdmlkZXInLFxuICBtb2RlbDogJ01vZGVsJyxcbiAgcmVhc29uaW5nOiAnUmVhc29uaW5nJyxcbiAgcmVhc29uaW5nRGVmYXVsdDogJ0RlZmF1bHQnLFxuICByZWFzb25pbmdPZmY6ICdPZmYnLFxuICBtYXhUb2tlbnM6ICdTdW1tYXJ5IG91dHB1dCBjYXAgKHRva2VucyknLFxuICBhZHZhbmNlZFRpdGxlOiAnQWR2YW5jZWQnLFxuICBjb21wYWN0aW9uUmV0cmllczogJ0V4dHJhIGNvbXBhY3Rpb24gYXR0ZW1wdHMnLFxuICBtYXhPdmVyZmxvd1JldHJpZXM6ICdPdmVyZmxvdyByZWNvdmVyeSBhdHRlbXB0cycsXG4gIC8vIE1vZGVsc1xuICBtb2RlbHNUaXRsZTogJ2xsYW1hLmNwcCBtb2RlbHMnLFxuICBtb2RlbHNJbnRybzogJ0ZldGNoIHRoZSBtb2RlbHMgYSBwcm92aWRlciBleHBvc2VzLCBwaWNrIHRoZSBvbmVzIHRvIGltcG9ydCBhbmQgcmV2aWV3IHRoZSBjaGFuZ2VzIGJlZm9yZSBhcHBseWluZy4nLFxuICBlbnJpY2g6ICdGZXRjaCBmcm9tIHNlcnZlcicsXG4gIGVucmljaGluZzogJ0ZldGNoaW5nXFx1MjAyNicsXG4gIG5vQmFzZVVybDogJ05vIGVuZHBvaW50IGNvbmZpZ3VyZWQgZm9yIHRoaXMgcHJvdmlkZXIuJyxcbiAgYXBwbGllZDogJ0ltcG9ydGVkIHtjb3VudH0gbW9kZWwocykuJyxcbiAgcHJldmlld1RpdGxlOiAnUmV2aWV3IGltcG9ydCcsXG4gIHByZXZpZXdIaW50OiAnQ2hlY2sgdGhlIG1vZGVscyB0byBpbXBvcnQgZnJvbSB0aGUgc2VydmVyLicsXG4gIHByZXZpZXdOZXc6ICduZXcgbW9kZWwnLFxuICBwcmV2aWV3Tm9DaGFuZ2U6ICdubyBjaGFuZ2UnLFxuICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcbiAgYXBwbHk6ICdJbXBvcnQgKHtjb3VudH0pJyxcbiAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgbm9Nb2RlbHM6ICdUaGUgc2VydmVyIHJldHVybmVkIG5vIG1vZGVscy4nLFxuICAvLyBOb3RpZmljYXRpb25zXG4gIGNvbG9yc0dyb3VwOiAnVGFiIHN0YXR1cyBsaWdodCcsXG4gIGNvbG9yc0ludHJvOiAnVGhlIGJyb3dzZXIgdGFiIGljb24gcmVmbGVjdHMgdGhlIHNlc3Npb24gc3RhdGU6IGdyZWVuID0gZmluaXNoZWQsIGFtYmVyID0gd2FpdGluZyBmb3IgeW91LicsXG4gIGNvbG9yc0VuYWJsZWQ6ICdDb2xvciB0aGUgdGFiIGljb24nLFxuICBjb2xvcnNFbmFibGVkSGludDogJ09mZiBrZWVwcyB0aGUgb2ZmaWNpYWwgZmF2aWNvbiBhdCBhbGwgdGltZXMuJyxcbiAgZ3JlZW5MYWJlbDogJ0ZpbmlzaGVkJyxcbiAgYW1iZXJMYWJlbDogJ1dhaXRpbmcgKHF1ZXN0aW9uL2FwcHJvdmFsKScsXG4gIHdvcmtpbmdMYWJlbDogJ1dvcmtpbmcnLFxuICB3b3JraW5nSGludDogJ1Nob3duIHdoaWxlIGEgc2Vzc2lvbiBpcyBnZW5lcmF0aW5nLicsXG4gIGJsYWNrTGFiZWw6ICdJZGxlIGNvbG9yJyxcbiAgYmxhY2tIaW50OiAnTGVhdmUgZW1wdHkgdG8ga2VlcCB0aGUgb2ZmaWNpYWwgZmF2aWNvbiB3aGVuIGlkbGUuJyxcbiAgY29sb3JSZXNldDogJ0NsZWFyJyxcbiAgY29sb3JVbnNldDogJ29mZmljaWFsJyxcbiAgbm90aWZ5R3JvdXA6ICdTeXN0ZW0gbm90aWZpY2F0aW9ucycsXG4gIG5vdGlmeUludHJvOiAnUmFpc2UgYSBicm93c2VyIG5vdGlmaWNhdGlvbiB3aGVuIGEgc2Vzc2lvbiBmaW5pc2hlcyBvciBhIHF1ZXN0aW9uL2FwcHJvdmFsIHdhaXRzIGZvciB5b3UuJyxcbiAgbm90aWZ5RW5hYmxlZDogJ0VuYWJsZSBub3RpZmljYXRpb25zJyxcbiAgbm90aWZ5RW5hYmxlZEhpbnQ6ICdUaGUgYnJvd3NlciBhc2tzIGZvciBwZXJtaXNzaW9uIHRoZSBmaXJzdCB0aW1lIHlvdSBlbmFibGUgdGhpcy4nLFxuICBub3RpZnlGb3JlZ3JvdW5kOiAnTm90aWZ5IGluIHRoZSBmb3JlZ3JvdW5kJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZEhpbnQ6ICdBbHNvIG5vdGlmeSB3aGlsZSB0aGUgdGFiIGlzIHZpc2libGUgYW5kIGZvY3VzZWQuJyxcbiAgbm90aWZ5RG9uZUdyb3VwOiAnV2hlbiBhIHNlc3Npb24gZmluaXNoZXMnLFxuICBub3RpZnlEb25lRW5hYmxlZDogJ05vdGlmeScsXG4gIG5vdGlmeURvbmVFbmFibGVkSGludDogJ1NlbmQgYSBub3RpZmljYXRpb24gd2hlbiBhIHNlc3Npb24gZmluaXNoZXMuJyxcbiAgbm90aWZ5UGVuZGluZ0dyb3VwOiAnV2hpbGUgd2FpdGluZyBmb3IgeW91JyxcbiAgbm90aWZ5UGVuZGluZ0VuYWJsZWQ6ICdOb3RpZnknLFxuICBub3RpZnlQZW5kaW5nRW5hYmxlZEhpbnQ6ICdTZW5kIGEgbm90aWZpY2F0aW9uIHdoZW4gYSBxdWVzdGlvbiBvciBhcHByb3ZhbCBhd2FpdHMgeW91LicsXG4gIHBlcnNpc3REb25lOiAnS2VlcCBvbiBzY3JlZW4nLFxuICBwZXJzaXN0UGVuZGluZzogJ0tlZXAgb24gc2NyZWVuJyxcbiAgcGVyc2lzdEhpbnQ6ICdPbjogdGhlIG5vdGlmaWNhdGlvbiBzdGF5cyB1bnRpbCB5b3UgZGlzbWlzcyBpdCAoaWYgdGhlIE9TIGhvbm9ycyBpdCkuJyxcbiAgc291bmQ6ICdTb3VuZCcsXG4gIG5vdGlmeVZvbHVtZTogJ1ZvbHVtZScsXG4gIHNvdW5kRG9uZTogJ09uIHNlc3Npb24gZmluaXNoZWQnLFxuICBzb3VuZFBlbmRpbmc6ICdXaGlsZSB3YWl0aW5nIGZvciB5b3UnLFxuICBzb3VuZE5vU291bmQ6ICdObyBzb3VuZCcsXG4gIHNvdW5kUGFja0J1aWx0aW46ICdCdWlsdC1pbicsXG4gIHNvdW5kQnVpbHRpblVwOiAnQ2hpbWUgVXAnLFxuICBzb3VuZEJ1aWx0aW5Eb3duOiAnQ2hpbWUgRG93bicsXG4gIHBlcm1pc3Npb25EZW5pZWQ6ICdCbG9ja2VkIGJ5IHRoZSBicm93c2VyIFxcdTIwMTQgcmUtZW5hYmxlIG5vdGlmaWNhdGlvbnMgaW4gdGhlIHNpdGUgc2V0dGluZ3MuJyxcbiAgcGVybWlzc2lvblVuc3VwcG9ydGVkOiAnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgc3lzdGVtIG5vdGlmaWNhdGlvbnMuJyxcbiAgbm90aWZ5RG9uZVRpdGxlOiAnU2Vzc2lvbiBmaW5pc2hlZCcsXG4gIG5vdGlmeVBlbmRpbmdUaXRsZTogJ1NvbWV0aGluZyBhd2FpdHMgeW91JyxcbiAgbm90aWZ5RHVyYXRpb246ICd0dXJuIHRvb2sge2R1cmF0aW9ufScsXG4gIGR1cmF0aW9uU2Vjb25kczogJ3tzZWNvbmRzfXMnLFxuICBkdXJhdGlvbk1pbnV0ZXM6ICd7bWludXRlc31te3NlY29uZHN9cycsXG4gIHBlbmRpbmdLaW5kQXBwcm92YWw6ICdBcHByb3ZhbCBuZWVkZWQnLFxuICBwZW5kaW5nS2luZFF1ZXN0aW9uOiAnUXVlc3Rpb24nLFxuICBwZW5kaW5nS2luZFBsYW5SZXZpZXc6ICdQbGFuIHJldmlldycsXG4gIHBlbmRpbmdBcHByb3ZhbFRvb2w6ICdBcHByb3ZhbCBcXHUwMGI3IHt0b29sfScsXG4gIHBlbmRpbmdRdWVzdGlvbkNob29zZTogJ0Nob29zZSBhbiBvcHRpb24nLFxuICBwZW5kaW5nUXVlc3Rpb25NdWx0aTogJ0Nob29zZSBvcHRpb25zJyxcbiAgcGVuZGluZ1F1ZXN0aW9uRmlsbDogJ1R5cGUgYW4gYW5zd2VyJyxcbiAgcGVuZGluZ1F1ZXN0aW9uQmF0Y2g6ICd7Y291bnR9IHF1ZXN0aW9ucycsXG4gIC8vIFNoYXJlZFxuICBzYXZlOiAnU2F2ZScsXG4gIHNhdmVkOiAnU2F2ZWQuJyxcbiAgaW52YWxpZFRva2VuOiAnRW50ZXIgYSBudW1iZXIgb3IgYSBrL00gc3VmZml4IHZhbHVlIChlLmcuIDEzMGspLicsXG4gIGludmFsaWRIZXg6ICdDb2xvciBtdXN0IGJlICNSUkdHQkIuJyxcbiAgZXJyb3JQcmVmaXg6ICdFcnJvcjogJyxcbiAgdW5hdmFpbGFibGU6ICdUaGlzIHNldHRpbmcgaXMgbm90IGF2YWlsYWJsZSBmcm9tIHRoaXMgY2xpZW50LicsXG4gIGxvYWRpbmc6ICdMb2FkaW5nXFx1MjAyNicsXG59XG5cbmNvbnN0IHpoID0ge1xuICB0aXRsZTogJ01hbGtvIFxcdTUwNGZcXHU1OTdkJyxcbiAgaW50cm86ICdcXHU1MzhiXFx1N2YyOVxcdTMwMDFsbGFtYS5jcHAgXFx1NmEyMVxcdTU3OGJcXHU4ODY1XFx1NTE2OFxcdTRlMGVcXHU5MDFhXFx1NzdlNVxcdTMwMDInLFxuICB0YWJDb21wYWN0aW9uOiAnXFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1NTM4YlxcdTdmMjknLFxuICB0YWJNb2RlbHM6ICdsbGFtYS5jcHAgXFx1NmEyMVxcdTU3OGInLFxuICB0YWJOb3RpZmljYXRpb25zOiAnXFx1OTAxYVxcdTc3ZTUnLFxuICB0aHJlc2hvbGRUaXRsZTogJ1xcdTUzOGJcXHU3ZjI5XFx1OTYwMFxcdTUwM2MnLFxuICB0aHJlc2hvbGRUb2tlbnM6ICdcXHU5NjAwXFx1NTAzY1xcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgdGhyZXNob2xkVG9rZW5zSGludDogJ1xcdTdlZGRcXHU1YmY5IHRva2VuIFxcdTk2MDBcXHU1MDNjXFx1ZmYwY1xcdTU5ODIgMTMwa1xcdTMwMDJcXHU3NTU5XFx1N2E3YS8wID0gXFx1NzUyOFxcdTRlMGJcXHU2NWI5XFx1NmJkNFxcdTRmOGJcXHUzMDAyJyxcbiAgY29udGV4dFdpbmRvdzogJ1xcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTdhOTdcXHU1M2UzXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICBjb250ZXh0V2luZG93SGludDogJ1xcdTdlZGRcXHU1YmY5XFx1OTYwMFxcdTUwM2NcXHU2MjQwXFx1NGY5ZFxcdTYzNmVcXHU3Njg0XFx1N2E5N1xcdTUzZTNcXHVmZjA4XFx1NTk4MiAyMDBrXFx1ZmYwOVxcdTMwMDIwID0gXFx1NTNlYVxcdTc1MjhcXHU2YmQ0XFx1NGY4YlxcdTMwMDInLFxuICB0aHJlc2hvbGRSYXRpbzogJ1xcdTk2MDBcXHU1MDNjXFx1NmJkNFxcdTRmOGInLFxuICB0aHJlc2hvbGRSYXRpb0hpbnQ6ICdcXHU1ZjUzXFx1N2VkZFxcdTViZjlcXHU5NjAwXFx1NTAzY1xcdTRlM2FcXHU3YTdhXFx1NjVmNlxcdTRmN2ZcXHU3NTI4XFx1ZmYwODAuOCA9IFxcdTdhOTdcXHU1M2UzXFx1NzY4NCA4MCVcXHVmZjA5XFx1MzAwMicsXG4gIGhlYWRyb29tOiAnXFx1OTg4NFxcdTc1NTlcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIGhlYWRyb29tSGludDogJ1xcdTU3MjhcXHU4ZjkzXFx1NTFmYVxcdTk4ODRcXHU3Yjk3XFx1NGU0YlxcdTU5MTZcXHU1MThkXFx1OTg4NFxcdTc1NTlcXHU3Njg0XFx1OTFjZlxcdTMwMDJcXHU1Yjk4XFx1NjViOVxcdTllZDhcXHU4YmE0IDY1NTM2IFxcdTRmMWFcXHU2MjhhXFx1ODllNlxcdTUzZDFcXHU3MGI5XFx1NjJjOVxcdTUyMzAgODAlIFxcdTRlZTVcXHU0ZTBiXFx1MzAwMicsXG4gIHJldGVudGlvblRpdGxlOiAnXFx1NGZkZFxcdTc1NTknLFxuICByZXRhaW5Ub2tlbnM6ICdcXHU0ZmRkXFx1NzU1OVxcdTY3MDBcXHU4ZmQxXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICByZXRhaW5Ub2tlbnNIaW50OiAnXFx1OTAxMFxcdTViNTdcXHU0ZmRkXFx1NzU1OVxcdTc2ODRcXHU4ZmQxXFx1NjcxZlxcdTk4ODRcXHU3Yjk3XFx1ZmYwY1xcdTU5ODIgMzJrXFx1MzAwMlxcdTc1NTlcXHU3YTdhLzAgPSBcXHU3NTI4XFx1NGUwYlxcdTY1YjlcXHU2YmQ0XFx1NGY4YlxcdTMwMDInLFxuICByZXRhaW5SYXRpbzogJ1xcdTRmZGRcXHU3NTU5XFx1NmJkNFxcdTRmOGInLFxuICBiZWhhdmlvdXJUaXRsZTogJ1xcdTg4NGNcXHU0ZTNhJyxcbiAgYXV0bzogJ1xcdTgxZWFcXHU1MmE4XFx1NTM4YlxcdTdmMjknLFxuICBhdXRvSGludDogJ1xcdTViOThcXHU2NWI5XFx1NzY4NFxcdTZiNjVcXHU5NWY0XFx1NTM4YlxcdTUyOWJcXHU1MzhiXFx1N2YyOVxcdTRlMGVcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU2ZWEyXFx1NTFmYVxcdTYwNjJcXHU1OTBkXFx1MzAwMicsXG4gIHR1cm5FbmQ6ICdcXHU4ZjZlXFx1NjcyYlxcdTUzOGJcXHU3ZjI5JyxcbiAgdHVybkVuZEhpbnQ6ICdcXHU0ZWUzXFx1NzQwNlxcdThmNmNcXHU0ZTNhIGlkbGUgXFx1NjVmNlxcdTUxOGRcXHU1MzhiXFx1N2YyOVxcdTRlMDBcXHU2YjIxXFx1MzAwMicsXG4gIHN1bW1hcml6YXRpb25UaXRsZTogJ1xcdTY0NThcXHU4OTgxJyxcbiAgc3VtbWFyaXphdGlvbk1vZGU6ICdcXHU2YTIxXFx1NTc4YicsXG4gIG1vZGVTZXNzaW9uOiAnXFx1NGYxYVxcdThiZGRcXHU2YTIxXFx1NTc4YicsXG4gIG1vZGVDdXN0b206ICdcXHU4MWVhXFx1NWI5YVxcdTRlNDlcXHU2YTIxXFx1NTc4YicsXG4gIHByb3ZpZGVyOiAnXFx1NjNkMFxcdTRmOWJcXHU1NTQ2JyxcbiAgbW9kZWw6ICdcXHU2YTIxXFx1NTc4YicsXG4gIHJlYXNvbmluZzogJ1xcdTYwMWRcXHU4MDAzXFx1N2VhN1xcdTUyMmInLFxuICByZWFzb25pbmdEZWZhdWx0OiAnXFx1OWVkOFxcdThiYTQnLFxuICByZWFzb25pbmdPZmY6ICdcXHU1MTczXFx1OTVlZCcsXG4gIG1heFRva2VuczogJ1xcdTY0NThcXHU4OTgxXFx1OGY5M1xcdTUxZmFcXHU0ZTBhXFx1OTY1MFxcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgYWR2YW5jZWRUaXRsZTogJ1xcdTlhZDhcXHU3ZWE3JyxcbiAgY29tcGFjdGlvblJldHJpZXM6ICdcXHU5ODlkXFx1NTkxNlxcdTUzOGJcXHU3ZjI5XFx1NWMxZFxcdThiZDUnLFxuICBtYXhPdmVyZmxvd1JldHJpZXM6ICdcXHU2ZWEyXFx1NTFmYVxcdTYwNjJcXHU1OTBkXFx1NWMxZFxcdThiZDUnLFxuICBtb2RlbHNUaXRsZTogJ2xsYW1hLmNwcCBcXHU2YTIxXFx1NTc4YicsXG4gIG1vZGVsc0ludHJvOiAnXFx1NGVjZVxcdTY3MGRcXHU1MmExXFx1NTY2OFxcdTgzYjdcXHU1M2Q2XFx1NmEyMVxcdTU3OGJcXHU1MjE3XFx1ODg2OFxcdWZmMGNcXHU1MmZlXFx1OTAwOVxcdTg5ODFcXHU1YmZjXFx1NTE2NVxcdTc2ODRcXHU2YTIxXFx1NTc4YlxcdWZmMGNcXHU3ODZlXFx1OGJhNFxcdTUzZDhcXHU2NmY0XFx1NTQwZVxcdTVlOTRcXHU3NTI4XFx1MzAwMicsXG4gIGVucmljaDogJ1xcdTRlY2VcXHU2NzBkXFx1NTJhMVxcdTU2NjhcXHU4M2I3XFx1NTNkNicsXG4gIGVucmljaGluZzogJ1xcdTZiNjNcXHU1NzI4XFx1ODNiN1xcdTUzZDZcXHUyMDI2JyxcbiAgbm9CYXNlVXJsOiAnXFx1OGJlNVxcdTYzZDBcXHU0ZjliXFx1NTU0NlxcdTY3MmFcXHU5MTRkXFx1N2Y2ZVxcdTdhZWZcXHU3MGI5XFx1MzAwMicsXG4gIGFwcGxpZWQ6ICdcXHU1ZGYyXFx1NWJmY1xcdTUxNjUge2NvdW50fSBcXHU0ZTJhXFx1NmEyMVxcdTU3OGJcXHUzMDAyJyxcbiAgcHJldmlld1RpdGxlOiAnXFx1Nzg2ZVxcdThiYTRcXHU1YmZjXFx1NTE2NScsXG4gIHByZXZpZXdIaW50OiAnXFx1NTJmZVxcdTkwMDlcXHU4OTgxXFx1NGVjZVxcdTY3MGRcXHU1MmExXFx1NTY2OFxcdTViZmNcXHU1MTY1XFx1NzY4NFxcdTZhMjFcXHU1NzhiXFx1MzAwMicsXG4gIHByZXZpZXdOZXc6ICdcXHU2NWIwXFx1NmEyMVxcdTU3OGInLFxuICBwcmV2aWV3Tm9DaGFuZ2U6ICdcXHU2NWUwXFx1NTNkOFxcdTUzMTYnLFxuICBzZWxlY3RBbGw6ICdcXHU1MTY4XFx1OTAwOScsXG4gIGFwcGx5OiAnXFx1NWJmY1xcdTUxNjVcXHVmZjA4e2NvdW50fVxcdWZmMDknLFxuICBjYW5jZWw6ICdcXHU1M2Q2XFx1NmQ4OCcsXG4gIG5vTW9kZWxzOiAnXFx1NjcwZFxcdTUyYTFcXHU1NjY4XFx1NjcyYVxcdThmZDRcXHU1NmRlXFx1NGVmYlxcdTRmNTVcXHU2YTIxXFx1NTc4YlxcdTMwMDInLFxuICBjb2xvcnNHcm91cDogJ1xcdTY4MDdcXHU3YjdlXFx1OTg3NVxcdTcyYjZcXHU2MDAxXFx1NzA2ZicsXG4gIGNvbG9yc0ludHJvOiAnXFx1NjgwN1xcdTdiN2VcXHU5ODc1XFx1NTZmZVxcdTY4MDdcXHU5NjhmXFx1NGYxYVxcdThiZGRcXHU3MmI2XFx1NjAwMVxcdTUzZDhcXHU4MjcyXFx1ZmYxYVxcdTdlZmYgPSBcXHU1ZGYyXFx1NWI4Y1xcdTYyMTBcXHVmZjBjXFx1NzQyNVxcdTczYzAgPSBcXHU3YjQ5XFx1NGY2MFxcdTU5MDRcXHU3NDA2XFx1MzAwMicsXG4gIGNvbG9yc0VuYWJsZWQ6ICdcXHU1NDJmXFx1NzUyOFxcdTU2ZmVcXHU2ODA3XFx1NTNkOFxcdTgyNzInLFxuICBjb2xvcnNFbmFibGVkSGludDogJ1xcdTUxNzNcXHU5NWVkXFx1NTQwZVxcdTU5Y2JcXHU3ZWM4XFx1NGY3ZlxcdTc1MjhcXHU1Yjk4XFx1NjViOVxcdTU2ZmVcXHU2ODA3XFx1MzAwMicsXG4gIGdyZWVuTGFiZWw6ICdcXHU1ZGYyXFx1NWI4Y1xcdTYyMTAnLFxuICBhbWJlckxhYmVsOiAnXFx1NWY4NVxcdTU5MDRcXHU3NDA2XFx1ZmYwOFxcdTYzZDBcXHU5NWVlL1xcdTViYTFcXHU2Mjc5XFx1ZmYwOScsXG4gIHdvcmtpbmdMYWJlbDogJ1xcdTc1MWZcXHU2MjEwXFx1NGUyZCcsXG4gIHdvcmtpbmdIaW50OiAnXFx1NGYxYVxcdThiZGRcXHU3NTFmXFx1NjIxMFxcdTY1ZjZcXHU2NjNlXFx1NzkzYVxcdTMwMDInLFxuICBibGFja0xhYmVsOiAnXFx1OWVkOFxcdThiYTRcXHU4MjcyJyxcbiAgYmxhY2tIaW50OiAnXFx1NzU1OVxcdTdhN2FcXHU1MjE5XFx1N2E3YVxcdTk1ZjJcXHU2NWY2XFx1NGY3ZlxcdTc1MjhcXHU1Yjk4XFx1NjViOVxcdTU2ZmVcXHU2ODA3XFx1MzAwMicsXG4gIGNvbG9yUmVzZXQ6ICdcXHU2ZTA1XFx1OTY2NCcsXG4gIGNvbG9yVW5zZXQ6ICdcXHU1Yjk4XFx1NjViOScsXG4gIG5vdGlmeUdyb3VwOiAnXFx1N2NmYlxcdTdlZGZcXHU5MDFhXFx1NzdlNScsXG4gIG5vdGlmeUludHJvOiAnXFx1NGYxYVxcdThiZGRcXHU1YjhjXFx1NjIxMFxcdTYyMTZcXHU2NzA5XFx1NjNkMFxcdTk1ZWUvXFx1NWJhMVxcdTYyNzlcXHU3YjQ5XFx1NGY2MFxcdTU5MDRcXHU3NDA2XFx1NjVmNlxcdTUzZDFcXHU5MDAxXFx1NmQ0ZlxcdTg5YzhcXHU1NjY4XFx1OTAxYVxcdTc3ZTVcXHUzMDAyJyxcbiAgbm90aWZ5RW5hYmxlZDogJ1xcdTU0MmZcXHU3NTI4XFx1OTAxYVxcdTc3ZTUnLFxuICBub3RpZnlFbmFibGVkSGludDogJ1xcdTk5OTZcXHU2YjIxXFx1NWYwMFxcdTU0MmZcXHU2NWY2XFx1NmQ0ZlxcdTg5YzhcXHU1NjY4XFx1NGYxYVxcdThiZTJcXHU5NWVlXFx1NjM4OFxcdTY3NDNcXHUzMDAyJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZDogJ1xcdTUyNGRcXHU1M2YwXFx1NjNkMFxcdTkxOTInLFxuICBub3RpZnlGb3JlZ3JvdW5kSGludDogJ1xcdTY4MDdcXHU3YjdlXFx1OTg3NVxcdTUzZWZcXHU4OWMxXFx1NGUxNFxcdTY3MDlcXHU3MTI2XFx1NzBiOVxcdTY1ZjZcXHU0ZTVmXFx1NjNkMFxcdTkxOTJcXHUzMDAyJyxcbiAgbm90aWZ5RG9uZUdyb3VwOiAnXFx1NGYxYVxcdThiZGRcXHU1YjhjXFx1NjIxMFxcdTY1ZjYnLFxuICBub3RpZnlEb25lRW5hYmxlZDogJ1xcdTkwMWFcXHU3N2U1JyxcbiAgbm90aWZ5RG9uZUVuYWJsZWRIaW50OiAnXFx1NGYxYVxcdThiZGRcXHU1YjhjXFx1NjIxMFxcdTY1ZjZcXHU1M2QxXFx1OTAwMVxcdTkwMWFcXHU3N2U1XFx1MzAwMicsXG4gIG5vdGlmeVBlbmRpbmdHcm91cDogJ1xcdTdiNDlcXHU1Zjg1XFx1NTkwNFxcdTc0MDZcXHU2NWY2JyxcbiAgbm90aWZ5UGVuZGluZ0VuYWJsZWQ6ICdcXHU5MDFhXFx1NzdlNScsXG4gIG5vdGlmeVBlbmRpbmdFbmFibGVkSGludDogJ1xcdTY3MDlcXHU2M2QwXFx1OTVlZVxcdTYyMTZcXHU1YmExXFx1NjI3OVxcdTdiNDlcXHU1Zjg1XFx1NTkwNFxcdTc0MDZcXHU2NWY2XFx1NTNkMVxcdTkwMDFcXHU5MDFhXFx1NzdlNVxcdTMwMDInLFxuICBwZXJzaXN0RG9uZTogJ1xcdTVlMzhcXHU5YTdiXFx1NWM0ZlxcdTVlNTUnLFxuICBwZXJzaXN0UGVuZGluZzogJ1xcdTVlMzhcXHU5YTdiXFx1NWM0ZlxcdTVlNTUnLFxuICBwZXJzaXN0SGludDogJ1xcdTVmMDBcXHU1NDJmXFx1NTQwZVxcdTk3MDBcXHU2MjRiXFx1NTJhOFxcdTUxNzNcXHU5NWVkXFx1NjI0ZFxcdTRmMWFcXHU2ZDg4XFx1NTkzMVxcdWZmMDhcXHU1M2Q3XFx1N2NmYlxcdTdlZGZcXHU2NTJmXFx1NjMwMVxcdTk2NTBcXHU1MjM2XFx1ZmYwOVxcdTMwMDInLFxuICBzb3VuZDogJ1xcdTYzZDBcXHU3OTNhXFx1OTdmMycsXG4gIG5vdGlmeVZvbHVtZTogJ1xcdTk3ZjNcXHU5MWNmJyxcbiAgc291bmREb25lOiAnXFx1NGYxYVxcdThiZGRcXHU1YjhjXFx1NjIxMFxcdTY1ZjYnLFxuICBzb3VuZFBlbmRpbmc6ICdcXHU3YjQ5XFx1NGY2MFxcdTU5MDRcXHU3NDA2XFx1NjVmNicsXG4gIHNvdW5kTm9Tb3VuZDogJ1xcdTY1ZTBcXHU1OGYwJyxcbiAgc291bmRQYWNrQnVpbHRpbjogJ1xcdTUxODVcXHU3ZjZlJyxcbiAgc291bmRCdWlsdGluVXA6ICdDaGltZSBVcCcsXG4gIHNvdW5kQnVpbHRpbkRvd246ICdDaGltZSBEb3duJyxcbiAgcGVybWlzc2lvbkRlbmllZDogJ1xcdTVkZjJcXHU4OGFiXFx1NmQ0ZlxcdTg5YzhcXHU1NjY4XFx1NjJkMlxcdTdlZGRcXHVmZjBjXFx1OGJmN1xcdTU3MjhcXHU3YWQ5XFx1NzBiOVxcdThiYmVcXHU3ZjZlXFx1NGUyZFxcdTYwNjJcXHU1OTBkXFx1OTAxYVxcdTc3ZTVcXHU2NzQzXFx1OTY1MFxcdTMwMDInLFxuICBwZXJtaXNzaW9uVW5zdXBwb3J0ZWQ6ICdcXHU1ZjUzXFx1NTI0ZFxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTRlMGRcXHU2NTJmXFx1NjMwMVxcdTdjZmJcXHU3ZWRmXFx1OTAxYVxcdTc3ZTVcXHUzMDAyJyxcbiAgbm90aWZ5RG9uZVRpdGxlOiAnXFx1NGYxYVxcdThiZGRcXHU1ZGYyXFx1NWI4Y1xcdTYyMTAnLFxuICBub3RpZnlQZW5kaW5nVGl0bGU6ICdcXHU2NzA5XFx1NGVhNFxcdTRlOTJcXHU3YjQ5XFx1NWY4NVxcdTU5MDRcXHU3NDA2JyxcbiAgbm90aWZ5RHVyYXRpb246ICdcXHU2NzJjXFx1OGY2ZVxcdTYwM2JcXHU3NTI4XFx1NjVmNiB7ZHVyYXRpb259JyxcbiAgZHVyYXRpb25TZWNvbmRzOiAne3NlY29uZHN9XFx1NzlkMicsXG4gIGR1cmF0aW9uTWludXRlczogJ3ttaW51dGVzfVxcdTUyMDZ7c2Vjb25kc31cXHU3OWQyJyxcbiAgcGVuZGluZ0tpbmRBcHByb3ZhbDogJ1xcdTVmODVcXHU1YmExXFx1NjI3OScsXG4gIHBlbmRpbmdLaW5kUXVlc3Rpb246ICdcXHU1NDExXFx1NGY2MFxcdTYzZDBcXHU5NWVlJyxcbiAgcGVuZGluZ0tpbmRQbGFuUmV2aWV3OiAnXFx1OGJhMVxcdTUyMTJcXHU1Zjg1XFx1NWJhMVxcdTY4MzgnLFxuICBwZW5kaW5nQXBwcm92YWxUb29sOiAnXFx1NWY4NVxcdTViYTFcXHU2Mjc5IFxcdTAwYjcge3Rvb2x9JyxcbiAgcGVuZGluZ1F1ZXN0aW9uQ2hvb3NlOiAnXFx1OGJmN1xcdTRmNjBcXHU5MDA5XFx1NjJlOScsXG4gIHBlbmRpbmdRdWVzdGlvbk11bHRpOiAnXFx1OGJmN1xcdTRmNjBcXHU1OTFhXFx1OTAwOScsXG4gIHBlbmRpbmdRdWVzdGlvbkZpbGw6ICdcXHU4YmY3XFx1NGY2MFxcdTU4NmJcXHU1MTk5JyxcbiAgcGVuZGluZ1F1ZXN0aW9uQmF0Y2g6ICdcXHU1NDExXFx1NGY2MFxcdTYzZDBcXHU5NWVlXFx1ZmYwOHtjb3VudH0gXFx1NGUyYVxcdWZmMDknLFxuICBzYXZlOiAnXFx1NGZkZFxcdTViNTgnLFxuICBzYXZlZDogJ1xcdTVkZjJcXHU0ZmRkXFx1NWI1OFxcdTMwMDInLFxuICBpbnZhbGlkVG9rZW46ICdcXHU4YmY3XFx1OGY5M1xcdTUxNjVcXHU2NTcwXFx1NWI1N1xcdTYyMTZcXHU1ZTI2IGsvTSBcXHU1NDBlXFx1N2YwMFxcdTc2ODRcXHU1MDNjXFx1ZmYwOFxcdTU5ODIgMTMwa1xcdWZmMDlcXHUzMDAyJyxcbiAgaW52YWxpZEhleDogJ1xcdTk4OWNcXHU4MjcyXFx1NjgzY1xcdTVmMGZcXHU1ZTk0XFx1NGUzYSAjUlJHR0JCXFx1MzAwMicsXG4gIGVycm9yUHJlZml4OiAnXFx1OTUxOVxcdThiZWZcXHVmZjFhICcsXG4gIHVuYXZhaWxhYmxlOiAnXFx1NmI2NFxcdThiYmVcXHU3ZjZlXFx1NTcyOFxcdTVmNTNcXHU1MjRkXFx1NWJhMlxcdTYyMzdcXHU3YWVmXFx1NGUwZFxcdTUzZWZcXHU3NTI4XFx1MzAwMicsXG4gIGxvYWRpbmc6ICdcXHU1MmEwXFx1OGY3ZFxcdTRlMmRcXHUyMDI2Jyxcbn1cblxuLyoqIFBhcnNlIGEgaHVtYW4gdG9rZW4gY291bnQgKGAxMzBrYCwgYDEuNW1gLCBgMTMwMDAwYCkuICovXG5mdW5jdGlvbiBwYXJzZVRva2VuVGV4dCh0ZXh0KSB7XG4gIGNvbnN0IHJhdyA9IFN0cmluZyh0ZXh0ID8/ICcnKS50cmltKCkucmVwbGFjZSgvW1xcc19dL2csICcnKVxuICBpZiAocmF3ID09PSAnJykgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBtYXRjaCA9IC9eKFxcZCsoPzpbLixdXFxkKyk/KShba0ttTV0pPyQvLmV4ZWMocmF3KVxuICBpZiAobWF0Y2ggPT09IG51bGwpIHJldHVybiB1bmRlZmluZWRcbiAgY29uc3QgYmFzZSA9IE51bWJlcihtYXRjaFsxXS5yZXBsYWNlKCcsJywgJy4nKSlcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoYmFzZSkgfHwgYmFzZSA8IDApIHJldHVybiB1bmRlZmluZWRcbiAgY29uc3Qgc2NhbGUgPSBtYXRjaFsyXSA9PT0gdW5kZWZpbmVkID8gMSA6IG1hdGNoWzJdLnRvTG93ZXJDYXNlKCkgPT09ICdrJyA/IDEwMDAgOiAxMDAwMDAwXG4gIHJldHVybiBNYXRoLnJvdW5kKGJhc2UgKiBzY2FsZSlcbn1cblxuLyoqIEJ1aWxkIGB7IHByb3ZpZGVyLCBtb2RlbCwgbmFtZSwgbGV2ZWxzIH1gIHJvd3MgZnJvbSB0aGUgcGktYWkgY29uZmlnIHZhbHVlLiAqL1xuZnVuY3Rpb24gYnVpbGRDYXRhbG9nKHByb3ZpZGVycykge1xuICBjb25zdCByb3dzID0gW11cbiAgaWYgKHByb3ZpZGVycyA9PT0gbnVsbCB8fCB0eXBlb2YgcHJvdmlkZXJzICE9PSAnb2JqZWN0JykgcmV0dXJuIHJvd3NcbiAgZm9yIChjb25zdCBbcHJvdmlkZXIsIHByb2ZpbGVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3ZpZGVycykpIHtcbiAgICBjb25zdCBtb2RlbHMgPSBwcm9maWxlICE9PSBudWxsICYmIHR5cGVvZiBwcm9maWxlID09PSAnb2JqZWN0JyAmJiBBcnJheS5pc0FycmF5KHByb2ZpbGUubW9kZWxzKSA/IHByb2ZpbGUubW9kZWxzIDogW11cbiAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscykge1xuICAgICAgaWYgKG1vZGVsID09PSBudWxsIHx8IHR5cGVvZiBtb2RlbCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG1vZGVsLmlkICE9PSAnc3RyaW5nJykgY29udGludWVcbiAgICAgIGNvbnN0IGVmZm9ydHMgPSBtb2RlbC5yZWFzb25pbmdFZmZvcnRzXG4gICAgICBjb25zdCBsZXZlbHMgPSBlZmZvcnRzID09PSBmYWxzZSA/IFtdIDogKGVmZm9ydHMgIT09IG51bGwgJiYgdHlwZW9mIGVmZm9ydHMgPT09ICdvYmplY3QnID8gT2JqZWN0LmtleXMoZWZmb3J0cykgOiBbXSlcbiAgICAgIHJvd3MucHVzaCh7IHByb3ZpZGVyLCBtb2RlbDogbW9kZWwuaWQsIG5hbWU6IHR5cGVvZiBtb2RlbC5uYW1lID09PSAnc3RyaW5nJyAmJiBtb2RlbC5uYW1lICE9PSAnJyA/IG1vZGVsLm5hbWUgOiBtb2RlbC5pZCwgbGV2ZWxzIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiByb3dzXG59XG5cbmNvbnN0IFMgPSB7XG4gIHdyYXA6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiA0LCBtYXhXaWR0aDogNjgwLCBwYWRkaW5nVG9wOiA0IH0sXG4gIHRhYnM6IHsgbWFyZ2luVG9wOiA0IH0sXG4gIGdyb3VwOiB7IG1hcmdpblRvcDogMTAsIHBhZGRpbmdUb3A6IDEwLCBib3JkZXJUb3A6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwzKScgfSxcbiAgZ3JvdXBGaXJzdDogeyBtYXJnaW5Ub3A6IDEwIH0sXG4gIGdyb3VwVGl0bGU6IHsgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDIgfSxcbiAgbGFiZWw6IHsgZGlzcGxheTogJ2Jsb2NrJywgZm9udFdlaWdodDogNjAwLCBtYXJnaW5Cb3R0b206IDYsIGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpJyB9LFxuICBoaW50OiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiwgbWFyZ2luOiAnNHB4IDAgMTJweCcgfSxcbiAgaW5wdXQ6IHtcbiAgICBoZWlnaHQ6IDMyLFxuICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sNCknLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGJhY2tncm91bmQ6ICd2YXIoLS1kc3ctYWxpYXMtYmctbGF5ZXItMSknLFxuICAgIGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXByaW1hcnkpJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICB9LFxuICBzZWxlY3Q6IHsgY3Vyc29yOiAncG9pbnRlcicgfSxcbiAgaGV4OiB7IGZvbnRGYW1pbHk6ICdtb25vc3BhY2UnLCB3aWR0aDogMTEwLCBmbGV4OiAnMCAwIGF1dG8nIH0sXG4gIGNvbG9yOiB7XG4gICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICB3aWR0aDogMzIsXG4gICAgaGVpZ2h0OiAzMixcbiAgICBwYWRkaW5nOiAyLFxuICAgIGJvcmRlcjogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDQpJyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgYmFja2dyb3VuZDogJ3ZhcigtLWRzdy1hbGlhcy1iZy1sYXllci0xKScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gIH0sXG4gIHJvd1R3bzogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMTIgfSxcbiAgcm93RmxleDogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogOCwgYWxpZ25JdGVtczogJ2NlbnRlcicgfSxcbiAgY29sOiB7IGZsZXg6IDEsIG1pbldpZHRoOiAwIH0sXG4gIHByb3ZpZGVyQmxvY2s6IHsgbWFyZ2luQm90dG9tOiAxMiB9LFxuICBwcmV2aWV3OiB7IG1hcmdpblRvcDogOCwgcGFkZGluZzogMTAsIGJvcmRlcjogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDQpJywgYm9yZGVyUmFkaXVzOiA4LCBiYWNrZ3JvdW5kOiAndmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTEpJyB9LFxuICBwcmV2aWV3Um93OiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgcGFkZGluZzogJzRweCAwJywgY3Vyc29yOiAncG9pbnRlcicgfSxcbiAgdG9nZ2xlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTAsIG1hcmdpbkJvdHRvbTogMTIgfSxcbiAgdG9nZ2xlVGV4dDogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDIgfSxcbiAgdG9nZ2xlTGFiZWw6IHsgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScgfSxcbiAgZXJyb3I6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtc3RhdGUtZXJyb3ItcHJpbWFyeSwgI2MwMCknLCBmb250U2l6ZTogMTIsIG1hcmdpblRvcDogMiB9LFxufVxuXG5mdW5jdGlvbiBQcmVmc1NlY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgeyB0LCB1c2VQcmVmcywgdXNlTW9kZWxDYXRhbG9nLCBzYXZlLCBwcm9iZSwgd3JpdGVNb2RlbHMgfSA9IHByb3BzXG4gIGNvbnN0IHNuYXAgPSB1c2VQcmVmcygocykgPT4gcylcbiAgY29uc3QgY2F0YWxvZ1NuYXAgPSB1c2VNb2RlbENhdGFsb2coKHMpID0+IHMpXG4gIGNvbnN0IHZhbHVlID0gc25hcCAhPT0gbnVsbCAmJiBzbmFwICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHNuYXAudmFsdWUgPT09ICdvYmplY3QnICYmIHNuYXAudmFsdWUgIT09IG51bGwgPyBzbmFwLnZhbHVlIDoge31cbiAgY29uc3QgcHJvdmlkZXJzID0gY2F0YWxvZ1NuYXAgIT09IG51bGwgJiYgY2F0YWxvZ1NuYXAgIT09IHVuZGVmaW5lZCAmJiBjYXRhbG9nU25hcC52YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgY2F0YWxvZ1NuYXAudmFsdWUgPT09ICdvYmplY3QnID8gY2F0YWxvZ1NuYXAudmFsdWUucHJvdmlkZXJzIDogdW5kZWZpbmVkXG4gIGNvbnN0IGNhdGFsb2cgPSBidWlsZENhdGFsb2cocHJvdmlkZXJzKVxuICBjb25zdCBzdGF0dXMgPSBzbmFwICE9PSBudWxsICYmIHNuYXAgIT09IHVuZGVmaW5lZCA/IHNuYXAuc3RhdHVzIDogJ2xvYWRpbmcnXG4gIGNvbnN0IHdyaXRhYmxlID0gISEoc25hcCAmJiBzbmFwLndyaXRhYmxlKVxuXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZSgnY29tcGFjdGlvbicpXG4gIGNvbnN0IFtwZXJtaXNzaW9uLCBzZXRQZXJtaXNzaW9uXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IGN1cnJlbnROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkpXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gKHtcbiAgICB0aHJlc2hvbGRUb2tlbnM6IHZhbHVlLnRocmVzaG9sZFRva2VucyA/IFN0cmluZyh2YWx1ZS50aHJlc2hvbGRUb2tlbnMpIDogJycsXG4gICAgY29udGV4dFdpbmRvd1Rva2VuczogdmFsdWUuY29udGV4dFdpbmRvd1Rva2VucyA/IFN0cmluZyh2YWx1ZS5jb250ZXh0V2luZG93VG9rZW5zKSA6ICcnLFxuICAgIHJldGFpblRva2VuczogdmFsdWUucmV0YWluVG9rZW5zID8gU3RyaW5nKHZhbHVlLnJldGFpblRva2VucykgOiAnJyxcbiAgfSkpXG4gIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW5yaWNoTm90ZSwgc2V0RW5yaWNoTm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2J1c3lSb3V0ZSwgc2V0QnVzeVJvdXRlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxuICBjb25zdCBbc3RpY2t5QmcsIHNldFN0aWNreUJnXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCB3cmFwUmVmID0gUmVhY3QudXNlUmVmKG51bGwpXG4gIGNvbnN0IHZhbHVlUmVmID0gc25hcCAmJiBzbmFwLnZhbHVlXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RHJhZnQoe1xuICAgICAgdGhyZXNob2xkVG9rZW5zOiB2YWx1ZVJlZiAmJiB2YWx1ZVJlZi50aHJlc2hvbGRUb2tlbnMgPyBTdHJpbmcodmFsdWVSZWYudGhyZXNob2xkVG9rZW5zKSA6ICcnLFxuICAgICAgY29udGV4dFdpbmRvd1Rva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYuY29udGV4dFdpbmRvd1Rva2VucyA/IFN0cmluZyh2YWx1ZVJlZi5jb250ZXh0V2luZG93VG9rZW5zKSA6ICcnLFxuICAgICAgcmV0YWluVG9rZW5zOiB2YWx1ZVJlZiAmJiB2YWx1ZVJlZi5yZXRhaW5Ub2tlbnMgPyBTdHJpbmcodmFsdWVSZWYucmV0YWluVG9rZW5zKSA6ICcnLFxuICAgIH0pXG4gICAgc2V0Tm90ZSgnJylcbiAgfSwgW3ZhbHVlUmVmXSlcbiAgLy8gVGhlIHNldHRpbmdzIHBhbmVsIHNjcm9sbHM7IHBpY2sgaXRzIGJhY2tncm91bmQgc28gdGhlIHN0aWNreSB0YWIgYmFyIGRvZXNcbiAgLy8gbm90IHNob3cgY29udGVudCBzY3JvbGxpbmcgdW5kZXJuZWF0aC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgbm9kZSA9IHdyYXBSZWYuY3VycmVudD8ucGFyZW50RWxlbWVudCA/PyBudWxsXG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwgJiYgbm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgY29uc3QgYmcgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmJhY2tncm91bmRDb2xvclxuICAgICAgaWYgKGJnICE9PSAnJyAmJiBiZyAhPT0gJ3RyYW5zcGFyZW50JyAmJiBiZyAhPT0gJ3JnYmEoMCwgMCwgMCwgMCknKSB7IHNldFN0aWNreUJnKGJnKTsgYnJlYWsgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudFxuICAgIH1cbiAgfSwgW10pXG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdsb2FkaW5nJykpXG4gIGlmIChzdGF0dXMgPT09ICd1bmF2YWlsYWJsZScpIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ3VuYXZhaWxhYmxlJykpXG5cbiAgY29uc3QgZGlzYWJsZWQgPSAhd3JpdGFibGVcbiAgY29uc3Qgd3JpdGUgPSAoZmllbGQsIHYpID0+IHtcbiAgICBzZXROb3RlKCcnKVxuICAgIFByb21pc2UucmVzb2x2ZShzYXZlKGZpZWxkLCB2KSkuY2F0Y2goKGVycm9yKSA9PiBzZXROb3RlKHQoJ2Vycm9yUHJlZml4JykgKyBTdHJpbmcoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcikpKVxuICB9XG4gIGNvbnN0IGNvbW1pdFRva2VucyA9IChmaWVsZCwgdGV4dCkgPT4ge1xuICAgIGlmICh0ZXh0LnRyaW0oKSA9PT0gJycpIHsgd3JpdGUoZmllbGQsIDApOyByZXR1cm4gfVxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlVG9rZW5UZXh0KHRleHQpXG4gICAgaWYgKHBhcnNlZCA9PT0gdW5kZWZpbmVkKSB7IHNldE5vdGUodCgnaW52YWxpZFRva2VuJykpOyByZXR1cm4gfVxuICAgIHdyaXRlKGZpZWxkLCBwYXJzZWQpXG4gIH1cbiAgY29uc3QgbnVtID0gKGZpZWxkLCBmYWxsYmFjaykgPT4gKHtcbiAgICB2YWx1ZTogU3RyaW5nKHZhbHVlW2ZpZWxkXSAhPT0gdW5kZWZpbmVkID8gdmFsdWVbZmllbGRdIDogZmFsbGJhY2spLFxuICAgIGRpc2FibGVkLFxuICAgIG9uQ2hhbmdlOiAoZSkgPT4geyBjb25zdCBuID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTsgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkgd3JpdGUoZmllbGQsIG4pIH0sXG4gIH0pXG4gIGNvbnN0IHN3aXRjaEZpZWxkID0gKGxhYmVsS2V5LCBmaWVsZCwgaGludEtleSwgZmFsbGJhY2spID0+IGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZSwga2V5OiBmaWVsZCB9LFxuICAgIGVsKFN3aXRjaCwge1xuICAgICAgY2hlY2tlZDogdmFsdWVbZmllbGRdICE9PSB1bmRlZmluZWQgPyAhIXZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBsYWJlbDogdChsYWJlbEtleSksXG4gICAgICBvbkNoYW5nZTogKG5leHQpID0+IHdyaXRlKGZpZWxkLCBuZXh0KSxcbiAgICB9KSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGVUZXh0IH0sXG4gICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IFMudG9nZ2xlTGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgICAgaGludEtleSA/IGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIgfSB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gICAgKSxcbiAgKVxuICBjb25zdCB0ZXh0RmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBoaW50S2V5KSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogUy5pbnB1dCwgZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogZHJhZnRbZmllbGRdLFxuICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXREcmFmdCgoZCkgPT4gKHsgLi4uZCwgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUgfSkpLFxuICAgICAgb25CbHVyOiAoKSA9PiBjb21taXRUb2tlbnMoZmllbGQsIGRyYWZ0W2ZpZWxkXSksXG4gICAgICBvbktleURvd246IChlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgY29tbWl0VG9rZW5zKGZpZWxkLCBkcmFmdFtmaWVsZF0pIH0sXG4gICAgfSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSxcbiAgKVxuICBjb25zdCBudW1iZXJGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0JywgeyB0eXBlOiAnbnVtYmVyJywgc3RlcDogJ2FueScsIHN0eWxlOiBTLmlucHV0LCAuLi5udW0oZmllbGQsIGZhbGxiYWNrKSB9KSxcbiAgICBoaW50S2V5ID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gIClcbiAgLyoqIENvbG91ciByb3c6IG5hdGl2ZSBwaWNrZXIgKyBlZGl0YWJsZSBoZXgsIG9wdGlvbmFsIGNsZWFyIChlbXB0eSA9IG9mZmljaWFsKS4gKi9cbiAgY29uc3QgY29sb3JGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGZhbGxiYWNrSGV4LCBvcHRpb25hbCwgaGludEtleSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0eXBlb2YgdmFsdWVbZmllbGRdID09PSAnc3RyaW5nJyA/IHZhbHVlW2ZpZWxkXSA6ICcnXG4gICAgY29uc3Qgc2hvd24gPSBjdXJyZW50ICE9PSAnJyA/IGN1cnJlbnQgOiAoZmFsbGJhY2tIZXggPz8gJyMwMDAwMDAnKVxuICAgIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogeyAuLi5TLmNvbCwgbWFyZ2luQm90dG9tOiAxMCB9LCBrZXk6IGZpZWxkIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dGbGV4IH0sXG4gICAgICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgICAgICB0eXBlOiAnY29sb3InLCB2YWx1ZTogc2hvd24sIGRpc2FibGVkLCBzdHlsZTogUy5jb2xvcixcbiAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHdyaXRlKGZpZWxkLCBlLnRhcmdldC52YWx1ZSksXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLmhleCB9LCBkaXNhYmxlZCxcbiAgICAgICAgICB2YWx1ZTogY3VycmVudCwgcGxhY2Vob2xkZXI6IG9wdGlvbmFsID8gdCgnY29sb3JVbnNldCcpIDogJycsXG4gICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gJycgJiYgb3B0aW9uYWwpIHdyaXRlKGZpZWxkLCAnJylcbiAgICAgICAgICAgIGVsc2UgaWYgKEhFWC50ZXN0KG5leHQpKSB3cml0ZShmaWVsZCwgbmV4dClcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgb3B0aW9uYWwgJiYgY3VycmVudCAhPT0gJydcbiAgICAgICAgICA/IGVsKEJ1dHRvbiwgeyB2YXJpYW50OiAnZ2hvc3QnLCBzaXplOiAnc20nLCBkaXNhYmxlZCwgb25DbGljazogKCkgPT4gd3JpdGUoZmllbGQsICcnKSB9LCB0KCdjb2xvclJlc2V0JykpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgKSxcbiAgICAgIGhpbnRLZXkgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoaGludEtleSkpIDogbnVsbCxcbiAgICApXG4gIH1cbiAgY29uc3QgZW5hYmxlTm90aWZpY2F0aW9ucyA9IChuZXh0KSA9PiB7XG4gICAgaWYgKCFuZXh0KSB7IHdyaXRlKCdub3RpZnlFbmFibGVkJywgZmFsc2UpOyByZXR1cm4gfVxuICAgIHdyaXRlKCdub3RpZnlFbmFibGVkJywgdHJ1ZSlcbiAgICBwcmltZVNvdW5kKClcbiAgICB2b2lkIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkudGhlbihzZXRQZXJtaXNzaW9uKVxuICB9XG5cbiAgLyoqIEZldGNoIGEgcHJvdmlkZXIncyBtb2RlbHMgYW5kIGJ1aWxkIGEgcGVyLW1vZGVsIHJldmlldyBvZiB3aGF0IGltcG9ydGluZyB3b3VsZCBjaGFuZ2UuICovXG4gIGNvbnN0IGZldGNoUHJldmlldyA9IGFzeW5jIChyb3V0ZUlkLCBwcm9maWxlKSA9PiB7XG4gICAgc2V0QnVzeVJvdXRlKHJvdXRlSWQpXG4gICAgc2V0RW5yaWNoTm90ZSgnJylcbiAgICBzZXRQcmV2aWV3KG51bGwpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvYmUoe1xuICAgICAgICBiYXNlVVJMOiBwcm9maWxlLmJhc2VVUkwsXG4gICAgICAgIC4uLih0eXBlb2YgcHJvZmlsZS5hcGlLZXlFbnYgPT09ICdzdHJpbmcnICYmIHByb2ZpbGUuYXBpS2V5RW52ICE9PSAnJyA/IHsgYXBpS2V5RW52OiBwcm9maWxlLmFwaUtleUVudiB9IDoge30pLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IGZvdW5kID0gQXJyYXkuaXNBcnJheShyZXNwb25zZT8ubW9kZWxzKSA/IHJlc3BvbnNlLm1vZGVscyA6IFtdXG4gICAgICBjb25zdCBleGlzdGluZyA9IEFycmF5LmlzQXJyYXkocHJvZmlsZS5tb2RlbHMpID8gcHJvZmlsZS5tb2RlbHMgOiBbXVxuICAgICAgY29uc3QgYnlJZCA9IG5ldyBNYXAoZXhpc3RpbmcubWFwKChtKSA9PiBbbS5pZCwgbV0pKVxuICAgICAgY29uc3Qgcm93cyA9IGZvdW5kLm1hcCgobSkgPT4ge1xuICAgICAgICBjb25zdCBjdXIgPSBieUlkLmdldChtLmlkKVxuICAgICAgICBpZiAoY3VyID09PSB1bmRlZmluZWQpIHJldHVybiB7IGlkOiBtLmlkLCBuYW1lOiBtLm5hbWUsIGlzTmV3OiB0cnVlLCBjaGFuZ2VzOiBbXSwgdmFsdWU6IG0sIHNlbGVjdGVkOiB0cnVlIH1cbiAgICAgICAgY29uc3QgY2hhbmdlcyA9IFtdXG4gICAgICAgIGlmIChtLmNvbnRleHRXaW5kb3cgIT09IHVuZGVmaW5lZCAmJiBjdXIuY29udGV4dFdpbmRvdyAhPT0gbS5jb250ZXh0V2luZG93KSBjaGFuZ2VzLnB1c2goeyBmaWVsZDogJ2NvbnRleHRXaW5kb3cnLCBmcm9tOiBjdXIuY29udGV4dFdpbmRvdywgdG86IG0uY29udGV4dFdpbmRvdyB9KVxuICAgICAgICBpZiAobS5tYXhUb2tlbnMgIT09IHVuZGVmaW5lZCAmJiBjdXIubWF4VG9rZW5zICE9PSBtLm1heFRva2VucykgY2hhbmdlcy5wdXNoKHsgZmllbGQ6ICdtYXhUb2tlbnMnLCBmcm9tOiBjdXIubWF4VG9rZW5zLCB0bzogbS5tYXhUb2tlbnMgfSlcbiAgICAgICAgY29uc3QgZnJvbUlucHV0ID0gQXJyYXkuaXNBcnJheShjdXIuaW5wdXQpID8gY3VyLmlucHV0LmpvaW4oJysnKSA6IHVuZGVmaW5lZFxuICAgICAgICBjb25zdCB0b0lucHV0ID0gQXJyYXkuaXNBcnJheShtLmlucHV0KSA/IG0uaW5wdXQuam9pbignKycpIDogdW5kZWZpbmVkXG4gICAgICAgIGlmICh0b0lucHV0ICE9PSB1bmRlZmluZWQgJiYgdG9JbnB1dCAhPT0gZnJvbUlucHV0KSBjaGFuZ2VzLnB1c2goeyBmaWVsZDogJ2lucHV0JywgZnJvbTogZnJvbUlucHV0LCB0bzogdG9JbnB1dCB9KVxuICAgICAgICByZXR1cm4geyBpZDogbS5pZCwgbmFtZTogbS5uYW1lLCBpc05ldzogZmFsc2UsIGNoYW5nZXMsIHZhbHVlOiBtLCBzZWxlY3RlZDogY2hhbmdlcy5sZW5ndGggPiAwIH1cbiAgICAgIH0pXG4gICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHsgc2V0RW5yaWNoTm90ZSh0KCdub01vZGVscycpKTsgcmV0dXJuIH1cbiAgICAgIHNldFByZXZpZXcoeyByb3V0ZUlkLCByb3dzIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVucmljaE5vdGUodCgnZXJyb3JQcmVmaXgnKSArIFN0cmluZyhlcnJvciAmJiBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yKSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0QnVzeVJvdXRlKCcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZVByZXZpZXcgPSAoaWQpID0+IHNldFByZXZpZXcoKHApID0+IChwID09PSBudWxsID8gcCA6IHsgLi4ucCwgcm93czogcC5yb3dzLm1hcCgocikgPT4gKHIuaWQgPT09IGlkID8geyAuLi5yLCBzZWxlY3RlZDogIXIuc2VsZWN0ZWQgfSA6IHIpKSB9KSlcbiAgY29uc3QgdG9nZ2xlQWxsUHJldmlldyA9IChuZXh0KSA9PiBzZXRQcmV2aWV3KChwKSA9PiAocCA9PT0gbnVsbCA/IHAgOiB7IC4uLnAsIHJvd3M6IHAucm93cy5tYXAoKHIpID0+ICh7IC4uLnIsIHNlbGVjdGVkOiBuZXh0IH0pKSB9KSlcblxuICAvKiogSW1wb3J0IHRoZSBzZWxlY3RlZCBzZXJ2ZXIgdmFsdWVzICh1cGRhdGUgZXhpc3RpbmcgZW50cmllcywgYXBwZW5kIG5ldyBvbmVzKS4gKi9cbiAgY29uc3QgYXBwbHlQcmV2aWV3ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHAgPSBwcmV2aWV3XG4gICAgaWYgKHAgPT09IG51bGwpIHJldHVyblxuICAgIGNvbnN0IHByb2ZpbGUgPSAocHJvdmlkZXJzICE9PSBudWxsICYmIHR5cGVvZiBwcm92aWRlcnMgPT09ICdvYmplY3QnID8gcHJvdmlkZXJzW3Aucm91dGVJZF0gOiB1bmRlZmluZWQpID8/IHt9XG4gICAgY29uc3QgZXhpc3RpbmcgPSBBcnJheS5pc0FycmF5KHByb2ZpbGUubW9kZWxzKSA/IHByb2ZpbGUubW9kZWxzIDogW11cbiAgICBjb25zdCBzZWxlY3RlZEJ5SWQgPSBuZXcgTWFwKHAucm93cy5maWx0ZXIoKHIpID0+IHIuc2VsZWN0ZWQpLm1hcCgocikgPT4gW3IuaWQsIHJdKSlcbiAgICBjb25zdCBuZXh0ID0gZXhpc3RpbmcubWFwKChtKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBzZWxlY3RlZEJ5SWQuZ2V0KG0uaWQpXG4gICAgICBpZiAocm93ID09PSB1bmRlZmluZWQgfHwgcm93LmlzTmV3KSByZXR1cm4gbVxuICAgICAgY29uc3QgdiA9IHJvdy52YWx1ZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubSxcbiAgICAgICAgLi4uKHYuY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGNvbnRleHRXaW5kb3c6IHYuY29udGV4dFdpbmRvdyB9KSxcbiAgICAgICAgLi4uKHYubWF4VG9rZW5zID09PSB1bmRlZmluZWQgPyB7fSA6IHsgbWF4VG9rZW5zOiB2Lm1heFRva2VucyB9KSxcbiAgICAgICAgLi4uKHYuaW5wdXQgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBpbnB1dDogWy4uLnYuaW5wdXRdIH0pLFxuICAgICAgfVxuICAgIH0pXG4gICAgZm9yIChjb25zdCByb3cgb2YgcC5yb3dzKSB7XG4gICAgICBpZiAoIXJvdy5pc05ldyB8fCAhcm93LnNlbGVjdGVkKSBjb250aW51ZVxuICAgICAgY29uc3QgdiA9IHJvdy52YWx1ZVxuICAgICAgbmV4dC5wdXNoKHtcbiAgICAgICAgaWQ6IHYuaWQsXG4gICAgICAgIG5hbWU6IHYubmFtZSxcbiAgICAgICAgLi4uKHYuY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGNvbnRleHRXaW5kb3c6IHYuY29udGV4dFdpbmRvdyB9KSxcbiAgICAgICAgLi4uKHYubWF4VG9rZW5zID09PSB1bmRlZmluZWQgPyB7fSA6IHsgbWF4VG9rZW5zOiB2Lm1heFRva2VucyB9KSxcbiAgICAgICAgLi4uKHYuaW5wdXQgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBpbnB1dDogWy4uLnYuaW5wdXRdIH0pLFxuICAgICAgfSlcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHdyaXRlTW9kZWxzKHAucm91dGVJZCwgbmV4dClcbiAgICAgIHNldEVucmljaE5vdGUodCgnYXBwbGllZCcsIHsgY291bnQ6IHNlbGVjdGVkQnlJZC5zaXplIH0pKVxuICAgICAgc2V0UHJldmlldyhudWxsKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFbnJpY2hOb3RlKHQoJ2Vycm9yUHJlZml4JykgKyBTdHJpbmcoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcikpXG4gICAgfVxuICB9XG5cbiAgLyoqIE9uZSByb3cgb2YgdGhlIGltcG9ydCByZXZpZXc6IGNoZWNrYm94LCBtb2RlbCBuYW1lLCBhbmQgdGhlIHBlbmRpbmcgY2hhbmdlcy4gKi9cbiAgY29uc3QgY2hhbmdlVGV4dCA9IChyb3cpID0+IHtcbiAgICBjb25zdCBmbXQgPSAodikgPT4gKHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsIHx8IHYgPT09ICcnID8gJ1xcdTIwMTQnIDogU3RyaW5nKHYpKVxuICAgIGlmIChyb3cuaXNOZXcpIHJldHVybiB0KCdwcmV2aWV3TmV3JylcbiAgICBpZiAocm93LmNoYW5nZXMubGVuZ3RoID09PSAwKSByZXR1cm4gdCgncHJldmlld05vQ2hhbmdlJylcbiAgICByZXR1cm4gcm93LmNoYW5nZXMubWFwKChjKSA9PiBgJHtjLmZpZWxkfTogJHtmbXQoYy5mcm9tKX0gXFx1MjE5MiAke2ZtdChjLnRvKX1gKS5qb2luKCcgIFxcdTAwYjcgICcpXG4gIH1cblxuICBjb25zdCBwcmV2aWV3UGFuZWwgPSAocCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gcC5yb3dzLmZpbHRlcigocikgPT4gci5zZWxlY3RlZCkubGVuZ3RoXG4gICAgY29uc3QgYWxsID0gcC5yb3dzLmxlbmd0aCA+IDAgJiYgc2VsZWN0ZWQgPT09IHAucm93cy5sZW5ndGhcbiAgICByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMucHJldmlldywga2V5OiAncHJldmlldycgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgncHJldmlld1RpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdwcmV2aWV3SGludCcpKSxcbiAgICAgIGVsKCdsYWJlbCcsIHsgc3R5bGU6IHsgLi4uUy5wcmV2aWV3Um93LCBib3JkZXJCb3R0b206ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWwzKScsIGZvbnRXZWlnaHQ6IDYwMCB9IH0sXG4gICAgICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgIGNoZWNrZWQ6IGFsbCxcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICByZWY6IChub2RlKSA9PiB7IGlmIChub2RlKSBub2RlLmluZGV0ZXJtaW5hdGUgPSAhYWxsICYmIHNlbGVjdGVkID4gMCB9LFxuICAgICAgICAgIG9uQ2hhbmdlOiAoKSA9PiB0b2dnbGVBbGxQcmV2aWV3KCFhbGwpLFxuICAgICAgICAgICdhcmlhLWxhYmVsJzogdCgnc2VsZWN0QWxsJyksXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnc3BhbicsIG51bGwsIHQoJ3NlbGVjdEFsbCcpKSxcbiAgICAgICksXG4gICAgICAuLi5wLnJvd3MubWFwKChyb3cpID0+IGVsKCdsYWJlbCcsIHsga2V5OiByb3cuaWQsIHN0eWxlOiBTLnByZXZpZXdSb3cgfSxcbiAgICAgICAgZWwoJ2lucHV0JywgeyB0eXBlOiAnY2hlY2tib3gnLCBjaGVja2VkOiByb3cuc2VsZWN0ZWQsIGRpc2FibGVkLCBvbkNoYW5nZTogKCkgPT4gdG9nZ2xlUHJldmlldyhyb3cuaWQpIH0pLFxuICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgZm9udFdlaWdodDogNjAwLCBtYXhXaWR0aDogMjAwLCBtaW5XaWR0aDogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH0gfSwgcm93Lm5hbWUpLFxuICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyIH0gfSwgY2hhbmdlVGV4dChyb3cpKSxcbiAgICAgICkpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IHsgLi4uUy5yb3dGbGV4LCBtYXJnaW5Ub3A6IDggfSB9LFxuICAgICAgICBlbChCdXR0b24sIHsgdmFyaWFudDogJ3ByaW1hcnknLCBzaXplOiAnc20nLCBkaXNhYmxlZDogZGlzYWJsZWQgfHwgc2VsZWN0ZWQgPT09IDAsIG9uQ2xpY2s6ICgpID0+IHsgdm9pZCBhcHBseVByZXZpZXcoKSB9IH0sIHQoJ2FwcGx5JywgeyBjb3VudDogc2VsZWN0ZWQgfSkpLFxuICAgICAgICBlbChCdXR0b24sIHsgdmFyaWFudDogJ2dob3N0Jywgc2l6ZTogJ3NtJywgZGlzYWJsZWQsIG9uQ2xpY2s6ICgpID0+IHNldFByZXZpZXcobnVsbCkgfSwgdCgnY2FuY2VsJykpLFxuICAgICAgKSxcbiAgICApXG4gIH1cblxuICBjb25zdCBwcm92aWRlclJvd3MgPSBPYmplY3QuZW50cmllcyhwcm92aWRlcnMgIT09IG51bGwgJiYgdHlwZW9mIHByb3ZpZGVycyA9PT0gJ29iamVjdCcgPyBwcm92aWRlcnMgOiB7fSkubWFwKChbcm91dGVJZCwgcHJvZmlsZV0pID0+IHtcbiAgICBjb25zdCBiYXNlVVJMID0gcHJvZmlsZSAhPT0gbnVsbCAmJiB0eXBlb2YgcHJvZmlsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHByb2ZpbGUuYmFzZVVSTCA9PT0gJ3N0cmluZycgPyBwcm9maWxlLmJhc2VVUkwgOiAnJ1xuICAgIHJldHVybiBlbCgnZGl2JywgeyBrZXk6IHJvdXRlSWQsIHN0eWxlOiBTLnByb3ZpZGVyQmxvY2sgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCB9IH0sXG4gICAgICAgIGVsKCdzcGFuJywgeyBzdHlsZTogeyBmbGV4OiAxLCBtaW5XaWR0aDogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH0gfSwgYCR7cm91dGVJZH0ke2Jhc2VVUkwgPyBgIFx1MjAxNCAke2Jhc2VVUkx9YCA6ICcnfWApLFxuICAgICAgICBiYXNlVVJMXG4gICAgICAgICAgPyBlbChCdXR0b24sIHsgdmFyaWFudDogJ291dGxpbmUnLCBzaXplOiAnc20nLCBkaXNhYmxlZDogYnVzeVJvdXRlID09PSByb3V0ZUlkIHx8IGRpc2FibGVkLCBvbkNsaWNrOiAoKSA9PiB7IHZvaWQgZmV0Y2hQcmV2aWV3KHJvdXRlSWQsIHByb2ZpbGUpIH0gfSwgYnVzeVJvdXRlID09PSByb3V0ZUlkID8gdCgnZW5yaWNoaW5nJykgOiB0KCdlbnJpY2gnKSlcbiAgICAgICAgICA6IGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIsIGZsZXhTaHJpbms6IDAgfSB9LCB0KCdub0Jhc2VVcmwnKSksXG4gICAgICApLFxuICAgICAgcHJldmlldyAhPT0gbnVsbCAmJiBwcmV2aWV3LnJvdXRlSWQgPT09IHJvdXRlSWQgPyBwcmV2aWV3UGFuZWwocHJldmlldykgOiBudWxsLFxuICAgIClcbiAgfSlcblxuICAvLyBTdW1tYXJpemF0aW9uIG1vZGVsL3JlYXNvbmluZyBwaWNrZXJzLlxuICBjb25zdCBtb2RlID0gdmFsdWUuc3VtbWFyaXphdGlvbk1vZGUgPT09ICdjdXN0b20nID8gJ2N1c3RvbScgOiAnc2Vzc2lvbidcbiAgY29uc3QgcHJvdmlkZXJOYW1lcyA9IFsuLi5uZXcgU2V0KGNhdGFsb2cubWFwKChyKSA9PiByLnByb3ZpZGVyKSldXG4gIGNvbnN0IHNlbGVjdGVkUHJvdmlkZXIgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUHJvdmlkZXIgfHwgcHJvdmlkZXJOYW1lc1swXSB8fCAnJ1xuICBjb25zdCBtb2RlbHNGb3JQcm92aWRlciA9IGNhdGFsb2cuZmlsdGVyKChyKSA9PiByLnByb3ZpZGVyID09PSBzZWxlY3RlZFByb3ZpZGVyKVxuICBjb25zdCBzZWxlY3RlZFJvdyA9IG1vZGVsc0ZvclByb3ZpZGVyLmZpbmQoKHIpID0+IHIubW9kZWwgPT09IHZhbHVlLnN1bW1hcml6YXRpb25Nb2RlbCkgfHwgbW9kZWxzRm9yUHJvdmlkZXJbMF1cbiAgY29uc3QgbGV2ZWxTZXQgPSBbJ2RlZmF1bHQnLCAnb2ZmJywgLi4uKHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRSb3cubGV2ZWxzIDogW10pXVxuICBjb25zdCByZWFzb25pbmcgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUmVhc29uaW5nIHx8ICdkZWZhdWx0J1xuICBjb25zdCBzZWxlY3RPcHRpb25zID0gKHBhaXJzKSA9PiBwYWlycy5tYXAoKFt2LCBsYWJlbF0pID0+IGVsKCdvcHRpb24nLCB7IGtleTogdiwgdmFsdWU6IHYgfSwgbGFiZWwpKVxuXG4gIGNvbnN0IHN1bW1hcml6YXRpb24gPSBbXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdtb2RlJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgnc3VtbWFyaXphdGlvbk1vZGUnKSksXG4gICAgICBlbCgnc2VsZWN0JywgeyBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCwgdmFsdWU6IG1vZGUsIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoJ3N1bW1hcml6YXRpb25Nb2RlJywgZS50YXJnZXQudmFsdWUpIH0sXG4gICAgICAgIHNlbGVjdE9wdGlvbnMoW1snc2Vzc2lvbicsIHQoJ21vZGVTZXNzaW9uJyldLCBbJ2N1c3RvbScsIHQoJ21vZGVDdXN0b20nKV1dKSksXG4gICAgKSxcbiAgXVxuICBpZiAobW9kZSA9PT0gJ2N1c3RvbScpIHtcbiAgICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdwcm92aWRlcicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ3Byb3ZpZGVyJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHtcbiAgICAgICAgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBzZWxlY3RlZFByb3ZpZGVyLFxuICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gY2F0YWxvZy5maW5kKChyKSA9PiByLnByb3ZpZGVyID09PSBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB3cml0ZSgnc3VtbWFyaXphdGlvblByb3ZpZGVyJywgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgaWYgKG5leHQpIHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZWwnLCBuZXh0Lm1vZGVsKVxuICAgICAgICAgIHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgJ2RlZmF1bHQnKVxuICAgICAgICB9LFxuICAgICAgfSwgcHJvdmlkZXJOYW1lcy5tYXAoKHApID0+IGVsKCdvcHRpb24nLCB7IGtleTogcCwgdmFsdWU6IHAgfSwgcCkpKSxcbiAgICApKVxuICAgIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ21vZGVsJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgnbW9kZWwnKSksXG4gICAgICBlbCgnc2VsZWN0Jywge1xuICAgICAgICBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCxcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRSb3cubW9kZWwgOiAnJyxcbiAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7IHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZWwnLCBlLnRhcmdldC52YWx1ZSk7IHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgJ2RlZmF1bHQnKSB9LFxuICAgICAgfSwgbW9kZWxzRm9yUHJvdmlkZXIubWFwKChyKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHIubW9kZWwsIHZhbHVlOiByLm1vZGVsIH0sIHIubmFtZSkpKSxcbiAgICApKVxuICB9XG4gIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ3JlYXNvbmluZycgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdyZWFzb25pbmcnKSksXG4gICAgZWwoJ3NlbGVjdCcsIHsgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBsZXZlbFNldC5pbmNsdWRlcyhyZWFzb25pbmcpID8gcmVhc29uaW5nIDogJ2RlZmF1bHQnLCBvbkNoYW5nZTogKGUpID0+IHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgZS50YXJnZXQudmFsdWUpIH0sXG4gICAgICBsZXZlbFNldC5tYXAoKGx2KSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IGx2LCB2YWx1ZTogbHYgfSwgbHYgPT09ICdkZWZhdWx0JyA/IHQoJ3JlYXNvbmluZ0RlZmF1bHQnKSA6IGx2ID09PSAnb2ZmJyA/IHQoJ3JlYXNvbmluZ09mZicpIDogbHYpKSksXG4gICkpXG5cbiAgY29uc3QgY29tcGFjdGlvblBhbmVsID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwRmlyc3QsIGtleTogJ3RocmVzaG9sZCcgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgndGhyZXNob2xkVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgdGV4dEZpZWxkKCd0aHJlc2hvbGRUb2tlbnMnLCAndGhyZXNob2xkVG9rZW5zJywgJ3RocmVzaG9sZFRva2Vuc0hpbnQnKSxcbiAgICAgICAgdGV4dEZpZWxkKCdjb250ZXh0V2luZG93JywgJ2NvbnRleHRXaW5kb3dUb2tlbnMnLCAnY29udGV4dFdpbmRvd0hpbnQnKSxcbiAgICAgICksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ3RocmVzaG9sZFJhdGlvJywgJ3RocmVzaG9sZFJhdGlvJywgJ3RocmVzaG9sZFJhdGlvSGludCcsIDAuOCksXG4gICAgICAgIG51bWJlckZpZWxkKCdoZWFkcm9vbScsICdoZWFkcm9vbVRva2VucycsICdoZWFkcm9vbUhpbnQnLCAzMjc2OCksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ3JldGVudGlvbicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgncmV0ZW50aW9uVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgdGV4dEZpZWxkKCdyZXRhaW5Ub2tlbnMnLCAncmV0YWluVG9rZW5zJywgJ3JldGFpblRva2Vuc0hpbnQnKSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ3JldGFpblJhdGlvJywgJ3JldGFpblJhdGlvJywgbnVsbCwgMC4xNiksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ2JlaGF2aW91cicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnYmVoYXZpb3VyVGl0bGUnKSksXG4gICAgICBzd2l0Y2hGaWVsZCgnYXV0bycsICdhdXRvJywgJ2F1dG9IaW50JywgdHJ1ZSksXG4gICAgICBzd2l0Y2hGaWVsZCgndHVybkVuZCcsICd0dXJuRW5kQ29tcGFjdGlvbkVuYWJsZWQnLCAndHVybkVuZEhpbnQnLCBmYWxzZSksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnc3VtbWFyaXphdGlvbicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnc3VtbWFyaXphdGlvblRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sIHN1bW1hcml6YXRpb24pLFxuICAgICAgbnVtYmVyRmllbGQoJ21heFRva2VucycsICdtYXhUb2tlbnMnLCBudWxsLCAzMjc2OCksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnYWR2YW5jZWQnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ2FkdmFuY2VkVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ2NvbXBhY3Rpb25SZXRyaWVzJywgJ2NvbXBhY3Rpb25SZXRyaWVzJywgbnVsbCwgMSksXG4gICAgICAgIG51bWJlckZpZWxkKCdtYXhPdmVyZmxvd1JldHJpZXMnLCAnbWF4T3ZlcmZsb3dSZXRyaWVzJywgbnVsbCwgMSksXG4gICAgICApLFxuICAgICksXG4gIF1cblxuICBjb25zdCBtb2RlbHNQYW5lbCA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cEZpcnN0LCBrZXk6ICdtb2RlbHMnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ21vZGVsc1RpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdtb2RlbHNJbnRybycpKSxcbiAgICAgIC4uLnByb3ZpZGVyUm93cyxcbiAgICAgIGVucmljaE5vdGUgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIGVucmljaE5vdGUpIDogbnVsbCxcbiAgICApLFxuICBdXG5cbiAgY29uc3Qgdm9sdW1lTm93ID0gdHlwZW9mIHZhbHVlLm5vdGlmeVZvbHVtZSA9PT0gJ251bWJlcicgPyB2YWx1ZS5ub3RpZnlWb2x1bWUgOiAwLjZcbiAgY29uc3Qgc291bmRTZWxlY3RPcHRpb25zID0gKCkgPT4gW1xuICAgIGVsKCdvcHRpb24nLCB7IGtleTogU09VTkRfTk9ORSwgdmFsdWU6IFNPVU5EX05PTkUgfSwgdCgnc291bmROb1NvdW5kJykpLFxuICAgIGVsKCdvcHRncm91cCcsIHsga2V5OiAnYnVpbHRpbicsIGxhYmVsOiB0KCdzb3VuZFBhY2tCdWlsdGluJykgfSxcbiAgICAgIEJVSUxUSU5fU09VTkRTLm1hcCgoc291bmQpID0+IGVsKCdvcHRpb24nLCB7IGtleTogc291bmQuaWQsIHZhbHVlOiBzb3VuZC5pZCB9LCB0KHNvdW5kLmxhYmVsS2V5KSkpKSxcbiAgICAuLi5TT1VORF9QQUNLUy5tYXAoKHBhY2spID0+IGVsKCdvcHRncm91cCcsIHsga2V5OiBwYWNrLnByZWZpeCwgbGFiZWw6IHBhY2submFtZSB9LFxuICAgICAgcGFja1NvdW5kSWRzKHBhY2spLm1hcCgoaWQsIGluZGV4KSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IGlkLCB2YWx1ZTogaWQgfSwgYCR7cGFjay5uYW1lfSAke1N0cmluZyhpbmRleCArIDEpLnBhZFN0YXJ0KDIsICcwJyl9YCkpKSksXG4gIF1cbiAgLyoqIFNvdW5kIHNlbGVjdG9yOyBwaWNraW5nIG9uZSBwcmV2aWV3cyBpdCAoYW5kIHVubG9ja3MgYXVkaW8gaW4gdGhlIGdlc3R1cmUpLiAqL1xuICBjb25zdCBzb3VuZFNlbGVjdCA9IChsYWJlbEtleSwgZmllbGQsIGtpbmQpID0+IGVsKCdkaXYnLCB7IHN0eWxlOiB7IC4uLlMuY29sLCBtYXJnaW5Cb3R0b206IDEwIH0sIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ3NlbGVjdCcsIHtcbiAgICAgIHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLFxuICAgICAgdmFsdWU6IHR5cGVvZiB2YWx1ZVtmaWVsZF0gPT09ICdzdHJpbmcnID8gdmFsdWVbZmllbGRdIDogU09VTkRfTk9ORSxcbiAgICAgIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIHdyaXRlKGZpZWxkLCBpZClcbiAgICAgICAgcHJpbWVTb3VuZCgpXG4gICAgICAgIGlmIChpZCAhPT0gU09VTkRfTk9ORSkgcGxheVNvdW5kKGlkLCB2b2x1bWVOb3csIGtpbmQpXG4gICAgICB9LFxuICAgIH0sIHNvdW5kU2VsZWN0T3B0aW9ucygpKSxcbiAgKVxuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbnNFbmFibGVkID0gdmFsdWUubm90aWZ5RW5hYmxlZCAhPT0gdW5kZWZpbmVkID8gISF2YWx1ZS5ub3RpZnlFbmFibGVkIDogZmFsc2VcbiAgY29uc3Qgbm90aWZpY2F0aW9uc1BhbmVsID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwRmlyc3QsIGtleTogJ2NvbG9ycycgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnY29sb3JzR3JvdXAnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ2NvbG9yc0ludHJvJykpLFxuICAgICAgc3dpdGNoRmllbGQoJ2NvbG9yc0VuYWJsZWQnLCAnY29sb3JzRW5hYmxlZCcsICdjb2xvcnNFbmFibGVkSGludCcsIHRydWUpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvLCBrZXk6ICdjb2xvcnMxJyB9LFxuICAgICAgICBjb2xvckZpZWxkKCdncmVlbkxhYmVsJywgJ2dyZWVuJywgJyMyMkM1NUUnLCBmYWxzZSwgbnVsbCksXG4gICAgICAgIGNvbG9yRmllbGQoJ2FtYmVyTGFiZWwnLCAnYW1iZXInLCAnI0Y1OUUwQicsIGZhbHNlLCBudWxsKSxcbiAgICAgICksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28sIGtleTogJ2NvbG9yczInIH0sXG4gICAgICAgIGNvbG9yRmllbGQoJ3dvcmtpbmdMYWJlbCcsICd3b3JraW5nJywgJyMzQjgyRjYnLCBmYWxzZSwgJ3dvcmtpbmdIaW50JyksXG4gICAgICAgIGNvbG9yRmllbGQoJ2JsYWNrTGFiZWwnLCAnYmxhY2snLCAnIzAwMDAwMCcsIHRydWUsICdibGFja0hpbnQnKSxcbiAgICAgICksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnbm90aWZ5JyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdub3RpZnlHcm91cCcpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnbm90aWZ5SW50cm8nKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGUsIGtleTogJ25vdGlmeUVuYWJsZWQnIH0sXG4gICAgICAgIGVsKFN3aXRjaCwge1xuICAgICAgICAgIGNoZWNrZWQ6IG5vdGlmaWNhdGlvbnNFbmFibGVkLFxuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIGxhYmVsOiB0KCdub3RpZnlFbmFibGVkJyksXG4gICAgICAgICAgb25DaGFuZ2U6IGVuYWJsZU5vdGlmaWNhdGlvbnMsXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGVUZXh0IH0sXG4gICAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiBTLnRvZ2dsZUxhYmVsIH0sIHQoJ25vdGlmeUVuYWJsZWQnKSksXG4gICAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiB9IH0sIHQoJ25vdGlmeUVuYWJsZWRIaW50JykpLFxuICAgICAgICApLFxuICAgICAgKSxcbiAgICAgIG5vdGlmaWNhdGlvbnNFbmFibGVkICYmIHBlcm1pc3Npb24gPT09ICdkZW5pZWQnID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgdCgncGVybWlzc2lvbkRlbmllZCcpKSA6IG51bGwsXG4gICAgICBub3RpZmljYXRpb25zRW5hYmxlZCAmJiBwZXJtaXNzaW9uID09PSAndW5zdXBwb3J0ZWQnID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgdCgncGVybWlzc2lvblVuc3VwcG9ydGVkJykpIDogbnVsbCxcbiAgICAgIHN3aXRjaEZpZWxkKCdub3RpZnlGb3JlZ3JvdW5kJywgJ25vdGlmeUZvcmVncm91bmQnLCAnbm90aWZ5Rm9yZWdyb3VuZEhpbnQnLCBmYWxzZSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGUsIGtleTogJ3ZvbHVtZScgfSxcbiAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiBTLnRvZ2dsZUxhYmVsIH0sIHQoJ25vdGlmeVZvbHVtZScpKSxcbiAgICAgICAgZWwoJ2lucHV0Jywge1xuICAgICAgICAgIHR5cGU6ICdyYW5nZScsIG1pbjogMCwgbWF4OiAxMDAsIHN0ZXA6IDUsIGRpc2FibGVkLFxuICAgICAgICAgIHZhbHVlOiBNYXRoLnJvdW5kKHZvbHVtZU5vdyAqIDEwMCksICdhcmlhLWxhYmVsJzogdCgnbm90aWZ5Vm9sdW1lJyksXG4gICAgICAgICAgc3R5bGU6IHsgZmxleDogJzAgMCBhdXRvJywgd2lkdGg6IDE0MCwgYWNjZW50Q29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtYnJhbmQtcHJpbWFyeSknLCBjdXJzb3I6ICdwb2ludGVyJyB9LFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoJ25vdGlmeVZvbHVtZScsIE51bWJlcihlLnRhcmdldC52YWx1ZSkgLyAxMDApLFxuICAgICAgICB9KSxcbiAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiwgbWluV2lkdGg6IDM2LCB0ZXh0QWxpZ246ICdyaWdodCcgfSB9LCBgJHtNYXRoLnJvdW5kKHZvbHVtZU5vdyAqIDEwMCl9JWApLFxuICAgICAgKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdkb25lJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdub3RpZnlEb25lR3JvdXAnKSksXG4gICAgICBzd2l0Y2hGaWVsZCgnbm90aWZ5RG9uZUVuYWJsZWQnLCAnbm90aWZ5RG9uZUVuYWJsZWQnLCAnbm90aWZ5RG9uZUVuYWJsZWRIaW50JywgdHJ1ZSksXG4gICAgICBzd2l0Y2hGaWVsZCgncGVyc2lzdERvbmUnLCAnbm90aWZ5RG9uZVBlcnNpc3RlbnQnLCAncGVyc2lzdEhpbnQnLCBmYWxzZSksXG4gICAgICBzb3VuZFNlbGVjdCgnc291bmQnLCAnbm90aWZ5RG9uZVNvdW5kJywgJ2RvbmUnKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdwZW5kaW5nJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdub3RpZnlQZW5kaW5nR3JvdXAnKSksXG4gICAgICBzd2l0Y2hGaWVsZCgnbm90aWZ5UGVuZGluZ0VuYWJsZWQnLCAnbm90aWZ5UGVuZGluZ0VuYWJsZWQnLCAnbm90aWZ5UGVuZGluZ0VuYWJsZWRIaW50JywgdHJ1ZSksXG4gICAgICBzd2l0Y2hGaWVsZCgncGVyc2lzdFBlbmRpbmcnLCAnbm90aWZ5UGVuZGluZ1BlcnNpc3RlbnQnLCAncGVyc2lzdEhpbnQnLCBmYWxzZSksXG4gICAgICBzb3VuZFNlbGVjdCgnc291bmQnLCAnbm90aWZ5UGVuZGluZ1NvdW5kJywgJ3BlbmRpbmcnKSxcbiAgICApLFxuICBdXG5cbiAgY29uc3QgcGFuZWxzID0geyBjb21wYWN0aW9uOiBjb21wYWN0aW9uUGFuZWwsIG1vZGVsczogbW9kZWxzUGFuZWwsIG5vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbnNQYW5lbCB9XG5cbiAgcmV0dXJuIGVsKCdkaXYnLCB7IHJlZjogd3JhcFJlZiwgc3R5bGU6IFMud3JhcCB9LFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgndGl0bGUnKSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IHsgLi4uUy5oaW50LCBtYXJnaW5Cb3R0b206IDggfSB9LCB0KCdpbnRybycpKSxcbiAgICBlbCgnZGl2Jywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uUy50YWJzLFxuICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgekluZGV4OiA1LFxuICAgICAgICBwYWRkaW5nVG9wOiA0LFxuICAgICAgICBwYWRkaW5nQm90dG9tOiA4LFxuICAgICAgICBiYWNrZ3JvdW5kOiBzdGlja3lCZyB8fCAndmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTMsICMyYzJjMmUpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAgIGVsKFNlZ21lbnRlZENvbnRyb2wsIHtcbiAgICAgICAgaWQ6IFRBQlNfSUQsXG4gICAgICAgIHZhbHVlOiB0YWIsXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7IHZhbHVlOiAnY29tcGFjdGlvbicsIGxhYmVsOiB0KCd0YWJDb21wYWN0aW9uJykgfSxcbiAgICAgICAgICB7IHZhbHVlOiAnbm90aWZpY2F0aW9ucycsIGxhYmVsOiB0KCd0YWJOb3RpZmljYXRpb25zJykgfSxcbiAgICAgICAgICB7IHZhbHVlOiAnbW9kZWxzJywgbGFiZWw6IHQoJ3RhYk1vZGVscycpIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG9uQ2hhbmdlOiBzZXRUYWIsXG4gICAgICAgIGxhYmVsOiB0KCd0aXRsZScpLFxuICAgICAgfSksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBpZDogYCR7VEFCU19JRH0tJHt0YWJ9LXBhbmVsYCwgcm9sZTogJ3RhYnBhbmVsJyB9LCAuLi4ocGFuZWxzW3RhYl0gPz8gY29tcGFjdGlvblBhbmVsKSksXG4gICAgbm90ZSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmVycm9yIH0sIG5vdGUpIDogbnVsbCxcbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwbHkoY3R4KSB7XG4gIGN0eC5lZmZlY3QoKCkgPT4gY3R4LmxvY2FsZS5yZWdpc3RlcihMT0NBTEVfTlMsIHsgZW4sIHpoIH0pLCAnbWFsa28tcHJlZnM6IGxvY2FsZSBkaWN0aW9uYXJpZXMnKVxuICBjb25zdCB0ID0gY3R4LmxvY2FsZS5iaW5kKExPQ0FMRV9OUylcbiAgY29uc3QgZm9ybSA9IGN0eC5jb25maWdGb3Jtcy5nZXQoTlMpXG4gIGNvbnN0IG1vZGVsRm9ybSA9IGN0eC5jb25maWdGb3Jtcy5nZXQoTU9ERUxfTlMpXG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBvbmx5IGF1dG8tbW91bnRzIGl0cyBvd24gUmVtb3RlIHNlbGVjdGlvbiwgc28gYSBwbHVnaW5cbiAgLy8gc2hpcHMgYW5kIG1vdW50cyBpdHMgb3duIGNvbnRyaWJ1dGlvbi5cbiAgdHJ5IHtcbiAgICBjb25zdCBkaXNwb3NlUmVtb3RlID0gYXdhaXQgY3R4LnJlbW90ZS4kbW91bnQoUFJPQkVfUkVNT1RFKVxuICAgIGN0eC5lZmZlY3QoKCkgPT4gKCkgPT4geyB2b2lkIGRpc3Bvc2VSZW1vdGUoKSB9LCAnbWFsa28tcHJlZnM6IG1hbGtvTW9kZWxzIHJlbW90ZScpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignZHNoLW1hbGtvLXByZWZzOiBjb3VsZCBub3QgbW91bnQgdGhlIG1hbGtvTW9kZWxzIHJlbW90ZSBcdTIwMTQnLCBlcnJvcilcbiAgfVxuICAvLyBUYWIgc3RhdHVzIGxpZ2h0ICsgYnJvd3NlciBub3RpZmljYXRpb25zIChpbmRlcGVuZGVudCBvZiB0aGUgc2V0dGluZ3MgcGFnZSkuXG4gIGN0eC5lZmZlY3QoKCkgPT4gc3RhcnRTdGF0dXNMaWdodChjdHgsIGZvcm0pLCAnbWFsa28tcHJlZnM6IHRhYiBzdGF0dXMgbGlnaHQnKVxuICBjb25zdCBpbmplY3RlZCA9ICgpID0+ICh7XG4gICAgaG9va3M6IHsgcHJlZnM6IGZvcm0sIG1vZGVsQ2F0YWxvZzogbW9kZWxGb3JtIH0sXG4gICAgc2F2ZTogKGZpZWxkLCB2YWx1ZSkgPT4gZm9ybS5zZXQoZmllbGQsIHZhbHVlKSxcbiAgICBwcm9iZTogYXN5bmMgKGFyZ3MpID0+IHtcbiAgICAgIC8vIEEgbmFtZXNwYWNlIHNlcnZpY2UgaXMgcmVzb2x2ZWQgYnkgaXRzIGZ1bGwga2V5OyByZWFkaW5nIGl0IG9mZlxuICAgICAgLy8gYGN0eC5yZW1vdGVgIHdvdWxkIHJlcXVpcmUgYW4gYGluamVjdGAgdGhpcyBwbHVnaW4gY2Fubm90IGRlY2xhcmVcbiAgICAgIC8vIGJlZm9yZSB0aGUgY29udHJpYnV0aW9uIGlzIG1vdW50ZWQuXG4gICAgICBjb25zdCByZW1vdGUgPSBjdHguZ2V0KCdyZW1vdGUubWFsa29Nb2RlbHMnKVxuICAgICAgaWYgKHJlbW90ZSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBtYWxrb01vZGVscyByZW1vdGUgaXMgbm90IGF2YWlsYWJsZScpXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZW1vdGUucHJvYmUoYXJncylcbiAgICAgIC8vIFJlbW90ZSBtZXRob2RzIHJlc29sdmUgdG8gYSBgeyBvaywgdmFsdWUgfWAgLyBgeyBvaywgZXJyb3IgfWAgZW52ZWxvcGUuXG4gICAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmICdvaycgaW4gcmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQub2sgIT09IHRydWUpIHRocm93IHJlc3VsdC5lcnJvciA/PyBuZXcgRXJyb3IoJ3RoZSBtYWxrb01vZGVscyBwcm9iZSBmYWlsZWQnKVxuICAgICAgICByZXR1cm4gcmVzdWx0LnZhbHVlXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSxcbiAgICB3cml0ZU1vZGVsczogKHJvdXRlSWQsIG1vZGVscykgPT4gbW9kZWxGb3JtLm11dGF0ZShbeyBvcDogJ3NldCcsIHBhdGg6IFsncHJvdmlkZXJzJywgcm91dGVJZCwgJ21vZGVscyddLCB2YWx1ZTogbW9kZWxzIH1dKSxcbiAgfSlcbiAgY3R4LnNsb3RzLmluamVjdChTTE9ULCAoKSA9PiBjdHguc2xvdHMucmVnaXN0ZXIoe1xuICAgIG5hbWU6IFNMT1QsXG4gICAgaWQ6IE5TLFxuICAgIG9yZGVyOiA0NSxcbiAgICBsYWJlbDogKCkgPT4gdCgndGl0bGUnKSxcbiAgICBsb2NhbGU6IExPQ0FMRV9OUyxcbiAgICBpbmplY3Q6IGluamVjdGVkLFxuICB9LCBQcmVmc1NlY3Rpb24pKVxufSIsICIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgc2hhcmVkIFJlbW90ZSB3aXJlIGlkZW50aXR5LlxuICpcbiAqIFRoZSBzYW1lIGludm9jYXRpb24gaXMgcmVnaXN0ZXJlZCBvbiB0aGUgSG9zdCAoYHR5cGVydC5yZWdpc3RlcmApIGFuZCBtb3VudGVkXG4gKiBpbiB0aGUgYnJvd3NlciAoYGN0eC5yZW1vdGUuJG1vdW50YCksIHNvIGJvdGggaGFsdmVzIGJ1aWxkIGl0IGZyb20gaGVyZS4gVGhlXG4gKiBvbmx5IGRpZmZlcmVuY2UgaXMgdGhlIHNjaGVtYSBmYWN0b3J5IGVhY2ggc2lkZSBzdXBwbGllczogdGhlIEhvc3QgZGVjb2Rlc1xuICogYXJndW1lbnRzIHdpdGggem9kLCB3aGlsZSB0aGUgQ2xpZW50IG5ldmVyIGRlY29kZXMgaXRzIG93biBhcmd1bWVudHMgYW5kIG9ubHlcbiAqIG5lZWRzIGEgZmFjdG9yeSB0byBzYXRpc2Z5IHRoZSBzdHJpY3QtY29kZWMgY29udHJhY3QuXG4gKi9cblxuLyoqIFdpcmUgaWRlbnRpdHkgc2hhcmVkIGJ5IHRoZSBIb3N0IG1hbmlmZXN0IGFuZCB0aGUgQ2xpZW50IGNvbnRyaWJ1dGlvbi4gKi9cbmV4cG9ydCBjb25zdCBQUk9CRV9JREVOVElUWSA9IHtcbiAgaWQ6ICdkc2gtbWFsa28tcHJlZnMjbWFsa29Nb2RlbHMvcHJvYmUnLFxuICBzZXJ2aWNlOiAnbWFsa29Nb2RlbHMnLFxuICBuYW1lc3BhY2U6ICdtYWxrb01vZGVscycsXG4gIG1ldGhvZDogJ3Byb2JlJyxcbiAgYXJnc1R5cGVTeW1ib2w6ICdkc2gtbWFsa28tcHJlZnMjUHJvYmVBcmdzJyxcbiAgcmVzdWx0VHlwZVN5bWJvbDogJ2RzaC1tYWxrby1wcmVmcyNQcm9iZVJlc3VsdCcsXG59XG5cbi8qKlxuICogQnVpbGQgdGhlIGBtYWxrb01vZGVscy9wcm9iZShhcmdzKWAgZGlyZWN0IGludm9jYXRpb24uXG4gKiBAcGFyYW0geygpID0+IHsgcGFyc2U6ICh2YWx1ZTogdW5rbm93bikgPT4gdW5rbm93biB9fSBjcmVhdGVBcmdzIHNjaGVtYSBmYWN0b3J5IGZvciB0aGUgc2luZ2xlIGBhcmdzYCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0geygpID0+IHsgcGFyc2U6ICh2YWx1ZTogdW5rbm93bikgPT4gdW5rbm93biB9fSBjcmVhdGVSZXN1bHQgc2NoZW1hIGZhY3RvcnkgZm9yIHRoZSByZXN1bHQuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSB0aGUgaW52b2NhdGlvbiBkZXNjcmlwdG9yLCBpZGVudGljYWwgb24gYm90aCBmYWNlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2JlSW52b2NhdGlvbihjcmVhdGVBcmdzLCBjcmVhdGVSZXN1bHQpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogUFJPQkVfSURFTlRJVFkuaWQsXG4gICAgc2VydmljZTogUFJPQkVfSURFTlRJVFkuc2VydmljZSxcbiAgICBuYW1lc3BhY2U6IFBST0JFX0lERU5USVRZLm5hbWVzcGFjZSxcbiAgICBtZXRob2Q6IFBST0JFX0lERU5USVRZLm1ldGhvZCxcbiAgICBpbnZvY2F0aW9uOiB7IGtpbmQ6ICdkaXJlY3QnIH0sXG4gICAgcGFyYW1ldGVyczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnYXJncycsXG4gICAgICAgIHdpcmU6ICdhcmdzJyxcbiAgICAgICAgc291cmNlOiAnanNvbicsXG4gICAgICAgIGNvZGVjOiB7IG1vZGU6ICdzdHJpY3QnLCB0eXBlU3ltYm9sOiBQUk9CRV9JREVOVElUWS5hcmdzVHlwZVN5bWJvbCwgY3JlYXRlOiBjcmVhdGVBcmdzIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgcmVzdWx0OiB7IG1vZGU6ICdzdHJpY3QnLCB0eXBlU3ltYm9sOiBQUk9CRV9JREVOVElUWS5yZXN1bHRUeXBlU3ltYm9sLCBjcmVhdGU6IGNyZWF0ZVJlc3VsdCB9LFxuICB9XG59IiwgIi8qKlxuICogVGhlIG9mZmljaWFsIERlZXBTZWVrIHdoYWxlIG1hcmssIHJlY29sb3JlZC5cbiAqXG4gKiBTaGFwZSB0YWtlbiBmcm9tIHRoZSBvZmZpY2lhbCBmYXZpY29uIGFzIHVzZWQgYnkgZHNoLW5vdGljZS1jZW50ZXIgKE1JVCk7XG4gKiBvbmx5IHRoZSBmaWxsIGNvbG9yIGlzIG91cnMuIEtlcHQgaGVyZSBzbyB0aGUgdGFiIGljb24gcmVmbGVjdHMgdGhlIHNlc3Npb25cbiAqIHN0YXRlIHdpdGhvdXQgZmV0Y2hpbmcgYW5kIG11dGF0aW5nIHRoZSBzZXJ2ZWQgL2Zhdmljb24uc3ZnLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIENTUyBjb2xvciBmb3IgdGhlIGZpbGwuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0YW5kYWxvbmUgU1ZHIGRvY3VtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2hhbGVTdmcoY29sb3IpIHtcbiAgcmV0dXJuIFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI1MFxcXCIgaGVpZ2h0PVxcXCI1MFxcXCIgdmlld0JveD1cXFwiMCAwIDUwIDUwXFxcIiBmaWxsPVxcXCJub25lXFxcIj48cGF0aCBkPVxcXCJNNDguODM1NCAxMC4wNDc5QzQ4LjMyMzIgOS43OTE5OSA0OC4xMDI1IDEwLjI3OTggNDcuODAzMiAxMC41Mjc4QzQ3LjcwMDcgMTAuNjA3OSA0Ny42MTQzIDEwLjcxMTkgNDcuNTI3MyAxMC44MDc2QzQ2Ljc3OTMgMTEuNjI0IDQ1LjkwNDggMTIuMTU5NyA0NC43NjIyIDEyLjA5NTdDNDMuMDkyMyAxMiA0MS42NjYgMTIuNTM1NiA0MC40MDU4IDEzLjgzOThDNDAuMTM3NyAxMi4yMzE5IDM5LjI0NzYgMTEuMjcyIDM3Ljg5MjYgMTAuNjU1OEMzNy4xODM2IDEwLjMzNTkgMzYuNDY2OCAxMC4wMTU2IDM1Ljk3MDIgOS4zMTk4MkMzNS42MjM1IDguODIzNzMgMzUuNTI5MyA4LjI3MTk3IDM1LjM1NiA3LjcyNzU0QzM1LjI0NTYgNy4zOTk5IDM1LjEzNTMgNy4wNjM5NiAzNC43NjUxIDcuMDA3ODFDMzQuMzYzMyA2Ljk0Mzg1IDM0LjIwNTYgNy4yODc2IDM0LjA0NzkgNy41NzU2OEMzMy40MTggOC43NTE5NSAzMy4xNzMzIDEwLjA0NzkgMzMuMTk3MyAxMS4zNTk5QzMzLjI1MjQgMTQuMzEyIDM0LjQ3MzYgMTYuNjY0MSAzNi44OTk5IDE4LjMzNTlDMzcuMTc1OCAxOC41Mjc4IDM3LjI0NjYgMTguNzE5NyAzNy4xNTk3IDE5QzM2Ljk5NDYgMTkuNTc1NyAzNi43OTc0IDIwLjEzNTcgMzYuNjI0IDIwLjcxMTlDMzYuNTEzNyAyMS4wODAxIDM2LjM0ODYgMjEuMTU5NyAzNS45NjI0IDIxQzM0LjYzMDkgMjAuNDMyMSAzMy40ODEgMTkuNTkxOCAzMi40NjQ0IDE4LjU3NTdDMzAuNzM5MyAxNi44NzIxIDI5LjE3OTIgMTQuOTkxNyAyNy4yMzM0IDEzLjUyQzI2Ljc3NjQgMTMuMTc1OCAyNi4zMTkzIDEyLjg1NiAyNS44NDY3IDEyLjU1MThDMjMuODYxOCAxMC41ODQgMjYuMTA2OSA4Ljk2Nzc3IDI2LjYyNyA4Ljc3NTg4QzI3LjE3MDQgOC41NzU2OCAyNi44MTU5IDcuODg3NyAyNS4wNTkxIDcuODk2QzIzLjMwMjIgNy45MDM4MSAyMS42OTUzIDguNTAzOTEgMTkuNjQ3IDkuMzAzNzFDMTkuMzQ3NyA5LjQyMzgzIDE5LjAzMjIgOS41MTE3MiAxOC43MDk1IDkuNTgzOThDMTYuODUwMSA5LjIyMzYzIDE0LjkxOTkgOS4xNDM1NSAxMi45MDMzIDkuMzc1OThDOS4xMDU5NiA5LjgwNzYyIDYuMDcyNzUgMTEuNjM5NiAzLjg0MzI2IDE0Ljc2ODFDMS4xNjQ1NSAxOC41Mjc4IDAuNTM0MTggMjIuNzk5OCAxLjMwNjY0IDI3LjI1NTlDMi4xMTc2OCAzMS45NTIxIDQuNDY1ODIgMzUuODM5OCA4LjA3MzczIDM4Ljg3OTlDMTEuODE1OSA0Mi4wMzIyIDE2LjEyNTUgNDMuNTc2MiAyMS4wNDEgNDMuMjgwM0MyNC4wMjY5IDQzLjEwNCAyNy4zNTE2IDQyLjY5NjMgMzEuMTAxNiAzOS40NTYxQzMyLjA0NjkgMzkuOTM2IDMzLjAzOTYgNDAuMTI3OSAzNC42ODYgNDAuMjcyQzM1Ljk1NDYgNDAuMzkyMSAzNy4xNzU4IDQwLjIwOCAzOC4xMjExIDQwLjAwNzhDMzkuNjAyMSAzOS42ODggMzkuNDk5NSAzOC4yODgxIDM4Ljk2MzkgMzguMDMyMkMzNC42MjMgMzUuOTY3OCAzNS41NzYyIDM2LjgwODEgMzQuNzEgMzYuMTI3OUMzNi45MTU1IDMzLjQ2MzkgNDAuMjQwMiAzMC42OTU4IDQxLjU0IDIxLjcyOEM0MS42NDI2IDIxLjAxNjEgNDEuNTU1NyAyMC41Njc5IDQxLjU0IDE5Ljk5MTdDNDEuNTMyMiAxOS42Mzk2IDQxLjYxMDggMTkuNTAzOSA0Mi4wMDQ5IDE5LjQ2MzlDNDMuMDkyMyAxOS4zMzU5IDQ0LjE0NzkgMTkuMDMxNyA0NS4xMTY3IDE4LjQ4NzhDNDcuOTI5MiAxNi45MTk5IDQ5LjA2NCAxNC4zNDM4IDQ5LjMzMTUgMTEuMjU1OUM0OS4zNzExIDEwLjc4MzcgNDkuMzIzNyAxMC4yOTU5IDQ4LjgzNTQgMTAuMDQ3OVpNMjQuMzI2MiAzNy44Mzk4QzIwLjExOTYgMzQuNDYzOSAxOC4wNzkxIDMzLjM1MjEgMTcuMjM1OCAzMy4zOTk5QzE2LjQ0ODIgMzMuNDQ4MiAxNi41ODk4IDM0LjM2ODIgMTYuNzYzMiAzNC45Njc4QzE2Ljk0NDMgMzUuNTYwMSAxNy4xODEyIDM1Ljk2ODMgMTcuNTExNyAzNi40ODc4QzE3Ljc0MDIgMzYuODMyIDE3Ljg5NzkgMzcuMzQ0MiAxNy4yODMyIDM3LjcyOEMxNS45MjgyIDM4LjU4NCAxMy41NzI4IDM3LjQzOTkgMTMuNDYyNCAzNy4zODM4QzEwLjcyMDcgMzUuNzM1OCA4LjQyODIyIDMzLjU2MDEgNi44MTM0OCAzMC41ODRDNS4yNTM0MiAyNy43MTk3IDQuMzQ3NjYgMjQuNjQ3OSA0LjE5Nzc1IDIxLjM2NzdDNC4xNTgyIDIwLjU3NTcgNC4zODY3MiAyMC4yOTU5IDUuMTU4NjkgMjAuMTUxOUM2LjE3NTI5IDE5Ljk2IDcuMjIzMTQgMTkuOTE5OSA4LjIzOTI2IDIwLjA3MThDMTIuNTMyNyAyMC43MTE5IDE2LjE4ODUgMjIuNjcxOSAxOS4yNTI5IDI1Ljc3NTlDMjEuMDAyIDI3LjU0MzkgMjIuMzI1MiAyOS42NTU4IDIzLjY4ODUgMzEuNzIwMkMyNS4xMzc3IDMzLjkxMjEgMjYuNjk3OCAzNiAyOC42ODMxIDM3LjcxMTlDMjkuMzg0MyAzOC4zMTIgMjkuOTQzNCAzOC43NjgxIDMwLjQ3OSAzOS4xMDRDMjguODY0MyAzOS4yODgxIDI2LjE2OTkgMzkuMzI4MSAyNC4zMjYyIDM3LjgzOThaTTI2LjM0MzMgMjQuNjAwMUMyNi4zNDMzIDI0LjI0OCAyNi42MTkxIDIzLjk2NzggMjYuOTY1OCAyMy45Njc4QzI3LjA0NDQgMjMuOTY3OCAyNy4xMTUyIDIzLjk4MzkgMjcuMTc4MiAyNC4wMDc4QzI3LjI2NTEgMjQuMDQgMjcuMzQzOCAyNC4wODc5IDI3LjQwNjcgMjQuMTYwMkMyNy41MTcxIDI0LjI3MiAyNy41ODAxIDI0LjQzMjEgMjcuNTgwMSAyNC42MDAxQzI3LjU4MDEgMjQuOTUyMSAyNy4zMDQyIDI1LjIzMTkgMjYuOTU3NSAyNS4yMzE5QzI2LjYxMDggMjUuMjMxOSAyNi4zNDMzIDI0Ljk1MjEgMjYuMzQzMyAyNC42MDAxWk0zMi42MDY0IDI3Ljg3OTlDMzIuMjA0NiAyOC4wNDc5IDMxLjgwMjcgMjguMTkxOSAzMS40MTY1IDI4LjIwOEMzMC44MTc5IDI4LjIzOTcgMzAuMTY0MSAyNy45OTIyIDI5LjgwOTYgMjcuNjg4QzI5LjI1ODMgMjcuMjE1OCAyOC44NjQzIDI2Ljk1MjEgMjguNjk4NyAyNi4xMjc5QzI4LjYyNzkgMjUuNzc1OSAyOC42Njc1IDI1LjIzMTkgMjguNzMwNSAyNC45MTk5QzI4Ljg3MjEgMjQuMjQ4IDI4LjcxNDQgMjMuODE1OSAyOC4yNDk1IDIzLjQyMzhDMjcuODcxNiAyMy4xMDQgMjcuMzkxMSAyMy4wMTYxIDI2Ljg2MzMgMjMuMDE2MUMyNi42NjYgMjMuMDE2MSAyNi40ODQ5IDIyLjkyNzcgMjYuMzUxMSAyMi44NTZDMjYuMTMwNCAyMi43NDQxIDI1Ljk0OTIgMjIuNDYzOSAyNi4xMjI2IDIyLjEyMDFDMjYuMTc3NyAyMi4wMDc4IDI2LjQ0NTggMjEuNzM1OCAyNi41MDg4IDIxLjY4OEMyNy4yMjU2IDIxLjI3MiAyOC4wNTI3IDIxLjQwNzcgMjguODE2OSAyMS43MTk3QzI5LjUyNTkgMjIuMDE2MSAzMC4wNjE1IDIyLjU2MDEgMzAuODM0IDIzLjMyODFDMzEuNjIxNiAyNC4yNTU5IDMxLjc2MzIgMjQuNTExNyAzMi4yMTI0IDI1LjIwOEMzMi41NjY5IDI1Ljc1MiAzMi44OTAxIDI2LjMxMiAzMy4xMTA0IDI2Ljk1MjFDMzMuMjQ0NiAyNy4zNTIxIDMzLjA3MTMgMjcuNjgwMiAzMi42MDY0IDI3Ljg3OTlaXFxcIiBmaWxsPVxcXCJcIiArIGNvbG9yICsgXCJcXFwiIGZpbGwtb3BhY2l0eT1cXFwiMVxcXCIgZmlsbC1ydWxlPVxcXCJub256ZXJvXFxcIi8+PC9zdmc+XCJcbn1cbiIsICIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgdGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoYnJvd3NlciBoYWxmKS5cbiAqXG4gKiBQb3J0ZWQgZnJvbSBkc2gtbm90aWNlLWNlbnRlciAoTUlUKS4gVGhlIHRhYiBmYXZpY29uIHR1cm5zIGdyZWVuIHdoZW4gYSBtYWluXG4gKiBzZXNzaW9uIGZpbmlzaGVkIHdoaWxlIHlvdSB3ZXJlIGF3YXkgYW5kIGFtYmVyIHdoaWxlIGEgc2Vzc2lvbiBhd2FpdHMgYW5cbiAqIGludGVyYWN0aW9uIChhbWJlciB3aW5zKSwgYW5kIHRoZSBicm93c2VyIHJhaXNlcyBhIG5vdGlmaWNhdGlvbiBvbiBjb21wbGV0aW9uXG4gKiBvciBvbiBhIG5ldyBwZW5kaW5nIHF1ZXN0aW9uIC8gYXBwcm92YWwgLyBwbGFuIHJldmlldy5cbiAqXG4gKiBJdCByZWFkcyB0aGUgb2ZmaWNpYWwgY2xpZW50IHNpZ25hbHMgXHUyMDE0IGBzZXNzaW9uc2Agcm93cyBwbHVzIHRoZSBvcHRpb25hbFxuICogYHVpU2Vzc2lvbi5zZXNzaW9uU3RhdHVzYCBzdG9yZSBcdTIwMTQgYW5kIHRoZSBgbWFsa28tcHJlZnNgIGNvbmZpZyBmb3JtLiBJdCBvd25zXG4gKiBubyBzdGF0ZSBiZXlvbmQgaW4tbWVtb3J5IGJvb2trZWVwaW5nIGFuZCByZXN0b3JlcyB0aGUgb3JpZ2luYWwgZmF2aWNvbiBvblxuICogdGVhcmRvd24uXG4gKi9cbmltcG9ydCB7IHdoYWxlU3ZnIH0gZnJvbSAnLi93aGFsZS50cydcblxuLyoqIFNldHRpbmdzL2xvY2FsZSBuYW1lc3BhY2Ugc2hhcmVkIHdpdGggdGhlIHNldHRpbmdzIHBhZ2UuICovXG5leHBvcnQgY29uc3QgTE9DQUxFX05TID0gJ3NldHRpbmdzLm1hbGtvLXByZWZzJ1xuXG5jb25zdCBERUZBVUxUX0hSRUYgPSAnL2Zhdmljb24uc3ZnJ1xuY29uc3QgREVGQVVMVF9HUkVFTiA9ICcjMjJDNTVFJ1xuY29uc3QgREVGQVVMVF9BTUJFUiA9ICcjRjU5RTBCJ1xuY29uc3QgREVGQVVMVF9XT1JLSU5HID0gJyMzQjgyRjYnXG5jb25zdCBIRVggPSAvXiNbMC05YS1mQS1GXXs2fSQvXG4vKiogVG9vbC1uYW1lIGNhcDogbG9uZ2VyIG5hbWVzIHdvdWxkIGJsb3cgdGhlIG5vdGlmaWNhdGlvbiBib2R5J3Mgc2luZ2xlIGxpbmUuICovXG5jb25zdCBUT09MX05BTUVfTElNSVQgPSAzMlxuXG4vKipcbiAqIEJyb3dzZXIgbm90aWZpY2F0aW9uIGF2YWlsYWJpbGl0eS5cbiAqIEByZXR1cm5zIHsnZ3JhbnRlZCcgfCAnZGVuaWVkJyB8ICdkZWZhdWx0JyB8ICd1bnN1cHBvcnRlZCd9XG4gKi9cbmZ1bmN0aW9uIG5vdGlmaWNhdGlvblN1cHBvcnQoKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBOb3RpZmljYXRpb24gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gJ3N0cmluZycpIHJldHVybiAndW5zdXBwb3J0ZWQnXG4gICAgcmV0dXJuIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAndW5zdXBwb3J0ZWQnXG4gIH1cbn1cblxuLyoqIEFzayBmb3IgcGVybWlzc2lvbiAob25seSB3aGVuIHRoZSBicm93c2VyIGhhcyBub3QgZGVjaWRlZCB5ZXQpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJykgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgndW5zdXBwb3J0ZWQnKVxuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiAhPT0gJ2RlZmF1bHQnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKVxuICAgIGNvbnN0IGFuc3dlciA9IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpXG4gICAgcmV0dXJuIGFuc3dlciAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBhbnN3ZXIudGhlbiA9PT0gJ2Z1bmN0aW9uJyA/IGFuc3dlciA6IFByb21pc2UucmVzb2x2ZShOb3RpZmljYXRpb24ucGVybWlzc2lvbilcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub3RpZmljYXRpb25TdXBwb3J0KCkpXG4gIH1cbn1cblxuLyoqIEN1cnJlbnQgcGVybWlzc2lvbiBzdHJpbmcsIGZvciB0aGUgc2V0dGluZ3MgcGFnZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpIHtcbiAgcmV0dXJuIG5vdGlmaWNhdGlvblN1cHBvcnQoKVxufVxuXG4vKiogU3RhdGljIHJvdXRlIHRoZSBIb3N0IHNlcnZlcyB0aGUgYnVuZGxlZCBzb3VuZHMgZnJvbS4gKi9cbmV4cG9ydCBjb25zdCBTT1VORF9ST1VURSA9ICcvbWFsa28tcHJlZnMtc291bmRzJ1xuLyoqIFNlbnRpbmVsIG1lYW5pbmcgXCJwbGF5IG5vdGhpbmdcIi4gKi9cbmV4cG9ydCBjb25zdCBTT1VORF9OT05FID0gJ25vbmUnXG4vKiogQnVpbHQtaW4gc3ludGhlc2l6ZWQgY2hpbWVzIChubyBhc3NldCBmaWxlIG5lZWRlZCkuICovXG5leHBvcnQgY29uc3QgQlVJTFRJTl9TT1VORFMgPSBbXG4gIHsgaWQ6ICdidWlsdGluLXVwJywgbGFiZWxLZXk6ICdzb3VuZEJ1aWx0aW5VcCcgfSxcbiAgeyBpZDogJ2J1aWx0aW4tZG93bicsIGxhYmVsS2V5OiAnc291bmRCdWlsdGluRG93bicgfSxcbl1cbi8qKiBvcGVuY29kZSBzb3VuZCBwYWNrcyBidW5kbGVkIHVuZGVyIGBhc3NldHMvYXVkaW9gIChNSVQpLiAqL1xuZXhwb3J0IGNvbnN0IFNPVU5EX1BBQ0tTID0gW1xuICB7IG5hbWU6ICdBbGVydCcsIHByZWZpeDogJ2FsZXJ0JywgY291bnQ6IDEwIH0sXG4gIHsgbmFtZTogJ0JpcC1ib3AnLCBwcmVmaXg6ICdiaXAtYm9wJywgY291bnQ6IDEwIH0sXG4gIHsgbmFtZTogJ1N0YXBsZWJvcHMnLCBwcmVmaXg6ICdzdGFwbGVib3BzJywgY291bnQ6IDcgfSxcbiAgeyBuYW1lOiAnTm9wZScsIHByZWZpeDogJ25vcGUnLCBjb3VudDogMTIgfSxcbiAgeyBuYW1lOiAnWXVwJywgcHJlZml4OiAneXVwJywgY291bnQ6IDYgfSxcbl1cblxuLyoqIFNvdW5kIGlkcyBvZiBvbmUgcGFjaywgaW4gZGlzcGxheSBvcmRlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYWNrU291bmRJZHMocGFjaykge1xuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogcGFjay5jb3VudCB9LCAoXywgaSkgPT4gYCR7cGFjay5wcmVmaXh9LSR7U3RyaW5nKGkgKyAxKS5wYWRTdGFydCgyLCAnMCcpfWApXG59XG5cbi8qKiBDbGFtcCBhbiBhcmJpdHJhcnkgdm9sdW1lIHRvIDBcdTIwMTMxIChkZWZhdWx0IDAuNikuICovXG5mdW5jdGlvbiBub3JtYWxpemVWb2x1bWUodm9sdW1lKSB7XG4gIGlmICh0eXBlb2Ygdm9sdW1lICE9PSAnbnVtYmVyJyB8fCAhTnVtYmVyLmlzRmluaXRlKHZvbHVtZSkpIHJldHVybiAwLjZcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZvbHVtZSwgMCksIDEpXG59XG5cbi8qKiBTaGFyZWQgQXVkaW9Db250ZXh0IGZvciB0aGUgc3ludGhlc2l6ZWQgY2hpbWVzLiAqL1xubGV0IGNoaW1lQ29udGV4dFxuZnVuY3Rpb24gY2hpbWVBdWRpb0NvbnRleHQoKSB7XG4gIGlmIChjaGltZUNvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGNoaW1lQ29udGV4dFxuICB0cnkge1xuICAgIGNvbnN0IEN0b3IgPSB3aW5kb3cuQXVkaW9Db250ZXh0ID8/IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHRcbiAgICBjaGltZUNvbnRleHQgPSBDdG9yID09PSB1bmRlZmluZWQgPyBudWxsIDogbmV3IEN0b3IoKVxuICB9IGNhdGNoIHtcbiAgICBjaGltZUNvbnRleHQgPSBudWxsXG4gIH1cbiAgcmV0dXJuIGNoaW1lQ29udGV4dFxufVxuXG4vKiogUmVzdW1lIHRoZSBhdWRpbyBjb250ZXh0IGluc2lkZSBhIHVzZXIgZ2VzdHVyZSAoYXV0b3BsYXkgcG9saWN5KS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmltZVNvdW5kKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGF1ZGlvID0gY2hpbWVBdWRpb0NvbnRleHQoKVxuICAgIGlmIChhdWRpbyAhPT0gbnVsbCAmJiBhdWRpby5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIGF1ZGlvLnJlc3VtZT8uKClcbiAgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG59XG5cbi8qKiBTeW50aGVzaXplZCBjaGltZTogdXAgKGRvbmUpIG9yIGRvd24gKHBlbmRpbmcpLiAqL1xuZnVuY3Rpb24gcGxheUNoaW1lKGtpbmQsIHZvbHVtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGxldmVsID0gbm9ybWFsaXplVm9sdW1lKHZvbHVtZSlcbiAgICBpZiAobGV2ZWwgPD0gMCkgcmV0dXJuXG4gICAgY29uc3QgYXVkaW8gPSBjaGltZUF1ZGlvQ29udGV4dCgpXG4gICAgaWYgKGF1ZGlvID09PSBudWxsKSByZXR1cm5cbiAgICBpZiAoYXVkaW8uc3RhdGUgPT09ICdzdXNwZW5kZWQnKSBhdWRpby5yZXN1bWU/LigpXG4gICAgY29uc3Qgbm90ZXMgPSBraW5kID09PSAnZG9uZScgPyBbNjYwLCA5OTBdIDogWzg4MCwgNTg3XVxuICAgIGNvbnN0IGJhc2UgPSBhdWRpby5jdXJyZW50VGltZVxuICAgIG5vdGVzLmZvckVhY2goKGZyZXF1ZW5jeSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG9zY2lsbGF0b3IgPSBhdWRpby5jcmVhdGVPc2NpbGxhdG9yKClcbiAgICAgIGNvbnN0IGdhaW4gPSBhdWRpby5jcmVhdGVHYWluKClcbiAgICAgIGNvbnN0IHN0YXJ0ID0gYmFzZSArIGluZGV4ICogMC4xNFxuICAgICAgb3NjaWxsYXRvci50eXBlID0gJ3NpbmUnXG4gICAgICBvc2NpbGxhdG9yLmZyZXF1ZW5jeS52YWx1ZSA9IGZyZXF1ZW5jeVxuICAgICAgZ2Fpbi5nYWluLnNldFZhbHVlQXRUaW1lKDAuMDAwMSwgc3RhcnQpXG4gICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjEyICogbGV2ZWwsIHN0YXJ0ICsgMC4wMilcbiAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDAwMSwgc3RhcnQgKyAwLjE4KVxuICAgICAgb3NjaWxsYXRvci5jb25uZWN0KGdhaW4pXG4gICAgICBnYWluLmNvbm5lY3QoYXVkaW8uZGVzdGluYXRpb24pXG4gICAgICBvc2NpbGxhdG9yLnN0YXJ0KHN0YXJ0KVxuICAgICAgb3NjaWxsYXRvci5zdG9wKHN0YXJ0ICsgMC4yKVxuICAgIH0pXG4gIH0gY2F0Y2ggeyAvKiBpZ25vcmUgKi8gfVxufVxuXG4vKiogRWxlbWVudCBjdXJyZW50bHkgcGxheWluZywgc28gb3ZlcmxhcHBpbmcgc291bmRzIGRvIG5vdCBzdGFjay4gKi9cbmxldCBhY3RpdmVTb3VuZCA9IG51bGxcbmZ1bmN0aW9uIHN0b3BTb3VuZCgpIHtcbiAgY29uc3QgYXVkaW8gPSBhY3RpdmVTb3VuZFxuICBhY3RpdmVTb3VuZCA9IG51bGxcbiAgaWYgKGF1ZGlvID09PSBudWxsKSByZXR1cm5cbiAgdHJ5IHsgYXVkaW8ucGF1c2UoKTsgYXVkaW8uY3VycmVudFRpbWUgPSAwIH0gY2F0Y2ggeyAvKiBpZ25vcmUgKi8gfVxufVxuXG4vKipcbiAqIFBsYXkgYSBzb3VuZCBpZDogYGJ1aWx0aW4tKmAgaXMgc3ludGhlc2l6ZWQsIGEgcGFjayBpZCBzdHJlYW1zIHRoZSBIb3N0J3NcbiAqIGJ1bmRsZWQgbXAzIGFuZCBmYWxscyBiYWNrIHRvIHRoZSBzeW50aGVzaXplZCBjaGltZSB3aGVuIHVuYXZhaWxhYmxlLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIHNvdW5kIGlkIChgbm9uZWAgPSBzaWxlbmNlKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2b2x1bWUgMFx1MjAxMzEuXG4gKiBAcGFyYW0geydkb25lJyB8ICdwZW5kaW5nJ30ga2luZCBkcml2ZXMgdGhlIGZhbGxiYWNrIGNoaW1lJ3MgcGl0Y2guXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwbGF5U291bmQoaWQsIHZvbHVtZSwga2luZCkge1xuICBjb25zdCBsZXZlbCA9IG5vcm1hbGl6ZVZvbHVtZSh2b2x1bWUpXG4gIGlmIChsZXZlbCA8PSAwKSByZXR1cm5cbiAgY29uc3QgbmFtZSA9IHR5cGVvZiBpZCA9PT0gJ3N0cmluZycgPyBpZCA6ICcnXG4gIGlmIChuYW1lID09PSAnJyB8fCBuYW1lID09PSBTT1VORF9OT05FKSByZXR1cm5cbiAgc3RvcFNvdW5kKClcbiAgaWYgKG5hbWUuc3RhcnRzV2l0aCgnYnVpbHRpbi0nKSkge1xuICAgIHBsYXlDaGltZShuYW1lID09PSAnYnVpbHRpbi11cCcgPyAnZG9uZScgOiBuYW1lID09PSAnYnVpbHRpbi1kb3duJyA/ICdwZW5kaW5nJyA6IGtpbmQsIGxldmVsKVxuICAgIHJldHVyblxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oU09VTkRfUk9VVEUgKyAnLycgKyBuYW1lICsgJy5tcDMnKVxuICAgIGF1ZGlvLnZvbHVtZSA9IGxldmVsXG4gICAgYWN0aXZlU291bmQgPSBhdWRpb1xuICAgIGNvbnN0IHBsYXllZCA9IGF1ZGlvLnBsYXkoKVxuICAgIGlmIChwbGF5ZWQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcGxheWVkLmNhdGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbGF5ZWQuY2F0Y2goKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlU291bmQgPT09IGF1ZGlvKSBhY3RpdmVTb3VuZCA9IG51bGxcbiAgICAgICAgcGxheUNoaW1lKGtpbmQsIGxldmVsKVxuICAgICAgfSlcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIHBsYXlDaGltZShraW5kLCBsZXZlbClcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBzZXNzaW9uIHNpZ25hbHMgYW5kIGRyaXZlIHRoZSB0YWIgaWNvbiArIG5vdGlmaWNhdGlvbnMuXG4gKiBAcGFyYW0ge29iamVjdH0gY3R4IGNsaWVudCBwbHVnaW4gY29udGV4dCAobmVlZHMgYHNlc3Npb25zYCwgYGxvY2FsZWApLlxuICogQHBhcmFtIHtvYmplY3R9IGZvcm0gdGhlIGBtYWxrby1wcmVmc2AgY29uZmlnIGZvcm0gKHNuYXBzaG90ICsgc3Vic2NyaWJlKS5cbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfSBkaXNwb3NlciByZXN0b3JpbmcgdGhlIGZhdmljb24gYW5kIHJlbW92aW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RhdHVzTGlnaHQoY3R4LCBmb3JtKSB7XG4gIGNvbnN0IGxpc3QgPSBjdHguc2Vzc2lvbnMubGlzdFxuICBjb25zdCBsb2NhbGUgPSAoKSA9PiBjdHgubG9jYWxlLmJpbmQoTE9DQUxFX05TKVxuICAvKiogT3B0aW9uYWwgb2ZmaWNpYWwgc3RhdHVzIHNvdXJjZSAoMC4xLjcrKTsgcm93cyBrZWVwIHRoZWlyIGxlZ2FjeSBmaWVsZHMgb3RoZXJ3aXNlLiAqL1xuICBsZXQgc3RhdHVzU291cmNlXG4gIC8qKiBEZWR1cGUga2V5cyAoYHNlc3Npb25JZDpraW5kYCkgYWxyZWFkeSBxdWV1ZWQuICovXG4gIGNvbnN0IG5vdGlmaWVkID0gbmV3IFNldCgpXG4gIC8qKiBBZ2dyZWdhdGlvbiB3aW5kb3cgc28gYSBidXJzdCBvZiB0cmFuc2l0aW9ucyBiZWNvbWVzIG9uZSBub3RpZmljYXRpb24uICovXG4gIGNvbnN0IG5vdGlmeVF1ZXVlID0gbmV3IE1hcCgpXG4gIGxldCBub3RpZnlUaW1lclxuICAvKiogTGFzdCBvYnNlcnZlZCBjb21wbGV0aW9uIHN0YXRlIHBlciBzZXNzaW9uIChmYWxzZSBcdTIxOTIgdHJ1ZSBlZGdlIGRldGVjdGlvbikuICovXG4gIGNvbnN0IHByZXZDb21wbGV0ZWQgPSBuZXcgTWFwKClcbiAgLyoqIFJ1biBzdGFydCBwZXIgc2Vzc2lvbiwgdGhlbiB0aGUgbGFzdCBydW4gZHVyYXRpb24gKG1zKS4gKi9cbiAgY29uc3QgcnVuU3RhcnRlZEF0ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxhc3RSdW5NcyA9IG5ldyBNYXAoKVxuICBsZXQgcHJldlBlbmRpbmcgPSBuZXcgU2V0KClcbiAgbGV0IHBlbmRpbmdTZWVuID0gZmFsc2VcblxuICAvKiogUmVhbGx5IGluIHRoZSBmb3JlZ3JvdW5kOiB0YWIgdmlzaWJsZSBBTkQgd2luZG93IGZvY3VzZWQuICovXG4gIGNvbnN0IGlzRm9yZWdyb3VuZCA9ICgpID0+IGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ3Zpc2libGUnICYmIGRvY3VtZW50Lmhhc0ZvY3VzKClcblxuICAvKiogUmVhZCB0aGUgbm90aWZpY2F0aW9uL2NvbG9yIHByZWZlcmVuY2VzICh1bnNldCBmYWxscyBiYWNrIHRvIGRlZmF1bHRzKS4gKi9cbiAgZnVuY3Rpb24gcmVhZENvbmZpZygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGZvcm0uZ2V0U25hcHNob3QoKS52YWx1ZSA/PyB7fVxuICAgIHJldHVybiB7XG4gICAgICBjb2xvcnNFbmFibGVkOiB2YWx1ZS5jb2xvcnNFbmFibGVkICE9PSBmYWxzZSxcbiAgICAgIGdyZWVuOiBIRVgudGVzdCh2YWx1ZS5ncmVlbikgPyB2YWx1ZS5ncmVlbiA6IERFRkFVTFRfR1JFRU4sXG4gICAgICBhbWJlcjogSEVYLnRlc3QodmFsdWUuYW1iZXIpID8gdmFsdWUuYW1iZXIgOiBERUZBVUxUX0FNQkVSLFxuICAgICAgd29ya2luZzogSEVYLnRlc3QodmFsdWUud29ya2luZykgPyB2YWx1ZS53b3JraW5nIDogREVGQVVMVF9XT1JLSU5HLFxuICAgICAgYmxhY2s6IEhFWC50ZXN0KHZhbHVlLmJsYWNrKSA/IHZhbHVlLmJsYWNrIDogdW5kZWZpbmVkLFxuICAgICAgbm90aWZ5RW5hYmxlZDogdmFsdWUubm90aWZ5RW5hYmxlZCA9PT0gdHJ1ZSxcbiAgICAgIG5vdGlmeUZvcmVncm91bmQ6IHZhbHVlLm5vdGlmeUZvcmVncm91bmQgPT09IHRydWUsXG4gICAgICBkb25lRW5hYmxlZDogdmFsdWUubm90aWZ5RG9uZUVuYWJsZWQgIT09IGZhbHNlLFxuICAgICAgZG9uZVBlcnNpc3RlbnQ6IHZhbHVlLm5vdGlmeURvbmVQZXJzaXN0ZW50ID09PSB0cnVlLFxuICAgICAgcGVuZGluZ0VuYWJsZWQ6IHZhbHVlLm5vdGlmeVBlbmRpbmdFbmFibGVkICE9PSBmYWxzZSxcbiAgICAgIHBlbmRpbmdQZXJzaXN0ZW50OiB2YWx1ZS5ub3RpZnlQZW5kaW5nUGVyc2lzdGVudCA9PT0gdHJ1ZSxcbiAgICAgIHZvbHVtZTogbm9ybWFsaXplVm9sdW1lKHZhbHVlLm5vdGlmeVZvbHVtZSA/PyAwLjYpLFxuICAgICAgZG9uZVNvdW5kOiB0eXBlb2YgdmFsdWUubm90aWZ5RG9uZVNvdW5kID09PSAnc3RyaW5nJyA/IHZhbHVlLm5vdGlmeURvbmVTb3VuZCA6IFNPVU5EX05PTkUsXG4gICAgICBwZW5kaW5nU291bmQ6IHR5cGVvZiB2YWx1ZS5ub3RpZnlQZW5kaW5nU291bmQgPT09ICdzdHJpbmcnID8gdmFsdWUubm90aWZ5UGVuZGluZ1NvdW5kIDogU09VTkRfTk9ORSxcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gZmF2aWNvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRFNIIHNoaXBzIHR3byBpY29uIGxpbmtzIChkYXJrL2xpZ2h0IHZpYSBgbWVkaWFgKTsgdGhlIGJyb3dzZXIgcGlja3Mgb25lIGJ5XG4gIC8vIHRoZSBPUyBjb2xvciBzY2hlbWUsIHNvIGV2ZXJ5IGxpbmsgbXVzdCBiZSBwYWludGVkIGFuZCByZXN0b3JlZCB0b2dldGhlci5cbiAgY29uc3QgaWNvbkxpbmtzID0gKCkgPT4gWy4uLmRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWx+PVwiaWNvblwiXScpXVxuICAvKiogT3JpZ2luYWwgaHJlZiBvZiBlYWNoIGxpbmsgd2UgaGF2ZSB0b3VjaGVkIChyZXN0b3JlIHRhcmdldCkuICovXG4gIGNvbnN0IG9yaWdpbmFsSHJlZnMgPSBuZXcgTWFwKClcbiAgY29uc3QgcmVtZW1iZXJMaW5rcyA9ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgaWNvbkxpbmtzKCkpIGlmICghb3JpZ2luYWxIcmVmcy5oYXMobGluaykpIG9yaWdpbmFsSHJlZnMuc2V0KGxpbmssIGxpbmsuaHJlZilcbiAgfVxuICByZW1lbWJlckxpbmtzKClcbiAgY29uc3QgcGFpbnQgPSAoaHJlZikgPT4geyBmb3IgKGNvbnN0IGxpbmsgb2Ygb3JpZ2luYWxIcmVmcy5rZXlzKCkpIGxpbmsuaHJlZiA9IGhyZWYgfVxuICAvKiogTGFzdCBocmVmIHdlIHNldDsgbnVsbCA9IG9mZmljaWFsIGljb25zLiAqL1xuICBsZXQgYXBwbGllZCA9IG51bGxcbiAgY29uc3QgdXJpID0gKGhleCkgPT4gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudCh3aGFsZVN2ZyhoZXgpKX1gXG4gIGNvbnN0IHJlc3RvcmUgPSAoKSA9PiB7XG4gICAgaWYgKGFwcGxpZWQgPT09IG51bGwpIHJldHVyblxuICAgIGZvciAoY29uc3QgW2xpbmssIGhyZWZdIG9mIG9yaWdpbmFsSHJlZnMpIGxpbmsuaHJlZiA9IGhyZWZcbiAgICBhcHBsaWVkID0gbnVsbFxuICB9XG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBtYXkgcmUtY3JlYXRlIHRoZSBpY29uIGxpbmtzOyBwaWNrIG5ldyBvbmVzIHVwLlxuICBjb25zdCBpY29uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgY29uc3QgYmVmb3JlID0gb3JpZ2luYWxIcmVmcy5zaXplXG4gICAgcmVtZW1iZXJMaW5rcygpXG4gICAgaWYgKG9yaWdpbmFsSHJlZnMuc2l6ZSAhPT0gYmVmb3JlKSBzeW5jKClcbiAgfSlcbiAgaWNvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcblxuICAvLyAtLS0gbm90aWZpY2F0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgUEVORElOR19LSU5EX0tFWVMgPSB7XG4gICAgYXBwcm92YWw6ICdwZW5kaW5nS2luZEFwcHJvdmFsJyxcbiAgICBxdWVzdGlvbjogJ3BlbmRpbmdLaW5kUXVlc3Rpb24nLFxuICAgICdwbGFuLXJldmlldyc6ICdwZW5kaW5nS2luZFBsYW5SZXZpZXcnLFxuICB9XG5cbiAgLyoqIFBlbmRpbmcgaW50ZXJhY3Rpb24gXHUyMTkyIG5vdGlmaWNhdGlvbiBib2R5IHRleHQgKGRlZmVuc2l2ZSByZWFkcykuICovXG4gIGZ1bmN0aW9uIHBlbmRpbmdUeXBlTGFiZWwoaW50ZXJhY3Rpb24pIHtcbiAgICBjb25zdCB0ID0gbG9jYWxlKClcbiAgICBjb25zdCBraW5kID0gaW50ZXJhY3Rpb24/LmtpbmRcbiAgICBpZiAoa2luZCA9PT0gJ2FwcHJvdmFsJykge1xuICAgICAgY29uc3QgdG9vbCA9IGludGVyYWN0aW9uLnRvb2xOYW1lXG4gICAgICBpZiAodHlwZW9mIHRvb2wgIT09ICdzdHJpbmcnIHx8IHRvb2wgPT09ICcnKSByZXR1cm4gdCgncGVuZGluZ0tpbmRBcHByb3ZhbCcpXG4gICAgICBjb25zdCBzaG93biA9IHRvb2wubGVuZ3RoID4gVE9PTF9OQU1FX0xJTUlUID8gdG9vbC5zbGljZSgwLCBUT09MX05BTUVfTElNSVQpICsgJ1x1MjAyNicgOiB0b29sXG4gICAgICByZXR1cm4gdCgncGVuZGluZ0FwcHJvdmFsVG9vbCcsIHsgdG9vbDogc2hvd24gfSlcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09ICdxdWVzdGlvbicpIHtcbiAgICAgIGNvbnN0IHF1ZXN0aW9ucyA9IEFycmF5LmlzQXJyYXkoaW50ZXJhY3Rpb24ucXVlc3Rpb25zKSA/IGludGVyYWN0aW9uLnF1ZXN0aW9ucyA6IFtdXG4gICAgICBpZiAocXVlc3Rpb25zLmxlbmd0aCA+IDEpIHJldHVybiB0KCdwZW5kaW5nUXVlc3Rpb25CYXRjaCcsIHsgY291bnQ6IHF1ZXN0aW9ucy5sZW5ndGggfSlcbiAgICAgIGNvbnN0IGZpcnN0ID0gcXVlc3Rpb25zWzBdXG4gICAgICBpZiAoZmlyc3QgPT09IG51bGwgfHwgdHlwZW9mIGZpcnN0ICE9PSAnb2JqZWN0JykgcmV0dXJuIHQoJ3BlbmRpbmdLaW5kUXVlc3Rpb24nKVxuICAgICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmlzQXJyYXkoZmlyc3Qub3B0aW9ucykgPyBmaXJzdC5vcHRpb25zIDogW11cbiAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHQoJ3BlbmRpbmdRdWVzdGlvbkZpbGwnKVxuICAgICAgcmV0dXJuIGZpcnN0Lm11bHRpU2VsZWN0ID09PSB0cnVlID8gdCgncGVuZGluZ1F1ZXN0aW9uTXVsdGknKSA6IHQoJ3BlbmRpbmdRdWVzdGlvbkNob29zZScpXG4gICAgfVxuICAgIGNvbnN0IGtleSA9IFBFTkRJTkdfS0lORF9LRVlTW2tpbmRdXG4gICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogdChrZXkpXG4gIH1cblxuICAvKiogUXVldWUgb25lIG5vdGlmaWNhdGlvbiAoc2tpcHBlZCB3aGlsZSBkaXNhYmxlZDsgZGVkdXBlZDsgMzAwIG1zIHdpbmRvdykuICovXG4gIGZ1bmN0aW9uIHF1ZXVlTm90aWZpY2F0aW9uKGtpbmQsIHNlc3Npb25JZCwgbGFiZWwsIHR5cGVMYWJlbCwgZHVyYXRpb25Ncykge1xuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKVxuICAgIGlmICghY29uZmlnLm5vdGlmeUVuYWJsZWQpIHJldHVyblxuICAgIGlmIChraW5kID09PSAnZG9uZScgJiYgIWNvbmZpZy5kb25lRW5hYmxlZCkgcmV0dXJuXG4gICAgaWYgKGtpbmQgPT09ICdwZW5kaW5nJyAmJiAhY29uZmlnLnBlbmRpbmdFbmFibGVkKSByZXR1cm5cbiAgICBjb25zdCBrZXkgPSBzZXNzaW9uSWQgKyAnOicgKyBraW5kXG4gICAgaWYgKG5vdGlmaWVkLmhhcyhrZXkpKSByZXR1cm5cbiAgICBub3RpZmllZC5hZGQoa2V5KVxuICAgIG5vdGlmeVF1ZXVlLnNldChrZXksIHsga2luZCwgc2Vzc2lvbklkLCBsYWJlbCwgdHlwZUxhYmVsLCBkdXJhdGlvbk1zIH0pXG4gICAgaWYgKG5vdGlmeVRpbWVyID09PSB1bmRlZmluZWQpIG5vdGlmeVRpbWVyID0gc2V0VGltZW91dChmbHVzaE5vdGlmaWNhdGlvbnMsIDMwMClcbiAgfVxuXG4gIC8qKiBGbHVzaCB0aGUgYWdncmVnYXRpb24gd2luZG93IGludG8gYnJvd3NlciBub3RpZmljYXRpb25zLiAqL1xuICBmdW5jdGlvbiBmbHVzaE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgbm90aWZ5VGltZXIgPSB1bmRlZmluZWRcbiAgICBjb25zdCBlbnRyaWVzID0gWy4uLm5vdGlmeVF1ZXVlLnZhbHVlcygpXVxuICAgIG5vdGlmeVF1ZXVlLmNsZWFyKClcbiAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHJldHVyblxuICAgIGlmIChub3RpZmljYXRpb25TdXBwb3J0KCkgIT09ICdncmFudGVkJykgcmV0dXJuXG4gICAgY29uc3QgY29uZmlnID0gcmVhZENvbmZpZygpXG4gICAgaWYgKCFjb25maWcubm90aWZ5Rm9yZWdyb3VuZCAmJiBpc0ZvcmVncm91bmQoKSkgcmV0dXJuXG4gICAgY29uc3QgdCA9IGxvY2FsZSgpXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXAoKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgY29uc3QgYnVja2V0ID0gZ3JvdXBlZC5nZXQoZW50cnkua2luZCkgPz8gW11cbiAgICAgIGJ1Y2tldC5wdXNoKGVudHJ5KVxuICAgICAgZ3JvdXBlZC5zZXQoZW50cnkua2luZCwgYnVja2V0KVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtraW5kLCBidWNrZXRdIG9mIGdyb3VwZWQpIHtcbiAgICAgIGNvbnN0IGhlYWQgPSBidWNrZXRbMF1cbiAgICAgIGNvbnN0IGV4dHJhID0gYnVja2V0Lmxlbmd0aCAtIDFcbiAgICAgIGxldCB0aXRsZSA9IGhlYWQubGFiZWwgPz8gaGVhZC5zZXNzaW9uSWRcbiAgICAgIGlmIChleHRyYSA+IDApIHRpdGxlID0gdGl0bGUgKyAnICsnICsgU3RyaW5nKGV4dHJhKVxuICAgICAgbGV0IGJvZHkgPSBraW5kID09PSAnZG9uZScgPyB0KCdub3RpZnlEb25lVGl0bGUnKSA6IChoZWFkLnR5cGVMYWJlbCA/PyB0KCdub3RpZnlQZW5kaW5nVGl0bGUnKSlcbiAgICAgIGlmIChraW5kID09PSAnZG9uZScgJiYgZXh0cmEgPT09IDAgJiYgaGVhZC5kdXJhdGlvbk1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYm9keSA9IGJvZHkgKyAnIFx1MDBCNyAnICsgdCgnbm90aWZ5RHVyYXRpb24nLCB7IGR1cmF0aW9uOiBmb3JtYXRSdW5EdXJhdGlvbihoZWFkLmR1cmF0aW9uTXMsIHQpIH0pXG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgbm8gYHRhZ2A6IHJldXNpbmcgb25lIG1ha2VzIHNvbWUgcGxhdGZvcm1zIHNpbGVudGx5XG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIHByZXZpb3VzIGJhbm5lciBpbnN0ZWFkIG9mIHJhaXNpbmcgYSBuZXcgb25lLlxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKHRpdGxlLCB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBpY29uOiB1cmkoa2luZCA9PT0gJ2RvbmUnID8gY29uZmlnLmdyZWVuIDogY29uZmlnLmFtYmVyKSxcbiAgICAgICAgICByZXF1aXJlSW50ZXJhY3Rpb246IGtpbmQgPT09ICdkb25lJyA/IGNvbmZpZy5kb25lUGVyc2lzdGVudCA6IGNvbmZpZy5wZW5kaW5nUGVyc2lzdGVudCxcbiAgICAgICAgfSlcbiAgICAgICAgcGxheVNvdW5kKGtpbmQgPT09ICdkb25lJyA/IGNvbmZpZy5kb25lU291bmQgOiBjb25maWcucGVuZGluZ1NvdW5kLCBjb25maWcudm9sdW1lLCBraW5kKVxuICAgICAgICBub3RpZmljYXRpb24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICB0cnkgeyB3aW5kb3cuZm9jdXMoKSB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd29ya3NwYWNlID0gY3R4LmdldCgndWlXb3Jrc3BhY2UnKVxuICAgICAgICAgICAgaWYgKHdvcmtzcGFjZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3b3Jrc3BhY2Uub3BlblNlc3Npb24gPT09ICdmdW5jdGlvbicpIHdvcmtzcGFjZS5vcGVuU2Vzc2lvbihoZWFkLnNlc3Npb25JZClcbiAgICAgICAgICAgIGVsc2UgY3R4LnNlc3Npb25zLm9wZW4oaGVhZC5zZXNzaW9uSWQpXG4gICAgICAgICAgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG4gICAgICAgICAgbm90aWZpY2F0aW9uLmNsb3NlKClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbbWFsa28tcHJlZnNdIGNvdWxkIG5vdCByYWlzZSBub3RpZmljYXRpb24nLCBlcnJvcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogNjAgcyByb2xscyBpbnRvIG1pbnV0ZXMsIHNlY29uZHMgemVyby1wYWRkZWQgKG1hdGNoZXMgdGhlIG9mZmljaWFsIGZvcm1hdCkuICovXG4gIGZ1bmN0aW9uIGZvcm1hdFJ1bkR1cmF0aW9uKG1zLCB0KSB7XG4gICAgY29uc3QgdG90YWwgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKG1zIC8gMTAwMCkpXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodG90YWwgLyA2MClcbiAgICBjb25zdCBzZWNvbmRzID0gdG90YWwgJSA2MFxuICAgIHJldHVybiBtaW51dGVzID4gMFxuICAgICAgPyB0KCdkdXJhdGlvbk1pbnV0ZXMnLCB7IG1pbnV0ZXMsIHNlY29uZHM6IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpIH0pXG4gICAgICA6IHQoJ2R1cmF0aW9uU2Vjb25kcycsIHsgc2Vjb25kcyB9KVxuICB9XG5cbiAgLyoqIENvbXBsZXRpb24gLyBwZW5kaW5nIHRyYW5zaXRpb25zIGZyb20gdGhlIHNlc3Npb24gc3RhdGUuICovXG4gIGZ1bmN0aW9uIGRldGVjdFRyYW5zaXRpb25zKHN0YXRlKSB7XG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBjb25zdCBiZWZvcmUgPSBwcmV2Q29tcGxldGVkLmdldChyb3cuaWQpXG4gICAgICBjb25zdCBub3cgPSByb3cuY29tcGxldGVkID09PSB0cnVlXG4gICAgICBpZiAoYmVmb3JlID09PSBmYWxzZSAmJiBub3cpIHF1ZXVlTm90aWZpY2F0aW9uKCdkb25lJywgcm93LmlkLCByb3cuZGlzcGxheVRpdGxlID8/IHJvdy50aXRsZSA/PyByb3cuaWQsIHVuZGVmaW5lZCwgbGFzdFJ1bk1zLmdldChyb3cuaWQpKVxuICAgICAgaWYgKCFub3cpIG5vdGlmaWVkLmRlbGV0ZShyb3cuaWQgKyAnOmRvbmUnKVxuICAgICAgcHJldkNvbXBsZXRlZC5zZXQocm93LmlkLCBub3cpXG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgWy4uLnByZXZDb21wbGV0ZWQua2V5cygpXSkge1xuICAgICAgaWYgKCEoaWQgaW4gc3RhdGUuYnlJZCkpIHsgcHJldkNvbXBsZXRlZC5kZWxldGUoaWQpOyBub3RpZmllZC5kZWxldGUoaWQgKyAnOmRvbmUnKSB9XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnQgPSBuZXcgU2V0KClcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKHN0YXRlLmJ5SWQpKSBpZiAocm93LnBlbmRpbmdJbnRlcmFjdGlvbiAhPT0gdW5kZWZpbmVkKSBjdXJyZW50LmFkZChyb3cuaWQpXG4gICAgaWYgKHBlbmRpbmdTZWVuKSB7XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGN1cnJlbnQpIHtcbiAgICAgICAgaWYgKHByZXZQZW5kaW5nLmhhcyhpZCkpIGNvbnRpbnVlXG4gICAgICAgIGNvbnN0IHJvdyA9IHN0YXRlLmJ5SWRbaWRdXG4gICAgICAgIGlmIChyb3cgIT09IHVuZGVmaW5lZCAmJiByb3cub3JpZ2luID09PSAnc3ViYWdlbnQnKSBjb250aW51ZVxuICAgICAgICBjb25zdCBsYWJlbCA9IHJvdz8uZGlzcGxheVRpdGxlID8/IHJvdz8udGl0bGUgPz8gaWRcbiAgICAgICAgcXVldWVOb3RpZmljYXRpb24oJ3BlbmRpbmcnLCBpZCwgbGFiZWwsIHBlbmRpbmdUeXBlTGFiZWwocm93Py5wZW5kaW5nSW50ZXJhY3Rpb24pKVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIHByZXZQZW5kaW5nKSBpZiAoIWN1cnJlbnQuaGFzKGlkKSkgbm90aWZpZWQuZGVsZXRlKGlkICsgJzpwZW5kaW5nJylcbiAgICBwcmV2UGVuZGluZyA9IGN1cnJlbnRcbiAgICBwZW5kaW5nU2VlbiA9IHRydWVcbiAgfVxuXG4gIC8qKiBTZWxmLXRyYWNrZWQgcnVubmluZyBlZGdlOiBmaWxscyB0aGUgZ2FwIGZvciB0aGUgc2Vzc2lvbiBiZWluZyB2aWV3ZWQuICovXG4gIGNvbnN0IHByZXZSdW5uaW5nID0gbmV3IE1hcCgpXG4gIGNvbnN0IGZpbmlzaGVkV2hpbGVIaWRkZW4gPSBuZXcgU2V0KClcbiAgZnVuY3Rpb24gdHJhY2tFZGdlcyhzdGF0ZSkge1xuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoc3RhdGUuYnlJZCkpIHtcbiAgICAgIGlmIChyb3cub3JpZ2luID09PSAnc3ViYWdlbnQnKSBjb250aW51ZVxuICAgICAgY29uc3QgcHJldiA9IHByZXZSdW5uaW5nLmdldChyb3cuaWQpXG4gICAgICBpZiAocHJldiA9PT0gdW5kZWZpbmVkKSB7IHByZXZSdW5uaW5nLnNldChyb3cuaWQsIHJvdy5ydW5uaW5nKTsgY29udGludWUgfVxuICAgICAgaWYgKCFwcmV2ICYmIHJvdy5ydW5uaW5nKSBydW5TdGFydGVkQXQuc2V0KHJvdy5pZCwgRGF0ZS5ub3coKSlcbiAgICAgIGlmIChwcmV2ICYmICFyb3cucnVubmluZykge1xuICAgICAgICBjb25zdCBzdGFydGVkQXQgPSBydW5TdGFydGVkQXQuZ2V0KHJvdy5pZClcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IHN0YXJ0ZWRBdCA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogRGF0ZS5ub3coKSAtIHN0YXJ0ZWRBdFxuICAgICAgICBydW5TdGFydGVkQXQuZGVsZXRlKHJvdy5pZClcbiAgICAgICAgaWYgKGVsYXBzZWQgIT09IHVuZGVmaW5lZCkgbGFzdFJ1bk1zLnNldChyb3cuaWQsIGVsYXBzZWQpXG4gICAgICAgIGlmIChyb3cuaWQgPT09IHN0YXRlLmN1cnJlbnQgJiYgIWlzRm9yZWdyb3VuZCgpKSBmaW5pc2hlZFdoaWxlSGlkZGVuLmFkZChyb3cuaWQpXG4gICAgICAgIGlmIChyb3cuaWQgPT09IHN0YXRlLmN1cnJlbnQpIHF1ZXVlTm90aWZpY2F0aW9uKCdkb25lJywgcm93LmlkLCByb3cuZGlzcGxheVRpdGxlID8/IHJvdy50aXRsZSA/PyByb3cuaWQsIHVuZGVmaW5lZCwgZWxhcHNlZClcbiAgICAgIH0gZWxzZSBpZiAocm93LnJ1bm5pbmcpIGZpbmlzaGVkV2hpbGVIaWRkZW4uZGVsZXRlKHJvdy5pZClcbiAgICAgIHByZXZSdW5uaW5nLnNldChyb3cuaWQsIHJvdy5ydW5uaW5nKVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIFsuLi5wcmV2UnVubmluZy5rZXlzKCldKSB7XG4gICAgICBpZiAoIShpZCBpbiBzdGF0ZS5ieUlkKSkgeyBwcmV2UnVubmluZy5kZWxldGUoaWQpOyBmaW5pc2hlZFdoaWxlSGlkZGVuLmRlbGV0ZShpZCk7IHJ1blN0YXJ0ZWRBdC5kZWxldGUoaWQpOyBsYXN0UnVuTXMuZGVsZXRlKGlkKSB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEJhY2sgaW4gdGhlIGZvcmVncm91bmQ6IHRoZSB2aWV3ZWQgc2Vzc2lvbidzIGdyZWVuIGxpZ2h0IGNsZWFycy4gKi9cbiAgY29uc3Qgb25Gb3JlZ3JvdW5kID0gKCkgPT4ge1xuICAgIGlmICghaXNGb3JlZ3JvdW5kKCkpIHJldHVyblxuICAgIGlmIChmaW5pc2hlZFdoaWxlSGlkZGVuLnNpemUgPiAwKSB7IGZpbmlzaGVkV2hpbGVIaWRkZW4uY2xlYXIoKTsgc3luYygpIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgdGFiIHN0YXRlIG92ZXIgbWFpbiBzZXNzaW9ucy4gUHJpb3JpdHk6IGFtYmVyIChzb21ldGhpbmcgd2FpdHNcbiAgICogZm9yIHlvdSkgPiB3b3JraW5nIChhIHNlc3Npb24gaXMgZ2VuZXJhdGluZykgPiBncmVlbiAodW5zZWVuIGNvbXBsZXRpb24pXG4gICAqID4gaWRsZS4gUmV0dXJucyBgJ29mZidgIHdoZW4gdGhlIHN0YXR1cyBsaWdodCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGN1cnJlbnRLaW5kKHN0YXRlKSB7XG4gICAgaWYgKCFyZWFkQ29uZmlnKCkuY29sb3JzRW5hYmxlZCkgcmV0dXJuICdvZmYnXG4gICAgbGV0IGdyZWVuID0gZmFsc2VcbiAgICBsZXQgd29ya2luZyA9IGZhbHNlXG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBpZiAocm93LnBlbmRpbmdJbnRlcmFjdGlvbiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gJ2FtYmVyJ1xuICAgICAgaWYgKHJvdy5ydW5uaW5nID09PSB0cnVlKSB3b3JraW5nID0gdHJ1ZVxuICAgICAgaWYgKHJvdy5jb21wbGV0ZWQgPT09IHRydWUgfHwgZmluaXNoZWRXaGlsZUhpZGRlbi5oYXMocm93LmlkKSkgZ3JlZW4gPSB0cnVlXG4gICAgfVxuICAgIGlmICh3b3JraW5nKSByZXR1cm4gJ3dvcmtpbmcnXG4gICAgaWYgKGdyZWVuKSByZXR1cm4gJ2dyZWVuJ1xuICAgIHJldHVybiAnaWRsZSdcbiAgfVxuXG4gIC8qKiBBcHBseSBvbmUgdGFiIHN0YXRlIHRvIHRoZSBmYXZpY29uLiAqL1xuICBmdW5jdGlvbiBhcHBseUtpbmQoa2luZCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKVxuICAgIGlmIChraW5kID09PSAnb2ZmJykgeyByZXN0b3JlKCk7IHJldHVybiB9XG4gICAgY29uc3QgaHJlZiA9IGtpbmQgPT09ICdhbWJlcidcbiAgICAgID8gdXJpKGNvbmZpZy5hbWJlcilcbiAgICAgIDoga2luZCA9PT0gJ3dvcmtpbmcnXG4gICAgICAgID8gdXJpKGNvbmZpZy53b3JraW5nKVxuICAgICAgICA6IGtpbmQgPT09ICdncmVlbidcbiAgICAgICAgICA/IHVyaShjb25maWcuZ3JlZW4pXG4gICAgICAgICAgOiAoY29uZmlnLmJsYWNrID8gdXJpKGNvbmZpZy5ibGFjaykgOiBudWxsKVxuICAgIGlmIChocmVmID09PSBudWxsKSByZXN0b3JlKClcbiAgICBlbHNlIGlmIChhcHBsaWVkICE9PSBocmVmKSB7IHBhaW50KGhyZWYpOyBhcHBsaWVkID0gaHJlZiB9XG4gIH1cblxuICAvKiogTWVyZ2UgdGhlIHNlc3Npb24gcm93cyB3aXRoIHRoZSBvZmZpY2lhbCBzdGF0dXMgc3RvcmUgd2hlbiBhdmFpbGFibGUuICovXG4gIGZ1bmN0aW9uIGJ1aWxkU3RhdGUoKSB7XG4gICAgY29uc3QgbGlzdFN0YXRlID0gbGlzdC5nZXRTbmFwc2hvdCgpXG4gICAgY29uc3Qgc3RhdHVzID0gc3RhdHVzU291cmNlPy5nZXRTbmFwc2hvdCgpXG4gICAgbGV0IGN1cnJlbnQgPSBsaXN0U3RhdGUuY3VycmVudFxuICAgIGNvbnN0IGJ5SWQgPSB7fVxuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMobGlzdFN0YXRlLmJ5SWQpKSB7XG4gICAgICBjb25zdCBzID0gc3RhdHVzPy5nZXQocm93LmlkKVxuICAgICAgaWYgKChyb3cucmV0YWluZWRCeT8ubWFpblZpZXcgPz8gMCkgPiAwKSBjdXJyZW50ID0gcm93LmlkXG4gICAgICBieUlkW3Jvdy5pZF0gPSB7XG4gICAgICAgIC4uLnJvdyxcbiAgICAgICAgcnVubmluZzogcz8ucnVubmluZyA/PyByb3cucnVubmluZyxcbiAgICAgICAgY29tcGxldGVkOiBzPy5jb21wbGV0aW9uVW5yZWFkID8/IHJvdy5jb21wbGV0ZWQgPT09IHRydWUsXG4gICAgICAgIHBlbmRpbmdJbnRlcmFjdGlvbjogcz8ucGVuZGluZ0ludGVyYWN0aW9uID8/IHJvdy5wZW5kaW5nSW50ZXJhY3Rpb24sXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IC4uLmxpc3RTdGF0ZSwgYnlJZCwgY3VycmVudCB9XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jKCkge1xuICAgIGNvbnN0IHN0YXRlID0gYnVpbGRTdGF0ZSgpXG4gICAgdHJhY2tFZGdlcyhzdGF0ZSlcbiAgICBkZXRlY3RUcmFuc2l0aW9ucyhzdGF0ZSlcbiAgICBhcHBseUtpbmQoY3VycmVudEtpbmQoc3RhdGUpKVxuICB9XG5cbiAgY29uc3QgdW5zdWJzY3JpYmVMaXN0ID0gbGlzdC5zdWJzY3JpYmUoc3luYylcbiAgY29uc3QgdW5zdWJzY3JpYmVGb3JtID0gZm9ybS5zdWJzY3JpYmUoc3luYylcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uRm9yZWdyb3VuZClcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb3JlZ3JvdW5kKVxuICBzeW5jKClcblxuICAvLyBPcHRpb25hbCBjaGFubmVsOiB0aGUgb2ZmaWNpYWwgc3RhdHVzIHN0b3JlIChwcmVzZW50IG9uIDAuMS43KykuXG4gIGN0eC5pbmplY3QoWyd1aVNlc3Npb24nXSwgKHVpQ3R4KSA9PiB7XG4gICAgc3RhdHVzU291cmNlID0gdWlDdHgudWlTZXNzaW9uLnNlc3Npb25TdGF0dXNcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN0YXR1c1NvdXJjZS5zdWJzY3JpYmUoc3luYylcbiAgICBzeW5jKClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUoKVxuICAgICAgc3RhdHVzU291cmNlID0gdW5kZWZpbmVkXG4gICAgICBzeW5jKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAobm90aWZ5VGltZXIgIT09IHVuZGVmaW5lZCkgY2xlYXJUaW1lb3V0KG5vdGlmeVRpbWVyKVxuICAgIG5vdGlmeVF1ZXVlLmNsZWFyKClcbiAgICBzdG9wU291bmQoKVxuICAgIGljb25PYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICB1bnN1YnNjcmliZUxpc3QoKVxuICAgIHVuc3Vic2NyaWJlRm9ybSgpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uRm9yZWdyb3VuZClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvcmVncm91bmQpXG4gICAgcmVzdG9yZSgpXG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUEsbUJBQWtCO0FBQ2xCLHNDQUFpRDs7O0FDRTFDLElBQU0saUJBQWlCO0FBQUEsRUFDNUIsSUFBSTtBQUFBLEVBQ0osU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQ3BCO0FBUU8sU0FBUyxnQkFBZ0IsWUFBWSxjQUFjO0FBQ3hELFNBQU87QUFBQSxJQUNMLElBQUksZUFBZTtBQUFBLElBQ25CLFNBQVMsZUFBZTtBQUFBLElBQ3hCLFdBQVcsZUFBZTtBQUFBLElBQzFCLFFBQVEsZUFBZTtBQUFBLElBQ3ZCLFlBQVksRUFBRSxNQUFNLFNBQVM7QUFBQSxJQUM3QixZQUFZO0FBQUEsTUFDVjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsT0FBTyxFQUFFLE1BQU0sVUFBVSxZQUFZLGVBQWUsZ0JBQWdCLFFBQVEsV0FBVztBQUFBLE1BQ3pGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUSxFQUFFLE1BQU0sVUFBVSxZQUFZLGVBQWUsa0JBQWtCLFFBQVEsYUFBYTtBQUFBLEVBQzlGO0FBQ0Y7OztBQ2xDTyxTQUFTLFNBQVMsT0FBTztBQUM5QixTQUFPLHU3R0FBbzhHLFFBQVE7QUFDcjlHOzs7QUNLTyxJQUFNLFlBQVk7QUFHekIsSUFBTSxnQkFBZ0I7QUFDdEIsSUFBTSxnQkFBZ0I7QUFDdEIsSUFBTSxrQkFBa0I7QUFDeEIsSUFBTSxNQUFNO0FBRVosSUFBTSxrQkFBa0I7QUFNeEIsU0FBUyxzQkFBc0I7QUFDN0IsTUFBSTtBQUNGLFFBQUksT0FBTyxp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LElBQUksT0FBTyxLQUFLLFNBQVM7QUFDbkMsUUFBTSxPQUFPLElBQUksWUFBWSxJQUFJLEVBQUU7QUFDbkMsUUFBTSxZQUFZLElBQUksWUFBWSxJQUFJLFFBQVE7QUFHOUMsTUFBSTtBQUNGLFVBQU0sZ0JBQWdCLE1BQU0sSUFBSSxPQUFPLE9BQU8sWUFBWTtBQUMxRCxRQUFJLE9BQU8sTUFBTSxNQUFNO0FBQUUsV0FBSyxjQUFjO0FBQUEsSUFBRSxHQUFHLGlDQUFpQztBQUFBLEVBQ3BGLFNBQVMsT0FBTztBQUNkLFlBQVEsTUFBTSxrRUFBNkQsS0FBSztBQUFBLEVBQ2xGO0FBRUEsTUFBSSxPQUFPLE1BQU0saUJBQWlCLEtBQUssSUFBSSxHQUFHLCtCQUErQjtBQUM3RSxRQUFNLFdBQVcsT0FBTztBQUFBLElBQ3RCLE9BQU8sRUFBRSxPQUFPLE1BQU0sY0FBYyxVQUFVO0FBQUEsSUFDOUMsTUFBTSxDQUFDLE9BQU8sVUFBVSxLQUFLLElBQUksT0FBTyxLQUFLO0FBQUEsSUFDN0MsT0FBTyxPQUFPLFNBQVM7QUFJckIsWUFBTSxTQUFTLElBQUksSUFBSSxvQkFBb0I7QUFDM0MsVUFBSSxXQUFXLE9BQVcsT0FBTSxJQUFJLE1BQU0seUNBQXlDO0FBQ25GLFlBQU0sU0FBUyxNQUFNLE9BQU8sTUFBTSxJQUFJO0FBRXRDLFVBQUksV0FBVyxRQUFRLE9BQU8sV0FBVyxZQUFZLFFBQVEsUUFBUTtBQUNuRSxZQUFJLE9BQU8sT0FBTyxLQUFNLE9BQU0sT0FBTyxTQUFTLElBQUksTUFBTSw4QkFBOEI7QUFDdEYsZUFBTyxPQUFPO0FBQUEsTUFDaEI7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsYUFBYSxDQUFDLFNBQVMsV0FBVyxVQUFVLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxTQUFTLFFBQVEsR0FBRyxPQUFPLE9BQU8sQ0FBQyxDQUFDO0FBQUEsRUFDM0g7QUFDQSxNQUFJLE1BQU0sT0FBTyxNQUFNLE1BQU0sSUFBSSxNQUFNLFNBQVM7QUFBQSxJQUM5QyxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxPQUFPLE1BQU0sRUFBRSxPQUFPO0FBQUEsSUFDdEIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1YsR0FBRyxZQUFZLENBQUM7QUFDbEI7IiwKICAibmFtZXMiOiBbIm5hbWUiLCAiSEVYIiwgIlJlYWN0Il0KfQo=
    return module.exports;
  },
});
