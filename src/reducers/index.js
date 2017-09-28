import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import PartnersReducer from './reducer_partners';
import SeasonsReducer from './reducer_seasons';


const rootReducer = combineReducers({
  weather: WeatherReducer,
  partners: PartnersReducer,
  seasons: SeasonsReducer
});

export default rootReducer;
