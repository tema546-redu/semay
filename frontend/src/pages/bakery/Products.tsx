import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { bakeryApi } from "../../lib/api"

export default function BakeryProducts() {
  const [list, setList] = useState<any[]>([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Bread")
  const [msg, setMsg] = useState("")

  const load = () => bakeryApi.products().then(setList).catch(console.error)
  useEffect(() => {
    load()
  }, [])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg("")
    try {
      await bakeryApi.createProduct({
        name: name.trim(),
        price: Number(price),
        category,
        stockQty: 0,
      })
      setName("")
      setPrice("")
      setMsg("Added")
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed")
    }
  }

  return (
    <div className="min-h-svh bg-semay-50 pb-8">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0">
        <Link to="/bakery" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Store / Products</h1>
      </header>
      <div className="max-w-md mx-auto p-4 space-y-4">
        <form onSubmit={add} className="bg-white border rounded-2xl p-4 space-y-3">
          <input
            placeholder="Name (e.g. Bread)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
            required
          />
          <input
            placeholder="Price ETB"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
          >
            <option>Bread</option>
            <option>Cake</option>
            <option>Pastry</option>
            <option>Other</option>
          </select>
          {msg && <p className="text-sm text-semay-600">{msg}</p>}
          <button type="submit" className="w-full bg-semay-900 text-white py-3 rounded-xl text-sm font-medium">
            Add product
          </button>
        </form>
        <div className="bg-white border rounded-2xl divide-y">
          {list.map((p) => (
            <div key={p.id} className="px-4 py-3 flex justify-between text-sm">
              <span>
                {p.name}
                <span className="text-semay-400"> · {p.category}</span>
              </span>
              <span className="text-semay-600">
                {p.stockQty} · {Number(p.price)} ETB
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}