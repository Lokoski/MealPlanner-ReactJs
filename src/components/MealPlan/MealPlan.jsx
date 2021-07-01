import React,{ useState } from 'react';
import MealPlanList from './MealPlanList'
import {Link} from 'react-router-dom'

export default function MealPlan() {

    const[calories, setCalories] = useState(2000);
    const[meals, setMeals] = useState(null)

    function handleChange(e){
        setCalories(e.target.value);
    }

    
    function getMealPlan(){
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=2e618e51bf8e49c493a61516d7a4c1ee&timeFrame=day&targetCalories=${calories}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
        .then(res => res.json())
        .then(data => {
            setMeals(data)
        })
        .catch(err => err.message )
    }

    return (
        <main>
            <nav className="nav">
                <Link className="nav-link" to='/meal'>Single Meal</Link>
                <Link className="nav-link" to='/'>Home</Link>
            </nav>
            <div className="meal-plan">
                <input type="number" onChange={handleChange} placeholder="Calories (e.g. 2000)" />
                <button onClick={getMealPlan}>Get Meal Plan</button>
                {meals && <MealPlanList  meals={meals} />}
            </div>
        </main>
        
    )
}
