import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  Actions,
  getAlbumsAction,
  getAllPhotosAction,
  getAllPhotosInAlbumsAction,
  flattenPhotos,
  createNewAlbumAction
} from "../actions";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

// MOCKS
import albumsMock from "../api/mocks/albums.json";
import allPhotosMock from "../api/mocks/allPhotos.json";
import photosInAlbumsMock from "../api/mocks/photosInAlbums.json";
import createNewAlbumMock from "../api/mocks/createNewAlbum.json";

import { Endpoints } from "../api/photosClient";

// MOCK SETUP
const mockStore = configureMockStore([thunk]);
const mockAxios = new MockAdapter(axios);
mockAxios.onGet(Endpoints.ALBUMS).reply(200, albumsMock);
mockAxios.onGet(Endpoints.MEDIA_ITEMS).reply(200, allPhotosMock);
mockAxios.onPost(Endpoints.MEDIA_ITEMS_SEARCH).reply(200, photosInAlbumsMock);
mockAxios.onPost(Endpoints.CREATE_NEW_ALBUM).reply(200, createNewAlbumMock);

describe("Photos Actions", () => {
  it("should get all albums", () => {
    const expectedActions = [
      {
        type: Actions.GET_ALBUMS,
        payload: albumsMock.albums
      }
    ];
    const store = mockStore({ albums: [] });

    return store.dispatch(getAlbumsAction("oauthToken")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should get all photos", () => {
    const expectedActions = [
      {
        type: Actions.GET_ALL_PHOTOS,
        payload: allPhotosMock.mediaItems
      }
    ];
    const store = mockStore({ allPhotos: [] });

    return store.dispatch(getAllPhotosAction("oauthToken")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should get all photos in albums", () => {
    const expectedPayload = flattenPhotos([
      { data: photosInAlbumsMock },
      { data: photosInAlbumsMock },
      { data: photosInAlbumsMock }
    ]);
    const expectedActions = [
      {
        type: Actions.GET_ALL_PHOTOS_IN_ALBUMS,
        payload: expectedPayload
      }
    ];
    const store = mockStore({ photosInAlbums: [] });

    return store.dispatch(getAllPhotosInAlbumsAction("oauthToken")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  //   describe("User Actions", () => {
  //     it("should create an action to log in user", () => {
  //       const username = "jaromirjagr";
  //       const token = "welcomeback";
  //       const expectedAction = {
  //         type: Actions.LOGIN_USER,
  //         payload: { token, username }
  //       };
  //       expect(loginUserAction(username, token)).toEqual(expectedAction);
  //     });
  //   });

  // no longer valid due to saga migration
  it("should create a new album", () => {
    const testData = {
      token: "oauthToken",
      photos: ["photo1", "photo2", "photo3"],
      title: "New Album"
    };
    const expectedAction = {
      type: Actions.CREATE_NEW_ALBUM.START,
      payload: { ...testData }
    };

    expect(
      createNewAlbumAction(testData.token, testData.photos, testData.title)
    ).toEqual(expectedAction);
  });

  it("should flatten photos in array", () => {
    const unflattened = [
      { data: { mediaItems: [1, 2] } },
      { data: { mediaItems: [3, 4] } },
      { data: { mediaItems: [5, 6] } }
    ];
    const flattenedExpected = [1, 2, 3, 4, 5, 6];
    expect(flattenPhotos(unflattened)).toEqual(flattenedExpected);
  });
});
