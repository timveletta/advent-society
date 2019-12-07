import React, { FC, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

export const CODE = "5278";

const PrivateRoute: FC<any> = ({ children, ...rest }) => {
  const storedCode = localStorage.getItem("CODE");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        storedCode && storedCode === CODE ? (
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
};

export default PrivateRoute;
