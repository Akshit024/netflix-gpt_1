import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  
  const popular = useSelector((store)=> store.movies.UpComingMovies);
  const getUpComingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      API_OPTION
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !popular && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
