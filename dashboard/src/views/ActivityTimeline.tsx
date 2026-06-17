import { useEffect, useState } from 'react'
import { loadActivity } from '../lib/data'
import type { ActivityItem } from '../types'

export default function ActivityTimeline() {
  const [activity, setActivity] = useState<ActivityItem[]>([])
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    loadActivity().then(setActivity)
  }, [])

  const filtered = filter === 'all' ? activity : activity.filter(a => a.type === filter)

  // Group by date
  const grouped = filtered.reduce<Record<string, ActivityItem[]>>((acc, item) => {
    const date = item.date
    if (!acc[date]) acc[date] = []
    acc[date].push(item)
    return acc
  }, {})

  const typeNodeColor = (type: string) => {
    switch (type) {
      case 'meeting': return '#3b82f6'
      case 'decision': return '#f59e0b'
      case 'document': return '#a855f7'
      case 'milestone': return '#10b981'
      default: return '#6b7280'
    }
  }

  const typeBadgeStyle = (type: string) => {
    switch (type) {
      case 'meeting': return { bg: 'rgba(59, 130, 246, 0.08)', color: '#60a5fa', border: 'rgba(59, 130, 246, 0.15)' }
      case 'decision': return { bg: 'rgba(245, 158, 11, 0.08)', color: '#fbbf24', border: 'rgba(245, 158, 11, 0.15)' }
      case 'document': return { bg: 'rgba(168, 85, 247, 0.08)', color: '#c084fc', border: 'rgba(168, 85, 247, 0.15)' }
      case 'milestone': return { bg: 'rgba(16, 185, 129, 0.08)', color: '#34d399', border: 'rgba(16, 185, 129, 0.15)' }
      default: return { bg: 'rgba(255, 255, 255, 0.03)', color: '#94a3b8', border: 'rgba(255, 255, 255, 0.08)' }
    }
  }

  const sortedDates = Object.entries(grouped).sort(([a], [b]) => b.localeCompare(a))
  const isFirstEntry = (dateIdx: number, itemIdx: number) => dateIdx === 0 && itemIdx === 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between animate-fade-in-up">
        <h1 className="text-2xl font-bold font-heading" style={{ color: 'var(--text-primary)' }}>Activity Timeline</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl text-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: 'var(--text-primary)',
          }}
        >
          <option value="all">All Types</option>
          <option value="meeting">Meetings</option>
          <option value="decision">Decisions</option>
          <option value="document">Documents</option>
          <option value="milestone">Milestones</option>
        </select>
      </div>

      <div className="space-y-8 relative">
        {/* Glowing timeline connector */}
        <div className="timeline-connector ml-[11px]" />

        {sortedDates.map(([date, items], dateIdx) => (
          <div key={date} className="animate-fade-in-up" style={{ animationDelay: `${dateIdx * 100}ms` }}>
            {/* Date header */}
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{
                background: 'rgba(139, 92, 246, 0.15)',
                border: '2px solid rgba(139, 92, 246, 0.4)',
                boxShadow: '0 0 8px rgba(139, 92, 246, 0.2)',
              }}>
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent-violet)' }} />
              </div>
              <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                {date}
              </h2>
            </div>

            {/* Items */}
            <div className="space-y-3 ml-12">
              {items.map((item, itemIdx) => {
                const badge = typeBadgeStyle(item.type)
                const isNew = isFirstEntry(dateIdx, itemIdx)

                return (
                  <div key={item.id}
                    className="glass-card p-4 animate-slide-in-left"
                    style={{ animationDelay: `${dateIdx * 100 + itemIdx * 60}ms` }}>
                    <div className="flex items-center gap-3 mb-1.5">
                      {isNew && (
                        <span className="text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse-glow"
                          style={{ background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                          NEW
                        </span>
                      )}
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full font-medium" style={{
                        background: badge.bg,
                        color: badge.color,
                        border: `1px solid ${badge.border}`,
                      }}>
                        {item.type}
                      </span>
                      <h3 className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                    </div>
                    {item.participants && (
                      <p className="text-xs ml-0" style={{ color: 'var(--text-dim)' }}>
                        Participants: {item.participants.join(', ')}
                      </p>
                    )}
                    {item.description && (
                      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
