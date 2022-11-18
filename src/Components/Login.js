import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';
import { TextField, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = ()=> {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const onChange = ev => {
    setCredentials({...credentials, [ ev.target.name ]: ev.target.value });
  };

  const login = (ev)=> {
    ev.preventDefault();
    dispatch(attemptLogin(credentials));
  };
  return (
    <Box sx={{maxWidth: 300, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h2>Login</h2>
      <form>
        <TextField id="username" label="Username" variant="outlined" 
          value = { credentials.username }
          onChange = { onChange }
          name = 'username'
        />
        <TextField id="password" label="Password" variant="outlined" 
          value={ credentials.password }
          onChange = { onChange }
          name = 'password'
        />
        <Button variant='contained' onClick={login}>Login</Button>
      </form>
      <Link to='/register'>Register</Link>
    </Box>
  );
};

export default Login;
