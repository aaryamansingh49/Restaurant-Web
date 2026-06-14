
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ScrollToTop from './components/scrollToTop';

// Dish Components
import Burger from './Dishes/Burger';
import BKBurger from './Dishes/BKBurger';
import Pizza from './Dishes/pizza'; 
import Beverages from './Dishes/Beverages';
import Fries from './Dishes/Fries';
import Biryani from './Dishes/Biryani';
import Dosa from './Dishes/Dosa';
import IndianThali from './Dishes/IndianThali';
import Idli from './Dishes/Idli';
import Chicken from './Dishes/Chicken';
import Cake from './Dishes/Cake';
// Restaurant Components
import Pizzarestaurant from './Restaurants/Pizzarestaurant';
import BurgerRestaurant from './Restaurants/BurgerRestaurant';
import BeveragesRestaurant from './Restaurants/BeveragesRestaurant';
import FriesRestaurant from './Restaurants/FriesRestaurant';
import BiryaniRestaurant from './Restaurants/BiryaniRestaurant';
import DosaRestaurant from './Restaurants/DosaRestaurant';
import IndianThaliRestaurant from './Restaurants/IndianThaliRestaurant';
import IdliRestaurant from './Restaurants/IdliRestaurant';
import ChickenRestaurant from './Restaurants/ChickenRestaurant';
import CakeRestaurant from './Restaurants/CakeRestaurant';

function App() {
  return (
    <Router>
     
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Route to the restaurant selection first */}
          <Route path="/pizzaRestaurants" element={<Pizzarestaurant />} />
          <Route path="/BurgerRestaurants" element={<BurgerRestaurant/>} />
          <Route path="/BeveragesRestaurant" element={<BeveragesRestaurant/>} />
          <Route path="/FriesRestaurant" element={<FriesRestaurant/>} />
          <Route path="/BiryaniRestaurant" element={<BiryaniRestaurant/>} />
          <Route path="/DosaRestaurant" element={<DosaRestaurant/>} />
          <Route path="/IndianThaliRestaurant" element={<IndianThaliRestaurant/>} />
          <Route path="/IdliRestaurant" element={<IdliRestaurant/>} />
          <Route path="/ChickenRestaurant" element={<ChickenRestaurant/>} />
          <Route path="/CakeRestaurant" element={<CakeRestaurant/>} />

          {/* After selecting a restaurant, show the menu for that specific restaurant */}
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/bkburger" element={<BKBurger />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/Fries" element={<Fries />} />
          <Route path="/Biryani" element={<Biryani />} />
          <Route path="/Dosa" element={<Dosa />} />
          <Route path="/IndianThali" element={<IndianThali />} />
          <Route path="/Idli" element={<Idli />} />
          <Route path="/Chicken" element={<Chicken />} />
          <Route path="/Cake" element={<Cake />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

