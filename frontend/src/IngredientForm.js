import React, { useState } from 'react';

function IngredientForm(props) {
  const {handleAddIngredient, type} = props;
  const [ingredient, setIngredient] = useState('');

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleAdd = (e, type) => {
    e.preventDefault();
    handleAddIngredient(e, type, ingredient);
    setIngredient("");
  }

  return (
    <div>
      <input
        type="text"
        value={ingredient}
        onChange={handleIngredientChange}
        onKeyDown={(e) => (e.key === 'Enter') && handleAdd(e, type)}
        placeholder="Enter a must include"
      />
      <button onClick={(e) => handleAdd(e, type)}>Add</button>
    </div>
  );
}

export default IngredientForm;
