
import React from 'react';

const Robot = ({ position, direction }) => {
  return (
    <div className="Robot">
      <h2>Robot Position:</h2>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
      <p>Direction: {direction}</p>
    </div>
  );
}

export default Robot;
