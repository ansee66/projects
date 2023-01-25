export interface Car {
  name: string;
  color: string;
  id: number;
}

export type CarWithoutID = Omit<Car, 'id'>;

export interface ItemsResponse<T> {
  items: T[];
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

export interface Winner {
  id: number;
  wins: number;
  time: number;
}

export interface WinnerForRender extends Winner {
  name: string;
  color: string;
}

export type WinnerWithoutWins = Omit<Winner, 'wins'>;

export type SortType = 'id' | 'wins' | 'time';

export type OderType = 'ASC' | 'DESC';

export interface CarParams {
  page: number;
  limit?: number;
}

export interface WinnerParams extends CarParams {
  sort?: SortType;
  order?: OderType;
}
