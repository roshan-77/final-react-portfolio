import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const FindMeOn = () =>{
    return(
        <span>
            <FontAwesomeIcon icon={faFacebookF} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedinIn} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGithub} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon>            
        </span>
    )
}

export default FindMeOn