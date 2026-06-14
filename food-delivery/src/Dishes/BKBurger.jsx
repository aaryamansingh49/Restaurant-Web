// src/App.js

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PizzaHome from '../components/pizzahome';
import Cart from '../components/Cart';
import BurgerData from '../Dishes/BKBurgerData';
// import Pizzadata from '../Dishes/Pizzadata';
import MenuToggle from '../components/BurgerMenuButton'; // Import the MenuToggle component
import '../styles/amazon.css';

const App = () => {
  const [show, setShow] = useState(true); // Toggle between Home and Cart view
  const [cart, setCart] = useState([]); // Cart items
  const [warning, setWarning] = useState(false); // Warning for already added items
  const [filteredItems, setFilteredItems] = useState(BurgerData); // State for filtered items

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
        newFilteredItems = BurgerData;
        break;
      case 'Veg Burger ':
        newFilteredItems = BurgerData.filter(item => item.category === 'Veg Burger ');
        break;
      case 'Non Veg Burger ':
        newFilteredItems = BurgerData.filter(item => item.category === 'Non Veg Burger ');
        break;
      case 'Fries ':
        newFilteredItems = BurgerData.filter(item => item.category === 'Fries ');
        break;
      case 'Beverages ':
        newFilteredItems = BurgerData.filter(item => item.category === 'Beverages ');
        break;
      default:
        newFilteredItems = BurgerData;
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
