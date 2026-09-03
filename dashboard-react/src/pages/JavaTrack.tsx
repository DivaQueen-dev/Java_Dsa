import RoadmapTimeline from '../components/RoadmapTimeline';
import { JAVA_ROADMAP } from '../data/data';

export default function JavaTrack() {
  return (
    <div className="page-wrapper">
      <div style={{ marginBottom: '32px' }}>
        <span className="hero-tag">☕ Core Java</span>
        <h1 className="section-title" style={{ marginTop: '8px', fontSize: '2rem' }}>Java Programming Track</h1>
        <p className="section-subtitle">
          Fundamentals to OOP — {JAVA_ROADMAP.length} modules covering the core Java language. Click any topic to explore programs and concept explanations.
        </p>
      </div>
      <RoadmapTimeline nodes={JAVA_ROADMAP} type="java" />
    </div>
  );
}
