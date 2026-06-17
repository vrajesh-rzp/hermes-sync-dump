import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  CheckSquare,
  Target,
  Network,
  Users,
  Map,
  Clock,
  FileText,
  Sun,
  Moon,
} from 'lucide-react'

interface SidebarProps {
  darkMode: boolean
  setDarkMode: (v: boolean) => void
}

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Summary' },
  { to: '/tasks', icon: CheckSquare, label: 'Tasks' },
  { to: '/okrs', icon: Target, label: 'OKRs' },
  { to: '/graph', icon: Network, label: 'Knowledge Graph' },
  { to: '/people', icon: Users, label: 'People Map' },
  { to: '/roadmap', icon: Map, label: 'Roadmap' },
  { to: '/activity', icon: Clock, label: 'Activity' },
  { to: '/documents', icon: FileText, label: 'Documents' },
]

export default function Sidebar({ darkMode, setDarkMode }: SidebarProps) {
  return (
    <aside className="w-60 bg-gray-950 border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-lg font-bold text-indigo-400">Vrajesh.ai</h1>
        <p className="text-xs text-gray-500 mt-1">PM Brain Visualizer</p>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
              }`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </aside>
  )
}
