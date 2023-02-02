import "./SkillsStyle.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react'

const Skills = () => {
  return (

  <>
  <div className="heading">
    <h1>Skills</h1>
     <h2>Technical Expertise</h2>
     <h3>Always ready to try hands-on new and emerging technologies</h3>
    
     <p>HTML</p>
    <div className="bar">
       <div className="skill html">90%</div>
    </div>
    <p>CSS</p>
    <div className="bar">
       <div className="skill css">90%</div>
    </div>
    <p>Javascript</p>
    <div className="bar">
       <div className="skill javascript">80%</div>
    </div>
    <p>ReactJS</p>
    <div className="bar">
       <div className="skill reactjs">80%</div>
    </div>
    <p>Java</p>
    <div className="bar">
       <div className="skill java">90%</div>
    </div>
    <p>C </p>
    <div className="bar">
       <div className="skill c">90%</div>
    </div>
    <p>Python</p>
    <div className="bar">
       <div className="skill python">70%</div>
    </div>
    <p>UI & UX</p>
    <div className="bar">
       <div className="skill ui">60%</div>
    </div>

     </div>
    
  </>
  ) 
}

export default Skills