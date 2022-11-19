import React from "react";
import { useSelector } from "react-redux";
import MovieCard from './MovieCard';

const Movie = () => {
    const {movie} = useSelector(state=>state);

    return (
        <>
        <h1>MOVIE TAB</h1>
        {/* Need to Implement MovieList Component in the Future */}
        {movie.map(movie => {
            return (
                <MovieCard key={movie.id} movie={movie}/>
            )
        })}
        <MovieCard movie={movie[0]}/>
        <pre>{JSON.stringify(movie,null,2)}</pre>
        </>
    )
};

export default Movie;