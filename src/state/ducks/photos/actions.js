import {
    getAllAlbums,
    getPhotosInAlbum,
    getAllPhotos,
    Endpoints
  } from "./api/photosClient";
  
  import MockAdapter from "axios-mock-adapter";
  import axios from "axios";
  
  import albumsMock from "./api/mocks/albums.json";
  import allPhotosMock from "./api/mocks/allPhotos.json";
  import photosInAlbumsMock from "./api/mocks/photosInAlbums.json";
  import createNewAlbumMock from "./api/mocks/createNewAlbum.json";
  
  if (process.env.REACT_APP_MOCKS) {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet(Endpoints.ALBUMS).reply(200, albumsMock);
    mockAxios.onGet(Endpoints.MEDIA_ITEMS).reply(200, allPhotosMock);
    mockAxios.onPost(Endpoints.MEDIA_ITEMS_SEARCH).reply(200, photosInAlbumsMock);
    mockAxios.onPost(Endpoints.CREATE_NEW_ALBUM).reply(200, createNewAlbumMock);
  }
  
  export const Actions = {
    GET_ALBUMS: "GET_ALBUMS",
    GET_ALL_PHOTOS: "GET_ALL_PHOTOS",
    GET_ALL_PHOTOS_IN_ALBUMS: "GET_ALL_PHOTOS_IN_ALBUMS",
    CREATE_NEW_ALBUM: {
      START: "START",
      SUCCESS: "SUCCESS"
    }
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
  
  // doing it the Saga way!
  export const createNewAlbumAction = (token, photos, title) => {
    return {
      type: Actions.CREATE_NEW_ALBUM.START,
      payload: { token, photos, title }
    };
  };
  