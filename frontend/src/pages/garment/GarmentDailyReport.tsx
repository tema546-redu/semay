import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import GarmentLayout from "../../components/GarmentLayout"
import { Plus, ClipboardList, AlertTriangle, Clock } from "lucide-react"

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

function parseSizePlan(note?: string | null): Record<string, number> {
  if (!note) return {}
  const text = String(note)
    .replace(/^Sizes:\s*/i, "")
    .replace(/^.*\|\s*Sizes:\s*/i, "")
  const out: Record<string, number> = {}
  text.split(/[,;/|]+/).forEach((part) => {
    const p = part.trim()
    const m = p.match(/^([A-Za-z0-9]+)\s*=\s*(\d+)/)
    if (m) out[m[1].toUpperCase()] = Number(m[2]) || 0
  })
  return out
}

function sizesForLine(line: any, order: any): string[] {
  const plan = parseSizePlan(line?.sizeNote || order?.notes)
  const fromPlan = Object.keys(plan)
  if (fromPlan.length > 0) return fromPlan

  const fromVariants: string[] = (line?.style?.variants || order?.style?.variants || [])
    .map((v: any) => String(v.size || "").trim().toUpperCase())
    .filter((s: string) => Boolean(s))
  if (fromVariants.length > 0) return [...new Set(fromVariants)]
  return []
}

function sizeQtysFromNote(note?: string | null): Record<string, string> {
  const sizePart =
    (note || "").match(/Sizes:\s*(.+)$/i)?.[1] || note || ""
  const plan = parseSizePlan(sizePart)
  const out: Record<string, string> = {}
  Object.keys(plan).forEach((k) => {
    out[k] = String(plan[k])
  })
  return out
}

