import React from "react";
import OrangeArrow from "../assets/images/orange-arrow.svg";

function WhyApply() {
  return (
    <div id="whyapply-section">
      <div className="apply-left-container">
        <h2>Why You Should Apply</h2>
      </div>
      <div className="apply-right-container">
        <div className="apply-item">
          <img className="orange-arrow" src={OrangeArrow} alt="orange-arrow" />
          <p>
            If you’re looking to <b>power up your own portfolio</b>, this
            program is a great way to do so! Participants from last year’s Level
            Up were able to create a polished case study of their project and
            showcase it on their portfolio.{" "}
          </p>
        </div>
        <div className="apply-item">
          <img className="orange-arrow" src={OrangeArrow} alt="orange-arrow" />
          <p>
            Not to mention, your work will have a{" "}
            <b>profound impact on the small business you’re partnered with</b>.
            This isn’t a class project that vanishes after Week 10 because your
            teammates didn’t contribute; this is your chance to solve real-world
            problems with equally supportive teammates.{" "}
          </p>
        </div>
        <div className="apply-item">
          <img className="orange-arrow" src={OrangeArrow} alt="orange-arrow" />
          <p>
            In addition to growing as a designer, Power Up is another way to{" "}
            <b>nurture your network</b> with other student designers and
            industry mentors.{" "}
          </p>
        </div>
        <div className="apply-item">
          <img className="orange-arrow" src={OrangeArrow} alt="orange-arrow" />
          <p>
            If you’re not sold yet,{" "}
            <b>
              check out{" "}
              <a
                className="level-up-showcase-link"
                href="https://levelup.ucsddesign.co/"
                target="_blank"
              >
                Level Up’s showcase
              </a>
            </b>{" "}
            and see for yourself all the smiles and final deliverables our Level
            Uppers showed. This could be you!{" "}
          </p>
        </div>
      </div>
      <div></div>
      <a
        className="apply-here-btn"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        Apply Here
      </a>
    </div>
  );
}

export default WhyApply;
