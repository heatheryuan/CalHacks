import React from 'react';

export default function RecipeSelect(props) {
    const {dish, time} = props;



    return (
        <div>
            <h1>{dish.title}</h1>
            <p>{dish.description}</p>
            <a href={dish.url}>Recipe Link!</a> 
        </div>
        
    )
}
