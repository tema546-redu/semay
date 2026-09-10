import { StrictMode, Component, ReactNode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./lib/auth"
import "./i18n"
import App from "./App"
import "./index.css"

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("App crash:", error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-svh flex flex-col items-center justify-center bg-semay-50 text-semay-900 p-6 text-center">
          <h1 className="text-xl font-bold mb-2">Something went wrong</h1>
          <p className="text-sm text-semay-500 mb-4">Please refresh the page to continue.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-semay-900 text-white rounded-lg text-sm font-medium"
          >
            Refresh
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

const rootEl = document.getElementById("root")
if (!rootEl) {
  throw new Error("Root element not found")
}

createRoot(rootEl).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)

// PWA service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("SW registered:", reg.scope))
      .catch((err) => console.error("SW registration failed:", err))
  })
}