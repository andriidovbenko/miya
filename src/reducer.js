import { combineReducers } from 'redux'
import alternativeItemsReducer from './pages/alternative/reducer';
import basketItemsReducer from './pages/basket/reducer'

const rootReducer = combineReducers({
    alternativeItems: alternativeItemsReducer,
    basketItems: basketItemsReducer
})
  
export default rootReducer