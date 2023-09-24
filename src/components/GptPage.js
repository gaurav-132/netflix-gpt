import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import {NETFLIX_BACK_URL} from '../utils/constants';

const GptPage = () => {
    return (
	<div className=''>
			<div className='absolute -z-10 md:w-full'>
				<img
					src={NETFLIX_BACK_URL}
					className='h-screen object-cover md:w-full'
				/>
			</div>
			<div className=''>
				<GptSearchBar/>
				<GptMovieSuggestions/>
			</div>
		</div>
    )
}

export default GptPage