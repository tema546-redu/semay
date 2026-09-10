import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Scissors, Check, Star } from "lucide-react"
import { publicSalonApi } from "../../lib/api"

export default function PublicSalonBooking() {
  const { orgId } = useParams()
  const [info, setInfo] = useState<any>(null)
  const [serviceId, setServiceId] = useState("")
  const [stylistId, setStylistId] = useState("")
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [slots, setSlots] = useState<string[]>([])
  const [chosen, setChosen] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [done, setDone] = useState(false)
  const [reviews, setReviews] = useState<any>(null)
  const [rateName, setRateName] = useState("")
  const [rateStars, setRateStars] = useState(5)
  const [rateComment, setRateComment] = useState("")
  const [rateSent, setRateSent] = useState(false)

  useEffect(() => { if (orgId) publicSalonApi.info(orgId).then(setInfo).catch(() => setInfo(null)) }, [orgId])
  useEffect(() => { if (orgId) publicSalonApi.reviews(orgId).then(setReviews).catch(() => setReviews(null)) }, [orgId])

  useEffect(() => {
    if (!orgId || !serviceId || !date) { setSlots([]); return }
    publicSalonApi.availability(orgId, date, serviceId, stylistId || undefined).then((r: { slots: string[] }) => setSlots(r.slots)).catch(() => setSlots([]))
  }, [orgId, serviceId, stylistId, date])

  const book = async () => {
    if (!orgId || !serviceId || !chosen || !name.trim()) return
    await publicSalonApi.book(orgId, { clientName: name.trim(), clientPhone: phone.trim() || undefined, serviceId, stylistId: stylistId || undefined, startsAt: chosen })
    setDone(true)
  }

  const submitReview = async () => {
    if (!orgId || !rateName.trim()) return
    await publicSalonApi.submitReview(orgId, { clientName: rateName.trim(), rating: rateStars, comment: rateComment.trim() || undefined })
    setRateSent(true)
  }

  if (!info) return <div className="min-h-svh flex items-center justify-center text-sm text-stone-400">Loading...</div>

  if (done) {
    return (
      <div className="min-h-svh flex items-center justify-center bg-[#FBF7F5] px-4">
        <div className="bg-white rounded-2xl border border-[#EEDEE0] p-8 text-center max-w-sm">
          <div className="w-12 h-12 rounded-full bg-[#B23A5B] mx-auto flex items-center justify-center mb-3"><Check className="text-white w-6 h-6" /></div>
          <h1 className="font-serif text-xl mb-1">You're booked</h1>
          <p className="text-sm text-[#8A7377]">{new Date(chosen).toLocaleString([], { weekday: "long", hour: "2-digit", minute: "2-digit" })} at {info.organization.name}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-svh bg-[#FBF7F5]">
      <div className="max-w-md mx-auto px-5 py-8 space-y-5">
        <div className="text-center space-y-2">
          {info.organization.photoUrl ? (
            <img src={info.organization.photoUrl} className="w-20 h-20 rounded-full object-cover mx-auto" />
          ) : (
            <div className="w-16 h-16 rounded-full bg-[#B23A5B] mx-auto flex items-center justify-center"><Scissors className="text-white w-7 h-7" /></div>
          )}
          <h1 className="font-serif text-2xl">{info.organization.name}</h1>
          {info.organization.address && <p className="text-xs text-[#8A7377]">{info.organization.address}</p>}
          {reviews && reviews.totalReviews > 0 && (
            <div className="flex items-center justify-center gap-1 text-sm text-[#8A7377]">
              <Star className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" /> {reviews.averageRating} · {reviews.totalReviews} reviews
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-[#EEDEE0] p-4 space-y-3">
          <select value={serviceId} onChange={(e) => { setServiceId(e.target.value); setChosen("") }} className="w-full px-3 py-2.5 rounded-xl border text-sm">
            <option value="">Choose a service</option>
            {info.services.map((s: any) => <option key={s.id} value={s.id}>{s.name} · {s.durationMin}min · {Number(s.price)} ETB</option>)}
          </select>
          <select value={stylistId} onChange={(e) => { setStylistId(e.target.value); setChosen("") }} className="w-full px-3 py-2.5 rounded-xl border text-sm">
            <option value="">Any stylist</option>
            {info.stylists.map((s: any) => <option key={s.id} value={s.id}>{s.fullName}{s.specialty ? ` · ${s.specialty}` : ""}</option>)}
          </select>
          <input type="date" value={date} min={new Date().toISOString().slice(0, 10)} onChange={(e) => { setDate(e.target.value); setChosen("") }} className="w-full px-3 py-2.5 rounded-xl border text-sm" />

          {serviceId && (
            <div>
              <div className="text-xs text-[#8A7377] mb-2">Available times</div>
              {slots.length === 0 ? (
                <p className="text-sm text-[#8A7377]">No open times this day — try another date.</p>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {slots.map((s) => (
                    <button key={s} onClick={() => setChosen(s)} className={`text-xs py-2 rounded-lg border ${chosen === s ? "bg-[#B23A5B] text-white border-[#B23A5B]" : "border-[#EEDEE0]"}`}>
                      {new Date(s).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {chosen && (
            <div className="space-y-2 pt-2 border-t border-[#F3E9EA]">
              <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border text-sm" />
              <input placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border text-sm" />
              <button onClick={book} className="w-full bg-[#B23A5B] text-white py-2.5 rounded-xl text-sm">Confirm booking</button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-[#EEDEE0] p-4 space-y-2">
          <div className="font-serif text-lg">Rate your visit</div>
          {rateSent ? (
            <p className="text-sm text-[#8A7377]">Thank you for your feedback!</p>
          ) : (
            <>
              <input placeholder="Your name" value={rateName} onChange={(e) => setRateName(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border text-sm" />
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} onClick={() => setRateStars(n)}>
                    <Star className={`w-6 h-6 ${n <= rateStars ? "fill-[#C9A227] text-[#C9A227]" : "text-[#EEDEE0]"}`} />
                  </button>
                ))}
              </div>
              <textarea placeholder="Comment (optional)" value={rateComment} onChange={(e) => setRateComment(e.target.value)} className="w-full px-3 py-2.5 rounded-xl border text-sm" rows={2} />
              <button onClick={submitReview} className="w-full border border-[#B23A5B] text-[#B23A5B] py-2.5 rounded-xl text-sm">Submit rating</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}