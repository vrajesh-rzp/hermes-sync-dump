import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import GithubPATModal from './components/GithubPATModal'
import ExecutiveSummary from './views/ExecutiveSummary'
import Tasks from './views/Tasks'
import OKRTracker from './views/OKRTracker'
import KnowledgeGraph from './views/KnowledgeGraph'
import PeopleMap from './views/PeopleMap'
import Roadmap from './views/Roadmap'
import ActivityTimeline from './views/ActivityTimeline'
import Documents from './views/Documents'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [showPATModal, setShowPATModal] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('hermes_github_pat')) {
      setShowPATModal(true)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={<ExecutiveSummary />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/okrs" element={<OKRTracker />} />
          <Route path="/graph" element={<KnowledgeGraph />} />
          <Route path="/people" element={<PeopleMap />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/activity" element={<ActivityTimeline />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </main>
      {showPATModal && <GithubPATModal onClose={() => setShowPATModal(false)} />}
    </div>
  )
}

export default App
