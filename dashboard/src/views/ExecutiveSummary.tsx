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
      case 'green': return 'border-green-500 bg-green-500/10'
      case 'amber': return 'border-amber-500 bg-amber-500/10'
      case 'red': return 'border-red-500 bg-red-500/10'
      default: return 'border-gray-500'
    }
  }

  const ragDot = (status: string) => {
    switch (status) {
      case 'green': return 'bg-green-500'
      case 'amber': return 'bg-amber-500'
      case 'red': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-100">Executive Summary</h1>
        <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</span>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Target size={16} />
            <span>OKRs On Track</span>
          </div>
          <div className="text-2xl font-bold text-green-400">
            {okrs.reduce((acc, o) => acc + o.keyResults.filter(kr => kr.ragStatus === 'green').length, 0)}
            <span className="text-sm text-gray-500 font-normal"> / {okrs.reduce((acc, o) => acc + o.keyResults.length, 0)}</span>
          </div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <TrendingUp size={16} />
            <span>Active Projects</span>
          </div>
          <div className="text-2xl font-bold text-indigo-400">3</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Calendar size={16} />
            <span>Meetings (7d)</span>
          </div>
          <div className="text-2xl font-bold text-purple-400">{recentMeetings.length}</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Activity size={16} />
            <span>Decisions (7d)</span>
          </div>
          <div className="text-2xl font-bold text-amber-400">
            {activity.filter(a => a.type === 'decision' && new Date(a.date) > new Date(Date.now() - 7 * 86400000)).length}
          </div>
        </div>
      </div>

      {/* OKR scorecard */}
      <div>
        <h2 className="text-lg font-semibold text-gray-200 mb-3">OKR Scorecard</h2>
        <div className="space-y-3">
          {okrs.map((okr) => (
            <div key={okr.id} className="bg-gray-800 border border-gray-700 rounded-xl p-4">
              <h3 className="font-medium text-gray-200 mb-3">{okr.objective}</h3>
              <div className="space-y-2">
                {okr.keyResults.map((kr) => (
                  <div key={kr.id} className={`flex items-center justify-between p-2 rounded-lg border ${ragColor(kr.ragStatus)}`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${ragDot(kr.ragStatus)}`} />
                      <span className="text-sm text-gray-300">{kr.title}</span>
                    </div>
                    <span className="text-sm font-mono text-gray-200">
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
      <div>
        <h2 className="text-lg font-semibold text-gray-200 mb-3">Recent Activity</h2>
        <div className="bg-gray-800 border border-gray-700 rounded-xl divide-y divide-gray-700">
          {activity.slice(0, 5).map((item) => (
            <div key={item.id} className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  item.type === 'meeting' ? 'bg-blue-500/20 text-blue-400' :
                  item.type === 'decision' ? 'bg-amber-500/20 text-amber-400' :
                  item.type === 'milestone' ? 'bg-green-500/20 text-green-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>{item.type}</span>
                <span className="text-sm text-gray-300">{item.title}</span>
              </div>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
