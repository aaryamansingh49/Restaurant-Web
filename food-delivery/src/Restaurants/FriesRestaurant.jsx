import React from 'react';
import { Link } from "react-router-dom";
import pizzahut from "../assets/pizzahut.png";
import dominos from "../assets/dominos.png";
import mcd from "../assets/mcd.png";
import burgersingh from "../assets/burgersingh.png";
import lapinoz from "../assets/lapinoz.png";
import hungryhub from "../assets/hungryhub.png";
import pizzawings from "../assets/pizzawings.png";
import italianpizza from "../assets/italianpizza.png";
import bodyfuel from "../assets/bodyfuel.png";
import '../styles/pizzarestaurant.css';

const FriesData = () => {

    const pizzahutData = [
        {
            image : pizzahut,
            description: "Pizzahut",
            link: '/Fries', // Link to the Pizza page
        },
        {
            image: dominos,
            description: "Dominos",
            link: '/Fries', // Link to the Pizza page
        },
        {
            image: mcd,
            description: "Macdonals",
            link: '/Fries', // Link to the Pizza page
        }
    ];

    const restaurantData = [
        {
            image: italianpizza,
            description: "Italian Pizza",
            link: '/Fries', // Link to the Pizza page
        },
        {
            image : burgersingh,
            description: "Burger Singh",
            link: '/Fries', // Link to the Pizza page
        },
        {
            image: hungryhub,
            description: "Hungry Hub",
            link: '/Fries', // Link to the Pizza page
        }
    ];
    const restaurantsData = [
        {
            image: pizzawings,
            description: "Pizza Wings",
            link: '/Fries', // Link to the Pizza page
        },
        {
            image : lapinoz,
            description: "La Pinoz",
            link: '/Fries', // Link to the Pizza page
        },
        {
            image: bodyfuel,
            description: "Body Fuel",
            link: '/Fries', // Link to the Pizza page
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
            <div className="pizzahut1">
                {restaurantsData.map((card, index) => (
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

export default FriesData;
