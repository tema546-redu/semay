import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

// same ID as Landing
const GUIDE_VIDEO_ID = "YOUR_YOUTUBE_ID"

export default function Help() {
  return (
    <div className="min-h-svh bg-slate-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/dashboard" className="p-2 -ml-2">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Help · 1‑minute guide</h1>
      </header>
      <div className="max-w-lg mx-auto p-4 space-y-4">
        <div className="aspect-video rounded-2xl overflow-hidden bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${GUIDE_VIDEO_ID}`}
            title="Semay guide"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="text-sm text-slate-600">
          Register → Dashboard → Menu + Stock → POS → Kitchen. Questions: 0953352271 · Telegram t.me/semaii_app
        </p>
        <Link to="/pos" className="block text-center bg-slate-900 text-white py-3 rounded-xl text-sm font-medium">
          Open POS
        </Link>
      </div>
    </div>
  )
}