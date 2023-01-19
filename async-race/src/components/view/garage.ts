import Menu from './menu';
import CarView from './car';
import Loader from '../controller/loader';
import { Car } from '../../types/interfaces';

class GarageView {
  menu: Menu;

  car: CarView;

  carList: Element | null;

  currentPage: number;

  constructor() {
    this.menu = new Menu();
    this.car = new CarView();
    this.carList = null;
    this.currentPage = 1;
  }

  public render() {
    const html = `
      <h1>Garage</h1>
      <div class="editor editor--create">
        <input class="input" type="text" placeholder="Car brand" name="create-car-brand" id="create-brand">
        <input class="input input--color" type="color" name="Car color" id="create-color">
        <button class="button" id="create-button">Create Car</button>
      </div>
      <div class="editor editor--update">
        <input class="input" type="text" placeholder="Car brand" name="update-car-brand" id="update-brand" disabled>
        <input class="input input--color" type="color" name="Car color" id="update-color" disabled>
        <button class="button" id="update-button" disabled>Update Car</button>
      </div>
      <div class="car-list"></div>
    `;
    const menu = this.menu.drawBlock();
    const main = document.createElement('main');
    main.innerHTML = html;
    document.body.append(menu, main);

    this.carList = document.querySelector('.car-list');

    this.addCreateAndUpdateListener();
    this.addCarListListener();

    this.drawCarList(this.currentPage);
  }

  private drawCarList(page: number): void {
    Loader.getCars(page).then((res) => {
      this.fillCarList(res.cars);
    });
  }

  private fillCar(car: Car) {
    const newCar = this.car.drawCar(car.id, car.name, car.color);
    if (this.carList instanceof Element) this.carList.append(newCar);
  }

  private fillCarList(cars: Car[]) {
    if (this.carList) this.carList.innerHTML = '';
    cars.forEach((car) => {
      this.fillCar(car);
    });
  }

  private addCreateAndUpdateListener(): void {
    ['create', 'update'].forEach((action) => {
      const editor = document.querySelector(`.editor--${action}`) as HTMLElement;
      const [brandInput, colorInput, button] = [...editor.children] as [
        HTMLInputElement,
        HTMLInputElement,
        HTMLButtonElement
      ];

      button.addEventListener('click', () => {
        if (action === 'create') {
          Loader.createCar({ name: brandInput.value, color: colorInput.value }).then(() => {
            this.drawCarList(this.currentPage);
          });
        }
        if (action === 'update') {
          Loader.updateCar(Number(button.dataset.update), { name: brandInput.value, color: colorInput.value }).then(
            () => {
              this.drawCarList(this.currentPage);
            }
          );
        }
      });
    });
  }

  private addCarListListener(): void {
    this.carList?.addEventListener('click', (e) => {
      if (e.target instanceof HTMLButtonElement) {
        if (e.target.classList.contains('button--select')) {
          this.updateCar(Number(e.target.dataset.select));
        }
        if (e.target.classList.contains('button--remove')) {
          this.deleteCar(Number(e.target.dataset.remove));
        }
      }
    });
  }

  private deleteCar(id: number) {
    Loader.deleteCar(id).then(() => {
      this.drawCarList(this.currentPage);
    });
  }

  private updateCar(id: number) {
    const updateEditor = document.querySelector('.editor--update') as HTMLElement;
    const [brandInput, colorInput, button]: Element[] = [...updateEditor.children];
    Loader.getCar(id).then((res) => {
      if (
        brandInput instanceof HTMLInputElement &&
        colorInput instanceof HTMLInputElement &&
        button instanceof HTMLButtonElement
      ) {
        brandInput.disabled = false;
        brandInput.value = res.name;
        colorInput.disabled = false;
        colorInput.value = res.color;
        button.disabled = false;
        button.dataset.update = id.toString();
      }
    });
  }
}

export default GarageView;
