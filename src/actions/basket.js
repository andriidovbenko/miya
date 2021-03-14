import { BASKET_ADD_ITEM } from './actionTypes';

export const addToBasket = item => ({
    type: BASKET_ADD_ITEM,
    payload: item
});