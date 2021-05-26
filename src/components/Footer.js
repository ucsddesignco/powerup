import React from "react";
import Heart from "../assets/images/heart.svg";
import DcoLogoDark from "../assets/images/dco-logo.svg";

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
          src={DcoLogoDark}
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
