import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { CurrentWeather } from '../models/models';
export const getCurrentWeather = async (
  lat?: number,
  lng?: number,
  setCurrentWeather?: Dispatch<SetStateAction<Array<CurrentWeather>>>,
  mode = 'metric'
) => {
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env['REACT_APP_WEATHER_API_KEY']}&units=${mode}`
    )
    .then((data) => {
      const cityData = data.data;
      const city = {
        clouds: cityData.clouds.all,
        lat: cityData.coord.lat,
        lon: cityData.coord.lon,
        country: cityData.sys.country,
        day: format(new Date(cityData.dt * 1000), 'EEEE'),
        time: format(new Date(cityData.dt * 1000), 'HH:mm'),
        currentTemp: Math.ceil(cityData.main.temp),
        maxTemp: Math.ceil(cityData.main.temp_max),
        minTemp: Math.ceil(cityData.main.temp_min),
        windSpeed: Math.ceil(cityData.wind.speed),
        name: cityData.name,
        humidity: cityData.main.humidity,
        visibility: Math.floor(cityData.visibility / 1000),
        weatherDescription: cityData.weather[0].description,
        weatherIcon: cityData.weather[0].icon,
        weatherMain: cityData.weather[0].main,
        sunrise: format(new Date(cityData.sys.sunrise * 1000), 'hh:mm'),
        sunset: format(new Date(cityData.sys.sunset * 1000), 'hh:mm'),
        mode: mode,
      };
      const cityWeather = [{ ...city }];
      if (setCurrentWeather) {
        setCurrentWeather(cityWeather);
      }
    });
};
