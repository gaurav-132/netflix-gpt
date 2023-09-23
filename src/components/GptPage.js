import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import {NETFLIX_BACK_URL} from '../utils/constants';

const GptPage = () => {
    return (
		<div>
			<div className='absolute -z-10'>
				<img
					src={NETFLIX_BACK_URL}
				/>
			</div>
			<GptSearchBar/>
			<GptMovieSuggestions/>
		</div>
    )
}

export default GptPage