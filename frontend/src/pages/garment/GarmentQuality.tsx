import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { garmentApi } from "../../lib/api"
import GarmentLayout from "../../components/GarmentLayout"
import { AlertTriangle, Plus } from "lucide-react"

const DEFECT_LABELS: Record<string, { en: string; am: string }> = {
  STITCHING: { en: "Stitching", am: "ስፌት" },
  WRONG_SIZE: { en: "Wrong size", am: "ትክክል ያልሆነ መጠን" },
  FABRIC_DAMAGE: { en: "Fabric damage", am: "የጨርቅ ጉዳት" },
  MISSING_BUTTON: { en: "Missing button", am: "ቁልፍ ጠፍቷል" },
  WRONG_LABEL: { en: "Wrong label", am: "ትክክል ያልሆነ ላቤል" },
  COLOR_ISSUE: { en: "Color issue", am: "የቀለም ችግር" },
  OTHER: { en: "Other", am: "ሌላ" },
}

export default function GarmentQuality() {
  const { i18n } = useTranslation()
  const isAm = i18n.language === "am"
  const [defects, setDefects] = useState<any[]>([])
  const [summary, setSummary] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([garmentApi.defects(), garmentApi.qualitySummary()])
      .then(([list, sum]) => {
        setDefects(list || [])
        setSummary(sum)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const label = (type: string) => {
    const t = DEFECT_LABELS[type]
    if (!t) return type
    return isAm ? t.am : t.en
  }

  return (
    <GarmentLayout>
      <div className="p-4 md:p-6 max-w-4xl space-y-5">
        <div>
          <h1 className="text-xl font-semibold text-semay-900">
            {isAm ? "ጥራት / ጉድለቶች" : "Quality / Defects"}
          </h1>
          <p className="text-sm text-semay-500 mt-1">
            {isAm
              ? "ጉድለቶችን ይመዝግቡ እና የዳግም ስራ ወጪን ይመልከቱ"
              : "Record defects and see rework cost"}
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-semay-200 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-semay-900">
              {summary?.totalDefects || 0}
            </div>
            <div className="text-xs text-semay-500 mt-1">
              {isAm ? "ጠቅላላ ጉድለቶች" : "Total defects"}
            </div>
          </div>
          <div className="bg-white border border-semay-200 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-danger">
              {(summary?.totalCost || 0).toFixed(0)} ETB
            </div>
            <div className="text-xs text-semay-500 mt-1">
              {isAm ? "የተገመተ ወጪ" : "Estimated cost"}
            </div>
          </div>
        </div>

        {/* By type */}
        {summary?.byType && Object.keys(summary.byType).length > 0 && (
          <div className="bg-white border border-semay-200 rounded-2xl p-4">
            <h2 className="font-medium mb-3">
              {isAm ? "በዓይነት" : "By type"}
            </h2>
            <div className="space-y-2">
              {Object.entries(summary.byType).map(([type, qty]: any) => (
                <div key={type} className="flex justify-between text-sm">
                  <span>{label(type)}</span>
                  <span className="font-medium">{qty}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent defects */}
        <div className="bg-white border border-semay-200 rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-semay-100 font-medium">
            {isAm ? "የቅርብ ጊዜ ጉድለቶች" : "Recent defects"}
          </div>

          {loading ? (
            <p className="p-6 text-center text-semay-500">
              {isAm ? "በመጫን ላይ..." : "Loading..."}
            </p>
          ) : defects.length === 0 ? (
            <div className="p-8 text-center">
              <AlertTriangle className="w-10 h-10 text-semay-300 mx-auto mb-2" />
              <p className="text-semay-500 text-sm">
                {isAm ? "እስካሁን ጉድለት አልተመዘገበም" : "No defects recorded yet"}
              </p>
              <p className="text-xs text-semay-400 mt-1">
                {isAm
                  ? "ከትዕዛዝ ዝርዝር ውስጥ ጉድለት መመዝገብ ይችላሉ"
                  : "You can add defects from an order page"}
              </p>
            </div>
          ) : (
            defects.map((d) => (
              <div
                key={d.id}
                className="px-4 py-3 border-b border-semay-50 flex justify-between"
              >
                <div>
                  <div className="font-medium text-sm">{label(d.defectType)}</div>
                  <div className="text-xs text-semay-500 mt-0.5">
                    {d.order?.orderNumber} · {d.order?.style?.name} · qty {d.quantity}
                  </div>
                </div>
                <div className="text-sm font-medium text-danger">
                  {d.estimatedCost
                    ? `${Number(d.estimatedCost).toFixed(0)} ETB`
                    : "-"}
                </div>
              </div>
            ))
          )}
        </div>

        <p className="text-sm text-semay-500">
          {isAm
            ? "ጉድለት ለመመዝገብ ወደ ትዕዛዝ ይሂዱ → ጉድለት ጨምር"
            : "To record a defect: open an order → Add defect"}
        </p>
      </div>
    </GarmentLayout>
  )
}