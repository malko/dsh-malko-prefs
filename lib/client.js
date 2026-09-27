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
      notifyAutoHide: value.notifyAutoHide !== false,
      volume: normalizeVolume(value.notifyVolume ?? 0.6),
      doneSound: typeof value.notifyDoneSound === "string" ? value.notifyDoneSound : SOUND_NONE,
      pendingSound: typeof value.notifyPendingSound === "string" ? value.notifyPendingSound : SOUND_NONE
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
    stopSound();
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
      switchField("notifyAutoHide", "notifyAutoHide", "notifyAutoHideHint", true)
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NsaWVudC50cyIsICJzcmMvcmVtb3RlLnRzIiwgInNyYy93aGFsZS50cyIsICJzcmMvbm90aWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIGRzaC1tYWxrby1wcmVmcyBcdTIwMTQgYnJvd3NlciBoYWxmLlxuICpcbiAqIE9uZSBzZXR0aW5ncyBzZWN0aW9uIHdpdGggdGhyZWUgc3ViLXBhbmVsczogY29udGV4dCBjb21wYWN0aW9uLCBsbGFtYS5jcHBcbiAqIG1vZGVsIGVucmljaG1lbnQsIGFuZCBub3RpZmljYXRpb25zLiBSZWFkcyBhbmQgd3JpdGVzIHRoZSBgbWFsa28tcHJlZnNgXG4gKiBjb25maWcgZm9ybSwgcmVhZHMgdGhlIGBsbG0tcGktYWlgIGZvcm0gdG8gcG9wdWxhdGUgdGhlIG1vZGVsIHBpY2tlcnMsIGFuZFxuICogcnVucyB0aGUgdGFiIHN0YXR1cyBsaWdodCArIGJyb3dzZXIgbm90aWZpY2F0aW9ucyAoc2VlIGAuL25vdGlmeS50c2ApLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIFNlZ21lbnRlZENvbnRyb2wsIFN3aXRjaCB9IGZyb20gJ0BkZWVwc2Vlay1haS9kc2gtY2xpZW50LXVpLXByaW1pdGl2ZXMnXG5pbXBvcnQgeyBwcm9iZUludm9jYXRpb24gfSBmcm9tICcuL3JlbW90ZS50cydcbmltcG9ydCB7XG4gIEJVSUxUSU5fU09VTkRTLFxuICBMT0NBTEVfTlMsXG4gIFNPVU5EX05PTkUsXG4gIFNPVU5EX1BBQ0tTLFxuICBjdXJyZW50Tm90aWZpY2F0aW9uUGVybWlzc2lvbixcbiAgcGFja1NvdW5kSWRzLFxuICBwbGF5U291bmQsXG4gIHByaW1lU291bmQsXG4gIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uLFxuICBzdGFydFN0YXR1c0xpZ2h0LFxufSBmcm9tICcuL25vdGlmeS50cydcblxuZXhwb3J0IGNvbnN0IG5hbWUgPSAnZHNoLW1hbGtvLXByZWZzJ1xuZXhwb3J0IGNvbnN0IGluamVjdCA9IFsnc2Vzc2lvbnMnLCAnc2xvdHMnLCAnbG9jYWxlJywgJ2NvbmZpZ0Zvcm1zJywgJ3JlbW90ZSddXG5cbmNvbnN0IE5TID0gJ21hbGtvLXByZWZzJ1xuY29uc3QgTU9ERUxfTlMgPSAnbGxtLXBpLWFpJ1xuY29uc3QgU0xPVCA9ICdzZXR0aW5ncy5zZWN0aW9uJ1xuY29uc3QgVEFCU19JRCA9ICdtYWxrby1wcmVmcy10YWJzJ1xuXG4vKiogYCNSUkdHQkJgIGNvbG91ciBsaXRlcmFsLiAqL1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuXG4vKiogU3RyaWN0LWNvZGVjIHN0dWI6IHRoZSBicm93c2VyIG5ldmVyIGRlY29kZXMgaXRzIG93biBhcmd1bWVudHMuICovXG5jb25zdCBpZGVudGl0eVNjaGVtYSA9ICgpID0+ICh7IHBhcnNlOiAodmFsdWUpID0+IHZhbHVlIH0pXG5cbi8qKiBCcm93c2VyIGNvbnRyaWJ1dGlvbiBtb3VudGVkIHRocm91Z2ggYGN0eC5yZW1vdGUuJG1vdW50KClgLiAqL1xuY29uc3QgUFJPQkVfUkVNT1RFID0ge1xuICBwYWNrYWdlOiAnZHNoLW1hbGtvLXByZWZzJyxcbiAgZGVzY3JpcHRvcnM6IFtwcm9iZUludm9jYXRpb24oaWRlbnRpdHlTY2hlbWEsIGlkZW50aXR5U2NoZW1hKV0sXG59XG5cbmNvbnN0IGVsID0gUmVhY3QuY3JlYXRlRWxlbWVudFxuXG5jb25zdCBlbiA9IHtcbiAgdGl0bGU6IFwiTWFsa28ncyBwcmVmc1wiLFxuICBpbnRybzogJ1R1bmFibGUgY29tcGFuaW9uIHRvIHRoZSBvZmZpY2lhbCBjb21wYWN0aW9uIGVuZ2luZS4nLFxuICB0YWJDb21wYWN0aW9uOiAnQ29udGV4dCBjb21wYWN0aW9uJyxcbiAgdGFiTW9kZWxzOiAnbGxhbWEuY3BwIG1vZGVscycsXG4gIHRhYk5vdGlmaWNhdGlvbnM6ICdOb3RpZmljYXRpb25zJyxcbiAgLy8gQ29tcGFjdGlvblxuICB0aHJlc2hvbGRUaXRsZTogJ0NvbXBhY3Rpb24gdGhyZXNob2xkJyxcbiAgdGhyZXNob2xkVG9rZW5zOiAnVGhyZXNob2xkICh0b2tlbnMpJyxcbiAgdGhyZXNob2xkVG9rZW5zSGludDogJ0Fic29sdXRlIHByZXNzdXJlIGluIHRva2VucywgZS5nLiAxMzBrIG9yIDEzMEsuIEVtcHR5LzAgPSB1c2UgdGhlIHJhdGlvIGJlbG93LicsXG4gIGNvbnRleHRXaW5kb3c6ICdDb250ZXh0IHdpbmRvdyAodG9rZW5zKScsXG4gIGNvbnRleHRXaW5kb3dIaW50OiAnV2luZG93IHRoZSBhYnNvbHV0ZSB0aHJlc2hvbGQgaXMgZXhwcmVzc2VkIGFnYWluc3QgKGUuZy4gMjAwaykuIDAgPSBkZXJpdmUgbm90aGluZyAocmF0aW8gb25seSkuJyxcbiAgdGhyZXNob2xkUmF0aW86ICdUaHJlc2hvbGQgcmF0aW8nLFxuICB0aHJlc2hvbGRSYXRpb0hpbnQ6ICdVc2VkIHdoZW4gdGhlIGFic29sdXRlIHRocmVzaG9sZCBpcyBlbXB0eSAoMC44ID0gODAlIG9mIHRoZSB3aW5kb3cpLicsXG4gIGhlYWRyb29tOiAnSGVhZHJvb20gKHRva2VucyknLFxuICBoZWFkcm9vbUhpbnQ6ICdSZXNlcnZlZCBvbiB0b3Agb2YgdGhlIG91dHB1dCBjYXAuIFRoZSBvZmZpY2lhbCBkZWZhdWx0ICg2NTUzNikgY2FwcyB0aGUgdHJpZ2dlciB3ZWxsIGJlbG93IDgwJS4nLFxuICByZXRlbnRpb25UaXRsZTogJ1JldGVudGlvbicsXG4gIHJldGFpblRva2VuczogJ0tlZXAgbGFzdCAodG9rZW5zKScsXG4gIHJldGFpblRva2Vuc0hpbnQ6ICdWZXJiYXRpbSByZWNlbnQtY29udGV4dCBidWRnZXQsIGUuZy4gMzJrLiBFbXB0eS8wID0gdXNlIHRoZSByYXRpbyBiZWxvdy4nLFxuICByZXRhaW5SYXRpbzogJ0tlZXAgcmF0aW8nLFxuICBiZWhhdmlvdXJUaXRsZTogJ0JlaGF2aW91cicsXG4gIGF1dG86ICdBdXRvbWF0aWMgY29tcGFjdGlvbicsXG4gIGF1dG9IaW50OiAnT2ZmaWNpYWwgYmV0d2Vlbi1zdGVwIHByZXNzdXJlIGNvbXBhY3Rpb24gYW5kIGNvbnRleHQtb3ZlcmZsb3cgcmVjb3ZlcnkuJyxcbiAgdHVybkVuZDogJ0NvbXBhY3QgYXQgZW5kIG9mIHR1cm4nLFxuICB0dXJuRW5kSGludDogJ1J1bnMgb25lIG1vcmUgY29tcGFjdGlvbiB3aGVuIHRoZSBhZ2VudCBnb2VzIGlkbGUuJyxcbiAgc3VtbWFyaXphdGlvblRpdGxlOiAnU3VtbWFyaXphdGlvbicsXG4gIHN1bW1hcml6YXRpb25Nb2RlOiAnTW9kZWwnLFxuICBtb2RlU2Vzc2lvbjogJ1Nlc3Npb24gbW9kZWwnLFxuICBtb2RlQ3VzdG9tOiAnQ3VzdG9tIG1vZGVsJyxcbiAgcHJvdmlkZXI6ICdQcm92aWRlcicsXG4gIG1vZGVsOiAnTW9kZWwnLFxuICByZWFzb25pbmc6ICdSZWFzb25pbmcnLFxuICByZWFzb25pbmdEZWZhdWx0OiAnRGVmYXVsdCcsXG4gIHJlYXNvbmluZ09mZjogJ09mZicsXG4gIG1heFRva2VuczogJ1N1bW1hcnkgb3V0cHV0IGNhcCAodG9rZW5zKScsXG4gIGFkdmFuY2VkVGl0bGU6ICdBZHZhbmNlZCcsXG4gIGNvbXBhY3Rpb25SZXRyaWVzOiAnRXh0cmEgY29tcGFjdGlvbiBhdHRlbXB0cycsXG4gIG1heE92ZXJmbG93UmV0cmllczogJ092ZXJmbG93IHJlY292ZXJ5IGF0dGVtcHRzJyxcbiAgLy8gTW9kZWxzXG4gIG1vZGVsc1RpdGxlOiAnbGxhbWEuY3BwIG1vZGVscycsXG4gIG1vZGVsc0ludHJvOiAnUmVhZCBjb250ZXh0IHdpbmRvdyBhbmQgaW5wdXQgbW9kYWxpdGllcyBmcm9tIHRoZSBzZXJ2ZXIgYW5kIGZpbGwgdGhlIG1vZGVsIGVudHJpZXMgb2YgYSBwaS1haSBwcm92aWRlci4nLFxuICBlbnJpY2g6ICdFbnJpY2ggZnJvbSBzZXJ2ZXInLFxuICBlbnJpY2hpbmc6ICdFbnJpY2hpbmdcXHUyMDI2JyxcbiAgbm9CYXNlVXJsOiAnTm8gZW5kcG9pbnQgY29uZmlndXJlZCBmb3IgdGhpcyBwcm92aWRlci4nLFxuICBlbnJpY2hlZDogJ0VucmljaGVkIHtjb3VudH0gbW9kZWwocykuJyxcbiAgLy8gTm90aWZpY2F0aW9uc1xuICBjb2xvcnNHcm91cDogJ1RhYiBzdGF0dXMgbGlnaHQnLFxuICBjb2xvcnNJbnRybzogJ1RoZSBicm93c2VyIHRhYiBpY29uIHJlZmxlY3RzIHRoZSBzZXNzaW9uIHN0YXRlOiBncmVlbiA9IGZpbmlzaGVkLCBhbWJlciA9IHdhaXRpbmcgZm9yIHlvdS4nLFxuICBjb2xvcnNFbmFibGVkOiAnQ29sb3IgdGhlIHRhYiBpY29uJyxcbiAgY29sb3JzRW5hYmxlZEhpbnQ6ICdPZmYga2VlcHMgdGhlIG9mZmljaWFsIGZhdmljb24gYXQgYWxsIHRpbWVzLicsXG4gIGdyZWVuTGFiZWw6ICdGaW5pc2hlZCcsXG4gIGFtYmVyTGFiZWw6ICdXYWl0aW5nIChxdWVzdGlvbi9hcHByb3ZhbCknLFxuICB3b3JraW5nTGFiZWw6ICdXb3JraW5nJyxcbiAgd29ya2luZ0hpbnQ6ICdQdWxzZXMgd2hpbGUgYSBzZXNzaW9uIGlzIGdlbmVyYXRpbmcuJyxcbiAgYmxhY2tMYWJlbDogJ0lkbGUgY29sb3InLFxuICBibGFja0hpbnQ6ICdMZWF2ZSBlbXB0eSB0byBrZWVwIHRoZSBvZmZpY2lhbCBmYXZpY29uIHdoZW4gaWRsZS4nLFxuICBjb2xvclJlc2V0OiAnQ2xlYXInLFxuICBjb2xvclVuc2V0OiAnb2ZmaWNpYWwnLFxuICBub3RpZnlHcm91cDogJ1N5c3RlbSBub3RpZmljYXRpb25zJyxcbiAgbm90aWZ5SW50cm86ICdSYWlzZSBhIGJyb3dzZXIgbm90aWZpY2F0aW9uIHdoZW4gYSBzZXNzaW9uIGZpbmlzaGVzIG9yIGEgcXVlc3Rpb24vYXBwcm92YWwgd2FpdHMgZm9yIHlvdS4nLFxuICBub3RpZnlFbmFibGVkOiAnRW5hYmxlIG5vdGlmaWNhdGlvbnMnLFxuICBub3RpZnlFbmFibGVkSGludDogJ1RoZSBicm93c2VyIGFza3MgZm9yIHBlcm1pc3Npb24gdGhlIGZpcnN0IHRpbWUgeW91IGVuYWJsZSB0aGlzLicsXG4gIG5vdGlmeUZvcmVncm91bmQ6ICdOb3RpZnkgaW4gdGhlIGZvcmVncm91bmQnLFxuICBub3RpZnlGb3JlZ3JvdW5kSGludDogJ0Fsc28gbm90aWZ5IHdoaWxlIHRoZSB0YWIgaXMgdmlzaWJsZSBhbmQgZm9jdXNlZC4nLFxuICBub3RpZnlBdXRvSGlkZTogJ0tlZXAgb24gc2NyZWVuJyxcbiAgbm90aWZ5QXV0b0hpZGVIaW50OiAnT246IHRoZSBub3RpZmljYXRpb24gc3RheXMgdW50aWwgeW91IGRpc21pc3MgaXQuJyxcbiAgc291bmRHcm91cDogJ1NvdW5kJyxcbiAgc291bmRJbnRybzogJ09wdGlvbmFsIG5vdGlmaWNhdGlvbiBzb3VuZC4gRGVmYXVsdCBpcyBzaWxlbnQuJyxcbiAgbm90aWZ5Vm9sdW1lOiAnVm9sdW1lJyxcbiAgc291bmREb25lOiAnT24gc2Vzc2lvbiBmaW5pc2hlZCcsXG4gIHNvdW5kUGVuZGluZzogJ1doaWxlIHdhaXRpbmcgZm9yIHlvdScsXG4gIHNvdW5kTm9Tb3VuZDogJ05vIHNvdW5kJyxcbiAgc291bmRQYWNrQnVpbHRpbjogJ0J1aWx0LWluJyxcbiAgc291bmRCdWlsdGluVXA6ICdDaGltZSBVcCcsXG4gIHNvdW5kQnVpbHRpbkRvd246ICdDaGltZSBEb3duJyxcbiAgcGVybWlzc2lvbkRlbmllZDogJ0Jsb2NrZWQgYnkgdGhlIGJyb3dzZXIgXFx1MjAxNCByZS1lbmFibGUgbm90aWZpY2F0aW9ucyBpbiB0aGUgc2l0ZSBzZXR0aW5ncy4nLFxuICBwZXJtaXNzaW9uVW5zdXBwb3J0ZWQ6ICdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBzeXN0ZW0gbm90aWZpY2F0aW9ucy4nLFxuICBub3RpZnlEb25lVGl0bGU6ICdTZXNzaW9uIGZpbmlzaGVkJyxcbiAgbm90aWZ5UGVuZGluZ1RpdGxlOiAnU29tZXRoaW5nIGF3YWl0cyB5b3UnLFxuICBub3RpZnlEdXJhdGlvbjogJ3R1cm4gdG9vayB7ZHVyYXRpb259JyxcbiAgZHVyYXRpb25TZWNvbmRzOiAne3NlY29uZHN9cycsXG4gIGR1cmF0aW9uTWludXRlczogJ3ttaW51dGVzfW17c2Vjb25kc31zJyxcbiAgcGVuZGluZ0tpbmRBcHByb3ZhbDogJ0FwcHJvdmFsIG5lZWRlZCcsXG4gIHBlbmRpbmdLaW5kUXVlc3Rpb246ICdRdWVzdGlvbicsXG4gIHBlbmRpbmdLaW5kUGxhblJldmlldzogJ1BsYW4gcmV2aWV3JyxcbiAgcGVuZGluZ0FwcHJvdmFsVG9vbDogJ0FwcHJvdmFsIFxcdTAwYjcge3Rvb2x9JyxcbiAgcGVuZGluZ1F1ZXN0aW9uQ2hvb3NlOiAnQ2hvb3NlIGFuIG9wdGlvbicsXG4gIHBlbmRpbmdRdWVzdGlvbk11bHRpOiAnQ2hvb3NlIG9wdGlvbnMnLFxuICBwZW5kaW5nUXVlc3Rpb25GaWxsOiAnVHlwZSBhbiBhbnN3ZXInLFxuICBwZW5kaW5nUXVlc3Rpb25CYXRjaDogJ3tjb3VudH0gcXVlc3Rpb25zJyxcbiAgLy8gU2hhcmVkXG4gIHNhdmU6ICdTYXZlJyxcbiAgc2F2ZWQ6ICdTYXZlZC4nLFxuICBpbnZhbGlkVG9rZW46ICdFbnRlciBhIG51bWJlciBvciBhIGsvTSBzdWZmaXggdmFsdWUgKGUuZy4gMTMwaykuJyxcbiAgaW52YWxpZEhleDogJ0NvbG9yIG11c3QgYmUgI1JSR0dCQi4nLFxuICBlcnJvclByZWZpeDogJ0Vycm9yOiAnLFxuICB1bmF2YWlsYWJsZTogJ1RoaXMgc2V0dGluZyBpcyBub3QgYXZhaWxhYmxlIGZyb20gdGhpcyBjbGllbnQuJyxcbiAgbG9hZGluZzogJ0xvYWRpbmdcXHUyMDI2Jyxcbn1cblxuY29uc3QgemggPSB7XG4gIHRpdGxlOiAnTWFsa28gXFx1NTA0ZlxcdTU5N2QnLFxuICBpbnRybzogJ1xcdTViOThcXHU2NWI5XFx1NTM4YlxcdTdmMjlcXHU1ZjE1XFx1NjRjZVxcdTc2ODRcXHU1M2VmXFx1OGMwM1xcdTRmMzRcXHU3NTFmXFx1MzAwMicsXG4gIHRhYkNvbXBhY3Rpb246ICdcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU1MzhiXFx1N2YyOScsXG4gIHRhYk1vZGVsczogJ2xsYW1hLmNwcCBcXHU2YTIxXFx1NTc4YicsXG4gIHRhYk5vdGlmaWNhdGlvbnM6ICdcXHU5MDFhXFx1NzdlNScsXG4gIHRocmVzaG9sZFRpdGxlOiAnXFx1NTM4YlxcdTdmMjlcXHU5NjAwXFx1NTAzYycsXG4gIHRocmVzaG9sZFRva2VuczogJ1xcdTk2MDBcXHU1MDNjXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICB0aHJlc2hvbGRUb2tlbnNIaW50OiAnXFx1N2VkZFxcdTViZjkgdG9rZW4gXFx1OTYwMFxcdTUwM2NcXHVmZjBjXFx1NTk4MiAxMzBrXFx1MzAwMlxcdTc1NTlcXHU3YTdhLzAgPSBcXHU3NTI4XFx1NGUwYlxcdTY1YjlcXHU2YmQ0XFx1NGY4YlxcdTMwMDInLFxuICBjb250ZXh0V2luZG93OiAnXFx1NGUwYVxcdTRlMGJcXHU2NTg3XFx1N2E5N1xcdTUzZTNcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIGNvbnRleHRXaW5kb3dIaW50OiAnXFx1N2VkZFxcdTViZjlcXHU5NjAwXFx1NTAzY1xcdTYyNDBcXHU0ZjlkXFx1NjM2ZVxcdTc2ODRcXHU3YTk3XFx1NTNlM1xcdWZmMDhcXHU1OTgyIDIwMGtcXHVmZjA5XFx1MzAwMjAgPSBcXHU1M2VhXFx1NzUyOFxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIHRocmVzaG9sZFJhdGlvOiAnXFx1OTYwMFxcdTUwM2NcXHU2YmQ0XFx1NGY4YicsXG4gIHRocmVzaG9sZFJhdGlvSGludDogJ1xcdTVmNTNcXHU3ZWRkXFx1NWJmOVxcdTk2MDBcXHU1MDNjXFx1NGUzYVxcdTdhN2FcXHU2NWY2XFx1NGY3ZlxcdTc1MjhcXHVmZjA4MC44ID0gXFx1N2E5N1xcdTUzZTNcXHU3Njg0IDgwJVxcdWZmMDlcXHUzMDAyJyxcbiAgaGVhZHJvb206ICdcXHU5ODg0XFx1NzU1OVxcdWZmMDh0b2tlbnNcXHVmZjA5JyxcbiAgaGVhZHJvb21IaW50OiAnXFx1NTcyOFxcdThmOTNcXHU1MWZhXFx1OTg4NFxcdTdiOTdcXHU0ZTRiXFx1NTkxNlxcdTUxOGRcXHU5ODg0XFx1NzU1OVxcdTc2ODRcXHU5MWNmXFx1MzAwMlxcdTViOThcXHU2NWI5XFx1OWVkOFxcdThiYTQgNjU1MzYgXFx1NGYxYVxcdTYyOGFcXHU4OWU2XFx1NTNkMVxcdTcwYjlcXHU2MmM5XFx1NTIzMCA4MCUgXFx1NGVlNVxcdTRlMGJcXHUzMDAyJyxcbiAgcmV0ZW50aW9uVGl0bGU6ICdcXHU0ZmRkXFx1NzU1OScsXG4gIHJldGFpblRva2VuczogJ1xcdTRmZGRcXHU3NTU5XFx1NjcwMFxcdThmZDFcXHVmZjA4dG9rZW5zXFx1ZmYwOScsXG4gIHJldGFpblRva2Vuc0hpbnQ6ICdcXHU5MDEwXFx1NWI1N1xcdTRmZGRcXHU3NTU5XFx1NzY4NFxcdThmZDFcXHU2NzFmXFx1OTg4NFxcdTdiOTdcXHVmZjBjXFx1NTk4MiAzMmtcXHUzMDAyXFx1NzU1OVxcdTdhN2EvMCA9IFxcdTc1MjhcXHU0ZTBiXFx1NjViOVxcdTZiZDRcXHU0ZjhiXFx1MzAwMicsXG4gIHJldGFpblJhdGlvOiAnXFx1NGZkZFxcdTc1NTlcXHU2YmQ0XFx1NGY4YicsXG4gIGJlaGF2aW91clRpdGxlOiAnXFx1ODg0Y1xcdTRlM2EnLFxuICBhdXRvOiAnXFx1ODFlYVxcdTUyYThcXHU1MzhiXFx1N2YyOScsXG4gIGF1dG9IaW50OiAnXFx1NWI5OFxcdTY1YjlcXHU3Njg0XFx1NmI2NVxcdTk1ZjRcXHU1MzhiXFx1NTI5YlxcdTUzOGJcXHU3ZjI5XFx1NGUwZVxcdTRlMGFcXHU0ZTBiXFx1NjU4N1xcdTZlYTJcXHU1MWZhXFx1NjA2MlxcdTU5MGRcXHUzMDAyJyxcbiAgdHVybkVuZDogJ1xcdThmNmVcXHU2NzJiXFx1NTM4YlxcdTdmMjknLFxuICB0dXJuRW5kSGludDogJ1xcdTRlZTNcXHU3NDA2XFx1OGY2Y1xcdTRlM2EgaWRsZSBcXHU2NWY2XFx1NTE4ZFxcdTUzOGJcXHU3ZjI5XFx1NGUwMFxcdTZiMjFcXHUzMDAyJyxcbiAgc3VtbWFyaXphdGlvblRpdGxlOiAnXFx1NjQ1OFxcdTg5ODEnLFxuICBzdW1tYXJpemF0aW9uTW9kZTogJ1xcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZVNlc3Npb246ICdcXHU0ZjFhXFx1OGJkZFxcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZUN1c3RvbTogJ1xcdTgxZWFcXHU1YjlhXFx1NGU0OVxcdTZhMjFcXHU1NzhiJyxcbiAgcHJvdmlkZXI6ICdcXHU2M2QwXFx1NGY5YlxcdTU1NDYnLFxuICBtb2RlbDogJ1xcdTZhMjFcXHU1NzhiJyxcbiAgcmVhc29uaW5nOiAnXFx1NjAxZFxcdTgwMDNcXHU3ZWE3XFx1NTIyYicsXG4gIHJlYXNvbmluZ0RlZmF1bHQ6ICdcXHU5ZWQ4XFx1OGJhNCcsXG4gIHJlYXNvbmluZ09mZjogJ1xcdTUxNzNcXHU5NWVkJyxcbiAgbWF4VG9rZW5zOiAnXFx1NjQ1OFxcdTg5ODFcXHU4ZjkzXFx1NTFmYVxcdTRlMGFcXHU5NjUwXFx1ZmYwOHRva2Vuc1xcdWZmMDknLFxuICBhZHZhbmNlZFRpdGxlOiAnXFx1OWFkOFxcdTdlYTcnLFxuICBjb21wYWN0aW9uUmV0cmllczogJ1xcdTk4OWRcXHU1OTE2XFx1NTM4YlxcdTdmMjlcXHU1YzFkXFx1OGJkNScsXG4gIG1heE92ZXJmbG93UmV0cmllczogJ1xcdTZlYTJcXHU1MWZhXFx1NjA2MlxcdTU5MGRcXHU1YzFkXFx1OGJkNScsXG4gIG1vZGVsc1RpdGxlOiAnbGxhbWEuY3BwIFxcdTZhMjFcXHU1NzhiJyxcbiAgbW9kZWxzSW50cm86ICdcXHU0ZWNlXFx1NjcwZFxcdTUyYTFcXHU1NjY4XFx1OGJmYlxcdTUzZDZcXHU0ZTBhXFx1NGUwYlxcdTY1ODdcXHU3YTk3XFx1NTNlM1xcdTRlMGVcXHU4ZjkzXFx1NTE2NVxcdTZhMjFcXHU2MDAxXFx1ZmYwY1xcdTVlNzZcXHU1ODZiXFx1NTE0NSBwaS1haSBcXHU2M2QwXFx1NGY5YlxcdTU1NDZcXHU3Njg0XFx1NmEyMVxcdTU3OGJcXHU2NzYxXFx1NzZlZVxcdTMwMDInLFxuICBlbnJpY2g6ICdcXHU0ZWNlXFx1NjcwZFxcdTUyYTFcXHU1NjY4XFx1NWJjY1xcdTUzMTYnLFxuICBlbnJpY2hpbmc6ICdcXHU2YjYzXFx1NTcyOFxcdTViY2NcXHU1MzE2XFx1MjAyNicsXG4gIG5vQmFzZVVybDogJ1xcdThiZTVcXHU2M2QwXFx1NGY5YlxcdTU1NDZcXHU2NzJhXFx1OTE0ZFxcdTdmNmVcXHU3YWVmXFx1NzBiOVxcdTMwMDInLFxuICBlbnJpY2hlZDogJ1xcdTVkZjJcXHU1YmNjXFx1NTMxNiB7Y291bnR9IFxcdTRlMmFcXHU2YTIxXFx1NTc4YlxcdTMwMDInLFxuICBjb2xvcnNHcm91cDogJ1xcdTY4MDdcXHU3YjdlXFx1OTg3NVxcdTcyYjZcXHU2MDAxXFx1NzA2ZicsXG4gIGNvbG9yc0ludHJvOiAnXFx1NjgwN1xcdTdiN2VcXHU5ODc1XFx1NTZmZVxcdTY4MDdcXHU5NjhmXFx1NGYxYVxcdThiZGRcXHU3MmI2XFx1NjAwMVxcdTUzZDhcXHU4MjcyXFx1ZmYxYVxcdTdlZmYgPSBcXHU1ZGYyXFx1NWI4Y1xcdTYyMTBcXHVmZjBjXFx1NzQyNVxcdTczYzAgPSBcXHU3YjQ5XFx1NGY2MFxcdTU5MDRcXHU3NDA2XFx1MzAwMicsXG4gIGNvbG9yc0VuYWJsZWQ6ICdcXHU1NDJmXFx1NzUyOFxcdTU2ZmVcXHU2ODA3XFx1NTNkOFxcdTgyNzInLFxuICBjb2xvcnNFbmFibGVkSGludDogJ1xcdTUxNzNcXHU5NWVkXFx1NTQwZVxcdTU5Y2JcXHU3ZWM4XFx1NGY3ZlxcdTc1MjhcXHU1Yjk4XFx1NjViOVxcdTU2ZmVcXHU2ODA3XFx1MzAwMicsXG4gIGdyZWVuTGFiZWw6ICdcXHU1ZGYyXFx1NWI4Y1xcdTYyMTAnLFxuICBhbWJlckxhYmVsOiAnXFx1NWY4NVxcdTU5MDRcXHU3NDA2XFx1ZmYwOFxcdTYzZDBcXHU5NWVlL1xcdTViYTFcXHU2Mjc5XFx1ZmYwOScsXG4gIHdvcmtpbmdMYWJlbDogJ1xcdTc1MWZcXHU2MjEwXFx1NGUyZCcsXG4gIHdvcmtpbmdIaW50OiAnXFx1NGYxYVxcdThiZGRcXHU3NTFmXFx1NjIxMFxcdTY1ZjZcXHU1NmZlXFx1NjgwN1xcdTU0N2NcXHU1NDM4XFx1NTNkMVxcdTUxNDlcXHUzMDAyJyxcbiAgYmxhY2tMYWJlbDogJ1xcdTllZDhcXHU4YmE0XFx1ODI3MicsXG4gIGJsYWNrSGludDogJ1xcdTc1NTlcXHU3YTdhXFx1NTIxOVxcdTdhN2FcXHU5NWYyXFx1NjVmNlxcdTRmN2ZcXHU3NTI4XFx1NWI5OFxcdTY1YjlcXHU1NmZlXFx1NjgwN1xcdTMwMDInLFxuICBjb2xvclJlc2V0OiAnXFx1NmUwNVxcdTk2NjQnLFxuICBjb2xvclVuc2V0OiAnXFx1NWI5OFxcdTY1YjknLFxuICBub3RpZnlHcm91cDogJ1xcdTdjZmJcXHU3ZWRmXFx1OTAxYVxcdTc3ZTUnLFxuICBub3RpZnlJbnRybzogJ1xcdTRmMWFcXHU4YmRkXFx1NWI4Y1xcdTYyMTBcXHU2MjE2XFx1NjcwOVxcdTYzZDBcXHU5NWVlL1xcdTViYTFcXHU2Mjc5XFx1N2I0OVxcdTRmNjBcXHU1OTA0XFx1NzQwNlxcdTY1ZjZcXHU1M2QxXFx1OTAwMVxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTkwMWFcXHU3N2U1XFx1MzAwMicsXG4gIG5vdGlmeUVuYWJsZWQ6ICdcXHU1NDJmXFx1NzUyOFxcdTkwMWFcXHU3N2U1JyxcbiAgbm90aWZ5RW5hYmxlZEhpbnQ6ICdcXHU5OTk2XFx1NmIyMVxcdTVmMDBcXHU1NDJmXFx1NjVmNlxcdTZkNGZcXHU4OWM4XFx1NTY2OFxcdTRmMWFcXHU4YmUyXFx1OTVlZVxcdTYzODhcXHU2NzQzXFx1MzAwMicsXG4gIG5vdGlmeUZvcmVncm91bmQ6ICdcXHU1MjRkXFx1NTNmMFxcdTYzZDBcXHU5MTkyJyxcbiAgbm90aWZ5Rm9yZWdyb3VuZEhpbnQ6ICdcXHU2ODA3XFx1N2I3ZVxcdTk4NzVcXHU1M2VmXFx1ODljMVxcdTRlMTRcXHU2NzA5XFx1NzEyNlxcdTcwYjlcXHU2NWY2XFx1NGU1ZlxcdTYzZDBcXHU5MTkyXFx1MzAwMicsXG4gIG5vdGlmeUF1dG9IaWRlOiAnXFx1NWUzOFxcdTlhN2JcXHU1YzRmXFx1NWU1NScsXG4gIG5vdGlmeUF1dG9IaWRlSGludDogJ1xcdTVmMDBcXHU1NDJmXFx1NTQwZVxcdTk3MDBcXHU2MjRiXFx1NTJhOFxcdTUxNzNcXHU5NWVkXFx1NjI0ZFxcdTRmMWFcXHU2ZDg4XFx1NTkzMVxcdTMwMDInLFxuICBzb3VuZEdyb3VwOiAnXFx1NjNkMFxcdTc5M2FcXHU5N2YzJyxcbiAgc291bmRJbnRybzogJ1xcdTUzZWZcXHU5MDA5XFx1NzY4NFxcdTkwMWFcXHU3N2U1XFx1NjNkMFxcdTc5M2FcXHU5N2YzXFx1ZmYwY1xcdTllZDhcXHU4YmE0XFx1NjVlMFxcdTU4ZjBcXHUzMDAyJyxcbiAgbm90aWZ5Vm9sdW1lOiAnXFx1OTdmM1xcdTkxY2YnLFxuICBzb3VuZERvbmU6ICdcXHU0ZjFhXFx1OGJkZFxcdTViOGNcXHU2MjEwXFx1NjVmNicsXG4gIHNvdW5kUGVuZGluZzogJ1xcdTdiNDlcXHU0ZjYwXFx1NTkwNFxcdTc0MDZcXHU2NWY2JyxcbiAgc291bmROb1NvdW5kOiAnXFx1NjVlMFxcdTU4ZjAnLFxuICBzb3VuZFBhY2tCdWlsdGluOiAnXFx1NTE4NVxcdTdmNmUnLFxuICBzb3VuZEJ1aWx0aW5VcDogJ0NoaW1lIFVwJyxcbiAgc291bmRCdWlsdGluRG93bjogJ0NoaW1lIERvd24nLFxuICBwZXJtaXNzaW9uRGVuaWVkOiAnXFx1NWRmMlxcdTg4YWJcXHU2ZDRmXFx1ODljOFxcdTU2NjhcXHU2MmQyXFx1N2VkZFxcdWZmMGNcXHU4YmY3XFx1NTcyOFxcdTdhZDlcXHU3MGI5XFx1OGJiZVxcdTdmNmVcXHU0ZTJkXFx1NjA2MlxcdTU5MGRcXHU5MDFhXFx1NzdlNVxcdTY3NDNcXHU5NjUwXFx1MzAwMicsXG4gIHBlcm1pc3Npb25VbnN1cHBvcnRlZDogJ1xcdTVmNTNcXHU1MjRkXFx1NmQ0ZlxcdTg5YzhcXHU1NjY4XFx1NGUwZFxcdTY1MmZcXHU2MzAxXFx1N2NmYlxcdTdlZGZcXHU5MDFhXFx1NzdlNVxcdTMwMDInLFxuICBub3RpZnlEb25lVGl0bGU6ICdcXHU0ZjFhXFx1OGJkZFxcdTVkZjJcXHU1YjhjXFx1NjIxMCcsXG4gIG5vdGlmeVBlbmRpbmdUaXRsZTogJ1xcdTY3MDlcXHU0ZWE0XFx1NGU5MlxcdTdiNDlcXHU1Zjg1XFx1NTkwNFxcdTc0MDYnLFxuICBub3RpZnlEdXJhdGlvbjogJ1xcdTY3MmNcXHU4ZjZlXFx1NjAzYlxcdTc1MjhcXHU2NWY2IHtkdXJhdGlvbn0nLFxuICBkdXJhdGlvblNlY29uZHM6ICd7c2Vjb25kc31cXHU3OWQyJyxcbiAgZHVyYXRpb25NaW51dGVzOiAne21pbnV0ZXN9XFx1NTIwNntzZWNvbmRzfVxcdTc5ZDInLFxuICBwZW5kaW5nS2luZEFwcHJvdmFsOiAnXFx1NWY4NVxcdTViYTFcXHU2Mjc5JyxcbiAgcGVuZGluZ0tpbmRRdWVzdGlvbjogJ1xcdTU0MTFcXHU0ZjYwXFx1NjNkMFxcdTk1ZWUnLFxuICBwZW5kaW5nS2luZFBsYW5SZXZpZXc6ICdcXHU4YmExXFx1NTIxMlxcdTVmODVcXHU1YmExXFx1NjgzOCcsXG4gIHBlbmRpbmdBcHByb3ZhbFRvb2w6ICdcXHU1Zjg1XFx1NWJhMVxcdTYyNzkgXFx1MDBiNyB7dG9vbH0nLFxuICBwZW5kaW5nUXVlc3Rpb25DaG9vc2U6ICdcXHU4YmY3XFx1NGY2MFxcdTkwMDlcXHU2MmU5JyxcbiAgcGVuZGluZ1F1ZXN0aW9uTXVsdGk6ICdcXHU4YmY3XFx1NGY2MFxcdTU5MWFcXHU5MDA5JyxcbiAgcGVuZGluZ1F1ZXN0aW9uRmlsbDogJ1xcdThiZjdcXHU0ZjYwXFx1NTg2YlxcdTUxOTknLFxuICBwZW5kaW5nUXVlc3Rpb25CYXRjaDogJ1xcdTU0MTFcXHU0ZjYwXFx1NjNkMFxcdTk1ZWVcXHVmZjA4e2NvdW50fSBcXHU0ZTJhXFx1ZmYwOScsXG4gIHNhdmU6ICdcXHU0ZmRkXFx1NWI1OCcsXG4gIHNhdmVkOiAnXFx1NWRmMlxcdTRmZGRcXHU1YjU4XFx1MzAwMicsXG4gIGludmFsaWRUb2tlbjogJ1xcdThiZjdcXHU4ZjkzXFx1NTE2NVxcdTY1NzBcXHU1YjU3XFx1NjIxNlxcdTVlMjYgay9NIFxcdTU0MGVcXHU3ZjAwXFx1NzY4NFxcdTUwM2NcXHVmZjA4XFx1NTk4MiAxMzBrXFx1ZmYwOVxcdTMwMDInLFxuICBpbnZhbGlkSGV4OiAnXFx1OTg5Y1xcdTgyNzJcXHU2ODNjXFx1NWYwZlxcdTVlOTRcXHU0ZTNhICNSUkdHQkJcXHUzMDAyJyxcbiAgZXJyb3JQcmVmaXg6ICdcXHU5NTE5XFx1OGJlZlxcdWZmMWEgJyxcbiAgdW5hdmFpbGFibGU6ICdcXHU2YjY0XFx1OGJiZVxcdTdmNmVcXHU1NzI4XFx1NWY1M1xcdTUyNGRcXHU1YmEyXFx1NjIzN1xcdTdhZWZcXHU0ZTBkXFx1NTNlZlxcdTc1MjhcXHUzMDAyJyxcbiAgbG9hZGluZzogJ1xcdTUyYTBcXHU4ZjdkXFx1NGUyZFxcdTIwMjYnLFxufVxuXG4vKiogUGFyc2UgYSBodW1hbiB0b2tlbiBjb3VudCAoYDEzMGtgLCBgMS41bWAsIGAxMzAwMDBgKS4gKi9cbmZ1bmN0aW9uIHBhcnNlVG9rZW5UZXh0KHRleHQpIHtcbiAgY29uc3QgcmF3ID0gU3RyaW5nKHRleHQgPz8gJycpLnRyaW0oKS5yZXBsYWNlKC9bXFxzX10vZywgJycpXG4gIGlmIChyYXcgPT09ICcnKSByZXR1cm4gdW5kZWZpbmVkXG4gIGNvbnN0IG1hdGNoID0gL14oXFxkKyg/OlsuLF1cXGQrKT8pKFtrS21NXSk/JC8uZXhlYyhyYXcpXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBiYXNlID0gTnVtYmVyKG1hdGNoWzFdLnJlcGxhY2UoJywnLCAnLicpKVxuICBpZiAoIU51bWJlci5pc0Zpbml0ZShiYXNlKSB8fCBiYXNlIDwgMCkgcmV0dXJuIHVuZGVmaW5lZFxuICBjb25zdCBzY2FsZSA9IG1hdGNoWzJdID09PSB1bmRlZmluZWQgPyAxIDogbWF0Y2hbMl0udG9Mb3dlckNhc2UoKSA9PT0gJ2snID8gMTAwMCA6IDEwMDAwMDBcbiAgcmV0dXJuIE1hdGgucm91bmQoYmFzZSAqIHNjYWxlKVxufVxuXG4vKiogQnVpbGQgYHsgcHJvdmlkZXIsIG1vZGVsLCBuYW1lLCBsZXZlbHMgfWAgcm93cyBmcm9tIHRoZSBwaS1haSBjb25maWcgdmFsdWUuICovXG5mdW5jdGlvbiBidWlsZENhdGFsb2cocHJvdmlkZXJzKSB7XG4gIGNvbnN0IHJvd3MgPSBbXVxuICBpZiAocHJvdmlkZXJzID09PSBudWxsIHx8IHR5cGVvZiBwcm92aWRlcnMgIT09ICdvYmplY3QnKSByZXR1cm4gcm93c1xuICBmb3IgKGNvbnN0IFtwcm92aWRlciwgcHJvZmlsZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzKSkge1xuICAgIGNvbnN0IG1vZGVscyA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkocHJvZmlsZS5tb2RlbHMpID8gcHJvZmlsZS5tb2RlbHMgOiBbXVxuICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgICBpZiAobW9kZWwgPT09IG51bGwgfHwgdHlwZW9mIG1vZGVsICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgbW9kZWwuaWQgIT09ICdzdHJpbmcnKSBjb250aW51ZVxuICAgICAgY29uc3QgZWZmb3J0cyA9IG1vZGVsLnJlYXNvbmluZ0VmZm9ydHNcbiAgICAgIGNvbnN0IGxldmVscyA9IGVmZm9ydHMgPT09IGZhbHNlID8gW10gOiAoZWZmb3J0cyAhPT0gbnVsbCAmJiB0eXBlb2YgZWZmb3J0cyA9PT0gJ29iamVjdCcgPyBPYmplY3Qua2V5cyhlZmZvcnRzKSA6IFtdKVxuICAgICAgcm93cy5wdXNoKHsgcHJvdmlkZXIsIG1vZGVsOiBtb2RlbC5pZCwgbmFtZTogdHlwZW9mIG1vZGVsLm5hbWUgPT09ICdzdHJpbmcnICYmIG1vZGVsLm5hbWUgIT09ICcnID8gbW9kZWwubmFtZSA6IG1vZGVsLmlkLCBsZXZlbHMgfSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJvd3Ncbn1cblxuY29uc3QgUyA9IHtcbiAgd3JhcDogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDQsIG1heFdpZHRoOiA2ODAsIHBhZGRpbmdUb3A6IDQgfSxcbiAgdGFiczogeyBtYXJnaW5Ub3A6IDQgfSxcbiAgZ3JvdXA6IHsgbWFyZ2luVG9wOiAxMCwgcGFkZGluZ1RvcDogMTAsIGJvcmRlclRvcDogJzAuNXB4IHNvbGlkIHZhcigtLWRzdy1hbGlhcy1ib3JkZXItbDMpJyB9LFxuICBncm91cEZpcnN0OiB7IG1hcmdpblRvcDogMTAgfSxcbiAgZ3JvdXBUaXRsZTogeyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogMiB9LFxuICBsYWJlbDogeyBkaXNwbGF5OiAnYmxvY2snLCBmb250V2VpZ2h0OiA2MDAsIG1hcmdpbkJvdHRvbTogNiwgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknIH0sXG4gIGhpbnQ6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBtYXJnaW46ICc0cHggMCAxMnB4JyB9LFxuICBpbnB1dDoge1xuICAgIGhlaWdodDogMzIsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBib3JkZXI6ICcwLjVweCBzb2xpZCB2YXIoLS1kc3ctYWxpYXMtYm9yZGVyLWw0KScsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogMTQsXG4gICAgYmFja2dyb3VuZDogJ3ZhcigtLWRzdy1hbGlhcy1iZy1sYXllci0xKScsXG4gICAgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtcHJpbWFyeSknLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIH0sXG4gIHNlbGVjdDogeyBjdXJzb3I6ICdwb2ludGVyJyB9LFxuICBoZXg6IHsgZm9udEZhbWlseTogJ21vbm9zcGFjZScsIHdpZHRoOiAxMTAsIGZsZXg6ICcwIDAgYXV0bycgfSxcbiAgY29sb3I6IHtcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgIHdpZHRoOiAzMixcbiAgICBoZWlnaHQ6IDMyLFxuICAgIHBhZGRpbmc6IDIsXG4gICAgYm9yZGVyOiAnMC41cHggc29saWQgdmFyKC0tZHN3LWFsaWFzLWJvcmRlci1sNCknLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBiYWNrZ3JvdW5kOiAndmFyKC0tZHN3LWFsaWFzLWJnLWxheWVyLTEpJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgfSxcbiAgcm93VHdvOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxMiB9LFxuICByb3dGbGV4OiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA4LCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9LFxuICBjb2w6IHsgZmxleDogMSwgbWluV2lkdGg6IDAgfSxcbiAgdG9nZ2xlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTAsIG1hcmdpbkJvdHRvbTogMTIgfSxcbiAgdG9nZ2xlVGV4dDogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDIgfSxcbiAgdG9nZ2xlTGFiZWw6IHsgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC1wcmltYXJ5KScgfSxcbiAgZXJyb3I6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtc3RhdGUtZXJyb3ItcHJpbWFyeSwgI2MwMCknLCBmb250U2l6ZTogMTIsIG1hcmdpblRvcDogMiB9LFxufVxuXG5mdW5jdGlvbiBQcmVmc1NlY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgeyB0LCB1c2VQcmVmcywgdXNlTW9kZWxDYXRhbG9nLCBzYXZlLCBwcm9iZSwgd3JpdGVNb2RlbHMgfSA9IHByb3BzXG4gIGNvbnN0IHNuYXAgPSB1c2VQcmVmcygocykgPT4gcylcbiAgY29uc3QgY2F0YWxvZ1NuYXAgPSB1c2VNb2RlbENhdGFsb2coKHMpID0+IHMpXG4gIGNvbnN0IHZhbHVlID0gc25hcCAhPT0gbnVsbCAmJiBzbmFwICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHNuYXAudmFsdWUgPT09ICdvYmplY3QnICYmIHNuYXAudmFsdWUgIT09IG51bGwgPyBzbmFwLnZhbHVlIDoge31cbiAgY29uc3QgcHJvdmlkZXJzID0gY2F0YWxvZ1NuYXAgIT09IG51bGwgJiYgY2F0YWxvZ1NuYXAgIT09IHVuZGVmaW5lZCAmJiBjYXRhbG9nU25hcC52YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgY2F0YWxvZ1NuYXAudmFsdWUgPT09ICdvYmplY3QnID8gY2F0YWxvZ1NuYXAudmFsdWUucHJvdmlkZXJzIDogdW5kZWZpbmVkXG4gIGNvbnN0IGNhdGFsb2cgPSBidWlsZENhdGFsb2cocHJvdmlkZXJzKVxuICBjb25zdCBzdGF0dXMgPSBzbmFwICE9PSBudWxsICYmIHNuYXAgIT09IHVuZGVmaW5lZCA/IHNuYXAuc3RhdHVzIDogJ2xvYWRpbmcnXG4gIGNvbnN0IHdyaXRhYmxlID0gISEoc25hcCAmJiBzbmFwLndyaXRhYmxlKVxuXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZSgnY29tcGFjdGlvbicpXG4gIGNvbnN0IFtwZXJtaXNzaW9uLCBzZXRQZXJtaXNzaW9uXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IGN1cnJlbnROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkpXG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gKHtcbiAgICB0aHJlc2hvbGRUb2tlbnM6IHZhbHVlLnRocmVzaG9sZFRva2VucyA/IFN0cmluZyh2YWx1ZS50aHJlc2hvbGRUb2tlbnMpIDogJycsXG4gICAgY29udGV4dFdpbmRvd1Rva2VuczogdmFsdWUuY29udGV4dFdpbmRvd1Rva2VucyA/IFN0cmluZyh2YWx1ZS5jb250ZXh0V2luZG93VG9rZW5zKSA6ICcnLFxuICAgIHJldGFpblRva2VuczogdmFsdWUucmV0YWluVG9rZW5zID8gU3RyaW5nKHZhbHVlLnJldGFpblRva2VucykgOiAnJyxcbiAgfSkpXG4gIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW5yaWNoTm90ZSwgc2V0RW5yaWNoTm90ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW2J1c3lSb3V0ZSwgc2V0QnVzeVJvdXRlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCB2YWx1ZVJlZiA9IHNuYXAgJiYgc25hcC52YWx1ZVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERyYWZ0KHtcbiAgICAgIHRocmVzaG9sZFRva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYudGhyZXNob2xkVG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLnRocmVzaG9sZFRva2VucykgOiAnJyxcbiAgICAgIGNvbnRleHRXaW5kb3dUb2tlbnM6IHZhbHVlUmVmICYmIHZhbHVlUmVmLmNvbnRleHRXaW5kb3dUb2tlbnMgPyBTdHJpbmcodmFsdWVSZWYuY29udGV4dFdpbmRvd1Rva2VucykgOiAnJyxcbiAgICAgIHJldGFpblRva2VuczogdmFsdWVSZWYgJiYgdmFsdWVSZWYucmV0YWluVG9rZW5zID8gU3RyaW5nKHZhbHVlUmVmLnJldGFpblRva2VucykgOiAnJyxcbiAgICB9KVxuICAgIHNldE5vdGUoJycpXG4gIH0sIFt2YWx1ZVJlZl0pXG5cbiAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSByZXR1cm4gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdsb2FkaW5nJykpXG4gIGlmIChzdGF0dXMgPT09ICd1bmF2YWlsYWJsZScpIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ3VuYXZhaWxhYmxlJykpXG5cbiAgY29uc3QgZGlzYWJsZWQgPSAhd3JpdGFibGVcbiAgY29uc3Qgd3JpdGUgPSAoZmllbGQsIHYpID0+IHtcbiAgICBzZXROb3RlKCcnKVxuICAgIFByb21pc2UucmVzb2x2ZShzYXZlKGZpZWxkLCB2KSkuY2F0Y2goKGVycm9yKSA9PiBzZXROb3RlKHQoJ2Vycm9yUHJlZml4JykgKyBTdHJpbmcoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcikpKVxuICB9XG4gIGNvbnN0IGNvbW1pdFRva2VucyA9IChmaWVsZCwgdGV4dCkgPT4ge1xuICAgIGlmICh0ZXh0LnRyaW0oKSA9PT0gJycpIHsgd3JpdGUoZmllbGQsIDApOyByZXR1cm4gfVxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlVG9rZW5UZXh0KHRleHQpXG4gICAgaWYgKHBhcnNlZCA9PT0gdW5kZWZpbmVkKSB7IHNldE5vdGUodCgnaW52YWxpZFRva2VuJykpOyByZXR1cm4gfVxuICAgIHdyaXRlKGZpZWxkLCBwYXJzZWQpXG4gIH1cbiAgY29uc3QgbnVtID0gKGZpZWxkLCBmYWxsYmFjaykgPT4gKHtcbiAgICB2YWx1ZTogU3RyaW5nKHZhbHVlW2ZpZWxkXSAhPT0gdW5kZWZpbmVkID8gdmFsdWVbZmllbGRdIDogZmFsbGJhY2spLFxuICAgIGRpc2FibGVkLFxuICAgIG9uQ2hhbmdlOiAoZSkgPT4geyBjb25zdCBuID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTsgaWYgKE51bWJlci5pc0Zpbml0ZShuKSkgd3JpdGUoZmllbGQsIG4pIH0sXG4gIH0pXG4gIGNvbnN0IHN3aXRjaEZpZWxkID0gKGxhYmVsS2V5LCBmaWVsZCwgaGludEtleSwgZmFsbGJhY2spID0+IGVsKCdkaXYnLCB7IHN0eWxlOiBTLnRvZ2dsZSwga2V5OiBmaWVsZCB9LFxuICAgIGVsKFN3aXRjaCwge1xuICAgICAgY2hlY2tlZDogdmFsdWVbZmllbGRdICE9PSB1bmRlZmluZWQgPyAhIXZhbHVlW2ZpZWxkXSA6IGZhbGxiYWNrLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBsYWJlbDogdChsYWJlbEtleSksXG4gICAgICBvbkNoYW5nZTogKG5leHQpID0+IHdyaXRlKGZpZWxkLCBuZXh0KSxcbiAgICB9KSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGVUZXh0IH0sXG4gICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IFMudG9nZ2xlTGFiZWwgfSwgdChsYWJlbEtleSkpLFxuICAgICAgaGludEtleSA/IGVsKCdzcGFuJywgeyBzdHlsZTogeyBjb2xvcjogJ3ZhcigtLWRzdy1hbGlhcy1sYWJlbC10ZXJ0aWFyeSknLCBmb250U2l6ZTogMTIgfSB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gICAgKSxcbiAgKVxuICBjb25zdCB0ZXh0RmllbGQgPSAobGFiZWxLZXksIGZpZWxkLCBoaW50S2V5KSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogUy5pbnB1dCwgZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogZHJhZnRbZmllbGRdLFxuICAgICAgb25DaGFuZ2U6IChlKSA9PiBzZXREcmFmdCgoZCkgPT4gKHsgLi4uZCwgW2ZpZWxkXTogZS50YXJnZXQudmFsdWUgfSkpLFxuICAgICAgb25CbHVyOiAoKSA9PiBjb21taXRUb2tlbnMoZmllbGQsIGRyYWZ0W2ZpZWxkXSksXG4gICAgICBvbktleURvd246IChlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgY29tbWl0VG9rZW5zKGZpZWxkLCBkcmFmdFtmaWVsZF0pIH0sXG4gICAgfSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSxcbiAgKVxuICBjb25zdCBudW1iZXJGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGhpbnRLZXksIGZhbGxiYWNrKSA9PiBlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ2lucHV0JywgeyB0eXBlOiAnbnVtYmVyJywgc3RlcDogJ2FueScsIHN0eWxlOiBTLmlucHV0LCAuLi5udW0oZmllbGQsIGZhbGxiYWNrKSB9KSxcbiAgICBoaW50S2V5ID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KGhpbnRLZXkpKSA6IG51bGwsXG4gIClcbiAgLyoqIENvbG91ciByb3c6IG5hdGl2ZSBwaWNrZXIgKyBlZGl0YWJsZSBoZXgsIG9wdGlvbmFsIGNsZWFyIChlbXB0eSA9IG9mZmljaWFsKS4gKi9cbiAgY29uc3QgY29sb3JGaWVsZCA9IChsYWJlbEtleSwgZmllbGQsIGZhbGxiYWNrSGV4LCBvcHRpb25hbCwgaGludEtleSkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0eXBlb2YgdmFsdWVbZmllbGRdID09PSAnc3RyaW5nJyA/IHZhbHVlW2ZpZWxkXSA6ICcnXG4gICAgY29uc3Qgc2hvd24gPSBjdXJyZW50ICE9PSAnJyA/IGN1cnJlbnQgOiAoZmFsbGJhY2tIZXggPz8gJyMwMDAwMDAnKVxuICAgIHJldHVybiBlbCgnZGl2JywgeyBzdHlsZTogeyAuLi5TLmNvbCwgbWFyZ2luQm90dG9tOiAxMCB9LCBrZXk6IGZpZWxkIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dGbGV4IH0sXG4gICAgICAgIGVsKCdpbnB1dCcsIHtcbiAgICAgICAgICB0eXBlOiAnY29sb3InLCB2YWx1ZTogc2hvd24sIGRpc2FibGVkLCBzdHlsZTogUy5jb2xvcixcbiAgICAgICAgICBvbkNoYW5nZTogKGUpID0+IHdyaXRlKGZpZWxkLCBlLnRhcmdldC52YWx1ZSksXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnaW5wdXQnLCB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLCBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLmhleCB9LCBkaXNhYmxlZCxcbiAgICAgICAgICB2YWx1ZTogY3VycmVudCwgcGxhY2Vob2xkZXI6IG9wdGlvbmFsID8gdCgnY29sb3JVbnNldCcpIDogJycsXG4gICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gJycgJiYgb3B0aW9uYWwpIHdyaXRlKGZpZWxkLCAnJylcbiAgICAgICAgICAgIGVsc2UgaWYgKEhFWC50ZXN0KG5leHQpKSB3cml0ZShmaWVsZCwgbmV4dClcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgb3B0aW9uYWwgJiYgY3VycmVudCAhPT0gJydcbiAgICAgICAgICA/IGVsKEJ1dHRvbiwgeyB2YXJpYW50OiAnZ2hvc3QnLCBzaXplOiAnc20nLCBkaXNhYmxlZCwgb25DbGljazogKCkgPT4gd3JpdGUoZmllbGQsICcnKSB9LCB0KCdjb2xvclJlc2V0JykpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgKSxcbiAgICAgIGhpbnRLZXkgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoaGludEtleSkpIDogbnVsbCxcbiAgICApXG4gIH1cbiAgY29uc3QgZW5hYmxlTm90aWZpY2F0aW9ucyA9IChuZXh0KSA9PiB7XG4gICAgaWYgKCFuZXh0KSB7IHdyaXRlKCdub3RpZnlFbmFibGVkJywgZmFsc2UpOyByZXR1cm4gfVxuICAgIHdyaXRlKCdub3RpZnlFbmFibGVkJywgdHJ1ZSlcbiAgICBwcmltZVNvdW5kKClcbiAgICB2b2lkIHJlcXVlc3ROb3RpZmljYXRpb25QZXJtaXNzaW9uKCkudGhlbihzZXRQZXJtaXNzaW9uKVxuICB9XG5cbiAgY29uc3QgZW5yaWNoUHJvdmlkZXIgPSBhc3luYyAocm91dGVJZCwgcHJvZmlsZSkgPT4ge1xuICAgIHNldEJ1c3lSb3V0ZShyb3V0ZUlkKVxuICAgIHNldEVucmljaE5vdGUoJycpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvYmUoeyBhcmdzOiB7IGJhc2VVUkw6IHByb2ZpbGUuYmFzZVVSTCB9IH0pXG4gICAgICBjb25zdCBmb3VuZCA9IEFycmF5LmlzQXJyYXkocmVzcG9uc2U/Lm1vZGVscykgPyByZXNwb25zZS5tb2RlbHMgOiBbXVxuICAgICAgY29uc3QgYnlJZCA9IG5ldyBNYXAoZm91bmQubWFwKChtKSA9PiBbbS5pZCwgbV0pKVxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBBcnJheS5pc0FycmF5KHByb2ZpbGUubW9kZWxzKSA/IHByb2ZpbGUubW9kZWxzIDogW11cbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nLmxlbmd0aCA9PT0gMFxuICAgICAgICA/IGZvdW5kLm1hcCgobSkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBtLmlkLFxuICAgICAgICAgICAgbmFtZTogbS5uYW1lLFxuICAgICAgICAgICAgLi4uKG0uY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGNvbnRleHRXaW5kb3c6IG0uY29udGV4dFdpbmRvdyB9KSxcbiAgICAgICAgICAgIC4uLihtLm1heFRva2VucyA9PT0gdW5kZWZpbmVkID8ge30gOiB7IG1heFRva2VuczogbS5tYXhUb2tlbnMgfSksXG4gICAgICAgICAgICAuLi4obS5pbnB1dCA9PT0gdW5kZWZpbmVkID8ge30gOiB7IGlucHV0OiBtLmlucHV0IH0pLFxuICAgICAgICAgIH0pKVxuICAgICAgICA6IGV4aXN0aW5nLm1hcCgobSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gYnlJZC5nZXQobS5pZClcbiAgICAgICAgICAgIGlmIChoaXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG1cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSB7IC4uLm0gfVxuICAgICAgICAgICAgaWYgKG5leHQuY29udGV4dFdpbmRvdyA9PT0gdW5kZWZpbmVkICYmIGhpdC5jb250ZXh0V2luZG93ICE9PSB1bmRlZmluZWQpIG5leHQuY29udGV4dFdpbmRvdyA9IGhpdC5jb250ZXh0V2luZG93XG4gICAgICAgICAgICBpZiAobmV4dC5pbnB1dCA9PT0gdW5kZWZpbmVkICYmIGhpdC5pbnB1dCAhPT0gdW5kZWZpbmVkKSBuZXh0LmlucHV0ID0gaGl0LmlucHV0XG4gICAgICAgICAgICByZXR1cm4gbmV4dFxuICAgICAgICAgIH0pXG4gICAgICBhd2FpdCB3cml0ZU1vZGVscyhyb3V0ZUlkLCBtZXJnZWQpXG4gICAgICBzZXRFbnJpY2hOb3RlKHQoJ2VucmljaGVkJywgeyBjb3VudDogbWVyZ2VkLmxlbmd0aCB9KSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RW5yaWNoTm90ZSh0KCdlcnJvclByZWZpeCcpICsgU3RyaW5nKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRCdXN5Um91dGUoJycpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJvdmlkZXJSb3dzID0gT2JqZWN0LmVudHJpZXMocHJvdmlkZXJzICE9PSBudWxsICYmIHR5cGVvZiBwcm92aWRlcnMgPT09ICdvYmplY3QnID8gcHJvdmlkZXJzIDoge30pLm1hcCgoW3JvdXRlSWQsIHByb2ZpbGVdKSA9PiB7XG4gICAgY29uc3QgYmFzZVVSTCA9IHByb2ZpbGUgIT09IG51bGwgJiYgdHlwZW9mIHByb2ZpbGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9maWxlLmJhc2VVUkwgPT09ICdzdHJpbmcnID8gcHJvZmlsZS5iYXNlVVJMIDogJydcbiAgICByZXR1cm4gZWwoJ2RpdicsIHsga2V5OiByb3V0ZUlkLCBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogNiB9IH0sXG4gICAgICBlbCgnc3BhbicsIHsgc3R5bGU6IHsgZmxleDogMSwgbWluV2lkdGg6IDAsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sIGAke3JvdXRlSWR9JHtiYXNlVVJMID8gYCBcdTIwMTQgJHtiYXNlVVJMfWAgOiAnJ31gKSxcbiAgICAgIGJhc2VVUkxcbiAgICAgICAgPyBlbChCdXR0b24sIHtcbiAgICAgICAgICAgIHZhcmlhbnQ6ICdvdXRsaW5lJyxcbiAgICAgICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgICAgICBkaXNhYmxlZDogYnVzeVJvdXRlID09PSByb3V0ZUlkIHx8IGRpc2FibGVkLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4geyB2b2lkIGVucmljaFByb3ZpZGVyKHJvdXRlSWQsIHByb2ZpbGUpIH0sXG4gICAgICAgICAgfSwgYnVzeVJvdXRlID09PSByb3V0ZUlkID8gdCgnZW5yaWNoaW5nJykgOiB0KCdlbnJpY2gnKSlcbiAgICAgICAgOiBlbCgnc3BhbicsIHsgc3R5bGU6IHsgY29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtbGFiZWwtdGVydGlhcnkpJywgZm9udFNpemU6IDEyLCBmbGV4U2hyaW5rOiAwIH0gfSwgdCgnbm9CYXNlVXJsJykpLFxuICAgIClcbiAgfSlcblxuICAvLyBTdW1tYXJpemF0aW9uIG1vZGVsL3JlYXNvbmluZyBwaWNrZXJzLlxuICBjb25zdCBtb2RlID0gdmFsdWUuc3VtbWFyaXphdGlvbk1vZGUgPT09ICdjdXN0b20nID8gJ2N1c3RvbScgOiAnc2Vzc2lvbidcbiAgY29uc3QgcHJvdmlkZXJOYW1lcyA9IFsuLi5uZXcgU2V0KGNhdGFsb2cubWFwKChyKSA9PiByLnByb3ZpZGVyKSldXG4gIGNvbnN0IHNlbGVjdGVkUHJvdmlkZXIgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUHJvdmlkZXIgfHwgcHJvdmlkZXJOYW1lc1swXSB8fCAnJ1xuICBjb25zdCBtb2RlbHNGb3JQcm92aWRlciA9IGNhdGFsb2cuZmlsdGVyKChyKSA9PiByLnByb3ZpZGVyID09PSBzZWxlY3RlZFByb3ZpZGVyKVxuICBjb25zdCBzZWxlY3RlZFJvdyA9IG1vZGVsc0ZvclByb3ZpZGVyLmZpbmQoKHIpID0+IHIubW9kZWwgPT09IHZhbHVlLnN1bW1hcml6YXRpb25Nb2RlbCkgfHwgbW9kZWxzRm9yUHJvdmlkZXJbMF1cbiAgY29uc3QgbGV2ZWxTZXQgPSBbJ2RlZmF1bHQnLCAnb2ZmJywgLi4uKHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRSb3cubGV2ZWxzIDogW10pXVxuICBjb25zdCByZWFzb25pbmcgPSB2YWx1ZS5zdW1tYXJpemF0aW9uUmVhc29uaW5nIHx8ICdkZWZhdWx0J1xuICBjb25zdCBzZWxlY3RPcHRpb25zID0gKHBhaXJzKSA9PiBwYWlycy5tYXAoKFt2LCBsYWJlbF0pID0+IGVsKCdvcHRpb24nLCB7IGtleTogdiwgdmFsdWU6IHYgfSwgbGFiZWwpKVxuXG4gIGNvbnN0IHN1bW1hcml6YXRpb24gPSBbXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdtb2RlJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgnc3VtbWFyaXphdGlvbk1vZGUnKSksXG4gICAgICBlbCgnc2VsZWN0JywgeyBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCwgdmFsdWU6IG1vZGUsIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoJ3N1bW1hcml6YXRpb25Nb2RlJywgZS50YXJnZXQudmFsdWUpIH0sXG4gICAgICAgIHNlbGVjdE9wdGlvbnMoW1snc2Vzc2lvbicsIHQoJ21vZGVTZXNzaW9uJyldLCBbJ2N1c3RvbScsIHQoJ21vZGVDdXN0b20nKV1dKSksXG4gICAgKSxcbiAgXVxuICBpZiAobW9kZSA9PT0gJ2N1c3RvbScpIHtcbiAgICBzdW1tYXJpemF0aW9uLnB1c2goZWwoJ2RpdicsIHsgc3R5bGU6IFMuY29sLCBrZXk6ICdwcm92aWRlcicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmxhYmVsIH0sIHQoJ3Byb3ZpZGVyJykpLFxuICAgICAgZWwoJ3NlbGVjdCcsIHtcbiAgICAgICAgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBzZWxlY3RlZFByb3ZpZGVyLFxuICAgICAgICBvbkNoYW5nZTogKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gY2F0YWxvZy5maW5kKChyKSA9PiByLnByb3ZpZGVyID09PSBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICB3cml0ZSgnc3VtbWFyaXphdGlvblByb3ZpZGVyJywgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgaWYgKG5leHQpIHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZWwnLCBuZXh0Lm1vZGVsKVxuICAgICAgICAgIHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgJ2RlZmF1bHQnKVxuICAgICAgICB9LFxuICAgICAgfSwgcHJvdmlkZXJOYW1lcy5tYXAoKHApID0+IGVsKCdvcHRpb24nLCB7IGtleTogcCwgdmFsdWU6IHAgfSwgcCkpKSxcbiAgICApKVxuICAgIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ21vZGVsJyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMubGFiZWwgfSwgdCgnbW9kZWwnKSksXG4gICAgICBlbCgnc2VsZWN0Jywge1xuICAgICAgICBzdHlsZTogeyAuLi5TLmlucHV0LCAuLi5TLnNlbGVjdCB9LCBkaXNhYmxlZCxcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkUm93ID8gc2VsZWN0ZWRSb3cubW9kZWwgOiAnJyxcbiAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7IHdyaXRlKCdzdW1tYXJpemF0aW9uTW9kZWwnLCBlLnRhcmdldC52YWx1ZSk7IHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgJ2RlZmF1bHQnKSB9LFxuICAgICAgfSwgbW9kZWxzRm9yUHJvdmlkZXIubWFwKChyKSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IHIubW9kZWwsIHZhbHVlOiByLm1vZGVsIH0sIHIubmFtZSkpKSxcbiAgICApKVxuICB9XG4gIHN1bW1hcml6YXRpb24ucHVzaChlbCgnZGl2JywgeyBzdHlsZTogUy5jb2wsIGtleTogJ3JlYXNvbmluZycgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KCdyZWFzb25pbmcnKSksXG4gICAgZWwoJ3NlbGVjdCcsIHsgc3R5bGU6IHsgLi4uUy5pbnB1dCwgLi4uUy5zZWxlY3QgfSwgZGlzYWJsZWQsIHZhbHVlOiBsZXZlbFNldC5pbmNsdWRlcyhyZWFzb25pbmcpID8gcmVhc29uaW5nIDogJ2RlZmF1bHQnLCBvbkNoYW5nZTogKGUpID0+IHdyaXRlKCdzdW1tYXJpemF0aW9uUmVhc29uaW5nJywgZS50YXJnZXQudmFsdWUpIH0sXG4gICAgICBsZXZlbFNldC5tYXAoKGx2KSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IGx2LCB2YWx1ZTogbHYgfSwgbHYgPT09ICdkZWZhdWx0JyA/IHQoJ3JlYXNvbmluZ0RlZmF1bHQnKSA6IGx2ID09PSAnb2ZmJyA/IHQoJ3JlYXNvbmluZ09mZicpIDogbHYpKSksXG4gICkpXG5cbiAgY29uc3QgY29tcGFjdGlvblBhbmVsID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwRmlyc3QsIGtleTogJ3RocmVzaG9sZCcgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgndGhyZXNob2xkVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgdGV4dEZpZWxkKCd0aHJlc2hvbGRUb2tlbnMnLCAndGhyZXNob2xkVG9rZW5zJywgJ3RocmVzaG9sZFRva2Vuc0hpbnQnKSxcbiAgICAgICAgdGV4dEZpZWxkKCdjb250ZXh0V2luZG93JywgJ2NvbnRleHRXaW5kb3dUb2tlbnMnLCAnY29udGV4dFdpbmRvd0hpbnQnKSxcbiAgICAgICksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ3RocmVzaG9sZFJhdGlvJywgJ3RocmVzaG9sZFJhdGlvJywgJ3RocmVzaG9sZFJhdGlvSGludCcsIDAuOCksXG4gICAgICAgIG51bWJlckZpZWxkKCdoZWFkcm9vbScsICdoZWFkcm9vbVRva2VucycsICdoZWFkcm9vbUhpbnQnLCAzMjc2OCksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ3JldGVudGlvbicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgncmV0ZW50aW9uVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgdGV4dEZpZWxkKCdyZXRhaW5Ub2tlbnMnLCAncmV0YWluVG9rZW5zJywgJ3JldGFpblRva2Vuc0hpbnQnKSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ3JldGFpblJhdGlvJywgJ3JldGFpblJhdGlvJywgbnVsbCwgMC4xNiksXG4gICAgICApLFxuICAgICksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXAsIGtleTogJ2JlaGF2aW91cicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnYmVoYXZpb3VyVGl0bGUnKSksXG4gICAgICBzd2l0Y2hGaWVsZCgnYXV0bycsICdhdXRvJywgJ2F1dG9IaW50JywgdHJ1ZSksXG4gICAgICBzd2l0Y2hGaWVsZCgndHVybkVuZCcsICd0dXJuRW5kQ29tcGFjdGlvbkVuYWJsZWQnLCAndHVybkVuZEhpbnQnLCBmYWxzZSksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnc3VtbWFyaXphdGlvbicgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnc3VtbWFyaXphdGlvblRpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvIH0sIHN1bW1hcml6YXRpb24pLFxuICAgICAgbnVtYmVyRmllbGQoJ21heFRva2VucycsICdtYXhUb2tlbnMnLCBudWxsLCAzMjc2OCksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnYWR2YW5jZWQnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ2FkdmFuY2VkVGl0bGUnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28gfSxcbiAgICAgICAgbnVtYmVyRmllbGQoJ2NvbXBhY3Rpb25SZXRyaWVzJywgJ2NvbXBhY3Rpb25SZXRyaWVzJywgbnVsbCwgMSksXG4gICAgICAgIG51bWJlckZpZWxkKCdtYXhPdmVyZmxvd1JldHJpZXMnLCAnbWF4T3ZlcmZsb3dSZXRyaWVzJywgbnVsbCwgMSksXG4gICAgICApLFxuICAgICksXG4gIF1cblxuICBjb25zdCBtb2RlbHNQYW5lbCA9IFtcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cEZpcnN0LCBrZXk6ICdtb2RlbHMnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ21vZGVsc1RpdGxlJykpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuaGludCB9LCB0KCdtb2RlbHNJbnRybycpKSxcbiAgICAgIC4uLnByb3ZpZGVyUm93cyxcbiAgICAgIGVucmljaE5vdGUgPyBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIGVucmljaE5vdGUpIDogbnVsbCxcbiAgICApLFxuICBdXG5cbiAgY29uc3Qgdm9sdW1lTm93ID0gdHlwZW9mIHZhbHVlLm5vdGlmeVZvbHVtZSA9PT0gJ251bWJlcicgPyB2YWx1ZS5ub3RpZnlWb2x1bWUgOiAwLjZcbiAgY29uc3Qgc291bmRTZWxlY3RPcHRpb25zID0gKCkgPT4gW1xuICAgIGVsKCdvcHRpb24nLCB7IGtleTogU09VTkRfTk9ORSwgdmFsdWU6IFNPVU5EX05PTkUgfSwgdCgnc291bmROb1NvdW5kJykpLFxuICAgIGVsKCdvcHRncm91cCcsIHsga2V5OiAnYnVpbHRpbicsIGxhYmVsOiB0KCdzb3VuZFBhY2tCdWlsdGluJykgfSxcbiAgICAgIEJVSUxUSU5fU09VTkRTLm1hcCgoc291bmQpID0+IGVsKCdvcHRpb24nLCB7IGtleTogc291bmQuaWQsIHZhbHVlOiBzb3VuZC5pZCB9LCB0KHNvdW5kLmxhYmVsS2V5KSkpKSxcbiAgICAuLi5TT1VORF9QQUNLUy5tYXAoKHBhY2spID0+IGVsKCdvcHRncm91cCcsIHsga2V5OiBwYWNrLnByZWZpeCwgbGFiZWw6IHBhY2submFtZSB9LFxuICAgICAgcGFja1NvdW5kSWRzKHBhY2spLm1hcCgoaWQsIGluZGV4KSA9PiBlbCgnb3B0aW9uJywgeyBrZXk6IGlkLCB2YWx1ZTogaWQgfSwgYCR7cGFjay5uYW1lfSAke1N0cmluZyhpbmRleCArIDEpLnBhZFN0YXJ0KDIsICcwJyl9YCkpKSksXG4gIF1cbiAgLyoqIFNvdW5kIHNlbGVjdG9yOyBwaWNraW5nIG9uZSBwcmV2aWV3cyBpdCAoYW5kIHVubG9ja3MgYXVkaW8gaW4gdGhlIGdlc3R1cmUpLiAqL1xuICBjb25zdCBzb3VuZFNlbGVjdCA9IChsYWJlbEtleSwgZmllbGQsIGtpbmQpID0+IGVsKCdkaXYnLCB7IHN0eWxlOiB7IC4uLlMuY29sLCBtYXJnaW5Cb3R0b206IDEwIH0sIGtleTogZmllbGQgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5sYWJlbCB9LCB0KGxhYmVsS2V5KSksXG4gICAgZWwoJ3NlbGVjdCcsIHtcbiAgICAgIHN0eWxlOiB7IC4uLlMuaW5wdXQsIC4uLlMuc2VsZWN0IH0sIGRpc2FibGVkLFxuICAgICAgdmFsdWU6IHR5cGVvZiB2YWx1ZVtmaWVsZF0gPT09ICdzdHJpbmcnID8gdmFsdWVbZmllbGRdIDogU09VTkRfTk9ORSxcbiAgICAgIG9uQ2hhbmdlOiAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIHdyaXRlKGZpZWxkLCBpZClcbiAgICAgICAgcHJpbWVTb3VuZCgpXG4gICAgICAgIGlmIChpZCAhPT0gU09VTkRfTk9ORSkgcGxheVNvdW5kKGlkLCB2b2x1bWVOb3csIGtpbmQpXG4gICAgICB9LFxuICAgIH0sIHNvdW5kU2VsZWN0T3B0aW9ucygpKSxcbiAgKVxuXG4gIGNvbnN0IG5vdGlmaWNhdGlvbnNFbmFibGVkID0gdmFsdWUubm90aWZ5RW5hYmxlZCAhPT0gdW5kZWZpbmVkID8gISF2YWx1ZS5ub3RpZnlFbmFibGVkIDogZmFsc2VcbiAgY29uc3Qgbm90aWZpY2F0aW9uc1BhbmVsID0gW1xuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwRmlyc3QsIGtleTogJ2NvbG9ycycgfSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmdyb3VwVGl0bGUgfSwgdCgnY29sb3JzR3JvdXAnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ2NvbG9yc0ludHJvJykpLFxuICAgICAgc3dpdGNoRmllbGQoJ2NvbG9yc0VuYWJsZWQnLCAnY29sb3JzRW5hYmxlZCcsICdjb2xvcnNFbmFibGVkSGludCcsIHRydWUpLFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMucm93VHdvLCBrZXk6ICdjb2xvcnMxJyB9LFxuICAgICAgICBjb2xvckZpZWxkKCdncmVlbkxhYmVsJywgJ2dyZWVuJywgJyMyMkM1NUUnLCBmYWxzZSwgbnVsbCksXG4gICAgICAgIGNvbG9yRmllbGQoJ2FtYmVyTGFiZWwnLCAnYW1iZXInLCAnI0Y1OUUwQicsIGZhbHNlLCBudWxsKSxcbiAgICAgICksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5yb3dUd28sIGtleTogJ2NvbG9yczInIH0sXG4gICAgICAgIGNvbG9yRmllbGQoJ3dvcmtpbmdMYWJlbCcsICd3b3JraW5nJywgJyMzQjgyRjYnLCBmYWxzZSwgJ3dvcmtpbmdIaW50JyksXG4gICAgICAgIGNvbG9yRmllbGQoJ2JsYWNrTGFiZWwnLCAnYmxhY2snLCAnIzAwMDAwMCcsIHRydWUsICdibGFja0hpbnQnKSxcbiAgICAgICksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnbm90aWZ5JyB9LFxuICAgICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMuZ3JvdXBUaXRsZSB9LCB0KCdub3RpZnlHcm91cCcpKSxcbiAgICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnbm90aWZ5SW50cm8nKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGUsIGtleTogJ25vdGlmeUVuYWJsZWQnIH0sXG4gICAgICAgIGVsKFN3aXRjaCwge1xuICAgICAgICAgIGNoZWNrZWQ6IG5vdGlmaWNhdGlvbnNFbmFibGVkLFxuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIGxhYmVsOiB0KCdub3RpZnlFbmFibGVkJyksXG4gICAgICAgICAgb25DaGFuZ2U6IGVuYWJsZU5vdGlmaWNhdGlvbnMsXG4gICAgICAgIH0pLFxuICAgICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGVUZXh0IH0sXG4gICAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiBTLnRvZ2dsZUxhYmVsIH0sIHQoJ25vdGlmeUVuYWJsZWQnKSksXG4gICAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiB9IH0sIHQoJ25vdGlmeUVuYWJsZWRIaW50JykpLFxuICAgICAgICApLFxuICAgICAgKSxcbiAgICAgIG5vdGlmaWNhdGlvbnNFbmFibGVkICYmIHBlcm1pc3Npb24gPT09ICdkZW5pZWQnID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgdCgncGVybWlzc2lvbkRlbmllZCcpKSA6IG51bGwsXG4gICAgICBub3RpZmljYXRpb25zRW5hYmxlZCAmJiBwZXJtaXNzaW9uID09PSAndW5zdXBwb3J0ZWQnID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgdCgncGVybWlzc2lvblVuc3VwcG9ydGVkJykpIDogbnVsbCxcbiAgICAgIHN3aXRjaEZpZWxkKCdub3RpZnlGb3JlZ3JvdW5kJywgJ25vdGlmeUZvcmVncm91bmQnLCAnbm90aWZ5Rm9yZWdyb3VuZEhpbnQnLCBmYWxzZSksXG4gICAgICBzd2l0Y2hGaWVsZCgnbm90aWZ5QXV0b0hpZGUnLCAnbm90aWZ5QXV0b0hpZGUnLCAnbm90aWZ5QXV0b0hpZGVIaW50JywgdHJ1ZSksXG4gICAgKSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cCwga2V5OiAnc291bmQnIH0sXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3NvdW5kR3JvdXAnKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5oaW50IH0sIHQoJ3NvdW5kSW50cm8nKSksXG4gICAgICBlbCgnZGl2JywgeyBzdHlsZTogUy50b2dnbGUsIGtleTogJ3ZvbHVtZScgfSxcbiAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiBTLnRvZ2dsZUxhYmVsIH0sIHQoJ25vdGlmeVZvbHVtZScpKSxcbiAgICAgICAgZWwoJ2lucHV0Jywge1xuICAgICAgICAgIHR5cGU6ICdyYW5nZScsIG1pbjogMCwgbWF4OiAxMDAsIHN0ZXA6IDUsIGRpc2FibGVkLFxuICAgICAgICAgIHZhbHVlOiBNYXRoLnJvdW5kKHZvbHVtZU5vdyAqIDEwMCksICdhcmlhLWxhYmVsJzogdCgnbm90aWZ5Vm9sdW1lJyksXG4gICAgICAgICAgc3R5bGU6IHsgZmxleDogJzAgMCBhdXRvJywgd2lkdGg6IDE0MCwgYWNjZW50Q29sb3I6ICd2YXIoLS1kc3ctYWxpYXMtYnJhbmQtcHJpbWFyeSknLCBjdXJzb3I6ICdwb2ludGVyJyB9LFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZSkgPT4gd3JpdGUoJ25vdGlmeVZvbHVtZScsIE51bWJlcihlLnRhcmdldC52YWx1ZSkgLyAxMDApLFxuICAgICAgICB9KSxcbiAgICAgICAgZWwoJ3NwYW4nLCB7IHN0eWxlOiB7IGNvbG9yOiAndmFyKC0tZHN3LWFsaWFzLWxhYmVsLXRlcnRpYXJ5KScsIGZvbnRTaXplOiAxMiwgbWluV2lkdGg6IDM2LCB0ZXh0QWxpZ246ICdyaWdodCcgfSB9LCBgJHtNYXRoLnJvdW5kKHZvbHVtZU5vdyAqIDEwMCl9JWApLFxuICAgICAgKSxcbiAgICAgIHNvdW5kU2VsZWN0KCdzb3VuZERvbmUnLCAnbm90aWZ5RG9uZVNvdW5kJywgJ2RvbmUnKSxcbiAgICAgIHNvdW5kU2VsZWN0KCdzb3VuZFBlbmRpbmcnLCAnbm90aWZ5UGVuZGluZ1NvdW5kJywgJ3BlbmRpbmcnKSxcbiAgICApLFxuICBdXG5cbiAgY29uc3QgcGFuZWxzID0geyBjb21wYWN0aW9uOiBjb21wYWN0aW9uUGFuZWwsIG1vZGVsczogbW9kZWxzUGFuZWwsIG5vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbnNQYW5lbCB9XG5cbiAgcmV0dXJuIGVsKCdkaXYnLCB7IHN0eWxlOiBTLndyYXAgfSxcbiAgICBlbCgnZGl2JywgeyBzdHlsZTogUy5ncm91cFRpdGxlIH0sIHQoJ3RpdGxlJykpLFxuICAgIGVsKCdkaXYnLCB7IHN0eWxlOiBTLmhpbnQgfSwgdCgnaW50cm8nKSksXG4gICAgZWwoJ2RpdicsIHsgc3R5bGU6IFMudGFicyB9LFxuICAgICAgZWwoU2VnbWVudGVkQ29udHJvbCwge1xuICAgICAgICBpZDogVEFCU19JRCxcbiAgICAgICAgdmFsdWU6IHRhYixcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHsgdmFsdWU6ICdjb21wYWN0aW9uJywgbGFiZWw6IHQoJ3RhYkNvbXBhY3Rpb24nKSB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdtb2RlbHMnLCBsYWJlbDogdCgndGFiTW9kZWxzJykgfSxcbiAgICAgICAgICB7IHZhbHVlOiAnbm90aWZpY2F0aW9ucycsIGxhYmVsOiB0KCd0YWJOb3RpZmljYXRpb25zJykgfSxcbiAgICAgICAgXSxcbiAgICAgICAgb25DaGFuZ2U6IHNldFRhYixcbiAgICAgICAgbGFiZWw6IHQoJ3RpdGxlJyksXG4gICAgICB9KSxcbiAgICApLFxuICAgIGVsKCdkaXYnLCB7IGlkOiBgJHtUQUJTX0lEfS0ke3RhYn0tcGFuZWxgLCByb2xlOiAndGFicGFuZWwnIH0sIC4uLihwYW5lbHNbdGFiXSA/PyBjb21wYWN0aW9uUGFuZWwpKSxcbiAgICBub3RlID8gZWwoJ2RpdicsIHsgc3R5bGU6IFMuZXJyb3IgfSwgbm90ZSkgOiBudWxsLFxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBseShjdHgpIHtcbiAgY3R4LmVmZmVjdCgoKSA9PiBjdHgubG9jYWxlLnJlZ2lzdGVyKExPQ0FMRV9OUywgeyBlbiwgemggfSksICdtYWxrby1wcmVmczogbG9jYWxlIGRpY3Rpb25hcmllcycpXG4gIGNvbnN0IHQgPSBjdHgubG9jYWxlLmJpbmQoTE9DQUxFX05TKVxuICBjb25zdCBmb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChOUylcbiAgY29uc3QgbW9kZWxGb3JtID0gY3R4LmNvbmZpZ0Zvcm1zLmdldChNT0RFTF9OUylcbiAgLy8gVGhlIGFwcGxpY2F0aW9uIG9ubHkgYXV0by1tb3VudHMgaXRzIG93biBSZW1vdGUgc2VsZWN0aW9uLCBzbyBhIHBsdWdpblxuICAvLyBzaGlwcyBhbmQgbW91bnRzIGl0cyBvd24gY29udHJpYnV0aW9uLlxuICB0cnkge1xuICAgIGNvbnN0IGRpc3Bvc2VSZW1vdGUgPSBhd2FpdCBjdHgucmVtb3RlLiRtb3VudChQUk9CRV9SRU1PVEUpXG4gICAgY3R4LmVmZmVjdCgoKSA9PiAoKSA9PiB7IHZvaWQgZGlzcG9zZVJlbW90ZSgpIH0sICdtYWxrby1wcmVmczogbWFsa29Nb2RlbHMgcmVtb3RlJylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdkc2gtbWFsa28tcHJlZnM6IGNvdWxkIG5vdCBtb3VudCB0aGUgbWFsa29Nb2RlbHMgcmVtb3RlIFx1MjAxNCcsIGVycm9yKVxuICB9XG4gIC8vIFRhYiBzdGF0dXMgbGlnaHQgKyBicm93c2VyIG5vdGlmaWNhdGlvbnMgKGluZGVwZW5kZW50IG9mIHRoZSBzZXR0aW5ncyBwYWdlKS5cbiAgY3R4LmVmZmVjdCgoKSA9PiBzdGFydFN0YXR1c0xpZ2h0KGN0eCwgZm9ybSksICdtYWxrby1wcmVmczogdGFiIHN0YXR1cyBsaWdodCcpXG4gIGNvbnN0IGluamVjdGVkID0gKCkgPT4gKHtcbiAgICBob29rczogeyBwcmVmczogZm9ybSwgbW9kZWxDYXRhbG9nOiBtb2RlbEZvcm0gfSxcbiAgICBzYXZlOiAoZmllbGQsIHZhbHVlKSA9PiBmb3JtLnNldChmaWVsZCwgdmFsdWUpLFxuICAgIHByb2JlOiAoYXJncykgPT4ge1xuICAgICAgLy8gQSBuYW1lc3BhY2Ugc2VydmljZSBpcyByZXNvbHZlZCBieSBpdHMgZnVsbCBrZXk7IHJlYWRpbmcgaXQgb2ZmXG4gICAgICAvLyBgY3R4LnJlbW90ZWAgd291bGQgcmVxdWlyZSBhbiBgaW5qZWN0YCB0aGlzIHBsdWdpbiBjYW5ub3QgZGVjbGFyZVxuICAgICAgLy8gYmVmb3JlIHRoZSBjb250cmlidXRpb24gaXMgbW91bnRlZC5cbiAgICAgIGNvbnN0IHJlbW90ZSA9IGN0eC5nZXQoJ3JlbW90ZS5tYWxrb01vZGVscycpXG4gICAgICBpZiAocmVtb3RlID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcigndGhlIG1hbGtvTW9kZWxzIHJlbW90ZSBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgIHJldHVybiByZW1vdGUucHJvYmUoYXJncylcbiAgICB9LFxuICAgIHdyaXRlTW9kZWxzOiAocm91dGVJZCwgbW9kZWxzKSA9PiBtb2RlbEZvcm0ubXV0YXRlKFt7IG9wOiAnc2V0JywgcGF0aDogWydwcm92aWRlcnMnLCByb3V0ZUlkLCAnbW9kZWxzJ10sIHZhbHVlOiBtb2RlbHMgfV0pLFxuICB9KVxuICBjdHguc2xvdHMuaW5qZWN0KFNMT1QsICgpID0+IGN0eC5zbG90cy5yZWdpc3Rlcih7XG4gICAgbmFtZTogU0xPVCxcbiAgICBpZDogTlMsXG4gICAgb3JkZXI6IDQ1LFxuICAgIGxhYmVsOiAoKSA9PiB0KCd0aXRsZScpLFxuICAgIGxvY2FsZTogTE9DQUxFX05TLFxuICAgIGluamVjdDogaW5qZWN0ZWQsXG4gIH0sIFByZWZzU2VjdGlvbikpXG59IiwgIi8qKlxuICogZHNoLW1hbGtvLXByZWZzIFx1MjAxNCBzaGFyZWQgUmVtb3RlIHdpcmUgaWRlbnRpdHkuXG4gKlxuICogVGhlIHNhbWUgaW52b2NhdGlvbiBpcyByZWdpc3RlcmVkIG9uIHRoZSBIb3N0IChgdHlwZXJ0LnJlZ2lzdGVyYCkgYW5kIG1vdW50ZWRcbiAqIGluIHRoZSBicm93c2VyIChgY3R4LnJlbW90ZS4kbW91bnRgKSwgc28gYm90aCBoYWx2ZXMgYnVpbGQgaXQgZnJvbSBoZXJlLiBUaGVcbiAqIG9ubHkgZGlmZmVyZW5jZSBpcyB0aGUgc2NoZW1hIGZhY3RvcnkgZWFjaCBzaWRlIHN1cHBsaWVzOiB0aGUgSG9zdCBkZWNvZGVzXG4gKiBhcmd1bWVudHMgd2l0aCB6b2QsIHdoaWxlIHRoZSBDbGllbnQgbmV2ZXIgZGVjb2RlcyBpdHMgb3duIGFyZ3VtZW50cyBhbmQgb25seVxuICogbmVlZHMgYSBmYWN0b3J5IHRvIHNhdGlzZnkgdGhlIHN0cmljdC1jb2RlYyBjb250cmFjdC5cbiAqL1xuXG4vKiogV2lyZSBpZGVudGl0eSBzaGFyZWQgYnkgdGhlIEhvc3QgbWFuaWZlc3QgYW5kIHRoZSBDbGllbnQgY29udHJpYnV0aW9uLiAqL1xuZXhwb3J0IGNvbnN0IFBST0JFX0lERU5USVRZID0ge1xuICBpZDogJ2RzaC1tYWxrby1wcmVmcyNtYWxrb01vZGVscy9wcm9iZScsXG4gIHNlcnZpY2U6ICdtYWxrb01vZGVscycsXG4gIG5hbWVzcGFjZTogJ21hbGtvTW9kZWxzJyxcbiAgbWV0aG9kOiAncHJvYmUnLFxuICBhcmdzVHlwZVN5bWJvbDogJ2RzaC1tYWxrby1wcmVmcyNQcm9iZUFyZ3MnLFxuICByZXN1bHRUeXBlU3ltYm9sOiAnZHNoLW1hbGtvLXByZWZzI1Byb2JlUmVzdWx0Jyxcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgYG1hbGtvTW9kZWxzL3Byb2JlKGFyZ3MpYCBkaXJlY3QgaW52b2NhdGlvbi5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZUFyZ3Mgc2NoZW1hIGZhY3RvcnkgZm9yIHRoZSBzaW5nbGUgYGFyZ3NgIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7KCkgPT4geyBwYXJzZTogKHZhbHVlOiB1bmtub3duKSA9PiB1bmtub3duIH19IGNyZWF0ZVJlc3VsdCBzY2hlbWEgZmFjdG9yeSBmb3IgdGhlIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBpbnZvY2F0aW9uIGRlc2NyaXB0b3IsIGlkZW50aWNhbCBvbiBib3RoIGZhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvYmVJbnZvY2F0aW9uKGNyZWF0ZUFyZ3MsIGNyZWF0ZVJlc3VsdCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBQUk9CRV9JREVOVElUWS5pZCxcbiAgICBzZXJ2aWNlOiBQUk9CRV9JREVOVElUWS5zZXJ2aWNlLFxuICAgIG5hbWVzcGFjZTogUFJPQkVfSURFTlRJVFkubmFtZXNwYWNlLFxuICAgIG1ldGhvZDogUFJPQkVfSURFTlRJVFkubWV0aG9kLFxuICAgIGludm9jYXRpb246IHsga2luZDogJ2RpcmVjdCcgfSxcbiAgICBwYXJhbWV0ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhcmdzJyxcbiAgICAgICAgd2lyZTogJ2FyZ3MnLFxuICAgICAgICBzb3VyY2U6ICdqc29uJyxcbiAgICAgICAgY29kZWM6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLmFyZ3NUeXBlU3ltYm9sLCBjcmVhdGU6IGNyZWF0ZUFyZ3MgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICByZXN1bHQ6IHsgbW9kZTogJ3N0cmljdCcsIHR5cGVTeW1ib2w6IFBST0JFX0lERU5USVRZLnJlc3VsdFR5cGVTeW1ib2wsIGNyZWF0ZTogY3JlYXRlUmVzdWx0IH0sXG4gIH1cbn0iLCAiLyoqXG4gKiBUaGUgb2ZmaWNpYWwgRGVlcFNlZWsgd2hhbGUgbWFyaywgcmVjb2xvcmVkLlxuICpcbiAqIFNoYXBlIHRha2VuIGZyb20gdGhlIG9mZmljaWFsIGZhdmljb24gYXMgdXNlZCBieSBkc2gtbm90aWNlLWNlbnRlciAoTUlUKTtcbiAqIG9ubHkgdGhlIGZpbGwgY29sb3IgaXMgb3Vycy4gS2VwdCBoZXJlIHNvIHRoZSB0YWIgaWNvbiByZWZsZWN0cyB0aGUgc2Vzc2lvblxuICogc3RhdGUgd2l0aG91dCBmZXRjaGluZyBhbmQgbXV0YXRpbmcgdGhlIHNlcnZlZCAvZmF2aWNvbi5zdmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgQ1NTIGNvbG9yIGZvciB0aGUgZmlsbC5cbiAqIEBwYXJhbSB7eyBibHVyOiBudW1iZXIsIG9wYWNpdHk6IG51bWJlciB9fSBbZ2xvd10gb3B0aW9uYWwgZ2xvdyAoZHJvcCBzaGFkb3cpXG4gKiAgIHVzZWQgdG8gYW5pbWF0ZSB0aGUgXCJ3b3JraW5nXCIgc3RhdGUgZnJhbWUgYnkgZnJhbWUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0YW5kYWxvbmUgU1ZHIGRvY3VtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2hhbGVTdmcoY29sb3IsIGdsb3cpIHtcbiAgY29uc3Qgc3ZnID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgd2lkdGg9XFxcIjUwXFxcIiBoZWlnaHQ9XFxcIjUwXFxcIiB2aWV3Qm94PVxcXCIwIDAgNTAgNTBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiPjxwYXRoIGQ9XFxcIk00OC44MzU0IDEwLjA0NzlDNDguMzIzMiA5Ljc5MTk5IDQ4LjEwMjUgMTAuMjc5OCA0Ny44MDMyIDEwLjUyNzhDNDcuNzAwNyAxMC42MDc5IDQ3LjYxNDMgMTAuNzExOSA0Ny41MjczIDEwLjgwNzZDNDYuNzc5MyAxMS42MjQgNDUuOTA0OCAxMi4xNTk3IDQ0Ljc2MjIgMTIuMDk1N0M0My4wOTIzIDEyIDQxLjY2NiAxMi41MzU2IDQwLjQwNTggMTMuODM5OEM0MC4xMzc3IDEyLjIzMTkgMzkuMjQ3NiAxMS4yNzIgMzcuODkyNiAxMC42NTU4QzM3LjE4MzYgMTAuMzM1OSAzNi40NjY4IDEwLjAxNTYgMzUuOTcwMiA5LjMxOTgyQzM1LjYyMzUgOC44MjM3MyAzNS41MjkzIDguMjcxOTcgMzUuMzU2IDcuNzI3NTRDMzUuMjQ1NiA3LjM5OTkgMzUuMTM1MyA3LjA2Mzk2IDM0Ljc2NTEgNy4wMDc4MUMzNC4zNjMzIDYuOTQzODUgMzQuMjA1NiA3LjI4NzYgMzQuMDQ3OSA3LjU3NTY4QzMzLjQxOCA4Ljc1MTk1IDMzLjE3MzMgMTAuMDQ3OSAzMy4xOTczIDExLjM1OTlDMzMuMjUyNCAxNC4zMTIgMzQuNDczNiAxNi42NjQxIDM2Ljg5OTkgMTguMzM1OUMzNy4xNzU4IDE4LjUyNzggMzcuMjQ2NiAxOC43MTk3IDM3LjE1OTcgMTlDMzYuOTk0NiAxOS41NzU3IDM2Ljc5NzQgMjAuMTM1NyAzNi42MjQgMjAuNzExOUMzNi41MTM3IDIxLjA4MDEgMzYuMzQ4NiAyMS4xNTk3IDM1Ljk2MjQgMjFDMzQuNjMwOSAyMC40MzIxIDMzLjQ4MSAxOS41OTE4IDMyLjQ2NDQgMTguNTc1N0MzMC43MzkzIDE2Ljg3MjEgMjkuMTc5MiAxNC45OTE3IDI3LjIzMzQgMTMuNTJDMjYuNzc2NCAxMy4xNzU4IDI2LjMxOTMgMTIuODU2IDI1Ljg0NjcgMTIuNTUxOEMyMy44NjE4IDEwLjU4NCAyNi4xMDY5IDguOTY3NzcgMjYuNjI3IDguNzc1ODhDMjcuMTcwNCA4LjU3NTY4IDI2LjgxNTkgNy44ODc3IDI1LjA1OTEgNy44OTZDMjMuMzAyMiA3LjkwMzgxIDIxLjY5NTMgOC41MDM5MSAxOS42NDcgOS4zMDM3MUMxOS4zNDc3IDkuNDIzODMgMTkuMDMyMiA5LjUxMTcyIDE4LjcwOTUgOS41ODM5OEMxNi44NTAxIDkuMjIzNjMgMTQuOTE5OSA5LjE0MzU1IDEyLjkwMzMgOS4zNzU5OEM5LjEwNTk2IDkuODA3NjIgNi4wNzI3NSAxMS42Mzk2IDMuODQzMjYgMTQuNzY4MUMxLjE2NDU1IDE4LjUyNzggMC41MzQxOCAyMi43OTk4IDEuMzA2NjQgMjcuMjU1OUMyLjExNzY4IDMxLjk1MjEgNC40NjU4MiAzNS44Mzk4IDguMDczNzMgMzguODc5OUMxMS44MTU5IDQyLjAzMjIgMTYuMTI1NSA0My41NzYyIDIxLjA0MSA0My4yODAzQzI0LjAyNjkgNDMuMTA0IDI3LjM1MTYgNDIuNjk2MyAzMS4xMDE2IDM5LjQ1NjFDMzIuMDQ2OSAzOS45MzYgMzMuMDM5NiA0MC4xMjc5IDM0LjY4NiA0MC4yNzJDMzUuOTU0NiA0MC4zOTIxIDM3LjE3NTggNDAuMjA4IDM4LjEyMTEgNDAuMDA3OEMzOS42MDIxIDM5LjY4OCAzOS40OTk1IDM4LjI4ODEgMzguOTYzOSAzOC4wMzIyQzM0LjYyMyAzNS45Njc4IDM1LjU3NjIgMzYuODA4MSAzNC43MSAzNi4xMjc5QzM2LjkxNTUgMzMuNDYzOSA0MC4yNDAyIDMwLjY5NTggNDEuNTQgMjEuNzI4QzQxLjY0MjYgMjEuMDE2MSA0MS41NTU3IDIwLjU2NzkgNDEuNTQgMTkuOTkxN0M0MS41MzIyIDE5LjYzOTYgNDEuNjEwOCAxOS41MDM5IDQyLjAwNDkgMTkuNDYzOUM0My4wOTIzIDE5LjMzNTkgNDQuMTQ3OSAxOS4wMzE3IDQ1LjExNjcgMTguNDg3OEM0Ny45MjkyIDE2LjkxOTkgNDkuMDY0IDE0LjM0MzggNDkuMzMxNSAxMS4yNTU5QzQ5LjM3MTEgMTAuNzgzNyA0OS4zMjM3IDEwLjI5NTkgNDguODM1NCAxMC4wNDc5Wk0yNC4zMjYyIDM3LjgzOThDMjAuMTE5NiAzNC40NjM5IDE4LjA3OTEgMzMuMzUyMSAxNy4yMzU4IDMzLjM5OTlDMTYuNDQ4MiAzMy40NDgyIDE2LjU4OTggMzQuMzY4MiAxNi43NjMyIDM0Ljk2NzhDMTYuOTQ0MyAzNS41NjAxIDE3LjE4MTIgMzUuOTY4MyAxNy41MTE3IDM2LjQ4NzhDMTcuNzQwMiAzNi44MzIgMTcuODk3OSAzNy4zNDQyIDE3LjI4MzIgMzcuNzI4QzE1LjkyODIgMzguNTg0IDEzLjU3MjggMzcuNDM5OSAxMy40NjI0IDM3LjM4MzhDMTAuNzIwNyAzNS43MzU4IDguNDI4MjIgMzMuNTYwMSA2LjgxMzQ4IDMwLjU4NEM1LjI1MzQyIDI3LjcxOTcgNC4zNDc2NiAyNC42NDc5IDQuMTk3NzUgMjEuMzY3N0M0LjE1ODIgMjAuNTc1NyA0LjM4NjcyIDIwLjI5NTkgNS4xNTg2OSAyMC4xNTE5QzYuMTc1MjkgMTkuOTYgNy4yMjMxNCAxOS45MTk5IDguMjM5MjYgMjAuMDcxOEMxMi41MzI3IDIwLjcxMTkgMTYuMTg4NSAyMi42NzE5IDE5LjI1MjkgMjUuNzc1OUMyMS4wMDIgMjcuNTQzOSAyMi4zMjUyIDI5LjY1NTggMjMuNjg4NSAzMS43MjAyQzI1LjEzNzcgMzMuOTEyMSAyNi42OTc4IDM2IDI4LjY4MzEgMzcuNzExOUMyOS4zODQzIDM4LjMxMiAyOS45NDM0IDM4Ljc2ODEgMzAuNDc5IDM5LjEwNEMyOC44NjQzIDM5LjI4ODEgMjYuMTY5OSAzOS4zMjgxIDI0LjMyNjIgMzcuODM5OFpNMjYuMzQzMyAyNC42MDAxQzI2LjM0MzMgMjQuMjQ4IDI2LjYxOTEgMjMuOTY3OCAyNi45NjU4IDIzLjk2NzhDMjcuMDQ0NCAyMy45Njc4IDI3LjExNTIgMjMuOTgzOSAyNy4xNzgyIDI0LjAwNzhDMjcuMjY1MSAyNC4wNCAyNy4zNDM4IDI0LjA4NzkgMjcuNDA2NyAyNC4xNjAyQzI3LjUxNzEgMjQuMjcyIDI3LjU4MDEgMjQuNDMyMSAyNy41ODAxIDI0LjYwMDFDMjcuNTgwMSAyNC45NTIxIDI3LjMwNDIgMjUuMjMxOSAyNi45NTc1IDI1LjIzMTlDMjYuNjEwOCAyNS4yMzE5IDI2LjM0MzMgMjQuOTUyMSAyNi4zNDMzIDI0LjYwMDFaTTMyLjYwNjQgMjcuODc5OUMzMi4yMDQ2IDI4LjA0NzkgMzEuODAyNyAyOC4xOTE5IDMxLjQxNjUgMjguMjA4QzMwLjgxNzkgMjguMjM5NyAzMC4xNjQxIDI3Ljk5MjIgMjkuODA5NiAyNy42ODhDMjkuMjU4MyAyNy4yMTU4IDI4Ljg2NDMgMjYuOTUyMSAyOC42OTg3IDI2LjEyNzlDMjguNjI3OSAyNS43NzU5IDI4LjY2NzUgMjUuMjMxOSAyOC43MzA1IDI0LjkxOTlDMjguODcyMSAyNC4yNDggMjguNzE0NCAyMy44MTU5IDI4LjI0OTUgMjMuNDIzOEMyNy44NzE2IDIzLjEwNCAyNy4zOTExIDIzLjAxNjEgMjYuODYzMyAyMy4wMTYxQzI2LjY2NiAyMy4wMTYxIDI2LjQ4NDkgMjIuOTI3NyAyNi4zNTExIDIyLjg1NkMyNi4xMzA0IDIyLjc0NDEgMjUuOTQ5MiAyMi40NjM5IDI2LjEyMjYgMjIuMTIwMUMyNi4xNzc3IDIyLjAwNzggMjYuNDQ1OCAyMS43MzU4IDI2LjUwODggMjEuNjg4QzI3LjIyNTYgMjEuMjcyIDI4LjA1MjcgMjEuNDA3NyAyOC44MTY5IDIxLjcxOTdDMjkuNTI1OSAyMi4wMTYxIDMwLjA2MTUgMjIuNTYwMSAzMC44MzQgMjMuMzI4MUMzMS42MjE2IDI0LjI1NTkgMzEuNzYzMiAyNC41MTE3IDMyLjIxMjQgMjUuMjA4QzMyLjU2NjkgMjUuNzUyIDMyLjg5MDEgMjYuMzEyIDMzLjExMDQgMjYuOTUyMUMzMy4yNDQ2IDI3LjM1MjEgMzMuMDcxMyAyNy42ODAyIDMyLjYwNjQgMjcuODc5OVpcXFwiIGZpbGw9XFxcIlwiICsgY29sb3IgKyBcIlxcXCIgZmlsbC1vcGFjaXR5PVxcXCIxXFxcIiBmaWxsLXJ1bGU9XFxcIm5vbnplcm9cXFwiLz48L3N2Zz5cIlxuICBpZiAoZ2xvdyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc3ZnXG4gIGNvbnN0IGZpbHRlciA9ICc8ZGVmcz48ZmlsdGVyIGlkPVwibWFsa28tZ2xvd1wiIHg9XCItNjAlXCIgeT1cIi02MCVcIiB3aWR0aD1cIjIyMCVcIiBoZWlnaHQ9XCIyMjAlXCI+J1xuICAgICsgJzxmZURyb3BTaGFkb3cgZHg9XCIwXCIgZHk9XCIwXCIgc3RkRGV2aWF0aW9uPVwiJyArIGdsb3cuYmx1ci50b0ZpeGVkKDIpICsgJ1wiJ1xuICAgICsgJyBmbG9vZC1jb2xvcj1cIicgKyBjb2xvciArICdcIiBmbG9vZC1vcGFjaXR5PVwiJyArIGdsb3cub3BhY2l0eS50b0ZpeGVkKDIpICsgJ1wiLz48L2ZpbHRlcj48L2RlZnM+J1xuICByZXR1cm4gc3ZnLnJlcGxhY2UoJz48cGF0aCcsICc+JyArIGZpbHRlciArICc8cGF0aCcpLnJlcGxhY2UoJzxwYXRoJywgJzxwYXRoIGZpbHRlcj1cInVybCgjbWFsa28tZ2xvdylcIicpXG59XG4iLCAiLyoqXG4gKiBkc2gtbWFsa28tcHJlZnMgXHUyMDE0IHRhYiBzdGF0dXMgbGlnaHQgKyBicm93c2VyIG5vdGlmaWNhdGlvbnMgKGJyb3dzZXIgaGFsZikuXG4gKlxuICogUG9ydGVkIGZyb20gZHNoLW5vdGljZS1jZW50ZXIgKE1JVCkuIFRoZSB0YWIgZmF2aWNvbiB0dXJucyBncmVlbiB3aGVuIGEgbWFpblxuICogc2Vzc2lvbiBmaW5pc2hlZCB3aGlsZSB5b3Ugd2VyZSBhd2F5IGFuZCBhbWJlciB3aGlsZSBhIHNlc3Npb24gYXdhaXRzIGFuXG4gKiBpbnRlcmFjdGlvbiAoYW1iZXIgd2lucyksIGFuZCB0aGUgYnJvd3NlciByYWlzZXMgYSBub3RpZmljYXRpb24gb24gY29tcGxldGlvblxuICogb3Igb24gYSBuZXcgcGVuZGluZyBxdWVzdGlvbiAvIGFwcHJvdmFsIC8gcGxhbiByZXZpZXcuXG4gKlxuICogSXQgcmVhZHMgdGhlIG9mZmljaWFsIGNsaWVudCBzaWduYWxzIFx1MjAxNCBgc2Vzc2lvbnNgIHJvd3MgcGx1cyB0aGUgb3B0aW9uYWxcbiAqIGB1aVNlc3Npb24uc2Vzc2lvblN0YXR1c2Agc3RvcmUgXHUyMDE0IGFuZCB0aGUgYG1hbGtvLXByZWZzYCBjb25maWcgZm9ybS4gSXQgb3duc1xuICogbm8gc3RhdGUgYmV5b25kIGluLW1lbW9yeSBib29ra2VlcGluZyBhbmQgcmVzdG9yZXMgdGhlIG9yaWdpbmFsIGZhdmljb24gb25cbiAqIHRlYXJkb3duLlxuICovXG5pbXBvcnQgeyB3aGFsZVN2ZyB9IGZyb20gJy4vd2hhbGUudHMnXG5cbi8qKiBTZXR0aW5ncy9sb2NhbGUgbmFtZXNwYWNlIHNoYXJlZCB3aXRoIHRoZSBzZXR0aW5ncyBwYWdlLiAqL1xuZXhwb3J0IGNvbnN0IExPQ0FMRV9OUyA9ICdzZXR0aW5ncy5tYWxrby1wcmVmcydcblxuY29uc3QgREVGQVVMVF9IUkVGID0gJy9mYXZpY29uLnN2ZydcbmNvbnN0IERFRkFVTFRfR1JFRU4gPSAnIzIyQzU1RSdcbmNvbnN0IERFRkFVTFRfQU1CRVIgPSAnI0Y1OUUwQidcbmNvbnN0IERFRkFVTFRfV09SS0lORyA9ICcjM0I4MkY2J1xuY29uc3QgSEVYID0gL14jWzAtOWEtZkEtRl17Nn0kL1xuLyoqIEdsb3cgYW5pbWF0aW9uOiBmcmFtZSBjb3VudCBhbmQgcGVyLWZyYW1lIGRlbGF5IHdoaWxlIGEgc2Vzc2lvbiBpcyB3b3JraW5nLiAqL1xuY29uc3QgR0xPV19GUkFNRVMgPSAxMFxuY29uc3QgR0xPV19GUkFNRV9NUyA9IDExMFxuLyoqIFRvb2wtbmFtZSBjYXA6IGxvbmdlciBuYW1lcyB3b3VsZCBibG93IHRoZSBub3RpZmljYXRpb24gYm9keSdzIHNpbmdsZSBsaW5lLiAqL1xuY29uc3QgVE9PTF9OQU1FX0xJTUlUID0gMzJcblxuLyoqXG4gKiBCcm93c2VyIG5vdGlmaWNhdGlvbiBhdmFpbGFiaWxpdHkuXG4gKiBAcmV0dXJucyB7J2dyYW50ZWQnIHwgJ2RlbmllZCcgfCAnZGVmYXVsdCcgfCAndW5zdXBwb3J0ZWQnfVxuICovXG5mdW5jdGlvbiBub3RpZmljYXRpb25TdXBwb3J0KCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgTm90aWZpY2F0aW9uID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdzdHJpbmcnKSByZXR1cm4gJ3Vuc3VwcG9ydGVkJ1xuICAgIHJldHVybiBOb3RpZmljYXRpb24ucGVybWlzc2lvblxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gJ3Vuc3VwcG9ydGVkJ1xuICB9XG59XG5cbi8qKiBBc2sgZm9yIHBlcm1pc3Npb24gKG9ubHkgd2hlbiB0aGUgYnJvd3NlciBoYXMgbm90IGRlY2lkZWQgeWV0KS4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0Tm90aWZpY2F0aW9uUGVybWlzc2lvbigpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIE5vdGlmaWNhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ3Vuc3VwcG9ydGVkJylcbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gIT09ICdkZWZhdWx0JykgcmV0dXJuIFByb21pc2UucmVzb2x2ZShOb3RpZmljYXRpb24ucGVybWlzc2lvbilcbiAgICBjb25zdCBhbnN3ZXIgPSBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKVxuICAgIHJldHVybiBhbnN3ZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYW5zd2VyLnRoZW4gPT09ICdmdW5jdGlvbicgPyBhbnN3ZXIgOiBQcm9taXNlLnJlc29sdmUoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24pXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm90aWZpY2F0aW9uU3VwcG9ydCgpKVxuICB9XG59XG5cbi8qKiBDdXJyZW50IHBlcm1pc3Npb24gc3RyaW5nLCBmb3IgdGhlIHNldHRpbmdzIHBhZ2UuICovXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudE5vdGlmaWNhdGlvblBlcm1pc3Npb24oKSB7XG4gIHJldHVybiBub3RpZmljYXRpb25TdXBwb3J0KClcbn1cblxuLyoqIFN0YXRpYyByb3V0ZSB0aGUgSG9zdCBzZXJ2ZXMgdGhlIGJ1bmRsZWQgc291bmRzIGZyb20uICovXG5leHBvcnQgY29uc3QgU09VTkRfUk9VVEUgPSAnL21hbGtvLXByZWZzLXNvdW5kcydcbi8qKiBTZW50aW5lbCBtZWFuaW5nIFwicGxheSBub3RoaW5nXCIuICovXG5leHBvcnQgY29uc3QgU09VTkRfTk9ORSA9ICdub25lJ1xuLyoqIEJ1aWx0LWluIHN5bnRoZXNpemVkIGNoaW1lcyAobm8gYXNzZXQgZmlsZSBuZWVkZWQpLiAqL1xuZXhwb3J0IGNvbnN0IEJVSUxUSU5fU09VTkRTID0gW1xuICB7IGlkOiAnYnVpbHRpbi11cCcsIGxhYmVsS2V5OiAnc291bmRCdWlsdGluVXAnIH0sXG4gIHsgaWQ6ICdidWlsdGluLWRvd24nLCBsYWJlbEtleTogJ3NvdW5kQnVpbHRpbkRvd24nIH0sXG5dXG4vKiogb3BlbmNvZGUgc291bmQgcGFja3MgYnVuZGxlZCB1bmRlciBgYXNzZXRzL2F1ZGlvYCAoTUlUKS4gKi9cbmV4cG9ydCBjb25zdCBTT1VORF9QQUNLUyA9IFtcbiAgeyBuYW1lOiAnQWxlcnQnLCBwcmVmaXg6ICdhbGVydCcsIGNvdW50OiAxMCB9LFxuICB7IG5hbWU6ICdCaXAtYm9wJywgcHJlZml4OiAnYmlwLWJvcCcsIGNvdW50OiAxMCB9LFxuICB7IG5hbWU6ICdTdGFwbGVib3BzJywgcHJlZml4OiAnc3RhcGxlYm9wcycsIGNvdW50OiA3IH0sXG4gIHsgbmFtZTogJ05vcGUnLCBwcmVmaXg6ICdub3BlJywgY291bnQ6IDEyIH0sXG4gIHsgbmFtZTogJ1l1cCcsIHByZWZpeDogJ3l1cCcsIGNvdW50OiA2IH0sXG5dXG5cbi8qKiBTb3VuZCBpZHMgb2Ygb25lIHBhY2ssIGluIGRpc3BsYXkgb3JkZXIuICovXG5leHBvcnQgZnVuY3Rpb24gcGFja1NvdW5kSWRzKHBhY2spIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHBhY2suY291bnQgfSwgKF8sIGkpID0+IGAke3BhY2sucHJlZml4fS0ke1N0cmluZyhpICsgMSkucGFkU3RhcnQoMiwgJzAnKX1gKVxufVxuXG4vKiogQ2xhbXAgYW4gYXJiaXRyYXJ5IHZvbHVtZSB0byAwXHUyMDEzMSAoZGVmYXVsdCAwLjYpLiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVm9sdW1lKHZvbHVtZSkge1xuICBpZiAodHlwZW9mIHZvbHVtZSAhPT0gJ251bWJlcicgfHwgIU51bWJlci5pc0Zpbml0ZSh2b2x1bWUpKSByZXR1cm4gMC42XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2b2x1bWUsIDApLCAxKVxufVxuXG4vKiogU2hhcmVkIEF1ZGlvQ29udGV4dCBmb3IgdGhlIHN5bnRoZXNpemVkIGNoaW1lcy4gKi9cbmxldCBjaGltZUNvbnRleHRcbmZ1bmN0aW9uIGNoaW1lQXVkaW9Db250ZXh0KCkge1xuICBpZiAoY2hpbWVDb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiBjaGltZUNvbnRleHRcbiAgdHJ5IHtcbiAgICBjb25zdCBDdG9yID0gd2luZG93LkF1ZGlvQ29udGV4dCA/PyB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0XG4gICAgY2hpbWVDb250ZXh0ID0gQ3RvciA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG5ldyBDdG9yKClcbiAgfSBjYXRjaCB7XG4gICAgY2hpbWVDb250ZXh0ID0gbnVsbFxuICB9XG4gIHJldHVybiBjaGltZUNvbnRleHRcbn1cblxuLyoqIFJlc3VtZSB0aGUgYXVkaW8gY29udGV4dCBpbnNpZGUgYSB1c2VyIGdlc3R1cmUgKGF1dG9wbGF5IHBvbGljeSkuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbWVTb3VuZCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhdWRpbyA9IGNoaW1lQXVkaW9Db250ZXh0KClcbiAgICBpZiAoYXVkaW8gIT09IG51bGwgJiYgYXVkaW8uc3RhdGUgPT09ICdzdXNwZW5kZWQnKSBhdWRpby5yZXN1bWU/LigpXG4gIH0gY2F0Y2ggeyAvKiBpZ25vcmUgKi8gfVxufVxuXG4vKiogU3ludGhlc2l6ZWQgY2hpbWU6IHVwIChkb25lKSBvciBkb3duIChwZW5kaW5nKS4gKi9cbmZ1bmN0aW9uIHBsYXlDaGltZShraW5kLCB2b2x1bWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsZXZlbCA9IG5vcm1hbGl6ZVZvbHVtZSh2b2x1bWUpXG4gICAgaWYgKGxldmVsIDw9IDApIHJldHVyblxuICAgIGNvbnN0IGF1ZGlvID0gY2hpbWVBdWRpb0NvbnRleHQoKVxuICAgIGlmIChhdWRpbyA9PT0gbnVsbCkgcmV0dXJuXG4gICAgaWYgKGF1ZGlvLnN0YXRlID09PSAnc3VzcGVuZGVkJykgYXVkaW8ucmVzdW1lPy4oKVxuICAgIGNvbnN0IG5vdGVzID0ga2luZCA9PT0gJ2RvbmUnID8gWzY2MCwgOTkwXSA6IFs4ODAsIDU4N11cbiAgICBjb25zdCBiYXNlID0gYXVkaW8uY3VycmVudFRpbWVcbiAgICBub3Rlcy5mb3JFYWNoKChmcmVxdWVuY3ksIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvc2NpbGxhdG9yID0gYXVkaW8uY3JlYXRlT3NjaWxsYXRvcigpXG4gICAgICBjb25zdCBnYWluID0gYXVkaW8uY3JlYXRlR2FpbigpXG4gICAgICBjb25zdCBzdGFydCA9IGJhc2UgKyBpbmRleCAqIDAuMTRcbiAgICAgIG9zY2lsbGF0b3IudHlwZSA9ICdzaW5lJ1xuICAgICAgb3NjaWxsYXRvci5mcmVxdWVuY3kudmFsdWUgPSBmcmVxdWVuY3lcbiAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjAwMDEsIHN0YXJ0KVxuICAgICAgZ2Fpbi5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4xMiAqIGxldmVsLCBzdGFydCArIDAuMDIpXG4gICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMDEsIHN0YXJ0ICsgMC4xOClcbiAgICAgIG9zY2lsbGF0b3IuY29ubmVjdChnYWluKVxuICAgICAgZ2Fpbi5jb25uZWN0KGF1ZGlvLmRlc3RpbmF0aW9uKVxuICAgICAgb3NjaWxsYXRvci5zdGFydChzdGFydClcbiAgICAgIG9zY2lsbGF0b3Iuc3RvcChzdGFydCArIDAuMilcbiAgICB9KVxuICB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbn1cblxuLyoqIEVsZW1lbnQgY3VycmVudGx5IHBsYXlpbmcsIHNvIG92ZXJsYXBwaW5nIHNvdW5kcyBkbyBub3Qgc3RhY2suICovXG5sZXQgYWN0aXZlU291bmQgPSBudWxsXG5mdW5jdGlvbiBzdG9wU291bmQoKSB7XG4gIGNvbnN0IGF1ZGlvID0gYWN0aXZlU291bmRcbiAgYWN0aXZlU291bmQgPSBudWxsXG4gIGlmIChhdWRpbyA9PT0gbnVsbCkgcmV0dXJuXG4gIHRyeSB7IGF1ZGlvLnBhdXNlKCk7IGF1ZGlvLmN1cnJlbnRUaW1lID0gMCB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbn1cblxuLyoqXG4gKiBQbGF5IGEgc291bmQgaWQ6IGBidWlsdGluLSpgIGlzIHN5bnRoZXNpemVkLCBhIHBhY2sgaWQgc3RyZWFtcyB0aGUgSG9zdCdzXG4gKiBidW5kbGVkIG1wMyBhbmQgZmFsbHMgYmFjayB0byB0aGUgc3ludGhlc2l6ZWQgY2hpbWUgd2hlbiB1bmF2YWlsYWJsZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBzb3VuZCBpZCAoYG5vbmVgID0gc2lsZW5jZSkuXG4gKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lIDBcdTIwMTMxLlxuICogQHBhcmFtIHsnZG9uZScgfCAncGVuZGluZyd9IGtpbmQgZHJpdmVzIHRoZSBmYWxsYmFjayBjaGltZSdzIHBpdGNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGxheVNvdW5kKGlkLCB2b2x1bWUsIGtpbmQpIHtcbiAgY29uc3QgbGV2ZWwgPSBub3JtYWxpemVWb2x1bWUodm9sdW1lKVxuICBpZiAobGV2ZWwgPD0gMCkgcmV0dXJuXG4gIGNvbnN0IG5hbWUgPSB0eXBlb2YgaWQgPT09ICdzdHJpbmcnID8gaWQgOiAnJ1xuICBpZiAobmFtZSA9PT0gJycgfHwgbmFtZSA9PT0gU09VTkRfTk9ORSkgcmV0dXJuXG4gIHN0b3BTb3VuZCgpXG4gIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ2J1aWx0aW4tJykpIHtcbiAgICBwbGF5Q2hpbWUobmFtZSA9PT0gJ2J1aWx0aW4tdXAnID8gJ2RvbmUnIDogbmFtZSA9PT0gJ2J1aWx0aW4tZG93bicgPyAncGVuZGluZycgOiBraW5kLCBsZXZlbClcbiAgICByZXR1cm5cbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKFNPVU5EX1JPVVRFICsgJy8nICsgbmFtZSArICcubXAzJylcbiAgICBhdWRpby52b2x1bWUgPSBsZXZlbFxuICAgIGFjdGl2ZVNvdW5kID0gYXVkaW9cbiAgICBjb25zdCBwbGF5ZWQgPSBhdWRpby5wbGF5KClcbiAgICBpZiAocGxheWVkICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBsYXllZC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGxheWVkLmNhdGNoKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZVNvdW5kID09PSBhdWRpbykgYWN0aXZlU291bmQgPSBudWxsXG4gICAgICAgIHBsYXlDaGltZShraW5kLCBsZXZlbClcbiAgICAgIH0pXG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICBwbGF5Q2hpbWUoa2luZCwgbGV2ZWwpXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCB0aGUgc2Vzc2lvbiBzaWduYWxzIGFuZCBkcml2ZSB0aGUgdGFiIGljb24gKyBub3RpZmljYXRpb25zLlxuICogQHBhcmFtIHtvYmplY3R9IGN0eCBjbGllbnQgcGx1Z2luIGNvbnRleHQgKG5lZWRzIGBzZXNzaW9uc2AsIGBsb2NhbGVgKS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmb3JtIHRoZSBgbWFsa28tcHJlZnNgIGNvbmZpZyBmb3JtIChzbmFwc2hvdCArIHN1YnNjcmliZSkuXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH0gZGlzcG9zZXIgcmVzdG9yaW5nIHRoZSBmYXZpY29uIGFuZCByZW1vdmluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0YXR1c0xpZ2h0KGN0eCwgZm9ybSkge1xuICBjb25zdCBsaXN0ID0gY3R4LnNlc3Npb25zLmxpc3RcbiAgY29uc3QgbG9jYWxlID0gKCkgPT4gY3R4LmxvY2FsZS5iaW5kKExPQ0FMRV9OUylcbiAgLyoqIE9wdGlvbmFsIG9mZmljaWFsIHN0YXR1cyBzb3VyY2UgKDAuMS43Kyk7IHJvd3Mga2VlcCB0aGVpciBsZWdhY3kgZmllbGRzIG90aGVyd2lzZS4gKi9cbiAgbGV0IHN0YXR1c1NvdXJjZVxuICAvKiogRGVkdXBlIGtleXMgKGBzZXNzaW9uSWQ6a2luZGApIGFscmVhZHkgcXVldWVkLiAqL1xuICBjb25zdCBub3RpZmllZCA9IG5ldyBTZXQoKVxuICAvKiogQWdncmVnYXRpb24gd2luZG93IHNvIGEgYnVyc3Qgb2YgdHJhbnNpdGlvbnMgYmVjb21lcyBvbmUgbm90aWZpY2F0aW9uLiAqL1xuICBjb25zdCBub3RpZnlRdWV1ZSA9IG5ldyBNYXAoKVxuICBsZXQgbm90aWZ5VGltZXJcbiAgLyoqIExhc3Qgb2JzZXJ2ZWQgY29tcGxldGlvbiBzdGF0ZSBwZXIgc2Vzc2lvbiAoZmFsc2UgXHUyMTkyIHRydWUgZWRnZSBkZXRlY3Rpb24pLiAqL1xuICBjb25zdCBwcmV2Q29tcGxldGVkID0gbmV3IE1hcCgpXG4gIC8qKiBSdW4gc3RhcnQgcGVyIHNlc3Npb24sIHRoZW4gdGhlIGxhc3QgcnVuIGR1cmF0aW9uIChtcykuICovXG4gIGNvbnN0IHJ1blN0YXJ0ZWRBdCA9IG5ldyBNYXAoKVxuICBjb25zdCBsYXN0UnVuTXMgPSBuZXcgTWFwKClcbiAgbGV0IHByZXZQZW5kaW5nID0gbmV3IFNldCgpXG4gIGxldCBwZW5kaW5nU2VlbiA9IGZhbHNlXG5cbiAgLyoqIFJlYWxseSBpbiB0aGUgZm9yZWdyb3VuZDogdGFiIHZpc2libGUgQU5EIHdpbmRvdyBmb2N1c2VkLiAqL1xuICBjb25zdCBpc0ZvcmVncm91bmQgPSAoKSA9PiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJyAmJiBkb2N1bWVudC5oYXNGb2N1cygpXG5cbiAgLyoqIFJlYWQgdGhlIG5vdGlmaWNhdGlvbi9jb2xvciBwcmVmZXJlbmNlcyAodW5zZXQgZmFsbHMgYmFjayB0byBkZWZhdWx0cykuICovXG4gIGZ1bmN0aW9uIHJlYWRDb25maWcoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBmb3JtLmdldFNuYXBzaG90KCkudmFsdWUgPz8ge31cbiAgICByZXR1cm4ge1xuICAgICAgY29sb3JzRW5hYmxlZDogdmFsdWUuY29sb3JzRW5hYmxlZCAhPT0gZmFsc2UsXG4gICAgICBncmVlbjogSEVYLnRlc3QodmFsdWUuZ3JlZW4pID8gdmFsdWUuZ3JlZW4gOiBERUZBVUxUX0dSRUVOLFxuICAgICAgYW1iZXI6IEhFWC50ZXN0KHZhbHVlLmFtYmVyKSA/IHZhbHVlLmFtYmVyIDogREVGQVVMVF9BTUJFUixcbiAgICAgIHdvcmtpbmc6IEhFWC50ZXN0KHZhbHVlLndvcmtpbmcpID8gdmFsdWUud29ya2luZyA6IERFRkFVTFRfV09SS0lORyxcbiAgICAgIGJsYWNrOiBIRVgudGVzdCh2YWx1ZS5ibGFjaykgPyB2YWx1ZS5ibGFjayA6IHVuZGVmaW5lZCxcbiAgICAgIG5vdGlmeUVuYWJsZWQ6IHZhbHVlLm5vdGlmeUVuYWJsZWQgPT09IHRydWUsXG4gICAgICBub3RpZnlGb3JlZ3JvdW5kOiB2YWx1ZS5ub3RpZnlGb3JlZ3JvdW5kID09PSB0cnVlLFxuICAgICAgbm90aWZ5QXV0b0hpZGU6IHZhbHVlLm5vdGlmeUF1dG9IaWRlICE9PSBmYWxzZSxcbiAgICAgIHZvbHVtZTogbm9ybWFsaXplVm9sdW1lKHZhbHVlLm5vdGlmeVZvbHVtZSA/PyAwLjYpLFxuICAgICAgZG9uZVNvdW5kOiB0eXBlb2YgdmFsdWUubm90aWZ5RG9uZVNvdW5kID09PSAnc3RyaW5nJyA/IHZhbHVlLm5vdGlmeURvbmVTb3VuZCA6IFNPVU5EX05PTkUsXG4gICAgICBwZW5kaW5nU291bmQ6IHR5cGVvZiB2YWx1ZS5ub3RpZnlQZW5kaW5nU291bmQgPT09ICdzdHJpbmcnID8gdmFsdWUubm90aWZ5UGVuZGluZ1NvdW5kIDogU09VTkRfTk9ORSxcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gZmF2aWNvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgaWNvbkxpbmsgPSAoKSA9PiBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsfj1cImljb25cIl0nKVxuICBjb25zdCBzZXRIcmVmID0gKGhyZWYpID0+IHsgY29uc3QgbGluayA9IGljb25MaW5rKCk7IGlmIChsaW5rKSBsaW5rLmhyZWYgPSBocmVmIH1cbiAgLyoqIE9yaWdpbmFsIGhyZWYgYXQgc3RhcnQtdXA7IHJlc3RvcmluZyBpdCBiZWF0cyBoYXJkY29kaW5nIGEgcGF0aC4gKi9cbiAgY29uc3Qgb3JpZ2luYWxIcmVmID0gaWNvbkxpbmsoKT8uaHJlZiA/PyBERUZBVUxUX0hSRUZcbiAgLyoqIExhc3QgaHJlZiB3ZSBzZXQ7IGAnZ2xvdydgIHdoaWxlIGFuaW1hdGluZzsgbnVsbCA9IG9mZmljaWFsIGljb24uICovXG4gIGxldCBhcHBsaWVkID0gbnVsbFxuICBjb25zdCB1cmkgPSAoaGV4KSA9PiBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHdoYWxlU3ZnKGhleCkpfWBcbiAgY29uc3QgcmVzdG9yZSA9ICgpID0+IHsgaWYgKGFwcGxpZWQgIT09IG51bGwpIHsgc2V0SHJlZihvcmlnaW5hbEhyZWYpOyBhcHBsaWVkID0gbnVsbCB9IH1cblxuICAvLyBXb3JraW5nIHN0YXRlOiB0aGUgZmF2aWNvbiBjYW5ub3QgYW5pbWF0ZSBvbiBpdHMgb3duIChicm93c2VycyBkbyBub3QgcnVuXG4gIC8vIFNWRyBhbmltYXRpb24gaW4gdGhlIHRhYiksIHNvIHdlIHN3YXAgcHJlLXJlbmRlcmVkIGdsb3cgZnJhbWVzIG9uIGEgdGltZXIuXG4gIGxldCBhbmltVGltZXJcbiAgbGV0IGFuaW1Db2xvclxuICBjb25zdCB1cmlHbG93ID0gKGhleCwgYmx1ciwgb3BhY2l0eSkgPT4gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudCh3aGFsZVN2ZyhoZXgsIHsgYmx1ciwgb3BhY2l0eSB9KSl9YFxuICAvKiogT25lIHB1bHNpbmcgZ2xvdyBjeWNsZSBmb3IgYGhleGAsIGFzIGRhdGEtVVJJIGZyYW1lcy4gKi9cbiAgZnVuY3Rpb24gZ2xvd0ZyYW1lcyhoZXgpIHtcbiAgICBjb25zdCBmcmFtZXMgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR0xPV19GUkFNRVM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcGhhc2UgPSAoMSAtIE1hdGguY29zKChpIC8gR0xPV19GUkFNRVMpICogTWF0aC5QSSAqIDIpKSAvIDJcbiAgICAgIGZyYW1lcy5wdXNoKHVyaUdsb3coaGV4LCAwLjggKyBwaGFzZSAqIDMuMiwgMC4xNSArIHBoYXNlICogMC44NSkpXG4gICAgfVxuICAgIHJldHVybiBmcmFtZXNcbiAgfVxuICBmdW5jdGlvbiBzdG9wQW5pbWF0aW9uKCkge1xuICAgIGlmIChhbmltVGltZXIgIT09IHVuZGVmaW5lZCkgeyBjbGVhckludGVydmFsKGFuaW1UaW1lcik7IGFuaW1UaW1lciA9IHVuZGVmaW5lZCB9XG4gICAgYW5pbUNvbG9yID0gdW5kZWZpbmVkXG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oaGV4KSB7XG4gICAgaWYgKGFuaW1UaW1lciAhPT0gdW5kZWZpbmVkICYmIGFuaW1Db2xvciA9PT0gaGV4KSByZXR1cm5cbiAgICBzdG9wQW5pbWF0aW9uKClcbiAgICBjb25zdCBmcmFtZXMgPSBnbG93RnJhbWVzKGhleClcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgc2V0SHJlZihmcmFtZXNbMF0pXG4gICAgYXBwbGllZCA9ICdnbG93J1xuICAgIGFuaW1Db2xvciA9IGhleFxuICAgIGFuaW1UaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGluZGV4ID0gKGluZGV4ICsgMSkgJSBmcmFtZXMubGVuZ3RoXG4gICAgICBzZXRIcmVmKGZyYW1lc1tpbmRleF0pXG4gICAgfSwgR0xPV19GUkFNRV9NUylcbiAgfVxuXG4gIC8vIC0tLSBub3RpZmljYXRpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBQRU5ESU5HX0tJTkRfS0VZUyA9IHtcbiAgICBhcHByb3ZhbDogJ3BlbmRpbmdLaW5kQXBwcm92YWwnLFxuICAgIHF1ZXN0aW9uOiAncGVuZGluZ0tpbmRRdWVzdGlvbicsXG4gICAgJ3BsYW4tcmV2aWV3JzogJ3BlbmRpbmdLaW5kUGxhblJldmlldycsXG4gIH1cblxuICAvKiogUGVuZGluZyBpbnRlcmFjdGlvbiBcdTIxOTIgbm90aWZpY2F0aW9uIGJvZHkgdGV4dCAoZGVmZW5zaXZlIHJlYWRzKS4gKi9cbiAgZnVuY3Rpb24gcGVuZGluZ1R5cGVMYWJlbChpbnRlcmFjdGlvbikge1xuICAgIGNvbnN0IHQgPSBsb2NhbGUoKVxuICAgIGNvbnN0IGtpbmQgPSBpbnRlcmFjdGlvbj8ua2luZFxuICAgIGlmIChraW5kID09PSAnYXBwcm92YWwnKSB7XG4gICAgICBjb25zdCB0b29sID0gaW50ZXJhY3Rpb24udG9vbE5hbWVcbiAgICAgIGlmICh0eXBlb2YgdG9vbCAhPT0gJ3N0cmluZycgfHwgdG9vbCA9PT0gJycpIHJldHVybiB0KCdwZW5kaW5nS2luZEFwcHJvdmFsJylcbiAgICAgIGNvbnN0IHNob3duID0gdG9vbC5sZW5ndGggPiBUT09MX05BTUVfTElNSVQgPyB0b29sLnNsaWNlKDAsIFRPT0xfTkFNRV9MSU1JVCkgKyAnXHUyMDI2JyA6IHRvb2xcbiAgICAgIHJldHVybiB0KCdwZW5kaW5nQXBwcm92YWxUb29sJywgeyB0b29sOiBzaG93biB9KVxuICAgIH1cbiAgICBpZiAoa2luZCA9PT0gJ3F1ZXN0aW9uJykge1xuICAgICAgY29uc3QgcXVlc3Rpb25zID0gQXJyYXkuaXNBcnJheShpbnRlcmFjdGlvbi5xdWVzdGlvbnMpID8gaW50ZXJhY3Rpb24ucXVlc3Rpb25zIDogW11cbiAgICAgIGlmIChxdWVzdGlvbnMubGVuZ3RoID4gMSkgcmV0dXJuIHQoJ3BlbmRpbmdRdWVzdGlvbkJhdGNoJywgeyBjb3VudDogcXVlc3Rpb25zLmxlbmd0aCB9KVxuICAgICAgY29uc3QgZmlyc3QgPSBxdWVzdGlvbnNbMF1cbiAgICAgIGlmIChmaXJzdCA9PT0gbnVsbCB8fCB0eXBlb2YgZmlyc3QgIT09ICdvYmplY3QnKSByZXR1cm4gdCgncGVuZGluZ0tpbmRRdWVzdGlvbicpXG4gICAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuaXNBcnJheShmaXJzdC5vcHRpb25zKSA/IGZpcnN0Lm9wdGlvbnMgOiBbXVxuICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSByZXR1cm4gdCgncGVuZGluZ1F1ZXN0aW9uRmlsbCcpXG4gICAgICByZXR1cm4gZmlyc3QubXVsdGlTZWxlY3QgPT09IHRydWUgPyB0KCdwZW5kaW5nUXVlc3Rpb25NdWx0aScpIDogdCgncGVuZGluZ1F1ZXN0aW9uQ2hvb3NlJylcbiAgICB9XG4gICAgY29uc3Qga2V5ID0gUEVORElOR19LSU5EX0tFWVNba2luZF1cbiAgICByZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB0KGtleSlcbiAgfVxuXG4gIC8qKiBRdWV1ZSBvbmUgbm90aWZpY2F0aW9uIChza2lwcGVkIHdoaWxlIGRpc2FibGVkOyBkZWR1cGVkOyAzMDAgbXMgd2luZG93KS4gKi9cbiAgZnVuY3Rpb24gcXVldWVOb3RpZmljYXRpb24oa2luZCwgc2Vzc2lvbklkLCBsYWJlbCwgdHlwZUxhYmVsLCBkdXJhdGlvbk1zKSB7XG4gICAgaWYgKCFyZWFkQ29uZmlnKCkubm90aWZ5RW5hYmxlZCkgcmV0dXJuXG4gICAgY29uc3Qga2V5ID0gc2Vzc2lvbklkICsgJzonICsga2luZFxuICAgIGlmIChub3RpZmllZC5oYXMoa2V5KSkgcmV0dXJuXG4gICAgbm90aWZpZWQuYWRkKGtleSlcbiAgICBub3RpZnlRdWV1ZS5zZXQoa2V5LCB7IGtpbmQsIHNlc3Npb25JZCwgbGFiZWwsIHR5cGVMYWJlbCwgZHVyYXRpb25NcyB9KVxuICAgIGlmIChub3RpZnlUaW1lciA9PT0gdW5kZWZpbmVkKSBub3RpZnlUaW1lciA9IHNldFRpbWVvdXQoZmx1c2hOb3RpZmljYXRpb25zLCAzMDApXG4gIH1cblxuICAvKiogRmx1c2ggdGhlIGFnZ3JlZ2F0aW9uIHdpbmRvdyBpbnRvIGJyb3dzZXIgbm90aWZpY2F0aW9ucy4gKi9cbiAgZnVuY3Rpb24gZmx1c2hOb3RpZmljYXRpb25zKCkge1xuICAgIG5vdGlmeVRpbWVyID0gdW5kZWZpbmVkXG4gICAgY29uc3QgZW50cmllcyA9IFsuLi5ub3RpZnlRdWV1ZS52YWx1ZXMoKV1cbiAgICBub3RpZnlRdWV1ZS5jbGVhcigpXG4gICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSByZXR1cm5cbiAgICBpZiAobm90aWZpY2F0aW9uU3VwcG9ydCgpICE9PSAnZ3JhbnRlZCcpIHJldHVyblxuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKVxuICAgIGlmICghY29uZmlnLm5vdGlmeUZvcmVncm91bmQgJiYgaXNGb3JlZ3JvdW5kKCkpIHJldHVyblxuICAgIGNvbnN0IHQgPSBsb2NhbGUoKVxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwKClcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IGJ1Y2tldCA9IGdyb3VwZWQuZ2V0KGVudHJ5LmtpbmQpID8/IFtdXG4gICAgICBidWNrZXQucHVzaChlbnRyeSlcbiAgICAgIGdyb3VwZWQuc2V0KGVudHJ5LmtpbmQsIGJ1Y2tldClcbiAgICB9XG4gICAgZm9yIChjb25zdCBba2luZCwgYnVja2V0XSBvZiBncm91cGVkKSB7XG4gICAgICBjb25zdCBoZWFkID0gYnVja2V0WzBdXG4gICAgICBjb25zdCBleHRyYSA9IGJ1Y2tldC5sZW5ndGggLSAxXG4gICAgICBsZXQgdGl0bGUgPSBoZWFkLmxhYmVsID8/IGhlYWQuc2Vzc2lvbklkXG4gICAgICBpZiAoZXh0cmEgPiAwKSB0aXRsZSA9IHRpdGxlICsgJyArJyArIFN0cmluZyhleHRyYSlcbiAgICAgIGxldCBib2R5ID0ga2luZCA9PT0gJ2RvbmUnID8gdCgnbm90aWZ5RG9uZVRpdGxlJykgOiAoaGVhZC50eXBlTGFiZWwgPz8gdCgnbm90aWZ5UGVuZGluZ1RpdGxlJykpXG4gICAgICBpZiAoa2luZCA9PT0gJ2RvbmUnICYmIGV4dHJhID09PSAwICYmIGhlYWQuZHVyYXRpb25NcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJvZHkgPSBib2R5ICsgJyBcdTAwQjcgJyArIHQoJ25vdGlmeUR1cmF0aW9uJywgeyBkdXJhdGlvbjogZm9ybWF0UnVuRHVyYXRpb24oaGVhZC5kdXJhdGlvbk1zLCB0KSB9KVxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IG5vIGB0YWdgOiByZXVzaW5nIG9uZSBtYWtlcyBzb21lIHBsYXRmb3JtcyBzaWxlbnRseVxuICAgICAgICAvLyByZXBsYWNlIHRoZSBwcmV2aW91cyBiYW5uZXIgaW5zdGVhZCBvZiByYWlzaW5nIGEgbmV3IG9uZS5cbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbih0aXRsZSwge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgaWNvbjogdXJpKGtpbmQgPT09ICdkb25lJyA/IGNvbmZpZy5ncmVlbiA6IGNvbmZpZy5hbWJlciksXG4gICAgICAgICAgcmVxdWlyZUludGVyYWN0aW9uOiAhY29uZmlnLm5vdGlmeUF1dG9IaWRlLFxuICAgICAgICB9KVxuICAgICAgICBwbGF5U291bmQoa2luZCA9PT0gJ2RvbmUnID8gY29uZmlnLmRvbmVTb3VuZCA6IGNvbmZpZy5wZW5kaW5nU291bmQsIGNvbmZpZy52b2x1bWUsIGtpbmQpXG4gICAgICAgIG5vdGlmaWNhdGlvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgIHRyeSB7IHdpbmRvdy5mb2N1cygpIH0gY2F0Y2ggeyAvKiBpZ25vcmUgKi8gfVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB3b3Jrc3BhY2UgPSBjdHguZ2V0KCd1aVdvcmtzcGFjZScpXG4gICAgICAgICAgICBpZiAod29ya3NwYWNlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdvcmtzcGFjZS5vcGVuU2Vzc2lvbiA9PT0gJ2Z1bmN0aW9uJykgd29ya3NwYWNlLm9wZW5TZXNzaW9uKGhlYWQuc2Vzc2lvbklkKVxuICAgICAgICAgICAgZWxzZSBjdHguc2Vzc2lvbnMub3BlbihoZWFkLnNlc3Npb25JZClcbiAgICAgICAgICB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbiAgICAgICAgICBub3RpZmljYXRpb24uY2xvc2UoKVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1ttYWxrby1wcmVmc10gY291bGQgbm90IHJhaXNlIG5vdGlmaWNhdGlvbicsIGVycm9yKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiA2MCBzIHJvbGxzIGludG8gbWludXRlcywgc2Vjb25kcyB6ZXJvLXBhZGRlZCAobWF0Y2hlcyB0aGUgb2ZmaWNpYWwgZm9ybWF0KS4gKi9cbiAgZnVuY3Rpb24gZm9ybWF0UnVuRHVyYXRpb24obXMsIHQpIHtcbiAgICBjb25zdCB0b3RhbCA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3IobXMgLyAxMDAwKSlcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0b3RhbCAvIDYwKVxuICAgIGNvbnN0IHNlY29uZHMgPSB0b3RhbCAlIDYwXG4gICAgcmV0dXJuIG1pbnV0ZXMgPiAwXG4gICAgICA/IHQoJ2R1cmF0aW9uTWludXRlcycsIHsgbWludXRlcywgc2Vjb25kczogU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykgfSlcbiAgICAgIDogdCgnZHVyYXRpb25TZWNvbmRzJywgeyBzZWNvbmRzIH0pXG4gIH1cblxuICAvKiogQ29tcGxldGlvbiAvIHBlbmRpbmcgdHJhbnNpdGlvbnMgZnJvbSB0aGUgc2Vzc2lvbiBzdGF0ZS4gKi9cbiAgZnVuY3Rpb24gZGV0ZWN0VHJhbnNpdGlvbnMoc3RhdGUpIHtcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKHN0YXRlLmJ5SWQpKSB7XG4gICAgICBpZiAocm93Lm9yaWdpbiA9PT0gJ3N1YmFnZW50JykgY29udGludWVcbiAgICAgIGNvbnN0IGJlZm9yZSA9IHByZXZDb21wbGV0ZWQuZ2V0KHJvdy5pZClcbiAgICAgIGNvbnN0IG5vdyA9IHJvdy5jb21wbGV0ZWQgPT09IHRydWVcbiAgICAgIGlmIChiZWZvcmUgPT09IGZhbHNlICYmIG5vdykgcXVldWVOb3RpZmljYXRpb24oJ2RvbmUnLCByb3cuaWQsIHJvdy5kaXNwbGF5VGl0bGUgPz8gcm93LnRpdGxlID8/IHJvdy5pZCwgdW5kZWZpbmVkLCBsYXN0UnVuTXMuZ2V0KHJvdy5pZCkpXG4gICAgICBpZiAoIW5vdykgbm90aWZpZWQuZGVsZXRlKHJvdy5pZCArICc6ZG9uZScpXG4gICAgICBwcmV2Q29tcGxldGVkLnNldChyb3cuaWQsIG5vdylcbiAgICB9XG4gICAgZm9yIChjb25zdCBpZCBvZiBbLi4ucHJldkNvbXBsZXRlZC5rZXlzKCldKSB7XG4gICAgICBpZiAoIShpZCBpbiBzdGF0ZS5ieUlkKSkgeyBwcmV2Q29tcGxldGVkLmRlbGV0ZShpZCk7IG5vdGlmaWVkLmRlbGV0ZShpZCArICc6ZG9uZScpIH1cbiAgICB9XG4gICAgY29uc3QgY3VycmVudCA9IG5ldyBTZXQoKVxuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMoc3RhdGUuYnlJZCkpIGlmIChyb3cucGVuZGluZ0ludGVyYWN0aW9uICE9PSB1bmRlZmluZWQpIGN1cnJlbnQuYWRkKHJvdy5pZClcbiAgICBpZiAocGVuZGluZ1NlZW4pIHtcbiAgICAgIGZvciAoY29uc3QgaWQgb2YgY3VycmVudCkge1xuICAgICAgICBpZiAocHJldlBlbmRpbmcuaGFzKGlkKSkgY29udGludWVcbiAgICAgICAgY29uc3Qgcm93ID0gc3RhdGUuYnlJZFtpZF1cbiAgICAgICAgaWYgKHJvdyAhPT0gdW5kZWZpbmVkICYmIHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICAgIGNvbnN0IGxhYmVsID0gcm93Py5kaXNwbGF5VGl0bGUgPz8gcm93Py50aXRsZSA/PyBpZFxuICAgICAgICBxdWV1ZU5vdGlmaWNhdGlvbigncGVuZGluZycsIGlkLCBsYWJlbCwgcGVuZGluZ1R5cGVMYWJlbChyb3c/LnBlbmRpbmdJbnRlcmFjdGlvbikpXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgcHJldlBlbmRpbmcpIGlmICghY3VycmVudC5oYXMoaWQpKSBub3RpZmllZC5kZWxldGUoaWQgKyAnOnBlbmRpbmcnKVxuICAgIHByZXZQZW5kaW5nID0gY3VycmVudFxuICAgIHBlbmRpbmdTZWVuID0gdHJ1ZVxuICB9XG5cbiAgLyoqIFNlbGYtdHJhY2tlZCBydW5uaW5nIGVkZ2U6IGZpbGxzIHRoZSBnYXAgZm9yIHRoZSBzZXNzaW9uIGJlaW5nIHZpZXdlZC4gKi9cbiAgY29uc3QgcHJldlJ1bm5pbmcgPSBuZXcgTWFwKClcbiAgY29uc3QgZmluaXNoZWRXaGlsZUhpZGRlbiA9IG5ldyBTZXQoKVxuICBmdW5jdGlvbiB0cmFja0VkZ2VzKHN0YXRlKSB7XG4gICAgZm9yIChjb25zdCByb3cgb2YgT2JqZWN0LnZhbHVlcyhzdGF0ZS5ieUlkKSkge1xuICAgICAgaWYgKHJvdy5vcmlnaW4gPT09ICdzdWJhZ2VudCcpIGNvbnRpbnVlXG4gICAgICBjb25zdCBwcmV2ID0gcHJldlJ1bm5pbmcuZ2V0KHJvdy5pZClcbiAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHsgcHJldlJ1bm5pbmcuc2V0KHJvdy5pZCwgcm93LnJ1bm5pbmcpOyBjb250aW51ZSB9XG4gICAgICBpZiAoIXByZXYgJiYgcm93LnJ1bm5pbmcpIHJ1blN0YXJ0ZWRBdC5zZXQocm93LmlkLCBEYXRlLm5vdygpKVxuICAgICAgaWYgKHByZXYgJiYgIXJvdy5ydW5uaW5nKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHJ1blN0YXJ0ZWRBdC5nZXQocm93LmlkKVxuICAgICAgICBjb25zdCBlbGFwc2VkID0gc3RhcnRlZEF0ID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBEYXRlLm5vdygpIC0gc3RhcnRlZEF0XG4gICAgICAgIHJ1blN0YXJ0ZWRBdC5kZWxldGUocm93LmlkKVxuICAgICAgICBpZiAoZWxhcHNlZCAhPT0gdW5kZWZpbmVkKSBsYXN0UnVuTXMuc2V0KHJvdy5pZCwgZWxhcHNlZClcbiAgICAgICAgaWYgKHJvdy5pZCA9PT0gc3RhdGUuY3VycmVudCAmJiAhaXNGb3JlZ3JvdW5kKCkpIGZpbmlzaGVkV2hpbGVIaWRkZW4uYWRkKHJvdy5pZClcbiAgICAgICAgaWYgKHJvdy5pZCA9PT0gc3RhdGUuY3VycmVudCkgcXVldWVOb3RpZmljYXRpb24oJ2RvbmUnLCByb3cuaWQsIHJvdy5kaXNwbGF5VGl0bGUgPz8gcm93LnRpdGxlID8/IHJvdy5pZCwgdW5kZWZpbmVkLCBlbGFwc2VkKVxuICAgICAgfSBlbHNlIGlmIChyb3cucnVubmluZykgZmluaXNoZWRXaGlsZUhpZGRlbi5kZWxldGUocm93LmlkKVxuICAgICAgcHJldlJ1bm5pbmcuc2V0KHJvdy5pZCwgcm93LnJ1bm5pbmcpXG4gICAgfVxuICAgIGZvciAoY29uc3QgaWQgb2YgWy4uLnByZXZSdW5uaW5nLmtleXMoKV0pIHtcbiAgICAgIGlmICghKGlkIGluIHN0YXRlLmJ5SWQpKSB7IHByZXZSdW5uaW5nLmRlbGV0ZShpZCk7IGZpbmlzaGVkV2hpbGVIaWRkZW4uZGVsZXRlKGlkKTsgcnVuU3RhcnRlZEF0LmRlbGV0ZShpZCk7IGxhc3RSdW5Ncy5kZWxldGUoaWQpIH1cbiAgICB9XG4gIH1cblxuICAvKiogQmFjayBpbiB0aGUgZm9yZWdyb3VuZDogdGhlIHZpZXdlZCBzZXNzaW9uJ3MgZ3JlZW4gbGlnaHQgY2xlYXJzLiAqL1xuICBjb25zdCBvbkZvcmVncm91bmQgPSAoKSA9PiB7XG4gICAgaWYgKCFpc0ZvcmVncm91bmQoKSkgcmV0dXJuXG4gICAgaWYgKGZpbmlzaGVkV2hpbGVIaWRkZW4uc2l6ZSA+IDApIHsgZmluaXNoZWRXaGlsZUhpZGRlbi5jbGVhcigpOyBzeW5jKCkgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFnZ3JlZ2F0ZSB0YWIgc3RhdGUgb3ZlciBtYWluIHNlc3Npb25zLiBQcmlvcml0eTogYW1iZXIgKHNvbWV0aGluZyB3YWl0c1xuICAgKiBmb3IgeW91KSA+IHdvcmtpbmcgKGEgc2Vzc2lvbiBpcyBnZW5lcmF0aW5nKSA+IGdyZWVuICh1bnNlZW4gY29tcGxldGlvbilcbiAgICogPiBpZGxlLiBSZXR1cm5zIGAnb2ZmJ2Agd2hlbiB0aGUgc3RhdHVzIGxpZ2h0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gY3VycmVudEtpbmQoc3RhdGUpIHtcbiAgICBpZiAoIXJlYWRDb25maWcoKS5jb2xvcnNFbmFibGVkKSByZXR1cm4gJ29mZidcbiAgICBsZXQgZ3JlZW4gPSBmYWxzZVxuICAgIGxldCB3b3JraW5nID0gZmFsc2VcbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBPYmplY3QudmFsdWVzKHN0YXRlLmJ5SWQpKSB7XG4gICAgICBpZiAocm93Lm9yaWdpbiA9PT0gJ3N1YmFnZW50JykgY29udGludWVcbiAgICAgIGlmIChyb3cucGVuZGluZ0ludGVyYWN0aW9uICE9PSB1bmRlZmluZWQpIHJldHVybiAnYW1iZXInXG4gICAgICBpZiAocm93LnJ1bm5pbmcgPT09IHRydWUpIHdvcmtpbmcgPSB0cnVlXG4gICAgICBpZiAocm93LmNvbXBsZXRlZCA9PT0gdHJ1ZSB8fCBmaW5pc2hlZFdoaWxlSGlkZGVuLmhhcyhyb3cuaWQpKSBncmVlbiA9IHRydWVcbiAgICB9XG4gICAgaWYgKHdvcmtpbmcpIHJldHVybiAnd29ya2luZydcbiAgICBpZiAoZ3JlZW4pIHJldHVybiAnZ3JlZW4nXG4gICAgcmV0dXJuICdpZGxlJ1xuICB9XG5cbiAgLyoqIEFwcGx5IG9uZSB0YWIgc3RhdGUgdG8gdGhlIGZhdmljb24gKHN0YXRpYyByZWNvbG9yIG9yIGdsb3cgYW5pbWF0aW9uKS4gKi9cbiAgZnVuY3Rpb24gYXBwbHlLaW5kKGtpbmQpIHtcbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKClcbiAgICBpZiAoa2luZCA9PT0gJ29mZicpIHsgc3RvcEFuaW1hdGlvbigpOyByZXN0b3JlKCk7IHJldHVybiB9XG4gICAgaWYgKGtpbmQgPT09ICd3b3JraW5nJykgeyBzdGFydEFuaW1hdGlvbihjb25maWcud29ya2luZyk7IHJldHVybiB9XG4gICAgc3RvcEFuaW1hdGlvbigpXG4gICAgY29uc3QgaHJlZiA9IGtpbmQgPT09ICdhbWJlcidcbiAgICAgID8gdXJpKGNvbmZpZy5hbWJlcilcbiAgICAgIDoga2luZCA9PT0gJ2dyZWVuJ1xuICAgICAgICA/IHVyaShjb25maWcuZ3JlZW4pXG4gICAgICAgIDogKGNvbmZpZy5ibGFjayA/IHVyaShjb25maWcuYmxhY2spIDogbnVsbClcbiAgICBpZiAoaHJlZiA9PT0gbnVsbCkgcmVzdG9yZSgpXG4gICAgZWxzZSBpZiAoYXBwbGllZCAhPT0gaHJlZikgeyBzZXRIcmVmKGhyZWYpOyBhcHBsaWVkID0gaHJlZiB9XG4gIH1cblxuICAvKiogTWVyZ2UgdGhlIHNlc3Npb24gcm93cyB3aXRoIHRoZSBvZmZpY2lhbCBzdGF0dXMgc3RvcmUgd2hlbiBhdmFpbGFibGUuICovXG4gIGZ1bmN0aW9uIGJ1aWxkU3RhdGUoKSB7XG4gICAgY29uc3QgbGlzdFN0YXRlID0gbGlzdC5nZXRTbmFwc2hvdCgpXG4gICAgY29uc3Qgc3RhdHVzID0gc3RhdHVzU291cmNlPy5nZXRTbmFwc2hvdCgpXG4gICAgbGV0IGN1cnJlbnQgPSBsaXN0U3RhdGUuY3VycmVudFxuICAgIGNvbnN0IGJ5SWQgPSB7fVxuICAgIGZvciAoY29uc3Qgcm93IG9mIE9iamVjdC52YWx1ZXMobGlzdFN0YXRlLmJ5SWQpKSB7XG4gICAgICBjb25zdCBzID0gc3RhdHVzPy5nZXQocm93LmlkKVxuICAgICAgaWYgKChyb3cucmV0YWluZWRCeT8ubWFpblZpZXcgPz8gMCkgPiAwKSBjdXJyZW50ID0gcm93LmlkXG4gICAgICBieUlkW3Jvdy5pZF0gPSB7XG4gICAgICAgIC4uLnJvdyxcbiAgICAgICAgcnVubmluZzogcz8ucnVubmluZyA/PyByb3cucnVubmluZyxcbiAgICAgICAgY29tcGxldGVkOiBzPy5jb21wbGV0aW9uVW5yZWFkID8/IHJvdy5jb21wbGV0ZWQgPT09IHRydWUsXG4gICAgICAgIHBlbmRpbmdJbnRlcmFjdGlvbjogcz8ucGVuZGluZ0ludGVyYWN0aW9uID8/IHJvdy5wZW5kaW5nSW50ZXJhY3Rpb24sXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IC4uLmxpc3RTdGF0ZSwgYnlJZCwgY3VycmVudCB9XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jKCkge1xuICAgIGNvbnN0IHN0YXRlID0gYnVpbGRTdGF0ZSgpXG4gICAgdHJhY2tFZGdlcyhzdGF0ZSlcbiAgICBkZXRlY3RUcmFuc2l0aW9ucyhzdGF0ZSlcbiAgICBhcHBseUtpbmQoY3VycmVudEtpbmQoc3RhdGUpKVxuICB9XG5cbiAgY29uc3QgdW5zdWJzY3JpYmVMaXN0ID0gbGlzdC5zdWJzY3JpYmUoc3luYylcbiAgY29uc3QgdW5zdWJzY3JpYmVGb3JtID0gZm9ybS5zdWJzY3JpYmUoc3luYylcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uRm9yZWdyb3VuZClcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb3JlZ3JvdW5kKVxuICBzeW5jKClcblxuICAvLyBPcHRpb25hbCBjaGFubmVsOiB0aGUgb2ZmaWNpYWwgc3RhdHVzIHN0b3JlIChwcmVzZW50IG9uIDAuMS43KykuXG4gIGN0eC5pbmplY3QoWyd1aVNlc3Npb24nXSwgKHVpQ3R4KSA9PiB7XG4gICAgc3RhdHVzU291cmNlID0gdWlDdHgudWlTZXNzaW9uLnNlc3Npb25TdGF0dXNcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IHN0YXR1c1NvdXJjZS5zdWJzY3JpYmUoc3luYylcbiAgICBzeW5jKClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUoKVxuICAgICAgc3RhdHVzU291cmNlID0gdW5kZWZpbmVkXG4gICAgICBzeW5jKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAobm90aWZ5VGltZXIgIT09IHVuZGVmaW5lZCkgY2xlYXJUaW1lb3V0KG5vdGlmeVRpbWVyKVxuICAgIG5vdGlmeVF1ZXVlLmNsZWFyKClcbiAgICBzdG9wQW5pbWF0aW9uKClcbiAgICBzdG9wU291bmQoKVxuICAgIHVuc3Vic2NyaWJlTGlzdCgpXG4gICAgdW5zdWJzY3JpYmVGb3JtKClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25Gb3JlZ3JvdW5kKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9yZWdyb3VuZClcbiAgICByZXN0b3JlKClcbiAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxtQkFBa0I7QUFDbEIsc0NBQWlEOzs7QUNFMUMsSUFBTSxpQkFBaUI7QUFBQSxFQUM1QixJQUFJO0FBQUEsRUFDSixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixnQkFBZ0I7QUFBQSxFQUNoQixrQkFBa0I7QUFDcEI7QUFRTyxTQUFTLGdCQUFnQixZQUFZLGNBQWM7QUFDeEQsU0FBTztBQUFBLElBQ0wsSUFBSSxlQUFlO0FBQUEsSUFDbkIsU0FBUyxlQUFlO0FBQUEsSUFDeEIsV0FBVyxlQUFlO0FBQUEsSUFDMUIsUUFBUSxlQUFlO0FBQUEsSUFDdkIsWUFBWSxFQUFF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QUFVO0FBQUEsUUFDVixPQUFPLEVBQUUsT0FBTztBQUFBLE1BQ2xCLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxHQUFHLE9BQU8sRUFBRSxJQUFJLEdBQUcsT0FBTyxJQUFJLEdBQUcsVUFBVSxNQUFNLFdBQVcsR0FBRyxHQUFJLE9BQU8sR0FBRyxLQUFLLGVBQWdCO0FBQUEsSUFDbEcsT0FBTyxHQUFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxHQUFHLElBQUksSUFBSTtBQUFBLEVBQy9DO0FBQ0Y7QUFFQSxlQUFzQixNQUFNLEtBQUs7QUFDL0IsTUFBSSxPQUFPLE1BQU0sSUFBSSxPQUFPLFNBQVMsV0FBVyxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUcsa0NBQWtDO0FBQy9GLFFBQU0sSUFBSSxJQUFJLE9BQU8sS0FBSyxTQUFTO0FBQ25DLFFBQU0sT0FBTyxJQUFJLFlBQVksSUFBSSxFQUFFO0FBQ25DLFFBQU0sWUFBWSxJQUFJLFlBQVksSUFBSSxRQUFRO0FBRzlDLE1BQUk7QUFDRixVQUFNLGdCQUFnQixNQUFNLElBQUksT0FBTyxPQUFPLFlBQVk7QUFDMUQsUUFBSSxPQUFPLE1BQU0sTUFBTTtBQUFFLFdBQUssY0FBYztBQUFBLElBQUUsR0FBRyxpQ0FBaUM7QUFBQSxFQUNwRixTQUFTLE9BQU87QUFDZCxZQUFRLE1BQU0sa0VBQTZELEtBQUs7QUFBQSxFQUNsRjtBQUVBLE1BQUksT0FBTyxNQUFNLGlCQUFpQixLQUFLLElBQUksR0FBRywrQkFBK0I7QUFDN0UsUUFBTSxXQUFXLE9BQU87QUFBQSxJQUN0QixPQUFPLEVBQUUsT0FBTyxNQUFNLGNBQWMsVUFBVTtBQUFBLElBQzlDLE1BQU0sQ0FBQyxPQUFPLFVBQVUsS0FBSyxJQUFJLE9BQU8sS0FBSztBQUFBLElBQzdDLE9BQU8sQ0FBQyxTQUFTO0FBSWYsWUFBTSxTQUFTLElBQUksSUFBSSxvQkFBb0I7QUFDM0MsVUFBSSxXQUFXLE9BQVcsT0FBTSxJQUFJLE1BQU0seUNBQXlDO0FBQ25GLGFBQU8sT0FBTyxNQUFNLElBQUk7QUFBQSxJQUMxQjtBQUFBLElBQ0EsYUFBYSxDQUFDLFNBQVMsV0FBVyxVQUFVLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxTQUFTLFFBQVEsR0FBRyxPQUFPLE9BQU8sQ0FBQyxDQUFDO0FBQUEsRUFDM0g7QUFDQSxNQUFJLE1BQU0sT0FBTyxNQUFNLE1BQU0sSUFBSSxNQUFNLFNBQVM7QUFBQSxJQUM5QyxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxPQUFPLE1BQU0sRUFBRSxPQUFPO0FBQUEsSUFDdEIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1YsR0FBRyxZQUFZLENBQUM7QUFDbEI7IiwKICAibmFtZXMiOiBbIm5hbWUiLCAiSEVYIiwgIlJlYWN0Il0KfQo=
    return module.exports;
  },
});
