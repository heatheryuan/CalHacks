import './App.css';
import React, { useState, useEffect } from "react";
import ImportForm from './ImportForm';
import DishSelect from './DishSelect';

function App() {
  const [response, setResponse] = useState("");
  const [dishes, setDishes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:5000')
      .then((response) => response.json())
      .then((data) => {
          setResponse(data["data"]);
      })
      .catch((err) => {
          console.log(err.message);
      });
}, []);

  return (
    <div className="App">
      <header>Hi!</header>
      <header>{response}</header>
      <h1>Please Fill In</h1>
      {submitted ? <DishSelect dishes={dishes} setSubmitted={setSubmitted}/> : <ImportForm setDishes={setDishes} setSubmitted={setSubmitted}/>}
    </div>
  );
}

export default App;
