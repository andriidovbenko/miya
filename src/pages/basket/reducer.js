const initialState = [];
  
  export default function reducer(state = initialState, action) {
    console.log('basket reducer', state);
    switch (action.type) {
        case 'BASKET/ADD_ITEM':
          return [...state, action.payload]
        default:
            return state
    }
  }