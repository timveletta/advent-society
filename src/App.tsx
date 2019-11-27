import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Timer from "./components/Timer";
import PrivateRoute from "./components/PrivateRoute";
import PuzzleContainer from "./containers/PuzzleContainer";

const App = () => {
  const targetDate: Date = new Date(2019, 11, 13, 9);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {targetDate.getTime() - new Date().getTime() > 0 ? (
            <Timer targetDate={targetDate} />
          ) : (
            <div>Enter the code</div>
          )}
        </Route>
        <PrivateRoute path="/puzzle/:id">
          <PuzzleContainer />
        </PrivateRoute>
        <Route>
          <h3>404 Not Found</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
