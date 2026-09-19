import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import GarmentLayout from "../../components/GarmentLayout"
import { useAuth } from "../../lib/auth"
import { garmentApi } from "../../lib/api"
import {
  flushQueue,
  isOnline,
  offlineGet,
  queueCount,
} from "../../lib/garmentOffline"
import {
  ClipboardList,
  Package,
  Scissors,
  Wifi,
  WifiOff,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react"

/**
 * Staff-only home — simple, big buttons, offline-aware.
 * Path: src/pages/garment/GarmentStaffHome.tsx
 * Route: /garment/staff-home
 */
export default function GarmentStaffHome() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { user, organization } = useAuth()

  const [online, setOnline] = useState(isOnline())
  const [pending, setPending] = useState(0)
  const [syncing, setSyncing] = useState(false)
  const [syncMsg, setSyncMsg] = useState("")
  const [fromCache, setFromCache] = useState(false)
  const [orders, setOrders] = useState<any[]>([])
  const [lowStock, setLowStock] = useState(0)
  const [loading, setLoading] = useState(true)

  const refreshPending = async () => {
    try {
      setPending(await queueCount())
    } catch {
      setPending(0)
    }
  }

  const load = async () => {
    setLoading(true)
    setSyncMsg("")
    try {
      // Prefer your existing API base; adjust if garmentApi has base URL built-in
      const base =
        (import.meta as any).env?.VITE_API_URL?.replace(/\/$/, "") || ""

      const ordersUrl = base
        ? `${base}/api/garment/orders`
        : "/api/garment/orders"
      const matsUrl = base
        ? `${base}/api/garment/materials`
        : "/api/garment/materials"

      // Try live API helpers first when online
      if (isOnline() && garmentApi?.orders) {
        try {
          const [ords, mats] = await Promise.all([
            garmentApi.orders(),
            garmentApi.materials?.() || Promise.resolve([]),
          ])
          setOrders(
            (ords || []).filter(
              (o: any) => !["COMPLETED", "CANCELLED"].includes(String(o.stage))
            )
          )
          const list = mats || []
          setLowStock(
            list.filter((m: any) => {
              const s = Number(m.currentStock || 0)
              const min = Number(m.minLevel || 0)
              return min > 0 && s <= min
            }).length
          )
          setFromCache(false)
          setLoading(false)
          await refreshPending()
          return
        } catch {
          /* fall through to offline cache */
        }
      }

      const o = await offlineGet<any[]>("garment_orders", ordersUrl)
      const m = await offlineGet<any[]>("garment_materials", matsUrl)
      const ords = o.data || []
      setOrders(
        ords.filter(
          (x: any) => !["COMPLETED", "CANCELLED"].includes(String(x.stage))
        )
      )
      const list = m.data || []
      setLowStock(
        list.filter((x: any) => {
          const s = Number(x.currentStock || 0)
          const min = Number(x.minLevel || 0)
          return min > 0 && s <= min
        }).length
      )
      setFromCache(o.fromCache || m.fromCache)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
      await refreshPending()
    }
  }

  useEffect(() => {
    load()
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener("online", on)
    window.addEventListener("offline", off)
    return () => {
      window.removeEventListener("online", on)
      window.removeEventListener("offline", off)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSync = async () => {
    setSyncing(true)
    setSyncMsg("")
    try {
      const result = await flushQueue()
      setSyncMsg(
        isAm
          ? `ተልኳል: ${result.sent} · ቀሪ: ${result.left}`
          : `Sent: ${result.sent} · Left: ${result.left}`
      )
      if (result.errors?.length) {
        setSyncMsg((s) => s + " · " + result.errors[0])
      }
      await load()
    } catch (e: any) {
      setSyncMsg(e?.message || "Sync failed")
    } finally {
      setSyncing(false)
      await refreshPending()
    }
  }

  const hour = new Date().getHours()
  const greet =
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

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-3xl space-y-5">
        {/* Header */}
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-semay-900">
            {greet}, {user?.name?.split(" ")[0] || "Staff"}
          </h1>
          <p className="text-sm text-semay-500 mt-1">
            {organization?.name} ·{" "}
            {isAm ? "የሰራተኛ መስሪያ ቦታ" : "Staff work desk"}
          </p>
        </div>

        {/* Online / offline banner */}
        <div
          className={`rounded-2xl border p-4 flex flex-wrap items-center justify-between gap-3 ${
            online
              ? "bg-emerald-50 border-emerald-200"
              : "bg-amber-50 border-amber-200"
          }`}
        >
          <div className="flex items-center gap-2 text-sm font-medium">
            {online ? (
              <Wifi className="w-5 h-5 text-emerald-700" />
            ) : (
              <WifiOff className="w-5 h-5 text-amber-700" />
            )}
            <span>
              {online
                ? isAm
                  ? "ኢንተርኔት አለ"
                  : "Online"
                : isAm
                  ? "ኦፍላይን — ስራው በዚህ ኮምፒውተር ይቀመጣል"
                  : "Offline — work is saved on this PC"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {pending > 0 && (
              <span className="text-xs px-2 py-1 rounded-full bg-white border border-semay-200">
                {isAm ? `${pending} በመጠባበቅ` : `${pending} waiting`}
              </span>
            )}
            <button
              type="button"
              disabled={!online || syncing}
              onClick={handleSync}
              className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-xl bg-semay-900 text-white disabled:opacity-50"
            >
              <RefreshCw
                className={`w-4 h-4 ${syncing ? "animate-spin" : ""}`}
              />
              {isAm ? "አሁን ስንክ" : "Sync now"}
            </button>
          </div>
        </div>
        {syncMsg && (
          <p className="text-xs text-semay-600 -mt-3">{syncMsg}</p>
        )}
        {fromCache && (
          <p className="text-xs text-amber-700 -mt-2">
            {isAm
              ? "ከቀድሞ ቅንጥብ እየታየ ነው — ስንክ ሲኖር ይዘምናል"
              : "Showing last saved data — updates after sync"}
          </p>
        )}

        {/* Big actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            to="/garment/daily"
            className="bg-semay-900 text-white rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:opacity-95"
          >
            <ClipboardList className="w-8 h-8 shrink-0" />
            <div>
              <div className="font-semibold text-lg">
                {isAm ? "ዕለታዊ ሪፖርት" : "Daily report"}
              </div>
              <div className="text-sm text-white/70 mt-0.5">
                {isAm
                  ? "ዛሬ የጨረሱትን ቁጥር ይጻፉ"
                  : "Write pieces you finished today"}
              </div>
            </div>
          </Link>

          <Link
            to="/garment/orders"
            className="bg-white border border-semay-200 rounded-2xl p-5 flex items-center gap-4 hover:border-semay-400"
          >
            <Scissors className="w-8 h-8 text-semay-700 shrink-0" />
            <div>
              <div className="font-semibold text-lg text-semay-900">
                {isAm ? "ትዕዛዞች" : "Orders"}
              </div>
              <div className="text-sm text-semay-500 mt-0.5">
                {isAm ? "ደረጃ እና ሂደት" : "Stages and progress"}
              </div>
            </div>
          </Link>

          <Link
            to="/garment/inventory"
            className="bg-white border border-semay-200 rounded-2xl p-5 flex items-center gap-4 hover:border-semay-400"
          >
            <Package className="w-8 h-8 text-semay-700 shrink-0" />
            <div>
              <div className="font-semibold text-lg text-semay-900">
                {isAm ? "ክምችት" : "Stock"}
              </div>
              <div className="text-sm text-semay-500 mt-0.5">
                {isAm ? "ጨርቅ እና እቃ" : "Fabric and materials"}
              </div>
            </div>
          </Link>

          <Link
            to="/garment/quality"
            className="bg-white border border-semay-200 rounded-2xl p-5 flex items-center gap-4 hover:border-semay-400"
          >
            <AlertTriangle className="w-8 h-8 text-semay-700 shrink-0" />
            <div>
              <div className="font-semibold text-lg text-semay-900">
                {isAm ? "ጥራት" : "Quality"}
              </div>
              <div className="text-sm text-semay-500 mt-0.5">
                {isAm ? "ጉድለት መመዝገብ" : "Record defects"}
              </div>
            </div>
          </Link>
        </div>

        {/* Activity — active orders */}
        <section className="bg-white border border-semay-200 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-semay-900">
              {isAm ? "ንቁ ስራዎች" : "Active work"}
            </h2>
            <span className="text-xs text-semay-500">
              {loading ? "..." : `${orders.length}`}
            </span>
          </div>

          {loading ? (
            <p className="text-sm text-semay-500 py-6 text-center">
              {isAm ? "በመጫን ላይ..." : "Loading..."}
            </p>
          ) : orders.length === 0 ? (
            <p className="text-sm text-semay-500 py-6 text-center">
              {isAm ? "ንቁ ትዕዛዝ የለም" : "No active orders"}
            </p>
          ) : (
            <div className="space-y-2">
              {orders.slice(0, 8).map((o) => {
                const planned = Number(o.plannedQty || 0)
                const actual = Number(o.actualQty || 0)
                const pct =
                  planned > 0
                    ? Math.min(100, Math.round((actual / planned) * 100))
                    : 0
                return (
                  <Link
                    key={o.id}
                    to={`/garment/orders/${o.id}`}
                    className="block rounded-xl border border-semay-100 bg-semay-50/50 p-3 hover:border-semay-300"
                  >
                    <div className="flex justify-between gap-2">
                      <div>
                        <div className="font-medium text-semay-900">
                          {o.orderNumber}
                        </div>
                        <div className="text-xs text-semay-500 mt-0.5">
                          {o.style?.name || "—"} · {o.stage}
                        </div>
                      </div>
                      <div className="text-sm tabular-nums font-medium">
                        {Math.min(actual, planned || actual)}/{planned || "—"}
                      </div>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-semay-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-sky-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </section>

        {/* Stock alert */}
        {lowStock > 0 && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
            <div>
              <div className="font-medium text-amber-900">
                {isAm ? "ዝቅተኛ ክምችት" : "Low stock"}
              </div>
              <p className="text-sm text-amber-800 mt-1">
                {isAm
                  ? `${lowStock} እቃ ከዝቅተኛ በታች`
                  : `${lowStock} items below minimum`}
              </p>
              <Link
                to="/garment/inventory"
                className="text-sm font-medium underline mt-1 inline-block"
              >
                {isAm ? "ክምችት ክፈት" : "Open stock"}
              </Link>
            </div>
          </div>
        )}

        <div className="flex items-start gap-2 text-xs text-semay-500 pb-6">
          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
          <p>
            {isAm
              ? "ኦፍላይን ሲሆኑ ዕለታዊ ሪፖርት በዚህ ኮምፒውተር ይቀመጣል። ኢንተርኔት ሲመጣ «Sync now» ይጫኑ።"
              : "When offline, daily reports stay on this PC. When internet returns, press Sync now."}
          </p>
        </div>
      </div>
    </GarmentLayout>
  )
}
