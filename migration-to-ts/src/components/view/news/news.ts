import './news.css';
import { Article } from '../../../types/index';

class News {
  draw(data: Array<Article>) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp');

    if (newsItemTemp instanceof HTMLTemplateElement) {
      news.forEach((item, idx) => {
        const newsClone = newsItemTemp.content.cloneNode(true);
        if (newsClone instanceof DocumentFragment) {
          const newsItem = newsClone.querySelector('.news__item');
          const newsMetaPhoto = newsClone.querySelector('.news__meta-photo');
          const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
          const newsMetaDate = newsClone.querySelector('.news__meta-date');
          const newsDescriptionTitle = newsClone.querySelector('.news__description-title');
          const newsDescriptionSource = newsClone.querySelector('.news__description-source');
          const newsDescriptionContent = newsClone.querySelector('.news__description-content');
          const newsDescriptionReadMoreLink = newsClone.querySelector('.news__read-more a');

          if (newsItem instanceof HTMLElement) {
            if (idx % 2) newsItem.classList.add('alt');
          }
          if (newsMetaPhoto instanceof HTMLElement) {
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
          }
          if (newsMetaAuthor instanceof HTMLElement) newsMetaAuthor.textContent = item.author || item.source.name;
          if (newsMetaDate instanceof HTMLElement) {
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
          }
          if (newsDescriptionTitle instanceof HTMLElement) newsDescriptionTitle.textContent = item.title;
          if (newsDescriptionSource instanceof HTMLElement) newsDescriptionSource.textContent = item.source.name;
          if (newsDescriptionContent instanceof HTMLElement) newsDescriptionContent.textContent = item.description;
          if (newsDescriptionReadMoreLink instanceof HTMLElement) {
            newsDescriptionReadMoreLink.setAttribute('href', item.url);
          }

          fragment.append(newsClone);
        }
      });

      const newsBlock = document.querySelector('.news');
      if (newsBlock instanceof HTMLElement) {
        newsBlock.innerHTML = '';
        newsBlock.appendChild(fragment);
      }
    }
  }
}

export default News;
