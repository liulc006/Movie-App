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
import MovieDetail from './MovieDetail'

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
      <Nav />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/movies' element={<Movie />} />
        <Route path='/movies/:id' element={<MovieDetail/>} />
      </Routes>
    </div>
  );
};

export default connect(
  state => state
)(App);
