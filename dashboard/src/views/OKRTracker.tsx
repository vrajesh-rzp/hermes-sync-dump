import { useEffect, useState } from 'react'
import { loadOKRs } from '../lib/data'
import type { OKR } from '../types'
import { LineChart, Line, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts'

export default function OKRTracker() {
  const [okrs, setOkrs] = useState<OKR[]>([])

  useEffect(() => {
    loadOKRs().then(setOkrs)
  }, [])

  const ragBorderColor = (status: string) => {
    switch (status) {
      case 'green': return 'rgba(16, 185, 129, 0.3)'
      case 'amber': return 'rgba(245, 158, 11, 0.3)'
      case 'red': return 'rgba(239, 68, 68, 0.3)'
      default: return 'rgba(255, 255, 255, 0.06)'
    }
  }

  const ragGlowColor = (status: string) => {
    switch (status) {
      case 'green': return '0 0 12px rgba(16, 185, 129, 0.15)'
      case 'amber': return '0 0 12px rgba(245, 158, 11, 0.15)'
      case 'red': return '0 0 12px rgba(239, 68, 68, 0.15)'
      default: return 'none'
    }
  }

  const ragBadgeStyle = (status: string) => {
    switch (status) {
      case 'green': return { background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.2)' }
      case 'amber': return { background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.2)' }
      case 'red': return { background: 'rgba(239, 68, 68, 0.1)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.2)' }
      default: return { background: 'rgba(255, 255, 255, 0.05)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.1)' }
    }
  }

  const progressPercent = (current: number, target: number) => {
    return Math.min(100, Math.round((current / target) * 100))
  }

  const progressGradient = (status: string) => {
    switch (status) {
      case 'green': return 'linear-gradient(90deg, #059669, #34d399)'
      case 'amber': return 'linear-gradient(90deg, #d97706, #fbbf24)'
      case 'red': return 'linear-gradient(90deg, #dc2626, #f87171)'
      default: return 'linear-gradient(90deg, #4b5563, #6b7280)'
    }
  }

  const sparkColor = (status: string) => {
    switch (status) {
      case 'green': return '#34d399'
      case 'amber': return '#fbbf24'
      case 'red': return '#f87171'
      default: return '#6b7280'
    }
  }

  const sparkFill = (status: string) => {
    switch (status) {
      case 'green': return 'rgba(16, 185, 129, 0.15)'
      case 'amber': return 'rgba(245, 158, 11, 0.15)'
      case 'red': return 'rgba(239, 68, 68, 0.15)'
      default: return 'rgba(107, 114, 128, 0.1)'
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold font-heading animate-fade-in-up" style={{ color: 'var(--text-primary)' }}>
        OKR Tracker
      </h1>

      <div className="space-y-5">
        {okrs.map((okr, oi) => (
          <div key={okr.id} className="glass-panel p-6 animate-fade-in-up" style={{ animationDelay: `${oi * 150}ms` }}>
            {/* Card top glow */}
            <div className="absolute top-0 left-[20%] right-[20%] h-px rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, var(--accent-violet), transparent)', boxShadow: '0 0 8px var(--accent-violet)' }} />

            <h2 className="text-lg font-semibold font-heading mb-5" style={{ color: 'var(--text-primary)' }}>
              {okr.objective}
            </h2>
            <div className="space-y-4">
              {okr.keyResults.map((kr) => {
                const pct = progressPercent(kr.current, kr.target)
                const changed = kr.history.length >= 2
                  ? Math.abs((kr.history[kr.history.length - 1].value - kr.history[kr.history.length - 2].value) / kr.history[kr.history.length - 2].value) > 0.2
                  : false

                return (
                  <div key={kr.id} className="p-4 rounded-xl transition-all" style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${ragBorderColor(kr.ragStatus)}`,
                    boxShadow: ragGlowColor(kr.ragStatus),
                  }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider"
                          style={ragBadgeStyle(kr.ragStatus)}>
                          {kr.ragStatus}
                        </span>
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{kr.title}</span>
                        {changed && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-medium animate-shake"
                            style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                            &gt; 20% change
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-28 h-9">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={kr.history}>
                              <defs>
                                <linearGradient id={`sparkGrad-${kr.id}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor={sparkColor(kr.ragStatus)} stopOpacity={0.3} />
                                  <stop offset="100%" stopColor={sparkColor(kr.ragStatus)} stopOpacity={0} />
                                </linearGradient>
                              </defs>
                              <Area type="monotone" dataKey="value" stroke={sparkColor(kr.ragStatus)} strokeWidth={2}
                                fill={sparkFill(kr.ragStatus)} dot={false} />
                              <Tooltip
                                contentStyle={{
                                  background: 'rgba(15, 15, 25, 0.95)',
                                  border: '1px solid rgba(255, 255, 255, 0.1)',
                                  borderRadius: '10px',
                                  backdropFilter: 'blur(12px)',
                                }}
                                labelStyle={{ color: '#94a3b8' }}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                        <span className="text-sm font-mono-nums whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                          {kr.current} / {kr.target} {kr.unit}
                        </span>
                      </div>
                    </div>
                    {/* Progress bar with shimmer */}
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                      <div
                        className="h-full rounded-full progress-shimmer transition-all duration-700"
                        style={{ width: `${pct}%`, background: progressGradient(kr.ragStatus) }}
                      />
                    </div>
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
