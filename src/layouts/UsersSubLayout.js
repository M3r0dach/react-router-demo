import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import {
  UserPage,
  UserProfilePage,
  BrowseUserPage,
  UserAddPage
} from "../pages/Page";
const UsersSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <aside>
      <nav>
        <NavLink to={match.path + "/"}>Browse</NavLink>
        <NavLink to={match.path + "/add"}>Add</NavLink>
      </nav>
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={BrowseUserPage} />
        <Route path={`${match.path}/add`} component={UserAddPage} />
        <Route path={`${match.path}/:id`} component={UserProfilePage} />
      </Switch>
    </div>
  </div>
);

export default UsersSubLayout;
