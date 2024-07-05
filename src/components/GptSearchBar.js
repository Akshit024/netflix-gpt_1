import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movieName) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movieName +
      "&include_adult=false&language=en-US&page=1";
    const data = await fetch(url, API_OPTION);
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies from the queary : " +
      searchText.current.value +
      "only give mw name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResult.choices) return;
   

    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(promiseArray);
    
    dispatch(addGptMovieResult({movieName:gptMovies,movieResults : tmdbResult}));
  };
  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2  bg-black grid grid-cols-9 md:grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-3 md:p-4 my-2 md:my-4 mx-2 md:mx-4 col-span-7 md:col-span-9"
          placeholder="what would you like to watch today"
        />
        <button
          className="col-span-2 md:col-span-3 my-2 md:my-4 mr-2 md:mx-4 md:py-2 md:px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
