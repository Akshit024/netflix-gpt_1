import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    if(!movies) return ;
    console.log(movies);
  return (
    <div className='px-2 md:px-6'>
        <h1 className='font-bold text-lg md:text-3xl pb-1 md:py-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {movies.map(movie=><MovieCard key = {movie.id} posterPath={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
