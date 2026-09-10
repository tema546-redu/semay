import { useEffect, useState } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { staffApi, setToken } from "../lib/api"

export default function Join() {
  const { code: codeParam } = useParams()
  const [search] = useSearchParams()
  const code = (codeParam || search.get("code") || "").trim().toUpperCase()

  const [phase, setPhase] = useState<"loading" | "form" | "error">("loading")
  const [info, setInfo] = useState<any>(null)
  const [error, setError] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!code) {
      setError("Missing invite code. Open the full link from the library owner.")
      setPhase("error")
      return
    }

    let cancelled = false
    const timer = window.setTimeout(() => {
      if (!cancelled) {
        setError("Request timed out. Is the backend running on port 3001?")
        setPhase("error")
      }
    }, 12000)

    staffApi
      .getInvite(code)
      .then((data) => {
        if (cancelled) return
        setInfo(data)
        setPhase("form")
      })
      .catch((e: any) => {
        if (cancelled) return
        setError(e?.message || "Invalid or expired invite")
        setPhase("error")
      })
      .finally(() => {
        window.clearTimeout(timer)
      })

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [code])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError("")
    try {
      const res = await staffApi.join({ code, name, email, password })
      if (res.token) setToken(res.token)

      // DECLARE role FIRST — then use it
   const role = String(res.role || res.user?.role || info?.role || "").toUpperCase()
   const type = String(
     res.organization?.type || info?.businessType || info?.organization?.type || ""
   ).toUpperCase()

  if (type === "LIBRARY" && (role === "STAFF" || role === "WAITER")) {
  window.location.href = "/library/attendance"
   return
  }
  if (type === "LIBRARY") {
    window.location.href = "/library"
    return
  }
  if (role === "KITCHEN") {
    window.location.href = "/kds"
    return
  }
  if (role === "WAITER" || role === "STAFF") {
    window.location.href = "/staff-home"
    return
  }
  window.location.href = "/dashboard"
    } catch (err: any) {
      setError(err?.message || "Join failed")
      setBusy(false)
    }
  }

  if (phase === "loading") {
    return (
      <div className="min-h-svh flex flex-col items-center justify-center gap-2 p-6 text-sm text-stone-500">
        <p>Checking invite…</p>
        <p className="text-xs font-mono text-stone-400">{code || "no code"}</p>
      </div>
    )
  }

  if (phase === "error" && !info) {
    return (
      <div className="min-h-svh flex items-center justify-center p-6">
        <div className="max-w-sm text-center space-y-3">
          <p className="text-sm text-rose-700">{error}</p>
          <Link to="/" className="text-sm text-stone-900 underline">
            Home
          </Link>
          <Link to="/login" className="block text-sm text-stone-500">
            Sign in
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-svh flex items-center justify-center bg-stone-50 px-4 py-10">
      <div className="w-full max-w-md bg-white border border-stone-200 rounded-2xl p-6 space-y-4">
        <div>
          <h1 className="text-lg font-semibold text-stone-900">Join as staff</h1>
          <p className="text-xs text-stone-500 mt-1">
            Code <span className="font-mono">{code}</span>
            {info?.organization?.name || info?.organizationName
              ? ` · ${info.organization?.name || info.organizationName}`
              : ""}
            {info?.role ? ` · ${info.role}` : ""}
          </p>
        </div>

        {error && (
          <div className="text-sm text-rose-700 bg-rose-50 rounded-xl px-3 py-2">{error}</div>
        )}

        <form onSubmit={submit} className="space-y-3">
          <input
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border text-sm"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border text-sm"
          />
          <input
            required
            type="password"
            minLength={6}
            placeholder="Password (min 6)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border text-sm"
          />
          <button
            type="submit"
            disabled={busy}
            className="w-full bg-stone-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-50"
          >
            {busy ? "..." : "Create staff account"}
          </button>
        </form>
      </div>
    </div>
  )
}