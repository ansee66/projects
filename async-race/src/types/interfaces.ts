export interface Car {
  name: string, 
  color: string, 
  id: number,
}

export type CarWithoutID = Omit<Car, 'id'>

export interface CarsResponse {
  cars: Car[];
  count: string | null;
}