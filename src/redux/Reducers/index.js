import {combineReducers} from "redux";
import {
    userReducer,
    featuredPlaylistReducer,
    newReleasesReducer,
    timelineAlbumsReducer,
    ownedPlaylistsReducer,
    selectedAlbumReducer,
    selectedPlaylistReducer,
    userLikedSongsReducer
} from "./Reducers";

const reducers = combineReducers({
    userData : userReducer,
    featuredPlaylists: featuredPlaylistReducer,
    newReleases : newReleasesReducer, 
    timelineAlbums :timelineAlbumsReducer,
    likedSongs:userLikedSongsReducer,
    selectedAlbum: selectedAlbumReducer,
    userOwnedPlaylists :ownedPlaylistsReducer,
    selectedPlaylist: selectedPlaylistReducer,
});
export default reducers;