import React,{useEffect, useState} from 'react';
import YouTube from 'react-youtube';
import axios from '../axios';
import { imageURL,API_KEY } from '../../constants/constants';
import './RowPost.css'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
      console.log(response.data)
    }).catch(err=> {
      // alert('Network Error')
    })
  }, [props])

  const opts = {
    height: '790',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const trailerMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
       if (response.data.results.length!==0) {
         setUrlId(response.data.results[0])
       }
    })

  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movies.map((obj)=>
            <img onClick={()=>trailerMovie(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'} src={imageURL+obj.backdrop_path} alt="Poster" />
            )
          } 
        </div>
     { urlId &&  <YouTube opts={opts} videoId={urlId.key} />  }
        
    </div>
  )
}

export default RowPost