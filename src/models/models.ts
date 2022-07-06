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
  weather: Array<object>;
  setWeather: any;
}
