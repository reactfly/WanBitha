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

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 
        Background Video Container 
        - Increased height for parallax effect
        - Centered positioning
      */}
      <div 
        className="absolute -top-[20vh] left-0 w-full h-[140vh] z-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        {/* Fallback Image */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg')] bg-cover bg-center opacity-50"></div>

        {/* 
           HTML5 Video Background
           Replacing YouTube embed due to reliability/autoplay restrictions.
           Using a vertical abstract fluid art video that matches the requested aesthetic.
        */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 opacity-80"
        >
          {/* Vertical Abstract Art Video (Pink/Gold/Fluid) */}
          <source src="https://videos.pexels.com/video-files/5649176/5649176-hd_1080_1920_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Pink Overlay (Película Rosa) */}
        <div className="absolute inset-0 bg-[#E6007E]/30 mix-blend-overlay z-20"></div>
        <div className="absolute inset-0 bg-[#E6007E]/10 mix-blend-multiply z-20"></div>
        
        {/* Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent z-20"></div>
      </div>

      {/* Vertical Text Overlay with Subtle Parallax */}
      <div 
        className="absolute left-6 sm:left-10 md:left-16 top-0 h-full flex items-center z-30 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
         <div className="vertical-text transform rotate-180 flex gap-4 md:gap-8 items-end">
            
            {/* Main Title - Rotating Phrases */}
            <h1 className="text-[10vh] sm:text-[13vh] md:text-[18vh] font-helvetica text-[#FFEC00] leading-none tracking-widest drop-shadow-xl select-none whitespace-nowrap">
              <Typewriter 
                words={["WANBIT'HA", "VISUAL CHAOS", "PURE EMOTION", "IMMERSIVE"]} 
                typeSpeed={150} 
                deleteSpeed={80} 
                delaySpeed={2500}
                startDelay={500} 
                cursorColor="#E6007E" 
              />
            </h1>

            {/* Subtitles (Role & Location) - Static (No Loop) */}
            <div className="flex items-center gap-4 opacity-90 pb-2 md:pb-4">
              <h2 className="text-white font-display text-xl md:text-3xl uppercase tracking-wider drop-shadow-md">
                <Typewriter 
                  words={["ARTISTA PLÁSTICA"]} 
                  loop={false}
                  typeSpeed={100} 
                  startDelay={3500} 
                  cursorColor="#E6007E" 
                />
              </h2>
              
              <div className="w-8 h-[2px] bg-[#E6007E]"></div>

              <p className="text-gray-300 font-helvetica text-sm md:text-xl tracking-[0.2em] uppercase">
                <Typewriter 
                  words={["GOIÂNIA"]} 
                  loop={false}
                  typeSpeed={100} 
                  startDelay={4500} 
                  cursorColor="#E6007E" 
                />
              </p>
            </div>

         </div>
      </div>

      {/* Pink Badge / Tab at bottom right - Fixed Position */}
      <div className="fixed bottom-12 right-0 z-50">
        <div className="bg-[#E6007E] py-4 px-6 md:py-6 md:px-12 flex items-center gap-4 rounded-l-full shadow-lg transform translate-x-4 hover:translate-x-0 transition-transform duration-300">
           <Link to="/works" className="text-white font-display font-bold text-lg md:text-2xl uppercase tracking-wider whitespace-nowrap">
             {lang === 'pt' ? 'OBRAS RECENTES' : 'RECENT WORKS'}
           </Link>
           <div className="w-1 h-6 md:h-8 bg-[#FFEC00]"></div>
        </div>
      </div>

    </section>
  );
}