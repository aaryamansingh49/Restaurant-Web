import React from 'react';
import { Link } from "react-router-dom";
import sindhisweets from "../assets/sindhi.png";
import haveli from "../assets/haveli.png";
import mannat from "../assets/mannat.png";
import deluxdhaba from "../assets/deluxdhaba.png";
import royalpakwan from "../assets/royalpakwan.png";
import pbhagat from "../assets/pbhagat.png";
import '../styles/pizzarestaurant.css';

const IndianThaliData = () => {

    const pizzahutData = [
        {
            image : sindhisweets,
            description: "Sindhi Sweets",
            link: '/IndianThali', 
        },
        {
            image: haveli,
            description: " Ambala Haveli",
            link: '/IndianThali', 
        },
        {
            image: mannat,
            description: "Mannat Hotel",
            link: '/IndianThali', // Link to the Pizza page
        }
    ];

    const restaurantData = [
        {
            image: pbhagat,
            description: "P. Bhagat",
            link: '/IndianThali', // Link to the Pizza page
        },
        {
            image : deluxdhaba,
            description: "Delux Dhabha",
            link: '/IndianThali', // Link to the Pizza page
        },
        {
            image: royalpakwan,
            description: "Royal Pakwan",
            link: '/IndianThali', // Link to the Pizza page
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

export default IndianThaliData;
