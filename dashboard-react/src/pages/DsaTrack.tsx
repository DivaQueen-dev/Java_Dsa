import RoadmapTimeline from '../components/RoadmapTimeline';
import { DSA_ROADMAP } from '../data/data';

export default function DsaTrack() {
  return (
    <div className="page-wrapper">
      <div style={{ marginBottom: '32px' }}>
        <span className="hero-tag">🌳 Data Structures & Algorithms</span>
        <h1 className="section-title" style={{ marginTop: '8px', fontSize: '2rem' }}>DSA Track</h1>
        <p className="section-subtitle">
          From Arrays to Graphs — {DSA_ROADMAP.length} topics with complexity analysis, analogies, and code examples. Click any topic to dive in.
        </p>
      </div>
      <RoadmapTimeline nodes={DSA_ROADMAP} type="dsa" />
    </div>
  );
}
