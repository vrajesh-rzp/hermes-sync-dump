import { useEffect, useState } from 'react'
import { loadDocuments } from '../lib/data'
import type { DocumentItem } from '../types'
import { Search } from 'lucide-react'

export default function Documents() {
  const [docs, setDocs] = useState<DocumentItem[]>([])
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState<string>('all')

  useEffect(() => {
    loadDocuments().then(setDocs)
  }, [])

  const filtered = docs
    .filter(d => typeFilter === 'all' || d.type === typeFilter)
    .filter(d => !search || d.title.toLowerCase().includes(search.toLowerCase()) || d.tags.some(t => t.includes(search.toLowerCase())))

  const typeBadge = (type: string) => {
    switch (type) {
      case 'strategy': return 'bg-indigo-500/20 text-indigo-400'
      case 'concept': return 'bg-purple-500/20 text-purple-400'
      case 'project': return 'bg-blue-500/20 text-blue-400'
      case 'decision': return 'bg-amber-500/20 text-amber-400'
      case 'code': return 'bg-green-500/20 text-green-400'
      case 'note': return 'bg-gray-500/20 text-gray-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-100">Documents & Decisions</h1>

      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search documents..."
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 text-sm focus:outline-none focus:border-indigo-500"
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 text-sm"
        >
          <option value="all">All Types</option>
          <option value="strategy">Strategy</option>
          <option value="concept">Concept</option>
          <option value="project">Project</option>
          <option value="decision">Decision</option>
          <option value="code">Code</option>
          <option value="note">Note</option>
        </select>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700 text-left">
              <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Title</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Type</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Updated</th>
              <th className="px-4 py-3 text-xs font-medium text-gray-400 uppercase">Tags</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filtered.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-700/30">
                <td className="px-4 py-3 text-sm text-gray-200">{doc.title}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${typeBadge(doc.type)}`}>
                    {doc.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-400">{doc.updatedAt}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1 flex-wrap">
                    {doc.tags.map(tag => (
                      <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-gray-700 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-8 text-center text-gray-500 text-sm">No documents found.</div>
        )}
      </div>
    </div>
  )
}
