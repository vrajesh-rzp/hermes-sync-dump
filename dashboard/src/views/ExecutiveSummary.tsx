import { useEffect, useState } from 'react'
import { loadOKRs, loadActivity } from '../lib/data'
import type { OKR, ActivityItem } from '../types'
import { Target, Calendar, Activity, TrendingUp } from 'lucide-react'

export default function ExecutiveSummary() {
  const [okrs, setOkrs] = useState<OKR[]>([])
  const [activity, setActivity] = useState<ActivityItem[]>([])

  useEffect(() => {
    loadOKRs().then(setOkrs)
    loadActivity().then(setActivity)
  }, [])

  const recentMeetings = activity.filter(
    (a) => a.type === 'meeting' && new Date(a.date) > new Date(Date.now() - 7 * 86400000)
  )

  const ragColor = (status: string) => {
    switch (status) {
      case 'green': return 'glow-border-green'
      case 'amber': return 'glow-border-amber'
      case 'red': return 'glow-border-red'
      default: return ''
    }
  }

  const ragDot = (status: string) => {
    switch (status) {
      case 'green': return 'bg-emerald-400'
      case 'amber': return 'bg-amber-400 animate-breathe'
      case 'red': return 'bg-red-400 animate-breathe'
      default: return 'bg-gray-500'
    }
  }

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="space-y-8">
      {/* Welcome header */}
      <div className="animate-fade-in-up delay-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-heading" style={{ color: 'var(--text-primary)' }}>
              {greeting}, <span className="gradient-text">Vrajesh</span>
            </h1>
            <p className="text-sm mt-1" style={{ color: 'var(--text-dim)' }}>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              {' '}&middot;{' '}
              {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          <span className="text-xs glass-pill" style={{ color: 'var(--text-dim)' }}>
            Last synced: just now
          </span>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-5">
        {[
          {
            icon: Target,
            label: 'OKRs On Track',
            value: okrs.reduce((acc, o) => acc + o.keyResults.filter(kr => kr.ragStatus === 'green').length, 0),
            total: okrs.reduce((acc, o) => acc + o.keyResults.length, 0),
            color: 'var(--accent-green)',
            glowClass: 'top-glow-green',
          },
          {
            icon: TrendingUp,
            label: 'Active Projects',
            value: 3,
            total: null,
            color: 'var(--accent-violet)',
            glowClass: 'top-glow-violet',
          },
          {
            icon: Calendar,
            label: 'Meetings (7d)',
            value: recentMeetings.length,
            total: null,
            color: 'var(--accent-cyan)',
            glowClass: 'top-glow-cyan',
          },
          {
            icon: Activity,
            label: 'Decisions (7d)',
            value: activity.filter(a => a.type === 'decision' && new Date(a.date) > new Date(Date.now() - 7 * 86400000)).length,
            total: null,
            color: 'var(--accent-amber)',
            glowClass: 'top-glow-amber',
          },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`glass-card p-5 animate-fade-in-up relative overflow-hidden ${stat.glowClass}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <stat.icon size={15} style={{ color: stat.color }} />
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{stat.label}</span>
            </div>
            <div className="font-mono-nums text-3xl font-bold" style={{ color: stat.color }}>
              {stat.value}
              {stat.total !== null && (
                <span className="text-sm font-normal" style={{ color: 'var(--text-dim)' }}> / {stat.total}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* OKR scorecard */}
      <div className="animate-fade-in-up delay-400">
        <h2 className="text-lg font-semibold font-heading mb-4" style={{ color: 'var(--text-primary)' }}>
          OKR Scorecard
        </h2>
        <div className="space-y-4">
          {okrs.map((okr) => (
            <div key={okr.id} className="glass-panel p-5">
              <h3 className="font-medium mb-4" style={{ color: 'var(--text-primary)' }}>{okr.objective}</h3>
              <div className="space-y-3">
                {okr.keyResults.map((kr) => (
                  <div key={kr.id} className={`flex items-center justify-between p-3 rounded-xl border ${ragColor(kr.ragStatus)}`}
                    style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${ragDot(kr.ragStatus)}`} />
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{kr.title}</span>
                    </div>
                    <span className="text-sm font-mono-nums" style={{ color: 'var(--text-primary)' }}>
                      {kr.current} / {kr.target} {kr.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="animate-fade-in-up delay-500">
        <h2 className="text-lg font-semibold font-heading mb-4" style={{ color: 'var(--text-primary)' }}>
          Recent Activity
        </h2>
        <div className="glass-panel overflow-hidden divide-y" style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}>
          {activity.slice(0, 5).map((item, i) => (
            <div
              key={item.id}
              className="p-4 flex items-center justify-between animate-slide-in-right hover:bg-white/[0.02] transition-colors"
              style={{ animationDelay: `${500 + i * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className={`glass-pill ${
                  item.type === 'meeting' ? 'text-sky-400' :
                  item.type === 'decision' ? 'text-amber-400' :
                  item.type === 'milestone' ? 'text-emerald-400' :
                  'text-violet-400'
                }`} style={{
                  background: item.type === 'meeting' ? 'rgba(56, 189, 248, 0.08)' :
                    item.type === 'decision' ? 'rgba(245, 158, 11, 0.08)' :
                    item.type === 'milestone' ? 'rgba(16, 185, 129, 0.08)' :
                    'rgba(139, 92, 246, 0.08)',
                  borderColor: item.type === 'meeting' ? 'rgba(56, 189, 248, 0.15)' :
                    item.type === 'decision' ? 'rgba(245, 158, 11, 0.15)' :
                    item.type === 'milestone' ? 'rgba(16, 185, 129, 0.15)' :
                    'rgba(139, 92, 246, 0.15)',
                }}>{item.type}</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.title}</span>
              </div>
              <span className="text-xs font-mono-nums" style={{ color: 'var(--text-dim)' }}>{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
