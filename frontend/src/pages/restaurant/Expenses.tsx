import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus } from "lucide-react"
import { expensesApi } from "../../lib/api"

export default function Expenses() {
  const [list, setList] = useState<any[]>([])
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [busy, setBusy] = useState(false)

  const load = () => expensesApi.list().then(setList).catch(console.error)

  useEffect(() => {
    load()
  }, [])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !amount) return
    setBusy(true)
    try {
      await expensesApi.create({
        name,
        amount: Number(amount),
        note: note || undefined,
      })
      setName("")
      setAmount("")
      setNote("")
      load()
    } catch (err) {
      console.error(err)
      alert("Failed to add expense")
    } finally {
      setBusy(false)
    }
  }

  const total = list.reduce((s, x) => s + Number(x.amount), 0)

  return (
    <div className="min-h-svh bg-slate-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-slate-100">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Expenses</h1>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        <div className="bg-white border rounded-2xl p-4 text-sm">
          <div className="text-slate-500 text-xs">Total recorded</div>
          <div className="text-2xl font-semibold">{total.toLocaleString()} ETB</div>
        </div>

        <form onSubmit={add} className="bg-white border rounded-2xl p-4 space-y-3">
          <input
            placeholder="Name (oil, rent, gas...)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
            required
          />
          <input
            type="number"
            min="1"
            placeholder="Amount ETB"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
            required
          />
          <input
            placeholder="Note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
          />
          <button
            type="submit"
            disabled={busy}
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Add expense
          </button>
        </form>

        <div className="bg-white border rounded-2xl divide-y">
          {list.length === 0 ? (
            <p className="p-6 text-sm text-slate-400 text-center">No expenses yet</p>
          ) : (
            list.map((x) => (
              <div key={x.id} className="px-4 py-3 flex justify-between text-sm">
                <div>
                  <div className="font-medium">{x.name}</div>
                  <div className="text-xs text-slate-400">
                    {new Date(x.createdAt).toLocaleDateString()}
                    {x.note ? ` · ${x.note}` : ""}
                  </div>
                </div>
                <div className="font-semibold">{Number(x.amount).toLocaleString()} ETB</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}