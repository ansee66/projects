import { carBrands, carModels } from "./data";

class Utils {
  private static getRandomNumber(top: number): number {
    return Math.floor(Math.random() * top);
  }

  public static getRandomName(): string {
    const brand = carBrands[Utils.getRandomNumber(carBrands.length)];
    const model = carModels[Utils.getRandomNumber(carModels.length)];
    return `${brand} ${model}`;
  }

  public static getRandomColor(): string {
    const symbols = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i +=1) {
      color += symbols[Utils.getRandomNumber(16)];
    }
    return color;
  }
}

export default Utils;
