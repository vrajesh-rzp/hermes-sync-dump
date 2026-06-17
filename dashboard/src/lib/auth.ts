const GOOGLE_CLIENT_ID = '841322156200-79n98mrpp1qlrknvnv39tkidq4vg6mg8.apps.googleusercontent.com'
const SESSION_KEY = 'vrajesh_ai_session'
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000 // 7 days

interface Session {
  token: string
  email: string
  name: string
  picture: string
  loginAt: number
  expiresAt: number
}

// Decode JWT payload (base64url -> JSON). No verification needed — token comes directly from Google's popup.
export function decodeJWT(token: string): { email: string; name: string; picture: string } {
  const payload = token.split('.')[1]
  const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')))
  return { email: decoded.email, name: decoded.name, picture: decoded.picture }
}

export function isAuthenticated(): boolean {
  const session = getSession()
  if (!session) return false
  return Date.now() < session.expiresAt
}

export function getSession(): Session | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch { return null }
}

export function setSession(token: string): void {
  const { email, name, picture } = decodeJWT(token)
  const session: Session = {
    token, email, name, picture,
    loginAt: Date.now(),
    expiresAt: Date.now() + SESSION_DURATION_MS
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY)
  window.location.reload()
}

export async function isAuthorized(email: string): Promise<boolean> {
  try {
    const BASE = import.meta.env.BASE_URL + 'dashboard-data/'
    const res = await fetch(BASE + 'users.json')
    if (!res.ok) return false
    const data = await res.json()
    return data.whitelist.some((u: any) => u.email.toLowerCase() === email.toLowerCase())
  } catch { return false }
}

export async function isAdmin(email: string): Promise<boolean> {
  try {
    const BASE = import.meta.env.BASE_URL + 'dashboard-data/'
    const res = await fetch(BASE + 'users.json')
    if (!res.ok) return false
    const data = await res.json()
    return data.whitelist.some((u: any) => u.email.toLowerCase() === email.toLowerCase() && u.role === 'admin')
  } catch { return false }
}

export function getGoogleClientId(): string {
  return GOOGLE_CLIENT_ID
}
