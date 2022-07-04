import store from '../../store';
import axios from 'axios';
import { ADD_WEATHER } from '../../../constant/TYPES';
const { dispatch } = store;

const weatherActions = {
  loadWeather: async () => {
    await axios
      .get(`http://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env['REACT_APP_WEATHER_API_KEY']}`)
      .then((data) => {
        console.log(data.data);
        // weatherActions.addWeather(data);
      });
  },
  addWeather: async (data: Array<object>) => {
    dispatch({
      type: ADD_WEATHER,
      weather: data,
    });
  },
};

export default weatherActions;
