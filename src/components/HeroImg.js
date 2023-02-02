import "./HeroImgStyle.css"
import Typewriter from "typewriter-effect";
import Type from "./Type"
import React from 'react'
import {Link} from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className="hero">
       <div className="mask">
        {/* <center> */}
        <img src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif"   className="into-img" />
          </div>
       <div className="content">
       <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Vidushi Gandhi</strong>
              </h1>
              <h2 style={{ padding: 70, textAlign: "center" }}>
                <Type />
              </h2>
      <div className="himg">
       {/* <Link to="/project" className="btn">Projects</Link>
       <Link to="/contact" className="btn btn-light">Contact</Link> */}
       </div>
       </div>
    </div>
  )
}

export default Heroimg