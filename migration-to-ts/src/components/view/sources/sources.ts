import './sources.css';
import { Source, ISources } from '../../../types/index';

class Sources implements ISources {
  draw(data: Array<Source>) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
      (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources__inner') as HTMLElement).append(fragment);
    return document.querySelector('.sources') as HTMLElement;
  }
}

export default Sources;
