import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timer from "./components/Timer";
import Puzzle from "./components/Puzzle";

function App() {
  const targetDate = new Date(2019, 11, 13, 9);

  return (
    <Router className="App">
      <Switch>
        <Route path="/puzzle">
          <Puzzle />
        </Route>
        <Route>
          {targetDate - new Date() > 0 ? (
            <Timer targetDate={targetDate} />
          ) : (
            <div>Enter the code</div>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
