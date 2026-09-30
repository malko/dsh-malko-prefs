/**
 * dsh-malko-prefs — tab status light + browser notifications (browser half).
 *
 * Ported from dsh-notice-center (MIT). The tab favicon turns green when a main
 * session finished while you were away and amber while a session awaits an
 * interaction (amber wins), and the browser raises a notification on completion
 * or on a new pending question / approval / plan review.
 *
 * It reads the official client signals — `sessions` rows plus the optional
 * `uiSession.sessionStatus` store — and the `malko-prefs` config form. It owns
 * no state beyond in-memory bookkeeping and restores the original favicon on
 * teardown.
 */
import { whaleSvg } from './whale.ts'

/** Settings/locale namespace shared with the settings page. */
export const LOCALE_NS = 'settings.malko-prefs'

const DEFAULT_HREF = '/favicon.svg'
const DEFAULT_GREEN = '#22C55E'
const DEFAULT_AMBER = '#F59E0B'
const DEFAULT_WORKING = '#3B82F6'
const HEX = /^#[0-9a-fA-F]{6}$/
/** Tool-name cap: longer names would blow the notification body's single line. */
const TOOL_NAME_LIMIT = 32

/**
 * Browser notification availability.
 * @returns {'granted' | 'denied' | 'default' | 'unsupported'}
 */
function notificationSupport() {
  try {
    if (typeof Notification === 'undefined' || typeof Notification.permission !== 'string') return 'unsupported'
    return Notification.permission
  } catch {
    return 'unsupported'
  }
}

/** Ask for permission (only when the browser has not decided yet). */
export function requestNotificationPermission() {
  try {
    if (typeof Notification === 'undefined') return Promise.resolve('unsupported')
    if (Notification.permission !== 'default') return Promise.resolve(Notification.permission)
    const answer = Notification.requestPermission()
    return answer !== undefined && typeof answer.then === 'function' ? answer : Promise.resolve(Notification.permission)
  } catch {
    return Promise.resolve(notificationSupport())
  }
}

/** Current permission string, for the settings page. */
export function currentNotificationPermission() {
  return notificationSupport()
}

/** Static route the Host serves the bundled sounds from. */
export const SOUND_ROUTE = '/malko-prefs-sounds'
/** Sentinel meaning "play nothing". */
export const SOUND_NONE = 'none'
/** Built-in synthesized chimes (no asset file needed). */
export const BUILTIN_SOUNDS = [
  { id: 'builtin-up', labelKey: 'soundBuiltinUp' },
  { id: 'builtin-down', labelKey: 'soundBuiltinDown' },
]
/** opencode sound packs bundled under `assets/audio` (MIT). */
export const SOUND_PACKS = [
  { name: 'Alert', prefix: 'alert', count: 10 },
  { name: 'Bip-bop', prefix: 'bip-bop', count: 10 },
  { name: 'Staplebops', prefix: 'staplebops', count: 7 },
  { name: 'Nope', prefix: 'nope', count: 12 },
  { name: 'Yup', prefix: 'yup', count: 6 },
]

/** Sound ids of one pack, in display order. */
export function packSoundIds(pack) {
  return Array.from({ length: pack.count }, (_, i) => `${pack.prefix}-${String(i + 1).padStart(2, '0')}`)
}

/** Clamp an arbitrary volume to 0–1 (default 0.6). */
function normalizeVolume(volume) {
  if (typeof volume !== 'number' || !Number.isFinite(volume)) return 0.6
  return Math.min(Math.max(volume, 0), 1)
}

/** Shared AudioContext for the synthesized chimes. */
let chimeContext
function chimeAudioContext() {
  if (chimeContext !== undefined) return chimeContext
  try {
    const Ctor = window.AudioContext ?? window.webkitAudioContext
    chimeContext = Ctor === undefined ? null : new Ctor()
  } catch {
    chimeContext = null
  }
  return chimeContext
}

