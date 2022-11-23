import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import { connect, useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchMovie, fetchUsers, fetchMovieRating } from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Movie from './Movie';
import MovieDetail from './MovieDetail';
import Footer from './Footer';
import TvShow from './TvShow';
import TvshowDetail from './TvshowDetail';

const App = ()=> {
  const { auth, onlineUsers } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
    dispatch(fetchMovie());
    dispatch(fetchUsers());
    dispatch(fetchMovieRating);
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
        <Route path='/tvshows' element={<TvShow />} />
        <Route path='/tvshows/:id' element={<TvshowDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default connect(
  state => state
)(App);
