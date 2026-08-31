import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Globe,
  UtensilsCrossed,
  Dumbbell,
  Hotel,
  Coffee,
  Play,
  X,
  MapPin,
  Store,
  Settings,
  HelpCircle,
  User,
  Croissant,
  Sparkles,
} from "lucide-react"
import { useAuth } from "../lib/auth"

/** Replace with your real ~45s YouTube video ID */
const GUIDE_VIDEO_ID = "YOUR_VIDEO_ID"

export default function Landing() {
  const { t, i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { user, organization, isAuthenticated } = useAuth?.() || ({} as any)
  const [showVideo, setShowVideo] = useState(false)

  const switchLang = () => {
    i18n.changeLanguage(isAm ? "en" : "am")
  }

  const businesses = [
    {
      icon: Coffee,
      titleEn: "Café",
      titleAm: "ካፌ",
      descEn: "Menu, POS, kitchen display, staff invites, daily sales.",
      descAm: "ሜኑ፣ POS፣ ኩሽና፣ ሰራተኛ ግብዣ፣ የዕለት ሽያጭ።",
      to: "/register?type=CAFE",
    },
    {
      icon: UtensilsCrossed,
      titleEn: "Restaurant",
      titleAm: "ሬስቶራንት",
      descEn: "Orders to kitchen, reservations, closing report, billing.",
      descAm: "ትዕዛዝ ወደ ኩሽና፣ ሪዘርቬሽን፣ የመዝጊያ ሪፖርት፣ ክፍያ።",
      to: "/register?type=RESTAURANT",
    },
    {
      icon: Croissant,
      titleEn: "Bakery",
      titleAm: "ቤከሪ",
      descEn: "Produce, sell, waste, stock and daily sales.",
      descAm: "ማምረት፣ ሽያጭ፣ ብክነት፣ ክምችት እና የዕለት ሽያጭ።",
      to: "/register?type=BAKERY",
    },
    {
      icon: Dumbbell,
      titleEn: "Gym",
      titleAm: "ጂም",
      descEn: "Membership plans and member check-in tracking.",
      descAm: "የአባልነት እቅድ እና የመግቢያ ክትትል።",
      to: "/register?type=GYM",
    },
    {
      icon: Hotel,
      titleEn: "Hotel",
      titleAm: "ሆቴል",
      descEn: "Room list and basic occupancy management.",
      descAm: "ክፍሎች እና መሠረታዊ አስተዳደር።",
      to: "/register?type=HOTEL",
    },
    {
      icon: Sparkles,
      titleEn: "Beauty salon",
      titleAm: "ሳሎን",
      descEn: "Coming with appointments and staff — join the waitlist via trial.",
      descAm: "ቀጠሮ እና ሰራተኛ — በቅርቡ። አሁን ነፃ ሙከራ መጀመር ይችላሉ።",
      to: "/register?type=SALON",
    },
    {
      icon: GraduationCap,
      titleEn: "School",
      titleAm: "ትምህርት ቤት",
      descEn: "Students, attendance, and basic grades.",
      descAm: "ተማሪዎች፣ አቴንዳንስ እና መሠረታዊ ውጤት።",
      to: "/register?type=SCHOOL",
    },
  ]

  const dashboardLink = isAuthenticated ? "/dashboard" : "/login"

  return (
    <div className="min-h-svh flex flex-col text-slate-800">
      <div
        className="relative flex-1 flex flex-col"
        style={{
          background:
            "linear-gradient(165deg, #b8d4f0 0%, #d4e5f5 28%, #eef3f8 55%, #f7f9fc 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute top-20 right-[10%] w-64 h-64 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute top-40 left-[5%] w-80 h-48 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />

        {/* Header */}
        <header className="relative z-10 border-b border-white/40 bg-white/50 backdrop-blur-md sticky top-0">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-slate-900 flex items-center justify-center shadow-sm">
                <span className="text-white font-semibold text-sm">ሰ</span>
              </div>
              <div>
                <span className="font-semibold text-lg tracking-tight text-slate-900">Semay</span>
                <span className="text-slate-500 text-sm ml-1.5">ሰማይ</span>
              </div>
            </Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={switchLang}
                className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition px-3 py-1.5 rounded-full hover:bg-white/70"
              >
                <Globe className="w-4 h-4" />
                {isAm ? "English" : "አማርኛ"}
              </button>
              <Link
                to="/login"
                className="text-sm font-medium text-slate-700 px-3 py-2 rounded-full hover:bg-white/70 hidden sm:inline"
              >
                {t("login") || (isAm ? "ግባ" : "Sign in")}
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition"
              >
                {isAm ? "ነጻ ሙከራ" : "Free trial"}
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 pt-16 sm:pt-20 pb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-slate-500 mb-4">
              {isAm ? "ለኢትዮጵያ · ለአፍሪካ" : "Ethiopia · East Africa"}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-semibold tracking-tight text-slate-900 leading-[1.12] mb-5">
              {isAm ? (
                <>
                  ሰማይ — ለንግድዎ
                  <br />
                  ግልጽ ዲጂታል ሰማይ
                </>
              ) : (
                <>
                  Semay — a clear digital
                  <br />
                  sky for your business
                </>
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              {isAm
                ? "ሬስቶራንት፣ ካፌ፣ ቤከሪ፣ ጂም፣ ሆቴል እና ትምህርት ቤት — አንድ መድረክ። POS፣ ኩሽና፣ ሰራተኞች፣ ሪፖርት። ነጻ ሙከራ 3 ቀን።"
                : "Restaurant, café, bakery, gym, hotel, and school — one platform. POS, kitchen, staff, and reports. Free trial: 3 days."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition shadow-sm hover:shadow-md"
              >
                {isAm ? "ነጻ ሙከራ ጀምር" : "Start free trial"}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-white/80 border border-slate-200/80 text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-white transition"
              >
                {isAm ? "አካውንት ፍጠር" : "Create account"}
              </Link>
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-3"
              >
                <Play className="w-4 h-4" />
                {isAm ? "እንዴት ይሰራል (45ሴ)" : "How it works (45s)"}
              </button>
            </div>
          </div>
        </section>

        {/* Available now */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 pb-8">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            {isAm ? "አሁን የሚሰሩ ንግዶች" : "Available now"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {businesses.map((b) => {
              const Icon = b.icon
              return (
                <Link
                  key={b.titleEn}
                  to={b.to}
                  className="bg-white/75 backdrop-blur-sm border border-white/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 block"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">
                    {isAm ? b.titleAm : b.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {isAm ? b.descAm : b.descEn}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* What you get */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 border border-white rounded-2xl p-7 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {isAm ? "የንግድ መሣሪያዎች" : "Business tools"}
              </h3>
              <ul className="text-sm text-slate-600 space-y-1.5 leading-relaxed">
                <li>· {isAm ? "POS እና ኩሽና (KDS)" : "POS & kitchen display (KDS)"}</li>
                <li>· {isAm ? "ሜኑ እና ሰራተኛ ግብዣ" : "Menu & staff invite links"}</li>
                <li>· {isAm ? "ሪዘርቬሽን እና የመዝጊያ ሪፖርት" : "Reservations & closing report"}</li>
                <li>
                  ·{" "}
                  {isAm
                    ? "ክፍያ በ Telebirr / CBE (በፈቃድ)"
                    : "Billing via Telebirr / CBE (manual approval)"}
                </li>
              </ul>
            </div>
            <div className="bg-white/80 border border-white rounded-2xl p-7 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center text-violet-700 mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {isAm ? "ትምህርት ቤት (መሠረታዊ)" : "School (basics)"}
              </h3>
              <ul className="text-sm text-slate-600 space-y-1.5 leading-relaxed">
                <li>· {isAm ? "ተማሪዎች መመዝገብ" : "Student registry"}</li>
                <li>· {isAm ? "አቴንዳንስ" : "Attendance"}</li>
                <li>· {isAm ? "መሠረታዊ ውጤት" : "Basic grades"}</li>
                <li>· {isAm ? "Semay AI — በቅርቡ" : "Semay AI — coming soon"}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* ========== MULTI-SECTION FOOTER ========== */}
      <footer className="border-t border-slate-200/80 bg-[#f7f9fc]">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* 1. Home */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3 flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5" />
                {isAm ? "መነሻ" : "Home"}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-slate-600 hover:text-slate-900">
                    {isAm ? "ዋና ገጽ" : "Landing"}
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-slate-600 hover:text-slate-900 font-medium">
                    {isAm ? "ነጻ ሙከራ ጀምር" : "Start free trial"}
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-slate-600 hover:text-slate-900">
                    {isAm ? "አካውንት ፍጠር" : "Create account"}
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setShowVideo(true)}
                    className="text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    {isAm ? "እገዛ / እንዴት ይሰራል" : "Help / How it works"}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={switchLang}
                    className="text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    {isAm ? "English" : "አማርኛ"}
                  </button>
                </li>
              </ul>
            </div>

            {/* 2. Businesses */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                {isAm ? "ንግዶች" : "Businesses"}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/login" className="text-slate-600 hover:text-slate-900">
                    {isAm ? "አካውንት አለኝ — ግባ" : "I have an account — Sign in"}
                  </Link>
                </li>
                <li>
                  <Link to={dashboardLink} className="text-slate-600 hover:text-slate-900 font-medium">
                    {isAm ? "ወደ ሰማይ ንግዴ" : "Go to my Semay business"}
                  </Link>
                </li>
                <li className="pt-1 text-[11px] text-slate-400 uppercase tracking-wide">
                  {isAm ? "ይምረጡ" : "Open"}
                </li>
                <li>
                  <Link to="/register?type=RESTAURANT" className="text-slate-600 hover:text-slate-900">
                    {isAm ? "ሬስቶራንት" : "Restaurant"}
                  </Link>
                </li>
                <li>
                  <Link to="/register?type=CAFE" className="text-slate-600 hover:text-slate-900">
                    {isAm ? "ካፌ" : "Café"}
                  </Link>
                </li>
                <li>
                  <Link to="/register?type=BAKERY" className="text-slate-600 hover:text-slate-900">
                    {isAm ? "ቤከሪ" : "Bakery"}
                  </Link>
                </li>
                <li>
                  <Link to="/register?type=GYM" className="text-slate-600 hover:text-slate-900">
                    {isAm ? "ጂም" : "Gym"}
                  </Link>
                </li>
                <li>
                  <Link to="/register?type=SALON" className="text-slate-600 hover:text-slate-900">
                    {isAm ? "ሳሎን / ቢውቲ" : "Beauty salon"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. Near me + Market (coming soon) */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {isAm ? "በአቅራቢያዬ" : "Near me"}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                {isAm
                  ? "በቅርቡ — ቦታዎ አቅራቢያ ካፌዎችን እና ሬስቶራንቶችን ያግኙ።"
                  : "Coming soon — find cafés and restaurants near your location."}
              </p>
              <span className="inline-block text-[11px] font-medium bg-slate-200/80 text-slate-600 px-2.5 py-1 rounded-full">
                {isAm ? "በቅርቡ" : "Coming soon"}
              </span>

              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mt-6 mb-3 flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5" />
                {isAm ? "የንግድ ገጽ / ገበያ" : "Business page / market"}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-2">
                {isAm
                  ? "በቅርቡ — ባለቤቶች ንግዳቸውን ያስተዋውቃሉ፣ ሰዎች ያያሉ፣ ገበያውን ይመለከታሉ።"
                  : "Coming soon — owners list their business, anyone can browse, and the market becomes visible."}
              </p>
              <span className="inline-block text-[11px] font-medium bg-slate-200/80 text-slate-600 px-2.5 py-1 rounded-full">
                {isAm ? "በቅርቡ" : "Coming soon"}
              </span>
            </div>

            {/* 4. Account / contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3 flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5" />
                {isAm ? "መለያ እና እውቂያ" : "Account & contact"}
              </h4>

              {isAuthenticated && user ? (
                <Link
                  to="/profile"
                  className="flex items-center gap-3 mb-4 p-2 rounded-xl hover:bg-white/80 transition"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                    {user.avatarUrl ? (
                      <img src={user.avatarUrl} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600 font-medium">
                        {(user.name || "?")[0]}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-slate-900 truncate">
                      {user.name}
                    </div>
                    <div className="text-xs text-slate-500 truncate">
                      {organization?.name || user.email}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-3 mb-4 text-sm text-slate-500">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <Link to="/login" className="text-slate-800 font-medium hover:underline">
                      {isAm ? "ግባ" : "Sign in"}
                    </Link>
                    <span className="text-slate-400"> · </span>
                    <Link to="/register" className="hover:underline">
                      {isAm ? "ተመዝገብ" : "Register"}
                    </Link>
                  </div>
                </div>
              )}

              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="tel:0953352271" className="hover:text-slate-900">
                    📞 0953352271
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/semaii_app"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900"
                  >
                    Telegram · t.me/semaii_app
                  </a>
                </li>
                <li>
                  <Link to="/profile" className="hover:text-slate-900">
                    {isAm ? "መገለጫ / ቅንብሮች" : "Profile / settings"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center">
                <span className="text-white font-semibold text-xs">ሰ</span>
              </div>
              <span>Semay · ሰማይ</span>
            </div>
            <p>{isAm ? "ለኢትዮጵያ እና አፍሪካ የተሰራ" : "Built for Ethiopia & Africa"}</p>
          </div>
        </div>
      </footer>

      {/* Video modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
              <h3 className="font-semibold text-slate-900 text-sm">
                {isAm ? "ሰማይ እንዴት ይሰራል (~45 ሰከንድ)" : "How Semay works (~45 sec)"}
              </h3>
              <button
                type="button"
                onClick={() => setShowVideo(false)}
                className="p-1.5 rounded-lg hover:bg-slate-50"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            <div className="aspect-video bg-slate-900">
              {GUIDE_VIDEO_ID !== "YOUR_VIDEO_ID" ? (
                <iframe
                  title="Semay guide"
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${GUIDE_VIDEO_ID}?rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="h-full flex items-center justify-center text-white/70 text-sm px-6 text-center">
                  {isAm
                    ? "ቪዲዮ በቅርቡ። አሁን መመዝገብ ይችላሉ።"
                    : "Video coming soon. You can register now."}
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => setShowVideo(false)}
                className="flex-1 border border-slate-200 text-slate-700 text-sm font-medium py-2.5 rounded-xl"
              >
                {isAm ? "ተመለስ" : "Back"}
              </button>
              <Link
                to="/register"
                onClick={() => setShowVideo(false)}
                className="flex-1 text-center bg-slate-900 text-white text-sm font-medium py-2.5 rounded-xl"
              >
                {isAm ? "ቪዲዮ ጨርሼ — ይመዝገቡ" : "Finished — Create account"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}