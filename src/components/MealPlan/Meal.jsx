import React, {useState, useEffect} from 'react'

export default function Meal({meal}) {

    const[imageUrl, setImageUrl] = useState("");

    useEffect(() =>{
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=2e618e51bf8e49c493a61516d7a4c1ee&includeNutrition=false`)
    .then(res => res.json())
    .then(data => {
        setImageUrl(data.image)
    })
    .catch(err => err.message)
    }, [meal.id])
    
    return (
        <div>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="recipes" />
            <ul>
                <li>Prep time: {meal.readyInMinutes} mins</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>
            <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer" >See recipe</a>
        </div>
    )
}
