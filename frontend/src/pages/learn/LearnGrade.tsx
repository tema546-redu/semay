import { Link, Navigate, useParams } from "react-router-dom"
import {
  GRADE_8_SUBJECTS,
  GRADE_10_SUBJECTS,
  getSubjectContent,
  isLearnUnlocked,
} from "./learnData"

export default function LearnGrade() {
  const { grade } = useParams<{ grade: string }>()
  if (!isLearnUnlocked()) return <Navigate to="/learn" replace />

  const is8 = grade === "g8"
  const is10 = grade === "g10"
  if (!is8 && !is10) return <Navigate to="/learn" replace />

  const subjects = is8 ? GRADE_8_SUBJECTS : GRADE_10_SUBJECTS
  const title = is8 ? "Grade 8" : "Grade 10"
  const titleAm = is8 ? "ክፍል 8" : "ክፍል 10"
  const g = is8 ? "g8" : "g10"

  return (
    <div className="min-h-svh bg-[#f3f1ec] text-stone-800 px-5 py-10">
      <div className="max-w-md mx-auto">
        <Link to="/learn" className="text-sm text-stone-500 hover:underline">
          ← Grades
        </Link>
        <h1 className="text-2xl font-semibold text-stone-900 mt-4">{title}</h1>
        <p className="text-sm text-stone-500 mb-6">{titleAm}</p>
        <div className="space-y-2">
          {subjects.map((s) => {
            const content = getSubjectContent(g, s.id)
            const hasContent = !!content && content.chapters.length > 0
            const chaptersCount = content?.chapters.length ?? 0

            if (hasContent) {
              return (
                <Link
                  key={s.id}
                  to={`/learn/${g}/${s.id}`}
                  className="block rounded-xl border border-stone-200 bg-white px-4 py-3 hover:border-stone-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm text-stone-900">{s.en}</div>
                      <div className="text-xs text-stone-500">{s.am}</div>
                    </div>
                    <span className="text-[10px] uppercase tracking-wide text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {chaptersCount} {chaptersCount === 1 ? "unit" : "units"}
                    </span>
                  </div>
                </Link>
              )
            }

            return (
              <div
                key={s.id}
                className="rounded-xl border border-stone-200 bg-white px-4 py-3 flex justify-between items-center opacity-60"
              >
                <div>
                  <div className="font-medium text-sm text-stone-900">{s.en}</div>
                  <div className="text-xs text-stone-500">{s.am}</div>
                </div>
                <span className="text-[10px] uppercase tracking-wide text-stone-400">Soon</span>
              </div>
            )
          })}
        </div>
        <p className="mt-8 text-xs text-stone-400 leading-relaxed">
          Offline study area. More chapters and subjects are being added.
        </p>
      </div>
    </div>
  )
}