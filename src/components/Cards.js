import "../App.css";
import { Grid } from "@material-ui/core";
import React, { useState, useEffect, useContext } from 'react';

import gsap from "gsap";

function Cards() {

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener("mousemove", (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    });


    const [inHover, setHover] = useState("cursor");

    

    return (
        <div className="cards" >
            <div
                className={inHover}
                style={{
                left: cursorX + "px",
                top: cursorY + "px",
                }}
            ></div>
            
            <p className="cards-head-text">You could design or help markets for these San Diego small businesses:</p>
            <Grid container spacing={4} className="top-cards">
                <Grid item xs={12} sm={6} md={4}>
                    <div className="cards-item1"
                    onMouseEnter={() => setHover("item1-cursor")}
                    onMouseLeave={() => setHover("cursor")}
                    >
                        <div className="cards-title">
                            <p className="cards-title-text">Blendees</p>
                            <div className="cards-line"></div>
                        </div>
                        <div className="cards-contact">
                            <p className="contact-first-text">Instagram</p>
                            <p className="contact-text">Facebook</p>
                            <p className="contact-text">Website</p>
                        </div>
                        <ul className="cards-bullets">
                            <li className="bullet-text">Black-owned smoothie and juice bar</li>
                            <li className="bullet-text">Needs help in creating a market plan</li>
                        </ul>
                        
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="cards-item2"
                    onMouseEnter={() => setHover("item2-cursor")}
                    onMouseLeave={() => setHover("cursor")}
                    >
                        <div className="cards-title">
                            <p className="cards-title-text">Kini Koffee</p>
                            <div className="cards-line"></div>
                        </div>
                        <div className="cards-contact">
                            <p className="contact-first-text">Instagram</p>
                            <p className="contact-text">Facebook</p>
                        </div>
                        <ul className="cards-bullets">
                            <li className="bullet-text">Women-led and run coffee shop</li>
                            <li className="bullet-text">Needs help in creating a website</li>
                        </ul>
                        
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="cards-item3"
                    onMouseEnter={() => setHover("item3-cursor")}
                    onMouseLeave={() => setHover("cursor")}
                    >
                        <div className="cards-title">
                            <p className="cards-title-text">Furlicious</p>
                            <div className="cards-line"></div>
                        </div>
                        <div className="cards-contact">
                            <p className="contact-first-text">Instagram</p>
                            <p className="contact-text">Website</p>
                        </div>
                        <ul className="cards-bullets">
                            <li className="bullet-text">Black-owned pet care/dog training classes</li>
                            <li className="bullet-text">Needs _________</li>
                        </ul>
                        
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="cards-item4"
                    onMouseEnter={() => setHover("item4-cursor")}
                    onMouseLeave={() => setHover("cursor")}
                    >
                        <div className="cards-title">
                            <p className="cards-title-text">Skinfolk</p>
                            <div className="cards-line"></div>
                        </div>
                        <div className="cards-contact">
                            <p className="contact-first-text">Instagram</p>
                            <p className="contact-text">Website</p>
                        </div>
                        <ul className="cards-bullets">
                            <li className="bullet-text">Black-owned organic cosmetics brand</li>
                            <li className="bullet-text">Wants a website redesign (tbd)</li>
                        </ul>
                        
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="cards-item5"
                    onMouseEnter={() => setHover("item5-cursor")}
                    onMouseLeave={() => setHover("cursor")}
                    >
                        <div className="cards-title">
                            <p className="cards-title-large-text">Cut & Dry Barbershop</p>
                            <div className="cards-line"></div>
                        </div>
                        <div className="cards-contact">
                            <p className="contact-text">Website</p>
                        </div>
                        <ul className="cards-bullets">
                            <li className="bullet-text">Asian American-owned barber shop</li>
                            <li className="bullet-text">Needs _________</li>
                        </ul>
                        
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="cards-item6"
                    onMouseEnter={() => setHover("item6-cursor")}
                    onMouseLeave={() => setHover("cursor")}
                    >
                        <div className="cards-title">
                            <p className="cards-title-text">Cafe X</p>
                            <div className="cards-line"></div>
                        </div>
                        <div className="cards-contact">
                            <p className="contact-first-text">Instagram</p>
                            <p className="contact-text">Website</p>
                        </div>
                        <ul className="cards-bullets">
                            <li className="bullet-text">Black, women-owned coffee shop</li>
                            <li className="bullet-text">Needs marketing/web design assistance</li>
                        </ul>
                        
                    </div>
                </Grid>
            </Grid>
            <div className="cards-red"></div>
        </div>
  );
}

export default Cards;
