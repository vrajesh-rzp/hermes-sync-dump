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

  const typeBadgeStyle = (type: string) => {
    switch (type) {
      case 'strategy': return { bg: 'rgba(99, 102, 241, 0.08)', color: '#a5b4fc', border: 'rgba(99, 102, 241, 0.15)' }
      case 'concept': return { bg: 'rgba(168, 85, 247, 0.08)', color: '#c084fc', border: 'rgba(168, 85, 247, 0.15)' }
      case 'project': return { bg: 'rgba(59, 130, 246, 0.08)', color: '#60a5fa', border: 'rgba(59, 130, 246, 0.15)' }
      case 'decision': return { bg: 'rgba(245, 158, 11, 0.08)', color: '#fbbf24', border: 'rgba(245, 158, 11, 0.15)' }
      case 'code': return { bg: 'rgba(16, 185, 129, 0.08)', color: '#34d399', border: 'rgba(16, 185, 129, 0.15)' }
      case 'note': return { bg: 'rgba(255, 255, 255, 0.03)', color: '#94a3b8', border: 'rgba(255, 255, 255, 0.08)' }
      default: return { bg: 'rgba(255, 255, 255, 0.03)', color: '#94a3b8', border: 'rgba(255, 255, 255, 0.08)' }
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold font-heading animate-fade-in-up" style={{ color: 'var(--text-primary)' }}>
        Documents & Decisions
      </h1>

      <div className="flex gap-3 animate-fade-in-up delay-100">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-dim)' }} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search documents..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-primary)',
            }}
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl text-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: 'var(--text-primary)',
          }}
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

      <div className="glass-panel overflow-hidden animate-fade-in-up delay-200">
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <th className="px-5 py-3.5 text-left text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)', background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0 }}>Title</th>
              <th className="px-5 py-3.5 text-left text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)', background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0 }}>Type</th>
              <th className="px-5 py-3.5 text-left text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)', background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0 }}>Updated</th>
              <th className="px-5 py-3.5 text-left text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)', background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0 }}>Tags</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((doc, i) => {
              const badge = typeBadgeStyle(doc.type)
              return (
                <tr key={doc.id}
                  className="transition-colors hover:bg-white/[0.02]"
                  style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)', animationDelay: `${200 + i * 40}ms` }}>
                  <td className="px-5 py-3.5 text-sm" style={{ color: 'var(--text-primary)' }}>{doc.title}</td>
                  <td className="px-5 py-3.5">
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full font-medium" style={{
                      background: badge.bg,
                      color: badge.color,
                      border: `1px solid ${badge.border}`,
                    }}>
                      {doc.type}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm font-mono-nums" style={{ color: 'var(--text-dim)' }}>{doc.updatedAt}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex gap-1.5 flex-wrap">
                      {doc.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full" style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          color: 'var(--text-dim)',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-12 text-center text-sm" style={{ color: 'var(--text-dim)' }}>No documents found.</div>
        )}
      </div>
    </div>
  )
}
