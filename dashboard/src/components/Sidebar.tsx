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
  Brain,
  Shield,
  LogOut,
} from 'lucide-react'
import { getSession, logout } from '../lib/auth'

interface Props {
  isAdmin: boolean
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

export default function Sidebar({ isAdmin }: Props) {
  const session = getSession()

  return (
    <aside className="w-64 flex flex-col relative" style={{
      background: 'rgba(10, 10, 20, 0.85)',
      backdropFilter: 'blur(20px)',
      borderRight: '1px solid rgba(255, 255, 255, 0.06)',
    }}>
      {/* Neural pathway connecting line */}
      <div className="neural-line" />

      {/* Logo section */}
      <div className="p-5 border-b flex items-center gap-3" style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}>
        <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Vrajesh.ai" className="w-8 h-8" />
        <div>
          <h1 className="text-xl font-bold gradient-text font-heading tracking-tight">
            Vrajesh.ai
          </h1>
          <p className="text-[11px]" style={{ color: 'var(--text-dim)' }}>
            Neural Cortex Dashboard
          </p>
        </div>
      </div>

      {/* User info */}
      {session && (
        <div className="px-4 py-3 border-b flex items-center gap-3" style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}>
          <img
            src={session.picture}
            alt={session.name}
            className="w-8 h-8 rounded-full"
            style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
            referrerPolicy="no-referrer"
          />
          <div className="min-w-0">
            <p className="text-xs font-medium truncate" style={{ color: 'var(--text-primary)' }}>
              {session.name}
            </p>
            <p className="text-[10px] truncate" style={{ color: 'var(--text-dim)' }}>
              {session.email}
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 relative z-10 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                isActive
                  ? 'text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.03]'
              }`
            }
            style={({ isActive }) => isActive ? {
              background: 'rgba(139, 92, 246, 0.08)',
              border: '1px solid rgba(139, 92, 246, 0.15)',
              boxShadow: '0 0 15px rgba(139, 92, 246, 0.05)',
            } : {
              border: '1px solid transparent',
            }}
          >
            {({ isActive }) => (
              <>
                {isActive && <div className="nav-active-bar" />}
                <item.icon size={17} style={isActive ? { color: 'var(--accent-violet)' } : {}} />
                <span className="font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}

        {/* Admin nav item */}
        {isAdmin && (
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-300 ${
                isActive
                  ? 'text-white'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.03]'
              }`
            }
            style={({ isActive }) => isActive ? {
              background: 'rgba(139, 92, 246, 0.08)',
              border: '1px solid rgba(139, 92, 246, 0.15)',
              boxShadow: '0 0 15px rgba(139, 92, 246, 0.05)',
            } : {
              border: '1px solid transparent',
            }}
          >
            {({ isActive }) => (
              <>
                {isActive && <div className="nav-active-bar" />}
                <Shield size={17} style={isActive ? { color: 'var(--accent-violet)' } : {}} />
                <span className="font-medium">User Management</span>
              </>
            )}
          </NavLink>
        )}
      </nav>

      {/* Bottom section: sync status + logout */}
      <div className="p-4 border-t space-y-3" style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Brain size={16} style={{ color: 'var(--accent-cyan)' }} />
            <div className="brain-pulse absolute -top-0.5 -right-0.5" />
          </div>
          <div>
            <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
              Brain Synced
            </span>
            <p className="text-[10px]" style={{ color: 'var(--text-dim)' }}>
              Live connection
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all duration-200 hover:bg-white/[0.03]"
          style={{ color: 'var(--text-dim)' }}
        >
          <LogOut size={14} />
          Sign out
        </button>
      </div>
    </aside>
  )
}
