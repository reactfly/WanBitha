import React from 'react';
import Hero from '../components/Hero';
import { Language } from '../types';
import { Link } from 'react-router-dom';
import { TEXTS, EXHIBITIONS, WORKS } from '../constants';

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = TEXTS[lang];
  const featuredWork = WORKS[0]; // Using a work as the "Drag Race" equivalent

  return (
    <main className="bg-black">
      <Hero lang={lang} />

      {/* SECTION 1: Featured Work (Black Background) */}
      <section className="bg-black py-12 md:py-24 relative overflow-hidden">
        {/* Title Overlaying the section */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-8">
            <h2 className="text-[12vw] leading-[0.85] font-display text-[#E6007E] uppercase mix-blend-screen">
              {featuredWork.title}
            </h2>
            <div className="w-24 h-4 bg-[#FFEC00] mt-4"></div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[16/9] w-full overflow-hidden">
               <img 
                 src={featuredWork.imageUrl} 
                 alt={featuredWork.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
            </div>
            
            {/* Circular CTA Button absolute positioned */}
            <div className="absolute top-8 right-8 md:-top-16 md:right-16 z-20">
              <Link 
                to={`/works/${featuredWork.id}`}
                className="w-32 h-32 md:w-48 md:h-48 bg-[#FFEC00] rounded-full flex flex-col items-center justify-center text-black font-bold text-center leading-tight hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,236,0,0.4)]"
              >
                <span className="uppercase font-display text-xl md:text-2xl">{lang === 'pt' ? 'Saber Mais' : 'Know More'}</span>
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center text-center">
             <p className="text-white text-2xl md:text-3xl font-display uppercase text-[#E6007E] mb-8">
               {lang === 'pt' ? 'Quer saber mais?' : 'Want to know more?'}
             </p>
             <Link 
               to="/works" 
               className="bg-[#FFEC00] text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors font-display text-lg"
             >
               {t.hero.cta}
             </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: World Exhibitions (Pink Background) */}
      <section className="bg-[#E6007E] py-24 relative overflow-hidden">
        {/* Map SVG Background Pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
           <svg className="w-full h-full text-[#FFEC00]" fill="none" stroke="currentColor" viewBox="0 0 100 50" preserveAspectRatio="none">
             <path strokeWidth="0.2" d="M10,15 Q20,5 30,15 T50,20 T70,15 T90,25 M5,30 Q25,25 40,35 T70,40 T90,30" />
             <path strokeWidth="0.2" d="M15,10 Q25,20 35,10 T55,5 T75,10 T95,5" />
             {/* Abstract map lines */}
           </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
           <h2 className="text-[10vw] leading-[0.9] font-display text-[#FFEC00] uppercase text-center md:text-left mb-12 drop-shadow-sm">
             {lang === 'pt' ? 'Exposições' : 'Exhibitions'} <br/> 
             <span className="text-white">{lang === 'pt' ? 'No Mundo' : 'Worldwide'}</span>
           </h2>

           {/* Pins on a pseudo map */}
           <div className="relative h-[400px] w-full hidden md:block border-2 border-[#FFEC00] rounded-3xl bg-[#D60076] mb-12">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FFEC00] font-display text-4xl opacity-50">
                 MAP VISUALIZATION
              </div>
              {/* Simulated Pins */}
              <div className="absolute top-1/3 left-1/4">
                 <div className="w-6 h-6 bg-[#FFEC00] rounded-full animate-bounce"></div>
              </div>
              <div className="absolute top-1/2 left-1/2">
                 <div className="w-6 h-6 bg-[#FFEC00] rounded-full animate-bounce animation-delay-200"></div>
              </div>
              <div className="absolute top-1/4 right-1/4">
                 <div className="w-6 h-6 bg-[#FFEC00] rounded-full animate-bounce animation-delay-400"></div>
              </div>
           </div>

           <div className="text-center">
             <Link 
               to="/exhibitions" 
               className="inline-block bg-[#FFEC00] text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors font-display text-lg shadow-lg"
             >
               {lang === 'pt' ? 'Lista de Exposições' : 'Exhibitions List'}
             </Link>
           </div>
        </div>
      </section>

      {/* SECTION 3: News / Highlights (Orange Background) */}
      <section className="bg-[#FFAB00] py-24">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-[#FFAB00]">
               <div className="w-full md:w-1/3">
                  <div className="aspect-square bg-black rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://picsum.photos/600/600?random=99" 
                      alt="Pompidou" 
                      className="w-full h-full object-cover"
                    />
                  </div>
               </div>
               <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-4xl md:text-6xl font-display text-white uppercase mb-6 leading-none">
                    {lang === 'pt' 
                      ? "'MISE' NA COLEÇÃO DO CENTRE POMPIDOU" 
                      : "'MISE' IN THE CENTRE POMPIDOU COLLECTION"}
                  </h3>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-white hover:text-[#FFAB00] transition-colors mb-12">
                     {lang === 'pt' ? 'LER MAIS' : 'READ MORE'}
                  </button>
               </div>
            </div>

            <div className="mt-16 text-center">
               <Link 
                 to="/news"
                 className="inline-block bg-[#FFEC00] text-black px-16 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors font-display text-xl shadow-lg"
               >
                  {lang === 'pt' ? 'Mais Notícias' : 'More News'}
               </Link>
            </div>
         </div>
      </section>

    </main>
  );
};

export default Home;