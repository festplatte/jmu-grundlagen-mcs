import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_PRODUCT_AMOUNT
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
