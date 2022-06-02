import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
        <img src="https://wallpaperaccess.com/full/2703652.png" className='bgImage' alt="" />
        <div className="box">
            <div className="heading">
                <h2>Unlimited movies, TV shows and more.</h2>
                <h5>Watch anywhere. Cancel anytime.</h5>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className="search">
                <input type="text" name='' placeholder='Enter address' />
                <a href="#s">Get Started</a>
            </div>
        </div>
      
    </div>
  )
}

export default Banner