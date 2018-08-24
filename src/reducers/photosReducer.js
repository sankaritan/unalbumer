import { Actions } from "../actions";

export const photosReducer = (state = {}, action) => {
  switch (action.type) {
    case Actions.GET_ALBUMS:
      return { ...state, albums: action.payload };
    case Actions.GET_ALL_PHOTOS:
      return { ...state, allPhotos: action.payload };
    case Actions.GET_ALL_PHOTOS_IN_ALBUMS:
      return { ...state, photosInAlbums: action.payload };
    default:
      return state;
  }
};
