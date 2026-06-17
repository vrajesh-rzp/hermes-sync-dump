import { useEffect, useState } from 'react'
import { loadRoadmap } from '../lib/data'
import type { RoadmapItem } from '../types'

export default function Roadmap() {
  const [items, setItems] = useState<RoadmapItem[]>([])

  useEffect(() => {
    loadRoadmap().then(setItems)
  }, [])

  const stageColor = (stage: string) => {
    switch (stage) {
      case 'completed': return { bg: 'rgba(16, 185, 129, 0.08)', text: '#34d399', border: 'rgba(16, 185, 129, 0.2)' }
      case 'in_progress': return { bg: 'rgba(59, 130, 246, 0.08)', text: '#60a5fa', border: 'rgba(59, 130, 246, 0.2)' }
      case 'prioritized': return { bg: 'rgba(99, 102, 241, 0.08)', text: '#a5b4fc', border: 'rgba(99, 102, 241, 0.2)' }
      case 'backlog': return { bg: 'rgba(255, 255, 255, 0.03)', text: '#94a3b8', border: 'rgba(255, 255, 255, 0.08)' }
      case 'cancelled': return { bg: 'rgba(239, 68, 68, 0.06)', text: '#f87171', border: 'rgba(239, 68, 68, 0.2)' }
      default: return { bg: 'rgba(255, 255, 255, 0.03)', text: '#94a3b8', border: 'rgba(255, 255, 255, 0.08)' }
    }
  }

  const stageNodeColor = (stage: string) => {
    switch (stage) {
      case 'completed': return '#10b981'
      case 'in_progress': return '#3b82f6'
      case 'prioritized': return '#6366f1'
      case 'backlog': return '#475569'
      case 'cancelled': return '#ef4444'
      default: return '#475569'
    }
  }

  const quarters = [...new Set(items.map(i => i.quarter))].sort()

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold font-heading animate-fade-in-up" style={{ color: 'var(--text-primary)' }}>Roadmap</h1>

      {/* Legend */}
      <div className="flex gap-5 text-xs animate-fade-in-up delay-100" style={{ color: 'var(--text-secondary)' }}>
        {[
          { label: 'In Progress', color: '#3b82f6' },
          { label: 'Prioritized', color: '#6366f1' },
          { label: 'Backlog', color: '#475569' },
          { label: 'Completed', color: '#10b981' },
          { label: 'Cancelled', color: '#ef4444' },
        ].map(item => (
          <span key={item.label} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}40` }} />
            {item.label}
          </span>
        ))}
      </div>

      {/* Timeline by quarter */}
      {quarters.map((quarter, qi) => (
        <div key={quarter} className="animate-fade-in-up" style={{ animationDelay: `${(qi + 1) * 150}ms` }}>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent-violet)' }}>
              {quarter}
            </h2>
            <div className="flex-1 h-px" style={{
              background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.3), transparent)',
            }} />
          </div>

          <div className="space-y-3 relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[15px] top-4 bottom-4 w-0.5 rounded-full" style={{
              background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3), rgba(139, 92, 246, 0.1))',
            }} />

            {items.filter(i => i.quarter === quarter).map((item) => {
              const colors = stageColor(item.stage)
              const isCancelled = item.stage === 'cancelled'
              const isActive = item.stage === 'in_progress'

              return (
                <div key={item.id} className="flex items-start gap-4 pl-2">
                  {/* Timeline node */}
                  <div className="relative z-10 mt-4 flex-shrink-0">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${isActive ? 'animate-pulse-glow' : ''}`}
                      style={{
                        background: `${stageNodeColor(item.stage)}20`,
                        border: `2px solid ${stageNodeColor(item.stage)}`,
                        boxShadow: `0 0 10px ${stageNodeColor(item.stage)}30`,
                      }}>
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: stageNodeColor(item.stage) }} />
                    </div>
                  </div>

                  {/* Item card */}
                  <div className={`flex-1 glass-card p-4 ${isCancelled ? 'opacity-50' : ''}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`text-sm font-medium ${isCancelled ? 'line-through' : ''}`}
                          style={{ color: isCancelled ? 'var(--text-dim)' : 'var(--text-primary)' }}>
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1.5">
                          {item.owner && <span className="text-xs" style={{ color: 'var(--text-dim)' }}>Owner: {item.owner}</span>}
                          {item.startDate && item.endDate && (
                            <span className="text-xs font-mono-nums" style={{ color: 'var(--text-dim)' }}>
                              {item.startDate} - {item.endDate}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] px-3 py-1 rounded-full font-medium" style={{
                        background: colors.bg,
                        color: colors.text,
                        border: `1px solid ${colors.border}`,
                      }}>
                        {item.stage.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
