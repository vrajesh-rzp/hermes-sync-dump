import type { OKR, KnowledgeGraphData, Person, RoadmapItem, ActivityItem, DocumentItem } from '../types'

const BASE = import.meta.env.BASE_URL + 'dashboard-data/'

async function fetchJSON<T>(file: string): Promise<T | null> {
  try {
    const res = await fetch(BASE + file)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export async function loadOKRs(): Promise<OKR[]> {
  return (await fetchJSON<OKR[]>('okrs.json')) ?? getSampleOKRs()
}

export async function loadGraph(): Promise<KnowledgeGraphData> {
  return (await fetchJSON<KnowledgeGraphData>('graph.json')) ?? getSampleGraph()
}

export async function loadPeople(): Promise<Person[]> {
  return (await fetchJSON<Person[]>('people.json')) ?? getSamplePeople()
}

export async function loadRoadmap(): Promise<RoadmapItem[]> {
  return (await fetchJSON<RoadmapItem[]>('roadmap.json')) ?? getSampleRoadmap()
}

export async function loadActivity(): Promise<ActivityItem[]> {
  return (await fetchJSON<ActivityItem[]>('activity.json')) ?? getSampleActivity()
}

export async function loadDocuments(): Promise<DocumentItem[]> {
  return (await fetchJSON<DocumentItem[]>('documents.json')) ?? getSampleDocuments()
}

// Sample data fallbacks

function getSampleOKRs(): OKR[] {
  return [
    {
      id: '1',
      objective: 'Launch VRM to 1,000 merchants',
      keyResults: [
        { id: 'kr1', title: 'Merchants onboarded', current: 850, target: 1000, unit: 'merchants', ragStatus: 'amber', history: [{ date: '2026-05', value: 300 }, { date: '2026-06', value: 850 }] },
        { id: 'kr2', title: 'P95 Latency', current: 95, target: 100, unit: 'seconds', ragStatus: 'green', history: [{ date: '2026-05', value: 120 }, { date: '2026-06', value: 95 }] },
        { id: 'kr3', title: 'Response Accuracy', current: 88.9, target: 92, unit: '%', ragStatus: 'red', history: [{ date: '2026-05', value: 85 }, { date: '2026-06', value: 88.9 }] },
      ],
    },
    {
      id: '2',
      objective: 'Improve M3-M12 Retention Rate',
      keyResults: [
        { id: 'kr4', title: 'Retention Rate', current: 20.5, target: 23, unit: '%', ragStatus: 'amber', history: [{ date: '2026-05', value: 19 }, { date: '2026-06', value: 20.5 }] },
        { id: 'kr5', title: 'Silent Churn Rate', current: 40, target: 38, unit: '%', ragStatus: 'amber', history: [{ date: '2026-05', value: 42 }, { date: '2026-06', value: 40 }] },
      ],
    },
  ]
}

function getSampleGraph(): KnowledgeGraphData {
  return {
    nodes: [
      { id: 'vrajesh', label: 'Vrajesh Iyengar', type: 'person' },
      { id: 'sagar', label: 'Sagar Agarwal', type: 'person' },
      { id: 'tejas', label: 'Tejas Gowda', type: 'person' },
      { id: 'vrm', label: 'VRM Project', type: 'project' },
      { id: 'retention', label: 'Merchant Retention', type: 'concept' },
      { id: 'ai-agent', label: 'AI Agent Architecture', type: 'concept' },
      { id: 'proactive-digest', label: 'Proactive Digest', type: 'project' },
      { id: 'dashboard-int', label: 'Dashboard Integration', type: 'project' },
    ],
    links: [
      { source: 'vrajesh', target: 'vrm', weight: 5 },
      { source: 'vrajesh', target: 'sagar', weight: 4 },
      { source: 'vrajesh', target: 'tejas', weight: 2 },
      { source: 'sagar', target: 'vrm', weight: 3 },
      { source: 'vrm', target: 'retention', weight: 4 },
      { source: 'vrm', target: 'ai-agent', weight: 3 },
      { source: 'vrm', target: 'proactive-digest', weight: 3 },
      { source: 'vrm', target: 'dashboard-int', weight: 2 },
      { source: 'tejas', target: 'retention', weight: 2 },
    ],
  }
}

function getSamplePeople(): Person[] {
  return [
    { id: 'vrajesh', name: 'Vrajesh Iyengar', role: 'IC PM', team: 'VRM', meetings: 24, lastInteraction: '2026-06-17' },
    { id: 'sagar', name: 'Sagar Agarwal', role: 'Manager', team: 'SME Payments', meetings: 18, lastInteraction: '2026-06-16' },
    { id: 'tejas', name: 'Tejas Gowda', role: 'Skip Manager', team: 'SME Payments', meetings: 5, lastInteraction: '2026-06-10' },
    { id: 'eng-lead', name: 'Engineering Lead', role: 'Tech Lead', team: 'VRM', meetings: 15, lastInteraction: '2026-06-17' },
    { id: 'data-eng', name: 'Data Engineer', role: 'Engineer', team: 'VRM', meetings: 8, lastInteraction: '2026-06-14' },
  ]
}

function getSampleRoadmap(): RoadmapItem[] {
  return [
    { id: '1', title: 'VRM Go-Live (1K merchants)', stage: 'in_progress', quarter: 'Q1 FY27', owner: 'Vrajesh', startDate: '2026-04-01', endDate: '2026-05-31' },
    { id: '2', title: 'Proactive Digest Stack', stage: 'prioritized', quarter: 'Q1 FY27', owner: 'Vrajesh', startDate: '2026-05-15', endDate: '2026-06-30' },
    { id: '3', title: 'Agentic Dashboard Integration', stage: 'backlog', quarter: 'Q2 FY27', owner: 'Vrajesh' },
    { id: '4', title: 'Scale to 5K merchants', stage: 'prioritized', quarter: 'Q1 FY27', owner: 'Vrajesh', startDate: '2026-06-01', endDate: '2026-06-30' },
    { id: '5', title: 'Latency Optimization (<30s)', stage: 'backlog', quarter: 'Q2 FY27', owner: 'Engineering' },
    { id: '6', title: 'Multi-language Support', stage: 'backlog', quarter: 'Q3 FY27' },
  ]
}

function getSampleActivity(): ActivityItem[] {
  return [
    { id: '1', title: 'VRM Sprint Planning', type: 'meeting', date: '2026-06-17', participants: ['Vrajesh', 'Sagar', 'Eng Lead'] },
    { id: '2', title: 'Decided: Proactive digest frequency = weekly', type: 'decision', date: '2026-06-16' },
    { id: '3', title: 'VRM Architecture Review', type: 'meeting', date: '2026-06-14', participants: ['Vrajesh', 'Eng Lead', 'Data Eng'] },
    { id: '4', title: 'Concept Note: Agentic Dashboard', type: 'document', date: '2026-06-12' },
    { id: '5', title: 'Skip-level with Tejas', type: 'meeting', date: '2026-06-10', participants: ['Vrajesh', 'Tejas'] },
    { id: '6', title: 'Merchant Retention Deep Dive', type: 'meeting', date: '2026-06-08', participants: ['Vrajesh', 'Sagar', 'Data Eng'] },
    { id: '7', title: 'Milestone: 500 merchants onboarded', type: 'milestone', date: '2026-06-05' },
  ]
}

function getSampleDocuments(): DocumentItem[] {
  return [
    { id: '1', title: 'VRM FY27 Strategy', type: 'strategy', updatedAt: '2026-06-15', tags: ['vrm', 'strategy', 'fy27'] },
    { id: '2', title: 'Concept Note: Proactive Digest', type: 'concept', updatedAt: '2026-06-12', tags: ['vrm', 'digest', 'proactive'] },
    { id: '3', title: 'Agentic Dashboard PRD', type: 'project', updatedAt: '2026-06-10', tags: ['vrm', 'dashboard', 'prd'] },
    { id: '4', title: 'VRM API Design', type: 'code', updatedAt: '2026-06-08', tags: ['vrm', 'api', 'engineering'] },
    { id: '5', title: 'Decision: Digest Frequency', type: 'decision', updatedAt: '2026-06-16', tags: ['vrm', 'digest'] },
    { id: '6', title: 'Retention Analysis Notes', type: 'note', updatedAt: '2026-06-05', tags: ['retention', 'analysis'] },
  ]
}
