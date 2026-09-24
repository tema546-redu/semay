import { Link } from "react-router-dom"

export default function StoreSettings() {
  const logout = () => {
    localStorage.removeItem("semay_token")
    localStorage.removeItem("token")
    window.location.href = "/login"
  }

  return (
    <div className="min-h-svh bg-stone-50 max-w-lg mx-auto p-4 space-y-4">
      <div className="flex justify-between">
        <h1 className="font-semibold text-lg">Settings</h1>
        <Link to="/store" className="text-sm text-stone-500">
          ← Home
        </Link>
      </div>

      <section className="bg-white border rounded-2xl p-4 space-y-1">
        <h2 className="text-sm font-semibold mb-2">Account</h2>
        <Link
          to="/billing"
          className="block text-sm font-medium py-2.5 border-b border-stone-50"
        >
          Billing & plans →
        </Link>
        <Link
          to="/profile"
          className="block text-sm font-medium py-2.5 border-b border-stone-50"
        >
          Profile →
        </Link>
        <Link to="/staff" className="block text-sm font-medium py-2.5">
          Staff →
        </Link>
      </section>

      <section className="bg-white border rounded-2xl p-4">
        <p className="text-xs text-stone-500 mb-2">
          Store uses the same Semay trial: <strong>3 days free</strong>, then
          choose a plan (500 ETB / month and longer packs).
        </p>
        <Link
          to="/billing"
          className="inline-flex text-sm font-medium bg-stone-900 text-white px-4 py-2.5 rounded-xl"
        >
          Open billing
        </Link>
      </section>

      <section className="bg-white border rounded-2xl p-4">
        <button
          type="button"
          onClick={logout}
          className="w-full text-left text-sm font-medium text-rose-600 py-2"
        >
          Logout
        </button>
      </section>
    </div>
  )
}