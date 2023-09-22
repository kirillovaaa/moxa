import React from "react";
import "./Description.css";
import icon from "../../images/icon.svg";

const Description = () => {
  return (
    <section className="description">
      <div className="description__container">
        <div className="description__block">
          <div className="description__title">
            <span className="desciption__name">TAYLER</span>
            <img className="description__name-image" src={icon} alt="icon" />
            <span className="desciption__name">BARTHHOLD</span>
          </div>

          <h2 className="description__subtitle">
            Lead product <br /> designer and <br /> art director.
          </h2>
        </div>

        <div className="description__wrapper">
          <span className="description__wrapper-title">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore
          </span>
          <span className="description__wrapper-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore
          </span>

          <div className="description__data">
            <div className="description__data-item">
              <span className="description__data-event">BORN IN</span>
              <span className="description__data-text">New York</span>
            </div>
            <div className="description__data-item">
              <span className="description__data-event">EXPERIENCE</span>
              <span className="description__data-text">7+ Years</span>
            </div>
            <div className="description__data-item">
              <span className="description__data-event">DATE OF BIRTH</span>
              <span className="description__data-text">27 June 1992</span>
            </div>
          </div>
        </div>
      </div>

      <div className="description__items">
        <div className="description__item-white">
          <h2 className="description__item-title">7+</h2>
          <span className="description__item-subtitle">
            Years of Experience
          </span>
        </div>
        <div className="description__item-black">
          <h2 className="description__item-title">50+</h2>
          <span className="description__item-subtitle">Project Completed</span>
        </div>
        <div className="description__item-white">
          <h2 className="description__item-title">30+</h2>
          <span className="description__item-subtitle">Happy Clients</span>
        </div>
      </div>
    </section>
  );
};

export default Description;
