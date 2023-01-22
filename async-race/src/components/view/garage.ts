import Menu from './menu';
import CarView from './car';
import Loader from '../controller/loader';
import { Car } from '../../types/interfaces';
import Utils from '../../utils/utils';
import Race from './race';

class Garage {
  static menu: Menu = new Menu();

  static car: CarView = new CarView();

  static carList: Element | null = null;

  static currentPage: number = Garage.loadState();

  static pageLimit = 7;

  public static render() {
    const html = `
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
      <div class="controls">
        <button class="button" id="generate-button">Generate Cars</button>
      </div>
      <h1 class="page-title">Garage (<span id="car-amount"></span>)</h1>
      <h2 class="page-subtitle">Page #<span id="current-page"></span></h2>
      <div class="car-list"></div>
      <div class="pagination">
        <button class="button button--nav button--prev">Prev</button>
        <button class="button button--nav button--next">Next</button>
      </div>
    `;
    const menu = Garage.menu.drawBlock();
    const main = document.createElement('main');
    main.innerHTML = html;
    document.body.append(menu, main);

    Garage.carList = document.querySelector('.car-list');

    Garage.addCreateAndUpdateListener();
    Garage.addCarListListener();
    Garage.addPaginationListener();
    Garage.addGenerateListener();

    Garage.drawCarList(Garage.currentPage);
  }

  private static drawCarList(page: number, limit = Garage.pageLimit): void {
    Loader.getCars(page, limit).then((res) => {
      Garage.fillCarList(res.cars);
      Garage.setPaginationBtnsState(Number(res.count));
      Garage.renderNumbers(Number(res.count));
    });
  }

  private static fillCar(car: Car) {
    const newCar = Garage.car.drawCar(car.id, car.name, car.color);
    if (Garage.carList instanceof Element) Garage.carList.append(newCar);
  }

  private static fillCarList(cars: Car[]) {
    if (Garage.carList) Garage.carList.innerHTML = '';
    cars.forEach((car) => {
      Garage.fillCar(car);
    });
  }

  private static addCreateAndUpdateListener(): void {
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
            Garage.drawCarList(Garage.currentPage);
          });
        }
        if (action === 'update') {
          Loader.updateCar(Number(button.dataset.update), { name: brandInput.value, color: colorInput.value }).then(
            () => {
              Garage.drawCarList(Garage.currentPage);
            }
          );
        }
      });
    });
  }

  private static addCarListListener(): void {
    Garage.carList?.addEventListener('click', (e) => {
      if (e.target instanceof HTMLButtonElement) {
        if (e.target.classList.contains('button--select')) {
          Garage.updateCar(Number(e.target.dataset.select));
        }
        if (e.target.classList.contains('button--remove')) {
          Garage.deleteCar(Number(e.target.dataset.remove));
        }
        if (e.target.classList.contains('button--start')) {
          e.target.disabled = true;
          Race.startCar(Number(e.target.dataset.start));
          const stopButton: Element | null = e.target.nextElementSibling;
          if (stopButton instanceof HTMLButtonElement) stopButton.disabled = false;
        }
        if (e.target.classList.contains('button--stop')) {
          e.target.disabled = true;
          Race.returnCar(Number(e.target.dataset.stop));
          const startButton: Element | null = e.target.previousElementSibling;
          if (startButton instanceof HTMLButtonElement) startButton.disabled = false;
        }
      }
    });
  }

  private static deleteCar(id: number) {
    Loader.deleteCar(id).then(() => {
      Garage.drawCarList(Garage.currentPage);
    });
  }

  private static updateCar(id: number) {
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

  private static addPaginationListener(): void {
    const pagination: Element | null = document.querySelector('.pagination');

    pagination?.addEventListener('click', (e) => {
      if (e.target instanceof HTMLButtonElement) {
        if (e.target.classList.contains('button--prev')) Garage.currentPage -= 1;
        if (e.target.classList.contains('button--next')) Garage.currentPage += 1;
        Garage.saveState();
        Garage.drawCarList(Garage.currentPage);
      }
    });
  }

  private static setPaginationBtnsState(carAmount: number): void {
    const prevBtn = document.querySelector('.button--prev') as HTMLButtonElement;
    const nextBtn = document.querySelector('.button--next') as HTMLButtonElement;

    const lastPage = Math.ceil(carAmount / 7);
    prevBtn.disabled = Garage.currentPage === 1;
    nextBtn.disabled = Garage.currentPage === lastPage;
  }

  private static renderNumbers(amount: number): void {
    const carAmount = document.querySelector('#car-amount') as HTMLElement;
    const pageNumber = document.querySelector('#current-page') as HTMLElement;
    carAmount.textContent = amount.toString();
    pageNumber.textContent = Garage.currentPage.toString();
  }

  private static addGenerateListener(): void {
    const generateButton = document.querySelector('#generate-button') as HTMLElement;
    generateButton.addEventListener('click', () => {
      Garage.generateCars();
    });
  }

  private static generateCars(): void {
    for (let i = 0; i < 100; i += 1) {
      Loader.createCar({ name: Utils.getRandomName(), color: Utils.getRandomColor() }).then(() => {
        Garage.drawCarList(Garage.currentPage);
      });
    }
  }

  private static saveState(): void {
    localStorage.setItem('currentPage', JSON.stringify(Garage.currentPage));
  }

  private static loadState(): number {
    let page = Number(localStorage.getItem('currentPage'));
    if (page === 0) page = 1;
    return page;
  }
}

export default Garage;
