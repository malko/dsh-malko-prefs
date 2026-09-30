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
      donePersistent: value.notifyDonePersistent === true,
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
  persistDone: "Keep on screen when finished",
  persistPending: "Keep on screen while waiting",
  persistHint: "On: the notification stays until you dismiss it (if the OS honors it).",
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
  persistDone: "\u5B8C\u6210\u65F6\u5E38\u9A7B\u5C4F\u5E55",
  persistPending: "\u7B49\u5F85\u65F6\u5E38\u9A7B\u5C4F\u5E55",
  persistHint: "\u5F00\u542F\u540E\u9700\u624B\u52A8\u5173\u95ED\u624D\u4F1A\u6D88\u5931\uFF08\u53D7\u7CFB\u7EDF\u652F\u6301\u9650\u5236\uFF09\u3002",
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
      switchField("persistDone", "notifyDonePersistent", "persistHint", false),
      switchField("persistPending", "notifyPendingPersistent", "persistHint", false)
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC50cyIsICJzcmMvcmVtb3RlLnRzIiwgInNyYy93aGFsZS50cyIsICJzcmMvbm90aWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgYnJvd3NlciBoYWxmLlxuICpcbiAqIE9uZSBzZXR0aW5ncyBzZWN0aW9uIHdpdGggdGhyZWUgc3ViLXBhbmVsczogY29udGV4dCBjb21wYWN0aW9uLCBsbGFtYS5jcHBcbiAqIG1vZGVsIGVucmljaG1lbnQsIGFuZCBub3RpZmljYXRpb25zLiBSZWFkcyBhbmQgd3JpdGVzIHRoZSBgbWFsa28tcHJlZnNgXG4gKiBjb25maWcgZm9ybSwgcmVhZHMgdGhlIGBsbG0tcGktYWlgIGZvcm0gdG8gcG9wdWxhdGUgdGhlIG1vZGVsIHBpY2tlcnMsIGFuZFxuICogcnVucyB0aGUgdGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoc2VlIGAuL25vdGlmeS50c2ApLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnRlZENvbnRyb2wsIFN3aXRjaCB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXByaW1pdGl2ZXMnXG5pbXBvcnQgeyBwcm9iZUludm9jYXRpb24gfSBmcm9tICcuL3JlbW90ZS50cydcbmltcG9ydCB7XG4gIEJVSUxUSU5fU09VTkRTLFxuICBMT0NBTEVfTlMsXG4gIFNPVU5EX05PTkUsXG4gIFNPVU5EX1BBQ0tTLFxuICBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbixcbiAgcGFja1NvdW5kSWRzLFxuICBwbGF5U291bmQsXG4gIHByaW1lU291bmQsXG4gIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uLFxuICBzdGFydFN0YXR1c0xpZ2h0LFxufSBmcm9tICcuL25vdGlmeS50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZHNoLW1hbGtvLXByZWZzJ1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsnc2Vzc2lvbnMnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2NvbmZpZ0Zvcm1zJywgJ3JlbW90ZSddXG5cbmNvbnN0IE5TID0gJ21hbGtvLXByZWZzJ1xuY29uc3QgTU9ERUxfTlMgPSAnbGxtLXBpLWFpJ1xuY29uc3QgU0xPVCA9ICdzZXR0aW5ncy5zZWN0aW9uJ1xuY29uc3QgVEFCU19JRCA9ICdtYWxrby1wcmVmcy10YWJzJ1xuXG4vKiogYCNSUkdHQkJgIGNvbG91ciBsaXRlcmFsLiAqL1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuXG4vKiogU3RyaWN0LWNvZGVjIHN0dWI6IHRoZSBicm93c2VyIG5ldmVyIGRlY29kZXMgaXRzIG93biBhcmd1bWVudHMuICovXG5jb25zdCBpZGVudGl0eVNjaGVtYSA9ICgpID0+ICh7IHBhcnNlOiAodmFsdWUpID0+IHZhbHVlIH0pXG5cbi8qKiBCcm93c2VyIGNvbnRyaWJ1dGlvbiBtb3VudGVkIHRocm91Z2ggYGN0eC5yZW1vdGUuJG1vdW50KClgLiAqL1xuY29uc3QgUFJPQkVfUkVNT1RFID0ge1xuICBwYWNrYWdlOiAnZHNoLW1hbGtvLXByZWZzJyxcbiAgZGVzY3JpcHRvcnM6IFtwcm9iZUludm9jYXRpb24oaWRlbnRpdHlTY2hlbWEsIGlkZW50aXR5U2NoZW1hKV0sXG59XG5cbmNvbnN0IGVsID0gUmVhY3QuY3JlYXRlRWxlbWVudFxuXG5jb25zdCBlbiA9IHtcbiAgdGl0bGU6IFwiTWFsa28ncyBwcmVmc1wiLFxuICBpbnRybzogJ1R1bmFibGUgY29tcGFjdGlvbiwgbGxhbWEuY3BwIG1vZGVsIGVucmljaG1lbnQgYW5kIG5vdGlmaWNhdGlvbnMuJyxcbiAgdGFiQ29tcGFjdGlvbjogJ0NvbnRleHQgY29tcGFjdGlvbicsXG4gIHRhYk1vZGVsczogJ2xsYW1hLmNwcCBtb2RlbHMnLFxuICB0YWJOb3RpZmljYXRpb25zOiAnTm90aWZpY2F0aW9ucycsXG4gIC8vIENvbXBhY3Rpb25cbiAgdGhyZXNob2xkVGl0bGU6ICdDb21wYWN0aW9uIHRocmVzaG9sZCcsXG4gIHRocmVzaG9sZFRva2VuczogJ1RocmVzaG9sZCAodG9rZW5zKScsXG4gIHRocmVzaG9sZFRva2Vuc0hpbnQ6ICdBYnNvbHV0ZSBwcmVzc3VyZSBpbiB0b2tlbnMsIGUuZy4gMTMwayBvciAxMzBLLiBFbXB0eS8wID0gdXNlIHRoZSByYXRpbyBiZWxvdy4nLFxuICBjb250ZXh0V2luZG93OiAnQ29udGV4dCB3aW5kb3cgKHRva2VucyknLFxuICBjb250ZXh0V2luZG93SGludDogJ1dpbmRvdyB0aGUgYWJzb2x1dGUgdGhyZXNob2xkIGlzIGV4cHJlc3NlZCBhZ2FpbnN0IChlLmcuIDIwMGspLiAwID0gZGVyaXZlIG5vdGhpbmcgKHJhdGlvIG9ubHkpLicsXG4gIHRocmVzaG9sZFJhdGlvOiAnVGhyZXNob2xkIHJhdGlvJyxcbiAgdGhyZXNob2xkUmF0aW9IaW50OiAnVXNlZCB3aGVuIHRoZSBhYnNvbHV0ZSB0aHJlc2hvbGQgaXMgZW1wdHkgKDAuOCA9IDgwJSBvZiB0aGUgd2luZG93KS4nLFxuICBoZWFkcm9vbTogJ0hlYWRyb29tICh0b2tlbnMpJyxcbiAgaGVhZHJvb21IaW50OiAnUmVzZXJ2ZWQgb24gdG9wIG9mIHRoZSBvdXRwdXQgY2FwLiBUaGUgb2ZmaWNpYWwgZGVmYXVsdCAoNjU1MzYpIGNhcHMgdGhlIHRyaWdnZXIgd2VsbCBiZWxvdyA4MCUuJyxcbiAgcmV0ZW50aW9uVGl0bGU6ICdSZXRlbnRpb24nLFxuICByZXRhaW5Ub2tlbnM6ICdLZWVwIGxhc3QgKHRva2VucyknLFxuICByZXRhaW5Ub2tlbnNIaW50OiAnVmVyYmF0aW0gcmVjZW50LWNvbnRleHQgYnVkZ2V0LCBlLmcuIDMyay4gRW1wdHkvMCA9IHVzZSB0aGUgcmF0aW8gYmVsb3cuJyxcbiAgcmV0YWluUmF0aW86ICdLZWVwIHJhdGlvJyxcbiAgYmVoYXZpb3VyVGl0bGU6ICdCZWhhdmlvdXInLFxuICBhdXRvOiAnQXV0b21hdGljIGNvbXBhY3Rpb24nLFxuICBhdXRvSGludDogJ09mZmljaWFsIGJldHdlZW4tc3RlcCBwcmVzc3VyZSBjb21wYWN0aW9uIGFuZCBjb250ZXh0LW92ZXJmbG93IHJlY292ZXJ5LicsXG4gIHR1cm5FbmQ6ICdDb21wYWN0IGF0IGVuZCBvZiB0dXJuJyxcbiAgdHVybkVuZEhpbnQ6ICdSdW5zIG9uZSBtb3JlIGNvbXBhY3Rpb24gd2hlbiB0aGUgYWdlbnQgZ29lcyBpZGxlLicsXG4gIHN1bW1hcml6YXRpb25UaXRsZTogJ1N1bW1hcml6YXRpb24nLFxuICBzdW1tYXJpemF0aW9uTW9kZTogJ01vZGVsJyxcbiAgbW9kZVNlc3Npb246ICdTZXNzaW9uIG1vZGVsJyxcbiAgbW9kZUN1c3RvbTogJ0N1c3RvbSBtb2RlbCcsXG4gIHByb3ZpZGVyOiAnUHJvdmlkZXInLFxuICBtb2RlbDogJ01vZGVsJyxcbiAgcmVhc29uaW5nOiAnUmVhc29uaW5nJyxcbiAgcmVhc29uaW5nRGVmYXVsdDogJ0RlZmF1bHQnLFxuICByZWFzb25pbmdPZmY6ICdPZmYnLFxuICBtYXhUb2tlbnM6ICdTdW1tYXJ5IG91dHB1dCBjYXAgKHRva2VucyknLFxuICBhZHZhbmNlZFRpdGxlOiAnQWR2YW5jZWQnLFxuICBjb21wYWN0aW9uUmV0cmllczogJ0V4dHJhIGNvbXBhY3Rpb24gYXR0ZW1wdHMnLFxuICBtYXhPdmVyZmxvd1JldHJpZXM6ICdPdmVyZmxvdyByZWNvdmVyeSBhdHRlbXB0cycsXG4gIC8vIE1vZGVsc1xuICBtb2RlbHNUaXRsZTogJ2xsYW1hLmNwcCBtb2RlbHMnLFxuICBtb2RlbHNJbnRybzogJ1JlYWQgY29udGV4dCB3aW5kb3cgYW5kIGlucHV0IG1vZGFsaXRpZXMgZnJvbSB0aGUgc2VydmVyIGFuZCBmaWxsIHRoZSBtb2RlbCBlbnRyaWVzIG9mIGEgcGktYWkgcHJvdmlkZXIuJyxcbiAgZW5yaWNoOiAnRW5yaWNoIGZyb20gc2VydmVyJyxcbiAgZW5yaWNoaW5nOiAnRW5yaWNoaW5nXFx1MjAyNicsXG4gIG5vQmFzZVVybDogJ05vIGVuZHBvaW50IGNvbmZpZ3VyZWQgZm9yIHRoaXMgcHJvdmlkZXIuJyxcbiAgZW5yaWNoZWQ6ICdFbnJpY2hlZCB7Y291bnR9IG1vZGVsKHMpLicsXG4gIC8vIE5vdGlmaWNhdGlvbnNcbiAgY29sb3JzR3JvdXA6ICdUYWIgc3RhdHVzIGxpZ2h0JyxcbiAgY29sb3JzSW50cm86ICdUaGUgYnJvd3NlciB0YWIgaWNvbiByZWZsZWN0cyB0aGUgc2Vzc2lvbiBzdGF0ZTogZ3JlZW4gPSBmaW5pc2hlZCwgYW1iZXIgPSB3YWl0aW5nIGZvciB5b3UuJyxcbiAgY29sb3JzRW5hYmxlZDogJ0NvbG9yIHRoZSB0YWIgaWNvbicsXG4gIGNvbG9yc0VuYWJsZWRIaW50OiAnT2ZmIGtlZXBzIHRoZSBvZmZpY2lhbCBmYXZpY29uIGF0IGFsbCB0aW1lcy4nLFxuICBncmVlbkxhYmVsOiAnRmluaXNoZWQnLFxuICBhbWJlckxhYmVsOiAnV2FpdGluZyAocXVlc3Rpb24vYXBwcm92YWwpJyxcbiAgd29ya2luZ0xhYmVsOiAnV29ya2luZycsXG4gIHdvcmtpbmdIaW50OiAnU2hvd24gd2hpbGUgYSBzZXNzaW9uIGlzIGdlbmVyYXRpbmcuJyxcbiAgYmxhY2tMYWJlbDogJ0lkbGUgY29sb3InLFxuICBibGFja0hpbnQ6ICdMZWF2ZSBlbXB0eSB0byBrZWVwIHRoZSBvZmZpY2lhbCBmYXZpY29uIHdoZW4gaWRsZS4nLFxuICBjb2xvclJlc2V0OiAnQ2xlYXInLFxuICBjb2xvclVuc2V0OiAnb2ZmaWNpYWwnLFxuICBub3RpZnlHcm91cDogJ1N5c3RlbSBub3RpZmljYXRpb25zJyxcbiAgbm90aWZ5SW50cm86ICdSYWlzZSBhIGJyb3dzZXIgbm90aWZpY2F0aW9uIHdoZW4gYSBzZXNzaW9uIGZpbmlzaGVzIG9yIGEgcXVlc3Rpb24vYXBwcm92YWwgd2FpdHMgZm9yIHlvdS4nLFxuICBub3RpZnlFbmFibGVkOiAnRW5hYmxlIG5vdGlmaWNhdGlvbnMnLFxuICBub3RpZnlFbmFibGVkSGludDogJ1RoZSBicm93c2VyIGFza3MgZm9yIHBlcm1pc3Npb24gdGhlIGZpcnN0IHRpbWUgeW91IGVuYWJsZSB0aGlzLicsXG4gIG5vdGlmeUZvcmVncm91bmQ6ICdOb3RpZnkgaW4gdGhlIGZvcmVncm91bmQnLFxuICBub3RpZnlGb3JlZ3JvdW5kSGludDogJ0Fsc28gbm90aWZ5IHdoaWxlIHRoZSB0YWIgaXMgdmlzaWJsZSBhbmQgZm9jdXNlZC4nLFxuICBwZXJzaXN0RG9uZTogJ0tlZXAgb24gc2NyZWVuIHdoZW4gZmluaXNoZWQnLFxuICBwZXJzaXN0UGVuZGluZzogJ0tlZXAgb24gc2NyZWVuIHdoaWxlIHdhaXRpbmcnLFxuICBwZXJzaXN0SGludDogJ09uOiB0aGUgbm90aWZpY2F0aW9uIHN0YXlzIHVudGlsIHlvdSBkaXNtaXNzIGl0IChpZiB0aGUgT1MgaG9ub3JzIGl0KS4nLFxuICBzb3VuZEdyb3VwOiAnU291bmQnLFxuICBzb3VuZEludHJvOiAnT3B0aW9uYWwgbm90aWZpY2F0aW9uIHNvdW5kLiBEZWZhdWx0IGlzIHNpbGVudC4nLFxuICBub3RpZnlWb2x1bWU6ICdWb2x1bWUnLFxuICBzb3VuZERvbmU6ICdPbiBzZXNzaW9uIGZpbmlzaGVkJyxcbiAgc291bmRQZW5kaW5nOiAnV2hpbGUgd2FpdGluZyBmb3IgeW91JyxcbiAgc291bmROb1NvdW5kOiAnTm8gc291bmQnLFxuICBzb3VuZFBhY2tCdWlsdGluOiAnQnVpbHQtaW4nLFxuICBzb3VuZEJ1aWx0aW5VcDogJ0NoaW1lIFVwJyxcbiAgc291bmRCdWlsdGluRG93bjogJ0NoaW1lIERvd24nLFxuICBwZXJtaXNzaW9uRGVuaWVkOiAnQmxvY2tlZCBieSB0aGUgYnJvd3NlciBcXHUyMDE0IHJlLWVuYWJsZSBub3RpZmljYXRpb25zIGluIHRoZSBzaXRlIHNldHRpbmdzLicsXG4gIHBlcm1pc3Npb25VbnN1cHBvcnRlZDogJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHN5c3RlbSBub3RpZmljYXRpb25zLicsXG4gIG5vdGlmeURvbmVUaXRsZTogJ1Nlc3Npb24gZmluaXNoZWQnLFxuICBub3RpZnlQZW5kaW5nVGl0bGU6ICdTb21ldGhpbmcgYXdhaXRzIHlvdScsXG4gIG5vdGlmeUR1cmF0aW9uOiAndHVybiB0b29rIHtkdXJhdGlvbn0nLFxuICBkdXJhdGlvblNlY29uZHM6ICd7c2Vjb25kc31zJyxcbiAgZHVyYXRpb25NaW51dGVzOiAne21pbnV0ZXN9bXtzZWNvbmRzfXMnLFxuICBwZW5kaW5nS2luZEFwcHJvdmFsOiAnQXBwcm92YWwgbmVlZGVkJyxcbiAgcGVuZGluZ0tpbmRRdWVzdGlvbjogJ1F1ZXN0aW9uJyxcbiAgcGVuZGluZ0tpbmRQbGFuUmV2aWV3OiAnUGxhbiByZXZpZXcnLFxuICBwZW5kaW5nQXBwcm92YWxUb29sOiAnQXBwcm92YWwgXFx1MDBiNyB7dG9vbH0nLFxuICBwZW5kaW5nUXVlc3Rpb25DaG9vc2U6ICdDaG9vc2UgYW4gb3B0aW9uJyxcbiAgcGVuZGluZ1F1ZXN0aW9uTXVsdGk6ICdDaG9vc2Ugb3B0aW9ucycsXG4gIHBlbmRpbmdRdWVzdGlvbkZpbGw6ICdUeXBlIGFuIGFuc3dlcicsXG4gIHBlbmRpbmdRdWVzdGlvbkJhdGNoOiAne2NvdW50fSBxdWVzdGlvbnMnLFxuICAvLyBTaGFyZWRcbiAgc2F2ZTogJ1NhdmUnLFxuICBzYXZlZDogJ1NhdmVkLicsXG4gIGludmFsaWRUb2tlbjogJ0VudGVyIGEgbnVtYmVyIG9yIGEgay9NIHN1ZmZpeCB2YWx1ZSAoZS5nLiAxMzBrKS4nLFxuICBpbnZhbGlkSGV4OiAnQ29sb3IgbXVzdCBiZSAjUlJHR0JCLicsXG4gIGVycm9yUHJlZml4OiAnRXJyb3I6ICcsXG4gIHVuYXZhaWxhYmxlOiAnVGhpcyBzZXR0aW5nIGlzIG5vdCBhdmFpbGFibGUgZnJvbSB0aGlzIGNsaWVudC4nLFxuICBsb2FkaW5nOiAnTG9hZGluZ1xcdTIwMjYnLFxufVxuXG5jb25zdCB6aCA9IHtcbiAgdGl0bGU6ICdNYWxrbyBcXHU1MDRmXFx1NTk3ZCcsXG4gIGludHJvOiAnXFx1NTM4YlxcdTdmMjlcXHUzMDAxbGxhbWEuY3BwIFxcdTZhMjFcXHU1NzhiXFx1ODg2NVxcdTUxNjhcXHU0ZTBlXFx1OTAxYVxcdTc3ZTVcXHUzMDAyJyxcbiAgdGFiQ29tcGFjdGlvbjogJ1xcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTUzOGJcXHU3ZjI5JyxcbiAgdGFiTW9kZWxzOiAnbGxhbWEuY3BwIFxcdTZhMjFcXHU1NzhiJyxcbiAgdGFiTm90aWZpY2F0aW9uczogJ1xcdTkwMWFcXHU3N2U1JyxcbiAgdGhyZXNob2xkVGl0bGU6ICdcXHU1MzhiXFx1N2YyOVxcdTk2MDBcXHU1MDNjJyxcbiAgdGhyZXNob2xkVG9rZW5zOiAnXFx1OTYwMFxcdTUwM2NcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIHRocmVzaG9sZFRva2Vuc0hpbnQ6ICdcXHU3ZWRkXFx1NWJmOSB0b2tlbiBcXHU5NjAwXFx1NTAzY1xcdWZmMGNcXHU1OTgyIDEzMGtcXHUzMDAyXFx1NzU1OVxcdTdhN2EvMCA9IFxcdTc1MjhcXHU0ZTBiXFx1NjViOVxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIGNvbnRleHRXaW5kb3c6ICdcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU3YTk3XFx1NTNlM1xcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgY29udGV4dFdpbmRvd0hpbnQ6ICdcXHU3ZWRkXFx1NWJmOVxcdTk2MDBcXHU1MDNjXFx1NjI0MFxcdTRmOWRcXHU2MzZlXFx1NzY4NFxcdTdhOTdcXHU1M2UzXFx1ZmYwOFxcdTU5ODIgMjAwa1xcdWZmMDlcXHUzMDAyMCA9IFxcdTUzZWFcXHU3NTI4XFx1NmJkNFxcdTRmOGJcXHUzMDAyJyxcbiAgdGhyZXNob2xkUmF0aW86ICdcXHU5NjAwXFx1NTAzY1xcdTZiZDRcXHU0ZjhiJyxcbiAgdGhyZXNob2xkUmF0aW9IaW50OiAnXFx1NWY1M1xcdTdlZGRcXHU1YmY5XFx1OTYwMFxcdTUwM2NcXHU0ZTNhXFx1N2E3YVxcdTY1ZjZcXHU0ZjdmXFx1NzUyOFxcdWZmMDgwLjggPSBcXHU3YTk3XFx1NTNlM1xcdTc2ODQgODAlXFx1ZmYwOVxcdTMwMDInLFxuICBoZWFkcm9vbTogJ1xcdTk4ODRcXHU3NTU5XFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICBoZWFkcm9vbUhpbnQ6ICdcXHU1NzI4XFx1OGY5M1xcdTUxZmFcXHU5ODg0XFx1N2I5N1xcdTRlNGJcXHU1OTE2XFx1NTE4ZFxcdTk4ODRcXHU3NTU5XFx1NzY4NFxcdTkxY2ZcXHUzMDAyXFx1NWI5OFxcdTY1YjlcXHU5ZWQ4XFx1OGJhNCA2NTUzNiBcXHU0ZjFhXFx1NjI4YVxcdTg5ZTZcXHU1M2QxXFx1NzBiOVxcdTYyYzlcXHU1MjMwIDgwJSBcXHU0ZWU1XFx1NGUwYlxcdTMwMDInLFxuICByZXRlbnRpb25UaXRsZTogJ1xcdTRmZGRcXHU3NTU5JyxcbiAgcmV0YWluVG9rZW5zOiAnXFx1NGZkZFxcdTc1NTlcXHU2NzAwXFx1OGZkMVxcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgcmV0YWluVG9rZW5zSGludDogJ1xcdTkwMTBcXHU1YjU3XFx1NGZkZFxcdTc1NTlcXHU3Njg0XFx1OGZkMVxcdTY3MWZcXHU5ODg0XFx1N2I5N1xcdWZmMGNcXHU1OTgyIDMya1xcdTMwMDJcXHU3NTU5XFx1N2E3YS8wID0gXFx1NzUyOFxcdTRlMGJcXHU2NWI5XFx1NmJkNFxcdTRmOGJcXHUzMDAyJyxcbiAgcmV0YWluUmF0aW86ICdcXHU0ZmRkXFx1NzU1OVxcdTZiZDRcXHU0ZjhiJyxcbiAgYmVoYXZpb3VyVGl0bGU6ICdcXHU4ODRjXFx1NGUzYScsXG4gIGF1dG86ICdcXHU4MWVhXFx1NTJhOFxcdTUzOGJcXHU3ZjI5JyxcbiAgYXV0b0hpbnQ6ICdcXHU1Yjk4XFx1NjViOVxcdTc2ODRcXHU2YjY1XFx1OTVmNFxcdTUzOGJcXHU1MjliXFx1NTM4YlxcdTdmMjlcXHU0ZTBlXFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1NmVhMlxcdTUxZmFcXHU2MDYyXFx1NTkwZFxcdTMwMDInLFxuICB0dXJuRW5kOiAnXFx1OGY2ZVxcdTY3MmJcXHU1MzhiXFx1N2YyOScsXG4gIHR1cm5FbmRIaW50OiAnXFx1NGVlM1xcdTc0MDZcXHU4ZjZjXFx1NGUzYSBpZGxlIFxcdTY1ZjZcXHU1MThkXFx1NTM4YlxcdTdmMjlcXHU0ZTAwXFx1NmIyMVxcdTMwMDInLFxuICBzdW1tYXJpemF0aW9uVGl0bGU6ICdcXHU2NDU4XFx1ODk4MScsXG4gIHN1bW1hcml6YXRpb25Nb2RlOiAnXFx1NmEyMVxcdTU3OGInLFxuICBtb2RlU2Vzc2lvbjogJ1xcdTRmMWFcXHU4YmRkXFx1NmEyMVxcdTU3OGInLFxuICBtb2RlQ3VzdG9tOiAnXFx1ODFlYVxcdTViOWFcXHU0ZTQ5XFx1NmEyMVxcdTU3OGInLFxuICBwcm92aWRlcjogJ1xcdTYzZDBcXHU0ZjliXFx1NTU0NicsXG4gIG1vZGVsOiAnXFx1NmEyMVxcdTU3OGInLFxuICByZWFzb25pbmc6ICdcXHU2MDFkXFx1ODAwM1xcdTdlYTdcXHU1MjJiJyxcbiAgcmVhc29uaW5nRGVmYXVsdDogJ1xcdTllZDhcXHU4YmE0JyxcbiAgcmVhc29uaW5nT2ZmOiAnXFx1NTE3M1xcdTk1ZWQnLFxuICBtYXhUb2tlbnM6ICdcXHU2NDU4XFx1ODk4MVxcdThmOTNcXHU1MWZhXFx1NGUwYVxcdTk2NTBcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIGFkdmFuY2VkVGl0bGU6ICdcXHU5YWQ4XFx1N2VhNycsXG4gIGNvbXBhY3Rpb25SZXRyaWVzOiAnXFx1OTg5ZFxcdTU5MTZcXHU1MzhiXFx1N2YyOVxcdTVjMWRcXHU4YmQ1JyxcbiAgbWF4T3ZlcmZsb3dSZXRyaWVzOiAnXFx1NmVhMlxcdTUxZmFcXHU2MDYyXFx1NTkwZFxcdTVjMWRcXHU4YmQ1JyxcbiAgbW9kZWxzVGl0bGU6ICdsbGFtYS5jcHAgXFx1NmEyMVxcdTU3OGInLFxuICBtb2RlbHNJbnRybzogJ1xcdTRlY2VcXHU2NzBkXFx1NTJhMVxcdTU2NjhcXHU4YmZiXFx1NTNkNlxcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTdhOTdcXHU1M2UzXFx1NGUwZVxcdThmOTNcXHU1MTY1XFx1NmEyMVxcdTYwMDFcXHVmZjBjXFx1NWU3NlxcdTU4NmJcXHU1MTQ1IHBpLWFpIFxcdTYzZDBcXHU0ZjliXFx1NTU0NlxcdTc2ODRcXHU2YTIxXFx1NTc4YlxcdTY3NjFcXHU3NmVlXFx1MzAwMicsXG4gIGVucmljaDogJ1xcdTRlY2VcXHU2NzBkXFx1NTJhMVxcdTU2NjhcXHU1YmNjXFx1NTMxNicsXG4gIGVucmljaGluZzogJ1xcdTZiNjNcXHU1NzI4XFx1NWJjY1xcdTUzMTZcXHUyMDI2JyxcbiAgbm9CYXNlVXJsOiAnXFx1OGJlNVxcdTYzZDBcXHU0ZjliXFx1NTU0NlxcdTY3MmFcXHU5MTRkXFx1N2Y2ZVxcdTdhZWZcXHU3MGI5XFx1MzAwMicsXG4gIGVucmljaGVkOiAnXFx1NWRmMlxcdTViY2NcXHU1MzE2IHtjb3VudH0gXFx1NGUyYVxcdTZhMjFcXHU1NzhiXFx1MzAwMicsXG4gIGNvbG9yc0dyb3VwOiAnXFx1NjgwN1xcdTdiN2VcXHU5ODc1XFx1NzJiNlxcdTYwMDFcXHU3MDZmJyxcbiAgY29sb3JzSW50cm86ICdcXHU2ODA3XFx1N2I3ZVxcdTk4NzVcXHU1NmZlXFx1NjgwN1xcdTk2OGZcXHU0ZjFhXFx1OGJkZFxcdTcyYjZcXHU2MDAxXFx1NTNkOFxcdTgyNzJcXHVmZjFhXFx1N2VmZiA9IFxcdTVkZjJcXHU1YjhjXFx1NjIxMFxcdWZmMGNcXHU3NDI1XFx1NzNjMCA9IFxcdTdiNDlcXHU0ZjYwXFx1NTkwNFxcdTc0MDZcXHUzMDAyJyxcbiAgY29sb3JzRW5hYmxlZDogJ1xcdTU0MmZcXHU3NTI4XFx1NTZmZVxcdTY4MDdcXHU1M2Q4XFx1ODI3MicsXG4gIGNvbG9yc0VuYWJsZWRIaW50OiAnXFx1NTE3M1xcdTk1ZWRcXHU1NDBlXFx1NTljYlxcdTdlYzhcXHU0ZjdmXFx1NzUyOFxcdTViOThcXHU2NWI5XFx1NTZmZVxcdTY4MDdcXHUzMDAyJyxcbiAgZ3JlZW5MYWJlbDogJ1xcdTVkZjJcXHU1YjhjXFx1NjIxMCcsXG4gIGFtYmVyTGFiZWw6ICdcXHU1Zjg1XFx1NTkwNFxcdTc0MDZcXHVmZjA4XFx1NjNkMFxcdTk1ZWUvXFx1NWJhMVxcdTYyNzlcXHVmZjA5JyxcbiAgd29ya2luZ0xhYmVsOiAnXFx1NzUxZlxcdTYyMTBcXHU0ZTJkJyxcbiAgd29ya2luZ0hpbnQ6ICdcXHU0ZjFhXFx1OGJkZFxcdTc1MWZcXHU2MjEwXFx1NjVmNlxcdTY2M2VcXHU3OTNhXFx1MzAwMicsXG4gIGJsYWNrTGFiZWw6ICdcXHU5ZWQ4XFx1OGJhNFxcdTgyNzInLFxuICBibGFja0hpbnQ6ICdcXHU3NTU5XFx1N2E3YVxcdTUyMTlcXHU3YTdhXFx1OTVmMlxcdTY1ZjZcXHU0ZjdmXFx1NzUyOFxcdTViOThcXHU2NWI5XFx1NTZmZVxcdTY4MDdcXHUzMDAyJyxcbiAgY29sb3JSZXNldDogJ1xcdTZlMDVcXHU5NjY0JyxcbiAgY29sb3JVbnNldDogJ1xcdTViOThcXHU2NWI5JyxcbiAgbm90aWZ5R3JvdXA6ICdcXHU3Y2ZiXFx1N2VkZlxcdTkwMWFcXHU3N2U1JyxcbiAgbm90aWZ5SW50cm86ICdcXHU0ZjFhXFx1OGJkZFxcdTViOGNcXHU2MjEwXFx1NjIxNlxcdTY3MDlcXHU2M2QwXFx1OTVlZS9cXHU1YmExXFx1NjI3OVxcdTdiNDlcXHU0ZjYwXFx1NTkwNFxcdTc0MDZcXHU2NWY2XFx1NTNkMVxcdTkwMDFcXHU2ZDRmXFx1ODljOFxcdTU2NjhcXHU5MDFhXFx1NzdlNVxcdTMwMDInLFxuICBub3RpZnlFbmFibGVkOiAnXFx1NTQyZlxcdTc1MjhcXHU5MDFhXFx1NzdlNScsXG4gIG5vdGlmeUVuYWJsZWRIaW50OiAnXFx1OTk5NlxcdTZiMjFcXHU1ZjAwXFx1NTQyZlxcdTY1ZjZcXHU2ZDRmXFx1ODljOFxcdTU2NjhcXHU0ZjFhXFx1OGJlMlxcdTk1ZWVcXHU2Mzg4XFx1Njc0M1xcdTMwMDInLFxuICBub3RpZnlGb3JlZ3JvdW5kOiAnXFx1NTI0ZFxcdTUzZjBcXHU2M2QwXFx1OTE5MicsXG4gIG5vdGlmeUZvcmVncm91bmRIaW50OiAnXFx1NjgwN1xcdTdiN2VcXHU5ODc1XFx1NTNlZlxcdTg5YzFcXHU0ZTE0XFx1NjcwOVxcdTcxMjZcXHU3MGI5XFx1NjVmNlxcdTRlNWZcXHU2M2QwXFx1OTE5MlxcdTMwMDInLFxuICBwZXJzaXN0RG9uZTogJ1xcdTViOGNcXHU2MjEwXFx1NjVmNlxcdTVlMzhcXHU5YTdiXFx1NWM0ZlxcdTVlNTUnLFxuICBwZXJzaXN0UGVuZGluZzogJ1xcdTdiNDlcXHU1Zjg1XFx1NjVmNlxcdTVlMzhcXHU5YTdiXFx1NWM0ZlxcdTVlNTUnLFxuICBwZXJzaXN0SGludDogJ1xcdTVmMDBcXHU1NDJmXFx1NTQwZVxcdTk3MDBcXHU2MjRiXFx1NTJhOFxcdTUxNzNcXHU5NWVkXFx1NjI0ZFxcdTRmMWFcXHU2ZDg4XFx1NTkzMVxcdWZmMDhcXHU1M2Q3XFx1N2NmYlxcdTdlZGZcXHU2NTJmXFx1NjMwMVxcdTk2NTBcXHU1MjM2XFx1ZmYwOVxcdTMwMDInLFxuICBzb3VuZEdyb3VwOiAnXFx1NjNkMFxcdTc5M2FcXHU5N2YzJyxcbiAgc291bmRJbnRybzogJ1xcdTUzZWZcXHU5MDA5XFx1NzY4NFxcdTkwMWFcXHU3N2U1XFx1NjNkMFxcdTc5M2FcXHU5N2YzXFx1ZmYwY1xcdTllZDhcXHU4YmE0XFx1NjVlMFxcdTU4ZjBcXHUzMDAyJyxcbiAgbm90aWZ5Vm9sdW1lOiAnXFx1OTdmM1xcdTkxY2YnLFxuICBzb3VuZERvbmU6ICdcXHU0ZjFhXFx1OGJkZFxcdTViOGNcXHU2MjEwXFx1NjVmNicsXG4gIHNvdW5kUGVuZGluZzogJ1xcdTdiNDlcXHU0ZjYwXFx1NTkwNFxcdTc0MDZcXHU2NWY2JyxcbiAgc291bmROb1NvdW5kOiAnXFx1NjVlMFxcdTU4ZjAnLFxuICBzb3VuZFBhY2tCdWlsdGluOiAnXFx1NTE4NVxcdTdmNmUnLFxuICBzb3VuZEJ1aWx0aW5VcDogJ0NoaW1lIFVwJyxcbiAgc291bmRCdWlsdGluRG93bjogJ0NoaW1lIERvd24nLFxuICBwZXJtaXNzaW9uRGVuaWVkOiAnXFx1NWRmMlxcdTg4YWJcXHU2ZDRmXFx1ODljOFxcdTU2NjhcXHU2MmQyXFx1N2VkZFxcdWZmMGNcXHU4YmY3XFx1NTcyOFxcdTdhZDlcXHU3MGI5XFx1OGJiZVxcdTdmNmVcXHU0ZTJkXFx1NjA2MlxcdTU5MGRcXHU5MDFhXFx1NzdlNVxcdTY3NDNcXHU5NjUwXFx1MzAwMicsXG4gIHBlcm1pc3Npb25VbnN1cHBvcnRlZDogJ1xcdTVmNTNcXHU1MjRkXFx1NmQ0ZlxcdTg5YzhcXHU1NjY4XFx1NGUwZFxcdTY1MmZcXHU2MzAxXFx1N2NmYlxcdTdlZGZcXHU5MDFhXFx1NzdlNVxcdTMwMDInLFxuICBub3RpZnlEb25lVGl0bGU6ICdcXHU0ZjFhXFx1OGJkZFxcdTVkZjJcXHU1YjhjXFx1NjIxMCcsXG4gIG5vdGlmeVBlbmRpbmdUaXRsZTogJ1xcdTY3MDlcXHU0ZWE0XFx1NGU5MlxcdTdiNDlcXHU1Zjg1XFx1NTkwNFxcdTc0MDYnLFxuICBub3RpZnlEdXJhdGlvbjogJ1xcdTY3MmNcXHU4ZjZlXFx1NjAzYlxcdTc1MjhcXHU2NWY2IHtkdXJhdGlvbn0nLFxuICBkdXJhdGlvblNlY29uZHM6ICd7c2Vjb25kc31cXHU3OWQyJyxcbiAgZHVyYXRpb25NaW51dGVzOiAne21pbnV0ZXN9XFx1NTIwNntzZWNvbmRzfVxcdTc5ZDInLFxuICBwZW5kaW5nS2luZEFwcHJvdmFsOiAnXFx1NWY4NVxcdTViYTFcXHU2Mjc5JyxcbiAgcGVuZGluZ0tpbmRRdWVzdGlvbjogJ1xcdTU0MTFcXHU0ZjYwXFx1NjNkMFxcdTk1ZWUnLFxuICBwZW5kaW5nS2luZFBsYW5SZXZpZXc6ICdcXHU4YmExXFx1NTIxMlxcdTVmODVcXHU1YmExXFx1NjgzOCcsXG4gIHBlbmRpbmdBcHByb3ZhbFRvb2w6ICdcXHU1Zjg1XFx1NWJhMVxcdTYyNzkgXFx1MDBiNyB7dG9vbH0nLFxuICBwZW5kaW5nUXVlc3Rpb25DaG9vc2U6ICdcXHU4YmY3XFx1NGY2MFxcdTkwMDlcXHU2MmU5JyxcbiAgcGVuZGluZ1F1ZXN0aW9uTXVsdGk6ICdcXHU4YmY3XFx1NGY2MFxcdTU5MWFcXHU5MDA5JyxcbiAgcGVuZGluZ1F1ZXN0aW9uRmlsbDogJ1xcdThiZjdcXHU0ZjYwXFx1NTg2YlxcdTUxOTknLFxuICBwZW5kaW5nUXVlc3Rpb25CYXRjaDogJ1xcdTU0MTFcXHU0ZjYwXFx1NjNkMFxcdTk1ZWVcXHVmZjA4e2NvdW50fSBcXHU0ZTJhXFx1ZmYwOScsXG4gIHNhdmU6ICdcXHU0ZmRkXFx1NWI1OCcsXG4gIHNhdmVkOiAnXFx1NWRmMlxcdTRmZGRcXHU1YjU4XFx1MzAwMicsXG4gIGludmFsaWRUb2tlbjogJ1xcdThiZjdcXHU4ZjkzXFx1NTE2NVxcdTY1NzBcXHU1YjU3XFx1NjIxNlxcdTVlMjYgay9NIFxcdTU0MGVcXHU3ZjAwXFx1NzY4NFxcdTUwM2NcXHVmZjA4XFx1NTk4MiAxMzBrXFx1ZmYwOVxcdTMwMDInLFxuICBpbnZhbGlkSGV4OiAnXFx1OTg5Y1xcdTgyNzJcXHU2ODNjXFx1NWYwZlxcdTVlOTRcXHU0ZTNhICNSUkdHQkJcXHUzMDAyJyxcbiAgZXJyb3JQcmVmaXg6ICdcXHU5NTE5XFx1OGJlZlxcdWZmMWEgJyxcbiAgdW5hdmFpbGFibGU6ICdcXHU2YjY0XFx1OGJiZVxcdTdmNmVcXHU1NzI4XFx1NWY1M1xcdTUyNGRcXHU1YmEyXFx1NjIzN1xcdTdhZWZcXHU0ZTBkXFx1NTNlZlxcdTc1MjhcXHUzMDAyJyxcbiAgbG9hZGluZzogJ1xcdTUyYTBcXHU4ZjdkXFx1NGUyZFxcdTIwMjYnLFxufVxuXG4vKiogUGFyc2UgYSBodW1hbiB0b2tlbiBjb3VudCAoYDEzMGtgLCBgMS41bWAsIGAxMzAwMDBgKS4gKi9cbmZ1bmN0aW9uIHBhcnNlVG9rZW5UZXh0KHRleHQpIHtcbiAgY29uc3QgcmF3ID0gU3RyaW5nKHRleHQgPz8gJycpLnRyaW0oKS5yZXBsYWNlKC9bXFxzX10vZywgJycpXG4gIGlmIChyYXcgPT09ICcnKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IG1hdGNoID0gL14oXFxkKyg/OlsuLF1cXGQrKT8pKFtrS21NXSk/JC8uZXhlYyhyYXcpXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBiYXNlID0gTnVtYmVyKG1hdGNoWzFdLnJlcGxhY2UoJywnLCAnLicpKVxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShiYXNlKSB8fCBiYXNlIDwgMCkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBzY2FsZSA9IG1hdGNoWzJdID09PSB1bmRlZmluZWQgPyAxIDogbWF0Y2hbMl0udG9Mb3dlckNhc2UoKSA9PT0gJ2snID8gMTAwMCA6IDEwMDAwMDBcbiAgcmV0dXJuIE1hdGgucm91bmQoYmFzZSAqIHNjYWxlKVxufVxuXG4vKiogQnVpbGQgYHsgcHJvdmlkZXIsIG1vZGVsLCBuYW1lLCBsZXZlbHMgfWAgcm93cyBmcm9tIHRoZSBwaS1haSBjb25maWcgdmFsdWUuICovXG5mdW5jdGlvbiBidWlsZENhdGFsb2cocHJvdmlkZXJzKSB7XG4gIGNvbnN0IHJvd3MgPSBbXVxuICBpZiAocHJvdmlkZXJzID09PSBudWxsIHx8IHR5cGVvZiBwcm92aWRlcnMgIT09ICdvYmplY3QnKSByZXR1cm4gcm93c1xuICBmb3IgKGNvbnN0IFtwcm92aWRlciwgcHJvZmlsZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzKSkge1xuICAgIGNvbnN0IG1vZGVscyA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkocHJvZmlsZS5tb2RlbHMpID8gcHJvZmlsZS5tb2RlbHMgOiBbXVxuICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgICBpZiAobW9kZWwgPT09IG51bGwgfHwgdHlwZW9mIG1vZGVsICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgbW9kZWwuaWQgIT09ICdzdHJpbmcnKSBjb250aW51ZVxuICAgICAgY29uc3QgZWZmb3J0cyA9IG1vZGVsLnJlYXNvbmluZ0VmZm9ydHNcbiAgICAgIGNvbnN0IGxldmVscyA9IGVmZm9ydHMgPT09IGZhbHNlID8gW10gOiAoZWZmb3J0cyAhPT0gbnVsbCAmJiB0eXBlb2YgZWZmb3J0cyA9PT0gJ29iamVjdCcgPyBPYmplY3Qua2V5cyhlZmZvcnRzKSA6IFtdKVxuICAgICAgcm93cy5wdXNoKHsgcHJvdmlkZXIsIG1vZGVsOiBtb2RlbC5pZCwgbmFtZTogdHlwZW9mIG1vZGVsLm5hbWUgPT09ICdzdHJpbmcnICYmIG1vZGVsLm5hbWUgIT09ICcnID8gbW9kZWwubmFtZSA6IG1vZGVsLmlkLCBsZXZlbHMgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJvd3Ncbn1cblxuY29uc3QgUyA9IHtcbiAgd3JhcDogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDQsIG1heFdpZHRoOiA2ODAsIHBhZGRpbmdUb3A6IDQgfSxcbiAgdGFiczogeyBtYXJnaW5Ub3A6IDQgfSxcbiAgZ3JvdXA6IHsgbWFyZ2luVG9wOiAxMCwgcGFkZGluZ1RvcDogMTAsIGJvcmRlclRvcDogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDMpJyB9LFxuICBncm91cEZpcnN0OiB7IG1hcmdpblRvcDogMTAgfSxcbiAgZ3JvdXBUaXRsZTogeyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogMiB9LFxuICBsYWJlbDogeyBkaXNwbGF5OiAnYmxvY2snLCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogNiwgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknIH0sXG4gIGhpbnQ6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBtYXJnaW46ICc0cHggMCAxMnB4JyB9LFxuICBpbnB1dDoge1xuICAgIGhlaWdodDogMzIsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBib3JkZXI6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWw0KScsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogMTQsXG4gICAgYmFja2dyb3VuZDogJ3ZhcigtLWRzdy1hbGlhcy1iZy1sYXllci0xKScsXG4gICAgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIH0sXG4gIHNlbGVjdDogeyBjdXJzb3I6ICdwb2ludGVyJyB9LFxuICBoZXg6IHsgZm9udEZhbWlseTogJ21vbm9zcGFjZScsIHdpZHRoOiAxMTAsIGZsZXg6ICcwIDAgYXV0bycgfSxcbiAgY29sb3I6IHtcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgIHdpZHRoOiAzMixcbiAgICBoZWlnaHQ6IDMyLFxuICAgIHBhZGRpbmc6IDIsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sNCknLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBiYWNrZ3JvdW5kOiAndmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTEpJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgfSxcbiAgcm93VHdvOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxMiB9LFxuICByb3dGbGV4OiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA4LCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9LFxuICBjb2w6IHsgZmxleDogMSwgbWluV2lkdGg6IDAgfSxcbiAgdG9nZ2xlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTAsIG1hcmdpbkJvdHRvbTogMTIgfSxcbiAgdG9nZ2xlVGV4dDogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDIgfSxcbiAgdG9nZ2xlTGFiZWw6IHsgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScgfSxcbiAgZXJyb3I6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtc3RhdGUtZXJyb3ItcHJpbWFyeSwgI2MwMCknLCBmb250U2l6ZTogMTIsIG1hcmdpblRvcDogMiB9LFxufVxuXG5mdW5jdGlvbiBQcmVmc1NlY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgeyB0LCB1c2VQcmVmcywgdXNlTW9kZWxDYXRhbG9nLCBzYXZlLCBwcm9iZSwgd3JpdGVNb2RlbHMgfSA9IHByb3BzXG4gIGNvbnN0IHNuYXAgPSB1c2VQcmVmcygocykgPT4gcylcbiAgY29uc3QgY2F0YWxvZ1NuYXAgPSB1c2VNb2RlbENhdGFsb2coKHMpID0+IHMpXG4gIGNvbnN0IHZhbHVlID0gc25hcCAhPT0gbnVsbCAmJiBzbmFwICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHNuYXAudmFsdWUgPT09ICdvYmplY3QnICYmIHNuYXAudmFsdWUgIT09IG51bGwgPyBzbmFwLnZhbHVlIDoge31cbiAgY29uc3QgcHJvdmlkZXJzID0gY2F0YWxvZ1NuYXAgIT09IG51bGwgJiYgY2F0YWxvZ1NuYXAgIT09IHVuZGVmaW5lZCAmJiBjYXRhbG9nU25hcC52YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgY2F0YWxvZ1NuYXAudmFsdWUgPT09ICdvYmplY3QnID8gY2F0YWxvZ1NuYXAudmFsdWUucHJvdmlkZXJzIDogdW5kZWZpbmVkXG4gIGNvbnN0IGNhdGFsb2cgPSBidWlsZENhdGFsb2cocHJvdmlkZXJzKVxuICBjb25zdCBzdGF0dXMgPSBzbmFwICE9PSBudWxsICYmIHNuYXAgIT09IHVuZGVmaW5lZCA/IHNuYXAuc3RhdHVzIDogJ2xvYWRpbmcnXG4gIGNvbnN0IHdyaXRhYmxlID0gISEoc25hcCAmJiBzbmFwLndyaXRhYmxlKVxuXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZSgnY29tcGFjdGlvbicpXG4gIGNvbnN0IFtwZXJtaXNzaW9uLCBzZXRQZXJtaXNzaW9uXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IGN1cnJlbnROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkpXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gKHtcbiAgICB0aHJlc2hvbGRUb2tlbnM6IHZhbHVlLnRocmVzaG9sZFRva2VucyA/IFN0cmluZyh2YWx1ZS50aHJlc2hvbGRUb2tlbnMpIDogJycsXG4gICAgY29udGV4dFdpbmRvd1Rva2VuczogdmFsdWUuY29udGV4dFdpbmRvd1Rva2VucyA/IFN0cmluZyh2YWx1ZS5jb250ZXh0V2luZG93VG9rZW5zKSA6ICcnLFxuICAgIHJldGFpblRva2VuczogdmFsdWUucmV0YWluVG9rZW5zID8gU3RyaW5nKHZhbHVlLnJldGFpblRva2VucykgOiAnJyxcbiAgfSkpXG4gIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW5yaWNoTm90ZSwgc2V0RW5yaWNoTm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2J1c3lSb3V0ZSwgc2V0QnVzeVJvdXRlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCB2YWx1ZVJlZiA9IHNuYXAgJiYgc25hcC52YWx1ZVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERyYWZ0KHtcbiAgICAgIHRocmVzaG9sZFRva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYudGhyZXNob2xkVG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLnRocmVzaG9sZFRva2VucykgOiAnJyxcbiAgICAgIGNvbnRleHRXaW5kb3dUb2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLmNvbnRleHRXaW5kb3dUb2tlbnMgPyBTdHJpbmcodmFsdWVSZWYuY29udGV4dFdpbmRvd1Rva2VucykgOiAnJyxcbiAgICAgIHJldGFpblRva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYucmV0YWluVG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLnJldGFpblRva2VucykgOiAnJyxcbiAgICB9KVxuICAgIHNldE5vdGUoJycpXG4gIH0sIFt2YWx1ZVJlZl0pXG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdsb2FkaW5nJykpXG4gIGlmIChzdGF0dXMgPT09ICd1bmF2YWlsYWJsZScpIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ3VuYXZhaWxhYmxlJykpXG5cbiAgY29uc3QgZGlzYWJsZWQgPSAhd3JpdGFibGVcbiAgY29uc3Qgd3JpdGUgPSAoZmllbGQsIHYpID0+IHtcbiAgICBzZXROb3RlKCcnKVxuICAgIFByb21pc2UucmVzb2x2ZShzYXZlKGZpZWxkLCB2KSkuY2F0Y2goKGVycm9yKSA9PiBzZXROb3RlKHQoJ2Vycm9yUHJlZml4JykgKyBTdHJpbmcoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcikpKVxuICB9XG4gIGNvbnN0IGNvbW1pdFRva2VucyA9IChmaWVsZCwgdGV4dCkgPT4ge1xuICAgIGlmICh0ZXh0LnRyaW0oKSA9PT0gJycpIHsgd3JpdGUoZmllbGQsIDApOyByZXR1cm4gfVxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlVG9rZW5UZXh0KHRleHQpXG4gICAgaWYgKHBhcnNlZCA9PT0gdW5kZWZpbmVkKSB7IHNldE5vdGUodCgnaW52YWxpZFRva2VuJykpOyByZXR1cm4gfVxuICAgIHdyaXRlKGZpZWxkLCBwYXJzZWQpXG4gIH1cbiAgY29uc3QgbnVtID0gKGZpZWxkLCBmYWxsYmFjaykgPT4gKHtcbiAgICB2YWx1ZTogU3RyaW5nKHZhbHVlW2ZpZWxkXSAhPT0gdW5kZWZpbmVkID8gdmFsdWVbZmllbGRdIDogZmFsbGJhY2spLFxuICAgIGRpc2FibGVkLFxuICAgIG9uQ2hhbmdlOiAoZSkgPT4geyBjb25zdCBuID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTsgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkgd3JpdGUoZmllbGQsIG4pIH0sXG4gIH0pXG4gIGNvbnN0IHN3aXRjaEZpZWxkID0gKGxhYmVsS2V5LCBmaWVsZCwgaGludEtleSwgZmFsbGJhY2spID0+IGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZSwga2V5OiBmaWVsZCB9LFxuICAgIGVsKFN3aXRjaCwge1xuICAgICAgY2hlY2tlZDogdmFsdWVbZmllbGRdICE9PSB1bmRlZmluZWQgPyAhIXZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBsYWJlbDogdChsYWJlbEtleSksXG4gICAgICBvbkNoYW5nZTogKG5leHQpID0+IHdyaXRlKGZpZWxkLCBuZXh0KSxcbiAgICB9KSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGVUZXh0IH0sXG4gICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IFMudG9nZ2xlTGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgICAgaGludEtleSA/IGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIgfSB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gICAgKSxcbiAgKVxuICBjb25zdCB0ZXh0RmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBoaW50S2V5KSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogUy5pbnB1dCwgZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogZHJhZnRbZmllbGRdLFxuICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXREcmFmdCgoZCkgPT4gKHsgLi4uZCwgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUgfSkpLFxuICAgICAgb25CbHVyOiAoKSA9PiBjb21taXRUb2tlbnMoZmllbGQsIGRyYWZ0W2ZpZWxkXSksXG4gICAgICBvbktleURvd246IChlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgY29tbWl0VG9rZW5zKGZpZWxkLCBkcmFmdFtmaWVsZF0pIH0sXG4gICAgfSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSxcbiAgKVxuICBjb25zdCBudW1iZXJGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0JywgeyB0eXBlOiAnbnVtYmVyJywgc3RlcDogJ2FueScsIHN0eWxlOiBTLmlucHV0LCAuLi5udW0oZmllbGQsIGZhbGxiYWNrKSB9KSxcbiAgICBoaW50S2V5ID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gIClcbiAgLyoqIENvbG91ciByb3c6IG5hdGl2ZSBwaWNrZXIgKyBlZGl0YWJsZSBoZXgsIG9wdGlvbmFsIGNsZWFyIChlbXB0eSA9IG9mZmljaWFsKS4gKi9cbiAgY29uc3QgY29sb3JGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGZhbGxiYWNrSGV4LCBvcHRpb25hbCwgaGludEtleSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0eXBlb2YgdmFsdWVbZmllbGRdID09PSAnc3RyaW5nJyA/IHZhbHVlW2ZpZWxkXSA6ICcnXG4gICAgY29uc3Qgc2hvd24gPSBjdXJyZW50ICE9PSAnJyA/IGN1cnJlbnQgOiAoZmFsbGJhY2tIZXggPz8gJyMwMDAwMDAnKVxuICAgIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogeyAuLi5TLmNvbCwgbWFyZ2luQm90dG9tOiAxMCB9LCBrZXk6IGZpZWxkIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dGbGV4IH0sXG4gICAgICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgICAgICB0eXBlOiAnY29sb3InLCB2YWx1ZTogc2hvd24sIGRpc2FibGVkLCBzdHlsZTogUy5jb2xvcixcbiAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHdyaXRlKGZpZWxkLCBlLnRhcmdldC52YWx1ZSksXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLmhleCB9LCBkaXNhYmxlZCxcbiAgICAgICAgICB2YWx1ZTogY3VycmVudCwgcGxhY2Vob2xkZXI6IG9wdGlvbmFsID8gdCgnY29sb3JVbnNldCcpIDogJycsXG4gICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gJycgJiYgb3B0aW9uYWwpIHdyaXRlKGZpZWxkLCAnJylcbiAgICAgICAgICAgIGVsc2UgaWYgKEhFWC50ZXN0KG5leHQpKSB3cml0ZShmaWVsZCwgbmV4dClcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgb3B0aW9uYWwgJiYgY3VycmVudCAhPT0gJydcbiAgICAgICAgICA/IGVsKEJ1dHRvbiwgeyB2YXJpYW50OiAnZ2hvc3QnLCBzaXplOiAnc20nLCBkaXNhYmxlZCwgb25DbGljazogKCkgPT4gd3JpdGUoZmllbGQsICcnKSB9LCB0KCdjb2xvclJlc2V0JykpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgKSxcbiAgICAgIGhpbnRLZXkgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoaGludEtleSkpIDogbnVsbCxcbiAgICApXG4gIH1cbiAgY29uc3QgZW5hYmxlTm90aWZpY2F0aW9ucyA9IChuZXh0KSA9PiB7XG4gICAgaWYgKCFuZXh0KSB7IHdyaXRlKCdub3RpZnlFbmFibGVkJywgZmFsc2UpOyByZXR1cm4gfVxuICAgIHdyaXRlKCdub3RpZnlFbmFibGVkJywgdHJ1ZSlcbiAgICBwcmltZVNvdW5kKClcbiAgICB2b2lkIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkudGhlbihzZXRQZXJtaXNzaW9uKVxuICB9XG5cbiAgY29uc3QgZW5yaWNoUHJvdmlkZXIgPSBhc3luYyAocm91dGVJZCwgcHJvZmlsZSkgPT4ge1xuICAgIHNldEJ1c3lSb3V0ZShyb3V0ZUlkKVxuICAgIHNldEVucmljaE5vdGUoJycpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvYmUoeyBhcmdzOiB7IGJhc2VVUkw6IHByb2ZpbGUuYmFzZVVSTCB9IH0pXG4gICAgICBjb25zdCBmb3VuZCA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2U/Lm1vZGVscykgPyByZXNwb25zZS5tb2RlbHMgOiBbXVxuICAgICAgY29uc3QgYnlJZCA9IG5ldyBNYXAoZm91bmQubWFwKChtKSA9PiBbbS5pZCwgbV0pKVxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBBcnJheS5pc0FycmF5KHByb2ZpbGUubW9kZWxzKSA/IHByb2ZpbGUubW9kZWxzIDogW11cbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nLmxlbmd0aCA9PT0gMFxuICAgICAgICA/IGZvdW5kLm1hcCgobSkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBtLmlkLFxuICAgICAgICAgICAgbmFtZTogbS5uYW1lLFxuICAgICAgICAgICAgLi4uKG0uY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGNvbnRleHRXaW5kb3c6IG0uY29udGV4dFdpbmRvdyB9KSxcbiAgICAgICAgICAgIC4uLihtLm1heFRva2VucyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IG1heFRva2VuczogbS5tYXhUb2tlbnMgfSksXG4gICAgICAgICAgICAuLi4obS5pbnB1dCA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGlucHV0OiBtLmlucHV0IH0pLFxuICAgICAgICAgIH0pKVxuICAgICAgICA6IGV4aXN0aW5nLm1hcCgobSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gYnlJZC5nZXQobS5pZClcbiAgICAgICAgICAgIGlmIChoaXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG1cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB7IC4uLm0gfVxuICAgICAgICAgICAgaWYgKG5leHQuY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkICYmIGhpdC5jb250ZXh0V2luZG93ICE9PSB1bmRlZmluZWQpIG5leHQuY29udGV4dFdpbmRvdyA9IGhpdC5jb250ZXh0V2luZG93XG4gICAgICAgICAgICBpZiAobmV4dC5pbnB1dCA9PT0gdW5kZWZpbmVkICYmIGhpdC5pbnB1dCAhPT0gdW5kZWZpbmVkKSBuZXh0LmlucHV0ID0gaGl0LmlucHV0XG4gICAgICAgICAgICByZXR1cm4gbmV4dFxuICAgICAgICAgIH0pXG4gICAgICBhd2FpdCB3cml0ZU1vZGVscyhyb3V0ZUlkLCBtZXJnZWQpXG4gICAgICBzZXRFbnJpY2hOb3RlKHQoJ2VucmljaGVkJywgeyBjb3VudDogbWVyZ2VkLmxlbmd0aCB9KSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RW5yaWNoTm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRCdXN5Um91dGUoJycpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJvdmlkZXJSb3dzID0gT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzICE9PSBudWxsICYmIHR5cGVvZiBwcm92aWRlcnMgPT09ICdvYmplY3QnID8gcHJvdmlkZXJzIDoge30pLm1hcCgoW3JvdXRlSWQsIHByb2ZpbGVdKSA9PiB7XG4gICAgY29uc3QgYmFzZVVSTCA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9maWxlLmJhc2VVUkwgPT09ICdzdHJpbmcnID8gcHJvZmlsZS5iYXNlVVJMIDogJydcbiAgICByZXR1cm4gZWwoJ2RpdicsIHsga2V5OiByb3V0ZUlkLCBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogNiB9IH0sXG4gICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgZmxleDogMSwgbWluV2lkdGg6IDAsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sIGAke3JvdXRlSWR9JHtiYXNlVVJMID8gYCBcdTIwMTQgJHtiYXNlVVJMfWAgOiAnJ31gKSxcbiAgICAgIGJhc2VVUkxcbiAgICAgICAgPyBlbChCdXR0b24sIHtcbiAgICAgICAgICAgIHZhcmlhbnQ6ICdvdXRsaW5lJyxcbiAgICAgICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgICAgICBkaXNhYmxlZDogYnVzeVJvdXRlID09PSByb3V0ZUlkIHx8IGRpc2FibGVkLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4geyB2b2lkIGVucmljaFByb3ZpZGVyKHJvdXRlSWQsIHByb2ZpbGUpIH0sXG4gICAgICAgICAgfSwgYnVzeVJvdXRlID09PSByb3V0ZUlkID8gdCgnZW5yaWNoaW5nJykgOiB0KCdlbnJpY2gnKSlcbiAgICAgICAgOiBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBmbGV4U2hyaW5rOiAwIH0gfSwgdCgnbm9CYXNlVXJsJykpLFxuICAgIClcbiAgfSlcblxuICAvLyBTdW1tYXJpemF0aW9uIG1vZGVsL3JlYXNvbmluZyBwaWNrZXJzLlxuICBjb25zdCBtb2RlID0gdmFsdWUuc3VtbWFyaXphdGlvbk1vZGUgPT09ICdjdXN0b20nID8gJ2N1c3RvbScgOiAnc2Vzc2lvbidcbiAgY29uc3QgcHJvdmlkZXJOYW1lcyA9IFsuLi5uZXcgU2V0KGNhdGFsb2cubWFwKChyKSA9PiByLnByb3ZpZGVyKSldXG4gIGNvbnN0IHNlbGVjdGVkUHJvdmlkZXIgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUHJvdmlkZXIgfHwgcHJvdmlkZXJOYW1lc1swXSB8fCAnJ1xuICBjb25zdCBtb2RlbHNGb3JQcm92aWRlciA9IGNhdGFsb2cuZmlsdGVyKChyKSA9PiByLnByb3ZpZGVyID09PSBzZWxlY3RlZFByb3ZpZGVyKVxuICBjb25zdCBzZWxlY3RlZFJvdyA9IG1vZGVsc0ZvclByb3ZpZGVyLmZpbmQoKHIpID0+IHIubW9kZWwgPT09IHZhbHVlLnN1bW1hcml6YXRpb25Nb2RlbCkgfHwgbW9kZWxzRm9yUHJvdmlkZXJbMF1cbiAgY29uc3QgbGV2ZWxTZXQgPSBbJ2RlZmF1bHQnLCAnb2ZmJywgLi4uKHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRSb3cubGV2ZWxzIDogW10pXVxuICBjb25zdCByZWFzb25pbmcgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUmVhc29uaW5nIHx8ICdkZWZhdWx0J1xuICBjb25zdCBzZWxlY3RPcHRpb25zID0gKHBhaXJzKSA9PiBwYWlycy5tYXAoKFt2LCBsYWJlbF0pID0+IGVsKCdvcHRpb24nLCB7IGtleTogdiwgdmFsdWU6IHYgfSwgbGFiZWwpKVxuXG4gIGNvbnN0IHN1bW1hcml6YXRpb24gPSBbXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdtb2RlJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgnc3VtbWFyaXphdGlvbk1vZGUnKSksXG4gICAgICBlbCgnc2VsZWN0JywgeyBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCwgdmFsdWU6IG1vZGUsIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoJ3N1bW1hcml6YXRpb25Nb2RlJywgZS50YXJnZXQudmFsdWUpIH0sXG4gICAgICAgIHNlbGVjdE9wdGlvbnMoW1snc2Vzc2lvbicsIHQoJ21vZGVTZXNzaW9uJyldLCBbJ2N1c3RvbScsIHQoJ21vZGVDdXN0b20nKV1dKSksXG4gICAgKSxcbiAgXVxuICBpZiAobW9kZSA9PT0gJ2N1c3RvbScpIHtcbiAgICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdwcm92aWRlcicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ3Byb3ZpZGVyJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHtcbiAgICAgICAgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBzZWxlY3RlZFByb3ZpZGVyLFxuICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gY2F0YWxvZy5maW5kKChyKSA9PiByLnByb3ZpZGVyID09PSBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB3cml0ZSgnc3VtbWFyaXphdGlvblByb3ZpZGVyJywgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgaWYgKG5leHQpIHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZWwnLCBuZXh0Lm1vZGVsKVxuICAgICAgICAgIHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgJ2RlZmF1bHQnKVxuICAgICAgICB9LFxuICAgICAgfSwgcHJvdmlkZXJOYW1lcy5tYXAoKHApID0+IGVsKCdvcHRpb24nLCB7IGtleTogcCwgdmFsdWU6IHAgfSwgcCkpKSxcbiAgICApKVxuICAgIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ21vZGVsJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgnbW9kZWwnKSksXG4gICAgICBlbCgnc2VsZWN0Jywge1xuICAgICAgICBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCxcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRSb3cubW9kZWwgOiAnJyxcbiAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7IHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZWwnLCBlLnRhcmdldC52YWx1ZSk7IHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgJ2RlZmF1bHQnKSB9LFxuICAgICAgfSwgbW9kZWxzRm9yUHJvdmlkZXIubWFwKChyKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHIubW9kZWwsIHZhbHVlOiByLm1vZGVsIH0sIHIubmFtZSkpKSxcbiAgICApKVxuICB9XG4gIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ3JlYXNvbmluZycgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdyZWFzb25pbmcnKSksXG4gICAgZWwoJ3NlbGVjdCcsIHsgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBsZXZlbFNldC5pbmNsdWRlcyhyZWFzb25pbmcpID8gcmVhc29uaW5nIDogJ2RlZmF1bHQnLCBvbkNoYW5nZTogKGUpID0+IHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgZS50YXJnZXQudmFsdWUpIH0sXG4gICAgICBsZXZlbFNldC5tYXAoKGx2KSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IGx2LCB2YWx1ZTogbHYgfSwgbHYgPT09ICdkZWZhdWx0JyA/IHQoJ3JlYXNvbmluZ0RlZmF1bHQnKSA6IGx2ID09PSAnb2ZmJyA/IHQoJ3JlYXNvbmluZ09mZicpIDogbHYpKSksXG4gICkpXG5cbiAgY29uc3QgY29tcGFjdGlvblBhbmVsID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwRmlyc3QsIGtleTogJ3RocmVzaG9sZCcgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgndGhyZXNob2xkVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgdGV4dEZpZWxkKCd0aHJlc2hvbGRUb2tlbnMnLCAndGhyZXNob2xkVG9rZW5zJywgJ3RocmVzaG9sZFRva2Vuc0hpbnQnKSxcbiAgICAgICAgdGV4dEZpZWxkKCdjb250ZXh0V2luZG93JywgJ2NvbnRleHRXaW5kb3dUb2tlbnMnLCAnY29udGV4dFdpbmRvd0hpbnQnKSxcbiAgICAgICksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ3RocmVzaG9sZFJhdGlvJywgJ3RocmVzaG9sZFJhdGlvJywgJ3RocmVzaG9sZFJhdGlvSGludCcsIDAuOCksXG4gICAgICAgIG51bWJlckZpZWxkKCdoZWFkcm9vbScsICdoZWFkcm9vbVRva2VucycsICdoZWFkcm9vbUhpbnQnLCAzMjc2OCksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ3JldGVudGlvbicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgncmV0ZW50aW9uVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgdGV4dEZpZWxkKCdyZXRhaW5Ub2tlbnMnLCAncmV0YWluVG9rZW5zJywgJ3JldGFpblRva2Vuc0hpbnQnKSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ3JldGFpblJhdGlvJywgJ3JldGFpblJhdGlvJywgbnVsbCwgMC4xNiksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ2JlaGF2aW91cicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnYmVoYXZpb3VyVGl0bGUnKSksXG4gICAgICBzd2l0Y2hGaWVsZCgnYXV0bycsICdhdXRvJywgJ2F1dG9IaW50JywgdHJ1ZSksXG4gICAgICBzd2l0Y2hGaWVsZCgndHVybkVuZCcsICd0dXJuRW5kQ29tcGFjdGlvbkVuYWJsZWQnLCAndHVybkVuZEhpbnQnLCBmYWxzZSksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnc3VtbWFyaXphdGlvbicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnc3VtbWFyaXphdGlvblRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sIHN1bW1hcml6YXRpb24pLFxuICAgICAgbnVtYmVyRmllbGQoJ21heFRva2VucycsICdtYXhUb2tlbnMnLCBudWxsLCAzMjc2OCksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnYWR2YW5jZWQnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ2FkdmFuY2VkVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ2NvbXBhY3Rpb25SZXRyaWVzJywgJ2NvbXBhY3Rpb25SZXRyaWVzJywgbnVsbCwgMSksXG4gICAgICAgIG51bWJlckZpZWxkKCdtYXhPdmVyZmxvd1JldHJpZXMnLCAnbWF4T3ZlcmZsb3dSZXRyaWVzJywgbnVsbCwgMSksXG4gICAgICApLFxuICAgICksXG4gIF1cblxuICBjb25zdCBtb2RlbHNQYW5lbCA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cEZpcnN0LCBrZXk6ICdtb2RlbHMnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ21vZGVsc1RpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdtb2RlbHNJbnRybycpKSxcbiAgICAgIC4uLnByb3ZpZGVyUm93cyxcbiAgICAgIGVucmljaE5vdGUgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIGVucmljaE5vdGUpIDogbnVsbCxcbiAgICApLFxuICBdXG5cbiAgY29uc3Qgdm9sdW1lTm93ID0gdHlwZW9mIHZhbHVlLm5vdGlmeVZvbHVtZSA9PT0gJ251bWJlcicgPyB2YWx1ZS5ub3RpZnlWb2x1bWUgOiAwLjZcbiAgY29uc3Qgc291bmRTZWxlY3RPcHRpb25zID0gKCkgPT4gW1xuICAgIGVsKCdvcHRpb24nLCB7IGtleTogU09VTkRfTk9ORSwgdmFsdWU6IFNPVU5EX05PTkUgfSwgdCgnc291bmROb1NvdW5kJykpLFxuICAgIGVsKCdvcHRncm91cCcsIHsga2V5OiAnYnVpbHRpbicsIGxhYmVsOiB0KCdzb3VuZFBhY2tCdWlsdGluJykgfSxcbiAgICAgIEJVSUxUSU5fU09VTkRTLm1hcCgoc291bmQpID0+IGVsKCdvcHRpb24nLCB7IGtleTogc291bmQuaWQsIHZhbHVlOiBzb3VuZC5pZCB9LCB0KHNvdW5kLmxhYmVsS2V5KSkpKSxcbiAgICAuLi5TT1VORF9QQUNLUy5tYXAoKHBhY2spID0+IGVsKCdvcHRncm91cCcsIHsga2V5OiBwYWNrLnByZWZpeCwgbGFiZWw6IHBhY2submFtZSB9LFxuICAgICAgcGFja1NvdW5kSWRzKHBhY2spLm1hcCgoaWQsIGluZGV4KSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IGlkLCB2YWx1ZTogaWQgfSwgYCR7cGFjay5uYW1lfSAke1N0cmluZyhpbmRleCArIDEpLnBhZFN0YXJ0KDIsICcwJyl9YCkpKSksXG4gIF1cbiAgLyoqIFNvdW5kIHNlbGVjdG9yOyBwaWNraW5nIG9uZSBwcmV2aWV3cyBpdCAoYW5kIHVubG9ja3MgYXVkaW8gaW4gdGhlIGdlc3R1cmUpLiAqL1xuICBjb25zdCBzb3VuZFNlbGVjdCA9IChsYWJlbEtleSwgZmllbGQsIGtpbmQpID0+IGVsKCdkaXYnLCB7IHN0eWxlOiB7IC4uLlMuY29sLCBtYXJnaW5Cb3R0b206IDEwIH0sIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ3NlbGVjdCcsIHtcbiAgICAgIHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLFxuICAgICAgdmFsdWU6IHR5cGVvZiB2YWx1ZVtmaWVsZF0gPT09ICdzdHJpbmcnID8gdmFsdWVbZmllbGRdIDogU09VTkRfTk9ORSxcbiAgICAgIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIHdyaXRlKGZpZWxkLCBpZClcbiAgICAgICAgcHJpbWVTb3VuZCgpXG4gICAgICAgIGlmIChpZCAhPT0gU09VTkRfTk9ORSkgcGxheVNvdW5kKGlkLCB2b2x1bWVOb3csIGtpbmQpXG4gICAgICB9LFxuICAgIH0sIHNvdW5kU2VsZWN0T3B0aW9ucygpKSxcbiAgKVxuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbnNFbmFibGVkID0gdmFsdWUubm90aWZ5RW5hYmxlZCAhPT0gdW5kZWZpbmVkID8gISF2YWx1ZS5ub3RpZnlFbmFibGVkIDogZmFsc2VcbiAgY29uc3Qgbm90aWZpY2F0aW9uc1BhbmVsID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwRmlyc3QsIGtleTogJ2NvbG9ycycgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnY29sb3JzR3JvdXAnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ2NvbG9yc0ludHJvJykpLFxuICAgICAgc3dpdGNoRmllbGQoJ2NvbG9yc0VuYWJsZWQnLCAnY29sb3JzRW5hYmxlZCcsICdjb2xvcnNFbmFibGVkSGludCcsIHRydWUpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvLCBrZXk6ICdjb2xvcnMxJyB9LFxuICAgICAgICBjb2xvckZpZWxkKCdncmVlbkxhYmVsJywgJ2dyZWVuJywgJyMyMkM1NUUnLCBmYWxzZSwgbnVsbCksXG4gICAgICAgIGNvbG9yRmllbGQoJ2FtYmVyTGFiZWwnLCAnYW1iZXInLCAnI0Y1OUUwQicsIGZhbHNlLCBudWxsKSxcbiAgICAgICksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28sIGtleTogJ2NvbG9yczInIH0sXG4gICAgICAgIGNvbG9yRmllbGQoJ3dvcmtpbmdMYWJlbCcsICd3b3JraW5nJywgJyMzQjgyRjYnLCBmYWxzZSwgJ3dvcmtpbmdIaW50JyksXG4gICAgICAgIGNvbG9yRmllbGQoJ2JsYWNrTGFiZWwnLCAnYmxhY2snLCAnIzAwMDAwMCcsIHRydWUsICdibGFja0hpbnQnKSxcbiAgICAgICksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnbm90aWZ5JyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdub3RpZnlHcm91cCcpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnbm90aWZ5SW50cm8nKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGUsIGtleTogJ25vdGlmeUVuYWJsZWQnIH0sXG4gICAgICAgIGVsKFN3aXRjaCwge1xuICAgICAgICAgIGNoZWNrZWQ6IG5vdGlmaWNhdGlvbnNFbmFibGVkLFxuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIGxhYmVsOiB0KCdub3RpZnlFbmFibGVkJyksXG4gICAgICAgICAgb25DaGFuZ2U6IGVuYWJsZU5vdGlmaWNhdGlvbnMsXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGVUZXh0IH0sXG4gICAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiBTLnRvZ2dsZUxhYmVsIH0sIHQoJ25vdGlmeUVuYWJsZWQnKSksXG4gICAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiB9IH0sIHQoJ25vdGlmeUVuYWJsZWRIaW50JykpLFxuICAgICAgICApLFxuICAgICAgKSxcbiAgICAgIG5vdGlmaWNhdGlvbnNFbmFibGVkICYmIHBlcm1pc3Npb24gPT09ICdkZW5pZWQnID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgdCgncGVybWlzc2lvbkRlbmllZCcpKSA6IG51bGwsXG4gICAgICBub3RpZmljYXRpb25zRW5hYmxlZCAmJiBwZXJtaXNzaW9uID09PSAndW5zdXBwb3J0ZWQnID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgdCgncGVybWlzc2lvblVuc3VwcG9ydGVkJykpIDogbnVsbCxcbiAgICAgIHN3aXRjaEZpZWxkKCdub3RpZnlGb3JlZ3JvdW5kJywgJ25vdGlmeUZvcmVncm91bmQnLCAnbm90aWZ5Rm9yZWdyb3VuZEhpbnQnLCBmYWxzZSksXG4gICAgICBzd2l0Y2hGaWVsZCgncGVyc2lzdERvbmUnLCAnbm90aWZ5RG9uZVBlcnNpc3RlbnQnLCAncGVyc2lzdEhpbnQnLCBmYWxzZSksXG4gICAgICBzd2l0Y2hGaWVsZCgncGVyc2lzdFBlbmRpbmcnLCAnbm90aWZ5UGVuZGluZ1BlcnNpc3RlbnQnLCAncGVyc2lzdEhpbnQnLCBmYWxzZSksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnc291bmQnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3NvdW5kR3JvdXAnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ3NvdW5kSW50cm8nKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGUsIGtleTogJ3ZvbHVtZScgfSxcbiAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiBTLnRvZ2dsZUxhYmVsIH0sIHQoJ25vdGlmeVZvbHVtZScpKSxcbiAgICAgICAgZWwoJ2lucHV0Jywge1xuICAgICAgICAgIHR5cGU6ICdyYW5nZScsIG1pbjogMCwgbWF4OiAxMDAsIHN0ZXA6IDUsIGRpc2FibGVkLFxuICAgICAgICAgIHZhbHVlOiBNYXRoLnJvdW5kKHZvbHVtZU5vdyAqIDEwMCksICdhcmlhLWxhYmVsJzogdCgnbm90aWZ5Vm9sdW1lJyksXG4gICAgICAgICAgc3R5bGU6IHsgZmxleDogJzAgMCBhdXRvJywgd2lkdGg6IDE0MCwgYWNjZW50Q29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtYnJhbmQtcHJpbWFyeSknLCBjdXJzb3I6ICdwb2ludGVyJyB9LFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoJ25vdGlmeVZvbHVtZScsIE51bWJlcihlLnRhcmdldC52YWx1ZSkgLyAxMDApLFxuICAgICAgICB9KSxcbiAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiwgbWluV2lkdGg6IDM2LCB0ZXh0QWxpZ246ICdyaWdodCcgfSB9LCBgJHtNYXRoLnJvdW5kKHZvbHVtZU5vdyAqIDEwMCl9JWApLFxuICAgICAgKSxcbiAgICAgIHNvdW5kU2VsZWN0KCdzb3VuZERvbmUnLCAnbm90aWZ5RG9uZVNvdW5kJywgJ2RvbmUnKSxcbiAgICAgIHNvdW5kU2VsZWN0KCdzb3VuZFBlbmRpbmcnLCAnbm90aWZ5UGVuZGluZ1NvdW5kJywgJ3BlbmRpbmcnKSxcbiAgICApLFxuICBdXG5cbiAgY29uc3QgcGFuZWxzID0geyBjb21wYWN0aW9uOiBjb21wYWN0aW9uUGFuZWwsIG1vZGVsczogbW9kZWxzUGFuZWwsIG5vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbnNQYW5lbCB9XG5cbiAgcmV0dXJuIGVsKCdkaXYnLCB7IHN0eWxlOiBTLndyYXAgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3RpdGxlJykpLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnaW50cm8nKSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudGFicyB9LFxuICAgICAgZWwoU2VnbWVudGVkQ29udHJvbCwge1xuICAgICAgICBpZDogVEFCU19JRCxcbiAgICAgICAgdmFsdWU6IHRhYixcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgdmFsdWU6ICdjb21wYWN0aW9uJywgbGFiZWw6IHQoJ3RhYkNvbXBhY3Rpb24nKSB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdtb2RlbHMnLCBsYWJlbDogdCgndGFiTW9kZWxzJykgfSxcbiAgICAgICAgICB7IHZhbHVlOiAnbm90aWZpY2F0aW9ucycsIGxhYmVsOiB0KCd0YWJOb3RpZmljYXRpb25zJykgfSxcbiAgICAgICAgXSxcbiAgICAgICAgb25DaGFuZ2U6IHNldFRhYixcbiAgICAgICAgbGFiZWw6IHQoJ3RpdGxlJyksXG4gICAgICB9KSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IGlkOiBgJHtUQUJTX0lEfS0ke3RhYn0tcGFuZWxgLCByb2xlOiAndGFicGFuZWwnIH0sIC4uLihwYW5lbHNbdGFiXSA/PyBjb21wYWN0aW9uUGFuZWwpKSxcbiAgICBub3RlID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgbm90ZSkgOiBudWxsLFxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBseShjdHgpIHtcbiAgY3R4LmVmZmVjdCgoKSA9PiBjdHgubG9jYWxlLnJlZ2lzdGVyKExPQ0FMRV9OUywgeyBlbiwgemggfSksICdtYWxrby1wcmVmczogbG9jYWxlIGRpY3Rpb25hcmllcycpXG4gIGNvbnN0IHQgPSBjdHgubG9jYWxlLmJpbmQoTE9DQUxFX05TKVxuICBjb25zdCBmb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChOUylcbiAgY29uc3QgbW9kZWxGb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChNT0RFTF9OUylcbiAgLy8gVGhlIGFwcGxpY2F0aW9uIG9ubHkgYXV0by1tb3VudHMgaXRzIG93biBSZW1vdGUgc2VsZWN0aW9uLCBzbyBhIHBsdWdpblxuICAvLyBzaGlwcyBhbmQgbW91bnRzIGl0cyBvd24gY29udHJpYnV0aW9uLlxuICB0cnkge1xuICAgIGNvbnN0IGRpc3Bvc2VSZW1vdGUgPSBhd2FpdCBjdHgucmVtb3RlLiRtb3VudChQUk9CRV9SRU1PVEUpXG4gICAgY3R4LmVmZmVjdCgoKSA9PiAoKSA9PiB7IHZvaWQgZGlzcG9zZVJlbW90ZSgpIH0sICdtYWxrby1wcmVmczogbWFsa29Nb2RlbHMgcmVtb3RlJylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdkc2gtbWFsa28tcHJlZnM6IGNvdWxkIG5vdCBtb3VudCB0aGUgbWFsa29Nb2RlbHMgcmVtb3RlIFx1MjAxNCcsIGVycm9yKVxuICB9XG4gIC8vIFRhYiBzdGF0dXMgbGlnaHQgKyBicm93c2VyIG5vdGlmaWNhdGlvbnMgKGluZGVwZW5kZW50IG9mIHRoZSBzZXR0aW5ncyBwYWdlKS5cbiAgY3R4LmVmZmVjdCgoKSA9PiBzdGFydFN0YXR1c0xpZ2h0KGN0eCwgZm9ybSksICdtYWxrby1wcmVmczogdGFiIHN0YXR1cyBsaWdodCcpXG4gIGNvbnN0IGluamVjdGVkID0gKCkgPT4gKHtcbiAgICBob29rczogeyBwcmVmczogZm9ybSwgbW9kZWxDYXRhbG9nOiBtb2RlbEZvcm0gfSxcbiAgICBzYXZlOiAoZmllbGQsIHZhbHVlKSA9PiBmb3JtLnNldChmaWVsZCwgdmFsdWUpLFxuICAgIHByb2JlOiAoYXJncykgPT4ge1xuICAgICAgLy8gQSBuYW1lc3BhY2Ugc2VydmljZSBpcyByZXNvbHZlZCBieSBpdHMgZnVsbCBrZXk7IHJlYWRpbmcgaXQgb2ZmXG4gICAgICAvLyBgY3R4LnJlbW90ZWAgd291bGQgcmVxdWlyZSBhbiBgaW5qZWN0YCB0aGlzIHBsdWdpbiBjYW5ub3QgZGVjbGFyZVxuICAgICAgLy8gYmVmb3JlIHRoZSBjb250cmlidXRpb24gaXMgbW91bnRlZC5cbiAgICAgIGNvbnN0IHJlbW90ZSA9IGN0eC5nZXQoJ3JlbW90ZS5tYWxrb01vZGVscycpXG4gICAgICBpZiAocmVtb3RlID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcigndGhlIG1hbGtvTW9kZWxzIHJlbW90ZSBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgIHJldHVybiByZW1vdGUucHJvYmUoYXJncylcbiAgICB9LFxuICAgIHdyaXRlTW9kZWxzOiAocm91dGVJZCwgbW9kZWxzKSA9PiBtb2RlbEZvcm0ubXV0YXRlKFt7IG9wOiAnc2V0JywgcGF0aDogWydwcm92aWRlcnMnLCByb3V0ZUlkLCAnbW9kZWxzJ10sIHZhbHVlOiBtb2RlbHMgfV0pLFxuICB9KVxuICBjdHguc2xvdHMuaW5qZWN0KFNMT1QsICgpID0+IGN0eC5zbG90cy5yZWdpc3Rlcih7XG4gICAgbmFtZTogU0xPVCxcbiAgICBpZDogTlMsXG4gICAgb3JkZXI6IDQ1LFxuICAgIGxhYmVsOiAoKSA9PiB0KCd0aXRsZScpLFxuICAgIGxvY2FsZTogTE9DQUxFX05TLFxuICAgIGluamVjdDogaW5qZWN0ZWQsXG4gIH0sIFByZWZzU2VjdGlvbikpXG59IiwgIi8qKlxuICogZHNoLW1hbGtvLXByZWZzIFx1MjAxNCBzaGFyZWQgUmVtb3RlIHdpcmUgaWRlbnRpdHkuXG4gKlxuICogVGhlIHNhbWUgaW52b2NhdGlvbiBpcyByZWdpc3RlcmVkIG9uIHRoZSBIb3N0IChgdHlwZXJ0LnJlZ2lzdGVyYCkgYW5kIG1vdW50ZWRcbiAqIGluIHRoZSBicm93c2VyIChgY3R4LnJlbW90ZS4kbW91bnRgKSwgc28gYm90aCBoYWx2ZXMgYnVpbGQgaXQgZnJvbSBoZXJlLiBUaGVcbiAqIG9ubHkgZGlmZmVyZW5jZSBpcyB0aGUgc2NoZW1hIGZhY3RvcnkgZWFjaCBzaWRlIHN1cHBsaWVzOiB0aGUgSG9zdCBkZWNvZGVzXG4gKiBhcmd1bWVudHMgd2l0aCB6b2QsIHdoaWxlIHRoZSBDbGllbnQgbmV2ZXIgZGVjb2RlcyBpdHMgb3duIGFyZ3VtZW50cyBhbmQgb25seVxuICogbmVlZHMgYSBmYWN0b3J5IHRvIHNhdGlzZnkgdGhlIHN0cmljdC1jb2RlYyBjb250cmFjdC5cbiAqL1xuXG4vKiogV2lyZSBpZGVudGl0eSBzaGFyZWQgYnkgdGhlIEhvc3QgbWFuaWZlc3QgYW5kIHRoZSBDbGllbnQgY29udHJpYnV0aW9uLiAqL1xuZXhwb3J0IGNvbnN0IFBST0JFX0lERU5USVRZID0ge1xuICBpZDogJ2RzaC1tYWxrby1wcmVmcyNtYWxrb01vZGVscy9wcm9iZScsXG4gIHNlcnZpY2U6ICdtYWxrb01vZGVscycsXG4gIG5hbWVzcGFjZTogJ21hbGtvTW9kZWxzJyxcbiAgbWV0aG9kOiAncHJvYmUnLFxuICBhcmdzVHlwZVN5bWJvbDogJ2RzaC1tYWxrby1wcmVmcyNQcm9iZUFyZ3MnLFxuICByZXN1bHRUeXBlU3ltYm9sOiAnZHNoLW1hbGtvLXByZWZzI1Byb2JlUmVzdWx0Jyxcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgYG1hbGtvTW9kZWxzL3Byb2JlKGFyZ3MpYCBkaXJlY3QgaW52b2NhdGlvbi5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZUFyZ3Mgc2NoZW1hIGZhY3RvcnkgZm9yIHRoZSBzaW5nbGUgYGFyZ3NgIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZVJlc3VsdCBzY2hlbWEgZmFjdG9yeSBmb3IgdGhlIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBpbnZvY2F0aW9uIGRlc2NyaXB0b3IsIGlkZW50aWNhbCBvbiBib3RoIGZhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvYmVJbnZvY2F0aW9uKGNyZWF0ZUFyZ3MsIGNyZWF0ZVJlc3VsdCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBQUk9CRV9JREVOVElUWS5pZCxcbiAgICBzZXJ2aWNlOiBQUk9CRV9JREVOVElUWS5zZXJ2aWNlLFxuICAgIG5hbWVzcGFjZTogUFJPQkVfSURFTlRJVFkubmFtZXNwYWNlLFxuICAgIG1ldGhvZDogUFJPQkVfSURFTlRJVFkubWV0aG9kLFxuICAgIGludm9jYXRpb246IHsga2luZDogJ2RpcmVjdCcgfSxcbiAgICBwYXJhbWV0ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhcmdzJyxcbiAgICAgICAgd2lyZTogJ2FyZ3MnLFxuICAgICAgICBzb3VyY2U6ICdqc29uJyxcbiAgICAgICAgY29kZWM6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLmFyZ3NUeXBlU3ltYm9sLCBjcmVhdGU6IGNyZWF0ZUFyZ3MgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICByZXN1bHQ6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLnJlc3VsdFR5cGVTeW1ib2wsIGNyZWF0ZTogY3JlYXRlUmVzdWx0IH0sXG4gIH1cbn0iLCAiLyoqXG4gKiBUaGUgb2ZmaWNpYWwgRGVlcFNlZWsgd2hhbGUgbWFyaywgcmVjb2xvcmVkLlxuICpcbiAqIFNoYXBlIHRha2VuIGZyb20gdGhlIG9mZmljaWFsIGZhdmljb24gYXMgdXNlZCBieSBkc2gtbm90aWNlLWNlbnRlciAoTUlUKTtcbiAqIG9ubHkgdGhlIGZpbGwgY29sb3IgaXMgb3Vycy4gS2VwdCBoZXJlIHNvIHRoZSB0YWIgaWNvbiByZWZsZWN0cyB0aGUgc2Vzc2lvblxuICogc3RhdGUgd2l0aG91dCBmZXRjaGluZyBhbmQgbXV0YXRpbmcgdGhlIHNlcnZlZCAvZmF2aWNvbi5zdmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgQ1NTIGNvbG9yIGZvciB0aGUgZmlsbC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RhbmRhbG9uZSBTVkcgZG9jdW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aGFsZVN2Zyhjb2xvcikge1xuICByZXR1cm4gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjUwXFxcIiBoZWlnaHQ9XFxcIjUwXFxcIiB2aWV3Qm94PVxcXCIwIDAgNTAgNTBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjxwYXRoIGQ9XFxcIk00OC44MzU0IDEwLjA0NzlDNDguMzIzMiA5Ljc5MTk5IDQ4LjEwMjUgMTAuMjc5OCA0Ny44MDMyIDEwLjUyNzhDNDcuNzAwNyAxMC42MDc5IDQ3LjYxNDMgMTAuNzExOSA0Ny41MjczIDEwLjgwNzZDNDYuNzc5MyAxMS42MjQgNDUuOTA0OCAxMi4xNTk3IDQ0Ljc2MjIgMTIuMDk1N0M0My4wOTIzIDEyIDQxLjY2NiAxMi41MzU2IDQwLjQwNTggMTMuODM5OEM0MC4xMzc3IDEyLjIzMTkgMzkuMjQ3NiAxMS4yNzIgMzcuODkyNiAxMC42NTU4QzM3LjE4MzYgMTAuMzM1OSAzNi40NjY4IDEwLjAxNTYgMzUuOTcwMiA5LjMxOTgyQzM1LjYyMzUgOC44MjM3MyAzNS41MjkzIDguMjcxOTcgMzUuMzU2IDcuNzI3NTRDMzUuMjQ1NiA3LjM5OTkgMzUuMTM1MyA3LjA2Mzk2IDM0Ljc2NTEgNy4wMDc4MUMzNC4zNjMzIDYuOTQzODUgMzQuMjA1NiA3LjI4NzYgMzQuMDQ3OSA3LjU3NTY4QzMzLjQxOCA4Ljc1MTk1IDMzLjE3MzMgMTAuMDQ3OSAzMy4xOTczIDExLjM1OTlDMzMuMjUyNCAxNC4zMTIgMzQuNDczNiAxNi42NjQxIDM2Ljg5OTkgMTguMzM1OUMzNy4xNzU4IDE4LjUyNzggMzcuMjQ2NiAxOC43MTk3IDM3LjE1OTcgMTlDMzYuOTk0NiAxOS41NzU3IDM2Ljc5NzQgMjAuMTM1NyAzNi42MjQgMjAuNzExOUMzNi41MTM3IDIxLjA4MDEgMzYuMzQ4NiAyMS4xNTk3IDM1Ljk2MjQgMjFDMzQuNjMwOSAyMC40MzIxIDMzLjQ4MSAxOS41OTE4IDMyLjQ2NDQgMTguNTc1N0MzMC43MzkzIDE2Ljg3MjEgMjkuMTc5MiAxNC45OTE3IDI3LjIzMzQgMTMuNTJDMjYuNzc2NCAxMy4xNzU4IDI2LjMxOTMgMTIuODU2IDI1Ljg0NjcgMTIuNTUxOEMyMy44NjE4IDEwLjU4NCAyNi4xMDY5IDguOTY3NzcgMjYuNjI3IDguNzc1ODhDMjcuMTcwNCA4LjU3NTY4IDI2LjgxNTkgNy44ODc3IDI1LjA1OTEgNy44OTZDMjMuMzAyMiA3LjkwMzgxIDIxLjY5NTMgOC41MDM5MSAxOS42NDcgOS4zMDM3MUMxOS4zNDc3IDkuNDIzODMgMTkuMDMyMiA5LjUxMTcyIDE4LjcwOTUgOS41ODM5OEMxNi44NTAxIDkuMjIzNjMgMTQuOTE5OSA5LjE0MzU1IDEyLjkwMzMgOS4zNzU5OEM5LjEwNTk2IDkuODA3NjIgNi4wNzI3NSAxMS42Mzk2IDMuODQzMjYgMTQuNzY4MUMxLjE2NDU1IDE4LjUyNzggMC41MzQxOCAyMi43OTk4IDEuMzA2NjQgMjcuMjU1OUMyLjExNzY4IDMxLjk1MjEgNC40NjU4MiAzNS44Mzk4IDguMDczNzMgMzguODc5OUMxMS44MTU5IDQyLjAzMjIgMTYuMTI1NSA0My41NzYyIDIxLjA0MSA0My4yODAzQzI0LjAyNjkgNDMuMTA0IDI3LjM1MTYgNDIuNjk2MyAzMS4xMDE2IDM5LjQ1NjFDMzIuMDQ2OSAzOS45MzYgMzMuMDM5NiA0MC4xMjc5IDM0LjY4NiA0MC4yNzJDMzUuOTU0NiA0MC4zOTIxIDM3LjE3NTggNDAuMjA4IDM4LjEyMTEgNDAuMDA3OEMzOS42MDIxIDM5LjY4OCAzOS40OTk1IDM4LjI4ODEgMzguOTYzOSAzOC4wMzIyQzM0LjYyMyAzNS45Njc4IDM1LjU3NjIgMzYuODA4MSAzNC43MSAzNi4xMjc5QzM2LjkxNTUgMzMuNDYzOSA0MC4yNDAyIDMwLjY5NTggNDEuNTQgMjEuNzI4QzQxLjY0MjYgMjEuMDE2MSA0MS41NTU3IDIwLjU2NzkgNDEuNTQgMTkuOTkxN0M0MS41MzIyIDE5LjYzOTYgNDEuNjEwOCAxOS41MDM5IDQyLjAwNDkgMTkuNDYzOUM0My4wOTIzIDE5LjMzNTkgNDQuMTQ3OSAxOS4wMzE3IDQ1LjExNjcgMTguNDg3OEM0Ny45MjkyIDE2LjkxOTkgNDkuMDY0IDE0LjM0MzggNDkuMzMxNSAxMS4yNTU5QzQ5LjM3MTEgMTAuNzgzNyA0OS4zMjM3IDEwLjI5NTkgNDguODM1NCAxMC4wNDc5Wk0yNC4zMjYyIDM3LjgzOThDMjAuMTE5NiAzNC40NjM5IDE4LjA3OTEgMzMuMzUyMSAxNy4yMzU4IDMzLjM5OTlDMTYuNDQ4MiAzMy40NDgyIDE2LjU4OTggMzQuMzY4MiAxNi43NjMyIDM0Ljk2NzhDMTYuOTQ0MyAzNS41NjAxIDE3LjE4MTIgMzUuOTY4MyAxNy41MTE3IDM2LjQ4NzhDMTcuNzQwMiAzNi44MzIgMTcuODk3OSAzNy4zNDQyIDE3LjI4MzIgMzcuNzI4QzE1LjkyODIgMzguNTg0IDEzLjU3MjggMzcuNDM5OSAxMy40NjI0IDM3LjM4MzhDMTAuNzIwNyAzNS43MzU4IDguNDI4MjIgMzMuNTYwMSA2LjgxMzQ4IDMwLjU4NEM1LjI1MzQyIDI3LjcxOTcgNC4zNDc2NiAyNC42NDc5IDQuMTk3NzUgMjEuMzY3N0M0LjE1ODIgMjAuNTc1NyA0LjM4NjcyIDIwLjI5NTkgNS4xNTg2OSAyMC4xNTE5QzYuMTc1MjkgMTkuOTYgNy4yMjMxNCAxOS45MTk5IDguMjM5MjYgMjAuMDcxOEMxMi41MzI3IDIwLjcxMTkgMTYuMTg4NSAyMi42NzE5IDE5LjI1MjkgMjUuNzc1OUMyMS4wMDIgMjcuNTQzOSAyMi4zMjUyIDI5LjY1NTggMjMuNjg4NSAzMS43MjAyQzI1LjEzNzcgMzMuOTEyMSAyNi42OTc4IDM2IDI4LjY4MzEgMzcuNzExOUMyOS4zODQzIDM4LjMxMiAyOS45NDM0IDM4Ljc2ODEgMzAuNDc5IDM5LjEwNEMyOC44NjQzIDM5LjI4ODEgMjYuMTY5OSAzOS4zMjgxIDI0LjMyNjIgMzcuODM5OFpNMjYuMzQzMyAyNC42MDAxQzI2LjM0MzMgMjQuMjQ4IDI2LjYxOTEgMjMuOTY3OCAyNi45NjU4IDIzLjk2NzhDMjcuMDQ0NCAyMy45Njc4IDI3LjExNTIgMjMuOTgzOSAyNy4xNzgyIDI0LjAwNzhDMjcuMjY1MSAyNC4wNCAyNy4zNDM4IDI0LjA4NzkgMjcuNDA2NyAyNC4xNjAyQzI3LjUxNzEgMjQuMjcyIDI3LjU4MDEgMjQuNDMyMSAyNy41ODAxIDI0LjYwMDFDMjcuNTgwMSAyNC45NTIxIDI3LjMwNDIgMjUuMjMxOSAyNi45NTc1IDI1LjIzMTlDMjYuNjEwOCAyNS4yMzE5IDI2LjM0MzMgMjQuOTUyMSAyNi4zNDMzIDI0LjYwMDFaTTMyLjYwNjQgMjcuODc5OUMzMi4yMDQ2IDI4LjA0NzkgMzEuODAyNyAyOC4xOTE5IDMxLjQxNjUgMjguMjA4QzMwLjgxNzkgMjguMjM5NyAzMC4xNjQxIDI3Ljk5MjIgMjkuODA5NiAyNy42ODhDMjkuMjU4MyAyNy4yMTU4IDI4Ljg2NDMgMjYuOTUyMSAyOC42OTg3IDI2LjEyNzlDMjguNjI3OSAyNS43NzU5IDI4LjY2NzUgMjUuMjMxOSAyOC43MzA1IDI0LjkxOTlDMjguODcyMSAyNC4yNDggMjguNzE0NCAyMy44MTU5IDI4LjI0OTUgMjMuNDIzOEMyNy44NzE2IDIzLjEwNCAyNy4zOTExIDIzLjAxNjEgMjYuODYzMyAyMy4wMTYxQzI2LjY2NiAyMy4wMTYxIDI2LjQ4NDkgMjIuOTI3NyAyNi4zNTExIDIyLjg1NkMyNi4xMzA0IDIyLjc0NDEgMjUuOTQ5MiAyMi40NjM5IDI2LjEyMjYgMjIuMTIwMUMyNi4xNzc3IDIyLjAwNzggMjYuNDQ1OCAyMS43MzU4IDI2LjUwODggMjEuNjg4QzI3LjIyNTYgMjEuMjcyIDI4LjA1MjcgMjEuNDA3NyAyOC44MTY5IDIxLjcxOTdDMjkuNTI1OSAyMi4wMTYxIDMwLjA2MTUgMjIuNTYwMSAzMC44MzQgMjMuMzI4MUMzMS42MjE2IDI0LjI1NTkgMzEuNzYzMiAyNC41MTE3IDMyLjIxMjQgMjUuMjA4QzMyLjU2NjkgMjUuNzUyIDMyLjg5MDEgMjYuMzEyIDMzLjExMDQgMjYuOTUyMUMzMy4yNDQ2IDI3LjM1MjEgMzMuMDcxMyAyNy42ODAyIDMyLjYwNjQgMjcuODc5OVpcXFwiIGZpbGw9XFxcIlwiICsgY29sb3IgKyBcIlxcXCIgZmlsbC1vcGFjaXR5PVxcXCIxXFxcIiBmaWxsLXJ1bGU9XFxcIm5vbnplcm9cXFwiLz48L3N2Zz5cIlxufVxuIiwgIi8qKlxuICogZHNoLW1hbGtvLXByZWZzIFx1MjAxNCB0YWIgc3RhdHVzIGxpZ2h0ICsgYnJvd3NlciBub3RpZmljYXRpb25zIChicm93c2VyIGhhbGYpLlxuICpcbiAqIFBvcnRlZCBmcm9tIGRzaC1ub3RpY2UtY2VudGVyIChNSVQpLiBUaGUgdGFiIGZhdmljb24gdHVybnMgZ3JlZW4gd2hlbiBhIG1haW5cbiAqIHNlc3Npb24gZmluaXNoZWQgd2hpbGUgeW91IHdlcmUgYXdheSBhbmQgYW1iZXIgd2hpbGUgYSBzZXNzaW9uIGF3YWl0cyBhblxuICogaW50ZXJhY3Rpb24gKGFtYmVyIHdpbnMpLCBhbmQgdGhlIGJyb3dzZXIgcmFpc2VzIGEgbm90aWZpY2F0aW9uIG9uIGNvbXBsZXRpb25cbiAqIG9yIG9uIGEgbmV3IHBlbmRpbmcgcXVlc3Rpb24gLyBhcHByb3ZhbCAvIHBsYW4gcmV2aWV3LlxuICpcbiAqIEl0IHJlYWRzIHRoZSBvZmZpY2lhbCBjbGllbnQgc2lnbmFscyBcdTIwMTQgYHNlc3Npb25zYCByb3dzIHBsdXMgdGhlIG9wdGlvbmFsXG4gKiBgdWlTZXNzaW9uLnNlc3Npb25TdGF0dXNgIHN0b3JlIFx1MjAxNCBhbmQgdGhlIGBtYWxrby1wcmVmc2AgY29uZmlnIGZvcm0uIEl0IG93bnNcbiAqIG5vIHN0YXRlIGJleW9uZCBpbi1tZW1vcnkgYm9va2tlZXBpbmcgYW5kIHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBmYXZpY29uIG9uXG4gKiB0ZWFyZG93bi5cbiAqL1xuaW1wb3J0IHsgd2hhbGVTdmcgfSBmcm9tICcuL3doYWxlLnRzJ1xuXG4vKiogU2V0dGluZ3MvbG9jYWxlIG5hbWVzcGFjZSBzaGFyZWQgd2l0aCB0aGUgc2V0dGluZ3MgcGFnZS4gKi9cbmV4cG9ydCBjb25zdCBMT0NBTEVfTlMgPSAnc2V0dGluZ3MubWFsa28tcHJlZnMnXG5cbmNvbnN0IERFRkFVTFRfSFJFRiA9ICcvZmF2aWNvbi5zdmcnXG5jb25zdCBERUZBVUxUX0dSRUVOID0gJyMyMkM1NUUnXG5jb25zdCBERUZBVUxUX0FNQkVSID0gJyNGNTlFMEInXG5jb25zdCBERUZBVUxUX1dPUktJTkcgPSAnIzNCODJGNidcbmNvbnN0IEhFWCA9IC9eI1swLTlhLWZBLUZdezZ9JC9cbi8qKiBUb29sLW5hbWUgY2FwOiBsb25nZXIgbmFtZXMgd291bGQgYmxvdyB0aGUgbm90aWZpY2F0aW9uIGJvZHkncyBzaW5nbGUgbGluZS4gKi9cbmNvbnN0IFRPT0xfTkFNRV9MSU1JVCA9IDMyXG5cbi8qKlxuICogQnJvd3NlciBub3RpZmljYXRpb24gYXZhaWxhYmlsaXR5LlxuICogQHJldHVybnMgeydncmFudGVkJyB8ICdkZW5pZWQnIHwgJ2RlZmF1bHQnIHwgJ3Vuc3VwcG9ydGVkJ31cbiAqL1xuZnVuY3Rpb24gbm90aWZpY2F0aW9uU3VwcG9ydCgpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSAnc3RyaW5nJykgcmV0dXJuICd1bnN1cHBvcnRlZCdcbiAgICByZXR1cm4gTm90aWZpY2F0aW9uLnBlcm1pc3Npb25cbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuICd1bnN1cHBvcnRlZCdcbiAgfVxufVxuXG4vKiogQXNrIGZvciBwZXJtaXNzaW9uIChvbmx5IHdoZW4gdGhlIGJyb3dzZXIgaGFzIG5vdCBkZWNpZGVkIHlldCkuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdE5vdGlmaWNhdGlvblBlcm1pc3Npb24oKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBOb3RpZmljYXRpb24gPT09ICd1bmRlZmluZWQnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCd1bnN1cHBvcnRlZCcpXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSAnZGVmYXVsdCcpIHJldHVybiBQcm9taXNlLnJlc29sdmUoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24pXG4gICAgY29uc3QgYW5zd2VyID0gTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAgICByZXR1cm4gYW5zd2VyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGFuc3dlci50aGVuID09PSAnZnVuY3Rpb24nID8gYW5zd2VyIDogUHJvbWlzZS5yZXNvbHZlKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vdGlmaWNhdGlvblN1cHBvcnQoKSlcbiAgfVxufVxuXG4vKiogQ3VycmVudCBwZXJtaXNzaW9uIHN0cmluZywgZm9yIHRoZSBzZXR0aW5ncyBwYWdlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkge1xuICByZXR1cm4gbm90aWZpY2F0aW9uU3VwcG9ydCgpXG59XG5cbi8qKiBTdGF0aWMgcm91dGUgdGhlIEhvc3Qgc2VydmVzIHRoZSBidW5kbGVkIHNvdW5kcyBmcm9tLiAqL1xuZXhwb3J0IGNvbnN0IFNPVU5EX1JPVVRFID0gJy9tYWxrby1wcmVmcy1zb3VuZHMnXG4vKiogU2VudGluZWwgbWVhbmluZyBcInBsYXkgbm90aGluZ1wiLiAqL1xuZXhwb3J0IGNvbnN0IFNPVU5EX05PTkUgPSAnbm9uZSdcbi8qKiBCdWlsdC1pbiBzeW50aGVzaXplZCBjaGltZXMgKG5vIGFzc2V0IGZpbGUgbmVlZGVkKS4gKi9cbmV4cG9ydCBjb25zdCBCVUlMVElOX1NPVU5EUyA9IFtcbiAgeyBpZDogJ2J1aWx0aW4tdXAnLCBsYWJlbEtleTogJ3NvdW5kQnVpbHRpblVwJyB9LFxuICB7IGlkOiAnYnVpbHRpbi1kb3duJywgbGFiZWxLZXk6ICdzb3VuZEJ1aWx0aW5Eb3duJyB9LFxuXVxuLyoqIG9wZW5jb2RlIHNvdW5kIHBhY2tzIGJ1bmRsZWQgdW5kZXIgYGFzc2V0cy9hdWRpb2AgKE1JVCkuICovXG5leHBvcnQgY29uc3QgU09VTkRfUEFDS1MgPSBbXG4gIHsgbmFtZTogJ0FsZXJ0JywgcHJlZml4OiAnYWxlcnQnLCBjb3VudDogMTAgfSxcbiAgeyBuYW1lOiAnQmlwLWJvcCcsIHByZWZpeDogJ2JpcC1ib3AnLCBjb3VudDogMTAgfSxcbiAgeyBuYW1lOiAnU3RhcGxlYm9wcycsIHByZWZpeDogJ3N0YXBsZWJvcHMnLCBjb3VudDogNyB9LFxuICB7IG5hbWU6ICdOb3BlJywgcHJlZml4OiAnbm9wZScsIGNvdW50OiAxMiB9LFxuICB7IG5hbWU6ICdZdXAnLCBwcmVmaXg6ICd5dXAnLCBjb3VudDogNiB9LFxuXVxuXG4vKiogU291bmQgaWRzIG9mIG9uZSBwYWNrLCBpbiBkaXNwbGF5IG9yZGVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhY2tTb3VuZElkcyhwYWNrKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwYWNrLmNvdW50IH0sIChfLCBpKSA9PiBgJHtwYWNrLnByZWZpeH0tJHtTdHJpbmcoaSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9YClcbn1cblxuLyoqIENsYW1wIGFuIGFyYml0cmFyeSB2b2x1bWUgdG8gMFx1MjAxMzEgKGRlZmF1bHQgMC42KS4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZvbHVtZSh2b2x1bWUpIHtcbiAgaWYgKHR5cGVvZiB2b2x1bWUgIT09ICdudW1iZXInIHx8ICFOdW1iZXIuaXNGaW5pdGUodm9sdW1lKSkgcmV0dXJuIDAuNlxuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodm9sdW1lLCAwKSwgMSlcbn1cblxuLyoqIFNoYXJlZCBBdWRpb0NvbnRleHQgZm9yIHRoZSBzeW50aGVzaXplZCBjaGltZXMuICovXG5sZXQgY2hpbWVDb250ZXh0XG5mdW5jdGlvbiBjaGltZUF1ZGlvQ29udGV4dCgpIHtcbiAgaWYgKGNoaW1lQ29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gY2hpbWVDb250ZXh0XG4gIHRyeSB7XG4gICAgY29uc3QgQ3RvciA9IHdpbmRvdy5BdWRpb0NvbnRleHQgPz8gd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dFxuICAgIGNoaW1lQ29udGV4dCA9IEN0b3IgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBuZXcgQ3RvcigpXG4gIH0gY2F0Y2gge1xuICAgIGNoaW1lQ29udGV4dCA9IG51bGxcbiAgfVxuICByZXR1cm4gY2hpbWVDb250ZXh0XG59XG5cbi8qKiBSZXN1bWUgdGhlIGF1ZGlvIGNvbnRleHQgaW5zaWRlIGEgdXNlciBnZXN0dXJlIChhdXRvcGxheSBwb2xpY3kpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaW1lU291bmQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXVkaW8gPSBjaGltZUF1ZGlvQ29udGV4dCgpXG4gICAgaWYgKGF1ZGlvICE9PSBudWxsICYmIGF1ZGlvLnN0YXRlID09PSAnc3VzcGVuZGVkJykgYXVkaW8ucmVzdW1lPy4oKVxuICB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbn1cblxuLyoqIFN5bnRoZXNpemVkIGNoaW1lOiB1cCAoZG9uZSkgb3IgZG93biAocGVuZGluZykuICovXG5mdW5jdGlvbiBwbGF5Q2hpbWUoa2luZCwgdm9sdW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbGV2ZWwgPSBub3JtYWxpemVWb2x1bWUodm9sdW1lKVxuICAgIGlmIChsZXZlbCA8PSAwKSByZXR1cm5cbiAgICBjb25zdCBhdWRpbyA9IGNoaW1lQXVkaW9Db250ZXh0KClcbiAgICBpZiAoYXVkaW8gPT09IG51bGwpIHJldHVyblxuICAgIGlmIChhdWRpby5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIGF1ZGlvLnJlc3VtZT8uKClcbiAgICBjb25zdCBub3RlcyA9IGtpbmQgPT09ICdkb25lJyA/IFs2NjAsIDk5MF0gOiBbODgwLCA1ODddXG4gICAgY29uc3QgYmFzZSA9IGF1ZGlvLmN1cnJlbnRUaW1lXG4gICAgbm90ZXMuZm9yRWFjaCgoZnJlcXVlbmN5LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgb3NjaWxsYXRvciA9IGF1ZGlvLmNyZWF0ZU9zY2lsbGF0b3IoKVxuICAgICAgY29uc3QgZ2FpbiA9IGF1ZGlvLmNyZWF0ZUdhaW4oKVxuICAgICAgY29uc3Qgc3RhcnQgPSBiYXNlICsgaW5kZXggKiAwLjE0XG4gICAgICBvc2NpbGxhdG9yLnR5cGUgPSAnc2luZSdcbiAgICAgIG9zY2lsbGF0b3IuZnJlcXVlbmN5LnZhbHVlID0gZnJlcXVlbmN5XG4gICAgICBnYWluLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDAxLCBzdGFydClcbiAgICAgIGdhaW4uZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMTIgKiBsZXZlbCwgc3RhcnQgKyAwLjAyKVxuICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDAxLCBzdGFydCArIDAuMTgpXG4gICAgICBvc2NpbGxhdG9yLmNvbm5lY3QoZ2FpbilcbiAgICAgIGdhaW4uY29ubmVjdChhdWRpby5kZXN0aW5hdGlvbilcbiAgICAgIG9zY2lsbGF0b3Iuc3RhcnQoc3RhcnQpXG4gICAgICBvc2NpbGxhdG9yLnN0b3Aoc3RhcnQgKyAwLjIpXG4gICAgfSlcbiAgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG59XG5cbi8qKiBFbGVtZW50IGN1cnJlbnRseSBwbGF5aW5nLCBzbyBvdmVybGFwcGluZyBzb3VuZHMgZG8gbm90IHN0YWNrLiAqL1xubGV0IGFjdGl2ZVNvdW5kID0gbnVsbFxuZnVuY3Rpb24gc3RvcFNvdW5kKCkge1xuICBjb25zdCBhdWRpbyA9IGFjdGl2ZVNvdW5kXG4gIGFjdGl2ZVNvdW5kID0gbnVsbFxuICBpZiAoYXVkaW8gPT09IG51bGwpIHJldHVyblxuICB0cnkgeyBhdWRpby5wYXVzZSgpOyBhdWRpby5jdXJyZW50VGltZSA9IDAgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG59XG5cbi8qKlxuICogUGxheSBhIHNvdW5kIGlkOiBgYnVpbHRpbi0qYCBpcyBzeW50aGVzaXplZCwgYSBwYWNrIGlkIHN0cmVhbXMgdGhlIEhvc3Qnc1xuICogYnVuZGxlZCBtcDMgYW5kIGZhbGxzIGJhY2sgdG8gdGhlIHN5bnRoZXNpemVkIGNoaW1lIHdoZW4gdW5hdmFpbGFibGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWQgc291bmQgaWQgKGBub25lYCA9IHNpbGVuY2UpLlxuICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZSAwXHUyMDEzMS5cbiAqIEBwYXJhbSB7J2RvbmUnIHwgJ3BlbmRpbmcnfSBraW5kIGRyaXZlcyB0aGUgZmFsbGJhY2sgY2hpbWUncyBwaXRjaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBsYXlTb3VuZChpZCwgdm9sdW1lLCBraW5kKSB7XG4gIGNvbnN0IGxldmVsID0gbm9ybWFsaXplVm9sdW1lKHZvbHVtZSlcbiAgaWYgKGxldmVsIDw9IDApIHJldHVyblxuICBjb25zdCBuYW1lID0gdHlwZW9mIGlkID09PSAnc3RyaW5nJyA/IGlkIDogJydcbiAgaWYgKG5hbWUgPT09ICcnIHx8IG5hbWUgPT09IFNPVU5EX05PTkUpIHJldHVyblxuICBzdG9wU291bmQoKVxuICBpZiAobmFtZS5zdGFydHNXaXRoKCdidWlsdGluLScpKSB7XG4gICAgcGxheUNoaW1lKG5hbWUgPT09ICdidWlsdGluLXVwJyA/ICdkb25lJyA6IG5hbWUgPT09ICdidWlsdGluLWRvd24nID8gJ3BlbmRpbmcnIDoga2luZCwgbGV2ZWwpXG4gICAgcmV0dXJuXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhTT1VORF9ST1VURSArICcvJyArIG5hbWUgKyAnLm1wMycpXG4gICAgYXVkaW8udm9sdW1lID0gbGV2ZWxcbiAgICBhY3RpdmVTb3VuZCA9IGF1ZGlvXG4gICAgY29uc3QgcGxheWVkID0gYXVkaW8ucGxheSgpXG4gICAgaWYgKHBsYXllZCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwbGF5ZWQuY2F0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsYXllZC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVTb3VuZCA9PT0gYXVkaW8pIGFjdGl2ZVNvdW5kID0gbnVsbFxuICAgICAgICBwbGF5Q2hpbWUoa2luZCwgbGV2ZWwpXG4gICAgICB9KVxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgcGxheUNoaW1lKGtpbmQsIGxldmVsKVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIHNlc3Npb24gc2lnbmFscyBhbmQgZHJpdmUgdGhlIHRhYiBpY29uICsgbm90aWZpY2F0aW9ucy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBjdHggY2xpZW50IHBsdWdpbiBjb250ZXh0IChuZWVkcyBgc2Vzc2lvbnNgLCBgbG9jYWxlYCkuXG4gKiBAcGFyYW0ge29iamVjdH0gZm9ybSB0aGUgYG1hbGtvLXByZWZzYCBjb25maWcgZm9ybSAoc25hcHNob3QgKyBzdWJzY3JpYmUpLlxuICogQHJldHVybnMgeygpID0+IHZvaWR9IGRpc3Bvc2VyIHJlc3RvcmluZyB0aGUgZmF2aWNvbiBhbmQgcmVtb3ZpbmcgbGlzdGVuZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdGF0dXNMaWdodChjdHgsIGZvcm0pIHtcbiAgY29uc3QgbGlzdCA9IGN0eC5zZXNzaW9ucy5saXN0XG4gIGNvbnN0IGxvY2FsZSA9ICgpID0+IGN0eC5sb2NhbGUuYmluZChMT0NBTEVfTlMpXG4gIC8qKiBPcHRpb25hbCBvZmZpY2lhbCBzdGF0dXMgc291cmNlICgwLjEuNyspOyByb3dzIGtlZXAgdGhlaXIgbGVnYWN5IGZpZWxkcyBvdGhlcndpc2UuICovXG4gIGxldCBzdGF0dXNTb3VyY2VcbiAgLyoqIERlZHVwZSBrZXlzIChgc2Vzc2lvbklkOmtpbmRgKSBhbHJlYWR5IHF1ZXVlZC4gKi9cbiAgY29uc3Qgbm90aWZpZWQgPSBuZXcgU2V0KClcbiAgLyoqIEFnZ3JlZ2F0aW9uIHdpbmRvdyBzbyBhIGJ1cnN0IG9mIHRyYW5zaXRpb25zIGJlY29tZXMgb25lIG5vdGlmaWNhdGlvbi4gKi9cbiAgY29uc3Qgbm90aWZ5UXVldWUgPSBuZXcgTWFwKClcbiAgbGV0IG5vdGlmeVRpbWVyXG4gIC8qKiBMYXN0IG9ic2VydmVkIGNvbXBsZXRpb24gc3RhdGUgcGVyIHNlc3Npb24gKGZhbHNlIFx1MjE5MiB0cnVlIGVkZ2UgZGV0ZWN0aW9uKS4gKi9cbiAgY29uc3QgcHJldkNvbXBsZXRlZCA9IG5ldyBNYXAoKVxuICAvKiogUnVuIHN0YXJ0IHBlciBzZXNzaW9uLCB0aGVuIHRoZSBsYXN0IHJ1biBkdXJhdGlvbiAobXMpLiAqL1xuICBjb25zdCBydW5TdGFydGVkQXQgPSBuZXcgTWFwKClcbiAgY29uc3QgbGFzdFJ1bk1zID0gbmV3IE1hcCgpXG4gIGxldCBwcmV2UGVuZGluZyA9IG5ldyBTZXQoKVxuICBsZXQgcGVuZGluZ1NlZW4gPSBmYWxzZVxuXG4gIC8qKiBSZWFsbHkgaW4gdGhlIGZvcmVncm91bmQ6IHRhYiB2aXNpYmxlIEFORCB3aW5kb3cgZm9jdXNlZC4gKi9cbiAgY29uc3QgaXNGb3JlZ3JvdW5kID0gKCkgPT4gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAndmlzaWJsZScgJiYgZG9jdW1lbnQuaGFzRm9jdXMoKVxuXG4gIC8qKiBSZWFkIHRoZSBub3RpZmljYXRpb24vY29sb3IgcHJlZmVyZW5jZXMgKHVuc2V0IGZhbGxzIGJhY2sgdG8gZGVmYXVsdHMpLiAqL1xuICBmdW5jdGlvbiByZWFkQ29uZmlnKCkge1xuICAgIGNvbnN0IHZhbHVlID0gZm9ybS5nZXRTbmFwc2hvdCgpLnZhbHVlID8/IHt9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yc0VuYWJsZWQ6IHZhbHVlLmNvbG9yc0VuYWJsZWQgIT09IGZhbHNlLFxuICAgICAgZ3JlZW46IEhFWC50ZXN0KHZhbHVlLmdyZWVuKSA/IHZhbHVlLmdyZWVuIDogREVGQVVMVF9HUkVFTixcbiAgICAgIGFtYmVyOiBIRVgudGVzdCh2YWx1ZS5hbWJlcikgPyB2YWx1ZS5hbWJlciA6IERFRkFVTFRfQU1CRVIsXG4gICAgICB3b3JraW5nOiBIRVgudGVzdCh2YWx1ZS53b3JraW5nKSA/IHZhbHVlLndvcmtpbmcgOiBERUZBVUxUX1dPUktJTkcsXG4gICAgICBibGFjazogSEVYLnRlc3QodmFsdWUuYmxhY2spID8gdmFsdWUuYmxhY2sgOiB1bmRlZmluZWQsXG4gICAgICBub3RpZnlFbmFibGVkOiB2YWx1ZS5ub3RpZnlFbmFibGVkID09PSB0cnVlLFxuICAgICAgbm90aWZ5Rm9yZWdyb3VuZDogdmFsdWUubm90aWZ5Rm9yZWdyb3VuZCA9PT0gdHJ1ZSxcbiAgICAgIGRvbmVQZXJzaXN0ZW50OiB2YWx1ZS5ub3RpZnlEb25lUGVyc2lzdGVudCA9PT0gdHJ1ZSxcbiAgICAgIHBlbmRpbmdQZXJzaXN0ZW50OiB2YWx1ZS5ub3RpZnlQZW5kaW5nUGVyc2lzdGVudCA9PT0gdHJ1ZSxcbiAgICAgIHZvbHVtZTogbm9ybWFsaXplVm9sdW1lKHZhbHVlLm5vdGlmeVZvbHVtZSA/PyAwLjYpLFxuICAgICAgZG9uZVNvdW5kOiB0eXBlb2YgdmFsdWUubm90aWZ5RG9uZVNvdW5kID09PSAnc3RyaW5nJyA/IHZhbHVlLm5vdGlmeURvbmVTb3VuZCA6IFNPVU5EX05PTkUsXG4gICAgICBwZW5kaW5nU291bmQ6IHR5cGVvZiB2YWx1ZS5ub3RpZnlQZW5kaW5nU291bmQgPT09ICdzdHJpbmcnID8gdmFsdWUubm90aWZ5UGVuZGluZ1NvdW5kIDogU09VTkRfTk9ORSxcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gZmF2aWNvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRFNIIHNoaXBzIHR3byBpY29uIGxpbmtzIChkYXJrL2xpZ2h0IHZpYSBgbWVkaWFgKTsgdGhlIGJyb3dzZXIgcGlja3Mgb25lIGJ5XG4gIC8vIHRoZSBPUyBjb2xvciBzY2hlbWUsIHNvIGV2ZXJ5IGxpbmsgbXVzdCBiZSBwYWludGVkIGFuZCByZXN0b3JlZCB0b2dldGhlci5cbiAgY29uc3QgaWNvbkxpbmtzID0gKCkgPT4gWy4uLmRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWx+PVwiaWNvblwiXScpXVxuICAvKiogT3JpZ2luYWwgaHJlZiBvZiBlYWNoIGxpbmsgd2UgaGF2ZSB0b3VjaGVkIChyZXN0b3JlIHRhcmdldCkuICovXG4gIGNvbnN0IG9yaWdpbmFsSHJlZnMgPSBuZXcgTWFwKClcbiAgY29uc3QgcmVtZW1iZXJMaW5rcyA9ICgpID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgaWNvbkxpbmtzKCkpIGlmICghb3JpZ2luYWxIcmVmcy5oYXMobGluaykpIG9yaWdpbmFsSHJlZnMuc2V0KGxpbmssIGxpbmsuaHJlZilcbiAgfVxuICByZW1lbWJlckxpbmtzKClcbiAgY29uc3QgcGFpbnQgPSAoaHJlZikgPT4geyBmb3IgKGNvbnN0IGxpbmsgb2Ygb3JpZ2luYWxIcmVmcy5rZXlzKCkpIGxpbmsuaHJlZiA9IGhyZWYgfVxuICAvKiogTGFzdCBocmVmIHdlIHNldDsgbnVsbCA9IG9mZmljaWFsIGljb25zLiAqL1xuICBsZXQgYXBwbGllZCA9IG51bGxcbiAgY29uc3QgdXJpID0gKGhleCkgPT4gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudCh3aGFsZVN2ZyhoZXgpKX1gXG4gIGNvbnN0IHJlc3RvcmUgPSAoKSA9PiB7XG4gICAgaWYgKGFwcGxpZWQgPT09IG51bGwpIHJldHVyblxuICAgIGZvciAoY29uc3QgW2xpbmssIGhyZWZdIG9mIG9yaWdpbmFsSHJlZnMpIGxpbmsuaHJlZiA9IGhyZWZcbiAgICBhcHBsaWVkID0gbnVsbFxuICB9XG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBtYXkgcmUtY3JlYXRlIHRoZSBpY29uIGxpbmtzOyBwaWNrIG5ldyBvbmVzIHVwLlxuICBjb25zdCBpY29uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgY29uc3QgYmVmb3JlID0gb3JpZ2luYWxIcmVmcy5zaXplXG4gICAgcmVtZW1iZXJMaW5rcygpXG4gICAgaWYgKG9yaWdpbmFsSHJlZnMuc2l6ZSAhPT0gYmVmb3JlKSBzeW5jKClcbiAgfSlcbiAgaWNvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSlcblxuICAvLyAtLS0gbm90aWZpY2F0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgUEVORElOR19LSU5EX0tFWVMgPSB7XG4gICAgYXBwcm92YWw6ICdwZW5kaW5nS2luZEFwcHJvdmFsJyxcbiAgICBxdWVzdGlvbjogJ3BlbmRpbmdLaW5kUXVlc3Rpb24nLFxuICAgICdwbGFuLXJldmlldyc6ICdwZW5kaW5nS2luZFBsYW5SZXZpZXcnLFxuICB9XG5cbiAgLyoqIFBlbmRpbmcgaW50ZXJhY3Rpb24gXHUyMTkyIG5vdGlmaWNhdGlvbiBib2R5IHRleHQgKGRlZmVuc2l2ZSByZWFkcykuICovXG4gIGZ1bmN0aW9uIHBlbmRpbmdUeXBlTGFiZWwoaW50ZXJhY3Rpb24pIHtcbiAgICBjb25zdCB0ID0gbG9jYWxlKClcbiAgICBjb25zdCBraW5kID0gaW50ZXJhY3Rpb24/LmtpbmRcbiAgICBpZiAoa2luZCA9PT0gJ2FwcHJvdmFsJykge1xuICAgICAgY29uc3QgdG9vbCA9IGludGVyYWN0aW9uLnRvb2xOYW1lXG4gICAgICBpZiAodHlwZW9mIHRvb2wgIT09ICdzdHJpbmcnIHx8IHRvb2wgPT09ICcnKSByZXR1cm4gdCgncGVuZGluZ0tpbmRBcHByb3ZhbCcpXG4gICAgICBjb25zdCBzaG93biA9IHRvb2wubGVuZ3RoID4gVE9PTF9OQU1FX0xJTUlUID8gdG9vbC5zbGljZSgwLCBUT09MX05BTUVfTElNSVQpICsgJ1x1MjAyNicgOiB0b29sXG4gICAgICByZXR1cm4gdCgncGVuZGluZ0FwcHJvdmFsVG9vbCcsIHsgdG9vbDogc2hvd24gfSlcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09ICdxdWVzdGlvbicpIHtcbiAgICAgIGNvbnN0IHF1ZXN0aW9ucyA9IEFycmF5LmlzQXJyYXkoaW50ZXJhY3Rpb24ucXVlc3Rpb25zKSA/IGludGVyYWN0aW9uLnF1ZXN0aW9ucyA6IFtdXG4gICAgICBpZiAocXVlc3Rpb25zLmxlbmd0aCA+IDEpIHJldHVybiB0KCdwZW5kaW5nUXVlc3Rpb25CYXRjaCcsIHsgY291bnQ6IHF1ZXN0aW9ucy5sZW5ndGggfSlcbiAgICAgIGNvbnN0IGZpcnN0ID0gcXVlc3Rpb25zWzBdXG4gICAgICBpZiAoZmlyc3QgPT09IG51bGwgfHwgdHlwZW9mIGZpcnN0ICE9PSAnb2JqZWN0JykgcmV0dXJuIHQoJ3BlbmRpbmdLaW5kUXVlc3Rpb24nKVxuICAgICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmlzQXJyYXkoZmlyc3Qub3B0aW9ucykgPyBmaXJzdC5vcHRpb25zIDogW11cbiAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHQoJ3BlbmRpbmdRdWVzdGlvbkZpbGwnKVxuICAgICAgcmV0dXJuIGZpcnN0Lm11bHRpU2VsZWN0ID09PSB0cnVlID8gdCgncGVuZGluZ1F1ZXN0aW9uTXVsdGknKSA6IHQoJ3BlbmRpbmdRdWVzdGlvbkNob29zZScpXG4gICAgfVxuICAgIGNvbnN0IGtleSA9IFBFTkRJTkdfS0lORF9LRVlTW2tpbmRdXG4gICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogdChrZXkpXG4gIH1cblxuICAvKiogUXVldWUgb25lIG5vdGlmaWNhdGlvbiAoc2tpcHBlZCB3aGlsZSBkaXNhYmxlZDsgZGVkdXBlZDsgMzAwIG1zIHdpbmRvdykuICovXG4gIGZ1bmN0aW9uIHF1ZXVlTm90aWZpY2F0aW9uKGtpbmQsIHNlc3Npb25JZCwgbGFiZWwsIHR5cGVMYWJlbCwgZHVyYXRpb25Ncykge1xuICAgIGlmICghcmVhZENvbmZpZygpLm5vdGlmeUVuYWJsZWQpIHJldHVyblxuICAgIGNvbnN0IGtleSA9IHNlc3Npb25JZCArICc6JyArIGtpbmRcbiAgICBpZiAobm90aWZpZWQuaGFzKGtleSkpIHJldHVyblxuICAgIG5vdGlmaWVkLmFkZChrZXkpXG4gICAgbm90aWZ5UXVldWUuc2V0KGtleSwgeyBraW5kLCBzZXNzaW9uSWQsIGxhYmVsLCB0eXBlTGFiZWwsIGR1cmF0aW9uTXMgfSlcbiAgICBpZiAobm90aWZ5VGltZXIgPT09IHVuZGVmaW5lZCkgbm90aWZ5VGltZXIgPSBzZXRUaW1lb3V0KGZsdXNoTm90aWZpY2F0aW9ucywgMzAwKVxuICB9XG5cbiAgLyoqIEZsdXNoIHRoZSBhZ2dyZWdhdGlvbiB3aW5kb3cgaW50byBicm93c2VyIG5vdGlmaWNhdGlvbnMuICovXG4gIGZ1bmN0aW9uIGZsdXNoTm90aWZpY2F0aW9ucygpIHtcbiAgICBub3RpZnlUaW1lciA9IHVuZGVmaW5lZFxuICAgIGNvbnN0IGVudHJpZXMgPSBbLi4ubm90aWZ5UXVldWUudmFsdWVzKCldXG4gICAgbm90aWZ5UXVldWUuY2xlYXIoKVxuICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgaWYgKG5vdGlmaWNhdGlvblN1cHBvcnQoKSAhPT0gJ2dyYW50ZWQnKSByZXR1cm5cbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKClcbiAgICBpZiAoIWNvbmZpZy5ub3RpZnlGb3JlZ3JvdW5kICYmIGlzRm9yZWdyb3VuZCgpKSByZXR1cm5cbiAgICBjb25zdCB0ID0gbG9jYWxlKClcbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcCgpXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCBidWNrZXQgPSBncm91cGVkLmdldChlbnRyeS5raW5kKSA/PyBbXVxuICAgICAgYnVja2V0LnB1c2goZW50cnkpXG4gICAgICBncm91cGVkLnNldChlbnRyeS5raW5kLCBidWNrZXQpXG4gICAgfVxuICAgIGZvciAoY29uc3QgW2tpbmQsIGJ1Y2tldF0gb2YgZ3JvdXBlZCkge1xuICAgICAgY29uc3QgaGVhZCA9IGJ1Y2tldFswXVxuICAgICAgY29uc3QgZXh0cmEgPSBidWNrZXQubGVuZ3RoIC0gMVxuICAgICAgbGV0IHRpdGxlID0gaGVhZC5sYWJlbCA/PyBoZWFkLnNlc3Npb25JZFxuICAgICAgaWYgKGV4dHJhID4gMCkgdGl0bGUgPSB0aXRsZSArICcgKycgKyBTdHJpbmcoZXh0cmEpXG4gICAgICBsZXQgYm9keSA9IGtpbmQgPT09ICdkb25lJyA/IHQoJ25vdGlmeURvbmVUaXRsZScpIDogKGhlYWQudHlwZUxhYmVsID8/IHQoJ25vdGlmeVBlbmRpbmdUaXRsZScpKVxuICAgICAgaWYgKGtpbmQgPT09ICdkb25lJyAmJiBleHRyYSA9PT0gMCAmJiBoZWFkLmR1cmF0aW9uTXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBib2R5ID0gYm9keSArICcgXHUwMEI3ICcgKyB0KCdub3RpZnlEdXJhdGlvbicsIHsgZHVyYXRpb246IGZvcm1hdFJ1bkR1cmF0aW9uKGhlYWQuZHVyYXRpb25NcywgdCkgfSlcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBubyBgdGFnYDogcmV1c2luZyBvbmUgbWFrZXMgc29tZSBwbGF0Zm9ybXMgc2lsZW50bHlcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgcHJldmlvdXMgYmFubmVyIGluc3RlYWQgb2YgcmFpc2luZyBhIG5ldyBvbmUuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24odGl0bGUsIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGljb246IHVyaShraW5kID09PSAnZG9uZScgPyBjb25maWcuZ3JlZW4gOiBjb25maWcuYW1iZXIpLFxuICAgICAgICAgIHJlcXVpcmVJbnRlcmFjdGlvbjoga2luZCA9PT0gJ2RvbmUnID8gY29uZmlnLmRvbmVQZXJzaXN0ZW50IDogY29uZmlnLnBlbmRpbmdQZXJzaXN0ZW50LFxuICAgICAgICB9KVxuICAgICAgICBwbGF5U291bmQoa2luZCA9PT0gJ2RvbmUnID8gY29uZmlnLmRvbmVTb3VuZCA6IGNvbmZpZy5wZW5kaW5nU291bmQsIGNvbmZpZy52b2x1bWUsIGtpbmQpXG4gICAgICAgIG5vdGlmaWNhdGlvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgIHRyeSB7IHdpbmRvdy5mb2N1cygpIH0gY2F0Y2ggeyAvKiBpZ25vcmUgKi8gfVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3b3Jrc3BhY2UgPSBjdHguZ2V0KCd1aVdvcmtzcGFjZScpXG4gICAgICAgICAgICBpZiAod29ya3NwYWNlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdvcmtzcGFjZS5vcGVuU2Vzc2lvbiA9PT0gJ2Z1bmN0aW9uJykgd29ya3NwYWNlLm9wZW5TZXNzaW9uKGhlYWQuc2Vzc2lvbklkKVxuICAgICAgICAgICAgZWxzZSBjdHguc2Vzc2lvbnMub3BlbihoZWFkLnNlc3Npb25JZClcbiAgICAgICAgICB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbiAgICAgICAgICBub3RpZmljYXRpb24uY2xvc2UoKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1ttYWxrby1wcmVmc10gY291bGQgbm90IHJhaXNlIG5vdGlmaWNhdGlvbicsIGVycm9yKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiA2MCBzIHJvbGxzIGludG8gbWludXRlcywgc2Vjb25kcyB6ZXJvLXBhZGRlZCAobWF0Y2hlcyB0aGUgb2ZmaWNpYWwgZm9ybWF0KS4gKi9cbiAgZnVuY3Rpb24gZm9ybWF0UnVuRHVyYXRpb24obXMsIHQpIHtcbiAgICBjb25zdCB0b3RhbCA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3IobXMgLyAxMDAwKSlcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0b3RhbCAvIDYwKVxuICAgIGNvbnN0IHNlY29uZHMgPSB0b3RhbCAlIDYwXG4gICAgcmV0dXJuIG1pbnV0ZXMgPiAwXG4gICAgICA/IHQoJ2R1cmF0aW9uTWludXRlcycsIHsgbWludXRlcywgc2Vjb25kczogU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykgfSlcbiAgICAgIDogdCgnZHVyYXRpb25TZWNvbmRzJywgeyBzZWNvbmRzIH0pXG4gIH1cblxuICAvKiogQ29tcGxldGlvbiAvIHBlbmRpbmcgdHJhbnNpdGlvbnMgZnJvbSB0aGUgc2Vzc2lvbiBzdGF0ZS4gKi9cbiAgZnVuY3Rpb24gZGV0ZWN0VHJhbnNpdGlvbnMoc3RhdGUpIHtcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKHN0YXRlLmJ5SWQpKSB7XG4gICAgICBpZiAocm93Lm9yaWdpbiA9PT0gJ3N1YmFnZW50JykgY29udGludWVcbiAgICAgIGNvbnN0IGJlZm9yZSA9IHByZXZDb21wbGV0ZWQuZ2V0KHJvdy5pZClcbiAgICAgIGNvbnN0IG5vdyA9IHJvdy5jb21wbGV0ZWQgPT09IHRydWVcbiAgICAgIGlmIChiZWZvcmUgPT09IGZhbHNlICYmIG5vdykgcXVldWVOb3RpZmljYXRpb24oJ2RvbmUnLCByb3cuaWQsIHJvdy5kaXNwbGF5VGl0bGUgPz8gcm93LnRpdGxlID8/IHJvdy5pZCwgdW5kZWZpbmVkLCBsYXN0UnVuTXMuZ2V0KHJvdy5pZCkpXG4gICAgICBpZiAoIW5vdykgbm90aWZpZWQuZGVsZXRlKHJvdy5pZCArICc6ZG9uZScpXG4gICAgICBwcmV2Q29tcGxldGVkLnNldChyb3cuaWQsIG5vdylcbiAgICB9XG4gICAgZm9yIChjb25zdCBpZCBvZiBbLi4ucHJldkNvbXBsZXRlZC5rZXlzKCldKSB7XG4gICAgICBpZiAoIShpZCBpbiBzdGF0ZS5ieUlkKSkgeyBwcmV2Q29tcGxldGVkLmRlbGV0ZShpZCk7IG5vdGlmaWVkLmRlbGV0ZShpZCArICc6ZG9uZScpIH1cbiAgICB9XG4gICAgY29uc3QgY3VycmVudCA9IG5ldyBTZXQoKVxuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoc3RhdGUuYnlJZCkpIGlmIChyb3cucGVuZGluZ0ludGVyYWN0aW9uICE9PSB1bmRlZmluZWQpIGN1cnJlbnQuYWRkKHJvdy5pZClcbiAgICBpZiAocGVuZGluZ1NlZW4pIHtcbiAgICAgIGZvciAoY29uc3QgaWQgb2YgY3VycmVudCkge1xuICAgICAgICBpZiAocHJldlBlbmRpbmcuaGFzKGlkKSkgY29udGludWVcbiAgICAgICAgY29uc3Qgcm93ID0gc3RhdGUuYnlJZFtpZF1cbiAgICAgICAgaWYgKHJvdyAhPT0gdW5kZWZpbmVkICYmIHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICAgIGNvbnN0IGxhYmVsID0gcm93Py5kaXNwbGF5VGl0bGUgPz8gcm93Py50aXRsZSA/PyBpZFxuICAgICAgICBxdWV1ZU5vdGlmaWNhdGlvbigncGVuZGluZycsIGlkLCBsYWJlbCwgcGVuZGluZ1R5cGVMYWJlbChyb3c/LnBlbmRpbmdJbnRlcmFjdGlvbikpXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgcHJldlBlbmRpbmcpIGlmICghY3VycmVudC5oYXMoaWQpKSBub3RpZmllZC5kZWxldGUoaWQgKyAnOnBlbmRpbmcnKVxuICAgIHByZXZQZW5kaW5nID0gY3VycmVudFxuICAgIHBlbmRpbmdTZWVuID0gdHJ1ZVxuICB9XG5cbiAgLyoqIFNlbGYtdHJhY2tlZCBydW5uaW5nIGVkZ2U6IGZpbGxzIHRoZSBnYXAgZm9yIHRoZSBzZXNzaW9uIGJlaW5nIHZpZXdlZC4gKi9cbiAgY29uc3QgcHJldlJ1bm5pbmcgPSBuZXcgTWFwKClcbiAgY29uc3QgZmluaXNoZWRXaGlsZUhpZGRlbiA9IG5ldyBTZXQoKVxuICBmdW5jdGlvbiB0cmFja0VkZ2VzKHN0YXRlKSB7XG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBjb25zdCBwcmV2ID0gcHJldlJ1bm5pbmcuZ2V0KHJvdy5pZClcbiAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHsgcHJldlJ1bm5pbmcuc2V0KHJvdy5pZCwgcm93LnJ1bm5pbmcpOyBjb250aW51ZSB9XG4gICAgICBpZiAoIXByZXYgJiYgcm93LnJ1bm5pbmcpIHJ1blN0YXJ0ZWRBdC5zZXQocm93LmlkLCBEYXRlLm5vdygpKVxuICAgICAgaWYgKHByZXYgJiYgIXJvdy5ydW5uaW5nKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHJ1blN0YXJ0ZWRBdC5nZXQocm93LmlkKVxuICAgICAgICBjb25zdCBlbGFwc2VkID0gc3RhcnRlZEF0ID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBEYXRlLm5vdygpIC0gc3RhcnRlZEF0XG4gICAgICAgIHJ1blN0YXJ0ZWRBdC5kZWxldGUocm93LmlkKVxuICAgICAgICBpZiAoZWxhcHNlZCAhPT0gdW5kZWZpbmVkKSBsYXN0UnVuTXMuc2V0KHJvdy5pZCwgZWxhcHNlZClcbiAgICAgICAgaWYgKHJvdy5pZCA9PT0gc3RhdGUuY3VycmVudCAmJiAhaXNGb3JlZ3JvdW5kKCkpIGZpbmlzaGVkV2hpbGVIaWRkZW4uYWRkKHJvdy5pZClcbiAgICAgICAgaWYgKHJvdy5pZCA9PT0gc3RhdGUuY3VycmVudCkgcXVldWVOb3RpZmljYXRpb24oJ2RvbmUnLCByb3cuaWQsIHJvdy5kaXNwbGF5VGl0bGUgPz8gcm93LnRpdGxlID8/IHJvdy5pZCwgdW5kZWZpbmVkLCBlbGFwc2VkKVxuICAgICAgfSBlbHNlIGlmIChyb3cucnVubmluZykgZmluaXNoZWRXaGlsZUhpZGRlbi5kZWxldGUocm93LmlkKVxuICAgICAgcHJldlJ1bm5pbmcuc2V0KHJvdy5pZCwgcm93LnJ1bm5pbmcpXG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgWy4uLnByZXZSdW5uaW5nLmtleXMoKV0pIHtcbiAgICAgIGlmICghKGlkIGluIHN0YXRlLmJ5SWQpKSB7IHByZXZSdW5uaW5nLmRlbGV0ZShpZCk7IGZpbmlzaGVkV2hpbGVIaWRkZW4uZGVsZXRlKGlkKTsgcnVuU3RhcnRlZEF0LmRlbGV0ZShpZCk7IGxhc3RSdW5Ncy5kZWxldGUoaWQpIH1cbiAgICB9XG4gIH1cblxuICAvKiogQmFjayBpbiB0aGUgZm9yZWdyb3VuZDogdGhlIHZpZXdlZCBzZXNzaW9uJ3MgZ3JlZW4gbGlnaHQgY2xlYXJzLiAqL1xuICBjb25zdCBvbkZvcmVncm91bmQgPSAoKSA9PiB7XG4gICAgaWYgKCFpc0ZvcmVncm91bmQoKSkgcmV0dXJuXG4gICAgaWYgKGZpbmlzaGVkV2hpbGVIaWRkZW4uc2l6ZSA+IDApIHsgZmluaXNoZWRXaGlsZUhpZGRlbi5jbGVhcigpOyBzeW5jKCkgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFnZ3JlZ2F0ZSB0YWIgc3RhdGUgb3ZlciBtYWluIHNlc3Npb25zLiBQcmlvcml0eTogYW1iZXIgKHNvbWV0aGluZyB3YWl0c1xuICAgKiBmb3IgeW91KSA+IHdvcmtpbmcgKGEgc2Vzc2lvbiBpcyBnZW5lcmF0aW5nKSA+IGdyZWVuICh1bnNlZW4gY29tcGxldGlvbilcbiAgICogPiBpZGxlLiBSZXR1cm5zIGAnb2ZmJ2Agd2hlbiB0aGUgc3RhdHVzIGxpZ2h0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gY3VycmVudEtpbmQoc3RhdGUpIHtcbiAgICBpZiAoIXJlYWRDb25maWcoKS5jb2xvcnNFbmFibGVkKSByZXR1cm4gJ29mZidcbiAgICBsZXQgZ3JlZW4gPSBmYWxzZVxuICAgIGxldCB3b3JraW5nID0gZmFsc2VcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKHN0YXRlLmJ5SWQpKSB7XG4gICAgICBpZiAocm93Lm9yaWdpbiA9PT0gJ3N1YmFnZW50JykgY29udGludWVcbiAgICAgIGlmIChyb3cucGVuZGluZ0ludGVyYWN0aW9uICE9PSB1bmRlZmluZWQpIHJldHVybiAnYW1iZXInXG4gICAgICBpZiAocm93LnJ1bm5pbmcgPT09IHRydWUpIHdvcmtpbmcgPSB0cnVlXG4gICAgICBpZiAocm93LmNvbXBsZXRlZCA9PT0gdHJ1ZSB8fCBmaW5pc2hlZFdoaWxlSGlkZGVuLmhhcyhyb3cuaWQpKSBncmVlbiA9IHRydWVcbiAgICB9XG4gICAgaWYgKHdvcmtpbmcpIHJldHVybiAnd29ya2luZydcbiAgICBpZiAoZ3JlZW4pIHJldHVybiAnZ3JlZW4nXG4gICAgcmV0dXJuICdpZGxlJ1xuICB9XG5cbiAgLyoqIEFwcGx5IG9uZSB0YWIgc3RhdGUgdG8gdGhlIGZhdmljb24uICovXG4gIGZ1bmN0aW9uIGFwcGx5S2luZChraW5kKSB7XG4gICAgY29uc3QgY29uZmlnID0gcmVhZENvbmZpZygpXG4gICAgaWYgKGtpbmQgPT09ICdvZmYnKSB7IHJlc3RvcmUoKTsgcmV0dXJuIH1cbiAgICBjb25zdCBocmVmID0ga2luZCA9PT0gJ2FtYmVyJ1xuICAgICAgPyB1cmkoY29uZmlnLmFtYmVyKVxuICAgICAgOiBraW5kID09PSAnd29ya2luZydcbiAgICAgICAgPyB1cmkoY29uZmlnLndvcmtpbmcpXG4gICAgICAgIDoga2luZCA9PT0gJ2dyZWVuJ1xuICAgICAgICAgID8gdXJpKGNvbmZpZy5ncmVlbilcbiAgICAgICAgICA6IChjb25maWcuYmxhY2sgPyB1cmkoY29uZmlnLmJsYWNrKSA6IG51bGwpXG4gICAgaWYgKGhyZWYgPT09IG51bGwpIHJlc3RvcmUoKVxuICAgIGVsc2UgaWYgKGFwcGxpZWQgIT09IGhyZWYpIHsgcGFpbnQoaHJlZik7IGFwcGxpZWQgPSBocmVmIH1cbiAgfVxuXG4gIC8qKiBNZXJnZSB0aGUgc2Vzc2lvbiByb3dzIHdpdGggdGhlIG9mZmljaWFsIHN0YXR1cyBzdG9yZSB3aGVuIGF2YWlsYWJsZS4gKi9cbiAgZnVuY3Rpb24gYnVpbGRTdGF0ZSgpIHtcbiAgICBjb25zdCBsaXN0U3RhdGUgPSBsaXN0LmdldFNuYXBzaG90KClcbiAgICBjb25zdCBzdGF0dXMgPSBzdGF0dXNTb3VyY2U/LmdldFNuYXBzaG90KClcbiAgICBsZXQgY3VycmVudCA9IGxpc3RTdGF0ZS5jdXJyZW50XG4gICAgY29uc3QgYnlJZCA9IHt9XG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhsaXN0U3RhdGUuYnlJZCkpIHtcbiAgICAgIGNvbnN0IHMgPSBzdGF0dXM/LmdldChyb3cuaWQpXG4gICAgICBpZiAoKHJvdy5yZXRhaW5lZEJ5Py5tYWluVmlldyA/PyAwKSA+IDApIGN1cnJlbnQgPSByb3cuaWRcbiAgICAgIGJ5SWRbcm93LmlkXSA9IHtcbiAgICAgICAgLi4ucm93LFxuICAgICAgICBydW5uaW5nOiBzPy5ydW5uaW5nID8/IHJvdy5ydW5uaW5nLFxuICAgICAgICBjb21wbGV0ZWQ6IHM/LmNvbXBsZXRpb25VbnJlYWQgPz8gcm93LmNvbXBsZXRlZCA9PT0gdHJ1ZSxcbiAgICAgICAgcGVuZGluZ0ludGVyYWN0aW9uOiBzPy5wZW5kaW5nSW50ZXJhY3Rpb24gPz8gcm93LnBlbmRpbmdJbnRlcmFjdGlvbixcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgLi4ubGlzdFN0YXRlLCBieUlkLCBjdXJyZW50IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmMoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBidWlsZFN0YXRlKClcbiAgICB0cmFja0VkZ2VzKHN0YXRlKVxuICAgIGRldGVjdFRyYW5zaXRpb25zKHN0YXRlKVxuICAgIGFwcGx5S2luZChjdXJyZW50S2luZChzdGF0ZSkpXG4gIH1cblxuICBjb25zdCB1bnN1YnNjcmliZUxpc3QgPSBsaXN0LnN1YnNjcmliZShzeW5jKVxuICBjb25zdCB1bnN1YnNjcmliZUZvcm0gPSBmb3JtLnN1YnNjcmliZShzeW5jKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25Gb3JlZ3JvdW5kKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvcmVncm91bmQpXG4gIHN5bmMoKVxuXG4gIC8vIE9wdGlvbmFsIGNoYW5uZWw6IHRoZSBvZmZpY2lhbCBzdGF0dXMgc3RvcmUgKHByZXNlbnQgb24gMC4xLjcrKS5cbiAgY3R4LmluamVjdChbJ3VpU2Vzc2lvbiddLCAodWlDdHgpID0+IHtcbiAgICBzdGF0dXNTb3VyY2UgPSB1aUN0eC51aVNlc3Npb24uc2Vzc2lvblN0YXR1c1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RhdHVzU291cmNlLnN1YnNjcmliZShzeW5jKVxuICAgIHN5bmMoKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZSgpXG4gICAgICBzdGF0dXNTb3VyY2UgPSB1bmRlZmluZWRcbiAgICAgIHN5bmMoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmIChub3RpZnlUaW1lciAhPT0gdW5kZWZpbmVkKSBjbGVhclRpbWVvdXQobm90aWZ5VGltZXIpXG4gICAgbm90aWZ5UXVldWUuY2xlYXIoKVxuICAgIHN0b3BTb3VuZCgpXG4gICAgaWNvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIHVuc3Vic2NyaWJlTGlzdCgpXG4gICAgdW5zdWJzY3JpYmVGb3JtKClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25Gb3JlZ3JvdW5kKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9yZWdyb3VuZClcbiAgICByZXN0b3JlKClcbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxtQkFBa0I7QUFDbEIsc0NBQWlEOzs7QUNFMUMsSUFBTSxpQkFBaUI7QUFBQSxFQUM1QixJQUFJO0FBQUEsRUFDSixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixnQkFBZ0I7QUFBQSxFQUNoQixrQkFBa0I7QUFDcEI7QUFRTyxTQUFTLGdCQUFnQixZQUFZLGNBQWM7QUFDeEQsU0FBTztBQUFBLElBQ0wsSUFBSSxlQUFlO0FBQUEsSUFDbkIsU0FBUyxlQUFlO0FBQUEsSUFDeEIsV0FBVyxlQUFlO0FBQUEsSUFDMUIsUUFBUSxlQUFlO0FBQUEsSUFDdkIsWUFBWSxFQUFFLE1BQU0sU0FBUztBQUFBLElBQzdCLFlBQVk7QUFBQSxN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
    return module.exports;
  },
});
