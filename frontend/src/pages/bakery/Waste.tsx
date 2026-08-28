import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { bakeryApi } from "../../lib/api"

export default function BakeryWaste() {
  const [products, setProducts] = useState<any[]>([])
  const [productId, setProductId] = useState("")
  const [qty, setQty] = useState("1")
  const [reason, setReason] = useState("")
  const [msg, setMsg] = useState("")
  const [busy, setBusy] = useState(false)

  const load = () =>
    bakeryApi.products().then((list) => {
      setProducts(list || [])
      if (list?.[0] && !productId) setProductId(list[0].id)
    })

  useEffect(() => {
    load().catch(console.error)
  }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!productId) return
    setBusy(true)
    setMsg("")
    try {
      await bakeryApi.waste({
        productId,
        quantity: Number(qty),
        reason: reason.trim() || undefined,
      })
      setMsg("Waste recorded · stock updated")
      setQty("1")
      setReason("")
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/bakery" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <h1 className="font-semibold text-semay-900 text-sm">Waste</h1>
      </header>

      <form onSubmit={submit} className="max-w-md mx-auto p-4 space-y-4">
        <div className="bg-white border border-semay-100 rounded-2xl p-4 space-y-3 shadow-sm">
          <p className="text-xs text-semay-500">
            Record burned, broken, or thrown items. Stock will decrease.
          </p>

          <div>
            <label className="block text-xs font-medium text-semay-500 mb-1">Product</label>
            <select
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
              required
            >
              {products.length === 0 && <option value="">No products</option>}
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} (stock {p.stockQty})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-semay-500 mb-1">Quantity</label>
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-semay-500 mb-1">Reason (optional)</label>
            <input
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Burned, expired, broken…"
              className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
            />
          </div>

          {msg && (
            <p className="text-sm text-semay-700 bg-semay-50 rounded-xl px-3 py-2">{msg}</p>
          )}

          <button
            type="submit"
            disabled={busy || !productId}
            className="w-full bg-semay-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-50"
          >
            {busy ? "..." : "Record waste"}
          </button>
        </div>
      </form>
    </div>
  )
}