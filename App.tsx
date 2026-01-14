
import React, { useState, useEffect } from 'react';

// --- CONFIGURAÇÃO DE DESIGN (CORES VIBRANTES) ---
const COLORS = {
  bg: "#080808",
  pink: "#FF007F",    // Rosa Choque (Hot Pink)
  yellow: "#FFFF00",  // Amarelo Vivo (Electric Yellow)
  white: "#FFFFFF",
  muted: "rgba(255, 255, 255, 0.1)"
};

const PHRASES = [
  "WanBitha",
  "Wanessa Alcântara",
  "Escultura de Silêncio",
  "Rosa Choque & Energia",
  "Amarelo Elétrico",
  "Espiritualidade & Arte",
  "São Paulo, Brasil"
];

// Tipos
interface AddressState {
  cep: string;
  street: string;
  city: string;
  state: string;
  number: string;
  loading: boolean;
  error: string | null;
}

interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
}

interface CartItem extends Product {
  quantity: number;
}

// Ícones minimalistas (Inline SVGs)
const Icons = {
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
  ),
  Globe: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  ArrowRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  ),
  Cart: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
  ),
  Trash: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
  ),
  Check: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  Loader: () => (
    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
  )
};

const products: Product[] = [
  { id: 'p1', name: "Vela Quartzo Rosa", price: 185, img: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=600" },
  { id: 'p2', name: "Escultura Ocre I", price: 1450, img: "https://images.unsplash.com/photo-1544413647-7959947488f2?q=80&w=600" },
  { id: 'p3', name: "Kit Curadoria Mineral", price: 580, img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600" },
  { id: 'p4', name: "Totem Energético Amarelo", price: 920, img: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&w=600" },
  { id: 'p5', name: "Perfume Sólido 'Brutal'", price: 340, img: "https://images.unsplash.com/photo-1594125350485-3bbd1bc9497e?q=80&w=600" }
];

// Componente Mandala Abstrata
const AbstractMandala = ({ color, size, duration, opacity, rotateClockwise = true }: { color: string, size: string, duration: number, opacity: number, rotateClockwise?: boolean }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className="absolute pointer-events-none"
    style={{ 
      animation: `${rotateClockwise ? 'spin' : 'spin-reverse'} ${duration}s linear infinite`,
      opacity: opacity,
      filter: 'blur(2px)'
    }}
  >
    <circle cx="50" cy="50" r="48" fill="none" stroke={color} strokeWidth="0.2" strokeDasharray="2 4" />
    <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="0.1" />
    {[...Array(12)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 50 50)`}>
        <ellipse cx="50" cy="30" rx="6" ry="18" fill="none" stroke={color} strokeWidth="0.15" />
        <rect x="49" y="5" width="2" height="10" fill={color} opacity="0.5" />
      </g>
    ))}
  </svg>
);

export default function App() {
  const [introState, setIntroState] = useState<string>('origin'); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typingText, setTypingText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Estados do Carrinho e Loja
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'idle' | 'shipping' | 'payment' | 'success'>('idle');

  // Estado de Endereço (Brasil)
  const [address, setAddress] = useState<AddressState>({
    cep: '',
    street: '',
    city: '',
    state: '',
    number: '',
    loading: false,
    error: null
  });

  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 1500));
      setIntroState('focus');
      await new Promise(r => setTimeout(r, 2000));
      setIntroState('revealing');
      await new Promise(r => setTimeout(r, 800));
      setIntroState('done');
    };
    sequence();
  }, []);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(currentPhrase.substring(0, typingText.length + 1));
        if (typingText === currentPhrase) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setTypingText(currentPhrase.substring(0, typingText.length - 1));
        if (typingText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        }
      }
    }, isDeleting ? 30 : 80);
    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, phraseIndex]);

  // Função para buscar CEP
  const handleCepSearch = async (cep: string) => {
    const cleanCep = cep.replace(/\D/g, '');
    setAddress(prev => ({ ...prev, cep: cleanCep, error: null }));
    
    if (cleanCep.length === 8) {
      setAddress(prev => ({ ...prev, loading: true }));
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await response.json();
        
        if (data.erro) {
          setAddress(prev => ({ ...prev, error: "CEP não encontrado.", loading: false }));
        } else {
          setAddress(prev => ({
            ...prev,
            street: data.logradouro,
            city: data.localidade,
            state: data.uf,
            loading: false
          }));
        }
      } catch (err) {
        setAddress(prev => ({ ...prev, error: "Erro na conexão.", loading: false }));
      }
    }
  };

  const navigateTo = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const menuItems = [
    { label: "Início", id: "home" },
    { label: "Artista", id: "artista" },
    { label: "Loja", id: "loja" },
    { label: "Arquivo", id: "obras" },
    { label: "Novidades", id: "noticias" },
    { label: "Contato", id: "contato" }
  ];

  return (
    <div className={`bg-[#080808] text-white font-sans selection:bg-[#FF007F] selection:text-white min-h-screen antialiased overflow-x-hidden`}>
      
      {/* INTRODUÇÃO REFINADA (ESTILO VOGUE FOCUS) */}
      {introState !== 'done' && (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808] transition-all duration-[1s] ease-in-out ${introState === 'revealing' ? 'opacity-0 scale-125 pointer-events-none' : 'opacity-100 scale-100'}`}>
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <AbstractMandala color={COLORS.pink} size="110vh" duration={30} opacity={0.3} rotateClockwise={true} />
            <AbstractMandala color={COLORS.yellow} size="70vh" duration={20} opacity={0.25} rotateClockwise={false} />
            <div className="absolute inset-0 bg-radial-vignette opacity-80"></div>
          </div>
          <div className="text-center relative z-10 px-6">
            <h1 className={`text-4xl md:text-8xl font-serif italic tracking-[0.25em] mb-4 font-bold transition-all duration-[2s] ${introState === 'focus' ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 blur-xl'}`}>
              <span className="text-white">Wan</span><span className="text-[#FF007F] drop-shadow-[0_0_20px_rgba(255,0,127,0.4)]">Bitha</span>
            </h1>
            <div className={`w-24 h-[1px] bg-[#FFFF00] mx-auto shadow-[0_0_15px_#FFFF00] transition-all duration-[1.5s] delay-500 ${introState === 'focus' ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
            <p className={`mt-8 text-[10px] font-mono tracking-[1em] text-[#FFFF00] uppercase italic font-bold transition-all duration-[1.5s] delay-700 ${introState === 'focus' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>A Arte como Aliada</p>
          </div>
        </div>
      )}

      {/* CARRINHO (DRAWER) */}
      <div className={`fixed inset-0 z-[5000] transition-all duration-700 ${isCartOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-700 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsCartOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/5 shadow-2xl transition-transform duration-700 ease-expo ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col p-8">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-3xl font-serif italic font-bold text-[#FF007F] tracking-tight">Minha Mala</h3>
              <button onClick={() => setIsCartOpen(false)} className="hover:text-[#FFFF00] transition-colors"><Icons.Close /></button>
            </div>

            {checkoutStep === 'success' ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="mb-6 bg-[#FFFF00]/10 p-6 rounded-full border border-[#FFFF00]/20"><Icons.Check /></div>
                <h4 className="text-3xl font-serif italic font-bold mb-4">Manifesto Concluído</h4>
                <p className="text-zinc-500 italic mb-8">Sua encomenda foi processada. A energia autorizada está a caminho do seu endereço.</p>
                <button onClick={() => {setCheckoutStep('idle'); setIsCartOpen(false); setCart([]);}} className="w-full py-4 border border-[#FFFF00] text-[#FFFF00] font-bold uppercase tracking-widest hover:bg-[#FFFF00] hover:text-black transition-all">Voltar à Loja</button>
              </div>
            ) : checkoutStep !== 'idle' ? (
              <div className="flex-1 flex flex-col">
                <div className="flex gap-4 mb-8 text-[10px] font-mono tracking-widest uppercase">
                  <span className={checkoutStep === 'shipping' ? 'text-[#FFFF00]' : 'text-zinc-600'}>01. Entrega</span>
                  <span className="text-zinc-800">/</span>
                  <span className={checkoutStep === 'payment' ? 'text-[#FFFF00]' : 'text-zinc-600'}>02. Pagamento</span>
                </div>
                
                <form className="space-y-6 flex-1 overflow-y-auto pr-2" onSubmit={(e) => e.preventDefault()}>
                  {checkoutStep === 'shipping' && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="border-b border-white/5 pb-2 text-right relative">
                        <label className="text-[9px] font-mono text-zinc-500 block uppercase mb-1">CEP</label>
                        <div className="flex flex-row-reverse items-center gap-2">
                           <input 
                            className="bg-transparent w-full text-white text-right outline-none font-serif italic text-lg" 
                            placeholder="00000-000" 
                            value={address.cep}
                            maxLength={8}
                            onChange={(e) => handleCepSearch(e.target.value)}
                          />
                          {address.loading && <span className="text-[#FFFF00]"><Icons.Loader /></span>}
                        </div>
                        {address.error && <p className="text-[9px] text-red-500 mt-1 uppercase font-bold">{address.error}</p>}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="border-b border-white/5 pb-2 text-right">
                          <label className="text-[9px] font-mono text-zinc-500 block uppercase mb-1">Nº</label>
                          <input 
                            className="bg-transparent w-full text-white text-right outline-none font-serif italic text-lg" 
                            placeholder="123" 
                            value={address.number}
                            onChange={(e) => setAddress({...address, number: e.target.value})}
                          />
                        </div>
                        <div className="border-b border-white/5 pb-2 text-right col-span-2">
                          <label className="text-[9px] font-mono text-zinc-500 block uppercase mb-1">Endereço</label>
                          <input 
                            className="bg-transparent w-full text-white text-right outline-none font-serif italic text-lg" 
                            placeholder="Aguardando CEP..." 
                            value={address.street}
                            onChange={(e) => setAddress({...address, street: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="border-b border-white/5 pb-2 text-right">
                        <label className="text-[9px] font-mono text-zinc-500 block uppercase mb-1">Cidade / UF</label>
                        <input 
                          className="bg-transparent w-full text-white text-right outline-none font-serif italic text-lg" 
                          placeholder="Cidade - UF" 
                          value={address.city && address.state ? `${address.city} - ${address.state}` : ''}
                          readOnly
                        />
                      </div>
                    </div>
                  )}
                  {checkoutStep === 'payment' && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="border-b border-white/5 pb-2 text-right">
                        <label className="text-[9px] font-mono text-zinc-500 block uppercase mb-1">Forma de Pagamento</label>
                        <select className="bg-transparent w-full text-white text-right outline-none font-serif italic text-lg appearance-none cursor-pointer">
                          <option className="bg-black">Cartão de Crédito</option>
                          <option className="bg-black">PIX (5% desc.)</option>
                          <option className="bg-black">Boleto Bancário</option>
                        </select>
                      </div>
                      <div className="border-b border-white/5 pb-2 text-right">
                        <label className="text-[9px] font-mono text-zinc-500 block uppercase mb-1">CPF do Titular</label>
                        <input className="bg-transparent w-full text-white text-right outline-none font-serif italic text-lg" placeholder="000.000.000-00" />
                      </div>
                    </div>
                  )}
                </form>

                <div className="pt-8 border-t border-white/5 mt-auto">
                   <div className="flex justify-between items-end mb-6">
                      <span className="text-zinc-500 italic">Total</span>
                      <span className="text-2xl font-serif text-[#FFFF00]">R$ {cartTotal.toLocaleString('pt-BR')}</span>
                   </div>
                   <div className="flex gap-4">
                      <button onClick={() => setCheckoutStep(checkoutStep === 'payment' ? 'shipping' : 'idle')} className="px-6 py-4 border border-zinc-900 text-zinc-600 uppercase text-[10px] font-bold tracking-widest hover:text-white transition-all">Voltar</button>
                      <button 
                        onClick={() => setCheckoutStep(checkoutStep === 'shipping' ? 'payment' : 'success')} 
                        disabled={checkoutStep === 'shipping' && !address.city}
                        className={`flex-1 py-4 bg-[#FF007F] text-white font-bold uppercase tracking-widest transition-all ${(!address.city && checkoutStep === 'shipping') ? 'opacity-50 grayscale cursor-not-allowed' : 'hover:shadow-[0_0_20px_#FF007F]'}`}
                      >
                        {checkoutStep === 'shipping' ? 'Próximo' : 'Concluir'}
                      </button>
                   </div>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
                <Icons.Cart />
                <p className="mt-4 italic font-serif text-right">Nada por aqui ainda...</p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 group flex-row-reverse text-right">
                      <div className="w-20 h-24 bg-zinc-900 border border-white/5 overflow-hidden flex-shrink-0">
                        <img src={item.img} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all" />
                      </div>
                      <div className="flex-1 flex-col justify-between py-1 flex">
                        <div>
                          <h4 className="font-serif italic font-bold text-lg leading-tight">{item.name}</h4>
                          <p className="text-[10px] font-mono text-[#FFFF00] font-bold">Unidades: {item.quantity}</p>
                        </div>
                        <div className="flex justify-between items-end flex-row-reverse">
                          <span className="font-serif text-[#FF007F] font-bold">R$ {(item.price * item.quantity).toLocaleString('pt-BR')}</span>
                          <button onClick={() => removeFromCart(item.id)} className="text-zinc-600 hover:text-red-500 transition-colors"><Icons.Trash /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-white/5 mt-6">
                  <div className="flex justify-between items-end mb-6">
                    <span className="text-zinc-500 italic">Subtotal</span>
                    <span className="text-3xl font-serif font-bold text-[#FFFF00]">R$ {cartTotal.toLocaleString('pt-BR')}</span>
                  </div>
                  <button onClick={() => setCheckoutStep('shipping')} className="w-full py-5 bg-[#FF007F] text-white font-bold uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(255,0,127,0.4)] transition-all">Finalizar Pedido</button>
                  <p className="text-[9px] text-center mt-4 text-zinc-600 uppercase tracking-widest">Enviamos para todo o Brasil via transportadora premium</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MENU FULLSCREEN (EDITORIAL STYLE) */}
      <div className={`fixed inset-0 z-[4000] transition-all duration-1000 ease-expo ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-black/95 backdrop-blur-3xl transition-transform duration-[1.2s] ease-expo ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} />
        <div className="relative h-full flex flex-col py-24 px-6 md:px-24 max-w-7xl mx-auto overflow-y-auto">
          <nav className="my-auto flex flex-col items-end gap-2 md:gap-4 pr-16 md:pr-0">
            {menuItems.map((item, idx) => (
              <button 
                key={item.id} 
                onClick={() => navigateTo(item.id)} 
                className={`text-[clamp(1.5rem,7vw,5.5rem)] font-serif tracking-tighter leading-[0.95] transition-all duration-700 text-right group ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} 
                style={{ transitionDelay: `${200 + (idx * 100)}ms`, color: idx % 2 === 0 ? COLORS.pink : COLORS.yellow }}
              >
                <span className="inline-block group-hover:translate-x-[-20px] group-hover:text-white transition-all group-hover:italic break-words max-w-[80vw]">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* BARRA LATERAL FIXA (ULTRA MINIMAL) */}
      <aside className="fixed left-0 top-0 h-full w-[60px] md:w-[140px] flex flex-col items-center justify-center z-[4500] border-r border-white/5 bg-[#080808]">
        <div className="h-full flex flex-col items-center justify-between py-8 md:py-12">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center border border-white/10 rounded-full hover:bg-[#FF007F] hover:text-white hover:border-[#FF007F] hover:shadow-[0_0_20px_rgba(255,0,127,0.4)] transition-all duration-500 bg-transparent">
            {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
          </button>
          
          <div className="relative h-[30vh] flex flex-col items-center justify-center gap-12">
             <button onClick={() => setIsCartOpen(true)} className="relative group p-4 border border-white/5 rounded-full hover:border-[#FFFF00] transition-colors">
                <div style={{ color: cartCount > 0 ? COLORS.yellow : 'white' }}>
                  <Icons.Cart />
                </div>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF007F] text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold text-white shadow-lg animate-pulse">{cartCount}</span>
                )}
             </button>

             <h2 className="text-[2vh] md:text-[3.5vh] font-serif vertical-text select-none tracking-[0.2em] opacity-80 italic font-bold whitespace-nowrap" style={{ color: COLORS.pink }}>
                {typingText}<span className="inline-block w-[2px] h-4 md:h-6 bg-[#FFFF00] ml-2 animate-pulse shadow-[0_0_8px_#FFFF00]" />
             </h2>
          </div>

          <div className="text-[10px] md:text-[11px] font-mono tracking-widest text-white/20 uppercase italic vertical-text">WanBitha &copy; 2026</div>
        </div>
      </aside>

      {/* RENDERIZADOR DE PÁGINAS */}
      <main className="ml-[60px] md:ml-[140px] relative w-[calc(100%-60px)] md:w-[calc(100%-140px)] text-right">
        
        {/* PÁGINA: HOME */}
        {activeSection === 'home' && (
          <section className="animate-fadeIn relative">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1600" alt="WanBitha Art" className="w-full h-full object-cover opacity-40 scale-105 blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/40"></div>
            </div>
            <div className="min-h-screen flex flex-col justify-center items-end px-6 md:px-28 py-20 relative z-10 overflow-hidden">
              <header className="mb-8 md:mb-12 flex items-center justify-end gap-4 opacity-80 w-full relative z-10">
                <span className="text-[9px] md:text-[10px] font-mono tracking-[0.5em] uppercase italic font-bold" style={{ color: COLORS.yellow }}>São Paulo // Rio // Brasil</span>
                <div style={{ color: COLORS.yellow }}><Icons.Globe /></div>
              </header>
              <h2 className="text-[clamp(3.5rem,14vw,11rem)] font-serif leading-[0.8] mb-8 md:mb-12 tracking-[-0.04em] break-words">
                <span className="text-white block font-black">Wanessa</span>
                <span className="italic block mr-[0.2em] md:mr-[0.5em] drop-shadow-[0_0_30px_rgba(255,0,127,0.2)] font-light" style={{ color: COLORS.pink }}>Alcântara</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 pt-10 md:pt-16 border-t border-white/5 w-full">
                <div className="hidden md:block"></div>
                <div className="flex flex-col items-end">
                  <p className="text-zinc-200 text-lg md:text-2xl leading-relaxed font-light italic max-w-lg mb-10">A Arte como Aliada. Uma jornada de 48 anos explorando a vibração mineral e a luz brasileira.</p>
                  <button onClick={() => navigateTo('loja')} className="group flex items-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] text-[#FFFF00]">Ver Coleção <span className="p-3 md:p-4 border border-[#FFFF00]/30 rounded-full group-hover:bg-[#FFFF00] group-hover:text-black transition-all group-hover:shadow-[0_0_20px_rgba(255,255,0,0.3)]"><Icons.ArrowRight /></span></button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PÁGINA: ARTISTA (EDITORIAL BIO) */}
        {activeSection === 'artista' && (
          <section className="py-24 md:py-40 px-6 md:px-28 animate-fadeIn flex flex-col items-end min-h-screen relative">
            <div className="absolute top-0 right-0 w-1/2 h-screen opacity-10 pointer-events-none z-0">
               <AbstractMandala color={COLORS.pink} size="100%" duration={60} opacity={0.5} />
            </div>

            <header className="w-full flex flex-col items-end mb-16 md:mb-32 relative z-10">
              <h2 className="text-[clamp(3rem,8vw,6rem)] font-serif leading-none text-[#FF007F] font-bold tracking-tight">O Manifesto</h2>
              <p className="text-zinc-500 italic mt-4 text-xl">WanBitha, uma voz mineral na metrópole.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full relative z-10">
              <div className="md:col-span-5 flex flex-col items-end">
                <div className="aspect-[3/4] w-full bg-zinc-900 border border-white/5 overflow-hidden shadow-2xl grayscale brightness-75 hover:grayscale-0 transition-all duration-1000">
                  <img src="https://images.unsplash.com/photo-1544413647-7959947488f2?q=80&w=800" alt="WanBitha Artista" className="w-full h-full object-cover" />
                </div>
                <p className="mt-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest italic">Retrato Editorial, São Paulo — 2025</p>
              </div>

              <div className="md:col-span-7 flex flex-col items-end text-right space-y-10">
                <div className="max-w-2xl">
                  <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-zinc-200">
                    <span className="text-6xl md:text-8xl text-[#FF007F] font-serif float-right -mt-2 ml-4 mb-2 leading-none">A</span>
                    artista visual WanBitha transcende a categorização tradicional. Nascida sob a luz vibrante do Brasil, seu trabalho investiga a tensão entre a rigidez mineral e a fluidez espiritual.
                  </p>
                </div>

                <div className="max-w-xl space-y-8">
                  <p className="text-xl md:text-2xl font-light italic text-white/80 border-r-2 border-[#FFFF00] pr-6">
                    Seu processo criativo envolve a desconstrução de elementos brutos, reconfigurando-os em totens que parecem respirar.
                  </p>
                  
                  <p className="text-lg md:text-xl text-zinc-400 font-serif leading-loose italic">
                    Ao longo de quase cinco décadas de produção, a artista consolidou um vocabulário onde o Rosa Choque não é apenas uma cor, mas uma frequência de resistência e cura.
                  </p>

                  <div className="pt-10">
                    <button onClick={() => navigateTo('contato')} className="border border-white/20 px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">Solicitar Portfólio PDF</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PÁGINA: LOJA VIRTUAL */}
        {activeSection === 'loja' && (
          <section className="py-24 md:py-40 px-6 md:px-28 animate-fadeIn flex flex-col items-end">
            <header className="w-full flex flex-col items-end mb-16 md:mb-32">
              <h2 className="text-[clamp(3rem,10vw,8rem)] font-serif italic mb-6 text-[#FF007F] font-bold tracking-tight">Acervo</h2>
              <p className="text-zinc-500 italic max-w-md">Curadoria de objetos energéticos e peças autorais produzidas em tiragem limitada para colecionadores no Brasil.</p>
            </header>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 w-full">
              {products.map((p) => (
                <div key={p.id} className="group flex flex-col items-end">
                  <div className="aspect-[3/4] overflow-hidden mb-6 relative w-full border border-white/5 bg-zinc-900">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                       <button onClick={() => addToCart(p)} className="bg-[#FFFF00] text-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest shadow-2xl hover:scale-110 active:scale-95 transition-transform">Adicionar à Mala</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <h4 className="font-serif text-2xl italic font-bold group-hover:text-[#FF007F] transition-colors">{p.name}</h4>
                    <p className="font-mono text-[11px] text-[#FFFF00] mt-2 tracking-widest uppercase font-bold">R$ {p.price.toLocaleString('pt-BR')}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner de Newsletter */}
            <div className="mt-32 w-full p-12 md:p-24 border border-white/5 bg-gradient-to-br from-[#0a0a0a] to-[#080808] flex flex-col items-center text-center relative overflow-hidden">
               <AbstractMandala color={COLORS.pink} size="400px" duration={40} opacity={0.05} />
               <h3 className="text-3xl md:text-5xl font-serif italic font-bold mb-8 relative z-10 text-white">O Manifesto no seu E-mail</h3>
               <p className="text-zinc-500 italic mb-10 max-w-md relative z-10">Seja notificado sobre novos lançamentos e edições de colecionador.</p>
               <div className="flex w-full max-w-md border-b border-[#FFFF00]/30 focus-within:border-[#FFFF00] transition-colors relative z-10 flex-row-reverse">
                  <button className="text-[#FFFF00] font-mono text-[10px] uppercase tracking-widest font-bold px-4">Cadastrar</button>
                  <input type="email" placeholder="seu@email.com.br" className="bg-transparent flex-1 py-4 px-2 outline-none italic font-serif text-right text-white" />
               </div>
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="py-20 px-6 md:px-28 border-t border-white/10 text-right w-full">
           <div className="grid md:grid-cols-3 gap-12 mb-20 items-start">
              <div className="flex flex-col items-end">
                 <h5 className="text-[#FFFF00] font-mono text-[10px] uppercase tracking-widest mb-6 font-bold">Base Nacional</h5>
                 <p className="italic text-zinc-500">São Paulo, SP<br/>Brasil</p>
              </div>
              <div className="flex flex-col items-end">
                 <h5 className="text-[#FFFF00] font-mono text-[10px] uppercase tracking-widest mb-6 font-bold">Conexão</h5>
                 <div className="space-y-2 italic text-zinc-500">
                    <p className="hover:text-white transition-colors cursor-pointer">Instagram</p>
                    <p className="hover:text-white transition-colors cursor-pointer">WhatsApp Concierge</p>
                 </div>
              </div>
              <div className="flex flex-col items-end">
                 <h5 className="text-[#FF007F] font-mono text-[10px] uppercase tracking-widest mb-6 font-bold">WanBitha Brasil</h5>
                 <p className="italic text-zinc-500">Transformando a matéria bruta em conexão espiritual desde 1978.</p>
              </div>
           </div>
           <p className="text-[10px] font-mono tracking-[0.5em] text-white/40 uppercase italic font-bold">
            WanBitha <span className="text-[#FF007F]">&copy;</span> 2026 <span className="mx-2 text-white/10">|</span> São Paulo <span className="mx-2 text-white/10">|</span> <span className="text-[#FFFF00]">Luz & Vibração</span>
           </p>
        </footer>
      </main>

      <style>{`
        .bg-radial-vignette {
          background: radial-gradient(circle, transparent 0%, #080808 90%);
        }
        .ease-expo { transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1); }
        .animate-fadeIn { animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        input::placeholder { opacity: 0.3; text-align: right; }
        select { background-image: none; }
      `}</style>
    </div>
  );
}
