import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = product => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: product });
};

export const removeFromCart = product => dispatch => {
  dispatch({ type: REMOVE_FROM_CART, payload: product });
};
