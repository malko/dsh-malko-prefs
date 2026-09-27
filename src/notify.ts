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
/** Glow animation: frame count and per-frame delay while a session is working. */
const GLOW_FRAMES = 10
const GLOW_FRAME_MS = 110
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
      notifyAutoHide: value.notifyAutoHide !== false,
    }
  }

  // --- favicon ---------------------------------------------------------------
  const iconLink = () => document.head.querySelector('link[rel~="icon"]')
  const setHref = (href) => { const link = iconLink(); if (link) link.href = href }
  /** Original href at start-up; restoring it beats hardcoding a path. */
  const originalHref = iconLink()?.href ?? DEFAULT_HREF
  /** Last href we set; `'glow'` while animating; null = official icon. */
  let applied = null
  const uri = (hex) => `data:image/svg+xml,${encodeURIComponent(whaleSvg(hex))}`
  const restore = () => { if (applied !== null) { setHref(originalHref); applied = null } }

  // Working state: the favicon cannot animate on its own (browsers do not run
  // SVG animation in the tab), so we swap pre-rendered glow frames on a timer.
  let animTimer
  let animColor
  const uriGlow = (hex, blur, opacity) => `data:image/svg+xml,${encodeURIComponent(whaleSvg(hex, { blur, opacity }))}`
  /** One pulsing glow cycle for `hex`, as data-URI frames. */
  function glowFrames(hex) {
    const frames = []
    for (let i = 0; i < GLOW_FRAMES; i += 1) {
      const phase = (1 - Math.cos((i / GLOW_FRAMES) * Math.PI * 2)) / 2
      frames.push(uriGlow(hex, 0.8 + phase * 3.2, 0.15 + phase * 0.85))
    }
    return frames
  }
  function stopAnimation() {
    if (animTimer !== undefined) { clearInterval(animTimer); animTimer = undefined }
    animColor = undefined
  }
  function startAnimation(hex) {
    if (animTimer !== undefined && animColor === hex) return
    stopAnimation()
    const frames = glowFrames(hex)
    let index = 0
    setHref(frames[0])
    applied = 'glow'
    animColor = hex
    animTimer = setInterval(() => {
      index = (index + 1) % frames.length
      setHref(frames[index])
    }, GLOW_FRAME_MS)
  }

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
          requireInteraction: !config.notifyAutoHide,
        })
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

  /** Apply one tab state to the favicon (static recolor or glow animation). */
  function applyKind(kind) {
    const config = readConfig()
    if (kind === 'off') { stopAnimation(); restore(); return }
    if (kind === 'working') { startAnimation(config.working); return }
    stopAnimation()
    const href = kind === 'amber'
      ? uri(config.amber)
      : kind === 'green'
        ? uri(config.green)
        : (config.black ? uri(config.black) : null)
    if (href === null) restore()
    else if (applied !== href) { setHref(href); applied = href }
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
    stopAnimation()
    unsubscribeList()
    unsubscribeForm()
    document.removeEventListener('visibilitychange', onForeground)
    window.removeEventListener('focus', onForeground)
    restore()
  }
}