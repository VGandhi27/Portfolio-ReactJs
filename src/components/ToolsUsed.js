import React from 'react'
import {DiNodejs,DiVisualstudio,DiJava,DiJavascript1,DiPython,DiMongodb,DiMysql,DiHeroku} from 'react-icons/di'
import {GrReactjs} from 'react-icons/gr'
import {FaGitAlt} from 'react-icons/fa'
import {SiRedux,SiFirebase,SiPostman} from 'react-icons/si'
import {IoLogoTux,IoLogoVercel} from 'react-icons/io5'

import GitHubCalendar from "react-github-calendar"


import "./ToolsUsedStyle.css"

const ToolsUsed = () => {
  return (
    <>

   <div className="heading">
    <h1>Professional Skillset</h1>
   </div>
   <div className="cards-container">
   <div className="cards">
            <DiNodejs size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div>
        <div className="card">
            <GrReactjs size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div>
        <div className="card">
            <DiJava size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div>
        <div className="card">
            <DiJavascript1 size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div>
        <div className="card">
            <DiPython size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div>  
        <div className="card">
            <DiMysql size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="card">
            <DiMongodb size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="card">
            <FaGitAlt size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="card">
            <SiRedux size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="card">
            <SiFirebase size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
          
   </div>

   <div className="heading">
    <h1>Tools Used</h1>
    </div>
    <div className="cards-container">
    <div className="card">
            <DiVisualstudio size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="card">
            <SiPostman size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="card">
            <DiHeroku size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="card">
            <IoLogoTux size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="card">
            <IoLogoVercel size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
    </div>
   
    <div className="heading">
    <h1> Days I Code</h1>
    </div>
    <div class="calendar">
      
      <GitHubCalendar
        username="vgandhi27"
        blockSize={20}
        blockMargin={5}
        color="#c084f5"
        fontSize={18}
        style={{alignContent:'center'}}/>
    </div>
   </>
  )
}

export default ToolsUsed