import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Modal from "../components/Modal";
import { Grid } from "@material-ui/core";
import { Timeline } from "gsap/gsap-core";

function Medium() {

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                repeat: -1,
            }
        })
        tl
            .to("#medium-1", {
                duration: 6,
                x: '140vw',
                ease: "none",
            })
            .to("#medium-2", {
                duration: 6,
                x: '140vw',
                ease: "none",
            }, "<2")
            .to("#medium-3", {
                duration: 6,
                x: '140vw',
                ease: "none",
            }, "<2")
            .startTime(-6)
    })

  return (
    <div id="articles-section">
        <div className="medium">
            
            <h3>Hear what our Power Uppers and mentors had to say about their experience!</h3>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className="medium-card">
                        <div className="medium-card-container">
                            <div className="medium-head">
                                <h4>Power Up Cohort Experience (Summer 2021): Part 1</h4>
                                <p>Meet 4 students from Blendees, Cafe X, and Cut & Dry Barbershop</p>
                            </div>
                            <div className="medium-red-button">
                                <a href="http://bit.ly/powerup-article1" target="_blank"><p>READ ARTICLE</p></a>
                            </div> 
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className="medium-card">
                        <div className="medium-card-container">
                            <div className="medium-card-head">
                            <h4>Power Up Cohort Experience (Summer 2021): Part 2</h4>
                                <p>Meet 3 students from Furlicious and Kini Koffee</p>
                            </div>
                            <div className="medium-red-button">
                                <a href="http://bit.ly/powerup-article2" target="_blank"><p>READ ARTICLE</p></a>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className="medium-card">
                        <div className="medium-card-container">
                            <div className="medium-card-head">
                                <h4>Power Up Mentor Experience (Summer 2021)</h4>
                                <p>Read what 4 design and marketing mentors have to say about their experience</p>
                            </div>
                            <div className="medium-red-button">
                                <a href="http://bit.ly/powerup-mentor-article" target="_blank"><p>READ ARTICLE</p></a>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <div className="medium-card">
                        <div className="medium-card-container">
                            <div className="medium-card-head">
                                <h4>From Small Business to Big Impact: How Power Up Teams Transformed Blendees & Café X</h4>
                                <p>Highlighting the owners of Blendees and Café X</p>
                            </div>
                            <div className="medium-red-button">
                                <a href="http://bit.ly/powerup-sbo-article" target="_blank"><p>READ ARTICLE</p></a>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
    
  );
}

export default Medium;
