import axios from '../axios-adapter';
import {
    PROCESS_ORDER_REQUEST,
    PROCESS_ORDER_SUCCESS,
    PROCESS_ORDER_FAILURE
} from './actionTypes';

const url = 'orders/';

export const processOrederRequest = () => ({
    type: PROCESS_ORDER_REQUEST
});

export const processOrederSuccess = userData => ({
    type: PROCESS_ORDER_SUCCESS,
    payload: userData
});

export const processOrederFailure = error => ({
    type: PROCESS_ORDER_FAILURE,
    payload: error
});

export const processOreder = (orderData, resolve, reject) => {
    return async (dispatch) => {
        dispatch(processOrederRequest());
        try {
            await axios.post(url, orderData);
            dispatch(processOrederSuccess())
            resolve();
        } catch (error) {
            dispatch(processOrederFailure(error))
            reject();
        }
    }
}