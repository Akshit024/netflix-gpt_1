import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  
  const dispatch = useDispatch();

  const popular = useSelector((store)=> store.movies.TopRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !popular && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
