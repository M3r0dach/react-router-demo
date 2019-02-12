import React from "react";
import { logout } from "../utils/xhr";
const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <br />
    <br />
    <button onClick={logout}>logout</button>
  </div>
);
export default HomePage;
