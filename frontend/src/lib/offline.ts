const QUEUE_KEY = "semay_offline_orders"

export function isOnline() {
  return typeof navigator !== "undefined" ? navigator.onLine : true
}

export function queueOrder(payload: any) {
  const q = JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]")
  q.push({ ...payload, queuedAt: Date.now(), id: `offline-${Date.now()}` })
  localStorage.setItem(QUEUE_KEY, JSON.stringify(q))
}

export function getQueuedOrders() {
  return JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]")
}

export function clearQueue() {
  localStorage.removeItem(QUEUE_KEY)
}

export async function flushQueue(sendFn: (payload: any) => Promise<any>) {
  const q = getQueuedOrders()
  if (!q.length) return { flushed: 0 }
  const remaining = []
  let flushed = 0
  for (const item of q) {
    try {
      await sendFn(item)
      flushed++
    } catch {
      remaining.push(item)
    }
  }
  localStorage.setItem(QUEUE_KEY, JSON.stringify(remaining))
  return { flushed, remaining: remaining.length }
}
