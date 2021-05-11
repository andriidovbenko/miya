import { makeAutoObservable } from 'mobx';

const initialState = JSON.parse(localStorage.getItem('basket')) || [];

class BasketStore {
    items = initialState;
    constructor() {
        makeAutoObservable(this);
        
    }
    addItem(newItem){
        const index = this.items.findIndex(item => {
            return item.id === newItem.id
        });
        if (index === -1) {
            newItem.amount = 1;
            this.items.push(newItem)
        } else {
            this.items[ index ].amount++
        }
        localStorage.setItem('basket', JSON.stringify(this.items))
        
    }
    deleteItem(deletedItemId){
        const index = this.items.findIndex(item => {
            return item.id === deletedItemId
        });
        this.items.splice(index, 1);
        localStorage.setItem('basket', JSON.stringify(this.items))
    }
    get itemsInBasket() {
        return this.items.length;
    }
}

export default BasketStore;