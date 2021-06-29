import React from 'react'
import Meal from './Meal'

export default function MealPlanList({ meals }) {
const nutrients = meals.nutrients;


    return (
        <div className="mealplan-container">
            <section className="macros">
                <h1>Meals Macros</h1>
                <ul>
                    <li>Calories: {nutrients.calories}</li>
                    <li>Protein: {nutrients.protein} g</li>
                    <li>Carbs: {nutrients.carbohydrates} g</li>
                    <li>Fats: {nutrients.fat} g</li>
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
