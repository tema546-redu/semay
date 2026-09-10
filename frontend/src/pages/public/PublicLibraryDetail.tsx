import { useEffect, useState, useCallback } from "react"
import { useParams, Link } from "react-router-dom"
import { MapPin, Clock, Star, BookOpen, CheckCircle, Send, ArrowLeft } from "lucide-react"
import { libraryApi } from "../../lib/api"

export default function PublicLibraryDetail() {
  const { id } = useParams<{ id: string }>()
  const orgId = id || ""

  const [library, setLibrary] = useState<any>(null)
  const [books, setBooks] = useState<any[]>([])
  const [reviews, setReviews] = useState<any[]>([])
  const [avgRating, setAvgRating] = useState(0)
  const [totalReviews, setTotalReviews] = useState(0)
  const [loading, setLoading] = useState(true)

  const [name, setName] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [checkedIn, setCheckedIn] = useState(false)
  const [checkInBusy, setCheckInBusy] = useState(false)

  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState("")
  const [reviewBusy, setReviewBusy] = useState(false)
  const [msg, setMsg] = useState("")

  const load = useCallback(async () => {
    if (!orgId) return
    setLoading(true)
    try {
      const [detail, rev] = await Promise.all([
        libraryApi.publicOne(orgId),
        libraryApi.reviews(orgId),
      ])
      setLibrary(detail.library)
      setBooks(Array.isArray(detail.books) ? detail.books : [])
      setReviews(Array.isArray(rev.reviews) ? rev.reviews : [])
      setAvgRating(rev.averageRating || 0)
      setTotalReviews(rev.totalReviews || 0)
    } catch {
      setMsg("Could not load library")
    } finally {
      setLoading(false)
    }
  }, [orgId])

  useEffect(() => {
    load()
  }, [load])

  useEffect(() => {
    if (name.length < 1 || !orgId || checkedIn) {
      setSuggestions([])
      return
    }
    const timer = setTimeout(async () => {
      try {
        const data = await libraryApi.publicSuggestNames(orgId, name)
        setSuggestions(Array.isArray(data) ? data : [])
      } catch {
        setSuggestions([])
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [name, orgId, checkedIn])

  const resetForNextVisitor = () => {
    setCheckedIn(false)
    setName("")
    setSuggestions([])
    setRating(0)
    setHoverRating(0)
    setComment("")
    setMsg("")
  }

  const doCheckIn = async () => {
    if (!name.trim() || !orgId) return
    setCheckInBusy(true)
    setMsg("")
    try {
      await libraryApi.checkIn(orgId, { visitorName: name.trim() })
      setCheckedIn(true)
      setSuggestions([])
      setMsg("Checked in. You can rate or go to the next visitor.")
    } catch (e: any) {
      const text = e?.message || "Check-in failed. Try again."
      setMsg(text)
      if (/already/i.test(text)) {
        setCheckedIn(true)
        setSuggestions([])
      }
    } finally {
      setCheckInBusy(false)
    }
  }

  const submitReview = async () => {
    if (!rating || !name.trim() || !orgId) {
      setMsg("Please select a star rating and enter your name.")
      return
    }
    setReviewBusy(true)
    setMsg("")
    try {
      const newReview = await libraryApi.submitReview(orgId, {
        visitorName: name.trim(),
        rating,
        comment: comment.trim() || undefined,
      })
      setReviews((prev) => [newReview, ...prev])
      setTotalReviews((n) => n + 1)
      setAvgRating((old) => {
        const total = old * (totalReviews || 0) + rating
        return Number((total / (totalReviews + 1)).toFixed(1))
      })
      setRating(0)
      setComment("")
      setMsg("Thank you for your feedback!")
    } catch {
      setMsg("Failed to submit review.")
    } finally {
      setReviewBusy(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-svh flex items-center justify-center bg-stone-50 text-sm text-stone-500">
        Loading…
      </div>
    )
  }

  if (!library) {
    return (
      <div className="min-h-svh flex items-center justify-center bg-stone-50 text-sm text-stone-500">
        Library not found.
      </div>
    )
  }

  const isOpen = library.isOpen !== false

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b border-stone-200 px-4 h-14 flex items-center justify-between sticky top-0 z-10">
        <Link to="/public/libraries" className="flex items-center gap-1 text-sm text-stone-600">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="text-xs font-medium px-2.5 py-1 rounded-full bg-stone-100 text-stone-600">
          Public page
        </div>
      </header>

      <div className="max-w-lg mx-auto p-4 space-y-4 pb-10">
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
          <div className="h-40 bg-stone-200 relative">
            {library.photoUrl ? (
              <img src={library.photoUrl} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
                No photo
              </div>
            )}
            <div
              className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full font-semibold ${
                isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {isOpen ? "Open now" : "Closed"}
            </div>
          </div>
          <div className="p-4 space-y-1">
            <h1 className="text-lg font-bold text-stone-900">{library.name}</h1>
            <div className="text-xs text-stone-500 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {library.address || library.city || "Ethiopia"}
            </div>
            <div className="text-xs text-stone-500 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {library.openTime || "08:00"} – {library.closeTime || "22:00"}
            </div>
            {avgRating > 0 && (
              <div className="flex items-center gap-1 text-xs text-amber-600 pt-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-medium">{avgRating}</span>
                <span className="text-stone-400">({totalReviews} reviews)</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
          <h2 className="text-sm font-semibold text-stone-900 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> Visitor check-in
          </h2>

          {msg && (
            <p className="text-xs text-stone-600 bg-stone-100 rounded-lg px-3 py-2">{msg}</p>
          )}

          {!checkedIn ? (
            <div className="space-y-2">
              <div className="relative">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Type your name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm"
                  autoComplete="off"
                />
                {suggestions.length > 0 && (
                  <div className="absolute z-10 left-0 right-0 mt-1 bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setName(s)
                          setSuggestions([])
                        }}
                        className="w-full text-left px-3.5 py-2 text-sm hover:bg-stone-50"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={doCheckIn}
                disabled={checkInBusy || !name.trim()}
                className="w-full bg-stone-900 text-white py-2.5 rounded-xl text-sm font-medium disabled:opacity-40"
              >
                {checkInBusy ? "…" : "I am here — Check in"}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-green-700 font-medium">
                Welcome{name ? `, ${name}` : ""}! You are checked in.
              </p>
              <p className="text-xs text-stone-500">Rate your visit (optional):</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= (hoverRating || rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-stone-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="How was your visit? (optional)"
                maxLength={500}
                rows={3}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm resize-none"
              />
              <button
                type="button"
                onClick={submitReview}
                disabled={reviewBusy || rating === 0}
                className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-2.5 rounded-xl text-sm font-medium disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
                {reviewBusy ? "…" : "Submit review"}
              </button>
              <button
                type="button"
                onClick={resetForNextVisitor}
                className="w-full border border-stone-200 text-sm py-2.5 rounded-xl text-stone-700"
              >
                Next visitor
              </button>
            </div>
          )}
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
          <h2 className="text-sm font-semibold text-stone-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Available books
          </h2>
          {books.length === 0 ? (
            <p className="text-xs text-stone-400">No books catalogued yet.</p>
          ) : (
            <div className="space-y-2">
              {books.map((b: any) => (
                <div key={b.id} className="flex gap-3 items-center">
                  {b.imageUrl ? (
                    <img
                      src={b.imageUrl}
                      alt=""
                      className="w-10 h-10 rounded-lg object-cover border"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-400 text-[10px]">
                      No photo
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-stone-900 truncate">{b.title}</div>
                    <div className="text-xs text-stone-500 truncate">
                      {b.author || "—"} · {b.copiesAvailable ?? 0} available
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {reviews.length > 0 && (
          <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
            <h2 className="text-sm font-semibold text-stone-900">Recent reviews</h2>
            <div className="space-y-3">
              {reviews.slice(0, 10).map((r: any) => (
                <div
                  key={r.id}
                  className="border-b border-stone-100 last:border-0 pb-2 last:pb-0"
                >
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3 h-3 ${
                          s <= r.rating ? "fill-amber-400 text-amber-400" : "text-stone-200"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-stone-400 ml-1">{r.visitorName}</span>
                  </div>
                  {r.comment && <p className="text-xs text-stone-600">{r.comment}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center pt-4">
          <p className="text-[10px] text-stone-400">
            Powered by <span className="font-medium">Semaiy</span> · ሰማይ
          </p>
        </div>
      </div>
    </div>
  )
}