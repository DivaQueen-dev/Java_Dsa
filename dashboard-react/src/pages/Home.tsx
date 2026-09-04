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
      <section className="hero-editorial" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
        <div style={{ flex: '1 1 400px' }}>
          <span className="tag" style={{ marginBottom: '16px' }}>My Java & DSA Portfolio</span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '24px' }}>Hey, I'm Diva. Welcome to my codebase! 🚀</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '32px' }}>
            I built this space to document everything I learn about Core Java and Data Structures & Algorithms. It's basically my digital notebook, but prettier. 
            Feel free to look around and steal some code!
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="btn btn-primary" onClick={() => navigate('/java')}>Browse Core Java</button>
            <button className="btn btn-outline" onClick={() => navigate('/dsa')}>Explore DSA</button>
          </div>
        </div>
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <img src="./assets/lesgo.png" alt="Let's go" style={{ maxWidth: '100%', maxHeight: '350px', objectFit: 'contain' }} />
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
