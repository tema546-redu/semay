import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { useAuth } from "../../lib/auth"
import { salonApi } from "../../lib/api"
import SalonLayout from "./SalonLayout"

export default function Settings() {
  const { organization } = useAuth()
  const [photoUrl, setPhotoUrl] = useState(organization?.photoUrl || "")
  const [reviews, setReviews] = useState<any>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => { salonApi.reviews().then(setReviews).catch(() => setReviews(null)) }, [])

  const bookingLink = `${window.location.origin}/book/${organization?.id}`
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(bookingLink)}`

  const savePhoto = async () => {
    setSaving(true)
    try { await salonApi.setPhoto(photoUrl || null) } finally { setSaving(false) }
  }

  return (
    <SalonLayout>
      <div className="max-w-xl mx-auto px-5 py-6 space-y-4 pb-10">
        <h1 className="font-serif text-2xl">Settings</h1>

        <div className="bg-white border border-[#EEDEE0] rounded-2xl p-5 text-sm space-y-3">
          <div>
            <div className="text-[#8A7377]">Business name</div>
            <div className="font-medium">{organization?.name}</div>
          </div>
          <div>
            <div className="text-[#8A7377] mb-1">Logo / cover photo URL</div>
            {photoUrl && <img src={photoUrl} className="w-16 h-16 rounded-full object-cover mb-2" />}
            <div className="flex gap-2">
              <input value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} placeholder="https://..." className="flex-1 px-3 py-2 rounded-xl border text-sm" />
              <button onClick={savePhoto} disabled={saving} className="px-4 py-2 rounded-xl bg-[#B23A5B] text-white text-sm">Save</button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#EEDEE0] rounded-2xl p-5 text-center space-y-3">
          <p className="text-sm text-[#8A7377]">Your booking link</p>
          <img src={qrSrc} alt="Booking QR code" className="mx-auto rounded-lg" />
          <p className="text-xs break-all text-[#8A7377]">{bookingLink}</p>
          <button onClick={() => navigator.clipboard.writeText(bookingLink)} className="text-sm text-[#B23A5B] font-medium">Copy link</button>
        </div>

        <div className="bg-white border border-[#EEDEE0] rounded-2xl p-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Customer rating</span>
            <span className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
              {reviews?.averageRating ?? "—"} · {reviews?.totalReviews ?? 0} reviews
            </span>
          </div>
          {reviews?.reviews?.slice(0, 3).map((r: any) => (
            <div key={r.id} className="text-xs text-[#8A7377] border-t border-[#F3E9EA] pt-2">
              "{r.comment || "No comment"}" — {r.clientName} ({r.rating}★)
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link to="/staff" className="bg-white border border-[#EEDEE0] rounded-xl py-3 text-center text-sm">Staff & invites</Link>
          <Link to="/help" className="bg-white border border-[#EEDEE0] rounded-xl py-3 text-center text-sm">Help</Link>
          <Link to="/billing" className="bg-white border border-[#EEDEE0] rounded-xl py-3 text-center text-sm">Billing & plan</Link>
          <Link to="/profile" className="bg-white border border-[#EEDEE0] rounded-xl py-3 text-center text-sm">My profile</Link>
        </div>
      </div>
    </SalonLayout>
  )
}