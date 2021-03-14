const initialState = [];
  
export default function basketReducer(state = initialState, action) {
  switch (action.type) {
      case 'BASKET/ADD_ITEM':
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
      default:
          return state
  }
};