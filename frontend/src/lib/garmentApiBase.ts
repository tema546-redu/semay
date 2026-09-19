export function garmentApiBase() {
  const env = (import.meta as any).env?.VITE_API_URL || ""
  return String(env).replace(/\/$/, "")
}

export function garmentUrl(path: string) {
  const base = garmentApiBase()
  const p = path.startsWith("/") ? path : `/${path}`
  return base ? `${base}${p}` : p
}