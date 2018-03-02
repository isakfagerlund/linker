import React from "react";
import ReactDOM from "react-dom";
import App from "../containers/App";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import linkerApp from "../reducers";

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(linkerApp, middleware);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  ReactDOM.unmountComponentAtNode(div);
});
