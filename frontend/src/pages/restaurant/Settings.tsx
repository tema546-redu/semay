import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft } from "lucide-react"
import { restaurantApi } from "../../lib/api"

export default function RestaurantSettings() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [openTime, setOpenTime] = useState("08:00")
  const [closeTime, setCloseTime] = useState("22:00")
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState("")

  useEffect(() => {
    restaurantApi.settings().then((s) => {
      setOpenTime(s.openTime || "08:00")
      setCloseTime(s.closeTime || "22:00")
    }).catch(console.error)
  }, [])

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMsg("")
    try {
      await restaurantApi.updateSettings({ openTime, closeTime })
      setMsg(isAm ? "ተቀምጧል" : "Saved")
    } catch {
      setMsg("Failed")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100"><ArrowLeft className="w-5 h-5 text-semay-600" /></Link>
        <h1 className="font-semibold text-semay-900">{isAm ? "ቅንብሮች" : "Restaurant Settings"}</h1>
      </header>
      <div className="max-w-md mx-auto p-6">
        <form onSubmit={save} className="bg-white border border-semay-200 rounded-2xl p-6 space-y-4">
          <p className="text-sm text-semay-500">{isAm ? "የመክፈቻ እና የመዝጊያ ሰዓት" : "Opening and closing hours"}</p>
          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "መክፈቻ" : "Open"}</label>
            <input type="time" value={openTime} onChange={(e) => setOpenTime(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-semay-700 mb-1">{isAm ? "መዝጊያ" : "Close"}</label>
            <input type="time" value={closeTime} onChange={(e) => setCloseTime(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl border border-semay-200 text-sm" />
          </div>
          {msg && <div className="text-sm text-success">{msg}</div>}
          <button type="submit" disabled={saving} className="w-full bg-semay-900 text-white py-3 rounded-xl font-medium disabled:opacity-60">
            {saving ? "..." : (isAm ? "አስቀምጥ" : "Save hours")}
          </button>
        </form>
      </div>
    </div>
  )
}
