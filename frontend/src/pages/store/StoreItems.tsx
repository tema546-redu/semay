import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Pencil, Trash2, Search, X } from "lucide-react"
import { storeApi } from "../../lib/api"

export default function StoreItems() {
  const [items, setItems] = useState<any[]>([])
  const [name, setName] = useState("")
  const [unit, setUnit] = useState("pcs")
  const [lowAt, setLowAt] = useState("")
  const [msg, setMsg] = useState("")
  const [q, setQ] = useState("")
  const [editId, setEditId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({
    name: "",
    unit: "pcs",
    lowAt: "",
    unitCost: "",
  })

  const load = () => storeApi.items().then(setItems).catch(console.error)

  useEffect(() => {
    load()
  }, [])

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return items
    return items.filter(
      (i) =>
        String(i.name || "")
          .toLowerCase()
          .includes(s) ||
        String(i.unit || "")
          .toLowerCase()
          .includes(s)
    )
  }, [items, q])

  const add = async () => {
    if (!name.trim()) return
    try {
      await storeApi.createItem({
        name: name.trim(),
        unit: unit || "pcs",
        quantity: 0,
        unitCost: 0,
        lowAt: lowAt ? Number(lowAt) : null,
      })
      setName("")
      setLowAt("")
      setMsg("Item added")
      load()
    } catch (e: any) {
      setMsg(e?.message || "Failed")
    }
  }

  const startEdit = (i: any) => {
    setEditId(i.id)
    setEditForm({
      name: i.name || "",
      unit: i.unit || "pcs",
      lowAt: i.lowAt != null ? String(i.lowAt) : "",
      unitCost: i.unitCost != null ? String(i.unitCost) : "",
    })
  }

  const saveEdit = async () => {
    if (!editId || !editForm.name.trim()) return
    try {
      await storeApi.updateItem(editId, {
        name: editForm.name.trim(),
        unit: editForm.unit || "pcs",
        lowAt: editForm.lowAt === "" ? null : Number(editForm.lowAt),
        unitCost:
          editForm.unitCost === "" ? null : Number(editForm.unitCost),
      })
      setEditId(null)
      setMsg("Saved")
      load()
    } catch (e: any) {
      setMsg(e?.message || "Failed")
    }
  }

  const remove = async (id: string, itemName: string) => {
    if (!confirm(`Delete "${itemName}" and its movement history?`)) return
    try {
      await storeApi.removeItem(id)
      setMsg("Deleted")
      load()
    } catch (e: any) {
      setMsg(e?.message || "Failed")
    }
  }

  return (
    <div className="min-h-svh bg-stone-50 max-w-3xl mx-auto p-4 pb-20">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold text-lg">Stock items</h1>
        <Link to="/store" className="text-sm text-stone-500">
          ← Home
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
        <input
          className="w-full border rounded-xl pl-9 pr-9 py-2.5 text-sm bg-white"
          placeholder="Search stock…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {q && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400"
            onClick={() => setQ("")}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Add */}
      <div className="bg-white border rounded-2xl p-4 space-y-2 mb-4">
        <input
          className="w-full border rounded-xl px-3 py-2 text-sm"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex gap-2">
          <input
            className="flex-1 border rounded-xl px-3 py-2 text-sm"
            placeholder="Unit (pcs, kg…)"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
          <input
            className="w-28 border rounded-xl px-3 py-2 text-sm"
            placeholder="Low at"
            value={lowAt}
            onChange={(e) => setLowAt(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={add}
          className="w-full bg-stone-900 text-white py-2.5 rounded-xl text-sm font-medium"
        >
          Add item
        </button>
        {msg && <p className="text-xs text-stone-500">{msg}</p>}
      </div>

      <ul className="space-y-2">
        {filtered.map((i) => {
          const isLow =
            i.lowAt != null && Number(i.quantity) <= Number(i.lowAt)
          const isEditing = editId === i.id

          return (
            <li
              key={i.id}
              className={`bg-white border rounded-2xl p-3 ${
                isLow ? "border-rose-200" : ""
              }`}
            >
              {isEditing ? (
                <div className="space-y-2">
                  <input
                    className="w-full border rounded-xl px-3 py-2 text-sm"
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                  />
                  <div className="flex gap-2">
                    <input
                      className="flex-1 border rounded-xl px-3 py-2 text-sm"
                      placeholder="Unit"
                      value={editForm.unit}
                      onChange={(e) =>
                        setEditForm({ ...editForm, unit: e.target.value })
                      }
                    />
                    <input
                      className="w-24 border rounded-xl px-3 py-2 text-sm"
                      placeholder="Low at"
                      value={editForm.lowAt}
                      onChange={(e) =>
                        setEditForm({ ...editForm, lowAt: e.target.value })
                      }
                    />
                    <input
                      className="w-28 border rounded-xl px-3 py-2 text-sm"
                      placeholder="Cost"
                      value={editForm.unitCost}
                      onChange={(e) =>
                        setEditForm({ ...editForm, unitCost: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={saveEdit}
                      className="flex-1 bg-stone-900 text-white py-2 rounded-xl text-sm"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditId(null)}
                      className="px-4 border rounded-xl text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between gap-2 items-start">
                  <div>
                    <div className="font-medium text-sm">{i.name}</div>
                    <div className="text-[11px] text-stone-400">
                      {i.unit} · cost {Number(i.unitCost || 0).toLocaleString()}{" "}
                      ETB
                      {isLow ? " · LOW" : ""}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="tabular-nums text-sm font-semibold">
                      {Number(i.quantity).toLocaleString()}
                    </span>
                    <button
                      type="button"
                      onClick={() => startEdit(i)}
                      className="p-2 rounded-lg border text-stone-600"
                      title="Edit"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(i.id, i.name)}
                      className="p-2 rounded-lg border text-rose-600"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </li>
          )
        })}
        {!filtered.length && (
          <p className="text-sm text-stone-400 text-center py-6">
            {q ? "No match" : "No items yet"}
          </p>
        )}
      </ul>
    </div>
  )
}