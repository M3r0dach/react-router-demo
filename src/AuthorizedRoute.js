import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, pending, logged, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          logged ? <Component {...props} /> : <Redirect to="/auth/login" />
        }
      />
    );
  }
}

const stateToProps = ({ loginState }) => ({
  pending: loginState.pending,
  logged: loginState.logged
});

export default connect(stateToProps)(AuthorizedRoute);
