import React from 'react'
import Footer from '../Components/Footer'
import HeroImg from '../Components/HeroImg'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="About" text="This About Page"/>
      <Footer/>
    </div>
  )
}

export default About