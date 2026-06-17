import { useEffect, useState } from 'react'
import { fetchTasks, saveTasks, isGitHubConfigured } from '../lib/github'
import type { Task } from '../types'
import { Plus, Trash2, Check } from 'lucide-react'

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [sha, setSha] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', dueDate: '', project: '', priority: 'medium' as Task['priority'] })

  useEffect(() => {
    if (!isGitHubConfigured()) {
      setLoading(false)
      setError('GitHub PAT not configured. Set VITE_GITHUB_PAT in .env (local) or as a GitHub secret (prod).')
      return
    }
    fetchTasks()
      .then(({ tasks, sha }) => { setTasks(tasks); setSha(sha) })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const save = async (updated: Task[]) => {
    setTasks(updated)
    try {
      const newSha = await saveTasks(updated, sha)
      setSha(newSha)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Save failed')
    }
  }

  const addTask = () => {
    if (!form.title.trim()) return
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: form.title,
      dueDate: form.dueDate || new Date().toISOString().split('T')[0],
      project: form.project || 'General',
      priority: form.priority,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    save([...tasks, newTask])
    setForm({ title: '', dueDate: '', project: '', priority: 'medium' })
    setShowForm(false)
  }

  const toggleComplete = (id: string) => {
    save(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id: string) => {
    save(tasks.filter(t => t.id !== id))
  }

  const groupTasks = (tasks: Task[]) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate() + 1)
    const endOfWeek = new Date(today); endOfWeek.setDate(endOfWeek.getDate() + (7 - today.getDay()))
    const endOfNextWeek = new Date(endOfWeek); endOfNextWeek.setDate(endOfNextWeek.getDate() + 7)

    const groups: Record<string, Task[]> = { Overdue: [], Today: [], Tomorrow: [], 'This Week': [], 'Next Week': [], Later: [] }

    tasks.filter(t => !t.completed).forEach((task) => {
      const due = new Date(task.dueDate)
      due.setHours(0, 0, 0, 0)
      if (due < today) groups.Overdue.push(task)
      else if (due.getTime() === today.getTime()) groups.Today.push(task)
      else if (due.getTime() === tomorrow.getTime()) groups.Tomorrow.push(task)
      else if (due <= endOfWeek) groups['This Week'].push(task)
      else if (due <= endOfNextWeek) groups['Next Week'].push(task)
      else groups.Later.push(task)
    })

    return groups
  }

  const priorityDot = (p: string) => {
    switch (p) {
      case 'high': return 'bg-red-400 animate-breathe'
      case 'medium': return 'bg-amber-400'
      case 'low': return 'bg-emerald-400 opacity-60'
      default: return 'bg-gray-400'
    }
  }

  const priorityColor = (p: string) => {
    switch (p) {
      case 'high': return 'text-red-400'
      case 'medium': return 'text-amber-400'
      case 'low': return 'text-emerald-400'
      default: return 'text-gray-400'
    }
  }

  if (loading) return (
    <div className="flex items-center gap-3" style={{ color: 'var(--text-dim)' }}>
      <div className="w-4 h-4 border-2 border-violet-400/30 border-t-violet-400 rounded-full animate-spin" />
      Loading tasks...
    </div>
  )

  const grouped = groupTasks(tasks)
  const completed = tasks.filter(t => t.completed)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between animate-fade-in-up">
        <h1 className="text-2xl font-bold font-heading" style={{ color: 'var(--text-primary)' }}>Tasks</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 btn-glow"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            color: 'var(--text-primary)',
          }}
        >
          <Plus size={16} /> Add Task
        </button>
      </div>

      {error && (
        <div className="text-sm p-4 rounded-xl animate-fade-in" style={{
          color: 'var(--accent-red)',
          background: 'rgba(239, 68, 68, 0.06)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
        }}>{error}</div>
      )}

      {showForm && (
        <div className="glass-panel p-5 space-y-4 animate-fade-in-up">
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Task title..."
            className="w-full px-4 py-2.5 rounded-xl text-sm transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-primary)',
            }}
          />
          <div className="flex gap-3">
            <input
              type="date"
              value={form.dueDate}
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
              className="px-4 py-2.5 rounded-xl text-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
              }}
            />
            <input
              value={form.project}
              onChange={(e) => setForm({ ...form, project: e.target.value })}
              placeholder="Project"
              className="px-4 py-2.5 rounded-xl text-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
              }}
            />
            <select
              value={form.priority}
              onChange={(e) => setForm({ ...form, priority: e.target.value as Task['priority'] })}
              className="px-4 py-2.5 rounded-xl text-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
              }}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button onClick={addTask} className="px-5 py-2.5 rounded-xl text-sm font-medium" style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: 'var(--text-primary)',
            }}>
              Add
            </button>
          </div>
        </div>
      )}

      {Object.entries(grouped).map(([group, items]) => items.length > 0 && (
        <div key={group} className={`animate-fade-in-up ${group === 'Overdue' ? 'overdue-glow' : ''}`}>
          {/* Group header with glowing divider */}
          <div className="flex items-center gap-3 mb-3">
            <h2 className={`text-xs font-semibold uppercase tracking-wider ${group === 'Overdue' ? 'text-red-400' : ''}`}
              style={{ color: group === 'Overdue' ? undefined : 'var(--text-dim)' }}>
              {group} ({items.length})
            </h2>
            <div className="flex-1 h-px" style={{
              background: group === 'Overdue'
                ? 'linear-gradient(90deg, rgba(239, 68, 68, 0.3), transparent)'
                : 'linear-gradient(90deg, rgba(139, 92, 246, 0.2), transparent)',
            }} />
          </div>
          <div className="space-y-2">
            {items.map((task) => (
              <div key={task.id} className="glass-card flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <button onClick={() => toggleComplete(task.id)}
                    className="w-5 h-5 rounded-md flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      background: 'rgba(255, 255, 255, 0.03)',
                    }}>
                    <Check size={12} style={{ color: 'var(--text-dim)' }} />
                  </button>
                  <div className={`w-2 h-2 rounded-full ${priorityDot(task.priority)}`} />
                  <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{task.title}</span>
                  <span className={`text-xs ${priorityColor(task.priority)}`}>({task.priority})</span>
                  <span className="text-xs" style={{ color: 'var(--text-dim)' }}>{task.project}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono-nums" style={{ color: 'var(--text-dim)' }}>{task.dueDate}</span>
                  <button onClick={() => deleteTask(task.id)}
                    className="transition-all hover:scale-110" style={{ color: 'var(--text-dim)' }}>
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {completed.length > 0 && (
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>
              Completed ({completed.length})
            </h2>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05), transparent)' }} />
          </div>
          <div className="space-y-2">
            {completed.slice(0, 5).map((task) => (
              <div key={task.id} className="p-4 rounded-xl opacity-40" style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                filter: 'blur(0.3px)',
              }}>
                <span className="text-sm line-through" style={{ color: 'var(--text-dim)' }}>{task.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
