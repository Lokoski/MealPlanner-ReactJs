import React from 'react'
import Meal from './Meal'
import {Link} from 'react-router-dom'

export default function MealPlanList({ meals }) {
const nutrients = meals.nutrients;


    return (
        <div>
            <section className="macros">
                <h1>Meals Macros</h1>
                <ul>
                    <li>Calories: {nutrients.calories}</li>
                    <li>Protein: {nutrients.protein}</li>
                    <li>Carbs: {nutrients.carbohydrates}</li>
                    <li>Fats: {nutrients.fat}</li>
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
