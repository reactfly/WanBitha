
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import Typewriter from './Typewriter';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainPhrases = lang === 'pt' 
    ? ["WANBIT'HA", "ALQUIMIA VISUAL", "EMOÇÃO PURA", "IMERSÃO", "MATÉRIA E LUZ"]
    : ["WANBIT'HA", "VISUAL ALCHEMY", "PURE EMOTION", "IMMERSIVE", "LIGHT & MATTER"];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Layer with Parallax */}
      <div 
        className="absolute -top-[20vh] left-0 w-full h-[140vh] z-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        {/* Low-res placeholder for instant feeling */}
        <div className="absolute inset-0 bg-neutral-900"></div>

        {/* 
           Background Video: Using direct MP4 for maximum compatibility and no player errors.
           The video is an abstract vertical fluid art that matches the branding.
        */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 opacity-60"
        >
          <source src="https://videos.pexels.com/video-files/5649176/5649176-hd_1080_1920_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-[#E6007E]/20 mix-blend-color-burn z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-20"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-30 h-full flex items-center px-8 sm:px-12 md:px-24">
        
        {/* Vertical Brand Signature */}
        <div 
          className="vertical-text transform rotate-180 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-end h-fit"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(180deg)` }}
        >
          {/* Main Rotating Title */}
          <h1 className="text-[10vh] sm:text-[14vh] md:text-[18vh] font-archivo text-[#FFEC00] leading-none tracking-tighter drop-shadow-2xl select-none uppercase">
            <Typewriter 
              words={mainPhrases} 
              typeSpeed={120} 
              deleteSpeed={60} 
              delaySpeed={3000}
              startDelay={800} 
              cursorColor="#E6007E" 
            />
          </h1>

          {/* Role & Info */}
          <div className="flex flex-col gap-2 pb-2 md:pb-6 opacity-80">
            <h2 className="text-white font-display text-2xl md:text-4xl uppercase tracking-widest whitespace-nowrap">
              <Typewriter 
                words={[lang === 'pt' ? "ARTISTA PLÁSTICA" : "VISUAL ARTIST"]} 
                loop={false}
                typeSpeed={80} 
                startDelay={3000} 
                cursorColor="#FFEC00" 
              />
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[3px] bg-[#E6007E]"></div>
              <p className="text-[#FFEC00] font-helvetica text-lg md:text-2xl tracking-[0.4em] uppercase">
                <Typewriter 
                  words={["GOIÂNIA", "BRAZIL"]} 
                  typeSpeed={100} 
                  delaySpeed={5000}
                  startDelay={5000} 
                  cursorColor="white" 
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Side Exploration Tab */}
      <div className="fixed bottom-12 right-0 z-50 group">
        <Link 
          to="/works" 
          className="bg-[#E6007E] py-5 px-8 md:py-8 md:px-16 flex items-center gap-6 rounded-l-full shadow-2xl transform translate-x-8 hover:translate-x-0 transition-all duration-500 border-y-2 border-l-2 border-white/20"
        >
           <span className="text-white font-display font-black text-xl md:text-3xl uppercase tracking-tighter whitespace-nowrap">
             {lang === 'pt' ? 'VER OBRAS' : 'VIEW COLLECTION'}
           </span>
           <div className="w-2 h-8 md:h-12 bg-[#FFEC00] group-hover:scale-y-125 transition-transform"></div>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-pulse z-40">
        <div className="w-[2px] h-12 bg-white rounded-full"></div>
      </div>

    </section>
  );
}
