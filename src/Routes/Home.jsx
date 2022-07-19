import React, { useEffect } from 'react'
import Footer from '../Components/Footer'

import HeroImg from '../Components/HeroImg'
import HomePage from '../Components/HomePage'
import Navbar from '../Components/Navbar'

const Home = () => {
  useEffect(()=>{
    document.title="Manish Singh Chouhan"
  },[])
  return (
    <div>
      <Navbar/> 
      <HeroImg/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default Home