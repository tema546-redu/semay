import { useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Eye, EyeOff } from "lucide-react"
import { useAuth } from "../lib/auth"
import { libraryApi, setToken } from "../lib/api"

const BUSINESS_TYPES = [
  { value: "CAFE", label: "Café", labelAm: "ካፌ" },
  { value: "RESTAURANT", label: "Restaurant", labelAm: "ሬስቶራንት" },
  { value: "BAKERY", label: "Bakery", labelAm: "ቤከሪ" },
  { value: "HOTEL", label: "Hotel", labelAm: "ሆቴል" },
  { value: "GYM", label: "Gym & Fitness", labelAm: "ጂም" },
  { value: "SUPERMARKET", label: "Supermarket", labelAm: "ሱፐርማርኬት" },
  { value: "PHARMACY", label: "Pharmacy", labelAm: "ፋርማሲ" },
  { value: "SALON", label: "Salon", labelAm: "ሳሎን" },
  { value: "SCHOOL", label: "School", labelAm: "ትምህርት ቤት" },
  { value: "UNIVERSITY", label: "University", labelAm: "ዩኒቨርሲቲ" },
  { value: "LIBRARY", label: "Library", labelAm: "ቤተ መጻሕፍት" },
  { value: "SUBCITY", label: "Subcity / Government", labelAm: "ክፍለ ከተማ" },
   { value: "GARMENT", label: "Garment / Clothing", labelAm: "ልብስ ስፌት" },
  { value: "OTHER", label: "Other", labelAm: "ሌላ" },
 
]

const VALID_TYPES = new Set(BUSINESS_TYPES.map((b) => b.value))

function homeForType(type?: string) {
  if (type === "SUBCITY") return "/library/network"
  if (type === "LIBRARY") return "/library"
  if (type === "RESTAURANT" || type === "CAFE") return "/dashboard"
  if (type === "BAKERY") return "/dashboard"
  if (type === "PHARMACY") return "/dashboard"
  if (type === "GYM") return "/dashboard"
  if (type === "HOTEL") return "/dashboard"
  if (type === "GARMENT") return "/garment"
  return "/dashboard"
}

export default function Register() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { register } = useAuth()
  const navigate = useNavigate()
  const [params] = useSearchParams()

  const networkCode = (params.get("network") || "").trim().toUpperCase()
  const typeFromUrl = params.get("type")?.toUpperCase() || ""
  const initialType = networkCode
    ? "LIBRARY"
    : VALID_TYPES.has(typeFromUrl)
      ? typeFromUrl
      : "CAFE"

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    organizationName: "",
    businessType: initialType,
    preferredLang: isAm ? "am" : "en",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const preferredLang = isAm ? "am" : "en"

      // Subcity network invite → join under parent, not normal register
      if (networkCode) {
        const res = await libraryApi.joinNetworkLibrary({
          name: form.name,
          email: form.email,
          password: form.password,
          organizationName: form.organizationName,
          networkCode,
          preferredLang,
        })
        setToken(res.token)
        // Full page load so AuthProvider picks up token
        window.location.href = "/library"
        return
      }

      const res = await register({
        ...form,
        businessType: form.businessType,
        preferredLang,
      })
      navigate(homeForType(res.organization?.type), { replace: true })
    } catch (err: any) {
      const message =
        err?.response?.data?.error?.[0]?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Registration failed. Please try again."
      setError(typeof message === "string" ? message : JSON.stringify(message))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-svh flex items-center justify-center bg-semay-50 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-10 h-10 rounded-xl bg-semay-900 flex items-center justify-center">
              <span className="text-white font-semibold">ሰ</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-xl">Semaiy</div>
              <div className="text-xs text-semay-400">ሰማይ</div>
            </div>
          </Link>
          <h1 className="text-2xl font-semibold text-semay-900">
            {isAm ? "አዲስ መለያ ፍጠር" : "Create your account"}
          </h1>
          <p className="text-sm text-semay-500 mt-2">
            {isAm ? "3 ቀን ነፃ ሙከራ" : "3-day free trial"}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-semay-200 rounded-2xl p-8 shadow-sm space-y-4"
        >
          {networkCode && (
            <p className="text-sm text-stone-600 bg-stone-100 rounded-xl px-3 py-2">
              {isAm
                ? "የክፍለ ከተማ ኔትወርክ — ቤተ መጻሕፍትዎ በሰሌዳቸው ላይ ይታያል።"
                : "Joining a subcity network. Your library will appear on their board."}
            </p>
          )}

          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1">
              {isAm ? "ሙሉ ስም" : "Your Name"}
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                required
                minLength={6}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-3.5 py-2.5 pr-11 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
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
            <p className="text-[11px] text-semay-400 mt-1">
              {isAm ? "ቢያንስ 6 ቁምፊ" : "At least 6 characters"}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1">
              {isAm ? "የድርጅት ስም" : "Business / School Name"}
            </label>
            <input
              required
              value={form.organizationName}
              onChange={(e) => setForm({ ...form, organizationName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1">
              {isAm ? "ዓይነት" : "Type"}
            </label>
            <select
              value={networkCode ? "LIBRARY" : form.businessType}
              disabled={!!networkCode}
              onChange={(e) => setForm({ ...form, businessType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:bg-semay-50"
            >
              {BUSINESS_TYPES.map((b) => (
                <option key={b.value} value={b.value}>
                  {isAm ? b.labelAm : b.label}
                </option>
              ))}
            </select>
            {networkCode && (
              <p className="text-[11px] text-semay-400 mt-1">
                Locked to Library for this invite
              </p>
            )}
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
            {loading ? "..." : isAm ? "ተመዝገብ" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-semay-500 mt-6">
          <Link to="/login" className="font-medium text-semay-900 hover:underline">
            {isAm ? "አስቀድመው መለያ አለዎት? ይግቡ" : "Already have an account? Sign in"}
          </Link>
        </p>
      </div>
    </div>
  )
}