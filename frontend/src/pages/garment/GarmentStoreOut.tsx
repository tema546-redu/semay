import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import GarmentLayout from "../../components/GarmentLayout"
import { storeApi } from "../../lib/api"
import { ArrowLeft } from "lucide-react"

export default function GarmentStoreOut() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [items, setItems] = useState<any[]>([])
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    stockItemId: "",
    quantity: "",
    toWhere: "",
    note: "",
  })

  useEffect(() => {
    storeApi
      .items()
      .then((r) => setItems(Array.isArray(r) ? r : []))
      .catch(console.error)
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      await storeApi.out({
        stockItemId: form.stockItemId,
        quantity: Number(form.quantity),
        toWhere: form.toWhere.trim(),
        note: form.note || undefined,
      })
      alert(isAm ? "ተቀምጧል" : "Sent out")
      setForm({ stockItemId: "", quantity: "", toWhere: "", note: "" })
    } catch (err: any) {
      alert(err?.message || "Failed")
    } finally {
      setSaving(false)
    }
  }

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-md space-y-4 pb-24">
        <div className="flex items-center gap-2">
          <Link to="/garment/store">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold text-lg">
            {isAm ? "ወጪ (OUT)" : "Send out (OUT)"}
          </h1>
        </div>
        <form onSubmit={onSubmit} className="space-y-3 bg-white border border-semay-200 rounded-2xl p-4">
          <select
            required
            value={form.stockItemId}
            onChange={(e) => setForm({ ...form, stockItemId: e.target.value })}
            className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
          >
            <option value="">{isAm ? "ዕቃ ምረጥ" : "Select item"}</option>
            {items.map((i) => (
              <option key={i.id} value={i.id}>
                {i.name} ({i.quantity} {i.unit})
              </option>
            ))}
          </select>
          <input
            required
            type="number"
            min={0.01}
            step="any"
            placeholder={isAm ? "ብዛት" : "Quantity"}
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
          />
          <input
            required
            placeholder={isAm ? "ወዴት" : "To where"}
            value={form.toWhere}
            onChange={(e) => setForm({ ...form, toWhere: e.target.value })}
            className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
          />
          <input
            placeholder={isAm ? "ማስታወሻ" : "Note"}
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
            className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
          />
          <button
            type="submit"
            disabled={saving}
            className="w-full py-3 bg-semay-900 text-white rounded-xl font-medium disabled:opacity-60"
          >
            {saving ? "..." : isAm ? "ወጪ አስቀምጥ" : "Save out"}
          </button>
        </form>
      </div>
    </GarmentLayout>
  )
}