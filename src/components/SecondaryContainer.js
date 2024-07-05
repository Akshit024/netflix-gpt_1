import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store=> store.movies);
  return (
    <div className='bg-black'>
      <div className='md:-mt-40 relative z-20 px-2 md:pl-12'>
      <MovieList title = {"Now playing"} movies ={movies.addNowPlayingMovies}/>
      <MovieList title = {"Top Rated"} movies ={movies.TopRatedMovies}/>
      <MovieList title = {"Popular"} movies ={movies.popularMovies}/>
      <MovieList title = {"Upcoming Movie"} movies ={movies.UpComingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
