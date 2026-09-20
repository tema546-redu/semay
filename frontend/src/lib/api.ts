const RAW_API = import.meta.env.VITE_API_URL || "http://localhost:3001"
const API_URL = String(RAW_API).replace(/\/$/, "")

export function getToken() {
  return localStorage.getItem("semay_token")
}

export function setToken(token: string) {
  localStorage.setItem("semay_token", token)
}

export function clearToken() {
  localStorage.removeItem("semay_token")
}

export async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken()
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  }
  if (token) headers.Authorization = `Bearer ${token}`

  let res: Response
  try {
    res = await fetch(`${API_URL}${path}`, { ...options, headers })
  } catch {
    throw new Error("Offline or server unreachable. Check your connection.")
  }

  const data = await res.json().catch(() => ({}))

  if (res.status === 401) {
    const isAuthForm =
      path.includes("/api/auth/login") || path.includes("/api/auth/register")
    if (!isAuthForm) {
      clearToken()
      if (!window.location.pathname.startsWith("/login")) {
        window.location.href = "/login"
      }
    }
    throw new Error((data as any).error || "Unauthorized")
  }

  if (!res.ok) {
    const msg =
      (data as any).error ||
      (typeof (data as any).message === "string" ? (data as any).message : null) ||
      `Request failed (${res.status})`
    throw new Error(msg)
  }

  return data as T
}

export const authApi = {
  login: (email: string, password: string) =>
    request<{ token: string; user: any; organization: any }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  register: (data: any) =>
    request<{ token: string; user: any; organization: any }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  me: () => request<any>("/api/auth/me"),
  updateMe: (data: any) =>
    request<any>("/api/auth/me", { method: "PATCH", body: JSON.stringify(data) }),
  deleteAccount: () => request<any>("/api/auth/me", { method: "DELETE" }),
  organizations: () => request<any[]>("/api/auth/organizations"),
  createOrganization: (data: { name: string; type: string }) =>
    request("/api/auth/organizations", { method: "POST", body: JSON.stringify(data) }),
  switchOrg: (organizationId: string) =>
    request("/api/auth/switch-org", {
      method: "POST",
      body: JSON.stringify({ organizationId }),
    }),
}

