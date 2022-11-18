import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import { connect, useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchMovie } from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Movie from './Movie';

const App = ()=> {
  const { auth, onlineUsers } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
    dispatch(fetchMovie());
  }, []);

  useEffect(()=> {
    if(auth.id){
      dispatch(fetchCart());
    }
  }, [auth]);
  return (
    <div>
      <h1>Movie App</h1>
      <Nav />
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/profile'>Profile</Link>
            </nav>
          </div>
        )
      }
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/movies' element={<Movie />} />
      </Routes>
    </div>
  );
};

export default connect(
  state => state
)(App);
