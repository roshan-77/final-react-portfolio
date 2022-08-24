import React from "react";
import ProjectCard from "./projectCard";
import projects from "../Information/projects-list";
const { v4: uuidv4 } = require ('uuid');


const RecentWorks = () =>{
    return(
        <div className = "" id="recentworks">
            <div style={{color:"white", textAlign:"center"}}>
                <span style={{color:"#FFDB58"}}>PERSONAL PROJECTS</span>
                <h1 style={{fontSize:"3em"}}>Recent Works</h1>
            </div>
            <div className="myProjects justify-content-center">
                {
                    projects.map(projects=>{
                        return(
                            <ProjectCard projects={projects} key={uuidv4()}/>
                        )
                    })
                }
            </div>
            <div style ={{textAlign:"center"}}><button style ={{fontSize:"20px", padding:"5px", borderRadius:"5px"}}>View All Works</button></div>
            
        </div>
    )
}

export default RecentWorks