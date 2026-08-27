import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Sparkles } from "lucide-react"

export default function AiChat() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  return (
    <div className="min-h-svh bg-semay-50 flex flex-col">
      <header className="bg-white border-b border-semay-200 px-4 h-14 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-semay-900 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-semay-900">Semay AI</div>
            <div className="text-xs text-semay-400">{isAm ? "በቅርቡ" : "Coming soon"}</div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border border-semay-200 rounded-2xl p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-semay-100 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-7 h-7 text-semay-700" />
          </div>
          <h1 className="text-xl font-semibold text-semay-900 mb-2">
            {isAm ? "Semay AI — በቅርቡ" : "Semay AI — Coming soon"}
          </h1>
          <p className="text-sm text-semay-500 leading-relaxed mb-6">
            {isAm
              ? "እውነተኛ ብልህ AI ገና አልተገነባም። አሁን POS፣ ኩሽና፣ ምናሌ፣ ጂም እና ሆቴል ይጠቀሙ።"
              : "Real intelligent AI is not built yet. Use POS, Kitchen, Menu, Gym, and Hotel for now."}
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center bg-semay-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-semay-800"
          >
            {isAm ? "ወደ ዳሽቦርድ ተመለስ" : "Back to Dashboard"}
          </Link>
        </div>
      </div>
    </div>
  )
}