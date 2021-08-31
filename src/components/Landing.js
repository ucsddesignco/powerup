import React, { useEffect } from "react";
import DesignCo from "../assets/images/dco-logo.svg";
import Arrow from "../assets/images/arrow.svg";
import Shop from "../assets/images/coffee-shop.png";
import gsap from "gsap";
import { Tween } from "gsap/gsap-core";

function Landing() {

  return (
    <div id="landing">

      

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
              Design Co twisted tradition to debut our sequel
              to{" "}
              <a
                className="level-up-showcase-link"
                href="https://www.levelup.ucsddesign.co/"
                target="_blank"
              >
                Level Up
              </a>
              . Check out what the Power Uppers worked on below!
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
      </div>
    </div>
  );
}

export default Landing;
