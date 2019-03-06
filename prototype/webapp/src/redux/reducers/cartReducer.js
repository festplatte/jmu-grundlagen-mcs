import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_PRODUCT_AMOUNT,
  CLEAR_CART
} from "../actions/types";

const initialState = {
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let amountUpdated = false;
      const newCart = state.cart.map(x => {
        if (x.id === action.payload.id) {
          x.amount++;
          amountUpdated = true;
        }
        return x;
      });
      return {
        ...state,
        cart: amountUpdated
          ? newCart
          : state.cart.concat([{ ...action.payload, amount: 1 }])
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(x => x !== action.payload)
      };
    case DECREASE_PRODUCT_AMOUNT:
      return {
        ...state,
        cart: state.cart
          .map(x => ({
            ...x,
            amount: x.id === action.payload.id ? x.amount - 1 : x.amount
          }))
          .filter(x => x.amount > 0)
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
}
