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
    if (originalHrefs.size !== before) {
      applied = null;
      sync();
    }
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
  function emitEvent(kind, sessionId, label, typeLabel, durationMs) {
    const key = sessionId + ":" + kind;
    if (notified.has(key)) return;
    notified.add(key);
    const config = readConfig();
    const soundId = kind === "done" ? config.doneSound : config.pendingSound;
    if (soundId !== SOUND_NONE) playSound(soundId, config.volume, kind);
    if (!config.notifyEnabled) return;
    if (kind === "done" && !config.doneEnabled) return;
    if (kind === "pending" && !config.pendingEnabled) return;
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
      if (before === false && now) emitEvent("done", row.id, row.displayTitle ?? row.title ?? row.id, void 0, lastRunMs.get(row.id));
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
        emitEvent("pending", id, label, pendingTypeLabel(row?.pendingInteraction));
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
        if (row.id === state.current) emitEvent("done", row.id, row.displayTitle ?? row.title ?? row.id, void 0, elapsed);
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
  notifyIntro: "Banners use the switches below. A chosen sound always plays on its event, even when notifications are off.",
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
  soundHint: "Plays on the event even when notifications are off.",
  notifyVolume: "Volume",
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
  notifyIntro: "\u5F39\u7A97\u7531\u4E0B\u65B9\u5F00\u5173\u63A7\u5236\uFF1B\u9009\u62E9\u63D0\u793A\u97F3\u540E\uFF0C\u5373\u4F7F\u5173\u95ED\u901A\u77E5\u4E5F\u4F1A\u5728\u4E8B\u4EF6\u53D1\u751F\u65F6\u64AD\u653E\u3002",
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
  soundHint: "\u5373\u4F7F\u5173\u95ED\u901A\u77E5\uFF0C\u4E8B\u4EF6\u53D1\u751F\u65F6\u4E5F\u4F1A\u64AD\u653E\u3002",
  notifyVolume: "\u97F3\u91CF",
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
  const [hexDrafts, setHexDrafts] = import_react.default.useState({});
  const wrapRef = import_react.default.useRef(null);
  const valueRef = snap && snap.value;
  import_react.default.useEffect(() => {
    setDraft({
      thresholdTokens: valueRef && valueRef.thresholdTokens ? String(valueRef.thresholdTokens) : "",
      contextWindowTokens: valueRef && valueRef.contextWindowTokens ? String(valueRef.contextWindowTokens) : "",
      retainTokens: valueRef && valueRef.retainTokens ? String(valueRef.retainTokens) : ""
    });
    setHexDrafts({});
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
  const commitHex = (field, optional, text) => {
    setNote("");
    const stored = typeof value[field] === "string" ? value[field] : "";
    const next = String(text ?? "").trim();
    if (next === "") {
      if (optional) write(field, "");
      else setHexDrafts((d) => ({ ...d, [field]: stored }));
      return;
    }
    if (HEX2.test(next)) {
      write(field, next);
      return;
    }
    setNote(t("invalidHex"));
    setHexDrafts((d) => ({ ...d, [field]: stored }));
  };
  const colorField = (labelKey, field, fallbackHex, optional, hintKey) => {
    const current = typeof value[field] === "string" ? value[field] : "";
    const shown = current !== "" ? current : fallbackHex ?? "#000000";
    const text = hexDrafts[field] !== void 0 ? hexDrafts[field] : current;
    const typed = () => hexDrafts[field] !== void 0 ? hexDrafts[field] : current;
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
          onChange: (e) => {
            write(field, e.target.value);
            setHexDrafts((d) => ({ ...d, [field]: e.target.value }));
          }
        }),
        el("input", {
          type: "text",
          style: { ...S.input, ...S.hex },
          disabled,
          value: text,
          placeholder: optional ? t("colorUnset") : "",
          onChange: (e) => setHexDrafts((d) => ({ ...d, [field]: e.target.value })),
          onBlur: () => commitHex(field, optional, typed()),
          onKeyDown: (e) => {
            if (e.key === "Enter") commitHex(field, optional, typed());
          }
        }),
        optional && current !== "" ? el(import_dsh_client_ui_primitives.Button, { variant: "ghost", size: "sm", disabled, onClick: () => {
          write(field, "");
          setHexDrafts((d) => ({ ...d, [field]: "" }));
        } }, t("colorReset")) : null
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
    }, soundSelectOptions()),
    el("div", { style: S.hint }, t("soundHint"))
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC50cyIsICJzcmMvcmVtb3RlLnRzIiwgInNyYy93aGFsZS50cyIsICJzcmMvbm90aWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgYnJvd3NlciBoYWxmLlxuICpcbiAqIE9uZSBzZXR0aW5ncyBzZWN0aW9uIHdpdGggdGhyZWUgc3ViLXBhbmVsczogY29udGV4dCBjb21wYWN0aW9uLCBsbGFtYS5jcHBcbiAqIG1vZGVsIGVucmljaG1lbnQsIGFuZCBub3RpZmljYXRpb25zLiBSZWFkcyBhbmQgd3JpdGVzIHRoZSBgbWFsa28tcHJlZnNgXG4gKiBjb25maWcgZm9ybSwgcmVhZHMgdGhlIGBsbG0tcGktYWlgIGZvcm0gdG8gcG9wdWxhdGUgdGhlIG1vZGVsIHBpY2tlcnMsIGFuZFxuICogcnVucyB0aGUgdGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoc2VlIGAuL25vdGlmeS50c2ApLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnRlZENvbnRyb2wsIFN3aXRjaCB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXByaW1pdGl2ZXMnXG5pbXBvcnQgeyBwcm9iZUludm9jYXRpb24gfSBmcm9tICcuL3JlbW90ZS50cydcbmltcG9ydCB7XG4gIEJVSUxUSU5fU09VTkRTLFxuICBMT0NBTEVfTlMsXG4gIFNPVU5EX05PTkUsXG4gIFNPVU5EX1BBQ0tTLFxuICBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbixcbiAgcGFja1NvdW5kSWRzLFxuICBwbGF5U291bmQsXG4gIHByaW1lU291bmQsXG4gIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uLFxuICBzdGFydFN0YXR1c0xpZ2h0LFxufSBmcm9tICcuL25vdGlmeS50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZHNoLW1hbGtvLXByZWZzJ1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsnc2Vzc2lvbnMnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2NvbmZpZ0Zvcm1zJywgJ3JlbW90ZSddXG5cbmNvbnN0IE5TID0gJ21hbGtvLXByZWZzJ1xuY29uc3QgTU9ERUxfTlMgPSAnbGxtLXBpLWFpJ1xuY29uc3QgU0xPVCA9ICdzZXR0aW5ncy5zZWN0aW9uJ1xuY29uc3QgVEFCU19JRCA9ICdtYWxrby1wcmVmcy10YWJzJ1xuXG4vKiogYCNSUkdHQkJgIGNvbG91ciBsaXRlcmFsLiAqL1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuXG4vKiogU3RyaWN0LWNvZGVjIHN0dWI6IHRoZSBicm93c2VyIG5ldmVyIGRlY29kZXMgaXRzIG93biBhcmd1bWVudHMuICovXG5jb25zdCBpZGVudGl0eVNjaGVtYSA9ICgpID0+ICh7IHBhcnNlOiAodmFsdWUpID0+IHZhbHVlIH0pXG5cbi8qKiBCcm93c2VyIGNvbnRyaWJ1dGlvbiBtb3VudGVkIHRocm91Z2ggYGN0eC5yZW1vdGUuJG1vdW50KClgLiAqL1xuY29uc3QgUFJPQkVfUkVNT1RFID0ge1xuICBwYWNrYWdlOiAnZHNoLW1hbGtvLXByZWZzJyxcbiAgZGVzY3JpcHRvcnM6IFtwcm9iZUludm9jYXRpb24oaWRlbnRpdHlTY2hlbWEsIGlkZW50aXR5U2NoZW1hKV0sXG59XG5cbmNvbnN0IGVsID0gUmVhY3QuY3JlYXRlRWxlbWVudFxuXG5jb25zdCBlbiA9IHtcbiAgdGl0bGU6IFwiTWFsa28ncyBwcmVmc1wiLFxuICBpbnRybzogJ1R1bmFibGUgY29tcGFjdGlvbiwgbGxhbWEuY3BwIG1vZGVsIGVucmljaG1lbnQgYW5kIG5vdGlmaWNhdGlvbnMuJyxcbiAgdGFiQ29tcGFjdGlvbjogJ0NvbnRleHQgY29tcGFjdGlvbicsXG4gIHRhYk1vZGVsczogJ2xsYW1hLmNwcCBtb2RlbHMnLFxuICB0YWJOb3RpZmljYXRpb25zOiAnTm90aWZpY2F0aW9ucycsXG4gIC8vIENvbXBhY3Rpb25cbiAgdGhyZXNob2xkVGl0bGU6ICdDb21wYWN0aW9uIHRocmVzaG9sZCcsXG4gIHRocmVzaG9sZFRva2VuczogJ1RocmVzaG9sZCAodG9rZW5zKScsXG4gIHRocmVzaG9sZFRva2Vuc0hpbnQ6ICdBYnNvbHV0ZSBwcmVzc3VyZSBpbiB0b2tlbnMsIGUuZy4gMTMwayBvciAxMzBLLiBFbXB0eS8wID0gdXNlIHRoZSByYXRpbyBiZWxvdy4nLFxuICBjb250ZXh0V2luZG93OiAnQ29udGV4dCB3aW5kb3cgKHRva2VucyknLFxuICBjb250ZXh0V2luZG93SGludDogJ1dpbmRvdyB0aGUgYWJzb2x1dGUgdGhyZXNob2xkIGlzIGV4cHJlc3NlZCBhZ2FpbnN0IChlLmcuIDIwMGspLiAwID0gZGVyaXZlIG5vdGhpbmcgKHJhdGlvIG9ubHkpLicsXG4gIHRocmVzaG9sZFJhdGlvOiAnVGhyZXNob2xkIHJhdGlvJyxcbiAgdGhyZXNob2xkUmF0aW9IaW50OiAnVXNlZCB3aGVuIHRoZSBhYnNvbHV0ZSB0aHJlc2hvbGQgaXMgZW1wdHkgKDAuOCA9IDgwJSBvZiB0aGUgd2luZG93KS4nLFxuICBoZWFkcm9vbTogJ0hlYWRyb29tICh0b2tlbnMpJyxcbiAgaGVhZHJvb21IaW50OiAnUmVzZXJ2ZWQgb24gdG9wIG9mIHRoZSBvdXRwdXQgY2FwLiBUaGUgb2ZmaWNpYWwgZGVmYXVsdCAoNjU1MzYpIGNhcHMgdGhlIHRyaWdnZXIgd2VsbCBiZWxvdyA4MCUuJyxcbiAgcmV0ZW50aW9uVGl0bGU6ICdSZXRlbnRpb24nLFxuICByZXRhaW5Ub2tlbnM6ICdLZWVwIGxhc3QgKHRva2VucyknLFxuICByZXRhaW5Ub2tlbnNIaW50OiAnVmVyYmF0aW0gcmVjZW50LWNvbnRleHQgYnVkZ2V0LCBlLmcuIDMyay4gRW1wdHkvMCA9IHVzZSB0aGUgcmF0aW8gYmVsb3cuJyxcbiAgcmV0YWluUmF0aW86ICdLZWVwIHJhdGlvJyxcbiAgYmVoYXZpb3VyVGl0bGU6ICdCZWhhdmlvdXInLFxuICBhdXRvOiAnQXV0b21hdGljIGNvbXBhY3Rpb24nLFxuICBhdXRvSGludDogJ09mZmljaWFsIGJldHdlZW4tc3RlcCBwcmVzc3VyZSBjb21wYWN0aW9uIGFuZCBjb250ZXh0LW92ZXJmbG93IHJlY292ZXJ5LicsXG4gIHR1cm5FbmQ6ICdDb21wYWN0IGF0IGVuZCBvZiB0dXJuJyxcbiAgdHVybkVuZEhpbnQ6ICdSdW5zIG9uZSBtb3JlIGNvbXBhY3Rpb24gd2hlbiB0aGUgYWdlbnQgZ29lcyBpZGxlLicsXG4gIHN1bW1hcml6YXRpb25UaXRsZTogJ1N1bW1hcml6YXRpb24nLFxuICBzdW1tYXJpemF0aW9uTW9kZTogJ01vZGVsJyxcbiAgbW9kZVNlc3Npb246ICdTZXNzaW9uIG1vZGVsJyxcbiAgbW9kZUN1c3RvbTogJ0N1c3RvbSBtb2RlbCcsXG4gIHByb3ZpZGVyOiAnUHJvdmlkZXInLFxuICBtb2RlbDogJ01vZGVsJyxcbiAgcmVhc29uaW5nOiAnUmVhc29uaW5nJyxcbiAgcmVhc29uaW5nRGVmYXVsdDogJ0RlZmF1bHQnLFxuICByZWFzb25pbmdPZmY6ICdPZmYnLFxuICBtYXhUb2tlbnM6ICdTdW1tYXJ5IG91dHB1dCBjYXAgKHRva2VucyknLFxuICBhZHZhbmNlZFRpdGxlOiAnQWR2YW5jZWQnLFxuICBjb21wYWN0aW9uUmV0cmllczogJ0V4dHJhIGNvbXBhY3Rpb24gYXR0ZW1wdHMnLFxuICBtYXhPdmVyZmxvd1JldHJpZXM6ICdPdmVyZmxvdyByZWNvdmVyeSBhdHRlbXB0cycsXG4gIC8vIE1vZGVsc1xuICBtb2RlbHNUaXRsZTogJ2xsYW1hLmNwcCBtb2RlbHMnLFxuICBtb2RlbHNJbnRybzogJ0ZldGNoIHRoZSBtb2RlbHMgYSBwcm92aWRlciBleHBvc2VzLCBwaWNrIHRoZSBvbmVzIHRvIGltcG9ydCBhbmQgcmV2aWV3IHRoZSBjaGFuZ2VzIGJlZm9yZSBhcHBseWluZy4nLFxuICBlbnJpY2g6ICdGZXRjaCBmcm9tIHNlcnZlcicsXG4gIGVucmljaGluZzogJ0ZldGNoaW5nXFx1MjAyNicsXG4gIG5vQmFzZVVybDogJ05vIGVuZHBvaW50IGNvbmZpZ3VyZWQgZm9yIHRoaXMgcHJvdmlkZXIuJyxcbiAgYXBwbGllZDogJ0ltcG9ydGVkIHtjb3VudH0gbW9kZWwocykuJyxcbiAgcHJldmlld1RpdGxlOiAnUmV2aWV3IGltcG9ydCcsXG4gIHByZXZpZXdIaW50OiAnQ2hlY2sgdGhlIG1vZGVscyB0byBpbXBvcnQgZnJvbSB0aGUgc2VydmVyLicsXG4gIHByZXZpZXdOZXc6ICduZXcgbW9kZWwnLFxuICBwcmV2aWV3Tm9DaGFuZ2U6ICdubyBjaGFuZ2UnLFxuICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcbiAgYXBwbHk6ICdJbXBvcnQgKHtjb3VudH0pJyxcbiAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgbm9Nb2RlbHM6ICdUaGUgc2VydmVyIHJldHVybmVkIG5vIG1vZGVscy4nLFxuICAvLyBOb3RpZmljYXRpb25zXG4gIGNvbG9yc0dyb3VwOiAnVGFiIHN0YXR1cyBsaWdodCcsXG4gIGNvbG9yc0ludHJvOiAnVGhlIGJyb3dzZXIgdGFiIGljb24gcmVmbGVjdHMgdGhlIHNlc3Npb24gc3RhdGU6IGdyZWVuID0gZmluaXNoZWQsIGFtYmVyID0gd2FpdGluZyBmb3IgeW91LicsXG4gIGNvbG9yc0VuYWJsZWQ6ICdDb2xvciB0aGUgdGFiIGljb24nLFxuICBjb2xvcnNFbmFibGVkSGludDogJ09mZiBrZWVwcyB0aGUgb2ZmaWNpYWwgZmF2aWNvbiBhdCBhbGwgdGltZXMuJyxcbiAgZ3JlZW5MYWJlbDogJ0ZpbmlzaGVkJyxcbiAgYW1iZXJMYWJlbDogJ1dhaXRpbmcgKHF1ZXN0aW9uL2FwcHJvdmFsKScsXG4gIHdvcmtpbmdMYWJlbDogJ1dvcmtpbmcnLFxuICB3b3JraW5nSGludDogJ1Nob3duIHdoaWxlIGEgc2Vzc2lvbiBpcyBnZW5lcmF0aW5nLicsXG4gIGJsYWNrTGFiZWw6ICdJZGxlIGNvbG9yJyxcbiAgYmxhY2tIaW50OiAnTGVhdmUgZW1wdHkgdG8ga2VlcCB0aGUgb2ZmaWNpYWwgZmF2aWNvbiB3aGVuIGlkbGUuJyxcbiAgY29sb3JSZXNldDogJ0NsZWFyJyxcbiAgY29sb3JVbnNldDogJ29mZmljaWFsJyxcbiAgbm90aWZ5R3JvdXA6ICdTeXN0ZW0gbm90aWZpY2F0aW9ucycsXG4gIG5vdGlmeUludHJvOiAnQmFubmVycyB1c2UgdGhlIHN3aXRjaGVzIGJlbG93LiBBIGNob3NlbiBzb3VuZCBhbHdheXMgcGxheXMgb24gaXRzIGV2ZW50LCBldmVuIHdoZW4gbm90aWZpY2F0aW9ucyBhcmUgb2ZmLicsXG4gIG5vdGlmeUVuYWJsZWQ6ICdFbmFibGUgbm90aWZpY2F0aW9ucycsXG4gIG5vdGlmeUVuYWJsZWRIaW50OiAnVGhlIGJyb3dzZXIgYXNrcyBmb3IgcGVybWlzc2lvbiB0aGUgZmlyc3QgdGltZSB5b3UgZW5hYmxlIHRoaXMuJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZDogJ05vdGlmeSBpbiB0aGUgZm9yZWdyb3VuZCcsXG4gIG5vdGlmeUZvcmVncm91bmRIaW50OiAnQWxzbyBub3RpZnkgd2hpbGUgdGhlIHRhYiBpcyB2aXNpYmxlIGFuZCBmb2N1c2VkLicsXG4gIG5vdGlmeURvbmVHcm91cDogJ1doZW4gYSBzZXNzaW9uIGZpbmlzaGVzJyxcbiAgbm90aWZ5RG9uZUVuYWJsZWQ6ICdOb3RpZnknLFxuICBub3RpZnlEb25lRW5hYmxlZEhpbnQ6ICdTZW5kIGEgbm90aWZpY2F0aW9uIHdoZW4gYSBzZXNzaW9uIGZpbmlzaGVzLicsXG4gIG5vdGlmeVBlbmRpbmdHcm91cDogJ1doaWxlIHdhaXRpbmcgZm9yIHlvdScsXG4gIG5vdGlmeVBlbmRpbmdFbmFibGVkOiAnTm90aWZ5JyxcbiAgbm90aWZ5UGVuZGluZ0VuYWJsZWRIaW50OiAnU2VuZCBhIG5vdGlmaWNhdGlvbiB3aGVuIGEgcXVlc3Rpb24gb3IgYXBwcm92YWwgYXdhaXRzIHlvdS4nLFxuICBwZXJzaXN0RG9uZTogJ0tlZXAgb24gc2NyZWVuJyxcbiAgcGVyc2lzdFBlbmRpbmc6ICdLZWVwIG9uIHNjcmVlbicsXG4gIHBlcnNpc3RIaW50OiAnT246IHRoZSBub3RpZmljYXRpb24gc3RheXMgdW50aWwgeW91IGRpc21pc3MgaXQgKGlmIHRoZSBPUyBob25vcnMgaXQpLicsXG4gIHNvdW5kOiAnU291bmQnLFxuICBzb3VuZEhpbnQ6ICdQbGF5cyBvbiB0aGUgZXZlbnQgZXZlbiB3aGVuIG5vdGlmaWNhdGlvbnMgYXJlIG9mZi4nLFxuICBub3RpZnlWb2x1bWU6ICdWb2x1bWUnLFxuICBzb3VuZE5vU291bmQ6ICdObyBzb3VuZCcsXG4gIHNvdW5kUGFja0J1aWx0aW46ICdCdWlsdC1pbicsXG4gIHNvdW5kQnVpbHRpblVwOiAnQ2hpbWUgVXAnLFxuICBzb3VuZEJ1aWx0aW5Eb3duOiAnQ2hpbWUgRG93bicsXG4gIHBlcm1pc3Npb25EZW5pZWQ6ICdCbG9ja2VkIGJ5IHRoZSBicm93c2VyIFxcdTIwMTQgcmUtZW5hYmxlIG5vdGlmaWNhdGlvbnMgaW4gdGhlIHNpdGUgc2V0dGluZ3MuJyxcbiAgcGVybWlzc2lvblVuc3VwcG9ydGVkOiAnVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgc3lzdGVtIG5vdGlmaWNhdGlvbnMuJyxcbiAgbm90aWZ5RG9uZVRpdGxlOiAnU2Vzc2lvbiBmaW5pc2hlZCcsXG4gIG5vdGlmeVBlbmRpbmdUaXRsZTogJ1NvbWV0aGluZyBhd2FpdHMgeW91JyxcbiAgbm90aWZ5RHVyYXRpb246ICd0dXJuIHRvb2sge2R1cmF0aW9ufScsXG4gIGR1cmF0aW9uU2Vjb25kczogJ3tzZWNvbmRzfXMnLFxuICBkdXJhdGlvbk1pbnV0ZXM6ICd7bWludXRlc31te3NlY29uZHN9cycsXG4gIHBlbmRpbmdLaW5kQXBwcm92YWw6ICdBcHByb3ZhbCBuZWVkZWQnLFxuICBwZW5kaW5nS2luZFF1ZXN0aW9uOiAnUXVlc3Rpb24nLFxuICBwZW5kaW5nS2luZFBsYW5SZXZpZXc6ICdQbGFuIHJldmlldycsXG4gIHBlbmRpbmdBcHByb3ZhbFRvb2w6ICdBcHByb3ZhbCBcXHUwMGI3IHt0b29sfScsXG4gIHBlbmRpbmdRdWVzdGlvbkNob29zZTogJ0Nob29zZSBhbiBvcHRpb24nLFxuICBwZW5kaW5nUXVlc3Rpb25NdWx0aTogJ0Nob29zZSBvcHRpb25zJyxcbiAgcGVuZGluZ1F1ZXN0aW9uRmlsbDogJ1R5cGUgYW4gYW5zd2VyJyxcbiAgcGVuZGluZ1F1ZXN0aW9uQmF0Y2g6ICd7Y291bnR9IHF1ZXN0aW9ucycsXG4gIC8vIFNoYXJlZFxuICBpbnZhbGlkVG9rZW46ICdFbnRlciBhIG51bWJlciBvciBhIGsvTSBzdWZmaXggdmFsdWUgKGUuZy4gMTMwaykuJyxcbiAgaW52YWxpZEhleDogJ0NvbG9yIG11c3QgYmUgI1JSR0dCQi4nLFxuICBlcnJvclByZWZpeDogJ0Vycm9yOiAnLFxuICB1bmF2YWlsYWJsZTogJ1RoaXMgc2V0dGluZyBpcyBub3QgYXZhaWxhYmxlIGZyb20gdGhpcyBjbGllbnQuJyxcbiAgbG9hZGluZzogJ0xvYWRpbmdcXHUyMDI2Jyxcbn1cblxuY29uc3QgemggPSB7XG4gIHRpdGxlOiAnTWFsa28gXFx1NTA0ZlxcdTU5N2QnLFxuICBpbnRybzogJ1xcdTUzOGJcXHU3ZjI5XFx1MzAwMWxsYW1hLmNwcCBcXHU2YTIxXFx1NTc4YlxcdTg4NjVcXHU1MTY4XFx1NGUwZVxcdTkwMWFcXHU3N2U1XFx1MzAwMicsXG4gIHRhYkNvbXBhY3Rpb246ICdcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU1MzhiXFx1N2YyOScsXG4gIHRhYk1vZGVsczogJ2xsYW1hLmNwcCBcXHU2YTIxXFx1NTc4YicsXG4gIHRhYk5vdGlmaWNhdGlvbnM6ICdcXHU5MDFhXFx1NzdlNScsXG4gIHRocmVzaG9sZFRpdGxlOiAnXFx1NTM4YlxcdTdmMjlcXHU5NjAwXFx1NTAzYycsXG4gIHRocmVzaG9sZFRva2VuczogJ1xcdTk2MDBcXHU1MDNjXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICB0aHJlc2hvbGRUb2tlbnNIaW50OiAnXFx1N2VkZFxcdTViZjkgdG9rZW4gXFx1OTYwMFxcdTUwM2NcXHVmZjBjXFx1NTk4MiAxMzBrXFx1MzAwMlxcdTc1NTlcXHU3YTdhLzAgPSBcXHU3NTI4XFx1NGUwYlxcdTY1YjlcXHU2YmQ0XFx1NGY4YlxcdTMwMDInLFxuICBjb250ZXh0V2luZG93OiAnXFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1N2E5N1xcdTUzZTNcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIGNvbnRleHRXaW5kb3dIaW50OiAnXFx1N2VkZFxcdTViZjlcXHU5NjAwXFx1NTAzY1xcdTYyNDBcXHU0ZjlkXFx1NjM2ZVxcdTc2ODRcXHU3YTk3XFx1NTNlM1xcdWZmMDhcXHU1OTgyIDIwMGtcXHVmZjA5XFx1MzAwMjAgPSBcXHU1M2VhXFx1NzUyOFxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIHRocmVzaG9sZFJhdGlvOiAnXFx1OTYwMFxcdTUwM2NcXHU2YmQ0XFx1NGY4YicsXG4gIHRocmVzaG9sZFJhdGlvSGludDogJ1xcdTVmNTNcXHU3ZWRkXFx1NWJmOVxcdTk2MDBcXHU1MDNjXFx1NGUzYVxcdTdhN2FcXHU2NWY2XFx1NGY3ZlxcdTc1MjhcXHVmZjA4MC44ID0gXFx1N2E5N1xcdTUzZTNcXHU3Njg0IDgwJVxcdWZmMDlcXHUzMDAyJyxcbiAgaGVhZHJvb206ICdcXHU5ODg0XFx1NzU1OVxcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgaGVhZHJvb21IaW50OiAnXFx1NTcyOFxcdThmOTNcXHU1MWZhXFx1OTg4NFxcdTdiOTdcXHU0ZTRiXFx1NTkxNlxcdTUxOGRcXHU5ODg0XFx1NzU1OVxcdTc2ODRcXHU5MWNmXFx1MzAwMlxcdTViOThcXHU2NWI5XFx1OWVkOFxcdThiYTQgNjU1MzYgXFx1NGYxYVxcdTYyOGFcXHU4OWU2XFx1NTNkMVxcdTcwYjlcXHU2MmM5XFx1NTIzMCA4MCUgXFx1NGVlNVxcdTRlMGJcXHUzMDAyJyxcbiAgcmV0ZW50aW9uVGl0bGU6ICdcXHU0ZmRkXFx1NzU1OScsXG4gIHJldGFpblRva2VuczogJ1xcdTRmZGRcXHU3NTU5XFx1NjcwMFxcdThmZDFcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIHJldGFpblRva2Vuc0hpbnQ6ICdcXHU5MDEwXFx1NWI1N1xcdTRmZGRcXHU3NTU5XFx1NzY4NFxcdThmZDFcXHU2NzFmXFx1OTg4NFxcdTdiOTdcXHVmZjBjXFx1NTk4MiAzMmtcXHUzMDAyXFx1NzU1OVxcdTdhN2EvMCA9IFxcdTc1MjhcXHU0ZTBiXFx1NjViOVxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIHJldGFpblJhdGlvOiAnXFx1NGZkZFxcdTc1NTlcXHU2YmQ0XFx1NGY4YicsXG4gIGJlaGF2aW91clRpdGxlOiAnXFx1ODg0Y1xcdTRlM2EnLFxuICBhdXRvOiAnXFx1ODFlYVxcdTUyYThcXHU1MzhiXFx1N2YyOScsXG4gIGF1dG9IaW50OiAnXFx1NWI5OFxcdTY1YjlcXHU3Njg0XFx1NmI2NVxcdTk1ZjRcXHU1MzhiXFx1NTI5YlxcdTUzOGJcXHU3ZjI5XFx1NGUwZVxcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTZlYTJcXHU1MWZhXFx1NjA2MlxcdTU5MGRcXHUzMDAyJyxcbiAgdHVybkVuZDogJ1xcdThmNmVcXHU2NzJiXFx1NTM4YlxcdTdmMjknLFxuICB0dXJuRW5kSGludDogJ1xcdTRlZTNcXHU3NDA2XFx1OGY2Y1xcdTRlM2EgaWRsZSBcXHU2NWY2XFx1NTE4ZFxcdTUzOGJcXHU3ZjI5XFx1NGUwMFxcdTZiMjFcXHUzMDAyJyxcbiAgc3VtbWFyaXphdGlvblRpdGxlOiAnXFx1NjQ1OFxcdTg5ODEnLFxuICBzdW1tYXJpemF0aW9uTW9kZTogJ1xcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZVNlc3Npb246ICdcXHU0ZjFhXFx1OGJkZFxcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZUN1c3RvbTogJ1xcdTgxZWFcXHU1YjlhXFx1NGU0OVxcdTZhMjFcXHU1NzhiJyxcbiAgcHJvdmlkZXI6ICdcXHU2M2QwXFx1NGY5YlxcdTU1NDYnLFxuICBtb2RlbDogJ1xcdTZhMjFcXHU1NzhiJyxcbiAgcmVhc29uaW5nOiAnXFx1NjAxZFxcdTgwMDNcXHU3ZWE3XFx1NTIyYicsXG4gIHJlYXNvbmluZ0RlZmF1bHQ6ICdcXHU5ZWQ4XFx1OGJhNCcsXG4gIHJlYXNvbmluZ09mZjogJ1xcdTUxNzNcXHU5NWVkJyxcbiAgbWF4VG9rZW5zOiAnXFx1NjQ1OFxcdTg5ODFcXHU4ZjkzXFx1NTFmYVxcdTRlMGFcXHU5NjUwXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICBhZHZhbmNlZFRpdGxlOiAnXFx1OWFkOFxcdTdlYTcnLFxuICBjb21wYWN0aW9uUmV0cmllczogJ1xcdTk4OWRcXHU1OTE2XFx1NTM4YlxcdTdmMjlcXHU1YzFkXFx1OGJkNScsXG4gIG1heE92ZXJmbG93UmV0cmllczogJ1xcdTZlYTJcXHU1MWZhXFx1NjA2MlxcdTU5MGRcXHU1YzFkXFx1OGJkNScsXG4gIG1vZGVsc1RpdGxlOiAnbGxhbWEuY3BwIFxcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZWxzSW50cm86ICdcXHU0ZWNlXFx1NjcwZFxcdTUyYTFcXHU1NjY4XFx1ODNiN1xcdTUzZDZcXHU2YTIxXFx1NTc4YlxcdTUyMTdcXHU4ODY4XFx1ZmYwY1xcdTUyZmVcXHU5MDA5XFx1ODk4MVxcdTViZmNcXHU1MTY1XFx1NzY4NFxcdTZhMjFcXHU1NzhiXFx1ZmYwY1xcdTc4NmVcXHU4YmE0XFx1NTNkOFxcdTY2ZjRcXHU1NDBlXFx1NWU5NFxcdTc1MjhcXHUzMDAyJyxcbiAgZW5yaWNoOiAnXFx1NGVjZVxcdTY3MGRcXHU1MmExXFx1NTY2OFxcdTgzYjdcXHU1M2Q2JyxcbiAgZW5yaWNoaW5nOiAnXFx1NmI2M1xcdTU3MjhcXHU4M2I3XFx1NTNkNlxcdTIwMjYnLFxuICBub0Jhc2VVcmw6ICdcXHU4YmU1XFx1NjNkMFxcdTRmOWJcXHU1NTQ2XFx1NjcyYVxcdTkxNGRcXHU3ZjZlXFx1N2FlZlxcdTcwYjlcXHUzMDAyJyxcbiAgYXBwbGllZDogJ1xcdTVkZjJcXHU1YmZjXFx1NTE2NSB7Y291bnR9IFxcdTRlMmFcXHU2YTIxXFx1NTc4YlxcdTMwMDInLFxuICBwcmV2aWV3VGl0bGU6ICdcXHU3ODZlXFx1OGJhNFxcdTViZmNcXHU1MTY1JyxcbiAgcHJldmlld0hpbnQ6ICdcXHU1MmZlXFx1OTAwOVxcdTg5ODFcXHU0ZWNlXFx1NjcwZFxcdTUyYTFcXHU1NjY4XFx1NWJmY1xcdTUxNjVcXHU3Njg0XFx1NmEyMVxcdTU3OGJcXHUzMDAyJyxcbiAgcHJldmlld05ldzogJ1xcdTY1YjBcXHU2YTIxXFx1NTc4YicsXG4gIHByZXZpZXdOb0NoYW5nZTogJ1xcdTY1ZTBcXHU1M2Q4XFx1NTMxNicsXG4gIHNlbGVjdEFsbDogJ1xcdTUxNjhcXHU5MDA5JyxcbiAgYXBwbHk6ICdcXHU1YmZjXFx1NTE2NVxcdWZmMDh7Y291bnR9XFx1ZmYwOScsXG4gIGNhbmNlbDogJ1xcdTUzZDZcXHU2ZDg4JyxcbiAgbm9Nb2RlbHM6ICdcXHU2NzBkXFx1NTJhMVxcdTU2NjhcXHU2NzJhXFx1OGZkNFxcdTU2ZGVcXHU0ZWZiXFx1NGY1NVxcdTZhMjFcXHU1NzhiXFx1MzAwMicsXG4gIGNvbG9yc0dyb3VwOiAnXFx1NjgwN1xcdTdiN2VcXHU5ODc1XFx1NzJiNlxcdTYwMDFcXHU3MDZmJyxcbiAgY29sb3JzSW50cm86ICdcXHU2ODA3XFx1N2I3ZVxcdTk4NzVcXHU1NmZlXFx1NjgwN1xcdTk2OGZcXHU0ZjFhXFx1OGJkZFxcdTcyYjZcXHU2MDAxXFx1NTNkOFxcdTgyNzJcXHVmZjFhXFx1N2VmZiA9IFxcdTVkZjJcXHU1YjhjXFx1NjIxMFxcdWZmMGNcXHU3NDI1XFx1NzNjMCA9IFxcdTdiNDlcXHU0ZjYwXFx1NTkwNFxcdTc0MDZcXHUzMDAyJyxcbiAgY29sb3JzRW5hYmxlZDogJ1xcdTU0MmZcXHU3NTI4XFx1NTZmZVxcdTY4MDdcXHU1M2Q4XFx1ODI3MicsXG4gIGNvbG9yc0VuYWJsZWRIaW50OiAnXFx1NTE3M1xcdTk1ZWRcXHU1NDBlXFx1NTljYlxcdTdlYzhcXHU0ZjdmXFx1NzUyOFxcdTViOThcXHU2NWI5XFx1NTZmZVxcdTY4MDdcXHUzMDAyJyxcbiAgZ3JlZW5MYWJlbDogJ1xcdTVkZjJcXHU1YjhjXFx1NjIxMCcsXG4gIGFtYmVyTGFiZWw6ICdcXHU1Zjg1XFx1NTkwNFxcdTc0MDZcXHVmZjA4XFx1NjNkMFxcdTk1ZWUvXFx1NWJhMVxcdTYyNzlcXHVmZjA5JyxcbiAgd29ya2luZ0xhYmVsOiAnXFx1NzUxZlxcdTYyMTBcXHU0ZTJkJyxcbiAgd29ya2luZ0hpbnQ6ICdcXHU0ZjFhXFx1OGJkZFxcdTc1MWZcXHU2MjEwXFx1NjVmNlxcdTY2M2VcXHU3OTNhXFx1MzAwMicsXG4gIGJsYWNrTGFiZWw6ICdcXHU5ZWQ4XFx1OGJhNFxcdTgyNzInLFxuICBibGFja0hpbnQ6ICdcXHU3NTU5XFx1N2E3YVxcdTUyMTlcXHU3YTdhXFx1OTVmMlxcdTY1ZjZcXHU0ZjdmXFx1NzUyOFxcdTViOThcXHU2NWI5XFx1NTZmZVxcdTY4MDdcXHUzMDAyJyxcbiAgY29sb3JSZXNldDogJ1xcdTZlMDVcXHU5NjY0JyxcbiAgY29sb3JVbnNldDogJ1xcdTViOThcXHU2NWI5JyxcbiAgbm90aWZ5R3JvdXA6ICdcXHU3Y2ZiXFx1N2VkZlxcdTkwMWFcXHU3N2U1JyxcbiAgbm90aWZ5SW50cm86ICdcXHU1ZjM5XFx1N2E5N1xcdTc1MzFcXHU0ZTBiXFx1NjViOVxcdTVmMDBcXHU1MTczXFx1NjNhN1xcdTUyMzZcXHVmZjFiXFx1OTAwOVxcdTYyZTlcXHU2M2QwXFx1NzkzYVxcdTk3ZjNcXHU1NDBlXFx1ZmYwY1xcdTUzNzNcXHU0ZjdmXFx1NTE3M1xcdTk1ZWRcXHU5MDFhXFx1NzdlNVxcdTRlNWZcXHU0ZjFhXFx1NTcyOFxcdTRlOGJcXHU0ZWY2XFx1NTNkMVxcdTc1MWZcXHU2NWY2XFx1NjRhZFxcdTY1M2VcXHUzMDAyJyxcbiAgbm90aWZ5RW5hYmxlZDogJ1xcdTU0MmZcXHU3NTI4XFx1OTAxYVxcdTc3ZTUnLFxuICBub3RpZnlFbmFibGVkSGludDogJ1xcdTk5OTZcXHU2YjIxXFx1NWYwMFxcdTU0MmZcXHU2NWY2XFx1NmQ0ZlxcdTg5YzhcXHU1NjY4XFx1NGYxYVxcdThiZTJcXHU5NWVlXFx1NjM4OFxcdTY3NDNcXHUzMDAyJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZDogJ1xcdTUyNGRcXHU1M2YwXFx1NjNkMFxcdTkxOTInLFxuICBub3RpZnlGb3JlZ3JvdW5kSGludDogJ1xcdTY4MDdcXHU3YjdlXFx1OTg3NVxcdTUzZWZcXHU4OWMxXFx1NGUxNFxcdTY3MDlcXHU3MTI2XFx1NzBiOVxcdTY1ZjZcXHU0ZTVmXFx1NjNkMFxcdTkxOTJcXHUzMDAyJyxcbiAgbm90aWZ5RG9uZUdyb3VwOiAnXFx1NGYxYVxcdThiZGRcXHU1YjhjXFx1NjIxMFxcdTY1ZjYnLFxuICBub3RpZnlEb25lRW5hYmxlZDogJ1xcdTkwMWFcXHU3N2U1JyxcbiAgbm90aWZ5RG9uZUVuYWJsZWRIaW50OiAnXFx1NGYxYVxcdThiZGRcXHU1YjhjXFx1NjIxMFxcdTY1ZjZcXHU1M2QxXFx1OTAwMVxcdTkwMWFcXHU3N2U1XFx1MzAwMicsXG4gIG5vdGlmeVBlbmRpbmdHcm91cDogJ1xcdTdiNDlcXHU1Zjg1XFx1NTkwNFxcdTc0MDZcXHU2NWY2JyxcbiAgbm90aWZ5UGVuZGluZ0VuYWJsZWQ6ICdcXHU5MDFhXFx1NzdlNScsXG4gIG5vdGlmeVBlbmRpbmdFbmFibGVkSGludDogJ1xcdTY3MDlcXHU2M2QwXFx1OTVlZVxcdTYyMTZcXHU1YmExXFx1NjI3OVxcdTdiNDlcXHU1Zjg1XFx1NTkwNFxcdTc0MDZcXHU2NWY2XFx1NTNkMVxcdTkwMDFcXHU5MDFhXFx1NzdlNVxcdTMwMDInLFxuICBwZXJzaXN0RG9uZTogJ1xcdTVlMzhcXHU5YTdiXFx1NWM0ZlxcdTVlNTUnLFxuICBwZXJzaXN0UGVuZGluZzogJ1xcdTVlMzhcXHU5YTdiXFx1NWM0ZlxcdTVlNTUnLFxuICBwZXJzaXN0SGludDogJ1xcdTVmMDBcXHU1NDJmXFx1NTQwZVxcdTk3MDBcXHU2MjRiXFx1NTJhOFxcdTUxNzNcXHU5NWVkXFx1NjI0ZFxcdTRmMWFcXHU2ZDg4XFx1NTkzMVxcdWZmMDhcXHU1M2Q3XFx1N2NmYlxcdTdlZGZcXHU2NTJmXFx1NjMwMVxcdTk2NTBcXHU1MjM2XFx1ZmYwOVxcdTMwMDInLFxuICBzb3VuZDogJ1xcdTYzZDBcXHU3OTNhXFx1OTdmMycsXG4gIHNvdW5kSGludDogJ1xcdTUzNzNcXHU0ZjdmXFx1NTE3M1xcdTk1ZWRcXHU5MDFhXFx1NzdlNVxcdWZmMGNcXHU0ZThiXFx1NGVmNlxcdTUzZDFcXHU3NTFmXFx1NjVmNlxcdTRlNWZcXHU0ZjFhXFx1NjRhZFxcdTY1M2VcXHUzMDAyJyxcbiAgbm90aWZ5Vm9sdW1lOiAnXFx1OTdmM1xcdTkxY2YnLFxuICBzb3VuZE5vU291bmQ6ICdcXHU2NWUwXFx1NThmMCcsXG4gIHNvdW5kUGFja0J1aWx0aW46ICdcXHU1MTg1XFx1N2Y2ZScsXG4gIHNvdW5kQnVpbHRpblVwOiAnQ2hpbWUgVXAnLFxuICBzb3VuZEJ1aWx0aW5Eb3duOiAnQ2hpbWUgRG93bicsXG4gIHBlcm1pc3Npb25EZW5pZWQ6ICdcXHU1ZGYyXFx1ODhhYlxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTYyZDJcXHU3ZWRkXFx1ZmYwY1xcdThiZjdcXHU1NzI4XFx1N2FkOVxcdTcwYjlcXHU4YmJlXFx1N2Y2ZVxcdTRlMmRcXHU2MDYyXFx1NTkwZFxcdTkwMWFcXHU3N2U1XFx1Njc0M1xcdTk2NTBcXHUzMDAyJyxcbiAgcGVybWlzc2lvblVuc3VwcG9ydGVkOiAnXFx1NWY1M1xcdTUyNGRcXHU2ZDRmXFx1ODljOFxcdTU2NjhcXHU0ZTBkXFx1NjUyZlxcdTYzMDFcXHU3Y2ZiXFx1N2VkZlxcdTkwMWFcXHU3N2U1XFx1MzAwMicsXG4gIG5vdGlmeURvbmVUaXRsZTogJ1xcdTRmMWFcXHU4YmRkXFx1NWRmMlxcdTViOGNcXHU2MjEwJyxcbiAgbm90aWZ5UGVuZGluZ1RpdGxlOiAnXFx1NjcwOVxcdTRlYTRcXHU0ZTkyXFx1N2I0OVxcdTVmODVcXHU1OTA0XFx1NzQwNicsXG4gIG5vdGlmeUR1cmF0aW9uOiAnXFx1NjcyY1xcdThmNmVcXHU2MDNiXFx1NzUyOFxcdTY1ZjYge2R1cmF0aW9ufScsXG4gIGR1cmF0aW9uU2Vjb25kczogJ3tzZWNvbmRzfVxcdTc5ZDInLFxuICBkdXJhdGlvbk1pbnV0ZXM6ICd7bWludXRlc31cXHU1MjA2e3NlY29uZHN9XFx1NzlkMicsXG4gIHBlbmRpbmdLaW5kQXBwcm92YWw6ICdcXHU1Zjg1XFx1NWJhMVxcdTYyNzknLFxuICBwZW5kaW5nS2luZFF1ZXN0aW9uOiAnXFx1NTQxMVxcdTRmNjBcXHU2M2QwXFx1OTVlZScsXG4gIHBlbmRpbmdLaW5kUGxhblJldmlldzogJ1xcdThiYTFcXHU1MjEyXFx1NWY4NVxcdTViYTFcXHU2ODM4JyxcbiAgcGVuZGluZ0FwcHJvdmFsVG9vbDogJ1xcdTVmODVcXHU1YmExXFx1NjI3OSBcXHUwMGI3IHt0b29sfScsXG4gIHBlbmRpbmdRdWVzdGlvbkNob29zZTogJ1xcdThiZjdcXHU0ZjYwXFx1OTAwOVxcdTYyZTknLFxuICBwZW5kaW5nUXVlc3Rpb25NdWx0aTogJ1xcdThiZjdcXHU0ZjYwXFx1NTkxYVxcdTkwMDknLFxuICBwZW5kaW5nUXVlc3Rpb25GaWxsOiAnXFx1OGJmN1xcdTRmNjBcXHU1ODZiXFx1NTE5OScsXG4gIHBlbmRpbmdRdWVzdGlvbkJhdGNoOiAnXFx1NTQxMVxcdTRmNjBcXHU2M2QwXFx1OTVlZVxcdWZmMDh7Y291bnR9IFxcdTRlMmFcXHVmZjA5JyxcbiAgaW52YWxpZFRva2VuOiAnXFx1OGJmN1xcdThmOTNcXHU1MTY1XFx1NjU3MFxcdTViNTdcXHU2MjE2XFx1NWUyNiBrL00gXFx1NTQwZVxcdTdmMDBcXHU3Njg0XFx1NTAzY1xcdWZmMDhcXHU1OTgyIDEzMGtcXHVmZjA5XFx1MzAwMicsXG4gIGludmFsaWRIZXg6ICdcXHU5ODljXFx1ODI3MlxcdTY4M2NcXHU1ZjBmXFx1NWU5NFxcdTRlM2EgI1JSR0dCQlxcdTMwMDInLFxuICBlcnJvclByZWZpeDogJ1xcdTk1MTlcXHU4YmVmXFx1ZmYxYSAnLFxuICB1bmF2YWlsYWJsZTogJ1xcdTZiNjRcXHU4YmJlXFx1N2Y2ZVxcdTU3MjhcXHU1ZjUzXFx1NTI0ZFxcdTViYTJcXHU2MjM3XFx1N2FlZlxcdTRlMGRcXHU1M2VmXFx1NzUyOFxcdTMwMDInLFxuICBsb2FkaW5nOiAnXFx1NTJhMFxcdThmN2RcXHU0ZTJkXFx1MjAyNicsXG59XG5cbi8qKiBQYXJzZSBhIGh1bWFuIHRva2VuIGNvdW50IChgMTMwa2AsIGAxLjVtYCwgYDEzMDAwMGApLiAqL1xuZnVuY3Rpb24gcGFyc2VUb2tlblRleHQodGV4dCkge1xuICBjb25zdCByYXcgPSBTdHJpbmcodGV4dCA/PyAnJykudHJpbSgpLnJlcGxhY2UoL1tcXHNfXS9nLCAnJylcbiAgaWYgKHJhdyA9PT0gJycpIHJldHVybiB1bmRlZmluZWRcbiAgY29uc3QgbWF0Y2ggPSAvXihcXGQrKD86Wy4sXVxcZCspPykoW2tLbU1dKT8kLy5leGVjKHJhdylcbiAgaWYgKG1hdGNoID09PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IGJhc2UgPSBOdW1iZXIobWF0Y2hbMV0ucmVwbGFjZSgnLCcsICcuJykpXG4gIGlmICghTnVtYmVyLmlzRmluaXRlKGJhc2UpIHx8IGJhc2UgPCAwKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IHNjYWxlID0gbWF0Y2hbMl0gPT09IHVuZGVmaW5lZCA/IDEgOiBtYXRjaFsyXS50b0xvd2VyQ2FzZSgpID09PSAnaycgPyAxMDAwIDogMTAwMDAwMFxuICByZXR1cm4gTWF0aC5yb3VuZChiYXNlICogc2NhbGUpXG59XG5cbi8qKiBCdWlsZCBgeyBwcm92aWRlciwgbW9kZWwsIG5hbWUsIGxldmVscyB9YCByb3dzIGZyb20gdGhlIHBpLWFpIGNvbmZpZyB2YWx1ZS4gKi9cbmZ1bmN0aW9uIGJ1aWxkQ2F0YWxvZyhwcm92aWRlcnMpIHtcbiAgY29uc3Qgcm93cyA9IFtdXG4gIGlmIChwcm92aWRlcnMgPT09IG51bGwgfHwgdHlwZW9mIHByb3ZpZGVycyAhPT0gJ29iamVjdCcpIHJldHVybiByb3dzXG4gIGZvciAoY29uc3QgW3Byb3ZpZGVyLCBwcm9maWxlXSBvZiBPYmplY3QuZW50cmllcyhwcm92aWRlcnMpKSB7XG4gICAgY29uc3QgbW9kZWxzID0gcHJvZmlsZSAhPT0gbnVsbCAmJiB0eXBlb2YgcHJvZmlsZSA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheShwcm9maWxlLm1vZGVscykgPyBwcm9maWxlLm1vZGVscyA6IFtdXG4gICAgZm9yIChjb25zdCBtb2RlbCBvZiBtb2RlbHMpIHtcbiAgICAgIGlmIChtb2RlbCA9PT0gbnVsbCB8fCB0eXBlb2YgbW9kZWwgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBtb2RlbC5pZCAhPT0gJ3N0cmluZycpIGNvbnRpbnVlXG4gICAgICBjb25zdCBlZmZvcnRzID0gbW9kZWwucmVhc29uaW5nRWZmb3J0c1xuICAgICAgY29uc3QgbGV2ZWxzID0gZWZmb3J0cyA9PT0gZmFsc2UgPyBbXSA6IChlZmZvcnRzICE9PSBudWxsICYmIHR5cGVvZiBlZmZvcnRzID09PSAnb2JqZWN0JyA/IE9iamVjdC5rZXlzKGVmZm9ydHMpIDogW10pXG4gICAgICByb3dzLnB1c2goeyBwcm92aWRlciwgbW9kZWw6IG1vZGVsLmlkLCBuYW1lOiB0eXBlb2YgbW9kZWwubmFtZSA9PT0gJ3N0cmluZycgJiYgbW9kZWwubmFtZSAhPT0gJycgPyBtb2RlbC5uYW1lIDogbW9kZWwuaWQsIGxldmVscyB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gcm93c1xufVxuXG5jb25zdCBTID0ge1xuICB3cmFwOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogNCwgbWF4V2lkdGg6IDY4MCwgcGFkZGluZ1RvcDogNCB9LFxuICB0YWJzOiB7IG1hcmdpblRvcDogNCB9LFxuICBncm91cDogeyBtYXJnaW5Ub3A6IDEwLCBwYWRkaW5nVG9wOiAxMCwgYm9yZGVyVG9wOiAnMC41cHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMyknIH0sXG4gIGdyb3VwRmlyc3Q6IHsgbWFyZ2luVG9wOiAxMCB9LFxuICBncm91cFRpdGxlOiB7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiAyIH0sXG4gIGxhYmVsOiB7IGRpc3BsYXk6ICdibG9jaycsIGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiA2LCBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScgfSxcbiAgaGludDogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIsIG1hcmdpbjogJzRweCAwIDEycHgnIH0sXG4gIGlucHV0OiB7XG4gICAgaGVpZ2h0OiAzMixcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGJvcmRlcjogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDQpJyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBiYWNrZ3JvdW5kOiAndmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTEpJyxcbiAgICBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgfSxcbiAgc2VsZWN0OiB7IGN1cnNvcjogJ3BvaW50ZXInIH0sXG4gIGhleDogeyBmb250RmFtaWx5OiAnbW9ub3NwYWNlJywgd2lkdGg6IDExMCwgZmxleDogJzAgMCBhdXRvJyB9LFxuICBjb2xvcjoge1xuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgd2lkdGg6IDMyLFxuICAgIGhlaWdodDogMzIsXG4gICAgcGFkZGluZzogMixcbiAgICBib3JkZXI6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWw0KScsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGJhY2tncm91bmQ6ICd2YXIoLS1kc3ctYWxpYXMtYmctbGF5ZXItMSknLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICB9LFxuICByb3dUd286IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEyIH0sXG4gIHJvd0ZsZXg6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDgsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0sXG4gIGNvbDogeyBmbGV4OiAxLCBtaW5XaWR0aDogMCB9LFxuICBwcm92aWRlckJsb2NrOiB7IG1hcmdpbkJvdHRvbTogMTIgfSxcbiAgcHJldmlldzogeyBtYXJnaW5Ub3A6IDgsIHBhZGRpbmc6IDEwLCBib3JkZXI6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWw0KScsIGJvcmRlclJhZGl1czogOCwgYmFja2dyb3VuZDogJ3ZhcigtLWRzdy1hbGlhcy1iZy1sYXllci0xKScgfSxcbiAgcHJldmlld1JvdzogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsIHBhZGRpbmc6ICc0cHggMCcsIGN1cnNvcjogJ3BvaW50ZXInIH0sXG4gIHRvZ2dsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEwLCBtYXJnaW5Cb3R0b206IDEyIH0sXG4gIHRvZ2dsZVRleHQ6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAyIH0sXG4gIHRvZ2dsZUxhYmVsOiB7IGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknIH0sXG4gIGVycm9yOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnksICNjMDApJywgZm9udFNpemU6IDEyLCBtYXJnaW5Ub3A6IDIgfSxcbn1cblxuZnVuY3Rpb24gUHJlZnNTZWN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHsgdCwgdXNlUHJlZnMsIHVzZU1vZGVsQ2F0YWxvZywgc2F2ZSwgcHJvYmUsIHdyaXRlTW9kZWxzIH0gPSBwcm9wc1xuICBjb25zdCBzbmFwID0gdXNlUHJlZnMoKHMpID0+IHMpXG4gIGNvbnN0IGNhdGFsb2dTbmFwID0gdXNlTW9kZWxDYXRhbG9nKChzKSA9PiBzKVxuICBjb25zdCB2YWx1ZSA9IHNuYXAgIT09IG51bGwgJiYgc25hcCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzbmFwLnZhbHVlID09PSAnb2JqZWN0JyAmJiBzbmFwLnZhbHVlICE9PSBudWxsID8gc25hcC52YWx1ZSA6IHt9XG4gIGNvbnN0IHByb3ZpZGVycyA9IGNhdGFsb2dTbmFwICE9PSBudWxsICYmIGNhdGFsb2dTbmFwICE9PSB1bmRlZmluZWQgJiYgY2F0YWxvZ1NuYXAudmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIGNhdGFsb2dTbmFwLnZhbHVlID09PSAnb2JqZWN0JyA/IGNhdGFsb2dTbmFwLnZhbHVlLnByb3ZpZGVycyA6IHVuZGVmaW5lZFxuICBjb25zdCBjYXRhbG9nID0gYnVpbGRDYXRhbG9nKHByb3ZpZGVycylcbiAgY29uc3Qgc3RhdHVzID0gc25hcCAhPT0gbnVsbCAmJiBzbmFwICE9PSB1bmRlZmluZWQgPyBzbmFwLnN0YXR1cyA6ICdsb2FkaW5nJ1xuICBjb25zdCB3cml0YWJsZSA9ICEhKHNuYXAgJiYgc25hcC53cml0YWJsZSlcblxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gUmVhY3QudXNlU3RhdGUoJ2NvbXBhY3Rpb24nKVxuICBjb25zdCBbcGVybWlzc2lvbiwgc2V0UGVybWlzc2lvbl0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpKVxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+ICh7XG4gICAgdGhyZXNob2xkVG9rZW5zOiB2YWx1ZS50aHJlc2hvbGRUb2tlbnMgPyBTdHJpbmcodmFsdWUudGhyZXNob2xkVG9rZW5zKSA6ICcnLFxuICAgIGNvbnRleHRXaW5kb3dUb2tlbnM6IHZhbHVlLmNvbnRleHRXaW5kb3dUb2tlbnMgPyBTdHJpbmcodmFsdWUuY29udGV4dFdpbmRvd1Rva2VucykgOiAnJyxcbiAgICByZXRhaW5Ub2tlbnM6IHZhbHVlLnJldGFpblRva2VucyA/IFN0cmluZyh2YWx1ZS5yZXRhaW5Ub2tlbnMpIDogJycsXG4gIH0pKVxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2VucmljaE5vdGUsIHNldEVucmljaE5vdGVdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFtidXN5Um91dGUsIHNldEJ1c3lSb3V0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gUmVhY3QudXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3N0aWNreUJnLCBzZXRTdGlja3lCZ10gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2hleERyYWZ0cywgc2V0SGV4RHJhZnRzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KVxuICBjb25zdCB3cmFwUmVmID0gUmVhY3QudXNlUmVmKG51bGwpXG4gIGNvbnN0IHZhbHVlUmVmID0gc25hcCAmJiBzbmFwLnZhbHVlXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RHJhZnQoe1xuICAgICAgdGhyZXNob2xkVG9rZW5zOiB2YWx1ZVJlZiAmJiB2YWx1ZVJlZi50aHJlc2hvbGRUb2tlbnMgPyBTdHJpbmcodmFsdWVSZWYudGhyZXNob2xkVG9rZW5zKSA6ICcnLFxuICAgICAgY29udGV4dFdpbmRvd1Rva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYuY29udGV4dFdpbmRvd1Rva2VucyA/IFN0cmluZyh2YWx1ZVJlZi5jb250ZXh0V2luZG93VG9rZW5zKSA6ICcnLFxuICAgICAgcmV0YWluVG9rZW5zOiB2YWx1ZVJlZiAmJiB2YWx1ZVJlZi5yZXRhaW5Ub2tlbnMgPyBTdHJpbmcodmFsdWVSZWYucmV0YWluVG9rZW5zKSA6ICcnLFxuICAgIH0pXG4gICAgc2V0SGV4RHJhZnRzKHt9KVxuICAgIHNldE5vdGUoJycpXG4gIH0sIFt2YWx1ZVJlZl0pXG4gIC8vIFRoZSBzZXR0aW5ncyBwYW5lbCBzY3JvbGxzOyBwaWNrIGl0cyBiYWNrZ3JvdW5kIHNvIHRoZSBzdGlja3kgdGFiIGJhciBkb2VzXG4gIC8vIG5vdCBzaG93IGNvbnRlbnQgc2Nyb2xsaW5nIHVuZGVybmVhdGguXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG5vZGUgPSB3cmFwUmVmLmN1cnJlbnQ/LnBhcmVudEVsZW1lbnQgPz8gbnVsbFxuICAgIHdoaWxlIChub2RlICE9PSBudWxsICYmIG5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGNvbnN0IGJnID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgIGlmIChiZyAhPT0gJycgJiYgYmcgIT09ICd0cmFuc3BhcmVudCcgJiYgYmcgIT09ICdyZ2JhKDAsIDAsIDAsIDApJykgeyBzZXRTdGlja3lCZyhiZyk7IGJyZWFrIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnRcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJykgcmV0dXJuIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnbG9hZGluZycpKVxuICBpZiAoc3RhdHVzID09PSAndW5hdmFpbGFibGUnKSByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCd1bmF2YWlsYWJsZScpKVxuXG4gIGNvbnN0IGRpc2FibGVkID0gIXdyaXRhYmxlXG4gIGNvbnN0IHdyaXRlID0gKGZpZWxkLCB2KSA9PiB7XG4gICAgc2V0Tm90ZSgnJylcbiAgICBQcm9taXNlLnJlc29sdmUoc2F2ZShmaWVsZCwgdikpLmNhdGNoKChlcnJvcikgPT4gc2V0Tm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKSlcbiAgfVxuICBjb25zdCBjb21taXRUb2tlbnMgPSAoZmllbGQsIHRleHQpID0+IHtcbiAgICBpZiAodGV4dC50cmltKCkgPT09ICcnKSB7IHdyaXRlKGZpZWxkLCAwKTsgcmV0dXJuIH1cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVRva2VuVGV4dCh0ZXh0KVxuICAgIGlmIChwYXJzZWQgPT09IHVuZGVmaW5lZCkgeyBzZXROb3RlKHQoJ2ludmFsaWRUb2tlbicpKTsgcmV0dXJuIH1cbiAgICB3cml0ZShmaWVsZCwgcGFyc2VkKVxuICB9XG4gIGNvbnN0IG51bSA9IChmaWVsZCwgZmFsbGJhY2spID0+ICh7XG4gICAgdmFsdWU6IFN0cmluZyh2YWx1ZVtmaWVsZF0gIT09IHVuZGVmaW5lZCA/IHZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrKSxcbiAgICBkaXNhYmxlZCxcbiAgICBvbkNoYW5nZTogKGUpID0+IHsgY29uc3QgbiA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7IGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHdyaXRlKGZpZWxkLCBuKSB9LFxuICB9KVxuICBjb25zdCBzd2l0Y2hGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGUsIGtleTogZmllbGQgfSxcbiAgICBlbChTd2l0Y2gsIHtcbiAgICAgIGNoZWNrZWQ6IHZhbHVlW2ZpZWxkXSAhPT0gdW5kZWZpbmVkID8gISF2YWx1ZVtmaWVsZF0gOiBmYWxsYmFjayxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFiZWw6IHQobGFiZWxLZXkpLFxuICAgICAgb25DaGFuZ2U6IChuZXh0KSA9PiB3cml0ZShmaWVsZCwgbmV4dCksXG4gICAgfSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudG9nZ2xlVGV4dCB9LFxuICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiBTLnRvZ2dsZUxhYmVsIH0sIHQobGFiZWxLZXkpKSxcbiAgICAgIGhpbnRLZXkgPyBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyIH0gfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICAgICksXG4gIClcbiAgY29uc3QgdGV4dEZpZWxkID0gKGxhYmVsS2V5LCBmaWVsZCwgaGludEtleSkgPT4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6IGZpZWxkIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgIHR5cGU6ICd0ZXh0Jywgc3R5bGU6IFMuaW5wdXQsIGRpc2FibGVkLFxuICAgICAgdmFsdWU6IGRyYWZ0W2ZpZWxkXSxcbiAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gc2V0RHJhZnQoKGQpID0+ICh7IC4uLmQsIFtmaWVsZF06IGUudGFyZ2V0LnZhbHVlIH0pKSxcbiAgICAgIG9uQmx1cjogKCkgPT4gY29tbWl0VG9rZW5zKGZpZWxkLCBkcmFmdFtmaWVsZF0pLFxuICAgICAgb25LZXlEb3duOiAoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGNvbW1pdFRva2VucyhmaWVsZCwgZHJhZnRbZmllbGRdKSB9LFxuICAgIH0pLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdChoaW50S2V5KSksXG4gIClcbiAgY29uc3QgbnVtYmVyRmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBoaW50S2V5LCBmYWxsYmFjaykgPT4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6IGZpZWxkIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgIGVsKCdpbnB1dCcsIHsgdHlwZTogJ251bWJlcicsIHN0ZXA6ICdhbnknLCBzdHlsZTogUy5pbnB1dCwgLi4ubnVtKGZpZWxkLCBmYWxsYmFjaykgfSksXG4gICAgaGludEtleSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICApXG4gIC8qKiBDb21taXQgYSB0eXBlZCBoZXggdmFsdWUgKGVtcHR5IGNsZWFycyBhbiBvcHRpb25hbCBjb2xvdXIpLiAqL1xuICBjb25zdCBjb21taXRIZXggPSAoZmllbGQsIG9wdGlvbmFsLCB0ZXh0KSA9PiB7XG4gICAgc2V0Tm90ZSgnJylcbiAgICBjb25zdCBzdG9yZWQgPSB0eXBlb2YgdmFsdWVbZmllbGRdID09PSAnc3RyaW5nJyA/IHZhbHVlW2ZpZWxkXSA6ICcnXG4gICAgY29uc3QgbmV4dCA9IFN0cmluZyh0ZXh0ID8/ICcnKS50cmltKClcbiAgICBpZiAobmV4dCA9PT0gJycpIHtcbiAgICAgIGlmIChvcHRpb25hbCkgd3JpdGUoZmllbGQsICcnKVxuICAgICAgZWxzZSBzZXRIZXhEcmFmdHMoKGQpID0+ICh7IC4uLmQsIFtmaWVsZF06IHN0b3JlZCB9KSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoSEVYLnRlc3QobmV4dCkpIHsgd3JpdGUoZmllbGQsIG5leHQpOyByZXR1cm4gfVxuICAgIHNldE5vdGUodCgnaW52YWxpZEhleCcpKVxuICAgIHNldEhleERyYWZ0cygoZCkgPT4gKHsgLi4uZCwgW2ZpZWxkXTogc3RvcmVkIH0pKVxuICB9XG4gIC8qKiBDb2xvdXIgcm93OiBuYXRpdmUgcGlja2VyICsgZWRpdGFibGUgaGV4LCBvcHRpb25hbCBjbGVhciAoZW1wdHkgPSBvZmZpY2lhbCkuICovXG4gIGNvbnN0IGNvbG9yRmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBmYWxsYmFja0hleCwgb3B0aW9uYWwsIGhpbnRLZXkpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gdHlwZW9mIHZhbHVlW2ZpZWxkXSA9PT0gJ3N0cmluZycgPyB2YWx1ZVtmaWVsZF0gOiAnJ1xuICAgIGNvbnN0IHNob3duID0gY3VycmVudCAhPT0gJycgPyBjdXJyZW50IDogKGZhbGxiYWNrSGV4ID8/ICcjMDAwMDAwJylcbiAgICBjb25zdCB0ZXh0ID0gaGV4RHJhZnRzW2ZpZWxkXSAhPT0gdW5kZWZpbmVkID8gaGV4RHJhZnRzW2ZpZWxkXSA6IGN1cnJlbnRcbiAgICBjb25zdCB0eXBlZCA9ICgpID0+IChoZXhEcmFmdHNbZmllbGRdICE9PSB1bmRlZmluZWQgPyBoZXhEcmFmdHNbZmllbGRdIDogY3VycmVudClcbiAgICByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IHsgLi4uUy5jb2wsIG1hcmdpbkJvdHRvbTogMTAgfSwga2V5OiBmaWVsZCB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93RmxleCB9LFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ2NvbG9yJywgdmFsdWU6IHNob3duLCBkaXNhYmxlZCwgc3R5bGU6IFMuY29sb3IsXG4gICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7IHdyaXRlKGZpZWxkLCBlLnRhcmdldC52YWx1ZSk7IHNldEhleERyYWZ0cygoZCkgPT4gKHsgLi4uZCwgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUgfSkpIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLmhleCB9LCBkaXNhYmxlZCxcbiAgICAgICAgICB2YWx1ZTogdGV4dCwgcGxhY2Vob2xkZXI6IG9wdGlvbmFsID8gdCgnY29sb3JVbnNldCcpIDogJycsXG4gICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXRIZXhEcmFmdHMoKGQpID0+ICh7IC4uLmQsIFtmaWVsZF06IGUudGFyZ2V0LnZhbHVlIH0pKSxcbiAgICAgICAgICBvbkJsdXI6ICgpID0+IGNvbW1pdEhleChmaWVsZCwgb3B0aW9uYWwsIHR5cGVkKCkpLFxuICAgICAgICAgIG9uS2V5RG93bjogKGUpID0+IHsgaWYgKGUua2V5ID09PSAnRW50ZXInKSBjb21taXRIZXgoZmllbGQsIG9wdGlvbmFsLCB0eXBlZCgpKSB9LFxuICAgICAgICB9KSxcbiAgICAgICAgb3B0aW9uYWwgJiYgY3VycmVudCAhPT0gJydcbiAgICAgICAgICA/IGVsKEJ1dHRvbiwgeyB2YXJpYW50OiAnZ2hvc3QnLCBzaXplOiAnc20nLCBkaXNhYmxlZCwgb25DbGljazogKCkgPT4geyB3cml0ZShmaWVsZCwgJycpOyBzZXRIZXhEcmFmdHMoKGQpID0+ICh7IC4uLmQsIFtmaWVsZF06ICcnIH0pKSB9IH0sIHQoJ2NvbG9yUmVzZXQnKSlcbiAgICAgICAgICA6IG51bGwsXG4gICAgICApLFxuICAgICAgaGludEtleSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICAgIClcbiAgfVxuICBjb25zdCBlbmFibGVOb3RpZmljYXRpb25zID0gKG5leHQpID0+IHtcbiAgICBpZiAoIW5leHQpIHsgd3JpdGUoJ25vdGlmeUVuYWJsZWQnLCBmYWxzZSk7IHJldHVybiB9XG4gICAgd3JpdGUoJ25vdGlmeUVuYWJsZWQnLCB0cnVlKVxuICAgIHByaW1lU291bmQoKVxuICAgIHZvaWQgcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oKS50aGVuKHNldFBlcm1pc3Npb24pXG4gIH1cblxuICAvKiogRmV0Y2ggYSBwcm92aWRlcidzIG1vZGVscyBhbmQgYnVpbGQgYSBwZXItbW9kZWwgcmV2aWV3IG9mIHdoYXQgaW1wb3J0aW5nIHdvdWxkIGNoYW5nZS4gKi9cbiAgY29uc3QgZmV0Y2hQcmV2aWV3ID0gYXN5bmMgKHJvdXRlSWQsIHByb2ZpbGUpID0+IHtcbiAgICBzZXRCdXN5Um91dGUocm91dGVJZClcbiAgICBzZXRFbnJpY2hOb3RlKCcnKVxuICAgIHNldFByZXZpZXcobnVsbClcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm9iZSh7XG4gICAgICAgIGJhc2VVUkw6IHByb2ZpbGUuYmFzZVVSTCxcbiAgICAgICAgLi4uKHR5cGVvZiBwcm9maWxlLmFwaUtleUVudiA9PT0gJ3N0cmluZycgJiYgcHJvZmlsZS5hcGlLZXlFbnYgIT09ICcnID8geyBhcGlLZXlFbnY6IHByb2ZpbGUuYXBpS2V5RW52IH0gOiB7fSksXG4gICAgICB9KVxuICAgICAgY29uc3QgZm91bmQgPSBBcnJheS5pc0FycmF5KHJlc3BvbnNlPy5tb2RlbHMpID8gcmVzcG9uc2UubW9kZWxzIDogW11cbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gQXJyYXkuaXNBcnJheShwcm9maWxlLm1vZGVscykgPyBwcm9maWxlLm1vZGVscyA6IFtdXG4gICAgICBjb25zdCBieUlkID0gbmV3IE1hcChleGlzdGluZy5tYXAoKG0pID0+IFttLmlkLCBtXSkpXG4gICAgICBjb25zdCByb3dzID0gZm91bmQubWFwKChtKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1ciA9IGJ5SWQuZ2V0KG0uaWQpXG4gICAgICAgIGlmIChjdXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHsgaWQ6IG0uaWQsIG5hbWU6IG0ubmFtZSwgaXNOZXc6IHRydWUsIGNoYW5nZXM6IFtdLCB2YWx1ZTogbSwgc2VsZWN0ZWQ6IHRydWUgfVxuICAgICAgICBjb25zdCBjaGFuZ2VzID0gW11cbiAgICAgICAgaWYgKG0uY29udGV4dFdpbmRvdyAhPT0gdW5kZWZpbmVkICYmIGN1ci5jb250ZXh0V2luZG93ICE9PSBtLmNvbnRleHRXaW5kb3cpIGNoYW5nZXMucHVzaCh7IGZpZWxkOiAnY29udGV4dFdpbmRvdycsIGZyb206IGN1ci5jb250ZXh0V2luZG93LCB0bzogbS5jb250ZXh0V2luZG93IH0pXG4gICAgICAgIGlmIChtLm1heFRva2VucyAhPT0gdW5kZWZpbmVkICYmIGN1ci5tYXhUb2tlbnMgIT09IG0ubWF4VG9rZW5zKSBjaGFuZ2VzLnB1c2goeyBmaWVsZDogJ21heFRva2VucycsIGZyb206IGN1ci5tYXhUb2tlbnMsIHRvOiBtLm1heFRva2VucyB9KVxuICAgICAgICBjb25zdCBmcm9tSW5wdXQgPSBBcnJheS5pc0FycmF5KGN1ci5pbnB1dCkgPyBjdXIuaW5wdXQuam9pbignKycpIDogdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHRvSW5wdXQgPSBBcnJheS5pc0FycmF5KG0uaW5wdXQpID8gbS5pbnB1dC5qb2luKCcrJykgOiB1bmRlZmluZWRcbiAgICAgICAgaWYgKHRvSW5wdXQgIT09IHVuZGVmaW5lZCAmJiB0b0lucHV0ICE9PSBmcm9tSW5wdXQpIGNoYW5nZXMucHVzaCh7IGZpZWxkOiAnaW5wdXQnLCBmcm9tOiBmcm9tSW5wdXQsIHRvOiB0b0lucHV0IH0pXG4gICAgICAgIHJldHVybiB7IGlkOiBtLmlkLCBuYW1lOiBtLm5hbWUsIGlzTmV3OiBmYWxzZSwgY2hhbmdlcywgdmFsdWU6IG0sIHNlbGVjdGVkOiBjaGFuZ2VzLmxlbmd0aCA+IDAgfVxuICAgICAgfSlcbiAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkgeyBzZXRFbnJpY2hOb3RlKHQoJ25vTW9kZWxzJykpOyByZXR1cm4gfVxuICAgICAgc2V0UHJldmlldyh7IHJvdXRlSWQsIHJvd3MgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RW5yaWNoTm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRCdXN5Um91dGUoJycpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdG9nZ2xlUHJldmlldyA9IChpZCkgPT4gc2V0UHJldmlldygocCkgPT4gKHAgPT09IG51bGwgPyBwIDogeyAuLi5wLCByb3dzOiBwLnJvd3MubWFwKChyKSA9PiAoci5pZCA9PT0gaWQgPyB7IC4uLnIsIHNlbGVjdGVkOiAhci5zZWxlY3RlZCB9IDogcikpIH0pKVxuICBjb25zdCB0b2dnbGVBbGxQcmV2aWV3ID0gKG5leHQpID0+IHNldFByZXZpZXcoKHApID0+IChwID09PSBudWxsID8gcCA6IHsgLi4ucCwgcm93czogcC5yb3dzLm1hcCgocikgPT4gKHsgLi4uciwgc2VsZWN0ZWQ6IG5leHQgfSkpIH0pKVxuXG4gIC8qKiBJbXBvcnQgdGhlIHNlbGVjdGVkIHNlcnZlciB2YWx1ZXMgKHVwZGF0ZSBleGlzdGluZyBlbnRyaWVzLCBhcHBlbmQgbmV3IG9uZXMpLiAqL1xuICBjb25zdCBhcHBseVByZXZpZXcgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcCA9IHByZXZpZXdcbiAgICBpZiAocCA9PT0gbnVsbCkgcmV0dXJuXG4gICAgY29uc3QgcHJvZmlsZSA9IChwcm92aWRlcnMgIT09IG51bGwgJiYgdHlwZW9mIHByb3ZpZGVycyA9PT0gJ29iamVjdCcgPyBwcm92aWRlcnNbcC5yb3V0ZUlkXSA6IHVuZGVmaW5lZCkgPz8ge31cbiAgICBjb25zdCBleGlzdGluZyA9IEFycmF5LmlzQXJyYXkocHJvZmlsZS5tb2RlbHMpID8gcHJvZmlsZS5tb2RlbHMgOiBbXVxuICAgIGNvbnN0IHNlbGVjdGVkQnlJZCA9IG5ldyBNYXAocC5yb3dzLmZpbHRlcigocikgPT4gci5zZWxlY3RlZCkubWFwKChyKSA9PiBbci5pZCwgcl0pKVxuICAgIGNvbnN0IG5leHQgPSBleGlzdGluZy5tYXAoKG0pID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IHNlbGVjdGVkQnlJZC5nZXQobS5pZClcbiAgICAgIGlmIChyb3cgPT09IHVuZGVmaW5lZCB8fCByb3cuaXNOZXcpIHJldHVybiBtXG4gICAgICBjb25zdCB2ID0gcm93LnZhbHVlXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5tLFxuICAgICAgICAuLi4odi5jb250ZXh0V2luZG93ID09PSB1bmRlZmluZWQgPyB7fSA6IHsgY29udGV4dFdpbmRvdzogdi5jb250ZXh0V2luZG93IH0pLFxuICAgICAgICAuLi4odi5tYXhUb2tlbnMgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBtYXhUb2tlbnM6IHYubWF4VG9rZW5zIH0pLFxuICAgICAgICAuLi4odi5pbnB1dCA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGlucHV0OiBbLi4udi5pbnB1dF0gfSksXG4gICAgICB9XG4gICAgfSlcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBwLnJvd3MpIHtcbiAgICAgIGlmICghcm93LmlzTmV3IHx8ICFyb3cuc2VsZWN0ZWQpIGNvbnRpbnVlXG4gICAgICBjb25zdCB2ID0gcm93LnZhbHVlXG4gICAgICBuZXh0LnB1c2goe1xuICAgICAgICBpZDogdi5pZCxcbiAgICAgICAgbmFtZTogdi5uYW1lLFxuICAgICAgICAuLi4odi5jb250ZXh0V2luZG93ID09PSB1bmRlZmluZWQgPyB7fSA6IHsgY29udGV4dFdpbmRvdzogdi5jb250ZXh0V2luZG93IH0pLFxuICAgICAgICAuLi4odi5tYXhUb2tlbnMgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBtYXhUb2tlbnM6IHYubWF4VG9rZW5zIH0pLFxuICAgICAgICAuLi4odi5pbnB1dCA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGlucHV0OiBbLi4udi5pbnB1dF0gfSksXG4gICAgICB9KVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgd3JpdGVNb2RlbHMocC5yb3V0ZUlkLCBuZXh0KVxuICAgICAgc2V0RW5yaWNoTm90ZSh0KCdhcHBsaWVkJywgeyBjb3VudDogc2VsZWN0ZWRCeUlkLnNpemUgfSkpXG4gICAgICBzZXRQcmV2aWV3KG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVucmljaE5vdGUodCgnZXJyb3JQcmVmaXgnKSArIFN0cmluZyhlcnJvciAmJiBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yKSlcbiAgICB9XG4gIH1cblxuICAvKiogT25lIHJvdyBvZiB0aGUgaW1wb3J0IHJldmlldzogY2hlY2tib3gsIG1vZGVsIG5hbWUsIGFuZCB0aGUgcGVuZGluZyBjaGFuZ2VzLiAqL1xuICBjb25zdCBjaGFuZ2VUZXh0ID0gKHJvdykgPT4ge1xuICAgIGNvbnN0IGZtdCA9ICh2KSA9PiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwgfHwgdiA9PT0gJycgPyAnXFx1MjAxNCcgOiBTdHJpbmcodikpXG4gICAgaWYgKHJvdy5pc05ldykgcmV0dXJuIHQoJ3ByZXZpZXdOZXcnKVxuICAgIGlmIChyb3cuY2hhbmdlcy5sZW5ndGggPT09IDApIHJldHVybiB0KCdwcmV2aWV3Tm9DaGFuZ2UnKVxuICAgIHJldHVybiByb3cuY2hhbmdlcy5tYXAoKGMpID0+IGAke2MuZmllbGR9OiAke2ZtdChjLmZyb20pfSBcXHUyMTkyICR7Zm10KGMudG8pfWApLmpvaW4oJyAgXFx1MDBiNyAgJylcbiAgfVxuXG4gIGNvbnN0IHByZXZpZXdQYW5lbCA9IChwKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBwLnJvd3MuZmlsdGVyKChyKSA9PiByLnNlbGVjdGVkKS5sZW5ndGhcbiAgICBjb25zdCBhbGwgPSBwLnJvd3MubGVuZ3RoID4gMCAmJiBzZWxlY3RlZCA9PT0gcC5yb3dzLmxlbmd0aFxuICAgIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogUy5wcmV2aWV3LCBrZXk6ICdwcmV2aWV3JyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdwcmV2aWV3VGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ3ByZXZpZXdIaW50JykpLFxuICAgICAgZWwoJ2xhYmVsJywgeyBzdHlsZTogeyAuLi5TLnByZXZpZXdSb3csIGJvcmRlckJvdHRvbTogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDMpJywgZm9udFdlaWdodDogNjAwIH0gfSxcbiAgICAgICAgZWwoJ2lucHV0Jywge1xuICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgY2hlY2tlZDogYWxsLFxuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIHJlZjogKG5vZGUpID0+IHsgaWYgKG5vZGUpIG5vZGUuaW5kZXRlcm1pbmF0ZSA9ICFhbGwgJiYgc2VsZWN0ZWQgPiAwIH0sXG4gICAgICAgICAgb25DaGFuZ2U6ICgpID0+IHRvZ2dsZUFsbFByZXZpZXcoIWFsbCksXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiB0KCdzZWxlY3RBbGwnKSxcbiAgICAgICAgfSksXG4gICAgICAgIGVsKCdzcGFuJywgbnVsbCwgdCgnc2VsZWN0QWxsJykpLFxuICAgICAgKSxcbiAgICAgIC4uLnAucm93cy5tYXAoKHJvdykgPT4gZWwoJ2xhYmVsJywgeyBrZXk6IHJvdy5pZCwgc3R5bGU6IFMucHJldmlld1JvdyB9LFxuICAgICAgICBlbCgnaW5wdXQnLCB7IHR5cGU6ICdjaGVja2JveCcsIGNoZWNrZWQ6IHJvdy5zZWxlY3RlZCwgZGlzYWJsZWQsIG9uQ2hhbmdlOiAoKSA9PiB0b2dnbGVQcmV2aWV3KHJvdy5pZCkgfSksXG4gICAgICAgIGVsKCdzcGFuJywgeyBzdHlsZTogeyBmb250V2VpZ2h0OiA2MDAsIG1heFdpZHRoOiAyMDAsIG1pbldpZHRoOiAwLCBvdmVyZmxvdzogJ2hpZGRlbicsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfSB9LCByb3cubmFtZSksXG4gICAgICAgIGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIgfSB9LCBjaGFuZ2VUZXh0KHJvdykpLFxuICAgICAgKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogeyAuLi5TLnJvd0ZsZXgsIG1hcmdpblRvcDogOCB9IH0sXG4gICAgICAgIGVsKEJ1dHRvbiwgeyB2YXJpYW50OiAncHJpbWFyeScsIHNpemU6ICdzbScsIGRpc2FibGVkOiBkaXNhYmxlZCB8fCBzZWxlY3RlZCA9PT0gMCwgb25DbGljazogKCkgPT4geyB2b2lkIGFwcGx5UHJldmlldygpIH0gfSwgdCgnYXBwbHknLCB7IGNvdW50OiBzZWxlY3RlZCB9KSksXG4gICAgICAgIGVsKEJ1dHRvbiwgeyB2YXJpYW50OiAnZ2hvc3QnLCBzaXplOiAnc20nLCBkaXNhYmxlZCwgb25DbGljazogKCkgPT4gc2V0UHJldmlldyhudWxsKSB9LCB0KCdjYW5jZWwnKSksXG4gICAgICApLFxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHByb3ZpZGVyUm93cyA9IE9iamVjdC5lbnRyaWVzKHByb3ZpZGVycyAhPT0gbnVsbCAmJiB0eXBlb2YgcHJvdmlkZXJzID09PSAnb2JqZWN0JyA/IHByb3ZpZGVycyA6IHt9KS5tYXAoKFtyb3V0ZUlkLCBwcm9maWxlXSkgPT4ge1xuICAgIGNvbnN0IGJhc2VVUkwgPSBwcm9maWxlICE9PSBudWxsICYmIHR5cGVvZiBwcm9maWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcHJvZmlsZS5iYXNlVVJMID09PSAnc3RyaW5nJyA/IHByb2ZpbGUuYmFzZVVSTCA6ICcnXG4gICAgcmV0dXJuIGVsKCdkaXYnLCB7IGtleTogcm91dGVJZCwgc3R5bGU6IFMucHJvdmlkZXJCbG9jayB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA4IH0gfSxcbiAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGZsZXg6IDEsIG1pbldpZHRoOiAwLCBvdmVyZmxvdzogJ2hpZGRlbicsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfSB9LCBgJHtyb3V0ZUlkfSR7YmFzZVVSTCA/IGAgXHUyMDE0ICR7YmFzZVVSTH1gIDogJyd9YCksXG4gICAgICAgIGJhc2VVUkxcbiAgICAgICAgICA/IGVsKEJ1dHRvbiwgeyB2YXJpYW50OiAnb3V0bGluZScsIHNpemU6ICdzbScsIGRpc2FibGVkOiBidXN5Um91dGUgPT09IHJvdXRlSWQgfHwgZGlzYWJsZWQsIG9uQ2xpY2s6ICgpID0+IHsgdm9pZCBmZXRjaFByZXZpZXcocm91dGVJZCwgcHJvZmlsZSkgfSB9LCBidXN5Um91dGUgPT09IHJvdXRlSWQgPyB0KCdlbnJpY2hpbmcnKSA6IHQoJ2VucmljaCcpKVxuICAgICAgICAgIDogZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiwgZmxleFNocmluazogMCB9IH0sIHQoJ25vQmFzZVVybCcpKSxcbiAgICAgICksXG4gICAgICBwcmV2aWV3ICE9PSBudWxsICYmIHByZXZpZXcucm91dGVJZCA9PT0gcm91dGVJZCA/IHByZXZpZXdQYW5lbChwcmV2aWV3KSA6IG51bGwsXG4gICAgKVxuICB9KVxuXG4gIC8vIFN1bW1hcml6YXRpb24gbW9kZWwvcmVhc29uaW5nIHBpY2tlcnMuXG4gIGNvbnN0IG1vZGUgPSB2YWx1ZS5zdW1tYXJpemF0aW9uTW9kZSA9PT0gJ2N1c3RvbScgPyAnY3VzdG9tJyA6ICdzZXNzaW9uJ1xuICBjb25zdCBwcm92aWRlck5hbWVzID0gWy4uLm5ldyBTZXQoY2F0YWxvZy5tYXAoKHIpID0+IHIucHJvdmlkZXIpKV1cbiAgY29uc3Qgc2VsZWN0ZWRQcm92aWRlciA9IHZhbHVlLnN1bW1hcml6YXRpb25Qcm92aWRlciB8fCBwcm92aWRlck5hbWVzWzBdIHx8ICcnXG4gIGNvbnN0IG1vZGVsc0ZvclByb3ZpZGVyID0gY2F0YWxvZy5maWx0ZXIoKHIpID0+IHIucHJvdmlkZXIgPT09IHNlbGVjdGVkUHJvdmlkZXIpXG4gIGNvbnN0IHNlbGVjdGVkUm93ID0gbW9kZWxzRm9yUHJvdmlkZXIuZmluZCgocikgPT4gci5tb2RlbCA9PT0gdmFsdWUuc3VtbWFyaXphdGlvbk1vZGVsKSB8fCBtb2RlbHNGb3JQcm92aWRlclswXVxuICBjb25zdCBsZXZlbFNldCA9IFsnZGVmYXVsdCcsICdvZmYnLCAuLi4oc2VsZWN0ZWRSb3cgPyBzZWxlY3RlZFJvdy5sZXZlbHMgOiBbXSldXG4gIGNvbnN0IHJlYXNvbmluZyA9IHZhbHVlLnN1bW1hcml6YXRpb25SZWFzb25pbmcgfHwgJ2RlZmF1bHQnXG4gIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSAocGFpcnMpID0+IHBhaXJzLm1hcCgoW3YsIGxhYmVsXSkgPT4gZWwoJ29wdGlvbicsIHsga2V5OiB2LCB2YWx1ZTogdiB9LCBsYWJlbCkpXG5cbiAgY29uc3Qgc3VtbWFyaXphdGlvbiA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ21vZGUnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdzdW1tYXJpemF0aW9uTW9kZScpKSxcbiAgICAgIGVsKCdzZWxlY3QnLCB7IHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLCB2YWx1ZTogbW9kZSwgb25DaGFuZ2U6IChlKSA9PiB3cml0ZSgnc3VtbWFyaXphdGlvbk1vZGUnLCBlLnRhcmdldC52YWx1ZSkgfSxcbiAgICAgICAgc2VsZWN0T3B0aW9ucyhbWydzZXNzaW9uJywgdCgnbW9kZVNlc3Npb24nKV0sIFsnY3VzdG9tJywgdCgnbW9kZUN1c3RvbScpXV0pKSxcbiAgICApLFxuICBdXG4gIGlmIChtb2RlID09PSAnY3VzdG9tJykge1xuICAgIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ3Byb3ZpZGVyJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgncHJvdmlkZXInKSksXG4gICAgICBlbCgnc2VsZWN0Jywge1xuICAgICAgICBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCwgdmFsdWU6IHNlbGVjdGVkUHJvdmlkZXIsXG4gICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5leHQgPSBjYXRhbG9nLmZpbmQoKHIpID0+IHIucHJvdmlkZXIgPT09IGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIHdyaXRlKCdzdW1tYXJpemF0aW9uUHJvdmlkZXInLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICBpZiAobmV4dCkgd3JpdGUoJ3N1bW1hcml6YXRpb25Nb2RlbCcsIG5leHQubW9kZWwpXG4gICAgICAgICAgd3JpdGUoJ3N1bW1hcml6YXRpb25SZWFzb25pbmcnLCAnZGVmYXVsdCcpXG4gICAgICAgIH0sXG4gICAgICB9LCBwcm92aWRlck5hbWVzLm1hcCgocCkgPT4gZWwoJ29wdGlvbicsIHsga2V5OiBwLCB2YWx1ZTogcCB9LCBwKSkpLFxuICAgICkpXG4gICAgc3VtbWFyaXphdGlvbi5wdXNoKGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAnbW9kZWwnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdtb2RlbCcpKSxcbiAgICAgIGVsKCdzZWxlY3QnLCB7XG4gICAgICAgIHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ZWRSb3cgPyBzZWxlY3RlZFJvdy5tb2RlbCA6ICcnLFxuICAgICAgICBvbkNoYW5nZTogKGUpID0+IHsgd3JpdGUoJ3N1bW1hcml6YXRpb25Nb2RlbCcsIGUudGFyZ2V0LnZhbHVlKTsgd3JpdGUoJ3N1bW1hcml6YXRpb25SZWFzb25pbmcnLCAnZGVmYXVsdCcpIH0sXG4gICAgICB9LCBtb2RlbHNGb3JQcm92aWRlci5tYXAoKHIpID0+IGVsKCdvcHRpb24nLCB7IGtleTogci5tb2RlbCwgdmFsdWU6IHIubW9kZWwgfSwgci5uYW1lKSkpLFxuICAgICkpXG4gIH1cbiAgc3VtbWFyaXphdGlvbi5wdXNoKGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAncmVhc29uaW5nJyB9LFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ3JlYXNvbmluZycpKSxcbiAgICBlbCgnc2VsZWN0JywgeyBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCwgdmFsdWU6IGxldmVsU2V0LmluY2x1ZGVzKHJlYXNvbmluZykgPyByZWFzb25pbmcgOiAnZGVmYXVsdCcsIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoJ3N1bW1hcml6YXRpb25SZWFzb25pbmcnLCBlLnRhcmdldC52YWx1ZSkgfSxcbiAgICAgIGxldmVsU2V0Lm1hcCgobHYpID0+IGVsKCdvcHRpb24nLCB7IGtleTogbHYsIHZhbHVlOiBsdiB9LCBsdiA9PT0gJ2RlZmF1bHQnID8gdCgncmVhc29uaW5nRGVmYXVsdCcpIDogbHYgPT09ICdvZmYnID8gdCgncmVhc29uaW5nT2ZmJykgOiBsdikpKSxcbiAgKSlcblxuICBjb25zdCBjb21wYWN0aW9uUGFuZWwgPSBbXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBGaXJzdCwga2V5OiAndGhyZXNob2xkJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCd0aHJlc2hvbGRUaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LFxuICAgICAgICB0ZXh0RmllbGQoJ3RocmVzaG9sZFRva2VucycsICd0aHJlc2hvbGRUb2tlbnMnLCAndGhyZXNob2xkVG9rZW5zSGludCcpLFxuICAgICAgICB0ZXh0RmllbGQoJ2NvbnRleHRXaW5kb3cnLCAnY29udGV4dFdpbmRvd1Rva2VucycsICdjb250ZXh0V2luZG93SGludCcpLFxuICAgICAgKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LFxuICAgICAgICBudW1iZXJGaWVsZCgndGhyZXNob2xkUmF0aW8nLCAndGhyZXNob2xkUmF0aW8nLCAndGhyZXNob2xkUmF0aW9IaW50JywgMC44KSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ2hlYWRyb29tJywgJ2hlYWRyb29tVG9rZW5zJywgJ2hlYWRyb29tSGludCcsIDMyNzY4KSxcbiAgICAgICksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAncmV0ZW50aW9uJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdyZXRlbnRpb25UaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LFxuICAgICAgICB0ZXh0RmllbGQoJ3JldGFpblRva2VucycsICdyZXRhaW5Ub2tlbnMnLCAncmV0YWluVG9rZW5zSGludCcpLFxuICAgICAgICBudW1iZXJGaWVsZCgncmV0YWluUmF0aW8nLCAncmV0YWluUmF0aW8nLCBudWxsLCAwLjE2KSxcbiAgICAgICksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnYmVoYXZpb3VyJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdiZWhhdmlvdXJUaXRsZScpKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdhdXRvJywgJ2F1dG8nLCAnYXV0b0hpbnQnLCB0cnVlKSxcbiAgICAgIHN3aXRjaEZpZWxkKCd0dXJuRW5kJywgJ3R1cm5FbmRDb21wYWN0aW9uRW5hYmxlZCcsICd0dXJuRW5kSGludCcsIGZhbHNlKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdzdW1tYXJpemF0aW9uJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdzdW1tYXJpemF0aW9uVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSwgc3VtbWFyaXphdGlvbiksXG4gICAgICBudW1iZXJGaWVsZCgnbWF4VG9rZW5zJywgJ21heFRva2VucycsIG51bGwsIDMyNzY4KSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdhZHZhbmNlZCcgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnYWR2YW5jZWRUaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LFxuICAgICAgICBudW1iZXJGaWVsZCgnY29tcGFjdGlvblJldHJpZXMnLCAnY29tcGFjdGlvblJldHJpZXMnLCBudWxsLCAxKSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ21heE92ZXJmbG93UmV0cmllcycsICdtYXhPdmVyZmxvd1JldHJpZXMnLCBudWxsLCAxKSxcbiAgICAgICksXG4gICAgKSxcbiAgXVxuXG4gIGNvbnN0IG1vZGVsc1BhbmVsID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwRmlyc3QsIGtleTogJ21vZGVscycgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnbW9kZWxzVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ21vZGVsc0ludHJvJykpLFxuICAgICAgLi4ucHJvdmlkZXJSb3dzLFxuICAgICAgZW5yaWNoTm90ZSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgZW5yaWNoTm90ZSkgOiBudWxsLFxuICAgICksXG4gIF1cblxuICBjb25zdCB2b2x1bWVOb3cgPSB0eXBlb2YgdmFsdWUubm90aWZ5Vm9sdW1lID09PSAnbnVtYmVyJyA/IHZhbHVlLm5vdGlmeVZvbHVtZSA6IDAuNlxuICBjb25zdCBzb3VuZFNlbGVjdE9wdGlvbnMgPSAoKSA9PiBbXG4gICAgZWwoJ29wdGlvbicsIHsga2V5OiBTT1VORF9OT05FLCB2YWx1ZTogU09VTkRfTk9ORSB9LCB0KCdzb3VuZE5vU291bmQnKSksXG4gICAgZWwoJ29wdGdyb3VwJywgeyBrZXk6ICdidWlsdGluJywgbGFiZWw6IHQoJ3NvdW5kUGFja0J1aWx0aW4nKSB9LFxuICAgICAgQlVJTFRJTl9TT1VORFMubWFwKChzb3VuZCkgPT4gZWwoJ29wdGlvbicsIHsga2V5OiBzb3VuZC5pZCwgdmFsdWU6IHNvdW5kLmlkIH0sIHQoc291bmQubGFiZWxLZXkpKSkpLFxuICAgIC4uLlNPVU5EX1BBQ0tTLm1hcCgocGFjaykgPT4gZWwoJ29wdGdyb3VwJywgeyBrZXk6IHBhY2sucHJlZml4LCBsYWJlbDogcGFjay5uYW1lIH0sXG4gICAgICBwYWNrU291bmRJZHMocGFjaykubWFwKChpZCwgaW5kZXgpID0+IGVsKCdvcHRpb24nLCB7IGtleTogaWQsIHZhbHVlOiBpZCB9LCBgJHtwYWNrLm5hbWV9ICR7U3RyaW5nKGluZGV4ICsgMSkucGFkU3RhcnQoMiwgJzAnKX1gKSkpKSxcbiAgXVxuICAvKiogU291bmQgc2VsZWN0b3I7IHBpY2tpbmcgb25lIHByZXZpZXdzIGl0IChhbmQgdW5sb2NrcyBhdWRpbyBpbiB0aGUgZ2VzdHVyZSkuICovXG4gIGNvbnN0IHNvdW5kU2VsZWN0ID0gKGxhYmVsS2V5LCBmaWVsZCwga2luZCkgPT4gZWwoJ2RpdicsIHsgc3R5bGU6IHsgLi4uUy5jb2wsIG1hcmdpbkJvdHRvbTogMTAgfSwga2V5OiBmaWVsZCB9LFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQobGFiZWxLZXkpKSxcbiAgICBlbCgnc2VsZWN0Jywge1xuICAgICAgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogdHlwZW9mIHZhbHVlW2ZpZWxkXSA9PT0gJ3N0cmluZycgPyB2YWx1ZVtmaWVsZF0gOiBTT1VORF9OT05FLFxuICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgd3JpdGUoZmllbGQsIGlkKVxuICAgICAgICBwcmltZVNvdW5kKClcbiAgICAgICAgaWYgKGlkICE9PSBTT1VORF9OT05FKSBwbGF5U291bmQoaWQsIHZvbHVtZU5vdywga2luZClcbiAgICAgIH0sXG4gICAgfSwgc291bmRTZWxlY3RPcHRpb25zKCkpLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnc291bmRIaW50JykpLFxuICApXG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uc0VuYWJsZWQgPSB2YWx1ZS5ub3RpZnlFbmFibGVkICE9PSB1bmRlZmluZWQgPyAhIXZhbHVlLm5vdGlmeUVuYWJsZWQgOiBmYWxzZVxuICBjb25zdCBub3RpZmljYXRpb25zUGFuZWwgPSBbXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBGaXJzdCwga2V5OiAnY29sb3JzJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdjb2xvcnNHcm91cCcpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnY29sb3JzSW50cm8nKSksXG4gICAgICBzd2l0Y2hGaWVsZCgnY29sb3JzRW5hYmxlZCcsICdjb2xvcnNFbmFibGVkJywgJ2NvbG9yc0VuYWJsZWRIaW50JywgdHJ1ZSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28sIGtleTogJ2NvbG9yczEnIH0sXG4gICAgICAgIGNvbG9yRmllbGQoJ2dyZWVuTGFiZWwnLCAnZ3JlZW4nLCAnIzIyQzU1RScsIGZhbHNlLCBudWxsKSxcbiAgICAgICAgY29sb3JGaWVsZCgnYW1iZXJMYWJlbCcsICdhbWJlcicsICcjRjU5RTBCJywgZmFsc2UsIG51bGwpLFxuICAgICAgKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3bywga2V5OiAnY29sb3JzMicgfSxcbiAgICAgICAgY29sb3JGaWVsZCgnd29ya2luZ0xhYmVsJywgJ3dvcmtpbmcnLCAnIzNCODJGNicsIGZhbHNlLCAnd29ya2luZ0hpbnQnKSxcbiAgICAgICAgY29sb3JGaWVsZCgnYmxhY2tMYWJlbCcsICdibGFjaycsICcjMDAwMDAwJywgdHJ1ZSwgJ2JsYWNrSGludCcpLFxuICAgICAgKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdub3RpZnknIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ25vdGlmeUdyb3VwJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdub3RpZnlJbnRybycpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZSwga2V5OiAnbm90aWZ5RW5hYmxlZCcgfSxcbiAgICAgICAgZWwoU3dpdGNoLCB7XG4gICAgICAgICAgY2hlY2tlZDogbm90aWZpY2F0aW9uc0VuYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgbGFiZWw6IHQoJ25vdGlmeUVuYWJsZWQnKSxcbiAgICAgICAgICBvbkNoYW5nZTogZW5hYmxlTm90aWZpY2F0aW9ucyxcbiAgICAgICAgfSksXG4gICAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZVRleHQgfSxcbiAgICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IFMudG9nZ2xlTGFiZWwgfSwgdCgnbm90aWZ5RW5hYmxlZCcpKSxcbiAgICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyIH0gfSwgdCgnbm90aWZ5RW5hYmxlZEhpbnQnKSksXG4gICAgICAgICksXG4gICAgICApLFxuICAgICAgbm90aWZpY2F0aW9uc0VuYWJsZWQgJiYgcGVybWlzc2lvbiA9PT0gJ2RlbmllZCcgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5lcnJvciB9LCB0KCdwZXJtaXNzaW9uRGVuaWVkJykpIDogbnVsbCxcbiAgICAgIG5vdGlmaWNhdGlvbnNFbmFibGVkICYmIHBlcm1pc3Npb24gPT09ICd1bnN1cHBvcnRlZCcgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5lcnJvciB9LCB0KCdwZXJtaXNzaW9uVW5zdXBwb3J0ZWQnKSkgOiBudWxsLFxuICAgICAgc3dpdGNoRmllbGQoJ25vdGlmeUZvcmVncm91bmQnLCAnbm90aWZ5Rm9yZWdyb3VuZCcsICdub3RpZnlGb3JlZ3JvdW5kSGludCcsIGZhbHNlKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZSwga2V5OiAndm9sdW1lJyB9LFxuICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IFMudG9nZ2xlTGFiZWwgfSwgdCgnbm90aWZ5Vm9sdW1lJykpLFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ3JhbmdlJywgbWluOiAwLCBtYXg6IDEwMCwgc3RlcDogNSwgZGlzYWJsZWQsXG4gICAgICAgICAgdmFsdWU6IE1hdGgucm91bmQodm9sdW1lTm93ICogMTAwKSwgJ2FyaWEtbGFiZWwnOiB0KCdub3RpZnlWb2x1bWUnKSxcbiAgICAgICAgICBzdHlsZTogeyBmbGV4OiAnMCAwIGF1dG8nLCB3aWR0aDogMTQwLCBhY2NlbnRDb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1icmFuZC1wcmltYXJ5KScsIGN1cnNvcjogJ3BvaW50ZXInIH0sXG4gICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB3cml0ZSgnbm90aWZ5Vm9sdW1lJywgTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSAvIDEwMCksXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBtaW5XaWR0aDogMzYsIHRleHRBbGlnbjogJ3JpZ2h0JyB9IH0sIGAke01hdGgucm91bmQodm9sdW1lTm93ICogMTAwKX0lYCksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ2RvbmUnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ25vdGlmeURvbmVHcm91cCcpKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdub3RpZnlEb25lRW5hYmxlZCcsICdub3RpZnlEb25lRW5hYmxlZCcsICdub3RpZnlEb25lRW5hYmxlZEhpbnQnLCB0cnVlKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdwZXJzaXN0RG9uZScsICdub3RpZnlEb25lUGVyc2lzdGVudCcsICdwZXJzaXN0SGludCcsIGZhbHNlKSxcbiAgICAgIHNvdW5kU2VsZWN0KCdzb3VuZCcsICdub3RpZnlEb25lU291bmQnLCAnZG9uZScpLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ3BlbmRpbmcnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ25vdGlmeVBlbmRpbmdHcm91cCcpKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdub3RpZnlQZW5kaW5nRW5hYmxlZCcsICdub3RpZnlQZW5kaW5nRW5hYmxlZCcsICdub3RpZnlQZW5kaW5nRW5hYmxlZEhpbnQnLCB0cnVlKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdwZXJzaXN0UGVuZGluZycsICdub3RpZnlQZW5kaW5nUGVyc2lzdGVudCcsICdwZXJzaXN0SGludCcsIGZhbHNlKSxcbiAgICAgIHNvdW5kU2VsZWN0KCdzb3VuZCcsICdub3RpZnlQZW5kaW5nU291bmQnLCAncGVuZGluZycpLFxuICAgICksXG4gIF1cblxuICBjb25zdCBwYW5lbHMgPSB7IGNvbXBhY3Rpb246IGNvbXBhY3Rpb25QYW5lbCwgbW9kZWxzOiBtb2RlbHNQYW5lbCwgbm90aWZpY2F0aW9uczogbm90aWZpY2F0aW9uc1BhbmVsIH1cblxuICByZXR1cm4gZWwoJ2RpdicsIHsgcmVmOiB3cmFwUmVmLCBzdHlsZTogUy53cmFwIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCd0aXRsZScpKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogeyAuLi5TLmhpbnQsIG1hcmdpbkJvdHRvbTogOCB9IH0sIHQoJ2ludHJvJykpLFxuICAgIGVsKCdkaXYnLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5TLnRhYnMsXG4gICAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICB6SW5kZXg6IDUsXG4gICAgICAgIHBhZGRpbmdUb3A6IDQsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDgsXG4gICAgICAgIGJhY2tncm91bmQ6IHN0aWNreUJnIHx8ICd2YXIoLS1kc3ctYWxpYXMtYmctbGF5ZXItMywgIzJjMmMyZSknLFxuICAgICAgfSxcbiAgICB9LFxuICAgICAgZWwoU2VnbWVudGVkQ29udHJvbCwge1xuICAgICAgICBpZDogVEFCU19JRCxcbiAgICAgICAgdmFsdWU6IHRhYixcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgdmFsdWU6ICdjb21wYWN0aW9uJywgbGFiZWw6IHQoJ3RhYkNvbXBhY3Rpb24nKSB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdub3RpZmljYXRpb25zJywgbGFiZWw6IHQoJ3RhYk5vdGlmaWNhdGlvbnMnKSB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdtb2RlbHMnLCBsYWJlbDogdCgndGFiTW9kZWxzJykgfSxcbiAgICAgICAgXSxcbiAgICAgICAgb25DaGFuZ2U6IHNldFRhYixcbiAgICAgICAgbGFiZWw6IHQoJ3RpdGxlJyksXG4gICAgICB9KSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IGlkOiBgJHtUQUJTX0lEfS0ke3RhYn0tcGFuZWxgLCByb2xlOiAndGFicGFuZWwnIH0sIC4uLihwYW5lbHNbdGFiXSA/PyBjb21wYWN0aW9uUGFuZWwpKSxcbiAgICBub3RlID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgbm90ZSkgOiBudWxsLFxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBseShjdHgpIHtcbiAgY3R4LmVmZmVjdCgoKSA9PiBjdHgubG9jYWxlLnJlZ2lzdGVyKExPQ0FMRV9OUywgeyBlbiwgemggfSksICdtYWxrby1wcmVmczogbG9jYWxlIGRpY3Rpb25hcmllcycpXG4gIGNvbnN0IHQgPSBjdHgubG9jYWxlLmJpbmQoTE9DQUxFX05TKVxuICBjb25zdCBmb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChOUylcbiAgY29uc3QgbW9kZWxGb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChNT0RFTF9OUylcbiAgLy8gVGhlIGFwcGxpY2F0aW9uIG9ubHkgYXV0by1tb3VudHMgaXRzIG93biBSZW1vdGUgc2VsZWN0aW9uLCBzbyBhIHBsdWdpblxuICAvLyBzaGlwcyBhbmQgbW91bnRzIGl0cyBvd24gY29udHJpYnV0aW9uLlxuICB0cnkge1xuICAgIGNvbnN0IGRpc3Bvc2VSZW1vdGUgPSBhd2FpdCBjdHgucmVtb3RlLiRtb3VudChQUk9CRV9SRU1PVEUpXG4gICAgY3R4LmVmZmVjdCgoKSA9PiAoKSA9PiB7IHZvaWQgZGlzcG9zZVJlbW90ZSgpIH0sICdtYWxrby1wcmVmczogbWFsa29Nb2RlbHMgcmVtb3RlJylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdkc2gtbWFsa28tcHJlZnM6IGNvdWxkIG5vdCBtb3VudCB0aGUgbWFsa29Nb2RlbHMgcmVtb3RlIFx1MjAxNCcsIGVycm9yKVxuICB9XG4gIC8vIFRhYiBzdGF0dXMgbGlnaHQgKyBicm93c2VyIG5vdGlmaWNhdGlvbnMgKGluZGVwZW5kZW50IG9mIHRoZSBzZXR0aW5ncyBwYWdlKS5cbiAgY3R4LmVmZmVjdCgoKSA9PiBzdGFydFN0YXR1c0xpZ2h0KGN0eCwgZm9ybSksICdtYWxrby1wcmVmczogdGFiIHN0YXR1cyBsaWdodCcpXG4gIGNvbnN0IGluamVjdGVkID0gKCkgPT4gKHtcbiAgICBob29rczogeyBwcmVmczogZm9ybSwgbW9kZWxDYXRhbG9nOiBtb2RlbEZvcm0gfSxcbiAgICBzYXZlOiAoZmllbGQsIHZhbHVlKSA9PiBmb3JtLnNldChmaWVsZCwgdmFsdWUpLFxuICAgIHByb2JlOiBhc3luYyAoYXJncykgPT4ge1xuICAgICAgLy8gQSBuYW1lc3BhY2Ugc2VydmljZSBpcyByZXNvbHZlZCBieSBpdHMgZnVsbCBrZXk7IHJlYWRpbmcgaXQgb2ZmXG4gICAgICAvLyBgY3R4LnJlbW90ZWAgd291bGQgcmVxdWlyZSBhbiBgaW5qZWN0YCB0aGlzIHBsdWdpbiBjYW5ub3QgZGVjbGFyZVxuICAgICAgLy8gYmVmb3JlIHRoZSBjb250cmlidXRpb24gaXMgbW91bnRlZC5cbiAgICAgIGNvbnN0IHJlbW90ZSA9IGN0eC5nZXQoJ3JlbW90ZS5tYWxrb01vZGVscycpXG4gICAgICBpZiAocmVtb3RlID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcigndGhlIG1hbGtvTW9kZWxzIHJlbW90ZSBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlbW90ZS5wcm9iZShhcmdzKVxuICAgICAgLy8gUmVtb3RlIG1ldGhvZHMgcmVzb2x2ZSB0byBhIGB7IG9rLCB2YWx1ZSB9YCAvIGB7IG9rLCBlcnJvciB9YCBlbnZlbG9wZS5cbiAgICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgJ29rJyBpbiByZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5vayAhPT0gdHJ1ZSkgdGhyb3cgcmVzdWx0LmVycm9yID8/IG5ldyBFcnJvcigndGhlIG1hbGtvTW9kZWxzIHByb2JlIGZhaWxlZCcpXG4gICAgICAgIHJldHVybiByZXN1bHQudmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LFxuICAgIHdyaXRlTW9kZWxzOiAocm91dGVJZCwgbW9kZWxzKSA9PiBtb2RlbEZvcm0ubXV0YXRlKFt7IG9wOiAnc2V0JywgcGF0aDogWydwcm92aWRlcnMnLCByb3V0ZUlkLCAnbW9kZWxzJ10sIHZhbHVlOiBtb2RlbHMgfV0pLFxuICB9KVxuICBjdHguc2xvdHMuaW5qZWN0KFNMT1QsICgpID0+IGN0eC5zbG90cy5yZWdpc3Rlcih7XG4gICAgbmFtZTogU0xPVCxcbiAgICBpZDogTlMsXG4gICAgb3JkZXI6IDQ1LFxuICAgIGxhYmVsOiAoKSA9PiB0KCd0aXRsZScpLFxuICAgIGxvY2FsZTogTE9DQUxFX05TLFxuICAgIGluamVjdDogaW5qZWN0ZWQsXG4gIH0sIFByZWZzU2VjdGlvbikpXG59IiwgIi8qKlxuICogZHNoLW1hbGtvLXByZWZzIFx1MjAxNCBzaGFyZWQgUmVtb3RlIHdpcmUgaWRlbnRpdHkuXG4gKlxuICogVGhlIHNhbWUgaW52b2NhdGlvbiBpcyByZWdpc3RlcmVkIG9uIHRoZSBIb3N0IChgdHlwZXJ0LnJlZ2lzdGVyYCkgYW5kIG1vdW50ZWRcbiAqIGluIHRoZSBicm93c2VyIChgY3R4LnJlbW90ZS4kbW91bnRgKSwgc28gYm90aCBoYWx2ZXMgYnVpbGQgaXQgZnJvbSBoZXJlLiBUaGVcbiAqIG9ubHkgZGlmZmVyZW5jZSBpcyB0aGUgc2NoZW1hIGZhY3RvcnkgZWFjaCBzaWRlIHN1cHBsaWVzOiB0aGUgSG9zdCBkZWNvZGVzXG4gKiBhcmd1bWVudHMgd2l0aCB6b2QsIHdoaWxlIHRoZSBDbGllbnQgbmV2ZXIgZGVjb2RlcyBpdHMgb3duIGFyZ3VtZW50cyBhbmQgb25seVxuICogbmVlZHMgYSBmYWN0b3J5IHRvIHNhdGlzZnkgdGhlIHN0cmljdC1jb2RlYyBjb250cmFjdC5cbiAqL1xuXG4vKiogV2lyZSBpZGVudGl0eSBzaGFyZWQgYnkgdGhlIEhvc3QgbWFuaWZlc3QgYW5kIHRoZSBDbGllbnQgY29udHJpYnV0aW9uLiAqL1xuZXhwb3J0IGNvbnN0IFBST0JFX0lERU5USVRZID0ge1xuICBpZDogJ2RzaC1tYWxrby1wcmVmcyNtYWxrb01vZGVscy9wcm9iZScsXG4gIHNlcnZpY2U6ICdtYWxrb01vZGVscycsXG4gIG5hbWVzcGFjZTogJ21hbGtvTW9kZWxzJyxcbiAgbWV0aG9kOiAncHJvYmUnLFxuICBhcmdzVHlwZVN5bWJvbDogJ2RzaC1tYWxrby1wcmVmcyNQcm9iZUFyZ3MnLFxuICByZXN1bHRUeXBlU3ltYm9sOiAnZHNoLW1hbGtvLXByZWZzI1Byb2JlUmVzdWx0Jyxcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgYG1hbGtvTW9kZWxzL3Byb2JlKGFyZ3MpYCBkaXJlY3QgaW52b2NhdGlvbi5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZUFyZ3Mgc2NoZW1hIGZhY3RvcnkgZm9yIHRoZSBzaW5nbGUgYGFyZ3NgIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZVJlc3VsdCBzY2hlbWEgZmFjdG9yeSBmb3IgdGhlIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBpbnZvY2F0aW9uIGRlc2NyaXB0b3IsIGlkZW50aWNhbCBvbiBib3RoIGZhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvYmVJbnZvY2F0aW9uKGNyZWF0ZUFyZ3MsIGNyZWF0ZVJlc3VsdCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBQUk9CRV9JREVOVElUWS5pZCxcbiAgICBzZXJ2aWNlOiBQUk9CRV9JREVOVElUWS5zZXJ2aWNlLFxuICAgIG5hbWVzcGFjZTogUFJPQkVfSURFTlRJVFkubmFtZXNwYWNlLFxuICAgIG1ldGhvZDogUFJPQkVfSURFTlRJVFkubWV0aG9kLFxuICAgIGludm9jYXRpb246IHsga2luZDogJ2RpcmVjdCcgfSxcbiAgICBwYXJhbWV0ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhcmdzJyxcbiAgICAgICAgd2lyZTogJ2FyZ3MnLFxuICAgICAgICBzb3VyY2U6ICdqc29uJyxcbiAgICAgICAgY29kZWM6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLmFyZ3NUeXBlU3ltYm9sLCBjcmVhdGU6IGNyZWF0ZUFyZ3MgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICByZXN1bHQ6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLnJlc3VsdFR5cGVTeW1ib2wsIGNyZWF0ZTogY3JlYXRlUmVzdWx0IH0sXG4gIH1cbn0iLCAiLyoqXG4gKiBUaGUgb2ZmaWNpYWwgRGVlcFNlZWsgd2hhbGUgbWFyaywgcmVjb2xvcmVkLlxuICpcbiAqIFNoYXBlIHRha2VuIGZyb20gdGhlIG9mZmljaWFsIGZhdmljb24gYXMgdXNlZCBieSBkc2gtbm90aWNlLWNlbnRlciAoTUlUKTtcbiAqIG9ubHkgdGhlIGZpbGwgY29sb3IgaXMgb3Vycy4gS2VwdCBoZXJlIHNvIHRoZSB0YWIgaWNvbiByZWZsZWN0cyB0aGUgc2Vzc2lvblxuICogc3RhdGUgd2l0aG91dCBmZXRjaGluZyBhbmQgbXV0YXRpbmcgdGhlIHNlcnZlZCAvZmF2aWNvbi5zdmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgQ1NTIGNvbG9yIGZvciB0aGUgZmlsbC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RhbmRhbG9uZSBTVkcgZG9jdW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aGFsZVN2Zyhjb2xvcikge1xuICByZXR1cm4gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjUwXFxcIiBoZWlnaHQ9XFxcIjUwXFxcIiB2aWV3Qm94PVxcXCIwIDAgNTAgNTBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjxwYXRoIGQ9XFxcIk00OC44MzU0IDEwLjA0NzlDNDguMzIzMiA5Ljc5MTk5IDQ4LjEwMjUgMTAuMjc5OCA0Ny44MDMyIDEwLjUyNzhDNDcuNzAwNyAxMC42MDc5IDQ3LjYxNDMgMTAuNzExOSA0Ny41MjczIDEwLjgwNzZDNDYuNzc5MyAxMS42MjQgNDUuOTA0OCAxMi4xNTk3IDQ0Ljc2MjIgMTIuMDk1N0M0My4wOTIzIDEyIDQxLjY2NiAxMi41MzU2IDQwLjQwNTggMTMuODM5OEM0MC4xMzc3IDEyLjIzMTkgMzkuMjQ3NiAxMS4yNzIgMzcuODkyNiAxMC42NTU4QzM3LjE4MzYgMTAuMzM1OSAzNi40NjY4IDEwLjAxNTYgMzUuOTcwMiA5LjMxOTgyQzM1LjYyMzUgOC44MjM3MyAzNS41MjkzIDguMjcxOTcgMzUuMzU2IDcuNzI3NTRDMzUuMjQ1NiA3LjM5OTkgMzUuMTM1MyA3LjA2Mzk2IDM0Ljc2NTEgNy4wMDc4MUMzNC4zNjMzIDYuOTQzODUgMzQuMjA1NiA3LjI4NzYgMzQuMDQ3OSA3LjU3NTY4QzMzLjQxOCA4Ljc1MTk1IDMzLjE3MzMgMTAuMDQ3OSAzMy4xOTczIDExLjM1OTlDMzMuMjUyNCAxNC4zMTIgMzQuNDczNiAxNi42NjQxIDM2Ljg5OTkgMTguMzM1OUMzNy4xNzU4IDE4LjUyNzggMzcuMjQ2NiAxOC43MTk3IDM3LjE1OTcgMTlDMzYuOTk0NiAxOS41NzU3IDM2Ljc5NzQgMjAuMTM1NyAzNi42MjQgMjAuNzExOUMzNi41MTM3IDIxLjA4MDEgMzYuMzQ4NiAyMS4xNTk3IDM1Ljk2MjQgMjFDMzQuNjMwOSAyMC40MzIxIDMzLjQ4MSAxOS41OTE4IDMyLjQ2NDQgMTguNTc1N0MzMC43MzkzIDE2Ljg3MjEgMjkuMTc5MiAxNC45OTE3IDI3LjIzMzQgMTMuNTJDMjYuNzc2NCAxMy4xNzU4IDI2LjMxOTMgMTIuODU2IDI1Ljg0NjcgMTIuNTUxOEMyMy44NjE4IDEwLjU4NCAyNi4xMDY5IDguOTY3NzcgMjYuNjI3IDguNzc1ODhDMjcuMTcwNCA4LjU3NTY4IDI2LjgxNTkgNy44ODc3IDI1LjA1OTEgNy44OTZDMjMuMzAyMiA3LjkwMzgxIDIxLjY5NTMgOC41MDM5MSAxOS42NDcgOS4zMDM3MUMxOS4zNDc3IDkuNDIzODMgMTkuMDMyMiA5LjUxMTcyIDE4LjcwOTUgOS41ODM5OEMxNi44NTAxIDkuMjIzNjMgMTQuOTE5OSA5LjE0MzU1IDEyLjkwMzMgOS4zNzU5OEM5LjEwNTk2IDkuODA3NjIgNi4wNzI3NSAxMS42Mzk2IDMuODQzMjYgMTQuNzY4MUMxLjE2NDU1IDE4LjUyNzggMC41MzQxOCAyMi43OTk4IDEuMzA2NjQgMjcuMjU1OUMyLjExNzY4IDMxLjk1MjEgNC40NjU4MiAzNS44Mzk4IDguMDczNzMgMzguODc5OUMxMS44MTU5IDQyLjAzMjIgMTYuMTI1NSA0My41NzYyIDIxLjA0MSA0My4yODAzQzI0LjAyNjkgNDMuMTA0IDI3LjM1MTYgNDIuNjk2MyAzMS4xMDE2IDM5LjQ1NjFDMzIuMDQ2OSAzOS45MzYgMzMuMDM5NiA0MC4xMjc5IDM0LjY4NiA0MC4yNzJDMzUuOTU0NiA0MC4zOTIxIDM3LjE3NTggNDAuMjA4IDM4LjEyMTEgNDAuMDA3OEMzOS42MDIxIDM5LjY4OCAzOS40OTk1IDM4LjI4ODEgMzguOTYzOSAzOC4wMzIyQzM0LjYyMyAzNS45Njc4IDM1LjU3NjIgMzYuODA4MSAzNC43MSAzNi4xMjc5QzM2LjkxNTUgMzMuNDYzOSA0MC4yNDAyIDMwLjY5NTggNDEuNTQgMjEuNzI4QzQxLjY0MjYgMjEuMDE2MSA0MS41NTU3IDIwLjU2NzkgNDEuNTQgMTkuOTkxN0M0MS41MzIyIDE5LjYzOTYgNDEuNjEwOCAxOS41MDM5IDQyLjAwNDkgMTkuNDYzOUM0My4wOTIzIDE5LjMzNTkgNDQuMTQ3OSAxOS4wMzE3IDQ1LjExNjcgMTguNDg3OEM0Ny45MjkyIDE2LjkxOTkgNDkuMDY0IDE0LjM0MzggNDkuMzMxNSAxMS4yNTU5QzQ5LjM3MTEgMTAuNzgzNyA0OS4zMjM3IDEwLjI5NTkgNDguODM1NCAxMC4wNDc5Wk0yNC4zMjYyIDM3LjgzOThDMjAuMTE5NiAzNC40NjM5IDE4LjA3OTEgMzMuMzUyMSAxNy4yMzU4IDMzLjM5OTlDMTYuNDQ4MiAzMy40NDgyIDE2LjU4OTggMzQuMzY4MiAxNi43NjMyIDM0Ljk2NzhDMTYuOTQ0MyAzNS41NjAxIDE3LjE4MTIgMzUuOTY4MyAxNy41MTE3IDM2LjQ4NzhDMTcuNzQwMiAzNi44MzIgMTcuODk3OSAzNy4zNDQyIDE3LjI4MzIgMzcuNzI4QzE1LjkyODIgMzguNTg0IDEzLjU3MjggMzcuNDM5OSAxMy40NjI0IDM3LjM4MzhDMTAuNzIwNyAzNS43MzU4IDguNDI4MjIgMzMuNTYwMSA2LjgxMzQ4IDMwLjU4NEM1LjI1MzQyIDI3LjcxOTcgNC4zNDc2NiAyNC42NDc5IDQuMTk3NzUgMjEuMzY3N0M0LjE1ODIgMjAuNTc1NyA0LjM4NjcyIDIwLjI5NTkgNS4xNTg2OSAyMC4xNTE5QzYuMTc1MjkgMTkuOTYgNy4yMjMxNCAxOS45MTk5IDguMjM5MjYgMjAuMDcxOEMxMi41MzI3IDIwLjcxMTkgMTYuMTg4NSAyMi42NzE5IDE5LjI1MjkgMjUuNzc1OUMyMS4wMDIgMjcuNTQzOSAyMi4zMjUyIDI5LjY1NTggMjMuNjg4NSAzMS43MjAyQzI1LjEzNzcgMzMuOTEyMSAyNi42OTc4IDM2IDI4LjY4MzEgMzcuNzExOUMyOS4zODQzIDM4LjMxMiAyOS45NDM0IDM4Ljc2ODEgMzAuNDc5IDM5LjEwNEMyOC44NjQzIDM5LjI4ODEgMjYuMTY5OSAzOS4zMjgxIDI0LjMyNjIgMzcuODM5OFpNMjYuMzQzMyAyNC42MDAxQzI2LjM0MzMgMjQuMjQ4IDI2LjYxOTEgMjMuOTY3OCAyNi45NjU4IDIzLjk2NzhDMjcuMDQ0NCAyMy45Njc4IDI3LjExNTIgMjMuOTgzOSAyNy4xNzgyIDI0LjAwNzhDMjcuMjY1MSAyNC4wNCAyNy4zNDM4IDI0LjA4NzkgMjcuNDA2NyAyNC4xNjAyQzI3LjUxNzEgMjQuMjcyIDI3LjU4MDEgMjQuNDMyMSAyNy41ODAxIDI0LjYwMDFDMjcuNTgwMSAyNC45NTIxIDI3LjMwNDIgMjUuMjMxOSAyNi45NTc1IDI1LjIzMTlDMjYuNjEwOCAyNS4yMzE5IDI2LjM0MzMgMjQuOTUyMSAyNi4zNDMzIDI0LjYwMDFaTTMyLjYwNjQgMjcuODc5OUMzMi4yMDQ2IDI4LjA0NzkgMzEuODAyNyAyOC4xOTE5IDMxLjQxNjUgMjguMjA4QzMwLjgxNzkgMjguMjM5NyAzMC4xNjQxIDI3Ljk5MjIgMjkuODA5NiAyNy42ODhDMjkuMjU4MyAyNy4yMTU4IDI4Ljg2NDMgMjYuOTUyMSAyOC42OTg3IDI2LjEyNzlDMjguNjI3OSAyNS43NzU5IDI4LjY2NzUgMjUuMjMxOSAyOC43MzA1IDI0LjkxOTlDMjguODcyMSAyNC4yNDggMjguNzE0NCAyMy44MTU5IDI4LjI0OTUgMjMuNDIzOEMyNy44NzE2IDIzLjEwNCAyNy4zOTExIDIzLjAxNjEgMjYuODYzMyAyMy4wMTYxQzI2LjY2NiAyMy4wMTYxIDI2LjQ4NDkgMjIuOTI3NyAyNi4zNTExIDIyLjg1NkMyNi4xMzA0IDIyLjc0NDEgMjUuOTQ5MiAyMi40NjM5IDI2LjEyMjYgMjIuMTIwMUMyNi4xNzc3IDIyLjAwNzggMjYuNDQ1OCAyMS43MzU4IDI2LjUwODggMjEuNjg4QzI3LjIyNTYgMjEuMjcyIDI4LjA1MjcgMjEuNDA3NyAyOC44MTY5IDIxLjcxOTdDMjkuNTI1OSAyMi4wMTYxIDMwLjA2MTUgMjIuNTYwMSAzMC44MzQgMjMuMzI4MUMzMS42MjE2IDI0LjI1NTkgMzEuNzYzMiAyNC41MTE3IDMyLjIxMjQgMjUuMjA4QzMyLjU2NjkgMjUuNzUyIDMyLjg5MDEgMjYuMzEyIDMzLjExMDQgMjYuOTUyMUMzMy4yNDQ2IDI3LjM1MjEgMzMuMDcxMyAyNy42ODAyIDMyLjYwNjQgMjcuODc5OVpcXFwiIGZpbGw9XFxcIlwiICsgY29sb3IgKyBcIlxcXCIgZmlsbC1vcGFjaXR5PVxcXCIxXFxcIiBmaWxsLXJ1bGU9XFxcIm5vbnplcm9cXFwiLz48L3N2Zz5cIlxufVxuIiwgIi8qKlxuICogZHNoLW1hbGtvLXByZWZzIFx1MjAxNCB0YWIgc3RhdHVzIGxpZ2h0ICsgYnJvd3NlciBub3RpZmljYXRpb25zIChicm93c2VyIGhhbGYpLlxuICpcbiAqIFBvcnRlZCBmcm9tIGRzaC1ub3RpY2UtY2VudGVyIChNSVQpLiBUaGUgdGFiIGZhdmljb24gdHVybnMgZ3JlZW4gd2hlbiBhIG1haW5cbiAqIHNlc3Npb24gZmluaXNoZWQgd2hpbGUgeW91IHdlcmUgYXdheSBhbmQgYW1iZXIgd2hpbGUgYSBzZXNzaW9uIGF3YWl0cyBhblxuICogaW50ZXJhY3Rpb24gKGFtYmVyIHdpbnMpLCBhbmQgdGhlIGJyb3dzZXIgcmFpc2VzIGEgbm90aWZpY2F0aW9uIG9uIGNvbXBsZXRpb25cbiAqIG9yIG9uIGEgbmV3IHBlbmRpbmcgcXVlc3Rpb24gLyBhcHByb3ZhbCAvIHBsYW4gcmV2aWV3LlxuICpcbiAqIEl0IHJlYWRzIHRoZSBvZmZpY2lhbCBjbGllbnQgc2lnbmFscyBcdTIwMTQgYHNlc3Npb25zYCByb3dzIHBsdXMgdGhlIG9wdGlvbmFsXG4gKiBgdWlTZXNzaW9uLnNlc3Npb25TdGF0dXNgIHN0b3JlIFx1MjAxNCBhbmQgdGhlIGBtYWxrby1wcmVmc2AgY29uZmlnIGZvcm0uIEl0IG93bnNcbiAqIG5vIHN0YXRlIGJleW9uZCBpbi1tZW1vcnkgYm9va2tlZXBpbmcgYW5kIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBmYXZpY29uIG9uXG4gKiB0ZWFyZG93bi5cbiAqL1xuaW1wb3J0IHsgd2hhbGVTdmcgfSBmcm9tICcuL3doYWxlLnRzJ1xuXG4vKiogU2V0dGluZ3MvbG9jYWxlIG5hbWVzcGFjZSBzaGFyZWQgd2l0aCB0aGUgc2V0dGluZ3MgcGFnZS4gKi9cbmV4cG9ydCBjb25zdCBMT0NBTEVfTlMgPSAnc2V0dGluZ3MubWFsa28tcHJlZnMnXG5cbmNvbnN0IERFRkFVTFRfSFJFRiA9ICcvZmF2aWNvbi5zdmcnXG5jb25zdCBERUZBVUxUX0dSRUVOID0gJyMyMkM1NUUnXG5jb25zdCBERUZBVUxUX0FNQkVSID0gJyNGNTlFMEInXG5jb25zdCBERUZBVUxUX1dPUktJTkcgPSAnIzNCODJGNidcbmNvbnN0IEhFWCA9IC9eI1swLTlhLWZBLUZdezZ9JC9cbi8qKiBUb29sLW5hbWUgY2FwOiBsb25nZXIgbmFtZXMgd291bGQgYmxvdyB0aGUgbm90aWZpY2F0aW9uIGJvZHkncyBzaW5nbGUgbGluZS4gKi9cbmNvbnN0IFRPT0xfTkFNRV9MSU1JVCA9IDMyXG5cbi8qKlxuICogQnJvd3NlciBub3RpZmljYXRpb24gYXZhaWxhYmlsaXR5LlxuICogQHJldHVybnMgeydncmFudGVkJyB8ICdkZW5pZWQnIHwgJ2RlZmF1bHQnIHwgJ3Vuc3VwcG9ydGVkJ31cbiAqL1xuZnVuY3Rpb24gbm90aWZpY2F0aW9uU3VwcG9ydCgpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSAnc3RyaW5nJykgcmV0dXJuICd1bnN1cHBvcnRlZCdcbiAgICByZXR1cm4gTm90aWZpY2F0aW9uLnBlcm1pc3Npb25cbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuICd1bnN1cHBvcnRlZCdcbiAgfVxufVxuXG4vKiogQXNrIGZvciBwZXJtaXNzaW9uIChvbmx5IHdoZW4gdGhlIGJyb3dzZXIgaGFzIG5vdCBkZWNpZGVkIHlldCkuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBOb3RpZmljYXRpb24gPT09ICd1bmRlZmluZWQnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCd1bnN1cHBvcnRlZCcpXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSAnZGVmYXVsdCcpIHJldHVybiBQcm9taXNlLnJlc29sdmUoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24pXG4gICAgY29uc3QgYW5zd2VyID0gTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAgICByZXR1cm4gYW5zd2VyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGFuc3dlci50aGVuID09PSAnZnVuY3Rpb24nID8gYW5zd2VyIDogUHJvbWlzZS5yZXNvbHZlKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vdGlmaWNhdGlvblN1cHBvcnQoKSlcbiAgfVxufVxuXG4vKiogQ3VycmVudCBwZXJtaXNzaW9uIHN0cmluZywgZm9yIHRoZSBzZXR0aW5ncyBwYWdlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkge1xuICByZXR1cm4gbm90aWZpY2F0aW9uU3VwcG9ydCgpXG59XG5cbi8qKiBTdGF0aWMgcm91dGUgdGhlIEhvc3Qgc2VydmVzIHRoZSBidW5kbGVkIHNvdW5kcyBmcm9tLiAqL1xuZXhwb3J0IGNvbnN0IFNPVU5EX1JPVVRFID0gJy9tYWxrby1wcmVmcy1zb3VuZHMnXG4vKiogU2VudGluZWwgbWVhbmluZyBcInBsYXkgbm90aGluZ1wiLiAqL1xuZXhwb3J0IGNvbnN0IFNPVU5EX05PTkUgPSAnbm9uZSdcbi8qKiBCdWlsdC1pbiBzeW50aGVzaXplZCBjaGltZXMgKG5vIGFzc2V0IGZpbGUgbmVlZGVkKS4gKi9cbmV4cG9ydCBjb25zdCBCVUlMVElOX1NPVU5EUyA9IFtcbiAgeyBpZDogJ2J1aWx0aW4tdXAnLCBsYWJlbEtleTogJ3NvdW5kQnVpbHRpblVwJyB9LFxuICB7IGlkOiAnYnVpbHRpbi1kb3duJywgbGFiZWxLZXk6ICdzb3VuZEJ1aWx0aW5Eb3duJyB9LFxuXVxuLyoqIG9wZW5jb2RlIHNvdW5kIHBhY2tzIGJ1bmRsZWQgdW5kZXIgYGFzc2V0cy9hdWRpb2AgKE1JVCkuICovXG5leHBvcnQgY29uc3QgU09VTkRfUEFDS1MgPSBbXG4gIHsgbmFtZTogJ0FsZXJ0JywgcHJlZml4OiAnYWxlcnQnLCBjb3VudDogMTAgfSxcbiAgeyBuYW1lOiAnQmlwLWJvcCcsIHByZWZpeDogJ2JpcC1ib3AnLCBjb3VudDogMTAgfSxcbiAgeyBuYW1lOiAnU3RhcGxlYm9wcycsIHByZWZpeDogJ3N0YXBsZWJvcHMnLCBjb3VudDogNyB9LFxuICB7IG5hbWU6ICdOb3BlJywgcHJlZml4OiAnbm9wZScsIGNvdW50OiAxMiB9LFxuICB7IG5hbWU6ICdZdXAnLCBwcmVmaXg6ICd5dXAnLCBjb3VudDogNiB9LFxuXVxuXG4vKiogU291bmQgaWRzIG9mIG9uZSBwYWNrLCBpbiBkaXNwbGF5IG9yZGVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhY2tTb3VuZElkcyhwYWNrKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwYWNrLmNvdW50IH0sIChfLCBpKSA9PiBgJHtwYWNrLnByZWZpeH0tJHtTdHJpbmcoaSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9YClcbn1cblxuLyoqIENsYW1wIGFuIGFyYml0cmFyeSB2b2x1bWUgdG8gMFx1MjAxMzEgKGRlZmF1bHQgMC42KS4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZvbHVtZSh2b2x1bWUpIHtcbiAgaWYgKHR5cGVvZiB2b2x1bWUgIT09ICdudW1iZXInIHx8ICFOdW1iZXIuaXNGaW5pdGUodm9sdW1lKSkgcmV0dXJuIDAuNlxuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodm9sdW1lLCAwKSwgMSlcbn1cblxuLyoqIFNoYXJlZCBBdWRpb0NvbnRleHQgZm9yIHRoZSBzeW50aGVzaXplZCBjaGltZXMuICovXG5sZXQgY2hpbWVDb250ZXh0XG5mdW5jdGlvbiBjaGltZUF1ZGlvQ29udGV4dCgpIHtcbiAgaWYgKGNoaW1lQ29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gY2hpbWVDb250ZXh0XG4gIHRyeSB7XG4gICAgY29uc3QgQ3RvciA9IHdpbmRvdy5BdWRpb0NvbnRleHQgPz8gd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dFxuICAgIGNoaW1lQ29udGV4dCA9IEN0b3IgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBuZXcgQ3RvcigpXG4gIH0gY2F0Y2gge1xuICAgIGNoaW1lQ29udGV4dCA9IG51bGxcbiAgfVxuICByZXR1cm4gY2hpbWVDb250ZXh0XG59XG5cbi8qKiBSZXN1bWUgdGhlIGF1ZGlvIGNvbnRleHQgaW5zaWRlIGEgdXNlciBnZXN0dXJlIChhdXRvcGxheSBwb2xpY3kpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW1lU291bmQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXVkaW8gPSBjaGltZUF1ZGlvQ29udGV4dCgpXG4gICAgaWYgKGF1ZGlvICE9PSBudWxsICYmIGF1ZGlvLnN0YXRlID09PSAnc3VzcGVuZGVkJykgYXVkaW8ucmVzdW1lPy4oKVxuICB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbn1cblxuLyoqIFN5bnRoZXNpemVkIGNoaW1lOiB1cCAoZG9uZSkgb3IgZG93biAocGVuZGluZykuICovXG5mdW5jdGlvbiBwbGF5Q2hpbWUoa2luZCwgdm9sdW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbGV2ZWwgPSBub3JtYWxpemVWb2x1bWUodm9sdW1lKVxuICAgIGlmIChsZXZlbCA8PSAwKSByZXR1cm5cbiAgICBjb25zdCBhdWRpbyA9IGNoaW1lQXVkaW9Db250ZXh0KClcbiAgICBpZiAoYXVkaW8gPT09IG51bGwpIHJldHVyblxuICAgIGlmIChhdWRpby5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIGF1ZGlvLnJlc3VtZT8uKClcbiAgICBjb25zdCBub3RlcyA9IGtpbmQgPT09ICdkb25lJyA/IFs2NjAsIDk5MF0gOiBbODgwLCA1ODddXG4gICAgY29uc3QgYmFzZSA9IGF1ZGlvLmN1cnJlbnRUaW1lXG4gICAgbm90ZXMuZm9yRWFjaCgoZnJlcXVlbmN5LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3NjaWxsYXRvciA9IGF1ZGlvLmNyZWF0ZU9zY2lsbGF0b3IoKVxuICAgICAgY29uc3QgZ2FpbiA9IGF1ZGlvLmNyZWF0ZUdhaW4oKVxuICAgICAgY29uc3Qgc3RhcnQgPSBiYXNlICsgaW5kZXggKiAwLjE0XG4gICAgICBvc2NpbGxhdG9yLnR5cGUgPSAnc2luZSdcbiAgICAgIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gZnJlcXVlbmN5XG4gICAgICBnYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDAxLCBzdGFydClcbiAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMTIgKiBsZXZlbCwgc3RhcnQgKyAwLjAyKVxuICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDAxLCBzdGFydCArIDAuMTgpXG4gICAgICBvc2NpbGxhdG9yLmNvbm5lY3QoZ2FpbilcbiAgICAgIGdhaW4uY29ubmVjdChhdWRpby5kZXN0aW5hdGlvbilcbiAgICAgIG9zY2lsbGF0b3Iuc3RhcnQoc3RhcnQpXG4gICAgICBvc2NpbGxhdG9yLnN0b3Aoc3RhcnQgKyAwLjIpXG4gICAgfSlcbiAgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG59XG5cbi8qKiBFbGVtZW50IGN1cnJlbnRseSBwbGF5aW5nLCBzbyBvdmVybGFwcGluZyBzb3VuZHMgZG8gbm90IHN0YWNrLiAqL1xubGV0IGFjdGl2ZVNvdW5kID0gbnVsbFxuZnVuY3Rpb24gc3RvcFNvdW5kKCkge1xuICBjb25zdCBhdWRpbyA9IGFjdGl2ZVNvdW5kXG4gIGFjdGl2ZVNvdW5kID0gbnVsbFxuICBpZiAoYXVkaW8gPT09IG51bGwpIHJldHVyblxuICB0cnkgeyBhdWRpby5wYXVzZSgpOyBhdWRpby5jdXJyZW50VGltZSA9IDAgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG59XG5cbi8qKlxuICogUGxheSBhIHNvdW5kIGlkOiBgYnVpbHRpbi0qYCBpcyBzeW50aGVzaXplZCwgYSBwYWNrIGlkIHN0cmVhbXMgdGhlIEhvc3Qnc1xuICogYnVuZGxlZCBtcDMgYW5kIGZhbGxzIGJhY2sgdG8gdGhlIHN5bnRoZXNpemVkIGNoaW1lIHdoZW4gdW5hdmFpbGFibGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgc291bmQgaWQgKGBub25lYCA9IHNpbGVuY2UpLlxuICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZSAwXHUyMDEzMS5cbiAqIEBwYXJhbSB7J2RvbmUnIHwgJ3BlbmRpbmcnfSBraW5kIGRyaXZlcyB0aGUgZmFsbGJhY2sgY2hpbWUncyBwaXRjaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBsYXlTb3VuZChpZCwgdm9sdW1lLCBraW5kKSB7XG4gIGNvbnN0IGxldmVsID0gbm9ybWFsaXplVm9sdW1lKHZvbHVtZSlcbiAgaWYgKGxldmVsIDw9IDApIHJldHVyblxuICBjb25zdCBuYW1lID0gdHlwZW9mIGlkID09PSAnc3RyaW5nJyA/IGlkIDogJydcbiAgaWYgKG5hbWUgPT09ICcnIHx8IG5hbWUgPT09IFNPVU5EX05PTkUpIHJldHVyblxuICBzdG9wU291bmQoKVxuICBpZiAobmFtZS5zdGFydHNXaXRoKCdidWlsdGluLScpKSB7XG4gICAgcGxheUNoaW1lKG5hbWUgPT09ICdidWlsdGluLXVwJyA/ICdkb25lJyA6IG5hbWUgPT09ICdidWlsdGluLWRvd24nID8gJ3BlbmRpbmcnIDoga2luZCwgbGV2ZWwpXG4gICAgcmV0dXJuXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhTT1VORF9ST1VURSArICcvJyArIG5hbWUgKyAnLm1wMycpXG4gICAgYXVkaW8udm9sdW1lID0gbGV2ZWxcbiAgICBhY3RpdmVTb3VuZCA9IGF1ZGlvXG4gICAgY29uc3QgcGxheWVkID0gYXVkaW8ucGxheSgpXG4gICAgaWYgKHBsYXllZCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwbGF5ZWQuY2F0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsYXllZC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVTb3VuZCA9PT0gYXVkaW8pIGFjdGl2ZVNvdW5kID0gbnVsbFxuICAgICAgICBwbGF5Q2hpbWUoa2luZCwgbGV2ZWwpXG4gICAgICB9KVxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgcGxheUNoaW1lKGtpbmQsIGxldmVsKVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIHNlc3Npb24gc2lnbmFscyBhbmQgZHJpdmUgdGhlIHRhYiBpY29uICsgbm90aWZpY2F0aW9ucy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBjdHggY2xpZW50IHBsdWdpbiBjb250ZXh0IChuZWVkcyBgc2Vzc2lvbnNgLCBgbG9jYWxlYCkuXG4gKiBAcGFyYW0ge29iamVjdH0gZm9ybSB0aGUgYG1hbGtvLXByZWZzYCBjb25maWcgZm9ybSAoc25hcHNob3QgKyBzdWJzY3JpYmUpLlxuICogQHJldHVybnMgeygpID0+IHZvaWR9IGRpc3Bvc2VyIHJlc3RvcmluZyB0aGUgZmF2aWNvbiBhbmQgcmVtb3ZpbmcgbGlzdGVuZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdGF0dXNMaWdodChjdHgsIGZvcm0pIHtcbiAgY29uc3QgbGlzdCA9IGN0eC5zZXNzaW9ucy5saXN0XG4gIGNvbnN0IGxvY2FsZSA9ICgpID0+IGN0eC5sb2NhbGUuYmluZChMT0NBTEVfTlMpXG4gIC8qKiBPcHRpb25hbCBvZmZpY2lhbCBzdGF0dXMgc291cmNlICgwLjEuNyspOyByb3dzIGtlZXAgdGhlaXIgbGVnYWN5IGZpZWxkcyBvdGhlcndpc2UuICovXG4gIGxldCBzdGF0dXNTb3VyY2VcbiAgLyoqIERlZHVwZSBrZXlzIChgc2Vzc2lvbklkOmtpbmRgKSBhbHJlYWR5IHF1ZXVlZC4gKi9cbiAgY29uc3Qgbm90aWZpZWQgPSBuZXcgU2V0KClcbiAgLyoqIEFnZ3JlZ2F0aW9uIHdpbmRvdyBzbyBhIGJ1cnN0IG9mIHRyYW5zaXRpb25zIGJlY29tZXMgb25lIG5vdGlmaWNhdGlvbi4gKi9cbiAgY29uc3Qgbm90aWZ5UXVldWUgPSBuZXcgTWFwKClcbiAgbGV0IG5vdGlmeVRpbWVyXG4gIC8qKiBMYXN0IG9ic2VydmVkIGNvbXBsZXRpb24gc3RhdGUgcGVyIHNlc3Npb24gKGZhbHNlIFx1MjE5MiB0cnVlIGVkZ2UgZGV0ZWN0aW9uKS4gKi9cbiAgY29uc3QgcHJldkNvbXBsZXRlZCA9IG5ldyBNYXAoKVxuICAvKiogUnVuIHN0YXJ0IHBlciBzZXNzaW9uLCB0aGVuIHRoZSBsYXN0IHJ1biBkdXJhdGlvbiAobXMpLiAqL1xuICBjb25zdCBydW5TdGFydGVkQXQgPSBuZXcgTWFwKClcbiAgY29uc3QgbGFzdFJ1bk1zID0gbmV3IE1hcCgpXG4gIGxldCBwcmV2UGVuZGluZyA9IG5ldyBTZXQoKVxuICBsZXQgcGVuZGluZ1NlZW4gPSBmYWxzZVxuXG4gIC8qKiBSZWFsbHkgaW4gdGhlIGZvcmVncm91bmQ6IHRhYiB2aXNpYmxlIEFORCB3aW5kb3cgZm9jdXNlZC4gKi9cbiAgY29uc3QgaXNGb3JlZ3JvdW5kID0gKCkgPT4gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAndmlzaWJsZScgJiYgZG9jdW1lbnQuaGFzRm9jdXMoKVxuXG4gIC8qKiBSZWFkIHRoZSBub3RpZmljYXRpb24vY29sb3IgcHJlZmVyZW5jZXMgKHVuc2V0IGZhbGxzIGJhY2sgdG8gZGVmYXVsdHMpLiAqL1xuICBmdW5jdGlvbiByZWFkQ29uZmlnKCkge1xuICAgIGNvbnN0IHZhbHVlID0gZm9ybS5nZXRTbmFwc2hvdCgpLnZhbHVlID8/IHt9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yc0VuYWJsZWQ6IHZhbHVlLmNvbG9yc0VuYWJsZWQgIT09IGZhbHNlLFxuICAgICAgZ3JlZW46IEhFWC50ZXN0KHZhbHVlLmdyZWVuKSA/IHZhbHVlLmdyZWVuIDogREVGQVVMVF9HUkVFTixcbiAgICAgIGFtYmVyOiBIRVgudGVzdCh2YWx1ZS5hbWJlcikgPyB2YWx1ZS5hbWJlciA6IERFRkFVTFRfQU1CRVIsXG4gICAgICB3b3JraW5nOiBIRVgudGVzdCh2YWx1ZS53b3JraW5nKSA/IHZhbHVlLndvcmtpbmcgOiBERUZBVUxUX1dPUktJTkcsXG4gICAgICBibGFjazogSEVYLnRlc3QodmFsdWUuYmxhY2spID8gdmFsdWUuYmxhY2sgOiB1bmRlZmluZWQsXG4gICAgICBub3RpZnlFbmFibGVkOiB2YWx1ZS5ub3RpZnlFbmFibGVkID09PSB0cnVlLFxuICAgICAgbm90aWZ5Rm9yZWdyb3VuZDogdmFsdWUubm90aWZ5Rm9yZWdyb3VuZCA9PT0gdHJ1ZSxcbiAgICAgIGRvbmVFbmFibGVkOiB2YWx1ZS5ub3RpZnlEb25lRW5hYmxlZCAhPT0gZmFsc2UsXG4gICAgICBkb25lUGVyc2lzdGVudDogdmFsdWUubm90aWZ5RG9uZVBlcnNpc3RlbnQgPT09IHRydWUsXG4gICAgICBwZW5kaW5nRW5hYmxlZDogdmFsdWUubm90aWZ5UGVuZGluZ0VuYWJsZWQgIT09IGZhbHNlLFxuICAgICAgcGVuZGluZ1BlcnNpc3RlbnQ6IHZhbHVlLm5vdGlmeVBlbmRpbmdQZXJzaXN0ZW50ID09PSB0cnVlLFxuICAgICAgdm9sdW1lOiBub3JtYWxpemVWb2x1bWUodmFsdWUubm90aWZ5Vm9sdW1lID8/IDAuNiksXG4gICAgICBkb25lU291bmQ6IHR5cGVvZiB2YWx1ZS5ub3RpZnlEb25lU291bmQgPT09ICdzdHJpbmcnID8gdmFsdWUubm90aWZ5RG9uZVNvdW5kIDogU09VTkRfTk9ORSxcbiAgICAgIHBlbmRpbmdTb3VuZDogdHlwZW9mIHZhbHVlLm5vdGlmeVBlbmRpbmdTb3VuZCA9PT0gJ3N0cmluZycgPyB2YWx1ZS5ub3RpZnlQZW5kaW5nU291bmQgOiBTT1VORF9OT05FLFxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBmYXZpY29uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBEU0ggc2hpcHMgdHdvIGljb24gbGlua3MgKGRhcmsvbGlnaHQgdmlhIGBtZWRpYWApOyB0aGUgYnJvd3NlciBwaWNrcyBvbmUgYnlcbiAgLy8gdGhlIE9TIGNvbG9yIHNjaGVtZSwgc28gZXZlcnkgbGluayBtdXN0IGJlIHBhaW50ZWQgYW5kIHJlc3RvcmVkIHRvZ2V0aGVyLlxuICBjb25zdCBpY29uTGlua3MgPSAoKSA9PiBbLi4uZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbH49XCJpY29uXCJdJyldXG4gIC8qKiBPcmlnaW5hbCBocmVmIG9mIGVhY2ggbGluayB3ZSBoYXZlIHRvdWNoZWQgKHJlc3RvcmUgdGFyZ2V0KS4gKi9cbiAgY29uc3Qgb3JpZ2luYWxIcmVmcyA9IG5ldyBNYXAoKVxuICBjb25zdCByZW1lbWJlckxpbmtzID0gKCkgPT4ge1xuICAgIGZvciAoY29uc3QgbGluayBvZiBpY29uTGlua3MoKSkgaWYgKCFvcmlnaW5hbEhyZWZzLmhhcyhsaW5rKSkgb3JpZ2luYWxIcmVmcy5zZXQobGluaywgbGluay5ocmVmKVxuICB9XG4gIHJlbWVtYmVyTGlua3MoKVxuICBjb25zdCBwYWludCA9IChocmVmKSA9PiB7IGZvciAoY29uc3QgbGluayBvZiBvcmlnaW5hbEhyZWZzLmtleXMoKSkgbGluay5ocmVmID0gaHJlZiB9XG4gIC8qKiBMYXN0IGhyZWYgd2Ugc2V0OyBudWxsID0gb2ZmaWNpYWwgaWNvbnMuICovXG4gIGxldCBhcHBsaWVkID0gbnVsbFxuICBjb25zdCB1cmkgPSAoaGV4KSA9PiBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHdoYWxlU3ZnKGhleCkpfWBcbiAgY29uc3QgcmVzdG9yZSA9ICgpID0+IHtcbiAgICBpZiAoYXBwbGllZCA9PT0gbnVsbCkgcmV0dXJuXG4gICAgZm9yIChjb25zdCBbbGluaywgaHJlZl0gb2Ygb3JpZ2luYWxIcmVmcykgbGluay5ocmVmID0gaHJlZlxuICAgIGFwcGxpZWQgPSBudWxsXG4gIH1cbiAgLy8gVGhlIGFwcGxpY2F0aW9uIG1heSByZS1jcmVhdGUgdGhlIGljb24gbGlua3M7IHBpY2sgbmV3IG9uZXMgdXAgKGFuZCByZXBhaW50XG4gIC8vIHRoZW0gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSwgd2hpY2ggdGhlIGBhcHBsaWVkYCBndWFyZCB3b3VsZCBvdGhlcndpc2Ugc2tpcCkuXG4gIGNvbnN0IGljb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICBjb25zdCBiZWZvcmUgPSBvcmlnaW5hbEhyZWZzLnNpemVcbiAgICByZW1lbWJlckxpbmtzKClcbiAgICBpZiAob3JpZ2luYWxIcmVmcy5zaXplICE9PSBiZWZvcmUpIHsgYXBwbGllZCA9IG51bGw7IHN5bmMoKSB9XG4gIH0pXG4gIGljb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmhlYWQsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG5cbiAgLy8gLS0tIG5vdGlmaWNhdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IFBFTkRJTkdfS0lORF9LRVlTID0ge1xuICAgIGFwcHJvdmFsOiAncGVuZGluZ0tpbmRBcHByb3ZhbCcsXG4gICAgcXVlc3Rpb246ICdwZW5kaW5nS2luZFF1ZXN0aW9uJyxcbiAgICAncGxhbi1yZXZpZXcnOiAncGVuZGluZ0tpbmRQbGFuUmV2aWV3JyxcbiAgfVxuXG4gIC8qKiBQZW5kaW5nIGludGVyYWN0aW9uIFx1MjE5MiBub3RpZmljYXRpb24gYm9keSB0ZXh0IChkZWZlbnNpdmUgcmVhZHMpLiAqL1xuICBmdW5jdGlvbiBwZW5kaW5nVHlwZUxhYmVsKGludGVyYWN0aW9uKSB7XG4gICAgY29uc3QgdCA9IGxvY2FsZSgpXG4gICAgY29uc3Qga2luZCA9IGludGVyYWN0aW9uPy5raW5kXG4gICAgaWYgKGtpbmQgPT09ICdhcHByb3ZhbCcpIHtcbiAgICAgIGNvbnN0IHRvb2wgPSBpbnRlcmFjdGlvbi50b29sTmFtZVxuICAgICAgaWYgKHR5cGVvZiB0b29sICE9PSAnc3RyaW5nJyB8fCB0b29sID09PSAnJykgcmV0dXJuIHQoJ3BlbmRpbmdLaW5kQXBwcm92YWwnKVxuICAgICAgY29uc3Qgc2hvd24gPSB0b29sLmxlbmd0aCA+IFRPT0xfTkFNRV9MSU1JVCA/IHRvb2wuc2xpY2UoMCwgVE9PTF9OQU1FX0xJTUlUKSArICdcdTIwMjYnIDogdG9vbFxuICAgICAgcmV0dXJuIHQoJ3BlbmRpbmdBcHByb3ZhbFRvb2wnLCB7IHRvb2w6IHNob3duIH0pXG4gICAgfVxuICAgIGlmIChraW5kID09PSAncXVlc3Rpb24nKSB7XG4gICAgICBjb25zdCBxdWVzdGlvbnMgPSBBcnJheS5pc0FycmF5KGludGVyYWN0aW9uLnF1ZXN0aW9ucykgPyBpbnRlcmFjdGlvbi5xdWVzdGlvbnMgOiBbXVxuICAgICAgaWYgKHF1ZXN0aW9ucy5sZW5ndGggPiAxKSByZXR1cm4gdCgncGVuZGluZ1F1ZXN0aW9uQmF0Y2gnLCB7IGNvdW50OiBxdWVzdGlvbnMubGVuZ3RoIH0pXG4gICAgICBjb25zdCBmaXJzdCA9IHF1ZXN0aW9uc1swXVxuICAgICAgaWYgKGZpcnN0ID09PSBudWxsIHx8IHR5cGVvZiBmaXJzdCAhPT0gJ29iamVjdCcpIHJldHVybiB0KCdwZW5kaW5nS2luZFF1ZXN0aW9uJylcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBBcnJheS5pc0FycmF5KGZpcnN0Lm9wdGlvbnMpID8gZmlyc3Qub3B0aW9ucyA6IFtdXG4gICAgICBpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHJldHVybiB0KCdwZW5kaW5nUXVlc3Rpb25GaWxsJylcbiAgICAgIHJldHVybiBmaXJzdC5tdWx0aVNlbGVjdCA9PT0gdHJ1ZSA/IHQoJ3BlbmRpbmdRdWVzdGlvbk11bHRpJykgOiB0KCdwZW5kaW5nUXVlc3Rpb25DaG9vc2UnKVxuICAgIH1cbiAgICBjb25zdCBrZXkgPSBQRU5ESU5HX0tJTkRfS0VZU1traW5kXVxuICAgIHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHQoa2V5KVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBvbmUgc2Vzc2lvbiBldmVudCAob25jZSBwZXIgZGVkdXBlZCBlZGdlKTogcGxheSB0aGUgY2hvc2VuIHNvdW5kXG4gICAqIChpbmRlcGVuZGVudCBvZiB0aGUgbm90aWZpY2F0aW9uIHN3aXRjaGVzKSBhbmQsIHdoZW4gbm90aWZpY2F0aW9ucyBmb3JcbiAgICogdGhpcyB0eXBlIGFyZSBvbiwgZW5xdWV1ZSB0aGUgYmFubmVyLlxuICAgKiBAcGFyYW0ga2luZCAtIGAnZG9uZSdgIHwgYCdwZW5kaW5nJ2AuXG4gICAqIEBwYXJhbSBzZXNzaW9uSWQgLSB0aGUgc2Vzc2lvbiB0aGUgZXZlbnQgYmVsb25ncyB0by5cbiAgICogQHBhcmFtIGxhYmVsIC0gc2Vzc2lvbiBkaXNwbGF5IG5hbWUgKG5vdGlmaWNhdGlvbiB0aXRsZSkuXG4gICAqIEBwYXJhbSB0eXBlTGFiZWwgLSBub3RpZmljYXRpb24gYm9keSBmb3IgYHBlbmRpbmdgLlxuICAgKiBAcGFyYW0gZHVyYXRpb25NcyAtIHR1cm4gZHVyYXRpb24gZm9yIGBkb25lYCwgd2hlbiBrbm93bi5cbiAgICovXG4gIGZ1bmN0aW9uIGVtaXRFdmVudChraW5kLCBzZXNzaW9uSWQsIGxhYmVsLCB0eXBlTGFiZWwsIGR1cmF0aW9uTXMpIHtcbiAgICBjb25zdCBrZXkgPSBzZXNzaW9uSWQgKyAnOicgKyBraW5kXG4gICAgaWYgKG5vdGlmaWVkLmhhcyhrZXkpKSByZXR1cm5cbiAgICBub3RpZmllZC5hZGQoa2V5KVxuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKVxuICAgIC8vIFNvdW5kIGlzIGRlY291cGxlZDogd2hlbmV2ZXIgb25lIGlzIGNvbmZpZ3VyZWQgZm9yIHRoaXMgdHlwZSBpdCBwbGF5cyxcbiAgICAvLyByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIGJhbm5lciBpcyBlbmFibGVkLlxuICAgIGNvbnN0IHNvdW5kSWQgPSBraW5kID09PSAnZG9uZScgPyBjb25maWcuZG9uZVNvdW5kIDogY29uZmlnLnBlbmRpbmdTb3VuZFxuICAgIGlmIChzb3VuZElkICE9PSBTT1VORF9OT05FKSBwbGF5U291bmQoc291bmRJZCwgY29uZmlnLnZvbHVtZSwga2luZClcbiAgICBpZiAoIWNvbmZpZy5ub3RpZnlFbmFibGVkKSByZXR1cm5cbiAgICBpZiAoa2luZCA9PT0gJ2RvbmUnICYmICFjb25maWcuZG9uZUVuYWJsZWQpIHJldHVyblxuICAgIGlmIChraW5kID09PSAncGVuZGluZycgJiYgIWNvbmZpZy5wZW5kaW5nRW5hYmxlZCkgcmV0dXJuXG4gICAgbm90aWZ5UXVldWUuc2V0KGtleSwgeyBraW5kLCBzZXNzaW9uSWQsIGxhYmVsLCB0eXBlTGFiZWwsIGR1cmF0aW9uTXMgfSlcbiAgICBpZiAobm90aWZ5VGltZXIgPT09IHVuZGVmaW5lZCkgbm90aWZ5VGltZXIgPSBzZXRUaW1lb3V0KGZsdXNoTm90aWZpY2F0aW9ucywgMzAwKVxuICB9XG5cbiAgLyoqIEZsdXNoIHRoZSBhZ2dyZWdhdGlvbiB3aW5kb3cgaW50byBicm93c2VyIG5vdGlmaWNhdGlvbnMuICovXG4gIGZ1bmN0aW9uIGZsdXNoTm90aWZpY2F0aW9ucygpIHtcbiAgICBub3RpZnlUaW1lciA9IHVuZGVmaW5lZFxuICAgIGNvbnN0IGVudHJpZXMgPSBbLi4ubm90aWZ5UXVldWUudmFsdWVzKCldXG4gICAgbm90aWZ5UXVldWUuY2xlYXIoKVxuICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgaWYgKG5vdGlmaWNhdGlvblN1cHBvcnQoKSAhPT0gJ2dyYW50ZWQnKSByZXR1cm5cbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKClcbiAgICBpZiAoIWNvbmZpZy5ub3RpZnlGb3JlZ3JvdW5kICYmIGlzRm9yZWdyb3VuZCgpKSByZXR1cm5cbiAgICBjb25zdCB0ID0gbG9jYWxlKClcbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcCgpXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCBidWNrZXQgPSBncm91cGVkLmdldChlbnRyeS5raW5kKSA/PyBbXVxuICAgICAgYnVja2V0LnB1c2goZW50cnkpXG4gICAgICBncm91cGVkLnNldChlbnRyeS5raW5kLCBidWNrZXQpXG4gICAgfVxuICAgIGZvciAoY29uc3QgW2tpbmQsIGJ1Y2tldF0gb2YgZ3JvdXBlZCkge1xuICAgICAgY29uc3QgaGVhZCA9IGJ1Y2tldFswXVxuICAgICAgY29uc3QgZXh0cmEgPSBidWNrZXQubGVuZ3RoIC0gMVxuICAgICAgbGV0IHRpdGxlID0gaGVhZC5sYWJlbCA/PyBoZWFkLnNlc3Npb25JZFxuICAgICAgaWYgKGV4dHJhID4gMCkgdGl0bGUgPSB0aXRsZSArICcgKycgKyBTdHJpbmcoZXh0cmEpXG4gICAgICBsZXQgYm9keSA9IGtpbmQgPT09ICdkb25lJyA/IHQoJ25vdGlmeURvbmVUaXRsZScpIDogKGhlYWQudHlwZUxhYmVsID8/IHQoJ25vdGlmeVBlbmRpbmdUaXRsZScpKVxuICAgICAgaWYgKGtpbmQgPT09ICdkb25lJyAmJiBleHRyYSA9PT0gMCAmJiBoZWFkLmR1cmF0aW9uTXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBib2R5ID0gYm9keSArICcgXHUwMEI3ICcgKyB0KCdub3RpZnlEdXJhdGlvbicsIHsgZHVyYXRpb246IGZvcm1hdFJ1bkR1cmF0aW9uKGhlYWQuZHVyYXRpb25NcywgdCkgfSlcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBubyBgdGFnYDogcmV1c2luZyBvbmUgbWFrZXMgc29tZSBwbGF0Zm9ybXMgc2lsZW50bHlcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgcHJldmlvdXMgYmFubmVyIGluc3RlYWQgb2YgcmFpc2luZyBhIG5ldyBvbmUuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24odGl0bGUsIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGljb246IHVyaShraW5kID09PSAnZG9uZScgPyBjb25maWcuZ3JlZW4gOiBjb25maWcuYW1iZXIpLFxuICAgICAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjoga2luZCA9PT0gJ2RvbmUnID8gY29uZmlnLmRvbmVQZXJzaXN0ZW50IDogY29uZmlnLnBlbmRpbmdQZXJzaXN0ZW50LFxuICAgICAgICB9KVxuICAgICAgICBub3RpZmljYXRpb24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICB0cnkgeyB3aW5kb3cuZm9jdXMoKSB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd29ya3NwYWNlID0gY3R4LmdldCgndWlXb3Jrc3BhY2UnKVxuICAgICAgICAgICAgaWYgKHdvcmtzcGFjZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3b3Jrc3BhY2Uub3BlblNlc3Npb24gPT09ICdmdW5jdGlvbicpIHdvcmtzcGFjZS5vcGVuU2Vzc2lvbihoZWFkLnNlc3Npb25JZClcbiAgICAgICAgICAgIGVsc2UgY3R4LnNlc3Npb25zLm9wZW4oaGVhZC5zZXNzaW9uSWQpXG4gICAgICAgICAgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG4gICAgICAgICAgbm90aWZpY2F0aW9uLmNsb3NlKClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbbWFsa28tcHJlZnNdIGNvdWxkIG5vdCByYWlzZSBub3RpZmljYXRpb24nLCBlcnJvcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogNjAgcyByb2xscyBpbnRvIG1pbnV0ZXMsIHNlY29uZHMgemVyby1wYWRkZWQgKG1hdGNoZXMgdGhlIG9mZmljaWFsIGZvcm1hdCkuICovXG4gIGZ1bmN0aW9uIGZvcm1hdFJ1bkR1cmF0aW9uKG1zLCB0KSB7XG4gICAgY29uc3QgdG90YWwgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKG1zIC8gMTAwMCkpXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodG90YWwgLyA2MClcbiAgICBjb25zdCBzZWNvbmRzID0gdG90YWwgJSA2MFxuICAgIHJldHVybiBtaW51dGVzID4gMFxuICAgICAgPyB0KCdkdXJhdGlvbk1pbnV0ZXMnLCB7IG1pbnV0ZXMsIHNlY29uZHM6IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpIH0pXG4gICAgICA6IHQoJ2R1cmF0aW9uU2Vjb25kcycsIHsgc2Vjb25kcyB9KVxuICB9XG5cbiAgLyoqIENvbXBsZXRpb24gLyBwZW5kaW5nIHRyYW5zaXRpb25zIGZyb20gdGhlIHNlc3Npb24gc3RhdGUuICovXG4gIGZ1bmN0aW9uIGRldGVjdFRyYW5zaXRpb25zKHN0YXRlKSB7XG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBjb25zdCBiZWZvcmUgPSBwcmV2Q29tcGxldGVkLmdldChyb3cuaWQpXG4gICAgICBjb25zdCBub3cgPSByb3cuY29tcGxldGVkID09PSB0cnVlXG4gICAgICBpZiAoYmVmb3JlID09PSBmYWxzZSAmJiBub3cpIGVtaXRFdmVudCgnZG9uZScsIHJvdy5pZCwgcm93LmRpc3BsYXlUaXRsZSA/PyByb3cudGl0bGUgPz8gcm93LmlkLCB1bmRlZmluZWQsIGxhc3RSdW5Ncy5nZXQocm93LmlkKSlcbiAgICAgIGlmICghbm93KSBub3RpZmllZC5kZWxldGUocm93LmlkICsgJzpkb25lJylcbiAgICAgIHByZXZDb21wbGV0ZWQuc2V0KHJvdy5pZCwgbm93KVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIFsuLi5wcmV2Q29tcGxldGVkLmtleXMoKV0pIHtcbiAgICAgIGlmICghKGlkIGluIHN0YXRlLmJ5SWQpKSB7IHByZXZDb21wbGV0ZWQuZGVsZXRlKGlkKTsgbm90aWZpZWQuZGVsZXRlKGlkICsgJzpkb25lJykgfVxuICAgIH1cbiAgICBjb25zdCBjdXJyZW50ID0gbmV3IFNldCgpXG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkgaWYgKHJvdy5wZW5kaW5nSW50ZXJhY3Rpb24gIT09IHVuZGVmaW5lZCkgY3VycmVudC5hZGQocm93LmlkKVxuICAgIGlmIChwZW5kaW5nU2Vlbikge1xuICAgICAgZm9yIChjb25zdCBpZCBvZiBjdXJyZW50KSB7XG4gICAgICAgIGlmIChwcmV2UGVuZGluZy5oYXMoaWQpKSBjb250aW51ZVxuICAgICAgICBjb25zdCByb3cgPSBzdGF0ZS5ieUlkW2lkXVxuICAgICAgICBpZiAocm93ICE9PSB1bmRlZmluZWQgJiYgcm93Lm9yaWdpbiA9PT0gJ3N1YmFnZW50JykgY29udGludWVcbiAgICAgICAgY29uc3QgbGFiZWwgPSByb3c/LmRpc3BsYXlUaXRsZSA/PyByb3c/LnRpdGxlID8/IGlkXG4gICAgICAgIGVtaXRFdmVudCgncGVuZGluZycsIGlkLCBsYWJlbCwgcGVuZGluZ1R5cGVMYWJlbChyb3c/LnBlbmRpbmdJbnRlcmFjdGlvbikpXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgcHJldlBlbmRpbmcpIGlmICghY3VycmVudC5oYXMoaWQpKSBub3RpZmllZC5kZWxldGUoaWQgKyAnOnBlbmRpbmcnKVxuICAgIHByZXZQZW5kaW5nID0gY3VycmVudFxuICAgIHBlbmRpbmdTZWVuID0gdHJ1ZVxuICB9XG5cbiAgLyoqIFNlbGYtdHJhY2tlZCBydW5uaW5nIGVkZ2U6IGZpbGxzIHRoZSBnYXAgZm9yIHRoZSBzZXNzaW9uIGJlaW5nIHZpZXdlZC4gKi9cbiAgY29uc3QgcHJldlJ1bm5pbmcgPSBuZXcgTWFwKClcbiAgY29uc3QgZmluaXNoZWRXaGlsZUhpZGRlbiA9IG5ldyBTZXQoKVxuICBmdW5jdGlvbiB0cmFja0VkZ2VzKHN0YXRlKSB7XG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBjb25zdCBwcmV2ID0gcHJldlJ1bm5pbmcuZ2V0KHJvdy5pZClcbiAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHsgcHJldlJ1bm5pbmcuc2V0KHJvdy5pZCwgcm93LnJ1bm5pbmcpOyBjb250aW51ZSB9XG4gICAgICBpZiAoIXByZXYgJiYgcm93LnJ1bm5pbmcpIHJ1blN0YXJ0ZWRBdC5zZXQocm93LmlkLCBEYXRlLm5vdygpKVxuICAgICAgaWYgKHByZXYgJiYgIXJvdy5ydW5uaW5nKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHJ1blN0YXJ0ZWRBdC5nZXQocm93LmlkKVxuICAgICAgICBjb25zdCBlbGFwc2VkID0gc3RhcnRlZEF0ID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBEYXRlLm5vdygpIC0gc3RhcnRlZEF0XG4gICAgICAgIHJ1blN0YXJ0ZWRBdC5kZWxldGUocm93LmlkKVxuICAgICAgICBpZiAoZWxhcHNlZCAhPT0gdW5kZWZpbmVkKSBsYXN0UnVuTXMuc2V0KHJvdy5pZCwgZWxhcHNlZClcbiAgICAgICAgaWYgKHJvdy5pZCA9PT0gc3RhdGUuY3VycmVudCAmJiAhaXNGb3JlZ3JvdW5kKCkpIGZpbmlzaGVkV2hpbGVIaWRkZW4uYWRkKHJvdy5pZClcbiAgICAgICAgaWYgKHJvdy5pZCA9PT0gc3RhdGUuY3VycmVudCkgZW1pdEV2ZW50KCdkb25lJywgcm93LmlkLCByb3cuZGlzcGxheVRpdGxlID8/IHJvdy50aXRsZSA/PyByb3cuaWQsIHVuZGVmaW5lZCwgZWxhcHNlZClcbiAgICAgIH0gZWxzZSBpZiAocm93LnJ1bm5pbmcpIGZpbmlzaGVkV2hpbGVIaWRkZW4uZGVsZXRlKHJvdy5pZClcbiAgICAgIHByZXZSdW5uaW5nLnNldChyb3cuaWQsIHJvdy5ydW5uaW5nKVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIFsuLi5wcmV2UnVubmluZy5rZXlzKCldKSB7XG4gICAgICBpZiAoIShpZCBpbiBzdGF0ZS5ieUlkKSkgeyBwcmV2UnVubmluZy5kZWxldGUoaWQpOyBmaW5pc2hlZFdoaWxlSGlkZGVuLmRlbGV0ZShpZCk7IHJ1blN0YXJ0ZWRBdC5kZWxldGUoaWQpOyBsYXN0UnVuTXMuZGVsZXRlKGlkKSB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEJhY2sgaW4gdGhlIGZvcmVncm91bmQ6IHRoZSB2aWV3ZWQgc2Vzc2lvbidzIGdyZWVuIGxpZ2h0IGNsZWFycy4gKi9cbiAgY29uc3Qgb25Gb3JlZ3JvdW5kID0gKCkgPT4ge1xuICAgIGlmICghaXNGb3JlZ3JvdW5kKCkpIHJldHVyblxuICAgIGlmIChmaW5pc2hlZFdoaWxlSGlkZGVuLnNpemUgPiAwKSB7IGZpbmlzaGVkV2hpbGVIaWRkZW4uY2xlYXIoKTsgc3luYygpIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgdGFiIHN0YXRlIG92ZXIgbWFpbiBzZXNzaW9ucy4gUHJpb3JpdHk6IGFtYmVyIChzb21ldGhpbmcgd2FpdHNcbiAgICogZm9yIHlvdSkgPiB3b3JraW5nIChhIHNlc3Npb24gaXMgZ2VuZXJhdGluZykgPiBncmVlbiAodW5zZWVuIGNvbXBsZXRpb24pXG4gICAqID4gaWRsZS4gUmV0dXJucyBgJ29mZidgIHdoZW4gdGhlIHN0YXR1cyBsaWdodCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGN1cnJlbnRLaW5kKHN0YXRlKSB7XG4gICAgaWYgKCFyZWFkQ29uZmlnKCkuY29sb3JzRW5hYmxlZCkgcmV0dXJuICdvZmYnXG4gICAgbGV0IGdyZWVuID0gZmFsc2VcbiAgICBsZXQgd29ya2luZyA9IGZhbHNlXG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBpZiAocm93LnBlbmRpbmdJbnRlcmFjdGlvbiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gJ2FtYmVyJ1xuICAgICAgaWYgKHJvdy5ydW5uaW5nID09PSB0cnVlKSB3b3JraW5nID0gdHJ1ZVxuICAgICAgaWYgKHJvdy5jb21wbGV0ZWQgPT09IHRydWUgfHwgZmluaXNoZWRXaGlsZUhpZGRlbi5oYXMocm93LmlkKSkgZ3JlZW4gPSB0cnVlXG4gICAgfVxuICAgIGlmICh3b3JraW5nKSByZXR1cm4gJ3dvcmtpbmcnXG4gICAgaWYgKGdyZWVuKSByZXR1cm4gJ2dyZWVuJ1xuICAgIHJldHVybiAnaWRsZSdcbiAgfVxuXG4gIC8qKiBBcHBseSBvbmUgdGFiIHN0YXRlIHRvIHRoZSBmYXZpY29uLiAqL1xuICBmdW5jdGlvbiBhcHBseUtpbmQoa2luZCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKVxuICAgIGlmIChraW5kID09PSAnb2ZmJykgeyByZXN0b3JlKCk7IHJldHVybiB9XG4gICAgY29uc3QgaHJlZiA9IGtpbmQgPT09ICdhbWJlcidcbiAgICAgID8gdXJpKGNvbmZpZy5hbWJlcilcbiAgICAgIDoga2luZCA9PT0gJ3dvcmtpbmcnXG4gICAgICAgID8gdXJpKGNvbmZpZy53b3JraW5nKVxuICAgICAgICA6IGtpbmQgPT09ICdncmVlbidcbiAgICAgICAgICA/IHVyaShjb25maWcuZ3JlZW4pXG4gICAgICAgICAgOiAoY29uZmlnLmJsYWNrID8gdXJpKGNvbmZpZy5ibGFjaykgOiBudWxsKVxuICAgIGlmIChocmVmID09PSBudWxsKSByZXN0b3JlKClcbiAgICBlbHNlIGlmIChhcHBsaWVkICE9PSBocmVmKSB7IHBhaW50KGhyZWYpOyBhcHBsaWVkID0gaHJlZiB9XG4gIH1cblxuICAvKiogTWVyZ2UgdGhlIHNlc3Npb24gcm93cyB3aXRoIHRoZSBvZmZpY2lhbCBzdGF0dXMgc3RvcmUgd2hlbiBhdmFpbGFibGUuICovXG4gIGZ1bmN0aW9uIGJ1aWxkU3RhdGUoKSB7XG4gICAgY29uc3QgbGlzdFN0YXRlID0gbGlzdC5nZXRTbmFwc2hvdCgpXG4gICAgY29uc3Qgc3RhdHVzID0gc3RhdHVzU291cmNlPy5nZXRTbmFwc2hvdCgpXG4gICAgbGV0IGN1cnJlbnQgPSBsaXN0U3RhdGUuY3VycmVudFxuICAgIGNvbnN0IGJ5SWQgPSB7fVxuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMobGlzdFN0YXRlLmJ5SWQpKSB7XG4gICAgICBjb25zdCBzID0gc3RhdHVzPy5nZXQocm93LmlkKVxuICAgICAgaWYgKChyb3cucmV0YWluZWRCeT8ubWFpblZpZXcgPz8gMCkgPiAwKSBjdXJyZW50ID0gcm93LmlkXG4gICAgICBieUlkW3Jvdy5pZF0gPSB7XG4gICAgICAgIC4uLnJvdyxcbiAgICAgICAgcnVubmluZzogcz8ucnVubmluZyA/PyByb3cucnVubmluZyxcbiAgICAgICAgY29tcGxldGVkOiBzPy5jb21wbGV0aW9uVW5yZWFkID8/IHJvdy5jb21wbGV0ZWQgPT09IHRydWUsXG4gICAgICAgIHBlbmRpbmdJbnRlcmFjdGlvbjogcz8ucGVuZGluZ0ludGVyYWN0aW9uID8/IHJvdy5wZW5kaW5nSW50ZXJhY3Rpb24sXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IC4uLmxpc3RTdGF0ZSwgYnlJZCwgY3VycmVudCB9XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jKCkge1xuICAgIGNvbnN0IHN0YXRlID0gYnVpbGRTdGF0ZSgpXG4gICAgdHJhY2tFZGdlcyhzdGF0ZSlcbiAgICBkZXRlY3RUcmFuc2l0aW9ucyhzdGF0ZSlcbiAgICBhcHBseUtpbmQoY3VycmVudEtpbmQoc3RhdGUpKVxuICB9XG5cbiAgY29uc3QgdW5zdWJzY3JpYmVMaXN0ID0gbGlzdC5zdWJzY3JpYmUoc3luYylcbiAgY29uc3QgdW5zdWJzY3JpYmVGb3JtID0gZm9ybS5zdWJzY3JpYmUoc3luYylcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uRm9yZWdyb3VuZClcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb3JlZ3JvdW5kKVxuICBzeW5jKClcblxuICAvLyBPcHRpb25hbCBjaGFubmVsOiB0aGUgb2ZmaWNpYWwgc3RhdHVzIHN0b3JlIChwcmVzZW50IG9uIDAuMS43KykuXG4gIGN0eC5pbmplY3QoWyd1aVNlc3Npb24nXSwgKHVpQ3R4KSA9PiB7XG4gICAgc3RhdHVzU291cmNlID0gdWlDdHgudWlTZXNzaW9uLnNlc3Npb25TdGF0dXNcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN0YXR1c1NvdXJjZS5zdWJzY3JpYmUoc3luYylcbiAgICBzeW5jKClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUoKVxuICAgICAgc3RhdHVzU291cmNlID0gdW5kZWZpbmVkXG4gICAgICBzeW5jKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAobm90aWZ5VGltZXIgIT09IHVuZGVmaW5lZCkgY2xlYXJUaW1lb3V0KG5vdGlmeVRpbWVyKVxuICAgIG5vdGlmeVF1ZXVlLmNsZWFyKClcbiAgICBzdG9wU291bmQoKVxuICAgIGljb25PYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICB1bnN1YnNjcmliZUxpc3QoKVxuICAgIHVuc3Vic2NyaWJlRm9ybSgpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uRm9yZWdyb3VuZClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvcmVncm91bmQpXG4gICAgcmVzdG9yZSgpXG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEVBQ1gsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsY0FBYztBQUFBLEVBQ2QsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osaUJBQWlCO0FBQUEsRUFDakIsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osY0FBYztBQUFBLEVBQ2QsYUFBYTtBQUFBLEVBQ2IsWUFBWTtBQUFBLEVBQ1osV0FBVztBQUFBLEVBQ1gsWUFBWTtBQUFBLEVBQ1osWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsZUFBZTtBQUFBLEVBQ2YsbUJBQW1CO0FBQUEsRUFDbkIsa0JBQWtCO0FBQUEsRUFDbEIsc0JBQXNCO0FBQUEsRUFDdEIsaUJBQWlCO0FBQUEsRUFDakIsbUJBQW1CO0FBQUEsRUFDbkIsdUJBQXVCO0FBQUEsRUFDdkIsb0JBQW9CO0FBQUEsRUFDcEIsc0JBQXNCO0FBQUEsRUFDdEIsMEJBQTBCO0FBQUEsRUFDMUIsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCO0FBQUEsRUFDaEIsYUFBYTtBQUFBLEVBQ2IsT0FBTztBQUFBLEVBQ1AsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLEVBQ2QsY0FBYztBQUFBLEVBQ2Qsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsdUJBQXVCO0FBQUEsRUFDdkIsaUJBQWlCO0FBQUEsRUFDakIsb0JBQW9CO0FBQUEsRUFDcEIsZ0JBQWdCO0FBQUEsRUFDaEIsaUJBQWlCO0FBQUEsRUFDakIsaUJBQWlCO0FBQUEsRUFDakIscUJBQXFCO0FBQUEsRUFDckIscUJBQXFCO0FBQUEsRUFDckIsdUJBQXVCO0FBQUEsRUFDdkIscUJBQXFCO0FB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
    return module.exports;
  },
});
