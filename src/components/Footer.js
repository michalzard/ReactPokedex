import React from 'react';
import "../css/Footer.scss";

import Twitter from "../assets/twitter.svg"
import Github from "../assets/github.svg"

function Footer() {
    return (
        <div className="footer-container">
        <div className="footer">
        <div className="footer-left">
        <span>ABOUT</span>
        Pokémon are creatures of all shapes and sizes who live in the wild or alongside humans. 
        For the most part, Pokémon do not speak except to utter their names.
        Pokémon are raised and commanded by their owners (called “Trainers”).
        During their adventures, Pokémon grow and become more experienced and even, on occasion, evolve into stronger Pokémon. 
        There are currently more than 700 creatures that inhabit the Pokémon universe.
        </div>

        <div className="footer-right">
        <span>SOCIALS</span>
        <div className="footer-center-icons">
        <a target="_blank" href="https://github.com/MichalPlatko/" rel="noreferrer"><img src={Github} alt="Author's Github"></img></a>
        <a target="_blank" href="https://twitter.com/" rel="noreferrer"><img src={Twitter} alt="Author's Twitter"></img></a>
        <a href="/" rel="noreferrer"> 
        ©2021 MichalZard</a>
        </div>
        </div>
        </div>
        
        </div>
    )
}

export default Footer
