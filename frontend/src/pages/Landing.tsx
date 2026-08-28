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
} from "lucide-react"

export default function Landing() {
  const { t, i18n } = useTranslation()
  const isAm = i18n.language === "am"

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
    },
    {
      icon: UtensilsCrossed,
      titleEn: "Restaurant",
      titleAm: "ሬስቶራንት",
      descEn: "Orders to kitchen, reservations, closing report, billing.",
      descAm: "ትዕዛዝ ወደ ኩሽና፣ ሪዘርቬሽን፣ የመዝጊያ ሪፖርት፣ ክፍያ።",
    },
    {
      icon: Dumbbell,
      titleEn: "Gym",
      titleAm: "ጂም",
      descEn: "Membership plans and member check-in tracking.",
      descAm: "የአባልነት እቅድ እና የመግቢያ ክትትል።",
    },
    {
      icon: Hotel,
      titleEn: "Hotel",
      titleAm: "ሆቴል",
      descEn: "Room list and basic occupancy management.",
      descAm: "ክፍሎች እና መሠረታዊ አስተዳደር።",
    },
    {
      icon: GraduationCap,
      titleEn: "School",
      titleAm: "ትምህርት ቤት",
      descEn: "Students, attendance, and basic grades.",
      descAm: "ተማሪዎች፣ አቴንዳንስ እና መሠረታዊ ውጤት።",
    },
  ]

  return (
    <div className="min-h-svh flex flex-col text-slate-800">
      {/* Sky atmosphere */}
      <div
        className="relative flex-1 flex flex-col"
        style={{
          background:
            "linear-gradient(165deg, #b8d4f0 0%, #d4e5f5 28%, #eef3f8 55%, #f7f9fc 100%)",
        }}
      >
        {/* Soft cloud-like blurs */}
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
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-slate-900 flex items-center justify-center shadow-sm">
                <span className="text-white font-semibold text-sm">ሰ</span>
              </div>
              <div>
                <span className="font-semibold text-lg tracking-tight text-slate-900">Semay</span>
                <span className="text-slate-500 text-sm ml-1.5">ሰማይ</span>
              </div>
            </div>
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
                className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition"
              >
                {t("login") || (isAm ? "ግባ" : "Sign in")}
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
                ? "ሬስቶራንት፣ ካፌ፣ ጂም፣ ሆቴል እና ትምህርት ቤት — አንድ መድረክ። POS፣ ኩሽና፣ ሰራተኞች፣ ሪፖርት። ነጻ ሙከራ 3 ቀን።"
                : "Restaurant, café, gym, hotel, and school — one platform. POS, kitchen, staff, and reports. Free trial: 3 days."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition shadow-sm hover:shadow-md"
              >
                {isAm ? "ነጻ ይጀምሩ" : "Start free trial"}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-white/80 border border-slate-200/80 text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-white transition"
              >
                {isAm ? "መለያ አለኝ" : "I have an account"}
              </Link>
            </div>
          </div>
        </section>

        {/* Real business types */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 pb-8">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            {isAm ? "አሁን የሚሰሩ ንግዶች" : "Available now"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {businesses.map((b) => {
              const Icon = b.icon
              return (
                <div
                  key={b.titleEn}
                  className="bg-white/75 backdrop-blur-sm border border-white/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
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
                </div>
              )
            })}
          </div>
        </section>

        {/* What you actually get */}
        <section className="relative z-10 max-w-5xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 border border-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
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
                <li>· {isAm ? "ክፍያ በ Telebirr / CBE (በፈቃድ)" : "Billing via Telebirr / CBE (manual approval)"}</li>
              </ul>
            </div>

            <div className="bg-white/80 border border-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
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

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-[#f7f9fc] py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center">
              <span className="text-white font-semibold text-xs">ሰ</span>
            </div>
            <span>Semay · ሰማይ</span>
          </div>
          <p>{isAm ? "ለኢትዮጵያ እና አፍሪካ የተሰራ" : "Built for Ethiopia & Africa"}</p>
        </div>
      </footer>
    </div>
  )
}