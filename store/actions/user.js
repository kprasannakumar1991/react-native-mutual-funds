import {SIGNUP} from './types';

export const signUpUser = user => {
    return {
        type: SIGNUP,
        payload: user
    }    
}