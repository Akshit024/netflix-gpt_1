import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieName :null,
    movieResults :null,
  },
  reducers: {
    toggelGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
        const {movieName,movieResults} = action.payload;
      state.movieName = movieName;
      state.movieResults=movieResults;
    },
  },
});

export const { toggelGptSearchView,addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
