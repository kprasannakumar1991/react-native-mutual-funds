import {SAVE_USER} from '../actions/types';

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
        case SAVE_USER:
            return {...state, ...action.payload}        
        default:
            return state;
    }
}