function emptyForm() {
  return {
    orderId: "",
    lineId: "",
    stage: "SEWING",
    quantity: "",
    note: "",
    blocker: "",
    updateOrderStage: true,
    markComplete: false,
    sizeQtys: {} as Record<string, string>,
  }
}

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
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState(emptyForm())

  const today = new Date().toISOString().slice(0, 10)

  const load = async () => {
    try {
      const params = selectedDate ? { date: selectedDate } : { range }
      const [reps, ords] = await Promise.all([
        garmentApi.dailyReports(params),
        garmentApi.orders(),
      ])
      setReports(Array.isArray(reps) ? reps : [])
      setOrders(Array.isArray(ords) ? ords : [])
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

  const activeOrders = orders.filter((o) => {
    if (o.stage === "CANCELLED") return false
    const left = Number(o.plannedQty || 0) - Number(o.actualQty || 0)
    if (left > 0) return true
    return !["COMPLETED"].includes(String(o.stage))
  })
  const delayedOrders = orders.filter((o) => o.status === "DELAYED")

  const selectedOrder = orders.find((o) => o.id === form.orderId)

  const lines: any[] = useMemo(() => {
    if (!selectedOrder) return []
    if (Array.isArray(selectedOrder.lines) && selectedOrder.lines.length) {
      return selectedOrder.lines
    }
    return [
      {
        id: "",
        styleId: selectedOrder.styleId,
        style: selectedOrder.style,
        plannedQty: selectedOrder.plannedQty,
        actualQty: selectedOrder.actualQty,
        sizeNote: selectedOrder.notes,
      },
    ]
  }, [selectedOrder])

  const selectedLine =
    lines.find((l) => l.id && l.id === form.lineId) ||
    (lines.length === 1 ? lines[0] : null)

  const sizeList = useMemo(
    () =>
      selectedLine || selectedOrder
        ? sizesForLine(selectedLine || {}, selectedOrder)
        : [],
    [selectedLine, selectedOrder]
  )

  const sizeTotal = sizeList.reduce(
    (s, sz) => s + (Number(form.sizeQtys[sz]) || 0),
    0
  )
  const finishToday =
    sizeTotal > 0 ? sizeTotal : Number(form.quantity) || 0

  // When editing, Done already includes this report — avoid double-count in "left after"
  const editingReport = editingId
    ? reports.find((r) => r.id === editingId)
    : null
  const editingQty = editingReport ? Number(editingReport.quantity || 0) : 0

  const planned = Number(
    selectedLine?.plannedQty ?? selectedOrder?.plannedQty ?? 0
  )
  const doneBeforeRaw = Number(
    selectedLine?.actualQty ?? selectedOrder?.actualQty ?? 0
  )
  const doneBefore = Math.max(0, doneBeforeRaw - (editingId ? editingQty : 0))
  const leftNow = Math.max(0, planned - doneBefore)
  const leftAfter = Math.max(0, planned - doneBefore - finishToday)

  const orderPlanned = Number(selectedOrder?.plannedQty || 0)
  const orderDoneRaw = Number(selectedOrder?.actualQty || 0)
  const orderDoneBefore = Math.max(
    0,
    orderDoneRaw - (editingId ? editingQty : 0)
  )
  const orderLeftAfter = selectedOrder
    ? Math.max(0, orderPlanned - orderDoneBefore - finishToday)
    : 0

  const onPickOrder = (orderId: string) => {
    const ord = orders.find((o) => o.id === orderId)
    const ls = ord?.lines?.length ? ord.lines : []
    const firstLine = ls[0]
    const sizes = sizesForLine(firstLine || {}, ord)
    const empty: Record<string, string> = {}
    sizes.forEach((sz) => {
      empty[sz] = ""
    })
    setForm({
      ...form,
      orderId,
      lineId: firstLine?.id || "",
      stage:
        ord?.stage && ord.stage !== "PLANNED" ? ord.stage : form.stage,
      quantity: "",
      sizeQtys: empty,
      markComplete: false,
    })
  }

  const onPickLine = (lineId: string) => {
    const line = lines.find((l) => l.id === lineId)
    const sizes = sizesForLine(line || {}, selectedOrder)
    const empty: Record<string, string> = {}
    sizes.forEach((sz) => {
      empty[sz] = ""
    })
    setForm({
      ...form,
      lineId,
      quantity: "",
      sizeQtys: empty,
      markComplete: false,
    })
  }

  const openCreate = () => {
    setErrorMsg("")
    setEditingId(null)
    setForm(emptyForm())
    setShowForm(true)
  }

  const openEdit = (r: any) => {
    const sizePart =
      (r.note || "").match(/Sizes:\s*(.+)$/i)?.[1] || ""
    const qtys = sizeQtysFromNote(sizePart || r.note)
    const noteOnly = (r.note || "")
      .replace(/\s*\|?\s*Sizes:\s*.+$/i, "")
      .replace(/\s*·\s*Left after report:.*$/i, "")
      .replace(/\s*·\s*ቀሪ ከሪፖርት በኋላ:.*$/i, "")
      .trim()

    setEditingId(r.id)
    setErrorMsg("")
    setForm({
      orderId: r.orderId || r.order?.id || "",
      lineId: r.lineId || "",
      stage: r.stage || "SEWING",
      quantity: String(r.quantity || ""),
      note: noteOnly,
      blocker: "",
      updateOrderStage: false,
      markComplete: false,
      sizeQtys: qtys,
    })
    setShowForm(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setErrorMsg("")

    if (!form.orderId) {
      setErrorMsg(isAm ? "ትዕዛዝ ይምረጡ" : "Select an order")
      setSaving(false)
      return
    }
    if (lines.length > 1 && !form.lineId) {
      setErrorMsg(isAm ? "ዓይነት / መስመር ይምረጡ" : "Select style / line")
      setSaving(false)
      return
    }
    if (finishToday <= 0) {
      setErrorMsg(
        isAm
          ? "ቢያንስ አንድ መጠን ብዛት ያስገቡ"
          : "Enter quantity for at least one size"
      )
      setSaving(false)
      return
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
    if (form.markComplete && orderLeftAfter > 0) {
      setErrorMsg(
        isAm
          ? "ሙሉ ለማጠናቀቅ ቀሪ 0 መሆን አለበት"
          : "To mark fully complete, whole order left must be 0"
      )
      setSaving(false)
      return
    }

    const blockerLabel =
      BLOCKERS.find((b) => b.value === form.blocker)?.[isAm ? "am" : "en"] ||
      ""
    const sizeParts = sizeList
      .map((sz) => {
        const q = Number(form.sizeQtys[sz]) || 0
        return q > 0 ? `${sz}=${q}` : null
      })
      .filter(Boolean) as string[]
    const sizeNote = sizeParts.join(", ")

    const noteParts = [
      form.blocker && form.blocker !== "OTHER" ? blockerLabel : "",
      form.note?.trim() || "",
      leftAfter > 0
        ? isAm
          ? `ቀሪ ከሪፖርት በኋላ: ${leftAfter}`
          : `Left after report: ${leftAfter}`
        : "",
    ].filter(Boolean)

    try {
      let stageToSend = form.stage
      let moveStage = form.updateOrderStage
      if (moveStage && stageToSend === "COMPLETED" && orderLeftAfter > 0) {
        moveStage = false
        stageToSend = selectedOrder?.stage || form.stage
      }

      const payload = {
        orderId: form.orderId,
        lineId: form.lineId || undefined,
        stage: stageToSend,
        quantity: finishToday,
        note: noteParts.join(" · ") || undefined,
        sizeNote: sizeNote || undefined,
        reportDate: today,
        updateOrderStage: moveStage,
        markComplete: !!(form.markComplete && orderLeftAfter === 0),
      }

      if (editingId) {
        await garmentApi.updateDailyReport(editingId, {
          quantity: payload.quantity,
          note: payload.note,
          stage: payload.stage,
          sizeNote: payload.sizeNote,
          updateOrderStage: payload.updateOrderStage,
          markComplete: payload.markComplete,
        })
      } else {
        await garmentApi.addDailyReport(payload)
      }

      setShowForm(false)
      setEditingId(null)
      setForm(emptyForm())
      await load()
    } catch (err: any) {
      console.error(err)
      setErrorMsg(err?.message || (isAm ? "አልተሳካም" : "Failed to save"))
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm(isAm ? "ሪፖርት ይሰረዝ?" : "Delete this report?")) return
    try {
      await garmentApi.deleteDailyReport(id)
      await load()
    } catch (e: any) {
      alert(e?.message || (isAm ? "መሰረዝ አልተሳካም" : "Delete failed"))
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
                ? "ትዕዛዝ · ዓይነት · መጠን · ቀሪ"
                : "Order · style · size · left"}
            </p>
          </div>
          <button
            type="button"
            onClick={openCreate}
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
                      <span className="font-medium">
                        {o.customerName?.trim() || o.orderNumber}
                      </span>
                      <span className="text-semay-500">
                        {" "}
                        ·{" "}
                        {o.lines?.length > 1
                          ? `${o.lines.length} styles`
                          : o.style?.name || ""}
                      </span>
                    </div>
                    <div className="text-right text-xs">
                      <div>
                        {isAm ? "ተጠናቋል" : "Done"} {o.actualQty}/
                        {o.plannedQty}
                      </div>
                      <div
                        className={
                          left > 0
                            ? "text-amber-600 font-medium"
                            : "text-emerald-600"
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
                <div className="flex justify-between gap-2 items-start">
                  <div className="min-w-0">
                    <div className="font-medium text-sm">
                      {r.userName || (isAm ? "ሰራተኛ" : "Staff")} ·{" "}
                      {r.quantity} pcs
                    </div>
                    <div className="text-xs text-semay-500 mt-0.5">
                      {r.order?.customerName?.trim() ||
                        r.order?.orderNumber ||
                        "-"}{" "}
                      · {stageLabel(r.stage)}
                    </div>
                    {r.note && (
                      <div className="text-xs text-amber-800 mt-1 bg-amber-50 rounded-lg px-2 py-1">
                        {r.note}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <div className="text-xs text-semay-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatTime(r.createdAt || r.reportDate)}
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        className="text-xs font-medium text-semay-800 underline"
                        onClick={() => openEdit(r)}
                      >
                        {isAm ? "አርትዕ" : "Edit"}
                      </button>
                      <button
                        type="button"
                        className="text-xs font-medium text-red-600 underline"
                        onClick={() => handleDelete(r.id)}
                      >
                        {isAm ? "ሰርዝ" : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl p-6 space-y-4 max-h-[92vh] overflow-y-auto">
            <h2 className="text-lg font-semibold">
              {editingId
                ? isAm
                  ? "ሪፖርት አርትዕ"
                  : "Edit report"
                : isAm
                  ? "ሪፖርት (እንደ ወረቀት)"
                  : "Report (like paper)"}
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
                  onChange={(e) => onPickOrder(e.target.value)}
                  disabled={!!editingId}
                  className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm disabled:bg-semay-50"
                >
                  <option value="">
                    {isAm ? "ትዕዛዝ ምረጥ" : "Select order"}
                  </option>
                  {(editingId
                    ? orders.filter(
                        (o) =>
                          o.id === form.orderId ||
                          activeOrders.some((a) => a.id === o.id)
                      )
                    : activeOrders
                  ).map((o) => {
                    const left = Math.max(
                      0,
                      Number(o.plannedQty || 0) - Number(o.actualQty || 0)
                    )
                    return (
                      <option key={o.id} value={o.id}>
                        {(o.customerName?.trim() || o.orderNumber) +
                          (o.lines?.length > 1
                            ? ` · ${o.lines.length} styles`
                            : ` · ${o.style?.name || ""}`) +
                          ` · ${o.actualQty}/${o.plannedQty} · left ${left}`}
                      </option>
                    )
                  })}
                </select>
              </div>

              {selectedOrder && lines.length > 1 && (
                <div>
                  <label className="block text-sm text-semay-600 mb-1">
                    {isAm ? "ዓይነት / መስመር" : "Style / line"} *
                  </label>
                  <select
                    required
                    value={form.lineId}
                    onChange={(e) => onPickLine(e.target.value)}
                    disabled={!!editingId}
                    className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm disabled:bg-semay-50"
                  >
                    <option value="">
                      {isAm ? "ዓይነት ምረጥ" : "Select style"}
                    </option>
                    {lines.map((l) => {
                      const lp = Number(l.plannedQty || 0)
                      const la = Number(l.actualQty || 0)
                      return (
                        <option key={l.id} value={l.id}>
                          {(l.style?.name || "Style") +
                            ` · ${la}/${lp} · left ${Math.max(0, lp - la)}`}
                        </option>
                      )
                    })}
                  </select>
                </div>
              )}

              {selectedLine && (
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

              {selectedOrder && (
                <div>
                  <label className="block text-sm text-semay-600 mb-2">
                    {isAm
                      ? "የታዘዙ መጠኖች (ዛሬ የተጠናቀቀ)"
                      : "Ordered sizes (finished today)"}{" "}
                    *
                  </label>
                  {sizeList.length === 0 ? (
                    <p className="text-sm text-amber-700 bg-amber-50 rounded-xl px-3 py-2">
                      {isAm
                        ? "በዚህ ትዕዛዝ ላይ መጠን አልተመዘገበም — በምርት ላይ መጠን ያስገቡ"
                        : "No sizes on this order — add sizes when creating the order"}
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {sizeList.map((sz) => {
                        const plan = parseSizePlan(
                          selectedLine?.sizeNote || selectedOrder?.notes
                        )
                        const plannedSz = plan[sz] || 0
                        return (
                          <div
                            key={sz}
                            className="border border-semay-200 rounded-xl p-2"
                          >
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-semibold">{sz}</span>
                              {plannedSz > 0 && (
                                <span className="text-semay-500">
                                  {isAm ? "ታዘዘ" : "Ordered"} {plannedSz}
                                </span>
                              )}
                            </div>
                            <input
                              type="number"
                              min={0}
                              value={form.sizeQtys[sz] || ""}
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  sizeQtys: {
                                    ...form.sizeQtys,
                                    [sz]: e.target.value,
                                  },
                                })
                              }
                              className="w-full px-2 py-2 border border-semay-200 rounded-lg text-sm"
                              placeholder="0"
                            />
                          </div>
                        )
                      })}
                    </div>
                  )}
                  <p className="text-xs text-semay-500 mt-2">
                    {isAm ? "ድምር ዛሬ" : "Total today"}: <b>{finishToday}</b>
                  </p>
                  {sizeList.length > 0 && leftNow > 0 && !editingId && (
                    <button
                      type="button"
                      className="mt-2 text-xs font-medium text-semay-800 underline"
                      onClick={() => {
                        const plan = parseSizePlan(
                          selectedLine?.sizeNote || selectedOrder?.notes
                        )
                        const next: Record<string, string> = {}
                        sizeList.forEach((sz) => {
                          next[sz] = String(plan[sz] || 0)
                        })
                        setForm({ ...form, sizeQtys: next })
                      }}
                    >
                      {isAm
                        ? "ሁሉንም የታዘዙ መጠኖች ሙላ (ሙሉ)"
                        : "Fill all ordered sizes (full plan)"}
                    </button>
                  )}
                </div>
              )}

              {selectedOrder && (
                <div className="text-sm rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
                  {isAm
                    ? "ከዚህ ሪፖርት በኋላ ቀሪ (መስመር)"
                    : "Left after (this line)"}
                  : <b>{leftAfter}</b>
                </div>
              )}

              <div>
                <label className="block text-sm text-semay-600 mb-1">
                  {isAm ? "ደረጃ" : "Stage"} *
                </label>
                <select
                  value={form.stage}
                  onChange={(e) =>
                    setForm({ ...form, stage: e.target.value })
                  }
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
                  onChange={(e) =>
                    setForm({ ...form, note: e.target.value })
                  }
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

              <label className="flex items-center gap-2 text-sm text-semay-700">
                <input
                  type="checkbox"
                  checked={form.markComplete}
                  disabled={orderLeftAfter > 0 && finishToday > 0}
                  onChange={(e) =>
                    setForm({ ...form, markComplete: e.target.checked })
                  }
                />
                {isAm
                  ? "ሙሉ ትዕዛዝ ተጠናቋል (ቀሪ 0 ከሆነ)"
                  : "Mark order fully complete (only if left becomes 0)"}
              </label>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setEditingId(null)
                  }}
                  className="flex-1 py-3 border border-semay-200 rounded-xl"
                >
                  {isAm ? "ሰርዝ" : "Cancel"}
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 bg-semay-900 text-white rounded-xl disabled:opacity-60"
                >
                  {saving
                    ? "..."
                    : editingId
                      ? isAm
                        ? "አሻሽል"
                        : "Update"
                      : isAm
                        ? "አስቀምጥ"
                        : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </GarmentLayout>
  )
}