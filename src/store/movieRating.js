import axios from 'axios';

const movieRating = (state=[], action ) =>{
    if(action.type === 'FETCH_MOVIE_RATING'){
        return action.ratings;
    }
    if(action.type === 'ADD_MOVIE_RATING'){
        return [...state, action.rating];
    }
    return state;
};

export const fetchMovieRating = () => {
    return async(dispatch) => {
        const response = await axios.get('/api/movie_ratings');
        dispatch({type: 'FETCH_MOVIE_RATING', ratings: response.data});
    }
};

export const submitMovieRating = ( movieId, star, comment, navigate) => {
    return async(dispatch)=>{
        console.log(movieId, star,comment)
        const token = window.localStorage.getItem('token');
        const response = await axios.post('/api/movie_ratings/addRating', {
             movieId: movieId,
             star: star,
             comment: comment
        },
        {
            headers: {
                authorization: token
            }
        });
        console.log(response)
        dispatch({type: 'ADD_MOVIE_RATING', rating: response.data});
        navigate(`/movies/${movieId}`);
    };
};

export default movieRating;