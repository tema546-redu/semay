/** Staff desktop notifications + short beep (no external sound file). */

let permissionAsked = false

export async function ensureNotifyPermission(): Promise<boolean> {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return false
  }
  if (Notification.permission === "granted") return true
  if (Notification.permission === "denied") return false
  if (permissionAsked) return false
  permissionAsked = true
  try {
    const result = await Notification.requestPermission()
    return result === "granted"
  } catch {
    return false
  }
}

/** Call from a button click — unlocks audio + asks notification permission */
export async function enableStaffAlerts(): Promise<boolean> {
  playAlertBeep() // unlocks AudioContext after user gesture
  return ensureNotifyPermission()
}
export function playAlertBeep() {
  try {
    const Ctx =
      window.AudioContext ||
      (window as any).webkitAudioContext
    if (!Ctx) return
    const ctx = new Ctx()

    // ~2.5s: three pulses (restaurant-style alert)
    const pulses = [
      { start: 0,    freq: 880,  dur: 0.35 },
      { start: 0.45, freq: 880,  dur: 0.35 },
      { start: 0.9,  freq: 1046, dur: 0.45 },
      { start: 1.5,  freq: 880,  dur: 0.35 },
      { start: 1.95, freq: 1175, dur: 0.45 },
    ]

    for (const p of pulses) {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.type = "sine"
      osc.frequency.value = p.freq

      const t0 = ctx.currentTime + p.start
      gain.gain.setValueAtTime(0.0001, t0)
      gain.gain.exponentialRampToValueAtTime(0.18, t0 + 0.03)
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + p.dur)

      osc.start(t0)
      osc.stop(t0 + p.dur + 0.02)
    }

    setTimeout(() => ctx.close().catch(() => {}), 2800)
  } catch {
    /* ignore */
  }
}

export function notifyNewOrderRequest(opts: {
  tableNumber?: string | number
  total?: number
  customerName?: string
  customerPhone?: string
  count?: number
}) {
  const table = opts.tableNumber != null ? String(opts.tableNumber) : "?"
  const total =
    opts.total != null
      ? `${Number(opts.total).toLocaleString()} ETB`
      : ""
    const name = opts.customerName ? String(opts.customerName) : ""
  const phone = opts.customerPhone ? String(opts.customerPhone) : ""
  const who = [name, phone].filter(Boolean).join(" · ")

  const title =
    opts.count && opts.count > 1
      ? `${opts.count} new order requests`
      : "New order request"

  const body = [
    `Place: ${opts.tableNumber != null ? String(opts.tableNumber) : "?"}`,
    who || null,
    opts.total != null
      ? `${Number(opts.total).toLocaleString()} ETB`
      : null,
  ]
    .filter(Boolean)
    .join(" · ")
  playAlertBeep()

  if (typeof window === "undefined" || !("Notification" in window)) return
  if (Notification.permission !== "granted") return

  try {
    const n = new Notification(title, {
      body,
      tag: "semay-order-request",
    })
    n.onclick = () => {
      window.focus()
      n.close()
    }
  } catch {
    /* ignore */
  }
}