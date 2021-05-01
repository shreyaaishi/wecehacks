import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  //const [imageUrl, setImageUrl] = useState("");
  const [mealData, setMealData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=7c247e08eca8496ab90b294298ff27f4&includeNutrition=false`
    )
        .then(response => response.json())
        .then((data) => {
            setMealData(data);
            console.log(data);
        })
        .catch(() => {
            console.log("error");
        })
        console.log(mealData);
    }, [])

  return (
    <article>
      <h1><a href={mealData.sourceUrl}>{mealData.title}</a></h1>
      <img src={mealData.image} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {mealData.readyInMinutes} minutes</li>
        <li>Number of servings: {mealData.servings}</li>
      </ul>

      
    </article>
  );
}
