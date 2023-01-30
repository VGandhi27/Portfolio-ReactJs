import "./AboutContentStyle.css"
import React from 'react'
import dsc from '../assets/dsc_logo.png'

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>About Me</h1>
             <p>I am an undergraduate from Echelon Institute of Technology and currently doing my major in Computer Science And Engineering. </p>
             <h3>LIFE PHILOSOPHY</h3>
             <button>
             <span class='translate'>Aut inveniam viam aut faciam</span>
             <span class="toeng"> I shall either find a way or make one</span>

             </button>
                <div className="left-img">
                <img src="https://sonusourav.github.io/images/dsc_logo.png" alt="gdsc" width="60%" height="50%"  />
                 <h2>Google DSC Member</h2>
             </div>
        </div>
        <div className="right">
             <div className="img-container">
                <div className="img-stack top">
                    <img src="https://images.unsplash.com/photo-1633366446553-8adb7236f4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="about img " width="100%" height="100%" />
                </div>
             </div>
        </div>
    </div>
  )
}

export default Aboutcontent