import React, { useState } from 'react';
import './LoginPopup.css';
import assets from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={(e) => e.preventDefault()}>
        
        {/* Title & Close Button */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close" 
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* Input Fields */}
        <div className="login-popup-inputs">
          {/* Only show these fields for Sign Up */}
          {currState === "Sign Up" && (
            <>
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Location" required />
            </>
          )}

          {/* Common fields for both Login and Sign Up */}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        {/* Button */}
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms & Conditions */}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the <span>Terms of Use</span> & <span>Privacy Policy</span>.
          </p>
        </div>

        {/* Toggle between Login and Sign Up */}
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
