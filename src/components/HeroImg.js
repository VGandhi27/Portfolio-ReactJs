import "./HeroImgStyle.css"
import Typewriter from "typewriter-effect";
import Type from "./Type"
import React from 'react'
import {Link} from 'react-router-dom'
import cv from '../assets/Vidushi Gandhi CV.pdf'
const Heroimg = () => {
  return (
    <div className="hero">
       <div className="mask">
        {/* <center> */}
        <img src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif"   className="into-img" />
          </div>
       <div className="content">
       <p >
                Hi There!👋🏻 I'M
                  </p>
                  <h1> <strong > Vidushi Gandhi</strong></h1>
         <h3 >
               I'm a <Type />
              </h3>
      <div className="himg">
       <a href={cv} className="btn">Download CV</a>
       </div>
       </div>
    </div>
  )
}

export default Heroimg