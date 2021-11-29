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
} from '../actions/actionTypes';

const initialState = {
  userData: null,
  loading: false,
  error: ''
}

export default function userReducer(state = initialState, action) {
  console.log({action, state})
  switch (action.type) {
      case LOGIN_REQUEST:
      case FETCH_CURRENT_USER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case LOGIN_SUCCESS:
      case FETCH_CURRENT_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: '',
          userData: action.payload
        }
      case LOGIN_FAILURE:
      case FETCH_CURRENT_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          userData: null
        }
      case LOGOUT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case LOGOUT_SUCCESS:
        return {
          ...state,
          loading: false,
          error: '',
          userData: null
        }
      case LOGOUT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          userData: null
        }
      default:
          return state
  }
};