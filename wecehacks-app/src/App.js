import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import './App.css';

function App() {
  const [mealData, setMealData] = useState(null);
  const [ingredientList, setIngredientList] = useState("");

  function getMealData() {
    fetch(
      'https://api.spoonacular.com/recipes/findByIngredients?apiKey=7c247e08eca8496ab90b294298ff27f4&ingredients={apples,+flour,+sugar}&number=2'
    ).then(response=>response.json())
    .then((data) => {
      setMealData(data);
    })
    .catch(() => {
      console.log("error");
    });
  }
  function handleChange(e) {
    let input = e.target.value;
    console.log(input);
    input.replaceAll(",", ",+");
    console.log(input);
    setIngredientList(e.target.value);
  }

  return (
  <html>
    <head>
      <title>Cooking for Dummies</title>
      <script src="script.js"></script>
      <link rel="stylesheet" href="food.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div class="header">
        <h1>Cooking for Dummies</h1>
      </div>
    <div class="row">
      <div class="column left">
        <h2 class="intro">
          Not the best at cooking? Tired of cooking ramen over and over? Fear
          not! Enter any ingredients that you have and we will handpick recipes
          that are easy for anyone to make!
        </h2>

        <label id="fname" for="fname">Input Ingredients: </label>
        <input
          type="text"
          id="ingredients"
          name="ingredients"
          placeholder="Enter a comma separated list of ingredients (eg: tomato,onion,potato)..."
          onChange={handleChange}
        />

        <h2  id="fname" for="fname">Cuisine:</h2>
        <label class="container"
          >Mediterranean<input type="checkbox" /><span class="checkmark"></span
        ></label>
        <label class="container"
          >Thai<input type="checkbox" /><span class="checkmark"></span
        ></label>
        <label class="container"
          >Chinese<input type="checkbox" /><span class="checkmark"></span
        ></label>
        <label class="container"
          >Italian<input type="checkbox" /><span class="checkmark"></span
        ></label>
        <label class="container"
          >Indian<input type="checkbox" /><span class="checkmark"></span
        ></label>
        <label class="container"
          >Mexican<input type="checkbox" /><span class="checkmark"></span
        ></label>
        <label class="container"
          >European<input type="checkbox" /><span class="checkmark"></span
        ></label>

        <h2  id="fname" for="fname">Meal type:</h2>
        <label class="container2"
          >Breakfast
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark2"></span>
        </label>
        <label class="container2"
          >Main Course
          <input type="radio" name="radio" />
          <span class="checkmark2"></span>
        </label>
        <label class="container2"
          >Snack
          <input type="radio" name="radio" />
          <span class="checkmark2"></span>
        </label>
        <label class="container2"
          >Beverage
          <input type="radio" name="radio" />
          <span class="checkmark2"></span>
        </label>
        <label class="container2"
          >Dessert
          <input type="radio" name="radio" />
          <span class="checkmark2"></span>
        </label>
      </div>
      <div class="column right">
        <button class="button" id="myBtn">Get Fun Food Joke</button>
        <button onClick={getMealData}class="button2">Find me something to cook!</button>
      </div>
      </div>
      <div class="row">
        <div class="column left">
      {mealData?.map((meal) => {
        console.log(meal);
        return <RecipeCard key={meal.id} meal={meal} />;
      })}
      </div>
      </div>
    </body>
  </html>

  );
}

export default App;
