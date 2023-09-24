import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies)

    return (
        <div className='bg-black'>
            <div className='mt-0 md:-mt-52 pl-2 md:pl-6 relative z-20'>
                <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
                <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;