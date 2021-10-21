import {combineReducers} from "redux";
import {
    userReducer,
    featuredPlaylistReducer, 
} from "./Reducers";

const reducers = combineReducers({
    userData : userReducer,
    featuredPlaylists: featuredPlaylistReducer, 
});
export default reducers;