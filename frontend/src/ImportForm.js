import React, { useState } from 'react';
import IngredientForm from './IngredientForm';

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
    });
    const [cookingTime, setCookingTime] = useState('');
    const [mealType, setMealType] = useState('');
    const [keyWord, setKeyWord] = useState([]);

    const handleAddIngredient = (e, type, ingredient) => {
      if (type !== "keyWord") {
        if (ingredient != "" && !ingredients[type].includes(ingredient)) {
            setIngredients(prevIngredients => ({
                ...prevIngredients,
                [type]: [...prevIngredients[type], ingredient]
              }));
            }
      } else {
        if (ingredient != "" && !keyWord.includes(ingredient)) {
            setKeyWord(prevKeyWords => ([
                ...prevKeyWords,
                ingredient
            ]))
        }
      }
      
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const recipeData = {
        ingredients: ingredients,
        cookingTime: cookingTime,
        mealType: mealType,
        keyWord: keyWord
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
      <form >
        <div>
          <h4>High-Priority Ingredients</h4>
          <IngredientForm handleAddIngredient={handleAddIngredient} type= {"mustHave"} />
          <ul>
            {ingredients["mustHave"].map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Allergens and Dietary Restrictions</h4>
          <IngredientForm handleAddIngredient={handleAddIngredient} type= {"cannotHave"} />
          <ul>
            {ingredients["cannotHave"].map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <br />
        <label>
          Cooking Time:
            <select value={cookingTime} onChange={(e) => setCookingTime(e.target.value)}>
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
        <div>
          <h4>Key Words</h4>
          <IngredientForm handleAddIngredient={handleAddIngredient} type= {"keyWord"} />
          <ul>
            {keyWord.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <button onClick={handleSubmit}>
            Submit!
        </button>
        
      </form>
    );
  }
  
  export default ImportForm;