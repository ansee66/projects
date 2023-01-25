import Menu from "../view/menu";
import Garage from "../view/garage";
import Winners from "../view/winners";

class App {
  static menu: Menu = new Menu();

  public start() {
    const main = document.createElement('main');
    document.body.append(App.menu.drawBlock(), main);
    Garage.render();
    App.menu.addNavListener(Garage.render, Winners.render)
  }
}

export default App;