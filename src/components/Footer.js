import './FooterStyle.css'
import React from 'react'
import {FaHome,FaPhone,FaMailBulk} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer-container">
        <div className="left">
            <div className="location">
             <FaHome size={20} style={{color:'#fff',margin:'2rem'}}/>
            <div>
                <p>1860 A Sector 29 Housing Board Colony</p>
                <p>Faridabad,Haryana,India</p>
            </div>
            </div>
            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:'#fff',margin:'2rem'}}/>
             +919315865887
                </h4>
            
            </div>
            <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:'#fff',margin:'2rem'}}/>
             curiousvidushi27@gmail.com
                </h4>
            
            </div>
        </div>
        
        <div className="right">

        </div>
     </div>
    </div>
  )
}

export default Footer