import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieRating } from "../store";

const RatingDetail = () => {
    const { id } = useParams() //NEED TO TEST
    const {movieRating} = useSelector(state=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchMovieRating());
    }, []);
    
    const currentRatings = movieRating.filter(rating => String(rating.movieId) === id);

    return (
        <>
        <h1>Rating Details: {id}</h1>
        <pre>{JSON.stringify(currentRatings, null, 2)}</pre>
        </>
    );
};

export default RatingDetail;