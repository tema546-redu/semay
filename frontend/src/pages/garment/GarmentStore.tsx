import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import GarmentLayout from "../../components/GarmentLayout"
import { storeApi } from "../../lib/api"
import {
  Package,
  ArrowDownToLine,
  ArrowUpFromLine,
  FileText,
  AlertTriangle,
} from "lucide-react"

export default function GarmentStore() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState("")

  const load = () => {
    setErr("")
    storeApi
      .summary()
      .then(setData)
      .catch((e) => {
        console.error(e)
        setErr(e?.message || "Failed to load store")
        setData(null)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
    const t = setInterval(load, 20000)
    return () => clearInterval(t)
  }, [])

  const low = data?.lowStockCount || 0

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-3xl space-y-4 pb-24">
        <div>
          <h1 className="text-xl font-semibold text-semay-900">
            {isAm ? "ስቶር / ክምችት" : "Store"}
          </h1>
          <p className="text-sm text-semay-500 mt-0.5">
            {isAm
              ? "ገቢ · ወጪ · ዕቃዎች · ሪፖርት (ከልብስ መለያ ጋር)"
              : "Receive · send out · items · reports (same login)"}
          </p>
        </div>

        {loading ? (
          <p className="text-sm text-semay-500 py-10 text-center">
            {isAm ? "በመጫን ላይ..." : "Loading…"}
          </p>
        ) : err ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            {err}
            <p className="text-xs mt-2 text-amber-800">
              {isAm
                ? "ስቶር API ከዚህ ድርጅት ጋር ካልተገናኘ በባክኤንድ መፈቀድ አለበት።"
                : "If this org is not allowed on store API, enable it on the backend."}
            </p>
            <button
              type="button"
              onClick={() => {
                setLoading(true)
                load()
              }}
              className="mt-3 text-sm font-medium underline"
            >
              {isAm ? "እንደገና ሞክር" : "Retry"}
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-semay-200 rounded-2xl p-4">
                <div className="text-[10px] uppercase text-semay-400 font-semibold">
                  {isAm ? "ዕቃዎች" : "Items"}
                </div>
                <div className="text-2xl font-semibold tabular-nums">
                  {data?.itemCount ?? 0}
                </div>
              </div>
              <div className="bg-white border border-semay-200 rounded-2xl p-4">
                <div className="text-[10px] uppercase text-semay-400 font-semibold">
                  {isAm ? "የክምችት ዋጋ" : "Stock value"}
                </div>
                <div className="text-2xl font-semibold tabular-nums">
                  {Number(data?.stockValue || 0).toLocaleString()} ETB
                </div>
              </div>
              <div className="bg-white border border-semay-200 rounded-2xl p-4 col-span-2">
                <div className="flex items-center gap-2 text-[10px] uppercase text-semay-400 font-semibold">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  {isAm ? "ዝቅተኛ ክምችት" : "Low stock"}
                </div>
                <div className="text-2xl font-semibold tabular-nums text-rose-600">
                  {low}
                </div>
                {low > 0 && (
                  <ul className="mt-2 text-sm space-y-1">
                    {(data?.lowStock || []).map((i: any) => (
                      <li key={i.id} className="flex justify-between gap-2">
                        <span>{i.name}</span>
                        <span className="tabular-nums text-semay-500">
                          {i.quantity} {i.unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/garment/store/receive"
                className="flex flex-col items-center gap-2 bg-emerald-700 text-white rounded-2xl py-5"
              >
                <ArrowDownToLine className="w-6 h-6" />
                <span className="text-sm font-medium">
                  {isAm ? "ገቢ (IN)" : "Receive"}
                </span>
              </Link>
              <Link
                to="/garment/store/out"
                className="flex flex-col items-center gap-2 bg-semay-900 text-white rounded-2xl py-5"
              >
                <ArrowUpFromLine className="w-6 h-6" />
                <span className="text-sm font-medium">
                  {isAm ? "ወጪ (OUT)" : "Send out"}
                </span>
              </Link>
              <Link
                to="/garment/store/items"
                className="flex flex-col items-center gap-2 bg-white border border-semay-200 rounded-2xl py-4"
              >
                <Package className="w-5 h-5" />
                <span className="text-xs font-medium">
                  {isAm ? "ዕቃዎች" : "Items"}
                </span>
              </Link>
              <Link
                to="/garment/store/reports"
                className="flex flex-col items-center gap-2 bg-white border border-semay-200 rounded-2xl py-4"
              >
                <FileText className="w-5 h-5" />
                <span className="text-xs font-medium">
                  {isAm ? "ሪፖርት" : "Reports"}
                </span>
              </Link>
            </div>

            <div className="bg-white border border-semay-200 rounded-2xl p-4">
              <h2 className="text-sm font-semibold mb-3">
                {isAm ? "የዛሬ እንቅስቃሴ" : "Today’s movements"}
              </h2>
              {!data?.todayMoves?.length ? (
                <p className="text-sm text-semay-400">
                  {isAm ? "ምንም የለም" : "None yet"}
                </p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {data.todayMoves.map((m: any) => (
                    <li
                      key={m.id}
                      className="flex justify-between gap-2 border-b border-semay-50 pb-2 last:border-0"
                    >
                      <div>
                        <span
                          className={
                            m.type === "IN"
                              ? "text-emerald-700 font-medium"
                              : "text-amber-700 font-medium"
                          }
                        >
                          {m.type}
                        </span>{" "}
                        {m.stockItem?.name} · {m.quantity}
                        <div className="text-[11px] text-semay-400">
                          {m.fromWhere || "—"} → {m.toWhere || "—"} ·{" "}
                          {m.user?.name || "—"} ·{" "}
                          {new Date(m.createdAt).toLocaleTimeString()}
                        </div>
                      </div>
                      <span className="tabular-nums text-xs shrink-0">
                        {Number(m.totalAmount || 0).toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </GarmentLayout>
  )
}