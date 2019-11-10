import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Timer from "./components/Timer";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/">
          <Timer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