/** Resume the audio context inside a user gesture (autoplay policy). */
export function primeSound() {
  try {
    const audio = chimeAudioContext()
    if (audio !== null && audio.state === 'suspended') audio.resume?.()
  } catch { /* ignore */ }
}

/** Synthesized chime: up (done) or down (pending). */
function playChime(kind, volume) {
  try {
    const level = normalizeVolume(volume)
    if (level <= 0) return
    const audio = chimeAudioContext()
    if (audio === null) return
    if (audio.state === 'suspended') audio.resume?.()
    const notes = kind === 'done' ? [660, 990] : [880, 587]
    const base = audio.currentTime
    notes.forEach((frequency, index) => {
      const oscillator = audio.createOscillator()
      const gain = audio.createGain()
      const start = base + index * 0.14
      oscillator.type = 'sine'
      oscillator.frequency.value = frequency
      gain.gain.setValueAtTime(0.0001, start)
      gain.gain.exponentialRampToValueAtTime(0.12 * level, start + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.18)
      oscillator.connect(gain)
      gain.connect(audio.destination)
      oscillator.start(start)
      oscillator.stop(start + 0.2)
    })
  } catch { /* ignore */ }
}

/** Element currently playing, so overlapping sounds do not stack. */
let activeSound = null
function stopSound() {
  const audio = activeSound
  activeSound = null
  if (audio === null) return
  try { audio.pause(); audio.currentTime = 0 } catch { /* ignore */ }
}

/**
 * Play a sound id: `builtin-*` is synthesized, a pack id streams the Host's
 * bundled mp3 and falls back to the synthesized chime when unavailable.
 * @param {string} id sound id (`none` = silence).
 * @param {number} volume 0–1.
 * @param {'done' | 'pending'} kind drives the fallback chime's pitch.
 */
export function playSound(id, volume, kind) {
  const level = normalizeVolume(volume)
  if (level <= 0) return
  const name = typeof id === 'string' ? id : ''
  if (name === '' || name === SOUND_NONE) return
  stopSound()
  if (name.startsWith('builtin-')) {
    playChime(name === 'builtin-up' ? 'done' : name === 'builtin-down' ? 'pending' : kind, level)
    return
  }
  try {
    const audio = new Audio(SOUND_ROUTE + '/' + name + '.mp3')
    audio.volume = level
    activeSound = audio
    const played = audio.play()
    if (played !== undefined && typeof played.catch === 'function') {
      played.catch(() => {
        if (activeSound === audio) activeSound = null
        playChime(kind, level)
      })
    }
  } catch {
    playChime(kind, level)
  }
}

/**
 * Watch the session signals and drive the tab icon + notifications.
 * @param {object} ctx client plugin context (needs `sessions`, `locale`).
 * @param {object} form the `malko-prefs` config form (snapshot + subscribe).
 * @returns {() => void} disposer restoring the favicon and removing listeners.
 */
