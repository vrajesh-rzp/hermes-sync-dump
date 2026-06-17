export interface Task {
  id: string;
  title: string;
  dueDate: string;
  project: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  createdAt: string;
}

export interface OKR {
  id: string;
  objective: string;
  keyResults: KeyResult[];
}

export interface KeyResult {
  id: string;
  title: string;
  current: number;
  target: number;
  unit: string;
  ragStatus: 'green' | 'amber' | 'red';
  history: { date: string; value: number }[];
}

export interface GraphNode {
  id: string;
  label: string;
  type: 'person' | 'project' | 'concept' | 'meeting' | 'document' | 'decision';
  group?: string;
}

export interface GraphLink {
  source: string;
  target: string;
  weight?: number;
  type?: string;
}

export interface KnowledgeGraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export interface Person {
  id: string;
  name: string;
  role?: string;
  team?: string;
  meetings: number;
  lastInteraction?: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  stage: 'prioritized' | 'in_progress' | 'backlog' | 'cancelled' | 'completed';
  quarter: string;
  owner?: string;
  startDate?: string;
  endDate?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  type: 'meeting' | 'decision' | 'document' | 'milestone';
  date: string;
  description?: string;
  participants?: string[];
}

export interface DocumentItem {
  id: string;
  title: string;
  type: 'concept' | 'project' | 'decision' | 'code' | 'strategy' | 'note';
  updatedAt: string;
  tags: string[];
  path?: string;
}
