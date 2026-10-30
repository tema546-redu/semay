import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import { useAuth } from "../../lib/auth"
import GarmentLayout from "../../components/GarmentLayout"
import {
  Package,
  Scissors,
  Shirt,
  Users,
  AlertTriangle,
  Activity,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

function timeAgo(iso: string | Date | undefined, isAm: boolean): string {
  if (!iso) return ""
  const t = new Date(iso).getTime()
  if (Number.isNaN(t)) return ""
  const sec = Math.max(0, Math.floor((Date.now() - t) / 1000))
  if (sec < 60) return isAm ? "አሁን" : "just now"
  const min = Math.floor(sec / 60)
  if (min < 60) return isAm ? `${min} ደቂቃ` : `${min}m ago`
  const hr = Math.floor(min / 60)
  if (hr < 24) return isAm ? `${hr} ሰዓት` : `${hr}h ago`
  const d = Math.floor(hr / 24)
  return isAm ? `${d} ቀን` : `${d}d ago`
}

function stageLabel(stage: string, isAm: boolean) {
  const map: Record<string, { en: string; am: string }> = {
    PLANNED: { en: "Planned", am: "ታቅዷል" },
    CUTTING: { en: "Cutting", am: "መቁረጥ" },
    SEWING: { en: "Sewing", am: "መስፋት" },
    QUALITY: { en: "Quality", am: "ጥራት" },
    FINISHING: { en: "Finishing", am: "ማጠናቀቅ" },
    PACKING: { en: "Packing", am: "ማሸግ" },
    COMPLETED: { en: "Completed", am: "ተጠናቋል" },
  }
  const m = map[String(stage || "").toUpperCase()]
  if (!m) return stage || "—"
  return isAm ? m.am : m.en
}

function displayStage(o: any, isAm: boolean) {
  const planned = Number(o.plannedQty || 0)
  const actual = Number(o.actualQty || 0)
  const left = Math.max(0, planned - actual)
  if (left > 0) {
    if (actual > 0 || String(o.stage) === "COMPLETED") {
      return isAm ? "በከፊል" : "Partial"
    }
    return stageLabel(o.stage, isAm)
  }
  if (String(o.stage) === "COMPLETED" || (planned > 0 && actual >= planned)) {
    return stageLabel("COMPLETED", isAm)
  }
  return stageLabel(o.stage, isAm)
}

function orderTitle(o: any) {
  const name = String(o.customerName || "").trim()
  return name || o.orderNumber || "—"
}

function orderSubtitle(o: any, isAm?: boolean) {
  const name = String(o.customerName || "").trim()
  const lines = Array.isArray(o.lines) ? o.lines : []

  if (lines.length > 1) {
    const base = isAm ? `${lines.length} ዓይነቶች` : `${lines.length} styles`
    return name ? `${base} · ${o.orderNumber}` : base
  }

  const styleName = lines[0]?.style?.name || o.style?.name || "—"
  const category = lines[0]?.style?.category || o.style?.category || ""
  const base = [category, styleName].filter(Boolean).join(" · ")
  return name ? `${base} · ${o.orderNumber}` : base
}

export default function GarmentDashboard() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { user, organization } = useAuth()

  const [data, setData] = useState<any>(null)
  const [orders, setOrders] = useState<any[]>([])
  const [materials, setMaterials] = useState<any[]>([])
  const [reports, setReports] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [completingId, setCompletingId] = useState<string | null>(null)

  const [attentionOpen, setAttentionOpen] = useState(false)
  const [trackersOpen, setTrackersOpen] = useState(false)

  const todayStr = new Date().toISOString().slice(0, 10)

  const load = () => {
    setLoading(true)
    Promise.all([
      garmentApi.dashboard().catch(() => null),
      garmentApi.orders().catch(() => []),
      garmentApi.materials().catch(() => []),
      garmentApi.dailyReports({ date: todayStr }).catch(() => []),
    ])
      .then(([dash, ords, mats, reps]) => {
        setData(dash)
        setOrders(Array.isArray(ords) ? ords : [])
        setMaterials(Array.isArray(mats) ? mats : [])
        setReports(Array.isArray(reps) ? reps : [])
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const activeTrackers = useMemo(
    () =>
      orders.filter((o) => {
        if (String(o.stage) === "CANCELLED") return false
        const left = Math.max(
          0,
          Number(o.plannedQty || 0) - Number(o.actualQty || 0)
        )
        if (String(o.stage) === "COMPLETED" && left <= 0) return false
        return true
      }),
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

  /** Not started: active, pieces left, zero done */
  const notStartedOrders = useMemo(
    () =>
      activeTrackers.filter((o) => {
        const planned = Number(o.plannedQty || 0)
        const actual = Number(o.actualQty || 0)
        const left = Math.max(0, planned - actual)
        return planned > 0 && actual === 0 && left > 0
      }),
    [activeTrackers]
  )

  const lowMaterials = useMemo(
    () =>
      materials.filter((m) => {
        const s = Number(m.currentStock || 0)
        const min = Number(m.minLevel || 0)
        return min > 0 && s <= min
      }),
    [materials]
  )

  const delayedOrders = useMemo(
    () =>
      orders.filter(
        (o) =>
          String(o.status).toUpperCase() === "DELAYED" ||
          String(o.stage).toUpperCase() === "DELAYED"
      ),
    [orders]
  )

  const pulseChips = useMemo(() => {
    const chips: {
      key: string
      tone: "green" | "amber" | "red"
      text: string
      to?: string
    }[] = []

    const sorted = [...reports].sort(
      (a, b) =>
        new Date(b.createdAt || b.reportDate || 0).getTime() -
        new Date(a.createdAt || a.reportDate || 0).getTime()
    )

    for (const r of sorted.slice(0, 4)) {
      const name = r.userName || r.user?.name || (isAm ? "ሰራተኛ" : "Staff")
      const qty = Number(r.quantity || 0)
      const st = stageLabel(r.stage || "", isAm)
      const ago = timeAgo(r.createdAt || r.reportDate, isAm)
      chips.push({
        key: `r-${r.id}`,
        tone: "green",
        text: `${name} · +${qty} ${st}${ago ? ` · ${ago}` : ""}`,
        to: r.orderId ? `/garment/orders/${r.orderId}` : "/garment/daily",
      })
    }

    for (const o of withLeft.slice(0, 2)) {
      const left = Math.max(
        0,
        Number(o.plannedQty || 0) - Number(o.actualQty || 0)
      )
      chips.push({
        key: `l-${o.id}`,
        tone: "amber",
        text: `${orderTitle(o)} · ${isAm ? "ቀሪ" : "left"} ${left}`,
        to: `/garment/orders/${o.id}`,
      })
    }

    for (const m of lowMaterials.slice(0, 2)) {
      chips.push({
        key: `m-${m.id}`,
        tone: "red",
        text: `${m.name} · ${isAm ? "ዝቅተኛ" : "low"} (${m.currentStock} ${m.unit || ""})`,
        to: "/garment/inventory",
      })
    }

    return chips.slice(0, 6)
  }, [reports, withLeft, lowMaterials, isAm])

  /** Only delayed + not-started + low stock (no “partial with no report today”) */
  const attentionItems = useMemo(() => {
    const items: {
      key: string
      tone: "red" | "amber" | "orange"
      title: string
      detail: string
      to: string
      action: string
    }[] = []

    for (const o of delayedOrders) {
      items.push({
        key: `d-${o.id}`,
        tone: "red",
        title: orderTitle(o),
        detail: isAm ? "ትዕዛዝ ዘግይቷል" : "Order is delayed",
        to: `/garment/orders/${o.id}`,
        action: isAm ? "ክፈት" : "Open",
      })
    }

    for (const o of notStartedOrders) {
      if (delayedOrders.some((d) => d.id === o.id)) continue
      const left = Math.max(
        0,
        Number(o.plannedQty || 0) - Number(o.actualQty || 0)
      )
      items.push({
        key: `ns-${o.id}`,
        tone: "amber",
        title: orderTitle(o),
        detail: isAm
          ? `ገና አልተጀመረም · ቀሪ ${left}`
          : `Not started · left ${left}`,
        to: `/garment/orders/${o.id}`,
        action: isAm ? "ክፈት" : "Open",
      })
    }

    for (const m of lowMaterials) {
      items.push({
        key: `ls-${m.id}`,
        tone: "orange",
        title: m.name,
        detail: isAm
          ? `ክምችት ${m.currentStock} ${m.unit || ""} (ዝቅተኛ ${m.minLevel})`
          : `Stock ${m.currentStock} ${m.unit || ""} (min ${m.minLevel})`,
        to: "/garment/inventory",
        action: isAm ? "ክፈት" : "Open",
      })
    }

    return items
  }, [delayedOrders, notStartedOrders, lowMaterials, isAm])



  const progress = useMemo(() => {
    const list = orders.filter((o) => String(o.stage) !== "CANCELLED")
    const planned = list.reduce((s, o) => s + Number(o.plannedQty || 0), 0)
    const actual = list.reduce((s, o) => s + Number(o.actualQty || 0), 0)
    const remaining = Math.max(0, planned - actual)
    const percent =
      planned > 0 ? Math.min(100, Math.round((actual / planned) * 100)) : 0
    return { planned, actual, remaining, percent }
  }, [orders])

  const isReadyToClose = (o: any) => {
    const planned = Number(o.plannedQty || 0)
    const actual = Number(o.actualQty || 0)
    const left = Math.max(0, planned - actual)
    return left === 0 && planned > 0
  }

  const markProductionDone = async (orderId: string) => {
    setCompletingId(orderId)
    try {
      await garmentApi.updateStage(orderId, { stage: "COMPLETED" })
      await load()
    } catch (e: any) {
      console.error(e)
      alert(
        e?.message || (isAm ? "ማጠናቀቅ አልተሳካም" : "Could not mark as done")
      )
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

  const lowStockCount = data?.lowStock ?? lowMaterials.length
  const storeMaterials = materials.slice(0, 8)
  const pcsToday = reports.reduce((s, r) => s + Number(r.quantity || 0), 0)

  if (loading) {
    return (
      <GarmentLayout>
        <div className="min-h-[50vh] flex items-center justify-center text-semay-500">
          {isAm ? "በመጫን ላይ..." : "Loading..."}
        </div>
      </GarmentLayout>
    )
  }

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

        {/* Live pulse */}
        <div className="bg-white border border-semay-200 rounded-2xl p-4">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-semay-700" />
              <h2 className="text-sm font-semibold text-semay-900">
                {isAm ? "ቀጥታ እንቅስቃሴ" : "Live pulse"}
              </h2>
            </div>
            <Link
              to="/garment/daily"
              className="text-xs text-sky-600 font-medium"
            >
              {isAm ? "ሁሉም" : "View all"} →
            </Link>
          </div>

          {pulseChips.length === 0 ? (
            <p className="text-sm text-semay-500 py-2">
              {isAm
                ? "ዛሬ ምንም ሪፖርት የለም — ሰራተኛ ሲጨምር እዚህ ይታያል"
                : "No reports yet today — activity will show here"}
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {pulseChips.map((c) => (
                <Link
                  key={c.key}
                  to={c.to || "/garment/daily"}
                  className={`text-xs px-3 py-1.5 rounded-full border font-medium ${
                    c.tone === "green"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                      : c.tone === "amber"
                        ? "bg-amber-50 border-amber-200 text-amber-900"
                        : "bg-red-50 border-red-200 text-red-800"
                  }`}
                >
                  {c.text}
                </Link>
              ))}
            </div>
          )}

          {pcsToday > 0 && (
            <p className="text-xs text-semay-500 mt-3">
              {isAm ? "ዛሬ ሪፖርት" : "Reported today"}:{" "}
              <span className="font-semibold text-semay-800">
                {pcsToday} {isAm ? "ቁራጭ" : "pcs"}
              </span>
            </p>
          )}
        </div>

        {/* Orders KPIs — not "Today" */}
        <div className="bg-white border border-semay-200 rounded-2xl p-4">
          <div className="text-sm font-semibold text-semay-800 mb-3">
            {isAm ? "ትዕዛዞች" : "Orders"}
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
                {data?.delayed ?? delayedOrders.length}
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

              {/* Needs attention */}
        {attentionItems.length > 0 && (
          <div className="bg-white border border-semay-200 rounded-2xl p-4">
            <button
              type="button"
              onClick={() => setAttentionOpen((v) => !v)}
              className="w-full flex items-center justify-between gap-2 text-left"
            >
              <div className="flex items-center gap-2 min-w-0">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <h2 className="text-sm font-semibold text-semay-900">
                  {isAm ? "ትኩረት ይፈልጋል" : "Needs attention"}
                </h2>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700">
                  {attentionItems.length} {isAm ? "ችግር" : "urgent"}
                </span>
              </div>
              {attentionOpen ? (
                <ChevronUp className="w-4 h-4 text-semay-500 shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-semay-500 shrink-0" />
              )}
            </button>

            {attentionOpen && (
              <ul className="space-y-2 mt-3">
                {attentionItems.map((item) => (
                  <li
                    key={item.key}
                    className={`flex flex-wrap items-center justify-between gap-2 rounded-xl border px-3 py-2.5 ${
                      item.tone === "red"
                        ? "border-red-100 bg-red-50/50"
                        : item.tone === "amber"
                          ? "border-amber-100 bg-amber-50/40"
                          : "border-orange-100 bg-orange-50/40"
                    }`}
                  >
                    <div className="min-w-0">
                      <div
                        className={`text-sm font-semibold ${
                          item.tone === "red"
                            ? "text-red-800"
                            : item.tone === "amber"
                              ? "text-amber-900"
                              : "text-orange-900"
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className="text-xs text-semay-600 mt-0.5">
                        {item.detail}
                      </div>
                    </div>
                    <Link
                      to={item.to}
                      onClick={(e) => e.stopPropagation()}
                      className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg bg-semay-900 text-white"
                    >
                      {item.action}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Production trackers */}
        <div className="bg-white border border-semay-200 rounded-2xl p-4">
          <div className="flex items-center justify-between gap-2 mb-1">
            <button
              type="button"
              onClick={() => setTrackersOpen((v) => !v)}
              className="flex items-center gap-2 text-left min-w-0"
            >
              <h2 className="font-semibold text-semay-900">
                {isAm ? "የምርት መከታተያ" : "Production trackers"}
              </h2>
              <span className="text-xs text-semay-400">
                ({activeTrackers.length})
              </span>
              {trackersOpen ? (
                <ChevronUp className="w-4 h-4 text-semay-500 shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-semay-500 shrink-0" />
              )}
            </button>
            <Link
              to="/garment/orders"
              className="text-sm text-sky-600 font-medium shrink-0"
            >
              {isAm ? "ሁሉንም" : "Open all"} →
            </Link>
          </div>

          {!trackersOpen && activeTrackers.length > 0 && (
            <p className="text-xs text-semay-400 mt-1">
              {isAm ? "ለማስፋት ይጫኑ" : "Tap to expand active orders"}
            </p>
          )}

          {trackersOpen && (
            <>
              {activeTrackers.length === 0 ? (
                <p className="text-sm text-semay-500 py-6 text-center">
                  {isAm
                    ? "ምንም ንቁ ትዕዛዝ የለም — አዲስ ትዕዛዝ ይፍጠሩ"
                    : "No active orders — create a new order to start a tracker"}
                </p>
              ) : (
                <div className="space-y-3 mt-3">
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
                    const lastRep = [...reports]
                      .filter((r) => r.orderId === o.id)
                      .sort(
                        (a, b) =>
                          new Date(b.createdAt || 0).getTime() -
                          new Date(a.createdAt || 0).getTime()
                      )[0]

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
                              {orderTitle(o)}
                            </div>
                            <div className="text-sm text-semay-600 mt-0.5">
                              {orderSubtitle(o, isAm)}
                            </div>
                            <div className="text-xs text-semay-500 mt-1">
                              {isAm ? "ደረጃ" : "Stage"}: {displayStage(o, isAm)}
                              {lastRep && (
                                <span className="text-semay-400">
                                  {" "}
                                  ·{" "}
                                  {timeAgo(
                                    lastRep.createdAt || lastRep.reportDate,
                                    isAm
                                  )}
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
                              className="text-xs px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold disabled:opacity-60"
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
            </>
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
              to="/garment/store"
              className="text-sm text-sky-600 font-medium"
            >
              {isAm ? "ስቶር ክፈት" : "Open store"} →
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