import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Trash2 } from "lucide-react"
import { request } from "../../lib/api"

export default function BakeryExpenses() {
  const [list, setList] = useState<any[]>([])
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [msg, setMsg] = useState("")
  const [busy, setBusy] = useState(false)

  const load = () =>
    request<any[]>("/api/restaurant/expenses")
      .then(setList)
      .catch(() => setList([]))

  useEffect(() => {
    load()
  }, [])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    const n = Number(amount)
    if (!name.trim() || !(n > 0)) {
      setMsg("Name and positive amount required")
      return
    }
    setBusy(true)
    setMsg("")
    try {
      await request("/api/restaurant/expenses", {
        method: "POST",
        body: JSON.stringify({
          name: name.trim(),
          amount: n,
          note: note.trim() || undefined,
        }),
      })
      setName("")
      setAmount("")
      setNote("")
      setMsg("Expense added")
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed to add expense")
    } finally {
      setBusy(false)
    }
  }

  const remove = async (id: string) => {
    try {
      await request(`/api/restaurant/expenses/${id}`, { method: "DELETE" })
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed to delete")
    }
  }

  const total = list.reduce((s, x) => s + Number(x.amount || 0), 0)

  return (
    <div className="min-h-svh bg-semay-50 pb-10">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/bakery" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <h1 className="font-semibold text-semay-900 text-sm">Expenses</h1>
      </header>

      <div className="max-w-md mx-auto p-4 space-y-4">
        <div className="bg-gradient-to-br from-semay-900 to-slate-800 text-white rounded-2xl p-4">
          <p className="text-[11px] uppercase tracking-wide text-white/60">Recorded expenses</p>
          <p className="text-2xl font-semibold mt-1 tabular-nums">
            {total.toLocaleString()} <span className="text-sm font-medium text-white/80">ETB</span>
          </p>
          <p className="text-xs text-white/60 mt-1">{list.length} entries</p>
        </div>

        <form onSubmit={add} className="bg-white border border-semay-100 rounded-2xl p-4 space-y-3 shadow-sm">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="What (flour, oil, rent…)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
            required
          />
          <input
            type="number"
            min={0}
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount ETB"
            className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
            required
          />
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Note (optional)"
            className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
          />
          {msg && <p className="text-sm text-semay-600">{msg}</p>}
          <button
            type="submit"
            disabled={busy}
            className="w-full bg-semay-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-50"
          >
            {busy ? "..." : "Add expense"}
          </button>
        </form>

        <div className="bg-white border border-semay-100 rounded-2xl divide-y shadow-sm">
          {list.length === 0 ? (
            <p className="p-6 text-sm text-semay-400 text-center">No expenses yet</p>
          ) : (
            list.map((x) => (
              <div key={x.id} className="px-4 py-3 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-sm font-medium text-semay-900">{x.name}</div>
                  {x.note && <div className="text-xs text-semay-400">{x.note}</div>}
                  <div className="text-[11px] text-semay-400 mt-0.5">
                    {x.createdAt ? new Date(x.createdAt).toLocaleString() : ""}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-sm font-semibold tabular-nums">{Number(x.amount)} ETB</span>
                  <button
                    type="button"
                    onClick={() => remove(x.id)}
                    className="p-1.5 rounded-lg text-semay-400 hover:text-red-600 hover:bg-red-50"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}