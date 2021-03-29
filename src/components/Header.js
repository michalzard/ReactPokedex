import React, { useState } from 'react'
import "../css/Header.scss"
import Pokeball from "../assets/pokeball.png";
import {TextField} from "@material-ui/core";

import store from "../components/store/appSlice";
import { useDispatch } from 'react-redux';

function Header() {
    const [input,setInput] = useState("");
    const dispatch=useDispatch();
    const inputOnChange=(e)=>{
        setInput(e.target.value);
        dispatch(store.actions.setInputValue({input:e.target.value.toLowerCase()}))
    }
    const onEnter=(e)=>{
        if(e.key==="Enter" && input.length>0){
        dispatch(store.actions.setInputValue({input:""}))
        setInput("");
        }
    }
    return (
        <div className="header">
        <div className="header-logo"><a href="/" ><img src={Pokeball} alt="logo" width={40}></img></a></div>
        <div className="header-title">
        <a href="/" ><span>Poké Catalog</span></a>
        </div>
        <div className="header-search">
        <TextField color="secondary" placeholder="Search using Pokemon name" value={input} onChange={inputOnChange}
        onKeyDown={onEnter} fullWidth
        variant="outlined" size="small"  label="Search" inputProps={{
        style:{color:"white"}}} InputLabelProps={{style:{color:"white"}}} />
        </div>
        </div>
    )
}

export default Header
