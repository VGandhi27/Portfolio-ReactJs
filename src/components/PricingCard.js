import "./PricingCardStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
            <h3>-Basic-</h3>
            <span className="bar">
                <p className="btc">$100</p>
                <p>-3 days-</p>
                <p>-3 pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW</Link> 
            </span>
        </div>

        <div className="card">
            <h3>-Premium-</h3>
            <span className="bar">
                <p className="btc">$200</p>
                <p>-2 days-</p>
                <p>-5 pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW</Link> 
            </span>
        </div>

        <div className="card">
            <h3>-Business-</h3>
            <span className="bar">
                <p className="btc">$300</p>
                <p>-5 days-</p>
                <p>-8 pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW</Link> 
            </span>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
