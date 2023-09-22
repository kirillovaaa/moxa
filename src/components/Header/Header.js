import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__nav">
        <button className="header__nav-button" type="button">
          Home
        </button>
        <button className="header__nav-button" type="button">
          About
        </button>
        <button className="header__nav-button" type="button">
          Contact
        </button>
      </div>
      <button className="header__button" type="button">
        Let's talk
      </button>
    </header>
  );
};

export default Header;
