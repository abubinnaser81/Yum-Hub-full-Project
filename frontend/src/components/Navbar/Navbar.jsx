import React from 'react'
import './Navbar.css'
import assets from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">menu</li>
        <li className="navbar-item">Mobile-app</li>
        <li className="navbar-item">Contact</li>
      </ul>
      <div className="navbar-right"></div>
      <img src={assets.search_icon} alt="" />
      <div className="navbar-search-icon"></div>
      <img src={assets.cart_icon} alt="" />
      <div className="navbar-cart-icon"></div>
      <button className="login-button">Login</button>

    </div>
  )
}

export default Navbar
