import React from 'react';
import { Link } from "react-router-dom";
import dosajoint from "../assets/dosajoint.png";
import dosamaster from "../assets/dosamaster.png";
import dosaspot from "../assets/dosaspot.png";
import dosahouse from "../assets/dosahouse.png";
import sindhisweets from "../assets/sindhi.png";
import sagaratna from "../assets/sagar.png";
import '../styles/pizzarestaurant.css';

const BeveragesData = () => {

    const pizzahutData = [
        {
            image : dosajoint,
            description: "Dosa Joint",
            link: '/Beverages', 
        },
        {
            image: dosaspot,
            description: "Dosa Spot",
            link: '/Beverages', 
        },
        {
            image: dosamaster,
            description: "Dosa Master",
            link: '/Beverages', // Link to the Pizza page
        }
    ];

    const restaurantData = [
        {
            image: sagaratna,
            description: "Italian Pizza",
            link: '/Beverages', // Link to the Pizza page
        },
        {
            image : dosahouse,
            description: "Dosa House",
            link: '/Beverages', // Link to the Pizza page
        },
        {
            image: sindhisweets,
            description: "Sindhi Sweets",
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
