export type Language = 'pt' | 'en';

export interface Work {
  id: string;
  title: string;
  description: string;
  technique: string;
  year: number;
  dimensions: string;
  category: string;
  imageUrl: string;
}

export interface Exhibition {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  isCurrent: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
}

export interface Translations {
  [key: string]: {
    nav: {
      works: string;
      exhibitions: string;
      artist: string;
      studio: string;
      news: string;
      contact: string;
    };
    hero: {
      cta: string;
    };
    works: {
      title: string;
      filters: {
        all: string;
        painting: string;
        sculpture: string;
        installation: string;
      };
      details: {
        technique: string;
        year: string;
        dimensions: string;
        back: string;
      }
    };
    exhibitions: {
      title: string;
      current: string;
      past: string;
    };
    artist: {
      title: string;
      bioTitle: string;
      statementTitle: string;
    };
    studio: {
      title: string;
      visitInfo: string;
    };
    news: {
      title: string;
      subscribe: string;
      emailPlaceholder: string;
      submit: string;
    };
    footer: {
      privacy: string;
      cookies: string;
      sitemap: string;
      general: string;
      sales: string;
      press: string;
    };
  };
}