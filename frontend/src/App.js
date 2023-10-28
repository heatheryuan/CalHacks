import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [response, setResponse] = useState("");

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

  // async function api_ex() {
  //   const response = await fetch('http://127.0.0.1:5000');
  //   const data = await response.json();
  //   console.log(data);
  // }

  return (
    <div className="App">
      <header>Hi!</header>
      <header>{response}</header>
    </div>
  );
}

export default App;
