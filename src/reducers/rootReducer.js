import { combineReducers } from 'redux';
import goodsReducer from './goodsReducer';
import basketReducer from './basketReducer'

const rootReducer = combineReducers({
    alternativeItems: goodsReducer,
    basketItems: basketReducer
})
  
export default rootReducer;
