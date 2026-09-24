import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Camera,
  Wallet,
  Smartphone,
  Building2,
  TrendingUp,
  Printer,
  X,
  Receipt,
  ScanLine,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { request, menuApi } from "../../lib/api"
import { cn } from "../../lib/utils"
import { useAuth } from "../../lib/auth"

type PayOrder = {
  id: string
  tableNumber: string
  total: number
  paymentMethod: string | null
  paymentReceipt: string | null
  paidAt: string | null
  createdAt: string
  status: string
  branchId?: string | null
  branchName?: string | null
  staffName?: string | null
  items?: { name: string; quantity: number; price: number }[]
  receiptCode?: string | null
  receiptToken?: string | null
  receiptPrintedAt?: string | null
  receiptPrintCount?: number
  receiptScannedAt?: string | null
}

type RangeKey = "today" | "7d" | "month" | "year" | "custom"
type ListMode = "all" | "scanned" | "not_scanned"

const METHOD_LABELS: Record<string, string> = {
  cash: "Cash",
  telebirr: "Telebirr",
  cbe: "CBE",
  awash: "Awash",
  dashen: "Dashen",
  boa: "Bank of Abyssinia",
  coop: "Coop",
  other_bank: "Other bank",
  card: "Card",
  unknown: "Unset",
}

const SET_METHODS = [
  "cash",
  "telebirr",
  "cbe",
  "awash",
  "dashen",
  "boa",
  "coop",
  "other_bank",
] as const

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function qrImgUrl(payload: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=8&data=${encodeURIComponent(payload)}`
}

function receiptPublicUrl(code: string) {
  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://semaiy.netlify.app"
  return `${origin}/r/${encodeURIComponent(code)}`
}

function formatDayLabel(iso: string) {
  try {
    const d = new Date(iso + "T12:00:00")
    return d.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  } catch {
    return iso
  }
}

/** Prices treated as VAT-inclusive 15% (common in ET). Change TAX_RATE if needed. */
const TAX_RATE = 0.15

function money(n: number) {
  return Number(n || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function printOrderReceipt(opts: {
  orgName: string
  address?: string
  phone?: string
  city?: string
  tin?: string
  order: PayOrder
  isCopy: boolean
}) {
  const w = window.open("", "_blank", "width=360,height=820")
  if (!w) {
    alert("Allow pop-ups to print receipt")
    return
  }
  const o = opts.order
  const code = (o.receiptCode || o.id.slice(-8)).toUpperCase()
  const publicUrl = receiptPublicUrl(code)
  const qr = qrImgUrl(publicUrl)
  const items = o.items || []

  const total = Number(o.total) || 0
  // VAT inclusive: total = net + tax
  const net = total / (1 + TAX_RATE)
  const tax = total - net

  const lines = items.length
    ? items
        .map((i) => {
          const line = Number(i.price) * i.quantity
          return `<tr>
            <td>${i.quantity}× ${escapeHtml(i.name)}</td>
            <td style="text-align:right">${money(line)}</td>
          </tr>`
        })
        .join("")
    : `<tr><td colspan="2">Order</td></tr>`

  const method = METHOD_LABELS[o.paymentMethod || ""] || o.paymentMethod || "—"
  const isCash = (o.paymentMethod || "").toLowerCase() === "cash"

  const banner = opts.isCopy
    ? `<div class="c banner">*** COPY — NOT FOR SCAN ***</div>`
    : isCash
      ? `<div class="c banner"><b>CASH INVOICE</b></div>`
      : `<div class="c banner"><b>OFFICIAL RECEIPT</b></div>`

  w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Invoice ${code}</title>
<style>
  @page { margin: 4mm; size: 80mm auto; }
  body { font-family: ui-monospace, Consolas, monospace; font-size: 11px; width: 72mm; margin: 0 auto; color: #000; }
  .c { text-align: center; }
  .banner { font-weight: 700; border: 1px solid #000; padding: 4px; margin: 6px 0; }
  .sep { border-top: 1px dashed #000; margin: 6px 0; }
  table { width: 100%; border-collapse: collapse; }
  td { padding: 2px 0; vertical-align: top; }
  .tot td { padding-top: 4px; }
  img.qr { width: 110px; height: 110px; margin: 6px auto; display: block; }
  @media print { button { display: none; } }
</style></head><body>
  <div class="c"><b>${escapeHtml(opts.orgName)}</b></div>
  ${opts.address ? `<div class="c">${escapeHtml(opts.address)}${opts.city ? ", " + escapeHtml(opts.city) : ""}</div>` : ""}
  ${opts.phone ? `<div class="c">Tel: ${escapeHtml(opts.phone)}</div>` : ""}
  ${opts.tin ? `<div class="c">TIN: ${escapeHtml(opts.tin)}</div>` : ""}
  ${banner}
  <div class="sep"></div>
  <div>Invoice / Code: <b>${escapeHtml(code)}</b></div>
  <div>Order: ${escapeHtml(String(o.id).slice(-10))}</div>
  <div>Table: ${escapeHtml(o.tableNumber)}</div>
  <div>Date: ${new Date(o.paidAt || o.createdAt).toLocaleString()}</div>
  ${o.staffName ? `<div>Cashier: ${escapeHtml(o.staffName)}</div>` : ""}
  <div class="sep"></div>
  <table>${lines}</table>
  <div class="sep"></div>
  <table>
    <tr><td>Subtotal (excl. VAT)</td><td style="text-align:right">${money(net)}</td></tr>
    <tr><td>VAT 15%</td><td style="text-align:right">${money(tax)}</td></tr>
    <tr class="tot"><td><b>TOTAL</b></td><td style="text-align:right"><b>${money(total)} ETB</b></td></tr>
  </table>
  <div class="sep"></div>
  <div><b>Payment:</b> ${escapeHtml(String(method))}${isCash ? " · CASH" : ""}</div>
  <div class="sep"></div>
  <div class="c" style="font-size:9px">Prices include VAT 15% · Management receipt</div>
  <div class="c" style="font-size:9px">*** NON-FISCAL — not ERCA device ***</div>
  <img class="qr" src="${qr}" alt="QR"/>
  <div class="c"><b>${escapeHtml(code)}</b></div>
  <div class="c">Thank you · semaiy.netlify.app</div>
  <script>window.onload=function(){setTimeout(function(){window.print()},300)}</script>
</body></html>`)
  w.document.close()
}

