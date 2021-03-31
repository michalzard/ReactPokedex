import React,{useEffect, useState,useRef} from 'react'
import "../css/CardContainer.scss";
import PokemonCard from './PokemonCard';
import Footer from "./Footer";

import {getImagesByName} from "../utils";
import {Button} from "@material-ui/core";
import { useSelector } from 'react-redux';
import appSlice from "./store/appSlice";

//import {Button} from "@material-ui/core";


function CardContainer() {
    const inputFromRedux=useSelector(appSlice.actions.setInputValue);
    const [results,setResults] = useState([]);
    const maxVisibleResults=897; //after 897 there are weird affixes on names
    const [visibleResults,setVisibleResults]= useState(32);
    let isMounted=useRef(true);
    useEffect(()=>{
    async function fetchPokeData(){
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${maxVisibleResults}`)
    .then(res=>res.json()).then(res=>{
    if(isMounted.current){
    setResults(res.results);
    }
    }
    )}
    fetchPokeData();
    return ()=>{isMounted.current=false;}
    },[])

    const loadMore=()=>{
    setVisibleResults(prevResults=>prevResults+48);
    }
    return (
        <div className="cards-container">
        <div className="cards-catalog-left"></div>
        <div className="cards-catalog">
        {
        inputFromRedux.payload.searchInput ? 
        results.map((result,i)=>{
            return  result.name.includes(inputFromRedux.payload.searchInput) ?
            <PokemonCard key={i} id={i}
            photo={getImagesByName(result.name)} name={result.name}/> : null})
        :
        results.slice(0,visibleResults).map((result,i)=>{
            return  result.name.includes(inputFromRedux.payload.searchInput) ?
            <PokemonCard key={i} id={i}
            photo={getImagesByName(result.name)} name={result.name}/> : null})
        }
        {inputFromRedux.payload.searchInput.length>0 || visibleResults>=maxVisibleResults ? null :
        <Button color="secondary" variant="contained" size="large" onClick={loadMore}>LOAD MORE</Button>}
        </div>
        <div className="cards-catalog-right"></div>
        <div className="footer"><Footer/></div>
        </div>
    )
}

export default CardContainer