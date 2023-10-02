import React from "react";
import "./Articles.css";
import sun from "../../images/sun.svg";

const Articles = () => {
  return (
    <section className="articles">
      <img className="awards__image" src={sun} alt="sun" />
      <h2 className="awards__title">Awards</h2>
      <h3 className="awards__subtitle">REGONITIONS & ACCOIMPLISHMENTS</h3>
      <div className="articles__items">
        <div className="articles__item">
          <div className="articles__item-wrapper">
            <span className="articles__item-title">
              DESIGN / April 28, 2022
            </span>
            <span className="articles__item-subtitle">
              Why I moved from Wordpress to Webflow
            </span>
          </div>
          <p className="articles__item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="articles__item">
          <div className="articles__item-wrapper">
            <span className="articles__item-title">
              DESIGN / April 26, 2022
            </span>
            <span className="articles__item-subtitle">
              What did i learn from doing 50+ <br /> design sprints
            </span>
          </div>
          <p className="articles__item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="articles__item">
          <div className="articles__item-wrapper">
            <span className="articles__item-title">
              BUSINESS & OFFICE / April 26, 2022
            </span>
            <span className="articles__item-subtitle">
              Fostering professional growth in <br />
              your company
            </span>
          </div>
          <p className="articles__item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>
      <button className="articles__button">Browse Articles</button>
    </section>
  );
};

export default Articles;
