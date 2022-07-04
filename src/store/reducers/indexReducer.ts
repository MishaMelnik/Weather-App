import { combineReducers } from 'redux';

import weatherStoreReducer from '../appStores/weatherStore/weatherStore';

export default combineReducers({
  weatherStore: weatherStoreReducer,
});