export default function Reports() {
  const { organization, user } = useAuth()

  const [biz, setBiz] = useState<{
    name?: string
    phone?: string | null
    address?: string | null
    city?: string | null
    tin?: string | null
  }>({})

  const [data, setData] = useState<{
    orders: PayOrder[]
    byMethod: Record<string, number>
    scannedCount?: number
    notScannedCount?: number
    scannedTotal?: number
    topItemsScanned?: { name: string; qty: number }[]
  } | null>(null)
  const [menuNames, setMenuNames] = useState<string[]>([])
  const [busyId, setBusyId] = useState<string | null>(null)
  const [msg, setMsg] = useState("")
  const [range, setRange] = useState<RangeKey>("today")
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [customFrom, setCustomFrom] = useState("")
  const [customTo, setCustomTo] = useState("")
  const [selectedHour, setSelectedHour] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [branchFilter, setBranchFilter] = useState<string>("all")
  const [methodFilter, setMethodFilter] = useState<string>("all")
  const [listMode, setListMode] = useState<ListMode>("all")
  const [scanCode, setScanCode] = useState("")
  const [scanBusy, setScanBusy] = useState(false)
  const [lastScan, setLastScan] = useState<any>(null)
  /** Collapsed paper report on screen; print always expands */
  const [reportExpanded, setReportExpanded] = useState(false)
  const [loadingReport, setLoadingReport] = useState(false)

  useEffect(() => {
    request<any>("/api/restaurant/settings")
      .then((s) =>
        setBiz({
          name: s.name,
          phone: s.phone ?? null,
          address: s.address ?? null,
          city: s.city ?? null,
          tin: s.tin ?? null,
        })
      )
      .catch(() => {})
  }, [])

  useEffect(() => {
    menuApi
      .list(true)
      .then((list) => {
        const names = (list || [])
          .filter((m: any) => m.available !== false)
          .map((m: any) => String(m.name || "").trim())
          .filter(Boolean)
        setMenuNames(Array.from(new Set(names)))
      })
      .catch(() => setMenuNames([]))
  }, [])

  const load = () => {
    setLoadingReport(true)
    let url = "/api/restaurant/payment-report?"

    if (range === "custom" && customFrom && customTo) {
      url += `from=${encodeURIComponent(customFrom)}&to=${encodeURIComponent(customTo)}`
    } else if (selectedDate) {
      url += `date=${encodeURIComponent(selectedDate)}`
    } else {
      url += `range=${range}`
    }

    return request<{
      orders: PayOrder[]
      byMethod: Record<string, number>
      scannedCount?: number
      notScannedCount?: number
      scannedTotal?: number
      topItemsScanned?: { name: string; qty: number }[]
      topItemsAll?: { name: string; qty: number }[]
    }>(url)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoadingReport(false))
  }

  useEffect(() => {
    // Custom range: only auto-load when both dates set (or use "See report" button)
    if (range === "custom") {
      if (!customFrom || !customTo) return
    }
    load()
    request("/api/restaurant/cleanup-receipts", { method: "POST" }).catch(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range, selectedDate, customFrom, customTo])

  const branches = useMemo(() => {
    const map = new Map<string, string>()
    for (const o of data?.orders || []) {
      const id = o.branchId || "main"
      map.set(id, o.branchName || "Main branch")
    }
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }))
  }, [data])

  const filteredOrders = useMemo(() => {
    let list = data?.orders || []
    if (branchFilter !== "all") {
      list = list.filter((o) => (o.branchId || "main") === branchFilter)
    }
    if (methodFilter !== "all") {
      list = list.filter((o) => (o.paymentMethod || "unknown") === methodFilter)
    }
    if (listMode === "scanned") list = list.filter((o) => !!o.receiptScannedAt)
    if (listMode === "not_scanned") list = list.filter((o) => !o.receiptScannedAt)
    return list
  }, [data, branchFilter, methodFilter, listMode])

  const summary = useMemo(() => {
    const orders = filteredOrders
    const byMethod: Record<string, number> = {}
    for (const o of orders) {
      const m = o.paymentMethod || "unknown"
      byMethod[m] = (byMethod[m] || 0) + Number(o.total || 0)
    }
    const total = Object.values(byMethod).reduce((s, n) => s + Number(n || 0), 0)
    const withPhoto = orders.filter((o) => o.paymentReceipt).length
    const paid = orders.filter((o) => o.paymentMethod && o.paymentMethod !== "unknown").length
    const scanned = orders.filter((o) => o.receiptScannedAt).length
    const notScanned = orders.filter((o) => !o.receiptScannedAt).length
    return {
      total,
      count: orders.length,
      withPhoto,
      paid,
      byMethod,
      cash: Number(byMethod.cash || 0),
      telebirr: Number(byMethod.telebirr || 0),
      banks: Object.entries(byMethod)
        .filter(([k]) => !["cash", "telebirr", "unknown"].includes(k))
        .reduce((s, [, v]) => s + Number(v), 0),
      unknown: Number(byMethod.unknown || 0),
      scanned,
      notScanned,
      scannedTotal: orders
        .filter((o) => o.receiptScannedAt)
        .reduce((s, o) => s + Number(o.total || 0), 0),
    }
  }, [filteredOrders])

  const itemInsights = useMemo(() => {
    const map: Record<string, { name: string; qty: number; revenue: number }> = {}
    for (const o of filteredOrders) {
      for (const it of o.items || []) {
        const name = String(it.name || "").trim() || "Item"
        if (!map[name]) map[name] = { name, qty: 0, revenue: 0 }
        map[name].qty += Number(it.quantity || 0)
        map[name].revenue += Number(it.price || 0) * Number(it.quantity || 0)
      }
    }
    let sold = Object.values(map).sort((a, b) => b.qty - a.qty)

    // Fallback if line items missing but API sent aggregates
    if (!sold.length && (data as any)?.topItemsAll?.length) {
      sold = (data as any).topItemsAll.map((t: any) => ({
        name: t.name,
        qty: t.qty,
        revenue: 0,
      }))
    }
    if (!sold.length && data?.topItemsScanned?.length) {
      sold = data.topItemsScanned.map((t) => ({
        name: t.name,
        qty: t.qty,
        revenue: 0,
      }))
    }

    const best = sold.slice(0, 8)
    const leastSold = [...sold].sort((a, b) => a.qty - b.qty).slice(0, 8)
    const soldNames = new Set(sold.map((s) => s.name.toLowerCase()))
    const neverSold = menuNames
      .filter((n) => !soldNames.has(n.toLowerCase()))
      .slice(0, 12)
      .map((name) => ({ name, qty: 0, revenue: 0 }))
    return { best, leastSold, neverSold, soldCount: sold.length }
  }, [filteredOrders, menuNames, data])

  const hourly = useMemo(() => {
    const buckets = Array.from({ length: 24 }, (_, h) => ({ hour: h, total: 0, count: 0 }))
    for (const o of filteredOrders) {
      const h = new Date(o.createdAt).getHours()
      buckets[h].total += Number(o.total || 0)
      buckets[h].count += 1
    }
    const max = Math.max(1, ...buckets.map((b) => b.total))
    return { buckets, max }
  }, [filteredOrders])

  const hourOrders = useMemo(() => {
    if (selectedHour == null) return []
    return filteredOrders.filter((o) => new Date(o.createdAt).getHours() === selectedHour)
  }, [filteredOrders, selectedHour])

  const setPayment = async (orderId: string, method: string, receipt?: string | null) => {
    setBusyId(orderId)
    setMsg("")
    try {
      const body: Record<string, unknown> = { paymentMethod: method }
      if (receipt) body.paymentReceipt = receipt
      await request(`/api/orders/${orderId}/payment`, {
        method: "PATCH",
        body: JSON.stringify(body),
      })
      setMsg(receipt ? "Payment + photo saved" : `Payment: ${METHOD_LABELS[method] || method}`)
      load()
    } catch (e: any) {
      setMsg(e.message || "Failed")
    } finally {
      setBusyId(null)
    }
  }

  const onPhoto = (orderId: string, method: string, file: File) => {
    if (file.size > 1_200_000) {
      setMsg("Photo max ~1.2MB")
      return
    }
    const reader = new FileReader()
    reader.onload = () => setPayment(orderId, method, String(reader.result || ""))
    reader.readAsDataURL(file)
  }

  const doPrint = async (o: PayOrder) => {
    if (busyId) return
    setBusyId(o.id)
    setMsg("")

    const printOpts = (order: PayOrder, isCopy: boolean) => {
      try {
        printOrderReceipt({
          orgName: biz.name || organization?.name || "Restaurant",
          address: biz.address || undefined,
          phone: biz.phone || undefined,
          city: biz.city || undefined,
          tin: biz.tin || undefined,
          order,
          isCopy,
        })
      } catch (e: any) {
        setMsg(e?.message || "Print window blocked — allow pop-ups for this site")
      }
    }

    // Timeout so UI never stays frozen
    const timeout = window.setTimeout(() => {
      setBusyId(null)
      setMsg("Print request timed out — check API / allow pop-ups")
    }, 12000)

    try {
      const meta = await request<{
        isCopy: boolean
        receiptCode?: string
        receiptToken?: string
        receiptPrintCount?: number
      }>(`/api/restaurant/receipt/print/${o.id}`, { method: "POST", body: "{}" })

      clearTimeout(timeout)
      const orderForPrint: PayOrder = {
        ...o,
        receiptCode: meta.receiptCode || o.receiptCode,
        receiptToken: meta.receiptToken || o.receiptToken,
      }
      printOpts(orderForPrint, !!meta.isCopy)
      setMsg(
        meta.isCopy
          ? "COPY printed — QR locked if already scanned"
          : "Official receipt printed — scan once in Reports"
      )
      load()
    } catch (e: any) {
      clearTimeout(timeout)
      // Still print locally so staff is not stuck
      printOpts(o, (o.receiptPrintCount || 0) > 0)
      setMsg(e?.message || "Printed offline (API failed)")
    } finally {
      clearTimeout(timeout)
      setBusyId(null)
    }
  }

  const doScan = async () => {
    const raw = scanCode.trim()
    if (raw.length < 4) {
      setMsg("Enter receipt code from paper (e.g. RAB12CD)")
      return
    }
    setScanBusy(true)
    setMsg("")
    setLastScan(null)
    try {
      let code = raw.trim()
      try {
        if (code.includes("/r/")) {
          const u = new URL(code.startsWith("http") ? code : `https://x${code}`)
          const parts = u.pathname.split("/").filter(Boolean)
          const i = parts.indexOf("r")
          if (i >= 0 && parts[i + 1]) code = parts[i + 1]
        }
      } catch {
        /* ignore */
      }
      if (code.toUpperCase().startsWith("SMAY|")) {
        const parts = code.split("|")
        code = parts[2] || parts[1] || code
      }
      code = code.replace(/^R-?/i, "R").toUpperCase()

      const res = await request<any>("/api/restaurant/receipt/scan", {
        method: "POST",
        body: JSON.stringify({ code }),
      })
      setLastScan(res.order)
      setMsg(res.message || "Scanned")
      setScanCode("")
      load()
    } catch (e: any) {
      setMsg(e.message || "Scan failed")
    } finally {
      setScanBusy(false)
    }
  }

  const printDayReport = () => {
    window.print()
  }

  const pct = (part: number) =>
    summary.total > 0 ? Math.round((part / summary.total) * 100) : 0

  const rangeLabel =
    range === "today"
      ? "Today"
      : range === "7d"
        ? "Last 7 days"
        : range === "month"
          ? "This month"
          : range === "year"
            ? "This year"
            : range === "custom" && customFrom && customTo
              ? `${formatDayLabel(customFrom)} → ${formatDayLabel(customTo)}`
              : "Custom range"

  const headerLabel = selectedDate
    ? `Report for ${formatDayLabel(selectedDate)}`
    : rangeLabel

  const home =
    user?.role === "WAITER" || user?.role === "STAFF" || user?.role === "KITCHEN"
      ? "/staff-home"
      : "/dashboard"

  return (
    <div className="min-h-svh bg-semay-50">
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #day-report-print, #day-report-print * { visibility: visible !important; }
          #day-report-print {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            padding: 12px !important;
          }
          .print\\:hidden { display: none !important; }
        }
      `}</style>

      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0 z-10 print:hidden">
        <Link to={home} className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm flex-1">Reports & receipts</h1>
        <button
          type="button"
          onClick={printDayReport}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-semay-200"
        >
          <Printer className="w-3.5 h-3.5" />
          {selectedDate ? "Print day" : "Print report"}
        </button>
      </header>

      <div className="max-w-3xl mx-auto p-4 space-y-4 pb-24 print:max-w-none">
        {!biz.phone && !biz.address && (
          <p className="text-xs text-amber-800 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 print:hidden">
            No phone/address on file. Save them under Restaurant Settings so receipts show details.
          </p>
        )}

        <section className="bg-white border border-semay-200 rounded-2xl p-4 shadow-sm space-y-3 print:hidden">
          <div className="flex items-center gap-2">
            <ScanLine className="w-5 h-5 text-semay-800" />
            <div>
         <p className="text-[11px] text-semay-500">
                Phone camera scans the QR on the printed paper. Here type code (e.g. RW20R5)
                or paste full link …/r/CODE. Second scan is blocked.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              value={scanCode}
              onChange={(e) => setScanCode(e.target.value.toUpperCase())}
              placeholder="RAB12CD or paste QR text"
              className="flex-1 px-3 py-2.5 rounded-xl border border-semay-200 text-sm font-mono"
              onKeyDown={(e) => {
                if (e.key === "Enter") doScan()
              }}
            />
            <button
              type="button"
              disabled={scanBusy}
              onClick={doScan}
              className="px-4 py-2.5 rounded-xl bg-semay-900 text-white text-sm font-medium disabled:opacity-50"
            >
              {scanBusy ? "..." : "Scan"}
            </button>
          </div>
          {lastScan && (
            <div className="text-xs bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-emerald-900">
                  {lastScan.receiptCode} · Table {lastScan.tableNumber} ·{" "}
                  {Number(lastScan.total).toLocaleString()} ETB
                </p>
                <p className="text-emerald-700">Locked — cannot scan again</p>
              </div>
            </div>
          )}
        </section>

        <div className="flex flex-wrap items-center gap-2 print:hidden">
          <label className="text-xs text-semay-600 font-medium">Day</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value)
              if (e.target.value) {
                setSelectedHour(null)
                setReportExpanded(false)
              }
            }}
            className="text-xs border border-semay-200 rounded-lg px-2 py-1.5 bg-white"
          />
          {selectedDate && (
            <button
              type="button"
              onClick={() => setSelectedDate("")}
              className="text-xs text-semay-600 underline"
            >
              Clear (use tabs)
            </button>
          )}
          {selectedDate && (
            <span className="text-xs text-semay-500">Report for {formatDayLabel(selectedDate)}</span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 print:hidden">
          {(
            [
              ["today", "Today"],
              ["7d", "7 days"],
              ["month", "Month"],
              ["year", "Year"],
              ["custom", "Custom"],
            ] as [RangeKey, string][]
          ).map(([r, label]) => (
            <button
              key={r}
              type="button"
              onClick={() => {
                setRange(r)
                setSelectedDate("")
                setSelectedHour(null)
                setReportExpanded(false)
              }}
              className={cn(
                "text-xs px-3 py-1.5 rounded-full border font-medium",
                !selectedDate && range === r
                  ? "bg-semay-900 text-white border-semay-900"
                  : "border-semay-200 text-semay-600"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {range === "custom" && (
          <div className="flex flex-wrap gap-2 items-end print:hidden">
            <div>
              <label className="text-[10px] text-semay-400 block mb-1">From</label>
              <input
                type="date"
                value={customFrom}
                onChange={(e) => setCustomFrom(e.target.value)}
                className="text-xs border border-semay-200 rounded-lg px-2 py-1.5 bg-white"
              />
            </div>
            <div>
              <label className="text-[10px] text-semay-400 block mb-1">To</label>
              <input
                type="date"
                value={customTo}
                onChange={(e) => setCustomTo(e.target.value)}
                className="text-xs border border-semay-200 rounded-lg px-2 py-1.5 bg-white"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                if (!customFrom || !customTo) {
                  setMsg("Pick From and To dates (at least a few days)")
                  return
                }
                if (customFrom > customTo) {
                  setMsg("From must be before To")
                  return
                }
                load()
              }}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-emerald-700 text-white"
            >
              See report
            </button>
          </div>
        )}
                {loadingReport && (
          <p className="text-xs text-semay-500 print:hidden">Loading {headerLabel}…</p>
        )}

        <div className="flex flex-wrap gap-2 print:hidden text-xs">
          <select
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
            className="border border-semay-200 rounded-lg px-2 py-1.5 bg-white"
          >
            <option value="all">All branches</option>
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
          <select
            value={methodFilter}
            onChange={(e) => setMethodFilter(e.target.value)}
            className="border border-semay-200 rounded-lg px-2 py-1.5 bg-white"
          >
            <option value="all">All payments</option>
            {Object.keys(METHOD_LABELS).map((k) => (
              <option key={k} value={k}>
                {METHOD_LABELS[k]}
              </option>
            ))}
          </select>
          <select
            value={listMode}
            onChange={(e) => setListMode(e.target.value as ListMode)}
            className="border border-semay-200 rounded-lg px-2 py-1.5 bg-white"
          >
            <option value="all">All orders</option>
            <option value="scanned">Scanned only</option>
            <option value="not_scanned">Not scanned</option>
          </select>
        </div>

        <section className="rounded-2xl overflow-hidden shadow-sm border border-semay-100 print:hidden">
          <div className="bg-gradient-to-br from-semay-900 via-slate-800 to-emerald-900 text-white p-5">
            <p className="text-[11px] uppercase tracking-wider text-white/60">{headerLabel}</p>
            <p className="text-3xl font-semibold mt-1 tabular-nums">
              {summary.total.toLocaleString()}{" "}
              <span className="text-lg font-medium text-white/80">ETB</span>
            </p>
            <p className="text-sm text-white/70 mt-1">
              {summary.count} orders · {summary.paid} paid · scanned {summary.scanned} · not scanned{" "}
              {summary.notScanned}
            </p>
            <p className="text-sm text-emerald-200/90 mt-1 tabular-nums">
              Scanned total: {summary.scannedTotal.toLocaleString()} ETB
            </p>
          </div>
          <div className="bg-white p-4 grid grid-cols-2 gap-3">
            <SummaryTile
              icon={<Wallet className="w-4 h-4 text-emerald-600" />}
              label="Cash"
              amount={summary.cash}
              pct={pct(summary.cash)}
              barClass="bg-emerald-500"
            />
            <SummaryTile
              icon={<Smartphone className="w-4 h-4 text-sky-600" />}
              label="Telebirr"
              amount={summary.telebirr}
              pct={pct(summary.telebirr)}
              barClass="bg-sky-500"
            />
            <SummaryTile
              icon={<Building2 className="w-4 h-4 text-violet-600" />}
              label="Banks / others"
              amount={summary.banks}
              pct={pct(summary.banks)}
              barClass="bg-violet-500"
            />
            <SummaryTile
              icon={<CheckCircle2 className="w-4 h-4 text-emerald-600" />}
              label="Scanned ETB"
              amount={summary.scannedTotal}
              pct={pct(summary.scannedTotal)}
              barClass="bg-emerald-600"
            />
          </div>
        </section>

        {/* Best / least / never sold — always for current period */}
        <section className="bg-white border border-semay-100 rounded-2xl p-4 shadow-sm print:hidden">
          <h2 className="text-sm font-semibold text-semay-900 mb-1">Menu performance · {headerLabel}</h2>
          <p className="text-[11px] text-semay-400 mb-3">
            From all orders in this period (not only scanned)
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-xs font-semibold text-emerald-700 mb-1.5">Best sellers</p>
              {!itemInsights.best.length ? (
                <p className="text-xs text-semay-400">No sales yet</p>
              ) : (
                <ul className="space-y-1">
                  {itemInsights.best.map((t, i) => (
                    <li key={t.name} className="flex justify-between gap-2">
                      <span className="truncate">
                        {i + 1}. {t.name}
                      </span>
                      <span className="tabular-nums font-medium shrink-0">{t.qty}×</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-700 mb-1.5">Least sold</p>
              {!itemInsights.leastSold.length ? (
                <p className="text-xs text-semay-400">—</p>
              ) : (
                <ul className="space-y-1">
                  {itemInsights.leastSold.map((t) => (
                    <li key={t.name} className="flex justify-between gap-2">
                      <span className="truncate">{t.name}</span>
                      <span className="tabular-nums font-medium shrink-0">{t.qty}×</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-600 mb-1.5">On menu · not sold</p>
              {!itemInsights.neverSold.length ? (
                <p className="text-xs text-semay-400">
                  {menuNames.length ? "All active items sold at least once" : "Menu not loaded"}
                </p>
              ) : (
                <ul className="space-y-1">
                  {itemInsights.neverSold.map((t) => (
                    <li key={t.name} className="text-semay-600 truncate">
                      {t.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {summary.notScanned > 0 && (
          <div className="flex gap-2 text-xs text-amber-800 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 print:hidden">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            {summary.notScanned} order(s) not scanned yet — paper missing or not closed.
          </div>
        )}

        {/* Collapsible paper report */}
        <section
          id="day-report-print"
          className="bg-white border border-semay-200 rounded-2xl shadow-sm font-serif overflow-hidden"
        >
          <div className="p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-semay-500">
                  Semaiy · {selectedDate ? "Day report" : "Sales close"}
                </p>
                <h2 className="text-base font-semibold text-semay-900">
                  {biz.name || organization?.name || "Restaurant"}
                </h2>
                <p className="text-xs text-semay-500 mt-0.5">{headerLabel}</p>
                {(biz.address || biz.phone) && (
                  <p className="text-[11px] text-semay-400 mt-0.5">
                    {[biz.address, biz.city].filter(Boolean).join(", ")}
                    {biz.phone ? ` · ${biz.phone}` : ""}
                  </p>
                )}
                {biz.tin ? <p className="text-[11px] text-semay-400">TIN: {biz.tin}</p> : null}
              </div>
              <div className="flex gap-2 print:hidden">
                <button
                  type="button"
                  onClick={() => setReportExpanded((v) => !v)}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg border border-semay-200 text-semay-700 inline-flex items-center gap-1"
                >
                  {reportExpanded ? (
                    <>
                      Hide details <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      Show all orders <ChevronDown className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={printDayReport}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-semay-900 text-white inline-flex items-center gap-1"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print
                </button>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
              <div className="rounded-xl bg-semay-50 border border-semay-100 px-3 py-2">
                <p className="text-[10px] text-semay-500">Sales</p>
                <p className="font-semibold tabular-nums">{summary.total.toLocaleString()} ETB</p>
              </div>
              <div className="rounded-xl bg-semay-50 border border-semay-100 px-3 py-2">
                <p className="text-[10px] text-semay-500">Orders</p>
                <p className="font-semibold tabular-nums">{summary.count}</p>
              </div>
              <div className="rounded-xl bg-semay-50 border border-semay-100 px-3 py-2">
                <p className="text-[10px] text-semay-500">Cash / Telebirr</p>
                <p className="font-semibold tabular-nums text-xs">
                  {summary.cash.toLocaleString()} / {summary.telebirr.toLocaleString()}
                </p>
              </div>
              <div className="rounded-xl bg-semay-50 border border-semay-100 px-3 py-2">
                <p className="text-[10px] text-semay-500">Scanned</p>
                <p className="font-semibold tabular-nums">
                  {summary.scanned}/{summary.count}
                </p>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "border-t border-semay-100 px-4 sm:px-5 pb-5",
              reportExpanded ? "block" : "hidden print:block"
            )}
          >
            <p className="text-[11px] text-semay-400 mt-3 print:block">
              Printed {new Date().toLocaleString()} · Non-fiscal
            </p>

            <table className="w-full text-sm my-3">
              <tbody>
                <tr className="border-b border-semay-100">
                  <td className="py-1.5">Total sales</td>
                  <td className="py-1.5 text-right font-semibold tabular-nums">
                    {summary.total.toLocaleString()} ETB
                  </td>
                </tr>
                <tr className="border-b border-semay-100">
                  <td className="py-1.5">Cash</td>
                  <td className="py-1.5 text-right tabular-nums">
                    {summary.cash.toLocaleString()} ETB
                  </td>
                </tr>
                <tr className="border-b border-semay-100">
                  <td className="py-1.5">Telebirr</td>
                  <td className="py-1.5 text-right tabular-nums">
                    {summary.telebirr.toLocaleString()} ETB
                  </td>
                </tr>
                <tr className="border-b border-semay-100">
                  <td className="py-1.5">Banks / others</td>
                  <td className="py-1.5 text-right tabular-nums">
                    {summary.banks.toLocaleString()} ETB
                  </td>
                </tr>
                <tr>
                  <td className="py-1.5">Scanned / not</td>
                  <td className="py-1.5 text-right tabular-nums">
                    {summary.scanned} · {summary.notScanned}
                  </td>
                </tr>
              </tbody>
            </table>

            {Object.keys(summary.byMethod).length > 0 && (
              <div className="mb-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-semay-500 mb-1">
                  By payment
                </p>
                <ul className="text-sm space-y-0.5">
                  {Object.entries(summary.byMethod)
                    .sort((a, b) => b[1] - a[1])
                    .map(([k, v]) => (
                      <li key={k} className="flex justify-between">
                        <span>{METHOD_LABELS[k] || k}</span>
                        <span className="tabular-nums">{Number(v).toLocaleString()} ETB</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Print + expanded: menu insights */}
            <div className="mb-4 grid sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
                  Best sellers
                </p>
                {!itemInsights.best.length ? (
                  <p className="text-xs text-semay-400">—</p>
                ) : (
                  <ul className="space-y-0.5">
                    {itemInsights.best.map((t, i) => (
                      <li key={t.name} className="flex justify-between">
                        <span>
                          {i + 1}. {t.name}
                        </span>
                        <span className="tabular-nums">{t.qty}×</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-1">
                  Least sold / inactive
                </p>
                {itemInsights.leastSold.length > 0 && (
                  <ul className="space-y-0.5 mb-2">
                    {itemInsights.leastSold.map((t) => (
                      <li key={t.name} className="flex justify-between">
                        <span>{t.name}</span>
                        <span className="tabular-nums">{t.qty}×</span>
                      </li>
                    ))}
                  </ul>
                )}
                {itemInsights.neverSold.length > 0 && (
                  <>
                    <p className="text-[10px] text-semay-500 mb-0.5">Not sold this period</p>
                    <ul className="space-y-0.5 text-xs text-semay-600">
                      {itemInsights.neverSold.map((t) => (
                        <li key={t.name}>{t.name}</li>
                      ))}
                    </ul>
                  </>
                )}
                {!itemInsights.leastSold.length && !itemInsights.neverSold.length && (
                  <p className="text-xs text-semay-400">—</p>
                )}
              </div>
            </div>

            <p className="text-xs font-semibold uppercase tracking-wide text-semay-500 mb-2">
              Orders ({filteredOrders.length})
            </p>
            {!filteredOrders.length ? (
              <p className="text-sm text-semay-400 text-center py-3">No orders</p>
            ) : (
              <div className="space-y-2">
                {filteredOrders.map((o, idx) => (
                  <div
                    key={o.id}
                    className="border border-semay-100 rounded-lg p-2.5 text-sm break-inside-avoid"
                  >
                    <div className="flex justify-between gap-2 font-medium">
                      <span>
                        #{idx + 1} · T{o.tableNumber}
                        {o.receiptCode ? (
                          <span className="font-mono text-[11px] text-semay-500 ml-1">
                            {o.receiptCode}
                          </span>
                        ) : null}
                      </span>
                      <span className="tabular-nums">{Number(o.total).toLocaleString()} ETB</span>
                    </div>
                    <div className="text-[11px] text-semay-500">
                      {new Date(o.createdAt).toLocaleString()} ·{" "}
                      {METHOD_LABELS[o.paymentMethod || ""] || o.paymentMethod || "—"}
                      {o.staffName ? ` · ${o.staffName}` : ""}
                      {o.receiptScannedAt ? " · scanned" : " · not scanned"}
                    </div>
                    {(o.items || []).length > 0 && (
                      <ul className="mt-1.5 text-xs space-y-0.5 border-t border-dashed border-semay-100 pt-1.5">
                        {o.items!.map((it, i) => (
                          <li key={i} className="flex justify-between gap-2">
                            <span>
                              {it.quantity}× {it.name}
                            </span>
                            <span className="tabular-nums">
                              {(Number(it.price) * it.quantity).toLocaleString()}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            <p className="text-[10px] text-center text-semay-400 mt-4">
              Semaiy · ሰማይ · management only · not a fiscal invoice
            </p>
          </div>
        </section>

        {!selectedDate && (range === "today" || range === "7d") && (
          <section className="bg-white border border-semay-100 rounded-2xl p-4 shadow-sm print:hidden">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold">Sales by hour</h2>
              <span className="text-[10px] text-semay-400">Tap a bar</span>
            </div>
            <div className="flex items-end gap-0.5 h-28">
              {hourly.buckets.map((b) => {
                const h = Math.max(4, Math.round((b.total / hourly.max) * 100))
                const active = selectedHour === b.hour
                return (
                  <button
                    key={b.hour}
                    type="button"
                    onClick={() => setSelectedHour(active ? null : b.hour)}
                    className="flex-1 flex flex-col items-center justify-end h-full"
                  >
                    <div
                      className={cn(
                        "w-full rounded-t",
                        active ? "bg-semay-900" : "bg-sky-400/80",
                        b.total === 0 && "bg-semay-100"
                      )}
                      style={{ height: `${b.total === 0 ? 4 : h}%` }}
                    />
                  </button>
                )
              })}
            </div>
            {selectedHour != null && (
              <div className="mt-3 border-t pt-3 space-y-1 text-xs">
                <p className="font-medium">
                  {selectedHour}:00 · {hourOrders.length} orders ·{" "}
                  {hourOrders.reduce((s, o) => s + Number(o.total), 0).toLocaleString()} ETB
                </p>
              </div>
            )}
          </section>
        )}

        <div className="flex items-center gap-2 text-xs text-semay-500 print:hidden">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>
            Compact report by default · Show all orders for full list · Print includes best/least
            sellers.
          </span>
        </div>
        {msg && (
          <p className="text-sm bg-white border rounded-xl px-3 py-2 print:hidden">{msg}</p>
        )}

        <div className="bg-white border border-semay-100 rounded-2xl divide-y shadow-sm print:hidden">
          {!filteredOrders.length ? (
            <p className="p-8 text-sm text-semay-400 text-center">No orders in this filter</p>
          ) : (
            filteredOrders.map((o) => (
              <div key={o.id} className="p-4 space-y-2">
                <div className="flex justify-between text-sm gap-2">
                  <span className="font-medium">
                    Table {o.tableNumber}
                    <span className="text-semay-400 font-normal"> · {o.status}</span>
                    {o.receiptCode && (
                      <span className="ml-1 font-mono text-[11px] text-semay-600">
                        {o.receiptCode}
                      </span>
                    )}
                  </span>
                  <span className="font-semibold tabular-nums">{Number(o.total)} ETB</span>
                </div>
                <div className="text-xs text-semay-500 flex flex-wrap gap-x-2">
                  <span>{new Date(o.createdAt).toLocaleString()}</span>
                  <span>
                    · {METHOD_LABELS[o.paymentMethod || ""] || o.paymentMethod || "no method"}
                  </span>
                  {o.staffName && <span>· {o.staffName}</span>}
                  {o.receiptScannedAt ? (
                    <span className="text-emerald-600">
                      · scanned {new Date(o.receiptScannedAt).toLocaleTimeString()}
                    </span>
                  ) : (
                    <span className="text-amber-600">· not scanned</span>
                  )}
                  {(o.receiptPrintCount || 0) > 0 && <span>· prints {o.receiptPrintCount}</span>}
                </div>

                {o.paymentReceipt && (
                  <button type="button" onClick={() => setLightbox(o.paymentReceipt!)}>
                    <img
                      src={o.paymentReceipt}
                      alt="Receipt"
                      className="h-24 rounded-lg border object-cover"
                    />
                  </button>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {SET_METHODS.map((m) => (
                    <button
                      key={m}
                      type="button"
                      disabled={busyId === o.id}
                      onClick={() => setPayment(o.id, m)}
                      className={cn(
                        "text-[10px] px-2 py-1 rounded-lg border font-medium",
                        o.paymentMethod === m
                          ? "border-semay-900 bg-semay-900 text-white"
                          : "border-semay-200 text-semay-600"
                      )}
                    >
                      {METHOD_LABELS[m] || m}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  <button
                    type="button"
                    disabled={busyId === o.id}
                    onClick={() => doPrint(o)}
                    className="text-[11px] px-2.5 py-1.5 rounded-lg border border-semay-900 bg-semay-900 text-white inline-flex items-center gap-1 font-medium"
                  >
                    <Receipt className="w-3 h-3" />
                    {(o.receiptPrintCount || 0) > 0 ? "Print COPY" : "Official receipt"}
                  </button>
                  <label className="text-[11px] px-2.5 py-1.5 rounded-lg border border-dashed border-semay-200 cursor-pointer inline-flex items-center gap-1 text-semay-600">
                    <Camera className="w-3 h-3" />
                    Payment photo
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      className="hidden"
                      disabled={busyId === o.id}
                      onChange={(e) => {
                        const f = e.target.files?.[0]
                        if (!f) return
                        const method =
                          o.paymentMethod && o.paymentMethod !== "unknown"
                            ? o.paymentMethod
                            : "cash"
                        onPhoto(o.id, method, f)
                      }}
                    />
                  </label>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 print:hidden"
          onClick={() => setLightbox(null)}
        >
          <button type="button" className="absolute top-4 right-4 text-white p-2">
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox}
            alt="Large"
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

function SummaryTile({
  icon,
  label,
  amount,
  pct,
  barClass,
}: {
  icon: React.ReactNode
  label: string
  amount: number
  pct: number
  barClass: string
}) {
  return (
    <div className="rounded-xl border border-semay-100 bg-semay-50/50 p-3">
      <div className="flex items-center gap-1.5 text-[11px] font-medium text-semay-500">
        {icon}
        {label}
      </div>
      <div className="text-lg font-semibold text-semay-900 mt-1 tabular-nums">
        {amount.toLocaleString()} <span className="text-xs text-semay-400">ETB</span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-semay-100 overflow-hidden">
        <div className={cn("h-full rounded-full", barClass)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}