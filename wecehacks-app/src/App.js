import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import './App.css';

function App() {
  const [mealData, setMealData] = useState(null);

  function getMealData() {
    fetch(
      'https://api.spoonacular.com/recipes/findByIngredients?apiKey=7c247e08eca8496ab90b294298ff27f4&ingredients=apples,+flour,+sugar&number=2'
    ).then(response=>response.json())
    .then((data) => {
      setMealData(data);
    })
    .catch(() => {
      console.log("error");
    });
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          //onChange={handleChange}
        />
      <button onClick={getMealData}>Test API</button>
    </section>
    <section>
      {mealData?.map((meal) => {
        console.log(meal);
        return <RecipeCard key={meal.id} meal={meal} />;
      })}
    </section>
    </div>
  );
}

export default App;
