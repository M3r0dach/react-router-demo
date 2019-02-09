import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import PrimaryLayout from "./layouts/PrimaryLayout";
import "./styles.css";

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
