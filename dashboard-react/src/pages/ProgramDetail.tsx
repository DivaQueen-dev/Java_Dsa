import { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { java } from '@codemirror/lang-java';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';
import { DSA_DATA, cleanTitle } from '../data/data';
import { useTheme } from '../context/ThemeContext';

export default function ProgramDetail() {
  const { '*': rawPath } = useParams<{ '*': string }>();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  
  const programPath = decodeURIComponent(rawPath ?? '');
  const program = DSA_DATA.find(f => f.path === programPath);
  
  const [toast, setToast] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [programPath]);

  const showToast = useCallback(() => {
    setToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(false), 2500);
  }, []);

  if (!program) return (
    <div className="page-wrapper" style={{ textAlign: 'center' }}>
      <h1>Program not found.</h1>
      <button className="btn btn-outline" onClick={() => navigate('/')}>Return Home</button>
    </div>
  );

  const diff = program.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';
  const related = DSA_DATA.filter(f => f.category === program.category && f.path !== program.path).slice(0, 4);

  async function handleCopy() {
    try { await navigator.clipboard.writeText(program!.code); }
    catch { /* fallback logic omitted for brevity */ }
    showToast();
  }

  function handleDownload() {
    const blob = new Blob([program!.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = program!.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="page-wrapper">
      
      {/* Breadcrumb / Editorial Header */}
      <div className="topic-header-editorial">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <button className="tag" onClick={() => navigate(`/topic/${encodeURIComponent(program.category)}`)} style={{ cursor: 'pointer' }}>
            ← {cleanTitle(program.category)}
          </button>
          <span className="tag" style={{ fontFamily: 'var(--font-mono)' }}>{program.path}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <span className={`diff-dot ${diff}`} style={{ width: '12px', height: '12px' }}></span>
          <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-muted)' }}>
            {program.difficulty}
          </span>
        </div>
        <h1>{cleanTitle(program.name)}</h1>
        
        <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
          <div className="tag">⏳ {program.timeComplexity}</div>
          <div className="tag">📦 {program.spaceComplexity}</div>
        </div>
      </div>

      <div className="topic-content-grid" style={{ gridTemplateColumns: '1fr 320px' }}>
        
        {/* Left: Code IDE */}
        <main>
          <div className="ide-panel">
            <div className="ide-header">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                {program.name}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-outline btn-sm" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary btn-sm" onClick={handleDownload}>Download</button>
              </div>
            </div>
            <div className="cm-wrapper">
              <CodeMirror
                value={program.code}
                extensions={[java(), EditorView.editable.of(false), EditorView.lineWrapping]}
                theme={isDark ? oneDark : undefined}
                basicSetup={{ lineNumbers: true, foldGutter: false }}
              />
            </div>
          </div>
        </main>

        {/* Right: Insights Sidebar */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card">
            <h3 style={{ fontSize: '0.9rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Theory</h3>
            <p style={{ fontSize: '0.95rem' }}>{program.theory}</p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--color-second)' }}>
            <h3 style={{ fontSize: '0.9rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Analogy</h3>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic' }}>{program.analogy}</p>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '0.9rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Dry Run</h3>
            <pre style={{ background: 'var(--color-bg-code)', padding: '12px', borderRadius: 'var(--border-radius-sm)', fontSize: '0.8rem', whiteSpace: 'pre-wrap' }}>
              {program.dry_run}
            </pre>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '0.9rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Output</h3>
            <pre style={{ background: 'var(--color-bg-code)', padding: '12px', borderRadius: 'var(--border-radius-sm)', fontSize: '0.8rem', whiteSpace: 'pre-wrap' }}>
              {program.output}
            </pre>
          </div>

          {related.length > 0 && (
            <div className="card">
              <h3 style={{ fontSize: '0.9rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Related Programs</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {related.map(r => (
                  <button 
                    key={r.path} 
                    onClick={() => navigate(`/program/${encodeURIComponent(r.path)}`)}
                    style={{ textAlign: 'left', padding: '8px', fontSize: '0.85rem', borderRadius: 'var(--border-radius-sm)', background: 'var(--color-bg-code)', color: 'var(--color-text)', transition: 'background var(--transition)' }}
                    onMouseOver={e => e.currentTarget.style.background = 'var(--color-border)'}
                    onMouseOut={e => e.currentTarget.style.background = 'var(--color-bg-code)'}
                  >
                    {cleanTitle(r.name)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>

      </div>

      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', bottom: '32px', right: '32px', background: 'var(--color-text)', color: 'var(--color-bg)', padding: '12px 24px', borderRadius: '24px', fontSize: '0.9rem', fontWeight: 600, boxShadow: 'var(--shadow-hover)', zIndex: 9999, animation: 'fadeInUp 0.3s ease' }}>
          Copied to clipboard
        </div>
      )}
    </div>
  );
}
