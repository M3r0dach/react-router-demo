import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./styles.css";

const PrimaryLayout = match => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/user" component={UsersSubLayout} />
    </main>
  </div>
);
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
const HomePage = () => <h1>Home Page</h1>;
const UsersProfile = ({ match }) => <div>{match.params.id}</div>;
const User = () => <h1>User Page</h1>;
const UsersSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <aside>
      <nav>
        <NavLink to={match.path + "/1"}>1</NavLink>
        <NavLink to={match.path + "/2"}>2</NavLink>
      </nav>
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={User} />
        <Route path={`${match.path}/:id`} component={UsersProfile} />
      </Switch>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
