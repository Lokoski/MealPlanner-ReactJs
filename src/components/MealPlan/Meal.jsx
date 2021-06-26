import React, {useState, useEffect} from 'react'

export default function Meal({meal}) {

    const[imageUrl, setImageUrl] = useState("");

    useEffect(() =>{
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=42551a2ea4e542d98149accec741587d&includeNutrition=false`)
    
    .then(res => res.json())
    .then(data => {
        setImageUrl(data.image)
    })
    .catch(console.log('error'))
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
