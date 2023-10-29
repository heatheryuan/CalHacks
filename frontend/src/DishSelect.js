import React, { useState } from 'react';

export default function DishSelect(props) {
    const {dishes, setLoaded} = props;

    return (
        <div>
            <h1>
                select your dishes!
            </h1>
            <p>{dishes}</p>
            {console.log(dishes)}
            <button onClick={() => setLoaded(false)}>Go Back</button>
        </div>
        
    )
}
