export interface Options {
  [key: string]: string;
}

export const enum Endpoint {
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

export interface SourcesResponse {
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

export interface NewsResponse {
  status: string;
  totalResults?: number;
  articles: Array<Article>;
}

export interface INews {
  draw(data: Array<Article>): void;
}

export interface ISources {
  draw(data: Array<Source>): HTMLElement;
}

export interface IPagination {
  pagination: HTMLElement | null;
  currentCoordY: number;
  paginationButtons: Array<HTMLButtonElement>;
  shiftHeight: number;
  lastPageShift: number;
  pagesCount: number;
  handlePaginationBtns(context: this, btnsNumber: number[], flag: boolean): void;
  render(): void;
  setCoordY(y: number, sourcesItems: HTMLElement[], lastPageShift: number): number;
  calculateParameters(sources: HTMLElement): HTMLElement[];
  setHandlers(sources: HTMLElement): void;
}

export interface View {
  news: INews;
  sources: ISources;
  pagination: IPagination;
  drawNews(data: NewsResponse | undefined): void;
  drawSources(data: SourcesResponse | undefined): void;
}

export interface Controller {
  baseLink: string;
  options: Options;
  makeUrl(endpoint: Endpoint, options?: Options): string;
  errorHandler(res: Response): Response;
  load<T>(
    method: string, 
    endpoint: Endpoint, 
    callback: (data: T) => void, 
    options?: Options
  ): void;
  getResp(
    { endpoint, options = {} }: { endpoint: Endpoint; options?: Options },
    callback: () => void,
  ): void
  getSources(callback: (data?: SourcesResponse) => void): void;
  getNews(e: Event, callback: (data?: NewsResponse) => void): void;
}
