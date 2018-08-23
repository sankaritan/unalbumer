import { Actions } from "../actions";

export const oauthReducer = (state = {}, action) => {
  switch (action.type) {
    case Actions.LOGIN_USER:
      const { username, token } = action.payload;
      return {
        ...state,
        loggedIn: true,
        username: username,
        oauthToken: token
      };
    case Actions.LOGOUT_USER:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};
