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