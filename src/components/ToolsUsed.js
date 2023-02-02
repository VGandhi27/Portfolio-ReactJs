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
        <div className="cards">
            <GrReactjs size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div>
        <div className="cards">
            <DiJava size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div>
        <div className="cards">
            <DiJavascript1 size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div>
        <div className="cards">
            <DiPython size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div>  
        <div className="cards">
            <DiMysql size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="cards">
            <DiMongodb size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="cards">
            <FaGitAlt size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="cards">
            <SiRedux size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="cards">
            <SiFirebase size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
          
   </div>

   <div className="heading">
    <h1>Tools Used</h1>
    </div>
    <div className="cards-container">
    <div className="cards">
            <DiVisualstudio size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="cards">
            <SiPostman size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="cards">
            <DiHeroku size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="cards">
            <IoLogoTux size={100} style={{color:'#fff',margin:'2rem'}}/>           
        </div> 
        <div className="cards">
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