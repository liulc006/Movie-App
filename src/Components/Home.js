import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import Login from './Login';

const Home = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home Page</h1>

      { auth.id ? 
      <div>
        Welcome { auth.username }!!
        <button onClick={()=> dispatch(logout())}>Logout</button>
        {
          !!auth.avatar && <img src={auth.avatar} />
        }
      </div> : <><p>Not Signed In</p><Login /></>}


    </div>
  );
};

export default Home;
