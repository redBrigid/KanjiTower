import stylePointsReducer from "./stylePoints";
import currencyReducer from "./currency";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    stylePointsReducer,
    currencyReducer
});

export default allReducers;
