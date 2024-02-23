import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {
  const [color, setColor] = useState("beige");
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  const handleCustomColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="bg" style={{ backgroundColor: color }}>
      <div className='div-bar'>
        <button className="button" style={{ backgroundColor: "red" }} onClick={() => handleColorChange("red")}>Red</button>
        <button className="button" style={{ backgroundColor: "blue" }} onClick={() => handleColorChange("blue")}>Blue</button>
        <button className="button" style={{ backgroundColor: "green" }} onClick={() => handleColorChange("green")}>Green</button>
        <button className="button" style={{ backgroundColor: "orange" }} onClick={() => handleColorChange("orange")}>Orange</button>
        <button className="button" style={{ backgroundColor: "grey" }} onClick={() => handleColorChange("black")}>Black</button>
        <input type="text" placeholder="Enter Yours" onChange={handleCustomColorChange} />     
      </div>
    </div>
  );
}

export default App;
