import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { restaurantApi } from "../../lib/api"

export default function BakerySettings() {
  const [openTime, setOpenTime] = useState("06:00")
  const [closeTime, setCloseTime] = useState("20:00")
  const [name, setName] = useState("")
  const [msg, setMsg] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    restaurantApi
      .settings()
      .then((s) => {
        setOpenTime(s.openTime || "06:00")
        setCloseTime(s.closeTime || "20:00")
        setName(s.name || "")
      })
      .catch(console.error)
  }, [])

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMsg("")
    try {
      await restaurantApi.updateSettings({ openTime, closeTime })
      setMsg("Hours saved")
    } catch (err: any) {
      setMsg(err.message || "Failed to save")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/bakery" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <h1 className="font-semibold text-semay-900 text-sm">Bakery settings</h1>
      </header>

      <div className="max-w-md mx-auto p-6">
        <form onSubmit={save} className="bg-white border border-semay-200 rounded-2xl p-6 space-y-4 shadow-sm">
          {name && (
            <p className="text-sm text-semay-500">
              Business: <span className="font-medium text-semay-800">{name}</span>
            </p>
          )}
          <p className="text-sm text-semay-500">Opening and closing hours</p>
          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1">Open</label>
            <input
              type="time"
              value={openTime}
              onChange={(e) => setOpenTime(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1">Close</label>
            <input
              type="time"
              value={closeTime}
              onChange={(e) => setCloseTime(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm"
            />
          </div>
          {msg && <div className="text-sm text-emerald-700">{msg}</div>}
          <button
            type="submit"
            disabled={saving}
            className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium disabled:opacity-60"
          >
            {saving ? "..." : "Save hours"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/billing" className="text-sm text-semay-600 underline underline-offset-2">
            Billing & subscription
          </Link>
        </div>
      </div>
    </div>
  )
}