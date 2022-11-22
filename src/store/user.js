import axios from 'axios';

const users = (state=[], action ) =>{
    if(action.type === 'FETCH_USER'){
        return action.users;
    }
    return state;
};

export const fetchUsers = () => {
    return async(dispatch) => {
        const response = await axios.get('/api/users');
        dispatch({type: 'FETCH_USER', users: response.data});
    }
}

export default users;