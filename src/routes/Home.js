import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import About from '../components/Aboutcontent'
import Contact from '../components/Form'
// import Project from '../components/Work'
// import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
      <h1>
      <Navbar/>
      <HeroImg/>
      <About/>
      {/* <Project/>
      <Blog/> */}
      <Contact/>
      <Footer/>
      </h1>
    </div>
  )
}

export default Home
