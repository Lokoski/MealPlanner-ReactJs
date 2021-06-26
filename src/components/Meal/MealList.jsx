import React, { useState, useEffect } from 'react'

export default function MealList({ mealInfo }) {
    console.log(mealInfo)

    const i = Math.floor(Math.random() * 10);
    const protein = mealInfo[i].protein;
    const calories = mealInfo[i].calories;
    const carbs = mealInfo[i].carbs;
    const fat = mealInfo[i].fat;
    const image = mealInfo[i].image;
    const title = mealInfo[i].title;
    const id = mealInfo[i].id

    const [recipeUrl, setRecipeUrl] = useState("");
    console.log(mealInfo[i].id)

    useEffect(() =>{
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=42551a2ea4e542d98149accec741587d&includeNutrition=false`)
    
    .then(res => res.json())
    .then(data => {
        setRecipeUrl(data.sourceUrl)
        console.log(data.sourceUrl)
    })
    .catch(console.log('error'))
    }, [id])

    return (
        <div>
            <section className="macros">
                <h1>{title}</h1>
                <img src={image} alt="" /> 
                <h1>Meals Macros</h1>
                <ul>
                    <li>Calories: {calories} </li>
                    <li>Protein: {protein} </li>
                    <li>Carbs: {carbs} </li>
                    <li>Fat: {fat} </li>
                </ul>
                <a href={recipeUrl}>See recipe</a>
            </section>

        </div>
    )
}
