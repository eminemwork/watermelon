import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Structure from "routes/Structure";
import Home from "routes/Home";

function App() {
  return (
    <BrowserRouter basename="/">
      <Route>
        <Structure />
        <div className="container">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
