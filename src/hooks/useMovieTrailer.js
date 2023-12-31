import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_CONST } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store)=>store.movies.trailerVideo);

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/+${movieId}+/videos?language=en-US`, API_CONST);
        const videos = await data.json();
        const filterData = videos.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ?  filterData[0] : videos.json[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        !trailerVideo && getMovieVideos();
    },[]);
}

export default useMovieTrailer;