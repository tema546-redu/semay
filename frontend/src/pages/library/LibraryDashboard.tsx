import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { libraryApi, staffApi } from "../../lib/api"
import { useAuth } from "../../lib/auth"
import { cn } from "../../lib/utils"
import {
  BookOpen,
  LogOut,
  Users,
  CreditCard,
  Copy,
  RefreshCw,
  Settings,
  FileText,
  LayoutDashboard,
  ClipboardList,
  UserCircle,
  Building2,
  QrCode,
  BookMarked,
  Table2,
} from "lucide-react"

function NavItem({
  to,
  icon,
  label,
  active,
  onClick,
}: {
  to: string
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition",
        active ? "bg-stone-900 text-white" : "text-stone-600 hover:bg-stone-100"
      )}
    >
      {icon}
      {label}
    </Link>
  )
}

export default function LibraryDashboard() {
  const { user, organization, logout, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  const [data, setData] = useState<any>(null)
  const [invite, setInvite] = useState<any>(null)
  const [deskLink, setDeskLink] = useState("")
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(true)

  const load = () => {
    setLoading(true)
    libraryApi
      .dashboard()
      .then(setData)
      .catch((e) => setMsg(e.message || "Could not load dashboard"))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (authLoading) return
    if (organization?.type && organization.type !== "LIBRARY") {
      navigate("/dashboard", { replace: true })
      return
    }
    load()
  }, [organization, authLoading, navigate])

  const toggleOpen = async () => {
    setMsg("")
    try {
      const next = !(data?.isOpen !== false)
      await libraryApi.setOpen(next)
      setData((d: any) => ({ ...(d || {}), isOpen: next }))
    } catch (e: any) {
      setMsg(e.message || "Failed to update status")
    }
  }

  const makeQr = async () => {
    setMsg("")
    try {
      const inv = await libraryApi.ensureInvite()
      setInvite(inv)
      setMsg("Visitor link ready")
    } catch (e: any) {
      setMsg(e.message || "Failed to create invite")
    }
  }

  const inviteDesk = async () => {
    setMsg("")
    try {
      const inv = await staffApi.createInvite("STAFF")
      const code = inv.code || inv.invite?.code
      const link = `${window.location.origin}/join?code=${code}`
      setDeskLink(link)
      setMsg("Desk invite created")
    } catch (e: any) {
      setMsg(e.message || "Failed to create desk invite")
    }
  }

  const copyText = async (text: string) => {
    if (!text) return
    try {
      await navigator.clipboard.writeText(text)
      setMsg("Copied")
    } catch {
      setMsg(text)
    }
  }

  const joinUrl =
    invite?.joinUrl ||
    invite?.url ||
    (invite?.code || invite?.inviteCode
      ? `${window.location.origin}/public/libraries/${organization?.id}?code=${invite.code || invite.inviteCode}`
      : null)

  const qrImageUrl = joinUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(joinUrl)}`
    : null

 const sideNav = [
  { to: "/library", label: "Home", icon: <LayoutDashboard className="w-4 h-4" /> },
  { to: "/library/books", label: "Books", icon: <BookOpen className="w-4 h-4" /> },
  { to: "/library/loans", label: "Loans", icon: <BookMarked className="w-4 h-4" /> },
  { to: "/library/tables", label: "Tables", icon: <Table2 className="w-4 h-4" /> },
  { to: "/library/reports", label: "Reports", icon: <FileText className="w-4 h-4" /> },
  { to: "/library/attendance", label: "Attendance", icon: <ClipboardList className="w-4 h-4" /> },
  { to: "/library/settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
  { to: "/profile", label: "Profile", icon: <UserCircle className="w-4 h-4" /> },
  { to: "/library/network", label: "Libraries", icon: <Building2 className="w-4 h-4" /> },
]

  const footerNav = [
    { to: "/library", label: "Home", icon: <LayoutDashboard className="w-5 h-5" /> },
    { to: "/library/books", label: "Books", icon: <BookOpen className="w-5 h-5" /> },
    { to: "/library/reports", label: "Reports", icon: <FileText className="w-5 h-5" /> },
    { to: "/library/attendance", label: "Desk", icon: <ClipboardList className="w-5 h-5" /> },
    { to: "/library/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ]

  if (authLoading) {
    return (
      <div className="min-h-svh flex items-center justify-center text-sm text-stone-500">
        Loading…
      </div>
    )
  }

   useEffect(() => {
    if (authLoading) return
    const role = String(user?.role || "").toUpperCase()
    if (role === "STAFF" || role === "WAITER") {
      navigate("/library/attendance", { replace: true })
    }
  }, [user?.role, authLoading, navigate])

  useEffect(() => {
    if (authLoading) return
    if (organization?.type && organization.type !== "LIBRARY") {
      navigate("/dashboard", { replace: true })
      return
    }
    if (organization?.type === "LIBRARY") load()
  }, [organization, authLoading, navigate])


  return (
    <div className="min-h-svh bg-stone-50 flex">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-56 flex-col border-r border-stone-200 bg-white shrink-0">
        <div className="h-14 px-4 flex items-center border-b border-stone-100">
          <div>
            <div className="font-semibold text-sm text-stone-900">Semaiy</div>
            <div className="text-[10px] text-stone-400 truncate max-w-[180px]">
              {organization?.name}
            </div>
          </div>
        </div>

        <div className="p-3 border-b border-stone-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-stone-200 flex items-center justify-center text-sm font-medium text-stone-600">
              {(user?.name || "?")[0]}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-stone-900 truncate">{user?.name}</div>
              <div className="text-[10px] text-stone-400 truncate">{user?.email}</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-2 space-y-0.5">
          {sideNav.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={path === item.to}
            />
          ))}
        </nav>

        <div className="p-2 border-t border-stone-100 space-y-0.5">
          <Link
            to="/billing"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-stone-600 hover:bg-stone-100"
          >
            <CreditCard className="w-4 h-4" /> Billing
          </Link>
          <button
            type="button"
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-stone-600 hover:bg-stone-100"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="md:hidden bg-white border-b border-stone-200 h-14 px-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="font-semibold text-sm">Semaiy · Library</div>
            <div className="text-[10px] text-stone-400 truncate max-w-[160px]">
              {organization?.name}
            </div>
          </div>
          <button type="button" onClick={logout} className="text-xs text-stone-500">
            Logout
          </button>
        </header>

        <main className="flex-1 p-4 md:p-6 pb-24 md:pb-6 overflow-auto">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="hidden md:flex items-center justify-between">
              <p className="text-xs text-stone-400">Signed in as {user?.name || "…"}</p>
              <button
                type="button"
                onClick={load}
                className="text-xs text-stone-500 flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Refresh
              </button>
            </div>

            {msg && (
              <div className="text-sm bg-stone-100 text-stone-700 rounded-xl px-3 py-2">{msg}</div>
            )}

            <div className="bg-white border border-stone-200 rounded-xl p-4 flex justify-between items-center gap-3">
              <div>
                <div className="text-sm font-medium text-stone-900">Status</div>
                <div className="text-xs text-stone-500">
                  {data?.isOpen !== false ? "Open — visible as live" : "Closed"}
                </div>
              </div>
              <button
                type="button"
                onClick={toggleOpen}
                className="text-sm px-3 py-1.5 rounded-full bg-stone-900 text-white shrink-0"
              >
                {data?.isOpen !== false ? "Mark closed" : "Mark open"}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white border border-stone-200 rounded-xl p-3 text-center">
                <div className="text-lg font-semibold tabular-nums">
                  {loading ? "…" : data?.visitsToday ?? 0}
                </div>
                <div className="text-[10px] text-stone-500">Today visits</div>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-3 text-center">
                <div className="text-lg font-semibold tabular-nums">
                  {loading ? "…" : data?.bookCount ?? 0}
                </div>
                <div className="text-[10px] text-stone-500">Books</div>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-3 text-center">
                <div className="text-lg font-semibold tabular-nums">
                  {loading ? "…" : data?.openLoans ?? 0}
                </div>
                <div className="text-[10px] text-stone-500">Loans out</div>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-2">
              <h2 className="text-sm font-semibold flex items-center gap-2">
                <Users className="w-4 h-4" /> Top visitors today
              </h2>
              {(data?.topVisitors || []).length === 0 ? (
                <p className="text-xs text-stone-400">No check-ins yet</p>
              ) : (
                (data.topVisitors as any[]).map((v) => (
                  <div key={v.name} className="text-sm flex justify-between">
                    <span>{v.name}</span>
                    <span className="text-stone-500 tabular-nums">{v.count}</span>
                  </div>
                ))
              )}
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-3">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <QrCode className="w-4 h-4" /> Visitor page
              </h3>
              <button
                type="button"
                onClick={makeQr}
                className="text-sm bg-stone-900 text-white px-4 py-2 rounded-xl"
              >
                Show link & QR
              </button>
              {joinUrl && (
                <div className="space-y-2">
                  {qrImageUrl && (
                    <img
                      src={qrImageUrl}
                      alt="QR"
                      width={180}
                      height={180}
                      className="mx-auto border rounded-lg"
                    />
                  )}
                  <p className="text-[10px] break-all text-stone-500 text-center">{joinUrl}</p>
                  <button
                    type="button"
                    onClick={() => copyText(joinUrl)}
                    className="w-full flex items-center justify-center gap-1 text-sm border py-2 rounded-xl"
                  >
                    <Copy className="w-3.5 h-3.5" /> Copy link
                  </button>
                </div>
              )}
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-2">
              <h3 className="text-sm font-semibold">Staff desk invite</h3>
              <p className="text-xs text-stone-500">
                Opens paper attendance after they join.
              </p>
              <button
                type="button"
                onClick={inviteDesk}
                className="text-sm bg-stone-900 text-white px-4 py-2 rounded-xl"
              >
                Create desk invite
              </button>
              {deskLink && (
                <div className="space-y-2">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(deskLink)}`}
                    alt="Desk QR"
                    width={140}
                    height={140}
                    className="mx-auto border rounded-lg"
                  />
                  <p className="text-xs break-all text-stone-600">{deskLink}</p>
                  <button
                    type="button"
                    className="text-xs font-medium"
                    onClick={() => copyText(deskLink)}
                  >
                    Copy desk link
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Mobile footer */}
        <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-stone-200">
          <div className="grid grid-cols-5 h-16">
            {footerNav.map((item) => {
              const active = path === item.to
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium",
                    active ? "text-stone-900" : "text-stone-400"
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}