import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular = useSelector((store)=> store.movies.getPopularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTION
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popular && getPopularMovies();
  }, []);
};

export default usePopularMovies;
