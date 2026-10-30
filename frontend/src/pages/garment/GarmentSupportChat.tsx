import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import GarmentLayout from "../../components/GarmentLayout"
import { supportApi } from "../../lib/api"
import { ArrowLeft, Send } from "lucide-react"

export default function GarmentSupportChat() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"

  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")
  const endRef = useRef<HTMLDivElement>(null)

  const load = async () => {
    try {
      const rows = await supportApi.messages()
      setMessages(Array.isArray(rows) ? rows : [])
      setError("")
    } catch (e: any) {
      setError(e?.message || (isAm ? "መጫን አልተሳካም" : "Could not load"))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    const t = setInterval(load, 8000) // soft live refresh
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const send = async () => {
    const body = input.trim()
    if (!body || sending) return
    setSending(true)
    setError("")
    try {
      await supportApi.send(body)
      setInput("")
      await load()
    } catch (e: any) {
      setError(e?.message || (isAm ? "መላክ አልተሳካም" : "Send failed"))
    } finally {
      setSending(false)
    }
  }

  return (
    <GarmentLayout>
      <div className="flex flex-col h-[calc(100svh-4rem)] md:h-[calc(100svh-2rem)] max-w-xl mx-auto">
        {/* Header */}
        <div className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-semay-200 bg-white">
          <Link
            to="/garment/settings"
            className="p-2 -ml-2 rounded-lg hover:bg-semay-100"
          >
            <ArrowLeft className="w-5 h-5 text-semay-600" />
          </Link>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-semay-900">
              {isAm ? "ሰማይ ድጋፍ" : "Semay support"}
            </div>
            <div className="text-xs text-semay-500">
              {isAm
                ? "ከሰማይ ቡድን ጋር ይነጋገሩ"
                : "Chat with the Semay team"}
            </div>
          </div>
          <div className="w-9 h-9 rounded-full bg-semay-900 text-white flex items-center justify-center text-sm font-bold">
            ሰ
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2 bg-[#e8eef5]">
          {loading ? (
            <p className="text-center text-sm text-semay-500 py-8">
              {isAm ? "በመጫን..." : "Loading..."}
            </p>
          ) : messages.length === 0 ? (
            <div className="text-center py-12 px-6">
              <p className="text-sm text-semay-600">
                {isAm
                  ? "እንኳን ደህና መጡ። ጥያቄ፣ ክፍያ ወይም ችግር ይጻፉ — ሰማይ ይመልሳል።"
                  : "Welcome. Write about billing, a bug, or a question — Semay will reply here."}
              </p>
            </div>
          ) : (
            messages.map((m) => {
              const isAdmin = String(m.sender).toUpperCase() === "ADMIN"
              return (
                <div
                  key={m.id}
                  className={`flex ${isAdmin ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm whitespace-pre-wrap shadow-sm ${
                      isAdmin
                        ? "bg-white text-semay-900 rounded-bl-md border border-semay-100"
                        : "bg-sky-600 text-white rounded-br-md"
                    }`}
                  >
                    {isAdmin && (
                      <div className="text-[10px] font-semibold text-sky-700 mb-0.5">
                        Semay
                      </div>
                    )}
                    {m.body}
                    <div
                      className={`text-[10px] mt-1 ${
                        isAdmin ? "text-semay-400" : "text-sky-100"
                      }`}
                    >
                      {m.createdAt
                        ? new Date(m.createdAt).toLocaleString()
                        : ""}
                    </div>
                  </div>
                </div>
              )
            })
          )}
          <div ref={endRef} />
        </div>

        {error && (
          <div className="px-4 py-2 text-xs text-red-700 bg-red-50 border-t border-red-100">
            {error}
          </div>
        )}

        {/* Input */}
        <div className="shrink-0 p-3 border-t border-semay-200 bg-white flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                send()
              }
            }}
            placeholder={
              isAm ? "መልእክት ይጻፉ..." : "Type a message..."
            }
            className="flex-1 px-4 py-2.5 rounded-full border border-semay-200 text-sm bg-semay-50 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
          />
          <button
            type="button"
            disabled={sending || !input.trim()}
            onClick={send}
            className="w-11 h-11 rounded-full bg-sky-600 text-white flex items-center justify-center disabled:opacity-40 shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </GarmentLayout>
  )
}