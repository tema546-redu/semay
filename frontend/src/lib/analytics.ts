const API = import.meta.env.VITE_API_URL || "http://localhost:3001"
const QUEUE_KEY = "semay_analytics_queue"
const VISITOR_KEY = "semay_visitor_id"

function visitorId() {
  try {
    let id = localStorage.getItem(VISITOR_KEY)
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem(VISITOR_KEY, id)
    }
    return id
  } catch {
    return "anon"
  }
}

function readQueue(): any[] {
  try {
    return JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]")
  } catch {
    return []
  }
}

function writeQueue(q: any[]) {
  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(q.slice(-200)))
  } catch {
    /* ignore */
  }
}

async function flush() {
  const q = readQueue()
  if (!q.length) return
  const left: any[] = []
  for (const ev of q) {
    try {
      const res = await fetch(`${API}/api/public/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ev),
      })
      if (!res.ok) left.push(ev)
    } catch {
      left.push(ev)
    }
  }
  writeQueue(left)
}

export function track(name: string, path?: string, meta?: Record<string, unknown>) {
  const ev = {
    name,
    path: path || (typeof window !== "undefined" ? window.location.pathname : ""),
    meta: meta || {},
    visitorId: visitorId(),
    at: new Date().toISOString(),
  }
  const q = readQueue()
  q.push(ev)
  writeQueue(q)
  if (typeof navigator !== "undefined" && navigator.onLine) void flush()
}

if (typeof window !== "undefined") {
  window.addEventListener("online", () => void flush())
  setTimeout(() => void flush(), 1500)
}