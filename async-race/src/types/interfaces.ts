export interface Car {
  name: string;
  color: string;
  id: number;
}

export type CarWithoutID = Omit<Car, 'id'>;

export interface CarsResponse {
  cars: Car[];
  count: string | null;
}

export interface StartResponse {
  velocity: number;
  distance: number;
}

export interface DriveResponse {
  success: boolean;
}

export interface AnimatedCars {
  [key: string]: {
    carElem: HTMLElement;
    animID: number;
  };
}