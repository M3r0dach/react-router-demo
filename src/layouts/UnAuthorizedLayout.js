import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
const UnAuthorizedLayout = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/login`} component={LoginPage} />
    <Redirect to="/auth/login" />
  </Switch>
);
export default UnAuthorizedLayout;
