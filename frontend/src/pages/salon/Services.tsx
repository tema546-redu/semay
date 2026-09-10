import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus } from "lucide-react"
import { salonApi } from "../../lib/api"

export default function Services() {
  const [services, setServices] = useState<any[]>([])
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Hair")
  const [duration, setDuration] = useState("30")
  const [price, setPrice] = useState("")

  const load = () => salonApi.services().then(setServices).catch(() => setServices([]))
  useEffect(() => { load() }, [])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !price) return
    await salonApi.addService({
      name: name.trim(),
      category,
      durationMin: parseInt(duration, 10) || 30,
      price: parseFloat(price),
    })
    setName(""); setPrice("")
    load()
  }

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/salon" className="text-stone-500"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="font-semibold text-sm">Services</h1>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4 pb-10">
        <form onSubmit={add} className="bg-white border rounded-xl p-3 space-y-2">
          <input placeholder="Service name (e.g. Haircut)" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 rounded-xl border text-sm" />
          <div className="flex gap-2">
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="flex-1 px-2 py-2 rounded-xl border text-sm">
              <option>Hair</option><option>Nails</option><option>Skin</option><option>Massage</option><option>General</option>
            </select>
            <input type="number" placeholder="Mins" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-20 px-2 py-2 rounded-xl border text-sm" />
            <input type="number" placeholder="ETB" value={price} onChange={(e) => setPrice(e.target.value)} className="w-24 px-2 py-2 rounded-xl border text-sm" />
          </div>
          <button type="submit" className="w-full bg-stone-900 text-white py-2 rounded-xl text-sm flex items-center justify-center gap-1">
            <Plus className="w-4 h-4" /> Add service
          </button>
        </form>

        <div className="space-y-2">
          {services.map((s) => (
            <div key={s.id} className="bg-white border rounded-xl p-3 flex justify-between text-sm">
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-xs text-stone-500">{s.category} · {s.durationMin} min</div>
              </div>
              <div className="font-semibold">{Number(s.price)} ETB</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}