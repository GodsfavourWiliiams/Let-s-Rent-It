import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const clearAllItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ALL_ITEM_FROM_CART,
})


export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const updateDate = (days) => ({
    type: 'SET_RETURN_DATE',
    payload: days
})