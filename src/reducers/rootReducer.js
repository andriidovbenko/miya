import { combineReducers } from 'redux';
import goodsReducer from './goodsReducer';
import basketReducer from './basketReducer'

const rootReducer = combineReducers({
    goods: goodsReducer,
    basketItems: basketReducer
})
  
export default rootReducer;
