import React,{ useState } from 'react';
import MealPlanList from './MealPlanList'

export default function MealPlan() {

    const[calories, setCalories] = useState(2000);
    const[meals, setMeals] = useState(null)

    function handleChange(e){
        setCalories(e.target.value);
    }

    function getMealPlan(){
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=42551a2ea4e542d98149accec741587d&timeFrame=day&targetCalories=${calories}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          })
        .then(res => res.json())
        .then(data => {
            setMeals(data)
            console.log(data)
        })
        .catch(() => {
            console.log('error')
        })
    }

    return (
        <div>
            <input type="number" onChange={handleChange} placeholder="Calories (e.g. 2000)" />
            <button onClick={getMealPlan}>Get Meal Plan</button>
            {meals && <MealPlanList  meals={meals} />}
        </div>
    )
}
