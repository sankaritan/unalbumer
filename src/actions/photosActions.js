import {
  getAllAlbums,
  getPhotosInAlbum,
  getAllPhotos,
  organizePhotos
} from "../api/photosClient";

// MOCK SETUP
// import MockAdapter from "axios-mock-adapter";
// import axios from "axios";
// import { Endpoints } from "../api/photosClient";

// import albumsMock from "./mocks/albums.json";
// import allPhotosMock from "./mocks/allPhotos.json";
// import photosInAlbumsMock from "./mocks/photosInAlbums.json";
// import createNewAlbumMock from "./mocks/createNewAlbum.json";

// const mockAxios = new MockAdapter(axios);
// mockAxios.onGet(Endpoints.ALBUMS).reply(200, albumsMock);
// mockAxios.onGet(Endpoints.MEDIA_ITEMS).reply(200, allPhotosMock);
// mockAxios.onPost(Endpoints.MEDIA_ITEMS_SEARCH).reply(200, photosInAlbumsMock);
// mockAxios.onPost(Endpoints.CREATE_NEW_ALBUM).reply(200, createNewAlbumMock);

export const Actions = {
  GET_ALBUMS: "GET_ALBUMS",
  GET_ALL_PHOTOS: "GET_ALL_PHOTOS",
  GET_ALL_PHOTOS_IN_ALBUMS: "GET_ALL_PHOTOS_IN_ALBUMS",
  CREATE_NEW_ALBUM: "CREATE_NEW_ALBUM"
};

export const getAlbumsAction = (token) => {
  return async (dispatch) => {
    const albums = await getAllAlbums(token);
    dispatch({
      type: Actions.GET_ALBUMS,
      payload: albums
    });
  };
};

export const getAllPhotosAction = (token) => {
  return async (dispatch) => {
    const photos = await getAllPhotos(token);
    dispatch({
      type: Actions.GET_ALL_PHOTOS,
      payload: photos
    });
  };
};

export const flattenPhotos = (photos) => {
  const concat = (x, y) => x.concat(y);
  return photos.map((photo) => photo.data.mediaItems).reduce(concat, []);
};

export const getAllPhotosInAlbumsAction = (token) => {
  return async (dispatch) => {
    const albums = await getAllAlbums(token);
    const photos = await Promise.all(
      albums.map(async (album) => await getPhotosInAlbum(token, album.id))
    );
    const flattenedPhotos = flattenPhotos(photos);
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
