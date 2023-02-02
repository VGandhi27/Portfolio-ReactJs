import "./WorkCardStyle.css"
import React ,{props} from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
               <img src={props.imgsrc} alt="image" />
                <h2 className="project-title" style={{color:"#fff",fontsize:"2rem"}}>
                {props.title}
                </h2>
                <div className="pro-details">
                  <p>{props.text}</p>
                  <div className="pro-btns">
                    <a href={props.view} className="btn">
                      View</a>
                      <a href={props.source} className="btn">
                      Source</a>
                  </div>
                </div>
            </div>
  )
}

export default WorkCard