import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated, user } = useAuth0();
  const auth = isAuthenticated && user;

  return (
    <Route
      {...rest}
      render={() => {
        return auth ? children : <Redirect to='/login' />;
      }}
    ></Route>
  );
}

export default PrivateRoute;
