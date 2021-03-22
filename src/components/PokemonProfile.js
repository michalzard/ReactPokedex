import React,{useEffect} from 'react'
import Logo from "../assets/p.png";
import "../css/PokemonProfile.scss";
import {TypeBadge as Badge,BadgeTheme} from "./TypeBadge";
import Chart from "chart.js";

const c=document.createElement("canvas");
const ctx=c.getContext("2d");
new Chart(ctx,{
    type:"radar",
    data:{
        labels:["HP","Attack","Defense","Special Attack","Special Defense","Speed"],
        datasets:[{
            label: "Firesaur Statistics",
            data:[15,5,13,12,14,12],
            fill:true,
            backgroundColor:[
                "rgb(0, 149, 255,.5)",
            ],
            borderWidth:2,
            borderColor:"rgb(0, 149, 255)"
        }],
        
    }
})

function PokemonProfile() {
  
    useEffect(()=>{document.getElementById("pokemon-chart").appendChild(c)},[]);
    return (
        <div className="pokemon-profile">
        <div className="pokemon-profile-left"></div>
        <div className="pokemon-profilecard">
        <div className="pokemon-title"><h2>Firesaur <span>#001</span></h2></div>
        <div className="pokemon-info">
        <div className="pokemon-photo">
        <img src={Logo} alt=""></img>
        </div>
        <div className="pokemon-desc">
        Description about pokemon that is currently being displayed
       
        <div className="pokemon-stats">
        <div className="left">
        Height <span>2' 04"</span>
        Weight<span>15.2 lbs</span> 
        Gender<span>icons</span> 
        </div>
        <div>
        <div className="right">
        Category<span>Something</span> 
        Abilities<span>Fireslash</span>
        </div>
        </div>
        </div>
        <h3 className="pokemon-type">Type</h3>
        <div className="pokemon-types">
        <Badge typeName="Fire" color={BadgeTheme.fire}></Badge>
        <span className="space"></span>
        <Badge typeName="Poison" color={BadgeTheme.poison}></Badge>
        </div>
        </div>        
        <div id="pokemon-chart" className="pokemon-chart"></div>
        </div>
        </div>
        <div className="pokemon-profile-right"></div>
        </div>
    )
}

export default PokemonProfile
