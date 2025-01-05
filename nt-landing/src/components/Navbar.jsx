import React, { useState } from 'react'
import logo from "../assets/logo/logo.png"
export const Navbar = () => {
  const [navState,setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className='brand'>
          <img src={logo} alt="logo" />
        </div>
        <div className='toggle-container'>
          <div className='toggle'></div>
          <div className='mode'></div>

        </div>

      </div>
      <div className="links-container">
        <ul className="links">
          <li><a href="#Features">Features</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Launch">Launch</a></li>
          <li><a href="#Sign Up">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  )
}
