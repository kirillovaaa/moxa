import React from "react";
import "./Services.css";
import sun from "../../images/sun.svg";

const Services = () => {
  return (
    <section className="services">
      <img className="services__image" src={sun} alt="sun" />
      <h2 className="services__title">Services</h2>
      <h3 className="services__subtitle">REGONITIONS & ACCOIMPLISHMENTS</h3>
      <div className="services__grid">
        <div className="services__grid-item">
          <span className="services__title">Web Design</span>
          <span className="services__description">
            Every single project is a challenge that we accept eagerly. Let’s
            implement innovative ideas together!
          </span>
        </div>
        <div className="services__grid-item">
          <span className="services__title">Product Design</span>
          <span className="services__description">
            Every single project is a challenge that we accept eagerly. Let’s
            implement innovative ideas together!
          </span>
        </div>
        <div className="services__grid-item">
          <span className="services__title">UI/UX Design</span>
          <span className="services__description">
            Every single project is a challenge that we accept eagerly. Let’s
            implement innovative ideas together!
          </span>
        </div>
        <div className="services__grid-item">
          <span className="services__title">Art Direction</span>
          <span className="services__description">
            Every single project is a challenge that we accept eagerly. Let’s
            implement innovative ideas together!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
