export default function About() {
  return (
    <div className="page-narrow">
      <div style={{ marginBottom: '32px' }}>
        <span className="hero-tag">🎀 About this project</span>
        <h1 className="section-title" style={{ marginTop: '8px', fontSize: '2rem' }}>About Java_Dsa</h1>
        <p className="section-subtitle">One repository, two experiences. The code is always the source of truth.</p>
      </div>

      {/* About hero */}
      <div className="about-hero">
        <img src="./assets/logo.png" alt="Cozy library logo" />
        <div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '8px' }}>cozy library</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: '1.7', maxWidth: '480px' }}>
            A growing collection of Core Java programs and Data Structures &amp; Algorithms implementations —
            organized, documented, and paired with an interactive companion website.
          </p>
          <div className="about-badges" style={{ marginTop: '16px' }}>
            <img src="https://img.shields.io/badge/Java-17+-F3E5D8?style=for-the-badge&logo=openjdk&logoColor=8B5E3C" alt="Java 17+" />
            <img src="https://img.shields.io/badge/DSA-Practice-EAC9C1?style=for-the-badge&logoColor=8B5E3C" alt="DSA Practice" />
            <img src="https://img.shields.io/badge/Status-Active-D9C3A9?style=for-the-badge" alt="Active" />
            <img src="https://img.shields.io/badge/License-MIT-C2B4D6?style=for-the-badge" alt="MIT License" />
          </div>
        </div>
      </div>

      {/* What is this */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', marginBottom: '12px' }}>📖 What Is This?</h3>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--color-text)' }}>
          <code>Java_Dsa</code> is a growing collection of Core Java programs and Data Structures &amp; Algorithms
          implementations — organized, documented, and paired with an interactive companion website.
        </p>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--color-text)', marginTop: '12px' }}>
          This is <strong>not a course or bootcamp</strong>. There are no lessons, no chapters, no forced learning paths.
          Instead, think of it as a well-organized practice repository with two equally valid ways to explore it.
        </p>
      </div>

      {/* Two experiences table */}
      <div style={{ overflowX: 'auto', borderRadius: 'var(--border-radius)', border: '1px solid var(--color-border)', marginBottom: '24px' }}>
        <table className="complexity-table">
          <thead>
            <tr>
              <th>🗂️ Traditional Experience</th>
              <th>🌐 Interactive Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Clone and browse folders directly</td><td>Open the companion website locally</td></tr>
            <tr><td>Read raw <code>.java</code> files</td><td>Browse topics with explanations &amp; code viewers</td></tr>
            <tr><td>Navigate through GitHub as usual</td><td>Search instantly, view complexity tables</td></tr>
            <tr><td>Complete freedom, zero friction</td><td>The same content — just more beautiful</td></tr>
          </tbody>
        </table>
      </div>

      {/* Tech stack */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', marginBottom: '12px' }}>🛠️ Tech Stack</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="complexity-table">
            <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
            <tbody>
              <tr><td>Language</td><td>Java 17+</td></tr>
              <tr><td>Dashboard (original)</td><td>HTML, CSS, JavaScript (vanilla)</td></tr>
              <tr><td>Dashboard (React)</td><td>React 18 + TypeScript + Vite</td></tr>
              <tr><td>Code Highlighting</td><td>CodeMirror 6 (@uiw/react-codemirror)</td></tr>
              <tr><td>Routing</td><td>React Router v6 (Hash Router)</td></tr>
              <tr><td>Fonts</td><td>Inter, Poppins, Playfair Display, Fira Code</td></tr>
              <tr><td>Hosting</td><td>Static — GitHub Pages or local file</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* More repos */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', marginBottom: '16px' }}>📚 More Resources</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { name: 'DSA-Practise', url: 'https://github.com/DivaQueen-dev/DSA-Practise', desc: 'Additional DSA practice problems in Java' },
            { name: 'LeetCode', url: 'https://github.com/DivaQueen-dev/LeetCode', desc: 'LeetCode solutions in Java' },
            { name: 'free-cs-roadmap', url: 'https://github.com/DivaQueen-dev/free-cs-roadmap', desc: 'Complete CS roadmap — DSA prep, system design, open source. No paywalls.' },
          ].map(repo => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--color-border)', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-accent-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-accent)' }}>📂 {repo.name}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>{repo.desc}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Connect */}
      <div style={{ textAlign: 'center', padding: '32px', background: 'var(--color-accent-light)', borderRadius: 'var(--border-radius)', border: '1px solid var(--color-border)' }}>
        <img src="./assets/peace.png" alt="Peace" style={{ width: '90px', marginBottom: '16px' }} />
        <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>Connect</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginBottom: '20px' }}>
          Built with love by Ash ☕
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://github.com/DivaQueen-dev" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
            <svg height="14" viewBox="0 0 16 16" width="14" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
          <a href="https://codolio.com/profile/cinnamongirl" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            🌸 Codolio
          </a>
        </div>
        <p style={{ marginTop: '20px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-muted)', fontSize: '0.85rem' }}>
          ⭐ if you find this useful &nbsp;·&nbsp; happy coding 🍯
        </p>
      </div>
    </div>
  );
}
