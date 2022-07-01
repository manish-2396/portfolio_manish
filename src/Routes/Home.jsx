import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import HearoImg from '../Components/HearoImg'
import Navbar from '../Components/Navbar'

const Home = () => {
  useEffect(()=>{
    document.title="Manish Singh Chouhan"
  },[])
  return (
    <div>
      <Navbar/> 
      <HearoImg/>
      <Footer/>
    </div>
  )
}

export default Home