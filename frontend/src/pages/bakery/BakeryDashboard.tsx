import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { bakeryApi } from "../../lib/api"

interface Product {
  id: string
  name: string
  nameAm?: string
  price: number
  stockQty: number
  available: boolean
  category: string
  imageUrl?: string
}

interface SaleItem {
  id: string
  name: string
  quantity: number
  price: number
}

interface Sale {
  id: string
  tableOrCounter: string
  total: number
  paymentMethod?: string
  createdAt: string
  items: SaleItem[]
}

interface DashboardData {
  todaySales: number
  todayOrders: number
  produced: number
  wasted: number
  remaining: number
  products: Product[]
  recentSales: Sale[]
}

export default function BakeryDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    bakeryApi
      .dashboard()
      .then((res: any) => setData(res))
      .catch((err: any) => setError(err?.message || "Failed to load dashboard"))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-gray-500">Loading dashboard…</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-600">{error}</div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Bakery</h1>
        <div className="flex gap-2">
          <Link
            to="/bakery/sell"
            className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
          >
            Sell at Counter
          </Link>
          <Link
            to="/bakery/produce"
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
          >
            Produce
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500">Today Sales</div>
          <div className="text-2xl font-bold text-gray-900">
            Br {data.todaySales.toFixed(2)}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500">Today Orders</div>
          <div className="text-2xl font-bold text-gray-900">{data.todayOrders}</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500">Produced</div>
          <div className="text-2xl font-bold text-emerald-700">{data.produced}</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500">Wasted</div>
          <div className="text-2xl font-bold text-rose-700">{data.wasted}</div>
        </div>
      </div>

      {/* Remaining stock + actions */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">Remaining Stock</div>
          <div className="text-2xl font-bold text-gray-900">{data.remaining} items</div>
        </div>
        <div className="flex gap-2">
          <Link
            to="/bakery/products"
            className="px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            Products
          </Link>
          <Link
            to="/bakery/waste"
            className="px-3 py-2 text-sm bg-rose-50 text-rose-700 rounded-lg hover:bg-rose-100"
          >
            Waste
          </Link>
        </div>
      </div>

      {/* Stock overview */}
      <div>
        <h2 className="text-lg font-medium text-gray-800 mb-3">Stock Overview</h2>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Product</th>
                <th className="text-left px-4 py-3 font-medium">Category</th>
                <th className="text-right px-4 py-3 font-medium">Price</th>
                <th className="text-right px-4 py-3 font-medium">Stock</th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.products.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900">{p.name}</div>
                    {p.nameAm && (
                      <div className="text-xs text-gray-500">{p.nameAm}</div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{p.category}</td>
                  <td className="px-4 py-3 text-right text-gray-900">
                    Br {Number(p.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-900">{p.stockQty}</td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium " +
                        (p.available && p.stockQty > 0
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-500")
                      }
                    >
                      {p.available && p.stockQty > 0 ? "Available" : "Unavailable"}
                    </span>
                  </td>
                </tr>
              ))}
              {data.products.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                    No products yet.{" "}
                    <Link to="/bakery/products" className="text-amber-600 hover:underline">
                      Add your first product
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent sales */}
      <div>
        <h2 className="text-lg font-medium text-gray-800 mb-3">Recent Sales</h2>
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Time</th>
                <th className="text-left px-4 py-3 font-medium">Items</th>
                <th className="text-left px-4 py-3 font-medium">Payment</th>
                <th className="text-right px-4 py-3 font-medium">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.recentSales.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">
                    {new Date(sale.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {sale.items.map((it, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-xs"
                        >
                          {it.name} × {it.quantity}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-700 capitalize">
                    {sale.paymentMethod || "cash"}
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-gray-900">
                    Br {Number(sale.total).toFixed(2)}
                  </td>
                </tr>
              ))}
              {data.recentSales.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-400">
                    No sales today.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
