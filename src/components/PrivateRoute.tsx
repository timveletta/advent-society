import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute: FC<any> = ({ children, ...rest }) => (
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
