import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus } from "lucide-react"
import { libraryApi } from "../../lib/api"
import { cn } from "../../lib/utils"

export default function LibraryTables() {
  const [tables, setTables] = useState<any[]>([])
  const [label, setLabel] = useState("")
  const [seats, setSeats] = useState("4")
  const [msg, setMsg] = useState("")

  const load = () =>
    libraryApi
      .tables()
      .then(setTables)
      .catch(() => setTables([]))

  useEffect(() => {
    load()
  }, [])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!label.trim()) return
    try {
      await libraryApi.addTable({
        label: label.trim(),
        seats: Math.max(1, parseInt(seats, 10) || 4),
      })
      setLabel("")
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed")
    }
  }

  const seat = async (id: string, guestName: string) => {
    try {
      await libraryApi.reserveTable(id, { guestName, status: "busy" })
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed")
    }
  }

const free = async (id: string) => {
  try {
    await libraryApi.reserveTable(id, { status: "free", guestName: "" })
    load()
  } catch (err: any) {
    setMsg(err.message || "Failed")
  }
}

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/library" className="text-stone-500">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Tables / seats</h1>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4 pb-10">
        {msg && <p className="text-sm text-stone-600">{msg}</p>}

        <form onSubmit={add} className="bg-white border rounded-xl p-3 flex gap-2">
          <input
            placeholder="Table label (e.g. T1)"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="flex-1 px-3 py-2 rounded-xl border text-sm"
          />
          <input
            type="number"
            min={1}
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            className="w-16 px-2 py-2 rounded-xl border text-sm"
          />
          <button
            type="submit"
            className="bg-stone-900 text-white px-3 rounded-xl"
            aria-label="Add"
          >
            <Plus className="w-4 h-4" />
          </button>
        </form>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {tables.length === 0 ? (
            <p className="col-span-full text-sm text-stone-400 text-center py-8">
              Add tables for reading seats
            </p>
          ) : (
            tables.map((t) => {
              const busy = t.status === "busy" || t.status === "reserved"
              return (
                <div
                  key={t.id}
                  className={cn(
                    "rounded-xl border p-3 space-y-2",
                    busy
                      ? "bg-amber-50 border-amber-200"
                      : "bg-white border-stone-200"
                  )}
                >
                  <div className="font-semibold text-sm">{t.label}</div>
                  <div className="text-[11px] text-stone-500">{t.seats ?? 4} seats</div>
                  <div className="text-xs">
                    {busy ? t.guestName || "Occupied" : "Free"}
                  </div>
                  {busy ? (
                    <button
                      type="button"
                      onClick={() => free(t.id)}
                      className="w-full text-xs border border-stone-200 bg-white py-1.5 rounded-lg"
                    >
                      Free
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        const name = window.prompt("Guest name")
                        if (name?.trim()) seat(t.id, name.trim())
                      }}
                      className="w-full text-xs bg-stone-900 text-white py-1.5 rounded-lg"
                    >
                      Seat
                    </button>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}