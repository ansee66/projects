export interface Options {
  [key: string]: string;
}

export enum Endpoint {
  Sources = 'sources',
  Everything = 'everything',
}

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface ISources {
  status: string;
  sources: Array<Source>;
}

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface INews {
  status: string;
  totalResults?: number;
  articles: Array<Article>;
}
