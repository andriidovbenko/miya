import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('basket', JSON.stringify(state.basketItems))
});

export default store;