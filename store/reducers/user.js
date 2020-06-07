import {SIGNUP} from '../actions/types';

const INITIAL_STATE = {
    loggedIn: false,
    name: null,
    email: null,
    password: null,
    gender: null,
    age: null
};

export default (state=INITIAL_STATE, action) => {

    switch(action.type) {
        case SIGNUP:
            console.log(action.payload);
            return {...state, ...action.payload}
        
        default:
            return state;
    }
}