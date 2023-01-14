export interface Car {
  name: string, 
  color: string, 
  id: number,
}

export interface CarsResponse {
  cars: Car[];
  count: string | null;
}