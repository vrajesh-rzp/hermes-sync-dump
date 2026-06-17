import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ExecutiveSummary from './views/ExecutiveSummary'
import Tasks from './views/Tasks'
import OKRTracker from './views/OKRTracker'
import KnowledgeGraph from './views/KnowledgeGraph'
import PeopleMap from './views/PeopleMap'
import Roadmap from './views/Roadmap'
import ActivityTimeline from './views/ActivityTimeline'
import Documents from './views/Documents'

function App() {
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
        <Sidebar />
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
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
