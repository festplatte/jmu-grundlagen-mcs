import { SIGN_IN, LOG_OUT } from "./types";

// Actions dienen zum Beschaffen von neuen Daten, die dann an die Reducer über dispatch weitergegeben werden

export const signIn = user => dispatch => {
  dispatch({ type: SIGN_IN, payload: user });
};

export const logOut = () => dispatch => {
  dispatch({ type: LOG_OUT });
};
