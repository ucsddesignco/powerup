import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import WhyApply from "./components/WhyApply";
import Showcase2 from "./components/Showcase2";
import gsap from "gsap";

function App() {
  /* const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  }); */

  useEffect(() => {
    const tl = gsap.timeline({
        defaults: {
          delay: 0.5,
        }
    })

    tl
      .to("#boxes", {
        duration: 0.8,
        y: "0",
        ease: "power3",
      })
      .to("#tape1", {
        duration: 0.7,
        x: "-5vw",
        ease: "power2",
      }, 0.1)
      .to("#tape2", {
        duration: 0.7,
        x: "-5vw",
        ease: "power2",
      }, 0.1)
      .to("#text1", {
        duration: 2.3,
        x: "-70vw",
        ease: "circ",
      }, 0.2)
      .to("#text3", {
        duration: 2.3,
        x: "60vw",
        ease: "circ",
      }, 0.2)
      .to("#boxes", {
        duration: 0.8,
        height: "50vh",
        ease: "power3",
      }, 1.5)
      .to("#boxes", {
        duration: 0.8,
        y: "-105vh",
        ease: "power3",
      }, 1.5)
      
  })

  return (
    <div className="App">
     {/*  <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div> */}

      <div className="loading-box-white" id="boxes"></div>
      <div className="loading-box" id="boxes">
        <div className="tape1" id="tape1">
          <div className="tape-text1" id="text1">Showcase Out Now Showcase Out Now</div>
        </div>
        <div className="tape2" id="tape2">
          <div className="tape-text2" id="text3">Showcase Out Now Showcase Out Now</div>
        </div>
      </div>
      <Navbar />
      <Landing />
      <About />
      <Showcase2 />
      <WhyApply />
      <Footer />
    </div>
  );
}

export default App;
