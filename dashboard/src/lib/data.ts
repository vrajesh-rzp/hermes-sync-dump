const BASE = import.meta.env.BASE_URL;

export interface ThreadUpdate {
  timestamp: string;
  source: string;
  content: string;
  source_url?: string;
}

export interface ActionRecord {
  id: string;
  action: string;
  message: string;
  thread_id: string;
  created_at: string;
  status: "pending" | "executed" | "failed";
  executed_at?: string;
  result?: string;
}

export interface ThreadItem {
  id: string;
  title: string;
  status: "active" | "watching" | "closed";
  action_needed: "respond" | "review" | "approve" | "none";
  source: string;
  channel: string;
  deadline: string;
  response_eta: "urgent" | "today" | "this-week" | "no-rush";
  last_update: string;
  created: string;
  summary: string;
  update_count: number;
  participants: string[];
  related_threads: string[];
  project: string;
  devrev_ref: string;
  updates?: ThreadUpdate[];
  actions?: ActionRecord[];
}

export interface ThreadsData {
  generated_at: string;
  threads: ThreadItem[];
  counts: { active: number; watching: number; closed_today: number };
}

export interface PulseData {
  generated_at: string;
  date: string;
  counts: { active: number; watching: number; due_today: number; total_threads: number };
  history: { date: string; active: number; watching: number }[];
}

export interface Priority {
  id: string;
  title: string;
  status: "active" | "pending" | "done";
  project?: string;
}

export interface PrioritiesData {
  weekly: Priority[];
  monthly: Priority[];
  updated_at: string;
}

export interface OKRMetric {
  current: number;
  target_q2: number;
  target_eofy: number;
  daily: { date: string; value: number }[];
  weekly: { week: string; value: number }[];
  monthly: { month: string; value: number }[];
}

export interface OKRMetricsData {
  generated_at: string;
  metrics: Record<string, OKRMetric>;
}

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const resp = await fetch(`${BASE}${path}`);
    if (!resp.ok) return null;
    return await resp.json();
  } catch {
    return null;
  }
}

export async function loadActions(): Promise<ActionRecord[]> {
  try {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (isLocal) {
      const resp = await fetch('/api/action');
      if (resp.ok) return await resp.json();
    }
    return [];
  } catch {
    return [];
  }
}

export async function loadThreads(): Promise<ThreadsData | null> {
  const [threadsData, actions] = await Promise.all([
    fetchJson<ThreadsData>("command-center/threads.json"),
    loadActions(),
  ]);
  if (!threadsData) return null;

  // Merge actions into their respective threads
  if (actions.length > 0) {
    const actionsByThread = new Map<string, ActionRecord[]>();
    for (const action of actions) {
      const tid = action.thread_id || '';
      if (!actionsByThread.has(tid)) actionsByThread.set(tid, []);
      actionsByThread.get(tid)!.push(action);
    }
    threadsData.threads = threadsData.threads.map(t => ({
      ...t,
      actions: actionsByThread.get(t.id) || t.actions || [],
    }));
  }

  return threadsData;
}

export async function loadPulse(): Promise<PulseData | null> {
  return fetchJson<PulseData>("command-center/pulse.json");
}

export async function loadPriorities(): Promise<PrioritiesData | null> {
  return fetchJson<PrioritiesData>("command-center/priorities.json");
}

export async function loadOKRMetrics(): Promise<OKRMetricsData | null> {
  const ccMetrics = await fetchJson<OKRMetricsData>("command-center/okr-metrics.json");
  if (ccMetrics) return ccMetrics;

  const legacyOKRs = await fetchJson<{ objectives: { title: string; keyResults: { id: string; title: string; target: number; current: number; unit: string; status: string }[] }[] }>("dashboard-data/okrs.json");
  if (!legacyOKRs) return null;

  const metrics: Record<string, OKRMetric> = {};
  for (const obj of legacyOKRs.objectives || []) {
    for (const kr of obj.keyResults || []) {
      metrics[kr.id] = {
        current: kr.current * 100,
        target_q2: kr.target * 100,
        target_eofy: kr.target * 100,
        daily: [],
        weekly: [],
        monthly: [],
      };
    }
  }
  return { generated_at: "", metrics };
}
