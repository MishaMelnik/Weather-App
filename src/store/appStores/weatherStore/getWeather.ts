import { createSelector } from 'reselect';

const getWeather = createSelector([(state) => state.weatherStore.weather], (data) => data);

export default getWeather;
