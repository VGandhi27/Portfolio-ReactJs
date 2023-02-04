import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
const Contact = () => {
  return (
  <div className='space'>
    <Navbar/>
    <HeroImg2 heading="CONTACT." 
    text="Let's Connect"/>
    <Form/>
    <Footer/></div>
  )
}

export default Contact