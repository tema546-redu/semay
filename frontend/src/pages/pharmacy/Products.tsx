import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { pharmacyApi } from "../../lib/api"

export default function PharmacyProducts() {
  const [list, setList] = useState<any[]>([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [stockQty, setStock] = useState("0")
  const [expiryDate, setExpiry] = useState("")
  const [msg, setMsg] = useState("")

  const load = () => pharmacyApi.products().then(setList).catch(console.error)
  useEffect(() => {
    load()
  }, [])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await pharmacyApi.createProduct({
        name,
        price: Number(price),
        stockQty: Number(stockQty) || 0,
        expiryDate: expiryDate || null,
      })
      setName("")
      setPrice("")
      setStock("0")
      setExpiry("")
      setMsg("Added")
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed")
    }
  }

  return (
    <div className="min-h-svh bg-semay-50 pb-8">
      <header className="h-14 bg-white border-b px-4 flex items-center gap-3">
        <Link to="/pharmacy">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Stock</h1>
      </header>
      <div className="max-w-md mx-auto p-4 space-y-4">
        <form onSubmit={add} className="bg-white border rounded-2xl p-4 space-y-2 shadow-sm">
          <input
            placeholder="Medicine name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl px-3 py-2 text-sm"
            required
          />
          <input
            placeholder="Price ETB"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded-xl px-3 py-2 text-sm"
            required
          />
          <input
            placeholder="Stock qty"
            type="number"
            value={stockQty}
            onChange={(e) => setStock(e.target.value)}
            className="w-full border rounded-xl px-3 py-2 text-sm"
          />
          <label className="text-xs text-semay-500">Expiry (optional)</label>
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full border rounded-xl px-3 py-2 text-sm"
          />
          {msg && <p className="text-sm text-semay-600">{msg}</p>}
          <button type="submit" className="w-full bg-semay-900 text-white py-2.5 rounded-xl text-sm">
            Add product
          </button>
        </form>
        <div className="bg-white border rounded-2xl divide-y shadow-sm">
          {list.map((p) => (
            <div key={p.id} className="px-4 py-3 text-sm flex justify-between gap-2">
              <div>
                <div className="font-medium">{p.name}</div>
                <div className="text-xs text-semay-400">
                  Stock {p.stockQty}
                  {p.expiryDate
                    ? ` · exp ${new Date(p.expiryDate).toLocaleDateString()}`
                    : ""}
                </div>
              </div>
              <div className="font-semibold">{Number(p.price)} ETB</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}