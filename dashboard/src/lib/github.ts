import type { Task } from '../types'

const REPO = 'vrajesh-rzp/hermes-sync-dump'
const FILE_PATH = 'dashboard-data/tasks.json'

interface GitHubFileResponse {
  content: string
  sha: string
}

export async function fetchTasks(pat: string): Promise<{ tasks: Task[]; sha: string }> {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
    headers: {
      Authorization: `Bearer ${pat}`,
      Accept: 'application/vnd.github.v3+json',
    },
  })

  if (res.status === 404) {
    return { tasks: [], sha: '' }
  }

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`)
  }

  const data: GitHubFileResponse = await res.json()
  const content = atob(data.content)
  const tasks: Task[] = JSON.parse(content)
  return { tasks, sha: data.sha }
}

export async function saveTasks(pat: string, tasks: Task[], sha: string): Promise<string> {
  const content = btoa(JSON.stringify(tasks, null, 2))

  const body: Record<string, string> = {
    message: `Update tasks - ${new Date().toISOString()}`,
    content,
  }
  if (sha) {
    body.sha = sha
  }

  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${FILE_PATH}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${pat}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`)
  }

  const data = await res.json()
  return data.content.sha
}
