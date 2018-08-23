import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

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
    albums: []
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

export default store;