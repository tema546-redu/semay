import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Phone, MessageCircle } from "lucide-react"

const PHONE = "0953352271"
const TELEGRAM = "https://t.me/semaii_app"

export default function Help() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-1 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <div>
          <div className="font-semibold text-sm text-semay-900">
            {isAm ? "እገዛ" : "Help"}
          </div>
          <div className="text-xs text-semay-400">Semaiy</div>
        </div>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4 pb-10">
        <div className="bg-white border border-semay-100 rounded-2xl p-5 space-y-2 shadow-sm">
          <h2 className="font-semibold text-semay-900 text-sm">
            {isAm ? "ፈጣን ጅማሮ" : "Quick start"}
          </h2>
          <ol className="text-sm text-semay-600 list-decimal pl-4 space-y-1.5">
            <li>{isAm ? "ምናሌ ላይ ምግቦችን ጨምሩ" : "Add items on Menu"}</li>
            <li>{isAm ? "ሰራተኛ ግብዣ ከ Staff" : "Invite waiters from Staff"}</li>
            <li>{isAm ? "POS ላይ ትዕዛዝ → ኩሽና" : "Take orders on POS → Kitchen"}</li>
            <li>{isAm ? "ሪፖርት በመዝጊያ ሰዓት" : "Check Reports at closing"}</li>
          </ol>
        </div>

        <div className="bg-white border border-semay-100 rounded-2xl p-5 space-y-3 shadow-sm">
          <h2 className="font-semibold text-semay-900 text-sm">
            {isAm ? "አግኙን" : "Contact"}
          </h2>
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm text-semay-700">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-sky-700"
          >
            <MessageCircle className="w-4 h-4" /> Telegram · t.me/semaii_app
          </a>
        </div>

        <div className="bg-white border border-semay-100 rounded-2xl p-5 space-y-2 text-sm text-semay-600 shadow-sm">
          <h2 className="font-semibold text-semay-900 text-sm">FAQ</h2>
          <p>
            <strong>{isAm ? "ሙከራ፡" : "Trial:"}</strong>{" "}
            {isAm
              ? "3 ቀን ነጻ። ሲያልቅ መሣሪያዎች ይቆማሉ እስከ ክፍያ። ውሂብዎ ደህንነቱ የተጠበቀ ነው።"
              : "3 free days. When it ends, tools freeze until you subscribe. Your data stays safe."}
          </p>
          <p>
            <strong>{isAm ? "ቅርንጫፍ፡" : "Branches:"}</strong>{" "}
            {isAm
              ? "ተጨማሪ ቦታ = ቅርንጫፍ። መጀመሪያ ቅርንጫፍ ፍጠሩ፣ ከዚያ ሰራተኛ ወደዚያ ጋብዙ።"
              : "Another location = a branch. Create the branch first, then invite staff to it."}
          </p>
          <p>
            <strong>{isAm ? "ክፍያ፡" : "Payment:"}</strong>{" "}
            {isAm
              ? "Telebirr / CBE — ማጣቀሻ በ Billing ላይ ይላኩ፤ እኛ እናረጋግጣለን።"
              : "Telebirr / CBE — submit the reference on Billing; we approve manually."}
          </p>
        </div>

        <Link
          to="/billing"
          className="block text-center bg-semay-900 text-white py-3 rounded-xl text-sm font-medium"
        >
          {isAm ? "ክፍያ እና እቅድ" : "Billing & plans"}
        </Link>
        <Link
          to="/dashboard"
          className="block text-center text-sm text-semay-500 hover:underline"
        >
          {isAm ? "ወደ ዳሽቦርድ" : "Back to dashboard"}
        </Link>
      </div>
    </div>
  )
}