export type Days = {
  day: string;
  min: number;
  max: number;
  img: string;
};
export interface IDay {
  days: Days;
}
export interface IStoreWeather {
  weather: Array<object>;
}
export interface IReducerWeather {
  type: string;
  weather: Array<object>;
}
