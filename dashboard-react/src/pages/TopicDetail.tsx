import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DSA_DATA, TOPIC_DETAILS, JAVA_ROADMAP, cleanTitle } from '../data/data';
import ComplexityTable from '../components/ComplexityTable';
import ProgramCard from '../components/ProgramCard';

const DEFAULT_TOPIC = {
  sarcasm: 'Trust the compiler.',
  definition: 'Conceptual topic in Java DSA.',
  analogy: 'No analogy defined yet.',
  complexities: [],
  advantages: ['Standardized computational logic.', 'Aids in writing code structures.'],
  disadvantages: ['Adds memory/processing step overhead.', 'Requires practice to master.'],
  mistakes: ['Failing to handle null conditions.', 'Boundary checking errors.'],
};

const SECTIONS = [
  { id: 'definition', label: '📖 Definition' },
  { id: 'complexity', label: '📊 Complexity' },
  { id: 'pros-cons', label: '⚖️ Pros & Cons' },
  { id: 'mistakes', label: '⚠️ Mistakes' },
  { id: 'programs', label: '☕ Programs' },
];

export default function TopicDetail() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const decodedCategory = decodeURIComponent(category ?? '');
  const details = TOPIC_DETAILS[decodedCategory] ?? DEFAULT_TOPIC;
  const programs = DSA_DATA.filter(f => f.category === decodedCategory);
  const isJava = JAVA_ROADMAP.some(node => node.topics?.includes(decodedCategory));
  const [activeSection, setActiveSection] = useState('definition');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    SECTIONS.forEach(s => {
      const el = sectionRefs.current[s.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [decodedCategory]);

  function scrollToSection(id: string) {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [decodedCategory]);

  return (
    <div className="page-wrapper">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <button
          className="breadcrumb-link"
          onClick={() => navigate(isJava ? '/java' : '/dsa')}
        >
          {isJava ? 'Core Java' : 'DSA Track'}
        </button>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-current">{cleanTitle(decodedCategory)}</span>
      </nav>

      <div className="topic-layout">
        {/* Sidebar */}
        <aside className="topic-sidebar" aria-label="Topic navigation">
          <div className="sidebar-title">On this page</div>
          <nav className="sidebar-nav">
            {SECTIONS.map(s => (
              <button
                key={s.id}
                className={`sidebar-link${activeSection === s.id ? ' active' : ''}`}
                onClick={() => scrollToSection(s.id)}
                aria-current={activeSection === s.id ? 'true' : undefined}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
            <div className="sidebar-title">Quick stats</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)' }}>
              <div>☕ {programs.length} program{programs.length !== 1 ? 's' : ''}</div>
              <div style={{ marginTop: '4px' }}>📚 {decodedCategory}</div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="topic-main">
          <div className="topic-header">
            <div className="topic-module-badge">{isJava ? 'Java Programming Module' : 'Data Structures & Algorithms'}</div>
            <h1 className="section-title" style={{ fontSize: '2rem' }}>{cleanTitle(decodedCategory)}</h1>
            <p className="topic-sarcasm">"{details.sarcasm}"</p>
          </div>

          {/* Definition & Analogy */}
          <section
            id="definition"
            className="topic-section"
            ref={el => { sectionRefs.current['definition'] = el; }}
          >
            <div className="topic-section-title">📖 Definition & Analogy</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="topic-card">
                <p style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--color-accent)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Definition</p>
                <p>{details.definition}</p>
              </div>
              <div className="topic-card" style={{ borderLeft: '3px solid var(--color-second)' }}>
                <p style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--color-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>🌿 Real-World Analogy</p>
                <p style={{ fontStyle: 'italic' }}>{details.analogy}</p>
              </div>
            </div>
          </section>

          {/* Complexity */}
          <section
            id="complexity"
            className="topic-section"
            ref={el => { sectionRefs.current['complexity'] = el; }}
          >
            <div className="topic-section-title">📊 Complexity Analysis</div>
            <ComplexityTable rows={details.complexities} />
          </section>

          {/* Pros & Cons */}
          <section
            id="pros-cons"
            className="topic-section"
            ref={el => { sectionRefs.current['pros-cons'] = el; }}
          >
            <div className="topic-section-title">⚖️ Pros & Cons</div>
            <div className="pros-cons-grid">
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-easy)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>Advantages</p>
                <ul className="pros-list">
                  {details.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-hard)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>Disadvantages</p>
                <ul className="cons-list">
                  {details.disadvantages.map((dis, i) => <li key={i}>{dis}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section
            id="mistakes"
            className="topic-section"
            ref={el => { sectionRefs.current['mistakes'] = el; }}
          >
            <div className="topic-section-title">⚠️ Common Mistakes</div>
            <ul className="mistakes-list">
              {details.mistakes.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </section>

          {/* Programs */}
          <section
            id="programs"
            className="topic-section"
            ref={el => { sectionRefs.current['programs'] = el; }}
          >
            <div className="topic-section-title">☕ Programs ({programs.length})</div>
            {programs.length === 0 ? (
              <div className="empty-state">
                <img src="./assets/disgust.png" alt="Nothing here" />
                <h3>No files here yet.</h3>
                <p>Add <code>.java</code> files to the <code>{decodedCategory}</code> folder and regenerate data to see them here.</p>
              </div>
            ) : (
              <div className="programs-grid">
                {programs.map(p => <ProgramCard key={p.path} program={p} />)}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
