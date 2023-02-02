import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Skill from '../components/Skills'
import ToolsUsed from '../components/ToolsUsed'

const Skills = () => {
  return (
    <>
    <Navbar/>
    <HeroImg2 heading="Skills." 
    text="I'm a friendly software engineer"/>
    <Skill/>
    <ToolsUsed/>
    <Footer/></>
  
  )
}

export default Skills