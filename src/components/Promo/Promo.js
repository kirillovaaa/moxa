import React from "react";
import "./Promo.css";
import sun from "../../images/sun.svg";
import icon from "../../images/icon.svg";
import moxa from "../../images/moxa.png";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__description">
        <h1 className="promo__title">HI, I’M TAYLER.</h1>
        <div className="promo__title-wrapper">
          <h1 className="promo__title">A CREATIVE</h1>
          <img className="promo__title-image" src={sun} alt="sun" />
          <h1 className="promo__title">DESIGNER</h1>
        </div>
        <h1 className="promo__title">BASED IN LONDON</h1>
        <div className="promo__items">
          <span className="promo__item-text">DESIGN</span>
          <img className="promo__item-image" src={icon} alt="icon" />
          <span className="promo__item-text">DEVELOPMENT</span>
          <img className="promo__item-image" src={icon} alt="icon" />
          <span className="promo__item-text">WEBFLOW</span>
        </div>

        <div className="promo__buttons">
          <button className="promo__button-black" type="button">
            Got a project?
          </button>
          <button className="promo__button-white" type="button">
            Let's talk.
          </button>
        </div>
      </div>

      <img className="promo__image" src={moxa} alt="moxa" />
    </section>
  );
};

export default Promo;
