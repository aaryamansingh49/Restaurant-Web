import React from 'react';
import { Link } from "react-router-dom";
import pizzahut from "../assets/pizzahut.png";
import mughlai from "../assets/mughlai.png";
import pizzawings from "../assets/pizzawings.png";
import dropin from "../assets/dropin.png";
import hungryhub from "../assets/hungryhub.png";
import biryaniworld from "../assets/biryani world.png";
import '../styles/pizzarestaurant.css';

const BiryaniData = () => {

    const pizzahutData = [
        {
            image : pizzahut,
            description: "Pizzahut",
            link: '/Biryani', 
        },
        {
            image: mughlai,
            description: "Mughalai",
            link: '/Biryani', 
        },
        {
            image: pizzawings,
            description: "Pizza Wings",
            link: '/Biryani', // Link to the Pizza page
        }
    ];

    const restaurantData = [
        {
            image: biryaniworld,
            description: "Biryani World",
            link: '/Biryani', // Link to the Pizza page
        },
        {
            image : dropin,
            description: "Drop In",
            link: '/Biryani', // Link to the Pizza page
        },
        {
            image: hungryhub,
            description: "Hungry Hub",
            link: '/Biryani', // Link to the Pizza page
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

export default BiryaniData;
