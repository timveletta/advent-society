import React, { SFC } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute: SFC<{ children: React.ReactNode; rest: any }> = ({
  children,
  ...rest
}) => (
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

export default PrivateRoute;
