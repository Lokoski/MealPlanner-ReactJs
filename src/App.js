import React from "react";
import "./App.css";
import HomePage from "./components/HomePage"
import { Redirect, Switch, Route}  from "react-router-dom"
import SingleMeal from "./components/Meal/MealsPlan";
import MealPlan from "./components/MealPlan/MealPlan";

function App() {
  

  return (
    <div className="App">
    <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/Meal" component={SingleMeal} />
        <Route path="/MealPlan" component={MealPlan} />
        <Redirect to="/" />
    </Switch>
    </div>
  );
}

export default App;
