import React, { useState } from 'react';

function MustNotIngredients() {
  const [mustNotIngredient, setMustNotIngredient] = useState('');
  const [mustNotIngredients, setMustNotIngredients] = useState([]);

  const handleMustNotChange = (e) => {
    setMustNotIngredient(e.target.value);
  };

  const handleMustNotOnClick = (e) => {
    if (!mustNotIngredients.includes(mustNotIngredient)) {
        setMustNotIngredients((prevIngredients) => [
          ...prevIngredients,
          mustNotIngredient,
        ]);
      }
  }


  return (
    <div>
      <h4>Allergens and Dietary Restrictions</h4>
      <input
        type="text"
        value={mustNotIngredient}
        onChange={handleMustNotChange}
        onKeyDown={(e) => handleMustNotOnClick ? (e.key === 'Enter' && mustNotIngredient.trim() !== '') : null}
        placeholder="Enter must not include"
      />
      <button onClick={handleMustNotOnClick}>Add</button>
      <ul>
        {mustNotIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default MustNotIngredients;
