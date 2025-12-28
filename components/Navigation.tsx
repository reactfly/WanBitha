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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-2 bg-gradient-to-b from-black/50 to-transparent' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Icon - Colorful Dots */}
          <Link to="/" className="group">
            <div className="grid grid-cols-2 gap-1 w-10 h-10 transform group-hover:rotate-90 transition-transform duration-500">
              <div className="bg-[#E6007E] rounded-full w-full h-full"></div>
              <div className="bg-[#FFEC00] rounded-full w-full h-full"></div>
              <div className="bg-[#6200EA] rounded-full w-full h-full"></div>
              <div className="bg-[#FFAB00] rounded-full w-full h-full"></div>
            </div>
          </Link>

          {/* Right Side Controls */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-white font-bold font-display tracking-wide">
              <button 
                onClick={toggleLang} 
                className="hover:text-[#FFEC00] transition-colors"
              >
                {lang.toUpperCase()}
              </button>
              <Search className="w-5 h-5 hover:text-[#FFEC00] cursor-pointer transition-colors" />
            </div>

            {/* Circular Hamburger Menu */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-12 h-12 md:w-14 md:h-14 bg-[#FFEC00] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-50"
            >
              {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#6200EA] z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-4xl md:text-6xl font-display font-bold text-white hover:text-[#FFEC00] transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile Language Toggle */}
          <button 
            onClick={toggleLang} 
            className="md:hidden text-2xl font-bold text-white/50 mt-8"
          >
            {lang === 'pt' ? 'Change to English' : 'Mudar para Português'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;