import React from 'react'
import image from '../assets/insta.png';
import image2 from '../assets/twitter.png';
import image3 from '../assets/fb.png';
import image4 from '../assets/linkediN7.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBox">
    <h2 className="footer-title">Foodie</h2>
    <p>Seamless indulges awaits on our food delivery webiste where you culinary cravings meet convenience, bringing exceptional flavours.</p>
    <div className='socialMediaImageBox'>
    <img src={image} alt="insta-image" className="social-media-image"/>
    <img src={image2} alt="insta-image" className="social-media-image"/>
    <img src={image3} alt="insta-image" className="social-media-image"/>
    <img src={image4} alt="insta-image" className="social-media-image"/>
    </div>
    <div className="list-container">
        <div className="box">
            <h2>Help</h2>
            <a href="#">Contact us</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
        </div>
        <div className="box">
            <h2>Legal</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund & Cancellation</a>
            <a href="#">Offer Terms</a>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
