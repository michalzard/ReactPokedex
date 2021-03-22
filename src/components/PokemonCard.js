import React, { useEffect, useState,useRef } from 'react';
import {Link} from "react-router-dom";
import "../css/PokemonCard.scss";
import {TypeBadge as Badge,BadgeTheme} from "./TypeBadge";

function PokemonCard({id,photo,name}) {
    const [types,setTypes]=useState([]);
    let isMounted=useRef(true);

    useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res=>res.json()).then(res=>{
            if(isMounted.current) setTypes(res.types);
            //Save to local sotrage cuz shit expensive to fetch all the time
    })
    return ()=>{isMounted.current=false;}
    },[name])

    return (
        
        <div className="pokemon-card">
        <div className="pokemon-photo">
        <Link to={`/pokemon/${id}/${name}`} style={{textDecoration:"none"}}>
        <img src={photo} width={120} height={120} alt=""></img>
        </Link>
        </div>
        <div className="pokemon-id">#{id}</div>
        <div className="pokemon-name">{name.charAt(0).toUpperCase()+name.replace(name.charAt(0),"")}</div>
        <div className="pokemon-types">
        {types[0] ? <Badge typeName={types[0].type.name} color={BadgeTheme[types[0].type.name]}/> : null}
        <div className="second-type">
        {types[1] ? <Badge typeName={types[1].type.name} color={BadgeTheme[types[1].type.name]}/> : null}
        </div>

        
        </div>
        </div>
    )
}

export default PokemonCard;
