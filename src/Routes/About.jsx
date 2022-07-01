import React from 'react'
import AboutPage from '../Components/AboutPage'
import Footer from '../Components/Footer'
import HeroImg from '../Components/HeroImg'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <AboutPage/>
      <Footer/>
    </div>
  )
}

export default About