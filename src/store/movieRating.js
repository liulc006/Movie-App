import axios from 'axios';

const movieRating = (state=[], action ) =>{
    if(action.type === 'FETCH_MOVIE_RATING'){
        return action.ratings;
    }
    return state;
};

export const fetchMovieRating = () => {
    return async(dispatch) => {
        const response = await axios.get('/api/movie_ratings');
        dispatch({type: 'FETCH_MOVIE_RATING', ratings: response.data});
    }
};

export default movieRating;