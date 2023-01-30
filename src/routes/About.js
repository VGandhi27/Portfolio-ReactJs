import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Aboutcontent from '../components/Aboutcontent'

const About = () => {
  return (
  <>
    <Navbar/>
    <HeroImg2 heading="ABOUT." 
    text="I'm a friendly software engineer"/>
    <Aboutcontent/>
    <Footer/></>
  )
}

export default About