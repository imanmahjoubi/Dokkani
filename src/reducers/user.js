import { LOGIN_SUCCESS, LOGIN_FAILED, SIGNUP_FAILED, SIGNUP_SUCCESS } from '../actions/types';

const INIT_STATE = {
    user: null,
    error: null,
};
export default (state = INIT_STATE, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload };
        case LOGIN_FAILED:
            return { ...state, error: action.payload };
        case SIGNUP_SUCCESS:
            return { ...state, user: action.payload };
        case SIGNUP_FAILED:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
