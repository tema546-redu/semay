import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { authApi } from "../lib/api"

export default function Profile() {
  const [user, setUser] = useState<any>(null)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [msg, setMsg] = useState("")
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    authApi.me().then((d) => {
      const u = d.user || d
      setUser(u)
      setName(u.name || "")
      setPhone(u.phone || "")
      setAvatarUrl(u.avatarUrl || "")
    })
  }, [])

  const onPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 1_000_000) {
      setMsg("Max 1MB for profile photo")
      return
    }
    const reader = new FileReader()
    reader.onload = () => setAvatarUrl(String(reader.result || ""))
    reader.readAsDataURL(file)
  }

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const u = await authApi.updateMe({ name, phone, avatarUrl })
      setUser(u)
      setMsg("Saved")
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/dashboard">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Profile</h1>
      </header>
      <form onSubmit={save} className="max-w-md mx-auto p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-semay-200 overflow-hidden">
            {avatarUrl ? (
              <img src={avatarUrl} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-semay-500 text-xl">
                {(name || "?")[0]}
              </div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={onPhoto} className="text-sm" />
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full px-3.5 py-2.5 rounded-xl border text-sm"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="w-full px-3.5 py-2.5 rounded-xl border text-sm"
        />
        <p className="text-xs text-semay-400">{user?.email}</p>
        {msg && <p className="text-sm text-semay-600">{msg}</p>}
        <button
          type="submit"
          disabled={saving}
          className="w-full bg-semay-900 text-white py-3 rounded-xl text-sm font-medium"
        >
          {saving ? "..." : "Save profile"}
        </button>
      </form>
    </div>
  )
}