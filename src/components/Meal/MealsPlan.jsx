import React, { useState } from "react";
import MealsList from "./MealsList";

function MealsPlan() {
  const [mealInfo, setMealInfo] = useState(null);
  const [minCalories, setMinCalories] = useState(0);
  const [maxCalories, setMaxCalories] = useState(0);
  const [protein, setProtein] = useState(0);

  function handleChangeMinCalories(e) {
    setMinCalories(e.target.value);
  }

  function handleChangeMaxCalories(e) {
    setMaxCalories(e.target.value);
  }

  function handleChangeProtein(e) {
    setProtein(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?apiKey=2e618e51bf8e49c493a61516d7a4c1ee&minCalories=${minCalories}&maxCalories=${maxCalories}&minProtein=${protein}&number=3`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMealInfo(data);
        console.log(data);
      })
      .catch((err) => err.message);
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Min Calories (e.g. 2000)"
        onChange={handleChangeMinCalories}
        required
      />
      <input
        type="number"
        placeholder="Max Calories (e.g. 2000)"
        onChange={handleChangeMaxCalories}
        required
      />
      <input
        type="number"
        placeholder="Protein"
        onChange={handleChangeProtein}
      />
      <button onClick={getMealData} className="button">
        Get a Meal
      </button>
      {mealInfo && <MealsList mealInfo={mealInfo} />}
    </div>
  );
}

export default MealsPlan;
