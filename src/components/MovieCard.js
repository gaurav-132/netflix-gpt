import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className="md:w-48 h-40 pr-4">
  
    <img alt="moviePoster" className="object-cover" src={IMG_CDN_URL + posterPath} />
  
</div>

  )
}

export default MovieCard