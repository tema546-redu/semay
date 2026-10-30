import { useState, useMemo } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { getChapter, isLearnUnlocked, type NoteNode, type Question } from "./learnData"

type Tab = "notes" | "practice"

export default function LearnChapter() {
  const { grade, subjectId, chapterId } = useParams<{
    grade: string
    subjectId: string
    chapterId: string
  }>()
  const [tab, setTab] = useState<Tab>("notes")

  if (!isLearnUnlocked()) return <Navigate to="/learn" replace />
  if (!grade || !subjectId || !chapterId) return <Navigate to="/learn" replace />

  const chapter = getChapter(grade, subjectId, chapterId)
  if (!chapter) return <Navigate to={`/learn/${grade}/${subjectId}`} replace />

  return (
    <div className="min-h-svh bg-[#f3f1ec] text-stone-800 px-5 py-10">
      <div className="max-w-2xl mx-auto">
        <Link
          to={`/learn/${grade}/${subjectId}`}
          className="text-sm text-stone-500 hover:underline"
        >
          ← Chapters
        </Link>

        <div className="mt-4 mb-6">
          <div className="text-xs text-stone-400">Unit {chapter.number}</div>
          <h1 className="text-2xl font-semibold text-stone-900">{chapter.title}</h1>
          <p className="text-sm text-stone-500">{chapter.titleAm}</p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-6 border-b border-stone-200">
          <button
            onClick={() => setTab("notes")}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px ${
              tab === "notes"
                ? "border-stone-900 text-stone-900"
                : "border-transparent text-stone-500 hover:text-stone-700"
            }`}
          >
            Notes
          </button>
          <button
            onClick={() => setTab("practice")}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px ${
              tab === "practice"
                ? "border-stone-900 text-stone-900"
                : "border-transparent text-stone-500 hover:text-stone-700"
            }`}
          >
            Practice ({chapter.questions.length})
          </button>
        </div>

        {tab === "notes" ? (
          <NotesView notes={chapter.notes} />
        ) : (
          <PracticeView questions={chapter.questions} />
        )}
      </div>
    </div>
  )
}

/* ---------------- NOTES ---------------- */

function NotesView({ notes }: { notes: NoteNode[] }) {
  return (
    <div className="space-y-6">
      {notes.map((node) => (
        <NoteNodeView key={node.id} node={node} depth={0} />
      ))}
    </div>
  )
}

