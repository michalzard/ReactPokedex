import React,{useEffect,useState,useRef} from 'react'
import {useParams} from "react-router-dom";
import "../css/PokemonProfile.scss";
import {TypeBadge as Badge,BadgeTheme} from "./TypeBadge";
import Chart from "chart.js";
import { getImagesByName } from '../utils';


function PokemonProfile() {
    const {name,id} =useParams();
    const [types,setTypes]=useState([]);
    const [stats,setStats]=useState([]);
    const [weight,setWeight]=useState('');
    const [height,setHeight]=useState('');
    const [abilities,setAbilities]=useState([]);

    let isMounted=useRef(true);



    useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res=>res.json()).then(res=>{
        if(isMounted.current){
        setStats(res.stats);
        setTypes(res.types);
        setWeight(res.weight);
        setHeight(res.height);
        setAbilities(res.abilities);
        const c=document.createElement("canvas");
        const ctx=c.getContext("2d");    
        let labelNames=res.stats.map((item)=>{return item.stat.name});
        let dataValues=res.stats.map((item)=>{return item.base_stat});

        new Chart(ctx,{
        type:"radar",
        data:{
            labels:labelNames,
            datasets:[{
                label: `${name.charAt(0).toUpperCase()+name.replace(name.charAt(0),"")} Statistics`,
                data:dataValues,
                fill:true,
                backgroundColor:[
                    "rgb(0, 149, 255,.4)",
                ],
                borderWidth:2,
                borderColor:"rgb(0, 149, 255)"
            }],
        },
        options:{
           //TODO:GROWING ANIMATION
        }
        }); 
    document.getElementById("pokemon-chart").appendChild(c);
    }
    //Save to local sotrage cuz shit expensive to fetch all the time    
    })
    return ()=>{isMounted.current=false;}
    },[name,stats])

    return (
        <div className="pokemon-profile">
        <div className="pokemon-profile-left"></div>
        <div className="pokemon-profilecard">
        <div className="pokemon-title">
        <h2> {name.charAt(0).toUpperCase()+name.replace(name.charAt(0),"")} 
        <span>#{id}</span>
        </h2>
        </div>
        <div className="pokemon-info">
        <div className="pokemon-photo">
        <img src={getImagesByName(name)} alt=""></img>
        </div>
        <div className="pokemon-desc">
        Description about pokemon that is currently being displayed
        <div className="pokemon-stats">
        <div className="left">
        Height<span>{height} m</span>
        Weight<span>{(weight/2.2046).toFixed(0)} kg ({weight} lb)</span> 
        </div>
        <div>
        <div className="right">
        Abilities<span>
        {abilities.map((a,i)=>{return<AbilityElement key={i} name={a.ability.name} />})}
        </span>
        </div>
        </div>
        </div>
        <h3 className="pokemon-type">Type</h3>
        <div className="pokemon-types">
        {types[0] ? <Badge typeName={types[0].type.name} color={BadgeTheme[types[0].type.name]}/> : null}        <span className="space"></span>
        {types[1] ? <Badge typeName={types[1].type.name} color={BadgeTheme[types[1].type.name]}/> : null}        </div>
        </div>        
        <div id="pokemon-chart" className="pokemon-chart"></div>
        </div>
        </div>
        <div className="pokemon-profile-right"></div>
        </div>
    )
}

export default PokemonProfile

function AbilityElement({name}){
return(<p>{name}</p>)
}