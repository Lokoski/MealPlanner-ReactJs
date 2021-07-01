import React from "react";
// import SingleMeal from "./Meal/MealsPlan";
// import MealPlan from "./MealPlan/MealPlan";
import { Link } from "react-router-dom";

export default function HomePage() {
  // const [meal, setMeal] = useState(false);
  // const [mealPlan, setMealPlan] = useState(false);

  // function handleMeal() 
  //   setMeal(true);
  //   setMealPlan(false);
  // }

  // function handleMealPlan() {
  //   setMealPlan(true);
  //   setMeal(false);
  // }

  return (
    <div className="container">
      <h1>MEAL PLANNER</h1>
      <div className="home-page">
        <Link className="link" to="/meal">Single Meal</Link>
        <Link className="link" to="/mealplan">Meal Plan</Link>
      </div>
    </div>
  );
}
