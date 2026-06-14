// src/components/MenuToggle.js

import React, { useState } from 'react';
import '../styles/menuButton.css';

const MenuToggle = ({ handleCategorySelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, category: 'Recommended ', count: 9 },
    { id: 2, category: 'Veg Burger ', count: 6 },
    { id: 3, category: 'Non Veg Burger ', count: 3 },
    { id: 4, category: 'Fries ', count: 6 },
    { id: 5, category: 'Beverages ', count: 9 },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const selectCategory = (category) => {
    handleCategorySelect(category);
    setMenuOpen(false); // Close the menu after selection
  };

  return (
    <div className="menu-toggle-container">
      <button className="menu-toggle-button" onClick={handleMenuToggle}>
        ☰ Menu
      </button>
      {menuOpen && (
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item" onClick={() => selectCategory(item.category)}>
              <span className="menu-category">{item.category}</span>
              <span className="menu-count">{item.count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuToggle;
