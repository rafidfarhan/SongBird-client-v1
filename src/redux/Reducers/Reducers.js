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

export const timelineAlbumsReducer = (state = {}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_TIMELINE_ALBUMS:
            return {...state, payload };
    
        default:
            return state;
    }
}
export const userLikedSongsReducer = (state = {}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_USER_LIKED_SONGS:
            return {...state, payload};
    
        default:
            return state;
    }
}

export const selectedAlbumReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_SELECTED_ALBUM:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_ALBUM:
        return {};
      default:
        return state;
    }
  };
  

export const ownedPlaylistsReducer = (state = {}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_USER_OWNED_PLAYLISTS:
            return {...state, payload};
    
        default:
            return state;
    }
};

export const selectedPlaylistReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_SELECTED_PLAYLIST:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PLAYLIST:
        return {};
      default:
        return state;
    }
  };