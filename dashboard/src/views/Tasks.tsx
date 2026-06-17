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

  const priorityColor = (p: string) => {
    switch (p) {
      case 'high': return 'text-red-400'
      case 'medium': return 'text-amber-400'
      case 'low': return 'text-green-400'
      default: return 'text-gray-400'
    }
  }

  if (loading) return <div className="text-gray-400">Loading tasks...</div>

  const grouped = groupTasks(tasks)
  const completed = tasks.filter(t => t.completed)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-100">Tasks</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-500"
        >
          <Plus size={16} /> Add Task
        </button>
      </div>

      {error && <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-3">{error}</div>}

      {showForm && (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 space-y-3">
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Task title..."
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-gray-100 text-sm focus:outline-none focus:border-indigo-500"
          />
          <div className="flex gap-3">
            <input
              type="date"
              value={form.dueDate}
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
              className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-gray-100 text-sm focus:outline-none focus:border-indigo-500"
            />
            <input
              value={form.project}
              onChange={(e) => setForm({ ...form, project: e.target.value })}
              placeholder="Project"
              className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-gray-100 text-sm focus:outline-none focus:border-indigo-500"
            />
            <select
              value={form.priority}
              onChange={(e) => setForm({ ...form, priority: e.target.value as Task['priority'] })}
              className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-gray-100 text-sm focus:outline-none focus:border-indigo-500"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button onClick={addTask} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-500">
              Add
            </button>
          </div>
        </div>
      )}

      {Object.entries(grouped).map(([group, items]) => items.length > 0 && (
        <div key={group}>
          <h2 className={`text-sm font-semibold mb-2 ${group === 'Overdue' ? 'text-red-400' : 'text-gray-400'}`}>
            {group} ({items.length})
          </h2>
          <div className="space-y-1">
            {items.map((task) => (
              <div key={task.id} className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <button onClick={() => toggleComplete(task.id)} className="text-gray-500 hover:text-green-400">
                    <Check size={16} />
                  </button>
                  <span className="text-sm text-gray-200">{task.title}</span>
                  <span className={`text-xs ${priorityColor(task.priority)}`}>({task.priority})</span>
                  <span className="text-xs text-gray-500">{task.project}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{task.dueDate}</span>
                  <button onClick={() => deleteTask(task.id)} className="text-gray-500 hover:text-red-400">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {completed.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2">Completed ({completed.length})</h2>
          <div className="space-y-1">
            {completed.slice(0, 5).map((task) => (
              <div key={task.id} className="flex items-center justify-between bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 opacity-60">
                <span className="text-sm text-gray-400 line-through">{task.title}</span>
                <span className="text-xs text-gray-600">{task.dueDate}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
