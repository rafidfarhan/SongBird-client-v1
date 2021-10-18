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