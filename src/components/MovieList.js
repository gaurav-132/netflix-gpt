import React from 'react';
import MovieCard from './MovieCard';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CustomPrevButton = ({ onClick }) => (
    <button
      className="bg-opacity-40 backdrop-blur-md w-10 h-10 text-white text-2xl rounded-full shadow-md absolute z-10 top-[35%] left-[-18px]"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
);
  
  

const CustomNextButton = ({ onClick }) => (
    <button
    className="bg-opacity-40 backdrop-blur-md w-10 h-10 text-white text-2xl rounded-full shadow-md absolute z-10 top-[35%] right-[2px]"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faArrowLeft} />
  </button>
);

const MovieList = ({ title, movies }) => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };

  return (
    <div className="md:px-6 md:pb-10 px-3 pt-4 md:pt-0">
      <h1 className="text-xl md:text-2xl mb-4 font-semibold md:font-bold text-white">
        {title}
      </h1>
      <Slider {...settings}>
        {
            movies?.map((movie) => (
                <MovieCard posterPath={movie.poster_path} key={movie.id} />
            ))
        }
      </Slider>
    </div>
  );
};

export default MovieList;
