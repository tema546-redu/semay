import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus, X } from "lucide-react"
import { libraryApi } from "../../lib/api"

export default function LibraryLoans() {
  const [loans, setLoans] = useState<any[]>([])
  const [books, setBooks] = useState<any[]>([])
  const [show, setShow] = useState(false)
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState("")
  const [form, setForm] = useState({
    bookId: "",
    borrowerName: "",
    nationalId: "",
    phone: "",
    dueAt: "",
    note: "",
  })

  const load = () => {
    libraryApi.loans().then(setLoans).catch(() => setLoans([]))
    libraryApi.books().then(setBooks).catch(() => setBooks([]))
  }

  useEffect(() => {
    load()
  }, [])

  const active = loans.filter((l) => !l.returnedAt)
  const returned = loans.filter((l) => l.returnedAt)

  const create = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setMsg("")
    try {
      await libraryApi.createLoan({
        bookId: form.bookId,
        borrowerName: form.borrowerName.trim(),
        nationalId: form.nationalId.trim() || undefined,
        phone: form.phone.trim() || undefined,
        dueAt: form.dueAt || undefined,
        note: form.note.trim() || undefined,
      })
      setShow(false)
      setForm({
        bookId: "",
        borrowerName: "",
        nationalId: "",
        phone: "",
        dueAt: "",
        note: "",
      })
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  const markReturn = async (id: string) => {
    if (!confirm("Mark this book as returned?")) return
    try {
      await libraryApi.returnLoan(id)
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
          <h1 className="font-semibold text-sm">Borrow / return</h1>
        </div>
        <button
          type="button"
          onClick={() => setShow(true)}
          className="flex items-center gap-1 text-sm bg-stone-900 text-white px-3 py-1.5 rounded-full"
        >
          <Plus className="w-4 h-4" /> Loan
        </button>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4 pb-10">
        {msg && <p className="text-sm text-stone-600">{msg}</p>}

        <section className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-stone-500">
            Out now ({active.length})
          </h2>
          {active.length === 0 ? (
            <p className="text-sm text-stone-400 text-center py-6">No open loans</p>
          ) : (
            active.map((l) => (
              <div
                key={l.id}
                className="bg-white border border-stone-200 rounded-xl p-3 space-y-1"
              >
                <div className="text-sm font-medium">
                  {l.book?.title || "Book"}
                </div>
                <div className="text-xs text-stone-500">
                  {l.borrowerName}
                  {l.nationalId ? ` · ID ${l.nationalId}` : ""}
                  {l.phone ? ` · ${l.phone}` : ""}
                </div>
                <div className="text-[11px] text-stone-400">
                  Out {l.borrowedAt || l.createdAt
                    ? new Date(l.borrowedAt || l.createdAt).toLocaleDateString()
                    : ""}
                  {l.dueAt ? ` · due ${new Date(l.dueAt).toLocaleDateString()}` : ""}
                </div>
                <button
                  type="button"
                  onClick={() => markReturn(l.id)}
                  className="mt-1 text-xs font-medium text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full"
                >
                  Mark returned
                </button>
              </div>
            ))
          )}
        </section>

        {returned.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-stone-500">
              Recently returned
            </h2>
            {returned.slice(0, 15).map((l) => (
              <div key={l.id} className="text-sm text-stone-500 flex justify-between gap-2">
                <span className="truncate">
                  {l.book?.title} — {l.borrowerName}
                </span>
                <span className="text-[11px] shrink-0">
                  {l.returnedAt ? new Date(l.returnedAt).toLocaleDateString() : ""}
                </span>
              </div>
            ))}
          </section>
        )}
      </div>

      {show && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4">
          <form
            onSubmit={create}
            className="bg-white rounded-2xl w-full max-w-md p-5 space-y-3 shadow-xl"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-sm">New loan</h2>
              <button type="button" onClick={() => setShow(false)}>
                <X className="w-5 h-5 text-stone-400" />
              </button>
            </div>
            <select
              required
              value={form.bookId}
              onChange={(e) => setForm({ ...form, bookId: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border text-sm"
            >
              <option value="">Select book</option>
              {books
                .filter((b) => (b.copiesAvailable ?? 1) > 0)
                .map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.title} ({b.copiesAvailable ?? 0} left)
                  </option>
                ))}
            </select>
            <input
              required
              placeholder="Borrower full name"
              value={form.borrowerName}
              onChange={(e) => setForm({ ...form, borrowerName: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border text-sm"
            />
            <input
              placeholder="National ID (optional)"
              value={form.nationalId}
              onChange={(e) => setForm({ ...form, nationalId: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border text-sm"
            />
            <input
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border text-sm"
            />
            <input
              type="date"
              value={form.dueAt}
              onChange={(e) => setForm({ ...form, dueAt: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border text-sm"
            />
            <input
              placeholder="Note (optional)"
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border text-sm"
            />
            <button
              type="submit"
              disabled={busy}
              className="w-full bg-stone-900 text-white py-2.5 rounded-xl text-sm disabled:opacity-50"
            >
              {busy ? "…" : "Confirm loan"}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}