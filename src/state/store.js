import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";
import { rootReducer, rootSaga } from "./ducks";

export const history = createHistory();
history.push("/");

// initial state of the store, that will be used by the app
export const initialState = {
  user: {
    username: null,
    loggedIn: false,
    oauthToken: null
  },
  photos: {
    albums: [],
    photosInAlbums: [],
    allPhotos: [],
    newAlbum: null
  }
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer
  }),
  initialState,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history), sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;
