import PrimaryHeader from "../ui/PrimaryHeader";
import UsersSubLayout from "./UsersSubLayout";
import { HomePage } from "../page/Page";
import React from "react";
import { Route } from "react-router-dom";

const PrimaryLayout = match => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/user" component={UsersSubLayout} />
    </main>
  </div>
);
export default PrimaryLayout;
