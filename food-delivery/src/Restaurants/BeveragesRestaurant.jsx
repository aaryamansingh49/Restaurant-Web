import React from 'react';
import { Link } from "react-router-dom";
import pizzahut from "../assets/pizzahut.png";
import dominos from "../assets/dominos.png";
import pizzawings from "../assets/pizzawings.png";
import mcd from "../assets/mcd.png";
import KFC from "../assets/KFC.png";
import italianpizza from "../assets/italianpizza.png";
import '../styles/pizzarestaurant.css';

const BeveragesData = () => {

    const pizzahutData = [
        {
            image : pizzahut,
            description: "Pizzahut",
            link: '/Beverages', 
        },
        {
            image: dominos,
            description: "Dominos",
            link: '/Beverages', 
        },
        {
            image: pizzawings,
            description: "Pizza Wings",
            link: '/Beverages', // Link to the Pizza page
        }
    ];

    const restaurantData = [
        {
            image: italianpizza,
            description: "Italian Pizza",
            link: '/Beverages', // Link to the Pizza page
        },
        {
            image : mcd,
            description: "Macdonalds",
            link: '/Beverages', // Link to the Pizza page
        },
        {
            image: KFC,
            description: "KFC",
            link: '/Beverages', // Link to the Pizza page
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

export default BeveragesData;
