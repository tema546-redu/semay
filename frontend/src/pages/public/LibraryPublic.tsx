import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { libraryApi } from "../../lib/api"

export default function LibraryPublic() {
  const { id } = useParams<{ id: string }>()
  const orgId = id || ""
  const [lib, setLib] = useState<any>(null)
  const [books, setBooks] = useState<any[]>([])
  const [reviews, setReviews] = useState<any[]>([])
  const [avg, setAvg] = useState(0)
  const [totalRev, setTotalRev] = useState(0)
  const [step, setStep] = useState<"name" | "done">("name")
  const [visitorName, setVisitorName] = useState("")
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState("")

  const load = () => {
    if (!orgId) return
    libraryApi.publicOne(orgId).then((d) => {
      setLib(d.library || d)
      setBooks(d.books || [])
      setAvg(d.averageRating || 0)
      setTotalRev(d.totalReviews || 0)
    }).catch(console.error)
    libraryApi.reviews(orgId).then((r) => {
      setReviews(r.reviews || [])
      setAvg(r.averageRating || 0)
      setTotalRev(r.totalReviews || 0)
    }).catch(() => {})
  }

  useEffect(() => {
    load()
  }, [orgId])

  const reset = () => {
    setStep("name")
    setVisitorName("")
    setRating(0)
    setComment("")
    setMsg("")
  }

  const checkIn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!visitorName.trim() || visitorName.trim().length < 2) return
    setBusy(true)
    setMsg("")
    try {
      await libraryApi.checkIn(orgId, { visitorName: visitorName.trim() })
      setStep("done")
      setMsg("Welcome! You are checked in.")
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  const submitReview = async () => {
    if (!rating) {
      setMsg("Tap stars to rate")
      return
    }
    setBusy(true)
    try {
      await libraryApi.submitReview(orgId, {
        visitorName: visitorName.trim(),
        rating,
        comment: comment.trim() || undefined,
      })
      setMsg("Thank you for your feedback!")
      load()
      setTimeout(reset, 1200)
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  if (!lib) {
    return <div className="min-h-svh flex items-center justify-center text-sm text-stone-400">Loading…</div>
  }

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b h-12 px-4 flex items-center justify-between">
        <Link to="/public/libraries" className="text-sm text-stone-600">← Back</Link>
        <span className="text-xs text-stone-400">Public page</span>
      </header>

      <div className="max-w-md mx-auto p-4 space-y-4 pb-12">
        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
          <div className="h-36 bg-stone-200 relative">
            {lib.photoUrl ? (
              <img src={lib.photoUrl} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-stone-500 text-lg font-medium">
                {lib.name}
              </div>
            )}
            <span
              className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full font-medium ${
                lib.isOpen !== false ? "bg-emerald-100 text-emerald-800" : "bg-stone-200 text-stone-600"
              }`}
            >
              {lib.isOpen !== false ? "Open now" : "Closed"}
            </span>
          </div>
          <div className="p-4">
            <h1 className="text-xl font-semibold text-stone-900">{lib.name}</h1>
            <p className="text-xs text-stone-500 mt-1">
              {lib.city || lib.address || "Ethiopia"}
            </p>
            <p className="text-xs text-stone-500">
              {lib.openTime || "08:00"} – {lib.closeTime || "22:00"}
            </p>
            {totalRev > 0 && (
              <p className="text-xs text-amber-700 mt-1">
                ★ {avg} ({totalRev} reviews)
              </p>
            )}
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-4 space-y-3">
          <h2 className="text-sm font-semibold">Visitor check-in</h2>
          {step === "name" ? (
            <form onSubmit={checkIn} className="space-y-3">
              <input
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="Type your name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm"
                autoFocus
              />
              <button
                type="submit"
                disabled={busy || visitorName.trim().length < 2}
                className="w-full bg-stone-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-40"
              >
                {busy ? "..." : "I am here — Check in"}
              </button>
            </form>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-emerald-700 font-medium">{msg}</p>
              <p className="text-xs text-stone-500">Rate your visit (optional)</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} type="button" onClick={() => setRating(n)} className="text-2xl">
                    {n <= rating ? "★" : "☆"}
                  </button>
                ))}
              </div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="How was your visit? (optional)"
                className="w-full px-3 py-2 rounded-xl border text-sm"
                rows={2}
              />
              <button
                type="button"
                disabled={busy}
                onClick={submitReview}
                className="w-full bg-stone-900 text-white py-2.5 rounded-xl text-sm font-medium"
              >
                Submit review
              </button>
              <button
                type="button"
                onClick={reset}
                className="w-full border border-stone-200 py-2.5 rounded-xl text-sm font-medium"
              >
                Next visitor
              </button>
            </div>
          )}
          {msg && step === "name" && <p className="text-xs text-rose-600">{msg}</p>}
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-4">
          <h2 className="text-sm font-semibold mb-2">Available books</h2>
          {!books.length ? (
            <p className="text-sm text-stone-400">Ask the desk for the catalogue.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {books.map((b) => (
                <li key={b.id} className="flex justify-between gap-2">
                  <span>{b.title}</span>
                  <span className="text-stone-400 text-xs shrink-0">
                    {b.copiesAvailable ?? 0} left
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl p-4">
          <h2 className="text-sm font-semibold mb-2">Recent reviews</h2>
          {!reviews.length ? (
            <p className="text-sm text-stone-400">No reviews yet</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {reviews.slice(0, 8).map((r) => (
                <li key={r.id}>
                  <span className="text-amber-600">{"★".repeat(r.rating || 0)}</span>{" "}
                  <span className="text-stone-600">{r.visitorName}</span>
                  {r.comment && <p className="text-xs text-stone-500">{r.comment}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="text-center text-[11px] text-stone-400">Powered by Semaiy · ሰማይ</p>
      </div>
    </div>
  )
}