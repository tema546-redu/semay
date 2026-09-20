export function garmentApiBase() {
  const env = (import.meta as any).env?.VITE_API_URL || ""
  const base = String(env).replace(/\/$/, "")
  // Same default as api.ts — never post to Vite (5173)
  return base || "http://localhost:3001"
}

export function garmentUrl(path: string) {
  const base = garmentApiBase()
  const p = path.startsWith("/") ? path : `/${path}`
  return `${base}${p}`
}