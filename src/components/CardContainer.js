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
    if(!localStorage.getItem("pokemon")){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=492")
    .then(res=>res.json()).then(res=>{
            if(isMounted.current){
                setResults(res.results);
                localStorage.setItem("pokemon",JSON.stringify(res.results))
                console.log("results fetched & saved")
            }
    })}else {
        setResults(JSON.parse(localStorage.getItem("pokemon")))
        console.log("results loaded")
    }
    return ()=>{isMounted.current=false;}
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