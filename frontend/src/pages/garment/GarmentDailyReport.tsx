import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import GarmentLayout from "../../components/GarmentLayout"
import { Plus, ClipboardList, AlertTriangle, Clock } from "lucide-react"
import { offlineMutate, isOnline } from "../../lib/garmentOffline"
import { garmentUrl } from "../../lib/garmentApiBase"

const STAGES = [
  { value: "CUTTING", en: "Cutting", am: "መቁረጥ" },
  { value: "SEWING", en: "Sewing", am: "መስፋት" },
  { value: "QUALITY", en: "Quality", am: "ጥራት" },
  { value: "FINISHING", en: "Finishing", am: "ማጠናቀቅ" },
  { value: "PACKING", en: "Packing", am: "ማሸግ" },
  { value: "COMPLETED", en: "Completed", am: "ተጠናቋል" },
]

const BLOCKERS = [
  { value: "", en: "— None —", am: "— የለም —" },
  { value: "NO_FABRIC", en: "No fabric / material", am: "ጨርቅ / ቁሳቁስ የለም" },
  { value: "MACHINE", en: "Machine problem", am: "ማሽን ችግር" },
  { value: "STAFF", en: "Staff / absent", am: "ሰራተኛ / አለመገኘት" },
  { value: "QC", en: "Waiting quality", am: "ጥራት በመጠባበቅ" },
  { value: "CUSTOMER", en: "Waiting customer", am: "ደንበኛ በመጠባበቅ" },
  { value: "OTHER", en: "Other", am: "ሌላ" },
]

