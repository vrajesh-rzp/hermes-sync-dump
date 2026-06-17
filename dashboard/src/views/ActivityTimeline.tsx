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

  const typeIcon = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-500'
      case 'decision': return 'bg-amber-500'
      case 'document': return 'bg-purple-500'
      case 'milestone': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const typeBadge = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-500/20 text-blue-400'
      case 'decision': return 'bg-amber-500/20 text-amber-400'
      case 'document': return 'bg-purple-500/20 text-purple-400'
      case 'milestone': return 'bg-green-500/20 text-green-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-100">Activity Timeline</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 text-sm"
        >
          <option value="all">All Types</option>
          <option value="meeting">Meetings</option>
          <option value="decision">Decisions</option>
          <option value="document">Documents</option>
          <option value="milestone">Milestones</option>
        </select>
      </div>

      <div className="space-y-6">
        {Object.entries(grouped).sort(([a], [b]) => b.localeCompare(a)).map(([date, items]) => (
          <div key={date}>
            <h2 className="text-sm font-semibold text-gray-400 mb-3 sticky top-0 bg-gray-900 py-1">{date}</h2>
            <div className="space-y-2 ml-4 border-l border-gray-700 pl-4">
              {items.map((item) => (
                <div key={item.id} className="relative flex items-start gap-3">
                  <div className={`absolute -left-[21px] top-2 w-3 h-3 rounded-full ${typeIcon(item.type)}`} />
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${typeBadge(item.type)}`}>
                        {item.type}
                      </span>
                      <h3 className="text-sm font-medium text-gray-200">{item.title}</h3>
                    </div>
                    {item.participants && (
                      <p className="text-xs text-gray-500">
                        Participants: {item.participants.join(', ')}
                      </p>
                    )}
                    {item.description && (
                      <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
