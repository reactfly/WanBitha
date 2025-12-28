import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language, Work } from '../types';
import { TEXTS, WORKS } from '../constants';
import { Filter } from 'lucide-react';

interface WorksProps {
  lang: Language;
}

const Works: React.FC<WorksProps> = ({ lang }) => {
  const t = TEXTS[lang].works;
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.filters.all },
    { id: 'painting', label: t.filters.painting },
    { id: 'sculpture', label: t.filters.sculpture },
    { id: 'installation', label: t.filters.installation },
  ];

  const filteredWorks = filter === 'all' 
    ? WORKS 
    : WORKS.filter(w => w.category === filter);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-display text-white mb-8">{t.title}</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <Filter size={20} className="text-yellow-400 mr-2" />
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`text-sm uppercase tracking-widest px-4 py-2 border transition-all ${
                  filter === cat.id 
                    ? 'bg-white text-black border-white font-bold' 
                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-yellow-400 hover:text-yellow-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {filteredWorks.map((work) => (
            <Link to={`/works/${work.id}`} key={work.id} className="group cursor-none-custom">
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-neutral-900">
                <img 
                  src={work.imageUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                 {/* Hover Overlay */}
                <div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-display text-white group-hover:text-yellow-400 transition-colors">{work.title}</h3>
                <p className="text-gray-500 font-mono text-sm">{work.technique}, {work.year}</p>
              </div>
            </Link>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="py-24 text-center text-gray-500">
            No works found in this category.
          </div>
        )}

      </div>
    </div>
  );
};

export default Works;
