import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Copy, UserPlus } from "lucide-react"
import { staffApi } from "../../lib/api"

export default function StaffPage() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [users, setUsers] = useState<any[]>([])
  const [invites, setInvites] = useState<any[]>([])
  const [role, setRole] = useState("WAITER")
  const [loading, setLoading] = useState(true)
  const [lastLink, setLastLink] = useState("")
  const [msg, setMsg] = useState("")

  const load = () =>
    staffApi
      .list()
      .then((d) => {
        setUsers(d.users || [])
        setInvites(d.invites || [])
      })
      .catch(console.error)
      .finally(() => setLoading(false))

  useEffect(() => {
    load()
  }, [])

  const createInvite = async () => {
    setMsg("")
    try {
      const inv = await staffApi.createInvite(role)
      const link = `${window.location.origin}/join/${inv.code}`
      setLastLink(link)
      setMsg(isAm ? "ግብዣ ተፈጥሯል" : "Invite created")
      load()
    } catch (e: any) {
      setMsg(e.message || "Failed")
    }
  }

  const copy = async () => {
    if (!lastLink) return
    await navigator.clipboard.writeText(lastLink)
    setMsg(isAm ? "ሊንክ ተቀድቷል" : "Link copied")
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b border-semay-200 px-6 h-14 flex items-center gap-4 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <h1 className="font-semibold text-semay-900">{isAm ? "ሰራተኞች" : "Staff"}</h1>
      </header>

      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div className="bg-white border border-semay-200 rounded-2xl p-5 space-y-4">
          <h2 className="font-semibold text-semay-900 flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            {isAm ? "ሰራተኛ ጋብዝ" : "Invite staff"}
          </h2>
          <p className="text-sm text-semay-500">
            {isAm
              ? "Waiter ወይም Kitchen ሚና ይምረጡ። ሊንኩን ለሰራተኛው ይላኩ።"
              : "Choose Waiter or Kitchen. Send the link to your staff."}
          </p>
          <div className="flex flex-wrap gap-2 items-center">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="px-3 py-2 rounded-xl border border-semay-200 text-sm"
            >
              <option value="WAITER">Waiter (POS)</option>
              <option value="KITCHEN">Kitchen (KDS)</option>
              <option value="MANAGER">Manager</option>
              <option value="STAFF">Staff</option>
            </select>
            <button
              onClick={createInvite}
              className="bg-semay-900 text-white text-sm font-medium px-4 py-2 rounded-full"
            >
              {isAm ? "ግብዣ ፍጠር" : "Create invite"}
            </button>
          </div>
          {lastLink && (
            <div className="flex gap-2 items-center bg-semay-50 rounded-xl p-3">
              <code className="text-xs flex-1 break-all text-semay-800">{lastLink}</code>
              <button onClick={copy} className="p-2 rounded-lg hover:bg-white border border-semay-200">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          )}
          {msg && <p className="text-sm text-semay-600">{msg}</p>}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-semay-500 uppercase tracking-wide mb-3">
            {isAm ? "ቡድን" : "Team"}
          </h3>
          {loading ? (
            <p className="text-sm text-semay-400">Loading...</p>
          ) : (
            <div className="bg-white border border-semay-200 rounded-2xl divide-y divide-semay-100">
              {users.map((u) => (
                <div key={u.id} className="px-4 py-3 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-semay-900">{u.name}</div>
                    <div className="text-xs text-semay-400">{u.email}</div>
                  </div>
                  <span className="text-xs font-medium bg-semay-100 text-semay-700 px-2 py-1 rounded-full">
                    {u.role}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {invites.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-semay-500 uppercase tracking-wide mb-3">
              {isAm ? "ንቁ ግብዣዎች" : "Open invites"}
            </h3>
            <div className="bg-white border border-semay-200 rounded-2xl divide-y divide-semay-100">
              {invites.map((inv) => (
                <div key={inv.id} className="px-4 py-3 flex justify-between text-sm">
                  <span className="font-mono">{inv.code}</span>
                  <span className="text-semay-500">{inv.role}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}