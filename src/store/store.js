import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

export const history = createHistory();
history.push("/");

// initial state of the store, that will be used by the app
export const initialState = {
  counter: {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
  },
  homeTitle: "Default Home Title",
  somethingElse: true
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store object
const store = createStore(
  // combine all custom reducers + router reducer into one
  combineReducers({
    ...rootReducer,
    router: routerReducer
  }),
  initialState,
  // define middleware
  // > thunk - to allow actions that return function
  // > history - to allow routing via pushing into history array)
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

export default store;
