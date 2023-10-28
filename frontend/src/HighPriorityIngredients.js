import React, { useState } from 'react';

function HighPriorityIngredients() {
  const [highPriorityIngredient, setHighPriorityIngredient] = useState('');
  const [highPriorityIngredients, setHighPriorityIngredients] = useState([]);

  const handleHighPriorityChange = (e) => {
    setHighPriorityIngredient(e.target.value);
  };

  const handleHighPriorityOnClick = (e) => {
    if (!highPriorityIngredients.includes(highPriorityIngredient)) {
        setHighPriorityIngredients((prevIngredients) => [
          ...prevIngredients,
          highPriorityIngredient,
        ]);
      }
  }

  return (
    <div>
      <h4>High-Priority Ingredients</h4>
      <input
        type="text"
        value={highPriorityIngredient}
        onChange={handleHighPriorityChange}
        onKeyDown={(e) => handleHighPriorityOnClick ? (e.key === 'Enter' && highPriorityIngredient.trim() !== '') : null}
        placeholder="Enter a must include"
      />
      <button onClick={handleHighPriorityOnClick}>Add</button>
      <ul>
        {highPriorityIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default HighPriorityIngredients;
