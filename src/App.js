import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import WhyApply from "./components/WhyApply";
import Showcase2 from "./components/Showcase2";
import Modal from "./components/Modal";

function App() {
  /* const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  }); */

  const [showModal, setShowModal] = useState(-1);

  const getModal = (value) => {
    setShowModal(value);
  }

  const hideModal = () => {
    setShowModal(-1);
  };

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
      <Showcase2 />
      <WhyApply />
      <Footer />
    </div>
  );
}

export default App;
