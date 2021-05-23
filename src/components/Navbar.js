import React, { useState } from "react";
import Ball from "../assets/images/ball-logo.svg";
import Menu from "../assets/images/nav-menu.svg";
import Exit from "../assets/images/exit.svg";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        document.body.style.overflow = menuOpen ? "visible" : "hidden" ;
        document.documentElement.style.overflow = menuOpen ? "visible" : "hidden";
        setMenuOpen(!menuOpen);
    }

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

            <nav className="mobile">
            <img 
                id="menu"
                src={menuOpen ? Exit : Menu} 
                onClick={() => { handleMenuClick() }} 
                alt="Menu" 
                width="30px"
                height="30px"
            />
            {
                menuOpen &&
                <div className="nav-container">
                    <div className="nav-item">
                        <a href="#">Overview</a>
                    </div>
                    <div className="nav-item">
                        <a href="#">Partners</a>
                    </div>
                    <div className="nav-item">
                        <a href="#">Benefits</a>
                    </div>
                    <div className="nav-item">
                        <a href="#">FAQ</a>
                    </div>
                    <div className="nav-item">
                        <a href="https://forms.gle/DpMo8EURvds47tmE8" target="_blank">
                            Apply
                        </a>
                    </div>
                </div>
            }
            </nav>
        </div>
    );
}

export default Navbar;
