import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const PrimaryLayout = match => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
      <Route path={match.path} component={UsersMenu} />
    </header>

    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/user" component={UsersPage} />
    </main>
  </div>
);
const UsersMenu = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/User">User</Link>
    </li>
  </ul>
);
const HomePage = () => <h1>Home Page</h1>;
const UsersProfile = ({ match }) => <div>{match.params.id}</div>;
const User = () => <h1>User Page</h1>;
const UsersPage = ({ match }) => (
  <Switch>
    <Route path="/User" exact component={User} />
    <Route path={`${match.path}/:id`} component={UsersProfile} />
  </Switch>
);

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
