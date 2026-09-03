import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import JavaTrack from './pages/JavaTrack';
import DsaTrack from './pages/DsaTrack';
import TopicDetail from './pages/TopicDetail';
import ProgramDetail from './pages/ProgramDetail';
import Roadmap from './pages/Roadmap';
import GettingStarted from './pages/GettingStarted';
import About from './pages/About';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/java" element={<JavaTrack />} />
          <Route path="/dsa" element={<DsaTrack />} />
          <Route path="/topic/:category" element={<TopicDetail />} />
          {/* Wildcard to capture nested paths like Arrays/ReverseArray.java */}
          <Route path="/program/*" element={<ProgramDetail />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/about" element={<About />} />
          {/* Fallback to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollProgress />
        <AppRoutes />
      </HashRouter>
    </ThemeProvider>
  );
}
