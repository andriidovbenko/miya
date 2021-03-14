import { BASKET_ADD_ITEM, BASKET_DELETE_ITEM } from './actionTypes';

export const addToBasket = item => ({
    type: BASKET_ADD_ITEM,
    payload: item
});

export const deleteBasketItem = id => ({
    type: BASKET_DELETE_ITEM,
    payload: id
})