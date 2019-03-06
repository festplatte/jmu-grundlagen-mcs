import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_PRODUCT_AMOUNT,
  CLEAR_CART
} from "./types";

export const addToCart = product => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: product });
};

export const removeFromCart = product => dispatch => {
  dispatch({ type: REMOVE_FROM_CART, payload: product });
};

export const decreaseProductAmount = product => dispatch => {
  dispatch({ type: DECREASE_PRODUCT_AMOUNT, payload: product });
};

export const clearCart = () => dispatch => {
  dispatch({ type: CLEAR_CART });
};
