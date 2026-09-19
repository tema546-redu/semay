import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import GarmentLayout from "../../components/GarmentLayout"
import { useAuth } from "../../lib/auth"

export default function GarmentSettings() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { organization, user } = useAuth()

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-xl space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-semay-900">
            {isAm ? "ቅንብሮች" : "Settings"}
          </h1>
          <p className="text-sm text-semay-500 mt-1">
            {isAm
              ? "የንግድዎ መረጃ እና መመሪያ"
              : "Business details and help"}
          </p>
        </div>



        <section className="bg-white border border-semay-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-semay-100 bg-semay-50/80">
            <h2 className="text-sm font-semibold text-semay-800">
              {isAm ? "የንግድ መረጃ" : "Business details"}
            </h2>
          </div>
          <div className="p-5 space-y-5">
            <div>
              <div className="text-xs text-semay-500">
                {isAm ? "የንግድ ስም" : "Business name"}
              </div>
              <div className="font-medium text-semay-900 mt-1">
                {organization?.name || "—"}
              </div>
            </div>
            <div>
              <div className="text-xs text-semay-500">
                {isAm ? "ዓይነት" : "Type"}
              </div>
              <div className="font-medium text-semay-900 mt-1">
                {isAm ? "ልብስ ስፌት" : "Garment / Clothing"}
              </div>
            </div>
            <div>
              <div className="text-xs text-semay-500">
                {isAm ? "ባለቤት" : "Owner"}
              </div>
              <div className="font-medium text-semay-900 mt-1">
                {user?.name || "—"}
              </div>
            </div>
            <div>
              <div className="text-xs text-semay-500">Email</div>
              <div className="font-medium text-semay-900 mt-1">
                {user?.email || "—"}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-semay-200 rounded-2xl p-5 shadow-sm">
          <h2 className="font-medium text-semay-900">
            {isAm ? "አጭር መመሪያ" : "Quick guide"}
          </h2>
          <p className="text-sm text-semay-500 mt-1">
            {isAm
              ? "መነሻ፣ ትዕዛዝ፣ ክምችት፣ ዕለታዊ እና ገንዘብ — በአጭሩ"
              : "Home, orders, stock, daily reports, and money — short steps"}
          </p>
          <Link
            to="/garment/guide"
            className="inline-flex mt-4 px-4 py-2.5 rounded-xl bg-semay-900 text-white text-sm font-medium"
          >
            {isAm ? "መመሪያ ክፈት" : "Open guide"}
          </Link>
        </section>

        <section className="bg-white border border-semay-200 rounded-2xl p-5 shadow-sm">
  <h2 className="text-sm font-semibold text-semay-800 mb-3">
    {isAm ? "ቋንቋ" : "Language"}
  </h2>
  <div className="flex gap-2">
    <button
      type="button"
      onClick={() => i18n.changeLanguage("en")}
      className={`flex-1 py-2.5 rounded-xl text-sm font-medium border ${
        !isAm ? "bg-semay-900 text-white border-semay-900" : "border-semay-200"
      }`}
    >
      English
    </button>
    <button
      type="button"
      onClick={() => i18n.changeLanguage("am")}
      className={`flex-1 py-2.5 rounded-xl text-sm font-medium border ${
        isAm ? "bg-semay-900 text-white border-semay-900" : "border-semay-200"
      }`}
    >
      አማርኛ
    </button>
  </div>
</section>
      </div>
    </GarmentLayout>
  )
}