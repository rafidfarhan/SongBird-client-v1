import {combineReducers} from "redux";
import {
    userReducer,
    featuredPlaylistReducer,
    newReleasesReducer,
    timelineAlbumsReducer,
    ownedPlaylistsReducer,
    savedPlaylistsReducer,
    savedAlbumsReducer,
    followedArtistsReducer,
    selectedAlbumReducer,
    selectedPlaylistReducer,
    userLikedSongsReducer,
    selectedSongForPlayerReducer
} from "./Reducers";

const reducers = combineReducers({
    userData : userReducer,
    featuredPlaylists: featuredPlaylistReducer,
    newReleases : newReleasesReducer, 
    timelineAlbums :timelineAlbumsReducer,
    likedSongs:userLikedSongsReducer,
    selectedAlbum: selectedAlbumReducer,
    userOwnedPlaylists :ownedPlaylistsReducer,
    userSavedPlaylists :savedPlaylistsReducer,
    userSavedAlbums: savedAlbumsReducer,
    userFollowedArtists: followedArtistsReducer,
    selectedPlaylist: selectedPlaylistReducer,
    selectedSongForPlayer:selectedSongForPlayerReducer
});
export default reducers;