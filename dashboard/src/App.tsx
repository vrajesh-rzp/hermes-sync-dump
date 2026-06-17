import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { isAuthenticated, isAuthorized, isAdmin, setSession, getSession } from './lib/auth'
import LoginPage from './components/LoginPage'
import AccessDenied from './components/AccessDenied'
import Sidebar from './components/Sidebar'
import ExecutiveSummary from './views/ExecutiveSummary'
import Tasks from './views/Tasks'
import OKRTracker from './views/OKRTracker'
import KnowledgeGraph from './views/KnowledgeGraph'
import PeopleMap from './views/PeopleMap'
import Roadmap from './views/Roadmap'
import ActivityTimeline from './views/ActivityTimeline'
import Documents from './views/Documents'
import UserManagement from './views/UserManagement'

function LoadingScreen() {
  return (
    <div className="h-screen w-screen relative flex items-center justify-center overflow-hidden">
      <div className="mesh-bg" />
      <div className="grid-bg" />
      <div className="noise-overlay" />
      <div className="vignette" />
      <div className="relative z-10 text-center">
        <h1 className="text-3xl font-bold gradient-text font-heading tracking-tight animate-pulse">
          Vrajesh.ai
        </h1>
        <p className="text-xs mt-3" style={{ color: 'var(--text-dim)' }}>Loading...</p>
      </div>
    </div>
  )
}

function App() {
  const [authState, setAuthState] = useState<'loading' | 'login' | 'denied' | 'authenticated'>('loading')
  const [userIsAdmin, setUserIsAdmin] = useState(false)

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    if (!isAuthenticated()) { setAuthState('login'); return }
    const session = getSession()!
    const authorized = await isAuthorized(session.email)
    if (!authorized) { setAuthState('denied'); return }
    const admin = await isAdmin(session.email)
    setUserIsAdmin(admin)
    setAuthState('authenticated')
  }

  function handleLoginSuccess(token: string) {
    setSession(token)
    checkAuth()
  }

  if (authState === 'loading') return <LoadingScreen />
  if (authState === 'login') return <LoginPage onSuccess={handleLoginSuccess} />
  if (authState === 'denied') return <AccessDenied />

  return (
    <div className="flex h-screen relative">
      {/* Animated mesh gradient background */}
      <div className="mesh-bg" />
      {/* Grid pattern overlay */}
      <div className="grid-bg" />
      {/* Noise texture */}
      <div className="noise-overlay" />
      {/* Vignette */}
      <div className="vignette" />

      {/* Content layer */}
      <div className="relative z-10 flex w-full h-full">
        <Sidebar isAdmin={userIsAdmin} />
        <main className="flex-1 overflow-y-auto p-8">
          <Routes>
            <Route path="/" element={<ExecutiveSummary />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/okrs" element={<OKRTracker />} />
            <Route path="/graph" element={<KnowledgeGraph />} />
            <Route path="/people" element={<PeopleMap />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/activity" element={<ActivityTimeline />} />
            <Route path="/documents" element={<Documents />} />
            {userIsAdmin && <Route path="/admin/users" element={<UserManagement />} />}
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
