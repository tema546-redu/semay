import { useState, useEffect } from "react"
import { track } from "../../lib/analytics"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  Coffee,
  Flame,
  HeartPulse,
  Hotel,
  Phone,
  Shield,
  UtensilsCrossed,
  Dumbbell,
  X,
  Handshake,
  Plane,
  Zap,
  MapPin,
  MessageCircle,
} from "lucide-react"

const API = import.meta.env.VITE_API_URL || "http://localhost:3001"

type PubCat = {
  key: string
  labelEn: string
  labelAm?: string | null
  icon: typeof Phone
}

type ApiContact = {
  id: string
  nameEn: string
  nameAm?: string | null
  phone: string
  phone2?: string | null
  phone3?: string | null
  phone4?: string | null
  noteEn?: string | null
  noteAm?: string | null
  photoUrl?: string | null
  address?: string | null
  mapsUrl?: string | null
  website?: string | null
  verified: boolean
}

const FALLBACK_CATS: PubCat[] = [
  { key: "emergency", labelEn: "Emergency", labelAm: "አደጋ ጊዜ", icon: HeartPulse },
  { key: "hospital", labelEn: "Hospitals", labelAm: "ሆስፒታሎች", icon: HeartPulse },
  { key: "police", labelEn: "Police", labelAm: "ፖሊስ", icon: Shield },
  { key: "fire", labelEn: "Fire", labelAm: "እሳት", icon: Flame },
  { key: "hotel", labelEn: "Hotels", labelAm: "ሆቴሎች", icon: Hotel },
  { key: "gym", labelEn: "Gyms", labelAm: "ጂም", icon: Dumbbell },
]

const ICON_BY_KEY: Record<string, typeof Phone> = {
  emergency: HeartPulse,
  hospital: HeartPulse,
  police: Shield,
  fire: Flame,
  hotel: Hotel,
  gym: Dumbbell,
}

const BUSINESSES = [
  {
    icon: UtensilsCrossed,
    en: "Restaurant",
    am: "ሬስቶራንት",
    to: "/register?type=RESTAURANT",
  },
  { icon: Coffee, en: "Café", am: "ካፌ", to: "/register?type=CAFE" },
  {
    icon: Building2,
    en: "More businesses",
    am: "ተጨማሪ ንግዶች",
    to: "/register",
  },
]

