import {combineReducers} from "redux";
import {
    userReducer,
    featuredPlaylistReducer,
    newReleasesReducer,
    timelineAlbumsReducer,
    ownedPlaylistsReducer,
    selectedAlbumReducer
} from "./Reducers";

const reducers = combineReducers({
    userData : userReducer,
    featuredPlaylists: featuredPlaylistReducer,
    newReleases : newReleasesReducer, 
    timelineAlbums :timelineAlbumsReducer,
    selectedAlbum: selectedAlbumReducer,
    userOwnedPlaylists :ownedPlaylistsReducer,

});
export default reducers;