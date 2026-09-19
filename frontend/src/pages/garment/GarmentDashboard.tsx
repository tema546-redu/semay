import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import { useAuth } from "../../lib/auth"
import GarmentLayout from "../../components/GarmentLayout"
import { Package, Scissors, Shirt, Users } from "lucide-react"

export default function GarmentDashboard() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { user, organization } = useAuth()

  const [data, setData] = useState<any>(null)
  const [orders, setOrders] = useState<any[]>([])
  const [materials, setMaterials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [completingId, setCompletingId] = useState<string | null>(null)

  const load = () => {
    setLoading(true)
    Promise.all([
      garmentApi.dashboard().catch(() => null),
      garmentApi.orders().catch(() => []),
      garmentApi.materials().catch(() => []),
    ])
      .then(([dash, ords, mats]) => {
        setData(dash)
        setOrders(Array.isArray(ords) ? ords : [])
        setMaterials(Array.isArray(mats) ? mats : [])
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const activeTrackers = useMemo(
    () =>
      orders.filter(
        (o) => !["COMPLETED", "CANCELLED"].includes(String(o.stage))
      ),
    [orders]
  )

  const withLeft = useMemo(
    () =>
      activeTrackers.filter((o) => {
        const left = Math.max(
          0,
          Number(o.plannedQty || 0) - Number(o.actualQty || 0)
        )
        return left > 0
      }),
    [activeTrackers]
  )

  const isReadyToClose = (o: any) => {
    const planned = Number(o.plannedQty || 0)
    const actual = Number(o.actualQty || 0)
    if (String(o.stage) === "COMPLETED") return true
    if (planned > 0 && actual >= planned) return true
    return false
  }

  const markProductionDone = async (orderId: string) => {
    setCompletingId(orderId)
    try {
      if (typeof (garmentApi as any).updateStage === "function") {
        await (garmentApi as any).updateStage(orderId, { stage: "COMPLETED" })
      } else {
        const token =
          localStorage.getItem("token") ||
          localStorage.getItem("accessToken") ||
          ""
        const res = await fetch(`/api/garment/orders/${orderId}/stage`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ stage: "COMPLETED" }),
        })
        if (!res.ok) throw new Error(await res.text())
      }
      await load()
    } catch (e) {
      console.error(e)
      alert(isAm ? "ማጠናቀቅ አልተሳካም" : "Could not mark as done")
    } finally {
      setCompletingId(null)
    }
  }

  const stockPercent = (m: any) => {
    const stock = Number(m.currentStock || 0)
    const min = Number(m.minLevel || 0)
    if (stock <= 0) return 0
    if (min > 0) return Math.min(100, Math.round((stock / (min * 2)) * 100))
    return 100
  }

  const stockColor = (m: any) => {
    const stock = Number(m.currentStock || 0)
    const min = Number(m.minLevel || 0)
    if (stock <= 0) return "#ef4444"
    if (min > 0 && stock <= min) return "#f59e0b"
    return "#10b981"
  }

  const hour = new Date().getHours()
  const greeting =
    hour < 12
      ? isAm
        ? "እንደምን አደሩ"
        : "Good morning"
      : hour < 18
        ? isAm
          ? "እንደምን አረፈዱ"
          : "Good afternoon"
        : isAm
          ? "እንደምን አመሹ"
          : "Good evening"

  if (loading) {
    return (
      <GarmentLayout>
        <div className="min-h-[50vh] flex items-center justify-center text-semay-500">
          {isAm ? "በመጫን ላይ..." : "Loading..."}
        </div>
      </GarmentLayout>
    )
  }

  const progress = data?.productionProgress || {
    percent: 0,
    planned: 0,
    actual: 0,
    remaining: 0,
  }

  const lowStockCount =
    data?.lowStock ??
    materials.filter((m) => {
      const s = Number(m.currentStock || 0)
      const min = Number(m.minLevel || 0)
      return min > 0 && s <= min
    }).length

  const storeMaterials = materials.slice(0, 8)

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-5xl space-y-5">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-semay-900">
            {greeting}, {user?.name?.split(" ")[0] || "Owner"}
          </h1>
          <p className="text-sm text-semay-500 mt-1">
            {organization?.name} ·{" "}
            {isAm
              ? "ትዕዛዝ · የተጠናቀቀ · ቀሪ · ምክንያት"
              : "Orders · done · left · reasons"}
          </p>
        </div>

        {/* Today summary */}
        <div className="bg-white border border-semay-200 rounded-2xl p-4">
          <div className="text-sm font-semibold text-semay-800 mb-3">
            {isAm ? "ዛሬ" : "Today"}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-semay-50 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold">{activeTrackers.length}</div>
              <div className="text-xs text-semay-500 mt-1">
                {isAm ? "ንቁ ትዕዛዞች" : "Active orders"}
              </div>
            </div>
            <div className="bg-semay-50 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-amber-600">
                {withLeft.length}
              </div>
              <div className="text-xs text-semay-500 mt-1">
                {isAm ? "ቀሪ ያላቸው" : "With left"}
              </div>
            </div>
            <div className="bg-semay-50 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-emerald-600">
                {data?.completedToday || 0}
              </div>
              <div className="text-xs text-semay-500 mt-1">
                {isAm ? "ዛሬ የተጠናቀቁ" : "Completed today"}
              </div>
            </div>
            <div className="bg-semay-50 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-red-600">
                {data?.delayed || 0}
              </div>
              <div className="text-xs text-semay-500 mt-1">
                {isAm ? "የዘገዩ" : "Delayed"}
              </div>
            </div>
            <div className="bg-semay-50 rounded-xl p-3 text-center col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-orange-500">
                {lowStockCount}
              </div>
              <div className="text-xs text-semay-500 mt-1">
                {isAm ? "ዝቅተኛ ክምችት" : "Low stock"}
              </div>
            </div>
          </div>
        </div>

        {/* Production trackers — Done / Left + open detail */}
        <div className="bg-white border border-semay-200 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-semay-900">
              {isAm ? "የምርት መከታተያ" : "Production trackers"}
            </h2>
            <Link
              to="/garment/orders"
              className="text-sm text-sky-600 font-medium"
            >
              {isAm ? "ሁሉንም" : "Open all"} →
            </Link>
          </div>

          {activeTrackers.length === 0 ? (
            <p className="text-sm text-semay-500 py-6 text-center">
              {isAm
                ? "ምንም ንቁ ትዕዛዝ የለም — አዲስ ትዕዛዝ ይፍጠሩ"
                : "No active orders — create a new order to start a tracker"}
            </p>
          ) : (
            <div className="space-y-3">
              {activeTrackers.map((o) => {
                const planned = Number(o.plannedQty || 0)
                const actual = Number(o.actualQty || 0)
                const left = Math.max(0, planned - actual)
                const displayDone = Math.min(actual, planned || actual)
                const pct =
                  planned > 0
                    ? Math.min(100, Math.round((actual / planned) * 100))
                    : 0
                const ready = isReadyToClose(o)
                const category = o.style?.category || ""

                return (
                  <div
                    key={o.id}
                    className={`rounded-2xl border p-4 transition ${
                      ready
                        ? "border-emerald-300 bg-emerald-50/50"
                        : left > 0
                          ? "border-amber-200 bg-amber-50/30"
                          : "border-semay-100 bg-semay-50/40"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="font-semibold text-semay-900">
                          {o.orderNumber}
                        </div>
                        <div className="text-sm text-semay-600 mt-0.5">
                          {category ? `${category} · ` : ""}
                          {o.style?.name || "—"}
                          {o.customerName ? ` · ${o.customerName}` : ""}
                        </div>
                        <div className="text-xs text-semay-500 mt-1">
                          {isAm ? "ደረጃ" : "Stage"}: {o.stage}
                          {o.status === "DELAYED" && (
                            <span className="text-red-600 font-medium">
                              {" "}
                              · {isAm ? "ዘግይቷል" : "Delayed"}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-xs text-semay-500">
                          {isAm ? "ተጠናቋል" : "Done"}
                        </div>
                        <div className="text-sm font-semibold tabular-nums text-emerald-700">
                          {displayDone}
                          {actual > planned && planned > 0 && (
                            <span className="text-xs text-amber-600">
                              {" "}
                              +{actual - planned}
                            </span>
                          )}
                          <span className="text-semay-400 font-normal">
                            {" "}
                            / {planned || "—"}
                          </span>
                        </div>
                        <div
                          className={`text-sm font-bold tabular-nums mt-0.5 ${
                            left > 0 ? "text-amber-600" : "text-emerald-600"
                          }`}
                        >
                          {isAm ? "ቀሪ" : "Left"} {left}
                        </div>
                        <div className="text-[11px] text-semay-400">{pct}%</div>
                      </div>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-semay-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          ready
                            ? "bg-emerald-500"
                            : left > 0
                              ? "bg-amber-500"
                              : "bg-sky-500"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <Link
                        to={`/garment/orders/${o.id}`}
                        className="text-xs px-3 py-1.5 rounded-lg border border-semay-200 bg-white font-medium"
                      >
                        {isAm
                          ? "ክፈት · ቀሪ + ምክንያት"
                          : "Open · left + reasons"}
                      </Link>
                      <Link
                        to="/garment/daily"
                        className="text-xs px-3 py-1.5 rounded-lg border border-semay-200 bg-white"
                      >
                        {isAm ? "ሪፖርት" : "Report"}
                      </Link>
                      {ready && (
                        <button
                          type="button"
                          disabled={completingId === o.id}
                          onClick={() => markProductionDone(o.id)}
                          className="text-xs px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold animate-pulse disabled:opacity-60"
                        >
                          {completingId === o.id
                            ? "..."
                            : isAm
                              ? "✓ ምርት ተጠናቋል"
                              : "✓ Production done"}
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Store levels */}
        <div className="bg-white border border-semay-200 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-semay-900 flex items-center gap-2">
              <Package className="w-5 h-5" />
              {isAm ? "የክምችት ደረጃ" : "Store levels"}
            </h2>
            <Link
              to="/garment/inventory"
              className="text-sm text-sky-600 font-medium"
            >
              {isAm ? "ክምችት ክፈት" : "Open store"} →
            </Link>
          </div>
          {storeMaterials.length === 0 ? (
            <p className="text-sm text-semay-500 text-center py-6">
              {isAm
                ? "እስካሁን ቁሳቁስ የለም — ከክምችት ይጨምሩ"
                : "No materials yet — add them in Inventory"}
            </p>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {storeMaterials.map((m) => {
                const pct = stockPercent(m)
                const color = stockColor(m)
                const stock = Number(m.currentStock || 0)
                return (
                  <div
                    key={m.id}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: `conic-gradient(${color} ${pct * 3.6}deg, #e5e7eb 0deg)`,
                      }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xs font-semibold">
                        {pct}%
                      </div>
                    </div>
                    <div className="mt-2 text-xs font-medium truncate max-w-[80px]">
                      {m.name || "—"}
                    </div>
                    <div className="text-[11px] text-semay-500">
                      {stock} {m.unit || ""}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Overall progress */}
        <div className="bg-white border border-semay-200 rounded-2xl p-4">
          <div className="flex justify-between mb-2">
            <span className="font-medium">
              {isAm ? "ጠቅላላ የምርት ሂደት" : "Production progress"}
            </span>
            <span className="font-semibold">{progress.percent || 0}%</span>
          </div>
          <div className="w-full bg-semay-100 rounded-full h-3">
            <div
              className="bg-sky-500 h-3 rounded-full"
              style={{ width: `${Math.min(progress.percent || 0, 100)}%` }}
            />
          </div>
          <div className="grid grid-cols-3 text-center text-sm mt-3">
            <div>
              <div className="font-medium">{progress.planned || 0}</div>
              <div className="text-xs text-semay-500">
                {isAm ? "ታቅዶ" : "Planned"}
              </div>
            </div>
            <div>
              <div className="font-medium text-emerald-600">
                {progress.actual || 0}
              </div>
              <div className="text-xs text-semay-500">
                {isAm ? "ተጠናቋል" : "Done"}
              </div>
            </div>
            <div>
              <div className="font-medium text-amber-600">
                {progress.remaining ??
                  Math.max(
                    0,
                    (progress.planned || 0) - (progress.actual || 0)
                  )}
              </div>
              <div className="text-xs text-semay-500">
                {isAm ? "ቀሪ" : "Left"}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link
            to="/garment/orders"
            className="bg-white border border-semay-200 rounded-2xl p-4 flex flex-col items-center gap-2"
          >
            <Scissors className="w-6 h-6 text-semay-700" />
            <span className="text-sm font-medium">
              {isAm ? "ምርት" : "Production"}
            </span>
          </Link>
          <Link
            to="/garment/inventory"
            className="bg-white border border-semay-200 rounded-2xl p-4 flex flex-col items-center gap-2"
          >
            <Package className="w-6 h-6 text-semay-700" />
            <span className="text-sm font-medium">
              {isAm ? "ክምችት" : "Inventory"}
            </span>
          </Link>
          <Link
            to="/garment/styles"
            className="bg-white border border-semay-200 rounded-2xl p-4 flex flex-col items-center gap-2"
          >
            <Shirt className="w-6 h-6 text-semay-700" />
            <span className="text-sm font-medium">
              {isAm ? "ዓይነቶች" : "Styles"}
            </span>
          </Link>
          <Link
            to="/garment/staff"
            className="bg-white border border-semay-200 rounded-2xl p-4 flex flex-col items-center gap-2"
          >
            <Users className="w-6 h-6 text-semay-700" />
            <span className="text-sm font-medium">
              {isAm ? "ሰራተኞች" : "Staff"}
            </span>
          </Link>
        </div>
      </div>
    </GarmentLayout>
  )
}