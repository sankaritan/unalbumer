import { Actions } from "./actions";

const photosReducer = (state = null, action) => {
  switch (action.type) {
    case Actions.GET_ALBUMS:
      return { ...state, albums: action.payload };
    case Actions.GET_ALL_PHOTOS:
      return { ...state, allPhotos: action.payload };
    case Actions.GET_ALL_PHOTOS_IN_ALBUMS:
      return { ...state, photosInAlbums: action.payload };
    case Actions.CREATE_NEW_ALBUM.SUCCESS:
      return { ...state, newAlbum: action.payload };
    default:
      return state;
  }
};

export default photosReducer;