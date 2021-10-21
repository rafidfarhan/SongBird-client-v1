import { ActionTypes } from "../constants";

const initialState = {
    user: null,
    // spotify: null,
    // playing: false,
    // item: null,
    token : null,
    
}

export const userReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_USER:
            return {...state, user:payload};
        
        case ActionTypes.SET_TOKEN:
            return {...state, token:payload };   
    
        default:
            return state;
    }
}

export const featuredPlaylistReducer = (state = {}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_FEATURED_PLAYLISTS:
            return {...state, payload };
    
        default:
            return state;
    }
}

export const newReleasesReducer = (state = {}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_NEW_RELEASES:
            return {...state, payload };
    
        default:
            return state;
    }
}