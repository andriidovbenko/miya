import { BASKET_ADD_ITEM, BASKET_DELETE_ITEM } from '../actions/actionTypes';

const initialState = JSON.parse(localStorage.getItem('basket')) || [];
  
export default function basketReducer(state = initialState, action) {
  switch (action.type) {
      case BASKET_ADD_ITEM:
        const newBasketItem = action.payload;
        const index = state.findIndex(item => {
          return item.id === action.payload.id
        });
        if (index === -1) {
          newBasketItem.amount = 1;
          return [ ...state, action.payload ]
        } else {
          // TODO: is it a good way??
          const newState = [ ...state ];
          newState[ index ].amount++;
          return newState;
        }
      case BASKET_DELETE_ITEM:
        return state.filter(item => item.id !== action.payload);
      default:
          return state
  }
};