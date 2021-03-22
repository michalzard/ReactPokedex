import React from 'react';
import "../css/Footer.scss";

import Twitter from "../assets/twitter.png"
import Github from "../assets/github.png"

function Footer() {
    return (
        <div className="footer-container">
        <div className="footer">
        <div className="footer-left">
        <span>ABOUT</span>
        </div>

        <div className="footer-center">
        <span>SOCIALS</span>
        <div className="footer-center-icons">
        <a target="_blank" href="https://github.com/MichalPlatko/"><img src={Github} alt="Author's Github"></img></a>
        <a target="_blank" href="https://twitter.com/"><img src={Twitter} alt="Author's Twitter"></img></a>
        </div>
        </div>
        <div className="footer-right">        
        <h4> <a target="_blank" href="https://github.com/MichalPlatko/"> ©2021 Michal Platko</a></h4>
        
        </div>
        </div>
        
        </div>
    )
}

export default Footer
