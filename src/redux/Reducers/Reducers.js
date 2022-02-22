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

export const savedPlaylistsReducer = (state = {}, {type, payload}) =>{
  switch (type) {
      case ActionTypes.SET_USER_SAVED_PLAYLISTS:
          return {...state, payload};
  
      default:
          return state;
  }
};

export const savedAlbumsReducer = (state = {}, {type, payload}) =>{
  switch (type) {
      case ActionTypes.SET_USER_SAVED_ALBUMS:
          return {...state, payload};
  
      default:
          return state;
  }
};
export const followedArtistsReducer = (state = {}, {type, payload}) =>{
  switch (type) {
      case ActionTypes.SET_USER_FOLLOWED_ARTISTS:
          return {...state, payload};
  
      default:
          return state;
  }
};

export const searchedArtistsReducer = (state = {}, {type, payload}) =>{
  switch (type) {
      case ActionTypes.SET_SEARCHED_ARTISTS:
          return {...state, payload};
  
      default:
          return state;
  }
};

export const searchTermReducer = (state = '', {type, payload}) =>{
  switch (type) {
      case ActionTypes.SET_SEARCH_TERM:
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
  export const selectedSongForPlayerReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_SELECTED_SONG_FOR_PLAYER:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_SONG_FOR_PLAYER:
        return {};
      default:
        return state;
    }
  };