import React, { createContext, useState } from 'react';
import { IInputProviderProps, IStoreWeather } from '../models/models';

const initialState: IStoreWeather = {
  currentWeather: [],
  setCurrentWeather: () => [],
  weatherWeek: [],
  setWeatherWeek: () => [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: IInputProviderProps) => {
  const [currentWeather, setCurrentWeather] = useState([
    {
      clouds: null,
      lat: 0,
      lon: 0,
      country: null,
      day: null,
      time: '00:00',
      currentTemp: '0',
      maxTemp: '0',
      minTemp: '0',
      windSpeed: '0',
      name: null,
      humidity: '0',
      visibility: '0',
      weatherDescription: null,
      weatherIcon: null,
      weatherMain: null,
      sunrise: '00:00',
      sunset: '00:00',
    },
    {},
  ]);
  const [weatherWeek, setWeatherWeek] = useState([]);
  return (
    <GlobalContext.Provider value={{ weatherWeek, setWeatherWeek, currentWeather, setCurrentWeather }}>
      {children}
    </GlobalContext.Provider>
  );
};
