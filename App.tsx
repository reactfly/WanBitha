
import React, { useState, useEffect } from 'react';

const COLORS = {
  bg: "#050505",
  pink: "#FF007F",
  yellow: "#FFFF00",
  white: "#FFFFFF",
};

const PHRASES = [
  "Wan Bit'ha",
  "Wanessa Alcântara",
  "Arte como Aliada",
  "Rosa Choque & Luz",
  "Espiritualidade",
  "Amor Condutor",
  "São Paulo // Brasil"
];

// Icons
const Icons = {
  Menu: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="4" y1="8" x2="20" y2="8"/><line x1="10" y1="16" x2="20" y2="16"/></svg>,
  Close: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="18" x2="18" y2="18"/></svg>,
  Cart: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  Arrow: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
};

const products = [
  { id: '1', name: "Vela Quartzo Rosa", price: 185, img: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=600" },
  { id: '2', name: "Escultura Ocre I", price: 1450, img: "https://images.unsplash.com/photo-1544413647-7959947488f2?q=80&w=600" },
  { id: '3', name: "Totem Energético", price: 920, img: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&w=600" }
];

export default function App() {
  const [introState, setIntroState] = useState('focus');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIntroState('done'), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(currentPhrase.substring(0, typingText.length + 1));
        if (typingText === currentPhrase) setTimeout(() => setIsDeleting(true), 3000);
      } else {
        setTypingText(currentPhrase.substring(0, typingText.length - 1));
        if (typingText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        }
      }
    }, isDeleting ? 40 : 100);
    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, phraseIndex]);

  const navigateTo = (sec) => {
    setActiveSection(sec);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      
      {/* Intro Cinematográfica */}
      {introState !== 'done' && (
        <div className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center transition-all duration-1000 ${introState === 'done' ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}>
          <h1 className="text-4xl md:text-8xl font-serif italic tracking-[0.3em] font-bold animate-pulse text-white mb-4">
            Wan Bit'ha
          </h1>
          <div className="w-24 h-[1px] bg-[#FFFF00] shadow-[0_0_15px_#FFFF00]"></div>
          <p className="mt-8 text-[10px] font-mono tracking-[1em] text-[#FFFF00] uppercase font-bold">Arte como Aliada</p>
        </div>
      )}

      {/* Menu Fullscreen */}
      <div className={`fixed inset-0 z-[5000] bg-black/95 backdrop-blur-3xl transition-all duration-1000 ease-expo ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col items-end justify-center px-12 md:px-32 gap-6">
          {['home', 'artista', 'loja', 'contato'].map((item, idx) => (
            <button 
              key={item} 
              onClick={() => navigateTo(item)}
              className="text-5xl md:text-8xl font-serif italic hover:text-[#FF007F] transition-all hover:-translate-x-10 text-right capitalize font-black tracking-tighter"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item === 'artista' ? 'Manifesto' : item}
            </button>
          ))}
          <button onClick={() => setIsMenuOpen(false)} className="mt-12 p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
            <Icons.Close />
          </button>
        </div>
      </div>

      {/* Navegação Lateral */}
      <aside className="fixed left-0 top-0 h-full w-[60px] md:w-[120px] z-[4000] border-r border-white/5 flex flex-col items-center justify-between py-12 bg-[#050505]/80 backdrop-blur-md">
        <button onClick={() => setIsMenuOpen(true)} className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-[#FF007F] transition-all">
          <Icons.Menu />
        </button>
        <h2 className="vertical-text font-serif italic text-2xl md:text-4xl text-[#FF007F] font-black tracking-tighter opacity-80 h-[40vh] select-none">
          {typingText}<span className="inline-block w-[2px] h-6 bg-[#FFFF00] ml-2 animate-pulse" />
        </h2>
        <div className="flex flex-col items-center gap-8">
          <button onClick={() => navigateTo('loja')} className="relative p-3 border border-white/5 rounded-full hover:border-[#FFFF00] transition-colors">
            <Icons.Cart />
            {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-[#FF007F] text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>}
          </button>
          <div className="text-[10px] font-mono tracking-widest text-zinc-600 vertical-text uppercase italic">WanBitha &copy; 2026</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[60px] md:ml-[120px] transition-all duration-700">
        
        {/* SECTION: HOME */}
        {activeSection === 'home' && (
          <section className="relative min-h-screen flex flex-col justify-center items-end px-8 md:px-32 overflow-hidden">
            {/* Imagem de Fundo Imersiva com Transparência de Mistura */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1600" 
                className="w-full h-full object-cover opacity-50 blur-[2px] scale-110" 
                style={{ mixBlendMode: 'screen' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40"></div>
            </div>

            <div className="relative z-10 text-right max-w-4xl">
              <span className="text-[10px] font-mono tracking-[0.8em] text-[#FFFF00] uppercase font-bold mb-4 block">São Paulo // Brasil</span>
              <h1 className="text-[clamp(4rem,15vw,12rem)] font-serif leading-[0.75] mb-12 tracking-[-0.05em] font-black">
                <span className="block text-white drop-shadow-2xl">Wanessa</span>
                <span className="block text-[#FF007F] italic font-light drop-shadow-[0_0_30px_rgba(255,0,127,0.3)]">Alcântara</span>
              </h1>
              <div className="border-t border-white/10 pt-12 flex flex-col items-end">
                <p className="text-xl md:text-3xl font-serif italic text-zinc-300 max-w-xl mb-12 leading-relaxed">
                  "Me construo tendo a Arte como Aliada."
                </p>
                <button onClick={() => navigateTo('artista')} className="group flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.5em] text-[#FFFF00]">
                  Explorar Manifesto <span className="p-4 border border-[#FFFF00]/30 rounded-full group-hover:bg-[#FFFF00] group-hover:text-black transition-all"><Icons.Arrow /></span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* SECTION: ARTISTA (EDITORIAL BIO) */}
        {activeSection === 'artista' && (
          <section className="py-32 md:py-48 px-8 md:px-32 animate-fadeIn flex flex-col items-end">
            <header className="mb-24 text-right">
              <h2 className="text-6xl md:text-9xl font-serif italic text-[#FF007F] font-black tracking-tighter leading-none">Wan Bit'ha</h2>
              <p className="text-2xl text-zinc-500 font-serif italic mt-4">Wanessa Alcântara</p>
            </header>

            <div className="grid md:grid-cols-12 gap-16 w-full">
              <div className="md:col-span-5">
                <div className="aspect-[3/4] bg-zinc-900 overflow-hidden shadow-2xl grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 border border-white/5">
                  <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800" className="w-full h-full object-cover" />
                </div>
                <p className="mt-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest italic text-right">Atelier de Criação — 2026</p>
              </div>

              <div className="md:col-span-7 flex flex-col items-end space-y-12">
                <div className="max-w-2xl text-right">
                  <p className="text-3xl md:text-5xl font-serif italic leading-[1.1] text-zinc-100 mb-12">
                    <span className="text-8xl md:text-[10rem] text-[#FF007F] float-right ml-6 -mt-4 leading-none select-none font-black">A</span>
                    rtista desde menina. Em alguns momentos desses 48 anos pintei, bordei e decorei...
                  </p>
                  <p className="text-xl md:text-2xl font-serif italic text-zinc-400 leading-relaxed mb-8">
                    Em outros momentos mudei a forma de ver e pensar a vida e minha arte também!
                  </p>
                </div>

                <div className="max-w-xl space-y-10 text-right border-r-4 border-[#FFFF00] pr-8">
                  <p className="text-2xl md:text-3xl font-serif italic font-bold text-white">
                    Me construo tendo a <span className="text-[#FFFF00]">Arte como Aliada</span>.
                  </p>
                  <p className="text-lg text-zinc-500 font-sans italic leading-relaxed">
                    A espiritualidade como ferramenta de lapidação da vida. E o Amor como força condutora para sempre... 
                  </p>
                  <div className="pt-8">
                    <p className="text-3xl font-serif italic text-[#FF007F] font-black">Sejam bem vindas(es) (os)!!!</p>
                    <p className="text-zinc-500 italic mt-2">Assim apresento aqui um pouco do que sou!</p>
                  </div>
                </div>

                <div className="pt-16 w-full flex justify-end">
                  <button onClick={() => navigateTo('loja')} className="group flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.5em] text-[#FFFF00]">
                    Ver Coleção de Obras <Icons.Arrow />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION: LOJA (BOUTIQUE) */}
        {activeSection === 'loja' && (
          <section className="py-32 px-8 md:px-32 animate-fadeIn flex flex-col items-end">
            <header className="mb-24 text-right">
              <h2 className="text-6xl md:text-8xl font-serif italic text-[#FF007F] font-black tracking-tighter leading-none">Acervo</h2>
              <p className="text-zinc-500 italic mt-4 max-w-md ml-auto">Peças energéticas e curadoria autoral para colecionadores de alma.</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
              {products.map(p => (
                <div key={p.id} className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden mb-6 border border-white/5 bg-zinc-900 relative">
                    <img src={p.img} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <button className="bg-[#FFFF00] text-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">Desejar Peça</button>
                    </div>
                  </div>
                  <div className="text-right">
                    <h4 className="text-2xl font-serif italic font-bold group-hover:text-[#FF007F] transition-colors">{p.name}</h4>
                    <p className="text-[#FFFF00] font-mono text-xs mt-2 uppercase tracking-widest font-bold">R$ {p.price.toLocaleString('pt-BR')}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FOOTER EDITORIAL */}
        <footer className="py-24 px-8 md:px-32 border-t border-white/5 bg-[#030303] text-right">
          <div className="grid md:grid-cols-3 gap-16 mb-24 items-start">
            <div className="space-y-4">
              <h5 className="text-[#FFFF00] font-mono text-[10px] uppercase tracking-[0.5em] font-bold">Localização</h5>
              <p className="font-serif italic text-zinc-500">São Paulo, Brasil<br/>Atelier Aberto</p>
            </div>
            <div className="space-y-4">
              <h5 className="text-[#FFFF00] font-mono text-[10px] uppercase tracking-[0.5em] font-bold">Conexão</h5>
              <p className="font-serif italic text-zinc-500 hover:text-[#FF007F] cursor-pointer transition-colors">@wanbitha_art</p>
              <p className="font-serif italic text-zinc-500 hover:text-[#FF007F] cursor-pointer transition-colors">WhatsApp Concierge</p>
            </div>
            <div className="space-y-4">
              <h5 className="text-[#FF007F] font-mono text-[10px] uppercase tracking-[0.5em] font-bold">Filosofia</h5>
              <p className="font-serif italic text-zinc-500 leading-relaxed">Transformando a matéria mineral em luz e amor desde 1978.</p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row-reverse justify-between items-center gap-6">
            <p className="text-[10px] font-mono tracking-[0.5em] text-zinc-600 uppercase italic">
              Wan Bit'ha <span className="text-[#FF007F]">&copy;</span> 2026 // <span className="text-[#FFFF00]">Arte como Aliada</span>
            </p>
            <p className="text-[9px] text-zinc-800 uppercase tracking-widest font-bold">Digital Presence by Editorial Design</p>
          </div>
        </footer>
      </main>

      <style>{`
        .animate-fadeIn { animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .vertical-text { writing-mode: vertical-rl; text-orientation: mixed; }
      `}</style>
    </div>
  );
}
