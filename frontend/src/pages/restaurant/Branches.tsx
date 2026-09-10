import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus } from "lucide-react"
import { branchesApi } from "../../lib/api"
import { setBranchId } from "../../lib/branch"

export default function Branches() {
  const [list, setList] = useState<any[]>([])
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [msg, setMsg] = useState("")
  const [busy, setBusy] = useState(false)

  const load = () => branchesApi.list().then(setList).catch(console.error)

  useEffect(() => {
    branchesApi.ensureMain().finally(load)
  }, [])

  const add = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setMsg("")
    try {
      await branchesApi.create({ name, address, phone })
      setName("")
      setAddress("")
      setPhone("")
      setMsg("Branch created — add menu items for this branch")
      load()
    } catch (err: any) {
      setMsg(err.message || "Failed")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-svh bg-semay-50">
      <header className="bg-white border-b h-14 px-4 flex items-center gap-3">
        <Link to="/dashboard" className="p-2 -ml-2 rounded-lg hover:bg-semay-100">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-semibold text-sm">Branches</h1>
      </header>
      <div className="max-w-md mx-auto p-4 space-y-4">
        <form onSubmit={add} className="bg-white border rounded-2xl p-4 space-y-3">
          <input
            className="w-full border rounded-xl px-3 py-2.5 text-sm"
            placeholder="Branch name (e.g. Bole)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full border rounded-xl px-3 py-2.5 text-sm"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="w-full border rounded-xl px-3 py-2.5 text-sm"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            type="submit"
            disabled={busy}
            className="w-full bg-semay-900 text-white py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add branch
          </button>
          {msg && <p className="text-sm text-semay-600">{msg}</p>}
        </form>
        <div className="bg-white border rounded-2xl divide-y">
          {list.map((b) => (
            <div key={b.id} className="p-4 flex justify-between items-center gap-2">
              <div>
                <div className="font-medium text-sm">{b.name}</div>
                <div className="text-xs text-semay-400">{b.address || "—"}</div>
              </div>
              <button
                type="button"
                className="text-xs px-3 py-1.5 rounded-full bg-semay-900 text-white"
                onClick={() => {
                  setBranchId(b.id)
                  setMsg(`Working in: ${b.name}`)
                }}
              >
                Use
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}