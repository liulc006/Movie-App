import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';
import Profile from './Profile';
import { connect, useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchOnlineUsers } from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import Nav from './Nav';

const App = ()=> {
  const { auth, onlineUsers } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
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
      </Routes>
    </div>
  );
};

export default connect(
  state => state
)(App);
