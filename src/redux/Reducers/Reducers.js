import { ActionTypes } from "../constants";

const initialState = {
    user: null,
    // spotify: null,
    // playing: false,
    // item: null,
    token : null,//"BQBTyZxWVW3NKFgxP3JoZCnRNAGKj3NPOWcdY1VbPFKv4ffsMAyUkWenIIiqNNgv5E443Y9rq-175KxR7hohmP3I0doixgSy1bRMJ9U8RnTx8PFEXiZda2-dZSsqQi2A3ZohYuRCoRlpreYn9YwpMQ2uvTrLdb3s-7gZkS1SwhXB0cZl",
    
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