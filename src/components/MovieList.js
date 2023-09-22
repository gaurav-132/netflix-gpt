import React from 'react'
import MovieCard from './MovieCard';


const MovieList = ({ title, movies }) => {

    console.log(title, movies)

    return (
        <div className='px-6'>
            <h1 className='text-2xl font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll mt-3'>
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