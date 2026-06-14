import React from 'react';
import { Link } from "react-router-dom";
import mohanbakery from "../assets/mohanbakery.png";
import jantasweets from "../assets/jantasweets.png";
import bikaner from "../assets/bikaner.png";
import sindhi from "../assets/sindhi.png";
import hungryhub from "../assets/hungryhub.png";
import cakebypooja from "../assets/cakebypooja.png";
import '../styles/pizzarestaurant.css';

const CakeData = () => {

    const pizzahutData = [
        {
            image : mohanbakery,
            description: "Mohan Bakery",
            link: '/Cake', 
        },
        {
            image: jantasweets,
            description: "Janta Sweets",
            link: '/Cake', 
        },
        {
            image: bikaner,
            description: "Bikaner",
            link: '/Cake', // Link to the Pizza page
        }
    ];

    const restaurantData = [
        {
            image: cakebypooja,
            description: "Cake By Pooja",
            link: '/Cake', // Link to the Pizza page
        },
        {
            image : sindhi,
            description: "La Pinoz",
            link: '/Cake', // Link to the Pizza page
        },
        {
            image: hungryhub,
            description: "Hungry Hub",
            link: '/Cake', // Link to the Pizza page
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

export default CakeData;
