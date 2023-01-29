import "./WorkCardStyle.css"

import React from 'react'
import recommend from '../assets/recommender.PNG'

const WorkCard = () => {
  return (
    <div className="work-container">
        <div className="project-heading">Projects
        <div className="project-container">
            <div className="project-card">
               <img src={recommend} alt="image" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default WorkCard