import { useNavigate } from 'react-router-dom';
import { DSA_DATA, TOPIC_DETAILS, cleanTitle } from '../data/data';

export default function Home() {
  const navigate = useNavigate();

  const totalPrograms = DSA_DATA.length;
  
  // Get 8 random or featured programs to show on the masonry grid
  const featured = DSA_DATA.slice(0, 8); // simplified for now

  return (
    <div className="page-wrapper">
      
      {/* Editorial Hero */}
      <section className="hero-editorial">
        <span className="tag" style={{ marginBottom: '16px' }}>Java & DSA Portfolio</span>
        <h1>Code, curated.</h1>
        <p>
          A minimalist reference library for Core Java and Data Structures & Algorithms. 
          Built to inspire, organized for quick discovery. No courses, just clean code.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button className="btn btn-primary" onClick={() => navigate('/java')}>Browse Core Java</button>
          <button className="btn btn-outline" onClick={() => navigate('/dsa')}>Explore DSA</button>
        </div>
      </section>

      {/* Stats minimal */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', padding: '48px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text)' }}>{totalPrograms}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>Java Programs</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text)' }}>{Object.keys(TOPIC_DETAILS).length}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>Topics Covered</div>
        </div>
      </div>

      {/* Masonry Featured Preview */}
      <div style={{ marginTop: '64px' }}>
        <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>Recent Additions</h2>
        <div className="masonry-grid">
          {featured.map(program => {
            const diff = program.difficulty.toLowerCase();
            return (
              <div 
                key={program.path} 
                className="program-card masonry-item"
                onClick={() => navigate(`/program/${encodeURIComponent(program.path)}`)}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <span className={`diff-dot ${diff}`} title={program.difficulty}></span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {cleanTitle(program.category)}
                  </span>
                </div>
                <h3>{cleanTitle(program.name)}</h3>
                <p>{program.theory.substring(0, 100)}...</p>
                <div className="program-meta">
                  <span>⏳ {program.timeComplexity}</span>
                  <span>📦 {program.spaceComplexity}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '64px' }}>
        <button className="btn btn-outline" onClick={() => navigate('/dsa')}>View All Topics →</button>
      </div>

    </div>
  );
}
