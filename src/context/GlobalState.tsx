import React, { createContext, useState } from 'react';
import { IInputProviderProps, IStoreWeather } from '../models/models';

const initialState: IStoreWeather = {
  weather: [],
  setWeather: () => [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: IInputProviderProps) => {
  const [weather, setWeather] = useState([]);
  return <GlobalContext.Provider value={{ weather, setWeather }}>{children}</GlobalContext.Provider>;
};
