import React, { useState, useContext } from "react";
import "./Navbar.css";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);

  // Cuisine menu items
  const cuisineItems = [
    "Chinese",
    "Seafood",
    "Italian",
    "Thai",
    "Japanese",
    "Turkish",
    "Mexican",
    "American"
  ];

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo_yum} alt="Logo" className="logo" />
      </Link>

      {/* Menu Items */}
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>

        {/* Cuisine Dropdown */}
        <li className={menu === "cuisine" ? "active" : ""}>
          <span onClick={() => setMenu("cuisine")}>Cuisine ▾</span>
          <ul className="dropdown">
            {cuisineItems.map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setMenu(item)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <a
            href="#app-download"
            onClick={() => setMenu("mobileApp")}
            className={menu === "mobileApp" ? "active" : ""}
          >
            Mobile App
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="search-icon" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" className="basket-icon" />
          </Link>
          {/* dot indicator */}
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
