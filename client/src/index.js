import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import "./styles/index.css";
import Header from "./components/Header";
import Router from "./containers/Router";
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
    <React.Fragment>
      <Header />
      <Router />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);
