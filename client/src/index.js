import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import "./styles/index.css";
import App from "./containers/App";
import linkerApp from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(
  linkerApp,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
