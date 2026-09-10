import { useEffect, useState } from "react"
import { salonApi } from "../../lib/api"
import SalonLayout from "./SalonLayout"

const RANGES = [
  { key: "day", label: "Daily" },
  { key: "month", label: "Monthly" },
  { key: "year", label: "Annual" },
] as const

export default function Reports() {
  const [range, setRange] = useState<"day" | "month" | "year">("day")
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [data, setData] = useState<any>(null)

  useEffect(() => { salonApi.reports(range, date).then(setData).catch(() => setData(null)) }, [range, date])

  return (
    <SalonLayout>
      <div className="max-w-3xl mx-auto px-5 py-6 space-y-5">
        <h1 className="font-serif text-2xl">Reports</h1>

        <div className="flex items-center gap-2 flex-wrap">
          {RANGES.map((r) => (
            <button key={r.key} onClick={() => setRange(r.key)}
              className={`px-4 py-2 rounded-full text-sm border ${range === r.key ? "bg-[#B23A5B] text-white border-[#B23A5B]" : "border-[#EEDEE0]"}`}>
              {r.label}
            </button>
          ))}
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="ml-auto px-3 py-2 rounded-full border border-[#EEDEE0] text-sm" />
        </div>

        {!data ? (
          <p className="text-sm text-[#8A7377]">Loading...</p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#B23A5B] text-white rounded-2xl p-5">
                <div className="text-xs text-white/80">Revenue</div>
                <div className="font-serif text-2xl mt-1">{data.totalRevenue} ETB</div>
              </div>
              <div className="bg-white border border-[#EEDEE0] rounded-2xl p-5">
                <div className="text-xs text-[#8A7377]">Appointments</div>
                <div className="font-serif text-2xl mt-1">{data.appointmentCount}</div>
              </div>
            </div>
            <div className="bg-white border border-[#EEDEE0] rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[#EEDEE0] font-serif text-lg">Top services</div>
              {data.topServices.length === 0 ? (
                <p className="px-5 py-6 text-sm text-[#8A7377] text-center">No sales in this period yet.</p>
              ) : (
                <div className="divide-y divide-[#F3E9EA]">
                  {data.topServices.map((s: any, i: number) => (
                    <div key={i} className="px-5 py-3 flex justify-between text-sm">
                      <span>{s.name} · {s.count}x</span>
                      <span className="font-medium">{s.revenue} ETB</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </SalonLayout>
  )
}