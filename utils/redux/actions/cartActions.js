import * as types from '../types/cartTypes';

export const cartAddAction = (data) => {
    return {
        type: types.CART_ADD_ACTION,
        payload: data
    }
}

export const cartResetAction = (data) => {
    return {
        type: types.CART_RESET_ACTION,
    }
}