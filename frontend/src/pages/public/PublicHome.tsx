import { Link } from "react-router-dom"
import { ArrowLeft, Library, MapPin } from "lucide-react"

export default function PublicHome() {
  return (
    <div className="min-h-svh bg-slate-50 p-6 max-w-lg mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 mb-6">
        <ArrowLeft className="w-4 h-4" /> Semaiy
      </Link>
      <h1 className="text-2xl font-semibold text-slate-900 mb-2">Public services</h1>
      <p className="text-sm text-slate-500 mb-6">.</p>
      <Link
        to="/public/libraries"
        className="flex items-center gap-3 bg-white border rounded-2xl p-4 mb-3"
      >
        <Library className="w-5 h-5" />
        <span className="font-medium">Libraries</span>
      </Link>
      <div className="flex items-center gap-3 bg-white border rounded-2xl p-4 opacity-60">
        <MapPin className="w-5 h-5" />
        <span className="font-medium">Near me — coming soon</span>
      </div>
    </div>
  )
}