import { combineReducers } from 'redux';
import goodsReducer from './goodsReducer';
import basketReducer from './basketReducer';
import userReducer from './userReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
    goods: goodsReducer,
    basketItems: basketReducer,
    user: userReducer,
    oreders: ordersReducer
})
  
export default rootReducer;
