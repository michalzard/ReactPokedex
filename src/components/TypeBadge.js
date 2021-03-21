import React from 'react'
import "../css/TypeBage.scss";

function TypeBadge({typeName,color,fontColor}) {
    return (
        <div className="badge" 
        style={{
        backgroundColor:typeof color==='string' ? color : `${color.first}`,
        background: typeof color==='string' ? color : `-webkit-linear-gradient(90deg,${color.first} 50%,${color.second} 50%)`
        
        }}>
        <div className="badge-name" style={{color:fontColor | "white"}}>{typeName}</div>
        </div>
    )
}

const BadgeTheme={
    poison:"#b97fc9",
    dragon:{first:"#53a4cf",second:"#f16e57"},
    fairy:"#fdb9e9",
    fire:"#fd7d24",
    ghost:"#7b62a3",
    ground:{first:"#f7de3f",second:"#ab9842"},
    normal:"#a4acaf",
    psychic:"#f366b9",
    steel:"#9eb7b8",
    dark:"#707070",
    electric:"#eed534",
    fighting:"#d56723",
    flying:{first:"#3dc7ef",second:"#bdb9b8"},
    grass:"#9bcc50",
    ice:"#51c4e7",
    rock:"#a38c21",
    water:"#4592c4",

}
export {TypeBadge,BadgeTheme}
