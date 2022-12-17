import AppLoader from './appLoader';
import { Endpoint, NewsResponse, SourcesResponse } from '../../types/index';

class AppController extends AppLoader {
  public getSources(callback: (data?: SourcesResponse) => void) {
    super.getResp(
      {
        endpoint: Endpoint.Sources,
      },
      callback
    );
  }

  public getNews(e: Event, callback: (data?: NewsResponse) => void) {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: Endpoint.Everything,
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
