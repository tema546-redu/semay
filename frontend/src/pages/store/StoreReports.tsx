import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { storeApi } from "../../lib/api"

type RangeKey = "today" | "7d" | "month" | "year" | "custom"

function startOfDay(d: Date) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

function endOfDay(d: Date) {
  const x = new Date(d)
  x.setHours(23, 59, 59, 999)
  return x
}

function rangeBounds(key: RangeKey, customFrom: string, customTo: string) {
  const now = new Date()
  if (key === "today") {
    return { from: startOfDay(now), to: endOfDay(now) }
  }
  if (key === "7d") {
    const from = startOfDay(now)
    from.setDate(from.getDate() - 6)
    return { from, to: endOfDay(now) }
  }
  if (key === "month") {
    const from = startOfDay(new Date(now.getFullYear(), now.getMonth(), 1))
    return { from, to: endOfDay(now) }
  }
  if (key === "year") {
    const from = startOfDay(new Date(now.getFullYear(), 0, 1))
    return { from, to: endOfDay(now) }
  }
  // custom
  const from = customFrom ? startOfDay(new Date(customFrom)) : startOfDay(now)
  const to = customTo ? endOfDay(new Date(customTo)) : endOfDay(now)
  return { from, to }
}

export default function StoreReports() {
  const [rows, setRows] = useState<any[]>([])
  const [items, setItems] = useState<any[]>([])
  const [itemId, setItemId] = useState("")
  const [type, setType] = useState("")
  const [range, setRange] = useState<RangeKey>("today")
  const [customFrom, setCustomFrom] = useState("")
  const [customTo, setCustomTo] = useState("")
  const [detailMode, setDetailMode] = useState<"all" | "IN" | "OUT">("all")
  const [loading, setLoading] = useState(false)

  const load = async () => {
    setLoading(true)
    try {
      const { from, to } = rangeBounds(range, customFrom, customTo)
      const params: Record<string, string> = {
        from: from.toISOString(),
        to: to.toISOString(),
      }
      if (itemId) params.itemId = itemId
      if (type) params.type = type
      const data = await storeApi.movements(params)
      setRows(Array.isArray(data) ? data : [])
    } catch (e) {
      console.error(e)
      setRows([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    storeApi.items().then(setItems).catch(console.error)
  }, [])

  useEffect(() => {
    if (range !== "custom") load()
  }, [itemId, type, range])

  const totals = useMemo(() => {
    let inQty = 0
    let inAmt = 0
    let outQty = 0
    let outAmt = 0
    let inCount = 0
    let outCount = 0
    for (const m of rows) {
      const q = Number(m.quantity) || 0
      const a = Number(m.totalAmount) || 0
      if (m.type === "IN") {
        inQty += q
        inAmt += a
        inCount++
      } else if (m.type === "OUT") {
        outQty += q
        outAmt += a
        outCount++
      }
    }
    return { inQty, inAmt, outQty, outAmt, inCount, outCount }
  }, [rows])

  const visible = useMemo(() => {
    if (detailMode === "all") return rows
    return rows.filter((m) => m.type === detailMode)
  }, [rows, detailMode])

  const printPdf = () => window.print()

  return (
    <div className="min-h-svh bg-stone-50 max-w-4xl mx-auto p-4 pb-20">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 print:hidden">
        <h1 className="font-semibold text-lg">Store report</h1>
        <div className="flex gap-2">
          <Link to="/store" className="text-sm text-stone-500">
            ← Home
          </Link>
          <button
            type="button"
            onClick={printPdf}
            className="text-sm bg-stone-900 text-white px-3 py-1.5 rounded-xl"
          >
            Print / PDF
          </button>
        </div>
      </div>

      {/* Range chips */}
      <div className="flex flex-wrap gap-2 mb-3 print:hidden">
        {(
          [
            ["today", "Today"],
            ["7d", "7 days"],
            ["month", "This month"],
            ["year", "This year"],
            ["custom", "Custom"],
          ] as [RangeKey, string][]
        ).map(([k, label]) => (
          <button
            key={k}
            type="button"
            onClick={() => setRange(k)}
            className={`text-xs px-3 py-1.5 rounded-full border ${
              range === k
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {range === "custom" && (
        <div className="flex flex-wrap gap-2 mb-3 items-end print:hidden">
          <div>
            <label className="text-[10px] text-stone-400 block mb-1">From</label>
            <input
              type="date"
              className="border rounded-xl px-3 py-2 text-sm"
              value={customFrom}
              onChange={(e) => setCustomFrom(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[10px] text-stone-400 block mb-1">To</label>
            <input
              type="date"
              className="border rounded-xl px-3 py-2 text-sm"
              value={customTo}
              onChange={(e) => setCustomTo(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={load}
            className="text-sm bg-emerald-700 text-white px-4 py-2 rounded-xl"
          >
            See report
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4 print:hidden">
        <select
          className="border rounded-xl px-3 py-2 text-sm bg-white"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        >
          <option value="">All items</option>
          {items.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name}
            </option>
          ))}
        </select>
        <select
          className="border rounded-xl px-3 py-2 text-sm bg-white"
          value={type}
          onChange={(e) => {
            setType(e.target.value)
            setDetailMode("all")
          }}
        >
          <option value="">IN + OUT</option>
          <option value="IN">IN only</option>
          <option value="OUT">OUT only</option>
        </select>
      </div>

      {/* Summary cards — click to filter detail */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <button
          type="button"
          onClick={() => setDetailMode(detailMode === "IN" ? "all" : "IN")}
          className={`text-left bg-white border rounded-2xl p-4 ${
            detailMode === "IN" ? "ring-2 ring-emerald-600" : ""
          }`}
        >
          <div className="text-[10px] uppercase text-emerald-700 font-semibold">
            Total IN · {totals.inCount} moves
          </div>
          <div className="text-lg font-semibold tabular-nums mt-1">
            {totals.inQty.toLocaleString()} qty
          </div>
          <div className="text-sm text-stone-600 tabular-nums">
            {totals.inAmt.toLocaleString()} ETB
          </div>
          <div className="text-[11px] text-stone-400 mt-1">
            Tap to {detailMode === "IN" ? "show all" : "see IN details"}
          </div>
        </button>
        <button
          type="button"
          onClick={() => setDetailMode(detailMode === "OUT" ? "all" : "OUT")}
          className={`text-left bg-white border rounded-2xl p-4 ${
            detailMode === "OUT" ? "ring-2 ring-amber-600" : ""
          }`}
        >
          <div className="text-[10px] uppercase text-amber-700 font-semibold">
            Total OUT · {totals.outCount} moves
          </div>
          <div className="text-lg font-semibold tabular-nums mt-1">
            {totals.outQty.toLocaleString()} qty
          </div>
          <div className="text-sm text-stone-600 tabular-nums">
            {totals.outAmt.toLocaleString()} ETB
          </div>
          <div className="text-[11px] text-stone-400 mt-1">
            Tap to {detailMode === "OUT" ? "show all" : "see OUT details by hour"}
          </div>
        </button>
      </div>

      <div className="bg-white border rounded-2xl overflow-x-auto print:border-0">
        <div className="p-3 border-b print:block">
          <div className="font-semibold">Semay Store · Movement report</div>
          <div className="text-xs text-stone-500">
            {loading
              ? "Loading…"
              : `${new Date().toLocaleString()} · ${visible.length} rows · ${range}`}
          </div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[11px] text-stone-400 border-b">
              <th className="p-2">Time</th>
              <th className="p-2">Type</th>
              <th className="p-2">Item</th>
              <th className="p-2">Qty</th>
              <th className="p-2">From</th>
              <th className="p-2">To</th>
              <th className="p-2">By</th>
              <th className="p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((m) => (
              <tr key={m.id} className="border-b border-stone-50">
                <td className="p-2 whitespace-nowrap text-xs">
                  {new Date(m.createdAt).toLocaleString()}
                </td>
                <td className="p-2">{m.type}</td>
                <td className="p-2">{m.stockItem?.name}</td>
                <td className="p-2 tabular-nums">
                  {m.quantity} {m.stockItem?.unit}
                </td>
                <td className="p-2">{m.fromWhere || "—"}</td>
                <td className="p-2">{m.toWhere || "—"}</td>
                <td className="p-2">{m.user?.name || "—"}</td>
                <td className="p-2 tabular-nums">
                  {Number(m.totalAmount || 0).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
          {visible.length > 0 && (
            <tfoot>
              <tr className="border-t font-semibold text-sm">
                <td className="p-2" colSpan={3}>
                  Total ({detailMode === "all" ? "IN+OUT" : detailMode})
                </td>
                <td className="p-2 tabular-nums">
                  {detailMode === "IN"
                    ? totals.inQty
                    : detailMode === "OUT"
                      ? totals.outQty
                      : totals.inQty + totals.outQty}
                </td>
                <td className="p-2" colSpan={3} />
                <td className="p-2 tabular-nums">
                  {(detailMode === "IN"
                    ? totals.inAmt
                    : detailMode === "OUT"
                      ? totals.outAmt
                      : totals.inAmt + totals.outAmt
                  ).toLocaleString()}{" "}
                  ETB
                </td>
              </tr>
            </tfoot>
          )}
        </table>
        {!visible.length && !loading && (
          <p className="p-4 text-sm text-stone-400">No movements in this range</p>
        )}
      </div>
    </div>
  )
}