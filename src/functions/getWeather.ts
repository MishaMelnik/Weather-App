import axios from 'axios';

export const getWeather = async (lat?: number, lng?: number, setWeather?: any) => {
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${process.env['REACT_APP_WEATHER_API_KEY']}`
    )
    .then((data) => {
      const city = data.data.city;
      const list = data.data.list;
      const cityWeather = [{ ...city }, { ...list }];
      if (setWeather) {
        setWeather(cityWeather);
      }
    });
};
