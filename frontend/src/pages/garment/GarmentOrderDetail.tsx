import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useParams, useNavigate } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import GarmentLayout from "../../components/GarmentLayout"
import { ArrowLeft, Plus } from "lucide-react"
import { offlineMutate, isOnline } from "../../lib/garmentOffline"
import { garmentUrl } from "../../lib/garmentApiBase"

const STAGES = [
  "CUTTING",
  "SEWING",
  "QUALITY",
  "FINISHING",
  "PACKING",
  "COMPLETED",
]

export default function GarmentOrderDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [order, setOrder] = useState<any>(null)
  const [reports, setReports] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)

  const load = async () => {
    if (!id) return
    setLoading(true)
    try {
      let ord: any = null
      if (typeof (garmentApi as any).order === "function") {
        ord = await (garmentApi as any).order(id)
      } else {
        const all = await garmentApi.orders()
        ord = (all || []).find((o: any) => o.id === id)
      }
      setOrder(ord || null)

      // reports for this order — filter from daily list or dedicated API
      let reps: any[] = []
      if (typeof (garmentApi as any).orderReports === "function") {
        reps = await (garmentApi as any).orderReports(id)
      } else {
        const allR = await garmentApi.dailyReports({ range: "month" }).catch(() => [])
        reps = (allR || []).filter((r: any) => r.orderId === id || r.order?.id === id)
      }
      setReports(reps)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [id])

  const planned = Number(order?.plannedQty || 0)
  const done = Number(order?.actualQty || 0)
  const left = Math.max(0, planned - done)
  const displayDone = Math.min(done, planned || done)
  const extra = done > planned ? done - planned : 0

  const setStage = async (stage: string) => {
    if (!id) return
    setBusy(true)
    try {
      const result = await offlineMutate({
        url: garmentUrl(`/api/garment/orders/${id}/stage`),
        method: "PATCH",
        body: { stage },
        label: "Stage update",
      })
      if (result.queued) {
        alert(isAm ? "ኦፍላይን ተቀምጧል" : "Saved offline")
      } else if (!result.ok) {
        // fallback common API
        if (typeof (garmentApi as any).updateOrderStage === "function") {
          await (garmentApi as any).updateOrderStage(id, stage)
        } else {
          alert(result.error || "Failed")
        }
      }
      if (isOnline()) await load()
    } catch (e) {
      console.error(e)
      alert(isAm ? "ስህተት" : "Error")
    } finally {
      setBusy(false)
    }
  }

  if (loading) {
    return (
      <GarmentLayout>
        <div className="p-8 text-center text-semay-500">
          {isAm ? "በመጫን ላይ..." : "Loading..."}
        </div>
      </GarmentLayout>
    )
  }

  if (!order) {
    return (
      <GarmentLayout>
        <div className="p-8 text-center">
          <p className="text-semay-500 mb-4">
            {isAm ? "ትዕዛዝ አልተገኘም" : "Order not found"}
          </p>
          <Link to="/garment/orders" className="text-sm underline">
            {isAm ? "ተመለስ" : "Back"}
          </Link>
        </div>
      </GarmentLayout>
    )
  }

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-xl space-y-4 pb-24">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-semibold text-lg">{order.orderNumber}</h1>
            <p className="text-sm text-semay-500">
              {order.style?.category ? `${order.style.category} · ` : ""}
              {order.style?.name}
              {order.customerName ? ` · ${order.customerName}` : ""}
            </p>
          </div>
        </div>

        {/* BIG Done / Left — packing truth */}
        <div className="bg-white border border-semay-200 rounded-2xl p-5">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-xs text-semay-500">
                {isAm ? "ታቅዷል" : "Planned"}
              </div>
              <div className="text-3xl font-bold tabular-nums">{planned}</div>
            </div>
            <div>
              <div className="text-xs text-semay-500">
                {isAm ? "ተጠናቋል" : "Done"}
              </div>
              <div className="text-3xl font-bold text-emerald-700 tabular-nums">
                {displayDone}
                {extra > 0 && (
                  <span className="text-xs text-amber-600 font-medium ml-1">
                    +{extra}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="text-xs text-semay-500">
                {isAm ? "ቀሪ" : "Left"}
              </div>
              <div
                className={`text-3xl font-bold tabular-nums ${
                  left > 0 ? "text-amber-600" : "text-emerald-700"
                }`}
              >
                {left}
              </div>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-semay-100 overflow-hidden">
            <div
              className="h-full bg-sky-500 rounded-full"
              style={{
                width: `${
                  planned > 0
                    ? Math.min(100, Math.round((done / planned) * 100))
                    : 0
                }%`,
              }}
            />
          </div>
          <p className="text-xs text-semay-500 mt-2 text-center">
            {isAm ? "ደረጃ" : "Stage"}: <b>{order.stage}</b>
            {order.status === "DELAYED" && (
              <span className="text-danger"> · DELAYED</span>
            )}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            to="/garment/daily"
            className="flex items-center gap-1.5 px-4 py-2.5 bg-semay-900 text-white rounded-xl text-sm"
          >
            <Plus className="w-4 h-4" />
            {isAm ? "ሪፖርት ጨምር" : "Add report"}
          </Link>
          {left === 0 && order.stage !== "COMPLETED" && (
            <button
              type="button"
              disabled={busy}
              onClick={() => setStage("COMPLETED")}
              className="px-4 py-2.5 border border-emerald-600 text-emerald-700 rounded-xl text-sm font-medium"
            >
              {isAm ? "ተጠናቋል / ማሸግ" : "Mark completed / packed"}
            </button>
          )}
        </div>

        {/* Stage buttons */}
        <div className="bg-white border border-semay-200 rounded-2xl p-4">
          <div className="text-sm font-medium mb-2">
            {isAm ? "ደረጃ ቀይር" : "Update stage"}
          </div>
          <div className="flex flex-wrap gap-2">
            {STAGES.map((s) => (
              <button
                key={s}
                type="button"
                disabled={busy}
                onClick={() => setStage(s)}
                className={`text-xs px-2.5 py-1.5 rounded-full border ${
                  order.stage === s
                    ? "bg-semay-900 text-white border-semay-900"
                    : "border-semay-200 bg-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Reasons history — packing answer */}
        <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-semay-100 font-medium">
            {isAm ? "ሪፖርቶች + ምክንያቶች" : "Reports + reasons"}
          </div>
          {reports.length === 0 ? (
            <p className="p-6 text-sm text-center text-semay-500">
              {isAm
                ? "እስካሁን ሪፖርት የለም — ቀሪ ለምን እንደሆነ አይታይም"
                : "No reports yet — no reasons recorded"}
            </p>
          ) : (
            reports.map((r) => (
              <div
                key={r.id}
                className="px-4 py-3 border-b border-semay-50 text-sm"
              >
                <div className="flex justify-between gap-2">
                  <span className="font-medium">
                    +{r.quantity} pcs · {r.stage}
                  </span>
                  <span className="text-xs text-semay-400">
                    {new Date(r.createdAt || r.reportDate).toLocaleString()}
                  </span>
                </div>
                <div className="text-xs text-semay-500 mt-0.5">
                  {r.userName || (isAm ? "ሰራተኛ" : "Staff")}
                </div>
                {r.note && (
                  <div className="mt-1 text-xs bg-amber-50 text-amber-900 rounded-lg px-2 py-1.5 border border-amber-100">
                    {isAm ? "ምክንያት" : "Reason"}: {r.note}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {left > 0 && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            {isAm
              ? `${left} ቁራጭ ገና አልተጠናቀቀም። ከላይ ያሉት ምክንያቶች ማሸጊያ ላይ ያሳያሉ።`
              : `${left} pieces still left. Reasons above explain gaps at packing.`}
          </div>
        )}
      </div>
    </GarmentLayout>
  )
}