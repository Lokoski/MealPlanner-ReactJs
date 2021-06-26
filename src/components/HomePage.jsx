import React, { useState } from "react";
import SingleMeal from "./Meal/Meals";
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
    <div className="home-page-container">
      <button
        style={meal ? { display: "none" } : {}}
        onClick={handleMeal}
      >
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
  );
}
