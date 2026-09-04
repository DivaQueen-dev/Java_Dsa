import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { DSA_DATA, TOPIC_DETAILS, cleanTitle } from '../data/data';
import type { Program } from '../types';

const NAV_LINKS = [
  { to: '/', label: 'Home', key: 'home' },
  { to: '/java', label: 'Core Java', key: 'java' },
  { to: '/dsa', label: 'DSA', key: 'dsa' },
  { to: '/roadmap', label: 'Roadmap', key: 'roadmap' },
  { to: '/about', label: 'About', key: 'about' },
];

interface SearchResult {
  type: 'topic' | 'program';
  label: string;
  sublabel: string;
  key: string;
  program?: Program;
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const currentPath = window.location.hash.replace('#', '') || '/';

  // Search logic
  useEffect(() => {
    const q = query.toLowerCase().trim();
    if (!q) { setResults([]); setSuggestionsOpen(false); return; }

    const topicMatches: SearchResult[] = Object.keys(TOPIC_DETAILS)
      .filter(cat => cat.toLowerCase().includes(q))
      .map(cat => ({
        type: 'topic',
        label: `📚 Topic: ${cleanTitle(cat)}`,
        sublabel: 'View Concept Overview',
        key: cat,
      }));

    const programMatches: SearchResult[] = DSA_DATA
      .filter(f => f.name.toLowerCase().includes(q) || f.theory.toLowerCase().includes(q))
      .slice(0, 8)
      .map(f => ({
        type: 'program',
        label: `☕ ${cleanTitle(f.name)}`,
        sublabel: f.path,
        key: f.name,
        program: f,
      }));

    const all = [...topicMatches, ...programMatches];
    setResults(all);
    setSuggestionsOpen(true);
  }, [query]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSuggestionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function handleSuggestionClick(r: SearchResult) {
    setSuggestionsOpen(false);
    setQuery('');
    if (r.type === 'topic') {
      navigate(`/topic/${encodeURIComponent(r.key)}`);
    } else if (r.program) {
      navigate(`/program/${encodeURIComponent(r.program.path)}`);
    }
    setDrawerOpen(false);
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={() => setDrawerOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img src="./assets/favicon.jpg" alt="Diva's logo" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-accent)' }} />
            <span className="nav-logo-text">My DSA Journey</span>
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {NAV_LINKS.map(link => (
              <Link
                key={link.key}
                to={link.to}
                className={`nav-link${currentPath === link.to ? ' active' : ''}`}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="nav-actions">
            {/* Search */}
            <div className="search-wrapper" ref={searchRef} role="search">
              <span className="search-icon">🔍</span>
              <input
                className="search-input"
                type="text"
                placeholder="Search topics or programs…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => query && setSuggestionsOpen(true)}
                aria-label="Search topics and programs"
                autoComplete="off"
              />
              <div className={`search-suggestions${suggestionsOpen ? ' open' : ''}`} role="listbox">
                {results.length === 0 && query && (
                  <div className="search-empty">
                    <img src="./assets/disgust.png" alt="Not found" />
                    <p>"Even Binary Search couldn't find that."</p>
                  </div>
                )}
                {results.map((r, i) => (
                  <div
                    key={i}
                    className="suggestion-item"
                    role="option"
                    onClick={() => handleSuggestionClick(r)}
                    onKeyDown={e => e.key === 'Enter' && handleSuggestionClick(r)}
                    tabIndex={0}
                  >
                    <span className="suggestion-name">{r.label}</span>
                    <span className="suggestion-path">{r.sublabel}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Theme toggle */}
            <button
              className="btn-theme"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/DivaQueen-dev/Java_Dsa"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              aria-label="View on GitHub"
            >
              <svg height="16" viewBox="0 0 16 16" width="16" aria-hidden="true">
                <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>

            {/* Hamburger */}
            <button
              className={`hamburger${drawerOpen ? ' open' : ''}`}
              onClick={() => setDrawerOpen(prev => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={drawerOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`} aria-hidden={!drawerOpen}>
        {NAV_LINKS.map(link => (
          <Link
            key={link.key}
            to={link.to}
            className={`drawer-link${currentPath === link.to ? ' active' : ''}`}
            onClick={() => setDrawerOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
