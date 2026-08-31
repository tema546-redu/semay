import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus, Package } from "lucide-react"
import { stockApi } from "../../lib/api"
import { cn } from "../../lib/utils"

export default function Stock() {
  const [list, setList] = useState<any[]>([])
  const [name, setName] = useState("")
  const [unit, setUnit] = useState("kg")
  const [quantity, setQuantity] = useState("")
  const [lowAt, setLowAt] = useState("")
  const [note, setNote] = useState("")
  const [busy, setBusy] = useState(false)
  const [addId, setAddId] = useState<string | null>(null)
  const [addAmount, setAddAmount] = useState("")

  const load = () => stockApi.list().then(setList).catch(console.error)

  useEffect(() => {
    load()
  }, [])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || quantity === "") return
    setBusy(true)
    try {
      await stockApi.create({
        name: name.trim(),
        unit,
        quantity: Number(quantity),
        lowAt: lowAt === "" ? null : Number(lowAt),
        note: note || undefined,
      })
      setName("")
      setQuantity("")
      setLowAt("")
      setNote("")
      load()
    } catch {
      alert("Failed to add stock")
    } finally {
      setBusy(false)
    }
  }

  const restock = async (id: string) => {
    const n = Number(addAmount)
    if (!n || n <= 0) return
    setBusy(true)
    try {
      await stockApi.addQty(id, n)
      setAddId(null)
      setAddAmount("")
      load()
    } catch {
      alert("Failed")
    } finally {
      setBusy(false)
    }
  }

  const remove = async (id: string) => {
    if (!confirm("Remove this stock item?")) return
    await stockApi.remove(id)
    load()
  }

  const lowCount = list.filter((x) => x.isLow).length

  return (
    <div className="min-h-svh bg-slate-50 pb-20">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-slate-100">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Stock · Store</h1>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border rounded-2xl p-4 text-sm">
            <div className="text-slate-500 text-xs">Items in store</div>
            <div className="text-2xl font-semibold">{list.length}</div>
          </div>
          <div className="bg-white border rounded-2xl p-4 text-sm">
            <div className="text-slate-500 text-xs">Low stock</div>
            <div className={cn("text-2xl font-semibold", lowCount ? "text-amber-600" : "")}>
              {lowCount}
            </div>
          </div>
        </div>

        <form onSubmit={add} className="bg-white border rounded-2xl p-4 space-y-3">
          <p className="text-xs text-slate-500">
            Example: Flour 100 kg · Oil 5 L · Beef 50 kg
          </p>
          <input
            placeholder="Name (flour, oil, meat…)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
            required
          />
          <div className="flex gap-2">
            <input
              type="number"
              min="0"
              step="0.001"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="flex-1 px-3 py-2.5 rounded-xl border text-sm"
              required
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-24 px-2 py-2.5 rounded-xl border text-sm"
            >
              <option value="kg">kg</option>
              <option value="L">L</option>
              <option value="pcs">pcs</option>
            </select>
          </div>
          <input
            type="number"
            min="0"
            step="0.001"
            placeholder="Alert when below (optional)"
            value={lowAt}
            onChange={(e) => setLowAt(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
          />
          <input
            placeholder="Note optional"
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
            Add to store
          </button>
        </form>

        <div className="bg-white border rounded-2xl divide-y">
          {list.length === 0 ? (
            <p className="p-6 text-sm text-slate-400 text-center">
              No stock yet. Add flour, oil, meat…
            </p>
          ) : (
            list.map((x) => (
              <div key={x.id} className="px-4 py-3 space-y-2">
                <div className="flex justify-between gap-2">
                  <div className="flex items-start gap-2 min-w-0">
                    <Package className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <div className="font-medium text-sm flex items-center gap-2">
                        {x.name}
                        {x.isLow && (
                          <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">
                            LOW
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400">
                        {x.note || "—"}
                        {x.lowAt != null ? ` · alert ≤ ${x.lowAt} ${x.unit}` : ""}
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-semibold text-sm">
                      {Number(x.quantity).toLocaleString()} {x.unit}
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(x.id)}
                      className="text-[11px] text-rose-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                {addId === x.id ? (
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="0.001"
                      step="0.001"
                      placeholder={`Add ${x.unit}`}
                      value={addAmount}
                      onChange={(e) => setAddAmount(e.target.value)}
                      className="flex-1 px-2 py-1.5 rounded-lg border text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => restock(x.id)}
                      className="text-xs bg-slate-900 text-white px-3 rounded-lg"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setAddId(null)}
                      className="text-xs border px-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setAddId(x.id)
                      setAddAmount("")
                    }}
                    className="text-xs text-slate-600 underline"
                  >
                    + Bought more
                  </button>
                )}
              </div>
            ))
          )}
        </div>

        <p className="text-xs text-slate-400 text-center px-2">
          Link recipes on menu later so each POS order reduces flour/oil/meat automatically.
        </p>
      </div>
    </div>
  )
}