import { combineReducers } from 'redux';
import PartnersReducer from './reducer_partners';
import SeasonsReducer from './reducer_seasons';


const rootReducer = combineReducers({
  partners: PartnersReducer,
  seasons: SeasonsReducer
});

export default rootReducer;
