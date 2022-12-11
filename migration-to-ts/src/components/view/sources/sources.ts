import './sources.css';
import { ISource } from '../../../types/index';

class Sources {
  draw(data: Array<ISource>) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp');

    if (sourceItemTemp instanceof HTMLTemplateElement) {
      data.forEach((item) => {
        const sourceClone = sourceItemTemp.content.cloneNode(true);
        if (sourceClone instanceof DocumentFragment) {
          const sourceItemName = sourceClone.querySelector('.source__item-name');
          if (sourceItemName instanceof HTMLElement) {
            sourceItemName.textContent = item.name;
          }

          const sourceItem = sourceClone.querySelector('.source__item');
          if (sourceItem instanceof HTMLElement) {
            sourceItem.setAttribute('data-source-id', item.id);
          }

          fragment.append(sourceClone);
        }
      });

      const sourceInner = document.querySelector('.sources__inner');
      if (sourceInner instanceof HTMLElement) sourceInner.append(fragment);
      const sources = document.querySelector('.sources');
      if (sources instanceof HTMLElement) {
        return sources;
      }
    }
  }
}

export default Sources;
