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

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <div className="navbar">
            <span className="nav-title">
                <img id="ball-logo" src={Ball} alt="Ball Logo" /> Power Up
            </span>
            <nav className="desktop">
                <a href="#overview-section">Overview</a>
                <a href="#partners-section">Partners</a>
                <a href="#whyapply-section">Benefits</a>
                <a href="#faq">FAQ</a>
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
                        <a href="#overview-section" onClick={() => closeMenu()}>Overview</a>
                    </div>
                    <div className="nav-item">
                        <a href="#partners-section" onClick={() => closeMenu()}>Partners</a>
                    </div>
                    <div className="nav-item">
                        <a href="#whyapply-section" onClick={() => closeMenu()}>Benefits</a>
                    </div>
                    <div className="nav-item">
                        <a href="#faq" onClick={() => closeMenu()}>FAQ</a>
                    </div>
                    <div className="nav-item">
                        <a href="https://forms.gle/DpMo8EURvds47tmE8" target="_blank" onClick={() => closeMenu()}>
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
