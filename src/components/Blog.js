import "./BlogCardStyle.css"

import React from 'react'
import BlogCard from "./BlogCard"
import BlogCardData from './BlogCardData'

const Work = () => {
  return (
    <div className="work-container">
        <div className="project-heading">Blogs
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