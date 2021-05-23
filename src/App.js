import "./App.css";
import React, { useState } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import FAQStructure from "./components/FAQStructure";
import Footer from "./components/Footer";
import WhyApply from "./components/WhyApply";

function App() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <div className="App">
      <div
        className="cursor"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
      <Landing />
      <About />
      <WhyApply />
      <FAQStructure />
      <Footer />
    </div>
  );
}

export default App;
