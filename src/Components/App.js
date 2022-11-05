import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Profile from './Profile';
import { connect, useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart } from '../store';
import { Link, Routes, Route } from 'react-router-dom';

class App extends React.Component{
  componentDidUpdate(prevProps){
    if(prevProps.auth.id && !this.props.auth.id){
      window.socket.close();
    }
    if(!prevProps.auth.id && this.props.auth.id){
      window.socket = io();
      window.socket.emit('auth', window.localStorage.getItem('token'));
      window.socket.on('userEntered', user => {
        console.log(user.username);
      });
      window.socket.on('userLeft', user => {
        console.log(user.username);
      });
    }
  }
  render(){
    return <_App />;
  }
}

const _App = ()=> {
  const { auth } = useSelector(state => state);
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
      <h1>Acme Shopping</h1>
      {
        auth.id ? <Home /> : <Login />
      }
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/cart'>Cart</Link>
              <Link to='/profile'>Profile</Link>
            </nav>
            <Routes>
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/profile' element={ <Profile /> } />
            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default connect(
  state => state
)(App);
