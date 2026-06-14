// src/components/PizzaHome.js

import React from 'react';
import '../styles/amazon.css';
import Cards from './Cards';

const PizzaHome = ({ items, handleClick }) => {
  return (
    <section className="pizza-section">
      {items.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
}

export default PizzaHome;
