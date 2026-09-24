import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { storeApi } from "../../lib/api"

export default function StoreReceive() {
  const [items, setItems] = useState<any[]>([])
  const [stockItemId, setStockItemId] = useState("")
  const [quantity, setQuantity] = useState("")
  const [unitPrice, setUnitPrice] = useState("")
  const [fromWhere, setFromWhere] = useState("")
  const [note, setNote] = useState("")
  const [msg, setMsg] = useState("")
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    storeApi.items().then((list: any[]) => {
      setItems(list)
      if (list[0]) setStockItemId(list[0].id)
    })
  }, [])

  const qty = Number(quantity) || 0
  const price = Number(unitPrice) || 0
  const total = qty * price

  const submit = async () => {
    if (!stockItemId || qty <= 0) {
      setMsg("Select item and quantity")
      return
    }
    setBusy(true)
    setMsg("")
    try {
      await storeApi.receive({
        stockItemId,
        quantity: qty,
        unitPrice: price,
        fromWhere: fromWhere.trim() || undefined,
        note: note.trim() || undefined,
      })
      setMsg("Received and logged")
      setQuantity("")
      setUnitPrice("")
      setNote("")
    } catch (e: any) {
      setMsg(e?.response?.data?.error || e.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-svh bg-stone-50 max-w-lg mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h1 className="font-semibold text-lg">Receive stock (IN)</h1>
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
              {i.name} ({i.quantity} {i.unit})
            </option>
          ))}
        </select>
        <input
          className="w-full border rounded-xl px-3 py-2 text-sm"
          placeholder="Quantity received"
          inputMode="decimal"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          className="w-full border rounded-xl px-3 py-2 text-sm"
          placeholder="Price per unit (ETB)"
          inputMode="decimal"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
        <div className="text-sm font-semibold tabular-nums">
          Total received: {total.toLocaleString()} ETB
        </div>
        <input
          className="w-full border rounded-xl px-3 py-2 text-sm"
          placeholder="From where (supplier / place)"
          value={fromWhere}
          onChange={(e) => setFromWhere(e.target.value)}
        />
        <input
          className="w-full border rounded-xl px-3 py-2 text-sm"
          placeholder="Note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          type="button"
          disabled={busy}
          onClick={submit}
          className="w-full bg-emerald-700 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-50"
        >
          {busy ? "Saving…" : "Confirm receive"}
        </button>
        {msg && <p className="text-sm text-stone-600">{msg}</p>}
      </div>
    </div>
  )
}