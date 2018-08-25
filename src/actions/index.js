import {
  getAllAlbums,
  getPhotosInAlbum,
  getAllPhotos,
  organizePhotos
} from "../api/photosClient";
// TODO available mocks
// import allPhotosMock from "./mocks/allPhotos.json";
// import albumsMock from "./mocks/albums.json";
// import photosInAlbumsMock from "./mocks/photosInAlbums.json";

export const Actions = {
  LOGIN_USER: "LOGIN",
  LOGOUT_USER: "LOGOUT",
  GET_ALBUMS: "GET_ALBUMS",
  GET_ALL_PHOTOS: "GET_ALL_PHOTOS",
  GET_ALL_PHOTOS_IN_ALBUMS: "GET_ALL_PHOTOS_IN_ALBUMS",
  CREATE_NEW_ALBUM: "CREATE_NEW_ALBUM"
};

export const loginUserAction = (username, token) => {
  return {
    type: Actions.LOGIN_USER,
    payload: { username, token }
  };
};

export const logoutUserAction = () => {
  return { type: Actions.LOGOUT_USER };
};

export const getAlbumsAction = (token) => {
  return async (dispatch) => {
    const albums = await getAllAlbums(token);
    // TODO - available mock
    // const albums = albumsMock;
    dispatch({
      type: Actions.GET_ALBUMS,
      payload: albums
    });
  };
};

export const getAllPhotosAction = (token) => {
  return async (dispatch) => {
    const photos = await getAllPhotos(token);
    // TODO - available mock
    // const photos = allPhotosMock;
    dispatch({
      type: Actions.GET_ALL_PHOTOS,
      payload: photos
    });
  };
};

export const getAllPhotosInAlbumsAction = (token) => {
  return async (dispatch) => {
    const albums = await getAllAlbums(token);
    const photos = await Promise.all(
      albums.map(async (album) => await getPhotosInAlbum(token, album.id))
    );
    // TODO - available mock
    // const photos = photosInAlbumsMock;
    const concat = (x, y) => x.concat(y);
    const flattenedPhotos = photos
      .map((photo) => photo.data.mediaItems)
      .reduce(concat, []);
    dispatch({
      type: Actions.GET_ALL_PHOTOS_IN_ALBUMS,
      payload: flattenedPhotos
    });
  };
};

export const createNewAlbumAction = (token, photos, title) => {
  return async (dispatch) => {
    const newAlbum = await organizePhotos(token, photos, title);
    dispatch({
      type: Actions.CREATE_NEW_ALBUM,
      payload: newAlbum.data
    });
  };
};
