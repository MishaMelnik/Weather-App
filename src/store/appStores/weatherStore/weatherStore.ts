import { ADD_WEATHER } from '../../../constant/TYPES';
import { IReducerWeather, IStoreWeather } from '../../../models/models';

const INITIAL_STATE: IStoreWeather = {
  weather: [],
};

const weatherStoreReducer = (state = INITIAL_STATE, action: IReducerWeather) => {
  switch (action.type) {
    case ADD_WEATHER:
      return {
        ...state,
        weather: [...state.weather, action.weather],
      };
    default:
      return state;
  }
};

export default weatherStoreReducer;
