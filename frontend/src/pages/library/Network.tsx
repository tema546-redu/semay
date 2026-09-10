import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { libraryApi } from "../../lib/api"
import { useAuth } from "../../lib/auth"
import { ArrowLeft, Copy, QrCode, Star, BookOpen, MapPin } from "lucide-react"

export default function LibraryNetwork() {
  const { organization } = useAuth()
  const navigate = useNavigate()
  const [data, setData] = useState<any>(null)
  const [inviteLink, setInviteLink] = useState("")
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(true)

  const load = () => {
    setLoading(true)
    libraryApi
      .network()
      .then(setData)
      .catch((e) => {
        setMsg(e.message || "Subcity only")
        setData(null)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (organization?.type && organization.type !== "SUBCITY") {
      navigate("/library", { replace: true })
      return
    }
    load()
  }, [organization])

  const createInvite = async () => {
    setMsg("")
    try {
      const inv = await libraryApi.inviteLibrary()
      setInviteLink(inv.link)
    } catch (e: any) {
      setMsg(e.message || "Failed")
    }
  }

  const copy = (t: string) => {
    navigator.clipboard?.writeText(t)
    setMsg("Copied")
  }

  const libs = data?.libraries || []

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/dashboard" className="text-stone-500">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <div className="font-semibold text-sm">Subcity libraries</div>
          <div className="text-[11px] text-stone-500">{data?.subcity?.name || organization?.name}</div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-4 space-y-4 pb-12">
        {msg && <p className="text-sm text-stone-600">{msg}</p>}

        <div className="bg-white border border-stone-200 rounded-xl p-4 space-y-2">
          <h2 className="text-sm font-semibold">Invite a library</h2>
          <p className="text-xs text-stone-500">
            Share this link with a public library. They register under your subcity. You only see the
            network — each library runs its own door.
          </p>
          <button
            type="button"
            onClick={createInvite}
            className="text-sm bg-stone-900 text-white px-4 py-2 rounded-xl"
          >
            Create library invite
          </button>
          {inviteLink && (
            <div className="space-y-2 pt-2">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(inviteLink)}`}
                alt="Invite QR"
                width={140}
                height={140}
                className="rounded-lg border mx-auto"
              />
              <p className="text-xs break-all text-stone-600">{inviteLink}</p>
              <button type="button" className="text-xs font-medium" onClick={() => copy(inviteLink)}>
                <Copy className="w-3.5 h-3.5 inline mr-1" />
                Copy link
              </button>
            </div>
          )}
        </div>

        <h2 className="text-sm font-semibold text-stone-800">
          Libraries ({libs.length})
        </h2>

        {loading ? (
          <p className="text-sm text-stone-400">Loading…</p>
        ) : libs.length === 0 ? (
          <p className="text-sm text-stone-400 text-center py-8">
            No libraries yet. Create an invite and share it.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-3">
            {libs.map((lib: any) => (
              <Link
                key={lib.id}
                to={`/public/libraries/${lib.id}`}
                className="bg-white border border-stone-200 rounded-xl overflow-hidden hover:border-stone-400 transition"
              >
                {lib.photoUrl ? (
                  <img src={lib.photoUrl} alt="" className="h-28 w-full object-cover" />
                ) : (
                  <div className="h-28 bg-stone-100 flex items-center justify-center text-stone-400 text-xs">
                    No photo
                  </div>
                )}
                <div className="p-3 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-sm truncate">{lib.name}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
                        lib.isOpen !== false
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-stone-100 text-stone-500"
                      }`}
                    >
                      {lib.isOpen !== false ? "Open" : "Closed"}
                    </span>
                  </div>
                  {(lib.city || lib.address) && (
                    <p className="text-[11px] text-stone-500 flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3" />
                      {lib.city || lib.address}
                    </p>
                  )}
                  <div className="flex items-center gap-3 text-[11px] text-stone-500 pt-1">
                    <span className="flex items-center gap-0.5">
                      <BookOpen className="w-3 h-3" />
                      {lib.bookCount ?? 0}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 text-amber-400" />
                      {lib.averageRating != null ? lib.averageRating : "—"}
                      {lib.reviewCount ? ` (${lib.reviewCount})` : ""}
                    </span>
                    <span>{lib.visitsToday ?? 0} today</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}