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

export const setMyPlaylists = (playlist) =>{
    return {
        type: ActionTypes.SET_USER_OWNED_PLAYLISTS,
        payload: playlist,
    };
};