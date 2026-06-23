import { useState, useEffect } from 'react'
import { isAuthenticated, isAuthorized, setSession, getSession } from './lib/auth'
import LoginPage from './components/LoginPage'
import AccessDenied from './components/AccessDenied'
import Sidebar from './components/Sidebar'
import ThreadsView from './views/ThreadsView'
import OKRsView from './views/OKRsView'
import PrioritiesView from './views/PrioritiesView'
import { loadThreads, loadPulse, loadPriorities, loadOKRMetrics, ThreadsData, PulseData, PrioritiesData, OKRMetricsData } from './lib/data'
import { saveFile } from './lib/github'

function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-warm-800 animate-pulse">
          Command Center
        </h1>
        <p className="text-xs text-warm-400 mt-2">Loading...</p>
      </div>
    </div>
  )
}

function App() {
  const [authState, setAuthState] = useState<'loading' | 'login' | 'denied' | 'authenticated'>('loading')
  const [activeView, setActiveView] = useState('threads')
  const [threadsData, setThreadsData] = useState<ThreadsData | null>(null)
  const [pulseData, setPulseData] = useState<PulseData | null>(null)
  const [prioritiesData, setPrioritiesData] = useState<PrioritiesData | null>(null)
  const [okrData, setOkrData] = useState<OKRMetricsData | null>(null)

  useEffect(() => { checkAuth() }, [])

  async function checkAuth() {
    if (!isAuthenticated()) { setAuthState('login'); return }
    const session = getSession()!
    const authorized = await isAuthorized(session.email)
    if (!authorized) { setAuthState('denied'); return }
    setAuthState('authenticated')
    fetchData()
  }

  async function fetchData() {
    const [threads, pulse, priorities, okr] = await Promise.all([
      loadThreads(),
      loadPulse(),
      loadPriorities(),
      loadOKRMetrics(),
    ])
    setThreadsData(threads)
    setPulseData(pulse)
    setPrioritiesData(priorities)
    setOkrData(okr)
  }

  function handleLoginSuccess(token: string) {
    setSession(token)
    checkAuth()
  }

  async function handleThreadAction(threadId: string, action: string, payload?: string) {
    const actionFile = {
      id: `act-${Date.now()}-${threadId}`,
      created_at: new Date().toISOString(),
      thread_id: threadId,
      action,
      payload: payload ? { message: payload } : {},
      status: 'pending',
      executed_at: null,
    }

    // In dev, write to local disk via Vite middleware; in prod, use GitHub API
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      try {
        await fetch('/api/action', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(actionFile),
        })
        console.log('[CC] Action written to disk:', actionFile.id)
      } catch (err) {
        console.error('[CC] Local write failed:', err)
      }
    } else {
      try {
        const filename = `actions-queue/${Date.now()}-${action}.json`
        await saveFile(filename, JSON.stringify(actionFile, null, 2))
      } catch (err) {
        console.error('[CC] GitHub save failed:', err)
      }
    }

    // Update UI immediately — add action to thread's actions list
    if (threadsData) {
      const newAction = {
        id: actionFile.id,
        action: actionFile.action,
        message: payload || action,
        created_at: actionFile.created_at,
        status: 'pending' as const,
      }
      setThreadsData({
        ...threadsData,
        threads: threadsData.threads.map((t) =>
          t.id === threadId
            ? {
                ...t,
                status: action === 'reject' ? 'closed' : t.status,
                actions: [...(t.actions || []), newAction],
              } as typeof t
            : t
        ),
      })
    }
  }

  async function handlePrioritiesSave(data: PrioritiesData) {
    setPrioritiesData(data)
    await saveFile('command-center/priorities.json', JSON.stringify(data, null, 2))
  }

  if (authState === 'loading') return <LoadingScreen />
  if (authState === 'login') return <LoginPage onSuccess={handleLoginSuccess} />
  if (authState === 'denied') return <AccessDenied />

  const counts = pulseData?.counts || { active: 0, watching: 0, due_today: 0, total_threads: 0 }

  return (
    <div className="flex h-screen bg-cream">
      <Sidebar
        activeView={activeView}
        onNavigate={setActiveView}
        activeCounts={{ active: counts.active, watching: counts.watching }}
      />
      <main className="flex-1 overflow-y-auto px-8 py-6 max-w-4xl">
        {activeView === 'threads' && (
          <ThreadsView
            threads={threadsData?.threads || []}
            counts={counts}
            onAction={handleThreadAction}
          />
        )}
        {activeView === 'okrs' && (
          <OKRsView
            metrics={okrData?.metrics || null}
            generatedAt={okrData?.generated_at || ''}
          />
        )}
        {activeView === 'priorities' && (
          <PrioritiesView
            data={prioritiesData}
            onSave={handlePrioritiesSave}
          />
        )}
      </main>
    </div>
  )
}

export default App
