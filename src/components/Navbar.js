import React, { useState } from "react";
import Ball from "../assets/images/ball-logo.svg";

function Navbar() {
    return (
        <div className="navbar">
            <span className="nav-title">
                <img id="ball-logo" src={Ball} alt="Ball Logo" /> Power Up
            </span>
            <nav className="desktop">
                <a href="#">Overview</a>
                <a href="#">Partners</a>
                <a href="#">Benefits</a>
                <a href="#">FAQ</a>
                <a id="button" href="https://forms.gle/DpMo8EURvds47tmE8" target="_blank">
                    Apply Here
                </a>
            </nav>
        </div>
    );
}

export default Navbar;
