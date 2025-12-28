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
      cta: 'EXPLORAR OBRAS',
    },
    works: {
      title: 'ACERVO',
      filters: {
        all: 'TODAS',
        painting: 'PINTURA',
        sculpture: 'ESCULTURA',
        installation: 'INSTALAÇÃO',
      },
      details: {
        technique: 'Técnica',
        year: 'Ano',
        dimensions: 'Dimensões',
        back: 'Voltar para Galeria',
      },
    },
    exhibitions: {
      title: 'EXPOSIÇÕES',
      current: 'EM DESTAQUE',
      past: 'ARQUIVO',
    },
    artist: {
      title: 'A ARTISTA',
      bioTitle: 'Biografia',
      statementTitle: 'Declaração',
    },
    studio: {
      title: 'O ESTÚDIO',
      visitInfo: 'Visitas mediante agendamento prévio. Entre em contato para experiências imersivas.',
    },
    news: {
      title: 'NOVIDADES',
      subscribe: 'Assine nossa Newsletter',
      emailPlaceholder: 'Seu e-mail',
      submit: 'INSCREVER',
    },
    footer: {
      privacy: 'Política de Privacidade',
      cookies: 'Cookies',
      sitemap: 'Mapa do Site',
      general: 'Geral',
      sales: 'Vendas',
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
      cta: 'EXPLORE WORKS',
    },
    works: {
      title: 'COLLECTION',
      filters: {
        all: 'ALL',
        painting: 'PAINTING',
        sculpture: 'SCULPTURE',
        installation: 'INSTALLATION',
      },
      details: {
        technique: 'Technique',
        year: 'Year',
        dimensions: 'Dimensions',
        back: 'Back to Gallery',
      },
    },
    exhibitions: {
      title: 'EXHIBITIONS',
      current: 'FEATURED',
      past: 'ARCHIVE',
    },
    artist: {
      title: 'THE ARTIST',
      bioTitle: 'Biography',
      statementTitle: 'Statement',
    },
    studio: {
      title: 'THE STUDIO',
      visitInfo: 'Visits by appointment only. Contact us for immersive experiences.',
    },
    news: {
      title: 'LATEST NEWS',
      subscribe: 'Subscribe to Newsletter',
      emailPlaceholder: 'Your email',
      submit: 'SUBSCRIBE',
    },
    footer: {
      privacy: 'Privacy Policy',
      cookies: 'Cookies',
      sitemap: 'Sitemap',
      general: 'General',
      sales: 'Sales',
      press: 'Press',
    },
  },
};

export const WORKS: Work[] = [
  {
    id: '1',
    title: 'Neon Silence',
    description: 'An exploration of urban solitude through light and texture.',
    technique: 'Acrylic and Neon on Canvas',
    year: 2023,
    dimensions: '200 x 150 cm',
    category: 'painting',
    imageUrl: 'https://picsum.photos/800/1000?random=1',
  },
  {
    id: '2',
    title: 'Organic Matter I',
    description: 'Sculptural forms derived from reclaimed natural wood.',
    technique: 'Wood and Resin',
    year: 2022,
    dimensions: '120 x 120 x 80 cm',
    category: 'sculpture',
    imageUrl: 'https://picsum.photos/800/800?random=2',
  },
  {
    id: '3',
    title: 'The Void',
    description: 'Immersive room installation challenging spatial perception.',
    technique: 'Mixed Media Installation',
    year: 2024,
    dimensions: 'Variable dimensions',
    category: 'installation',
    imageUrl: 'https://picsum.photos/1200/800?random=3',
  },
  {
    id: '4',
    title: 'Chromatic Echo',
    description: 'Vibrant layers of color representing sound waves.',
    technique: 'Oil on Linen',
    year: 2021,
    dimensions: '180 x 180 cm',
    category: 'painting',
    imageUrl: 'https://picsum.photos/800/1000?random=4',
  },
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'e1',
    title: 'Luminous Shadows',
    location: 'MAM - Museu de Arte Moderna, Rio de Janeiro',
    date: 'Oct 2024 - Jan 2025',
    description: 'A comprehensive retrospective of light-based works.',
    imageUrl: 'https://picsum.photos/1200/600?random=10',
    isCurrent: true,
  },
  {
    id: 'e2',
    title: 'Fragments of Time',
    location: 'Tate Modern, London',
    date: 'Mar 2023 - Jun 2023',
    description: 'Group exhibition focusing on contemporary sculpture.',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    isCurrent: false,
  },
  {
    id: 'e3',
    title: 'Raw Earth',
    location: 'Inhotim, Brumadinho',
    date: 'Sep 2022 - Dec 2022',
    description: 'Outdoor installations interacting with the botanical garden.',
    imageUrl: 'https://picsum.photos/800/600?random=12',
    isCurrent: false,
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'WanBitha Featured in ArtReview',
    date: 'Nov 12, 2024',
    summary: 'An in-depth interview about the new "Neon Silence" collection.',
  },
  {
    id: 'n2',
    title: 'Upcoming Residency in Berlin',
    date: 'Oct 05, 2024',
    summary: 'WanBitha will be joining the Urban Spree residency program next spring.',
  },
];
