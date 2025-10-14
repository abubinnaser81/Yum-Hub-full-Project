import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo_yum} alt="" />
            <p>At Yum-Hub, we believe every meal should be fresh, flavorful, and full of joy. Eat smart, live happy! 🥗✨</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
         <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>
                GET IN TOUCH
            </h2>
            <ul>
                <li>01832617081</li>
                <li>abunaser50032@gmail.com</li>
            </ul>
        </div>
       
    </div>
    <hr />
    <p className="footer-copyright">
        © 2023 Yum-Hub. All rights reserved.
    </p>
    </div>
  )
}

export default Footer
