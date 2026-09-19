import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus, Package, CalendarDays, Printer } from "lucide-react"
import { stockApi } from "../../lib/api"
import { cn } from "../../lib/utils"

type Mode = "receive" | "issue" | "count" | null
type Tab = "items" | "report"
type StockLocation = "BAR" | "KITCHEN" | "STORE"

const LOCATION_LABEL: Record<StockLocation, string> = {
  BAR: "Bar",
  KITCHEN: "Kitchen",
  STORE: "Store",
}

function todayISO() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}

function escapeHtml(s: string) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function printStockReport(opts: {
  title: string
  report: any
  printedAt?: string
}) {
  const w = window.open("", "_blank", "width=800,height=900")
  if (!w) {
    alert("Allow pop-ups to print stock report")
    return
  }

  const r = opts.report
  const bought = r.bought || []
  const issued = r.issued || []
  const counted = r.counted || []
  const summary = r.summary || {}

  const money = (n: number) =>
    Number(n || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  const boughtRows = bought.length
    ? bought
        .map(
          (m: any) => `<tr>
        <td>${escapeHtml(m.itemName)}</td>
        <td class="r">+${m.quantity} ${escapeHtml(m.unit)}</td>
        <td>${m.invoiceNo ? escapeHtml(m.invoiceNo) : "—"}</td>
        <td class="r">${m.lineValue != null ? money(m.lineValue) : "—"}</td>
        <td>${new Date(m.createdAt).toLocaleString()}</td>
      </tr>`
        )
        .join("")
    : `<tr><td colspan="5" class="c">No purchases</td></tr>`

  const issuedRows = issued.length
    ? issued
        .map(
          (m: any) => `<tr>
        <td>${escapeHtml(m.itemName)}</td>
        <td class="r">−${m.quantity} ${escapeHtml(m.unit)}</td>
        <td>${m.note ? escapeHtml(m.note) : "—"}</td>
        <td>${new Date(m.createdAt).toLocaleString()}</td>
      </tr>`
        )
        .join("")
    : `<tr><td colspan="4" class="c">No issues</td></tr>`

  const countRows = counted.length
    ? counted
        .map(
          (m: any) => `<tr>
        <td>${escapeHtml(m.itemName)}</td>
        <td class="r">→ ${m.quantity} ${escapeHtml(m.unit)}</td>
        <td class="r">${
          m.difference != null && m.difference !== 0
            ? (m.difference > 0 ? "+" : "") + m.difference
            : "0"
        }</td>
        <td>${new Date(m.createdAt).toLocaleString()}</td>
      </tr>`
        )
        .join("")
    : `<tr><td colspan="4" class="c">No counts</td></tr>`

  w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"/>
<title>Stock ${escapeHtml(opts.title)}</title>
<style>
  @page { margin: 12mm; }
  body { font-family: system-ui, sans-serif; font-size: 12px; color: #111; max-width: 800px; margin: 0 auto; padding: 16px; }
  h1 { font-size: 18px; margin: 0 0 4px; }
  .sub { color: #555; margin-bottom: 12px; }
  .box { display: flex; gap: 12px; margin: 12px 0; flex-wrap: wrap; }
  .box div { border: 1px solid #ccc; border-radius: 8px; padding: 8px 12px; min-width: 100px; }
  .box b { display: block; font-size: 16px; }
  table { width: 100%; border-collapse: collapse; margin: 10px 0 18px; }
  th, td { border: 1px solid #ddd; padding: 6px 8px; text-align: left; }
  th { background: #f3f3f3; font-size: 11px; }
  .r { text-align: right; }
  .c { text-align: center; color: #888; }
  h2 { font-size: 13px; margin: 16px 0 6px; text-transform: uppercase; letter-spacing: 0.04em; color: #333; }
  .foot { margin-top: 24px; font-size: 10px; color: #888; text-align: center; }
  @media print { button { display: none; } }
</style></head><body>
  <h1>Stock report</h1>
  <div class="sub">${escapeHtml(opts.title)} · Printed ${escapeHtml(
    opts.printedAt || new Date().toLocaleString()
  )}</div>
  <div class="box">
    <div><span>Bought (IN)</span><b>${summary.receiveCount ?? 0}</b></div>
    <div><span>Issued (OUT)</span><b>${summary.issueCount ?? 0}</b></div>
    <div><span>Counts</span><b>${summary.countCount ?? 0}</b></div>
    <div><span>Purchase value</span><b>${
      summary.boughtValue != null ? money(summary.boughtValue) + " ETB" : "—"
    }</b></div>
  </div>
  <h2>Purchases / received</h2>
  <table>
    <thead><tr>
      <th>Item</th><th class="r">Qty</th><th>Invoice</th><th class="r">Value ETB</th><th>When</th>
    </tr></thead>
    <tbody>${boughtRows}</tbody>
  </table>
  <h2>Issued (kitchen / use)</h2>
  <table>
    <thead><tr>
      <th>Item</th><th class="r">Qty</th><th>Note</th><th>When</th>
    </tr></thead>
    <tbody>${issuedRows}</tbody>
  </table>
  <h2>Physical counts</h2>
  <table>
    <thead><tr>
      <th>Item</th><th class="r">Counted</th><th class="r">Difference</th><th>When</th>
    </tr></thead>
    <tbody>${countRows}</tbody>
  </table>
  <div class="foot">Semaiy · Stock · Non-fiscal management report</div>
  <script>window.onload=function(){setTimeout(function(){window.print()},300)}</script>
</body></html>`)
  w.document.close()
}

export default function Stock() {
  const [tab, setTab] = useState<Tab>("items")
  const [location, setLocation] = useState<StockLocation>("STORE")
  const [list, setList] = useState<any[]>([])
  const [busy, setBusy] = useState(false)

  const [name, setName] = useState("")
  const [unit, setUnit] = useState("kg")
  const [quantity, setQuantity] = useState("")
  const [lowAt, setLowAt] = useState("")
  const [unitCost, setUnitCost] = useState("")
  const [note, setNote] = useState("")
  const [search, setSearch] = useState("")

  const [editId, setEditId] = useState<string | null>(null)
  const [editName, setEditName] = useState("")
  const [editQty, setEditQty] = useState("")
  const [editLowAt, setEditLowAt] = useState("")
  const [editUnitCost, setEditUnitCost] = useState("")
  const [editNote, setEditNote] = useState("")
  const [editUnit, setEditUnit] = useState("kg")
  const [moveId, setMoveId] = useState<string | null>(null)

  const [activeId, setActiveId] = useState<string | null>(null)
  const [mode, setMode] = useState<Mode>(null)
  const [amount, setAmount] = useState("")
  const [invoiceNo, setInvoiceNo] = useState("")
  const [moveNote, setMoveNote] = useState("")
  const [unitCostOnReceive, setUnitCostOnReceive] = useState("")
  const [history, setHistory] = useState<any[] | null>(null)
  const [historyId, setHistoryId] = useState<string | null>(null)

  const [reportDate, setReportDate] = useState(todayISO())
  const [reportRange, setReportRange] = useState<
    "today" | "7d" | "month" | "date"
  >("date")
  const [report, setReport] = useState<any>(null)
  const [reportLoading, setReportLoading] = useState(false)

  const load = () =>
    stockApi.list({ location }).then(setList).catch(console.error)

  const loadReport = () => {
    setReportLoading(true)
    const params =
      reportRange === "date"
        ? { date: reportDate, location }
        : { range: reportRange as "today" | "7d" | "month", location }
    stockApi
      .report(params)
      .then(setReport)
      .catch(() => {
        setReport(null)
        alert("Could not load stock report (is API updated?)")
      })
      .finally(() => setReportLoading(false))
  }

  useEffect(() => {
    load()
  }, [location])

  useEffect(() => {
    if (tab === "report") loadReport()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, reportDate, reportRange, location])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || quantity === "") return
    setBusy(true)
    try {
      await stockApi.create({
        name: name.trim(),
        unit,
        quantity: Number(quantity),
        lowAt: lowAt === "" ? null : Number(lowAt),
        unitCost: unitCost === "" ? null : Number(unitCost),
        note: note || undefined,
        location,
      })
      setName("")
      setQuantity("")
      setLowAt("")
      setUnitCost("")
      setNote("")
      load()
    } catch {
      alert("Failed to add stock")
    } finally {
      setBusy(false)
    }
  }

  const openAction = (id: string, m: Mode) => {
    setActiveId(id)
    setMode(m)
    setAmount("")
    setInvoiceNo("")
    setMoveNote("")
    setUnitCostOnReceive("")
  }

  const closeAction = () => {
    setActiveId(null)
    setMode(null)
    setUnitCostOnReceive("")
  }

  const submitAction = async () => {
    if (!activeId || !mode) return
    const n = Number(amount)
    if (mode !== "count" && (!n || n <= 0)) return
    if (mode === "count" && (amount === "" || n < 0)) return

    setBusy(true)
    try {
      if (mode === "receive") {
        await stockApi.receive(activeId, {
          amount: n,
          invoiceNo: invoiceNo || undefined,
          note: moveNote || undefined,
          unitCost:
            unitCostOnReceive === "" ? undefined : Number(unitCostOnReceive),
        })
      } else if (mode === "issue") {
        await stockApi.issue(activeId, {
          amount: n,
          note: moveNote || undefined,
        })
      } else if (mode === "count") {
        const res = await stockApi.count(activeId, {
          counted: n,
          note: moveNote || undefined,
        })
        if (res.difference != null && res.difference !== 0) {
          alert(
            `Count saved. Difference: ${res.difference > 0 ? "+" : ""}${res.difference} (was ${res.previousQuantity})`
          )
        }
      }
      closeAction()
      load()
      if (tab === "report") loadReport()
    } catch (e: any) {
      alert(e?.message || e?.error || "Failed")
    } finally {
      setBusy(false)
    }
  }

  const showHistory = async (id: string) => {
    if (historyId === id) {
      setHistoryId(null)
      setHistory(null)
      return
    }
    try {
      const rows = await stockApi.movements(id)
      setHistoryId(id)
      setHistory(rows)
    } catch {
      alert("Could not load history")
    }
  }

  const remove = async (id: string) => {
    if (!confirm("Remove this stock item?")) return
    await stockApi.remove(id)
    load()
  }

  const lowCount = list.filter((x) => x.isLow).length
  const storeValue = list.reduce(
    (s, x) => s + (x.value != null ? Number(x.value) : 0),
    0
  )

  const filtered = list.filter((x) => {
    if (!search.trim()) return true
    return String(x.name)
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  })

  const openEdit = (x: any) => {
    setEditId(x.id)
    setEditName(x.name)
    setEditQty(String(x.quantity))
    setEditLowAt(x.lowAt != null ? String(x.lowAt) : "")
    setEditUnitCost(x.unitCost != null ? String(x.unitCost) : "")
    setEditNote(x.note || "")
    setEditUnit(x.unit || "kg")
    setActiveId(null)
    setMode(null)
    setMoveId(null)
  }

  const saveEdit = async () => {
    if (!editId || !editName.trim()) return
    setBusy(true)
    try {
      await stockApi.update(editId, {
        name: editName.trim(),
        unit: editUnit,
        quantity: Number(editQty) || 0,
        lowAt: editLowAt === "" ? null : Number(editLowAt),
        unitCost: editUnitCost === "" ? null : Number(editUnitCost),
        note: editNote || null,
      })
      setEditId(null)
      load()
    } catch (e: any) {
      alert(e?.message || "Update failed")
    } finally {
      setBusy(false)
    }
  }

  const moveLocation = async (
    id: string,
    to: "BAR" | "KITCHEN" | "STORE"
  ) => {
    setBusy(true)
    try {
      await stockApi.update(id, { location: to })
      setMoveId(null)
      load()
    } catch (e: any) {
      alert(e?.message || "Move failed")
    } finally {
      setBusy(false)
    }
  }

  const reportPeriodLabel =
    reportRange === "date"
      ? `Day ${reportDate}`
      : reportRange === "today"
        ? "Today"
        : reportRange === "7d"
          ? "Last 7 days"
          : "This month"

  const doPrintReport = () => {
    if (!report) {
      alert("Load the report first (pick date / range)")
      return
    }
    printStockReport({
      title: reportPeriodLabel,
      report,
      printedAt: new Date().toLocaleString(),
    })
  }

  return (
    <div className="min-h-svh bg-slate-50 pb-20">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link
          to="/dashboard"
          className="p-2 -ml-2 rounded-lg hover:bg-slate-100"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm flex-1">
          Stock · {LOCATION_LABEL[location]}
        </h1>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        <div className="flex gap-2 bg-white border rounded-xl p-1">
          {(["BAR", "KITCHEN", "STORE"] as const).map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => setLocation(loc)}
              className={cn(
                "flex-1 text-xs font-medium py-2 rounded-lg",
                location === loc ? "bg-slate-900 text-white" : "text-slate-600"
              )}
            >
              {LOCATION_LABEL[loc]}
            </button>
          ))}
        </div>

        <div className="flex gap-2 bg-white border rounded-xl p-1">
          <button
            type="button"
            onClick={() => setTab("items")}
            className={cn(
              "flex-1 text-xs font-medium py-2 rounded-lg",
              tab === "items" ? "bg-slate-900 text-white" : "text-slate-600"
            )}
          >
            Items
          </button>
          <button
            type="button"
            onClick={() => setTab("report")}
            className={cn(
              "flex-1 text-xs font-medium py-2 rounded-lg inline-flex items-center justify-center gap-1",
              tab === "report" ? "bg-slate-900 text-white" : "text-slate-600"
            )}
          >
            <CalendarDays className="w-3.5 h-3.5" />
            Report · Bought
          </button>
        </div>

        {tab === "report" ? (
          <div className="space-y-4">
            <div className="bg-white border rounded-2xl p-4 space-y-3">
              <p className="text-sm font-medium text-slate-800">
                When was stock bought?
              </p>
              <p className="text-xs text-slate-500">
                Pick a day (calendar) or last 7 days / month. Receive =
                purchases.
              </p>

              <div className="flex flex-wrap gap-2">
                {(
                  [
                    ["date", "Calendar"],
                    ["today", "Today"],
                    ["7d", "7 days"],
                    ["month", "Month"],
                  ] as const
                ).map(([k, label]) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setReportRange(k)}
                    className={cn(
                      "text-xs px-3 py-1.5 rounded-full border font-medium",
                      reportRange === k
                        ? "bg-slate-900 text-white border-slate-900"
                        : "border-slate-200 text-slate-600"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {reportRange === "date" && (
                <input
                  type="date"
                  value={reportDate}
                  onChange={(e) => setReportDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border text-sm"
                />
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={loadReport}
                  className="flex-1 text-sm border py-2 rounded-xl"
                >
                  Refresh report
                </button>
                <button
                  type="button"
                  onClick={doPrintReport}
                  disabled={!report || reportLoading}
                  className="flex-1 text-sm bg-slate-900 text-white py-2 rounded-xl inline-flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print
                </button>
              </div>
            </div>

            {reportLoading ? (
              <p className="text-sm text-slate-400 text-center">Loading…</p>
            ) : !report ? (
              <p className="text-sm text-slate-400 text-center">No report data</p>
            ) : (
              <>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white border rounded-2xl p-3 text-center">
                    <div className="text-[10px] text-slate-500">Bought (IN)</div>
                    <div className="text-lg font-semibold text-emerald-700">
                      {report.summary?.receiveCount ?? 0}
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-3 text-center">
                    <div className="text-[10px] text-slate-500">
                      Issued (OUT)
                    </div>
                    <div className="text-lg font-semibold text-orange-700">
                      {report.summary?.issueCount ?? 0}
                    </div>
                  </div>
                  <div className="bg-white border rounded-2xl p-3 text-center">
                    <div className="text-[10px] text-slate-500">Counts</div>
                    <div className="text-lg font-semibold text-sky-700">
                      {report.summary?.countCount ?? 0}
                    </div>
                  </div>
                </div>

                {(report.summary?.boughtValue ?? 0) > 0 && (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 text-sm">
                    <span className="text-emerald-800">
                      Purchase value (from unit cost):{" "}
                    </span>
                    <span className="font-semibold tabular-nums">
                      {Number(report.summary.boughtValue).toLocaleString()} ETB
                    </span>
                  </div>
                )}

                <div className="bg-white border rounded-2xl overflow-hidden">
                  <div className="px-4 py-2 border-b bg-slate-50 text-xs font-semibold text-slate-600">
                    Purchases / received
                  </div>
                  {!report.bought?.length ? (
                    <p className="p-4 text-sm text-slate-400 text-center">
                      Nothing bought in this period. Use + Receive on items.
                    </p>
                  ) : (
                    <ul className="divide-y">
                      {report.bought.map((m: any) => (
                        <li key={m.id} className="px-4 py-3 text-sm">
                          <div className="flex justify-between gap-2">
                            <span className="font-medium">{m.itemName}</span>
                            <span className="text-emerald-700 font-semibold tabular-nums">
                              +{m.quantity} {m.unit}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5 flex flex-wrap gap-x-2">
                            <span>
                              {new Date(m.createdAt).toLocaleString()}
                            </span>
                            {m.invoiceNo && <span>· Inv {m.invoiceNo}</span>}
                            {m.lineValue != null && (
                              <span>· {m.lineValue.toLocaleString()} ETB</span>
                            )}
                            {m.note && <span>· {m.note}</span>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="bg-white border rounded-2xl overflow-hidden">
                  <div className="px-4 py-2 border-b bg-slate-50 text-xs font-semibold text-slate-600">
                    Issued to kitchen / use
                  </div>
                  {!report.issued?.length ? (
                    <p className="p-4 text-sm text-slate-400 text-center">
                      No issues
                    </p>
                  ) : (
                    <ul className="divide-y">
                      {report.issued.map((m: any) => (
                        <li
                          key={m.id}
                          className="px-4 py-3 text-sm flex justify-between gap-2"
                        >
                          <div>
                            <div className="font-medium">{m.itemName}</div>
                            <div className="text-xs text-slate-500">
                              {new Date(m.createdAt).toLocaleString()}
                              {m.note ? ` · ${m.note}` : ""}
                            </div>
                          </div>
                          <span className="text-orange-700 font-semibold tabular-nums shrink-0">
                            −{m.quantity} {m.unit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white border rounded-2xl p-3 text-sm">
                <div className="text-slate-500 text-[10px]">Items</div>
                <div className="text-xl font-semibold">{list.length}</div>
              </div>
              <div className="bg-white border rounded-2xl p-3 text-sm">
                <div className="text-slate-500 text-[10px]">Low stock</div>
                <div
                  className={cn(
                    "text-xl font-semibold",
                    lowCount ? "text-amber-600" : ""
                  )}
                >
                  {lowCount}
                </div>
              </div>
              <div className="bg-white border rounded-2xl p-3 text-sm">
                <div className="text-slate-500 text-[10px]">Total value</div>
                <div className="text-sm font-semibold tabular-nums text-emerald-800">
                  {storeValue > 0 ? `${storeValue.toLocaleString()} ETB` : "—"}
                </div>
              </div>
            </div>

            <input
              type="search"
              placeholder="Search stock…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border text-sm bg-white"
            />

            <form
              onSubmit={add}
              className="bg-white border rounded-2xl p-4 space-y-3"
            >
              <p className="text-xs text-slate-500">
                Add once. Daily: Receive · Issue · Count. Set unit cost for
                total price (qty × cost).
              </p>
              <input
                placeholder="Name (flour, oil, sugar…)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border text-sm"
                required
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  min="0"
                  step="0.001"
                  placeholder="Opening qty"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="flex-1 px-3 py-2.5 rounded-xl border text-sm"
                  required
                />
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-24 px-2 py-2.5 rounded-xl border text-sm"
                >
                  <option value="kg">kg</option>
                  <option value="L">L</option>
                  <option value="pcs">pcs</option>
                  <option value="bag">bag</option>
                  <option value="box">box</option>
                </select>
              </div>
              <input
                type="number"
                min="0"
                step="0.001"
                placeholder="Alert when below (optional)"
                value={lowAt}
                onChange={(e) => setLowAt(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border text-sm"
              />
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Unit cost ETB (for total price)"
                value={unitCost}
                onChange={(e) => setUnitCost(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border text-sm"
              />
              <input
                placeholder="Note optional"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border text-sm"
              />
              <button
                type="submit"
                disabled={busy}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium disabled:opacity-60"
              >
                <Plus className="w-4 h-4" />
                Add to {LOCATION_LABEL[location].toLowerCase()}
              </button>
            </form>

            <div className="bg-white border rounded-2xl divide-y">
              {filtered.length === 0 ? (
                <p className="p-6 text-sm text-slate-400 text-center">
                  {search.trim()
                    ? "No items match search"
                    : `No stock in ${LOCATION_LABEL[location]} yet. Add items for this area.`}
                </p>
              ) : (
                filtered.map((x) => (
                  <div key={x.id} className="px-4 py-3 space-y-2">
                    <div className="flex justify-between gap-2">
                      <div className="flex items-start gap-2 min-w-0">
                        <Package className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <div className="font-medium text-sm flex items-center gap-2 flex-wrap">
                            {x.name}
                            {x.isLow && (
                              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">
                                LOW
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5 space-y-0.5">
                            <div>
                              Qty:{" "}
                              <span className="font-medium text-slate-800">
                                {Number(x.quantity).toLocaleString()} {x.unit}
                              </span>
                              {x.lowAt != null ? ` · alert ≤ ${x.lowAt}` : ""}
                            </div>
                            <div>
                              Unit:{" "}
                              {x.unitCost != null
                                ? `${Number(x.unitCost).toLocaleString()} ETB`
                                : "— (set unit cost)"}
                              {" · "}
                              Total:{" "}
                              <span className="font-semibold text-emerald-800">
                                {x.value != null
                                  ? `${Number(x.value).toLocaleString()} ETB`
                                  : "—"}
                              </span>
                            </div>
                            {x.note ? (
                              <div className="text-slate-400">{x.note}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <button
                          type="button"
                          onClick={() => openEdit(x)}
                          className="text-[11px] text-sky-600 mr-2"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => remove(x.id)}
                          className="text-[11px] text-rose-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {activeId === x.id && mode ? (
                      <div className="space-y-2 bg-slate-50 rounded-xl p-3">
                        <div className="text-xs font-medium text-slate-600">
                          {mode === "receive" && "Receive (delivery / buy)"}
                          {mode === "issue" && "Issue (kitchen / use)"}
                          {mode === "count" && "Physical count"}
                        </div>
                        <input
                          type="number"
                          min="0"
                          step="0.001"
                          placeholder={
                            mode === "count"
                              ? `Counted ${x.unit}`
                              : `Amount ${x.unit}`
                          }
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full px-2 py-1.5 rounded-lg border text-sm"
                        />
                        {mode === "receive" && (
                          <>
                            <input
                              placeholder="Invoice no (optional)"
                              value={invoiceNo}
                              onChange={(e) => setInvoiceNo(e.target.value)}
                              className="w-full px-2 py-1.5 rounded-lg border text-sm"
                            />
                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder={`Unit cost ETB (now ${
                                x.unitCost != null
                                  ? Number(x.unitCost).toLocaleString()
                                  : "—"
                              })`}
                              value={unitCostOnReceive}
                              onChange={(e) =>
                                setUnitCostOnReceive(e.target.value)
                              }
                              className="w-full px-2 py-1.5 rounded-lg border text-sm"
                            />
                          </>
                        )}
                        <input
                          placeholder="Note optional"
                          value={moveNote}
                          onChange={(e) => setMoveNote(e.target.value)}
                          className="w-full px-2 py-1.5 rounded-lg border text-sm"
                        />
                        <div className="flex gap-2">
                          <button
                            type="button"
                            disabled={busy}
                            onClick={submitAction}
                            className="flex-1 text-xs bg-slate-900 text-white py-2 rounded-lg disabled:opacity-60"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={closeAction}
                            className="text-xs border px-3 rounded-lg"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => openAction(x.id, "receive")}
                          className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg"
                        >
                          + Receive
                        </button>
                        <button
                          type="button"
                          onClick={() => openAction(x.id, "issue")}
                          className="text-xs bg-orange-50 text-orange-800 border border-orange-200 px-2.5 py-1 rounded-lg"
                        >
                          − Issue
                        </button>
                        <button
                          type="button"
                          onClick={() => openAction(x.id, "count")}
                          className="text-xs bg-sky-50 text-sky-800 border border-sky-200 px-2.5 py-1 rounded-lg"
                        >
                          Count
                        </button>
                        <button
                          type="button"
                          onClick={() => showHistory(x.id)}
                          className="text-xs text-slate-500 underline"
                        >
                          History
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setMoveId(moveId === x.id ? null : x.id)
                          }
                          className="text-xs text-violet-600 underline"
                        >
                          Move
                        </button>
                      </div>
                    )}

                    {editId === x.id && (
                      <div className="space-y-2 bg-sky-50 rounded-xl p-3 border border-sky-100">
                        <div className="text-xs font-medium text-sky-800">
                          Edit item
                        </div>
                        <input
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="w-full px-2 py-1.5 rounded-lg border text-sm"
                          placeholder="Name"
                        />
                        <div className="flex gap-2">
                          <input
                            type="number"
                            min="0"
                            step="0.001"
                            value={editQty}
                            onChange={(e) => setEditQty(e.target.value)}
                            className="flex-1 px-2 py-1.5 rounded-lg border text-sm"
                            placeholder="Qty"
                          />
                          <select
                            value={editUnit}
                            onChange={(e) => setEditUnit(e.target.value)}
                            className="w-20 px-1 py-1.5 rounded-lg border text-sm"
                          >
                            <option value="kg">kg</option>
                            <option value="L">L</option>
                            <option value="pcs">pcs</option>
                            <option value="bag">bag</option>
                            <option value="box">box</option>
                          </select>
                        </div>
                        <input
                          type="number"
                          min="0"
                          step="0.001"
                          value={editLowAt}
                          onChange={(e) => setEditLowAt(e.target.value)}
                          className="w-full px-2 py-1.5 rounded-lg border text-sm"
                          placeholder="Alert when below"
                        />
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={editUnitCost}
                          onChange={(e) => setEditUnitCost(e.target.value)}
                          className="w-full px-2 py-1.5 rounded-lg border text-sm"
                          placeholder="Unit cost ETB"
                        />
                        <input
                          value={editNote}
                          onChange={(e) => setEditNote(e.target.value)}
                          className="w-full px-2 py-1.5 rounded-lg border text-sm"
                          placeholder="Note"
                        />
                        <div className="flex gap-2">
                          <button
                            type="button"
                            disabled={busy}
                            onClick={saveEdit}
                            className="flex-1 text-xs bg-slate-900 text-white py-2 rounded-lg disabled:opacity-60"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditId(null)}
                            className="text-xs border px-3 rounded-lg"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}

                    {moveId === x.id && (
                      <div className="flex flex-wrap gap-2 text-xs bg-violet-50 border border-violet-100 rounded-xl p-2">
                        <span className="text-violet-800 w-full">Move to:</span>
                        {(["BAR", "KITCHEN", "STORE"] as const)
                          .filter((loc) => loc !== location)
                          .map((loc) => (
                            <button
                              key={loc}
                              type="button"
                              disabled={busy}
                              onClick={() => moveLocation(x.id, loc)}
                              className="px-2.5 py-1 rounded-lg bg-white border border-violet-200 text-violet-900 disabled:opacity-60"
                            >
                              {loc === "BAR"
                                ? "Bar"
                                : loc === "KITCHEN"
                                  ? "Kitchen"
                                  : "Store"}
                            </button>
                          ))}
                        <button
                          type="button"
                          onClick={() => setMoveId(null)}
                          className="px-2 py-1 text-slate-500"
                        >
                          Cancel
                        </button>
                      </div>
                    )}

                    {historyId === x.id && history && (
                      <div className="text-xs space-y-1 border-t pt-2">
                        {history.length === 0 ? (
                          <p className="text-slate-400">No movements yet</p>
                        ) : (
                          history.map((h) => (
                            <div
                              key={h.id}
                              className="flex justify-between gap-2 text-slate-600"
                            >
                              <span>
                                <span
                                  className={cn(
                                    "font-medium",
                                    h.type === "IN" && "text-emerald-700",
                                    h.type === "OUT" && "text-orange-700",
                                    h.type === "COUNT" && "text-sky-700"
                                  )}
                                >
                                  {h.type}
                                </span>{" "}
                                {h.type === "COUNT"
                                  ? `→ ${h.quantity}`
                                  : h.type === "OUT"
                                    ? `−${h.quantity}`
                                    : `+${h.quantity}`}{" "}
                                {h.invoiceNo ? `· ${h.invoiceNo}` : ""}
                                {h.difference != null && h.difference !== 0
                                  ? ` · Δ ${h.difference > 0 ? "+" : ""}${h.difference}`
                                  : ""}
                              </span>
                              <span className="text-slate-400 shrink-0">
                                {new Date(h.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}