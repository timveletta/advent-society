import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      true ? ( // implement 'auth' flow here
        children
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />
      )
    }
  ></Route>
);
