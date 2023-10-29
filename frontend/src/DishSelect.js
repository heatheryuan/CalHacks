import React, { useState } from 'react';
import RecipeSelect from './RecipeSelect';

export default function DishSelect(props) {
    const {dishes, setLoaded} = props;
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [recipeData, setRecipeData] = useState(null);

    function selectRecipe(index) {
        setSelectedRecipe(dishes["data"][index]);
        // handleSubmit();
    }

    function displayRecipe(index) {
        return (
          <p>
            Name of Recipe: {dishes["data"][index]['Name of Recipe']}<br/>
            Cooking Time: {dishes["data"][index]['Cooking Time']}<br/>
            Ingredients Typically Used: {dishes["data"][index]['Ingredients Typically Used']}<br/>
            Description: {dishes["data"][index]['Description']}<br/><br/>
          </p>
        );
      }
    
    const handleSubmit = () => {
        console.log(selectedRecipe);
        const dishData = {
            dish: selectedRecipe['Name of Recipe'],
            cooking_time: selectedRecipe['Cooking Time']
        };
        
        fetch('http://127.0.0.1:5000/get-recipes', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(dishData),
        })
            .then((response) => response.json())
            .then((data) => {
                setRecipeData(data["data"])
                console.log(data)
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    };


    return (
        <div>
            {{dishes} 
            ? 
            <div>
                <h1>
                    select your dishes!
                </h1>
                <p>
                    {displayRecipe(0)}
                    {displayRecipe(1)}
                    {displayRecipe(2)}

                    {selectedRecipe && <p>You've selected {selectedRecipe['Name of Recipe']}!</p>}

                </p>
                <p>
                    {!selectedRecipe && <p>Which recipe do you want to choose today?</p>}
                </p>
                {recipeData 
                ? <div>
                    <h1>{recipeData["title"]}</h1>
                    <p>{recipeData["description"]}</p>
                    <a href={recipeData["url"]}>Recipe Link!</a> 
                </div> 
                : null}
                
                <div className="recipeContainer">
                    <button onClick ={() =>selectRecipe(0)}>Recipe 1</button>
                    <button onClick ={() =>selectRecipe(1)}>Recipe 2</button>
                    <button onClick ={() =>selectRecipe(2)}>Recipe 3</button>
                </div>
            </div>
            : <p>No dishes generated</p>}
            <button onClick={() => setLoaded(false)}>Go Back</button>
        </div>
        
    )
}
