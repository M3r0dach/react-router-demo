import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../utils/xhr";
const LoginPage = ({ pending, history }) => {
  return (
    <div>
      <header className="primary-header">
        <h1>LoginPage</h1>
      </header>
      {pending ? (
        <h2>pending</h2>
      ) : (
        <button
          onClick={() => {
            login().then(() => {
              history.replace("/");
            });
          }}
        >
          login
        </button>
      )}
    </div>
  );
};
const stateToProps = ({ loginState }) => {
  return {
    pending: loginState.pending,
    logged: loginState.logged
  };
};
export default withRouter(connect(stateToProps)(LoginPage));
