import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import WorkDetail from './pages/WorkDetail';
import Exhibitions from './pages/Exhibitions';
import Artist from './pages/Artist';
import Studio from './pages/Studio';
import News from './pages/News';
import { Language } from './types';

// ScrollToTop component to ensure navigation resets scroll position
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <HashRouter>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
        <ScrollToTop />
        <Navigation lang={lang} setLang={setLang} />
        
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/works" element={<Works lang={lang} />} />
          <Route path="/works/:id" element={<WorkDetail lang={lang} />} />
          <Route path="/exhibitions" element={<Exhibitions lang={lang} />} />
          <Route path="/artist" element={<Artist lang={lang} />} />
          <Route path="/studio" element={<Studio lang={lang} />} />
          <Route path="/news" element={<News lang={lang} />} />
        </Routes>

        <Footer lang={lang} />
      </div>
    </HashRouter>
  );
};

export default App;
