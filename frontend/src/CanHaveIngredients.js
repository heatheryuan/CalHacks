import React, { useState } from 'react';

function CanHaveIngredients() {
  const [canHaveIngredient, setCanHaveIngredient] = useState('');
  const [canHaveIngredients, setCanHaveIngredients] = useState([]);

  const handleCanHaveChange = (e) => {
    setCanHaveIngredient(e.target.value);
  };

  const handleCanHaveOnClick = (e) => {
    if (!canHaveIngredients.includes(canHaveIngredient)) {
        setCanHaveIngredients((prevIngredients) => [
          ...prevIngredients,
          canHaveIngredient,
        ]);
      }
  }

  return (
    <div>
      <h4>Other Ingredients</h4>
      <input
        type="text"
        value={canHaveIngredient}
        onChange={handleCanHaveChange}
        onKeyDown={(e) => handleCanHaveOnClick ? (e.key === 'Enter' && canHaveIngredient.trim() !== '') : null}
        placeholder="Enter other ingredients"
      />
      <button onClick={handleCanHaveOnClick}>Add</button>
      <ul>
        {canHaveIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default CanHaveIngredients;
