import React from 'react';
import { Language } from '../types';
import { TEXTS, EXHIBITIONS } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

interface ExhibitionsProps {
  lang: Language;
}

const Exhibitions: React.FC<ExhibitionsProps> = ({ lang }) => {
  const t = TEXTS[lang].exhibitions;

  return (
    <div className="pt-28 pb-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-display text-white mb-16">{t.title}</h1>

        <div className="space-y-24">
          {EXHIBITIONS.map((exhibition, index) => (
            <div key={exhibition.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}>
              
              {/* Image */}
              <div className="w-full md:w-1/2 overflow-hidden aspect-video relative">
                 <div className="absolute top-4 left-4 z-10">
                    {exhibition.isCurrent && (
                        <span className="bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">
                        {t.current}
                        </span>
                    )}
                 </div>
                <img 
                  src={exhibition.imageUrl} 
                  alt={exhibition.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-display group-hover:text-yellow-400 transition-colors">
                    {exhibition.title}
                </h2>
                
                <div className="space-y-2 text-gray-400 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exhibition.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exhibition.date}</span>
                  </div>
                </div>

                <p className="text-lg font-light text-gray-300 leading-relaxed max-w-md">
                    {exhibition.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
