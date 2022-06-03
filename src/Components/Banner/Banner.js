import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
        <img src="https://wallpaperaccess.com/full/2703652.png" className='bgImage' alt="" />
        <div className="content">
          <h1 className='title'>Money Heist</h1>
          <div className="banner_button">
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</h1>
        </div>
    </div>
    
  )
}

export default Banner