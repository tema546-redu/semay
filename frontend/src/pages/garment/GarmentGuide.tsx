import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import GarmentLayout from "../../components/GarmentLayout"
import { ArrowLeft } from "lucide-react"

export default function GarmentGuide() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-2xl space-y-6">
        <div className="flex items-center gap-3">
          <Link
            to="/garment/settings"
            className="p-2 rounded-lg hover:bg-semay-100 text-semay-600"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-semibold text-semay-900">
              {isAm ? "አጭር መመሪያ" : "Quick guide"}
            </h1>
            <p className="text-sm text-semay-500 mt-0.5">
              {isAm ? "ለልብስ ንግድ ባለቤት / ማኔጀር" : "For garment owner / manager"}
            </p>
          </div>
        </div>

        <section className="bg-white border border-semay-200 rounded-2xl p-5 space-y-2">
          <h2 className="font-medium text-semay-900">
            {isAm ? "በየጠዋቱ" : "Every morning"}
          </h2>
          <ol className="list-decimal list-inside text-sm text-semay-700 space-y-1">
            <li>
              {isAm
                ? "መነሻ — «ዛሬ» ቁጥሮችን ይመልከቱ"
                : "Home — check the “Today” numbers"}
            </li>
            <li>
              {isAm
                ? "ዝቅተኛ ክምችት ወይም የዘገዩ ትዕዛዞች ካሉ ማስጠንቀቂያውን ይክፈቱ"
                : "If low stock or delayed orders, open the alerts"}
            </li>
            <li>
              {isAm
                ? "ሰራተኛ ካለ — ዕለታዊ ሪፖርት እንዲያስገቡ"
                : "If you have staff — they enter finished pieces on Daily"}
            </li>
          </ol>
        </section>

        <section className="bg-white border border-semay-200 rounded-2xl p-5 space-y-2">
          <h2 className="font-medium text-semay-900">
            {isAm ? "አዲስ ትዕዛዝ" : "New order"}
          </h2>
          <ol className="list-decimal list-inside text-sm text-semay-700 space-y-1">
            <li>{isAm ? "ዓይነቶች — ምርቱን መዝግብ" : "Styles — register what you make"}</li>
            <li>
              {isAm
                ? "ቢኦኤም — በአንድ ምርት ምን ያህል ጨርቅ/ቁሳቁስ"
                : "BOM — how much fabric/material per piece"}
            </li>
            <li>
              {isAm ? "ክምችት — ጨርቅ፣ ክር፣ ቁልፍ" : "Inventory — fabric, thread, buttons"}
            </li>
            <li>
              {isAm ? "ምርት — ትዕዛዝ + ደረጃዎች" : "Production — order + stages"}
            </li>
            <li>
              {isAm ? "ዕለታዊ — ዛሬ ምን ያህል ተጠናቀቀ" : "Daily — how many pieces finished today"}
            </li>
          </ol>
        </section>

        <section className="bg-white border border-semay-200 rounded-2xl p-5 space-y-2">
          <h2 className="font-medium text-semay-900">
            {isAm ? "ገንዘብ / ሪፖርት" : "Money / Reports"}
          </h2>
          <p className="text-sm text-semay-700">
            {isAm
              ? "«ገንዘብ» = ግምት (ታስሮ ያለ ገንዘብ፣ የጉድለት ወጪ፣ የዘገየ ትዕዛዝ)። የባንክ ሂሳብ አይደለም።"
              : "“Money” = estimates (cash tied in materials, defect cost, delayed-order risk). Not a bank statement."}
          </p>
        </section>

        <Link
          to="/garment/settings"
          className="text-sm font-medium text-semay-700 underline"
        >
          {isAm ? "← ወደ ቅንብሮች" : "← Back to Settings"}
        </Link>
      </div>
    </GarmentLayout>
  )
}