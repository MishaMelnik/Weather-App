import React from 'react';

export type Days = {
  day: string;
  min: number;
  max: number;
  img: string;
};
export interface IDay {
  days: Days;
}
export interface IInputProviderProps {
  children: React.ReactNode;
}
export interface IStoreWeather {
  currentWeather: any;
  setCurrentWeather: any;
  weatherWeek: any;
  setWeatherWeek: any;
}
export type cityWeather = {
  country: string;
  lat: number;
  lon: number;
  name: string;
  sunrise: string;
  sunset: string;
  timezone: string;
};
export type listWeather = {
  clouds: number;
  currentTemp: number;
  day: string;
  maxTemp: number;
  minTemp: number;
  time: string;
  weatherDescription: string;
  weatherIcon: string;
  windSpeed: number;
  weatherMain: string;
};
