import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, ChefHat, Trash2, ShoppingBag, Package } from "lucide-react"
import { bakeryApi } from "../../lib/api"

export default function BakeryReports() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    bakeryApi
      .dashboard()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-svh bg-semay-50 pb-10">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/bakery" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <h1 className="font-semibold text-semay-900 text-sm">Bakery reports</h1>
      </header>

      <div className="max-w-md mx-auto p-4 space-y-4">
        {loading ? (
          <p className="text-sm text-semay-400">Loading...</p>
        ) : (
          <>
            <section className="rounded-2xl overflow-hidden border border-semay-100 shadow-sm">
              <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-semay-900 text-white p-5">
                <p className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
                  Today summary
                </p>
                <p className="text-3xl font-semibold mt-1 tabular-nums">
                  {(data?.todaySales ?? 0).toLocaleString()}{" "}
                  <span className="text-lg font-medium text-white/80">ETB</span>
                </p>
                <p className="text-sm text-white/70 mt-1">
                  {data?.todayOrders ?? 0} sales · produced {data?.produced ?? 0} · waste{" "}
                  {data?.wasted ?? 0}
                </p>
              </div>
              <div className="bg-white grid grid-cols-2 gap-3 p-4">
                <div className="rounded-xl border border-semay-100 bg-semay-50/50 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-semay-500">
                    <ShoppingBag className="w-3.5 h-3.5" /> Sales
                  </div>
                  <div className="text-lg font-semibold text-semay-900 mt-1">
                    {data?.todayOrders ?? 0}
                  </div>
                </div>
                <div className="rounded-xl border border-semay-100 bg-semay-50/50 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-semay-500">
                    <Package className="w-3.5 h-3.5" /> Remaining
                  </div>
                  <div className="text-lg font-semibold text-semay-900 mt-1">
                    {data?.remaining ?? 0}
                  </div>
                </div>
                <div className="rounded-xl border border-semay-100 bg-semay-50/50 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-semay-500">
                    <ChefHat className="w-3.5 h-3.5" /> Produced
                  </div>
                  <div className="text-lg font-semibold text-semay-900 mt-1">
                    {data?.produced ?? 0}
                  </div>
                </div>
                <div className="rounded-xl border border-semay-100 bg-semay-50/50 p-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-semay-500">
                    <Trash2 className="w-3.5 h-3.5" /> Waste
                  </div>
                  <div className="text-lg font-semibold text-semay-900 mt-1">
                    {data?.wasted ?? 0}
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-white border border-semay-100 rounded-2xl p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-semay-900 mb-3">Stock now</h2>
              {!data?.products?.length ? (
                <p className="text-sm text-semay-400 text-center py-4">No products</p>
              ) : (
                <ul className="space-y-2">
                  {data.products.map((p: any) => (
                    <li key={p.id} className="flex justify-between text-sm">
                      <span className="text-semay-800">{p.name}</span>
                      <span className="text-semay-500 tabular-nums">
                        {p.stockQty} · {Number(p.price)} ETB
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-white border border-semay-100 rounded-2xl p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-semay-900 mb-3">Recent sales</h2>
              {!data?.recentSales?.length ? (
                <p className="text-sm text-semay-400 text-center py-4">No sales today</p>
              ) : (
                <ul className="space-y-2">
                  {data.recentSales.map((s: any) => (
                    <li key={s.id} className="flex justify-between text-sm">
                      <span className="text-semay-600">
                        {new Date(s.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                        {s.paymentMethod ? ` · ${s.paymentMethod}` : ""}
                      </span>
                      <span className="font-medium tabular-nums">{Number(s.total)} ETB</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}