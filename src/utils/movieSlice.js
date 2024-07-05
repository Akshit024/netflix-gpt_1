import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    popularMovies:null,
    TopRatedMovies:null,
    UpComingMovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.UpComingMovies = action.payload;
    }
  },
});

export const { addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpComingMovies } = movieSlice.actions;
export default movieSlice.reducer;
