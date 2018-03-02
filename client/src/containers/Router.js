import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import UrlRedirect from "./UrlRedirect";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/404" component={NotFound} />
      <Route path="/:hash" render={props => <UrlRedirect {...props} />} />
    </Switch>
  </BrowserRouter>
);

export default Router;
