import React from "react";
import { useSelector } from "react-redux";

const Movie = () => {
    const {movie} = useSelector(state=>state);

    return (
        <>
        <h1>MOVIE TAB</h1>
        <pre>{JSON.stringify(movie,null,2)}</pre>
        </>
    )
};

export default Movie;