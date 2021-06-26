import React, { useState } from "react";

function Meals() {

  const [mealInfo, setMealInfo] = useState(null);
  const [minCalories, setMinCalories] = useState(2000);
  const [maxCalories, setMaxCalories] = useState(2000);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);

  function handleChangeMinCalories(e) {
    setMinCalories(e.target.value);
  }

  function handleChangeMaxCalories(e) {
    setMaxCalories(e.target.value);
  }

  function handleChangeProtein(e) {
    setProtein(e.target.value);
  }

  function handleChangeCarbs(e) {
    setCarbs(e.target.value);
  }

  function handleChangeFats(e) {
    setFats(e.target.value);
  }

  //API KEY 42551a2ea4e542d98149accec741587d

  // 'https://api.spoonacular.com/recipes/findByNutrients?apiKey=42551a2ea4e542d98149accec741587d&minCarbs=${carbs}&minProtein=${protein}&minFat=${fats}&maxCalories=${calories}'

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?apiKey=42551a2ea4e542d98149accec741587d&minCarbs=${carbs}&minProtein=${protein}&minFat=${fats}&maxCalories=${maxCalories}&minCalories=${minCalories}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMealInfo(data);
        console.log(data)
      })
      .catch(() => {
        console.log("error");
      });
  }



  return (
    <div className="Meals">
      <div className="container">
        <input
          type="number"
          placeholder="Min Calories (e.g. 2000)"
          onChange={handleChangeMinCalories}
        />

<input
          type="number"
          placeholder="Max Calories (e.g. 2000)"
          onChange={handleChangeMaxCalories}
        />

        <input
          type="number"
          placeholder="Protein"
          onChange={handleChangeProtein}
        />

        <input
          type="number"
          placeholder="Carbs"
          onChange={handleChangeCarbs}
        />

        <input
          type="number"
          placeholder="Fats"
          onChange={handleChangeFats}
        />

        <button onClick={getMealData} className="button">Get Meal Plan</button>
      </div>
      {/* {mealInfo && <MealList mealInfo={mealInfo}} */}
    </div>
  );
}

export default Meals;