export const ordersApi = {
  create: (payload: any) =>
    request<any>("/api/orders", { method: "POST", body: JSON.stringify(payload) }),
  active: () => request<any[]>("/api/orders/active"),
    requests: () => request<any[]>("/api/orders/requests"),
  accept: (id: string) =>
    request<any>(`/api/orders/${id}/accept`, {
      method: "POST",
      body: "{}",
    }),
  reject: (id: string) =>
    request<any>(`/api/orders/${id}/reject`, {
      method: "POST",
      body: "{}",
    }),
  /** Open (not paid/cancelled) orders — optional table filter */
  open: (table?: string) =>
    request<any[]>(
      `/api/orders/open${table ? `?table=${encodeURIComponent(table)}` : ""}`
    ),
  /** Add more items to an existing order */
  addItems: (
    orderId: string,
    items: {
      menuItemId?: string
      name: string
      quantity: number
      price: number
      notes?: string
    }[]
  ) =>
    request<any>(`/api/orders/${orderId}/items`, {
      method: "POST",
      body: JSON.stringify({ items }),
    }),
  updateStatus: (id: string, status: string) =>
    request<any>(`/api/orders/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
  savePayment: (id: string, data: { paymentMethod: string; paymentReceipt?: string | null }) =>
    request<any>(`/api/orders/${id}/payment`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
}

export const menuApi = {
  list: (availableOnly?: boolean, branchId?: string) => {
    const q = new URLSearchParams()
    if (availableOnly) q.set("available", "true")
    if (branchId) q.set("branchId", branchId)
    const s = q.toString()
    return request<any[]>(`/api/menu${s ? `?${s}` : ""}`)
  },
  create: (data: any) =>
    request<any>("/api/menu", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: any) =>
    request<any>(`/api/menu/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  remove: (id: string) => request<any>(`/api/menu/${id}`, { method: "DELETE" }),
  toggleAvailability: (id: string, available: boolean) =>
    request<any>(`/api/menu/${id}/availability`, {
      method: "PATCH",
      body: JSON.stringify({ available }),
    }),
}

export const publicMenuApi = {
  menu: (orgId: string) => request<any>(`/api/public/menu/${orgId}`),
  order: (orgId: string, data: any) =>
    request(`/api/public/order/${orgId}`, { method: "POST", body: JSON.stringify(data) }),
}

export const schoolApi = {
  students: () => request<any[]>("/api/school/students"),
  createStudent: (data: any) =>
    request<any>("/api/school/students", { method: "POST", body: JSON.stringify(data) }),
  attendance: (date?: string) =>
    request<any[]>(`/api/school/attendance${date ? `?date=${date}` : ""}`),
  markAttendance: (data: { studentId: string; status: string; note?: string }) =>
    request<any>("/api/school/attendance", { method: "POST", body: JSON.stringify(data) }),
  grades: () => request<any[]>("/api/school/grades"),
  createGrade: (data: any) =>
    request<any>("/api/school/grades", { method: "POST", body: JSON.stringify(data) }),
}

export const dashboardApi = {
  stats: () => request<any>("/api/dashboard/stats"),
}

export const gymApi = {
  members: () => request<any[]>("/api/gym/members"),
  createMember: (data: any) =>
    request<any>("/api/gym/members", { method: "POST", body: JSON.stringify(data) }),
  plans: () => request<any[]>("/api/gym/plans"),
  createPlan: (data: any) =>
    request<any>("/api/gym/plans", { method: "POST", body: JSON.stringify(data) }),
  checkIn: (memberId: string, method = "manual") =>
    request<any>("/api/gym/check-in", {
      method: "POST",
      body: JSON.stringify({ memberId, method }),
    }),
  todayCheckIns: () => request<any[]>("/api/gym/check-ins/today"),
  stats: () => request<any>("/api/gym/stats"),
  setMemberStatus: (id: string, status: string) =>
    request<any>(`/api/gym/members/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
  expiring: () => request<any[]>("/api/gym/expiring"),
}

export const hotelApi = {
  rooms: () => request<any[]>("/api/hotel/rooms"),
  createRoom: (data: any) =>
    request<any>("/api/hotel/rooms", { method: "POST", body: JSON.stringify(data) }),
  updateStatus: (id: string, status: string) =>
    request<any>(`/api/hotel/rooms/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
  stats: () => request<any>("/api/hotel/stats"),
}

export const aiApi = {
  chat: (message: string, context?: string) =>
    request<{ reply: string }>("/api/ai/chat", {
      method: "POST",
      body: JSON.stringify({ message, context }),
    }),
}

export const restaurantApi = {
  analytics: () => request<any>("/api/restaurant/analytics"),
settings: () =>
  request<{
    openTime?: string
    closeTime?: string
    name?: string
    photoUrl?: string | null
    phone?: string | null
    address?: string | null
    city?: string | null
    tin?: string | null
    currency?: string
  }>("/api/restaurant/settings"),

updateSettings: (data: {
  openTime?: string
  closeTime?: string
  name?: string
  photoUrl?: string | null
  phone?: string | null
  address?: string | null
  city?: string | null
  tin?: string | null
}) =>
  request<any>("/api/restaurant/settings", {
    method: "PATCH",
    body: JSON.stringify(data),
  }),
  closingReport: () => request<any>("/api/restaurant/closing-report"),
  switchToRestaurant: () =>
  request<any>("/api/restaurant/switch-type", {
    method: "POST",
    body: JSON.stringify({ toType: "RESTAURANT", confirm: true }),
  }),
}

export const expensesApi = {
  list: () => request<any[]>("/api/restaurant/expenses"),
  create: (data: { name: string; amount: number; note?: string }) =>
    request<any>("/api/restaurant/expenses", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  remove: (id: string) =>
    request<any>(`/api/restaurant/expenses/${id}`, { method: "DELETE" }),
}

export const billingApi = {
  current: () => request<any>("/api/billing/current"),
  plans: () => request<any>("/api/billing/plans"),
  selectPlan: (plan: string) =>
    request<any>("/api/billing/select-plan", {
      method: "POST",
      body: JSON.stringify({ plan }),
    }),
  markPaid: (plan: string, reference: string, method: string, receipt?: string) =>
    request<any>("/api/billing/mark-paid", {
      method: "POST",
      body: JSON.stringify({ plan, reference, method, receipt }),
    }),
  
}

export const staffApi = {
  list: () => request<any>("/api/staff"),
  createInvite: (role: string, branchId?: string) =>
    request<any>("/api/staff/invite", {
      method: "POST",
      body: JSON.stringify({ role, branchId }),
    }),
  getInvite: (code: string) => request<any>(`/api/staff/invite/${code}`),
  join: (data: { code: string; name: string; email: string; password: string }) =>
    request<any>("/api/staff/join", { method: "POST", body: JSON.stringify(data) }),
   remove: (userId: string) =>
    request<any>(`/api/staff/${userId}`, { method: "DELETE" }),
  attendance: (year: number, month: number) =>
    request<any>(`/api/staff/attendance?year=${year}&month=${month}`),
  markAttendance: (data: {
    userId: string
    date: string
    status: string
    note?: string
  }) =>
    request<any>("/api/staff/attendance", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  
}

export const branchesApi = {
  list: () => request<any[]>("/api/branches"),
  create: (data: { name: string; address?: string; phone?: string }) =>
    request("/api/branches", { method: "POST", body: JSON.stringify(data) }),
  ensureMain: () =>
    request("/api/branches/ensure-main", { method: "POST", body: "{}" }),
}

export const reservationsApi = {
  list: (date?: string) =>
    request<any[]>(`/api/reservations${date ? `?date=${date}` : ""}`),
  create: (data: any) =>
    request<any>("/api/reservations", { method: "POST", body: JSON.stringify(data) }),
  updateStatus: (id: string, status: string) =>
    request<any>(`/api/reservations/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
  remove: (id: string) =>
    request<any>(`/api/reservations/${id}`, { method: "DELETE" }),
}

export const bakeryApi = {
  products: () => request<any[]>("/api/bakery/products"),
  createProduct: (data: any) =>
    request("/api/bakery/products", { method: "POST", body: JSON.stringify(data) }),
  produce: (data: { productId: string; quantity: number; note?: string }) =>
    request("/api/bakery/produce", { method: "POST", body: JSON.stringify(data) }),
  waste: (data: { productId: string; quantity: number; reason?: string }) =>
    request("/api/bakery/waste", { method: "POST", body: JSON.stringify(data) }),
  sell: (data: any) =>
    request("/api/bakery/sell", { method: "POST", body: JSON.stringify(data) }),
  dashboard: () => request<any>("/api/bakery/dashboard"),
}

export const feedbackApi = {
  send: (message: string, email?: string) =>
    request<any>("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ message, ...(email ? { email } : {}) }),
    }),
  mine: () => request<any[]>("/api/feedback/mine"),
}

export const pharmacyApi = {
  dashboard: () => request<any>("/api/pharmacy/dashboard"),
  products: (q?: string) =>
    request<any[]>(`/api/pharmacy/products${q ? `?q=${encodeURIComponent(q)}` : ""}`),
  createProduct: (data: any) =>
    request<any>("/api/pharmacy/products", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateProduct: (id: string, data: any) =>
    request<any>(`/api/pharmacy/products/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  sell: (data: any) =>
    request<any>("/api/pharmacy/sell", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  sales: () => request<any[]>("/api/pharmacy/sales"),
}

export const stockApi = {
  list: (params?: { location?: string }) => {
    const q = params?.location
      ? `?location=${encodeURIComponent(params.location)}`
      : ""
    return request<any[]>(`/api/stock${q}`)
  },
  create: (data: {
    name: string
    unit: string
    quantity: number
    lowAt?: number | null
    unitCost?: number | null
    note?: string
    location?: string
  }) => request<any>("/api/stock", { method: "POST", body: JSON.stringify(data) }),
    update: (
    id: string,
    data: {
      name?: string
      unit?: string
      quantity?: number
      lowAt?: number | null
      unitCost?: number | null
      note?: string | null
      location?: "BAR" | "KITCHEN" | "STORE"
    }
  ) =>
    request<any>(`/api/stock/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  remove: (id: string) => request<any>(`/api/stock/${id}`, { method: "DELETE" }),
  addQty: (id: string, amount: number) =>
    request<any>(`/api/stock/${id}/add`, {
      method: "POST",
      body: JSON.stringify({ amount }),
    }),
  receive: (
    id: string,
    data: { amount: number; invoiceNo?: string; note?: string; unitCost?: number | null }
  ) =>
    request<any>(`/api/stock/${id}/receive`, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  issue: (id: string, data: { amount: number; note?: string }) =>
    request<any>(`/api/stock/${id}/issue`, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  count: (id: string, data: { counted: number; note?: string }) =>
    request<any>(`/api/stock/${id}/count`, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  movements: (id: string) => request<any[]>(`/api/stock/${id}/movements`),

    transfer: (
    id: string,
    data: {
      toLocation: "BAR" | "KITCHEN" | "STORE"
      full?: boolean
      amount?: number
      note?: string
    }
  ) =>
    request<any>(`/api/stock/${id}/transfer`, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  /** Day / range report — what was bought, issued, counted */
   report: (params?: {
    date?: string
    range?: "today" | "7d" | "month"
    location?: string
  }) => {
    const q = new URLSearchParams()
    if (params?.date) q.set("date", params.date)
    else if (params?.range) q.set("range", params.range)
    if (params?.location) q.set("location", params.location)
    const qs = q.toString()
    return request<any>(`/api/stock/report${qs ? `?${qs}` : ""}`)
  },

  setRecipe: (data: { menuItemId: string; stockItemId: string; qtyPerSale: number }) =>
    request<any>("/api/stock/recipe", { method: "POST", body: JSON.stringify(data) }),
  getRecipe: (menuItemId: string) =>
    request<any[]>(`/api/stock/recipe/${menuItemId}`),
   
}

// ——— Library API (public + private) ———
export const libraryApi = {
  // Public — no login
  publicList: () => request<any[]>("/api/library/public/list"),
  publicOne: (orgId: string) => request<any>(`/api/library/public/${orgId}`),
  publicSuggestNames: (orgId: string, q: string) =>
    request<string[]>(
      `/api/library/public/${orgId}/suggest-names?q=${encodeURIComponent(q)}`
    ),
  checkIn: (orgId: string, data: { visitorName: string; phone?: string }) =>
    request(`/api/library/public/${orgId}/check-in`, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  reviews: (orgId: string) =>
    request<{ reviews: any[]; averageRating: number; totalReviews: number }>(
      `/api/library/public/${orgId}/reviews`
    ),
  submitReview: (
    orgId: string,
    data: { visitorName: string; rating: number; comment?: string }
  ) =>
    request(`/api/library/public/${orgId}/reviews`, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  // Private — auth required
  dashboard: () => request<any>("/api/library/dashboard"),
  setOpen: (isOpen: boolean) =>
    request("/api/library/status", {
      method: "PATCH",
      body: JSON.stringify({ isOpen }),
    }),
  ensureInvite: () =>
    request<any>("/api/library/ensure-invite", { method: "POST", body: "{}" }),
  setPhoto: (photoUrl: string | null) =>
    request("/api/library/photo", {
      method: "PATCH",
      body: JSON.stringify({ photoUrl }),
    }),
  settings: () => request<any>("/api/library/settings"),
  updateSettings: (data: any) =>
    request("/api/library/settings", {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  // L1 door (staff desk)
  visitsToday: () =>
    request<{ date: string; count: number; visits: any[] }>(
      "/api/library/visits/today"
    ),
  suggestNames: (q: string) =>
    request<string[]>(
      `/api/library/visits/suggest?q=${encodeURIComponent(q)}`
    ),
  markPresent: (visitorName: string) =>
    request<any>("/api/library/visits/check-in", {
      method: "POST",
      body: JSON.stringify({ visitorName }),
    }),

  // Books
  books: () => request<any[]>("/api/library/books"),
  addBook: (data: any) =>
    request<any>("/api/library/books", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateBook: (id: string, data: any) =>
    request<any>(`/api/library/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  deleteBook: (id: string) =>
    request<any>(`/api/library/books/${id}`, { method: "DELETE" }),

  // Loans
  loans: () => request<any[]>("/api/library/loans"),
  createLoan: (data: any) =>
    request("/api/library/loans", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  returnLoan: (id: string) =>
    request(`/api/library/loans/${id}/return`, {
      method: "POST",
      body: "{}",
    }),

  // Tables
  tables: () => request<any[]>("/api/library/tables"),
  addTable: (data: { label: string; seats?: number }) =>
    request("/api/library/tables", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  reserveTable: (id: string, data: any) =>
    request(`/api/library/tables/${id}/reserve`, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  // Students
  students: () => request<any[]>("/api/library/students"),
  addStudent: (data: any) =>
    request("/api/library/students", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  deleteStudent: (id: string) =>
    request(`/api/library/students/${id}`, { method: "DELETE" }),
  checkInStudent: (id: string) =>
    request(`/api/library/students/${id}/check-in`, {
      method: "POST",
      body: "{}",
    }),
  todayAttendance: () =>
    request<any[]>("/api/library/students/attendance/today"),

    // Reports
  reports: (range: "today" | "week" | "month" = "today") =>
    request<any>(`/api/library/reports?range=${range}`),
  annualReport: (year?: number) =>
    request<any>(
      `/api/library/reports/annual${year ? `?year=${year}` : ""}`
    ),

      network: () => request<any>("/api/library/network"),
  inviteLibrary: () =>
    request<{ code: string; link: string }>("/api/library/network/invite-library", {
      method: "POST",
      body: "{}",
    }),
  networkInviteInfo: (code: string) =>
    request<any>(`/api/library/network/invite/${encodeURIComponent(code)}`),
  joinNetworkLibrary: (data: {
    name: string
    email: string
    password: string
    organizationName: string
    networkCode: string
    preferredLang?: string
  }) =>
    request<any>("/api/library/network/join-library", {
      method: "POST",
      body: JSON.stringify(data),
    }),
}

export const gymClassApi = {
  list: () => request<any[]>("/api/gym/classes"),
  create: (data: any) =>
    request<any>("/api/gym/classes", {
      method: "POST",
      body: JSON.stringify(data),
    }),
}

export const salonApi = {
  services: () => request<any[]>("/api/salon/services"),
  addService: (data: any) =>
    request<any>("/api/salon/services", { method: "POST", body: JSON.stringify(data) }),
  stylists: () => request<any[]>("/api/salon/stylists"),
  addStylist: (data: any) =>
    request<any>("/api/salon/stylists", { method: "POST", body: JSON.stringify(data) }),
  appointments: (date?: string) =>
    request<any[]>(`/api/salon/appointments${date ? `?date=${date}` : ""}`),
  addAppointment: (data: any) =>
    request<any>("/api/salon/appointments", { method: "POST", body: JSON.stringify(data) }),
  setAppointmentStatus: (id: string, status: string) =>
    request<any>(`/api/salon/appointments/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
  checkout: (data: any) =>
    request<any>("/api/salon/checkout", { method: "POST", body: JSON.stringify(data) }),
  dashboard: () => request<any>("/api/salon/dashboard"),

  reports: (range: "day" | "month" | "year", date?: string) =>
  request<any>(`/api/salon/reports?range=${range}${date ? `&date=${date}` : ""}`),
reviews: () => request<any>("/api/salon/reviews"),
setPhoto: (photoUrl: string | null) =>
  request<any>("/api/salon/photo", { method: "PATCH", body: JSON.stringify({ photoUrl }) }),
}

export const publicSalonApi = {
  info: (orgId: string) => request<any>(`/api/public/salon/${orgId}`),
  availability: (orgId: string, date: string, serviceId: string, stylistId?: string) =>
    request<{ slots: string[] }>(
      `/api/public/salon/${orgId}/availability?date=${date}&serviceId=${serviceId}${stylistId ? `&stylistId=${stylistId}` : ""}`
    ),
  book: (orgId: string, data: any) =>
    request<any>(`/api/public/salon/${orgId}/book`, { method: "POST", body: JSON.stringify(data) }),
  reviews: (orgId: string) => request<any>(`/api/public/salon/${orgId}/reviews`),
submitReview: (orgId: string, data: { clientName: string; rating: number; comment?: string }) =>
  request<any>(`/api/public/salon/${orgId}/reviews`, { method: "POST", body: JSON.stringify(data) }),
}

// ===================== GARMENT API =====================
export const garmentApi = {
  dashboard: () => request<any>("/api/garment/dashboard"),

  // Styles
  styles: () => request<any[]>("/api/garment/styles"),
  createStyle: (data: any) =>
    request("/api/garment/styles", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  // Materials
  materials: () => request<any[]>("/api/garment/materials"),
  createMaterial: (data: any) =>
    request("/api/garment/materials", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateMaterial: (id: string, data: any) =>
    request(`/api/garment/materials/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  // BOM
  getBOM: (styleId: string) =>
    request<any[]>(`/api/garment/styles/${styleId}/bom`),
  addBOMItem: (
    styleId: string,
    data: { materialId: string; qtyNeeded: number }
  ) =>
    request(`/api/garment/styles/${styleId}/bom`, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  deleteBOMItem: (styleId: string, itemId: string) =>
    request(`/api/garment/styles/${styleId}/bom/${itemId}`, {
      method: "DELETE",
    }),

  // Production Orders
  orders: () => request<any[]>("/api/garment/orders"),
  createOrder: (data: any) =>
    request("/api/garment/orders", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateStage: (
    id: string,
    data: { stage: string; quantity?: number; note?: string }
  ) =>
    request(`/api/garment/orders/${id}/stage`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  materialCheck: (orderId: string) =>
    request<any>(`/api/garment/orders/${orderId}/material-check`),

  // Quality
  defects: () => request<any[]>("/api/garment/defects"),
  orderDefects: (orderId: string) =>
    request<any[]>(`/api/garment/orders/${orderId}/defects`),
  addDefect: (
    orderId: string,
    data: {
      defectType: string
      quantity: number
      stage?: string
      note?: string
      estimatedCost?: number
    }
  ) =>
    request(`/api/garment/orders/${orderId}/defects`, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  qualitySummary: () => request<any>("/api/garment/quality/summary"),

  // Daily reports
  dailyReports: (params?: { date?: string; range?: string }) => {
    const q = new URLSearchParams()
    if (params?.date) q.set("date", params.date)
    if (params?.range) q.set("range", params.range)
    const qs = q.toString()
    return request<any[]>(
      `/api/garment/daily-reports${qs ? `?${qs}` : ""}`
    )
  },
  addDailyReport: (data: {
    orderId?: string
    stage?: string
    quantity: number
    note?: string
    reportDate?: string
    updateOrderStage?: boolean
  }) =>
    request("/api/garment/daily-reports", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  reports: (params?: { date?: string; range?: string }) => {
    const q = new URLSearchParams()
    if (params?.date) q.set("date", params.date)
    if (params?.range) q.set("range", params.range)
    const qs = q.toString()
    return request<any>(`/api/garment/reports${qs ? `?${qs}` : ""}`)
  },

  moneyLeaks: () => request<any>("/api/garment/money-leaks"),

  // Workers
  workers: () => request<any[]>("/api/garment/workers"),
  addWorker: (data: {
    name: string
    phone?: string
    annualLeaveDays?: number
    usedLeaveDays?: number
  }) =>
    request("/api/garment/workers", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  updateWorker: (
    id: string,
    data: {
      name?: string
      phone?: string
      annualLeaveDays?: number
      usedLeaveDays?: number
    }
  ) =>
    request(`/api/garment/workers/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
  removeWorker: (id: string) =>
    request(`/api/garment/workers/${id}`, { method: "DELETE" }),

  // Attendance
  attendanceStaff: () => request<any[]>("/api/garment/attendance/staff"),
  attendanceDay: (date: string) =>
    request<any[]>(`/api/garment/attendance?date=${encodeURIComponent(date)}`),
  saveAttendance: (data: {
    userId?: string
    workerId?: string
    workDate: string
    status: string
    reason?: string
    note?: string
  }) =>
    request("/api/garment/attendance", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  saveAttendanceBulk: (data: {
    workDate: string
    marks: {
      workerId?: string
      userId?: string
      status: string
      reason?: string
      note?: string
      useAnnualLeave?: boolean
    }[]
  }) =>
    request<{ saved: number; rows: any[] }>(
      "/api/garment/attendance/bulk",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    ),
  attendanceSummary: (days = 30) =>
    request<any>(`/api/garment/attendance/summary?days=${days}`),
  attendanceHistory: (workerId: string, days = 30) =>
    request<any>(
      `/api/garment/attendance/history?workerId=${encodeURIComponent(
        workerId
      )}&days=${days}`
    ),
}