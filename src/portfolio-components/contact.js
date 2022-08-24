import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faMap, faPhone, faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import "../css/contact.css"

const Contact = () =>{
    return(
        <div className = "global-container" id="contact">
            <div style={{color:"white", textAlign:"center", width:"100%"}}>
                <div>
                    <span style={{color:"#FFDB58"}}>CONTACT</span>
                    <h1 style={{fontSize:"3em"}}>Contact With Me</h1>
                </div>
                <div >
                    <div className = "form-layout" >
                        <div>
                            <div className = "form-layout-card" >
                                <FontAwesomeIcon icon={faMap} style={{color:"FFDB58", fontSize:"25px"}}></FontAwesomeIcon>
                                <div style={{paddingTop:"10px"}}>Hurstville, NSW, 2220</div>
                            </div>
                            <div className = "form-layout-card">
                                <FontAwesomeIcon icon={faEnvelope} style={{color:"FFDB58", fontSize:"25px"}}></FontAwesomeIcon>
                                <div style={{paddingTop:"10px"}}>roshan.khadka.u@gmail.com</div>
                            </div>
                            <div className = "form-layout-card">
                                <FontAwesomeIcon icon={faPhone} style={{color:"FFDB58", fontSize:"25px"}}></FontAwesomeIcon>
                                <div style={{paddingTop:"10px"}}>(+61) 452 642 153</div>
                            </div>
                            <div className = "form-layout-card">
                                <FontAwesomeIcon icon={faCheck} style={{color:"FFDB58", fontSize:"25px"}}></FontAwesomeIcon>
                                <div style={{paddingTop:"10px"}}>Freelance Available</div>
                            </div>
                        </div>
                        <div className = "form-layout-card">
                            <form className="form">
                                <div className = "form-details" >
                                    <input className="inputfield" placeholder="Enter your Name"></input>
                                    <input className="inputfield" placeholder="Enter your Phone"></input>
                                </div>
                                <div className="form-details">
                                    <input className="inputfield" placeholder="Enter your Email"></input>
                                    <input className="inputfield" placeholder="Enter your Subject"></input>
                                </div>
                                <div >
                                    <textarea className = "form-textarea" placeholder="Type your Message"></textarea>
                                </div>
                                <button style={{backgroundColor:"black", fontSize:"1em", borderRadius:"10px", color:"white", padding:"5px 50px", maxWidth:"400px", margin:"0 auto"}}>Send Message <FontAwesomeIcon icon={faRocket} ></FontAwesomeIcon></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;