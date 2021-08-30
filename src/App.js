import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import WhyApply from "./components/WhyApply";
import Modal from "./components/Modal";

function App() {
  /* const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  }); */

  return (
    <div className="App">
     {/*  <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div> */}
      <Navbar />
      <Landing />
      <About />
      <WhyApply />
      <Footer />
    </div>
  );
}

export default App;
