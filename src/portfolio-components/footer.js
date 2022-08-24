import React from "react";
import FindMeOn from "./findmeon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer =() =>{
    return(
        <div className = "global-container" style={{color:"white", textAlign:"center", padding:"40px"}}>
            <h1 style={{padding:"10px"}}>Roshan</h1>
            <FindMeOn />
            <FontAwesomeIcon icon={faYoutube} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon>
            <div style={{padding:"20px 0 0 0"}}>Roshan &copy; All Rights Reserved </div>
        </div>
    )
}

export default Footer