import {
  getAllAlbums,
  getPhotosInAlbum,
  getAllPhotos
} from "../api/photosClient";
import allPhotosMock from "./mocks/allPhotos.json";
import albumsMock from "./mocks/albums.json";
import photosInAlbumsMock from "./mocks/photosInAlbums.json";

export const Actions = {
  LOGIN_USER: "LOGIN",
  LOGOUT_USER: "LOGOUT",
  GET_ALBUMS: "GET_ALBUMS",
  GET_ALL_PHOTOS: "GET_ALL_PHOTOS",
  GET_ALL_PHOTOS_IN_ALBUMS: "GET_ALL_PHOTOS_IN_ALBUMS"
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
    // TODO - REMOVE MOCK
    // const albums = await getAllAlbums(token);
    const albums = albumsMock;
    dispatch({
      type: Actions.GET_ALBUMS,
      payload: albums
    });
  };
};

export const getAllPhotosAction = (token) => {
  return async (dispatch) => {
    // TODO - REMOVE MOCK
    // const photos = await getAllPhotos(token);
    const photos = allPhotosMock;
    dispatch({
      type: Actions.GET_ALL_PHOTOS,
      payload: photos
    });
  };
};

export const getAllPhotosInAlbumsAction = (token) => {
  return async (dispatch) => {
    // TODO - REMOVE MOCK
    // const albums = await getAllAlbums(token);
    // const photos = await Promise.all(
    //   albums.map(async album => await getPhotosInAlbum(token, album.id))
    // );
    const photos = photosInAlbumsMock;
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
