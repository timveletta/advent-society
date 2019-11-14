import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Timer from "./components/Timer";
import PuzzleContainer from "./components/PuzzleContainer";

const App = () => {
  const targetDate: Date = new Date(2019, 11, 13, 9);

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/puzzle"> */}
        <Route>
          <PuzzleContainer />
        </Route>
        <Route>
          {targetDate.getTime() - new Date().getTime() > 0 ? (
            <Timer targetDate={targetDate} />
          ) : (
            <div>Enter the code</div>
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
