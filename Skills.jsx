import React from "react";
import './Skills.css'
import LinearProgress from '@mui/material/LinearProgress'


const Skills = () => {
    return(
       <div className="skillContainer" id="skills">
        <h1>Front End</h1>
        <div className="skillContainer_text">
            <h2>HTML</h2>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={85}/>
            </div>
        </div>
        <div className="skillContainer_text">
            <h2>CSS</h2>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={75}/>
            </div>
        </div>
        <div className="skillContainer_text">
            <h2>JAVASCRIPT</h2>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={60}/>
            </div>
        </div>
        <div className="skillContainer_text">
            <h2>REACT</h2>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={65}/>
            </div>
        </div>

        <div className="skillContainer_text">
            <h2>Redux</h2>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={40}/>
            </div>
        </div>

        <div className="skillContainer_text">
            <h2>Next JS</h2>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={20}/>
            </div>
        </div>

        <div className="back-container">
            <h1>Back End</h1>
            <div className="skillContainer_text">
            <h2>Node JS</h2>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={25}/>
            </div>
        </div>

        <div className="skillContainer_text">
            <h2>Graph QL</h2>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={20}/>
            </div>
        </div>

        </div>

        <div className="Tools-container">
            <h1>Tools</h1>
            <div className="skillContainer_text">
            <h2>Visual Studio Code</h2>
            <div className="skillContainer_slider skillContainer_slider1">
              <LinearProgress variant="determinate" value={80}/>
            </div>
        </div>

        </div>
      
       </div>
      

       
    )
}

export default Skills;