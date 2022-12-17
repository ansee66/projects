import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Controller, View } from '../../types/index';

class App {
  controller: Controller;
  view: View;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const sourcesBlock = document.querySelector('.sources');
    if (sourcesBlock instanceof HTMLElement) {
      sourcesBlock.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
      this.controller.getSources((data) => this.view.drawSources(data));
    }
  }
}

export default App;
