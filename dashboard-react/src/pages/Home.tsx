import { useNavigate } from 'react-router-dom';
import { DSA_DATA, TOPIC_DETAILS, JAVA_ROADMAP, DSA_ROADMAP } from '../data/data';

const FEATURES = [
  { icon: '🔍', title: 'Instant Search', desc: 'Find any topic or program by name across 145+ programs.' },
  { icon: '📖', title: 'Concept Overviews', desc: 'Short explanations with real-world analogies for every topic.' },
  { icon: '📊', title: 'Complexity Tables', desc: 'Time & space complexity for every operation at a glance.' },
  { icon: '⚖️', title: 'Pros & Cons', desc: 'Honest trade-offs for each data structure.' },
  { icon: '☕', title: 'Code Viewer', desc: 'Clean, syntax-highlighted Java code with line numbers.' },
  { icon: '🌙', title: 'Dark Mode', desc: 'Because 2 AM is peak learning time.' },
  { icon: '📥', title: 'Download Code', desc: 'Download any .java file directly from the browser.' },
  { icon: '🔗', title: 'Practice Links', desc: 'One-click to an online Java playground.' },
];

export default function Home() {
  const navigate = useNavigate();

  const totalPrograms = DSA_DATA.length;
  const totalTopics = Object.keys(TOPIC_DETAILS).length;
  const totalCategories = [...new Set(DSA_DATA.map(d => d.category))].length;
  const javaNodes = JAVA_ROADMAP.length;
  const dsaNodes = DSA_ROADMAP.length;

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-text">
          <span className="hero-tag">🌾 a cozy repository companion</span>
          <h1 className="hero-title">
            the code compiles.<br />my life doesn't.
          </h1>
          <p className="hero-subtitle">
            A beautiful interface for exploring a Java &amp; DSA repository. Browse topics, view code,
            understand complexity — no courses, no forced paths. Just the repository, but prettier.
          </p>
          <div className="hero-cta">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)', fontWeight: 600 }}>📂 Traditional Experience</span>
              <a
                href="https://github.com/DivaQueen-dev/Java_Dsa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Browse on GitHub ↗
              </a>
            </div>
            <span className="hero-divider">or</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)', fontWeight: 600 }}>🌐 Interactive Experience</span>
              <button className="btn btn-primary" onClick={() => navigate('/java')}>
                Explore Here →
              </button>
            </div>
          </div>
        </div>
        <img src="./assets/lesgo.png" alt="Let's go!" className="hero-img" />
      </section>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-number">{totalPrograms}</span>
          <span className="stat-label">Java programs</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{totalTopics}</span>
          <span className="stat-label">topic explanations</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{totalCategories}</span>
          <span className="stat-label">categories</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{javaNodes + dsaNodes}</span>
          <span className="stat-label">roadmap nodes</span>
        </div>
      </div>

      {/* Features */}
      <div style={{ marginBottom: '48px' }}>
        <h2 className="section-title">What's inside</h2>
        <p className="section-subtitle">Everything you need, nothing you don't.</p>
        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dual path */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div className="card" style={{ cursor: 'pointer' }} onClick={() => navigate('/java')}>
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>☕</div>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', marginBottom: '8px' }}>Core Java Track</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginBottom: '16px' }}>
            Variables, OOP, Arrays, Strings, Math, and more — {javaNodes} modules.
          </p>
          <span className="btn btn-secondary btn-sm">Explore Java →</span>
        </div>
        <div className="card" style={{ cursor: 'pointer' }} onClick={() => navigate('/dsa')}>
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌳</div>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', marginBottom: '8px' }}>DSA Track</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginBottom: '16px' }}>
            Sorting, Searching, Trees, Graphs, DP, and more — {dsaNodes} topics.
          </p>
          <span className="btn btn-secondary btn-sm">Explore DSA →</span>
        </div>
      </div>

      {/* Footer blurb */}
      <div style={{ textAlign: 'center', marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--color-border)' }}>
        <img src="./assets/seeua.png" alt="See you!" style={{ width: '80px', marginBottom: '12px' }} />
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
          ⭐ if you find this useful &nbsp;·&nbsp; happy coding 🍯
        </p>
      </div>
    </div>
  );
}
