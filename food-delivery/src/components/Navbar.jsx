import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ size, setShow }) => {
  return (
    <nav className="Navbar">
      <div className="logo"> <Link to="/">Foodie </Link></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-buttons">
        <button className="add-to-cart" onClick={() => setShow(false)}>
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          <span>{size}</span>
        </button>
        <button className="login">
          <Link to="/login">Login</Link>
        </button>
        <button className="signUp">
          <Link to="/signUp">SignUp</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


