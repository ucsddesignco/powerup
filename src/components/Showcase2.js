import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Modal from "../components/Modal";
import { Grid } from "@material-ui/core";
import { Timeline } from "gsap/gsap-core";

function Showcase2() {
    const [showModal, setShowModal] = useState(false);
    
    const hideModal = () => {
        setShowModal(false);
    };

    const onEnter1 = ({ currentTarget }) => {
        gsap.to("#box1", {
            duration: 0.5,
            y: "-18rem",
        })
    }

    const onLeave1 = ({ currentTarget }) => {
        gsap.to("#box1", {
            duration: 0.5,
            y: "18rem",
        })
    }

    const onEnter2 = ({ currentTarget }) => {
        gsap.to("#box2", {
            duration: 0.5,
            y: "-18rem",
        })
    }

    const onLeave2 = ({ currentTarget }) => {
        gsap.to("#box2", {
            duration: 0.5,
            y: "18rem",
        })
    }

    const onEnter3 = ({ currentTarget }) => {
        gsap.to("#box3", {
            duration: 0.5,
            y: "-18rem",
        })
    }

    const onLeave3 = ({ currentTarget }) => {
        gsap.to("#box3", {
            duration: 0.5,
            y: "18rem",
        })
    }

    const onEnter4 = ({ currentTarget }) => {
        gsap.to("#box4", {
            duration: 0.5,
            y: "-18rem",
        })
    }

    const onLeave4 = ({ currentTarget }) => {
        gsap.to("#box4", {
            duration: 0.5,
            y: "18rem",
        })
    }

    const onEnter5 = ({ currentTarget }) => {
        gsap.to("#box5", {
            duration: 0.5,
            y: "-18rem",
        })
    }

    const onLeave5 = ({ currentTarget }) => {
        gsap.to("#box5", {
            duration: 0.5,
            y: "18rem",
        })
    }

  return (
    <div className="showcase" id="showcase-section">
        <p className="showcase-header-text">Showcase</p>
        <div className="showcase-container">
            <div className="showcase-large">
                    <div className="newcard" onMouseEnter={onEnter1} onMouseLeave={onLeave1} onClick={() => {setShowModal(true)}}>
                        <div className="newcard-img1"/>
                        <div className="newcard-body">
                            <div className="newcard-info">
                                <div className="newcard-header-text">Blendees</div>
                                <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                            </div>
                        </div>
                        

                        <div className="newcard-box" id="box1">
                            <div className="newcard-box-info">
                                <p className="newcard-header-text">Blendees</p>
                                <p className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</p>
                                <p className="newcard-body-text">Blendees is a Black-owned smoothie and juice bar. The team redesigned Blendees’ website and marketing strategies to increase new user engagement, improved discoverability of their services, and amplified their voice as a healthy, Black-owned small business.</p>
                                <div className="newcard-view-items" onClick={() => {setShowModal(true)}}>
                                    <p className="newcard-view-text">VIEW MORE</p>
                                    <div className="newcard-rightarrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newcard" onMouseEnter={onEnter2} onMouseLeave={onLeave2}>
                        <div className="newcard-img2"/>
                        <div className="newcard-body">
                            <div className="newcard-info">
                                <div className="newcard-header-text">Cafe X</div>
                                <div className="newcard-name-text">Minnie Chau, Fiona Feng, Francesco Medina, Shad Gabrielle Reyes, Nathen Shin, Camille Yabut</div>
                            </div>
                        </div>
                        

                        <div className="newcard-box" id="box2">
                            <div className="newcard-box-info">
                                <p className="newcard-header-text">Cafe X</p>
                                <p className="newcard-name-text">Minnie Chau, Fiona Feng, Francesco Medina, Shad Gabrielle Reyes, Nathen Shin, Camille Yabut</p>
                                <p className="newcard-body-text">Cafe X: By Any Beans Necessary is a Black, women-owned coffee shop. The team worked on a brand refresh: creating new brand style guides, integrating an e-commerce site, and improving customer acquisition / retention strategies.</p>
                                <div className="newcard-view-items">
                                    <p className="newcard-view-text">VIEW MORE</p>
                                    <div className="newcard-rightarrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newcard" onMouseEnter={onEnter3} onMouseLeave={onLeave3}>
                        <div className="newcard-img3"/>
                        <div className="newcard-body">
                            <div className="newcard-info">
                                <div className="newcard-header-text">Cut & Dry Barbershop</div>
                                <div className="newcard-name-text">Julie Han, Fernando Reyes Jr, Thuy-An Hoang, Khiem Pham, Lillian Wei</div>
                            </div>
                        </div>
                        

                        <div className="newcard-box" id="box3">
                            <div className="newcard-box-info">
                                <p className="newcard-header-text">Cut & Dry Barbershop</p>
                                <p className="newcard-name-text">Julie Han, Fernando Reyes Jr, Thuy-An Hoang, Khiem Pham, Lillian Wei</p>
                                <p className="newcard-body-text">Cut & Dry Barbershop is an Asian American-owned barbershop. The team created a brand new, user-friendly website and revamped their social media content to increase business awareness and build their brand surrounding barber culture.</p>
                                <div className="newcard-view-items">
                                    <p className="newcard-view-text">VIEW MORE</p>
                                    <div className="newcard-rightarrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
                    
                
                <div className="showcase-large">
                    <div className="newcard" onMouseEnter={onEnter4} onMouseLeave={onLeave4}>
                        <div className="newcard-img4"/>
                        <div className="newcard-body">
                            <div className="newcard-info">
                                <div className="newcard-header-text">Furlicious</div>
                                <div className="newcard-name-text">Princess Labrador, Autumn Bui, Matthew Chijioke, Hannah Nicole Espejo</div>
                            </div>
                        </div>
                        

                        <div className="newcard-box" id="box4">
                            <div className="newcard-box-info">
                                <p className="newcard-header-text">Furlicious</p>
                                <p className="newcard-name-text">Princess Labrador, Autumn Bui, Matthew Chijioke, Hannah Nicole Espejo</p>
                                <p className="newcard-body-text">Furlicious is a Black-owned pet care and training business. The team’s mission is to create an effective marketing plan and aesthetic social media revamp that invites pet owners to engage with Furlicious’s content and services!</p>
                                <div className="newcard-view-items">
                                    <p className="newcard-view-text">VIEW MORE</p>
                                    <div className="newcard-rightarrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newcard" onMouseEnter={onEnter5} onMouseLeave={onLeave5}>
                        <div className="newcard-img5"/>
                        <div className="newcard-body">
                            <div className="newcard-info">
                                <div className="newcard-header-text">Kini Koffee</div>
                                <div className="newcard-name-text">Stella Seki, Rainee Pei, Edward De Leon, Deepika Vuppala, Chynna Tumalad</div>
                            </div>
                        </div>
                        

                        <div className="newcard-box" id="box5">
                            <div className="newcard-box-info">
                                <p className="newcard-header-text">Kini Koffee</p>
                                <p className="newcard-name-text">Stella Seki, Rainee Pei, Edward De Leon, Deepika Vuppala, Chynna Tumalad</p>
                                <p className="newcard-body-text">Kini Koffee is a women-led and run coffee shop. The team is bringing people to the rooftops of Del Mar by creating a customer-centered website and social media marketing strategy for Kini Koffee.</p>
                                <div className="newcard-view-items">
                                    <p className="newcard-view-text">VIEW MORE</p>
                                    <div className="newcard-rightarrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newcard2"></div>
                </div>

                <div className="showcase-medium">
                    <div className="newcard" onMouseEnter={onEnter1} onMouseLeave={onLeave1}>
                        <div className="newcard-img1"/>
                        <div className="newcard-body">
                            <div className="newcard-info">
                                <div className="newcard-header-text">Blendees</div>
                                <div className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</div>
                            </div>
                        </div>
                        

                        <div className="newcard-box" id="box1">
                            <div className="newcard-box-info">
                                <p className="newcard-header-text">Blendees</p>
                                <p className="newcard-name-text">Nicolette Shin, Jodie Li, Tracy Nguyen, Rou Wen, Adrian Rodriguez Valdez</p>
                                <p className="newcard-body-text">Blendees is a Black-owned smoothie and juice bar. The team redesigned Blendees’ website and marketing strategies to increase new user engagement, improved discoverability of their services, and amplified their voice as a healthy, Black-owned small business.</p>
                                <div className="newcard-view-items">
                                    <p className="newcard-view-text">VIEW MORE</p>
                                    <div className="newcard-rightarrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newcard" onMouseEnter={onEnter2} onMouseLeave={onLeave2}>
                        <div className="newcard-img2"/>
                        <div className="newcard-body">
                            <div className="newcard-info">
                                <div className="newcard-header-text">Cafe X</div>
                                <div className="newcard-name-text">Minnie Chau, Fiona Feng, Francesco Medina, Shad Gabrielle Reyes, Nathen Shin, Camille Yabut</div>
                            </div>
                        </div>
                        

                        <div className="newcard-box" id="box2">
                            <div className="newcard-box-info">
                                <p className="newcard-header-text">Cafe X</p>
                                <p className="newcard-name-text">Minnie Chau, Fiona Feng, Francesco Medina, Shad Gabrielle Reyes, Nathen Shin, Camille Yabut</p>
                                <p className="newcard-body-text">Cafe X: By Any Beans Necessary is a Black, women-owned coffee shop. The team worked on a brand refresh: creating new brand style guides, integrating an e-commerce site, and improving customer acquisition / retention strategies.</p>
                                <div className="newcard-view-items">
                                    <p className="newcard-view-text">VIEW MORE</p>
                                    <div className="newcard-rightarrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
                    
                
                <div className="showcase-medium">
                    <div className="newcard" onMouseEnter={onEnter3} onMouseLeave={onLeave3}>
                        <div className="newcard-img3"/>
                        <div className="newcard-body">
                            <div className="newcard-info">
                                <div className="newcard-header-text">Cut & Dry Barbershop</div>
                                <div className="newcard-name-text">Julie Han, Fernando Reyes Jr, Thuy-An Hoang, Khiem Pham, Lillian Wei</div>
                            </div>
                        </div>
                        

                        <div className="newcard-box" id="box3">
                            <div className="newcard-box-info">
                                <p className="newcard-header-text">Cut & Dry Barbershop</p>
                                <p className="newcard-name-text">Julie Han, Fernando Reyes Jr, Thuy-An Hoang, Khiem Pham, Lillian Wei</p>
                                <p className="newcard-body-text">Cut & Dry Barbershop is an Asian American-owned barbershop. The team created a brand new, user-friendly website and revamped their social media content to increase business awareness and build their brand surrounding barber culture.</p>
                                <div className="newcard-view-items">
                                    <p className="newcard-view-text">VIEW MORE</p>
                                    <div className="newcard-rightarrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newcard" onMouseEnter={onEnter4} onMouseLeave={onLeave4}>
                        <div className="newcard-img4"/>
                        <div className="newcard-body">
                            <div className="newcard-info">
                                <div className="newcard-header-text">Blendees</div>
                                <div className="newcard-name-text">Princess Labrador, Autumn Bui, Matthew Chijioke, Hannah Nicole Espejo</div>
                            </div>
                        </div>
                        

                        <div className="newcard-box" id="box4">
                            <div className="newcard-box-info">
                                <p className="newcard-header-text">Furlicious</p>
                                <p className="newcard-name-text">Princess Labrador, Autumn Bui, Matthew Chijioke, Hannah Nicole Espejo</p>
                                <p className="newcard-body-text">Furlicious is a Black-owned pet care and training business. The team’s mission is to create an effective marketing plan and aesthetic social media revamp that invites pet owners to engage with Furlicious’s content and services!</p>
                                <div className="newcard-view-items">
                                    <p className="newcard-view-text">VIEW MORE</p>
                                    <div className="newcard-rightarrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="showcase-medium">
                    <div className="newcard" onMouseEnter={onEnter5} onMouseLeave={onLeave5}>
                        <div className="newcard-img5"/>
                        <div className="newcard-body">
                            <div className="newcard-info">
                                <div className="newcard-header-text">Kini Koffee</div>
                                <div className="newcard-name-text">Stella Seki, Rainee Pei, Edward De Leon, Deepika Vuppala, Chynna Tumalad</div>
                            </div>
                        </div>
                        

                        <div className="newcard-box" id="box5">
                            <div className="newcard-box-info">
                                <p className="newcard-header-text">Kini Koffee</p>
                                <p className="newcard-name-text">Stella Seki, Rainee Pei, Edward De Leon, Deepika Vuppala, Chynna Tumalad</p>
                                <p className="newcard-body-text">Kini Koffee is a women-led and run coffee shop. The team is bringing people to the rooftops of Del Mar by creating a customer-centered website and social media marketing strategy for Kini Koffee.</p>
                                <div className="newcard-view-items">
                                    <p className="newcard-view-text">VIEW MORE</p>
                                    <div className="newcard-rightarrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newcard2"></div>
                </div>
            
            <div className="red-button">
                <p className="red-button-text">Showcase Recording</p>
            </div>
            
        </div>
        <Modal
            show={showModal}
            onHide={() => {hideModal()}} 
            index={0} 
        />   
    </div>
  );
}

export default Showcase2;
