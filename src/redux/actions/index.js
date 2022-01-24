import {ActionTypes} from "../constants";

export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user,
    };
};

export const setToken = (token) =>{
    return (dispatch)=> {
        dispatch(
            {
                type: ActionTypes.SET_TOKEN,
                payload: token, 
            }
        )
        
    };
};

export const setFeaturedPlaylist = (playlist) =>{
    return {
        type: ActionTypes.SET_FEATURED_PLAYLISTS,
        payload: playlist,
    };
};

export const setNewReleases = (albums) =>{
    return {
        type: ActionTypes.SET_NEW_RELEASES,
        payload: albums,
    };
};

export const setTimelineAlbums = (albums) =>{
    return {
        type: ActionTypes.SET_TIMELINE_ALBUMS,
        payload: albums,
    };
};
export const setUserLikedSongs = (songs) =>{
  return {
      type: ActionTypes.SET_USER_LIKED_SONGS,
      payload: songs,
  };
};

export const setSelectedAlbum = (album) => {
    return {
      type: ActionTypes.SET_SELECTED_ALBUM,
      payload: album,
    };
  };
  export const removeSelectedAlbum = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_ALBUM,
    };
  };

export const setMyPlaylists = (playlist) =>{
    return {
        type: ActionTypes.SET_USER_OWNED_PLAYLISTS,
        payload: playlist,
    };
};

export const setSelectedPlaylist = (playlist) => {
    return {
      type: ActionTypes.SET_SELECTED_PLAYLIST,
      payload: playlist,
    };
  };
  export const removeSelectedPlaylist = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PLAYLIST,
    };
  };

  export const setSelectedSongForPlayer = (playlist) => {
    return {
      type: ActionTypes.SET_SELECTED_SONG_FOR_PLAYER,
      payload: playlist,
    };
  };