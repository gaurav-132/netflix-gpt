import React from 'react'
import MovieCard from './MovieCard';


const MovieList = ({ title, movies }) => {

    console.log(title, movies)

    return (
        <div className='md:px-6 px-3 pt-4 md:pt-0'>
            <h1 className='text-xl md:text-2xl font-semibold md:font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll bg-scroll mt-3'>
                <div className='flex'>
                    {
                        movies?.map((movie)=>{
                            return(
                                <MovieCard posterPath={movie.poster_path} key={movie.id}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;