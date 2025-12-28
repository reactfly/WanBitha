import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { TEXTS, WORKS } from '../constants';
import { ArrowLeft } from 'lucide-react';

interface WorkDetailProps {
  lang: Language;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ lang }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const t = TEXTS[lang].works.details;
  
  const work = WORKS.find(w => w.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!work) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <p>Work not found</p>
        <button onClick={() => navigate('/works')} className="ml-4 underline text-yellow-400">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6 h-full">
        
        <Link to="/works" className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors mb-8 group">
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-widest text-xs font-bold">{t.back}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Image Section */}
          <div className="relative">
             <div className="bg-neutral-900 aspect-[4/5] overflow-hidden">
              <img 
                src={work.imageUrl} 
                alt={work.title} 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col h-full justify-center pt-8 lg:pt-0">
            <h1 className="text-5xl md:text-7xl font-display mb-6 text-yellow-400 leading-none">{work.title}</h1>
            
            <div className="space-y-6 mb-12 border-t border-neutral-800 pt-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200">
                {work.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-mono text-gray-400">
              <div>
                <span className="block text-gray-600 uppercase tracking-widest mb-1">{t.technique}</span>
                {work.technique}
              </div>
              <div>
                <span className="block text-gray-600 uppercase tracking-widest mb-1">{t.year}</span>
                {work.year}
              </div>
              <div>
                <span className="block text-gray-600 uppercase tracking-widest mb-1">{t.dimensions}</span>
                {work.dimensions}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
