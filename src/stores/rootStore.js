import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import GoodsStore from './goodsStore';
import BasketStore from './basketStore'

class RootStore {
    constructor() {
        makeAutoObservable(this);
        this.goodsStore = new GoodsStore(this)
        this.basketStore = new BasketStore(this)
    }
}

const StoreContext = createContext(new RootStore());

const StoreProvider = ({ store, children }) => {
    return <StoreContext.Provider value={ store }>
        {children}
    </StoreContext.Provider>
}

const useStore = () => {
    return useContext(StoreContext);
}

export { RootStore, StoreProvider, useStore }