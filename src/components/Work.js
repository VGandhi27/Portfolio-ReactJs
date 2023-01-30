import "./WorkCardStyle.css"

import React from 'react'
import WorkCard from "./WorkCard"
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className="work-container">
        <div className="project-heading">Projects
        <div className="project-container">
          {WorkCardData.map((val,ind)=>{
             return (
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}/>
             )
            })
          }
        </div>
        </div>
    </div> 
  )
}

export default Work