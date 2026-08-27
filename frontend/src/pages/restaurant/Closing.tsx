import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { restaurantApi } from "../../lib/api"

export default function Closing() {
  const [r, setR] = useState<any>(null)

  useEffect(() => {
    restaurantApi.closingReport().then(setR).catch(console.error)
  }, [])

  return (
    <div className="min-h-svh bg-white">
      <header className="print:hidden border-b px-4 h-12 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-2 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="text-sm bg-semay-900 text-white px-4 py-1.5 rounded-full"
        >
          Print / Save PDF
        </button>
      </header>
      <div className="max-w-md mx-auto p-6 text-sm space-y-3">
        {!r ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1 className="text-lg font-semibold">Closing Report</h1>
            <p className="text-semay-500">{r.restaurant} · {r.date}</p>
            <p>
              Hours: {r.openTime} – {r.closeTime}
            </p>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total sales</span>
              <span>{r.totalSales} ETB</span>
            </div>
            <div className="flex justify-between">
              <span>Orders</span>
              <span>{r.totalOrders}</span>
            </div>
            <div className="flex justify-between">
              <span>Est. cost (40%)</span>
              <span>{r.estimatedCost} ETB</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Est. profit</span>
              <span className={r.isProfit ? "text-green-600" : "text-red-600"}>
                {r.estimatedProfit} ETB
              </span>
            </div>
            <hr />
            <p className="font-medium">Top items</p>
            <ul>
              {(r.topItems || []).map((t: any) => (
                <li key={t.name} className="flex justify-between">
                  <span>{t.name}</span>
                  <span>{t.qty}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-semay-400 pt-4">Generated {r.generatedAt}</p>
          </>
        )}
      </div>
    </div>
  )
}