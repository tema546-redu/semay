import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { storeApi } from "../../lib/api"

export default function StoreOut() {
  const [items, setItems] = useState<any[]>([])
  const [stockItemId, setStockItemId] = useState("")
  const [quantity, setQuantity] = useState("")
  const [toWhere, setToWhere] = useState("")
  const [note, setNote] = useState("")
  const [msg, setMsg] = useState("")
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    storeApi.items().then((list: any[]) => {
      setItems(list)
      if (list[0]) setStockItemId(list[0].id)
    })
  }, [])

  const selected = items.find((i) => i.id === stockItemId)
  const qty = Number(quantity) || 0

  const submit = async () => {
    if (!stockItemId || qty <= 0 || !toWhere.trim()) {
      setMsg("Item, quantity, and destination are required")
      return
    }
    setBusy(true)
    setMsg("")
    try {
      await storeApi.out({
        stockItemId,
        quantity: qty,
        toWhere: toWhere.trim(),
        note: note.trim() || undefined,
      })
      setMsg("Sent out and logged")
      setQuantity("")
      setToWhere("")
      setNote("")
      const list = await storeApi.items()
      setItems(list)
    } catch (e: any) {
      setMsg(e?.response?.data?.error || e.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-svh bg-stone-50 max-w-lg mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h1 className="font-semibold text-lg">Send out (OUT)</h1>
        <Link to="/store" className="text-sm text-stone-500">
          ← Home
        </Link>
      </div>
      <div className="bg-white border rounded-2xl p-4 space-y-3">
        <label className="text-xs text-stone-500">Product</label>
        <select
          className="w-full border rounded-xl px-3 py-2 text-sm"
          value={stockItemId}
          onChange={(e) => setStockItemId(e.target.value)}
        >
          {items.map((i) => (
            <option key={i.id} value={i.id}>
              {i.name} — {i.quantity} {i.unit}
            </option>
          ))}
        </select>
        <input
          className="w-full border rounded-xl px-3 py-2 text-sm"
          placeholder="How much?"
          inputMode="decimal"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          className="w-full border rounded-xl px-3 py-2 text-sm"
          placeholder="Where is it going?"
          value={toWhere}
          onChange={(e) => setToWhere(e.target.value)}
        />
        <input
          className="w-full border rounded-xl px-3 py-2 text-sm"
          placeholder="Note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        {selected && (
          <p className="text-xs text-stone-400">
            Available: {selected.quantity} {selected.unit}
          </p>
        )}
        <button
          type="button"
          disabled={busy}
          onClick={submit}
          className="w-full bg-stone-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-50"
        >
          {busy ? "Saving…" : "Confirm send out"}
        </button>
        {msg && <p className="text-sm text-stone-600">{msg}</p>}
      </div>
    </div>
  )
}