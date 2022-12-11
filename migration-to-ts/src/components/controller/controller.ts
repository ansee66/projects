import AppLoader from './appLoader';
import { Endpoint, INews, ISources } from '../../types/index';

class AppController extends AppLoader {
  public getSources(callback: (data?: ISources) => void) {
    super.getResp(
      {
        endpoint: Endpoint.Sources,
      },
      callback
    );
  }

  public getNews(e: Event, callback: (data?: INews) => void) {
    let target = e.target;
    const newsContainer = e.currentTarget;
    while (target !== newsContainer) {
      if (target instanceof HTMLElement) {
        if (target.classList.contains('source__item')) {
          const sourceId = target.getAttribute('data-source-id');
          if (newsContainer instanceof HTMLElement) {
            if (newsContainer.getAttribute('data-source') !== sourceId) {
              if (typeof sourceId === 'string') {
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
            }
          } else {
            throw new Error('newsContainer is not HTMLElement');
          }
          return;
        }
        target = target.parentNode;
      } else {
        throw new Error('target is not HTMLElement');
      }
    }
  }
}

export default AppController;
