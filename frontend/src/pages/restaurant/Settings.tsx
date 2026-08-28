import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Phone, Send, MessageSquare } from "lucide-react"
import { restaurantApi } from "../../lib/api"
import { feedbackApi } from "../../lib/api"

const PHONE = "0953352271"
const TELEGRAM = "https://t.me/semaii_app"

export default function RestaurantSettings() {
  const [openTime, setOpenTime] = useState("08:00")
  const [closeTime, setCloseTime] = useState("22:00")
  const [msg, setMsg] = useState("")
  const [saving, setSaving] = useState(false)

  const [feedback, setFeedback] = useState("")
  const [fbMsg, setFbMsg] = useState("")
  const [fbBusy, setFbBusy] = useState(false)
  const [myFeedback, setMyFeedback] = useState<any[]>([])

  const loadMine = () =>
    feedbackApi
      .mine()
      .then(setMyFeedback)
      .catch(() => setMyFeedback([]))

  useEffect(() => {
    restaurantApi
      .settings()
      .then((s) => {
        setOpenTime(s.openTime || "08:00")
        setCloseTime(s.closeTime || "22:00")
      })
      .catch(console.error)
    loadMine()
  }, [])

  const saveHours = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMsg("")
    try {
      await restaurantApi.updateSettings({ openTime, closeTime })
      setMsg("Hours saved")
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setSaving(false)
    }
  }

  const sendFeedback = async (e: React.FormEvent) => {
    e.preventDefault()
    if (feedback.trim().length < 3) {
      setFbMsg("Write a short message")
      return
    }
    setFbBusy(true)
    setFbMsg("")
    try {
      await feedbackApi.send(feedback.trim())
      setFeedback("")
      setFbMsg("Sent — Semay will reply here")
      loadMine()
    } catch (err: any) {
      setFbMsg(err.message || "Failed")
    } finally {
      setFbBusy(false)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50 pb-12">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Settings</h1>
      </header>

      <div className="max-w-md mx-auto p-4 space-y-4">
        {/* Hours */}
        <form
          onSubmit={saveHours}
          className="bg-white border border-semay-200 rounded-2xl p-5 space-y-3 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-semay-900">Opening hours</h2>
          <div>
            <label className="text-xs text-semay-500">Open</label>
            <input
              type="time"
              value={openTime}
              onChange={(e) => setOpenTime(e.target.value)}
              className="mt-1 w-full px-3 py-2.5 rounded-xl border text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-semay-500">Close</label>
            <input
              type="time"
              value={closeTime}
              onChange={(e) => setCloseTime(e.target.value)}
              className="mt-1 w-full px-3 py-2.5 rounded-xl border text-sm"
            />
          </div>
          {msg && <p className="text-sm text-emerald-700">{msg}</p>}
          <button
            type="submit"
            disabled={saving}
            className="w-full bg-semay-900 text-white py-2.5 rounded-xl text-sm font-medium disabled:opacity-50"
          >
            {saving ? "..." : "Save hours"}
          </button>
        </form>

        {/* Feedback */}
        <form
          onSubmit={sendFeedback}
          className="bg-white border border-semay-200 rounded-2xl p-5 space-y-3 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-semay-900 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Feedback
          </h2>
          <p className="text-xs text-semay-500">
            Goes to the Semay team. We read every message.
          </p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            placeholder="What should we improve? What do you need?"
            className="w-full px-3 py-2.5 rounded-xl border text-sm resize-none"
          />
          {fbMsg && <p className="text-sm text-semay-700">{fbMsg}</p>}
          <button
            type="submit"
            disabled={fbBusy}
            className="w-full bg-semay-900 text-white py-2.5 rounded-xl text-sm font-medium disabled:opacity-50"
          >
            {fbBusy ? "..." : "Send feedback"}
          </button>
        </form>

        {/* Your messages + admin replies */}
        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-3 shadow-sm">
          <h2 className="text-sm font-semibold text-semay-900">Your messages</h2>
          {myFeedback.length === 0 ? (
            <p className="text-xs text-semay-400">No messages yet</p>
          ) : (
            myFeedback.map((f) => (
              <div key={f.id} className="border border-semay-100 rounded-xl p-3 text-sm">
                <p className="text-semay-800 whitespace-pre-wrap">{f.message}</p>
                <p className="text-xs text-semay-400 mt-1">
                  {f.createdAt ? new Date(f.createdAt).toLocaleString() : ""}
                </p>
                {f.reply && (
                  <div className="mt-2 bg-emerald-50 border border-emerald-100 rounded-lg p-2 text-emerald-900">
                    <span className="text-xs font-medium">Semay reply</span>
                    <p className="mt-0.5 whitespace-pre-wrap">{f.reply}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Contact */}
        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-3 shadow-sm">
          <h2 className="text-sm font-semibold text-semay-900">Contact</h2>
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm text-semay-800">
            <Phone className="w-4 h-4" /> {PHONE}
          </a>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-sky-700"
          >
            <Send className="w-4 h-4" /> Telegram: @semaii_app
          </a>
          <p className="text-xs text-semay-400">Call or message for setup help and billing.</p>
        </div>

        {/* About */}
        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-2 shadow-sm">
          <h2 className="text-sm font-semibold text-semay-900">About Semay</h2>
          <p className="text-sm text-semay-600 leading-relaxed">
            Semay (ሰማይ) is a simple operating system for businesses in Ethiopia —
            restaurants, cafés, bakeries and more. Take orders, run the kitchen,
            manage staff and see today’s sales in one clean place. Built for real
            daily work on your phone.
          </p>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-3 shadow-sm">
          <h2 className="text-sm font-semibold text-semay-900">FAQ</h2>
          <details className="text-sm">
            <summary className="font-medium text-semay-800 cursor-pointer">What is POS?</summary>
            <p className="text-semay-500 mt-1 pl-1">
              Point of Sale — where waiters take orders and send them to the kitchen.
            </p>
          </details>
          <details className="text-sm">
            <summary className="font-medium text-semay-800 cursor-pointer">
              How does the free trial work?
            </summary>
            <p className="text-semay-500 mt-1 pl-1">
              3 days free after you register. Then choose a plan and pay with Telebirr or CBE.
              Semay activates your account after verifying payment.
            </p>
          </details>
          <details className="text-sm">
            <summary className="font-medium text-semay-800 cursor-pointer">How do staff join?</summary>
            <p className="text-semay-500 mt-1 pl-1">
              Owner opens Staff → creates invite → worker opens the link and registers.
            </p>
          </details>
          <details className="text-sm">
            <summary className="font-medium text-semay-800 cursor-pointer">Need help?</summary>
            <p className="text-semay-500 mt-1 pl-1">
              Call {PHONE} or Telegram{" "}
              <a
                href={TELEGRAM}
                className="text-sky-600 underline"
                target="_blank"
                rel="noreferrer"
              >
                t.me/semaii_app
              </a>
              .
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}