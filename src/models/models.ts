import React, { Dispatch, SetStateAction } from 'react';

export type Response = {
  dt_txt: string;
  main: { temp_max: number; temp_min: number };
  weather: Array<{ icon: string }>;
};
export type Day = {
  day: null | string;
  minTemp: number;
  maxTemp: number;
  weatherIcon: string;
};
export type CurrentWeather = {
  clouds: number;
  lat: number;
  lon: number;
  country: null | string;
  day: null | string;
  time: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  windSpeed: number;
  name: null | string;
  humidity: number;
  visibility: number;
  weatherDescription: null | string;
  weatherIcon: string;
  weatherMain: null | string;
  sunrise: string;
  sunset: string;
  mode?: string;
};
export interface IWeekendDay {
  item: Day;
}
export interface IScaleScore {
  rotates: number;
}
export interface IHumidityBody {
  width: number;
}
export interface IInputProviderProps {
  children: React.ReactNode;
}
export interface IStoreWeather {
  weatherWeek: Array<Day>;
  currentWeather: Array<CurrentWeather>;
  setWeatherWeek: Dispatch<SetStateAction<Array<Day>>>;
  setCurrentWeather: Dispatch<SetStateAction<Array<CurrentWeather>>>;
}
