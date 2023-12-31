import './App.css';
import React, { useState, useEffect } from "react";
import ImportForm from './ImportForm';
import DishSelect from './DishSelect';
import RecipeSelect from './RecipeSelect';

function App() {
  const [response, setResponse] = useState("");
  const [dishes, setDishes] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);

  return (
    <div className="App">
      {loading 
      ? <h1>loading... please wait</h1> 
      : loaded 
        ? <DishSelect dishes={dishes} setLoaded={setLoaded}/> 
        : <ImportForm setDishes={setDishes} setLoaded={setLoaded} setLoading={setLoading}/>}
    </div>

  );
}

export default App;
