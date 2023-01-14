import GarageView from "../view/garage";

class App {
  garage: GarageView;

  constructor() {
    this.garage = new GarageView();
  }

  start() {
    this.garage.render();
  }
}

export default App;