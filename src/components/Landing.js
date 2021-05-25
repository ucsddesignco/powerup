import React from "react";
import Navbar from "./Navbar";
import DesignCo from "../assets/images/dco-logo.svg";
import Arrow from "../assets/images/arrow.svg";
import Shop from "../assets/images/coffee-shop.png";

function Landing() {
  return (
    <div id="landing">
      <Navbar />
      <div className="landing-section">
        <div className="right" id="shop">
          <img src={Shop} alt="Coffee Shop" />
        </div>
        <div className="left" id="top">
          <div className="top-container" id="arrow">
            <img src={Arrow} alt="Arrow" />
          </div>
          <div className="top-container">
            <h2 className="top-text">
              This summer, Design Co is twisting tradition to debut our sequel
              to{" "}
              <a href="https://www.levelup.ucsddesign.co/" target="_blank">
                Level Up
              </a>
              .
            </h2>
          </div>
          <div className="middle-section">
            <img id="logo" src={DesignCo} alt="Design Co Logo" />
            <h1 className="landing-title">Power Up</h1>
          </div>
        </div>
        <div className="left" id="bottom">
          <div className="text-container">
            <h3>SUMMER DESIGN PROGRAM</h3>
          </div>
          <div className="text-container">
            <h3>JUNE - SEPTEMBER 2021</h3>
          </div>
        </div>
        <div className="mobile-landing">
          <a href="https://forms.gle/DpMo8EURvds47tmE8" target="_blank">
            Apply Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
