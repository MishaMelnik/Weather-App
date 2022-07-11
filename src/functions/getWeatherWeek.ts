import axios from 'axios';
import { format } from 'date-fns';

const sort = (data: any) => {
  return data.map((element: any) => ({
    day: format(new Date(element.dt_txt), 'E'),
    maxTemp: Math.ceil(element.main.temp_max),
    minTemp: Math.ceil(element.main.temp_min),
    weatherIcon: element.weather[0].icon,
  }));
};
const separation = (data: any) => {
  const arr: any = [];
  for (let i = 0; i <= 4; i++) {
    arr.push(
      data.splice(0, 8).reduce((acc: any, elem: any) => {
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

export const getWeatherWeek = async (lat?: number, lng?: number, setWeatherWeek?: any, mode = 'metric') => {
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${process.env['REACT_APP_WEATHER_API_KEY']}&units=${mode}`
    )
    .then((data) => {
      const sortedList = sort(data.data.list);
      const separatedList = separation(sortedList);
      const cityWeather = [...separatedList];
      if (setWeatherWeek) {
        setWeatherWeek(cityWeather);
      }
    });
};
