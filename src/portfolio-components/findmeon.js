import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const FindMeOn = () =>{
    return(
        <span>
            <a href="https://www.linkedin.com/in/roshan-khadka-050b3417b/" rel="noreferrer" target="_blank" style={{color:"white"}}><FontAwesomeIcon icon={faLinkedinIn} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon></a>
            <a href="https://www.facebook.com/whitz.rock" rel="noreferrer" target="_blank" style={{color:"white"}}><FontAwesomeIcon icon={faFacebookF} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon></a>
            <a href="https://github.com/roshan-77" rel="noreferrer" target="_blank" style={{color:"white"}}><FontAwesomeIcon icon={faGithub} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon></a>          
        </span>
    )
}

export default FindMeOn