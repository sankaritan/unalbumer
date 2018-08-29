import { Actions } from "./actions";
import { organizePhotos } from "./api/photosClient";
import { call, put, takeEvery, all } from "redux-saga/effects";

// Our worker Saga: will perform the async increment task
export function* createNewAlbum(action) {
  const { token, photos, title } = action.payload;
  const newAlbum = yield call(organizePhotos, token, photos, title);
  yield put({
    type: Actions.CREATE_NEW_ALBUM.SUCCESS,
    payload: newAlbum.data
  });
}

// Our watcher Saga: spawn a new incrementAsync task on each CREATE_NEW_ALBUM.START
export function* watchCreateNewAlbum() {
  yield takeEvery(Actions.CREATE_NEW_ALBUM.START, createNewAlbum);
}

export default function*() {
  yield all([watchCreateNewAlbum()]);
}
