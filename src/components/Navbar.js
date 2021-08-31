import React, { useState } from "react";
import Ball from "../assets/images/ball-logo.svg";
import Menu from "../assets/images/nav-menu.svg";
import Exit from "../assets/images/exit.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    document.body.style.overflow = menuOpen ? "visible" : "hidden";
    document.documentElement.style.overflow = menuOpen ? "visible" : "hidden";
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = menuOpen ? "visible" : "hidden";
    document.documentElement.style.overflow = menuOpen ? "visible" : "hidden";
  };

  return (
    <div className="navbar" id="sticky">
      <span className="nav-title">
        <img id="ball-logo" src={Ball} alt="Ball Logo" /> Power Up
      </span>
      <nav className="desktop">
        <a href="#about-section">Overview</a>
        <a href="#showcase-section">Showcase</a>
        <a href="#articles-section">Articles</a>
      </nav>

      <nav className="mobile">
        <img
          id="menu"
          src={menuOpen ? Exit : Menu}
          onClick={() => {
            handleMenuClick();
          }}
          alt="Menu"
          width="30px"
          height="30px"
        />
        {menuOpen && (
          <div className="nav-container">
            <div className="nav-item">
              <a href="#about-section" onClick={() => closeMenu()}>
                Overview
              </a>
            </div>
            <div className="nav-item">
              <a href="#showcase-section" onClick={() => closeMenu()}>
                Showcase
              </a>
            </div>
            <div className="nav-item">
              <a href="#articles-section" onClick={() => closeMenu()}>
                Articles
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
