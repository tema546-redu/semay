import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ArrowLeft, Send, Sparkles } from "lucide-react"
import { useAuth } from "../../lib/auth"

type Message = { role: "user" | "assistant"; content: string }

export default function Assistant() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const { user, organization } = useAuth()
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: isAm
        ? "ሰላም! እኔ የሰማይ AI ነኝ። ስለ ንግድዎ፣ ትምህርት ቤትዎ ወይም ሌላ ማንኛውም ነገር ይጠይቁኝ።"
        : "Hello! I am Semay AI. Ask me about your business, school, or anything else.",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput("")
    setMessages((m) => [...m, { role: "user", content: userMsg }])
    setLoading(true)

    // Phase 3: Simple intelligent responses (will be replaced by real AI later)
    setTimeout(() => {
      let reply = ""
      const q = userMsg.toLowerCase()

      if (q.includes("sales") || q.includes("ሽያጭ") || q.includes("report")) {
        reply = isAm
          ? "የዛሬ ሪፖርት ለማግኘት ዳሽቦርድዎን ይመልከቱ። በቅርቡ ሙሉ AI ሪፖርት እዚህ ይመጣል።"
          : "Check your Dashboard for today's numbers. Full AI reports are coming soon in Phase 3."
      } else if (q.includes("student") || q.includes("ተማሪ") || q.includes("attendance")) {
        reply = isAm
          ? "ተማሪዎችን እና አቴንዳንስን ከጎን አሞሌው Students እና Attendance ስር ማስተዳደር ይችላሉ።"
          : "You can manage students and attendance from the sidebar under Students and Attendance."
      } else if (q.includes("order") || q.includes("ትዕዛዝ") || q.includes("pos") || q.includes("kitchen")) {
        reply = isAm
          ? "ትዕዛዝ ለመውሰድ POS ይክፈቱ፣ ኩሽናውን ለማየት Kitchen Display ይጠቀሙ።"
          : "Open POS to take orders and Kitchen Display to see them in the kitchen."
      } else if (q.includes("hello") || q.includes("hi") || q.includes("ሰላም")) {
        reply = isAm
          ? `ሰላም ${user?.name || ""}! እንዴት ልረዳዎት እችላለሁ?`
          : `Hello ${user?.name || ""}! How can I help you today?`
      } else {
        reply = isAm
          ? "ይህ የPhase 3 መሰረታዊ AI ነው። በቅርቡ የበለጠ ብልህ እና ራሱን የሚያሻሽል AI ይመጣል። ጥያቄዎን በተመለከተ፡ እባክዎ ዳሽቦርድ፣ POS ወይም Students ይጠቀሙ።"
          : "This is the Phase 3 foundation AI. A smarter, self-improving AI is coming. For now, try Dashboard, POS, or Students for specific actions."
      }

      setMessages((m) => [...m, { role: "assistant", content: reply }])
      setLoading(false)
    }, 600)
  }

  return (
    <div className="min-h-svh bg-semay-50 flex flex-col">
      <header className="bg-white border-b border-semay-200 px-4 h-14 flex items-center gap-3 sticky top-0 z-20">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5 text-semay-600" />
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-semay-900">Semay AI</div>
            <div className="text-xs text-semay-400">{organization?.name || "Assistant"}</div>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-2xl mx-auto w-full">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-semay-900 text-white rounded-br-md"
                  : "bg-white border border-semay-200 text-semay-800 rounded-bl-md"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-semay-200 px-4 py-3 rounded-2xl rounded-bl-md text-sm text-semay-400">
              ...
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-semay-200 bg-white p-4">
        <div className="max-w-2xl mx-auto flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder={isAm ? "ጥያቄዎን ይጻፉ..." : "Ask anything..."}
            className="flex-1 px-4 py-3 rounded-xl border border-semay-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="px-4 rounded-xl bg-semay-900 text-white hover:bg-semay-800 disabled:opacity-50 transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
