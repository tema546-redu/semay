import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus, Pencil, Trash2, X } from "lucide-react"
import { libraryApi } from "../../lib/api"

const empty = {
  title: "",
  author: "",
  copiesTotal: "1",
  imageUrl: "",
}

export default function LibraryBooks() {
  const [list, setList] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState(empty)
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState("")

  const load = () =>
    libraryApi
      .books()
      .then(setList)
      .catch(() => setList([]))
      .finally(() => setLoading(false))

  useEffect(() => {
    load()
  }, [])

  const onImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 1_500_000) {
      setMsg("Max 1.5MB")
      return
    }
    const reader = new FileReader()
    reader.onload = () => setForm((f) => ({ ...f, imageUrl: String(reader.result || "") }))
    reader.readAsDataURL(file)
  }

  const openNew = () => {
    setEditingId(null)
    setForm(empty)
    setShow(true)
  }

  const openEdit = (b: any) => {
    setEditingId(b.id)
    setForm({
      title: b.title || "",
      author: b.author || "",
      copiesTotal: String(b.copiesTotal ?? b.copiesAvailable ?? 1),
      imageUrl: b.imageUrl || "",
    })
    setShow(true)
  }

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setMsg("")
    try {
      const copiesTotal = Math.max(1, parseInt(form.copiesTotal, 10) || 1)
      if (editingId) {
        await libraryApi.updateBook(editingId, {
          title: form.title.trim(),
          author: form.author.trim() || undefined,
          imageUrl: form.imageUrl || null,
          copiesTotal,
          copiesAvailable: copiesTotal,
        })
      } else {
        await libraryApi.addBook({
          title: form.title.trim(),
          author: form.author.trim() || undefined,
          imageUrl: form.imageUrl || null,
          copiesTotal,
        })
      }
      setShow(false)
      setForm(empty)
      setEditingId(null)
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  const remove = async (id: string) => {
    if (!confirm("Delete this book?")) return
    try {
      await libraryApi.deleteBook(id)
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed")
    }
  }

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b h-14 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/library" className="text-stone-500">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold text-sm">Books</h1>
        </div>
        <button
          type="button"
          onClick={openNew}
          className="flex items-center gap-1 text-sm bg-stone-900 text-white px-3 py-1.5 rounded-full"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-3 pb-10">
        {msg && <p className="text-sm text-stone-600">{msg}</p>}
        {loading ? (
          <p className="text-sm text-stone-400">Loading…</p>
        ) : list.length === 0 ? (
          <p className="text-sm text-stone-400 text-center py-10">
            No books yet. Add titles so the public page can show them.
          </p>
        ) : (
          list.map((b) => (
            <div
              key={b.id}
              className="bg-white border border-stone-200 rounded-xl p-3 flex gap-3 items-center"
            >
              {b.imageUrl ? (
                <img src={b.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover border" />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-stone-100 text-[10px] flex items-center justify-center text-stone-400">
                  No photo
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{b.title}</div>
                <div className="text-xs text-stone-500">
                  {b.author || "—"} · {b.copiesAvailable ?? 0}/{b.copiesTotal ?? 0} available
                </div>
              </div>
              <button type="button" onClick={() => openEdit(b)} className="p-2 text-stone-500">
                <Pencil className="w-4 h-4" />
              </button>
              <button type="button" onClick={() => remove(b.id)} className="p-2 text-rose-600">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      {show && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4">
          <form
            onSubmit={save}
            className="bg-white rounded-2xl w-full max-w-md p-5 space-y-3 shadow-xl"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-sm">{editingId ? "Edit book" : "Add book"}</h2>
              <button type="button" onClick={() => setShow(false)}>
                <X className="w-5 h-5 text-stone-400" />
              </button>
            </div>
            <input
              required
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border text-sm"
            />
            <input
              placeholder="Author"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border text-sm"
            />
            <input
              type="number"
              min={1}
              placeholder="Copies"
              value={form.copiesTotal}
              onChange={(e) => setForm({ ...form, copiesTotal: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border text-sm"
            />
            <input type="file" accept="image/*" onChange={onImage} className="text-sm w-full" />
            {form.imageUrl && (
              <img src={form.imageUrl} alt="" className="h-16 w-16 object-cover rounded-lg border" />
            )}
            <button
              type="submit"
              disabled={busy}
              className="w-full bg-stone-900 text-white py-2.5 rounded-xl text-sm disabled:opacity-50"
            >
              {busy ? "…" : "Save"}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}