/**
 * Offline queue for Garment staff PC
 */

const DB_NAME = "semay-garment-offline"
const DB_VER = 1
const STORE_CACHE = "cache"
const STORE_QUEUE = "queue"

export type QueueItem = {
  id: string
  url: string
  method: string
  body?: string
  headers?: Record<string, string>
  createdAt: number
  label?: string
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VER)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE_CACHE)) {
        db.createObjectStore(STORE_CACHE)
      }
      if (!db.objectStoreNames.contains(STORE_QUEUE)) {
        db.createObjectStore(STORE_QUEUE, { keyPath: "id" })
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

function txDone(tx: IDBTransaction) {
  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
    tx.onabort = () => reject(tx.error)
  })
}

export async function cacheSet(key: string, data: unknown) {
  const db = await openDb()
  const tx = db.transaction(STORE_CACHE, "readwrite")
  tx.objectStore(STORE_CACHE).put({ data, savedAt: Date.now() }, key)
  await txDone(tx)
  db.close()
}

export async function cacheGet<T = unknown>(
  key: string
): Promise<{ data: T; savedAt: number } | null> {
  const db = await openDb()
  const tx = db.transaction(STORE_CACHE, "readonly")
  const req = tx.objectStore(STORE_CACHE).get(key)
  const row = await new Promise<any>((resolve, reject) => {
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  await txDone(tx)
  db.close()
  if (!row) return null
  return { data: row.data as T, savedAt: row.savedAt as number }
}

export async function queueAdd(
  item: Omit<QueueItem, "id" | "createdAt"> & { id?: string }
) {
  const row: QueueItem = {
    id: item.id || `q_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    url: item.url,
    method: item.method,
    body: item.body,
    headers: item.headers,
    label: item.label,
    createdAt: Date.now(),
  }
  const db = await openDb()
  const tx = db.transaction(STORE_QUEUE, "readwrite")
  tx.objectStore(STORE_QUEUE).put(row)
  await txDone(tx)
  db.close()
  return row
}

export async function queueList(): Promise<QueueItem[]> {
  const db = await openDb()
  const tx = db.transaction(STORE_QUEUE, "readonly")
  const req = tx.objectStore(STORE_QUEUE).getAll()
  const rows = await new Promise<QueueItem[]>((resolve, reject) => {
    req.onsuccess = () => resolve((req.result as QueueItem[]) || [])
    req.onerror = () => reject(req.error)
  })
  await txDone(tx)
  db.close()
  return rows.sort((a, b) => a.createdAt - b.createdAt)
}

export async function queueRemove(id: string) {
  const db = await openDb()
  const tx = db.transaction(STORE_QUEUE, "readwrite")
  tx.objectStore(STORE_QUEUE).delete(id)
  await txDone(tx)
  db.close()
}

export function isOnline() {
  return typeof navigator !== "undefined" ? navigator.onLine : true
}

export function authHeaders(): Record<string, string> {
  const token =
    localStorage.getItem("token") ||
    localStorage.getItem("accessToken") ||
    localStorage.getItem("jwt") ||
    ""
  const h: Record<string, string> = {
    "Content-Type": "application/json",
  }
  if (token) h.Authorization = `Bearer ${token}`
  return h
}

export async function offlineGet<T>(
  cacheKey: string,
  url: string
): Promise<{ data: T | null; fromCache: boolean; savedAt?: number }> {
  if (isOnline()) {
    try {
      const res = await fetch(url, { headers: authHeaders() })
      if (!res.ok) throw new Error(String(res.status))
      const data = (await res.json()) as T
      await cacheSet(cacheKey, data)
      return { data, fromCache: false }
    } catch {
      const cached = await cacheGet<T>(cacheKey)
      if (cached) {
        return { data: cached.data, fromCache: true, savedAt: cached.savedAt }
      }
      return { data: null, fromCache: true }
    }
  }
  const cached = await cacheGet<T>(cacheKey)
  if (cached) {
    return { data: cached.data, fromCache: true, savedAt: cached.savedAt }
  }
  return { data: null, fromCache: true }
}

export async function offlineMutate(opts: {
  url: string
  method?: string
  body?: unknown
  label?: string
}): Promise<{ ok: boolean; queued: boolean; data?: any; error?: string }> {
  const method = opts.method || "POST"
  const body = opts.body !== undefined ? JSON.stringify(opts.body) : undefined
  const headers = authHeaders()

  if (isOnline()) {
    try {
      const res = await fetch(opts.url, { method, headers, body })
      const text = await res.text()
      let data: any = null
      try {
        data = text ? JSON.parse(text) : null
      } catch {
        data = text
      }
      if (!res.ok) {
        return { ok: false, queued: false, error: data?.error || res.statusText }
      }
      return { ok: true, queued: false, data }
    } catch {
      await queueAdd({
        url: opts.url,
        method,
        body,
        headers,
        label: opts.label,
      })
      return { ok: true, queued: true }
    }
  }

  await queueAdd({
    url: opts.url,
    method,
    body,
    headers,
    label: opts.label,
  })
  return { ok: true, queued: true }
}

export async function flushQueue(): Promise<{
  sent: number
  left: number
  errors: string[]
}> {
  const items = await queueList()
  let sent = 0
  const errors: string[] = []

  for (const item of items) {
    if (!isOnline()) break
    try {
      const res = await fetch(item.url, {
        method: item.method,
        headers: item.headers || authHeaders(),
        body: item.body,
      })
      if (!res.ok) {
        const t = await res.text()
        errors.push(`${item.label || item.url}: ${res.status} ${t}`)
        continue
      }
      await queueRemove(item.id)
      sent++
    } catch (e: any) {
      errors.push(`${item.label || item.url}: ${e?.message || "network"}`)
      break
    }
  }

  const left = (await queueList()).length
  return { sent, left, errors }
}

export async function queueCount() {
  return (await queueList()).length
}