export default function GarmentDailyReport() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [reports, setReports] = useState<any[]>([])
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [range, setRange] = useState<"today" | "7d" | "month">("today")
  const [selectedDate, setSelectedDate] = useState("")
  const [form, setForm] = useState({
    orderId: "",
    stage: "SEWING",
    quantity: "",
    note: "",
    blocker: "",
    updateOrderStage: true,
  })

  const today = new Date().toISOString().slice(0, 10)

  const load = async () => {
    try {
      const params = selectedDate ? { date: selectedDate } : { range }
      const [reps, ords] = await Promise.all([
        garmentApi.dailyReports(params),
        garmentApi.orders(),
      ])
      setReports(reps || [])
      setOrders(ords || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    load()
  }, [range, selectedDate])

  const activeOrders = orders.filter(
    (o) => !["COMPLETED", "CANCELLED"].includes(o.stage)
  )
  const delayedOrders = orders.filter((o) => o.status === "DELAYED")
  const selectedOrder = orders.find((o) => o.id === form.orderId)

  const planned = Number(selectedOrder?.plannedQty || 0)
  const doneBefore = Number(selectedOrder?.actualQty || 0)
  const finishToday = Number(form.quantity) || 0
  const leftAfter = Math.max(0, planned - doneBefore - finishToday)
  const leftNow = Math.max(0, planned - doneBefore)

  const reasonRequired =
    !!selectedOrder &&
    (leftAfter > 0 || form.blocker === "OTHER" || form.blocker !== "")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setErrorMsg("")

    if (!form.orderId) {
      setErrorMsg(isAm ? "ትዕዛዝ ይምረጡ" : "Select an order")
      setSaving(false)
      return
    }
    if (!form.quantity || Number(form.quantity) <= 0) {
      setErrorMsg(isAm ? "የተጠናቀቀ ብዛት ያስፈልጋል" : "Finished quantity required")
      setSaving(false)
      return
    }
    // Reason required when pieces will remain OR any blocker selected
    if (leftAfter > 0 || form.blocker) {
      if (!String(form.note || "").trim() && form.blocker !== "NO_FABRIC" && form.blocker !== "MACHINE" && form.blocker !== "STAFF" && form.blocker !== "QC" && form.blocker !== "CUSTOMER") {
        // if blocker is a known type, note optional; if OTHER or no blocker but left>0, note required
      }
      if (leftAfter > 0 && !form.blocker && !String(form.note || "").trim()) {
        setErrorMsg(
          isAm
            ? "ቀሪ ካለ ምክንያት ወይም ችግር ይምረጡ / ይጻፉ"
            : "If pieces are left, select a reason or write why"
        )
        setSaving(false)
        return
      }
      if (form.blocker === "OTHER" && !String(form.note || "").trim()) {
        setErrorMsg(isAm ? "ሌላ ምክንያት ይጻፉ" : "Write the other reason")
        setSaving(false)
        return
      }
    }

    const blockerLabel =
      BLOCKERS.find((b) => b.value === form.blocker)?.[isAm ? "am" : "en"] || ""
    const noteParts = [
      form.blocker && form.blocker !== "OTHER" ? blockerLabel : "",
      form.note?.trim() || "",
      leftAfter > 0 ? (isAm ? `ቀሪ ከሪፖርት በኋላ: ${leftAfter}` : `Left after report: ${leftAfter}`) : "",
    ].filter(Boolean)
    const note = noteParts.join(" · ") || undefined

    try {
      const payload = {
        orderId: form.orderId,
        stage: form.stage,
        quantity: Number(form.quantity),
        note,
        reportDate: today,
        updateOrderStage: form.updateOrderStage,
      }

      const result = await offlineMutate({
        url: garmentUrl("/api/garment/daily-reports"),
        method: "POST",
        body: payload,
        label: "Daily report",
      })

      if (!result.ok && !result.queued) {
        setErrorMsg(result.error || (isAm ? "ስህተት" : "Something went wrong"))
        setSaving(false)
        return
      }

      if (result.queued) {
        alert(
          isAm
            ? "ኦፍላይን ተቀምጧል። Sync now በኋላ።"
            : "Saved offline. Sync later."
        )
      }

      setShowForm(false)
      setForm({
        orderId: "",
        stage: "SEWING",
        quantity: "",
        note: "",
        blocker: "",
        updateOrderStage: true,
      })
      if (isOnline()) await load()
    } catch (err: any) {
      console.error(err)
      setErrorMsg(err?.message || (isAm ? "ማስቀመጥ አልተሳካም" : "Failed to save"))
    } finally {
      setSaving(false)
    }
  }

  const stageLabel = (s: string) => {
    const t = STAGES.find((x) => x.value === s)
    return t ? (isAm ? t.am : t.en) : s
  }

  const formatTime = (iso: string) => {
    try {
      return new Date(iso).toLocaleString()
    } catch {
      return iso
    }
  }

  const totalPieces = reports.reduce((s, r) => s + (r.quantity || 0), 0)
  const periodLabel = selectedDate
    ? selectedDate
    : range === "today"
      ? isAm
        ? "ዛሬ"
        : "Today"
      : range === "7d"
        ? isAm
          ? "7 ቀናት"
          : "Last 7 days"
        : isAm
          ? "ይህ ወር"
          : "This month"

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-3xl space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-semay-900">
              {isAm ? "የዕለት ሪፖርት" : "Daily report"}
            </h1>
            <p className="text-sm text-semay-500 mt-1">
              {isAm
                ? "ትዕዛዝ · የተጠናቀቀ · ቀሪ · ምክንያት"
                : "Order · finished · left · reason"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setErrorMsg("")
              setShowForm(true)
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-semay-900 text-white rounded-xl text-sm"
          >
            <Plus className="w-4 h-4" />
            {isAm ? "ሪፖርት" : "Report"}
          </button>
        </div>

        {delayedOrders.length > 0 && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-danger shrink-0" />
            <div>
              <div className="font-medium text-danger">
                {isAm
                  ? `${delayedOrders.length} ትዕዛዞች ዘግይተዋል`
                  : `${delayedOrders.length} delayed orders`}
              </div>
              <Link
                to="/garment/orders"
                className="text-sm font-medium text-danger underline mt-1 inline-block"
              >
                {isAm ? "ትዕዛዞች" : "View orders"}
              </Link>
            </div>
          </div>
        )}

        {activeOrders.length > 0 && (
          <div className="bg-white border border-semay-200 rounded-2xl p-4">
            <div className="font-medium mb-2">
              {isAm ? "ንቁ ትዕዛዞች" : "Active orders"} ({activeOrders.length})
            </div>
            <div className="space-y-2">
              {activeOrders.slice(0, 6).map((o) => {
                const left = Math.max(
                  0,
                  Number(o.plannedQty || 0) - Number(o.actualQty || 0)
                )
                return (
                  <Link
                    key={o.id}
                    to={`/garment/orders/${o.id}`}
                    className="flex justify-between text-sm border-b border-semay-50 pb-2"
                  >
                    <div>
                      <span className="font-medium">{o.orderNumber}</span>
                      <span className="text-semay-500">
                        {" "}
                        · {o.style?.category ? `${o.style.category} / ` : ""}
                        {o.style?.name}
                      </span>
                    </div>
                    <div className="text-right text-xs">
                      <div>
                        {isAm ? "ተጠናቋል" : "Done"} {o.actualQty}/{o.plannedQty}
                      </div>
                      <div
                        className={
                          left > 0 ? "text-amber-600 font-medium" : "text-emerald-600"
                        }
                      >
                        {isAm ? "ቀሪ" : "Left"} {left}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {(["today", "7d", "month"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => {
                setRange(r)
                setSelectedDate("")
              }}
              className={`text-xs px-3 py-1.5 rounded-full border font-medium ${
                !selectedDate && range === r
                  ? "bg-semay-900 text-white border-semay-900"
                  : "border-semay-200 text-semay-600 bg-white"
              }`}
            >
              {r === "today"
                ? isAm
                  ? "ዛሬ"
                  : "Today"
                : r === "7d"
                  ? isAm
                    ? "7 ቀናት"
                    : "7 days"
                  : isAm
                    ? "ወር"
                    : "Month"}
            </button>
          ))}
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-xs border border-semay-200 rounded-lg px-2 py-1.5 bg-white"
          />
        </div>

        <div className="bg-white border border-semay-200 rounded-2xl p-4 text-center">
          <div className="text-3xl font-bold text-semay-900">{totalPieces}</div>
          <div className="text-sm text-semay-500 mt-1">
            {isAm ? "የተጠናቀቁ ቁርጥራጮች" : "Pieces finished"} · {periodLabel}
          </div>
        </div>

        <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-semay-100 font-medium">
            {isAm ? "ሪፖርቶች" : "Reports"} · {periodLabel}
          </div>
          {loading ? (
            <p className="p-6 text-center text-semay-500">
              {isAm ? "በመጫን ላይ..." : "Loading..."}
            </p>
          ) : reports.length === 0 ? (
            <div className="p-8 text-center">
              <ClipboardList className="w-10 h-10 text-semay-300 mx-auto mb-2" />
              <p className="text-semay-500 text-sm">
                {isAm ? "ምንም ሪፖርት የለም" : "No reports"}
              </p>
            </div>
          ) : (
            reports.map((r) => (
              <div key={r.id} className="px-4 py-3 border-b border-semay-50">
                <div className="flex justify-between gap-2">
                  <div className="font-medium text-sm">
                    {r.userName || (isAm ? "ሰራተኛ" : "Staff")} · {r.quantity} pcs
                  </div>
                  <div className="text-xs text-semay-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatTime(r.createdAt || r.reportDate)}
                  </div>
                </div>
                <div className="text-xs text-semay-500 mt-0.5">
                  {r.order?.orderNumber || "-"} ·{" "}
                  {r.order?.style?.category
                    ? `${r.order.style.category} / `
                    : ""}
                  {r.order?.style?.name || ""} · {stageLabel(r.stage)}
                </div>
                {r.note && (
                  <div className="text-xs text-amber-800 mt-1 bg-amber-50 rounded-lg px-2 py-1">
                    {isAm ? "ምክንያት / ማስታወሻ" : "Reason / note"}: {r.note}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl p-6 space-y-4 max-h-[92vh] overflow-y-auto">
            <h2 className="text-lg font-semibold">
              {isAm ? "ሪፖርት (እንደ ወረቀት)" : "Report (like paper)"}
            </h2>
            {errorMsg && (
              <div className="text-sm text-danger bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                {errorMsg}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm text-semay-600 mb-1">
                  {isAm ? "ትዕዛዝ" : "Order"} *
                </label>
                <select
                  required
                  value={form.orderId}
                  onChange={(e) => {
                    const ord = orders.find((o) => o.id === e.target.value)
                    setForm({
                      ...form,
                      orderId: e.target.value,
                      stage:
                        ord?.stage && ord.stage !== "PLANNED"
                          ? ord.stage
                          : form.stage,
                    })
                  }}
                  className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                >
                  <option value="">
                    {isAm ? "ትዕዛዝ ምረጥ" : "Select order"}
                  </option>
                  {activeOrders.map((o) => {
                    const left = Math.max(
                      0,
                      Number(o.plannedQty || 0) - Number(o.actualQty || 0)
                    )
                    return (
                      <option key={o.id} value={o.id}>
                        {o.orderNumber} · {o.style?.category || ""}{" "}
                        {o.style?.name} · {o.actualQty}/{o.plannedQty} · left{" "}
                        {left}
                      </option>
                    )
                  })}
                </select>
              </div>

              {selectedOrder && (
                <div className="grid grid-cols-3 gap-2 text-center text-xs bg-semay-50 rounded-xl p-3 border border-semay-100">
                  <div>
                    <div className="text-semay-500">
                      {isAm ? "ታቅዷል" : "Planned"}
                    </div>
                    <div className="text-lg font-bold">{planned}</div>
                  </div>
                  <div>
                    <div className="text-semay-500">
                      {isAm ? "ተጠናቋል" : "Done"}
                    </div>
                    <div className="text-lg font-bold text-emerald-700">
                      {doneBefore}
                    </div>
                  </div>
                  <div>
                    <div className="text-semay-500">
                      {isAm ? "ቀሪ አሁን" : "Left now"}
                    </div>
                    <div className="text-lg font-bold text-amber-600">
                      {leftNow}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm text-semay-600 mb-1">
                  {isAm ? "ዛሬ የተጠናቀቀ" : "Finished today"} *
                </label>
                <input
                  type="number"
                  required
                  min={1}
                  value={form.quantity}
                  onChange={(e) =>
                    setForm({ ...form, quantity: e.target.value })
                  }
                  className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                />
              </div>

              {selectedOrder && (
                <div className="text-sm rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
                  {isAm ? "ከዚህ ሪፖርት በኋላ ቀሪ" : "Left after this report"}:{" "}
                  <b>{leftAfter}</b>
                </div>
              )}

              <div>
                <label className="block text-sm text-semay-600 mb-1">
                  {isAm ? "ደረጃ" : "Stage"} *
                </label>
                <select
                  value={form.stage}
                  onChange={(e) => setForm({ ...form, stage: e.target.value })}
                  className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                >
                  {STAGES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {isAm ? s.am : s.en}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-semay-600 mb-1">
                  {isAm
                    ? "ለምን አልተጠናቀቀም / ችግር"
                    : "Why unfinished / problem"}
                  {leftAfter > 0 ? " *" : ""}
                </label>
                <select
                  value={form.blocker}
                  onChange={(e) =>
                    setForm({ ...form, blocker: e.target.value })
                  }
                  className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                >
                  {BLOCKERS.map((b) => (
                    <option key={b.value || "none"} value={b.value}>
                      {isAm ? b.am : b.en}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-semay-600 mb-1">
                  {isAm ? "ዝርዝር ምክንያት / ማስታወሻ" : "Detail reason / note"}
                </label>
                <input
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                  placeholder={
                    isAm
                      ? "ምሳሌ: ዚፕ የለም፣ 20 ቀርቷል"
                      : "e.g. no zipper, 20 left"
                  }
                />
              </div>

              <label className="flex items-center gap-2 text-sm text-semay-700">
                <input
                  type="checkbox"
                  checked={form.updateOrderStage}
                  onChange={(e) =>
                    setForm({ ...form, updateOrderStage: e.target.checked })
                  }
                />
                {isAm
                  ? "የትዕዛዙን ደረጃ ወደዚህ ቀይር"
                  : "Also move order to this stage"}
              </label>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-3 border border-semay-200 rounded-xl"
                >
                  {isAm ? "ሰርዝ" : "Cancel"}
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 bg-semay-900 text-white rounded-xl disabled:opacity-60"
                >
                  {saving ? "..." : isAm ? "አስቀምጥ" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </GarmentLayout>
  )
}