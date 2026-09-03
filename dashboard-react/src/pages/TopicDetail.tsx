import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DSA_DATA, TOPIC_DETAILS, JAVA_ROADMAP, cleanTitle } from '../data/data';
import ComplexityTable from '../components/ComplexityTable';
import ProgramCard from '../components/ProgramCard';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'complexity', label: 'Complexity' },
  { id: 'insights', label: 'Insights & Traps' },
  { id: 'code', label: 'Code Library' },
];

export default function TopicDetail() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const decodedCategory = decodeURIComponent(category ?? '');
  const details = TOPIC_DETAILS[decodedCategory];
  const programs = DSA_DATA.filter(f => f.category === decodedCategory);
  const isJava = JAVA_ROADMAP.some(node => node.topics?.includes(decodedCategory));
  
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [decodedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-100px 0px -50% 0px', threshold: 0 }
    );
    SECTIONS.forEach(s => {
      const el = sectionRefs.current[s.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [decodedCategory]);

  function scrollTo(id: string) {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  // Fallback if topic doesn't exist
  if (!details) return (
    <div className="page-wrapper" style={{ textAlign: 'center' }}>
      <h1>Topic not found.</h1>
      <button className="btn btn-outline" style={{ marginTop: '24px' }} onClick={() => navigate('/')}>Return Home</button>
    </div>
  );

  return (
    <div className="page-wrapper">
      
      {/* Header */}
      <div className="topic-header-editorial">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <button className="tag" onClick={() => navigate(isJava ? '/java' : '/dsa')} style={{ cursor: 'pointer' }}>
            ← {isJava ? 'Core Java' : 'DSA'}
          </button>
          <span className="tag">{programs.length} Programs</span>
        </div>
        <h1>{cleanTitle(decodedCategory)}</h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>"{details.sarcasm}"</p>
      </div>

      <div className="topic-content-grid">
        {/* Sticky Sidebar Navigation */}
        <aside style={{ position: 'sticky', top: '100px', height: 'max-content' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted)', marginBottom: '16px', fontWeight: 600 }}>Contents</div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {SECTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  textAlign: 'left', padding: '8px 12px', borderRadius: 'var(--border-radius-sm)',
                  fontSize: '0.9rem', transition: 'all var(--transition)',
                  color: activeSection === s.id ? 'var(--color-accent)' : 'var(--color-muted)',
                  background: activeSection === s.id ? 'var(--color-accent-light)' : 'transparent',
                  fontWeight: activeSection === s.id ? 600 : 400
                }}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main>
          
          <section id="overview" className="content-section" ref={el => { sectionRefs.current['overview'] = el; }}>
            <div className="content-section-title">Overview & Intuition</div>
            <div className="card" style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>Definition</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>{details.definition}</p>
            </div>
            <div className="card" style={{ borderLeft: '3px solid var(--color-second)' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--color-muted)' }}>Real-World Analogy</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', fontStyle: 'italic' }}>{details.analogy}</p>
            </div>
          </section>

          <section id="complexity" className="content-section" ref={el => { sectionRefs.current['complexity'] = el; }}>
            <div className="content-section-title">Complexity Profile</div>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <ComplexityTable rows={details.complexities} />
            </div>
          </section>

          <section id="insights" className="content-section" ref={el => { sectionRefs.current['insights'] = el; }}>
            <div className="content-section-title">Insights & Traps</div>
            
            <div className="pros-cons-wrap">
              <div>
                <h3 style={{ fontSize: '0.9rem', marginBottom: '16px', color: 'var(--color-easy)' }}>✅ Strengths</h3>
                <ul className="list-minimal">
                  {details.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: '0.9rem', marginBottom: '16px', color: 'var(--color-hard)' }}>❌ Limitations</h3>
                <ul className="list-minimal">
                  {details.disadvantages.map((dis, i) => <li key={i}>{dis}</li>)}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '32px' }}>
              <h3 style={{ fontSize: '0.9rem', marginBottom: '16px', color: 'var(--color-medium)' }}>⚠️ Common Traps</h3>
              <ul className="list-minimal" style={{ borderLeft: '2px solid var(--color-medium)', paddingLeft: '16px', background: 'transparent' }}>
                {details.mistakes.map((m, i) => (
                  <li key={i} style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>{m}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="code" className="content-section" ref={el => { sectionRefs.current['code'] = el; }}>
            <div className="content-section-title">Code Library</div>
            <div className="masonry-grid" style={{ marginTop: '0' }}>
              {programs.map(p => <ProgramCard key={p.path} program={p} />)}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
