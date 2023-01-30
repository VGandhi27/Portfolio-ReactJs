import "./BlogCardStyle.css"

import React from 'react'
import BlogCard from "./WorkCard"
import BlogCardData from './WorkCardData'

const Work = () => {
  return (
    <div className="work-container">
        <div className="project-heading">Projects
        <div className="project-container">
          {BlogCardData.map((val,ind)=>{
             return (
                <BlogCard
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