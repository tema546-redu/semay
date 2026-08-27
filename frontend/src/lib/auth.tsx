import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { authApi, setToken, clearToken } from "./api"
import i18n from "../i18n"

interface AuthContextType {
  user: any | null
  organization: any | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: any) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [organization, setOrganization] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("semay_token")
    if (!token) {
      setLoading(false)
      return
    }
    authApi
      .me()
      .then((data) => {
        setUser(data)
        setOrganization(data.organization)
        if (data.preferredLang) i18n.changeLanguage(data.preferredLang)
      })
      .catch(() => clearToken())
      .finally(() => setLoading(false))
  }, [])

  const login = async (email: string, password: string) => {
    const data = await authApi.login(email, password)
    setToken(data.token)
    setUser(data.user)
    setOrganization(data.organization)
    if (data.user.preferredLang) i18n.changeLanguage(data.user.preferredLang)
  }

  const register = async (formData: any) => {
    const data = await authApi.register(formData)
    setToken(data.token)
    setUser(data.user)
    setOrganization(data.organization)
    if (data.user.preferredLang) i18n.changeLanguage(data.user.preferredLang)
  }

  const logout = () => {
    clearToken()
    setUser(null)
    setOrganization(null)
    window.location.href = "/login"
  }

  return (
    <AuthContext.Provider
      value={{ user, organization, loading, login, register, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