export function startStatusLight(ctx, form) {
  const list = ctx.sessions.list
  const locale = () => ctx.locale.bind(LOCALE_NS)
  /** Optional official status source (0.1.7+); rows keep their legacy fields otherwise. */
  let statusSource
  /** Dedupe keys (`sessionId:kind`) already queued. */
  const notified = new Set()
  /** Aggregation window so a burst of transitions becomes one notification. */
  const notifyQueue = new Map()
  let notifyTimer
  /** Last observed completion state per session (false → true edge detection). */
  const prevCompleted = new Map()
  /** Run start per session, then the last run duration (ms). */
  const runStartedAt = new Map()
  const lastRunMs = new Map()
  let prevPending = new Set()
  let pendingSeen = false

  /** Really in the foreground: tab visible AND window focused. */
  const isForeground = () => document.visibilityState === 'visible' && document.hasFocus()

  /** Read the notification/color preferences (unset falls back to defaults). */
  function readConfig() {
    const value = form.getSnapshot().value ?? {}
    return {
      colorsEnabled: value.colorsEnabled !== false,
      green: HEX.test(value.green) ? value.green : DEFAULT_GREEN,
      amber: HEX.test(value.amber) ? value.amber : DEFAULT_AMBER,
      working: HEX.test(value.working) ? value.working : DEFAULT_WORKING,
      black: HEX.test(value.black) ? value.black : undefined,
      notifyEnabled: value.notifyEnabled === true,
      notifyForeground: value.notifyForeground === true,
      donePersistent: value.notifyDonePersistent === true,
      pendingPersistent: value.notifyPendingPersistent === true,
      volume: normalizeVolume(value.notifyVolume ?? 0.6),
      doneSound: typeof value.notifyDoneSound === 'string' ? value.notifyDoneSound : SOUND_NONE,
      pendingSound: typeof value.notifyPendingSound === 'string' ? value.notifyPendingSound : SOUND_NONE,
    }
  }

  // --- favicon ---------------------------------------------------------------
  // DSH ships two icon links (dark/light via `media`); the browser picks one by
  // the OS color scheme, so every link must be painted and restored together.
  const iconLinks = () => [...document.head.querySelectorAll('link[rel~="icon"]')]
  /** Original href of each link we have touched (restore target). */
  const originalHrefs = new Map()
  const rememberLinks = () => {
    for (const link of iconLinks()) if (!originalHrefs.has(link)) originalHrefs.set(link, link.href)
  }
  rememberLinks()
  const paint = (href) => { for (const link of originalHrefs.keys()) link.href = href }
  /** Last href we set; null = official icons. */
  let applied = null
  const uri = (hex) => `data:image/svg+xml,${encodeURIComponent(whaleSvg(hex))}`
  const restore = () => {
    if (applied === null) return
    for (const [link, href] of originalHrefs) link.href = href
    applied = null
  }
  // The application may re-create the icon links; pick new ones up.
  const iconObserver = new MutationObserver(() => {
    const before = originalHrefs.size
    rememberLinks()
    if (originalHrefs.size !== before) sync()
  })
  iconObserver.observe(document.head, { childList: true, subtree: true })

  // --- notifications ---------------------------------------------------------
  const PENDING_KIND_KEYS = {
    approval: 'pendingKindApproval',
    question: 'pendingKindQuestion',
    'plan-review': 'pendingKindPlanReview',
  }

  /** Pending interaction → notification body text (defensive reads). */
  function pendingTypeLabel(interaction) {
    const t = locale()
    const kind = interaction?.kind
    if (kind === 'approval') {
      const tool = interaction.toolName
      if (typeof tool !== 'string' || tool === '') return t('pendingKindApproval')
      const shown = tool.length > TOOL_NAME_LIMIT ? tool.slice(0, TOOL_NAME_LIMIT) + '…' : tool
      return t('pendingApprovalTool', { tool: shown })
    }
    if (kind === 'question') {
      const questions = Array.isArray(interaction.questions) ? interaction.questions : []
      if (questions.length > 1) return t('pendingQuestionBatch', { count: questions.length })
      const first = questions[0]
      if (first === null || typeof first !== 'object') return t('pendingKindQuestion')
      const options = Array.isArray(first.options) ? first.options : []
      if (options.length === 0) return t('pendingQuestionFill')
      return first.multiSelect === true ? t('pendingQuestionMulti') : t('pendingQuestionChoose')
    }
    const key = PENDING_KIND_KEYS[kind]
    return key === undefined ? undefined : t(key)
  }

  /** Queue one notification (skipped while disabled; deduped; 300 ms window). */
  function queueNotification(kind, sessionId, label, typeLabel, durationMs) {
    if (!readConfig().notifyEnabled) return
    const key = sessionId + ':' + kind
    if (notified.has(key)) return
    notified.add(key)
    notifyQueue.set(key, { kind, sessionId, label, typeLabel, durationMs })
    if (notifyTimer === undefined) notifyTimer = setTimeout(flushNotifications, 300)
  }

  /** Flush the aggregation window into browser notifications. */
  function flushNotifications() {
    notifyTimer = undefined
    const entries = [...notifyQueue.values()]
    notifyQueue.clear()
    if (entries.length === 0) return
    if (notificationSupport() !== 'granted') return
    const config = readConfig()
    if (!config.notifyForeground && isForeground()) return
    const t = locale()
    const grouped = new Map()
    for (const entry of entries) {
      const bucket = grouped.get(entry.kind) ?? []
      bucket.push(entry)
      grouped.set(entry.kind, bucket)
    }
    for (const [kind, bucket] of grouped) {
      const head = bucket[0]
      const extra = bucket.length - 1
      let title = head.label ?? head.sessionId
      if (extra > 0) title = title + ' +' + String(extra)
      let body = kind === 'done' ? t('notifyDoneTitle') : (head.typeLabel ?? t('notifyPendingTitle'))
      if (kind === 'done' && extra === 0 && head.durationMs !== undefined) {
        body = body + ' · ' + t('notifyDuration', { duration: formatRunDuration(head.durationMs, t) })
      }
      try {
        // Deliberately no `tag`: reusing one makes some platforms silently
        // replace the previous banner instead of raising a new one.
        const notification = new Notification(title, {
          body,
          icon: uri(kind === 'done' ? config.green : config.amber),
          requireInteraction: kind === 'done' ? config.donePersistent : config.pendingPersistent,
        })
        playSound(kind === 'done' ? config.doneSound : config.pendingSound, config.volume, kind)
        notification.onclick = () => {
          try { window.focus() } catch { /* ignore */ }
          try {
            const workspace = ctx.get('uiWorkspace')
            if (workspace !== undefined && typeof workspace.openSession === 'function') workspace.openSession(head.sessionId)
            else ctx.sessions.open(head.sessionId)
          } catch { /* ignore */ }
          notification.close()
        }
      } catch (error) {
        console.warn('[malko-prefs] could not raise notification', error)
      }
    }
  }

  /** 60 s rolls into minutes, seconds zero-padded (matches the official format). */
  function formatRunDuration(ms, t) {
    const total = Math.max(0, Math.floor(ms / 1000))
    const minutes = Math.floor(total / 60)
    const seconds = total % 60
    return minutes > 0
      ? t('durationMinutes', { minutes, seconds: String(seconds).padStart(2, '0') })
      : t('durationSeconds', { seconds })
  }

  /** Completion / pending transitions from the session state. */
  function detectTransitions(state) {
    for (const row of Object.values(state.byId)) {
      if (row.origin === 'subagent') continue
      const before = prevCompleted.get(row.id)
      const now = row.completed === true
      if (before === false && now) queueNotification('done', row.id, row.displayTitle ?? row.title ?? row.id, undefined, lastRunMs.get(row.id))
      if (!now) notified.delete(row.id + ':done')
      prevCompleted.set(row.id, now)
    }
    for (const id of [...prevCompleted.keys()]) {
      if (!(id in state.byId)) { prevCompleted.delete(id); notified.delete(id + ':done') }
    }
    const current = new Set()
    for (const row of Object.values(state.byId)) if (row.pendingInteraction !== undefined) current.add(row.id)
    if (pendingSeen) {
      for (const id of current) {
        if (prevPending.has(id)) continue
        const row = state.byId[id]
        if (row !== undefined && row.origin === 'subagent') continue
        const label = row?.displayTitle ?? row?.title ?? id
        queueNotification('pending', id, label, pendingTypeLabel(row?.pendingInteraction))
      }
    }
    for (const id of prevPending) if (!current.has(id)) notified.delete(id + ':pending')
    prevPending = current
    pendingSeen = true
  }

  /** Self-tracked running edge: fills the gap for the session being viewed. */
  const prevRunning = new Map()
  const finishedWhileHidden = new Set()
  function trackEdges(state) {
    for (const row of Object.values(state.byId)) {
      if (row.origin === 'subagent') continue
      const prev = prevRunning.get(row.id)
      if (prev === undefined) { prevRunning.set(row.id, row.running); continue }
      if (!prev && row.running) runStartedAt.set(row.id, Date.now())
      if (prev && !row.running) {
        const startedAt = runStartedAt.get(row.id)
        const elapsed = startedAt === undefined ? undefined : Date.now() - startedAt
        runStartedAt.delete(row.id)
        if (elapsed !== undefined) lastRunMs.set(row.id, elapsed)
        if (row.id === state.current && !isForeground()) finishedWhileHidden.add(row.id)
        if (row.id === state.current) queueNotification('done', row.id, row.displayTitle ?? row.title ?? row.id, undefined, elapsed)
      } else if (row.running) finishedWhileHidden.delete(row.id)
      prevRunning.set(row.id, row.running)
    }
    for (const id of [...prevRunning.keys()]) {
      if (!(id in state.byId)) { prevRunning.delete(id); finishedWhileHidden.delete(id); runStartedAt.delete(id); lastRunMs.delete(id) }
    }
  }

  /** Back in the foreground: the viewed session's green light clears. */
  const onForeground = () => {
    if (!isForeground()) return
    if (finishedWhileHidden.size > 0) { finishedWhileHidden.clear(); sync() }
  }

  /**
   * Aggregate tab state over main sessions. Priority: amber (something waits
   * for you) > working (a session is generating) > green (unseen completion)
   * > idle. Returns `'off'` when the status light is disabled.
   */
  function currentKind(state) {
    if (!readConfig().colorsEnabled) return 'off'
    let green = false
    let working = false
    for (const row of Object.values(state.byId)) {
      if (row.origin === 'subagent') continue
      if (row.pendingInteraction !== undefined) return 'amber'
      if (row.running === true) working = true
      if (row.completed === true || finishedWhileHidden.has(row.id)) green = true
    }
    if (working) return 'working'
    if (green) return 'green'
    return 'idle'
  }

  /** Apply one tab state to the favicon. */
  function applyKind(kind) {
    const config = readConfig()
    if (kind === 'off') { restore(); return }
    const href = kind === 'amber'
      ? uri(config.amber)
      : kind === 'working'
        ? uri(config.working)
        : kind === 'green'
          ? uri(config.green)
          : (config.black ? uri(config.black) : null)
    if (href === null) restore()
    else if (applied !== href) { paint(href); applied = href }
  }

  /** Merge the session rows with the official status store when available. */
  function buildState() {
    const listState = list.getSnapshot()
    const status = statusSource?.getSnapshot()
    let current = listState.current
    const byId = {}
    for (const row of Object.values(listState.byId)) {
      const s = status?.get(row.id)
      if ((row.retainedBy?.mainView ?? 0) > 0) current = row.id
      byId[row.id] = {
        ...row,
        running: s?.running ?? row.running,
        completed: s?.completionUnread ?? row.completed === true,
        pendingInteraction: s?.pendingInteraction ?? row.pendingInteraction,
      }
    }
    return { ...listState, byId, current }
  }

  function sync() {
    const state = buildState()
    trackEdges(state)
    detectTransitions(state)
    applyKind(currentKind(state))
  }

  const unsubscribeList = list.subscribe(sync)
  const unsubscribeForm = form.subscribe(sync)
  document.addEventListener('visibilitychange', onForeground)
  window.addEventListener('focus', onForeground)
  sync()

  // Optional channel: the official status store (present on 0.1.7+).
  ctx.inject(['uiSession'], (uiCtx) => {
    statusSource = uiCtx.uiSession.sessionStatus
    const unsubscribe = statusSource.subscribe(sync)
    sync()
    return () => {
      unsubscribe()
      statusSource = undefined
      sync()
    }
  })

  return () => {
    if (notifyTimer !== undefined) clearTimeout(notifyTimer)
    notifyQueue.clear()
    stopSound()
    iconObserver.disconnect()
    unsubscribeList()
    unsubscribeForm()
    document.removeEventListener('visibilitychange', onForeground)
    window.removeEventListener('focus', onForeground)
    restore()
  }
}