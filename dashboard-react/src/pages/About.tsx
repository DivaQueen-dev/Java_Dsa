export default function About() {
  return (
    <div className="page-narrow">
      <div className="topic-header-editorial">
        <span className="tag" style={{ marginBottom: '16px' }}>About Me</span>
        <h1>Behind the code.</h1>
        <p>This is where I keep all my messy thoughts and clean code. Well, mostly clean.</p>
      </div>

      <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 350px' }}>
            <p style={{ marginBottom: '16px' }}>
              Hi there! I created this dashboard because I was tired of just having my code sit in boring text files or scattered across a dozen different folders. 
              I wanted a central hub where I could track my progress, review my own notes, and actually enjoy looking at it.
            </p>
            <p>
              This isn't a course or a bootcamp—it's just my honest journey through Core Java and diving deep into Data Structures and Algorithms. 
              I write the explanations that make sense to *me*, so hopefully, they make sense to you too!
            </p>
          </div>
          <div style={{ flex: '1 1 250px', display: 'flex', justifyContent: 'center' }}>
            <img src="./assets/layingdown.png" alt="Me chilling" style={{ maxWidth: '100%', maxHeight: '250px', objectFit: 'contain' }} />
          </div>
        </div>

        <div className="card" style={{ marginTop: '24px' }}>
          <h3 style={{ marginBottom: '16px' }}>What you'll find here</h3>
          <ul className="list-minimal">
            <li><strong>My Code:</strong> Everything from basic arrays to complex graphs.</li>
            <li><strong>My Notes:</strong> The "why" and "how" behind the code, without the confusing jargon.</li>
            <li><strong>Aesthetic Vibes:</strong> Because if I'm staring at code all day, it better look good. 💅</li>
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
