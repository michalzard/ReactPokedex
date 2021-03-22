import React from 'react'
import "../css/CardContainer.scss";
import PokemonCard from './PokemonCard';
import Logo from "../assets/p.png";
//import {Button} from "@material-ui/core";

function CardContainer() {
    const arr=[];
    for(let i=0;i<50;i++){arr.push("p"+Math.random())}
    return (
        <div className="cards-container">
        <div className="cards-catalog-left"></div>
        <div className="cards-catalog">
        {arr.map((index)=>{ return <PokemonCard key={index} id="001" photo={Logo} name="Firesaur" badges={{type:"flying"}}/>})}  
        </div>

        <div className="cards-catalog-right"></div>
        </div>
    )
}

export default CardContainer
