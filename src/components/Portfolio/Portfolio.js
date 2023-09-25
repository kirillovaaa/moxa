import React from "react";
import "./Portfolio.css";
import sun from "../../images/sun.svg";
import img from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <img className="portfolio__image" src={sun} alt="sun" />
      <h2 className="portfolio__title">Awards</h2>
      <h3 className="portfolio__subtitle">REGONITIONS & ACCOIMPLISHMENTS</h3>
      <div className="portfolio__items">
        <div className="portfolio__item">
          <img className="portfolio__item-image" src={img} alt="design" />
          <div className="portfolio__item-wrapper">
            <span className="portfolio__name">ART DIRECTOR</span>
            <span className="portfolio__description">
              Beautiful and advanced website interfaces
            </span>
            <button className="portfolio__button">Read More</button>
          </div>
        </div>
        <div className="portfolio__item">
          <div className="portfolio__item-wrapper">
            <span className="portfolio__name">BRENDING</span>
            <span className="portfolio__description">
              Design and extreme programming practice
            </span>
            <button className="portfolio__button">Read More</button>
          </div>
          <img className="portfolio__item-image" src={img2} alt="design" />
        </div>
        <div className="portfolio__item">
          <img className="portfolio__item-image" src={img3} alt="design" />
          <div className="portfolio__item-wrapper">
            <span className="portfolio__name">WEB DESIGN</span>
            <span className="portfolio__description">
              Nature inspired design
            </span>
            <button className="portfolio__button">Read More</button>
          </div>
        </div>
        <div className="portfolio__item">
          <div className="portfolio__item-wrapper">
            <span className="portfolio__name">MOTION GRAPHICS</span>
            <span className="portfolio__description">
              Design & concept at work.
            </span>
            <button className="portfolio__button">Read More</button>
          </div>
          <img className="portfolio__item-image" src={img4} alt="design" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
