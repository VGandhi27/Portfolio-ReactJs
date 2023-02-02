import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Timelines1 from '../components/Timelines'


const Timelines = () => {
  return (
    <>
    <Navbar/>
    <HeroImg2 heading="Timelines." 
    text="All my academic and professional experience with some milestones achieved are summed up here:"/>
    <Timelines1/>
    
    <Footer/></>
  
  )
}

export default Timelines