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
    window.scrollTo({ top: 0 });
  }, [programPath]);

  const showToast = useCallback(() => {
    setToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(false), 2500);
  }, []);

  if (!program) {
    return (
      <div className="page-wrapper">
        <div className="empty-state" style={{ marginTop: '80px' }}>
          <img src="./assets/error.png" alt="Error" />
          <h3>Program not found.</h3>
          <p>The path <code>{programPath}</code> doesn't match any known program.</p>
          <button className="btn btn-primary" style={{ marginTop: '16px' }} onClick={() => navigate('/dsa')}>
            ← Back to DSA
          </button>
        </div>
      </div>
    );
  }

  const diff = program.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';

  const related = DSA_DATA
    .filter(f => f.category === program.category && f.path !== program.path)
    .slice(0, 4);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(program!.code);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = program!.code;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    showToast();
  }

  function handleDownload() {
    const blob = new Blob([program!.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = program!.name.endsWith('.java') ? program!.name : program!.name + '.java';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const cmExtensions = [
    java(),
    EditorView.editable.of(false),
    EditorView.lineWrapping,
  ];

  return (
    <div className="page-wrapper">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <button className="breadcrumb-link" onClick={() => navigate('/dsa')}>DSA</button>
        <span className="breadcrumb-sep">›</span>
        <button
          className="breadcrumb-link"
          onClick={() => navigate(`/topic/${encodeURIComponent(program.category)}`)}
        >
          {cleanTitle(program.category)}
        </button>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-current">{cleanTitle(program.name)}</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <div className="program-header-info">
          <span className={`badge badge-${diff}`}>{program.difficulty}</span>
          <span style={{
            fontSize: '0.75rem', color: 'var(--color-muted)',
            background: 'var(--color-accent-light)', padding: '2px 8px',
            borderRadius: '4px', border: '1px solid var(--color-border)'
          }}>
            {program.category}
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '8px' }}>
          {cleanTitle(program.name)}
        </h1>
        <div className="path-tag">📁 {program.path}</div>
        <div className="complexity-pills-row">
          <span className="pill" title="Time complexity">⏳ Time: {program.timeComplexity}</span>
          <span className="pill" title="Space complexity">📦 Space: {program.spaceComplexity}</span>
        </div>
      </div>

      {/* Main layout */}
      <div className="program-detail-layout">
        {/* Code panel */}
        <div className="code-panel">
          <div className="code-panel-header">
            <span className="code-panel-title">
              <span style={{ fontSize: '0.9rem' }}>☕</span>
              {program.name}
            </span>
            <div className="code-panel-actions">
              <button
                className="btn btn-outline btn-sm"
                onClick={handleCopy}
                title="Copy code to clipboard"
              >
                📋 Copy
              </button>
              <button
                className="btn btn-outline btn-sm"
                onClick={handleDownload}
                title="Download .java file"
              >
                📥 Download
              </button>
              <a
                href="https://onecompiler.com/java"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                title="Open in online Java playground"
              >
                ▶ Practice
              </a>
            </div>
          </div>
          <div className="cm-wrapper">
            <CodeMirror
              value={program.code}
              extensions={cmExtensions}
              theme={isDark ? oneDark : undefined}
              readOnly
              basicSetup={{
                lineNumbers: true,
                foldGutter: false,
                highlightActiveLine: false,
                highlightSelectionMatches: false,
              }}
            />
          </div>
        </div>

        {/* Info sidebar */}
        <div className="program-sidebar">
          {/* Theory */}
          <div className="info-card">
            <div className="info-card-title">📖 Theory</div>
            <p>{program.theory}</p>
          </div>

          {/* Analogy */}
          <div className="info-card" style={{ borderLeft: '3px solid var(--color-second)' }}>
            <div className="info-card-title">🌿 Analogy</div>
            <p style={{ fontStyle: 'italic' }}>{program.analogy}</p>
          </div>

          {/* Dry Run */}
          <div className="info-card">
            <div className="info-card-title">🔍 Dry Run</div>
            <pre>{program.dry_run}</pre>
          </div>

          {/* Expected Output */}
          <div className="info-card">
            <div className="info-card-title">📤 Expected Output</div>
            <pre>{program.output}</pre>
          </div>

          {/* Related programs */}
          {related.length > 0 && (
            <div className="info-card">
              <div className="info-card-title">🔗 More in {cleanTitle(program.category)}</div>
              <div className="related-pills">
                {related.map(r => (
                  <button
                    key={r.path}
                    className="pill clickable"
                    onClick={() => navigate(`/program/${encodeURIComponent(r.path)}`)}
                    title={r.path}
                  >
                    ☕ {cleanTitle(r.name)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Copy Toast */}
      <div className={`toast${toast ? ' show' : ''}`} role="status" aria-live="polite">
        ✅ Code copied to clipboard!
      </div>
    </div>
  );
}
