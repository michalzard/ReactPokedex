import React,{useEffect, useState,useRef} from 'react'
import "../css/CardContainer.scss";
import PokemonCard from './PokemonCard';
import Footer from "./Footer";

import {getImagesByName} from "../utils";

import { useSelector } from 'react-redux';
import appSlice from "./store/appSlice";

//import {Button} from "@material-ui/core";


function CardContainer() {
    const inputFromRedux=useSelector(appSlice.actions.setInputValue);
    const [results,setResults] = useState([]);
    //const [input,setInput] = useState("");
    let isMounted=useRef(true);
    useEffect(()=>{
    async function fetchPokeData(){
        if(!localStorage.getItem("pokemon-v2")){
            await fetch("https://pokeapi.co/api/v2/pokemon?limit=898")
            .then(res=>res.json()).then(res=>{
                    if(isMounted.current){
                        setResults(res.results);
                        localStorage.setItem("pokemon-v2",JSON.stringify(res.results))
                    }
    }
    
    )}else {
        setResults(JSON.parse(localStorage.getItem("pokemon-v2")))
    }
    return ()=>{isMounted.current=false;}
    }
    fetchPokeData();
    },[])

    return (
        <div className="cards-container">
        <div className="cards-catalog-left"></div>
        <div className="cards-catalog">
        {results.map((result,i)=>{
        return  result.name.includes(inputFromRedux.payload.searchInput) ?
        <PokemonCard key={i} id={i}
        photo={getImagesByName(result.name)} name={result.name}/> : null})}  
        </div>
        <div className="cards-catalog-right"></div>
        <div className="footer"><Footer/></div>
        </div>
    )
}

export default CardContainer