import { CarsResponse, Car, CarWithoutID } from '../../types/interfaces';

class Loader {
  private static baseUrl = 'http://127.0.0.1:3000';

  private static garage = `${Loader.baseUrl}/garage`;

  static async getCar(id: number): Promise<Car> {
    const response = await fetch(`${Loader.garage}/${id}`);
    return response.json();
  }

  static async getCars(page: number, limit = 7): Promise<CarsResponse> {
    const response = await fetch(`${Loader.garage}?_page=${page}&_limit=${limit}`);
    return {
      cars: await response.json(),
      count: response.headers.get('X-Total-Count'),
    };
  }

  static async createCar(data: CarWithoutID): Promise<Car> {
    const response = await fetch(`${Loader.garage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async updateCar(id: number, data: CarWithoutID): Promise<Car> {
    const response = await fetch(`${Loader.garage}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async deleteCar(id: number): Promise<Car> {
    const response = await fetch(`${Loader.garage}/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }
}

export default Loader;
