// backend/src/lib/frontendUrl.ts
export function frontendBase() {
  const u = (process.env.FRONTEND_URL || "https://semaiy.netlify.app").replace(/\/$/, "")
  // Never ship localhost in production
  if (process.env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/.test(u)) {
    return "https://semaiy.netlify.app"
  }
  return u
}