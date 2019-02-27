import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = {
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat([action.payload])
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(x => x !== action.payload)
      };
    default:
      return state;
  }
}
