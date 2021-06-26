import React, { useState } from "react";
import SingleMeal from "./SingleMeal/Meals";
import MealPlan from "./MealPlan/MealPlan";

export default function HomePage() {
  const [singleMeal, setSingleMeal] = useState(false);
  const [mealPlan, setMealPlan] = useState(false);

  function handleSingleMeal() {
    setSingleMeal(true);
    setMealPlan(false);
  }

  function handleMealPlan() {
    setMealPlan(true);
    setSingleMeal(false);
  }

  return (
    <div className="home-page-container">
      <button
        style={singleMeal ? { display: "none" } : {}}
        onClick={handleSingleMeal}
      >
        Single Meal
      </button>
      {singleMeal && <SingleMeal />}
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
