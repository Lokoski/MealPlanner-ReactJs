import React from "react";
import Meals from "./Meals";
import Error from "../Error"

export default function MealList({ mealInfo }) {
  if(mealInfo[0]){
    return (
      <div className="mealplan-container">
        <h1>Choose your meal:</h1>
        <section className="meals">
          {mealInfo.map((meals) => {
            return <Meals key={meals.id} meals={meals} />;
          })}
        </section>
      </div>
    );
  }
    return <Error /> 
}

