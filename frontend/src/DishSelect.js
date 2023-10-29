import React, { useState } from 'react';

export default function DishSelect(props) {
    const {dishes, setSubmitted} = props;

    return (
        <div>
            <h1>
                select your dishes!
            </h1>
            {/* {dishes.map((dish, index) => <p>dish</p>)} */}
            <p>dishes</p>
            <button onClick={() => setSubmitted(false)}>Go Back</button>
        </div>
        
    )
}
