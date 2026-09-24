import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import GarmentLayout from "../../components/GarmentLayout"
import { useAuth } from "../../lib/auth"
import { billingApi } from "../../lib/api"
import { CreditCard, ChevronRight, BookOpen } from "lucide-react"

export default function GarmentSettings() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { organization, user } = useAuth()
  const [sub, setSub] = useState<any>(null)

  useEffect(() => {
    billingApi
      .current()
      .then((d) => setSub(d?.subscription || null))
      .catch(() => setSub(null))
  }, [])

  const daysLeft = sub?.daysLeft
  const isTrial = !!sub?.isTrial
  const trialWarning =
    isTrial && typeof daysLeft === "number" && daysLeft <= 3

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-xl space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-semay-900">
            {isAm ? "ቅንብሮች" : "Settings"}
          </h1>
          <p className="text-sm text-semay-500 mt-1">
            {isAm
              ? "የንግድዎ መረጃ፣ ክፍያ እና መመሪያ"
              : "Business details, billing, and help"}
          </p>
        </div>

        {/* Subscription + trial (visible) */}
        <section
          className={`rounded-2xl border shadow-sm overflow-hidden ${
            trialWarning
              ? "border-amber-200 bg-amber-50"
              : "border-semay-200 bg-white"
          }`}
        >
          <div className="px-5 py-3 border-b border-semay-100 bg-semay-50/80">
            <h2 className="text-sm font-semibold text-semay-800">
              {isAm ? "ደንበኝነት እና ክፍያ" : "Subscription & billing"}
            </h2>
          </div>
          <div className="p-5 space-y-3 text-sm">
            {sub ? (
              <>
                <div className="flex justify-between gap-2">
                  <span className="text-semay-500">
                    {isAm ? "ሁኔታ" : "Status"}
                  </span>
                  <span className="font-semibold text-right">
                    {String(sub.status || "—")}
                    {isTrial ? (isAm ? " (ሙከራ 3 ቀን)" : " (3-day trial)") : ""}
                  </span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-semay-500">
                    {isAm ? "የቀሩ ቀናት" : "Days left"}
                  </span>
                  <span
                    className={`font-semibold ${
                      trialWarning ? "text-amber-700" : "text-semay-900"
                    }`}
                  >
                    {daysLeft ?? "—"}
                  </span>
                </div>
                {sub.endDate && (
                  <div className="flex justify-between gap-2">
                    <span className="text-semay-500">
                      {isAm ? "እስከ" : "Until"}
                    </span>
                    <span>{new Date(sub.endDate).toLocaleDateString()}</span>
                  </div>
                )}
                {trialWarning && (
                  <p className="text-xs text-amber-900 pt-1">
                    {isAm
                      ? "የ3 ቀን ሙከራ በቅርቡ ያበቃል። እቅድ ይምረጡ እና ይክፈሉ። ውሂብዎ አይጠፋም።"
                      : "Your 3-day trial ends soon. Choose a plan and pay. Your data stays safe."}
                  </p>
                )}
              </>
            ) : (
              <p className="text-semay-500">
                {isAm ? "ሁኔታ በመጫን..." : "Loading status..."}
              </p>
            )}

            <Link
              to="/billing"
              className="mt-2 flex items-center justify-between w-full px-4 py-3 rounded-xl bg-semay-900 text-white text-sm font-medium"
            >
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                {isAm ? "ክፍያ / እቅድ ክፈት" : "Open billing & plans"}
              </span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-semay-500">
              {isAm
                ? "ወር 3,500 ብር · 3 ወር · 6 ወር · ዓመት 35,000 · 2 ዓመት 70,000"
                : "3,500 ETB/month · 3 / 6 months · year 35,000 · 2 years 70,000"}
            </p>
          </div>
        </section>

        {/* Business details */}
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

        {/* Guide */}
        <section className="bg-white border border-semay-200 rounded-2xl p-5 shadow-sm">
          <h2 className="font-medium text-semay-900">
            {isAm ? "አጭር መመሪያ" : "Quick guide"}
          </h2>
          <p className="text-sm text-semay-500 mt-1">
            {isAm
              ? "መነሻ፣ ትዕዛዝ፣ ክምችት፣ ዕለታዊ እና ገንዘብ"
              : "Home, orders, stock, daily reports, and money"}
          </p>
          <Link
            to="/garment/guide"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 rounded-xl bg-semay-900 text-white text-sm font-medium"
          >
            <BookOpen className="w-4 h-4" />
            {isAm ? "መመሪያ ክፈት" : "Open guide"}
          </Link>
        </section>

        {/* Language */}
        <section className="bg-white border border-semay-200 rounded-2xl p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-semay-800 mb-3">
            {isAm ? "ቋንቋ" : "Language"}
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => i18n.changeLanguage("en")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium border ${
                !isAm
                  ? "bg-semay-900 text-white border-semay-900"
                  : "border-semay-200"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => i18n.changeLanguage("am")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium border ${
                isAm
                  ? "bg-semay-900 text-white border-semay-900"
                  : "border-semay-200"
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