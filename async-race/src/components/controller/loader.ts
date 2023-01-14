import { CarsResponse } from "../../types/interfaces";

class Loader {

  private static baseUrl = 'http://127.0.0.1:3000';

  private static garage = `${Loader.baseUrl}/garage`;

  static async getCars(page: number, limit = 7): Promise<CarsResponse> {
    const response = await fetch(`${Loader.garage}?_page=${page}&_limit=${limit}`);

    return {
      cars: await response.json(),
      count: response.headers.get('X-Total-Count'),
    };
  }
}

export default Loader;
