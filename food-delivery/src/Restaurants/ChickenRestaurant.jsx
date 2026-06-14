import React from 'react';
import { Link } from "react-router-dom";
import KFC from "../assets/KFC.png";
import mughlai from "../assets/mughlai.png";
import mmm from "../assets/mmm.png";
import crispychicken from "../assets/crispychicken.png";
import puransinghdhaba from "../assets/puransinghdhaba.png";
import chawla from "../assets/chawla.png";
import '../styles/pizzarestaurant.css';

const ChickenData = () => {

    const pizzahutData = [
        {
            image : KFC,
            description: "KFC",
            link: '/Chicken', 
        },
        {
            image: mughlai,
            description: "Mughlai",
            link: '/Chicken', 
        },
        {
            image: mmm,
            description: "Mohan Murge Wala",
            link: '/Chicken', // Link to the Pizza page
        }
    ];

    const restaurantData = [
        {
            image: chawla,
            description: "Chawla",
            link: '/Chicken', // Link to the Pizza page
        },
        {
            image : crispychicken,
            description: "Crispy Chicken",
            link: '/Chicken', // Link to the Pizza page
        },
        {
            image: puransinghdhaba,
            description: "Puran Singh Da Dhaba",
            link: '/Chicken', // Link to the Pizza page
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

export default ChickenData;
