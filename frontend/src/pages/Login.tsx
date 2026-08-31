import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Globe, Eye, EyeOff } from "lucide-react"
import { useAuth } from "../lib/auth"

export default function Login() {
  const { t, i18n } = useTranslation()
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  if (isAuthenticated) {
    navigate("/dashboard")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      await login(email, password)
      navigate("/dashboard")
    } catch (err: any) {
      setError(err.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-svh flex items-center justify-center bg-semay-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-semay-900 flex items-center justify-center">
              <span className="text-white font-semibold">ሰ</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-xl tracking-tight">Semay</div>
              <div className="text-xs text-semay-400">ሰማይ</div>
            </div>
          </Link>
          <h1 className="text-2xl font-semibold text-semay-900">{t("welcome")}</h1>
          <p className="text-semay-500 mt-2 text-sm">
            {i18n.language === "am" ? "ወደ ሰማይ ይግቡ" : "Sign in to your account"}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-semay-200 rounded-2xl p-8 shadow-sm space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 pr-11 rounded-xl border border-semay-200 focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-semay-400 hover:text-semay-700"
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          {error && (
            <div className="text-sm text-danger bg-red-50 border border-red-100 rounded-xl px-3 py-2">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium hover:bg-semay-800 transition disabled:opacity-60"
          >
            {loading ? "..." : t("login")}
          </button>
        </form>

        <p className="text-center text-sm text-semay-500 mt-6">
          {i18n.language === "am" ? "አዲስ ነዎት?" : "New here?"}{" "}
          <Link to="/register" className="font-medium text-semay-900 hover:underline">
            {i18n.language === "am" ? "ተመዝገብ" : "Create account"}
          </Link>
        </p>

        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={() => i18n.changeLanguage(i18n.language === "en" ? "am" : "en")}
            className="flex items-center gap-2 text-sm text-semay-500 hover:text-semay-800"
          >
            <Globe className="w-4 h-4" />
            {i18n.language === "en" ? "አማርኛ" : "English"}
          </button>
        </div>
      </div>
    </div>
  )
}