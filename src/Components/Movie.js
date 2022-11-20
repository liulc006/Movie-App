import React from "react";
import { useSelector } from "react-redux";
import MovieList from './MovieList';

const Movie = () => {
    const {movie} = useSelector(state=>state);

    return (
        <>
        <h1>MOVIE: </h1>
        {/* Need to Implement Filter Control bar for genre */}
        <MovieList movie={movie} />
        </>
    )
};

export default Movie;