import { Link, Navigate, useParams } from "react-router-dom"
import {
  GRADE_8_SUBJECTS,
  GRADE_10_SUBJECTS,
  getSubjectContent,
  isLearnUnlocked,
} from "./learnData"

export default function LearnSubject() {
  const { grade, subjectId } = useParams<{ grade: string; subjectId: string }>()
  if (!isLearnUnlocked()) return <Navigate to="/learn" replace />
  if (!grade || !subjectId) return <Navigate to="/learn" replace />

  const list = grade === "g8" ? GRADE_8_SUBJECTS : GRADE_10_SUBJECTS
  const meta = list.find((s) => s.id === subjectId)
  const content = getSubjectContent(grade, subjectId)

  if (!meta) return <Navigate to={`/learn/${grade}`} replace />

  return (
    <div className="min-h-svh bg-[#f3f1ec] text-stone-800 px-5 py-10">
      <div className="max-w-md mx-auto">
        <Link to={`/learn/${grade}`} className="text-sm text-stone-500 hover:underline">
          ← Subjects
        </Link>
        <h1 className="text-2xl font-semibold mt-4">{meta.en}</h1>
        <p className="text-sm text-stone-500 mb-6">{meta.am}</p>

        {!content?.chapters?.length ? (
          <p className="text-sm text-stone-500">Chapters coming soon.</p>
        ) : (
          <div className="space-y-2">
            {content.chapters.map((ch) => (
              <Link
                key={ch.id}
                to={`/learn/${grade}/${subjectId}/${ch.id}`}
                className="block rounded-xl border border-stone-200 bg-white px-4 py-3 hover:border-stone-300"
              >
                <div className="text-xs text-stone-400">Chapter {ch.number}</div>
                <div className="font-medium text-sm">{ch.title}</div>
                <div className="text-xs text-stone-500">{ch.titleAm}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}