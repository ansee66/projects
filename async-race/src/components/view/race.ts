import Loader from '../controller/loader';
import { AnimatedCars } from '../../types/interfaces';

class Race {
  static animatedCars: AnimatedCars = {};

  public static async startCar(id: number) {
    const res = await Loader.startEngine(id);
    const time = res.distance / res.velocity;
    Race.animateCar(id, time);
    const { success }: { success: boolean } = { ...(await Loader.startDrive(id)) };
    if (!success) Race.stopCar(id);
  }

  private static stopCar(id: number) {
    Loader.stopEngine(id);
    cancelAnimationFrame(Race.animatedCars[id].animID);
  }

  public static returnCar(id: number) {
    Race.stopCar(id);
    Race.animatedCars[id].carElem.style.transform = 'translateX(0)';
  }

  private static animateCar(id: number, time: number, stopCoef = 1): void {
    const carElem = document.querySelector(`.car__image[data-car="${id}"]`) as HTMLElement;
    let currentPosition = carElem.offsetLeft;
    const endPosition = (Number(carElem.parentElement?.offsetWidth) - carElem.offsetWidth * 2) / stopCoef;
    const framesCount = (time / 1000) * 30;
    const delta = (endPosition - currentPosition) / framesCount;

    function move() {
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
}

export default Race;
