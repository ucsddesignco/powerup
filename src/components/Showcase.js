import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { Grid } from "@material-ui/core";
import { Timeline } from "gsap/gsap-core";

function Showcase() {

    const onEnter = ({ currentTarget }) => {
        gsap.to("#box", {
            duration: 0.5,
            y: "-18rem",
        })
    }

    const onLeave = ({ currentTarget }) => {
        gsap.to("#box", {
            duration: 0.5,
            y: "18rem",
        })
    }

  return (
    <div className="showcase">
      <p className="showcase-header-text">Showcase</p>
      <div className="showcase-container">
        <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={6} lg={4} className="newcard" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div className="newcard-img"/>
                <div className="newcard-body">
                    <div className="newcard-info">
                        <div className="newcard-header-text">Blendees</div>
                        <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                    </div>
                </div>
                

                <div className="newcard-box" id="box">
                    <div className="newcard-box-info">
                    <p className="newcard-header-text">Blendees</p>
                    <p className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</p>
                    <p className="newcard-body-text">Cafe X: By Any Beans Necessary is a Black, women-owned coffee shop. The team worked on a brand refresh: creating new brand style guides, integrating an e-commerce site, and improving customer acquisition / retention strategies.</p>
                    <div className="newcard-view-items">
                        <p className="newcard-view-text">VIEW MORE</p>
                        <div className="newcard-rightarrow"></div>
                    </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} className="newcard" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div className="newcard-img"/>
                <div className="newcard-body">
                    <div className="newcard-info">
                        <div className="newcard-header-text">Blendees</div>
                        <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                    </div>
                </div>
                

                <div className="newcard-box" id="box">
                    <div className="newcard-info">
                    <div className="newcard-header-text">Blendees</div>
                    <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                    <div className="newcard-body-text">Cafe X: By Any Beans Necessary is a Black, women-owned coffee shop. The team worked on a brand refresh: creating new brand style guides, integrating an e-commerce site, and improving customer acquisition / retention strategies.</div>
                    </div>
                </div>
            </Grid><Grid item xs={12} sm={12} md={6} lg={4} className="newcard" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div className="newcard-img"/>
                <div className="newcard-body">
                    <div className="newcard-info">
                        <div className="newcard-header-text">Blendees</div>
                        <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                    </div>
                </div>
                

                <div className="newcard-box" id="box">
                    <div className="newcard-info">
                    <div className="newcard-header-text">Blendees</div>
                    <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                    <div className="newcard-body-text">Cafe X: By Any Beans Necessary is a Black, women-owned coffee shop. The team worked on a brand refresh: creating new brand style guides, integrating an e-commerce site, and improving customer acquisition / retention strategies.</div>
                    </div>
                </div>
            </Grid><Grid item xs={12} sm={12} md={6} lg={4} className="newcard" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div className="newcard-img"/>
                <div className="newcard-body">
                    <div className="newcard-info">
                        <div className="newcard-header-text">Blendees</div>
                        <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                    </div>
                </div>
                

                <div className="newcard-box" id="box">
                    <div className="newcard-info">
                    <div className="newcard-header-text">Blendees</div>
                    <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                    <div className="newcard-body-text">Cafe X: By Any Beans Necessary is a Black, women-owned coffee shop. The team worked on a brand refresh: creating new brand style guides, integrating an e-commerce site, and improving customer acquisition / retention strategies.</div>
                    </div>
                </div>
            </Grid><Grid item xs={12} sm={12} md={6} lg={4} className="newcard" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div className="newcard-img"/>
                <div className="newcard-body">
                    <div className="newcard-info">
                        <div className="newcard-header-text">Blendees</div>
                        <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                    </div>
                </div>
                

                <div className="newcard-box" id="box">
                    <div className="newcard-info">
                    <div className="newcard-header-text">Blendees</div>
                    <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                    <div className="newcard-body-text">Cafe X: By Any Beans Necessary is a Black, women-owned coffee shop. The team worked on a brand refresh: creating new brand style guides, integrating an e-commerce site, and improving customer acquisition / retention strategies.</div>
                    </div>
                </div>
            </Grid>
        </Grid>
      </div>
      

      
    </div>
  );
}

export default Showcase;
