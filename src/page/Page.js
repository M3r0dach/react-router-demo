import React from "react";
import { NavLink } from "react-router-dom";
const HomePage = () => <h1>Home Page</h1>;
const UserProfilePage = ({ match }) => <div>{match.params.id}</div>;
const UserPage = () => <h1>User Page</h1>;
const UserAddPage = () => <h1>User Add Page</h1>;
const BrowseUserPage = ({ match }) => {
  console.log(match.path);
  return (
    <ul>
      <li>
        <NavLink to={`${match.path}/1`}>Ann</NavLink>
      </li>
      <li>
        <NavLink to={`${match.path}/2`}>Ken</NavLink>
      </li>
      <li>
        <NavLink to={`${match.path}/3`}>Tom</NavLink>
      </li>
    </ul>
  );
};
export { HomePage, UserProfilePage, UserPage, UserAddPage, BrowseUserPage };
