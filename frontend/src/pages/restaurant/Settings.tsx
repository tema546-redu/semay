import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Phone,
  Send,
  MessageSquare,
  QrCode,
  Copy,
  ChevronDown,
  ChevronUp,
  MapPin,
  Building2,
} from "lucide-react"
import { restaurantApi, feedbackApi } from "../../lib/api"
import { useAuth } from "../../lib/auth"

const SUPPORT_PHONE = "0953352271"
const TELEGRAM = "https://t.me/semaii_app"

export default function RestaurantSettings() {
  const { organization } = useAuth()
  const [openTime, setOpenTime] = useState("08:00")
  const [closeTime, setCloseTime] = useState("22:00")
  const [name, setName] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [tin, setTin] = useState("")
  const [msg, setMsg] = useState("")
  const [saving, setSaving] = useState(false)

  const [switchBusy, setSwitchBusy] = useState(false)
  const [switchMsg, setSwitchMsg] = useState("")
  const [accountType, setAccountType] = useState<string>("CAFE")
  const [typeSwitchedAt, setTypeSwitchedAt] = useState<string | null>(null)

  const [showFeedback, setShowFeedback] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [fbMsg, setFbMsg] = useState("")
  const [fbBusy, setFbBusy] = useState(false)
  const [myFeedback, setMyFeedback] = useState<any[]>([])

  const orgId = organization?.id || ""
  const customerUrl =
    typeof window !== "undefined" && orgId
      ? `${window.location.origin}/order/${orgId}`
      : ""

  const loadMine = () =>
    feedbackApi
      .mine()
      .then((list) => setMyFeedback(Array.isArray(list) ? list : []))
      .catch(() => setMyFeedback([]))

  useEffect(() => {
    restaurantApi
      .settings()
      .then((s: any) => {
        setOpenTime(s.openTime || "08:00")
        setCloseTime(s.closeTime || "22:00")
        setName(s.name || "")
        setPhotoUrl(s.photoUrl || "")
        setPhone(s.phone || "")
        setAddress(s.address || "")
        setCity(s.city || "")
        setTin(s.tin || "")
        setAccountType(
          s.type || (organization as any)?.type || "CAFE"
        )
        setTypeSwitchedAt(s.typeSwitchedAt || null)
      })
      .catch(console.error)
    loadMine()
  }, [])

  const onLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 1_500_000) {
      setMsg("Max 1.5MB")
      return
    }
    const reader = new FileReader()
    reader.onload = () => setPhotoUrl(String(reader.result || ""))
    reader.readAsDataURL(file)
  }

  const saveHours = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMsg("")
    try {
      await restaurantApi.updateSettings({
        openTime,
        closeTime,
        name: name.trim() || undefined,
        photoUrl: photoUrl || null,
        phone: phone.trim() || null,
        address: address.trim() || null,
        city: city.trim() || null,
        tin: tin.trim() || null,
      })
      setMsg("Saved — these details appear on customer receipts")
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setSaving(false)
    }
  }

  const sendFeedback = async (e: React.FormEvent) => {
    e.preventDefault()
    if (feedback.trim().length < 3) {
      setFbMsg("Write at least a few words")
      return
    }
    setFbBusy(true)
    setFbMsg("")
    try {
      await feedbackApi.send(feedback.trim())
      setFeedback("")
      setFbMsg("Sent — Semay will reply here when we answer")
      loadMine()
    } catch (err: any) {
      setFbMsg(err.message || "Failed to send")
    } finally {
      setFbBusy(false)
    }
  }

  const copyUrl = async () => {
    if (!customerUrl) return
    try {
      await navigator.clipboard.writeText(customerUrl)
      setMsg("Customer link copied")
    } catch {
      setMsg(customerUrl)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50 pb-12">
      <header className="bg-white border-b border-semay-200 h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-700" />
        </Link>
        <h1 className="font-semibold text-sm text-semay-900">Settings</h1>
      </header>

      <div className="max-w-md mx-auto p-4 space-y-4">
        {/* Customer QR */}
        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-3 shadow-sm">
          <h2 className="text-sm font-semibold text-semay-900 flex items-center gap-2">
            <QrCode className="w-4 h-4" />
            Customer order QR
          </h2>
          <p className="text-xs text-semay-500 leading-relaxed">
            Guests scan and order to the kitchen — no login. Print or show this on the table.
          </p>
          {customerUrl ? (
            <>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(customerUrl)}`}
                alt="Customer QR"
                width={180}
                height={180}
                className="mx-auto rounded-lg border border-semay-100"
              />
              <p className="text-[11px] break-all text-semay-600">{customerUrl}</p>
              <button
                type="button"
                onClick={copyUrl}
                className="w-full flex items-center justify-center gap-2 border border-semay-200 py-2.5 rounded-xl text-sm font-medium text-semay-800"
              >
                <Copy className="w-4 h-4" />
                Copy link
              </button>
            </>
          ) : (
            <p className="text-xs text-semay-400">Sign in as owner to see your QR link.</p>
          )}
        </div>

        {/* Business profile — receipt header */}
        <form
          onSubmit={saveHours}
          className="bg-white border border-semay-200 rounded-2xl p-5 space-y-3 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-semay-900 flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Restaurant on receipts
          </h2>
          <p className="text-[11px] text-semay-500 leading-relaxed">
            Name, phone, location and TIN print on management receipts. TIN is issued by the tax
            authority — Semay only stores what you enter. Receipts are operational (non-fiscal)
            until a certified fiscal path is connected.
          </p>

          <div>
            <label className="text-xs text-semay-500">Business name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
              placeholder="Your restaurant or café name"
            />
          </div>

          <div>
            <label className="text-xs text-semay-500">Logo / photo</label>
            <input type="file" accept="image/*" onChange={onLogo} className="mt-1 text-sm w-full" />
            {photoUrl ? (
              <img
                src={photoUrl}
                alt=""
                className="mt-2 h-16 w-16 object-cover rounded-xl border border-semay-100"
              />
            ) : null}
          </div>

          <div>
            <label className="text-xs text-semay-500 flex items-center gap-1">
              <Phone className="w-3 h-3" /> Business phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
              placeholder="09xxxxxxxx"
            />
          </div>

          <div>
            <label className="text-xs text-semay-500 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Address / location
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
              placeholder="Street, area, landmark"
            />
          </div>

          <div>
            <label className="text-xs text-semay-500">City</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
              placeholder="Addis Ababa"
            />
          </div>

          <div>
            <label className="text-xs text-semay-500">TIN (tax number)</label>
            <input
              value={tin}
              onChange={(e) => setTin(e.target.value)}
              className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm font-mono"
              placeholder="Optional — from tax registration"
            />
            <p className="text-[10px] text-semay-400 mt-1">
              Printed on receipts when set. Does not make the receipt a government fiscal invoice.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-semay-500">Open</label>
              <input
                type="time"
                value={openTime}
                onChange={(e) => setOpenTime(e.target.value)}
                className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-semay-500">Close</label>
              <input
                type="time"
                value={closeTime}
                onChange={(e) => setCloseTime(e.target.value)}
                className="mt-1 w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm"
              />
            </div>
          </div>

          {msg ? <p className="text-sm text-emerald-700">{msg}</p> : null}
          <button
            type="submit"
            disabled={saving}
            className="w-full bg-semay-900 text-white py-2.5 rounded-xl text-sm font-medium disabled:opacity-50"
          >
            {saving ? "..." : "Save business details"}
          </button>
        </form>

        {/* One-time: Café → Restaurant */}
        {(accountType === "CAFE" || accountType === "cafe") && !typeSwitchedAt ? (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3 shadow-sm">
            <h2 className="text-sm font-semibold text-amber-950">
              Switch to restaurant account
            </h2>
            <p className="text-xs text-amber-900/80 leading-relaxed">
              Keep all menus, stock, staff and sales. Only the account type and monthly billing
              change to restaurant. This can be done <strong>only once</strong>.
            </p>
            <ul className="text-xs text-amber-900/80 list-disc pl-4 space-y-1">
              <li>Menus &amp; recipes stay</li>
              <li>Stock (bar / kitchen / store) stays</li>
              <li>Staff &amp; history stay</li>
              <li>Price becomes restaurant plan after switch</li>
            </ul>
            {switchMsg ? (
              <p className="text-sm text-amber-950">{switchMsg}</p>
            ) : null}
            <button
              type="button"
              disabled={switchBusy}
              onClick={async () => {
                if (
                  !confirm(
                    "Switch this café to a restaurant account?\n\nMenus and stock will stay.\nBilling will use the restaurant price.\nYou cannot undo this yourself."
                  )
                ) {
                  return
                }
                setSwitchBusy(true)
                setSwitchMsg("")
                try {
                  const r = await restaurantApi.switchToRestaurant()
                  setSwitchMsg(r.message || "Switched to restaurant")
                  setAccountType("RESTAURANT")
                  setTypeSwitchedAt(new Date().toISOString())
                  window.location.reload()
                } catch (err: any) {
                  setSwitchMsg(err?.message || err?.error || "Switch failed")
                } finally {
                  setSwitchBusy(false)
                }
              }}
              className="w-full bg-amber-900 text-white py-2.5 rounded-xl text-sm font-medium disabled:opacity-50"
            >
              {switchBusy ? "..." : "Switch café → restaurant (once)"}
            </button>
          </div>
        ) : accountType === "RESTAURANT" || accountType === "restaurant" ? (
          <div className="bg-white border border-semay-200 rounded-2xl p-4 text-xs text-semay-600">
            Account type: <strong>Restaurant</strong>
            {typeSwitchedAt ? " · switched earlier (locked)" : null}
          </div>
        ) : null}

        {/* Feedback */}
        <div className="bg-white border border-semay-200 rounded-2xl shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => setShowFeedback((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-semay-900">
              <span className="w-9 h-9 rounded-xl bg-semay-100 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-semay-800" />
              </span>
              Message Semay
            </span>
            {showFeedback ? (
              <ChevronUp className="w-4 h-4 text-semay-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-semay-400" />
            )}
          </button>

          {showFeedback && (
            <form
              onSubmit={sendFeedback}
              className="px-5 pb-5 space-y-3 border-t border-semay-100 pt-4"
            >
              <p className="text-xs text-semay-500">
                We read every message in the Semay admin panel and can reply here.
              </p>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className="w-full px-3 py-2.5 rounded-xl border border-semay-200 text-sm resize-none"
                placeholder="What should we improve? What do you need?"
              />
              {fbMsg ? <p className="text-sm text-semay-700">{fbMsg}</p> : null}
              <button
                type="submit"
                disabled={fbBusy}
                className="w-full flex items-center justify-center gap-2 bg-semay-900 text-white py-2.5 rounded-xl text-sm font-medium disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {fbBusy ? "..." : "Send message"}
              </button>
            </form>
          )}
        </div>

        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-3 shadow-sm">
          <h2 className="text-sm font-semibold text-semay-900">Your messages</h2>
          {myFeedback.length === 0 ? (
            <p className="text-xs text-semay-400">
              No messages yet. Tap “Message Semay” above.
            </p>
          ) : (
            myFeedback.map((f) => (
              <div key={f.id} className="border border-semay-100 rounded-xl p-3 text-sm">
                <p className="text-semay-800 whitespace-pre-wrap">{f.message}</p>
                <p className="text-[11px] text-semay-400 mt-1">
                  {f.createdAt ? new Date(f.createdAt).toLocaleString() : ""}
                </p>
                {f.reply ? (
                  <div className="mt-2 bg-emerald-50 border border-emerald-100 rounded-lg p-2 text-emerald-900">
                    <span className="text-[11px] font-medium">Semay reply</span>
                    <p className="mt-0.5 whitespace-pre-wrap text-sm">{f.reply}</p>
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>

        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-3 shadow-sm">
          <h2 className="text-sm font-semibold text-semay-900">Contact Semay support</h2>
          <a
            href={`tel:${SUPPORT_PHONE}`}
            className="flex items-center gap-2 text-sm text-semay-800"
          >
            <Phone className="w-4 h-4" />
            {SUPPORT_PHONE}
          </a>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-sky-700"
          >
            <Send className="w-4 h-4" />
            Telegram · @semaii_app
          </a>
        </div>

        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-2 shadow-sm">
          <h2 className="text-sm font-semibold text-semay-900">About Semay</h2>
          <p className="text-sm text-semay-600 leading-relaxed">
            Semay (ሰማይ) is a simple operating system for businesses in Ethiopia — restaurants,
            cafés, bakeries, pharmacies, libraries and more. Take orders, run the kitchen, manage
            staff and see today’s sales in one clean place.
          </p>
          <p className="text-xs text-semay-400">Semay · ሰማይ · Built for Ethiopia & Africa</p>
        </div>

        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-3 shadow-sm">
          <h2 className="text-sm font-semibold text-semay-900">FAQ</h2>
          <details className="text-sm">
            <summary className="font-medium text-semay-800 cursor-pointer">What is POS?</summary>
            <p className="text-semay-500 mt-1.5 pl-1 leading-relaxed">
              Point of Sale — waiters take table orders and send them to the kitchen (KDS).
            </p>
          </details>
          <details className="text-sm">
            <summary className="font-medium text-semay-800 cursor-pointer">
              Are receipts official tax invoices?
            </summary>
            <p className="text-semay-500 mt-1.5 pl-1 leading-relaxed">
              Semay receipts are management receipts (with optional TIN text and QR for internal
              control). Government fiscal invoices need a certified process or device. Ask your
              accountant for tax filing.
            </p>
          </details>
          <details className="text-sm">
            <summary className="font-medium text-semay-800 cursor-pointer">
              How does the free trial work?
            </summary>
            <p className="text-semay-500 mt-1.5 pl-1 leading-relaxed">
              3 days free after register. Then pay with Telebirr or CBE; Semay activates after
              verification.
            </p>
          </details>
          <details className="text-sm">
            <summary className="font-medium text-semay-800 cursor-pointer">How do staff join?</summary>
            <p className="text-semay-500 mt-1.5 pl-1 leading-relaxed">
              Staff → Create invite → worker opens the link. Waiters get staff home; kitchen gets
              KDS.
            </p>
          </details>
          <details className="text-sm">
            <summary className="font-medium text-semay-800 cursor-pointer">Need help?</summary>
            <p className="text-semay-500 mt-1.5 pl-1 leading-relaxed">
              Call {SUPPORT_PHONE}, Telegram{" "}
              <a
                href={TELEGRAM}
                className="text-sky-600 underline"
                target="_blank"
                rel="noreferrer"
              >
                t.me/semaii_app
              </a>
              , or Message Semay above.
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}