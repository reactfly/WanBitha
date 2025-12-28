import React from 'react';
import { Instagram, Twitter, Mail, Facebook, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { TEXTS } from '../constants';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TEXTS[lang].footer;

  return (
    <footer className="bg-[#6200EA] text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Newsletter Section - Big & Bold */}
        <div className="flex flex-col items-center justify-center mb-24 text-center">
          <h3 className="text-3xl md:text-5xl font-display uppercase mb-2 text-[#FFEC00]">
            {lang === 'pt' ? 'SUBSCREVER NEWSLETTER' : 'SUBSCRIBE NEWSLETTER'}
          </h3>
          <div className="relative w-full max-w-xl mt-6">
            <div className="bg-[#6200EA] border-2 border-white rounded-full p-1 flex items-center">
              <input 
                type="email" 
                placeholder={lang === 'pt' ? 'O SEU EMAIL' : 'YOUR EMAIL'}
                className="flex-1 bg-transparent border-none text-white px-6 py-3 focus:outline-none placeholder-white/70 font-display uppercase tracking-widest"
              />
              <button className="bg-[#FFEC00] text-black rounded-full px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                {lang === 'pt' ? 'Subscrever' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-t border-white/20 pt-16">
          
          {/* Contact Block */}
          <div>
            <h4 className="font-display text-2xl mb-6 text-[#FFEC00]">CONTACTO ATELIER</h4>
            <div className="space-y-4 font-medium">
              <p>Atelier WanBitha</p>
              <p>Rua da Arte, 123</p>
              <p>Lisboa, Portugal</p>
              <div className="pt-4">
                <a href="#" className="block hover:text-[#FFEC00] underline decoration-1 underline-offset-4">Abrir Mapa</a>
              </div>
            </div>
          </div>

          {/* Emails */}
          <div>
            <h4 className="font-display text-2xl mb-6 text-[#FFEC00] opacity-0 md:opacity-100">EMAILS</h4>
            <div className="space-y-4 text-sm font-medium">
              <div>
                <span className="block font-bold">Geral</span>
                <a href="mailto:info@wanbitha.com" className="hover:text-[#FFEC00]">info@wanbitha.com</a>
              </div>
              <div>
                <span className="block font-bold">Vendas e Projectos</span>
                <a href="mailto:sales@wanbitha.com" className="hover:text-[#FFEC00]">sales@wanbitha.com</a>
              </div>
              <div>
                <span className="block font-bold">Imprensa</span>
                <a href="mailto:press@wanbitha.com" className="hover:text-[#FFEC00]">press@wanbitha.com</a>
              </div>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-display text-2xl mb-6 text-[#FFEC00]">SITEMAP</h4>
            <ul className="space-y-2 font-display text-lg tracking-wide">
              <li><a href="#" className="hover:text-[#FFEC00]">Início</a></li>
              <li><a href="#/works" className="hover:text-[#FFEC00]">Obras</a></li>
              <li><a href="#/exhibitions" className="hover:text-[#FFEC00]">Exposições</a></li>
              <li><a href="#/artist" className="hover:text-[#FFEC00]">Artista</a></li>
              <li><a href="#/news" className="hover:text-[#FFEC00]">Notícias</a></li>
            </ul>
          </div>

          {/* Imprensa / Social */}
          <div>
             <h4 className="font-display text-2xl mb-6 text-[#FFEC00]">IMPRENSA</h4>
             <a href="mailto:press@wanbitha.com" className="block mb-8 font-medium hover:text-[#FFEC00] underline">press@wanbitha.com</a>
             <button className="border border-white rounded-full px-6 py-2 uppercase font-bold text-sm hover:bg-white hover:text-[#6200EA] transition-colors mb-8">
               Sala de Imprensa
             </button>

             <div className="flex gap-4">
                <a href="#" className="bg-[#FFEC00] text-black p-2 rounded-full hover:bg-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="bg-[#FFEC00] text-black p-2 rounded-full hover:bg-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="bg-[#FFEC00] text-black p-2 rounded-full hover:bg-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="bg-[#FFEC00] text-black p-2 rounded-full hover:bg-white transition-colors"><Linkedin size={20} /></a>
             </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-xs opacity-60 mt-12">
          <p>© {new Date().getFullYear()} WanBitha. {t.privacy} | {t.cookies}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;