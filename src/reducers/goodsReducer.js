import {
  FETCH_GOODS_FAILURE,
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_REQUEST,
  ADD_NEW_GOODS_ITEM_SUCCESS,
  ADD_NEW_GOODS_ITEM_REQUEST,
  ADD_NEW_GOODS_ITEM_FAILURE,
  DELETE_GOODS_ITEM_SUCCESS,
  DELETE_GOODS_ITEM_REQUEST,
  DELETE_GOODS_ITEM_FAILURE,
  UPDATE_GOODS_ITEM_SUCCESS,
  UPDATE_GOODS_ITEM_REQUEST,
  UPDATE_GOODS_ITEM_FAILURE
} from '../actions/actionTypes'

const initialState = {
  data: [],
  loading: false,
  error: ''
};
  
export default function goodsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GOODS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_GOODS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload
      }
      case FETCH_GOODS_FAILURE:
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        }
      case ADD_NEW_GOODS_ITEM_REQUEST:
        return {
          ...state,
          loading: true
        }
      case ADD_NEW_GOODS_ITEM_SUCCESS:
        return {
          ...state,
          loading: false,
          data: [ ...state.data, action.payload ],
          error: ''
        }
      case ADD_NEW_GOODS_ITEM_FAILURE:
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        }
      case DELETE_GOODS_ITEM_REQUEST:
        return {
          ...state,
          loading: true
        }
      case DELETE_GOODS_ITEM_SUCCESS:
        return {
          ...state,
          loading: false,
          error: '',
          data: state.data.filter((item) => {
            return item._id !== action.payload
          })
        }
      case DELETE_GOODS_ITEM_FAILURE:
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        }
      case UPDATE_GOODS_ITEM_REQUEST:
        return {
          ...state,
          loading: true
        }
      case UPDATE_GOODS_ITEM_SUCCESS: 
        console.log('UPDATE_GOODS_ITEM_SUCCESS', action);
        return {
          ...state,
          loading: false,
          error: '',
          data: state.data.map((item) => {
            if(item._id === action.payload._id) {
              return action.payload
            } else {
              return item
            }
          })
        }
      case UPDATE_GOODS_ITEM_FAILURE:
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        }
    default:
        return state
  }
};
