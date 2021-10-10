import {combineReducers} from "redux";
import {
    userReducer
} from "./Reducers";

const reducers = combineReducers({
    userData : userReducer
});
export default reducers;