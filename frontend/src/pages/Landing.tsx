import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  ArrowRight,
  Building2,
  Globe,
  Play,
  X,
  Store,
  UtensilsCrossed,
  Coffee,
} from "lucide-react"

const GUIDE_VIDEO_ID: string = "p4Iy8KDQ75s"

export default function Landing() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [showVideo, setShowVideo] = useState(false)

  const switchLang = () => i18n.changeLanguage(isAm ? "en" : "am")

  return (
    <div className="min-h-svh flex flex-col bg-[#f3f1ec] text-stone-800">
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-[#f3f1ec]/95 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">ሰ</span>
            </div>
            <div>
              <span className="font-semibold tracking-tight text-stone-900">Semaiy</span>
              <span className="text-stone-400 text-sm ml-1.5">ሰማይ</span>
            </div>
          </Link>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={switchLang}
              className="text-sm text-stone-600 hover:text-stone-900 px-2.5 py-1.5 rounded-md inline-flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              {isAm ? "EN" : "አማ"}
            </button>
                        <Link
              to="/login"
              className="text-sm text-stone-600 hover:text-stone-900 px-2 py-1.5"
            >
              {isAm ? "ግባ" : "Sign in"}
            </Link>
            <Link
              to="/register"
              className="text-sm font-medium bg-stone-900 text-white px-3.5 py-1.5 rounded-md hover:bg-stone-800"
            >
              {isAm ? "ነጻ ሙከራ" : "Free trial"}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-5 pt-16 pb-12">
          <p className="text-xs tracking-[0.16em] uppercase text-stone-400 mb-4">
            {isAm ? "ኢትዮጵያ" : "Ethiopia"}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight leading-snug mb-4">
            {isAm ? (
              <>
                ሰማይ — ቀላል መድረክ
                <br />
                ለንግድ
              </>
            ) : (
              <>
                Semaiy — a simple platform
                <br />
                for your business
              </>
            )}
          </h1>
          <p className="text-base text-stone-600 leading-relaxed max-w-lg mb-10">
            {isAm
              ? "ሬስቶራንት፣ ካፌ እና ሌሎች — አንድ ቦታ። ነጻ ሙከራ 3 ቀን። መረጃዎ የእርስዎ ነው።"
              : "Restaurants, cafés, and more — in one place. Free trial for 3 days. Your data stays yours."}
          </p>

          <div className="max-w-lg mb-8">
            <Link
              to="/register"
              className="block rounded-xl border border-stone-200 bg-white p-5 hover:border-stone-300 transition"
            >
              <Store className="w-5 h-5 text-stone-800 mb-3" />
              <h2 className="font-semibold text-stone-900 mb-1">
                {isAm ? "ለንግድዎ" : "For business"}
              </h2>
              <p className="text-sm text-stone-500 mb-3 leading-relaxed">
                {isAm
                  ? "POS፣ ኩሽና፣ ሰራተኛ፣ ሪፖርት።"
                  : "POS, kitchen, staff, and reports."}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-stone-900">
                {isAm ? "ይመዝገቡ" : "Sign up"}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setShowVideo(true)}
            className="inline-flex items-center gap-2.5 text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            <span className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center bg-white">
              <Play className="w-3.5 h-3.5 fill-current" />
            </span>
            {isAm ? "እንዴት ይሰራል (~85 ሴ)" : "How it works (~85 seconds)"}
          </button>
        </section>

        <section className="border-t border-stone-200 bg-white">
          <div className="max-w-3xl mx-auto px-5 py-12">
            <h2 className="text-sm text-stone-500 mb-4">
              {isAm ? "አሁን የሚገኙ" : "Available now"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: UtensilsCrossed, en: "Restaurant", am: "ሬስቶራንት", to: "/register?type=RESTAURANT" },
                { icon: Coffee, en: "Café", am: "ካፌ", to: "/register?type=CAFE" },
                { icon: Building2, en: "More", am: "ሌሎች", to: "/register" },
              ].map((b) => {
                const Icon = b.icon
                return (
                  <Link
                    key={b.en}
                    to={b.to}
                    className="border border-stone-200 rounded-xl p-4 hover:border-stone-300 transition"
                  >
                    <Icon className="w-5 h-5 text-stone-700 mb-2" />
                    <div className="text-sm font-medium text-stone-900">
                      {isAm ? b.am : b.en}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-300/70 bg-[#ebe8e2]">
        <div className="max-w-3xl mx-auto px-5 py-10">
          <p className="font-semibold text-stone-900">Semaiy · ሰማይ</p>
          <p className="text-sm text-stone-600 mt-1 max-w-md leading-relaxed">
            {isAm
              ? "በኢትዮጵያ ለተሰሩ ንግዶች።"
              : "Built in Ethiopia for real businesses."}
          </p>
          <p className="text-sm text-stone-600 mt-4 space-x-2">
            <Link to="/register" className="hover:text-stone-900 underline-offset-2 hover:underline">
              {isAm ? "ነጻ ሙከራ" : "Free trial"}
            </Link>
            <span className="text-stone-400">·</span>
            <Link to="/login" className="hover:text-stone-900 underline-offset-2 hover:underline">
              {isAm ? "ግባ" : "Sign in"}
            </Link>
          </p>
          <p className="text-sm text-stone-600 mt-2">
            <a href="tel:0953352271" className="hover:text-stone-900">
              0953 352 271
            </a>
            <span className="mx-2 text-stone-400">·</span>
            <a href="https://t.me/semaii_app" target="_blank" rel="noreferrer" className="hover:text-stone-900">
              Telegram
            </a>
          </p>
          <p className="mt-8 pt-6 border-t border-stone-300/60 text-xs text-stone-500">
            © {new Date().getFullYear()} Semaiy
          </p>
        </div>
      </footer>

            {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-xl w-full max-w-lg overflow-hidden shadow-lg">
            <div className="flex items-center justify-between px-4 py-3 border-b border-stone-100">
              <h3 className="font-semibold text-sm text-stone-900">
                {isAm ? "እንዴት ይሰራል" : "How Semaiy works"}
              </h3>
              <button type="button" onClick={() => setShowVideo(false)} className="p-1.5">
                <X className="w-5 h-5 text-stone-500" />
              </button>
            </div>
            <div className="aspect-video bg-stone-900">
              <iframe
                title="guide"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${GUIDE_VIDEO_ID}?rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 flex gap-2">
              <button
                type="button"
                onClick={() => setShowVideo(false)}
                className="flex-1 border border-stone-200 text-sm py-2.5 rounded-md"
              >
                {isAm ? "ተመለስ" : "Back"}
              </button>
              <Link
                to="/register"
                onClick={() => setShowVideo(false)}
                className="flex-1 text-center bg-stone-900 text-white text-sm py-2.5 rounded-md"
              >
                {isAm ? "ይመዝገቡ" : "Create account"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}