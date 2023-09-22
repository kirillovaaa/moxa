import React from "react";
import "./Ribbon.css";
import icon from "../../images/icon.svg";

const Ribbon = () => {
  return (
    <section className="ribbon">
      <div className="ribbon__wrapper">
        <div className="ribbon__wrapper-item">
          <span className="ribbon__text">DEVELOPMENT</span>
          <img className="ribbon__image" src={icon} alt="icon" />
        </div>
        <div className="ribbon__wrapper-item">
          <span className="ribbon__text">STRATEGY</span>
          <img className="ribbon__image" src={icon} alt="icon" />
        </div>
        <div className="ribbon__wrapper-item">
          <span className="ribbon__text">PRODUCT DESIGN</span>
          <img className="ribbon__image" src={icon} alt="icon" />
        </div>
        <div className="ribbon__wrapper-item">
          <span className="ribbon__text">MOTION GRAPHIC</span>
          <img className="ribbon__image" src={icon} alt="icon" />
        </div>
        <div className="ribbon__wrapper-item">
          <span className="ribbon__text">ART DIRECTION</span>
          <img className="ribbon__image" src={icon} alt="icon" />
        </div>
        <div className="ribbon__wrapper-item">
          <span className="ribbon__text">DESIGN</span>
          <img className="ribbon__image" src={icon} alt="icon" />
        </div>
        <div className="ribbon__wrapper-item">
          <span className="ribbon__text">BRANDING</span>
          <img className="ribbon__image" src={icon} alt="icon" />
        </div>
      </div>
    </section>
  );
};

export default Ribbon;
