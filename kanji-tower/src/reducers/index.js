import stylePointsReducer from "./stylePoints";
import currencyReducer from "./currency";
import menuReducer from "./menu";
import quizReducer from "./quiz";
import quizModeReducer from "./quizMode";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    stylePointsReducer,
    currencyReducer,
    menuReducer,
    quizReducer,
    quizModeReducer
});

export default allReducers;

