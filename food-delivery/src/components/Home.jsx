import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import { Helmet } from 'react-helmet';
import "aos/dist/aos.css";
// Optimize the imports if images are large; consider using `require` or dynamic imports if needed
import image from "../assets/delivery-man.jpg";
import chicken from "../assets/chick.jpg";
import bevrages from "../assets/bevra.jpg";
import fries from "../assets/friesss.jpg";
import burger from "../assets/burgerr.jpg";
import pizza from "../assets/Pizzaa.jpg";
import chicken_biryani from "../assets/chicken-biryani.jpg";
import dosa from "../assets/Dosa.png";
import idli from "../assets/idli.jpg";
import indain_thali from "../assets/indian-thali.jpg";
import cake from "../assets/cake.jpg";
import chef from "../assets/chef.jpg";
import fast from "../assets/fast.png";
import enjoy from "../assets/enjoy.png";
import restro1 from "../assets/restro1.png";
import restro2 from "../assets/restro2.png";
import restro3 from "../assets/restro3.jpg";
import restro4 from "../assets/restro4.jpg";
import restro5 from "../assets/restro5.jpg";
import restro6 from "../assets/restro6.jpg";
import restro7 from "../assets/restro7.jpg";
// import Cart from "./Cart";

const Home = () => {
  const cardData = [
    {
      image: chicken,
      description: "Chicken",
      link: "/ChickenRestaurant",
    },
    {
      image: bevrages,
      description: "Beverages",
      link: "/BeveragesRestaurant",
    },
    {
      image: fries,
      description: "Fries",
      link: "/FriesRestaurant",
    },
  ];

  const cardsData = [
    {
      image: burger,
      description: "Burger",
      link: "/BurgerRestaurants",
    },
    {
      image: bevrages,
      description: "Beverages",
      link: "/BeveragesRestaurant",
    },
    {
      image: pizza,
      description: "Pizza",
      link: "/pizzaRestaurants",
    },
    {
      image: fries,
      description: "Fries",
      link: "/FriesRestaurant",
    },
    {
      image: chicken_biryani,
      description: "Biryani",
      link: "/BiryaniRestaurant",
    },
    {
      image: dosa,
      description: "Dosa",
      link: "/DosaRestaurant",
    },
    {
      image: indain_thali,
      description: "Indian Thali",
      link: "/IndianThaliRestaurant",
    },
    {
      image: idli,
      description: "Idli",
      link: "/IdliRestaurant",
    },
    {
      image: chicken,
      description: "Chicken",
      link: "/ChickenRestaurant",
    },
    {
      image: cake,
      description: "Cake",
      link: "/CakeRestaurant",
    },
  ];

  const iconsData = [
    {
      image: chef,
      description: "Fresh Food",
    },
    {
      image: fast,
      description: "Fast Delivery",
    },
    {
      image: enjoy,
      description: "Enjoy Your Meal",
    },
  ];

  const restroData = [
    {
      image: restro1,
      description: "Restaurant",
    },
    {
      image: restro4,
      description: "Restaurant",
    },
    {
      image: restro3,
      description: "Restaurant",
    },
    {
      image: restro2,
      description: "Restaurant",
    },
    {
      image: restro5,
      description: "Restaurant",
    },
    {
      image: restro6,
      description: "Restaurant",
    },
    {
      image: restro7,
      description: "Restaurant",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <link rel="icon" href={image} type="image/x-icon" />
      </Helmet>
      <div className="home">
        <div className="left-sec">
          <h2 data-aos="fade-right" data-aos-delay="300" className="side-title">
            fastest <span className="delivery">Delivery</span> & Easy{" "}
            <span className="delivery">pickup</span>
          </h2>
        </div>

        <div data-aos="fade-left" data-aos-delay="300" className="right-sec">
          <img src={image} alt="delivery-image" className="delivery-image" loading="lazy" />
        </div>
      </div>

      {/* Recommendation Section */}
      <div className="recommends">
        <h2 data-aos="fade-up" className="recom-title">
          {" "}
          <span data-aos="fade-up" data-aos-delay="500" className="by-us">
            {" "}
            Recommended{" "}
          </span>{" "}
          By Us{" "}
        </h2>
        <div data-aos="fade-up" className="cards-container">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <Link
                to={card.link}
                key={index}
                className="cards"
                data-aos="fade-up"
                // data-aos-delay={`${index * 100}`}
              >
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  className="card-image"
                  loading="lazy"
                />
                <div className="card-description">{card.description}</div>
                <div className="order">Order Now</div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Our Dishes Section */}
      <h2 data-aos="fade-up" className="dish-title">
        Our<span className="dishes"> Dishes</span>
      </h2>

      <div className="cards-container2">
        {cardsData.map((card, index) => (
          <Link
            to={card.link}
            key={index}
            className="cards"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <img
              src={card.image}
              alt={`Card ${index + 1}`}
              className="cards-image"
              loading="lazy"
            />
            <div className="cards-description">{card.description}</div>
            <div className="order">Order Now</div>
          </Link>
        ))}
      </div>

      {/* Best Delivered Service Section */}
      <h2 data-aos="fade-up" className="deliveredService">
        Our <span>Best</span> Delivered <span>Service</span>{" "}
      </h2>
      <div data-aos="fade-up" className="big-icons">
        {iconsData.map((icons, index) => (
          <div className="icons" key={index}>
            <img
              src={icons.image}
              alt={`Icons ${index + 1}`}
              className="icons-image"
              loading="lazy"
            />
            <div className="icon-description">{icons.description}</div>
          </div>
        ))}
      </div>

      {/* Restaurants */}
      <h2 data-aos="fade-up" className="restro">
        {" "}
        Best <span> Restaurants </span>{" "}
      </h2>
      <Slider {...settings} data-aos="fade-up" className="restaurant-slider">
        {restroData.map((restro, index) => (
          <div className="restro-item" key={index}>
            <img
              src={restro.image}
              alt={`Restro ${index + 1}`}
              className="restroimg"
              data-aos="fade-up"
              loading="lazy"
            />
            <div data-aos="fade-up" className="restro-description">
              {restro.description}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Home;
