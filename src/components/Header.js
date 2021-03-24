import React, { useState } from 'react'
import "../css/Header.scss"
import Pokeball from "../assets/pokeball.png";
import {TextField,Button} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/SearchSharp';
function Header() {
    const [input,setInput] = useState("");
    const inputOnChange=(e)=>{
        setInput(e.target.value);
    }
    const onButtonClick=()=>{
        console.log(input);
        setInput("");
    }
    return (
        <div className="header">
        <div className="header-logo"><a href="/" ><img src={Pokeball} alt="logo" width={40}></img></a></div>
        <div className="header-title">
        <a href="/" ><span>Poké Catalog</span></a>
        </div>
        <div className="header-search">
        <TextField color="secondary" placeholder="Pokémon name,type,ability" value={input} onChange={inputOnChange}
        variant="outlined" size="small"  label="Search" inputProps={{
        style:{color:"white"}}} InputLabelProps={{style:{color:"white"}}}/>
        <Button onClick={input ? onButtonClick : null}
        className="header-search-button" variant="contained"  color="secondary"><SearchIcon/></Button>
        </div>
        </div>
    )
}

export default Header

//GETTING 404s on slowpoke/cleffa/steelix

//FIX SCROLL

//CHANGE FOOTER TO SHOW UP UNDER POKEMON CONTAINER