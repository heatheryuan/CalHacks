import React, { useState } from 'react';


const mealTypeOptions = [
    "",
    "Breakfast",
    "Entree",
    "Snack/Appetizer",
    "Dessert",
  ];

const cookingTimeOptions = [
    "",
    "<25 min",
    "25-45 min",
    ">45 min"
]

function ImportForm() {
    const [ingredients, setIngredients] = useState({
      mustHave: [],
      cannotHave: [],
      canHave: [],
    });
    const [cookingTime, setCookingTime] = useState('');
    const [mealType, setMealType] = useState('');
  
    const handleMustHaveChange = (e) => {
      const mustHaveIngredients = e.target.value.split(',');
      setIngredients((prevIngredients) => ({
        ...prevIngredients,
        mustHave: mustHaveIngredients,
      }));
    };
  
    const handleCannotHaveChange = (e) => {
      const cannotHaveIngredients = e.target.value.split(',');
      setIngredients((prevIngredients) => ({
        ...prevIngredients,
        cannotHave: cannotHaveIngredients,
      }));
    };
  
    const handleIngredientsChange = (e) => {
      const inputIngredients = e.target.value.split(',');
      setIngredients((prevIngredients) => ({
        ...prevIngredients,
        canHave: inputIngredients,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const recipeData = {
        ingredients: {
          mustHave: ingredients.mustHave,
          cannotHave: ingredients.cannotHave,
          canHave: ingredients.canHave,
        },
        cookingTime: cookingTime,
        mealType: mealType,
      };
  
      fetch('http://127.0.0.1:5000/add_prefs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      })
        //.then((response) => response.json())
        
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Must-Have Ingredients:
          <input
            type="text"
            value={ingredients.mustHave.join(',')}
            onChange={handleMustHaveChange}
          />
        </label>
        <br />
        <label>
          Cannot-Have Ingredients:
          <input
            type="text"
            value={ingredients.cannotHave.join(',')}
            onChange={handleCannotHaveChange}
          />
        </label>
        <br />
        <label>
          Can-Have Ingredients:
          <input
            type="text"
            value={ingredients.canHave.join(',')}
            onChange={handleIngredientsChange}
          />
        </label>
        <br />
        <label>
          Cooking Time:
            <select value={mealType} onChange={(e) => setCookingTime(e.target.value)}>
            {cookingTimeOptions.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
            ))}
            </select>
        </label>
        <br />
        <label>
            Meal Type:
            <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
            {mealTypeOptions.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
            ))}
            </select>
        </label>
        <br />
        <button type="submit">Add Preferences!</button>
      </form>
    );
  }
  
  export default ImportForm;