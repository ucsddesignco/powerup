import "../App.css";
import { Grid } from "@material-ui/core";
import React, { useState } from 'react';
import Draggable from 'react-draggable';

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
            <Grid container spacing={4} justify={"center"} className="top-cards">
                <Grid item xs={12} sm={6} md={4}>
                    <div className="cards-item1"
                    onMouseEnter={() => setHover("item1-cursor")}
                    onMouseLeave={() => setHover("cursor")}
                    >
                        <div className="cards-title">
                            <p className="cards-title-text">Blendees</p>
                            <div className="cards-line"></div>
                        </div>
                        <Draggable><div className="cards-item1-img"></div></Draggable>
                        <div className="cards-contact">
                            <a target="_blank" href="https://www.instagram.com/blendees/"><p className="contact-first-text">Instagram</p></a>
                            <a target="_blank" href="https://www.facebook.com/Blendees/"><p className="contact-text">Facebook</p></a>
                            <a target="_blank" href="https://blendees.com/"><p className="contact-text">Website</p></a>
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
                        <Draggable><div className="cards-item2-img"></div></Draggable>
                        <div className="cards-contact">
                            <a target="_blank" href="https://www.instagram.com/kinikoffee/?hl=en"><p className="contact-first-text">Instagram</p></a>
                            <a target="_blank" href="https://www.facebook.com/Kini-Koffee-1213535565513951/"><p className="contact-text">Facebook</p></a>
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
                        <Draggable><div className="cards-item3-img"></div></Draggable>
                        <div className="cards-title">
                            <p className="cards-title-text">Furlicious</p>
                            <div className="cards-line"></div>
                        </div>
                        <div className="cards-contact">
                            <a target="_blank" href="https://www.instagram.com/furrylicious/?hl=en"><p className="contact-first-text">Instagram</p></a>
                            <a target="_blank" href="https://www.furrylicious.com/"><p className="contact-text">Website</p></a>
                        </div>
                        <ul className="cards-bullets">
                            <li className="bullet-text">Black-owned pet care/dog training classes</li>
                            <li className="bullet-text">Needs _________</li>
                        </ul>
                        
                    </div>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <div className="cards-item5"
                    onMouseEnter={() => setHover("item5-cursor")}
                    onMouseLeave={() => setHover("cursor")}
                    >
                        <Draggable><div className="cards-item5-img"></div></Draggable>
                        <div className="cards-title">
                            <p className="cards-title-large-text">Cut & Dry Barbershop</p>
                            <div className="cards-line"></div>
                        </div>
                        <div className="cards-contact">
                            <a target="_blank" href="http://cutanddrybarbershop.com/"><p className="contact-text">Website</p></a>
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
                        <Draggable><div className="cards-item6-img"></div></Draggable>
                        <div className="cards-title">
                            <p className="cards-title-text">Cafe X</p>
                            <div className="cards-line"></div>
                        </div>
                        <div className="cards-contact">
                            <a target="_blank" href="http://instagram.com/theofficialcafex"><p className="contact-first-text">Instagram</p></a>
                            <a target="_blank" href="https://www.byanybeans.org/"><p className="contact-text">Website</p></a>
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
