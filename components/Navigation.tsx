
import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import { TEXTS } from '../constants';

interface NavigationProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navigation: React.FC<NavigationProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const t = TEXTS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const toggleLang = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  const navLinks = [
    { to: '/works', label: t.works },
    { to: '/exhibitions', label: t.exhibitions },
    { to: '/artist', label: t.artist },
    { to: '/studio', label: t.studio },
    { to: '/news', label: t.news },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-black/40 backdrop-blur-xl border-b border-white/5' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Icon */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="grid grid-cols-2 gap-1 w-8 h-8 md:w-10 md:h-10 transform group-hover:rotate-180 transition-transform duration-700">
              <div className="bg-[#E6007E] rounded-full w-full h-full"></div>
              <div className="bg-[#FFEC00] rounded-full w-full h-full"></div>
              <div className="bg-[#6200EA] rounded-full w-full h-full"></div>
              <div className="bg-white rounded-full w-full h-full"></div>
            </div>
            <span className="hidden sm:block font-display text-xl tracking-tighter text-white">WANBIT'HA</span>
          </Link>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6 text-sm font-bold tracking-widest">
              <button 
                onClick={toggleLang} 
                className="hover:text-[#E6007E] transition-colors flex items-center gap-2"
              >
                <span className={lang === 'pt' ? 'text-white' : 'text-white/40'}>PT</span>
                <span className="text-white/20">|</span>
                <span className={lang === 'en' ? 'text-white' : 'text-white/40'}>EN</span>
              </button>
            </div>

            {/* Circular Hamburger Menu */}
            <button 
              onClick={toggleMenu} 
              className="w-12 h-12 md:w-14 md:h-14 bg-[#FFEC00] rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl z-[70] group"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X size={24} className="text-black" />
              ) : (
                <div className="flex flex-col gap-1 items-end group-hover:items-center transition-all">
                  <div className="w-6 h-0.5 bg-black"></div>
                  <div className="w-4 h-0.5 bg-black"></div>
                  <div className="w-5 h-0.5 bg-black"></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#6200EA] z-[55] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4 md:space-y-8 text-center">
          {navLinks.map((link, idx) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-5xl md:text-8xl font-display font-bold text-white hover:text-[#FFEC00] transition-all transform hover:scale-105 uppercase ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pt-12 flex flex-col items-center gap-4">
             <div className="w-12 h-[1px] bg-white/30"></div>
             <button 
                onClick={toggleLang}
                className="md:hidden text-white/60 font-bold tracking-widest"
             >
               {lang === 'pt' ? 'SWITCH TO ENGLISH' : 'MUDAR PARA PORTUGUÊS'}
             </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
