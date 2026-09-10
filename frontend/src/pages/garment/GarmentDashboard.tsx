import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import { Package, Scissors, AlertTriangle } from "lucide-react"
import GarmentBottomNav from "../../components/GarmentBottomNav"

export default function GarmentDashboard() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    garmentApi.dashboard()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="min-h-svh flex items-center justify-center text-semay-500">
        {isAm ? "በመጫን ላይ..." : "Loading..."}
      </div>
    )
  }

  const progress = data?.productionProgress || { percent: 0, planned: 0, actual: 0, remaining: 0 }

  return (
    <div className="min-h-svh bg-semay-50 pb-24">
      <div className="bg-white border-b border-semay-200 px-4 py-4">
        <h1 className="text-xl font-semibold text-semay-900">
          {isAm ? "የልብስ ንግድ" : "Garment Business"}
        </h1>
        <p className="text-sm text-semay-500 mt-0.5">
          {isAm ? "እንኳን ደህና መጡ" : "Welcome back"}
        </p>
      </div>

      <div className="p-4 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl border border-semay-200 p-3 text-center">
            <div className="text-2xl font-bold">{data?.totalOrders || 0}</div>
            <div className="text-xs text-semay-500 mt-1">{isAm ? "ትዕዛዞች" : "Orders"}</div>
          </div>
          <div className="bg-white rounded-2xl border border-semay-200 p-3 text-center">
            <div className="text-2xl font-bold">{data?.inProduction || 0}</div>
            <div className="text-xs text-semay-500 mt-1">{isAm ? "በምርት ላይ" : "In Production"}</div>
          </div>
          <div className="bg-white rounded-2xl border border-semay-200 p-3 text-center">
            <div className="text-2xl font-bold text-danger">{data?.delayed || 0}</div>
            <div className="text-xs text-semay-500 mt-1">{isAm ? "የዘገዩ" : "Delayed"}</div>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl border border-semay-200 p-4">
          <div className="flex justify-between mb-2">
            <span className="font-medium">{isAm ? "የምርት ሂደት" : "Production Progress"}</span>
            <span className="font-semibold">{progress.percent}%</span>
          </div>
          <div className="w-full bg-semay-100 rounded-full h-3">
            <div className="bg-accent h-3 rounded-full" style={{ width: `${progress.percent}%` }} />
          </div>
          <div className="grid grid-cols-3 text-center text-sm mt-3">
            <div>
              <div className="font-medium">{progress.planned}</div>
              <div className="text-xs text-semay-500">{isAm ? "ታቅዶ" : "Planned"}</div>
            </div>
            <div>
              <div className="font-medium text-success">{progress.actual}</div>
              <div className="text-xs text-semay-500">{isAm ? "ተጠናቋል" : "Done"}</div>
            </div>
            <div>
              <div className="font-medium">{progress.remaining}</div>
              <div className="text-xs text-semay-500">{isAm ? "ቀሪ" : "Left"}</div>
            </div>
          </div>
        </div>

        {/* Low Stock */}
        {data?.lowStock > 0 && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-danger shrink-0" />
            <div>
              <div className="font-medium text-danger">
                {isAm ? "ዝቅተኛ ክምችት" : "Low Stock Alert"}
              </div>
              <p className="text-sm text-semay-600 mt-1">
                {isAm
                  ? `${data.lowStock} ዕቃዎች ከዝቅተኛ ደረጃ በታች ናቸው`
                  : `${data.lowStock} items are below minimum level`}
              </p>
              <Link to="/garment/inventory" className="text-sm font-medium text-danger underline mt-1 inline-block">
                {isAm ? "ክምችት ይመልከቱ" : "View Inventory"}
              </Link>
            </div>
          </div>
        )}

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-3">
          <Link to="/garment/orders" className="bg-white border border-semay-200 rounded-2xl p-4 flex flex-col items-center gap-2">
            <Scissors className="w-6 h-6 text-semay-700" />
            <span className="text-sm font-medium">{isAm ? "ምርት" : "Production"}</span>
          </Link>
          <Link to="/garment/inventory" className="bg-white border border-semay-200 rounded-2xl p-4 flex flex-col items-center gap-2">
            <Package className="w-6 h-6 text-semay-700" />
            <span className="text-sm font-medium">{isAm ? "ክምችት" : "Inventory"}</span>
          </Link>
        </div>
      </div>

      <GarmentBottomNav />
    </div>
  )
}