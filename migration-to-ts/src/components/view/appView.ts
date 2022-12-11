import News from './news/news';
import Sources from './sources/sources';
import { INews, ISources } from '../../types/index';
import Pagination from './sources/pagination';

export class AppView {
  news: News;
  sources: Sources;
  pagination: Pagination;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.pagination = new Pagination();
  }

  drawNews(data: INews | undefined) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ISources | undefined) {
    const values = data?.sources ? data?.sources : [];
    const sourcesItems = this.sources.draw(values);
    this.pagination.render();
    if (sourcesItems instanceof HTMLElement) this.pagination.setHandlers(sourcesItems);
  }
}

export default AppView;
