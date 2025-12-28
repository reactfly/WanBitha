import React from 'react';
import { Language } from '../types';
import { TEXTS } from '../constants';

interface ArtistProps {
  lang: Language;
}

const Artist: React.FC<ArtistProps> = ({ lang }) => {
  const t = TEXTS[lang].artist;

  const timeline = [
    { year: 2024, text: lang === 'pt' ? 'Exposição Solo no MAM Rio.' : 'Solo Exhibition at MAM Rio.' },
    { year: 2022, text: lang === 'pt' ? 'Residência Artística em Tóquio.' : 'Art Residency in Tokyo.' },
    { year: 2019, text: lang === 'pt' ? 'Prêmio de Arte Contemporânea PIPA.' : 'PIPA Contemporary Art Award.' },
    { year: 2015, text: lang === 'pt' ? 'Início do estúdio WanBitha.' : 'Inception of WanBitha Studio.' },
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen bg-neutral-900 text-white">
      
      {/* Bio Header */}
      <div className="container mx-auto px-6 mb-24">
        <h1 className="text-6xl md:text-8xl font-display mb-12">{t.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="text-xl leading-relaxed font-light text-gray-300 space-y-6">
            <p>
              <span className="text-yellow-400 font-bold text-2xl float-left mr-2 mt-[-6px]">W</span>
              {lang === 'pt' 
               ? 'anBitha é uma artista visual cujo trabalho transcende a categorização tradicional. Nascida no Brasil e influenciada pela brutalidade da arquitetura urbana e a delicadeza da natureza orgânica, suas obras criam uma tensão visual única.' 
               : 'anBitha is a visual artist whose work transcends traditional categorization. Born in Brazil and influenced by the brutality of urban architecture and the delicacy of organic nature, her works create a unique visual tension.'}
            </p>
            <p>
              {lang === 'pt'
               ? 'Seu processo criativo envolve a desconstrução de materiais industriais, reconfigurando-os em formas que parecem respirar. Ela acredita na arte como um ato de resistência e memória.'
               : 'Her creative process involves the deconstruction of industrial materials, reconfiguration them into forms that seem to breathe. She believes in art as an act of resistance and memory.'}
            </p>
          </div>
          <div className="relative">
             <img src="https://picsum.photos/600/800?grayscale" alt="WanBitha Portrait" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-black py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display mb-16 text-center">TIMELINE</h2>
          <div className="relative border-l border-neutral-700 ml-4 md:ml-1/2 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-[-5px] top-2 w-3 h-3 bg-yellow-400 rounded-full md:left-1/2 md:-ml-[6px]"></div>
                
                <div className="md:w-1/2 md:px-12 mb-2 md:mb-0">
                   <div className={`md:text-right ${idx % 2 !== 0 ? 'md:text-left' : ''}`}>
                      <span className="text-4xl font-display text-neutral-600 block mb-2">{item.year}</span>
                      <p className="text-xl text-gray-300">{item.text}</p>
                   </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="container mx-auto px-6 py-24 text-center">
        <blockquote className="text-3xl md:text-5xl font-display text-white leading-tight max-w-4xl mx-auto">
          "The verticality of my name represents the ascension of the spirit through art."
        </blockquote>
        <cite className="block mt-8 text-yellow-400 font-mono not-italic">— WanBitha</cite>
      </div>

    </div>
  );
};

export default Artist;
