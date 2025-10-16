import React, { useState } from 'react'
import './Navbar.css'
import assets from '../../assets/assets'

const Navbar = () => {
  const [menu, setMenu] = useState("Home")

  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={assets.logo_yum} alt="Yum Hub Logo" className="logo" />

      {/* Menu Items */}
      <ul className="navbar-menu">
        <li className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</li>
        <li className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</li>
        <li className={menu === "Available Food" ? "active" : ""} onClick={() => setMenu("Available Food")}>Available Food</li>
        <li className={menu === "Contact us" ? "active" : ""} onClick={() => setMenu("Contact us")}>Contact us</li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="navbar-icon" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Cart" className="navbar-icon" />
          <div className="dot"></div>
        </div>

        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
