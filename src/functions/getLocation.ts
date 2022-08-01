import { Dispatch, SetStateAction } from 'react';
// FUNC
import { getWeatherWeek } from './getWeatherWeek';
import { getCurrentWeather } from './getCurrentWeather';
// MODELS
import { CurrentWeather, Day } from '../models/models';

const defaultCityLat = 35;
const defaultCityLon = 139;

export const getLocation = (
  setWeatherWeek: Dispatch<SetStateAction<Array<Day>>>,
  setCurrentWeather: Dispatch<SetStateAction<Array<CurrentWeather>>>
) => {
  navigator.geolocation.getCurrentPosition(
    async (coordinates) => {
      const lat = coordinates?.coords?.latitude;
      const lon = coordinates?.coords?.longitude;
      return {
        current: await getCurrentWeather(lat, lon, setCurrentWeather),
        week: await getWeatherWeek(lat, lon, setWeatherWeek),
      };
    },
    async () => {
      return {
        week: await getWeatherWeek(defaultCityLat, defaultCityLon, setWeatherWeek),
        current: await getCurrentWeather(defaultCityLat, defaultCityLon, setCurrentWeather),
      };
    }
  );
};
