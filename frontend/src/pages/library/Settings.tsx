import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { libraryApi } from "../../lib/api"

export default function LibrarySettings() {
  const [name, setName] = useState("")
  const [openTime, setOpenTime] = useState("08:00")
  const [closeTime, setCloseTime] = useState("22:00")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [phone, setPhone] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const [msg, setMsg] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    libraryApi
      .settings()
      .then((s) => {
        setName(s.name || "")
        setOpenTime(s.openTime || "08:00")
        setCloseTime(s.closeTime || "22:00")
        setAddress(s.address || "")
        setCity(s.city || "")
        setPhone(s.phone || "")
        setPhotoUrl(s.photoUrl || "")
      })
      .catch(() => setMsg("Could not load settings"))
  }, [])

  const onPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 1_500_000) {
      setMsg("Photo max 1.5MB")
      return
    }
    const reader = new FileReader()
    reader.onload = () => setPhotoUrl(String(reader.result || ""))
    reader.readAsDataURL(file)
  }

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMsg("")
    try {
      await libraryApi.updateSettings({
        name: name.trim(),
        openTime,
        closeTime,
        address: address.trim() || null,
        city: city.trim() || null,
        phone: phone.trim() || null,
        photoUrl: photoUrl || null,
      })
      setMsg("Saved — public page will show these details")
    } catch (err: any) {
      setMsg(err.message || "Failed to save")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/library" className="text-stone-500">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Library settings</h1>
      </header>

      <form onSubmit={save} className="max-w-md mx-auto p-4 space-y-4 pb-10">
        <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
          <label className="block text-xs font-medium text-stone-500">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1">Open</label>
              <input
                type="time"
                value={openTime}
                onChange={(e) => setOpenTime(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-500 mb-1">Close</label>
              <input
                type="time"
                value={closeTime}
                onChange={(e) => setCloseTime(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border text-sm"
              />
            </div>
          </div>

          <label className="block text-xs font-medium text-stone-500">City</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
            placeholder="Addis Ababa"
          />

          <label className="block text-xs font-medium text-stone-500">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
          />

          <label className="block text-xs font-medium text-stone-500">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border text-sm"
          />

          <label className="block text-xs font-medium text-stone-500">Cover photo</label>
          <input type="file" accept="image/*" onChange={onPhoto} className="text-sm w-full" />
          {photoUrl && (
            <div className="flex items-center gap-3">
              <img src={photoUrl} alt="" className="h-20 w-28 object-cover rounded-lg border" />
              <button
                type="button"
                className="text-xs text-rose-600"
                onClick={() => setPhotoUrl("")}
              >
                Remove photo
              </button>
            </div>
          )}
        </div>

        {msg && <p className="text-sm text-stone-600">{msg}</p>}

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-stone-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-50"
        >
          {saving ? "…" : "Save settings"}
        </button>
      </form>
    </div>
  )
}