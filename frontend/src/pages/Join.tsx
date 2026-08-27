import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { staffApi } from "../lib/api"


export default function Join() {
  const { code } = useParams<{ code: string }>()
  const navigate = useNavigate()
  const [info, setInfo] = useState<any>(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  useEffect(() => {
    if (!code) return
    staffApi
      .getInvite(code)
      .then(setInfo)
      .catch((e) => setError(e.message || "Invalid invite"))
      .finally(() => setLoading(false))
  }, [code])

  const submit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!code) return
  setSaving(true)
  setError("")
  try {
    const res = await staffApi.join({
      code,
      name: form.name,
      email: form.email,
      password: form.password,
    })
    if (res.token) {
      localStorage.setItem("token", res.token)
    }
    window.location.href = "/dashboard"
  } catch (err: any) {
    setError(err.message || "Join failed")
  } finally {
    setSaving(false)
  }
}

  if (loading) {
    return (
      <div className="min-h-svh flex items-center justify-center text-semay-500 text-sm">
        Loading invite...
      </div>
    )
  }

  if (error && !info) {
    return (
      <div className="min-h-svh flex flex-col items-center justify-center gap-4 p-6">
        <p className="text-red-600 text-sm">{error}</p>
        <Link to="/login" className="text-sm text-semay-900 underline">
          Go to login
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-svh bg-semay-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white border border-semay-200 rounded-2xl p-6 space-y-4">
        <div>
          <h1 className="text-xl font-semibold text-semay-900">Join team</h1>
          <p className="text-sm text-semay-500 mt-1">
            {info?.organizationName} · role: <strong>{info?.role}</strong>
          </p>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <input
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
          />
          <input
            required
            type="password"
            minLength={6}
            placeholder="Password (min 6)"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={saving}
            className="w-full bg-semay-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-60"
          >
            {saving ? "..." : "Join & start"}
          </button>
        </form>
        <p className="text-xs text-semay-400 text-center">
          Already have an account? <Link to="/login" className="underline">Login</Link>
        </p>
      </div>
    </div>
  )
}