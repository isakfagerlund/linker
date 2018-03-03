import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import "./styles/index.css";
import fontawesome from "@fortawesome/fontawesome";
import faPencilAlt from "@fortawesome/fontawesome-free-solid/faPencilAlt";
import faBan from "@fortawesome/fontawesome-free-solid/faBan";
import Header from "./components/Header";
import Router from "./containers/Router";
import linkerApp from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

// Add fontAwesome icons
function fontAwesome() {
  fontawesome.library.add(faPencilAlt, faBan);
}
fontAwesome();

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
