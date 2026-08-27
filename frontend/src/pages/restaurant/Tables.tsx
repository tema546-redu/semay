import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus } from "lucide-react"
import { cn } from "../../lib/utils"

const API = import.meta.env.VITE_API_URL || "http://localhost:3001"

async function api(path: string, options?: RequestInit) {
  const token = localStorage.getItem("token")
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options?.headers || {}),
    },
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || "Failed")
  return data
}

export default function TablesPage() {
  const [tables, setTables] = useState<any[]>([])
  const [name, setName] = useState("")

  const load = () => api("/api/restaurant/tables").then(setTables).catch(() => setTables([]))
  useEffect(() => {
    load()
  }, [])

  const add = async () => {
    if (!name.trim()) return
    await api("/api/restaurant/tables", {
      method: "POST",
      body: JSON.stringify({ name: name.trim(), seats: 4 }),
    })
    setName("")
    load()
  }

  const setStatus = async (id: string, status: string) => {
    await api(`/api/restaurant/tables/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    })
    load()
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 h-14 px-4 flex items-center gap-3">
        <Link to="/dashboard"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="font-semibold text-sm">Tables</h1>
      </header>
      <div className="p-4 max-w-3xl mx-auto space-y-4">
        <div className="flex gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Table name e.g. T1"
            className="flex-1 px-3 py-2 rounded-xl border border-semay-200 text-sm"
          />
          <button onClick={add} className="bg-semay-900 text-white px-4 rounded-xl text-sm flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {tables.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() =>
                setStatus(t.id, t.status === "free" ? "busy" : t.status === "busy" ? "reserved" : "free")
              }
              className={cn(
                "rounded-xl border p-4 text-center shadow-sm transition",
                t.status === "free" && "bg-green-50 border-green-200",
                t.status === "busy" && "bg-amber-50 border-amber-200",
                t.status === "reserved" && "bg-blue-50 border-blue-200"
              )}
            >
              <div className="font-semibold text-semay-900">{t.name}</div>
              <div className="text-xs text-semay-500 mt-1 capitalize">{t.status}</div>
              <div className="text-[10px] text-semay-400">{t.seats} seats</div>
            </button>
          ))}
        </div>
        <p className="text-xs text-semay-400">Tap a table to cycle: free → busy → reserved → free</p>
      </div>
    </div>
  )
}