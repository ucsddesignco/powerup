import React from "react";
import Heart from "../assets/images/heart.svg";
import DcoLogoDark from "../assets/images/dco-logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-left-span">
          <p>Made with</p>
          <img className="footer-logo-heart" src={Heart} alt="Love Logo" />
        </div>
        <img
          className="footer-logo-dco"
          src={DcoLogoDark}
          alt="Design Co Logo"
        />
      </div>
      <div className="footer-right">
        <a id="email" className="footer-text" href="mailto:hello@ucsddesign.co">
          hello@ucsddesign.co
        </a>
      </div>
    </div>
  );
}

export default Footer;
