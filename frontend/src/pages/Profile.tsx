import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { authApi } from "../lib/api"

export default function Profile() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [msg, setMsg] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    authApi
      .me()
      .then((d) => {
        const u = d.user || d
        setName(u.name || "")
        setPhone(u.phone || "")
        setEmail(u.email || "")
        setAvatarUrl(u.avatarUrl || "")
      })
      .catch(console.error)
  }, [])

  const onPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 1_000_000) {
      setMsg("Max 1MB")
      return
    }
    const reader = new FileReader()
    reader.onload = () => setAvatarUrl(String(reader.result || ""))
    reader.readAsDataURL(file)
  }

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMsg("")
    try {
      await authApi.updateMe({
        name: name.trim(),
        phone: phone.trim() || null,
        avatarUrl: avatarUrl || null,
      })
      setMsg("Saved")
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setSaving(false)
    }
  }

  const removePhoto = async () => {
    setAvatarUrl("")
    setMsg("")
    try {
      await authApi.updateMe({ avatarUrl: null })
      setMsg("Photo removed")
    } catch (err: any) {
      setMsg(err.message || "Failed to remove photo")
    }
  }

  return (
    <div className="min-h-svh bg-slate-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3 sticky top-0">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-slate-100">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </Link>
        <h1 className="font-semibold text-slate-900 text-sm">Profile</h1>
      </header>

      <form onSubmit={save} className="max-w-md mx-auto p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden shrink-0">
            {avatarUrl ? (
              <img src={avatarUrl} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 text-xl font-medium">
                {(name || "?")[0]}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <input type="file" accept="image/*" onChange={onPhoto} className="text-sm" />
            {avatarUrl && (
              <button
                type="button"
                onClick={removePhoto}
                className="block text-sm text-red-600 hover:underline"
              >
                Remove photo
              </button>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
          <input
            value={email}
            disabled
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-100 text-sm bg-slate-50 text-slate-500"
          />
        </div>

        {msg && <p className="text-sm text-slate-600">{msg}</p>}

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-slate-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-50"
        >
          {saving ? "..." : "Save profile"}
        </button>
      </form>
    </div>
  )
}