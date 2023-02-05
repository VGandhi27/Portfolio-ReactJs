import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Brief from '../components/Brief_Intro'
import Contact from '../components/Form'
import Skill from '../components/Skills'
import ToolsUsed from '../components/ToolsUsed'

// import Project from '../components/Work'
// import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
      <h1>
      <Navbar/>
      <HeroImg/>
      <Brief/>
      <Skill/>
      {/* 
      
   */}
      
      {/* <Project/>
      <Blog/> */}
      <Contact/>
      <Footer/>
      </h1>
    </div>
  )
}

export default Home
