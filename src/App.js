import React from "react";
import "./App.css";
import HomePage from "./components/HomePage"
import {Switch, Route} from "react-router-dom"

function App() {
  

  return (
    <div className="App">
    <Switch>
        <Route path="/" component={HomePage} exact />
    </Switch>
    </div>
  );
}

export default App;
