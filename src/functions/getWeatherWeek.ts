import { Dispatch, SetStateAction } from 'react';
// AXIOS
import axios from 'axios';
// PACKAGE
import { format } from 'date-fns';
// MODELS
import { Day, Response } from '../models/models';

const sort = (data: Array<Response>) => {
  return data.map((element) => ({
    day: format(new Date(element.dt_txt), 'E'),
    maxTemp: Math.ceil(element.main.temp_max),
    minTemp: Math.ceil(element.main.temp_min),
    weatherIcon: element.weather[0].icon,
  }));
};
const separation = (data: Array<Day>) => {
  const arr = [];
  for (let i = 0; i <= 4; i++) {
    arr.push(
      data.splice(0, 8).reduce((acc, elem) => {
        return {
          ...acc,
          maxTemp: acc.maxTemp > elem.maxTemp ? acc.maxTemp : elem.maxTemp,
          minTemp: acc.minTemp < elem.minTemp ? acc.minTemp : elem.minTemp,
        };
      })
    );
  }
  return arr;
};

export const getWeatherWeek = async (
  lat?: number,
  lng?: number,
  setWeatherWeek?: Dispatch<SetStateAction<Array<Day>>>,
  mode = 'metric'
) => {
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${process.env['REACT_APP_WEATHER_API_KEY']}&units=${mode}`
    )
    .then((data) => {
      const sortedList = sort(data.data.list);
      const separatedList = separation(sortedList);
      console.log(separatedList);
      const cityWeather = [...separatedList];
      if (setWeatherWeek) {
        setWeatherWeek(cityWeather);
      }
    });
};
