import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import GarmentLayout from "../../components/GarmentLayout"
import {
  AlertTriangle,
  Package,
  Scissors,
  Clock,
  ArrowRight,
} from "lucide-react"

export default function GarmentMoneyLeaks() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    garmentApi
      .moneyLeaks()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <GarmentLayout>
        <div className="min-h-[50vh] flex items-center justify-center text-semay-500">
          {isAm ? "በመጫን ላይ..." : "Loading..."}
        </div>
      </GarmentLayout>
    )
  }

  const d = data || {}

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-3xl space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-semay-900">
            {isAm ? "የገንዘብ መፍሰስ" : "Money Leaks"}
          </h1>
          <p className="text-sm text-semay-500 mt-1">
            {isAm
              ? "ገንዘብ የት እየጠፋ ወይም እየታሰረ እንደሆነ ይመልከቱ"
              : "See where money is lost or stuck"}
          </p>
        </div>

        {/* Total leak */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-center">
          <div className="text-sm text-danger font-medium mb-1">
            {isAm ? "ጠቅላላ ግምታዊ መፍሰስ" : "Total estimated leak"}
          </div>
          <div className="text-3xl font-bold text-danger">
            {(d.totalLeak || 0).toLocaleString()} ETB
          </div>
          <p className="text-xs text-semay-500 mt-2">
            {isAm
              ? "ይህ ግምት ነው — እውነተኛ ኪሳራ ሊበልጥ ወይም ሊያንስ ይችላል"
              : "This is an estimate — real loss may be higher or lower"}
          </p>
        </div>

        {/* Breakdown */}
        <div className="space-y-3">
          {/* Unused stock */}
          <div className="bg-white border border-semay-200 rounded-2xl p-4 flex gap-3">
            <Package className="w-6 h-6 text-semay-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div className="font-medium">
                  {isAm ? "ያልተጠቀመ ክምችት" : "Unused stock value"}
                </div>
                <div className="font-bold text-semay-900">
                  {(d.unusedStockValue || 0).toLocaleString()} ETB
                </div>
              </div>
              <p className="text-sm text-semay-500 mt-1">
                {isAm
                  ? "ገንዘብ በእቃ ላይ ታስሮ ይገኛል"
                  : "Cash is tied up in materials not urgently needed"}
              </p>
              <Link
                to="/garment/inventory"
                className="inline-flex items-center gap-1 text-sm text-accent mt-2"
              >
                {isAm ? "ክምችት ይመልከቱ" : "View inventory"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Rework */}
          <div className="bg-white border border-semay-200 rounded-2xl p-4 flex gap-3">
            <Scissors className="w-6 h-6 text-semay-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div className="font-medium">
                  {isAm ? "የዳግም ስራ ወጪ" : "Rework / defect cost"}
                </div>
                <div className="font-bold text-danger">
                  {(d.reworkCost || 0).toLocaleString()} ETB
                </div>
              </div>
              <p className="text-sm text-semay-500 mt-1">
                {isAm
                  ? `${d.totalDefectQty || 0} ጉድለቶች ተመዝግበዋል`
                  : `${d.totalDefectQty || 0} defects recorded`}
              </p>
              <Link
                to="/garment/quality"
                className="inline-flex items-center gap-1 text-sm text-accent mt-2"
              >
                {isAm ? "ጥራት ይመልከቱ" : "View quality"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Delayed */}
          <div className="bg-white border border-semay-200 rounded-2xl p-4 flex gap-3">
            <Clock className="w-6 h-6 text-semay-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div className="font-medium">
                  {isAm ? "የዘገየ ትዕዛዝ አደጋ" : "Delayed order risk"}
                </div>
                <div className="font-bold text-warning">
                  {(d.delayedRisk || 0).toLocaleString()} ETB
                </div>
              </div>
              <p className="text-sm text-semay-500 mt-1">
                {isAm
                  ? `${d.delayedCount || 0} ትዕዛዞች ዘግይተዋል (ግምታዊ አደጋ)`
                  : `${d.delayedCount || 0} delayed orders (estimated risk)`}
              </p>
              <Link
                to="/garment/orders"
                className="inline-flex items-center gap-1 text-sm text-accent mt-2"
              >
                {isAm ? "ትዕዛዞችን ይመልከቱ" : "View orders"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Low stock warning */}
          {d.lowStockCount > 0 && (
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3">
              <AlertTriangle className="w-6 h-6 text-warning shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="font-medium text-amber-900">
                  {isAm ? "ዝቅተኛ ክምችት ማስጠንቀቂያ" : "Low stock warning"}
                </div>
                <p className="text-sm text-semay-600 mt-1">
                  {isAm
                    ? `${d.lowStockCount} እቃዎች ከዝቅተኛ ደረጃ በታች ናቸው — ምርት ሊቆም ይችላል`
                    : `${d.lowStockCount} materials below minimum — production may stop`}
                </p>
                <Link
                  to="/garment/inventory"
                  className="inline-flex items-center gap-1 text-sm font-medium text-amber-800 mt-2"
                >
                  {isAm ? "አሁን ይመልከቱ" : "Check now"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>

        <p className="text-xs text-semay-400 text-center">
          {isAm
            ? "እነዚህ ቁጥሮች ግምቶች ናቸው። እውነተኛ ወጪን ለመጨመር ጉድለት ሲመዘገብ ወጪ ያስገቡ።"
            : "These numbers are estimates. Enter cost when recording defects for better accuracy."}
        </p>
      </div>
    </GarmentLayout>
  )
}