import { getWeatherWeek } from './getWeatherWeek';
import { getCurrentWeather } from './getCurrentWeather';

const defaultCityLat = 35;
const defaultCityLon = 139;

export const getLocation = (setWeatherWeek: any, setCurrentWeather: any) => {
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
