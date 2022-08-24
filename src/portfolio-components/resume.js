import React from "react";
import ResumeCards from "./resumecard";
import { myResumeInfo } from "../Information/myresumeinfo";
const { v4: uuidv4 } = require ('uuid');

const Resume = () =>{
    return(
        <div className = "global-container" style={{margin:"70px 0"}} id="resume">
            <div>
                <div style={{color:"white", textAlign:"center", marginBottom:"40px"}}>
                    <span style={{color:"#FFDB58"}}>YEARS OF EXPERIENCE</span>
                    <h1 style={{fontSize:"3em"}}>My Resume</h1>
                </div>
            </div>
            <div className="experience-education" >
                
                <div style={{color:"white"}}>
                    <div style={{paddingBottom:"40px"}}>
                        <h1 style={{fontSize:"2em"}}>Job Experience</h1>
                        <span >2021-2022</span>
                    </div>
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                        {myResumeInfo[0].map(item =>{
                        return(
                            <ResumeCards item={item} key={uuidv4()}/>
                        )
                        // console.log(item)
                        })}
                    </div>
                </div>
                <div style={{color:"white"}}>
                    <div style={{paddingBottom:"40px"}}>
                        <h1 style={{fontSize:"2em"}}>Education</h1>
                        <span>2018-2022</span>
                    </div>
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                        {myResumeInfo[1].map(item =>{
                        return(
                            <ResumeCards item={item} key={uuidv4()}/>
                        )
                        // console.log(item)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume