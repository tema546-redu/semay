import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { garmentApi } from "../../lib/api"
import GarmentLayout from "../../components/GarmentLayout"
import { Printer } from "lucide-react"

type RangeKey = "today" | "7d" | "month" | "year"

export default function GarmentReports() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [range, setRange] = useState<RangeKey>("today")
  const [selectedDate, setSelectedDate] = useState("")
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const load = () => {
    setLoading(true)
    const params = selectedDate ? { date: selectedDate } : { range }
    garmentApi
      .reports(params)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [range, selectedDate])

  const headerLabel = selectedDate
    ? selectedDate
    : range === "today"
      ? isAm
        ? "ዛሬ"
        : "Today"
      : range === "7d"
        ? isAm
          ? "7 ቀናት"
          : "Last 7 days"
        : range === "month"
          ? isAm
            ? "ይህ ወር"
            : "This month"
          : isAm
            ? "ይህ ዓመት"
            : "This year"

  const d = data || {}
  const printedAt = new Date().toLocaleString()

  return (
    <GarmentLayout>
      {/* Hide chrome when printing */}
      <style>{`
        @media print {
          aside, header, .no-print, nav, [class*="fixed"] { display: none !important; }
          body { background: white !important; }
          .print-sheet { box-shadow: none !important; border: none !important; }
          .print-break { break-inside: avoid; }
        }
      `}</style>

      <div className="p-4 md:p-6 max-w-3xl mx-auto space-y-4">
        {/* Screen-only controls */}
        <div className="no-print flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold text-semay-900">
              {isAm ? "ሪፖርቶች" : "Reports"}
            </h1>
            <p className="text-sm text-semay-500 mt-0.5">
              {isAm ? "ምርት ማጠቃለያ" : "Production summary"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-sm font-medium px-4 py-2.5 rounded-xl bg-semay-900 text-white"
          >
            <Printer className="w-4 h-4" />
            {isAm ? "አትም / PDF" : "Print / PDF"}
          </button>
        </div>

        <div className="no-print flex flex-wrap items-center gap-2">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="text-sm border border-semay-200 rounded-lg px-3 py-2 bg-white"
          />
          {selectedDate && (
            <button
              type="button"
              onClick={() => setSelectedDate("")}
              className="text-xs text-semay-600 underline"
            >
              {isAm ? "አጽዳ" : "Clear date"}
            </button>
          )}
          {(["today", "7d", "month", "year"] as RangeKey[]).map((r) => (
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
                  : r === "month"
                    ? isAm
                      ? "ወር"
                      : "Month"
                    : isAm
                      ? "ዓመት"
                      : "Year"}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-sm text-semay-500">
            {isAm ? "በመጫን ላይ..." : "Loading..."}
          </p>
        ) : (
          <div className="print-sheet bg-white border border-semay-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Print header */}
            <div className="hidden print:block px-6 pt-6 pb-2 border-b border-semay-100">
              <div className="text-lg font-bold text-semay-900">Semaiy · Garment</div>
              <div className="text-sm text-semay-600">
                {isAm ? "የምርት ሪፖርት" : "Production report"} · {headerLabel}
              </div>
              <div className="text-xs text-semay-400 mt-1">
                {isAm ? "ታትሟል" : "Printed"}: {printedAt}
              </div>
            </div>

            {/* Summary band */}
            <div className="bg-semay-900 text-white p-5 print:bg-white print:text-semay-900 print:border-b">
              <p className="text-[11px] uppercase tracking-wider text-white/60 print:text-semay-500">
                {headerLabel}
              </p>
              <p className="text-3xl font-semibold mt-1 tabular-nums">
                {d.totalPieces || 0}{" "}
                <span className="text-lg font-medium text-white/80 print:text-semay-600">
                  {isAm ? "ቁርጥራጮች" : "pieces"}
                </span>
              </p>
              <p className="text-sm text-white/70 mt-1 print:text-semay-500">
                {d.reportCount || 0} {isAm ? "ሪፖርቶች" : "reports"} ·{" "}
                {d.activeCount || 0} {isAm ? "ንቁ" : "active"} ·{" "}
                {d.delayedCount || 0} {isAm ? "የዘገዩ" : "delayed"}
              </p>
            </div>

            {/* KPI grid */}
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3 print-break">
              {[
                {
                  label: isAm ? "ጉድለቶች" : "Defects",
                  value: d.defectQty || 0,
                },
                {
                  label: isAm ? "ዳግም ስራ" : "Rework cost",
                  value: `${(d.reworkCost || 0).toLocaleString()} ETB`,
                  danger: true,
                },
                {
                  label: isAm ? "ንቁ ትዕዛዝ" : "Active orders",
                  value: d.activeCount || 0,
                },
                {
                  label: isAm ? "የዘገዩ" : "Delayed",
                  value: d.delayedCount || 0,
                  warn: true,
                },
              ].map((k) => (
                <div
                  key={k.label}
                  className="rounded-xl bg-semay-50 border border-semay-100 p-3 print:border-semay-200"
                >
                  <div className="text-[11px] text-semay-500">{k.label}</div>
                  <div
                    className={`text-lg font-semibold tabular-nums ${
                      k.danger ? "text-red-600" : k.warn ? "text-amber-600" : ""
                    }`}
                  >
                    {k.value}
                  </div>
                </div>
              ))}
            </div>

            {/* By stage */}
            <div className="px-4 pb-4 print-break">
              <h2 className="font-medium mb-2 text-semay-900">
                {isAm ? "በደረጃ" : "Output by stage"}
              </h2>
              {d.byStage && Object.keys(d.byStage).length > 0 ? (
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(d.byStage).map(([stage, qty]: any) => (
                      <tr key={stage} className="border-b border-semay-50">
                        <td className="py-2 text-semay-700">{stage}</td>
                        <td className="py-2 text-right font-medium tabular-nums">
                          {qty} pcs
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-sm text-semay-400 py-2">
                  {isAm
                    ? "ለዚህ ጊዜ የዕለት ሪፖርት የለም"
                    : "No daily reports in this period"}
                </p>
              )}
            </div>

            {/* By staff */}
            <div className="px-4 pb-4 print-break">
              <h2 className="font-medium mb-2 text-semay-900">
                {isAm ? "በሰራተኛ" : "Output by staff"}
              </h2>
              {d.byStaff?.length > 0 ? (
                <table className="w-full text-sm">
                  <tbody>
                    {d.byStaff.map((s: any, i: number) => (
                      <tr key={i} className="border-b border-semay-50">
                        <td className="py-2">
                          {i + 1}. {s.name}
                        </td>
                        <td className="py-2 text-right font-medium tabular-nums">
                          {s.qty} pcs
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-sm text-semay-400 py-2">
                  {isAm ? "ምንም የለም" : "No data"}
                </p>
              )}
            </div>

            {/* Report lines */}
            <div className="px-4 pb-6 print-break">
              <h2 className="font-medium mb-2 text-semay-900">
                {isAm ? "ሪፖርቶች" : "Reports in period"}
              </h2>
              {!d.reports?.length ? (
                <p className="text-sm text-semay-400 py-2">
                  {isAm
                    ? "ዕለታዊ ሪፖርት ካስቀመጡ በኋላ እዚህ ይታያል"
                    : "After you save Daily reports, they show here"}
                </p>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-semay-500 border-b">
                      <th className="py-2 pr-2">{isAm ? "ሰው" : "Staff"}</th>
                      <th className="py-2 pr-2">{isAm ? "ትዕዛዝ" : "Order"}</th>
                      <th className="py-2 pr-2">{isAm ? "ደረጃ" : "Stage"}</th>
                      <th className="py-2 text-right">{isAm ? "ብዛት" : "Qty"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {d.reports.slice(0, 40).map((r: any) => (
                      <tr key={r.id} className="border-b border-semay-50">
                        <td className="py-2 pr-2">{r.userName || "Staff"}</td>
                        <td className="py-2 pr-2 text-semay-600">
                          {r.order?.orderNumber || "—"}
                        </td>
                        <td className="py-2 pr-2 text-semay-600">{r.stage}</td>
                        <td className="py-2 text-right font-medium tabular-nums">
                          {r.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="hidden print:block px-6 pb-6 text-xs text-semay-400">
              Semaiy Garment · {printedAt}
            </div>
          </div>
        )}

        {/* Hint when empty but home has progress */}
        {!loading && (d.totalPieces || 0) === 0 && (
          <p className="no-print text-sm text-amber-800 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
            {isAm
              ? "Home ላይ Done ቢታይም Reports ባዶ ከሆነ፣ Daily report በትክክል መቀመጥ አለበት። Daily → + Report → Save ይሞክሩ።"
              : "Home can show Done from orders, but Reports only counts saved Daily reports. Go to Daily → + Report → Save, then refresh Reports."}
          </p>
        )}
      </div>
    </GarmentLayout>
  )
}