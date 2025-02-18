import React, { useState } from 'react';
import './App.css';

import Productcard from './components/productcard'; 

function App() {
  // Create an array of 10 cards
  const cards = Array.from({ length: 10 });

  // Grid style for displaying the product cards
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {/* Render Productcard for each card */}
      {cards.map((_, index) => (
        <Productcard key={index} />
      ))}
    </div>
  );
}

export default App;
