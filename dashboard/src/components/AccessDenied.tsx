import { getSession, logout } from '../lib/auth'
import { LogOut } from 'lucide-react'

export default function AccessDenied() {
  const session = getSession()

  return (
    <div className="h-screen w-screen relative flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="mesh-bg" />
      <div className="grid-bg" />
      <div className="noise-overlay" />
      <div className="vignette" />

      {/* Access Denied card */}
      <div className="relative z-10 flex flex-col items-center gap-6 p-10 rounded-2xl"
        style={{
          background: 'rgba(10, 10, 20, 0.75)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          boxShadow: '0 0 60px rgba(239, 68, 68, 0.08), 0 0 120px rgba(239, 68, 68, 0.04)',
          minWidth: '380px',
        }}
      >
        {/* Red glow icon */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgb(239, 68, 68)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          </svg>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold font-heading" style={{ color: 'rgb(239, 68, 68)' }}>
            Access Denied
          </h1>
          <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
            Your account <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.05)' }}>{session?.email}</span> is not authorized to view this dashboard.
          </p>
          <p className="text-xs mt-4" style={{ color: 'var(--text-dim)' }}>
            Contact <span className="font-mono">vrajesh.j@razorpay.com</span> for access.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.3), transparent)' }} />

        {/* Logout button */}
        <button
          onClick={logout}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            color: 'rgb(239, 68, 68)',
          }}
        >
          <LogOut size={15} />
          Sign out
        </button>
      </div>
    </div>
  )
}
