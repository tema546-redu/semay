import { useEffect, useMemo, useState } from "react"
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

interface CartItem {
  productId: string
  name: string
  price: number
  quantity: number
}

export default function BakerySell() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [saving, setSaving] = useState(false)

  const [cart, setCart] = useState<CartItem[]>([])
  const [paymentMethod, setPaymentMethod] = useState("cash")
  const [search, setSearch] = useState("")

  useEffect(() => {
    bakeryApi
      .products()
      .then((res: any) => {
        setProducts(res)
        setLoading(false)
      })
      .catch((err: any) => {
        setError(err?.message || "Failed to load products")
        setLoading(false)
      })
  }, [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return products.filter(
      (p) =>
        p.available &&
        p.stockQty > 0 &&
        (q === "" ||
          p.name.toLowerCase().includes(q) ||
          p.nameAm?.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q))
    )
  }, [products, search])

  const addToCart = (p: Product) => {
    setCart((prev) => {
      const existing = prev.find((x) => x.productId === p.id)
      if (existing) {
        if (existing.quantity >= p.stockQty) return prev
        return prev.map((x) =>
          x.productId === p.id ? { ...x, quantity: x.quantity + 1 } : x
        )
      }
      return [...prev, { productId: p.id, name: p.name, price: Number(p.price), quantity: 1 }]
    })
  }

  const updateQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((x) => {
          if (x.productId !== productId) return x
          const next = Math.max(0, x.quantity + delta)
          return { ...x, quantity: next }
        })
        .filter((x) => x.quantity > 0)
    )
  }

  const removeItem = (productId: string) => {
    setCart((prev) => prev.filter((x) => x.productId !== productId))
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const handleCheckout = async () => {
    if (cart.length === 0) return
    setError("")
    setSuccess("")
    setSaving(true)
    try {
      await bakeryApi.sell({
        paymentMethod,
        items: cart.map((i) => ({ productId: i.productId, quantity: i.quantity })),
      })
      setSuccess("Sale recorded successfully.")
      setCart([])
      const updated: any = await bakeryApi.products()
      setProducts(updated)
    } catch (err: any) {
      setError(err?.message || "Failed to complete sale")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Product grid */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Counter Sale</h1>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products…"
            className="w-full max-w-xs rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg border border-red-100">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg border border-emerald-100">
            {success}
          </div>
        )}

        {loading ? (
          <div className="text-gray-500">Loading products…</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <button
                key={p.id}
                onClick={() => addToCart(p)}
                disabled={p.stockQty <= 0}
                className="text-left bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition disabled:opacity-50"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {p.category}
                  </span>
                  <span className="text-xs text-gray-500">Stock: {p.stockQty}</span>
                </div>
                <div className="font-medium text-gray-900">{p.name}</div>
                {p.nameAm && <div className="text-xs text-gray-500">{p.nameAm}</div>}
                <div className="mt-2 text-sm font-semibold text-gray-800">
                  Br {Number(p.price).toFixed(2)}
                </div>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-gray-400 py-12">
                No available products.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Cart */}
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm h-fit">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Cart</h2>

        {cart.length === 0 ? (
          <div className="text-sm text-gray-400 mb-4">Tap products to add them here.</div>
        ) : (
          <div className="space-y-3 mb-4">
            {cart.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
              >
                <div>
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  <div className="text-xs text-gray-500">
                    Br {item.price.toFixed(2)} × {item.quantity}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.productId, -1)}
                    className="w-7 h-7 rounded bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 flex items-center justify-center text-sm"
                  >
                    −
                  </button>
                  <span className="text-sm w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQty(item.productId, 1)}
                    className="w-7 h-7 rounded bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="ml-1 text-rose-600 hover:text-rose-700 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-gray-100 pt-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Total</span>
            <span className="text-xl font-bold text-gray-900">Br {total.toFixed(2)}</span>
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Payment</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="cash">Cash</option>
              <option value="telebirr">Telebirr</option>
              <option value="cbe">CBE</option>
              <option value="card">Card</option>
            </select>
          </div>

          <button
            onClick={handleCheckout}
            disabled={cart.length === 0 || saving}
            className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 text-sm font-medium"
          >
            {saving ? "Processing…" : "Complete Sale"}
          </button>
        </div>
      </div>
    </div>
  )
}
