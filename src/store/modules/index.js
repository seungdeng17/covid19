import { combineReducers } from "redux";
import covidState from './covidState';

const rootReducers = combineReducers({
    covidState,
});

export default rootReducers;
