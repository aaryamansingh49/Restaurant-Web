import React from 'react';
import { Link } from "react-router-dom";
import pizzahut from "../assets/pizzahut.png";
import dominos from "../assets/dominos.png";
import pizzawings from "../assets/pizzawings.png";
import lapinoz from "../assets/lapinoz.png";
import hungryhub from "../assets/hungryhub.png";
import italianpizza from "../assets/italianpizza.png";
import '../styles/pizzarestaurant.css';

const Pizzahut = () => {

    const pizzahutData = [
        {
            image : pizzahut,
            description: "Pizzahut",
            link: '/pizza', // Link to the Pizza page
        },
        {
            image: dominos,
            description: "Dominos",
            link: '/pizza', // Link to the Pizza page
        },
        {
            image: pizzawings,
            description: "Pizza Wings",
            link: '/pizza', // Link to the Pizza page
        }

        
    ];

    const restaurantData = [
        {
            image: italianpizza,
            description: "Italian Pizza",
            link: '/pizza', // Link to the Pizza page
        },
        {
            image : lapinoz,
            description: "La Pinoz",
            link: '/pizza', // Link to the Pizza page
        },
        {
            image: hungryhub,
            description: "Hungry Hub",
            link: '/pizza', // Link to the Pizza page
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

export default Pizzahut;
