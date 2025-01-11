import React, { useState } from "react";
import logo from "../assets/logo/logo.png";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
export const Navbar = ({ changeTheme, currentTheme }) => {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle"></div>
          <div className="mode">
            {currentTheme === "dark" ? (
              <BsSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className="links-container">
        <ul className="links">
          <li>
            <a href="#Features">Features</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Launch">Launch</a>
          </li>
          <li>
            <a href="#Sign Up">Sign Up</a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <BsSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
