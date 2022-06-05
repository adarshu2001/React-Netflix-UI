import React, { useEffect, useState } from 'react'
import { API_KEY, imageURL } from '../../constants/constants'
import axios from '../axios'
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results)
      setMovie(response.data.results[1])
    })
    
  }, [])
  
  return (
    <div className='banner'>
        <img src={movie ? imageURL+movie.backdrop_path : ""} className='bgImage' alt="" />
        <div className="content">
          <h1 className='title'>{movie ? movie.title : ""}</h1>
          <div className="banner_button">
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
    </div>
    
  )
 
}

export default Banner