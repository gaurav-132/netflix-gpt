import React, { useRef } from 'react';
import lang from '../utils/languageContant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_CONST } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';


const GptSearchBar = () => {

	const langKey = useSelector((store) => store.config.lang)

    const dispatch = useDispatch();

    const searchText = useRef(null); 

    const searchMovieTMDB = async (movie) => {
        const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+{movie}+'&include_adult=false&language=en-US&page=1', API_CONST);

        const json = await data.json();

        return json.results;
    }

    const handleGptSearchClick = async () => {

        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query "+ searchText.current.value+" Only give me only 5 Top movies, comma seprated like the exampleresult given ahead. Example result: Gadar, Don2, Golmal";

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

        if(!chatCompletion.choices){
            alert("Gpt Failed")
        }
        
        const gptMovies = chatCompletion?.choices?.[0].message?.content.split(",");

        const promiseArray =  gptMovies.map(movie => searchMovieTMDB(movie));

        const tmdbResults  = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({movieNames: gptMovies,movieResults: tmdbResults}));

    }

    return (
      <div className='pt-[60%] md:pt-[10%] flex justify-center' onSubmit={(e) => e.preventDefault()}>
          <form  className='w-full md:w-1/2 grid grid-cols-12'>
              <input ref={searchText} type='text' className='py-2 px-4 my-4 mx-2 md:m-4 col-span-8 rounded-3xl md:col-span-10 ' placeholder={lang[langKey].gptSearchPlaceholder}/>
              <button className='py-1 m-4 px-4 bg-red-500 text-white col-span-4 md:col-span-2 rounded-3xl' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
          </form>
      </div>
    )
}

export default GptSearchBar;