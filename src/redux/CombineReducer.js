import {combineReducers} from "redux";
import GlobalReducer from './GlobalReducer'
import reducer from './reducer'

export const CombineReducer = combineReducers({
    GlobalReducer,reducer
});
