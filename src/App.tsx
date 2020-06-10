import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Structure from "routes/Structure";
import Home from "routes/Home";
import Info from "components/info";

function App() {
  return (
    <BrowserRouter basename="/">
      <Route>
        <Structure />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
          </Switch>
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
