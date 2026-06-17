import { useState } from 'react'
import { X } from 'lucide-react'

interface Props {
  onClose: () => void
}

export default function GithubPATModal({ onClose }: Props) {
  const [pat, setPat] = useState('')

  const handleSave = () => {
    if (pat.trim()) {
      localStorage.setItem('hermes_github_pat', pat.trim())
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-100">GitHub Personal Access Token</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Enter your GitHub PAT to enable task sync with the hermes-sync-dump repo.
          The token needs <code className="text-indigo-400">repo</code> scope.
        </p>
        <input
          type="password"
          value={pat}
          onChange={(e) => setPat(e.target.value)}
          placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
          className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-600 text-gray-100 text-sm focus:outline-none focus:border-indigo-500 mb-4"
        />
        <div className="flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200"
          >
            Skip
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
          >
            Save Token
          </button>
        </div>
      </div>
    </div>
  )
}
