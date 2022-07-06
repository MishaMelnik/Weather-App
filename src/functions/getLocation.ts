import { getWeather } from './getWeather';

const defaultCityLat = 35;
const defaultCityLon = 139;

export const getLocation = (setWeather: any) => {
  navigator.geolocation.getCurrentPosition(
    async (coordinates) => {
      const lat = coordinates?.coords?.latitude;
      const lon = coordinates?.coords?.longitude;
      return await getWeather(lat, lon, setWeather);
    },
    async () => {
      return await getWeather(defaultCityLat, defaultCityLon);
    }
  );
};
