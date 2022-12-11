export interface IOptions {
  [key: string]: string;
}

export enum Endpoint {
  Sources = 'sources',
  Everything = 'everything',
}

export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
