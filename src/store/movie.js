import axios from 'axios';

const movie = (state=[], action ) =>{
    if(action.type === 'FETCH_MOVIE'){
        return action.movie;
    }
    return state;
};

export const fetchMovie = () => {
    return async(dispatch) => {
        const response = await axios.get('/api/movie');
        dispatch({type: 'FETCH_MOVIE', movie: response.data});
    }
}

export default movie;