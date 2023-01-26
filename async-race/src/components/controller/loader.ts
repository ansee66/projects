import {
  ItemsResponse,
  Car,
  CarWithoutID,
  StartResponse,
  DriveResponse,
  Winner,
  WinnerWithoutWins,
  WinnerForRender,
  SortType,
  OrderType,
  CarParams,
  WinnerParams,
} from '../../types/interfaces';

class Loader {
  private static baseUrl = 'http://127.0.0.1:3000';

  private static garage = `${Loader.baseUrl}/garage`;

  private static engine = `${Loader.baseUrl}/engine`;

  private static winners = `${Loader.baseUrl}/winners`;

  static async getCar(id: number): Promise<Car> {
    const response: Response = await fetch(`${Loader.garage}/${id}`);
    return response.json();
  }

  static async getCars(params: CarParams): Promise<ItemsResponse<Car>> {
    const response: Response = await fetch(`${Loader.garage}?_page=${params.page}&_limit=${params.limit}`);
    return {
      items: await response.json(),
      count: response.headers.get('X-Total-Count'),
    };
  }

  static async createCar(data: CarWithoutID): Promise<Car> {
    const response: Response = await fetch(`${Loader.garage}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async updateCar(id: number, data: CarWithoutID): Promise<Car> {
    const response: Response = await fetch(`${Loader.garage}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async deleteCar(id: number): Promise<void> {
    const response: Response = await fetch(`${Loader.garage}/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }

  static async actEngine(id: number, status: 'started' | 'stopped'): Promise<StartResponse> {
    const response: Response = await fetch(`${Loader.engine}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    return response.json();
  }

  static async startEngine(id: number): Promise<StartResponse> {
    return Loader.actEngine(id, 'started');
  }

  static async stopEngine(id: number): Promise<StartResponse> {
    return Loader.actEngine(id, 'stopped');
  }

  static async startDrive(id: number): Promise<DriveResponse> {
    const response: Response = await fetch(`${Loader.engine}?id=${id}&status=drive`, {
      method: 'PATCH',
    }).catch();
    if (response.status !== 200) return { success: false };
    return { ...(await response.json()) };
  }

  static async addWin(data: WinnerWithoutWins): Promise<void> {
    const winners: Winner[] = await (await Loader.getWinners()).items;
    const winner: Winner | undefined = winners.find((item) => item.id === data.id);
    if (winner) {
      if (winner.time > data.time) winner.time = data.time;
      Loader.updateWinner(winner);
    } else {
      Loader.createWinner(data);
    }
  }

  static async getWinner(id: number): Promise<Winner> {
    const response = await fetch(`${Loader.winners}/${id}`).catch();
    return response.json();
  }

  static async getWinners(params?: WinnerParams): Promise<ItemsResponse<Winner>> {
    let queryString = '';
    if (params && Object.entries(params).length !== 0) {
      const args: [string, number | SortType | OrderType][] = Object.entries(params);
      const queryParams = args.map((arg) => `_${arg[0]}=${arg[1]}`);
      queryString = `?${queryParams.join('&')}`;
    }
    const response: Response = await fetch(`${Loader.winners}${queryString}`);
    return {
      items: await response.json(),
      count: response.headers.get('X-Total-Count'),
    };
  }

  static async getWinnersForRender(params: WinnerParams): Promise<ItemsResponse<WinnerForRender>> {
    const response: ItemsResponse<Winner> = await Loader.getWinners(params);
    const winners: WinnerForRender[] = await Promise.all(
      response.items.map(async (item: Winner) => {
        const winnerCar: Car = await Loader.getCar(item.id);
        const fullWinner: WinnerForRender = { ...item, ...winnerCar };
        return fullWinner;
      })
    );
    return {
      items: winners,
      count: response.count,
    };
  }

  static async createWinner(data: WinnerWithoutWins): Promise<Winner> {
    const response: Response = await fetch(`${Loader.winners}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, wins: 1 }),
    });
    return response.json();
  }

  static async updateWinner(data: Winner): Promise<Winner> {
    const response: Response = await fetch(`${Loader.winners}/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wins: data.wins + 1, time: data.time }),
    });
    return response.json();
  }
}

export default Loader;
