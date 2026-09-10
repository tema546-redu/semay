import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus } from "lucide-react"
import { salonApi } from "../../lib/api"

export default function Stylists() {
  const [stylists, setStylists] = useState<any[]>([])
  const [fullName, setFullName] = useState("")
  const [specialty, setSpecialty] = useState("")
  const [commission, setCommission] = useState("30")

  const load = () => salonApi.stylists().then(setStylists).catch(() => setStylists([]))
  useEffect(() => { load() }, [])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim()) return
    await salonApi.addStylist({
      fullName: fullName.trim(),
      specialty: specialty.trim() || undefined,
      commissionPct: parseFloat(commission) || 0,
    })
    setFullName(""); setSpecialty("")
    load()
  }

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/salon" className="text-stone-500"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="font-semibold text-sm">Stylists</h1>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4 pb-10">
        <form onSubmit={add} className="bg-white border rounded-xl p-3 space-y-2">
          <input placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-3 py-2 rounded-xl border text-sm" />
          <div className="flex gap-2">
            <input placeholder="Specialty (e.g. Color)" value={specialty} onChange={(e) => setSpecialty(e.target.value)} className="flex-1 px-3 py-2 rounded-xl border text-sm" />
            <input type="number" placeholder="Commission %" value={commission} onChange={(e) => setCommission(e.target.value)} className="w-28 px-2 py-2 rounded-xl border text-sm" />
          </div>
          <button type="submit" className="w-full bg-stone-900 text-white py-2 rounded-xl text-sm flex items-center justify-center gap-1">
            <Plus className="w-4 h-4" /> Add stylist
          </button>
        </form>

        <div className="space-y-2">
          {stylists.map((s) => (
            <div key={s.id} className="bg-white border rounded-xl p-3 flex justify-between text-sm">
              <div>
                <div className="font-medium">{s.fullName}</div>
                <div className="text-xs text-stone-500">{s.specialty || "General"}</div>
              </div>
              <div className="text-xs text-stone-500">{Number(s.commissionPct)}% commission</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}