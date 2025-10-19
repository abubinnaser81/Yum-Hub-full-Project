import React, { useState } from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { Link} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home")

  return (
    <div className='navbar'>
      
     <Link to='/'><img src={assets.logo_yum} alt="" className="logo" /></Link> 
      {/* Menu Items */}
      <ul className="navbar-menu">
        <Link  to='/' onClick={() => setMenu("home")}  className={menu === "home" ? "active" : ""} >home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""} >menu</a>
        <a href='#app-download'  onClick={() => setMenu("mobaile App")} className={menu === "mobaile App" ? "active" : ""} >mobaile App</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""} >contact us</a>
      </ul>
      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
         <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
          <div className="dot"></div>
        </div>

        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
