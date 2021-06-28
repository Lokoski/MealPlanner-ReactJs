import React, { useState } from "react";
import SingleMeal from "./Meal/MealsPlan";
import MealPlan from "./MealPlan/MealPlan";

export default function HomePage() {
  const [meal, setMeal] = useState(false);
  const [mealPlan, setMealPlan] = useState(false);

  function handleMeal() {
    setMeal(true);
    setMealPlan(false);
  }

  function handleMealPlan() {
    setMealPlan(true);
    setMeal(false);
  }

  return (
    <div className="container">
      <h1>
        WE ARE HERE TO HELP YOU DECIDE WHAT TO EAT! PLEASE CHOOSE A PREFERRED
        OPTION{" "}
      </h1>
      <div className="home-page">
        <button style={meal ? { display: "none" } : {}} onClick={handleMeal}>
          Single Meal
        </button>
        {meal && <SingleMeal />}
        <button
          style={mealPlan ? { display: "none" } : {}}
          onClick={handleMealPlan}
        >
          Meal Plan
        </button>
        {mealPlan && <MealPlan />}
      </div>
    </div>
  );
}
