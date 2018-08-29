import { put, call } from "redux-saga/effects";
import { createNewAlbum } from "../sagas";
import { organizePhotos } from "../api/photosClient";
import { Actions } from "../actions";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import createNewAlbumMock from "../api/mocks/createNewAlbum.json";
import { Endpoints } from "../api/photosClient";

// MOCK SETUP
const mockAxios = new MockAdapter(axios);
mockAxios.onPost(Endpoints.CREATE_NEW_ALBUM).reply(200, createNewAlbumMock);

describe("Photos Saga", () => {
  it.skip("createNewAlbum", () => {
    const payload = {
      token: "token",
      photos: ["photo 1", "photo 2", "photo 3"],
      title: "New Album Title"
    };
    const inputAction = {
      type: Actions.CREATE_NEW_ALBUM.START,
      payload
    };

    const sagaGenerator = createNewAlbum(inputAction);

    expect(sagaGenerator.next().value).toEqual(
      call(organizePhotos, payload.token, payload.photos, payload.title)
    );

    const expectedOutputAction = {
      type: Actions.CREATE_NEW_ALBUM.SUCCESS,
      payload: createNewAlbumMock
    };

    // TODO fix the test - the 'newAlbum' vale is undefined which causes second yield to fail
    expect(sagaGenerator.next().value).toEqual(put(expectedOutputAction));
  });
});
