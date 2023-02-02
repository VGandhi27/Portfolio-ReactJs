import "./TimelinesStyle.css"
import React from 'react'
import plastic1 from '../assets/plastic1.jfif'
import { NavLink } from "react-bootstrap"

const Timelines = () => {
  return (
    <div className="timeline">
      <div className="heading">
        <h2>Timelines</h2>
        <h1>My journey so far</h1>
      </div>
      <div className="timeline-container">
        <div className="timeline-card">
        <img src={plastic1 } alt="image" />
                <h2 className="project-title" style={{color:"#fff",fontsize:"2rem"}}>
                Software Development Engineer
                </h2>
                <div className="pro-details">
                  <p>Building ShareChat for Bharat, India’s leading social media platform that operates exclusively in Indic languages having more than 160 Million MAU (Monthly Active Users)
</p>
<div className="pro-time">Jan 2023</div>
                  <div className="pro-btns">
                    
                      <NavLink to="shs" className="btn">
                      Source</NavLink>
                  </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Timelines