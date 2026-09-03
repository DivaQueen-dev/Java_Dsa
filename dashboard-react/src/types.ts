// ─── Shared TypeScript Interfaces ───────────────────────────────────────────

export interface Program {
  name: string;
  path: string;
  category: string;
  code: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  analogy: string;
  theory: string;
  dry_run: string;
  output: string;
  timeComplexity: string;
  spaceComplexity: string;
}

export interface ComplexityRow {
  op: string;
  best: string;
  worst: string;
}

export interface TopicDetail {
  sarcasm: string;
  definition: string;
  analogy: string;
  complexities: ComplexityRow[];
  advantages: string[];
  disadvantages: string[];
  mistakes: string[];
}

export interface RoadmapNode {
  id: string;
  title: string;
  desc?: string;
  topics?: string[];
  category?: string;
}
