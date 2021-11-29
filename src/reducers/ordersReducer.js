import {
    PROCESS_ORDER_REQUEST,
    PROCESS_ORDER_SUCCESS,
    PROCESS_ORDER_FAILURE
  } from '../actions/actionTypes';
  
  const initialState = {
    orders: [],
    loading: false,
    error: ''
  }
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case PROCESS_ORDER_REQUEST:
          return {
            ...state,
            loading: true,
            error: ''
          }
        case PROCESS_ORDER_SUCCESS:
        return {
            ...state,
            loading: false,
            orders: [...state.orders, action.payload]
        }
        case PROCESS_ORDER_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload
        }
        default:
            return state
    }
  };