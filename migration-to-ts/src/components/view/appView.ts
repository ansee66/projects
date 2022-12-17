import News from './news/news';
import Sources from './sources/sources';
import { NewsResponse, SourcesResponse, Article, Source } from '../../types/index';
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

  drawNews(data: NewsResponse | undefined) {
    const values: Array<Article> = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: SourcesResponse | undefined) {
    const values: Array<Source> = data?.sources ? data?.sources : [];
    const sourcesItems = this.sources.draw(values);
    this.pagination.render();
    this.pagination.setHandlers(sourcesItems);
  }
}

export default AppView;
