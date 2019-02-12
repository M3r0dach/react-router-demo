import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import PrimaryLayout from "./layouts/PrimaryLayout";
import UnAuthorizedLayout from "./layouts/UnAuthorizedLayout";
import AuthorizedRoute from "./AuthorizedRoute";
import store from "./store";
import "./styles.css";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={UnAuthorizedLayout} />
        <AuthorizedRoute path="/" component={PrimaryLayout} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById("root"));
