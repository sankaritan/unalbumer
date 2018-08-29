import { all } from "redux-saga/effects";
import { reducers as userReducer } from "./user";
import { reducers as photosReducer, sagas as photoSagas } from "./photos";

export const rootReducer = {
  user: userReducer,
  photos: photosReducer
};

export function* rootSaga() {
  yield all([photoSagas()]);
}
