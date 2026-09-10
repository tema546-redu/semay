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
  const [showDanger, setShowDanger] = useState(false)
  const [deleting, setDeleting] = useState(false)

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
        email: email.trim().toLowerCase(),
      })
      setMsg("Profile saved")
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

  const deleteAccount = async () => {
    if (
      !confirm(
        "Delete your login permanently?\n\nBusiness data may remain for the organization. This cannot be undone."
      )
    ) {
      return
    }
    setDeleting(true)
    setMsg("")
    try {
      await authApi.deleteAccount()
      localStorage.removeItem("semay_token")
      localStorage.removeItem("token")
      window.location.href = "/"
    } catch (err: any) {
      setMsg(err.message || "Failed to delete account")
      setDeleting(false)
    }
  }

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b border-stone-200 h-14 px-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-stone-100">
          <ArrowLeft className="w-5 h-5 text-stone-600" />
        </Link>
        <h1 className="font-semibold text-stone-900 text-sm">Your profile</h1>
      </header>

      <form onSubmit={save} className="max-w-md mx-auto p-5 space-y-5">
        <p className="text-xs text-stone-500 leading-relaxed">
          This is your personal login. Restaurant phone, address and TIN are under{" "}
          <Link to="/settings" className="underline text-stone-800">
            Settings
          </Link>
          .
        </p>

        <div className="bg-white border border-stone-200 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-stone-100 overflow-hidden shrink-0 border border-stone-200">
              {avatarUrl ? (
                <img src={avatarUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-stone-500 text-xl font-medium">
                  {(name || "?")[0]}
                </div>
              )}
            </div>
            <div className="space-y-1.5 min-w-0">
              <input type="file" accept="image/*" onChange={onPhoto} className="text-xs w-full" />
              {avatarUrl ? (
                <button
                  type="button"
                  onClick={removePhoto}
                  className="text-xs text-stone-500 hover:text-stone-800"
                >
                  Remove photo
                </button>
              ) : null}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">Personal phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm"
              placeholder="Optional"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm"
              required
            />
            <p className="text-[11px] text-stone-400 mt-1">Used to sign in. Must be unique.</p>
          </div>

          {msg ? <p className="text-sm text-stone-600">{msg}</p> : null}

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-stone-900 text-white py-3 rounded-xl text-sm font-medium disabled:opacity-50"
          >
            {saving ? "..." : "Save profile"}
          </button>
        </div>

        {/* Quiet account section — not a loud red box */}
        <div className="pt-2">
          {!showDanger ? (
            <button
              type="button"
              onClick={() => setShowDanger(true)}
              className="text-xs text-stone-400 hover:text-stone-600 underline-offset-2 hover:underline"
            >
              Account options
            </button>
          ) : (
            <div className="rounded-xl border border-stone-200 bg-white p-4 space-y-3">
              <p className="text-xs text-stone-500 leading-relaxed">
                Closing your login removes this user. For restaurant data or billing help, contact
                Semay support first.
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setShowDanger(false)}
                  className="text-xs px-3 py-2 rounded-lg border border-stone-200 text-stone-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={deleting}
                  onClick={deleteAccount}
                  className="text-xs px-3 py-2 rounded-lg text-stone-500 hover:text-rose-700 hover:bg-rose-50 disabled:opacity-50"
                >
                  {deleting ? "Removing…" : "Delete my login"}
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}