import { useState, useEffect } from 'react'
import { Shield, UserPlus, Trash2, Loader2 } from 'lucide-react'

interface WhitelistUser {
  email: string
  role: 'admin' | 'viewer'
  addedAt: string
}

interface UsersData {
  admin: string
  whitelist: WhitelistUser[]
}

const REPO_OWNER = 'vrajesh-iyengar'
const REPO_NAME = 'hermes-sync-dump'
const FILE_PATH = 'dashboard-data/users.json'

export default function UserManagement() {
  const [users, setUsers] = useState<UsersData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [newEmail, setNewEmail] = useState('')
  const [newRole, setNewRole] = useState<'admin' | 'viewer'>('viewer')
  const [fileSha, setFileSha] = useState<string>('')

  const currentEmail = JSON.parse(localStorage.getItem('vrajesh_ai_session') || '{}').email || ''

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    setLoading(true)
    setError(null)
    try {
      const pat = localStorage.getItem('vrajesh_ai_pat')
      if (!pat) { setError('GitHub PAT not configured. Set it in the dashboard settings.'); setLoading(false); return }

      const res = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        headers: { Authorization: `token ${pat}`, Accept: 'application/vnd.github.v3+json' }
      })
      if (!res.ok) throw new Error('Failed to fetch users')
      const data = await res.json()
      setFileSha(data.sha)
      const content = JSON.parse(atob(data.content))
      setUsers(content)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function saveUsers(updated: UsersData) {
    setSaving(true)
    setError(null)
    try {
      const pat = localStorage.getItem('vrajesh_ai_pat')
      if (!pat) throw new Error('GitHub PAT not configured')

      const res = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        method: 'PUT',
        headers: { Authorization: `token ${pat}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Update users.json - ${new Date().toISOString()}`,
          content: btoa(JSON.stringify(updated, null, 2) + '\n'),
          sha: fileSha,
        })
      })
      if (!res.ok) throw new Error('Failed to save users')
      const result = await res.json()
      setFileSha(result.content.sha)
      setUsers(updated)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setSaving(false)
    }
  }

  function handleAdd() {
    if (!newEmail || !users) return
    if (users.whitelist.some(u => u.email.toLowerCase() === newEmail.toLowerCase())) {
      setError('User already exists'); return
    }
    const updated: UsersData = {
      ...users,
      whitelist: [...users.whitelist, { email: newEmail, role: newRole, addedAt: new Date().toISOString().split('T')[0] }]
    }
    saveUsers(updated)
    setNewEmail('')
    setNewRole('viewer')
  }

  function handleRemove(email: string) {
    if (!users) return
    if (email.toLowerCase() === currentEmail.toLowerCase()) { setError("You can't remove yourself"); return }
    const updated: UsersData = {
      ...users,
      whitelist: users.whitelist.filter(u => u.email.toLowerCase() !== email.toLowerCase())
    }
    saveUsers(updated)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 size={24} className="animate-spin" style={{ color: 'var(--accent-violet)' }} />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Shield size={24} style={{ color: 'var(--accent-violet)' }} />
        <div>
          <h1 className="text-2xl font-bold font-heading" style={{ color: 'var(--text-primary)' }}>
            User Management
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
            Manage dashboard access
          </p>
        </div>
      </div>

      {error && (
        <div className="px-4 py-3 rounded-xl text-sm" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: 'rgb(239, 68, 68)' }}>
          {error}
        </div>
      )}

      {/* Add user form */}
      <div className="p-5 rounded-2xl" style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(10px)',
      }}>
        <h2 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>Add User</h2>
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <label className="text-xs mb-1 block" style={{ color: 'var(--text-dim)' }}>Email</label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="user@razorpay.com"
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
              }}
            />
          </div>
          <div>
            <label className="text-xs mb-1 block" style={{ color: 'var(--text-dim)' }}>Role</label>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value as 'admin' | 'viewer')}
              className="px-3 py-2 rounded-lg text-sm outline-none"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: 'var(--text-primary)',
              }}
            >
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            onClick={handleAdd}
            disabled={saving || !newEmail}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
            style={{
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: 'var(--accent-violet)',
            }}
          >
            <UserPlus size={15} />
            Add
          </button>
        </div>
      </div>

      {/* Users table */}
      <div className="rounded-2xl overflow-hidden" style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(10px)',
      }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <th className="text-left px-5 py-3 font-medium" style={{ color: 'var(--text-dim)' }}>Email</th>
              <th className="text-left px-5 py-3 font-medium" style={{ color: 'var(--text-dim)' }}>Role</th>
              <th className="text-left px-5 py-3 font-medium" style={{ color: 'var(--text-dim)' }}>Added</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {users?.whitelist.map((user) => (
              <tr key={user.email} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
                <td className="px-5 py-3 font-mono text-xs" style={{ color: 'var(--text-primary)' }}>{user.email}</td>
                <td className="px-5 py-3">
                  <span className="px-2 py-0.5 rounded-md text-xs" style={{
                    background: user.role === 'admin' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                    color: user.role === 'admin' ? 'var(--accent-violet)' : 'var(--accent-cyan)',
                  }}>
                    {user.role}
                  </span>
                </td>
                <td className="px-5 py-3 text-xs" style={{ color: 'var(--text-dim)' }}>{user.addedAt}</td>
                <td className="px-5 py-3 text-right">
                  {user.email.toLowerCase() !== currentEmail.toLowerCase() && (
                    <button
                      onClick={() => handleRemove(user.email)}
                      disabled={saving}
                      className="p-1.5 rounded-lg transition-all duration-200 hover:bg-red-500/10"
                      style={{ color: 'rgba(239, 68, 68, 0.6)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
