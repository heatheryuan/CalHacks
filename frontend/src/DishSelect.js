import React, { useState } from 'react';

export default function DishSelect(props) {
    const {dishes, setLoaded} = props;
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    function selectRecipe(index) {
        setSelectedRecipe(dishes["data"][index]);
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
    return (
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
            <div className="recipeContainer">
                <button onClick ={() =>selectRecipe(0)}>Recipe 1</button>
                <button onClick ={() =>selectRecipe(1)}>Recipe 2</button>
                <button onClick ={() =>selectRecipe(2)}>Recipe 3</button>
            </div>
            <button onClick={() => setLoaded(false)}>Go Back</button>


        </div>
        
    )
}
