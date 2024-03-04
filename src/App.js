
import React, { useState } from 'react';
import Robot from './robot';

function App() {
  const [position, setPosition] = useState({ x: null, y: null });
  const [direction, setDirection] = useState(null);

  const placeRobot = (x, y, direction) => {
    // Validate x, y, direction
    setPosition({ x, y });
    setDirection(direction);
  };

  const moveRobot = () => {
    
  };

  const rotateLeft = () => {
    
  };

  const rotateRight = () => {
    
  };

  const reportPosition = () => {
  
  };

  return (
    <div className="App">
      <Robot position={position} direction={direction} />
      <h1>Sujay</h1>
      
    </div>
  );
}

export default App;
