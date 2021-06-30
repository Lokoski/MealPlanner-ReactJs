import React from 'react'
import Meal from './Meal'

export default function MealPlanList({ meals }) {
const nutrients = meals.nutrients;


    return (
        <div className="mealplan-container">
            <section className="macros">
                <h1>Meals Macros</h1>
                <ul className="macros-list">
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)} g</li>
                    <li>Carbs: {nutrients.carbohydrates.toFixed(0)} g</li>
                    <li>Fats: {nutrients.fat.toFixed(0)} g</li>
                </ul>
            </section>

            <section className="meals">
                {meals.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />
                })}
            </section>
        </div>
    )
}
