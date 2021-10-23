import {combineReducers} from "redux";
import {
    userReducer,
    featuredPlaylistReducer,
    newReleasesReducer,
    timelineAlbumsReducer,
    ownedPlaylistsReducer
} from "./Reducers";

const reducers = combineReducers({
    userData : userReducer,
    featuredPlaylists: featuredPlaylistReducer,
    newReleases : newReleasesReducer, 
    timelineAlbums :timelineAlbumsReducer,
    userOwnedPlaylists :ownedPlaylistsReducer,
});
export default reducers;