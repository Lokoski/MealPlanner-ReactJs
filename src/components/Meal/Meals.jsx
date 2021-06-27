import React,{useState, useEffect} from 'react'

export default function Meals( {meals} ) {

    const [recipeUrl, setRecipeUrl] = useState("");


    useEffect(() =>{
        fetch(`https://api.spoonacular.com/recipes/${meals.id}/information?apiKey=2e618e51bf8e49c493a61516d7a4c1ee&includeNutrition=false`)
    
    .then(res => res.json())
    .then(data => {
        setRecipeUrl(data.sourceUrl)
    })
    .catch(err => err.message)
    }, [meals.id])

    return (
        <div>
            <h1>{meals.title}</h1>
            <img src={meals.image} alt="recipes" />
            <ul>
                <li>Calories: {meals.calories} </li>
                <li>Protein: {meals.protein}</li>
                <li>Carbs: {meals.carbs}</li>
                <li>Fats: {meals.fat}</li>
            </ul>
            <a href={recipeUrl} target="_blank" rel="noopener noreferrer" >See recipe</a>
        </div>
    )
}
