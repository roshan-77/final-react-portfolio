import React from "react";
import Cards from "./cards";
import "../css/style.css"
import {myServices} from "../Information/myservicesinfo";
const { v4: uuidv4 } = require ('uuid');


const WhatIDo = () => {
    return(
        <div className = "" style={{color: "white", margin:"50px 0 70px 0"}} id="whatido">
            <div className = "whatIDo-header" style={{textAlign:"center"}}>
                <span style={{color: "#FFDB58"}}>MY SERVICES</span>
                <h1 style={{fontSize:"3rem"}}>What I Do</h1>
            </div>
            <div className="whatIDoContainer">
                {myServices.map(service => {
                return (
                    <Cards service={service} key={uuidv4()}/>
                )
                })}
            </div>     
        </div>
    )
}

export default WhatIDo;