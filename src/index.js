import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import "./index.css";
import App from "./App";
import store, { history } from "./store/store";

ReactDOM.render(
  // Redux helper component that provides store to entire app
  <Provider store={store}>
    {/* Router component that provides access to history to entire app */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
