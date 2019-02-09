import React from "react";
import { NavLink } from "react-router-dom";
require("../styles.css");
const PrimaryHeader = () => (
  <header className="primary-header">
    <h1>Welcome to our app!</h1>
    <nav>
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/user" activeClassName="active">
        Users
      </NavLink>
    </nav>
  </header>
);
export default PrimaryHeader;
