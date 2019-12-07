import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PuzzleContainer from "./containers/PuzzleContainer";
import DashboardContainer from "./containers/DashboardContainer";
import TimerContainer from "./containers/TimerContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <TimerContainer />
        </Route>
        <PrivateRoute path="/puzzle/:id">
          <PuzzleContainer />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <DashboardContainer />
        </PrivateRoute>
        <Route>
          <h3>404 Not Found</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
