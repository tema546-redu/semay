import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { bakeryApi } from "../../lib/api"

export default function BakeryProduce() {
  const [products, setProducts] = useState<any[]>([])
  const [productId, setProductId] = useState("")
  const [qty, setQty] = useState("10")
  const [msg, setMsg] = useState("")

  useEffect(() => {
    bakeryApi.products().then((list) => {
      setProducts(list || [])
      if (list?.[0]) setProductId(list[0].id)
    })
  }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await bakeryApi.produce({ productId, quantity: Number(qty) })
      setMsg("Production recorded · stock updated")
    } catch (err: any) {
      setMsg(err.message || "Failed")
    }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/bakery" className="p-2 -ml-2">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Produce (bake)</h1>
      </header>
      <form onSubmit={submit} className="max-w-md mx-auto p-4 space-y-3">
        <select
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="w-full px-3 py-2.5 rounded-xl border text-sm"
        >
          {products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} (stock {p.stockQty})
            </option>
          ))}
        </select>
        <input
          type="number"
          min={1}
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="w-full px-3 py-2.5 rounded-xl border text-sm"
        />
        {msg && <p className="text-sm">{msg}</p>}
        <button type="submit" className="w-full bg-semay-900 text-white py-3 rounded-xl text-sm font-medium">
          Record production
        </button>
      </form>
    </div>
  )
}