import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Star, Clock } from "lucide-react"
import { libraryApi } from "../../lib/api"

export default function PublicLibraries() {
  const [libraries, setLibraries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    libraryApi
      .publicList()
      .then((data) => {
        setLibraries(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-svh bg-stone-50">
      <header className="bg-white border-b border-stone-200 px-4 h-14 flex items-center justify-between sticky top-0 z-10">
        <div className="font-semibold text-stone-900">Semaiy · Libraries</div>
        <Link to="/" className="text-xs text-stone-500">Home</Link>
      </header>

      <div className="max-w-2xl mx-auto p-4 space-y-4 pb-10">
        <h1 className="text-xl font-bold text-stone-900">Public Libraries</h1>
        <p className="text-sm text-stone-500">Find a library, check in, explore books, and leave a review.</p>

        {loading ? (
          <p className="text-sm text-stone-400 text-center py-12">Loading libraries…</p>
        ) : libraries.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-xl p-8 text-center">
            <p className="text-sm text-stone-500">No libraries registered yet.</p>
          </div>
        ) : (
          libraries.map((lib) => (
            <Link
              key={lib.id}
              to={`/public/libraries/${lib.id}`}
              className="block bg-white border border-stone-200 rounded-xl overflow-hidden hover:border-stone-400 transition"
            >
              <div className="h-32 bg-stone-200 relative">
                {lib.photoUrl ? (
                  <img src={lib.photoUrl} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
                    No photo
                  </div>
                )}
                <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full font-medium ${
                  lib.isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}>
                  {lib.isOpen ? "Open" : "Closed"}
                </div>
              </div>
              <div className="p-4 space-y-1">
                <div className="font-semibold text-stone-900">{lib.name}</div>
                <div className="text-xs text-stone-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {lib.address || lib.city || "Ethiopia"}
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {lib.openTime || "08:00"} – {lib.closeTime || "22:00"}
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}