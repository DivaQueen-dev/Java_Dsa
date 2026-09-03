import { useNavigate } from 'react-router-dom';
import { DSA_DATA } from '../data/data';
import type { RoadmapNode } from '../types';

interface RoadmapTimelineProps {
  nodes: RoadmapNode[];
  type: 'java' | 'dsa';
}

export default function RoadmapTimeline({ nodes, type }: RoadmapTimelineProps) {
  const navigate = useNavigate();

  function getFileCount(node: RoadmapNode): number {
    if (type === 'java' && node.topics) {
      return node.topics.reduce((acc, cat) => acc + DSA_DATA.filter(f => f.category === cat).length, 0);
    }
    if (type === 'dsa' && node.category) {
      return DSA_DATA.filter(f => f.category === node.category).length;
    }
    return 0;
  }

  function getCategoryKey(node: RoadmapNode): string {
    if (type === 'java' && node.topics) return node.topics[0] ?? '';
    return node.category ?? '';
  }

  return (
    <div className="roadmap-timeline">
      {nodes.map(node => {
        const count = getFileCount(node);
        const categoryKey = getCategoryKey(node);

        return (
          <div className="roadmap-node" key={node.id}>
            <div className="roadmap-dot" aria-hidden="true" />
            <div
              className="roadmap-card"
              onClick={() => navigate(`/topic/${encodeURIComponent(categoryKey)}`)}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && navigate(`/topic/${encodeURIComponent(categoryKey)}`)}
              role="button"
              tabIndex={0}
              aria-label={`Open topic ${node.title}`}
            >
              <h3>{node.title}</h3>
              {node.desc && <p>{node.desc}</p>}
              <div className="roadmap-card-count">
                {count > 0 ? `☕ ${count} program${count !== 1 ? 's' : ''}` : '📂 Browse'}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