export default function PublicHub() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [showBiz, setShowBiz] = useState(false)
  const [category, setCategory] = useState<string | null>(null)
  const [list, setList] = useState<ApiContact[]>([])
  const [listLoading, setListLoading] = useState(false)
  const [soon, setSoon] = useState<"delivery" | "energy" | "nearme" | "skychat" | null>(null)
  const [pubCats, setPubCats] = useState<PubCat[]>(FALLBACK_CATS)

  const switchLang = () => i18n.changeLanguage(isAm ? "en" : "am")

  useEffect(() => {
    track("hub_open", "/more")
  }, [])
    
     useEffect(() => {
    fetch(`${API}/api/public/contact-categories`)
      .then((r) => r.json())
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) return
        const byKey = new Map<string, PubCat>()
        for (const c of FALLBACK_CATS) byKey.set(c.key, c)
        for (const c of data) {
          if (!c?.key) continue
          const key = String(c.key).toLowerCase()
          byKey.set(key, {
            key,
            labelEn: c.labelEn || key,
            labelAm: c.labelAm || null,
            icon: ICON_BY_KEY[key] || Building2,
          })
        }
        setPubCats(Array.from(byKey.values()))
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!category) {
      setList([])
      return
    }
    track("contact_open", "/more", { category })
    let cancelled = false
    setListLoading(true)
    fetch(`${API}/api/public/contacts?category=${category}`)
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || "Failed")
        if (!cancelled) setList(Array.isArray(data) ? data : [])
      })
      .catch(() => {
        if (!cancelled) setList([])
      })
      .finally(() => {
        if (!cancelled) setListLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [category])

  return (
    <div className="min-h-svh flex flex-col bg-[#f3f1ec] text-stone-800">
      <header className="relative overflow-hidden border-b border-amber-200/40">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #f6d5a8 0%, #f8e4c8 35%, #f3f1ec 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_#fff8ee_0%,_transparent_55%)]" />

        <div className="relative max-w-3xl mx-auto px-5 pt-3 pb-8">
          <div className="h-12 flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="p-1.5 -ml-1.5 rounded-md text-stone-600/80 hover:text-stone-900"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-stone-900/90 flex items-center justify-center shadow-sm">
                  <span className="text-white font-semibold text-sm">ሰ</span>
                </div>
                <span className="font-semibold tracking-tight text-stone-900">
                  Semaiy
                </span>
                <span className="text-stone-600/70 text-sm">ሰማይ</span>
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={switchLang}
                className="text-sm text-stone-700 px-2.5 py-1.5 rounded-md"
              >
                {isAm ? "EN" : "አማ"}
              </button>
              <button
                type="button"
                onClick={() => setSoon("skychat")}
                className="text-sm font-medium text-stone-800 px-3 py-1.5 rounded-full border border-stone-900/10 bg-white/70 backdrop-blur-sm hover:bg-white inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {isAm ? "ስካይቻት" : "SkyChat"}
              </button>
              <button
                type="button"
                onClick={() => setShowBiz(true)}
                className="text-sm font-medium text-stone-800 px-3 py-1.5 rounded-full border border-stone-900/10 bg-white/70 backdrop-blur-sm hover:bg-white"
              >
                {isAm ? "የኔ ንግድ" : "My business"}
              </button>
            </div>
          </div>

          <p className="text-[11px] tracking-[0.18em] uppercase text-stone-600/70 mb-2">
            {isAm ? "ኢትዮጵያ · ሰማይ" : "Ethiopia · Semaiy"}
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight mb-2">
            {isAm ? "እንኳን ደህና መጡ" : "Welcome"}
          </h1>
          <p className="text-[15px] text-stone-700/85 leading-relaxed max-w-md">
            {isAm
              ? "ጸጥ ያለ ሰማይ — ደላላ፣ ዲሊቨሪ፣ ኃይል፣ ግንኙነቶች።"
              : "A quiet sky — Delala, Delivery, Energy, NearMe and contacts."}
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-5 -mt-2 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          <Link
            to="/delala"
            className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm hover:border-stone-300 transition"
          >
            <div className="w-11 h-11 rounded-full bg-stone-100 flex items-center justify-center mb-3 text-stone-800">
              <Handshake className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h2 className="text-lg font-semibold text-stone-900 tracking-tight mb-0.5">
              ደላላ
            </h2>
            <p className="text-xs text-stone-500 leading-relaxed">
              {isAm ? "ማን አለው · ማን ይፈልጋል" : "Who has it · who needs it"}
            </p>
          </Link>

          <button
            type="button"
            onClick={() => setSoon("delivery")}
            className="text-left rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm hover:border-stone-300 transition"
          >
            <div className="w-11 h-11 rounded-full bg-sky-50 flex items-center justify-center mb-3 text-sky-800">
              <Plane className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h2 className="text-lg font-semibold text-stone-900 tracking-tight mb-0.5">
              {isAm ? "ዲሊቨሪ" : "Delivery"}
            </h2>
            <p className="text-xs text-stone-500">
              {isAm ? "ሰማይ ድሮን · በቅርብ" : "Semaiy drone · coming soon"}
            </p>
          </button>

          <button
            type="button"
            onClick={() => setSoon("energy")}
            className="text-left rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm hover:border-stone-300 transition"
          >
            <div className="w-11 h-11 rounded-full bg-amber-50 flex items-center justify-center mb-3 text-amber-800">
              <Zap className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h2 className="text-lg font-semibold text-stone-900 tracking-tight mb-0.5">
              {isAm ? "ኃይል" : "Energy"}
            </h2>
            <p className="text-xs text-stone-500">
              {isAm ? "ገመድ አልባ ኃይል · በቅርብ" : "Wireless energy · coming soon"}
            </p>
          </button>

          <button
            type="button"
            onClick={() => setSoon("nearme")}
            className="text-left rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm hover:border-stone-300 transition"
          >
            <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center mb-3 text-emerald-800">
              <MapPin className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h2 className="text-lg font-semibold text-stone-900 tracking-tight mb-0.5">
              {isAm ? "ኒርሚ" : "NearMe"}
            </h2>
            <p className="text-xs text-stone-500">
              {isAm ? "በአቅራቢያ · በቅርብ" : "What’s nearby · coming soon"}
            </p>
          </button>
        </div>

        <section>
          <h2 className="text-base font-semibold text-stone-900 mb-1">
            {isAm ? "የኢትዮጵያ ግንኙነቶች" : "Contacts Ethiopia"}
          </h2>
          <p className="text-sm text-stone-500 mb-1 leading-relaxed">
            {isAm
              ? "በሰማይ የተረጋገጡ መስመሮች። ቁጥሮች ሊለወጡ ይችላሉ።"
              : "Lines checked by Semaiy. Numbers can change — stay careful."}
          </p>
          <p className="text-xs text-stone-400 mb-5">
            {isAm ? "ወዴት መደወል ይፈልጋሉ?" : "Where do you want to call?"}

          </p>
           <button
            type="button"
            onClick={() => setSoon("nearme")}
            className="mb-5 text-sm font-medium px-4 py-2 rounded-full border border-stone-200 bg-white hover:border-stone-300"
          >
            {isAm ? "ግንኙነቶችን አስስ " : "Explore contacts "}
          </button>

          <div className="flex flex-wrap gap-2 mb-5">
            {pubCats.map((c) => {
              const Icon = c.icon
              const active = category === c.key
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() =>
                    setCategory((prev) => (prev === c.key ? null : c.key))
                  }
                  className={`inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border transition ${
                    active
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {isAm && c.labelAm ? c.labelAm : c.labelEn}
                </button>
              )
            })}
          </div>

          {!category && (
            <p className="text-sm text-stone-400 py-6 text-center border border-dashed border-stone-200 rounded-xl bg-white/50">
              {isAm ? "ከላይ አንድ አይነት ይምረጡ" : "Choose a category above"}
            </p>
          )}

          {category && listLoading && (
            <p className="text-sm text-stone-400 py-8 text-center">
              {isAm ? "በመጫን ላይ…" : "Loading…"}
            </p>
          )}

          {category && !listLoading && list.length === 0 && (
            <p className="text-sm text-stone-400 py-6 text-center border border-dashed border-stone-200 rounded-xl bg-white/50">
              {isAm
                ? "በዚህ ምድብ የተረጋገጠ ቁጥር የለም።"
                : "No verified numbers in this category yet."}
            </p>
          )}

          {category && !listLoading && list.length > 0 && (
            <ul className="space-y-2">
              {list.map((item) => {
                const phones = [item.phone, item.phone2, item.phone3, item.phone4].filter(
                  Boolean
                ) as string[]
                const site = item.website
                  ? item.website.startsWith("http")
                    ? item.website
                    : `https://${item.website}`
                  : null
                return (
                  <li
                    key={item.id}
                    className="rounded-xl border border-stone-200 bg-white px-4 py-3 flex items-center gap-3"
                  >
                    {item.photoUrl ? (
                      <img
                        src={item.photoUrl}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover shrink-0 bg-stone-100"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-stone-100 shrink-0" />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <p className="text-sm font-medium text-stone-900">
                          {isAm && item.nameAm ? item.nameAm : item.nameEn}
                        </p>
                        {item.verified && (
                          <span className="inline-flex items-center gap-0.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                            <BadgeCheck className="w-3 h-3" />
                            {isAm ? "ተረጋግጧል" : "Verified"}
                          </span>
                        )}
                      </div>
                      {(item.noteEn || item.noteAm) && (
                        <p className="text-xs text-stone-500 mt-0.5">
                          {isAm ? item.noteAm || item.noteEn : item.noteEn}
                        </p>
                      )}
                      {item.address && (
                        <p className="text-xs text-stone-400">{item.address}</p>
                      )}
                      <p className="text-sm text-stone-600 mt-1 tabular-nums">
                        {phones.join(" · ")}
                      </p>
                      {site && (
                        <a
                          href={site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-sky-600 underline"
                        >
                          {isAm ? "ድረ-ገጽ" : "Website"}
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5 shrink-0">
                      {phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, "")}`}
                          onClick={() =>
                            track("contact_call", "/more", {
                              phone: p,
                              category,
                            })
                          }
                          className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center"
                          aria-label="Call"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </main>

      <footer className="border-t border-stone-300/70 bg-[#ebe8e2]">
        <div className="max-w-3xl mx-auto px-5 py-8 text-sm text-stone-600">
          <p className="font-semibold text-stone-900 mb-1">Semaiy · ሰማይ</p>
          <p className="mb-3">{isAm ? "" : "built to simplify your day"}</p>
          <Link
            to="/"
            className="hover:text-stone-900 underline-offset-2 hover:underline"
          >
            {isAm ? "መነሻ" : "Home"}
          </Link>
          <span className="mx-2 text-stone-400">·</span>
          <Link
            to="/register"
            className="hover:text-stone-900 underline-offset-2 hover:underline"
          >
            {isAm ? "ነጻ ሙከራ" : "Free trial"}
          </Link>
        </div>
      </footer>

      {showBiz && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/25">
          <div className="bg-[#f3f1ec] w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl border border-stone-200 shadow-lg max-h-[85svh] overflow-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
              <h3 className="font-semibold text-stone-900">
                {isAm ? "የኔ ንግድ" : "My business"}
              </h3>
              <button
                type="button"
                onClick={() => setShowBiz(false)}
                className="p-1.5 rounded-md text-stone-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 grid gap-2">
              {BUSINESSES.map((b) => {
                const Icon = b.icon
                return (
                  <Link
                    key={b.en}
                    to={b.to}
                    onClick={() => setShowBiz(false)}
                    className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
                  >
                    <Icon className="w-5 h-5 text-stone-700" />
                    <span className="text-sm font-medium text-stone-900">
                      {isAm ? b.am : b.en}
                    </span>
                  </Link>
                )
              })}
              <Link
                to="/login"
                onClick={() => setShowBiz(false)}
                className="text-center text-sm text-stone-600 py-2"
              >
                {isAm ? "ግባ" : "Sign in"}
              </Link>
              <Link
                to="/register"
                onClick={() => setShowBiz(false)}
                className="text-center text-sm font-medium bg-stone-900 text-white py-2.5 rounded-xl"
              >
                {isAm ? "ነጻ ሙከራ" : "Free trial"}
              </Link>
            </div>
          </div>
        </div>
      )}

      {soon && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/25">
          <div className="bg-[#f3f1ec] w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl border border-stone-200 p-6 shadow-lg">
            <h3 className="font-semibold text-stone-900 text-lg mb-2">
              {soon === "delivery"
                ? isAm
                  ? "የሰማይ ድሮን ዲሊቨሪ"
                  : "Semaiy drone delivery"
                : soon === "energy"
                  ? isAm
                    ? "ገመድ አልባ ኃይል"
                    : "Wireless energy"
                  : soon === "nearme"
                    ? isAm
                      ? "ኒርሚ"
                      : "NearMe"
                    : isAm
                      ? "ስካይቻት"
                      : "SkyChat"}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-5">
              {soon === "delivery"
                ? isAm
                  ? "ከየትም ማንኛውንም ነገር በሰማይ ድሮን ማዘዝ — በቅርቡ።"
                  : "Order anything from anywhere via Semaiy drone — coming soon."
                : soon === "energy"
                  ? isAm
                    ? "ለስልክ፣ መኪና ወይም ሌላ — ገመድ አልባ ኃይል በሰማይ — በቅርቡ።"
                    : "For phone, car, or more — wireless energy on Semaiy — coming soon."
                  : soon === "nearme"
                    ? isAm
                      ? "በአቅራቢያ ያሉ ቦታዎችና አገልግሎቶች — በቅርቡ።"
                      : "Places and services near you — coming soon."
                    : isAm
                      ? "በሰማይ ላይ ይወያዩ — በቅርቡ።"
                      : "Chat on Semaiy — coming soon."}
            </p>
            <button
              type="button"
              onClick={() => setSoon(null)}
              className="w-full py-2.5 rounded-xl bg-stone-900 text-white text-sm font-medium"
            >
              {isAm ? "እሺ" : "OK"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}