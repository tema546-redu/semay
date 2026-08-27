import { useEffect, useState } from "react"
import { bakeryApi } from "../../lib/api"

interface Product {
  id: string
  name: string
  nameAm?: string
  stockQty: number
}

export default function BakeryProduce() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [form, setForm] = useState({
    productId: "",
    quantity: "",
    note: "",
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setSaving(true)

    try {
      await bakeryApi.produce({
        productId: form.productId,
        quantity: Number(form.quantity),
        note: form.note || undefined,
      })
      setSuccess("Production recorded and stock updated.")
      setForm({ productId: "", quantity: "", note: "" })
      const updated: any = await bakeryApi.products()
      setProducts(updated)
    } catch (err: any) {
      setError(err?.message || "Failed to record production")
    } finally {
      setSaving(false)
    }
  }

  const selected = products.find((p) => p.id === form.productId)

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Produce</h1>

      {error && (
        <div className="mb-4 bg-red-50 text-red-700 px-4 py-3 rounded-lg border border-red-100">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-4 bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg border border-emerald-100">
          {success}
        </div>
      )}

      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Product</label>
            <select
              required
              value={form.productId}
              onChange={(e) => setForm({ ...form, productId: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select product</option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} {p.nameAm ? `(${p.nameAm})` : ""} — current stock: {p.stockQty}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Quantity Baked</label>
            <input
              required
              type="number"
              min={1}
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="e.g. 30"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Note</label>
            <input
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="e.g. Morning batch"
            />
          </div>

          {selected && form.quantity && (
            <div className="bg-amber-50 text-amber-800 px-3 py-2 rounded-lg text-sm">
              After produce: <span className="font-semibold">{selected.name}</span> stock will be{" "}
              <span className="font-semibold">
                {selected.stockQty + Number(form.quantity || 0)}
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={saving || loading}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 text-sm"
          >
            {saving ? "Saving…" : "Record Production"}
          </button>
        </form>
      </div>
    </div>
  )
}
