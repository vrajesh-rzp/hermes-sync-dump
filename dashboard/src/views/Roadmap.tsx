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
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'in_progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'prioritized': return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
      case 'backlog': return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const stageBarColor = (stage: string) => {
    switch (stage) {
      case 'completed': return 'bg-green-500'
      case 'in_progress': return 'bg-blue-500'
      case 'prioritized': return 'bg-indigo-500'
      case 'backlog': return 'bg-gray-600'
      case 'cancelled': return 'bg-red-500'
      default: return 'bg-gray-600'
    }
  }

  const quarters = [...new Set(items.map(i => i.quarter))].sort()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-100">Roadmap</h1>

      {/* Legend */}
      <div className="flex gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-500 inline-block" /> In Progress</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-indigo-500 inline-block" /> Prioritized</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-gray-600 inline-block" /> Backlog</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-500 inline-block" /> Completed</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-500 inline-block" /> Cancelled</span>
      </div>

      {/* Timeline by quarter */}
      {quarters.map((quarter) => (
        <div key={quarter}>
          <h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">{quarter}</h2>
          <div className="space-y-2">
            {items.filter(i => i.quarter === quarter).map((item) => (
              <div key={item.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-8 rounded-full ${stageBarColor(item.stage)}`} />
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">{item.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {item.owner && <span className="text-xs text-gray-500">Owner: {item.owner}</span>}
                        {item.startDate && item.endDate && (
                          <span className="text-xs text-gray-600">{item.startDate} - {item.endDate}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${stageColor(item.stage)}`}>
                    {item.stage.replace('_', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
