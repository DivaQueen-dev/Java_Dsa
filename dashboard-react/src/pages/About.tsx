export default function About() {
  return (
    <div className="page-narrow">
      <div className="topic-header-editorial">
        <span className="tag" style={{ marginBottom: '16px' }}>About</span>
        <h1>Behind the code.</h1>
        <p>A personal portfolio of Java explorations, algorithms, and data structures. Built to be shared.</p>
      </div>

      <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p>
          Welcome. This isn't a bootcamp, and it's not a step-by-step tutorial. 
          It's a curated archive of my Java journey—cleanly formatted, deeply analyzed, and presented beautifully.
        </p>

        <p>
          I wanted a place to store my implementations of core Java concepts and DSA patterns that felt less like 
          a dry GitHub repository and more like a minimalist design studio. A place where I can find inspiration, 
          review complexities, and easily copy snippets.
        </p>

        <div className="card" style={{ marginTop: '24px' }}>
          <h3 style={{ marginBottom: '16px' }}>The Philosophy</h3>
          <ul className="list-minimal">
            <li><strong>Code as Craft:</strong> Every snippet is meant to be readable and self-contained.</li>
            <li><strong>Honest Analysis:</strong> Real pros, cons, and common mistakes for every data structure.</li>
            <li><strong>Aesthetic First:</strong> Dark mode, crisp typography, and zero clutter.</li>
          </ul>
        </div>

        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--color-border)' }}>
          <h3>Connect & Explore</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', marginTop: '8px', marginBottom: '24px' }}>
            Find me elsewhere on the web, or check out my other open-source resources.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="https://github.com/DivaQueen-dev" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub Profile</a>
            <a href="https://codolio.com/profile/cinnamongirl" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Codolio</a>
            <a href="https://github.com/DivaQueen-dev/free-cs-roadmap" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Free CS Roadmap</a>
          </div>
        </div>
      </div>
    </div>
  );
}
