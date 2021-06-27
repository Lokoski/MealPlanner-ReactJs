import React from "react";
import Meals from "./Meals";

export default function MealList({ mealInfo }) {
  return (
    <div>
      <h1>Choose your meal:</h1>
      <section className="">
        {mealInfo.map((meals) => {
          return <Meals key={meals.id} meals={meals} />;
        })}
      </section>
    </div>
  );
}
