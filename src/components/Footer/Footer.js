import React from "react";
import "./Footer.css";
import sun from "../../images/sun-white.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__gray">
        <div className="footer__gray-container">
          <span className="footer__gray-text">Subscribe to our newsletter</span>
          <div className="footer__gray-wrapper">
            <input
              className="footer__input"
              type="url"
              name="link"
              placeholder="Email Address"
            />
            <button className="footer__button" type="button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="footer__black">
        <div className="footer__black-wrapper">
          <img className="footer__black-image" src={sun} alt="sun" />
          <div className="footer__black-buttons">
            <button className="footer__black-button">Style Guide</button>
            <button className="footer__black-button">Licence</button>
            <button className="footer__black-button">Changelog</button>
          </div>
        </div>
        <div className="footer__copyright">
          <span className="footer__copyright-text">
            © Made by Portfolio Template & powered by Flowbase
          </span>
          <div className="footer__copyright-icons">
            <img
              className="footer__copyright-icon"
              src={linkedin}
              alt="linkedin"
            />
            <img
              className="footer__copyright-icon"
              src={twitter}
              alt="twitter"
            />
            <img
              className="footer__copyright-icon"
              src={instagram}
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
