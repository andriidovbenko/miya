import {
    BASKET_ADD_ITEM,
    BASKET_DELETE_ITEM,
    BASKET_INCREASE_ITEM_AMOUNT,
    BASKET_DECREASE_ITEM_AMOUNT
} from './actionTypes';

export const addToBasket = item => ({
    type: BASKET_ADD_ITEM,
    payload: item
});

export const deleteBasketItem = id => ({
    type: BASKET_DELETE_ITEM,
    payload: id
})

export const increaseItemAmount = id => ({
    type: BASKET_INCREASE_ITEM_AMOUNT,
    payload: id
})

export const decreaseItemAmount = id => ({
    type: BASKET_DECREASE_ITEM_AMOUNT,
    payload: id
})