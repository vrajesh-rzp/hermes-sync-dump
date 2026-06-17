import { useEffect, useState } from 'react'
import { loadOKRs } from '../lib/data'
import type { OKR } from '../types'
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'

export default function OKRTracker() {
  const [okrs, setOkrs] = useState<OKR[]>([])

  useEffect(() => {
    loadOKRs().then(setOkrs)
  }, [])

  const ragBadge = (status: string) => {
    switch (status) {
      case 'green': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'amber': return 'bg-amber-500/20 text-amber-400 border-amber-500/30'
      case 'red': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const progressPercent = (current: number, target: number) => {
    return Math.min(100, Math.round((current / target) * 100))
  }

  const progressColor = (status: string) => {
    switch (status) {
      case 'green': return 'bg-green-500'
      case 'amber': return 'bg-amber-500'
      case 'red': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const sparkColor = (status: string) => {
    switch (status) {
      case 'green': return '#22c55e'
      case 'amber': return '#f59e0b'
      case 'red': return '#ef4444'
      default: return '#6b7280'
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-100">OKR Tracker</h1>

      <div className="space-y-4">
        {okrs.map((okr) => (
          <div key={okr.id} className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-gray-200 mb-4">{okr.objective}</h2>
            <div className="space-y-4">
              {okr.keyResults.map((kr) => {
                const pct = progressPercent(kr.current, kr.target)
                const changed = kr.history.length >= 2
                  ? Math.abs((kr.history[kr.history.length - 1].value - kr.history[kr.history.length - 2].value) / kr.history[kr.history.length - 2].value) > 0.2
                  : false

                return (
                  <div key={kr.id} className={`p-4 rounded-lg border border-gray-700 ${changed ? 'ring-1 ring-amber-500/50' : ''}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${ragBadge(kr.ragStatus)}`}>
                          {kr.ragStatus.toUpperCase()}
                        </span>
                        <span className="text-sm text-gray-200">{kr.title}</span>
                        {changed && <span className="text-xs text-amber-400">({">"} 20% change)</span>}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-8">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={kr.history}>
                              <Line type="monotone" dataKey="value" stroke={sparkColor(kr.ragStatus)} strokeWidth={2} dot={false} />
                              <Tooltip
                                contentStyle={{ background: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                                labelStyle={{ color: '#9ca3af' }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        <span className="text-sm font-mono text-gray-300 whitespace-nowrap">
                          {kr.current} / {kr.target} {kr.unit}
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all ${progressColor(kr.ragStatus)}`} style={{ width: `${pct}%` }} />
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
