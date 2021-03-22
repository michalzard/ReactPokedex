import React from 'react'
import "../css/Header.scss"
import Pokeball from "../assets/pokeball.png";
import {TextField,Button} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/SearchSharp';
function Header() {
    return (
        <div className="header">
        <div className="header-logo"><a href="/" ><img src={Pokeball} alt="logo" width={40}></img></a></div>
        <div className="header-title">
        <span>Poké Catalog</span>
        </div>
        <div className="header-search"><TextField color="secondary" placeholder="Pokémon name,type,ability"
        variant="outlined" size="small"  label="Search" inputProps={{
        style:{color:"white"}}} InputLabelProps={{style:{color:"white"}}}/>
        <Button  className="header-search-button" variant="contained" color="secondary"><SearchIcon/></Button>
        </div>
        </div>
    )
}

export default Header
