// Greeting.js
import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGreetClick = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      {/*  <h1>Personalized Greeting App</h1> */}
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      {/* <button onClick={handleGreetClick}>Greet</button> */}
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default Greeting;