function NoteNodeView({ node, depth }: { node: NoteNode; depth: number }) {
  const [open, setOpen] = useState(depth < 2)
  const hasChildren = !!node.children?.length

  return (
    <div
      className={`rounded-xl border border-stone-200 bg-white ${
        depth === 0 ? "p-4" : "p-3"
      }`}
    >
      <button
        onClick={() => hasChildren && setOpen(!open)}
        className={`w-full text-left ${hasChildren ? "cursor-pointer" : "cursor-default"}`}
      >
        <div className="flex items-center gap-2">
          {hasChildren && (
            <span className="text-xs text-stone-400 w-3">{open ? "▾" : "▸"}</span>
          )}
          <div className="flex-1">
            <div
              className={`font-semibold text-stone-900 ${
                depth === 0 ? "text-base" : "text-sm"
              }`}
            >
              {node.title}
            </div>
            {node.titleAm && (
              <div className="text-xs text-stone-500 mt-0.5">{node.titleAm}</div>
            )}
          </div>
        </div>
      </button>

      {open && (
        <div className={hasChildren ? "mt-2 ml-5" : "mt-2"}>
          <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
            {node.body}
          </p>
          {node.bodyAm && (
            <p className="text-xs text-stone-500 leading-relaxed mt-2 whitespace-pre-line">
              {node.bodyAm}
            </p>
          )}
          {hasChildren && (
            <div className="mt-3 space-y-2">
              {node.children!.map((child) => (
                <NoteNodeView key={child.id} node={child} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/* ---------------- PRACTICE ---------------- */

function PracticeView({ questions }: { questions: Question[] }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [shortAnswer, setShortAnswer] = useState("")
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState({ correct: 0, wrong: 0 })
  const [done, setDone] = useState(false)

  const q = questions[current]
  const total = questions.length

  const isCorrect = useMemo(() => {
    if (!q) return false
    if (q.type === "mcq") return selected === q.answer
    const userAns = shortAnswer.trim().toLowerCase()
    const correctAns = q.answer.trim().toLowerCase()
    return userAns === correctAns
  }, [q, selected, shortAnswer])

  if (!q) return null

  const check = () => {
    if (q.type === "mcq" && selected === null) return
    if (q.type === "short" && shortAnswer.trim() === "") return
    setRevealed(true)
    if (isCorrect) setScore((s) => ({ ...s, correct: s.correct + 1 }))
    else setScore((s) => ({ ...s, wrong: s.wrong + 1 }))
  }

  const next = () => {
    setSelected(null)
    setShortAnswer("")
    setRevealed(false)
    if (current + 1 >= total) setDone(true)
    else setCurrent(current + 1)
  }

  const restart = () => {
    setCurrent(0)
    setSelected(null)
    setShortAnswer("")
    setRevealed(false)
    setScore({ correct: 0, wrong: 0 })
    setDone(false)
  }

  if (done) {
    const pct = Math.round((score.correct / total) * 100)
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-6 text-center">
        <div className="text-sm text-stone-500 mb-2">Practice complete</div>
        <div className="text-3xl font-semibold text-stone-900 mb-1">{pct}%</div>
        <div className="text-sm text-stone-600 mb-6">
          {score.correct} correct · {score.wrong} wrong · {total} total
        </div>
        <button
          onClick={restart}
          className="px-5 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800"
        >
          Try again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-xs text-stone-500">
        <span>
          Question {current + 1} of {total}
        </span>
        <span className="uppercase tracking-wide">{q.difficulty}</span>
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-5">
        <p className="text-base text-stone-900 leading-relaxed whitespace-pre-line mb-4">
          {q.stem}
        </p>

        {q.type === "mcq" && q.options && (
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              const idx = String(i)
              const isSelected = selected === idx
              const isRight = revealed && idx === q.answer
              const isWrongPick = revealed && isSelected && idx !== q.answer
              return (
                <button
                  key={i}
                  onClick={() => !revealed && setSelected(idx)}
                  disabled={revealed}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition ${
                    isRight
                      ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                      : isWrongPick
                      ? "border-red-400 bg-red-50 text-red-900"
                      : isSelected
                      ? "border-stone-900 bg-stone-100"
                      : "border-stone-200 hover:border-stone-300 bg-white"
                  }`}
                >
                  <span className="font-mono text-xs text-stone-400 mr-2">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {opt}
                </button>
              )
            })}
          </div>
        )}

        {q.type === "short" && (
          <input
            type="text"
            value={shortAnswer}
            onChange={(e) => setShortAnswer(e.target.value)}
            disabled={revealed}
            placeholder="Type your answer..."
            className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm"
          />
        )}
      </div>

      {!revealed ? (
        <button
          onClick={check}
          disabled={q.type === "mcq" ? selected === null : shortAnswer.trim() === ""}
          className="w-full py-2.5 bg-stone-900 text-white text-sm font-medium rounded-lg disabled:opacity-40"
        >
          Check answer
        </button>
      ) : (
        <>
          <div
            className={`rounded-xl border p-4 text-sm leading-relaxed ${
              isCorrect
                ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                : "border-red-200 bg-red-50 text-red-900"
            }`}
          >
            <div className="font-semibold mb-1">
              {isCorrect ? "✓ Correct" : "✗ Not quite"}
            </div>
            {q.type === "short" && (
              <div className="mb-2">
                <span className="text-xs uppercase tracking-wide opacity-70">Answer: </span>
                <span className="font-medium">{q.answer}</span>
              </div>
            )}
            {q.explanation && (
              <p className="whitespace-pre-line">{q.explanation}</p>
            )}
          </div>

          <button
            onClick={next}
            className="w-full py-2.5 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800"
          >
            {current + 1 >= total ? "See results" : "Next question →"}
          </button>
        </>
      )}

      <div className="text-center text-xs text-stone-400 pt-2">
        Score: {score.correct} ✓ · {score.wrong} ✗
      </div>
    </div>
  )
}