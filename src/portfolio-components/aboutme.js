import React from "react";
import myimage from "../images/myimage.jpg"
import FindMeOn from "./findmeon";
import "../css/aboutme.css"

const AboutMe = () => {
    return(
        <div className = "global-container" style={{color: "white", margin:"40px 0 70px 0"}} id="aboutme">
            
            <div className="intro" style={{fontSize:"1.5em"}}>Hello, <span style={{color: "#FFDB58"}}>I'm</span> 
                <br/><span style={{fontSize:"2em"}}><strong>Roshan Khadka</strong></span>
                <br/><span >Web Designer and Developer</span>
                <br/>
            </div>
            <div className="about-me" >
                <div>
                    <p style={{fontSize:"18px", margin:"20px 0"}}>Developer with a proven ability to collaborate effectively within a team while 
                        devoting extra time to be mentored. Enjoy working closely with team members to ensure
                        workloads are effectively redirected. With a passion for both personal growth and for 
                        software development, I attended 1000+ hour coding bootcamp to learn new languages while 
                        sharpening existing skills. Ready to put my coding skills to work with a talented engineering 
                        team to create high-quality solutions.
                    </p>
                    <div>
                        <h2>FIND ME ON</h2>
                        <FindMeOn/>
                    </div>
                </div>
                <img className="portfolio-image" src={myimage} alt="My portfolio"></img>
            </div>
        </div >
    )
}

export default AboutMe