import axios from '../axios-adapter';
import {
    FETCH_GOODS_FAILURE,
    FETCH_GOODS_SUCCESS,
    FETCH_GOODS_REQUEST,
    ADD_NEW_GOODS_ITEM_SUCCESS,
    ADD_NEW_GOODS_ITEM_REQUEST,
    ADD_NEW_GOODS_ITEM_FAILURE,
    DELETE_GOODS_ITEM_REQUEST,
    DELETE_GOODS_ITEM_SUCCESS,
    DELETE_GOODS_ITEM_FAILURE,
    UPDATE_GOODS_ITEM_REQUEST,
    UPDATE_GOODS_ITEM_SUCCESS,
    UPDATE_GOODS_ITEM_FAILURE
} from './actionTypes';

const url = 'goods/'

export const fetchGoodsRequest = () => ({
    type: FETCH_GOODS_REQUEST
});

export const fetchGoodsSuccess = goods => ({
    type: FETCH_GOODS_SUCCESS,
    payload: goods
});

export const fetchGoodsFailure = error => ({
    type: FETCH_GOODS_FAILURE,
    payload: error
});

export const fetchGoods = () => {
    return async (dispatch) => {
        dispatch(fetchGoodsRequest());
        try {
            const resp = await axios.get(url);
            dispatch(fetchGoodsSuccess(resp.data))
        } catch (error) {
            dispatch(fetchGoodsFailure(error))
        }
    }
}

export const addNewGoodsItemRequest = () => ({
    type: ADD_NEW_GOODS_ITEM_REQUEST
});

export const addNewGoodsItemSuccess = (goodsItem) => ({
    type: ADD_NEW_GOODS_ITEM_SUCCESS,
    payload: goodsItem
});

export const addNewGoodsItemFailure = error => ({
    type: ADD_NEW_GOODS_ITEM_FAILURE,
    payload: error
});

export const addNewGoodsItem = (data, resolve, reject) => {
    return async (dispatch) => {
        dispatch(addNewGoodsItemRequest());
        try {
            const resp = await axios.post(url, data);
            dispatch(addNewGoodsItemSuccess(resp.data.createdItem));
            resolve(resp.data.createdItem)
        } catch (error) {
            dispatch(addNewGoodsItemFailure(error))
            reject();
        }
    }
}

export const deleteGoodsItemRequest = () => ({
    type: DELETE_GOODS_ITEM_REQUEST
});

export const deleteGoodsItemSuccess = (goodsItem) => ({
    type: DELETE_GOODS_ITEM_SUCCESS,
    payload: goodsItem
});

export const deleteGoodsItemFailure = error => ({
    type: DELETE_GOODS_ITEM_FAILURE,
    payload: error
});

export const deleteGoodsItem = (id, resolve, reject) => {
    return async (dispatch) => {
        dispatch(deleteGoodsItemRequest());
        try {
            const resp = await axios.delete(url + id);
            dispatch(deleteGoodsItemSuccess(id));
            resolve()
        } catch (error) {
            console.log(error)
            dispatch(deleteGoodsItemFailure(error))
            reject()
        }
    }
}

export const updateGoodsItemRequest = () => ({
    type: UPDATE_GOODS_ITEM_REQUEST
});

export const updateGoodsItemSuccess = (goodsItem) => ({
    type: UPDATE_GOODS_ITEM_SUCCESS,
    payload: goodsItem
});

export const updateGoodsItemFailure = error => ({
    type: UPDATE_GOODS_ITEM_FAILURE,
    payload: error
});

export const updateGoodsItem = (values, id, resolve, reject) => {
    return async (dispatch) => {
        dispatch(updateGoodsItemRequest());
        try {
            const resp = await axios.patch(url + id, values);
            dispatch(updateGoodsItemSuccess(resp.data));
            resolve(resp.data)
        } catch (error) {
            dispatch(updateGoodsItemFailure(error));
            reject(error);
        }
    }
}