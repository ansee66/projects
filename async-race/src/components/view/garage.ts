import Menu from './menu';
import CarView from './car';
import Loader from '../controller/loader';
import { Car } from '../../types/interfaces';

class GarageView {
  menu: Menu;

  car: CarView;

  carList: Element | null;

  constructor() {
    this.menu = new Menu();
    this.car = new CarView();
    this.carList = null;
  }

  public render() {
    const html = `
      <h1>Garage</h1>
      <div class="create">
        <input class="input" type="text" placeholder="Car brand" name="create-car-brand" id="create-brand">
        <input class="input" type="color" name="Car color" id="create-color">
        <button class="button" id="create-button">Create Car</button>
      </div>
      <div class="car-list"></div>
    `;
    const menu = this.menu.drawBlock();
    const main = document.createElement('main');
    main.innerHTML = html;
    document.body.append(menu, main);

    this.carList = document.querySelector('.car-list');

    this.addCreateListener();

    Loader.getCars(1).then((res) => {
      this.fillCarList(res.cars);
    });
  }

  private fillCar(car: Car) {
    const newCar = this.car.drawCar(car.name, car.color);
    if (this.carList instanceof Element) this.carList.append(newCar);
  }

  private fillCarList(cars: Car[]) {
    cars.forEach((car) => {
      this.fillCar(car);
    });
  }

  private addCreateListener(): void {
    const createButton: Element | null = document.querySelector('#create-button');
    const brandInput: Element | null = document.querySelector('#create-brand');
    const colorInput: Element | null = document.querySelector('#create-color');

    createButton?.addEventListener('click', () => {
      if (brandInput instanceof HTMLInputElement && colorInput instanceof HTMLInputElement) {
        Loader.createCar({ name: brandInput.value, color: colorInput.value }).then((car) => {
          this.fillCar(car);
        });
      }
    });
  }
}

export default GarageView;
