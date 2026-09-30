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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC50cyIsICJzcmMvcmVtb3RlLnRzIiwgInNyYy93aGFsZS50cyIsICJzcmMvbm90aWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgYnJvd3NlciBoYWxmLlxuICpcbiAqIE9uZSBzZXR0aW5ncyBzZWN0aW9uIHdpdGggdGhyZWUgc3ViLXBhbmVsczogY29udGV4dCBjb21wYWN0aW9uLCBsbGFtYS5jcHBcbiAqIG1vZGVsIGVucmljaG1lbnQsIGFuZCBub3RpZmljYXRpb25zLiBSZWFkcyBhbmQgd3JpdGVzIHRoZSBgbWFsa28tcHJlZnNgXG4gKiBjb25maWcgZm9ybSwgcmVhZHMgdGhlIGBsbG0tcGktYWlgIGZvcm0gdG8gcG9wdWxhdGUgdGhlIG1vZGVsIHBpY2tlcnMsIGFuZFxuICogcnVucyB0aGUgdGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoc2VlIGAuL25vdGlmeS50c2ApLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnRlZENvbnRyb2wsIFN3aXRjaCB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXByaW1pdGl2ZXMnXG5pbXBvcnQgeyBwcm9iZUludm9jYXRpb24gfSBmcm9tICcuL3JlbW90ZS50cydcbmltcG9ydCB7XG4gIEJVSUxUSU5fU09VTkRTLFxuICBMT0NBTEVfTlMsXG4gIFNPVU5EX05PTkUsXG4gIFNPVU5EX1BBQ0tTLFxuICBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbixcbiAgcGFja1NvdW5kSWRzLFxuICBwbGF5U291bmQsXG4gIHByaW1lU291bmQsXG4gIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uLFxuICBzdGFydFN0YXR1c0xpZ2h0LFxufSBmcm9tICcuL25vdGlmeS50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZHNoLW1hbGtvLXByZWZzJ1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsnc2Vzc2lvbnMnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2NvbmZpZ0Zvcm1zJywgJ3JlbW90ZSddXG5cbmNvbnN0IE5TID0gJ21hbGtvLXByZWZzJ1xuY29uc3QgTU9ERUxfTlMgPSAnbGxtLXBpLWFpJ1xuY29uc3QgU0xPVCA9ICdzZXR0aW5ncy5zZWN0aW9uJ1xuY29uc3QgVEFCU19JRCA9ICdtYWxrby1wcmVmcy10YWJzJ1xuXG4vKiogYCNSUkdHQkJgIGNvbG91ciBsaXRlcmFsLiAqL1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuXG4vKiogU3RyaWN0LWNvZGVjIHN0dWI6IHRoZSBicm93c2VyIG5ldmVyIGRlY29kZXMgaXRzIG93biBhcmd1bWVudHMuICovXG5jb25zdCBpZGVudGl0eVNjaGVtYSA9ICgpID0+ICh7IHBhcnNlOiAodmFsdWUpID0+IHZhbHVlIH0pXG5cbi8qKiBCcm93c2VyIGNvbnRyaWJ1dGlvbiBtb3VudGVkIHRocm91Z2ggYGN0eC5yZW1vdGUuJG1vdW50KClgLiAqL1xuY29uc3QgUFJPQkVfUkVNT1RFID0ge1xuICBwYWNrYWdlOiAnZHNoLW1hbGtvLXByZWZzJyxcbiAgZGVzY3JpcHRvcnM6IFtwcm9iZUludm9jYXRpb24oaWRlbnRpdHlTY2hlbWEsIGlkZW50aXR5U2NoZW1hKV0sXG59XG5cbmNvbnN0IGVsID0gUmVhY3QuY3JlYXRlRWxlbWVudFxuXG5jb25zdCBlbiA9IHtcbiAgdGl0bGU6IFwiTWFsa28ncyBwcmVmc1wiLFxuICBpbnRybzogJ1R1bmFibGUgY29tcGFjdGlvbiwgbGxhbWEuY3BwIG1vZGVsIGVucmljaG1lbnQgYW5kIG5vdGlmaWNhdGlvbnMuJyxcbiAgdGFiQ29tcGFjdGlvbjogJ0NvbnRleHQgY29tcGFjdGlvbicsXG4gIHRhYk1vZGVsczogJ2xsYW1hLmNwcCBtb2RlbHMnLFxuICB0YWJOb3RpZmljYXRpb25zOiAnTm90aWZpY2F0aW9ucycsXG4gIC8vIENvbXBhY3Rpb25cbiAgdGhyZXNob2xkVGl0bGU6ICdDb21wYWN0aW9uIHRocmVzaG9sZCcsXG4gIHRocmVzaG9sZFRva2VuczogJ1RocmVzaG9sZCAodG9rZW5zKScsXG4gIHRocmVzaG9sZFRva2Vuc0hpbnQ6ICdBYnNvbHV0ZSBwcmVzc3VyZSBpbiB0b2tlbnMsIGUuZy4gMTMwayBvciAxMzBLLiBFbXB0eS8wID0gdXNlIHRoZSByYXRpbyBiZWxvdy4nLFxuICBjb250ZXh0V2luZG93OiAnQ29udGV4dCB3aW5kb3cgKHRva2VucyknLFxuICBjb250ZXh0V2luZG93SGludDogJ1dpbmRvdyB0aGUgYWJzb2x1dGUgdGhyZXNob2xkIGlzIGV4cHJlc3NlZCBhZ2FpbnN0IChlLmcuIDIwMGspLiAwID0gZGVyaXZlIG5vdGhpbmcgKHJhdGlvIG9ubHkpLicsXG4gIHRocmVzaG9sZFJhdGlvOiAnVGhyZXNob2xkIHJhdGlvJyxcbiAgdGhyZXNob2xkUmF0aW9IaW50OiAnVXNlZCB3aGVuIHRoZSBhYnNvbHV0ZSB0aHJlc2hvbGQgaXMgZW1wdHkgKDAuOCA9IDgwJSBvZiB0aGUgd2luZG93KS4nLFxuICBoZWFkcm9vbTogJ0hlYWRyb29tICh0b2tlbnMpJyxcbiAgaGVhZHJvb21IaW50OiAnUmVzZXJ2ZWQgb24gdG9wIG9mIHRoZSBvdXRwdXQgY2FwLiBUaGUgb2ZmaWNpYWwgZGVmYXVsdCAoNjU1MzYpIGNhcHMgdGhlIHRyaWdnZXIgd2VsbCBiZWxvdyA4MCUuJyxcbiAgcmV0ZW50aW9uVGl0bGU6ICdSZXRlbnRpb24nLFxuICByZXRhaW5Ub2tlbnM6ICdLZWVwIGxhc3QgKHRva2VucyknLFxuICByZXRhaW5Ub2tlbnNIaW50OiAnVmVyYmF0aW0gcmVjZW50LWNvbnRleHQgYnVkZ2V0LCBlLmcuIDMyay4gRW1wdHkvMCA9IHVzZSB0aGUgcmF0aW8gYmVsb3cuJyxcbiAgcmV0YWluUmF0aW86ICdLZWVwIHJhdGlvJyxcbiAgYmVoYXZpb3VyVGl0bGU6ICdCZWhhdmlvdXInLFxuICBhdXRvOiAnQXV0b21hdGljIGNvbXBhY3Rpb24nLFxuICBhdXRvSGludDogJ09mZmljaWFsIGJldHdlZW4tc3RlcCBwcmVzc3VyZSBjb21wYWN0aW9uIGFuZCBjb250ZXh0LW92ZXJmbG93IHJlY292ZXJ5LicsXG4gIHR1cm5FbmQ6ICdDb21wYWN0IGF0IGVuZCBvZiB0dXJuJyxcbiAgdHVybkVuZEhpbnQ6ICdSdW5zIG9uZSBtb3JlIGNvbXBhY3Rpb24gd2hlbiB0aGUgYWdlbnQgZ29lcyBpZGxlLicsXG4gIHN1bW1hcml6YXRpb25UaXRsZTogJ1N1bW1hcml6YXRpb24nLFxuICBzdW1tYXJpemF0aW9uTW9kZTogJ01vZGVsJyxcbiAgbW9kZVNlc3Npb246ICdTZXNzaW9uIG1vZGVsJyxcbiAgbW9kZUN1c3RvbTogJ0N1c3RvbSBtb2RlbCcsXG4gIHByb3ZpZGVyOiAnUHJvdmlkZXInLFxuICBtb2RlbDogJ01vZGVsJyxcbiAgcmVhc29uaW5nOiAnUmVhc29uaW5nJyxcbiAgcmVhc29uaW5nRGVmYXVsdDogJ0RlZmF1bHQnLFxuICByZWFzb25pbmdPZmY6ICdPZmYnLFxuICBtYXhUb2tlbnM6ICdTdW1tYXJ5IG91dHB1dCBjYXAgKHRva2VucyknLFxuICBhZHZhbmNlZFRpdGxlOiAnQWR2YW5jZWQnLFxuICBjb21wYWN0aW9uUmV0cmllczogJ0V4dHJhIGNvbXBhY3Rpb24gYXR0ZW1wdHMnLFxuICBtYXhPdmVyZmxvd1JldHJpZXM6ICdPdmVyZmxvdyByZWNvdmVyeSBhdHRlbXB0cycsXG4gIC8vIE1vZGVsc1xuICBtb2RlbHNUaXRsZTogJ2xsYW1hLmNwcCBtb2RlbHMnLFxuICBtb2RlbHNJbnRybzogJ0ZldGNoIHRoZSBtb2RlbHMgYSBwcm92aWRlciBleHBvc2VzLCBwaWNrIHRoZSBvbmVzIHRvIGltcG9ydCBhbmQgcmV2aWV3IHRoZSBjaGFuZ2VzIGJlZm9yZSBhcHBseWluZy4nLFxuICBlbnJpY2g6ICdGZXRjaCBmcm9tIHNlcnZlcicsXG4gIGVucmljaGluZzogJ0ZldGNoaW5nXFx1MjAyNicsXG4gIG5vQmFzZVVybDogJ05vIGVuZHBvaW50IGNvbmZpZ3VyZWQgZm9yIHRoaXMgcHJvdmlkZXIuJyxcbiAgYXBwbGllZDogJ0ltcG9ydGVkIHtjb3VudH0gbW9kZWwocykuJyxcbiAgcHJldmlld1RpdGxlOiAnUmV2aWV3IGltcG9ydCcsXG4gIHByZXZpZXdIaW50OiAnQ2hlY2sgdGhlIG1vZGVscyB0byBpbXBvcnQgZnJvbSB0aGUgc2VydmVyLicsXG4gIHByZXZpZXdOZXc6ICduZXcgbW9kZWwnLFxuICBwcmV2aWV3Tm9DaGFuZ2U6ICdubyBjaGFuZ2UnLFxuICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcbiAgYXBwbHk6ICdJbXBvcnQgKHtjb3VudH0pJyxcbiAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgbm9Nb2RlbHM6ICdUaGUgc2VydmVyIHJldHVybmVkIG5vIG1vZGVscy4nLFxuICAvLyBOb3RpZmljYXRpb25zXG4gIGNvbG9yc0dyb3VwOiAnVGFiIHN0YXR1cyBsaWdodCcsXG4gIGNvbG9yc0ludHJvOiAnVGhlIGJyb3dzZXIgdGFiIGljb24gcmVmbGVjdHMgdGhlIHNlc3Npb24gc3RhdGU6IGdyZWVuID0gZmluaXNoZWQsIGFtYmVyID0gd2FpdGluZyBmb3IgeW91LicsXG4gIGNvbG9yc0VuYWJsZWQ6ICdDb2xvciB0aGUgdGFiIGljb24nLFxuICBjb2xvcnNFbmFibGVkSGludDogJ09mZiBrZWVwcyB0aGUgb2ZmaWNpYWwgZmF2aWNvbiBhdCBhbGwgdGltZXMuJyxcbiAgZ3JlZW5MYWJlbDogJ0ZpbmlzaGVkJyxcbiAgYW1iZXJMYWJlbDogJ1dhaXRpbmcgKHF1ZXN0aW9uL2FwcHJvdmFsKScsXG4gIHdvcmtpbmdMYWJlbDogJ1dvcmtpbmcnLFxuICB3b3JraW5nSGludDogJ1Nob3duIHdoaWxlIGEgc2Vzc2lvbiBpcyBnZW5lcmF0aW5nLicsXG4gIGJsYWNrTGFiZWw6ICdJZGxlIGNvbG9yJyxcbiAgYmxhY2tIaW50OiAnTGVhdmUgZW1wdHkgdG8ga2VlcCB0aGUgb2ZmaWNpYWwgZmF2aWNvbiB3aGVuIGlkbGUuJyxcbiAgY29sb3JSZXNldDogJ0NsZWFyJyxcbiAgY29sb3JVbnNldDogJ29mZmljaWFsJyxcbiAgbm90aWZ5R3JvdXA6ICdTeXN0ZW0gbm90aWZpY2F0aW9ucycsXG4gIG5vdGlmeUludHJvOiAnQmFubmVycyB1c2UgdGhlIHN3aXRjaGVzIGJlbG93LiBBIGNob3NlbiBzb3VuZCBhbHdheXMgcGxheXMgb24gaXRzIGV2ZW50LCBldmVuIHdoZW4gbm90aWZpY2F0aW9ucyBhcmUgb2ZmLicsXG4gIG5vdGlmeUVuYWJsZWQ6ICdFbmFibGUgbm90aWZpY2F0aW9ucycsXG4gIG5vdGlmeUVuYWJsZWRIaW50OiAnVGhlIGJyb3dzZXIgYXNrcyBmb3IgcGVybWlzc2lvbiB0aGUgZmlyc3QgdGltZSB5b3UgZW5hYmxlIHRoaXMuJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZDogJ05vdGlmeSBpbiB0aGUgZm9yZWdyb3VuZCcsXG4gIG5vdGlmeUZvcmVncm91bmRIaW50OiAnQWxzbyBub3RpZnkgd2hpbGUgdGhlIHRhYiBpcyB2aXNpYmxlIGFuZCBmb2N1c2VkLicsXG4gIG5vdGlmeURvbmVHcm91cDogJ1doZW4gYSBzZXNzaW9uIGZpbmlzaGVzJyxcbiAgbm90aWZ5RG9uZUVuYWJsZWQ6ICdOb3RpZnknLFxuICBub3RpZnlEb25lRW5hYmxlZEhpbnQ6ICdTZW5kIGEgbm90aWZpY2F0aW9uIHdoZW4gYSBzZXNzaW9uIGZpbmlzaGVzLicsXG4gIG5vdGlmeVBlbmRpbmdHcm91cDogJ1doaWxlIHdhaXRpbmcgZm9yIHlvdScsXG4gIG5vdGlmeVBlbmRpbmdFbmFibGVkOiAnTm90aWZ5JyxcbiAgbm90aWZ5UGVuZGluZ0VuYWJsZWRIaW50OiAnU2VuZCBhIG5vdGlmaWNhdGlvbiB3aGVuIGEgcXVlc3Rpb24gb3IgYXBwcm92YWwgYXdhaXRzIHlvdS4nLFxuICBwZXJzaXN0RG9uZTogJ0tlZXAgb24gc2NyZWVuJyxcbiAgcGVyc2lzdFBlbmRpbmc6ICdLZWVwIG9uIHNjcmVlbicsXG4gIHBlcnNpc3RIaW50OiAnT246IHRoZSBub3RpZmljYXRpb24gc3RheXMgdW50aWwgeW91IGRpc21pc3MgaXQgKGlmIHRoZSBPUyBob25vcnMgaXQpLicsXG4gIHNvdW5kOiAnU291bmQnLFxuICBzb3VuZEhpbnQ6ICdQbGF5cyBvbiB0aGUgZXZlbnQgZXZlbiB3aGVuIG5vdGlmaWNhdGlvbnMgYXJlIG9mZi4nLFxuICBub3RpZnlWb2x1bWU6ICdWb2x1bWUnLFxuICBzb3VuZERvbmU6ICdPbiBzZXNzaW9uIGZpbmlzaGVkJyxcbiAgc291bmRQZW5kaW5nOiAnV2hpbGUgd2FpdGluZyBmb3IgeW91JyxcbiAgc291bmROb1NvdW5kOiAnTm8gc291bmQnLFxuICBzb3VuZFBhY2tCdWlsdGluOiAnQnVpbHQtaW4nLFxuICBzb3VuZEJ1aWx0aW5VcDogJ0NoaW1lIFVwJyxcbiAgc291bmRCdWlsdGluRG93bjogJ0NoaW1lIERvd24nLFxuICBwZXJtaXNzaW9uRGVuaWVkOiAnQmxvY2tlZCBieSB0aGUgYnJvd3NlciBcXHUyMDE0IHJlLWVuYWJsZSBub3RpZmljYXRpb25zIGluIHRoZSBzaXRlIHNldHRpbmdzLicsXG4gIHBlcm1pc3Npb25VbnN1cHBvcnRlZDogJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHN5c3RlbSBub3RpZmljYXRpb25zLicsXG4gIG5vdGlmeURvbmVUaXRsZTogJ1Nlc3Npb24gZmluaXNoZWQnLFxuICBub3RpZnlQZW5kaW5nVGl0bGU6ICdTb21ldGhpbmcgYXdhaXRzIHlvdScsXG4gIG5vdGlmeUR1cmF0aW9uOiAndHVybiB0b29rIHtkdXJhdGlvbn0nLFxuICBkdXJhdGlvblNlY29uZHM6ICd7c2Vjb25kc31zJyxcbiAgZHVyYXRpb25NaW51dGVzOiAne21pbnV0ZXN9bXtzZWNvbmRzfXMnLFxuICBwZW5kaW5nS2luZEFwcHJvdmFsOiAnQXBwcm92YWwgbmVlZGVkJyxcbiAgcGVuZGluZ0tpbmRRdWVzdGlvbjogJ1F1ZXN0aW9uJyxcbiAgcGVuZGluZ0tpbmRQbGFuUmV2aWV3OiAnUGxhbiByZXZpZXcnLFxuICBwZW5kaW5nQXBwcm92YWxUb29sOiAnQXBwcm92YWwgXFx1MDBiNyB7dG9vbH0nLFxuICBwZW5kaW5nUXVlc3Rpb25DaG9vc2U6ICdDaG9vc2UgYW4gb3B0aW9uJyxcbiAgcGVuZGluZ1F1ZXN0aW9uTXVsdGk6ICdDaG9vc2Ugb3B0aW9ucycsXG4gIHBlbmRpbmdRdWVzdGlvbkZpbGw6ICdUeXBlIGFuIGFuc3dlcicsXG4gIHBlbmRpbmdRdWVzdGlvbkJhdGNoOiAne2NvdW50fSBxdWVzdGlvbnMnLFxuICAvLyBTaGFyZWRcbiAgc2F2ZTogJ1NhdmUnLFxuICBzYXZlZDogJ1NhdmVkLicsXG4gIGludmFsaWRUb2tlbjogJ0VudGVyIGEgbnVtYmVyIG9yIGEgay9NIHN1ZmZpeCB2YWx1ZSAoZS5nLiAxMzBrKS4nLFxuICBpbnZhbGlkSGV4OiAnQ29sb3IgbXVzdCBiZSAjUlJHR0JCLicsXG4gIGVycm9yUHJlZml4OiAnRXJyb3I6ICcsXG4gIHVuYXZhaWxhYmxlOiAnVGhpcyBzZXR0aW5nIGlzIG5vdCBhdmFpbGFibGUgZnJvbSB0aGlzIGNsaWVudC4nLFxuICBsb2FkaW5nOiAnTG9hZGluZ1xcdTIwMjYnLFxufVxuXG5jb25zdCB6aCA9IHtcbiAgdGl0bGU6ICdNYWxrbyBcXHU1MDRmXFx1NTk3ZCcsXG4gIGludHJvOiAnXFx1NTM4YlxcdTdmMjlcXHUzMDAxbGxhbWEuY3BwIFxcdTZhMjFcXHU1NzhiXFx1ODg2NVxcdTUxNjhcXHU0ZTBlXFx1OTAxYVxcdTc3ZTVcXHUzMDAyJyxcbiAgdGFiQ29tcGFjdGlvbjogJ1xcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTUzOGJcXHU3ZjI5JyxcbiAgdGFiTW9kZWxzOiAnbGxhbWEuY3BwIFxcdTZhMjFcXHU1NzhiJyxcbiAgdGFiTm90aWZpY2F0aW9uczogJ1xcdTkwMWFcXHU3N2U1JyxcbiAgdGhyZXNob2xkVGl0bGU6ICdcXHU1MzhiXFx1N2YyOVxcdTk2MDBcXHU1MDNjJyxcbiAgdGhyZXNob2xkVG9rZW5zOiAnXFx1OTYwMFxcdTUwM2NcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIHRocmVzaG9sZFRva2Vuc0hpbnQ6ICdcXHU3ZWRkXFx1NWJmOSB0b2tlbiBcXHU5NjAwXFx1NTAzY1xcdWZmMGNcXHU1OTgyIDEzMGtcXHUzMDAyXFx1NzU1OVxcdTdhN2EvMCA9IFxcdTc1MjhcXHU0ZTBiXFx1NjViOVxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIGNvbnRleHRXaW5kb3c6ICdcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU3YTk3XFx1NTNlM1xcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgY29udGV4dFdpbmRvd0hpbnQ6ICdcXHU3ZWRkXFx1NWJmOVxcdTk2MDBcXHU1MDNjXFx1NjI0MFxcdTRmOWRcXHU2MzZlXFx1NzY4NFxcdTdhOTdcXHU1M2UzXFx1ZmYwOFxcdTU5ODIgMjAwa1xcdWZmMDlcXHUzMDAyMCA9IFxcdTUzZWFcXHU3NTI4XFx1NmJkNFxcdTRmOGJcXHUzMDAyJyxcbiAgdGhyZXNob2xkUmF0aW86ICdcXHU5NjAwXFx1NTAzY1xcdTZiZDRcXHU0ZjhiJyxcbiAgdGhyZXNob2xkUmF0aW9IaW50OiAnXFx1NWY1M1xcdTdlZGRcXHU1YmY5XFx1OTYwMFxcdTUwM2NcXHU0ZTNhXFx1N2E3YVxcdTY1ZjZcXHU0ZjdmXFx1NzUyOFxcdWZmMDgwLjggPSBcXHU3YTk3XFx1NTNlM1xcdTc2ODQgODAlXFx1ZmYwOVxcdTMwMDInLFxuICBoZWFkcm9vbTogJ1xcdTk4ODRcXHU3NTU5XFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICBoZWFkcm9vbUhpbnQ6ICdcXHU1NzI4XFx1OGY5M1xcdTUxZmFcXHU5ODg0XFx1N2I5N1xcdTRlNGJcXHU1OTE2XFx1NTE4ZFxcdTk4ODRcXHU3NTU5XFx1NzY4NFxcdTkxY2ZcXHUzMDAyXFx1NWI5OFxcdTY1YjlcXHU5ZWQ4XFx1OGJhNCA2NTUzNiBcXHU0ZjFhXFx1NjI4YVxcdTg5ZTZcXHU1M2QxXFx1NzBiOVxcdTYyYzlcXHU1MjMwIDgwJSBcXHU0ZWU1XFx1NGUwYlxcdTMwMDInLFxuICByZXRlbnRpb25UaXRsZTogJ1xcdTRmZGRcXHU3NTU5JyxcbiAgcmV0YWluVG9rZW5zOiAnXFx1NGZkZFxcdTc1NTlcXHU2NzAwXFx1OGZkMVxcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgcmV0YWluVG9rZW5zSGludDogJ1xcdTkwMTBcXHU1YjU3XFx1NGZkZFxcdTc1NTlcXHU3Njg0XFx1OGZkMVxcdTY3MWZcXHU5ODg0XFx1N2I5N1xcdWZmMGNcXHU1OTgyIDMya1xcdTMwMDJcXHU3NTU5XFx1N2E3YS8wID0gXFx1NzUyOFxcdTRlMGJcXHU2NWI5XFx1NmJkNFxcdTRmOGJcXHUzMDAyJyxcbiAgcmV0YWluUmF0aW86ICdcXHU0ZmRkXFx1NzU1OVxcdTZiZDRcXHU0ZjhiJyxcbiAgYmVoYXZpb3VyVGl0bGU6ICdcXHU4ODRjXFx1NGUzYScsXG4gIGF1dG86ICdcXHU4MWVhXFx1NTJhOFxcdTUzOGJcXHU3ZjI5JyxcbiAgYXV0b0hpbnQ6ICdcXHU1Yjk4XFx1NjViOVxcdTc2ODRcXHU2YjY1XFx1OTVmNFxcdTUzOGJcXHU1MjliXFx1NTM4YlxcdTdmMjlcXHU0ZTBlXFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1NmVhMlxcdTUxZmFcXHU2MDYyXFx1NTkwZFxcdTMwMDInLFxuICB0dXJuRW5kOiAnXFx1OGY2ZVxcdTY3MmJcXHU1MzhiXFx1N2YyOScsXG4gIHR1cm5FbmRIaW50OiAnXFx1NGVlM1xcdTc0MDZcXHU4ZjZjXFx1NGUzYSBpZGxlIFxcdTY1ZjZcXHU1MThkXFx1NTM4YlxcdTdmMjlcXHU0ZTAwXFx1NmIyMVxcdTMwMDInLFxuICBzdW1tYXJpemF0aW9uVGl0bGU6ICdcXHU2NDU4XFx1ODk4MScsXG4gIHN1bW1hcml6YXRpb25Nb2RlOiAnXFx1NmEyMVxcdTU3OGInLFxuICBtb2RlU2Vzc2lvbjogJ1xcdTRmMWFcXHU4YmRkXFx1NmEyMVxcdTU3OGInLFxuICBtb2RlQ3VzdG9tOiAnXFx1ODFlYVxcdTViOWFcXHU0ZTQ5XFx1NmEyMVxcdTU3OGInLFxuICBwcm92aWRlcjogJ1xcdTYzZDBcXHU0ZjliXFx1NTU0NicsXG4gIG1vZGVsOiAnXFx1NmEyMVxcdTU3OGInLFxuICByZWFzb25pbmc6ICdcXHU2MDFkXFx1ODAwM1xcdTdlYTdcXHU1MjJiJyxcbiAgcmVhc29uaW5nRGVmYXVsdDogJ1xcdTllZDhcXHU4YmE0JyxcbiAgcmVhc29uaW5nT2ZmOiAnXFx1NTE3M1xcdTk1ZWQnLFxuICBtYXhUb2tlbnM6ICdcXHU2NDU4XFx1ODk4MVxcdThmOTNcXHU1MWZhXFx1NGUwYVxcdTk2NTBcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIGFkdmFuY2VkVGl0bGU6ICdcXHU5YWQ4XFx1N2VhNycsXG4gIGNvbXBhY3Rpb25SZXRyaWVzOiAnXFx1OTg5ZFxcdTU5MTZcXHU1MzhiXFx1N2YyOVxcdTVjMWRcXHU4YmQ1JyxcbiAgbWF4T3ZlcmZsb3dSZXRyaWVzOiAnXFx1NmVhMlxcdTUxZmFcXHU2MDYyXFx1NTkwZFxcdTVjMWRcXHU4YmQ1JyxcbiAgbW9kZWxzVGl0bGU6ICdsbGFtYS5jcHAgXFx1NmEyMVxcdTU3OGInLFxuICBtb2RlbHNJbnRybzogJ1xcdTRlY2VcXHU2NzBkXFx1NTJhMVxcdTU2NjhcXHU4M2I3XFx1NTNkNlxcdTZhMjFcXHU1NzhiXFx1NTIxN1xcdTg4NjhcXHVmZjBjXFx1NTJmZVxcdTkwMDlcXHU4OTgxXFx1NWJmY1xcdTUxNjVcXHU3Njg0XFx1NmEyMVxcdTU3OGJcXHVmZjBjXFx1Nzg2ZVxcdThiYTRcXHU1M2Q4XFx1NjZmNFxcdTU0MGVcXHU1ZTk0XFx1NzUyOFxcdTMwMDInLFxuICBlbnJpY2g6ICdcXHU0ZWNlXFx1NjcwZFxcdTUyYTFcXHU1NjY4XFx1ODNiN1xcdTUzZDYnLFxuICBlbnJpY2hpbmc6ICdcXHU2YjYzXFx1NTcyOFxcdTgzYjdcXHU1M2Q2XFx1MjAyNicsXG4gIG5vQmFzZVVybDogJ1xcdThiZTVcXHU2M2QwXFx1NGY5YlxcdTU1NDZcXHU2NzJhXFx1OTE0ZFxcdTdmNmVcXHU3YWVmXFx1NzBiOVxcdTMwMDInLFxuICBhcHBsaWVkOiAnXFx1NWRmMlxcdTViZmNcXHU1MTY1IHtjb3VudH0gXFx1NGUyYVxcdTZhMjFcXHU1NzhiXFx1MzAwMicsXG4gIHByZXZpZXdUaXRsZTogJ1xcdTc4NmVcXHU4YmE0XFx1NWJmY1xcdTUxNjUnLFxuICBwcmV2aWV3SGludDogJ1xcdTUyZmVcXHU5MDA5XFx1ODk4MVxcdTRlY2VcXHU2NzBkXFx1NTJhMVxcdTU2NjhcXHU1YmZjXFx1NTE2NVxcdTc2ODRcXHU2YTIxXFx1NTc4YlxcdTMwMDInLFxuICBwcmV2aWV3TmV3OiAnXFx1NjViMFxcdTZhMjFcXHU1NzhiJyxcbiAgcHJldmlld05vQ2hhbmdlOiAnXFx1NjVlMFxcdTUzZDhcXHU1MzE2JyxcbiAgc2VsZWN0QWxsOiAnXFx1NTE2OFxcdTkwMDknLFxuICBhcHBseTogJ1xcdTViZmNcXHU1MTY1XFx1ZmYwOHtjb3VudH1cXHVmZjA5JyxcbiAgY2FuY2VsOiAnXFx1NTNkNlxcdTZkODgnLFxuICBub01vZGVsczogJ1xcdTY3MGRcXHU1MmExXFx1NTY2OFxcdTY3MmFcXHU4ZmQ0XFx1NTZkZVxcdTRlZmJcXHU0ZjU1XFx1NmEyMVxcdTU3OGJcXHUzMDAyJyxcbiAgY29sb3JzR3JvdXA6ICdcXHU2ODA3XFx1N2I3ZVxcdTk4NzVcXHU3MmI2XFx1NjAwMVxcdTcwNmYnLFxuICBjb2xvcnNJbnRybzogJ1xcdTY4MDdcXHU3YjdlXFx1OTg3NVxcdTU2ZmVcXHU2ODA3XFx1OTY4ZlxcdTRmMWFcXHU4YmRkXFx1NzJiNlxcdTYwMDFcXHU1M2Q4XFx1ODI3MlxcdWZmMWFcXHU3ZWZmID0gXFx1NWRmMlxcdTViOGNcXHU2MjEwXFx1ZmYwY1xcdTc0MjVcXHU3M2MwID0gXFx1N2I0OVxcdTRmNjBcXHU1OTA0XFx1NzQwNlxcdTMwMDInLFxuICBjb2xvcnNFbmFibGVkOiAnXFx1NTQyZlxcdTc1MjhcXHU1NmZlXFx1NjgwN1xcdTUzZDhcXHU4MjcyJyxcbiAgY29sb3JzRW5hYmxlZEhpbnQ6ICdcXHU1MTczXFx1OTVlZFxcdTU0MGVcXHU1OWNiXFx1N2VjOFxcdTRmN2ZcXHU3NTI4XFx1NWI5OFxcdTY1YjlcXHU1NmZlXFx1NjgwN1xcdTMwMDInLFxuICBncmVlbkxhYmVsOiAnXFx1NWRmMlxcdTViOGNcXHU2MjEwJyxcbiAgYW1iZXJMYWJlbDogJ1xcdTVmODVcXHU1OTA0XFx1NzQwNlxcdWZmMDhcXHU2M2QwXFx1OTVlZS9cXHU1YmExXFx1NjI3OVxcdWZmMDknLFxuICB3b3JraW5nTGFiZWw6ICdcXHU3NTFmXFx1NjIxMFxcdTRlMmQnLFxuICB3b3JraW5nSGludDogJ1xcdTRmMWFcXHU4YmRkXFx1NzUxZlxcdTYyMTBcXHU2NWY2XFx1NjYzZVxcdTc5M2FcXHUzMDAyJyxcbiAgYmxhY2tMYWJlbDogJ1xcdTllZDhcXHU4YmE0XFx1ODI3MicsXG4gIGJsYWNrSGludDogJ1xcdTc1NTlcXHU3YTdhXFx1NTIxOVxcdTdhN2FcXHU5NWYyXFx1NjVmNlxcdTRmN2ZcXHU3NTI4XFx1NWI5OFxcdTY1YjlcXHU1NmZlXFx1NjgwN1xcdTMwMDInLFxuICBjb2xvclJlc2V0OiAnXFx1NmUwNVxcdTk2NjQnLFxuICBjb2xvclVuc2V0OiAnXFx1NWI5OFxcdTY1YjknLFxuICBub3RpZnlHcm91cDogJ1xcdTdjZmJcXHU3ZWRmXFx1OTAxYVxcdTc3ZTUnLFxuICBub3RpZnlJbnRybzogJ1xcdTVmMzlcXHU3YTk3XFx1NzUzMVxcdTRlMGJcXHU2NWI5XFx1NWYwMFxcdTUxNzNcXHU2M2E3XFx1NTIzNlxcdWZmMWJcXHU5MDA5XFx1NjJlOVxcdTYzZDBcXHU3OTNhXFx1OTdmM1xcdTU0MGVcXHVmZjBjXFx1NTM3M1xcdTRmN2ZcXHU1MTczXFx1OTVlZFxcdTkwMWFcXHU3N2U1XFx1NGU1ZlxcdTRmMWFcXHU1NzI4XFx1NGU4YlxcdTRlZjZcXHU1M2QxXFx1NzUxZlxcdTY1ZjZcXHU2NGFkXFx1NjUzZVxcdTMwMDInLFxuICBub3RpZnlFbmFibGVkOiAnXFx1NTQyZlxcdTc1MjhcXHU5MDFhXFx1NzdlNScsXG4gIG5vdGlmeUVuYWJsZWRIaW50OiAnXFx1OTk5NlxcdTZiMjFcXHU1ZjAwXFx1NTQyZlxcdTY1ZjZcXHU2ZDRmXFx1ODljOFxcdTU2NjhcXHU0ZjFhXFx1OGJlMlxcdTk1ZWVcXHU2Mzg4XFx1Njc0M1xcdTMwMDInLFxuICBub3RpZnlGb3JlZ3JvdW5kOiAnXFx1NTI0ZFxcdTUzZjBcXHU2M2QwXFx1OTE5MicsXG4gIG5vdGlmeUZvcmVncm91bmRIaW50OiAnXFx1NjgwN1xcdTdiN2VcXHU5ODc1XFx1NTNlZlxcdTg5YzFcXHU0ZTE0XFx1NjcwOVxcdTcxMjZcXHU3MGI5XFx1NjVmNlxcdTRlNWZcXHU2M2QwXFx1OTE5MlxcdTMwMDInLFxuICBub3RpZnlEb25lR3JvdXA6ICdcXHU0ZjFhXFx1OGJkZFxcdTViOGNcXHU2MjEwXFx1NjVmNicsXG4gIG5vdGlmeURvbmVFbmFibGVkOiAnXFx1OTAxYVxcdTc3ZTUnLFxuICBub3RpZnlEb25lRW5hYmxlZEhpbnQ6ICdcXHU0ZjFhXFx1OGJkZFxcdTViOGNcXHU2MjEwXFx1NjVmNlxcdTUzZDFcXHU5MDAxXFx1OTAxYVxcdTc3ZTVcXHUzMDAyJyxcbiAgbm90aWZ5UGVuZGluZ0dyb3VwOiAnXFx1N2I0OVxcdTVmODVcXHU1OTA0XFx1NzQwNlxcdTY1ZjYnLFxuICBub3RpZnlQZW5kaW5nRW5hYmxlZDogJ1xcdTkwMWFcXHU3N2U1JyxcbiAgbm90aWZ5UGVuZGluZ0VuYWJsZWRIaW50OiAnXFx1NjcwOVxcdTYzZDBcXHU5NWVlXFx1NjIxNlxcdTViYTFcXHU2Mjc5XFx1N2I0OVxcdTVmODVcXHU1OTA0XFx1NzQwNlxcdTY1ZjZcXHU1M2QxXFx1OTAwMVxcdTkwMWFcXHU3N2U1XFx1MzAwMicsXG4gIHBlcnNpc3REb25lOiAnXFx1NWUzOFxcdTlhN2JcXHU1YzRmXFx1NWU1NScsXG4gIHBlcnNpc3RQZW5kaW5nOiAnXFx1NWUzOFxcdTlhN2JcXHU1YzRmXFx1NWU1NScsXG4gIHBlcnNpc3RIaW50OiAnXFx1NWYwMFxcdTU0MmZcXHU1NDBlXFx1OTcwMFxcdTYyNGJcXHU1MmE4XFx1NTE3M1xcdTk1ZWRcXHU2MjRkXFx1NGYxYVxcdTZkODhcXHU1OTMxXFx1ZmYwOFxcdTUzZDdcXHU3Y2ZiXFx1N2VkZlxcdTY1MmZcXHU2MzAxXFx1OTY1MFxcdTUyMzZcXHVmZjA5XFx1MzAwMicsXG4gIHNvdW5kOiAnXFx1NjNkMFxcdTc5M2FcXHU5N2YzJyxcbiAgc291bmRIaW50OiAnXFx1NTM3M1xcdTRmN2ZcXHU1MTczXFx1OTVlZFxcdTkwMWFcXHU3N2U1XFx1ZmYwY1xcdTRlOGJcXHU0ZWY2XFx1NTNkMVxcdTc1MWZcXHU2NWY2XFx1NGU1ZlxcdTRmMWFcXHU2NGFkXFx1NjUzZVxcdTMwMDInLFxuICBub3RpZnlWb2x1bWU6ICdcXHU5N2YzXFx1OTFjZicsXG4gIHNvdW5kRG9uZTogJ1xcdTRmMWFcXHU4YmRkXFx1NWI4Y1xcdTYyMTBcXHU2NWY2JyxcbiAgc291bmRQZW5kaW5nOiAnXFx1N2I0OVxcdTRmNjBcXHU1OTA0XFx1NzQwNlxcdTY1ZjYnLFxuICBzb3VuZE5vU291bmQ6ICdcXHU2NWUwXFx1NThmMCcsXG4gIHNvdW5kUGFja0J1aWx0aW46ICdcXHU1MTg1XFx1N2Y2ZScsXG4gIHNvdW5kQnVpbHRpblVwOiAnQ2hpbWUgVXAnLFxuICBzb3VuZEJ1aWx0aW5Eb3duOiAnQ2hpbWUgRG93bicsXG4gIHBlcm1pc3Npb25EZW5pZWQ6ICdcXHU1ZGYyXFx1ODhhYlxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTYyZDJcXHU3ZWRkXFx1ZmYwY1xcdThiZjdcXHU1NzI4XFx1N2FkOVxcdTcwYjlcXHU4YmJlXFx1N2Y2ZVxcdTRlMmRcXHU2MDYyXFx1NTkwZFxcdTkwMWFcXHU3N2U1XFx1Njc0M1xcdTk2NTBcXHUzMDAyJyxcbiAgcGVybWlzc2lvblVuc3VwcG9ydGVkOiAnXFx1NWY1M1xcdTUyNGRcXHU2ZDRmXFx1ODljOFxcdTU2NjhcXHU0ZTBkXFx1NjUyZlxcdTYzMDFcXHU3Y2ZiXFx1N2VkZlxcdTkwMWFcXHU3N2U1XFx1MzAwMicsXG4gIG5vdGlmeURvbmVUaXRsZTogJ1xcdTRmMWFcXHU4YmRkXFx1NWRmMlxcdTViOGNcXHU2MjEwJyxcbiAgbm90aWZ5UGVuZGluZ1RpdGxlOiAnXFx1NjcwOVxcdTRlYTRcXHU0ZTkyXFx1N2I0OVxcdTVmODVcXHU1OTA0XFx1NzQwNicsXG4gIG5vdGlmeUR1cmF0aW9uOiAnXFx1NjcyY1xcdThmNmVcXHU2MDNiXFx1NzUyOFxcdTY1ZjYge2R1cmF0aW9ufScsXG4gIGR1cmF0aW9uU2Vjb25kczogJ3tzZWNvbmRzfVxcdTc5ZDInLFxuICBkdXJhdGlvbk1pbnV0ZXM6ICd7bWludXRlc31cXHU1MjA2e3NlY29uZHN9XFx1NzlkMicsXG4gIHBlbmRpbmdLaW5kQXBwcm92YWw6ICdcXHU1Zjg1XFx1NWJhMVxcdTYyNzknLFxuICBwZW5kaW5nS2luZFF1ZXN0aW9uOiAnXFx1NTQxMVxcdTRmNjBcXHU2M2QwXFx1OTVlZScsXG4gIHBlbmRpbmdLaW5kUGxhblJldmlldzogJ1xcdThiYTFcXHU1MjEyXFx1NWY4NVxcdTViYTFcXHU2ODM4JyxcbiAgcGVuZGluZ0FwcHJvdmFsVG9vbDogJ1xcdTVmODVcXHU1YmExXFx1NjI3OSBcXHUwMGI3IHt0b29sfScsXG4gIHBlbmRpbmdRdWVzdGlvbkNob29zZTogJ1xcdThiZjdcXHU0ZjYwXFx1OTAwOVxcdTYyZTknLFxuICBwZW5kaW5nUXVlc3Rpb25NdWx0aTogJ1xcdThiZjdcXHU0ZjYwXFx1NTkxYVxcdTkwMDknLFxuICBwZW5kaW5nUXVlc3Rpb25GaWxsOiAnXFx1OGJmN1xcdTRmNjBcXHU1ODZiXFx1NTE5OScsXG4gIHBlbmRpbmdRdWVzdGlvbkJhdGNoOiAnXFx1NTQxMVxcdTRmNjBcXHU2M2QwXFx1OTVlZVxcdWZmMDh7Y291bnR9IFxcdTRlMmFcXHVmZjA5JyxcbiAgc2F2ZTogJ1xcdTRmZGRcXHU1YjU4JyxcbiAgc2F2ZWQ6ICdcXHU1ZGYyXFx1NGZkZFxcdTViNThcXHUzMDAyJyxcbiAgaW52YWxpZFRva2VuOiAnXFx1OGJmN1xcdThmOTNcXHU1MTY1XFx1NjU3MFxcdTViNTdcXHU2MjE2XFx1NWUyNiBrL00gXFx1NTQwZVxcdTdmMDBcXHU3Njg0XFx1NTAzY1xcdWZmMDhcXHU1OTgyIDEzMGtcXHVmZjA5XFx1MzAwMicsXG4gIGludmFsaWRIZXg6ICdcXHU5ODljXFx1ODI3MlxcdTY4M2NcXHU1ZjBmXFx1NWU5NFxcdTRlM2EgI1JSR0dCQlxcdTMwMDInLFxuICBlcnJvclByZWZpeDogJ1xcdTk1MTlcXHU4YmVmXFx1ZmYxYSAnLFxuICB1bmF2YWlsYWJsZTogJ1xcdTZiNjRcXHU4YmJlXFx1N2Y2ZVxcdTU3MjhcXHU1ZjUzXFx1NTI0ZFxcdTViYTJcXHU2MjM3XFx1N2FlZlxcdTRlMGRcXHU1M2VmXFx1NzUyOFxcdTMwMDInLFxuICBsb2FkaW5nOiAnXFx1NTJhMFxcdThmN2RcXHU0ZTJkXFx1MjAyNicsXG59XG5cbi8qKiBQYXJzZSBhIGh1bWFuIHRva2VuIGNvdW50IChgMTMwa2AsIGAxLjVtYCwgYDEzMDAwMGApLiAqL1xuZnVuY3Rpb24gcGFyc2VUb2tlblRleHQodGV4dCkge1xuICBjb25zdCByYXcgPSBTdHJpbmcodGV4dCA/PyAnJykudHJpbSgpLnJlcGxhY2UoL1tcXHNfXS9nLCAnJylcbiAgaWYgKHJhdyA9PT0gJycpIHJldHVybiB1bmRlZmluZWRcbiAgY29uc3QgbWF0Y2ggPSAvXihcXGQrKD86Wy4sXVxcZCspPykoW2tLbU1dKT8kLy5leGVjKHJhdylcbiAgaWYgKG1hdGNoID09PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IGJhc2UgPSBOdW1iZXIobWF0Y2hbMV0ucmVwbGFjZSgnLCcsICcuJykpXG4gIGlmICghTnVtYmVyLmlzRmluaXRlKGJhc2UpIHx8IGJhc2UgPCAwKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IHNjYWxlID0gbWF0Y2hbMl0gPT09IHVuZGVmaW5lZCA/IDEgOiBtYXRjaFsyXS50b0xvd2VyQ2FzZSgpID09PSAnaycgPyAxMDAwIDogMTAwMDAwMFxuICByZXR1cm4gTWF0aC5yb3VuZChiYXNlICogc2NhbGUpXG59XG5cbi8qKiBCdWlsZCBgeyBwcm92aWRlciwgbW9kZWwsIG5hbWUsIGxldmVscyB9YCByb3dzIGZyb20gdGhlIHBpLWFpIGNvbmZpZyB2YWx1ZS4gKi9cbmZ1bmN0aW9uIGJ1aWxkQ2F0YWxvZyhwcm92aWRlcnMpIHtcbiAgY29uc3Qgcm93cyA9IFtdXG4gIGlmIChwcm92aWRlcnMgPT09IG51bGwgfHwgdHlwZW9mIHByb3ZpZGVycyAhPT0gJ29iamVjdCcpIHJldHVybiByb3dzXG4gIGZvciAoY29uc3QgW3Byb3ZpZGVyLCBwcm9maWxlXSBvZiBPYmplY3QuZW50cmllcyhwcm92aWRlcnMpKSB7XG4gICAgY29uc3QgbW9kZWxzID0gcHJvZmlsZSAhPT0gbnVsbCAmJiB0eXBlb2YgcHJvZmlsZSA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheShwcm9maWxlLm1vZGVscykgPyBwcm9maWxlLm1vZGVscyA6IFtdXG4gICAgZm9yIChjb25zdCBtb2RlbCBvZiBtb2RlbHMpIHtcbiAgICAgIGlmIChtb2RlbCA9PT0gbnVsbCB8fCB0eXBlb2YgbW9kZWwgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBtb2RlbC5pZCAhPT0gJ3N0cmluZycpIGNvbnRpbnVlXG4gICAgICBjb25zdCBlZmZvcnRzID0gbW9kZWwucmVhc29uaW5nRWZmb3J0c1xuICAgICAgY29uc3QgbGV2ZWxzID0gZWZmb3J0cyA9PT0gZmFsc2UgPyBbXSA6IChlZmZvcnRzICE9PSBudWxsICYmIHR5cGVvZiBlZmZvcnRzID09PSAnb2JqZWN0JyA/IE9iamVjdC5rZXlzKGVmZm9ydHMpIDogW10pXG4gICAgICByb3dzLnB1c2goeyBwcm92aWRlciwgbW9kZWw6IG1vZGVsLmlkLCBuYW1lOiB0eXBlb2YgbW9kZWwubmFtZSA9PT0gJ3N0cmluZycgJiYgbW9kZWwubmFtZSAhPT0gJycgPyBtb2RlbC5uYW1lIDogbW9kZWwuaWQsIGxldmVscyB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gcm93c1xufVxuXG5jb25zdCBTID0ge1xuICB3cmFwOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogNCwgbWF4V2lkdGg6IDY4MCwgcGFkZGluZ1RvcDogNCB9LFxuICB0YWJzOiB7IG1hcmdpblRvcDogNCB9LFxuICBncm91cDogeyBtYXJnaW5Ub3A6IDEwLCBwYWRkaW5nVG9wOiAxMCwgYm9yZGVyVG9wOiAnMC41cHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMyknIH0sXG4gIGdyb3VwRmlyc3Q6IHsgbWFyZ2luVG9wOiAxMCB9LFxuICBncm91cFRpdGxlOiB7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiAyIH0sXG4gIGxhYmVsOiB7IGRpc3BsYXk6ICdibG9jaycsIGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luQm90dG9tOiA2LCBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScgfSxcbiAgaGludDogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIsIG1hcmdpbjogJzRweCAwIDEycHgnIH0sXG4gIGlucHV0OiB7XG4gICAgaGVpZ2h0OiAzMixcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGJvcmRlcjogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDQpJyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBiYWNrZ3JvdW5kOiAndmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTEpJyxcbiAgICBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgfSxcbiAgc2VsZWN0OiB7IGN1cnNvcjogJ3BvaW50ZXInIH0sXG4gIGhleDogeyBmb250RmFtaWx5OiAnbW9ub3NwYWNlJywgd2lkdGg6IDExMCwgZmxleDogJzAgMCBhdXRvJyB9LFxuICBjb2xvcjoge1xuICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgd2lkdGg6IDMyLFxuICAgIGhlaWdodDogMzIsXG4gICAgcGFkZGluZzogMixcbiAgICBib3JkZXI6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWw0KScsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGJhY2tncm91bmQ6ICd2YXIoLS1kc3ctYWxpYXMtYmctbGF5ZXItMSknLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICB9LFxuICByb3dUd286IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEyIH0sXG4gIHJvd0ZsZXg6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDgsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0sXG4gIGNvbDogeyBmbGV4OiAxLCBtaW5XaWR0aDogMCB9LFxuICBwcm92aWRlckJsb2NrOiB7IG1hcmdpbkJvdHRvbTogMTIgfSxcbiAgcHJldmlldzogeyBtYXJnaW5Ub3A6IDgsIHBhZGRpbmc6IDEwLCBib3JkZXI6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWw0KScsIGJvcmRlclJhZGl1czogOCwgYmFja2dyb3VuZDogJ3ZhcigtLWRzdy1hbGlhcy1iZy1sYXllci0xKScgfSxcbiAgcHJldmlld1JvdzogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsIHBhZGRpbmc6ICc0cHggMCcsIGN1cnNvcjogJ3BvaW50ZXInIH0sXG4gIHRvZ2dsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEwLCBtYXJnaW5Cb3R0b206IDEyIH0sXG4gIHRvZ2dsZVRleHQ6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAyIH0sXG4gIHRvZ2dsZUxhYmVsOiB7IGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknIH0sXG4gIGVycm9yOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLXN0YXRlLWVycm9yLXByaW1hcnksICNjMDApJywgZm9udFNpemU6IDEyLCBtYXJnaW5Ub3A6IDIgfSxcbn1cblxuZnVuY3Rpb24gUHJlZnNTZWN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHsgdCwgdXNlUHJlZnMsIHVzZU1vZGVsQ2F0YWxvZywgc2F2ZSwgcHJvYmUsIHdyaXRlTW9kZWxzIH0gPSBwcm9wc1xuICBjb25zdCBzbmFwID0gdXNlUHJlZnMoKHMpID0+IHMpXG4gIGNvbnN0IGNhdGFsb2dTbmFwID0gdXNlTW9kZWxDYXRhbG9nKChzKSA9PiBzKVxuICBjb25zdCB2YWx1ZSA9IHNuYXAgIT09IG51bGwgJiYgc25hcCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBzbmFwLnZhbHVlID09PSAnb2JqZWN0JyAmJiBzbmFwLnZhbHVlICE9PSBudWxsID8gc25hcC52YWx1ZSA6IHt9XG4gIGNvbnN0IHByb3ZpZGVycyA9IGNhdGFsb2dTbmFwICE9PSBudWxsICYmIGNhdGFsb2dTbmFwICE9PSB1bmRlZmluZWQgJiYgY2F0YWxvZ1NuYXAudmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIGNhdGFsb2dTbmFwLnZhbHVlID09PSAnb2JqZWN0JyA/IGNhdGFsb2dTbmFwLnZhbHVlLnByb3ZpZGVycyA6IHVuZGVmaW5lZFxuICBjb25zdCBjYXRhbG9nID0gYnVpbGRDYXRhbG9nKHByb3ZpZGVycylcbiAgY29uc3Qgc3RhdHVzID0gc25hcCAhPT0gbnVsbCAmJiBzbmFwICE9PSB1bmRlZmluZWQgPyBzbmFwLnN0YXR1cyA6ICdsb2FkaW5nJ1xuICBjb25zdCB3cml0YWJsZSA9ICEhKHNuYXAgJiYgc25hcC53cml0YWJsZSlcblxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gUmVhY3QudXNlU3RhdGUoJ2NvbXBhY3Rpb24nKVxuICBjb25zdCBbcGVybWlzc2lvbiwgc2V0UGVybWlzc2lvbl0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpKVxuICBjb25zdCBbZHJhZnQsIHNldERyYWZ0XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+ICh7XG4gICAgdGhyZXNob2xkVG9rZW5zOiB2YWx1ZS50aHJlc2hvbGRUb2tlbnMgPyBTdHJpbmcodmFsdWUudGhyZXNob2xkVG9rZW5zKSA6ICcnLFxuICAgIGNvbnRleHRXaW5kb3dUb2tlbnM6IHZhbHVlLmNvbnRleHRXaW5kb3dUb2tlbnMgPyBTdHJpbmcodmFsdWUuY29udGV4dFdpbmRvd1Rva2VucykgOiAnJyxcbiAgICByZXRhaW5Ub2tlbnM6IHZhbHVlLnJldGFpblRva2VucyA/IFN0cmluZyh2YWx1ZS5yZXRhaW5Ub2tlbnMpIDogJycsXG4gIH0pKVxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2VucmljaE5vdGUsIHNldEVucmljaE5vdGVdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFtidXN5Um91dGUsIHNldEJ1c3lSb3V0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gUmVhY3QudXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3N0aWNreUJnLCBzZXRTdGlja3lCZ10gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3Qgd3JhcFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKVxuICBjb25zdCB2YWx1ZVJlZiA9IHNuYXAgJiYgc25hcC52YWx1ZVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERyYWZ0KHtcbiAgICAgIHRocmVzaG9sZFRva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYudGhyZXNob2xkVG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLnRocmVzaG9sZFRva2VucykgOiAnJyxcbiAgICAgIGNvbnRleHRXaW5kb3dUb2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLmNvbnRleHRXaW5kb3dUb2tlbnMgPyBTdHJpbmcodmFsdWVSZWYuY29udGV4dFdpbmRvd1Rva2VucykgOiAnJyxcbiAgICAgIHJldGFpblRva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYucmV0YWluVG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLnJldGFpblRva2VucykgOiAnJyxcbiAgICB9KVxuICAgIHNldE5vdGUoJycpXG4gIH0sIFt2YWx1ZVJlZl0pXG4gIC8vIFRoZSBzZXR0aW5ncyBwYW5lbCBzY3JvbGxzOyBwaWNrIGl0cyBiYWNrZ3JvdW5kIHNvIHRoZSBzdGlja3kgdGFiIGJhciBkb2VzXG4gIC8vIG5vdCBzaG93IGNvbnRlbnQgc2Nyb2xsaW5nIHVuZGVybmVhdGguXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG5vZGUgPSB3cmFwUmVmLmN1cnJlbnQ/LnBhcmVudEVsZW1lbnQgPz8gbnVsbFxuICAgIHdoaWxlIChub2RlICE9PSBudWxsICYmIG5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGNvbnN0IGJnID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgIGlmIChiZyAhPT0gJycgJiYgYmcgIT09ICd0cmFuc3BhcmVudCcgJiYgYmcgIT09ICdyZ2JhKDAsIDAsIDAsIDApJykgeyBzZXRTdGlja3lCZyhiZyk7IGJyZWFrIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnRcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGlmIChzdGF0dXMgPT09ICdsb2FkaW5nJykgcmV0dXJuIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnbG9hZGluZycpKVxuICBpZiAoc3RhdHVzID09PSAndW5hdmFpbGFibGUnKSByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCd1bmF2YWlsYWJsZScpKVxuXG4gIGNvbnN0IGRpc2FibGVkID0gIXdyaXRhYmxlXG4gIGNvbnN0IHdyaXRlID0gKGZpZWxkLCB2KSA9PiB7XG4gICAgc2V0Tm90ZSgnJylcbiAgICBQcm9taXNlLnJlc29sdmUoc2F2ZShmaWVsZCwgdikpLmNhdGNoKChlcnJvcikgPT4gc2V0Tm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKSlcbiAgfVxuICBjb25zdCBjb21taXRUb2tlbnMgPSAoZmllbGQsIHRleHQpID0+IHtcbiAgICBpZiAodGV4dC50cmltKCkgPT09ICcnKSB7IHdyaXRlKGZpZWxkLCAwKTsgcmV0dXJuIH1cbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVRva2VuVGV4dCh0ZXh0KVxuICAgIGlmIChwYXJzZWQgPT09IHVuZGVmaW5lZCkgeyBzZXROb3RlKHQoJ2ludmFsaWRUb2tlbicpKTsgcmV0dXJuIH1cbiAgICB3cml0ZShmaWVsZCwgcGFyc2VkKVxuICB9XG4gIGNvbnN0IG51bSA9IChmaWVsZCwgZmFsbGJhY2spID0+ICh7XG4gICAgdmFsdWU6IFN0cmluZyh2YWx1ZVtmaWVsZF0gIT09IHVuZGVmaW5lZCA/IHZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrKSxcbiAgICBkaXNhYmxlZCxcbiAgICBvbkNoYW5nZTogKGUpID0+IHsgY29uc3QgbiA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7IGlmIChOdW1iZXIuaXNGaW5pdGUobikpIHdyaXRlKGZpZWxkLCBuKSB9LFxuICB9KVxuICBjb25zdCBzd2l0Y2hGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGUsIGtleTogZmllbGQgfSxcbiAgICBlbChTd2l0Y2gsIHtcbiAgICAgIGNoZWNrZWQ6IHZhbHVlW2ZpZWxkXSAhPT0gdW5kZWZpbmVkID8gISF2YWx1ZVtmaWVsZF0gOiBmYWxsYmFjayxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFiZWw6IHQobGFiZWxLZXkpLFxuICAgICAgb25DaGFuZ2U6IChuZXh0KSA9PiB3cml0ZShmaWVsZCwgbmV4dCksXG4gICAgfSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudG9nZ2xlVGV4dCB9LFxuICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiBTLnRvZ2dsZUxhYmVsIH0sIHQobGFiZWxLZXkpKSxcbiAgICAgIGhpbnRLZXkgPyBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyIH0gfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICAgICksXG4gIClcbiAgY29uc3QgdGV4dEZpZWxkID0gKGxhYmVsS2V5LCBmaWVsZCwgaGludEtleSkgPT4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6IGZpZWxkIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgIHR5cGU6ICd0ZXh0Jywgc3R5bGU6IFMuaW5wdXQsIGRpc2FibGVkLFxuICAgICAgdmFsdWU6IGRyYWZ0W2ZpZWxkXSxcbiAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gc2V0RHJhZnQoKGQpID0+ICh7IC4uLmQsIFtmaWVsZF06IGUudGFyZ2V0LnZhbHVlIH0pKSxcbiAgICAgIG9uQmx1cjogKCkgPT4gY29tbWl0VG9rZW5zKGZpZWxkLCBkcmFmdFtmaWVsZF0pLFxuICAgICAgb25LZXlEb3duOiAoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicpIGNvbW1pdFRva2VucyhmaWVsZCwgZHJhZnRbZmllbGRdKSB9LFxuICAgIH0pLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdChoaW50S2V5KSksXG4gIClcbiAgY29uc3QgbnVtYmVyRmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBoaW50S2V5LCBmYWxsYmFjaykgPT4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6IGZpZWxkIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgIGVsKCdpbnB1dCcsIHsgdHlwZTogJ251bWJlcicsIHN0ZXA6ICdhbnknLCBzdHlsZTogUy5pbnB1dCwgLi4ubnVtKGZpZWxkLCBmYWxsYmFjaykgfSksXG4gICAgaGludEtleSA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdChoaW50S2V5KSkgOiBudWxsLFxuICApXG4gIC8qKiBDb2xvdXIgcm93OiBuYXRpdmUgcGlja2VyICsgZWRpdGFibGUgaGV4LCBvcHRpb25hbCBjbGVhciAoZW1wdHkgPSBvZmZpY2lhbCkuICovXG4gIGNvbnN0IGNvbG9yRmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBmYWxsYmFja0hleCwgb3B0aW9uYWwsIGhpbnRLZXkpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gdHlwZW9mIHZhbHVlW2ZpZWxkXSA9PT0gJ3N0cmluZycgPyB2YWx1ZVtmaWVsZF0gOiAnJ1xuICAgIGNvbnN0IHNob3duID0gY3VycmVudCAhPT0gJycgPyBjdXJyZW50IDogKGZhbGxiYWNrSGV4ID8/ICcjMDAwMDAwJylcbiAgICByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IHsgLi4uUy5jb2wsIG1hcmdpbkJvdHRvbTogMTAgfSwga2V5OiBmaWVsZCB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93RmxleCB9LFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ2NvbG9yJywgdmFsdWU6IHNob3duLCBkaXNhYmxlZCwgc3R5bGU6IFMuY29sb3IsXG4gICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB3cml0ZShmaWVsZCwgZS50YXJnZXQudmFsdWUpLFxuICAgICAgICB9KSxcbiAgICAgICAgZWwoJ2lucHV0Jywge1xuICAgICAgICAgIHR5cGU6ICd0ZXh0Jywgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5oZXggfSwgZGlzYWJsZWQsXG4gICAgICAgICAgdmFsdWU6IGN1cnJlbnQsIHBsYWNlaG9sZGVyOiBvcHRpb25hbCA/IHQoJ2NvbG9yVW5zZXQnKSA6ICcnLFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgICAgICAgICAgaWYgKG5leHQgPT09ICcnICYmIG9wdGlvbmFsKSB3cml0ZShmaWVsZCwgJycpXG4gICAgICAgICAgICBlbHNlIGlmIChIRVgudGVzdChuZXh0KSkgd3JpdGUoZmllbGQsIG5leHQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIG9wdGlvbmFsICYmIGN1cnJlbnQgIT09ICcnXG4gICAgICAgICAgPyBlbChCdXR0b24sIHsgdmFyaWFudDogJ2dob3N0Jywgc2l6ZTogJ3NtJywgZGlzYWJsZWQsIG9uQ2xpY2s6ICgpID0+IHdyaXRlKGZpZWxkLCAnJykgfSwgdCgnY29sb3JSZXNldCcpKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICksXG4gICAgICBoaW50S2V5ID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gICAgKVxuICB9XG4gIGNvbnN0IGVuYWJsZU5vdGlmaWNhdGlvbnMgPSAobmV4dCkgPT4ge1xuICAgIGlmICghbmV4dCkgeyB3cml0ZSgnbm90aWZ5RW5hYmxlZCcsIGZhbHNlKTsgcmV0dXJuIH1cbiAgICB3cml0ZSgnbm90aWZ5RW5hYmxlZCcsIHRydWUpXG4gICAgcHJpbWVTb3VuZCgpXG4gICAgdm9pZCByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpLnRoZW4oc2V0UGVybWlzc2lvbilcbiAgfVxuXG4gIC8qKiBGZXRjaCBhIHByb3ZpZGVyJ3MgbW9kZWxzIGFuZCBidWlsZCBhIHBlci1tb2RlbCByZXZpZXcgb2Ygd2hhdCBpbXBvcnRpbmcgd291bGQgY2hhbmdlLiAqL1xuICBjb25zdCBmZXRjaFByZXZpZXcgPSBhc3luYyAocm91dGVJZCwgcHJvZmlsZSkgPT4ge1xuICAgIHNldEJ1c3lSb3V0ZShyb3V0ZUlkKVxuICAgIHNldEVucmljaE5vdGUoJycpXG4gICAgc2V0UHJldmlldyhudWxsKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByb2JlKHtcbiAgICAgICAgYmFzZVVSTDogcHJvZmlsZS5iYXNlVVJMLFxuICAgICAgICAuLi4odHlwZW9mIHByb2ZpbGUuYXBpS2V5RW52ID09PSAnc3RyaW5nJyAmJiBwcm9maWxlLmFwaUtleUVudiAhPT0gJycgPyB7IGFwaUtleUVudjogcHJvZmlsZS5hcGlLZXlFbnYgfSA6IHt9KSxcbiAgICAgIH0pXG4gICAgICBjb25zdCBmb3VuZCA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2U/Lm1vZGVscykgPyByZXNwb25zZS5tb2RlbHMgOiBbXVxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBBcnJheS5pc0FycmF5KHByb2ZpbGUubW9kZWxzKSA/IHByb2ZpbGUubW9kZWxzIDogW11cbiAgICAgIGNvbnN0IGJ5SWQgPSBuZXcgTWFwKGV4aXN0aW5nLm1hcCgobSkgPT4gW20uaWQsIG1dKSlcbiAgICAgIGNvbnN0IHJvd3MgPSBmb3VuZC5tYXAoKG0pID0+IHtcbiAgICAgICAgY29uc3QgY3VyID0gYnlJZC5nZXQobS5pZClcbiAgICAgICAgaWYgKGN1ciA9PT0gdW5kZWZpbmVkKSByZXR1cm4geyBpZDogbS5pZCwgbmFtZTogbS5uYW1lLCBpc05ldzogdHJ1ZSwgY2hhbmdlczogW10sIHZhbHVlOiBtLCBzZWxlY3RlZDogdHJ1ZSB9XG4gICAgICAgIGNvbnN0IGNoYW5nZXMgPSBbXVxuICAgICAgICBpZiAobS5jb250ZXh0V2luZG93ICE9PSB1bmRlZmluZWQgJiYgY3VyLmNvbnRleHRXaW5kb3cgIT09IG0uY29udGV4dFdpbmRvdykgY2hhbmdlcy5wdXNoKHsgZmllbGQ6ICdjb250ZXh0V2luZG93JywgZnJvbTogY3VyLmNvbnRleHRXaW5kb3csIHRvOiBtLmNvbnRleHRXaW5kb3cgfSlcbiAgICAgICAgaWYgKG0ubWF4VG9rZW5zICE9PSB1bmRlZmluZWQgJiYgY3VyLm1heFRva2VucyAhPT0gbS5tYXhUb2tlbnMpIGNoYW5nZXMucHVzaCh7IGZpZWxkOiAnbWF4VG9rZW5zJywgZnJvbTogY3VyLm1heFRva2VucywgdG86IG0ubWF4VG9rZW5zIH0pXG4gICAgICAgIGNvbnN0IGZyb21JbnB1dCA9IEFycmF5LmlzQXJyYXkoY3VyLmlucHV0KSA/IGN1ci5pbnB1dC5qb2luKCcrJykgOiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgdG9JbnB1dCA9IEFycmF5LmlzQXJyYXkobS5pbnB1dCkgPyBtLmlucHV0LmpvaW4oJysnKSA6IHVuZGVmaW5lZFxuICAgICAgICBpZiAodG9JbnB1dCAhPT0gdW5kZWZpbmVkICYmIHRvSW5wdXQgIT09IGZyb21JbnB1dCkgY2hhbmdlcy5wdXNoKHsgZmllbGQ6ICdpbnB1dCcsIGZyb206IGZyb21JbnB1dCwgdG86IHRvSW5wdXQgfSlcbiAgICAgICAgcmV0dXJuIHsgaWQ6IG0uaWQsIG5hbWU6IG0ubmFtZSwgaXNOZXc6IGZhbHNlLCBjaGFuZ2VzLCB2YWx1ZTogbSwgc2VsZWN0ZWQ6IGNoYW5nZXMubGVuZ3RoID4gMCB9XG4gICAgICB9KVxuICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7IHNldEVucmljaE5vdGUodCgnbm9Nb2RlbHMnKSk7IHJldHVybiB9XG4gICAgICBzZXRQcmV2aWV3KHsgcm91dGVJZCwgcm93cyB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFbnJpY2hOb3RlKHQoJ2Vycm9yUHJlZml4JykgKyBTdHJpbmcoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcikpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldEJ1c3lSb3V0ZSgnJylcbiAgICB9XG4gIH1cblxuICBjb25zdCB0b2dnbGVQcmV2aWV3ID0gKGlkKSA9PiBzZXRQcmV2aWV3KChwKSA9PiAocCA9PT0gbnVsbCA/IHAgOiB7IC4uLnAsIHJvd3M6IHAucm93cy5tYXAoKHIpID0+IChyLmlkID09PSBpZCA/IHsgLi4uciwgc2VsZWN0ZWQ6ICFyLnNlbGVjdGVkIH0gOiByKSkgfSkpXG4gIGNvbnN0IHRvZ2dsZUFsbFByZXZpZXcgPSAobmV4dCkgPT4gc2V0UHJldmlldygocCkgPT4gKHAgPT09IG51bGwgPyBwIDogeyAuLi5wLCByb3dzOiBwLnJvd3MubWFwKChyKSA9PiAoeyAuLi5yLCBzZWxlY3RlZDogbmV4dCB9KSkgfSkpXG5cbiAgLyoqIEltcG9ydCB0aGUgc2VsZWN0ZWQgc2VydmVyIHZhbHVlcyAodXBkYXRlIGV4aXN0aW5nIGVudHJpZXMsIGFwcGVuZCBuZXcgb25lcykuICovXG4gIGNvbnN0IGFwcGx5UHJldmlldyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwID0gcHJldmlld1xuICAgIGlmIChwID09PSBudWxsKSByZXR1cm5cbiAgICBjb25zdCBwcm9maWxlID0gKHByb3ZpZGVycyAhPT0gbnVsbCAmJiB0eXBlb2YgcHJvdmlkZXJzID09PSAnb2JqZWN0JyA/IHByb3ZpZGVyc1twLnJvdXRlSWRdIDogdW5kZWZpbmVkKSA/PyB7fVxuICAgIGNvbnN0IGV4aXN0aW5nID0gQXJyYXkuaXNBcnJheShwcm9maWxlLm1vZGVscykgPyBwcm9maWxlLm1vZGVscyA6IFtdXG4gICAgY29uc3Qgc2VsZWN0ZWRCeUlkID0gbmV3IE1hcChwLnJvd3MuZmlsdGVyKChyKSA9PiByLnNlbGVjdGVkKS5tYXAoKHIpID0+IFtyLmlkLCByXSkpXG4gICAgY29uc3QgbmV4dCA9IGV4aXN0aW5nLm1hcCgobSkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gc2VsZWN0ZWRCeUlkLmdldChtLmlkKVxuICAgICAgaWYgKHJvdyA9PT0gdW5kZWZpbmVkIHx8IHJvdy5pc05ldykgcmV0dXJuIG1cbiAgICAgIGNvbnN0IHYgPSByb3cudmFsdWVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm0sXG4gICAgICAgIC4uLih2LmNvbnRleHRXaW5kb3cgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBjb250ZXh0V2luZG93OiB2LmNvbnRleHRXaW5kb3cgfSksXG4gICAgICAgIC4uLih2Lm1heFRva2VucyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IG1heFRva2Vuczogdi5tYXhUb2tlbnMgfSksXG4gICAgICAgIC4uLih2LmlucHV0ID09PSB1bmRlZmluZWQgPyB7fSA6IHsgaW5wdXQ6IFsuLi52LmlucHV0XSB9KSxcbiAgICAgIH1cbiAgICB9KVxuICAgIGZvciAoY29uc3Qgcm93IG9mIHAucm93cykge1xuICAgICAgaWYgKCFyb3cuaXNOZXcgfHwgIXJvdy5zZWxlY3RlZCkgY29udGludWVcbiAgICAgIGNvbnN0IHYgPSByb3cudmFsdWVcbiAgICAgIG5leHQucHVzaCh7XG4gICAgICAgIGlkOiB2LmlkLFxuICAgICAgICBuYW1lOiB2Lm5hbWUsXG4gICAgICAgIC4uLih2LmNvbnRleHRXaW5kb3cgPT09IHVuZGVmaW5lZCA/IHt9IDogeyBjb250ZXh0V2luZG93OiB2LmNvbnRleHRXaW5kb3cgfSksXG4gICAgICAgIC4uLih2Lm1heFRva2VucyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IG1heFRva2Vuczogdi5tYXhUb2tlbnMgfSksXG4gICAgICAgIC4uLih2LmlucHV0ID09PSB1bmRlZmluZWQgPyB7fSA6IHsgaW5wdXQ6IFsuLi52LmlucHV0XSB9KSxcbiAgICAgIH0pXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB3cml0ZU1vZGVscyhwLnJvdXRlSWQsIG5leHQpXG4gICAgICBzZXRFbnJpY2hOb3RlKHQoJ2FwcGxpZWQnLCB7IGNvdW50OiBzZWxlY3RlZEJ5SWQuc2l6ZSB9KSlcbiAgICAgIHNldFByZXZpZXcobnVsbClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RW5yaWNoTm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKVxuICAgIH1cbiAgfVxuXG4gIC8qKiBPbmUgcm93IG9mIHRoZSBpbXBvcnQgcmV2aWV3OiBjaGVja2JveCwgbW9kZWwgbmFtZSwgYW5kIHRoZSBwZW5kaW5nIGNoYW5nZXMuICovXG4gIGNvbnN0IGNoYW5nZVRleHQgPSAocm93KSA9PiB7XG4gICAgY29uc3QgZm10ID0gKHYpID0+ICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCB8fCB2ID09PSAnJyA/ICdcXHUyMDE0JyA6IFN0cmluZyh2KSlcbiAgICBpZiAocm93LmlzTmV3KSByZXR1cm4gdCgncHJldmlld05ldycpXG4gICAgaWYgKHJvdy5jaGFuZ2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHQoJ3ByZXZpZXdOb0NoYW5nZScpXG4gICAgcmV0dXJuIHJvdy5jaGFuZ2VzLm1hcCgoYykgPT4gYCR7Yy5maWVsZH06ICR7Zm10KGMuZnJvbSl9IFxcdTIxOTIgJHtmbXQoYy50byl9YCkuam9pbignICBcXHUwMGI3ICAnKVxuICB9XG5cbiAgY29uc3QgcHJldmlld1BhbmVsID0gKHApID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHAucm93cy5maWx0ZXIoKHIpID0+IHIuc2VsZWN0ZWQpLmxlbmd0aFxuICAgIGNvbnN0IGFsbCA9IHAucm93cy5sZW5ndGggPiAwICYmIHNlbGVjdGVkID09PSBwLnJvd3MubGVuZ3RoXG4gICAgcmV0dXJuIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnByZXZpZXcsIGtleTogJ3ByZXZpZXcnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3ByZXZpZXdUaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgncHJldmlld0hpbnQnKSksXG4gICAgICBlbCgnbGFiZWwnLCB7IHN0eWxlOiB7IC4uLlMucHJldmlld1JvdywgYm9yZGVyQm90dG9tOiAnMC41cHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sMyknLCBmb250V2VpZ2h0OiA2MDAgfSB9LFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICBjaGVja2VkOiBhbGwsXG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgcmVmOiAobm9kZSkgPT4geyBpZiAobm9kZSkgbm9kZS5pbmRldGVybWluYXRlID0gIWFsbCAmJiBzZWxlY3RlZCA+IDAgfSxcbiAgICAgICAgICBvbkNoYW5nZTogKCkgPT4gdG9nZ2xlQWxsUHJldmlldyghYWxsKSxcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6IHQoJ3NlbGVjdEFsbCcpLFxuICAgICAgICB9KSxcbiAgICAgICAgZWwoJ3NwYW4nLCBudWxsLCB0KCdzZWxlY3RBbGwnKSksXG4gICAgICApLFxuICAgICAgLi4ucC5yb3dzLm1hcCgocm93KSA9PiBlbCgnbGFiZWwnLCB7IGtleTogcm93LmlkLCBzdHlsZTogUy5wcmV2aWV3Um93IH0sXG4gICAgICAgIGVsKCdpbnB1dCcsIHsgdHlwZTogJ2NoZWNrYm94JywgY2hlY2tlZDogcm93LnNlbGVjdGVkLCBkaXNhYmxlZCwgb25DaGFuZ2U6ICgpID0+IHRvZ2dsZVByZXZpZXcocm93LmlkKSB9KSxcbiAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGZvbnRXZWlnaHQ6IDYwMCwgbWF4V2lkdGg6IDIwMCwgbWluV2lkdGg6IDAsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sIHJvdy5uYW1lKSxcbiAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiB9IH0sIGNoYW5nZVRleHQocm93KSksXG4gICAgICApKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiB7IC4uLlMucm93RmxleCwgbWFyZ2luVG9wOiA4IH0gfSxcbiAgICAgICAgZWwoQnV0dG9uLCB7IHZhcmlhbnQ6ICdwcmltYXJ5Jywgc2l6ZTogJ3NtJywgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IHNlbGVjdGVkID09PSAwLCBvbkNsaWNrOiAoKSA9PiB7IHZvaWQgYXBwbHlQcmV2aWV3KCkgfSB9LCB0KCdhcHBseScsIHsgY291bnQ6IHNlbGVjdGVkIH0pKSxcbiAgICAgICAgZWwoQnV0dG9uLCB7IHZhcmlhbnQ6ICdnaG9zdCcsIHNpemU6ICdzbScsIGRpc2FibGVkLCBvbkNsaWNrOiAoKSA9PiBzZXRQcmV2aWV3KG51bGwpIH0sIHQoJ2NhbmNlbCcpKSxcbiAgICAgICksXG4gICAgKVxuICB9XG5cbiAgY29uc3QgcHJvdmlkZXJSb3dzID0gT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzICE9PSBudWxsICYmIHR5cGVvZiBwcm92aWRlcnMgPT09ICdvYmplY3QnID8gcHJvdmlkZXJzIDoge30pLm1hcCgoW3JvdXRlSWQsIHByb2ZpbGVdKSA9PiB7XG4gICAgY29uc3QgYmFzZVVSTCA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9maWxlLmJhc2VVUkwgPT09ICdzdHJpbmcnID8gcHJvZmlsZS5iYXNlVVJMIDogJydcbiAgICByZXR1cm4gZWwoJ2RpdicsIHsga2V5OiByb3V0ZUlkLCBzdHlsZTogUy5wcm92aWRlckJsb2NrIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDggfSB9LFxuICAgICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgZmxleDogMSwgbWluV2lkdGg6IDAsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sIGAke3JvdXRlSWR9JHtiYXNlVVJMID8gYCBcdTIwMTQgJHtiYXNlVVJMfWAgOiAnJ31gKSxcbiAgICAgICAgYmFzZVVSTFxuICAgICAgICAgID8gZWwoQnV0dG9uLCB7IHZhcmlhbnQ6ICdvdXRsaW5lJywgc2l6ZTogJ3NtJywgZGlzYWJsZWQ6IGJ1c3lSb3V0ZSA9PT0gcm91dGVJZCB8fCBkaXNhYmxlZCwgb25DbGljazogKCkgPT4geyB2b2lkIGZldGNoUHJldmlldyhyb3V0ZUlkLCBwcm9maWxlKSB9IH0sIGJ1c3lSb3V0ZSA9PT0gcm91dGVJZCA/IHQoJ2VucmljaGluZycpIDogdCgnZW5yaWNoJykpXG4gICAgICAgICAgOiBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBmbGV4U2hyaW5rOiAwIH0gfSwgdCgnbm9CYXNlVXJsJykpLFxuICAgICAgKSxcbiAgICAgIHByZXZpZXcgIT09IG51bGwgJiYgcHJldmlldy5yb3V0ZUlkID09PSByb3V0ZUlkID8gcHJldmlld1BhbmVsKHByZXZpZXcpIDogbnVsbCxcbiAgICApXG4gIH0pXG5cbiAgLy8gU3VtbWFyaXphdGlvbiBtb2RlbC9yZWFzb25pbmcgcGlja2Vycy5cbiAgY29uc3QgbW9kZSA9IHZhbHVlLnN1bW1hcml6YXRpb25Nb2RlID09PSAnY3VzdG9tJyA/ICdjdXN0b20nIDogJ3Nlc3Npb24nXG4gIGNvbnN0IHByb3ZpZGVyTmFtZXMgPSBbLi4ubmV3IFNldChjYXRhbG9nLm1hcCgocikgPT4gci5wcm92aWRlcikpXVxuICBjb25zdCBzZWxlY3RlZFByb3ZpZGVyID0gdmFsdWUuc3VtbWFyaXphdGlvblByb3ZpZGVyIHx8IHByb3ZpZGVyTmFtZXNbMF0gfHwgJydcbiAgY29uc3QgbW9kZWxzRm9yUHJvdmlkZXIgPSBjYXRhbG9nLmZpbHRlcigocikgPT4gci5wcm92aWRlciA9PT0gc2VsZWN0ZWRQcm92aWRlcilcbiAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBtb2RlbHNGb3JQcm92aWRlci5maW5kKChyKSA9PiByLm1vZGVsID09PSB2YWx1ZS5zdW1tYXJpemF0aW9uTW9kZWwpIHx8IG1vZGVsc0ZvclByb3ZpZGVyWzBdXG4gIGNvbnN0IGxldmVsU2V0ID0gWydkZWZhdWx0JywgJ29mZicsIC4uLihzZWxlY3RlZFJvdyA/IHNlbGVjdGVkUm93LmxldmVscyA6IFtdKV1cbiAgY29uc3QgcmVhc29uaW5nID0gdmFsdWUuc3VtbWFyaXphdGlvblJlYXNvbmluZyB8fCAnZGVmYXVsdCdcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IChwYWlycykgPT4gcGFpcnMubWFwKChbdiwgbGFiZWxdKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHYsIHZhbHVlOiB2IH0sIGxhYmVsKSlcblxuICBjb25zdCBzdW1tYXJpemF0aW9uID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAnbW9kZScgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ3N1bW1hcml6YXRpb25Nb2RlJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHsgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBtb2RlLCBvbkNoYW5nZTogKGUpID0+IHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZScsIGUudGFyZ2V0LnZhbHVlKSB9LFxuICAgICAgICBzZWxlY3RPcHRpb25zKFtbJ3Nlc3Npb24nLCB0KCdtb2RlU2Vzc2lvbicpXSwgWydjdXN0b20nLCB0KCdtb2RlQ3VzdG9tJyldXSkpLFxuICAgICksXG4gIF1cbiAgaWYgKG1vZGUgPT09ICdjdXN0b20nKSB7XG4gICAgc3VtbWFyaXphdGlvbi5wdXNoKGVsKCdkaXYnLCB7IHN0eWxlOiBTLmNvbCwga2V5OiAncHJvdmlkZXInIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdwcm92aWRlcicpKSxcbiAgICAgIGVsKCdzZWxlY3QnLCB7XG4gICAgICAgIHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLCB2YWx1ZTogc2VsZWN0ZWRQcm92aWRlcixcbiAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV4dCA9IGNhdGFsb2cuZmluZCgocikgPT4gci5wcm92aWRlciA9PT0gZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgd3JpdGUoJ3N1bW1hcml6YXRpb25Qcm92aWRlcicsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIGlmIChuZXh0KSB3cml0ZSgnc3VtbWFyaXphdGlvbk1vZGVsJywgbmV4dC5tb2RlbClcbiAgICAgICAgICB3cml0ZSgnc3VtbWFyaXphdGlvblJlYXNvbmluZycsICdkZWZhdWx0JylcbiAgICAgICAgfSxcbiAgICAgIH0sIHByb3ZpZGVyTmFtZXMubWFwKChwKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHAsIHZhbHVlOiBwIH0sIHApKSksXG4gICAgKSlcbiAgICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdtb2RlbCcgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ21vZGVsJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHtcbiAgICAgICAgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsXG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZFJvdyA/IHNlbGVjdGVkUm93Lm1vZGVsIDogJycsXG4gICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4geyB3cml0ZSgnc3VtbWFyaXphdGlvbk1vZGVsJywgZS50YXJnZXQudmFsdWUpOyB3cml0ZSgnc3VtbWFyaXphdGlvblJlYXNvbmluZycsICdkZWZhdWx0JykgfSxcbiAgICAgIH0sIG1vZGVsc0ZvclByb3ZpZGVyLm1hcCgocikgPT4gZWwoJ29wdGlvbicsIHsga2V5OiByLm1vZGVsLCB2YWx1ZTogci5tb2RlbCB9LCByLm5hbWUpKSksXG4gICAgKSlcbiAgfVxuICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdyZWFzb25pbmcnIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgncmVhc29uaW5nJykpLFxuICAgIGVsKCdzZWxlY3QnLCB7IHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLCB2YWx1ZTogbGV2ZWxTZXQuaW5jbHVkZXMocmVhc29uaW5nKSA/IHJlYXNvbmluZyA6ICdkZWZhdWx0Jywgb25DaGFuZ2U6IChlKSA9PiB3cml0ZSgnc3VtbWFyaXphdGlvblJlYXNvbmluZycsIGUudGFyZ2V0LnZhbHVlKSB9LFxuICAgICAgbGV2ZWxTZXQubWFwKChsdikgPT4gZWwoJ29wdGlvbicsIHsga2V5OiBsdiwgdmFsdWU6IGx2IH0sIGx2ID09PSAnZGVmYXVsdCcgPyB0KCdyZWFzb25pbmdEZWZhdWx0JykgOiBsdiA9PT0gJ29mZicgPyB0KCdyZWFzb25pbmdPZmYnKSA6IGx2KSkpLFxuICApKVxuXG4gIGNvbnN0IGNvbXBhY3Rpb25QYW5lbCA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cEZpcnN0LCBrZXk6ICd0aHJlc2hvbGQnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3RocmVzaG9sZFRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIHRleHRGaWVsZCgndGhyZXNob2xkVG9rZW5zJywgJ3RocmVzaG9sZFRva2VucycsICd0aHJlc2hvbGRUb2tlbnNIaW50JyksXG4gICAgICAgIHRleHRGaWVsZCgnY29udGV4dFdpbmRvdycsICdjb250ZXh0V2luZG93VG9rZW5zJywgJ2NvbnRleHRXaW5kb3dIaW50JyksXG4gICAgICApLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIG51bWJlckZpZWxkKCd0aHJlc2hvbGRSYXRpbycsICd0aHJlc2hvbGRSYXRpbycsICd0aHJlc2hvbGRSYXRpb0hpbnQnLCAwLjgpLFxuICAgICAgICBudW1iZXJGaWVsZCgnaGVhZHJvb20nLCAnaGVhZHJvb21Ub2tlbnMnLCAnaGVhZHJvb21IaW50JywgMzI3NjgpLFxuICAgICAgKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdyZXRlbnRpb24nIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3JldGVudGlvblRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIHRleHRGaWVsZCgncmV0YWluVG9rZW5zJywgJ3JldGFpblRva2VucycsICdyZXRhaW5Ub2tlbnNIaW50JyksXG4gICAgICAgIG51bWJlckZpZWxkKCdyZXRhaW5SYXRpbycsICdyZXRhaW5SYXRpbycsIG51bGwsIDAuMTYpLFxuICAgICAgKSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwLCBrZXk6ICdiZWhhdmlvdXInIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ2JlaGF2aW91clRpdGxlJykpLFxuICAgICAgc3dpdGNoRmllbGQoJ2F1dG8nLCAnYXV0bycsICdhdXRvSGludCcsIHRydWUpLFxuICAgICAgc3dpdGNoRmllbGQoJ3R1cm5FbmQnLCAndHVybkVuZENvbXBhY3Rpb25FbmFibGVkJywgJ3R1cm5FbmRIaW50JywgZmFsc2UpLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ3N1bW1hcml6YXRpb24nIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3N1bW1hcml6YXRpb25UaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3byB9LCBzdW1tYXJpemF0aW9uKSxcbiAgICAgIG51bWJlckZpZWxkKCdtYXhUb2tlbnMnLCAnbWF4VG9rZW5zJywgbnVsbCwgMzI3NjgpLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ2FkdmFuY2VkJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdhZHZhbmNlZFRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sXG4gICAgICAgIG51bWJlckZpZWxkKCdjb21wYWN0aW9uUmV0cmllcycsICdjb21wYWN0aW9uUmV0cmllcycsIG51bGwsIDEpLFxuICAgICAgICBudW1iZXJGaWVsZCgnbWF4T3ZlcmZsb3dSZXRyaWVzJywgJ21heE92ZXJmbG93UmV0cmllcycsIG51bGwsIDEpLFxuICAgICAgKSxcbiAgICApLFxuICBdXG5cbiAgY29uc3QgbW9kZWxzUGFuZWwgPSBbXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBGaXJzdCwga2V5OiAnbW9kZWxzJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdtb2RlbHNUaXRsZScpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnbW9kZWxzSW50cm8nKSksXG4gICAgICAuLi5wcm92aWRlclJvd3MsXG4gICAgICBlbnJpY2hOb3RlID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCBlbnJpY2hOb3RlKSA6IG51bGwsXG4gICAgKSxcbiAgXVxuXG4gIGNvbnN0IHZvbHVtZU5vdyA9IHR5cGVvZiB2YWx1ZS5ub3RpZnlWb2x1bWUgPT09ICdudW1iZXInID8gdmFsdWUubm90aWZ5Vm9sdW1lIDogMC42XG4gIGNvbnN0IHNvdW5kU2VsZWN0T3B0aW9ucyA9ICgpID0+IFtcbiAgICBlbCgnb3B0aW9uJywgeyBrZXk6IFNPVU5EX05PTkUsIHZhbHVlOiBTT1VORF9OT05FIH0sIHQoJ3NvdW5kTm9Tb3VuZCcpKSxcbiAgICBlbCgnb3B0Z3JvdXAnLCB7IGtleTogJ2J1aWx0aW4nLCBsYWJlbDogdCgnc291bmRQYWNrQnVpbHRpbicpIH0sXG4gICAgICBCVUlMVElOX1NPVU5EUy5tYXAoKHNvdW5kKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHNvdW5kLmlkLCB2YWx1ZTogc291bmQuaWQgfSwgdChzb3VuZC5sYWJlbEtleSkpKSksXG4gICAgLi4uU09VTkRfUEFDS1MubWFwKChwYWNrKSA9PiBlbCgnb3B0Z3JvdXAnLCB7IGtleTogcGFjay5wcmVmaXgsIGxhYmVsOiBwYWNrLm5hbWUgfSxcbiAgICAgIHBhY2tTb3VuZElkcyhwYWNrKS5tYXAoKGlkLCBpbmRleCkgPT4gZWwoJ29wdGlvbicsIHsga2V5OiBpZCwgdmFsdWU6IGlkIH0sIGAke3BhY2submFtZX0gJHtTdHJpbmcoaW5kZXggKyAxKS5wYWRTdGFydCgyLCAnMCcpfWApKSkpLFxuICBdXG4gIC8qKiBTb3VuZCBzZWxlY3RvcjsgcGlja2luZyBvbmUgcHJldmlld3MgaXQgKGFuZCB1bmxvY2tzIGF1ZGlvIGluIHRoZSBnZXN0dXJlKS4gKi9cbiAgY29uc3Qgc291bmRTZWxlY3QgPSAobGFiZWxLZXksIGZpZWxkLCBraW5kKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogeyAuLi5TLmNvbCwgbWFyZ2luQm90dG9tOiAxMCB9LCBrZXk6IGZpZWxkIH0sXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgIGVsKCdzZWxlY3QnLCB7XG4gICAgICBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCxcbiAgICAgIHZhbHVlOiB0eXBlb2YgdmFsdWVbZmllbGRdID09PSAnc3RyaW5nJyA/IHZhbHVlW2ZpZWxkXSA6IFNPVU5EX05PTkUsXG4gICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICB3cml0ZShmaWVsZCwgaWQpXG4gICAgICAgIHByaW1lU291bmQoKVxuICAgICAgICBpZiAoaWQgIT09IFNPVU5EX05PTkUpIHBsYXlTb3VuZChpZCwgdm9sdW1lTm93LCBraW5kKVxuICAgICAgfSxcbiAgICB9LCBzb3VuZFNlbGVjdE9wdGlvbnMoKSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdzb3VuZEhpbnQnKSksXG4gIClcblxuICBjb25zdCBub3RpZmljYXRpb25zRW5hYmxlZCA9IHZhbHVlLm5vdGlmeUVuYWJsZWQgIT09IHVuZGVmaW5lZCA/ICEhdmFsdWUubm90aWZ5RW5hYmxlZCA6IGZhbHNlXG4gIGNvbnN0IG5vdGlmaWNhdGlvbnNQYW5lbCA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cEZpcnN0LCBrZXk6ICdjb2xvcnMnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ2NvbG9yc0dyb3VwJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdjb2xvcnNJbnRybycpKSxcbiAgICAgIHN3aXRjaEZpZWxkKCdjb2xvcnNFbmFibGVkJywgJ2NvbG9yc0VuYWJsZWQnLCAnY29sb3JzRW5hYmxlZEhpbnQnLCB0cnVlKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLnJvd1R3bywga2V5OiAnY29sb3JzMScgfSxcbiAgICAgICAgY29sb3JGaWVsZCgnZ3JlZW5MYWJlbCcsICdncmVlbicsICcjMjJDNTVFJywgZmFsc2UsIG51bGwpLFxuICAgICAgICBjb2xvckZpZWxkKCdhbWJlckxhYmVsJywgJ2FtYmVyJywgJyNGNTlFMEInLCBmYWxzZSwgbnVsbCksXG4gICAgICApLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvLCBrZXk6ICdjb2xvcnMyJyB9LFxuICAgICAgICBjb2xvckZpZWxkKCd3b3JraW5nTGFiZWwnLCAnd29ya2luZycsICcjM0I4MkY2JywgZmFsc2UsICd3b3JraW5nSGludCcpLFxuICAgICAgICBjb2xvckZpZWxkKCdibGFja0xhYmVsJywgJ2JsYWNrJywgJyMwMDAwMDAnLCB0cnVlLCAnYmxhY2tIaW50JyksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ25vdGlmeScgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnbm90aWZ5R3JvdXAnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ25vdGlmeUludHJvJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudG9nZ2xlLCBrZXk6ICdub3RpZnlFbmFibGVkJyB9LFxuICAgICAgICBlbChTd2l0Y2gsIHtcbiAgICAgICAgICBjaGVja2VkOiBub3RpZmljYXRpb25zRW5hYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICBsYWJlbDogdCgnbm90aWZ5RW5hYmxlZCcpLFxuICAgICAgICAgIG9uQ2hhbmdlOiBlbmFibGVOb3RpZmljYXRpb25zLFxuICAgICAgICB9KSxcbiAgICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudG9nZ2xlVGV4dCB9LFxuICAgICAgICAgIGVsKCdzcGFuJywgeyBzdHlsZTogUy50b2dnbGVMYWJlbCB9LCB0KCdub3RpZnlFbmFibGVkJykpLFxuICAgICAgICAgIGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIgfSB9LCB0KCdub3RpZnlFbmFibGVkSGludCcpKSxcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgICBub3RpZmljYXRpb25zRW5hYmxlZCAmJiBwZXJtaXNzaW9uID09PSAnZGVuaWVkJyA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmVycm9yIH0sIHQoJ3Blcm1pc3Npb25EZW5pZWQnKSkgOiBudWxsLFxuICAgICAgbm90aWZpY2F0aW9uc0VuYWJsZWQgJiYgcGVybWlzc2lvbiA9PT0gJ3Vuc3VwcG9ydGVkJyA/IGVsKCdkaXYnLCB7IHN0eWxlOiBTLmVycm9yIH0sIHQoJ3Blcm1pc3Npb25VbnN1cHBvcnRlZCcpKSA6IG51bGwsXG4gICAgICBzd2l0Y2hGaWVsZCgnbm90aWZ5Rm9yZWdyb3VuZCcsICdub3RpZnlGb3JlZ3JvdW5kJywgJ25vdGlmeUZvcmVncm91bmRIaW50JywgZmFsc2UpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudG9nZ2xlLCBrZXk6ICd2b2x1bWUnIH0sXG4gICAgICAgIGVsKCdzcGFuJywgeyBzdHlsZTogUy50b2dnbGVMYWJlbCB9LCB0KCdub3RpZnlWb2x1bWUnKSksXG4gICAgICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgICAgICB0eXBlOiAncmFuZ2UnLCBtaW46IDAsIG1heDogMTAwLCBzdGVwOiA1LCBkaXNhYmxlZCxcbiAgICAgICAgICB2YWx1ZTogTWF0aC5yb3VuZCh2b2x1bWVOb3cgKiAxMDApLCAnYXJpYS1sYWJlbCc6IHQoJ25vdGlmeVZvbHVtZScpLFxuICAgICAgICAgIHN0eWxlOiB7IGZsZXg6ICcwIDAgYXV0bycsIHdpZHRoOiAxNDAsIGFjY2VudENvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWJyYW5kLXByaW1hcnkpJywgY3Vyc29yOiAncG9pbnRlcicgfSxcbiAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHdyaXRlKCdub3RpZnlWb2x1bWUnLCBOdW1iZXIoZS50YXJnZXQudmFsdWUpIC8gMTAwKSxcbiAgICAgICAgfSksXG4gICAgICAgIGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIsIG1pbldpZHRoOiAzNiwgdGV4dEFsaWduOiAncmlnaHQnIH0gfSwgYCR7TWF0aC5yb3VuZCh2b2x1bWVOb3cgKiAxMDApfSVgKSxcbiAgICAgICksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnZG9uZScgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnbm90aWZ5RG9uZUdyb3VwJykpLFxuICAgICAgc3dpdGNoRmllbGQoJ25vdGlmeURvbmVFbmFibGVkJywgJ25vdGlmeURvbmVFbmFibGVkJywgJ25vdGlmeURvbmVFbmFibGVkSGludCcsIHRydWUpLFxuICAgICAgc3dpdGNoRmllbGQoJ3BlcnNpc3REb25lJywgJ25vdGlmeURvbmVQZXJzaXN0ZW50JywgJ3BlcnNpc3RIaW50JywgZmFsc2UpLFxuICAgICAgc291bmRTZWxlY3QoJ3NvdW5kJywgJ25vdGlmeURvbmVTb3VuZCcsICdkb25lJyksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAncGVuZGluZycgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnbm90aWZ5UGVuZGluZ0dyb3VwJykpLFxuICAgICAgc3dpdGNoRmllbGQoJ25vdGlmeVBlbmRpbmdFbmFibGVkJywgJ25vdGlmeVBlbmRpbmdFbmFibGVkJywgJ25vdGlmeVBlbmRpbmdFbmFibGVkSGludCcsIHRydWUpLFxuICAgICAgc3dpdGNoRmllbGQoJ3BlcnNpc3RQZW5kaW5nJywgJ25vdGlmeVBlbmRpbmdQZXJzaXN0ZW50JywgJ3BlcnNpc3RIaW50JywgZmFsc2UpLFxuICAgICAgc291bmRTZWxlY3QoJ3NvdW5kJywgJ25vdGlmeVBlbmRpbmdTb3VuZCcsICdwZW5kaW5nJyksXG4gICAgKSxcbiAgXVxuXG4gIGNvbnN0IHBhbmVscyA9IHsgY29tcGFjdGlvbjogY29tcGFjdGlvblBhbmVsLCBtb2RlbHM6IG1vZGVsc1BhbmVsLCBub3RpZmljYXRpb25zOiBub3RpZmljYXRpb25zUGFuZWwgfVxuXG4gIHJldHVybiBlbCgnZGl2JywgeyByZWY6IHdyYXBSZWYsIHN0eWxlOiBTLndyYXAgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3RpdGxlJykpLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiB7IC4uLlMuaGludCwgbWFyZ2luQm90dG9tOiA4IH0gfSwgdCgnaW50cm8nKSksXG4gICAgZWwoJ2RpdicsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIC4uLlMudGFicyxcbiAgICAgICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHpJbmRleDogNSxcbiAgICAgICAgcGFkZGluZ1RvcDogNCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogOCxcbiAgICAgICAgYmFja2dyb3VuZDogc3RpY2t5QmcgfHwgJ3ZhcigtLWRzdy1hbGlhcy1iZy1sYXllci0zLCAjMmMyYzJlKScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgICBlbChTZWdtZW50ZWRDb250cm9sLCB7XG4gICAgICAgIGlkOiBUQUJTX0lELFxuICAgICAgICB2YWx1ZTogdGFiLFxuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgeyB2YWx1ZTogJ2NvbXBhY3Rpb24nLCBsYWJlbDogdCgndGFiQ29tcGFjdGlvbicpIH0sXG4gICAgICAgICAgeyB2YWx1ZTogJ25vdGlmaWNhdGlvbnMnLCBsYWJlbDogdCgndGFiTm90aWZpY2F0aW9ucycpIH0sXG4gICAgICAgICAgeyB2YWx1ZTogJ21vZGVscycsIGxhYmVsOiB0KCd0YWJNb2RlbHMnKSB9LFxuICAgICAgICBdLFxuICAgICAgICBvbkNoYW5nZTogc2V0VGFiLFxuICAgICAgICBsYWJlbDogdCgndGl0bGUnKSxcbiAgICAgIH0pLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgaWQ6IGAke1RBQlNfSUR9LSR7dGFifS1wYW5lbGAsIHJvbGU6ICd0YWJwYW5lbCcgfSwgLi4uKHBhbmVsc1t0YWJdID8/IGNvbXBhY3Rpb25QYW5lbCkpLFxuICAgIG5vdGUgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5lcnJvciB9LCBub3RlKSA6IG51bGwsXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcGx5KGN0eCkge1xuICBjdHguZWZmZWN0KCgpID0+IGN0eC5sb2NhbGUucmVnaXN0ZXIoTE9DQUxFX05TLCB7IGVuLCB6aCB9KSwgJ21hbGtvLXByZWZzOiBsb2NhbGUgZGljdGlvbmFyaWVzJylcbiAgY29uc3QgdCA9IGN0eC5sb2NhbGUuYmluZChMT0NBTEVfTlMpXG4gIGNvbnN0IGZvcm0gPSBjdHguY29uZmlnRm9ybXMuZ2V0KE5TKVxuICBjb25zdCBtb2RlbEZvcm0gPSBjdHguY29uZmlnRm9ybXMuZ2V0KE1PREVMX05TKVxuICAvLyBUaGUgYXBwbGljYXRpb24gb25seSBhdXRvLW1vdW50cyBpdHMgb3duIFJlbW90ZSBzZWxlY3Rpb24sIHNvIGEgcGx1Z2luXG4gIC8vIHNoaXBzIGFuZCBtb3VudHMgaXRzIG93biBjb250cmlidXRpb24uXG4gIHRyeSB7XG4gICAgY29uc3QgZGlzcG9zZVJlbW90ZSA9IGF3YWl0IGN0eC5yZW1vdGUuJG1vdW50KFBST0JFX1JFTU9URSlcbiAgICBjdHguZWZmZWN0KCgpID0+ICgpID0+IHsgdm9pZCBkaXNwb3NlUmVtb3RlKCkgfSwgJ21hbGtvLXByZWZzOiBtYWxrb01vZGVscyByZW1vdGUnKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2RzaC1tYWxrby1wcmVmczogY291bGQgbm90IG1vdW50IHRoZSBtYWxrb01vZGVscyByZW1vdGUgXHUyMDE0JywgZXJyb3IpXG4gIH1cbiAgLy8gVGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoaW5kZXBlbmRlbnQgb2YgdGhlIHNldHRpbmdzIHBhZ2UpLlxuICBjdHguZWZmZWN0KCgpID0+IHN0YXJ0U3RhdHVzTGlnaHQoY3R4LCBmb3JtKSwgJ21hbGtvLXByZWZzOiB0YWIgc3RhdHVzIGxpZ2h0JylcbiAgY29uc3QgaW5qZWN0ZWQgPSAoKSA9PiAoe1xuICAgIGhvb2tzOiB7IHByZWZzOiBmb3JtLCBtb2RlbENhdGFsb2c6IG1vZGVsRm9ybSB9LFxuICAgIHNhdmU6IChmaWVsZCwgdmFsdWUpID0+IGZvcm0uc2V0KGZpZWxkLCB2YWx1ZSksXG4gICAgcHJvYmU6IGFzeW5jIChhcmdzKSA9PiB7XG4gICAgICAvLyBBIG5hbWVzcGFjZSBzZXJ2aWNlIGlzIHJlc29sdmVkIGJ5IGl0cyBmdWxsIGtleTsgcmVhZGluZyBpdCBvZmZcbiAgICAgIC8vIGBjdHgucmVtb3RlYCB3b3VsZCByZXF1aXJlIGFuIGBpbmplY3RgIHRoaXMgcGx1Z2luIGNhbm5vdCBkZWNsYXJlXG4gICAgICAvLyBiZWZvcmUgdGhlIGNvbnRyaWJ1dGlvbiBpcyBtb3VudGVkLlxuICAgICAgY29uc3QgcmVtb3RlID0gY3R4LmdldCgncmVtb3RlLm1hbGtvTW9kZWxzJylcbiAgICAgIGlmIChyZW1vdGUgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKCd0aGUgbWFsa29Nb2RlbHMgcmVtb3RlIGlzIG5vdCBhdmFpbGFibGUnKVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVtb3RlLnByb2JlKGFyZ3MpXG4gICAgICAvLyBSZW1vdGUgbWV0aG9kcyByZXNvbHZlIHRvIGEgYHsgb2ssIHZhbHVlIH1gIC8gYHsgb2ssIGVycm9yIH1gIGVudmVsb3BlLlxuICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiAnb2snIGluIHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0Lm9rICE9PSB0cnVlKSB0aHJvdyByZXN1bHQuZXJyb3IgPz8gbmV3IEVycm9yKCd0aGUgbWFsa29Nb2RlbHMgcHJvYmUgZmFpbGVkJylcbiAgICAgICAgcmV0dXJuIHJlc3VsdC52YWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sXG4gICAgd3JpdGVNb2RlbHM6IChyb3V0ZUlkLCBtb2RlbHMpID0+IG1vZGVsRm9ybS5tdXRhdGUoW3sgb3A6ICdzZXQnLCBwYXRoOiBbJ3Byb3ZpZGVycycsIHJvdXRlSWQsICdtb2RlbHMnXSwgdmFsdWU6IG1vZGVscyB9XSksXG4gIH0pXG4gIGN0eC5zbG90cy5pbmplY3QoU0xPVCwgKCkgPT4gY3R4LnNsb3RzLnJlZ2lzdGVyKHtcbiAgICBuYW1lOiBTTE9ULFxuICAgIGlkOiBOUyxcbiAgICBvcmRlcjogNDUsXG4gICAgbGFiZWw6ICgpID0+IHQoJ3RpdGxlJyksXG4gICAgbG9jYWxlOiBMT0NBTEVfTlMsXG4gICAgaW5qZWN0OiBpbmplY3RlZCxcbiAgfSwgUHJlZnNTZWN0aW9uKSlcbn0iLCAiLyoqXG4gKiBkc2gtbWFsa28tcHJlZnMgXHUyMDE0IHNoYXJlZCBSZW1vdGUgd2lyZSBpZGVudGl0eS5cbiAqXG4gKiBUaGUgc2FtZSBpbnZvY2F0aW9uIGlzIHJlZ2lzdGVyZWQgb24gdGhlIEhvc3QgKGB0eXBlcnQucmVnaXN0ZXJgKSBhbmQgbW91bnRlZFxuICogaW4gdGhlIGJyb3dzZXIgKGBjdHgucmVtb3RlLiRtb3VudGApLCBzbyBib3RoIGhhbHZlcyBidWlsZCBpdCBmcm9tIGhlcmUuIFRoZVxuICogb25seSBkaWZmZXJlbmNlIGlzIHRoZSBzY2hlbWEgZmFjdG9yeSBlYWNoIHNpZGUgc3VwcGxpZXM6IHRoZSBIb3N0IGRlY29kZXNcbiAqIGFyZ3VtZW50cyB3aXRoIHpvZCwgd2hpbGUgdGhlIENsaWVudCBuZXZlciBkZWNvZGVzIGl0cyBvd24gYXJndW1lbnRzIGFuZCBvbmx5XG4gKiBuZWVkcyBhIGZhY3RvcnkgdG8gc2F0aXNmeSB0aGUgc3RyaWN0LWNvZGVjIGNvbnRyYWN0LlxuICovXG5cbi8qKiBXaXJlIGlkZW50aXR5IHNoYXJlZCBieSB0aGUgSG9zdCBtYW5pZmVzdCBhbmQgdGhlIENsaWVudCBjb250cmlidXRpb24uICovXG5leHBvcnQgY29uc3QgUFJPQkVfSURFTlRJVFkgPSB7XG4gIGlkOiAnZHNoLW1hbGtvLXByZWZzI21hbGtvTW9kZWxzL3Byb2JlJyxcbiAgc2VydmljZTogJ21hbGtvTW9kZWxzJyxcbiAgbmFtZXNwYWNlOiAnbWFsa29Nb2RlbHMnLFxuICBtZXRob2Q6ICdwcm9iZScsXG4gIGFyZ3NUeXBlU3ltYm9sOiAnZHNoLW1hbGtvLXByZWZzI1Byb2JlQXJncycsXG4gIHJlc3VsdFR5cGVTeW1ib2w6ICdkc2gtbWFsa28tcHJlZnMjUHJvYmVSZXN1bHQnLFxufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBgbWFsa29Nb2RlbHMvcHJvYmUoYXJncylgIGRpcmVjdCBpbnZvY2F0aW9uLlxuICogQHBhcmFtIHsoKSA9PiB7IHBhcnNlOiAodmFsdWU6IHVua25vd24pID0+IHVua25vd24gfX0gY3JlYXRlQXJncyBzY2hlbWEgZmFjdG9yeSBmb3IgdGhlIHNpbmdsZSBgYXJnc2AgcGFyYW1ldGVyLlxuICogQHBhcmFtIHsoKSA9PiB7IHBhcnNlOiAodmFsdWU6IHVua25vd24pID0+IHVua25vd24gfX0gY3JlYXRlUmVzdWx0IHNjaGVtYSBmYWN0b3J5IGZvciB0aGUgcmVzdWx0LlxuICogQHJldHVybnMge29iamVjdH0gdGhlIGludm9jYXRpb24gZGVzY3JpcHRvciwgaWRlbnRpY2FsIG9uIGJvdGggZmFjZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9iZUludm9jYXRpb24oY3JlYXRlQXJncywgY3JlYXRlUmVzdWx0KSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IFBST0JFX0lERU5USVRZLmlkLFxuICAgIHNlcnZpY2U6IFBST0JFX0lERU5USVRZLnNlcnZpY2UsXG4gICAgbmFtZXNwYWNlOiBQUk9CRV9JREVOVElUWS5uYW1lc3BhY2UsXG4gICAgbWV0aG9kOiBQUk9CRV9JREVOVElUWS5tZXRob2QsXG4gICAgaW52b2NhdGlvbjogeyBraW5kOiAnZGlyZWN0JyB9LFxuICAgIHBhcmFtZXRlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2FyZ3MnLFxuICAgICAgICB3aXJlOiAnYXJncycsXG4gICAgICAgIHNvdXJjZTogJ2pzb24nLFxuICAgICAgICBjb2RlYzogeyBtb2RlOiAnc3RyaWN0JywgdHlwZVN5bWJvbDogUFJPQkVfSURFTlRJVFkuYXJnc1R5cGVTeW1ib2wsIGNyZWF0ZTogY3JlYXRlQXJncyB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHJlc3VsdDogeyBtb2RlOiAnc3RyaWN0JywgdHlwZVN5bWJvbDogUFJPQkVfSURFTlRJVFkucmVzdWx0VHlwZVN5bWJvbCwgY3JlYXRlOiBjcmVhdGVSZXN1bHQgfSxcbiAgfVxufSIsICIvKipcbiAqIFRoZSBvZmZpY2lhbCBEZWVwU2VlayB3aGFsZSBtYXJrLCByZWNvbG9yZWQuXG4gKlxuICogU2hhcGUgdGFrZW4gZnJvbSB0aGUgb2ZmaWNpYWwgZmF2aWNvbiBhcyB1c2VkIGJ5IGRzaC1ub3RpY2UtY2VudGVyIChNSVQpO1xuICogb25seSB0aGUgZmlsbCBjb2xvciBpcyBvdXJzLiBLZXB0IGhlcmUgc28gdGhlIHRhYiBpY29uIHJlZmxlY3RzIHRoZSBzZXNzaW9uXG4gKiBzdGF0ZSB3aXRob3V0IGZldGNoaW5nIGFuZCBtdXRhdGluZyB0aGUgc2VydmVkIC9mYXZpY29uLnN2Zy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciBDU1MgY29sb3IgZm9yIHRoZSBmaWxsLlxuICogQHJldHVybnMge3N0cmluZ30gYSBzdGFuZGFsb25lIFNWRyBkb2N1bWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoYWxlU3ZnKGNvbG9yKSB7XG4gIHJldHVybiBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiNTBcXFwiIGhlaWdodD1cXFwiNTBcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MCA1MFxcXCIgZmlsbD1cXFwibm9uZVxcXCI+PHBhdGggZD1cXFwiTTQ4LjgzNTQgMTAuMDQ3OUM0OC4zMjMyIDkuNzkxOTkgNDguMTAyNSAxMC4yNzk4IDQ3LjgwMzIgMTAuNTI3OEM0Ny43MDA3IDEwLjYwNzkgNDcuNjE0MyAxMC43MTE5IDQ3LjUyNzMgMTAuODA3NkM0Ni43NzkzIDExLjYyNCA0NS45MDQ4IDEyLjE1OTcgNDQuNzYyMiAxMi4wOTU3QzQzLjA5MjMgMTIgNDEuNjY2IDEyLjUzNTYgNDAuNDA1OCAxMy44Mzk4QzQwLjEzNzcgMTIuMjMxOSAzOS4yNDc2IDExLjI3MiAzNy44OTI2IDEwLjY1NThDMzcuMTgzNiAxMC4zMzU5IDM2LjQ2NjggMTAuMDE1NiAzNS45NzAyIDkuMzE5ODJDMzUuNjIzNSA4LjgyMzczIDM1LjUyOTMgOC4yNzE5NyAzNS4zNTYgNy43Mjc1NEMzNS4yNDU2IDcuMzk5OSAzNS4xMzUzIDcuMDYzOTYgMzQuNzY1MSA3LjAwNzgxQzM0LjM2MzMgNi45NDM4NSAzNC4yMDU2IDcuMjg3NiAzNC4wNDc5IDcuNTc1NjhDMzMuNDE4IDguNzUxOTUgMzMuMTczMyAxMC4wNDc5IDMzLjE5NzMgMTEuMzU5OUMzMy4yNTI0IDE0LjMxMiAzNC40NzM2IDE2LjY2NDEgMzYuODk5OSAxOC4zMzU5QzM3LjE3NTggMTguNTI3OCAzNy4yNDY2IDE4LjcxOTcgMzcuMTU5NyAxOUMzNi45OTQ2IDE5LjU3NTcgMzYuNzk3NCAyMC4xMzU3IDM2LjYyNCAyMC43MTE5QzM2LjUxMzcgMjEuMDgwMSAzNi4zNDg2IDIxLjE1OTcgMzUuOTYyNCAyMUMzNC42MzA5IDIwLjQzMjEgMzMuNDgxIDE5LjU5MTggMzIuNDY0NCAxOC41NzU3QzMwLjczOTMgMTYuODcyMSAyOS4xNzkyIDE0Ljk5MTcgMjcuMjMzNCAxMy41MkMyNi43NzY0IDEzLjE3NTggMjYuMzE5MyAxMi44NTYgMjUuODQ2NyAxMi41NTE4QzIzLjg2MTggMTAuNTg0IDI2LjEwNjkgOC45Njc3NyAyNi42MjcgOC43NzU4OEMyNy4xNzA0IDguNTc1NjggMjYuODE1OSA3Ljg4NzcgMjUuMDU5MSA3Ljg5NkMyMy4zMDIyIDcuOTAzODEgMjEuNjk1MyA4LjUwMzkxIDE5LjY0NyA5LjMwMzcxQzE5LjM0NzcgOS40MjM4MyAxOS4wMzIyIDkuNTExNzIgMTguNzA5NSA5LjU4Mzk4QzE2Ljg1MDEgOS4yMjM2MyAxNC45MTk5IDkuMTQzNTUgMTIuOTAzMyA5LjM3NTk4QzkuMTA1OTYgOS44MDc2MiA2LjA3Mjc1IDExLjYzOTYgMy44NDMyNiAxNC43NjgxQzEuMTY0NTUgMTguNTI3OCAwLjUzNDE4IDIyLjc5OTggMS4zMDY2NCAyNy4yNTU5QzIuMTE3NjggMzEuOTUyMSA0LjQ2NTgyIDM1LjgzOTggOC4wNzM3MyAzOC44Nzk5QzExLjgxNTkgNDIuMDMyMiAxNi4xMjU1IDQzLjU3NjIgMjEuMDQxIDQzLjI4MDNDMjQuMDI2OSA0My4xMDQgMjcuMzUxNiA0Mi42OTYzIDMxLjEwMTYgMzkuNDU2MUMzMi4wNDY5IDM5LjkzNiAzMy4wMzk2IDQwLjEyNzkgMzQuNjg2IDQwLjI3MkMzNS45NTQ2IDQwLjM5MjEgMzcuMTc1OCA0MC4yMDggMzguMTIxMSA0MC4wMDc4QzM5LjYwMjEgMzkuNjg4IDM5LjQ5OTUgMzguMjg4MSAzOC45NjM5IDM4LjAzMjJDMzQuNjIzIDM1Ljk2NzggMzUuNTc2MiAzNi44MDgxIDM0LjcxIDM2LjEyNzlDMzYuOTE1NSAzMy40NjM5IDQwLjI0MDIgMzAuNjk1OCA0MS41NCAyMS43MjhDNDEuNjQyNiAyMS4wMTYxIDQxLjU1NTcgMjAuNTY3OSA0MS41NCAxOS45OTE3QzQxLjUzMjIgMTkuNjM5NiA0MS42MTA4IDE5LjUwMzkgNDIuMDA0OSAxOS40NjM5QzQzLjA5MjMgMTkuMzM1OSA0NC4xNDc5IDE5LjAzMTcgNDUuMTE2NyAxOC40ODc4QzQ3LjkyOTIgMTYuOTE5OSA0OS4wNjQgMTQuMzQzOCA0OS4zMzE1IDExLjI1NTlDNDkuMzcxMSAxMC43ODM3IDQ5LjMyMzcgMTAuMjk1OSA0OC44MzU0IDEwLjA0NzlaTTI0LjMyNjIgMzcuODM5OEMyMC4xMTk2IDM0LjQ2MzkgMTguMDc5MSAzMy4zNTIxIDE3LjIzNTggMzMuMzk5OUMxNi40NDgyIDMzLjQ0ODIgMTYuNTg5OCAzNC4zNjgyIDE2Ljc2MzIgMzQuOTY3OEMxNi45NDQzIDM1LjU2MDEgMTcuMTgxMiAzNS45NjgzIDE3LjUxMTcgMzYuNDg3OEMxNy43NDAyIDM2LjgzMiAxNy44OTc5IDM3LjM0NDIgMTcuMjgzMiAzNy43MjhDMTUuOTI4MiAzOC41ODQgMTMuNTcyOCAzNy40Mzk5IDEzLjQ2MjQgMzcuMzgzOEMxMC43MjA3IDM1LjczNTggOC40MjgyMiAzMy41NjAxIDYuODEzNDggMzAuNTg0QzUuMjUzNDIgMjcuNzE5NyA0LjM0NzY2IDI0LjY0NzkgNC4xOTc3NSAyMS4zNjc3QzQuMTU4MiAyMC41NzU3IDQuMzg2NzIgMjAuMjk1OSA1LjE1ODY5IDIwLjE1MTlDNi4xNzUyOSAxOS45NiA3LjIyMzE0IDE5LjkxOTkgOC4yMzkyNiAyMC4wNzE4QzEyLjUzMjcgMjAuNzExOSAxNi4xODg1IDIyLjY3MTkgMTkuMjUyOSAyNS43NzU5QzIxLjAwMiAyNy41NDM5IDIyLjMyNTIgMjkuNjU1OCAyMy42ODg1IDMxLjcyMDJDMjUuMTM3NyAzMy45MTIxIDI2LjY5NzggMzYgMjguNjgzMSAzNy43MTE5QzI5LjM4NDMgMzguMzEyIDI5Ljk0MzQgMzguNzY4MSAzMC40NzkgMzkuMTA0QzI4Ljg2NDMgMzkuMjg4MSAyNi4xNjk5IDM5LjMyODEgMjQuMzI2MiAzNy44Mzk4Wk0yNi4zNDMzIDI0LjYwMDFDMjYuMzQzMyAyNC4yNDggMjYuNjE5MSAyMy45Njc4IDI2Ljk2NTggMjMuOTY3OEMyNy4wNDQ0IDIzLjk2NzggMjcuMTE1MiAyMy45ODM5IDI3LjE3ODIgMjQuMDA3OEMyNy4yNjUxIDI0LjA0IDI3LjM0MzggMjQuMDg3OSAyNy40MDY3IDI0LjE2MDJDMjcuNTE3MSAyNC4yNzIgMjcuNTgwMSAyNC40MzIxIDI3LjU4MDEgMjQuNjAwMUMyNy41ODAxIDI0Ljk1MjEgMjcuMzA0MiAyNS4yMzE5IDI2Ljk1NzUgMjUuMjMxOUMyNi42MTA4IDI1LjIzMTkgMjYuMzQzMyAyNC45NTIxIDI2LjM0MzMgMjQuNjAwMVpNMzIuNjA2NCAyNy44Nzk5QzMyLjIwNDYgMjguMDQ3OSAzMS44MDI3IDI4LjE5MTkgMzEuNDE2NSAyOC4yMDhDMzAuODE3OSAyOC4yMzk3IDMwLjE2NDEgMjcuOTkyMiAyOS44MDk2IDI3LjY4OEMyOS4yNTgzIDI3LjIxNTggMjguODY0MyAyNi45NTIxIDI4LjY5ODcgMjYuMTI3OUMyOC42Mjc5IDI1Ljc3NTkgMjguNjY3NSAyNS4yMzE5IDI4LjczMDUgMjQuOTE5OUMyOC44NzIxIDI0LjI0OCAyOC43MTQ0IDIzLjgxNTkgMjguMjQ5NSAyMy40MjM4QzI3Ljg3MTYgMjMuMTA0IDI3LjM5MTEgMjMuMDE2MSAyNi44NjMzIDIzLjAxNjFDMjYuNjY2IDIzLjAxNjEgMjYuNDg0OSAyMi45Mjc3IDI2LjM1MTEgMjIuODU2QzI2LjEzMDQgMjIuNzQ0MSAyNS45NDkyIDIyLjQ2MzkgMjYuMTIyNiAyMi4xMjAxQzI2LjE3NzcgMjIuMDA3OCAyNi40NDU4IDIxLjczNTggMjYuNTA4OCAyMS42ODhDMjcuMjI1NiAyMS4yNzIgMjguMDUyNyAyMS40MDc3IDI4LjgxNjkgMjEuNzE5N0MyOS41MjU5IDIyLjAxNjEgMzAuMDYxNSAyMi41NjAxIDMwLjgzNCAyMy4zMjgxQzMxLjYyMTYgMjQuMjU1OSAzMS43NjMyIDI0LjUxMTcgMzIuMjEyNCAyNS4yMDhDMzIuNTY2OSAyNS43NTIgMzIuODkwMSAyNi4zMTIgMzMuMTEwNCAyNi45NTIxQzMzLjI0NDYgMjcuMzUyMSAzMy4wNzEzIDI3LjY4MDIgMzIuNjA2NCAyNy44Nzk5WlxcXCIgZmlsbD1cXFwiXCIgKyBjb2xvciArIFwiXFxcIiBmaWxsLW9wYWNpdHk9XFxcIjFcXFwiIGZpbGwtcnVsZT1cXFwibm9uemVyb1xcXCIvPjwvc3ZnPlwiXG59XG4iLCAiLyoqXG4gKiBkc2gtbWFsa28tcHJlZnMgXHUyMDE0IHRhYiBzdGF0dXMgbGlnaHQgKyBicm93c2VyIG5vdGlmaWNhdGlvbnMgKGJyb3dzZXIgaGFsZikuXG4gKlxuICogUG9ydGVkIGZyb20gZHNoLW5vdGljZS1jZW50ZXIgKE1JVCkuIFRoZSB0YWIgZmF2aWNvbiB0dXJucyBncmVlbiB3aGVuIGEgbWFpblxuICogc2Vzc2lvbiBmaW5pc2hlZCB3aGlsZSB5b3Ugd2VyZSBhd2F5IGFuZCBhbWJlciB3aGlsZSBhIHNlc3Npb24gYXdhaXRzIGFuXG4gKiBpbnRlcmFjdGlvbiAoYW1iZXIgd2lucyksIGFuZCB0aGUgYnJvd3NlciByYWlzZXMgYSBub3RpZmljYXRpb24gb24gY29tcGxldGlvblxuICogb3Igb24gYSBuZXcgcGVuZGluZyBxdWVzdGlvbiAvIGFwcHJvdmFsIC8gcGxhbiByZXZpZXcuXG4gKlxuICogSXQgcmVhZHMgdGhlIG9mZmljaWFsIGNsaWVudCBzaWduYWxzIFx1MjAxNCBgc2Vzc2lvbnNgIHJvd3MgcGx1cyB0aGUgb3B0aW9uYWxcbiAqIGB1aVNlc3Npb24uc2Vzc2lvblN0YXR1c2Agc3RvcmUgXHUyMDE0IGFuZCB0aGUgYG1hbGtvLXByZWZzYCBjb25maWcgZm9ybS4gSXQgb3duc1xuICogbm8gc3RhdGUgYmV5b25kIGluLW1lbW9yeSBib29ra2VlcGluZyBhbmQgcmVzdG9yZXMgdGhlIG9yaWdpbmFsIGZhdmljb24gb25cbiAqIHRlYXJkb3duLlxuICovXG5pbXBvcnQgeyB3aGFsZVN2ZyB9IGZyb20gJy4vd2hhbGUudHMnXG5cbi8qKiBTZXR0aW5ncy9sb2NhbGUgbmFtZXNwYWNlIHNoYXJlZCB3aXRoIHRoZSBzZXR0aW5ncyBwYWdlLiAqL1xuZXhwb3J0IGNvbnN0IExPQ0FMRV9OUyA9ICdzZXR0aW5ncy5tYWxrby1wcmVmcydcblxuY29uc3QgREVGQVVMVF9IUkVGID0gJy9mYXZpY29uLnN2ZydcbmNvbnN0IERFRkFVTFRfR1JFRU4gPSAnIzIyQzU1RSdcbmNvbnN0IERFRkFVTFRfQU1CRVIgPSAnI0Y1OUUwQidcbmNvbnN0IERFRkFVTFRfV09SS0lORyA9ICcjM0I4MkY2J1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuLyoqIFRvb2wtbmFtZSBjYXA6IGxvbmdlciBuYW1lcyB3b3VsZCBibG93IHRoZSBub3RpZmljYXRpb24gYm9keSdzIHNpbmdsZSBsaW5lLiAqL1xuY29uc3QgVE9PTF9OQU1FX0xJTUlUID0gMzJcblxuLyoqXG4gKiBCcm93c2VyIG5vdGlmaWNhdGlvbiBhdmFpbGFiaWxpdHkuXG4gKiBAcmV0dXJucyB7J2dyYW50ZWQnIHwgJ2RlbmllZCcgfCAnZGVmYXVsdCcgfCAndW5zdXBwb3J0ZWQnfVxuICovXG5mdW5jdGlvbiBub3RpZmljYXRpb25TdXBwb3J0KCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdzdHJpbmcnKSByZXR1cm4gJ3Vuc3VwcG9ydGVkJ1xuICAgIHJldHVybiBOb3RpZmljYXRpb24ucGVybWlzc2lvblxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gJ3Vuc3VwcG9ydGVkJ1xuICB9XG59XG5cbi8qKiBBc2sgZm9yIHBlcm1pc3Npb24gKG9ubHkgd2hlbiB0aGUgYnJvd3NlciBoYXMgbm90IGRlY2lkZWQgeWV0KS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ3Vuc3VwcG9ydGVkJylcbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdkZWZhdWx0JykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShOb3RpZmljYXRpb24ucGVybWlzc2lvbilcbiAgICBjb25zdCBhbnN3ZXIgPSBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKVxuICAgIHJldHVybiBhbnN3ZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYW5zd2VyLnRoZW4gPT09ICdmdW5jdGlvbicgPyBhbnN3ZXIgOiBQcm9taXNlLnJlc29sdmUoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24pXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm90aWZpY2F0aW9uU3VwcG9ydCgpKVxuICB9XG59XG5cbi8qKiBDdXJyZW50IHBlcm1pc3Npb24gc3RyaW5nLCBmb3IgdGhlIHNldHRpbmdzIHBhZ2UuICovXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudE5vdGlmaWNhdGlvblBlcm1pc3Npb24oKSB7XG4gIHJldHVybiBub3RpZmljYXRpb25TdXBwb3J0KClcbn1cblxuLyoqIFN0YXRpYyByb3V0ZSB0aGUgSG9zdCBzZXJ2ZXMgdGhlIGJ1bmRsZWQgc291bmRzIGZyb20uICovXG5leHBvcnQgY29uc3QgU09VTkRfUk9VVEUgPSAnL21hbGtvLXByZWZzLXNvdW5kcydcbi8qKiBTZW50aW5lbCBtZWFuaW5nIFwicGxheSBub3RoaW5nXCIuICovXG5leHBvcnQgY29uc3QgU09VTkRfTk9ORSA9ICdub25lJ1xuLyoqIEJ1aWx0LWluIHN5bnRoZXNpemVkIGNoaW1lcyAobm8gYXNzZXQgZmlsZSBuZWVkZWQpLiAqL1xuZXhwb3J0IGNvbnN0IEJVSUxUSU5fU09VTkRTID0gW1xuICB7IGlkOiAnYnVpbHRpbi11cCcsIGxhYmVsS2V5OiAnc291bmRCdWlsdGluVXAnIH0sXG4gIHsgaWQ6ICdidWlsdGluLWRvd24nLCBsYWJlbEtleTogJ3NvdW5kQnVpbHRpbkRvd24nIH0sXG5dXG4vKiogb3BlbmNvZGUgc291bmQgcGFja3MgYnVuZGxlZCB1bmRlciBgYXNzZXRzL2F1ZGlvYCAoTUlUKS4gKi9cbmV4cG9ydCBjb25zdCBTT1VORF9QQUNLUyA9IFtcbiAgeyBuYW1lOiAnQWxlcnQnLCBwcmVmaXg6ICdhbGVydCcsIGNvdW50OiAxMCB9LFxuICB7IG5hbWU6ICdCaXAtYm9wJywgcHJlZml4OiAnYmlwLWJvcCcsIGNvdW50OiAxMCB9LFxuICB7IG5hbWU6ICdTdGFwbGVib3BzJywgcHJlZml4OiAnc3RhcGxlYm9wcycsIGNvdW50OiA3IH0sXG4gIHsgbmFtZTogJ05vcGUnLCBwcmVmaXg6ICdub3BlJywgY291bnQ6IDEyIH0sXG4gIHsgbmFtZTogJ1l1cCcsIHByZWZpeDogJ3l1cCcsIGNvdW50OiA2IH0sXG5dXG5cbi8qKiBTb3VuZCBpZHMgb2Ygb25lIHBhY2ssIGluIGRpc3BsYXkgb3JkZXIuICovXG5leHBvcnQgZnVuY3Rpb24gcGFja1NvdW5kSWRzKHBhY2spIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHBhY2suY291bnQgfSwgKF8sIGkpID0+IGAke3BhY2sucHJlZml4fS0ke1N0cmluZyhpICsgMSkucGFkU3RhcnQoMiwgJzAnKX1gKVxufVxuXG4vKiogQ2xhbXAgYW4gYXJiaXRyYXJ5IHZvbHVtZSB0byAwXHUyMDEzMSAoZGVmYXVsdCAwLjYpLiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVm9sdW1lKHZvbHVtZSkge1xuICBpZiAodHlwZW9mIHZvbHVtZSAhPT0gJ251bWJlcicgfHwgIU51bWJlci5pc0Zpbml0ZSh2b2x1bWUpKSByZXR1cm4gMC42XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2b2x1bWUsIDApLCAxKVxufVxuXG4vKiogU2hhcmVkIEF1ZGlvQ29udGV4dCBmb3IgdGhlIHN5bnRoZXNpemVkIGNoaW1lcy4gKi9cbmxldCBjaGltZUNvbnRleHRcbmZ1bmN0aW9uIGNoaW1lQXVkaW9Db250ZXh0KCkge1xuICBpZiAoY2hpbWVDb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiBjaGltZUNvbnRleHRcbiAgdHJ5IHtcbiAgICBjb25zdCBDdG9yID0gd2luZG93LkF1ZGlvQ29udGV4dCA/PyB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG4gICAgY2hpbWVDb250ZXh0ID0gQ3RvciA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG5ldyBDdG9yKClcbiAgfSBjYXRjaCB7XG4gICAgY2hpbWVDb250ZXh0ID0gbnVsbFxuICB9XG4gIHJldHVybiBjaGltZUNvbnRleHRcbn1cblxuLyoqIFJlc3VtZSB0aGUgYXVkaW8gY29udGV4dCBpbnNpZGUgYSB1c2VyIGdlc3R1cmUgKGF1dG9wbGF5IHBvbGljeSkuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbWVTb3VuZCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhdWRpbyA9IGNoaW1lQXVkaW9Db250ZXh0KClcbiAgICBpZiAoYXVkaW8gIT09IG51bGwgJiYgYXVkaW8uc3RhdGUgPT09ICdzdXNwZW5kZWQnKSBhdWRpby5yZXN1bWU/LigpXG4gIH0gY2F0Y2ggeyAvKiBpZ25vcmUgKi8gfVxufVxuXG4vKiogU3ludGhlc2l6ZWQgY2hpbWU6IHVwIChkb25lKSBvciBkb3duIChwZW5kaW5nKS4gKi9cbmZ1bmN0aW9uIHBsYXlDaGltZShraW5kLCB2b2x1bWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsZXZlbCA9IG5vcm1hbGl6ZVZvbHVtZSh2b2x1bWUpXG4gICAgaWYgKGxldmVsIDw9IDApIHJldHVyblxuICAgIGNvbnN0IGF1ZGlvID0gY2hpbWVBdWRpb0NvbnRleHQoKVxuICAgIGlmIChhdWRpbyA9PT0gbnVsbCkgcmV0dXJuXG4gICAgaWYgKGF1ZGlvLnN0YXRlID09PSAnc3VzcGVuZGVkJykgYXVkaW8ucmVzdW1lPy4oKVxuICAgIGNvbnN0IG5vdGVzID0ga2luZCA9PT0gJ2RvbmUnID8gWzY2MCwgOTkwXSA6IFs4ODAsIDU4N11cbiAgICBjb25zdCBiYXNlID0gYXVkaW8uY3VycmVudFRpbWVcbiAgICBub3Rlcy5mb3JFYWNoKChmcmVxdWVuY3ksIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvc2NpbGxhdG9yID0gYXVkaW8uY3JlYXRlT3NjaWxsYXRvcigpXG4gICAgICBjb25zdCBnYWluID0gYXVkaW8uY3JlYXRlR2FpbigpXG4gICAgICBjb25zdCBzdGFydCA9IGJhc2UgKyBpbmRleCAqIDAuMTRcbiAgICAgIG9zY2lsbGF0b3IudHlwZSA9ICdzaW5lJ1xuICAgICAgb3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSBmcmVxdWVuY3lcbiAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjAwMDEsIHN0YXJ0KVxuICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4xMiAqIGxldmVsLCBzdGFydCArIDAuMDIpXG4gICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMDEsIHN0YXJ0ICsgMC4xOClcbiAgICAgIG9zY2lsbGF0b3IuY29ubmVjdChnYWluKVxuICAgICAgZ2Fpbi5jb25uZWN0KGF1ZGlvLmRlc3RpbmF0aW9uKVxuICAgICAgb3NjaWxsYXRvci5zdGFydChzdGFydClcbiAgICAgIG9zY2lsbGF0b3Iuc3RvcChzdGFydCArIDAuMilcbiAgICB9KVxuICB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbn1cblxuLyoqIEVsZW1lbnQgY3VycmVudGx5IHBsYXlpbmcsIHNvIG92ZXJsYXBwaW5nIHNvdW5kcyBkbyBub3Qgc3RhY2suICovXG5sZXQgYWN0aXZlU291bmQgPSBudWxsXG5mdW5jdGlvbiBzdG9wU291bmQoKSB7XG4gIGNvbnN0IGF1ZGlvID0gYWN0aXZlU291bmRcbiAgYWN0aXZlU291bmQgPSBudWxsXG4gIGlmIChhdWRpbyA9PT0gbnVsbCkgcmV0dXJuXG4gIHRyeSB7IGF1ZGlvLnBhdXNlKCk7IGF1ZGlvLmN1cnJlbnRUaW1lID0gMCB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbn1cblxuLyoqXG4gKiBQbGF5IGEgc291bmQgaWQ6IGBidWlsdGluLSpgIGlzIHN5bnRoZXNpemVkLCBhIHBhY2sgaWQgc3RyZWFtcyB0aGUgSG9zdCdzXG4gKiBidW5kbGVkIG1wMyBhbmQgZmFsbHMgYmFjayB0byB0aGUgc3ludGhlc2l6ZWQgY2hpbWUgd2hlbiB1bmF2YWlsYWJsZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBzb3VuZCBpZCAoYG5vbmVgID0gc2lsZW5jZSkuXG4gKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lIDBcdTIwMTMxLlxuICogQHBhcmFtIHsnZG9uZScgfCAncGVuZGluZyd9IGtpbmQgZHJpdmVzIHRoZSBmYWxsYmFjayBjaGltZSdzIHBpdGNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGxheVNvdW5kKGlkLCB2b2x1bWUsIGtpbmQpIHtcbiAgY29uc3QgbGV2ZWwgPSBub3JtYWxpemVWb2x1bWUodm9sdW1lKVxuICBpZiAobGV2ZWwgPD0gMCkgcmV0dXJuXG4gIGNvbnN0IG5hbWUgPSB0eXBlb2YgaWQgPT09ICdzdHJpbmcnID8gaWQgOiAnJ1xuICBpZiAobmFtZSA9PT0gJycgfHwgbmFtZSA9PT0gU09VTkRfTk9ORSkgcmV0dXJuXG4gIHN0b3BTb3VuZCgpXG4gIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ2J1aWx0aW4tJykpIHtcbiAgICBwbGF5Q2hpbWUobmFtZSA9PT0gJ2J1aWx0aW4tdXAnID8gJ2RvbmUnIDogbmFtZSA9PT0gJ2J1aWx0aW4tZG93bicgPyAncGVuZGluZycgOiBraW5kLCBsZXZlbClcbiAgICByZXR1cm5cbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKFNPVU5EX1JPVVRFICsgJy8nICsgbmFtZSArICcubXAzJylcbiAgICBhdWRpby52b2x1bWUgPSBsZXZlbFxuICAgIGFjdGl2ZVNvdW5kID0gYXVkaW9cbiAgICBjb25zdCBwbGF5ZWQgPSBhdWRpby5wbGF5KClcbiAgICBpZiAocGxheWVkICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBsYXllZC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGxheWVkLmNhdGNoKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVNvdW5kID09PSBhdWRpbykgYWN0aXZlU291bmQgPSBudWxsXG4gICAgICAgIHBsYXlDaGltZShraW5kLCBsZXZlbClcbiAgICAgIH0pXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICBwbGF5Q2hpbWUoa2luZCwgbGV2ZWwpXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCB0aGUgc2Vzc2lvbiBzaWduYWxzIGFuZCBkcml2ZSB0aGUgdGFiIGljb24gKyBub3RpZmljYXRpb25zLlxuICogQHBhcmFtIHtvYmplY3R9IGN0eCBjbGllbnQgcGx1Z2luIGNvbnRleHQgKG5lZWRzIGBzZXNzaW9uc2AsIGBsb2NhbGVgKS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmb3JtIHRoZSBgbWFsa28tcHJlZnNgIGNvbmZpZyBmb3JtIChzbmFwc2hvdCArIHN1YnNjcmliZSkuXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH0gZGlzcG9zZXIgcmVzdG9yaW5nIHRoZSBmYXZpY29uIGFuZCByZW1vdmluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0YXR1c0xpZ2h0KGN0eCwgZm9ybSkge1xuICBjb25zdCBsaXN0ID0gY3R4LnNlc3Npb25zLmxpc3RcbiAgY29uc3QgbG9jYWxlID0gKCkgPT4gY3R4LmxvY2FsZS5iaW5kKExPQ0FMRV9OUylcbiAgLyoqIE9wdGlvbmFsIG9mZmljaWFsIHN0YXR1cyBzb3VyY2UgKDAuMS43Kyk7IHJvd3Mga2VlcCB0aGVpciBsZWdhY3kgZmllbGRzIG90aGVyd2lzZS4gKi9cbiAgbGV0IHN0YXR1c1NvdXJjZVxuICAvKiogRGVkdXBlIGtleXMgKGBzZXNzaW9uSWQ6a2luZGApIGFscmVhZHkgcXVldWVkLiAqL1xuICBjb25zdCBub3RpZmllZCA9IG5ldyBTZXQoKVxuICAvKiogQWdncmVnYXRpb24gd2luZG93IHNvIGEgYnVyc3Qgb2YgdHJhbnNpdGlvbnMgYmVjb21lcyBvbmUgbm90aWZpY2F0aW9uLiAqL1xuICBjb25zdCBub3RpZnlRdWV1ZSA9IG5ldyBNYXAoKVxuICBsZXQgbm90aWZ5VGltZXJcbiAgLyoqIExhc3Qgb2JzZXJ2ZWQgY29tcGxldGlvbiBzdGF0ZSBwZXIgc2Vzc2lvbiAoZmFsc2UgXHUyMTkyIHRydWUgZWRnZSBkZXRlY3Rpb24pLiAqL1xuICBjb25zdCBwcmV2Q29tcGxldGVkID0gbmV3IE1hcCgpXG4gIC8qKiBSdW4gc3RhcnQgcGVyIHNlc3Npb24sIHRoZW4gdGhlIGxhc3QgcnVuIGR1cmF0aW9uIChtcykuICovXG4gIGNvbnN0IHJ1blN0YXJ0ZWRBdCA9IG5ldyBNYXAoKVxuICBjb25zdCBsYXN0UnVuTXMgPSBuZXcgTWFwKClcbiAgbGV0IHByZXZQZW5kaW5nID0gbmV3IFNldCgpXG4gIGxldCBwZW5kaW5nU2VlbiA9IGZhbHNlXG5cbiAgLyoqIFJlYWxseSBpbiB0aGUgZm9yZWdyb3VuZDogdGFiIHZpc2libGUgQU5EIHdpbmRvdyBmb2N1c2VkLiAqL1xuICBjb25zdCBpc0ZvcmVncm91bmQgPSAoKSA9PiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJyAmJiBkb2N1bWVudC5oYXNGb2N1cygpXG5cbiAgLyoqIFJlYWQgdGhlIG5vdGlmaWNhdGlvbi9jb2xvciBwcmVmZXJlbmNlcyAodW5zZXQgZmFsbHMgYmFjayB0byBkZWZhdWx0cykuICovXG4gIGZ1bmN0aW9uIHJlYWRDb25maWcoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBmb3JtLmdldFNuYXBzaG90KCkudmFsdWUgPz8ge31cbiAgICByZXR1cm4ge1xuICAgICAgY29sb3JzRW5hYmxlZDogdmFsdWUuY29sb3JzRW5hYmxlZCAhPT0gZmFsc2UsXG4gICAgICBncmVlbjogSEVYLnRlc3QodmFsdWUuZ3JlZW4pID8gdmFsdWUuZ3JlZW4gOiBERUZBVUxUX0dSRUVOLFxuICAgICAgYW1iZXI6IEhFWC50ZXN0KHZhbHVlLmFtYmVyKSA/IHZhbHVlLmFtYmVyIDogREVGQVVMVF9BTUJFUixcbiAgICAgIHdvcmtpbmc6IEhFWC50ZXN0KHZhbHVlLndvcmtpbmcpID8gdmFsdWUud29ya2luZyA6IERFRkFVTFRfV09SS0lORyxcbiAgICAgIGJsYWNrOiBIRVgudGVzdCh2YWx1ZS5ibGFjaykgPyB2YWx1ZS5ibGFjayA6IHVuZGVmaW5lZCxcbiAgICAgIG5vdGlmeUVuYWJsZWQ6IHZhbHVlLm5vdGlmeUVuYWJsZWQgPT09IHRydWUsXG4gICAgICBub3RpZnlGb3JlZ3JvdW5kOiB2YWx1ZS5ub3RpZnlGb3JlZ3JvdW5kID09PSB0cnVlLFxuICAgICAgZG9uZUVuYWJsZWQ6IHZhbHVlLm5vdGlmeURvbmVFbmFibGVkICE9PSBmYWxzZSxcbiAgICAgIGRvbmVQZXJzaXN0ZW50OiB2YWx1ZS5ub3RpZnlEb25lUGVyc2lzdGVudCA9PT0gdHJ1ZSxcbiAgICAgIHBlbmRpbmdFbmFibGVkOiB2YWx1ZS5ub3RpZnlQZW5kaW5nRW5hYmxlZCAhPT0gZmFsc2UsXG4gICAgICBwZW5kaW5nUGVyc2lzdGVudDogdmFsdWUubm90aWZ5UGVuZGluZ1BlcnNpc3RlbnQgPT09IHRydWUsXG4gICAgICB2b2x1bWU6IG5vcm1hbGl6ZVZvbHVtZSh2YWx1ZS5ub3RpZnlWb2x1bWUgPz8gMC42KSxcbiAgICAgIGRvbmVTb3VuZDogdHlwZW9mIHZhbHVlLm5vdGlmeURvbmVTb3VuZCA9PT0gJ3N0cmluZycgPyB2YWx1ZS5ub3RpZnlEb25lU291bmQgOiBTT1VORF9OT05FLFxuICAgICAgcGVuZGluZ1NvdW5kOiB0eXBlb2YgdmFsdWUubm90aWZ5UGVuZGluZ1NvdW5kID09PSAnc3RyaW5nJyA/IHZhbHVlLm5vdGlmeVBlbmRpbmdTb3VuZCA6IFNPVU5EX05PTkUsXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIGZhdmljb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIERTSCBzaGlwcyB0d28gaWNvbiBsaW5rcyAoZGFyay9saWdodCB2aWEgYG1lZGlhYCk7IHRoZSBicm93c2VyIHBpY2tzIG9uZSBieVxuICAvLyB0aGUgT1MgY29sb3Igc2NoZW1lLCBzbyBldmVyeSBsaW5rIG11c3QgYmUgcGFpbnRlZCBhbmQgcmVzdG9yZWQgdG9nZXRoZXIuXG4gIGNvbnN0IGljb25MaW5rcyA9ICgpID0+IFsuLi5kb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsfj1cImljb25cIl0nKV1cbiAgLyoqIE9yaWdpbmFsIGhyZWYgb2YgZWFjaCBsaW5rIHdlIGhhdmUgdG91Y2hlZCAocmVzdG9yZSB0YXJnZXQpLiAqL1xuICBjb25zdCBvcmlnaW5hbEhyZWZzID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJlbWVtYmVyTGlua3MgPSAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBsaW5rIG9mIGljb25MaW5rcygpKSBpZiAoIW9yaWdpbmFsSHJlZnMuaGFzKGxpbmspKSBvcmlnaW5hbEhyZWZzLnNldChsaW5rLCBsaW5rLmhyZWYpXG4gIH1cbiAgcmVtZW1iZXJMaW5rcygpXG4gIGNvbnN0IHBhaW50ID0gKGhyZWYpID0+IHsgZm9yIChjb25zdCBsaW5rIG9mIG9yaWdpbmFsSHJlZnMua2V5cygpKSBsaW5rLmhyZWYgPSBocmVmIH1cbiAgLyoqIExhc3QgaHJlZiB3ZSBzZXQ7IG51bGwgPSBvZmZpY2lhbCBpY29ucy4gKi9cbiAgbGV0IGFwcGxpZWQgPSBudWxsXG4gIGNvbnN0IHVyaSA9IChoZXgpID0+IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtlbmNvZGVVUklDb21wb25lbnQod2hhbGVTdmcoaGV4KSl9YFxuICBjb25zdCByZXN0b3JlID0gKCkgPT4ge1xuICAgIGlmIChhcHBsaWVkID09PSBudWxsKSByZXR1cm5cbiAgICBmb3IgKGNvbnN0IFtsaW5rLCBocmVmXSBvZiBvcmlnaW5hbEhyZWZzKSBsaW5rLmhyZWYgPSBocmVmXG4gICAgYXBwbGllZCA9IG51bGxcbiAgfVxuICAvLyBUaGUgYXBwbGljYXRpb24gbWF5IHJlLWNyZWF0ZSB0aGUgaWNvbiBsaW5rczsgcGljayBuZXcgb25lcyB1cC5cbiAgY29uc3QgaWNvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgIGNvbnN0IGJlZm9yZSA9IG9yaWdpbmFsSHJlZnMuc2l6ZVxuICAgIHJlbWVtYmVyTGlua3MoKVxuICAgIGlmIChvcmlnaW5hbEhyZWZzLnNpemUgIT09IGJlZm9yZSkgc3luYygpXG4gIH0pXG4gIGljb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmhlYWQsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG5cbiAgLy8gLS0tIG5vdGlmaWNhdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IFBFTkRJTkdfS0lORF9LRVlTID0ge1xuICAgIGFwcHJvdmFsOiAncGVuZGluZ0tpbmRBcHByb3ZhbCcsXG4gICAgcXVlc3Rpb246ICdwZW5kaW5nS2luZFF1ZXN0aW9uJyxcbiAgICAncGxhbi1yZXZpZXcnOiAncGVuZGluZ0tpbmRQbGFuUmV2aWV3JyxcbiAgfVxuXG4gIC8qKiBQZW5kaW5nIGludGVyYWN0aW9uIFx1MjE5MiBub3RpZmljYXRpb24gYm9keSB0ZXh0IChkZWZlbnNpdmUgcmVhZHMpLiAqL1xuICBmdW5jdGlvbiBwZW5kaW5nVHlwZUxhYmVsKGludGVyYWN0aW9uKSB7XG4gICAgY29uc3QgdCA9IGxvY2FsZSgpXG4gICAgY29uc3Qga2luZCA9IGludGVyYWN0aW9uPy5raW5kXG4gICAgaWYgKGtpbmQgPT09ICdhcHByb3ZhbCcpIHtcbiAgICAgIGNvbnN0IHRvb2wgPSBpbnRlcmFjdGlvbi50b29sTmFtZVxuICAgICAgaWYgKHR5cGVvZiB0b29sICE9PSAnc3RyaW5nJyB8fCB0b29sID09PSAnJykgcmV0dXJuIHQoJ3BlbmRpbmdLaW5kQXBwcm92YWwnKVxuICAgICAgY29uc3Qgc2hvd24gPSB0b29sLmxlbmd0aCA+IFRPT0xfTkFNRV9MSU1JVCA/IHRvb2wuc2xpY2UoMCwgVE9PTF9OQU1FX0xJTUlUKSArICdcdTIwMjYnIDogdG9vbFxuICAgICAgcmV0dXJuIHQoJ3BlbmRpbmdBcHByb3ZhbFRvb2wnLCB7IHRvb2w6IHNob3duIH0pXG4gICAgfVxuICAgIGlmIChraW5kID09PSAncXVlc3Rpb24nKSB7XG4gICAgICBjb25zdCBxdWVzdGlvbnMgPSBBcnJheS5pc0FycmF5KGludGVyYWN0aW9uLnF1ZXN0aW9ucykgPyBpbnRlcmFjdGlvbi5xdWVzdGlvbnMgOiBbXVxuICAgICAgaWYgKHF1ZXN0aW9ucy5sZW5ndGggPiAxKSByZXR1cm4gdCgncGVuZGluZ1F1ZXN0aW9uQmF0Y2gnLCB7IGNvdW50OiBxdWVzdGlvbnMubGVuZ3RoIH0pXG4gICAgICBjb25zdCBmaXJzdCA9IHF1ZXN0aW9uc1swXVxuICAgICAgaWYgKGZpcnN0ID09PSBudWxsIHx8IHR5cGVvZiBmaXJzdCAhPT0gJ29iamVjdCcpIHJldHVybiB0KCdwZW5kaW5nS2luZFF1ZXN0aW9uJylcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBBcnJheS5pc0FycmF5KGZpcnN0Lm9wdGlvbnMpID8gZmlyc3Qub3B0aW9ucyA6IFtdXG4gICAgICBpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHJldHVybiB0KCdwZW5kaW5nUXVlc3Rpb25GaWxsJylcbiAgICAgIHJldHVybiBmaXJzdC5tdWx0aVNlbGVjdCA9PT0gdHJ1ZSA/IHQoJ3BlbmRpbmdRdWVzdGlvbk11bHRpJykgOiB0KCdwZW5kaW5nUXVlc3Rpb25DaG9vc2UnKVxuICAgIH1cbiAgICBjb25zdCBrZXkgPSBQRU5ESU5HX0tJTkRfS0VZU1traW5kXVxuICAgIHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHQoa2V5KVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBvbmUgc2Vzc2lvbiBldmVudCAob25jZSBwZXIgZGVkdXBlZCBlZGdlKTogcGxheSB0aGUgY2hvc2VuIHNvdW5kXG4gICAqIChpbmRlcGVuZGVudCBvZiB0aGUgbm90aWZpY2F0aW9uIHN3aXRjaGVzKSBhbmQsIHdoZW4gbm90aWZpY2F0aW9ucyBmb3JcbiAgICogdGhpcyB0eXBlIGFyZSBvbiwgZW5xdWV1ZSB0aGUgYmFubmVyLlxuICAgKiBAcGFyYW0ga2luZCAtIGAnZG9uZSdgIHwgYCdwZW5kaW5nJ2AuXG4gICAqIEBwYXJhbSBzZXNzaW9uSWQgLSB0aGUgc2Vzc2lvbiB0aGUgZXZlbnQgYmVsb25ncyB0by5cbiAgICogQHBhcmFtIGxhYmVsIC0gc2Vzc2lvbiBkaXNwbGF5IG5hbWUgKG5vdGlmaWNhdGlvbiB0aXRsZSkuXG4gICAqIEBwYXJhbSB0eXBlTGFiZWwgLSBub3RpZmljYXRpb24gYm9keSBmb3IgYHBlbmRpbmdgLlxuICAgKiBAcGFyYW0gZHVyYXRpb25NcyAtIHR1cm4gZHVyYXRpb24gZm9yIGBkb25lYCwgd2hlbiBrbm93bi5cbiAgICovXG4gIGZ1bmN0aW9uIGVtaXRFdmVudChraW5kLCBzZXNzaW9uSWQsIGxhYmVsLCB0eXBlTGFiZWwsIGR1cmF0aW9uTXMpIHtcbiAgICBjb25zdCBrZXkgPSBzZXNzaW9uSWQgKyAnOicgKyBraW5kXG4gICAgaWYgKG5vdGlmaWVkLmhhcyhrZXkpKSByZXR1cm5cbiAgICBub3RpZmllZC5hZGQoa2V5KVxuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKVxuICAgIC8vIFNvdW5kIGlzIGRlY291cGxlZDogd2hlbmV2ZXIgb25lIGlzIGNvbmZpZ3VyZWQgZm9yIHRoaXMgdHlwZSBpdCBwbGF5cyxcbiAgICAvLyByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIGJhbm5lciBpcyBlbmFibGVkLlxuICAgIGNvbnN0IHNvdW5kSWQgPSBraW5kID09PSAnZG9uZScgPyBjb25maWcuZG9uZVNvdW5kIDogY29uZmlnLnBlbmRpbmdTb3VuZFxuICAgIGlmIChzb3VuZElkICE9PSBTT1VORF9OT05FKSBwbGF5U291bmQoc291bmRJZCwgY29uZmlnLnZvbHVtZSwga2luZClcbiAgICBpZiAoIWNvbmZpZy5ub3RpZnlFbmFibGVkKSByZXR1cm5cbiAgICBpZiAoa2luZCA9PT0gJ2RvbmUnICYmICFjb25maWcuZG9uZUVuYWJsZWQpIHJldHVyblxuICAgIGlmIChraW5kID09PSAncGVuZGluZycgJiYgIWNvbmZpZy5wZW5kaW5nRW5hYmxlZCkgcmV0dXJuXG4gICAgbm90aWZ5UXVldWUuc2V0KGtleSwgeyBraW5kLCBzZXNzaW9uSWQsIGxhYmVsLCB0eXBlTGFiZWwsIGR1cmF0aW9uTXMgfSlcbiAgICBpZiAobm90aWZ5VGltZXIgPT09IHVuZGVmaW5lZCkgbm90aWZ5VGltZXIgPSBzZXRUaW1lb3V0KGZsdXNoTm90aWZpY2F0aW9ucywgMzAwKVxuICB9XG5cbiAgLyoqIEZsdXNoIHRoZSBhZ2dyZWdhdGlvbiB3aW5kb3cgaW50byBicm93c2VyIG5vdGlmaWNhdGlvbnMuICovXG4gIGZ1bmN0aW9uIGZsdXNoTm90aWZpY2F0aW9ucygpIHtcbiAgICBub3RpZnlUaW1lciA9IHVuZGVmaW5lZFxuICAgIGNvbnN0IGVudHJpZXMgPSBbLi4ubm90aWZ5UXVldWUudmFsdWVzKCldXG4gICAgbm90aWZ5UXVldWUuY2xlYXIoKVxuICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgaWYgKG5vdGlmaWNhdGlvblN1cHBvcnQoKSAhPT0gJ2dyYW50ZWQnKSByZXR1cm5cbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKClcbiAgICBpZiAoIWNvbmZpZy5ub3RpZnlGb3JlZ3JvdW5kICYmIGlzRm9yZWdyb3VuZCgpKSByZXR1cm5cbiAgICBjb25zdCB0ID0gbG9jYWxlKClcbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcCgpXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCBidWNrZXQgPSBncm91cGVkLmdldChlbnRyeS5raW5kKSA/PyBbXVxuICAgICAgYnVja2V0LnB1c2goZW50cnkpXG4gICAgICBncm91cGVkLnNldChlbnRyeS5raW5kLCBidWNrZXQpXG4gICAgfVxuICAgIGZvciAoY29uc3QgW2tpbmQsIGJ1Y2tldF0gb2YgZ3JvdXBlZCkge1xuICAgICAgY29uc3QgaGVhZCA9IGJ1Y2tldFswXVxuICAgICAgY29uc3QgZXh0cmEgPSBidWNrZXQubGVuZ3RoIC0gMVxuICAgICAgbGV0IHRpdGxlID0gaGVhZC5sYWJlbCA/PyBoZWFkLnNlc3Npb25JZFxuICAgICAgaWYgKGV4dHJhID4gMCkgdGl0bGUgPSB0aXRsZSArICcgKycgKyBTdHJpbmcoZXh0cmEpXG4gICAgICBsZXQgYm9keSA9IGtpbmQgPT09ICdkb25lJyA/IHQoJ25vdGlmeURvbmVUaXRsZScpIDogKGhlYWQudHlwZUxhYmVsID8/IHQoJ25vdGlmeVBlbmRpbmdUaXRsZScpKVxuICAgICAgaWYgKGtpbmQgPT09ICdkb25lJyAmJiBleHRyYSA9PT0gMCAmJiBoZWFkLmR1cmF0aW9uTXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBib2R5ID0gYm9keSArICcgXHUwMEI3ICcgKyB0KCdub3RpZnlEdXJhdGlvbicsIHsgZHVyYXRpb246IGZvcm1hdFJ1bkR1cmF0aW9uKGhlYWQuZHVyYXRpb25NcywgdCkgfSlcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBubyBgdGFnYDogcmV1c2luZyBvbmUgbWFrZXMgc29tZSBwbGF0Zm9ybXMgc2lsZW50bHlcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgcHJldmlvdXMgYmFubmVyIGluc3RlYWQgb2YgcmFpc2luZyBhIG5ldyBvbmUuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24odGl0bGUsIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGljb246IHVyaShraW5kID09PSAnZG9uZScgPyBjb25maWcuZ3JlZW4gOiBjb25maWcuYW1iZXIpLFxuICAgICAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjoga2luZCA9PT0gJ2RvbmUnID8gY29uZmlnLmRvbmVQZXJzaXN0ZW50IDogY29uZmlnLnBlbmRpbmdQZXJzaXN0ZW50LFxuICAgICAgICB9KVxuICAgICAgICBub3RpZmljYXRpb24ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICB0cnkgeyB3aW5kb3cuZm9jdXMoKSB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd29ya3NwYWNlID0gY3R4LmdldCgndWlXb3Jrc3BhY2UnKVxuICAgICAgICAgICAgaWYgKHdvcmtzcGFjZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3b3Jrc3BhY2Uub3BlblNlc3Npb24gPT09ICdmdW5jdGlvbicpIHdvcmtzcGFjZS5vcGVuU2Vzc2lvbihoZWFkLnNlc3Npb25JZClcbiAgICAgICAgICAgIGVsc2UgY3R4LnNlc3Npb25zLm9wZW4oaGVhZC5zZXNzaW9uSWQpXG4gICAgICAgICAgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG4gICAgICAgICAgbm90aWZpY2F0aW9uLmNsb3NlKClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbbWFsa28tcHJlZnNdIGNvdWxkIG5vdCByYWlzZSBub3RpZmljYXRpb24nLCBlcnJvcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogNjAgcyByb2xscyBpbnRvIG1pbnV0ZXMsIHNlY29uZHMgemVyby1wYWRkZWQgKG1hdGNoZXMgdGhlIG9mZmljaWFsIGZvcm1hdCkuICovXG4gIGZ1bmN0aW9uIGZvcm1hdFJ1bkR1cmF0aW9uKG1zLCB0KSB7XG4gICAgY29uc3QgdG90YWwgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKG1zIC8gMTAwMCkpXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodG90YWwgLyA2MClcbiAgICBjb25zdCBzZWNvbmRzID0gdG90YWwgJSA2MFxuICAgIHJldHVybiBtaW51dGVzID4gMFxuICAgICAgPyB0KCdkdXJhdGlvbk1pbnV0ZXMnLCB7IG1pbnV0ZXMsIHNlY29uZHM6IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpIH0pXG4gICAgICA6IHQoJ2R1cmF0aW9uU2Vjb25kcycsIHsgc2Vjb25kcyB9KVxuICB9XG5cbiAgLyoqIENvbXBsZXRpb24gLyBwZW5kaW5nIHRyYW5zaXRpb25zIGZyb20gdGhlIHNlc3Npb24gc3RhdGUuICovXG4gIGZ1bmN0aW9uIGRldGVjdFRyYW5zaXRpb25zKHN0YXRlKSB7XG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBjb25zdCBiZWZvcmUgPSBwcmV2Q29tcGxldGVkLmdldChyb3cuaWQpXG4gICAgICBjb25zdCBub3cgPSByb3cuY29tcGxldGVkID09PSB0cnVlXG4gICAgICBpZiAoYmVmb3JlID09PSBmYWxzZSAmJiBub3cpIGVtaXRFdmVudCgnZG9uZScsIHJvdy5pZCwgcm93LmRpc3BsYXlUaXRsZSA/PyByb3cudGl0bGUgPz8gcm93LmlkLCB1bmRlZmluZWQsIGxhc3RSdW5Ncy5nZXQocm93LmlkKSlcbiAgICAgIGlmICghbm93KSBub3RpZmllZC5kZWxldGUocm93LmlkICsgJzpkb25lJylcbiAgICAgIHByZXZDb21wbGV0ZWQuc2V0KHJvdy5pZCwgbm93KVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIFsuLi5wcmV2Q29tcGxldGVkLmtleXMoKV0pIHtcbiAgICAgIGlmICghKGlkIGluIHN0YXRlLmJ5SWQpKSB7IHByZXZDb21wbGV0ZWQuZGVsZXRlKGlkKTsgbm90aWZpZWQuZGVsZXRlKGlkICsgJzpkb25lJykgfVxuICAgIH1cbiAgICBjb25zdCBjdXJyZW50ID0gbmV3IFNldCgpXG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkgaWYgKHJvdy5wZW5kaW5nSW50ZXJhY3Rpb24gIT09IHVuZGVmaW5lZCkgY3VycmVudC5hZGQocm93LmlkKVxuICAgIGlmIChwZW5kaW5nU2Vlbikge1xuICAgICAgZm9yIChjb25zdCBpZCBvZiBjdXJyZW50KSB7XG4gICAgICAgIGlmIChwcmV2UGVuZGluZy5oYXMoaWQpKSBjb250aW51ZVxuICAgICAgICBjb25zdCByb3cgPSBzdGF0ZS5ieUlkW2lkXVxuICAgICAgICBpZiAocm93ICE9PSB1bmRlZmluZWQgJiYgcm93Lm9yaWdpbiA9PT0gJ3N1YmFnZW50JykgY29udGludWVcbiAgICAgICAgY29uc3QgbGFiZWwgPSByb3c/LmRpc3BsYXlUaXRsZSA/PyByb3c/LnRpdGxlID8/IGlkXG4gICAgICAgIGVtaXRFdmVudCgncGVuZGluZycsIGlkLCBsYWJlbCwgcGVuZGluZ1R5cGVMYWJlbChyb3c/LnBlbmRpbmdJbnRlcmFjdGlvbikpXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgcHJldlBlbmRpbmcpIGlmICghY3VycmVudC5oYXMoaWQpKSBub3RpZmllZC5kZWxldGUoaWQgKyAnOnBlbmRpbmcnKVxuICAgIHByZXZQZW5kaW5nID0gY3VycmVudFxuICAgIHBlbmRpbmdTZWVuID0gdHJ1ZVxuICB9XG5cbiAgLyoqIFNlbGYtdHJhY2tlZCBydW5uaW5nIGVkZ2U6IGZpbGxzIHRoZSBnYXAgZm9yIHRoZSBzZXNzaW9uIGJlaW5nIHZpZXdlZC4gKi9cbiAgY29uc3QgcHJldlJ1bm5pbmcgPSBuZXcgTWFwKClcbiAgY29uc3QgZmluaXNoZWRXaGlsZUhpZGRlbiA9IG5ldyBTZXQoKVxuICBmdW5jdGlvbiB0cmFja0VkZ2VzKHN0YXRlKSB7XG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBjb25zdCBwcmV2ID0gcHJldlJ1bm5pbmcuZ2V0KHJvdy5pZClcbiAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHsgcHJldlJ1bm5pbmcuc2V0KHJvdy5pZCwgcm93LnJ1bm5pbmcpOyBjb250aW51ZSB9XG4gICAgICBpZiAoIXByZXYgJiYgcm93LnJ1bm5pbmcpIHJ1blN0YXJ0ZWRBdC5zZXQocm93LmlkLCBEYXRlLm5vdygpKVxuICAgICAgaWYgKHByZXYgJiYgIXJvdy5ydW5uaW5nKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHJ1blN0YXJ0ZWRBdC5nZXQocm93LmlkKVxuICAgICAgICBjb25zdCBlbGFwc2VkID0gc3RhcnRlZEF0ID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBEYXRlLm5vdygpIC0gc3RhcnRlZEF0XG4gICAgICAgIHJ1blN0YXJ0ZWRBdC5kZWxldGUocm93LmlkKVxuICAgICAgICBpZiAoZWxhcHNlZCAhPT0gdW5kZWZpbmVkKSBsYXN0UnVuTXMuc2V0KHJvdy5pZCwgZWxhcHNlZClcbiAgICAgICAgaWYgKHJvdy5pZCA9PT0gc3RhdGUuY3VycmVudCAmJiAhaXNGb3JlZ3JvdW5kKCkpIGZpbmlzaGVkV2hpbGVIaWRkZW4uYWRkKHJvdy5pZClcbiAgICAgICAgaWYgKHJvdy5pZCA9PT0gc3RhdGUuY3VycmVudCkgZW1pdEV2ZW50KCdkb25lJywgcm93LmlkLCByb3cuZGlzcGxheVRpdGxlID8/IHJvdy50aXRsZSA/PyByb3cuaWQsIHVuZGVmaW5lZCwgZWxhcHNlZClcbiAgICAgIH0gZWxzZSBpZiAocm93LnJ1bm5pbmcpIGZpbmlzaGVkV2hpbGVIaWRkZW4uZGVsZXRlKHJvdy5pZClcbiAgICAgIHByZXZSdW5uaW5nLnNldChyb3cuaWQsIHJvdy5ydW5uaW5nKVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGlkIG9mIFsuLi5wcmV2UnVubmluZy5rZXlzKCldKSB7XG4gICAgICBpZiAoIShpZCBpbiBzdGF0ZS5ieUlkKSkgeyBwcmV2UnVubmluZy5kZWxldGUoaWQpOyBmaW5pc2hlZFdoaWxlSGlkZGVuLmRlbGV0ZShpZCk7IHJ1blN0YXJ0ZWRBdC5kZWxldGUoaWQpOyBsYXN0UnVuTXMuZGVsZXRlKGlkKSB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEJhY2sgaW4gdGhlIGZvcmVncm91bmQ6IHRoZSB2aWV3ZWQgc2Vzc2lvbidzIGdyZWVuIGxpZ2h0IGNsZWFycy4gKi9cbiAgY29uc3Qgb25Gb3JlZ3JvdW5kID0gKCkgPT4ge1xuICAgIGlmICghaXNGb3JlZ3JvdW5kKCkpIHJldHVyblxuICAgIGlmIChmaW5pc2hlZFdoaWxlSGlkZGVuLnNpemUgPiAwKSB7IGZpbmlzaGVkV2hpbGVIaWRkZW4uY2xlYXIoKTsgc3luYygpIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgdGFiIHN0YXRlIG92ZXIgbWFpbiBzZXNzaW9ucy4gUHJpb3JpdHk6IGFtYmVyIChzb21ldGhpbmcgd2FpdHNcbiAgICogZm9yIHlvdSkgPiB3b3JraW5nIChhIHNlc3Npb24gaXMgZ2VuZXJhdGluZykgPiBncmVlbiAodW5zZWVuIGNvbXBsZXRpb24pXG4gICAqID4gaWRsZS4gUmV0dXJucyBgJ29mZidgIHdoZW4gdGhlIHN0YXR1cyBsaWdodCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGN1cnJlbnRLaW5kKHN0YXRlKSB7XG4gICAgaWYgKCFyZWFkQ29uZmlnKCkuY29sb3JzRW5hYmxlZCkgcmV0dXJuICdvZmYnXG4gICAgbGV0IGdyZWVuID0gZmFsc2VcbiAgICBsZXQgd29ya2luZyA9IGZhbHNlXG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBpZiAocm93LnBlbmRpbmdJbnRlcmFjdGlvbiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gJ2FtYmVyJ1xuICAgICAgaWYgKHJvdy5ydW5uaW5nID09PSB0cnVlKSB3b3JraW5nID0gdHJ1ZVxuICAgICAgaWYgKHJvdy5jb21wbGV0ZWQgPT09IHRydWUgfHwgZmluaXNoZWRXaGlsZUhpZGRlbi5oYXMocm93LmlkKSkgZ3JlZW4gPSB0cnVlXG4gICAgfVxuICAgIGlmICh3b3JraW5nKSByZXR1cm4gJ3dvcmtpbmcnXG4gICAgaWYgKGdyZWVuKSByZXR1cm4gJ2dyZWVuJ1xuICAgIHJldHVybiAnaWRsZSdcbiAgfVxuXG4gIC8qKiBBcHBseSBvbmUgdGFiIHN0YXRlIHRvIHRoZSBmYXZpY29uLiAqL1xuICBmdW5jdGlvbiBhcHBseUtpbmQoa2luZCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKVxuICAgIGlmIChraW5kID09PSAnb2ZmJykgeyByZXN0b3JlKCk7IHJldHVybiB9XG4gICAgY29uc3QgaHJlZiA9IGtpbmQgPT09ICdhbWJlcidcbiAgICAgID8gdXJpKGNvbmZpZy5hbWJlcilcbiAgICAgIDoga2luZCA9PT0gJ3dvcmtpbmcnXG4gICAgICAgID8gdXJpKGNvbmZpZy53b3JraW5nKVxuICAgICAgICA6IGtpbmQgPT09ICdncmVlbidcbiAgICAgICAgICA/IHVyaShjb25maWcuZ3JlZW4pXG4gICAgICAgICAgOiAoY29uZmlnLmJsYWNrID8gdXJpKGNvbmZpZy5ibGFjaykgOiBudWxsKVxuICAgIGlmIChocmVmID09PSBudWxsKSByZXN0b3JlKClcbiAgICBlbHNlIGlmIChhcHBsaWVkICE9PSBocmVmKSB7IHBhaW50KGhyZWYpOyBhcHBsaWVkID0gaHJlZiB9XG4gIH1cblxuICAvKiogTWVyZ2UgdGhlIHNlc3Npb24gcm93cyB3aXRoIHRoZSBvZmZpY2lhbCBzdGF0dXMgc3RvcmUgd2hlbiBhdmFpbGFibGUuICovXG4gIGZ1bmN0aW9uIGJ1aWxkU3RhdGUoKSB7XG4gICAgY29uc3QgbGlzdFN0YXRlID0gbGlzdC5nZXRTbmFwc2hvdCgpXG4gICAgY29uc3Qgc3RhdHVzID0gc3RhdHVzU291cmNlPy5nZXRTbmFwc2hvdCgpXG4gICAgbGV0IGN1cnJlbnQgPSBsaXN0U3RhdGUuY3VycmVudFxuICAgIGNvbnN0IGJ5SWQgPSB7fVxuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMobGlzdFN0YXRlLmJ5SWQpKSB7XG4gICAgICBjb25zdCBzID0gc3RhdHVzPy5nZXQocm93LmlkKVxuICAgICAgaWYgKChyb3cucmV0YWluZWRCeT8ubWFpblZpZXcgPz8gMCkgPiAwKSBjdXJyZW50ID0gcm93LmlkXG4gICAgICBieUlkW3Jvdy5pZF0gPSB7XG4gICAgICAgIC4uLnJvdyxcbiAgICAgICAgcnVubmluZzogcz8ucnVubmluZyA/PyByb3cucnVubmluZyxcbiAgICAgICAgY29tcGxldGVkOiBzPy5jb21wbGV0aW9uVW5yZWFkID8/IHJvdy5jb21wbGV0ZWQgPT09IHRydWUsXG4gICAgICAgIHBlbmRpbmdJbnRlcmFjdGlvbjogcz8ucGVuZGluZ0ludGVyYWN0aW9uID8/IHJvdy5wZW5kaW5nSW50ZXJhY3Rpb24sXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IC4uLmxpc3RTdGF0ZSwgYnlJZCwgY3VycmVudCB9XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jKCkge1xuICAgIGNvbnN0IHN0YXRlID0gYnVpbGRTdGF0ZSgpXG4gICAgdHJhY2tFZGdlcyhzdGF0ZSlcbiAgICBkZXRlY3RUcmFuc2l0aW9ucyhzdGF0ZSlcbiAgICBhcHBseUtpbmQoY3VycmVudEtpbmQoc3RhdGUpKVxuICB9XG5cbiAgY29uc3QgdW5zdWJzY3JpYmVMaXN0ID0gbGlzdC5zdWJzY3JpYmUoc3luYylcbiAgY29uc3QgdW5zdWJzY3JpYmVGb3JtID0gZm9ybS5zdWJzY3JpYmUoc3luYylcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uRm9yZWdyb3VuZClcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb3JlZ3JvdW5kKVxuICBzeW5jKClcblxuICAvLyBPcHRpb25hbCBjaGFubmVsOiB0aGUgb2ZmaWNpYWwgc3RhdHVzIHN0b3JlIChwcmVzZW50IG9uIDAuMS43KykuXG4gIGN0eC5pbmplY3QoWyd1aVNlc3Npb24nXSwgKHVpQ3R4KSA9PiB7XG4gICAgc3RhdHVzU291cmNlID0gdWlDdHgudWlTZXNzaW9uLnNlc3Npb25TdGF0dXNcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN0YXR1c1NvdXJjZS5zdWJzY3JpYmUoc3luYylcbiAgICBzeW5jKClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUoKVxuICAgICAgc3RhdHVzU291cmNlID0gdW5kZWZpbmVkXG4gICAgICBzeW5jKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAobm90aWZ5VGltZXIgIT09IHVuZGVmaW5lZCkgY2xlYXJUaW1lb3V0KG5vdGlmeVRpbWVyKVxuICAgIG5vdGlmeVF1ZXVlLmNsZWFyKClcbiAgICBzdG9wU291bmQoKVxuICAgIGljb25PYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICB1bnN1YnNjcmliZUxpc3QoKVxuICAgIHVuc3Vic2NyaWJlRm9ybSgpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uRm9yZWdyb3VuZClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvcmVncm91bmQpXG4gICAgcmVzdG9yZSgpXG4gIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUEsbUJBQWtCO0FBQ2xCLHNDQUFpRDs7O0FDRTFDLElBQU0saUJBQWlCO0FBQUEsRUFDNUIsSUFBSTtBQUFBLEVBQ0osU0FBUztBQUFBLEVBQ1QsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQ3BCO0FBUU8sU0FBUyxnQkFBZ0IsWUFBWSxjQUFjO0FBQ3hELFNBQU87QUFBQSxJQUNMLElBQUksZUFBZTtBQUFBLElBQ25CLFNBQVMsZUFBZTtBQUFBLElBQ3hCLFdBQVcsZUFBZTtBQUFBLElBQzFCLFFBQVEsZUFBZTtBQUFBLElBQ3ZCLFlBQVksRUFBRSxNQUFNLFNBQVM7QUFBQSxJQUM3QixZQUFZO0FBQUEsTUFDVjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsT0FBTyxFQUFFLE1BQU0sVUFBVSxZQUFZLGVBQWUsZ0JBQWdCLFFBQVEsV0FBVztBQUFBLE1BQ3pGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUSxFQUFFLE1BQU0sVUFBVSxZQUFZLGVBQWUsa0JBQWtCLFFBQVEsYUFBYTtBQUFBLEVBQzlGO0FBQ0Y7OztBQ2xDTyxTQUFTLFNBQVMsT0FBTztBQUM5QixTQUFPLHU3R0FBbzhHLFFBQVE7QUFDcjlHOzs7QUNLTyxJQUFNLFlBQVk7QUFHekIsSUFBTSxnQkFBZ0I7QUFDdEIsSUFBTSxnQkFBZ0I7QUFDdEIsSUFBTSxrQkFBa0I7QUFDeEIsSUFBTSxNQUFNO0FBRVosSUFBTSxrQkFBa0I7QUFNeEIsU0FBUyxzQkFBc0I7QUFDN0Is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SUFBSSxJQUFJO0FBQUEsRUFDL0M7QUFDRjtBQUVBLGVBQXNCLE1BQU0sS0FBSztBQUMvQixNQUFJLE9BQU8sTUFBTSxJQUFJLE9BQU8sU0FBUyxXQUFXLEVBQUUsSUFBSSxHQUFHLENBQUMsR0FBRyxrQ0FBa0M7QUFDL0YsUUFBTSxJQUFJLElBQUksT0FBTyxLQUFLLFNBQVM7QUFDbkMsUUFBTSxPQUFPLElBQUksWUFBWSxJQUFJLEVBQUU7QUFDbkMsUUFBTSxZQUFZLElBQUksWUFBWSxJQUFJLFFBQVE7QUFHOUMsTUFBSTtBQUNGLFVBQU0sZ0JBQWdCLE1BQU0sSUFBSSxPQUFPLE9BQU8sWUFBWTtBQUMxRCxRQUFJLE9BQU8sTUFBTSxNQUFNO0FBQUUsV0FBSyxjQUFjO0FBQUEsSUFBRSxHQUFHLGlDQUFpQztBQUFBLEVBQ3BGLFNBQVMsT0FBTztBQUNkLFlBQVEsTUFBTSxrRUFBNkQsS0FBSztBQUFBLEVBQ2xGO0FBRUEsTUFBSSxPQUFPLE1BQU0saUJBQWlCLEtBQUssSUFBSSxHQUFHLCtCQUErQjtBQUM3RSxRQUFNLFdBQVcsT0FBTztBQUFBLElBQ3RCLE9BQU8sRUFBRSxPQUFPLE1BQU0sY0FBYyxVQUFVO0FBQUEsSUFDOUMsTUFBTSxDQUFDLE9BQU8sVUFBVSxLQUFLLElBQUksT0FBTyxLQUFLO0FBQUEsSUFDN0MsT0FBTyxPQUFPLFNBQVM7QUFJckIsWUFBTSxTQUFTLElBQUksSUFBSSxvQkFBb0I7QUFDM0MsVUFBSSxXQUFXLE9BQVcsT0FBTSxJQUFJLE1BQU0seUNBQXlDO0FBQ25GLFlBQU0sU0FBUyxNQUFNLE9BQU8sTUFBTSxJQUFJO0FBRXRDLFVBQUksV0FBVyxRQUFRLE9BQU8sV0FBVyxZQUFZLFFBQVEsUUFBUTtBQUNuRSxZQUFJLE9BQU8sT0FBTyxLQUFNLE9BQU0sT0FBTyxTQUFTLElBQUksTUFBTSw4QkFBOEI7QUFDdEYsZUFBTyxPQUFPO0FBQUEsTUFDaEI7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsYUFBYSxDQUFDLFNBQVMsV0FBVyxVQUFVLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxTQUFTLFFBQVEsR0FBRyxPQUFPLE9BQU8sQ0FBQyxDQUFDO0FBQUEsRUFDM0g7QUFDQSxNQUFJLE1BQU0sT0FBTyxNQUFNLE1BQU0sSUFBSSxNQUFNLFNBQVM7QUFBQSxJQUM5QyxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxPQUFPLE1BQU0sRUFBRSxPQUFPO0FBQUEsSUFDdEIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1YsR0FBRyxZQUFZLENBQUM7QUFDbEI7IiwKICAibmFtZXMiOiBbIm5hbWUiLCAiSEVYIiwgIlJlYWN0Il0KfQo=
    return module.exports;
  },
});
