import { SIGN_IN, LOG_OUT } from "../actions/types";

const initialState = {
  user: null
};

// Reducer verarbeiten die durch Actions erzeugte Daten und manipulieren den State

// Gibt den neuen State zurück, in dem die Action verarbeitet wird
export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload
      };
    case LOG_OUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
