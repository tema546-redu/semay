import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import GarmentLayout from "../../components/GarmentLayout"

export default function GarmentBOM() {
  const { styleId } = useParams()
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [style, setStyle] = useState<any>(null)
  const [bomItems, setBomItems] = useState<any[]>([])
  const [materials, setMaterials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [form, setForm] = useState({ materialId: "", qtyNeeded: "" })

  const load = async () => {
    if (!styleId) return
    try {
      const [styles, items, mats] = await Promise.all([
        garmentApi.styles(),
        garmentApi.getBOM(styleId),
        garmentApi.materials(),
      ])
      setStyle((styles || []).find((s: any) => s.id === styleId) || null)
      setBomItems(Array.isArray(items) ? items : [])
      setMaterials(Array.isArray(mats) ? mats : [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [styleId])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!styleId) return
    const qty = Number(form.qtyNeeded)
    if (!form.materialId || !(qty > 0)) {
      alert(isAm ? "ቁሳቁስ እና ብዛት ያስፈልጋል" : "Material and quantity required")
      return
    }
    if (qty > 50) {
      const ok = confirm(
        isAm
          ? `ብዛቱ ${qty} ነው። ለአንድ ምርት ነው? ብዙ ጊዜ ጨርቅ 1–3 ሜትር ብቻ ነው። ይቀጥል?`
          : `Quantity is ${qty}. Is this for ONE piece? Fabric is usually 1–3 m only. Continue?`
      )
      if (!ok) return
    }
    try {
      await garmentApi.addBOMItem(styleId, {
        materialId: form.materialId,
        qtyNeeded: qty,
      })
      setShowForm(false)
      setForm({ materialId: "", qtyNeeded: "" })
      load()
    } catch (err) {
      console.error(err)
      alert(isAm ? "ስህተት ተከስቷል" : "Something went wrong")
    }
  }

  const handleDelete = async (itemId: string) => {
    if (!styleId) return
    if (!confirm(isAm ? "ይህን መስመር ሰርዝ?" : "Delete this material line?")) return
    setDeletingId(itemId)
    try {
      if (typeof (garmentApi as any).deleteBOMItem === "function") {
        await (garmentApi as any).deleteBOMItem(styleId, itemId)
      } else if (typeof (garmentApi as any).removeBOMItem === "function") {
        await (garmentApi as any).removeBOMItem(styleId, itemId)
      } else {
        const token =
          localStorage.getItem("token") ||
          localStorage.getItem("accessToken") ||
          ""
        const r = await fetch(
          `/api/garment/styles/${styleId}/bom/${itemId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          }
        )
        if (!r.ok) throw new Error(await r.text())
      }
      await load()
    } catch (err) {
      console.error(err)
      alert(isAm ? "መሰረዝ አልተሳካም" : "Delete failed — add deleteBOMItem API")
    } finally {
      setDeletingId(null)
    }
  }

  const totalCost = bomItems.reduce((sum, item) => {
    const cost = Number(item.material?.costPerUnit || 0)
    const qty = Number(item.qtyNeeded || 0)
    return sum + cost * qty
  }, 0)

  if (loading) {
    return (
      <GarmentLayout>
        <div className="min-h-svh flex items-center justify-center text-semay-500">
          {isAm ? "በመጫን ላይ..." : "Loading..."}
        </div>
      </GarmentLayout>
    )
  }

  return (
    <GarmentLayout>
      <div className="min-h-svh bg-semay-50 pb-24 md:pb-10">
        <div className="bg-white border-b border-semay-200 px-4 py-3 flex items-center gap-3">
          <Link to="/garment/styles">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-semibold text-lg">
              {isAm ? "ቢኦኤም" : "Bill of Materials"}
            </h1>
            <p className="text-xs text-semay-500">
              {style?.category ? `${style.category} · ` : ""}
              {style?.name}
            </p>
          </div>
        </div>

        <div className="p-4 space-y-4 max-w-xl">
          <div className="bg-white border border-semay-200 rounded-2xl p-4">
            <div className="text-sm text-semay-500">
              {isAm ? "የአንድ ምርት ግምታዊ ወጪ" : "Estimated cost per piece"}
            </div>
            <div className="text-2xl font-bold text-semay-900 mt-1">
              {totalCost.toFixed(2)} ETB
            </div>
            <p className="text-xs text-semay-400 mt-1">
              {isAm
                ? "ከቁሳቁስ ወጪ ብቻ (የሰራተኛ ወጪ አልተካተተም)"
                : "Material cost only (labor not included)"}
            </p>
            <p className="text-xs text-amber-700 mt-2">
              {isAm
                ? "ብዛት = ለአንድ ቁራጭ ብቻ (ለምሳሌ ጨርቅ 1.2 ሜትር)"
                : "Qty = for ONE piece only (e.g. fabric 1.2 m)"}
            </p>
          </div>

          <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-semay-100 flex justify-between items-center">
              <span className="font-medium">
                {isAm ? "የሚያስፈልጉ ቁሳቁሶች" : "Required Materials"}
              </span>
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="p-1.5 bg-semay-900 text-white rounded-lg"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {bomItems.length === 0 ? (
              <p className="p-6 text-center text-semay-500 text-sm">
                {isAm ? "ምንም ቁሳቁስ አልተጨመረም" : "No materials added yet"}
              </p>
            ) : (
              bomItems.map((item) => (
                <div
                  key={item.id}
                  className="px-4 py-3 border-b border-semay-50 flex justify-between items-center gap-3"
                >
                  <div className="min-w-0">
                    <div className="font-medium text-sm">
                      {item.material?.name || "—"}
                    </div>
                    <div className="text-xs text-semay-500 mt-0.5">
                      {Number(item.qtyNeeded)} {item.material?.unit || ""}{" "}
                      {isAm ? "በአንድ ምርት" : "per piece"}
                      {item.material?.costPerUnit != null && (
                        <>
                          {" "}
                          · {Number(item.material.costPerUnit)} ETB/
                          {item.material.unit}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="text-sm font-medium tabular-nums">
                      {(
                        Number(item.qtyNeeded) *
                        Number(item.material?.costPerUnit || 0)
                      ).toFixed(2)}{" "}
                      ETB
                    </div>
                    <button
                      type="button"
                      disabled={deletingId === item.id}
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-semay-400 hover:text-red-600 rounded-lg"
                      title={isAm ? "ሰርዝ" : "Delete"}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-end md:items-center justify-center">
            <div className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl p-6 space-y-4">
              <h2 className="text-lg font-semibold">
                {isAm ? "ቁሳቁስ ጨምር" : "Add Material"}
              </h2>
              <form onSubmit={handleAdd} className="space-y-3">
                <select
                  required
                  value={form.materialId}
                  onChange={(e) =>
                    setForm({ ...form, materialId: e.target.value })
                  }
                  className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                >
                  <option value="">
                    {isAm ? "ቁሳቁስ ምረጥ" : "Select material"}
                  </option>
                  {materials.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name || m.id} ({m.unit || "—"})
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  required
                  placeholder={
                    isAm ? "ብዛት በአንድ ምርት (ምሳሌ 1.2)" : "Qty per piece (e.g. 1.2)"
                  }
                  value={form.qtyNeeded}
                  onChange={(e) =>
                    setForm({ ...form, qtyNeeded: e.target.value })
                  }
                  className="w-full px-3 py-2.5 border border-semay-200 rounded-xl text-sm"
                />
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 py-3 border border-semay-200 rounded-xl"
                  >
                    {isAm ? "ሰርዝ" : "Cancel"}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-semay-900 text-white rounded-xl"
                  >
                    {isAm ? "ጨምር" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </GarmentLayout>
  )
}