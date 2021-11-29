import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';
import { fetchGoods } from './actions/goods'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('basket', JSON.stringify(state.basketItems))
});
store.dispatch(fetchGoods())

export default store;