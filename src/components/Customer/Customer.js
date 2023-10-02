import React from "react";
import "./Customer.css";
import sun from "../../images/sun.svg";
import tribal from "../../images/tribal.svg";
import rpublica from "../../images/rpublica.svg";
import verox from "../../images/verox.svg";
import invoice2go from "../../images/invoice2go.svg";

const Customer = () => {
  return (
    <section className="customer">
      <img className="customer__image" src={sun} alt="sun" />
      <h2 className="customer__title">Awards</h2>
      <h3 className="customer__subtitle">REGONITIONS & ACCOIMPLISHMENTS</h3>
      <div className="customer__items">
        <div className="customer__item">
          <img className="customer__image" src={tribal} alt="logo" />
        </div>
        <div className="customer__item">
          <img className="customer__image" src={rpublica} alt="logo" />
        </div>
        <div className="customer__item">
          <img className="customer__image" src={verox} alt="logo" />
        </div>
        <div className="customer__item">
          <img className="customer__image" src={invoice2go} alt="logo" />
        </div>
        <div className="customer__item">
          <img className="customer__image" src={rpublica} alt="logo" />
        </div>
        <div className="customer__item">
          <img className="customer__image" src={tribal} alt="logo" />
        </div>
        <div className="customer__item">
          <img className="customer__image" src={rpublica} alt="logo" />
        </div>
        <div className="customer__item">
          <img className="customer__image" src={verox} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Customer;
