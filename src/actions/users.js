import axios from '../axios-adapter';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FETCH_CURRENT_USER_REQUEST,
    FETCH_CURRENT_USER_SUCCESS,
    FETCH_CURRENT_USER_FAILURE
} from './actionTypes';

const url = 'users/';
const tokenKey = 'token';

export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = userData => ({
    type: LOGIN_SUCCESS,
    payload: userData
});

export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: error
});

export const login = (loginData) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            const resp = await axios.post(`${ url }login`, loginData);
            localStorage.setItem(tokenKey, resp.data.token)
            dispatch(loginSuccess(resp.data))
        } catch (error) {
            dispatch(loginFailure(error))
        }
    }
}

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const logoutFailure = error => ({
    type: LOGOUT_FAILURE,
    payload: error
});

export const logout = () => {
    return async (dispatch) => {
        dispatch(logoutRequest());
        try {
            await axios.post(`${ url }logout`);
            localStorage.removeItem(tokenKey);
            dispatch(loginSuccess())
        } catch (error) {
            dispatch(logoutFailure(error))
        }
    }
}

export const fetchCurrentUserRequest = () => ({
    type: FETCH_CURRENT_USER_REQUEST
});

export const fetchCurrentUserSuccess = userData => ({
    type: FETCH_CURRENT_USER_SUCCESS,
    payload: userData
});

export const fetchCurrentUserFailure = error => ({
    type: FETCH_CURRENT_USER_FAILURE,
    payload: error
});

export const fetchCurrentUser = () => {
    return async (dispatch) => {
        dispatch(fetchCurrentUserRequest());
        try {
            const resp = await axios.get(`${ url }currentuser`);
            console.log('resp', resp)
            dispatch(fetchCurrentUserSuccess(resp.data))
        } catch (error) {
            dispatch(fetchCurrentUserFailure(error))
        }
    }
}
