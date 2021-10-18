import { ActionTypes } from "../constants";

const initialState = {
    user: null,
    // spotify: null,
    // playing: false,
    // item: null,
    token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTcxMmI1YTczM2I2ODA1MWVkMTJmZCIsImlhdCI6MTYzNDU0MzM0MywiZXhwIjoxNjM3MTM1MzQzfQ.eEjyTfJLt1jNSRHznZXrJGfJ6EFfyziRQIBhrivRZr0',
    
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