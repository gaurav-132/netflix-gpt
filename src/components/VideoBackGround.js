import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackGround = ({ movieId }) => {

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    
    useMovieTrailer(movieId);

    return (
        <div>
            <iframe
                className='w-full aspect-video' 
                src={`https://www.youtube.com/embed/${trailerVideo?.key}`} 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>
    )
}

export default VideoBackGround