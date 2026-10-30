import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import GarmentLayout from "../../components/GarmentLayout"
import { storeApi } from "../../lib/api"
import { ArrowLeft } from "lucide-react"

export default function GarmentStoreReports() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [moves, setMoves] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    storeApi
      .movements()
      .then((r) => setMoves(Array.isArray(r) ? r : []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-3xl space-y-4 pb-24">
        <div className="flex items-center gap-2">
          <Link to="/garment/store">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold text-lg">
            {isAm ? "የስቶር ሪፖርት" : "Store movements"}
          </h1>
        </div>
        {loading ? (
          <p className="text-sm text-semay-500">…</p>
        ) : moves.length === 0 ? (
          <p className="text-sm text-semay-500 text-center py-10">
            {isAm ? "ምንም እንቅስቃሴ የለም" : "No movements yet"}
          </p>
        ) : (
          <ul className="space-y-2">
            {moves.map((m) => (
              <li
                key={m.id}
                className="bg-white border border-semay-200 rounded-2xl p-4 text-sm"
              >
                <div className="flex justify-between gap-2">
                  <span
                    className={
                      m.type === "IN" ? "text-emerald-700 font-medium" : "text-amber-700 font-medium"
                    }
                  >
                    {m.type}
                  </span>
                  <span className="text-xs text-semay-400">
                    {new Date(m.createdAt).toLocaleString()}
                  </span>
                </div>
                <div className="mt-1">
                  {m.stockItem?.name || "—"} · {m.quantity}
                </div>
                <div className="text-xs text-semay-500 mt-0.5">
                  {m.fromWhere || "—"} → {m.toWhere || "—"}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </GarmentLayout>
  )
}