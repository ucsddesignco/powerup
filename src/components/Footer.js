import React from "react";
import Heart from "../assets/images/heart.svg";
import DcoLogoOrange from "../assets/images/dco-logo-orange.svg";

function Footer() {
  return (
    <div className="footer">
      <p className="signature">
        <span className="footer-text">
          Made with
          <img className="footer-logo" src={Heart} alt="Love Logo" />
        </span>
        <img
          className="footer-logo footer-logo-dco"
          src={DcoLogoOrange}
          alt="Design Co Logo"
        />
      </p>

      <a id="email" className="footer-text" href="mailto:hello@ucsddesign.co">
        hello@ucsddesign.co
      </a>
    </div>
  );
}

export default Footer;
