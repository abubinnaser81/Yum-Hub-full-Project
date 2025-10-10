import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your <br /> Favorite Food Here</h2>
        <p>
         Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and deliver an unforgettable dining experience right to your doorstep.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
