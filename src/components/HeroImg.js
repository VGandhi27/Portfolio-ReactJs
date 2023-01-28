import "./HeroImgStyle.css"

import React from 'react'
import {Link} from 'react-router-dom'
import IntoImg from '../assets/intro1.jpg'

const Heroimg = () => {
  return (
    <div className="hero">
       <div className="mask">
        {/* <center>
        <img src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif" width="1000" height="600"  />
        </center> */}
      <img src={IntoImg} alt="IntoImg" className="into-img" /> 
     
       
       </div>
       <div className="content">
        <p>Hello! I'm a FREELANCER.</p>
        <h1>MERN Stack Developer .</h1>
       </div>
       <Link to="/project" className="btn">Projects</Link>
       <Link to="/contact" className="btn btn-light">Contact</Link>
 
    </div>
  )
}

export default Heroimg