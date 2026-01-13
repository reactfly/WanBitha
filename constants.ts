
import { Translations, Work, Exhibition, NewsItem } from './types';

export const TEXTS: Translations = {
  pt: {
    nav: {
      works: 'OBRAS',
      exhibitions: 'EXPOSIÇÕES',
      artist: 'ARTISTA',
      studio: 'ESTÚDIO',
      news: 'NOTÍCIAS',
      contact: 'CONTATO',
    },
    hero: {
      cta: 'EXPLORAR ACERVO',
    },
    works: {
      title: 'ACERVO DISPONÍVEL',
      filters: {
        all: 'TODAS AS OBRAS',
        painting: 'PINTURA',
        sculpture: 'ESCULTURA',
        installation: 'INSTALAÇÃO',
      },
      details: {
        technique: 'Técnica e Materiais',
        year: 'Ano de Criação',
        dimensions: 'Dimensões Reais',
        back: 'Retornar à Galeria',
      },
    },
    exhibitions: {
      title: 'HISTÓRICO EXPOSITIVO',
      current: 'EM EXIBIÇÃO',
      past: 'ARQUIVO HISTÓRICO',
    },
    artist: {
      title: 'WANBIT\'HA',
      bioTitle: 'A Trajetória',
      statementTitle: 'Manifesto Artístico',
    },
    studio: {
      title: 'O ATELIER',
      visitInfo: 'Visitas exclusivas mediante agendamento prévio. Um espaço de experimentação imersiva em Goiânia.',
    },
    news: {
      title: 'PRESS & MEDIA',
      subscribe: 'Newsletter Exclusiva',
      emailPlaceholder: 'Seu melhor e-mail',
      submit: 'INSCREVER',
    },
    footer: {
      privacy: 'Privacidade',
      cookies: 'Cookies',
      sitemap: 'Mapa',
      general: 'Geral',
      sales: 'Vendas/Inquéritos',
      press: 'Imprensa',
    },
  },
  en: {
    nav: {
      works: 'WORKS',
      exhibitions: 'EXHIBITIONS',
      artist: 'ARTIST',
      studio: 'STUDIO',
      news: 'NEWS',
      contact: 'CONTACT',
    },
    hero: {
      cta: 'EXPLORE COLLECTION',
    },
    works: {
      title: 'AVAILABLE WORKS',
      filters: {
        all: 'ALL WORKS',
        painting: 'PAINTING',
        sculpture: 'SCULPTURE',
        installation: 'INSTALLATION',
      },
      details: {
        technique: 'Medium & Materials',
        year: 'Year',
        dimensions: 'Dimensions',
        back: 'Back to Gallery',
      },
    },
    exhibitions: {
      title: 'EXHIBITION HISTORY',
      current: 'NOW SHOWING',
      past: 'ARCHIVE',
    },
    artist: {
      title: 'WANBIT\'HA',
      bioTitle: 'The Journey',
      statementTitle: 'Artist Statement',
    },
    studio: {
      title: 'THE STUDIO',
      visitInfo: 'Exclusive visits by appointment only. An immersive experimental space in Goiânia, Brazil.',
    },
    news: {
      title: 'PRESS & MEDIA',
      subscribe: 'Join Private List',
      emailPlaceholder: 'Your email address',
      submit: 'SUBSCRIBE',
    },
    footer: {
      privacy: 'Privacy',
      cookies: 'Cookies',
      sitemap: 'Sitemap',
      general: 'General',
      sales: 'Sales/Inquiries',
      press: 'Press',
    },
  },
};

export const WORKS: Work[] = [
  {
    id: '1',
    title: 'Neon Silence',
    description: 'Uma investigação sobre a solidão urbana através de fluxos de luz e texturas abrasivas.',
    technique: 'Acrílica e Neon sobre Lona de Caminhão',
    year: 2023,
    dimensions: '210 x 160 cm',
    category: 'painting',
    imageUrl: 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'Anatomia do Caos I',
    description: 'Formas escultóricas derivadas de resíduos industriais reconfigurados em fluxos orgânicos.',
    technique: 'Aço Carbono e Resina Translúcida',
    year: 2024,
    dimensions: '180 x 120 x 90 cm',
    category: 'sculpture',
    imageUrl: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    title: 'O Vazio Ocupado',
    description: 'Instalação imersiva que desafia a percepção espacial do espectador através de reflexos infinitos.',
    technique: 'Instalação de Mídia Mista',
    year: 2024,
    dimensions: 'Dimensões Variáveis',
    category: 'installation',
    imageUrl: 'https://images.pexels.com/photos/1545505/pexels-photo-1545505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    title: 'Eco Cromático',
    description: 'Camadas vibrantes de cor representando a frequência invisível das cidades.',
    technique: 'Óleo sobre Linho Belga',
    year: 2022,
    dimensions: '190 x 190 cm',
    category: 'painting',
    imageUrl: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'e1',
    title: 'Sombras Luminosas',
    location: 'MAM - Museu de Arte Moderna, Rio de Janeiro',
    date: 'Out 2024 - Jan 2025',
    description: 'Uma retrospectiva abrangente focada no uso da luz como matéria-prima.',
    imageUrl: 'https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isCurrent: true,
  },
  {
    id: 'e2',
    title: 'Fragmentos do Tempo',
    location: 'Tate Modern, London',
    date: 'Mar 2023 - Jun 2023',
    description: 'Exposição coletiva explorando a escultura contemporânea global.',
    imageUrl: 'https://images.pexels.com/photos/2372977/pexels-photo-2372977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isCurrent: false,
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'WanBitha em Destaque na ArtReview',
    date: '12 Nov, 2024',
    summary: 'Uma entrevista profunda sobre a nova série "Neon Silence" e o impacto do brutalismo goiano em sua obra.',
  },
];
