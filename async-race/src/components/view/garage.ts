import Menu from './menu';
import CarView from './car';
import Loader from '../controller/loader';
import { Car } from '../../types/interfaces';

class GarageView {
  menu: Menu;

  car: CarView;

  constructor() {
    this.menu = new Menu();
    this.car = new CarView();
  }

  public render() {
    const html = `
      <h1>Garage</h1>
      <div class="car-list"></div>
    `;
    const menu = this.menu.drawBlock();
    const main = document.createElement('main');
    main.innerHTML = html;
    document.body.append(menu, main);

    Loader.getCars(1).then(res => {this.fillCarList(res.cars)})
  }

  private fillCarList(cars: Car[]) {
    const carList: Element | null = document.querySelector(".car-list");

    if (carList) {
      cars.forEach(car => {
        const newCar = this.car.drawCar(car.name, car.color);
        carList.append(newCar);
      })
    }
  }
}

export default GarageView;
