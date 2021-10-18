import { ActionTypes } from "../constants";

const initialState = {
    user: null,
    // spotify: null,
    // playing: false,
    // item: null,
    token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTcxMmI1YTczM2I2ODA1MWVkMTJmZCIsImlhdCI6MTYzNDU2NjQ5NywiZXhwIjoxNjM3MTU4NDk3fQ.HVjtaglDptFuMsMLUocSf2dD-QZQPP0TiQgF1-8k6Pc',
    
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