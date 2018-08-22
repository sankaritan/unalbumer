import { Actions } from "../actions/actions";

export const homeTitleReducer = (state = {}, action) => {
  switch (action.type) {
    case Actions.CHANGE_TITLE:
      return "New Home Title";
    default:
      return state;
  }
};
