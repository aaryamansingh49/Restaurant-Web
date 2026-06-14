import React from 'react';
import { Link } from "react-router-dom";
import mcd from "../assets/mcd.png";
import burgerking from "../assets/bk.png";
import bodyfuel from "../assets/bodyfuel.png";
import passionfood from "../assets/passionfood.png";
import burgersingh from "../assets/burgersingh.png";
import hungryhub from "../assets/hungryhub.png";

import '../styles/pizzarestaurant.css';

const BurgerData = () => {

    const pizzahutData = [
        {
            image : mcd,
            description: "Macdonalds",
            link: '/Burger', // Link to the Pizza page
        },
        {
            image: burgerking,
            description: "Burger King",
            link: '/BKBurger', // Link to the Pizza page
        },
        {
            image : burgersingh,
            description: "Burger Singh",
            link: '/Burger', // Link to the Pizza page
        },
    ];
    
    const restaurantData = [
        {
            image: passionfood,
            description: "Passion Food",
            link: '/Burger', // Link to the Pizza page
        },
        {
            image: bodyfuel,
            description: "Body fuel Station",
            link: '/Burger', 
        },
        {
            image: hungryhub,
            description: "Hungry Hub",
            link: '/Burger', // Link to the Pizza page
        }
    ];

    return (
        <>
            <h2 className="restaurant-tile">Recommended <span>Restaurant</span> </h2>

            <div className="pizzahut">
                {pizzahutData.map((card, index) => (
                    <Link 
                        to={card.link} // Ensure link is correctly pointing to the pizza page
                        key={index} 
                        className="pizzacards"   
                    >
                        <img
                            src={card.image}
                            alt={`Card ${index + 1}`}
                            className="pizza-image"
                        />
                        <div className="pizzahutdescription">{card.description}</div>
                    </Link>
                ))}
            </div>

            <div className="pizzahut1">
                {restaurantData.map((card, index) => (
                    <Link 
                        to={card.link} // Ensure link is correctly pointing to the pizza page
                        key={index} 
                        className="pizzacards"   
                    >
                        <img
                            src={card.image}
                            alt={`Card ${index + 1}`}
                            className="pizza-image"
                        />
                        <div className="pizzahutdescription">{card.description}</div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default BurgerData;
