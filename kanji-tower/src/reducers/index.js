import stylePointsReducer from "./stylePoints";
import currencyReducer from "./currency";
import menuReducer from "./menu";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    stylePointsReducer,
    currencyReducer,
    menuReducer
});

export default allReducers;
