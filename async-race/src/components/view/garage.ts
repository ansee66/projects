import CarView from './car';
import ListView from './listView';
import { GarageHtml } from './html';
import Loader from '../controller/loader';
import { Car, CarParams } from '../../types/interfaces';
import Utils from '../../utils/utils';
import Race from './race';

class Garage {
  static car: CarView = new CarView();

  static carList: Element | null = null;

  static currentCars: Car[] = [];

  static currentPage: number = Garage.loadState();

  static pageLimit = 7;

  static view: ListView<Car, CarParams> = new ListView(GarageHtml, '.car-list', Loader.getCars, Garage.car.drawCar);

  public static render(): void {
    Garage.carList = Garage.view.render();
    Garage.drawCarList();

    Garage.addCreateAndUpdateListener();
    Garage.addCarListListener();
    Garage.addPaginationListener();
    Garage.addGenerateListener();
    Garage.addRaceListener();
  }

  private static async drawCarList(): Promise<void> {
    Garage.currentCars = await Garage.view.drawList({ page: Garage.currentPage, limit: Garage.pageLimit });
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
            Garage.drawCarList();
          });
        }
        if (action === 'update') {
          Loader.updateCar(Number(button.dataset.update), { name: brandInput.value, color: colorInput.value }).then(
            () => {
              Garage.drawCarList();
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
      Garage.drawCarList();
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
        Garage.drawCarList();
      }
    });
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
        Garage.drawCarList();
      });
    }
  }

  private static addRaceListener(): void {
    const raceButton = document.querySelector('#race-button') as HTMLButtonElement;
    const resetButton = document.querySelector('#reset-button') as HTMLButtonElement;
    const message = document.querySelector('.finish-message') as HTMLElement;

    raceButton.addEventListener('click', () => {
      raceButton.disabled = true;
      if (message.classList.contains('finish-message--shown')) message.classList.remove('finish-message--shown');
      Race.startRace(Garage.currentCars).then((res) => {
        resetButton.disabled = false;
        const winner: Car[] = Garage.currentCars.filter((car) => car.id === res.id);
        message.innerHTML = `${winner[0].name} went first in ${res.time} seconds`;
        message.classList.add('finish-message--shown');
      });
    });

    resetButton.addEventListener('click', () => {
      resetButton.disabled = true;
      if (message.classList.contains('finish-message--shown')) message.classList.remove('finish-message--shown');
      Race.stopRace(Garage.currentCars);
      raceButton.disabled = false;
    });
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
