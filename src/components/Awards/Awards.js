import React from "react";
import "./Awards.css";
import sun from "../../images/sun.svg";

const Awards = () => {
  return (
    <section className="awards">
      <img className="awards__image" src={sun} alt="sun" />
      <h2 className="awards__title">Awards</h2>
      <h3 className="awards__subtitle">REGONITIONS & ACCOIMPLISHMENTS</h3>

      <div className="awards__items">
        <div className="awards__item">
          <div className="awards__item-wrapper">
            <span className="awards__item-number">1</span>
            <div className="awards__item-text">
              <span className="awards__item-title">Webflow Awwwards Team</span>
              <span className="awards__item-subtitle">
                Runner Up - Webflow Expert Design
              </span>
            </div>
          </div>

          <div className="awards__item-wrapper">
            <span className="awards__item-name">PRODUCT DESIGN</span>
            <span className="awards__item-data">2022</span>
          </div>
        </div>
        <div className="awards__item">
          <div className="awards__item-wrapper">
            <span className="awards__item-number">2</span>
            <div className="awards__item-text">
              <span className="awards__item-title">Webflow Awwwards Team</span>
              <span className="awards__item-subtitle">
                Runner Up - Webflow Expert Design
              </span>
            </div>
          </div>

          <div className="awards__item-wrapper">
            <span className="awards__item-name">DEVELOPMENT</span>
            <span className="awards__item-data">2021</span>
          </div>
        </div>
        <div className="awards__item">
          <div className="awards__item-wrapper">
            <span className="awards__item-number">3</span>
            <div className="awards__item-text">
              <span className="awards__item-title">Webflow Awwwards Team</span>
              <span className="awards__item-subtitle">
                Runner Up - Webflow Expert Design
              </span>
            </div>
          </div>

          <div className="awards__item-wrapper">
            <span className="awards__item-name">BRENDING</span>
            <span className="awards__item-data">2018</span>
          </div>
        </div>
        <div className="awards__item">
          <div className="awards__item-wrapper">
            <span className="awards__item-number">4</span>
            <div className="awards__item-text">
              <span className="awards__item-title">Webflow Awwwards Team</span>
              <span className="awards__item-subtitle">
                Runner Up - Webflow Expert Design
              </span>
            </div>
          </div>

          <div className="awards__item-wrapper">
            <span className="awards__item-name">PRODUCT DESIGN</span>
            <span className="awards__item-data">2014</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
