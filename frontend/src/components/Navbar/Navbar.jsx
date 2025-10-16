import React, { useState } from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { Link, Links } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home")

  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={assets.logo_yum} alt="Yum Hub Logo" className="logo" />

      {/* Menu Items */}
      <ul className="navbar-menu">
        <Link  to='/' className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</Link>
        <a href='#explore-menu' className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a>
        <a href='#app-download' className={menu === "Mobaile App" ? "active" : ""} onClick={() => setMenu("Mobaile App")}>Mobaile App</a>
        <a href='footer' className={menu === "Contact us" ? "active" : ""} onClick={() => setMenu("Contact us")}>Contact us</a>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="navbar-icon" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Cart" className="navbar-icon" />
          <div className="dot"></div>
        </div>

        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
