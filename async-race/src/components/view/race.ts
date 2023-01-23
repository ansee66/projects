import Loader from '../controller/loader';
import { Car, AnimatedCars, WinnerWithoutWins } from '../../types/interfaces';

class Race {
  static animatedCars: AnimatedCars = {};

  static racingCars: WinnerWithoutWins[] = [];

  public static async startCar(id: number, isRace = false): Promise<WinnerWithoutWins> {
    const res = await Loader.startEngine(id);
    const time = res.distance / res.velocity;
    Race.animateCar(id, time);
    const { success }: { success: boolean } = { ...(await Loader.startDrive(id)) };

    const p: Promise<WinnerWithoutWins> = new Promise((resolve) => {
      if (success) {
        if (isRace) Race.racingCars.push({ time, id });
        resolve({ time, id });
      } else {
        Race.stopCar(id);
      }
    });
    return p;
  }

  private static stopCar(id: number): void {
    Loader.stopEngine(id);
    cancelAnimationFrame(Race.animatedCars[id].animID);
  }

  public static returnCar(id: number): void {
    Race.stopCar(id);
    Race.animatedCars[id].carElem.style.transform = 'translateX(0)';
  }

  private static animateCar(id: number, time: number, stopCoef = 1): void {
    const carElem = document.querySelector(`.car__image[data-car="${id}"]`) as HTMLElement;
    let currentPosition = carElem.offsetLeft;
    const endPosition = (Number(carElem.parentElement?.offsetWidth) - carElem.offsetWidth * 2) / stopCoef;
    const framesCount = (time / 1000) * 30;
    const delta = (endPosition - currentPosition) / framesCount;

    function move(): void {
      currentPosition += delta;
      carElem.style.transform = `translateX(${currentPosition}px)`;
      if (currentPosition < endPosition) {
        const animID: number = requestAnimationFrame(move);
        Race.animatedCars[id.toString()] = {
          animID,
          carElem,
        };
      }
    }
    move();
  }

  public static async startRace(cars: Car[]): Promise<WinnerWithoutWins> {
    Race.racingCars = [];
    const response: WinnerWithoutWins = await Promise.any(cars.map((car) => Race.startCar(car.id, true)));
    return response;
  }
}

export default Race;
