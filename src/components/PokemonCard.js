import React from 'react';
import {Link} from "react-router-dom";
import "../css/PokemonCard.scss";
import {TypeBadge as Badge,BadgeTheme} from "./TypeBadge";

function PokemonCard({id,photo,name,badges}) {
    return (
      
        <div className="pokemon-card">
        <div className="pokemon-photo">
        <Link to={`/pokemon/${name}`} style={{textDecoration:"none"}}>
        <img src={photo} width={120} height={120} alt=""></img>
        </Link>
        </div>
        <div className="pokemon-id">#{id}</div>
        <div className="pokemon-name">{name}</div>
        <div className="pokemon-types">
        <Link to={`/types/grass`} style={{textDecoration:"none"}}>
        <Badge typeName="grass" color={BadgeTheme["grass"]}/>
        </Link>
        <div className="second-type">
        <Link to={`/types/${badges.type}`} style={{textDecoration:"none"}}>
        <Badge typeName={badges.type} color={BadgeTheme[badges.type]}/>
        </Link>        
        </div>

        
        </div>
        </div>
    )
}

export default PokemonCard;
