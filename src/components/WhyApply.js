import React from "react";
import OrangeArrow from "../assets/images/orange-arrow.svg";

function WhyApply() {
  return (
    <div id="whyapply-section">
      <div className="apply-left-container">
        <h2>Thank You</h2>
      </div>
      <div className="apply-right-container">
        <div className="apply-item">
          <div className="orange-arrow" />
          <div className="apply-text-container">
            <p>
              To all the small businesses for partnering with us in our DEI initiative and giving students the chance to make a difference.
            </p>
          </div>
        </div>
        <div className="apply-item">
          <div className="orange-arrow" />
          <div className="apply-text-container">
            <p>
              To all the mentors for taking the time to guide and uplift a cohort of changemakers.
            </p>
          </div>
        </div>
        <div className="apply-item">
          <div className="orange-arrow" />
          <div className="apply-text-container">
            <p>
              To all the students for taking part in Power Up and collaborating to make an impact on local BIPOC- and minority-owned small businesses.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default WhyApply;
