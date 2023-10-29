import React from 'react';

export default function RecipeSelect(props) {
    const {dish, setSelectedDish} = props;

    return (
        <div>
            <h1>{dish.title}</h1>
            <p>{dish.description}</p>
            <a href={dish.url}>Recipe Link!</a> 
            <button onClick={() => setSelectedDish(null)}>Go Back</button>
        </div>
        
    )
}
