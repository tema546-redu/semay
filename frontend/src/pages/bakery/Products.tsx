import { useEffect, useState } from "react"
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

export default function BakeryProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)

  const [form, setForm] = useState({
    name: "",
    nameAm: "",
    price: "",
    category: "Bread",
    stockQty: "",
    imageUrl: "",
  })

  const fetchProducts = () => {
    setLoading(true)
    bakeryApi
      .products()
      .then((res: any) => setProducts(res))
      .catch((err: any) => setError(err?.message || "Failed to load products"))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await bakeryApi.createProduct({
        name: form.name,
        nameAm: form.nameAm || undefined,
        price: Number(form.price),
        category: form.category,
        stockQty: Number(form.stockQty || "0"),
        imageUrl: form.imageUrl || undefined,
      })
      setForm({ name: "", nameAm: "", price: "", category: "Bread", stockQty: "", imageUrl: "" })
      fetchProducts()
    } catch (err: any) {
      setError(err?.message || "Failed to add product")
    } finally {
      setSaving(false)
    }
  }

  const toggleAvailable = async (p: Product) => {
    try {
      await bakeryApi.updateProduct(p.id, { available: !p.available })
      fetchProducts()
    } catch {
      setProducts((prev) =>
        prev.map((x) => (x.id === p.id ? { ...x, available: !x.available } : x))
      )
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Bakery Products</h1>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg border border-red-100">
          {error}
        </div>
      )}

      {/* Add form */}
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          Add Product
        </h2>
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="e.g. Difo Dabo"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name (Amharic)</label>
            <input
              value={form.nameAm}
              onChange={(e) => setForm({ ...form, nameAm: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="ድፎ ዳቦ"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Price (ETB)</label>
            <input
              required
              type="number"
              min={0}
              step="0.01"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="25.00"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option>Bread</option>
              <option>Cake</option>
              <option>Pastry</option>
              <option>Cookie</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Initial Stock</label>
            <input
              type="number"
              min={0}
              value={form.stockQty}
              onChange={(e) => setForm({ ...form, stockQty: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Image URL</label>
            <input
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="https://…"
            />
          </div>
          <div className="md:col-span-3">
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 text-sm"
            >
              {saving ? "Saving…" : "Add Product"}
            </button>
          </div>
        </form>
      </div>

      {/* List */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
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
            {loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-400">Loading…</td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-400">
                  No products yet.
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {p.imageUrl ? (
                        <img
                          src={p.imageUrl}
                          alt={p.name}
                          className="w-10 h-10 rounded-lg object-cover border border-gray-100"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 font-bold text-xs">
                          {p.name.slice(0, 2)}
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{p.name}</div>
                        {p.nameAm && <div className="text-xs text-gray-500">{p.nameAm}</div>}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{p.category}</td>
                  <td className="px-4 py-3 text-right text-gray-900">
                    Br {Number(p.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-900">{p.stockQty}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleAvailable(p)}
                      className={
                        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium transition " +
                        (p.available
                          ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200")
                      }
                    >
                      {p.available ? "Available" : "Unavailable"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
