import React from 'react';
import { Language } from '../types';
import { TEXTS, NEWS } from '../constants';

interface NewsProps {
  lang: Language;
}

const News: React.FC<NewsProps> = ({ lang }) => {
  const t = TEXTS[lang].news;

  return (
    <div className="pt-28 pb-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-display mb-16">{t.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* News List */}
          <div className="lg:col-span-2 space-y-12">
            {NEWS.map((item) => (
              <article key={item.id} className="border-b border-neutral-800 pb-12 group">
                <span className="text-yellow-400 font-mono text-sm mb-2 block">{item.date}</span>
                <h2 className="text-3xl font-display mb-4 group-hover:text-gray-300 transition-colors cursor-pointer">{item.title}</h2>
                <p className="text-gray-400 font-light text-lg">{item.summary}</p>
                <button className="mt-4 text-sm font-bold uppercase tracking-widest border-b border-transparent hover:border-white transition-all">
                  Read More
                </button>
              </article>
            ))}
          </div>

          {/* Newsletter Sidebar */}
          <div className="lg:col-span-1">
             <div className="bg-neutral-900 p-8 sticky top-32">
                <h3 className="text-2xl font-display mb-6">{t.subscribe}</h3>
                <p className="text-gray-400 mb-6 font-light">
                  {lang === 'pt' 
                    ? 'Junte-se à nossa lista exclusiva para convites de vernissages e atualizações de estúdio.' 
                    : 'Join our exclusive list for vernissage invitations and studio updates.'}
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder={t.emailPlaceholder}
                    className="w-full bg-black border border-neutral-700 p-4 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                  <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors">
                    {t.submit}
                  </button>
                </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default News;
