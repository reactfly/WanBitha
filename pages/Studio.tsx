import React, { useState } from 'react';
import { Language } from '../types';
import { TEXTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StudioProps {
  lang: Language;
}

const Studio: React.FC<StudioProps> = ({ lang }) => {
  const t = TEXTS[lang].studio;
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://picsum.photos/1200/800?random=20',
    'https://picsum.photos/1200/800?random=21',
    'https://picsum.photos/1200/800?random=22',
    'https://picsum.photos/1200/800?random=23',
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-display mb-8">{t.title}</h1>
        
        {/* Visit Info */}
        <div className="bg-neutral-900 p-8 border-l-4 border-yellow-400 mb-16 max-w-2xl">
          <p className="text-xl font-light">{t.visitInfo}</p>
        </div>

        {/* Carousel */}
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-neutral-800 overflow-hidden group">
          <img 
            src={images[currentSlide]} 
            alt="Studio View" 
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 hover:bg-yellow-400 hover:text-black transition-all rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 hover:bg-yellow-400 hover:text-black transition-all rounded-full"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'bg-yellow-400 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 font-light">
           <div className="p-6 border border-neutral-800 hover:border-yellow-400 transition-colors">
              <h3 className="text-white text-xl font-display mb-2">Workspace</h3>
              <p>An industrial warehouse converted into a sanctuary for creation, filled with natural light and raw materials.</p>
           </div>
           <div className="p-6 border border-neutral-800 hover:border-yellow-400 transition-colors">
              <h3 className="text-white text-xl font-display mb-2">Process</h3>
              <p>Witness the alchemy of turning scrap metal and pigments into emotional landscapes.</p>
           </div>
           <div className="p-6 border border-neutral-800 hover:border-yellow-400 transition-colors">
              <h3 className="text-white text-xl font-display mb-2">Location</h3>
              <p>Located in the heart of the artistic district, a hub for innovation and tradition.</p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Studio;
