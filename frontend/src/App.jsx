import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import './App.css'
import { StoreContextProvider } from './context/StoreContext'   // ✅ Important!
import LoginPopup from './components/LoginPopup/LoginPopup'
const App = () => {
  const [showLogin,setShowLogin] = useState (false)
  return (
    <StoreContextProvider> 
      <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />

        </Routes>
        
      </div>
      <Footer />
      </>
    </StoreContextProvider>
  )
}

export default App
