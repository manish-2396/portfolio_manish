import React from 'react'
import "../Style/HeroImgStyles.css"

const HeroImg = ({heading , text}) => {
  return (
    <div className='hero-img'>
      <div className="heading">
      <h1>{heading}</h1>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default HeroImg