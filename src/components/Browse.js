import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptPage from './GptPage';
import { useSelector } from 'react-redux';



const Browse = () => {

	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

	useNowPlayingMovies();
	usePopularMovies();

	
	return (
		<div>
			<Header/>
			{
				(showGptSearch) ? 
				(<>
					<GptPage/>
				</>)
					: 
					(<>
						<MainContainer/>
						<SecondaryContainer/>
					</>)
			}
			
			{/* 
				MainContainer
					- Video Background
					- Video Title
				
				Secondary Container
					- Movies List
					- Cards
			
			*/}
			
		</div>
	)
}

export default Browse;