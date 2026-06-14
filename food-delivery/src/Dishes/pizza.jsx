// src/App.js

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PizzaHome from '../components/pizzahome';
import Cart from '../components/Cart';
import Pizzadata from '../Dishes/Pizzadata'; // Import Pizza data
import MenuToggle from '../components/MenuButton.jsx'; // Import the MenuToggle component
import '../styles/amazon.css';

const App = () => {
  const [show, setShow] = useState(true); // Toggle between Home and Cart view
  const [cart, setCart] = useState([]); // Cart items
  const [warning, setWarning] = useState(false); // Warning for already added items
  const [filteredItems, setFilteredItems] = useState(Pizzadata); // State for filtered items

  // Add item to cart
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };

  // Handle amount change in cart
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    let newFilteredItems = [];

    switch (category) {
      case 'Recommended':
        newFilteredItems = Pizzadata;
        break;
      case 'Veg Pizza ':
        newFilteredItems = Pizzadata.filter(item => item.category === 'Veg Pizza ');
        break;
      case 'Non Veg Pizza ':
        newFilteredItems = Pizzadata.filter(item => item.category === 'Non Veg Pizza ');
        break;
      case 'Pasta ':
        newFilteredItems = Pizzadata.filter(item => item.category === 'Pasta ');
        break;
      case 'Beverages ':
        newFilteredItems = Pizzadata.filter(item => item.category === 'Beverages ');
        break;
      default:
        newFilteredItems = Pizzadata;
    }

    setFilteredItems(newFilteredItems);
  };

  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      <MenuToggle handleCategorySelect={handleCategorySelect} />
      {show ? (
        <PizzaHome items={filteredItems} handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && <div className='warning'>Item is already added to your cart</div>}
    </React.Fragment>
  );
}

export default App;
