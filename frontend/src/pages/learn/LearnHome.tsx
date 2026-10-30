import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { isLearnUnlocked, setLearnUnlocked, LEARN_CODE } from "./learnData"

export default function LearnHome() {
  const navigate = useNavigate()
  const unlocked = isLearnUnlocked()
  const [code, setCode] = useState("")
  const [err, setErr] = useState("")

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (code.trim() === LEARN_CODE) {
      setLearnUnlocked(true)
      setErr("")
      navigate("/learn/g8")
    } else {
      setErr("Wrong code")
    }
  }

  if (unlocked) {
    return (
      <div className="min-h-svh bg-[#f3f1ec] text-stone-800 px-5 py-10">
        <div className="max-w-md mx-auto">
          <p className="text-xs text-stone-400 mb-2">Family study · offline</p>
          <h1 className="text-2xl font-semibold text-stone-900 mb-6">Choose grade</h1>
          <div className="space-y-3">
            <Link
              to="/learn/g8"
              className="block rounded-xl border border-stone-200 bg-white p-5 hover:border-stone-300"
            >
              <div className="font-semibold">Grade 8</div>
              <div className="text-sm text-stone-500 mt-1">ክፍል 8</div>
            </Link>
            <Link
              to="/learn/g10"
              className="block rounded-xl border border-stone-200 bg-white p-5 hover:border-stone-300"
            >
              <div className="font-semibold">Grade 10</div>
              <div className="text-sm text-stone-500 mt-1">ክፍል 10</div>
            </Link>
          </div>
          <button
            type="button"
            className="mt-8 text-xs text-stone-400 hover:text-stone-600"
            onClick={() => {
              setLearnUnlocked(false)
              navigate("/learn")
            }}
          >
            Lock again
          </button>
          <p className="mt-6">
            <Link to="/" className="text-sm text-stone-500 hover:underline">
              ← Semaiy home
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-svh bg-[#f3f1ec] flex items-center justify-center px-5">
      <form onSubmit={submit} className="w-full max-w-sm bg-white border border-stone-200 rounded-xl p-6 shadow-sm">
        <h1 className="font-semibold text-stone-900 mb-1">Enter code</h1>
        <p className="text-sm text-stone-500 mb-4">For family study only</p>
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm mb-3"
          placeholder="Code"
          autoFocus
        />
        {err && <p className="text-sm text-red-600 mb-2">{err}</p>}
        <button
          type="submit"
          className="w-full bg-stone-900 text-white text-sm font-medium py-2.5 rounded-lg"
        >
          Continue
        </button>
        <Link to="/" className="block text-center text-sm text-stone-500 mt-4 hover:underline">
          Back
        </Link>
      </form>
    </div>
  )
} 
