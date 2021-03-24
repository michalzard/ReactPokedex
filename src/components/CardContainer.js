import React,{useEffect, useState,useRef} from 'react'
import "../css/CardContainer.scss";
import PokemonCard from './PokemonCard';
import Footer from "./Footer";

import {getImagesByName} from "../utils";


//import {Button} from "@material-ui/core";

function CardContainer() {
    
    const [results,setResults] = useState([]);
    let isMounted=useRef(true);
    useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=492")
    .then(res=>res.json()).then(res=>{
            if(isMounted.current)setResults(res.results);
            //Save to local sotrage cuz shit expensive to fetch all the time
    })
    return ()=>{isMounted.current=false;}
    },[])

    return (
        <div className="cards-container">
        <div className="cards-catalog-left"></div>
        <div className="cards-catalog">
        {results.map((result,i)=>{
        return <PokemonCard key={i} id={i}
        photo={getImagesByName(result.name)} name={result.name}/>})}  
        </div>
        <div className="cards-catalog-right"></div>
        <div className="footer"><Footer/></div>
        </div>
    )
}

export default CardContainer