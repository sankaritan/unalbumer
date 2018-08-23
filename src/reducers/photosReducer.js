import { Actions } from "../actions";

export const photosReducer = (state = {}, action) => {
  switch (action.type) {
    case Actions.GET_ALBUMS:
      return { ...state, albums: action.payload };
    default:
      return state;
  }
};
